const mongoose = require('mongoose')
const db = mongoose.connection;
const commonfunction = require('../commonFile/commonFunction')
// const config = require('../config/')
const Admin = mongoose.Schema({
    userName: {
        type: String,
        default:"Mobiloitte"
    },
    mobileNumber:{
    type:String,
    default:"8273242159"
    },
    address:{
     type:String
    },
    email: {
        type: String,
    },
    password: {
        type: String,
    
    },
    lastLogin: {
        type: String,
        default:new Date()
    },
    token: {
        type: String
    },
    status: {
        type: String,
        enum: ["ACTIVE", "INACTIVE"],
        default: "ACTIVE"
    }
})

const AdminModel = mongoose.model('admin', Admin, 'admin');
module.exports = AdminModel;

AdminModel.find({}, (err, result) => {
    if (err) {
        console.log("err====>>", err)
    }
    else if (result.length < 1) {
        commonfunction.createHash("Admin@123", (err, hash) => {
            new AdminModel({ email: "me-shreya@mobiloitte.com", password: hash }).save((err, result) => {
                if (err) {
                    console.log("Error in saving user details.", err)
                }
                else {
                    console.log("Successfullly added admin details.")
                }
            })
        })
    }
})

