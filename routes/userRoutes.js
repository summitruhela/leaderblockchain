let userRoutes=require('express').Router()
let userHandler=require('../fileHandler/userHandler.js')
let func=require('../fileHandler/function.js')

userRoutes.post('/signUp',userHandler.signUp);
userRoutes.post('/inputCodeVerfication',func.jwtVerify,userHandler.inputCodeVerfication);
userRoutes.post('/resendEmailOtp',func.jwtVerify,userHandler.resendEmailOtp);
userRoutes.post('/resendMobileOtp',func.jwtVerify,userHandler.resendMobileOtp);
userRoutes.post('/enableFingerPrintTouch',func.jwtVerify,userHandler.enableFingerPrintTouch);
userRoutes.post('/enableFaceDetection',func.jwtVerify,userHandler.enableFaceDetection);
userRoutes.post('/accountDetails',func.jwtVerify,userHandler.accountDetails);
userRoutes.post('/accoutnDetailsSendOtp',func.jwtVerify,userHandler.accoutnDetailsSendOtp);
userRoutes.post('/accountDetailsSaveChanges',func.jwtVerify,userHandler.accountDetailsSaveChanges);
userRoutes.post('/Askquery',func.jwtVerify,userHandler.Askquery);
userRoutes.post('/SigninHistory',func.jwtVerify,userHandler.SigninHistory);
userRoutes.post('/signin',userHandler.signin);
userRoutes.post('/userForgotpassword',userHandler.userForgotpassword);
userRoutes.post('/twoFA',func.jwtVerify,userHandler.twoFA);
userRoutes.post('/addToken',func.jwtVerify,userHandler.addToken);
userRoutes.post('/twoFAByPassphrase',func.jwtVerify,userHandler.twoFAByPassphrase);
userRoutes.post('/showToken',func.jwtVerify,userHandler.showToken);
userRoutes.post('/walletHistory',func.jwtVerify,userHandler.walletHistory);
userRoutes.post('/changeCurrency',func.jwtVerify,userHandler.changeCurrency);
userRoutes.post('/fingerPrintVerify',func.jwtVerify,userHandler.fingerPrintVerify);
userRoutes.post('/faceVerify',func.jwtVerify,userHandler.faceVerify);
userRoutes.post('/logout',func.jwtVerify,userHandler.logout);
userRoutes.post('/userSearchToken',func.jwtVerify,userHandler.userSearchToken);
userRoutes.get('/termOfUse',func.jwtVerify,userHandler.termOfUse);
userRoutes.get('/faq',func.jwtVerify,userHandler.faq);

userRoutes.get('/showTokenAdmin/:_id',func.jwtVerify,userHandler.showTokenAdmin);//get _id in params
userRoutes.post('/updateEmailOrPhone',userHandler.updateEmailOrPhone);



userRoutes.post('/test',userHandler.test);
userRoutes.post('/test1',userHandler.test1);




module.exports=userRoutes;