const mongoose = require('mongoose')
var Web3 = require('web3');
// var web3 = new Web3(Web3.givenProvider || 'https://ropsten.infura.io/1c7b730f883e44f39134bc8a680efb9f');
var web3 = new Web3(Web3.givenProvider || 'https://mainnet.infura.io');
var Accounts = require('web3-eth-accounts');
// var accounts = new Accounts('https://ropsten.infura.io/');
var accounts = new Accounts('https://mainnet.infura.io/');
let admin = require('../models/admin.js')
let User = require('../models/user.js')
let staticContent = require('../models/staticContentModel.js')
let tokenList = require('../models/tokenList.js')
let func = require('../fileHandler/function.js')
let eth = require('../fileHandler/eth.js')
let Askquery = require('../models/query.js')
let each = require('async-each-series')
var fs = require('fs')
let Tx = require('ethereumjs-tx')
var abiArray = JSON.parse(fs.readFileSync('abi.json', 'utf-8'))
var BigNumber = require('bignumber.js')
const numberToBN = require('number-to-bn')
module.exports = {

    signUp: (req, res) => {
        if (!req.body.email || !req.body.userName || !req.body.mobileNumber || !req.body.password || !req.body.deviceId) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        User.findOne({
            email: req.body.email,
            status: "ACTIVE"
        }, (no, yes) => {
            if (no) {
                return func.responseHandler(res, 400, "Internal Server Error.")
            } else if (yes) {
                return func.responseHandler(res, 400, "Email-ID is alredy Exist.")
            } else {
                func.createPass((err1, passphrase) => {
                    if (err1) {
                        console.log("err111===>>>", err1)
                    } else {
                        func.bcrypt(req.body.password, (err2, bcrPassword) => {
                            if (err2) {
                                console.log("err22=>", err2)
                            } else {
                                var random = Math.floor(100000 + Math.random() * 900000)
                                func.sendHtmlEmail(req.body.email, "Leader Developer", null, "" + "<b> <h3 > <h3> <b>" + random, null, null, req.body.userName, (err3, emailOtp) => {
                                    if (err3) {
                                        console.log("err33=>", err3)
                                    } else {
                                        console.log("otp for email====>", random)
                                        var mobileOtp = Math.floor(100000 + Math.random() * 900000)
                                        func.sendMessageNexmo(req.body.mobileNumber, mobileOtp, (err4, mobileOtp) => {
                                            if (err4) {
                                                console.log("err4444===>>>", err4)
                                            } else {
                                                console.log("otp for mobile====>", mobileOtp)
                                                eth.createWallet(req.body.password, (err5, wallet) => {
                                                    if (err5) {
                                                        return func.responseHandler(res, 400, "Internal server error555.")
                                                    } else {
                                                        console.log("======>>>", wallet)
                                                        var objJWT = {
                                                             email:req.body.email,
                                                             passphrase:passphrase,
                                                             number:req.body.mobileNumber,
                                                             password:bcrPassword
                                                        }
                                                        func.jwt(objJWT,(err6, jwtToken) => {
                                                            if (err6) {
                                                                return func.responseHandler(res, 400, "Internal server error6666.")
                                                            } else {
                                                                console.log("jwt token", jwtToken)
                                                                var obj = {
                                                                    email: req.body.email,
                                                                    userName: req.body.userName,
                                                                    mobileNumber: req.body.mobileNumber,
                                                                    password: bcrPassword,
                                                                    passphrase: passphrase,
                                                                    emailOtp: random,
                                                                    mobileOtp: mobileOtp,
                                                                    walletAddress: wallet.address,
                                                                    privateKey: wallet.privateKey
                                                                }

                                                                new User(obj).save((err8, result8) => {
                                                                    if (err8) {
                                                                        return func.responseHandler(res, 400, "Internal Server Error.")
                                                                    } else {
                                                                        console.log("in success")
                                                                        delete obj['privateKey']
                                                                        delete obj['password']
                                                                        // delete obj['emailOtp']
                                                                        // delete obj['mobileOtp']

                                                                        obj["jwt"] = jwtToken
                                                                        // delete obj[data]
                                                                        return func.responseHandler(res, 200, "Success.", obj)
                                                                    }
                                                                })
                                                            }
                                                        })

                                                    }
                                                })

                                            }
                                        })

                                    }
                                })
                            }
                        })

                    }
                })
            }
        })


    },
    // page 15--->>>     input code verification verify to user email otp on email and mobile.........................
    inputCodeVerfication: (req, res) => {
        if (!req.body.emailOtp || !req.body.mobileOtp || !req.body.email || !req.body.walletAddress || !req.body.location || !req.body.deviceId) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }

        var obj = {
            deviceId: req.body.deviceId,
            signInTime: Date.now(),
            location: req.body.location,
            status: "signIn",
            signOutTime: 0
        }
        var query = {
            email: req.body.email,
            walletAddress: req.body.walletAddress,
            emailOtp: req.body.emailOtp,
            mobileOtp: req.body.mobileOtp
        }
        var obj1 = {
            $addToSet: {
                deviceId: req.body.deviceId
            },
            $push: {
                signInHistoryArray: {
                    $each: [obj],
                    $position: 0
                }
            },
            $set: {
                status: "ACTIVE"
            }
        }
        User.findOneAndUpdate(query, obj1, {
            new: true
        }, (err, result) => {
            console.log("err,result", err, result)
            if (err) {
                // console.log("result===>>>>".result)
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (result) {
                console.log("result===>>>>".result)
                return func.responseHandler(res, 200, "Success.")
            } else {
                return func.responseHandler(res, 401, "Invalid Credentials.")
            }
        })
    },
    // page-->>15    resend otp on email....................................................................................................
    resendEmailOtp: (req, res) => {
        if (!req.body.email || !req.body.walletAddress) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        let random = Math.floor(100000 + Math.random() * 900000)
        console.log("random===>>>", random)
        func.sendEmail(req.body.email, null, null, "" + "<b> YOUR ANZEN OTP is <b>" + random, null, null, (err1, emailOtp) => {
            if (err2) {
                console.log("err in sending otp on mobile ")
            } else {
                console.log("mobile otp success==>>", emailOtp)
            }
        })

        User.findOneAndUpdate({
            walletAddress: req.body.walletAddress,
            email: req.body.email
        }, {
            $set: {
                "emailOtp": random
            }
        }, (err, result) => {
            console.log("err==result===>>", err, result)
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else {
                return func.responseHandler(res, 200, "Success.")
            }
        })
    },
    // page-->>15    resend otp on mobile....................................................................................................
    resendMobileOtp: (req, res) => {
        if (!req.body.email || !req.body.walletAddress || !req.body.mobileNumber) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        let otp = Math.floor(100000 + Math.random() * 900000)
        console.log("otp===>>>", otp)
        func.sendMessageNexmo(req.body.mobileNumber, otp, (err2, mobileOtp) => {
            if (err2) {
                console.log("err in sending otp on mobile ")
            } else {
                console.log("mobile otp success==>>", mobileOtp)
            }
        })

        User.findOneAndUpdate({
            walletAddress: req.body.walletAddress,
            email: req.body.email
        }, {
            $set: {
                "mobileOtp": otp
            }
        }, (err, result) => {
            console.log("err==result===>>", err, result)
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else {
                return func.responseHandler(res, 200, "Success.")
            }
        })
    },
    //  page --> 18     .......  enable finger print to sign in in next time ...............................
    enableFingerPrintTouch: (req, res) => {
        if (!req.body.walletAddress || !req.body.email) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        User.findOneAndUpdate({
            walletAddress: req.body.walletAddress,
            email: req.body.email
        }, {
            $set: {
                "fingerPrint": "ON"
            }
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (result) {
                return func.responseHandler(res, 200, "Success.")
            } else {
                return func.responseHandler(res, 404, "Invalid Credentials.")
            }
        })
    },
    //  page --> 19     .......  enable face detection to sign in in next time ...............................
    enableFaceDetection: (req, res) => {
        if (!req.body.walletAddress || !req.body.email) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        User.findOneAndUpdate({
            walletAddress: req.body.walletAddress,
            email: req.body.email
        }, {
            $set: {
                "faceDetection": "ON"
            }
        }, {
            new: true
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (result) {
                return func.responseHandler(res, 200, "Success.")
            } else {
                return func.responseHandler(res, 404, "Invalid Credentials.")
            }
        })
    },
    // page 34---->>    show accont option in setting..................................................
    accountDetails: (req, res) => {
        if (!req.body.walletAddress || !req.body.email) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        User.findOne({
            walletAddress: req.body.walletAddress,
            email: req.body.email
        }, {
            name: 1,
            mobileNumber: 1,
            passphrase: 1,
            email: 1,
            _id: 0
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else {
                return func.responseHandler(res, 200, "Success.", result)
            }
        })
    },
    // page 34--->>> change mobile number and send otp on new number to verify
    accoutnDetailsSendOtp: (req, res) => {
        console.log("req.body===>>", req.body)
        if (!req.body.walletAddress || !req.body.email || !req.body.mobileNumber) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        let otp = Math.floor(100000 + Math.random() * 900000)
        console.log("otp===>>>", otp)
        func.sendMessageNexmo(req.body.mobileNumber, otp, (err2, mobileOtp) => {
            if (err2) {
                console.log("err in sending otp on mobile ")
            } else {
                console.log("mobile otp success==>>", mobileOtp)
            }
        })
        User.findOneAndUpdate({
            walletAddress: req.body.walletAddress,
            email: req.body.email,
        }, {
            $set: {
                "mobileOtp": otp
            }
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (result) {
                return func.responseHandler(res, 200, "Success.")
            } else {
                return func.responseHandler(res, 401, "Invalid credentails.")
            }
        })
    },
    // page 34--->>  Account details check otp is correct or not
    accountDetailsSaveChanges: (req, res) => {
        console.log("jwefbhjwebfjqw")
        if (!req.body.walletAddress || !req.body.email || !req.body.mobileOtp || !req.body.name || !req.body.mobileNumber) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        User.findOneAndUpdate({
            walletAddress: req.body.walletAddress,
            email: req.body.email,
            mobileOtp: req.body.mobileOtp
        }, {
            $set: {
                "mobileNumber": req.body.mobileNumber,
                "name": req.body.name
            }
        }, (err, result) => {
            console.log("err,result===>>", err, result)
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (result) {
                return func.responseHandler(res, 200, "Successfully changed details.")
            } else {
                return func.responseHandler(res, 401, "Invalid credentails.")
            }
        })
    },
    changePassword: (req, res) => {
        if (!req.body.walletAddress || !req.body.email ||!req.body.currentPassword ||!req.body.newPassword) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        User.findOne({
            email: req.body.email,
            walletAddress: req.body.walletAddress
        }, (err, result) => {
            if (err) {
             return func.responseHandler(res, 400, "Internal server error.")
            } else if(!result){
             return func.responseHandler(res, 401, "Invalid credentails.")
            }
            else{
                func.bcryptVerify()
            }
        })

    },
    // page -->>  42 Ask query ...... send mail to admin .................................................
    Askquery: (req, res) => {
        if (!req.body.walletAddress || !req.body.email || !req.body.subject || !req.body.data || !req.body.name) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        var obj = {
            walletAddress: req.body.walletAddress,
            userEmail: req.body.email,
            subject: req.body.subject,
            data: req.body.data,
            name: req.body.name
        }
        admin.findOne({}, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else {
                console.log("result=====>>>", result)
                func.sendEmail(result.email, req.body.subject, req.body.data, null, null, null, (err1, sendEmail) => {
                    if (err1) {
                        console.log("err in sending otp on mobile ")
                    } else {
                        console.log("mobile otp success==>>", sendEmail)
                    }
                })
                // return func.responseHandler(res, 200, "Success.")
                // new Askquery(obj).save((err, result) => {
                //     if (err) {
                //         return func.responseHandler(res, 400, "Internal server error.")
                //     } else {
                //         return func.responseHandler(res, 200, "Success.")
                //     }
                // })
            }
        })
        new Askquery(obj).save((err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.", err)
            } else {
                return func.responseHandler(res, 200, "Success.")
            }
        })
    },
    // page--> 31 ...............to show sigin in history to user when user login 
    SigninHistory: (req, res) => {
        console.log("=====>>>", req.body)
        if (!req.body.walletAddress || !req.body.email) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        let m = req.body.limit || 2
        let n = req.body.page || 1
        User.findOne({
            walletAddress: req.body.walletAddress
        }, (err, result) => {
            console.log("@@@@@@@@@@@@@@@@@@@@@@@", result)
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.", err)
            } else if (!result) {
                return func.responseHandler(res, 404, "Invalid Credentials.")
            } else {
                var result1 = result.signInHistoryArray.slice((n - 1) * m, n * m)
                let final = {
                    data: result1,
                    page: n,
                    limit: m,
                    total: result.signInHistoryArray.length,
                    pages: Math.ceil(result.signInHistoryArray.length / m)
                }
                return func.responseHandler(res, 200, "Success.", final)
            }

        })
    },
    // page -->  2    ................user signin ....................
    signin: (req, res) => {
        if (!req.body.email || !req.body.password || !req.body.deviceId) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        var objJWT = {
            email:req.body.email,
            password:req.body.Password
       }
        console.log("req.body===>>", req.body)
        User.findOne({email: req.body.email},{walletAddress:0,emailOtp:0}).lean().exec((err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (result) {
                func.bcryptVerify(req.body.password, result.password, (err1, result1) => {
                    if (err1) {
                        return func.responseHandler(res, 401, "Invalid credentails.")
                    } else if (result1) {
                        //  to check device if device id is already exit then send otp on mobile for 2 FA
                        User.findOne({
                            $and: [{
                                email: req.body.email
                            }, {
                                deviceId: {
                                    $in: [req.body.deviceId]
                                }
                            }]
                        }, (err1, result1) => {
                            if (err1) {
                                return func.responseHandler(res, 400, "Internal server error1.")
                            }
                            //  when device id not found ....................
                            else if (!result1) {
                               func.jwt(objJWT,(errJwt, jwtToken) => {
                                   if(errJwt){
                                    return func.responseHandler(res, 400, "Error in jwt.")
                                   }
                                   else{
                                    delete result['privateKey']
                                    var final = {
                                        result :result,
                                        jwt : jwtToken
                                    };
                                    return func.responseHandler(res, 200, "Success.", final)
                                   }
                               })
                                
                            } else {
                                //  device Id found then send to otp on user mobile.......................
                                var otp = Math.floor(100000 + Math.random() * 900000)
                                console.log("otp===>>", otp)
                                func.sendMessageNexmo(result.mobileNumber, otp, (err, mobileOtp) => {})
                                User.findOneAndUpdate({
                                    email: req.body.email
                                }, {
                                    $set: {
                                        mobileOtp: otp
                                    }
                                }, {
                                    new: true
                                }).lean().exec((err, result) => {
                                    if (err) {
                                        return func.responseHandler(res, 400, "Internal server error.")
                                    } else {
                                       func.jwt(objJWT,(errJwt, jwtToken) => {
                                           if(errJwt){
                                            return func.responseHandler(res, 400, "Error in jwt.")
                                           }
                                           else{
                                            delete result['privateKey']
                                            var final = {
                                                result :result,
                                                jwt : jwtToken
                                            };

                                            return func.responseHandler(res, 200, "Success.",final)
                                           }
                                       })
                                    }
                                })
                            }
                        })
                    } else {
                        return func.responseHandler(res, 401, "Invalid credentails.")
                    }
                })

            } else {
                return func.responseHandler(res, 401, "Invalid credentails.")
            }
        })

    },
    // verify the finger print .............................................................
    fingerPrintVerify: (req, res) => {
        if (!req.body.fingerUrl || !req.body.email) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        User.findOneAndUpdate({
            email: req.body.email,
            status: "ACTIVE"
        }, {
            $set: {
                fingerPrintUrl: req.body.fingerUrl
            }
        }, {
            new: true
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (!result) {
                return func.responseHandler(res, 401, "No result found.")
            } else {
                return func.responseHandler(res, 200, "Success.")
            }
        })
    },
    //  to verfiy the face detection of use................................................
    faceVerify: (req, res) => {
        if (!req.body.faceUrl || !req.body.email) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        User.findOneAndUpdate({
            email: req.body.email,
            status: "ACTIVE"
        }, {
            $set: {
                faceDetectionUrl: req.body.faceUrl
            }
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (!result) {
                return func.responseHandler(res, 401, "No result found.")
            } else {
                return func.responseHandler(res, 200, "Success.")
            }
        })
    },
    // pag2 ---> forgot password on sign in page
    userForgotpassword: (req, res) => {
        if (!req.body.passphrase || !req.body.newPassword ) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        func.bcrypt(req.body.newPassword, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else {
                User.findOneAndUpdate({
                    passphrase: req.body.passphrase
                }, {
                    $set: {
                        password: result
                    }
                }, {
                    new: true
                }, (err1, result1) => {
                    if (err1) {
                        return func.responseHandler(res, 400, "Internal server error.")
                    } else if (!result1) {
                        return func.responseHandler(res, 401, "Invalid credentails.")
                    } else {
                        return func.responseHandler(res, 200, "Success.")
                    }
                })
            }
        })
    },
    //    page ---> 5 let's start with Anzen ...........................................
    twoFA: (req, res) => {
        if (!req.body.email || !req.body.otp || !req.body.deviceId || !req.body.location) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        var obj = {
            lastDevice: req.body.lastDevice,
            lastSignIn: Date.now(),
            location: req.body.location
        }
        User.findOneAndUpdate({
            email: req.body.email,
            mobileOtp: req.body.otp
        }, {
            $push: {
                signInHistoryArray: obj
            }
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (!result) {
                return func.responseHandler(res, 401, "Invalid credentails.")
            } else {
                return func.responseHandler(res, 200, "Success.")
            }
        })
    },

    twoFAByPassphrase: (req, res) => {
        if (!req.body.passphrase) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        User.findOne({
            passphrase: req.body.passphrase
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (!result) {
                return func.responseHandler(res, 404, "No result Found.")
            } else {
                return func.responseHandler(res, 200, "Success.")
            }
        })

    },
    // Dashboar section of add custom token or ERC token by user & Admin .....................................................
    addToken: (req, res) => {
        console.log("req.body===>", req.body)
        if (!req.body._id || !req.body.tokenAddress || !req.body.addedBy) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        var abi = []
        var tokenAddress = req.body.tokenAddress
        var url = "https://api.ethplorer.io/getTokenInfo/" + tokenAddress + "?apiKey=freekey"
        func.nodeClient(url, (err, result) => {
            // console.log("result=====>>>", result)
            if (result.error) {
                return func.responseHandler(res, 400, result.error)
            } else {
                var abiurl = "https://api.etherscan.io/api?module=contract&action=getabi&address=" + tokenAddress
                func.nodeClient(abiurl, (err, result1) => {
                    if (err) {
                        return func.responseHandler(res, 400, "ERROR", err)
                    } else {
                        console.log("result ===>", result1)
                        if (req.body.addedBy === "USER") {
                            var obj = new tokenList({
                                tokenAddress: tokenAddress,
                                tokenDecimal: result.decimals,
                                tokenSymbol: result.symbol,
                                tokenName: result.name,
                                abi: result1.result,
                                createdBy: req.body._id,
                                status: "Request"
                            })
                        }
                        if (req.body.addedBy === "ADMIN") {
                            var obj = new tokenList({
                                tokenAddress: tokenAddress,
                                tokenDecimal: result.decimals,
                                tokenSymbol: result.symbol,
                                tokenName: result.name,
                                abi: result1.result,
                                createdBy: req.body._id,
                                walletAddress: req.body.walletAddress,
                                status: "Accept"
                            })
                        }
                        tokenList.findOne({
                            createdBy: req.body._id,
                            tokenAddress: req.body.tokenAddress,
                            // status: "Accept"
                        }, (err, result) => {
                            // console.log("result 11111====>>", err,result)
                            if (err) {
                                return func.responseHandler(res, 400, "Internal server error.", err)
                            } else if (!result) {
                                console.log("successss")
                                obj.save((err, result) => {
                                    if (err) {
                                        return func.responseHandler(res, 400, "ERROR", err)
                                    } else {
                                        return func.responseHandler(res, 200, "Sucecess", )
                                    }
                                })
                            } else {
                                return func.responseHandler(res, 400, "Token is already added.", )
                            }
                        })
                    }
                })
            }
        })
    },
    // show token for individual user  **********************   only show added token by particular user .................................
    showToken: (req, res) => {
        var myAddress = req.body.walletAddress
        var finalBalance;
        var finalArray = [];
        var actualPrice = 0;
        let m = req.body.limit || 10
        let n = req.body.page || 1
        if (!req.body.walletAddress || !req.body.userId) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        User.findOne({
            walletAddress: req.body.walletAddress,
            status: "ACTIVE"
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (!result) {
                return func.responseHandler(res, 404, "Invalid credentials.")
            } else {
                // console.log("result===>>", result)
                tokenList.find({
                    createdBy: req.body.userId
                }, (err_, result_) => {
                    if (err_) {
                        return func.responseHandler(res, 400, "Internal server error.")
                    } else {
                        // console.log("result ====>>", result_)
                        each(result_, (ele, next) => {
                            var obj = {}
                            // console.log("calllllll")
                            var abi = JSON.parse(ele.abi)
                            // console.log(" abi ===>>",abi)
                            var contract = new web3.eth.Contract(abi, ele.tokenAddress) //mainnet
                            // var contract = new web3.eth.Contract(abiArray, ele.tokenAddress) //testnet
                            // console.log("contract ===>>>",contract)
                            contract.methods.balanceOf(myAddress).call().then(balance => {
                                // console.log("=========>>>>", balance)
                                // console.log("=====>>>>", balance, ele.tokenDecimal)
                                var toNumber = Number(ele.tokenDecimal)
                                // console.log("to number===>>", toNumber)
                                var finalBalance = Number(new BigNumber(balance).dividedBy(new BigNumber(Math.pow(10, toNumber)))).toFixed(ele.tokenDecimal);
                                // console.log("===========>>>>", finalBalance)
                                //  finalBalance = web3.utils.toHex(finalBalance) 
                                // console.log("balance of " + ele.tokenName + "===>>>>", finalBalance)
                                // console.log("hiiiiiiiiii")
                                var getInfoUrl = "https://api.ethplorer.io/getTokenInfo/" + ele.tokenAddress + "?apiKey=freekey"
                                func.nodeClient(getInfoUrl, (err1, result1) => {
                                    // console.log("result for get token info =====>> ", result1)
                                    if (result1.err) {
                                        // console.log("Error in checking real balance of token  =====>> ", result.error)
                                    } else {

                                        console.log("result of real balance", result1.price)
                                        if (result1.price == false) {
                                            console.log("after get price in if ****************S")
                                            obj.tokenName = 0,
                                                obj.tokenBalance = finalBalance
                                            obj.tokenPrice = 0
                                            obj.amount = 0
                                            finalArray.push(obj)
                                            next();
                                        } else {
                                            url = "http://free.currencyconverterapi.com/api/v5/convert?q=USD_" + result.currency + "&compact=y"
                                            func.nodeClient(url, (err, result2) => {
                                                if (err) {
                                                    console.log("err=====>>", err)
                                                } else {
                                                    //  console.log("after get price in else &&&&&&&&&&&&&&&&&&&&&&")
                                                    //  console.log("***************",result2[("USD_"+result.currency)]["val"])
                                                    //  console.log("==================++>>>>>>",result1.price.rate,finalBalance)
                                                    //  console.log("*********************+>>>>>>",Number(new BigNumber(result1.price.rate).multipliedBy(new BigNumber(5).multipliedBy(new BigNumber(result2[("USD_"+result.currency)]["val"])))))
                                                    //  console.log(new BigNumber((Number(result1.price)).multipliedBy(new BigNumber(finalBalance))))
                                                    obj.tokenName = ele.tokenName,
                                                        obj.tokenBalance = finalBalance
                                                    obj.tokenPrice = result1.price.rate || 5
                                                    obj.amount = Number(new BigNumber(result1.price.rate).multipliedBy(new BigNumber(5).multipliedBy(new BigNumber(result2[("USD_" + result.currency)]["val"]))))
                                                    finalArray.push(obj)
                                                    next();
                                                }
                                            })
                                        }
                                    }
                                })

                            }).catch(err => {
                                //    console.log("Error in checking balance.",err)
                                return func.responseHandler(res, 400, "Returned values aren't valid.", )

                            })
                            // next();
                        }, (err) => {
                            if (err) {
                                console.log("err====>>>", err)
                            } else {
                                console.log("final Array===>>", finalArray)
                                // return;
                                var finalArray1 = finalArray.slice((n - 1) * m, n * m)
                                let final = {
                                    data: finalArray1,
                                    page: n,
                                    limit: m,
                                    total: finalArray.length,
                                    pages: Math.ceil(finalArray.length / m)
                                }
                                return func.responseHandler(res, 200, "Success2.", final)
                            }
                        })
                    }
                })

            }
        })
    },
    //  show token when user search ..........................................................................................
    userSearchToken: (req, res) => {
        if (!req.body.tokenName) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        let options = {
            page: req.body.page || 1,
            limit: 10,
            select: 'tokenAddress tokenDecimal tokenName -_id'
        }
        var query = {
            tokenName: {
                $regex: new RegExp(req.body.tokenName, "ig")
            }
        }
        tokenList.paginate(query, options, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (result.length == 0) {
                return func.responseHandler(res, 404, "No Result Found.")
            } else {
                return func.responseHandler(res, 200, "Success.", result)
            }
        })
    },
    //  this api using custom pagination show transactin history ..............................................................
    walletHistory: (req, res) => {
        var walletAddress = req.body.walletAddress.toLowerCase()
        // console.log("======>>>",walletAddress)
        if (!req.body.walletAddress) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        // custom pagination..........................
        let m = req.body.limit || 10
        let n = req.body.page || 1
        var finalArray = [];
        var historyUrl = "http://api-ropsten.etherscan.io/api?module=account&action=txlist&address=" + walletAddress + "&sort=asc"
        func.nodeClient(historyUrl, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else {
                if (!req.body.status || req.body.status == undefined || req.body.status == null || req.body.status == "all") {
                    var finalArray1 = result.result.slice((n - 1) * m, n * m)
                    let final = {
                        data: finalArray1,
                        page: n,
                        limit: m,
                        total: result.result.length,
                        pages: Math.ceil(result.result.length / m)
                    }
                    return func.responseHandler(res, 200, "Success.", final)
                } else if (req.body.status === "sent") {
                    each(result.result, (ele, next) => {
                        // console.log("in sent user",ele.from,walletAddress ,ele.from == walletAddress)
                        if (ele.from == walletAddress) {
                            finalArray.push(ele)
                            // console.log("final array ===>>", finalArray)
                        }
                        next();
                    }, (err) => {
                        if (err) {
                            throw err;
                        }
                        var finalArray1 = finalArray.slice((n - 1) * m, n * m)
                        let final = {
                            data: finalArray1,
                            page: n,
                            limit: m,
                            total: finalArray.length,
                            pages: Math.ceil(finalArray.length / m)
                        }
                        return func.responseHandler(res, 200, "Success.", final)
                    })

                } else if (req.body.status == "receive") {
                    console.log("in receive")
                    each(result.result, (ele, next) => {
                        // console.log("in receive user",ele.to,walletAddress ,ele.to == walletAddress)
                        if (ele.to == walletAddress) {
                            finalArray.push(ele)
                            // console.log("ele", ele)
                        }
                        next();
                    }, (err) => {
                        if (err) {
                            throw err
                        }
                        var finalArray1 = finalArray.slice((n - 1) * m, n * m)
                        let final = {
                            data: finalArray1,
                            page: n,
                            limit: m,
                            total: finalArray.length,
                            pages: Math.ceil(finalArray.length / m)
                        }
                        return func.responseHandler(res, 200, "Success1.", final)
                    })
                }
            }
        })
    },
    //  change currencny...........................................................................
    changeCurrency: (req, res) => {
        if (!req.body.walletAddress || !req.body.email) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        User.findOneAndUpdate({
            email: req.body.email,
            walletAddress: req.body.walletAddress
        }, {
            $set: {
                currency: req.body.currency
            }
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (!result) {
                return func.responseHandler(res, 404, "Invalid Credentials.")
            } else {
                return func.responseHandler(res, 200, "Success.")
            }
        })
    },
    // Term of use api for dash board
    termOfUse: (req, res) => {
        staticContent.find({}, {
            termsOfUse: 1,
            _id: 0
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.")
            } else if (result.length == 0) {
                return func.responseHandler(res, 404, "No Result Found.")
            } else {
                return func.responseHandler(res, 200, "Success.", result)
            }
        })
    },
    // Term of use api for dash board
    faq: (req, res) => {
        let m = req.body.limit || 10
        let n = req.body.page || 1
        staticContent.find({}, {
            faq: 1,
            _id: 0
        }, (err, result) => {
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.", err)
            } else if (result.length == 0) {
                return func.responseHandler(res, 404, "No Result Found.")
            } else {
                console.log("@@@@@+==>>" + JSON.stringify(result[0].faq))
                var result1 = result[0].faq.slice((n - 1) * m, n * m)
                let final = {
                    data: result1,
                    page: n,
                    limit: m,
                    total: result[0].faq.length,
                    pages: Math.ceil(result[0].faq.length / m)
                }
                return func.responseHandler(res, 200, "Success.", final)
            }
        })
    },
    // page 7 when user login to some new devices.................................................
     updateEmailOrPhone:(req,res)=>{
     if (!req.body.oldEmail) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
      User.findOneAndUpdate({email:req.body.oldEmail},{$set:{email:req.body.newEmail,mobileNumber:req.body.mobileNumber}},(err,result)=>{
        if(err){
return func.responseHandler(res, 400, "Internal server error.", err)
        }
        else if(!result){
                return func.responseHandler(res, 404, "Invalid Credentials.")
        }
        else{
             return func.responseHandler(res, 200, "Success.")
        }
      })
     },


    //  logout api user to save logout history ....................................................
    logout: (req, res) => {
        if (!req.body.walletAddress || !req.body.email || !req.body.deviceId) {
            return func.responseHandler(res, 401, "Parameters missing.")
        }
        let date = Date.now();
        date = date.toString();
        console.log("************", date);
        var query = {
            walletAddress: req.body.walletAddress,
            "signInHistoryArray.status": "signIn"
        }
        var obj = {
            $set: {
                "signInHistoryArray.$.status": "signOut",
                "signInHistoryArray.$.signOutTime": Date.now()
            },
        }
        User.findOneAndUpdate(query, obj, {
            new: true
        }, (err, result) => {
            console.log("@@@@@@@@@@@@@", err, result);
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.", err)
            } else if (!result) {
                return func.responseHandler(res, 404, "Invalid Credentials.")
            } else {
                return func.responseHandler(res, 200, "Success.")
            }
        })
    },
// show token list in admin panel..........................................................................
showTokenAdmin: (req, res) => {
    console.log(req.params)
    let options = {
        page: req.body.page || 1,
        limit: 10,
        select: 'tokenAddress tokenDecimal tokenName -_id'
    }
    if (!req.params._id) {
        return func.responseHandler(res, 401, "Parameters missing.")
    }
    admin.findOne({
        _id: req.params._id
    }, (err, result) => {
        if (err) {
            return func.responseHandler(res, 400, "Internal server error.")
        } else if (!result) {
            return func.responseHandler(res, 404, "Invalid credentials.")
        } else {
            // console.log("result===>>", result)
            tokenList.paginate({} , options, (err_, result_) => {
                if (err_) {
                    return func.responseHandler(res, 400, "Internal server error.")
                } 
                else if(result.length < 1){
                    return func.responseHandler(res, 404, "No Data Found.")
                }
                else {
                    return func.responseHandler(res, 200, "Success.",result_)
                }
            })

        }
    })
},
    test1: (req, res) => {

    },

    test: (req, res) => {

        console.log()
        eth.createWallet("kjkjk", (err5, wallet) => {
            console.log("errrr@@@result=====>",err5,wallet)
        })


        User.findOne({
            walletAddress: "0x0E39A2cDF560cB4fef4E9124F5558dA27Cb8e9da"
        }, (err, result) => {
            console.log(err, result)
            if (err) {
                return func.responseHandler(res, 400, "Internal server error.", err)
            } else if (!result) {
                return func.responseHandler(res, 404, "Invalid Credentials.")
            } else {

                var result1 = result.signInHistoryArray.slice((1 - 1) * 5, 1 * 5)
                let final = {
                    data: result1,
                    page: 1,
                    limit: 5,
                    total: result.signInHistoryArray.length,
                    pages: Math.ceil(result.signInHistoryArray.length / 5)
                }
                return func.responseHandler(res, 200, "Success.", final)
            }
        })

    },

}