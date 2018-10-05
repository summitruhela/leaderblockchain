let adminRoutes = require('express').Router()
let adminHandler = require('../fileHandler/adminHandler.js')
let Auth_fuct = require('../fileHandler/TOKEN')

// adminRoutes.post('/login', adminHandler.login);
// adminRoutes.post('/forgot', adminHandler.forgot);
// adminRoutes.get('/getProfile', Auth_fuct.verifyToken, adminHandler.getProfile);
// adminRoutes.post('/updateProfile', Auth_fuct.verifyToken, adminHandler.updateProfile);
// adminRoutes.post('/changePassword', Auth_fuct.verifyToken, adminHandler.changePassword);
// adminRoutes.post('/resetPassword', adminHandler.resetPassword);
// adminRoutes.post('/logout', adminHandler.logout);
// adminRoutes.post('/addAnnouncement', Auth_fuct.verifyToken, adminHandler.addAnnouncement);
// adminRoutes.post('/editAnnouncement', Auth_fuct.verifyToken, adminHandler.editAnnouncement);
// adminRoutes.get('/getAllAnnouncement', Auth_fuct.verifyToken, adminHandler.getAllAnnouncement);
// adminRoutes.post('/announcementInfo', Auth_fuct.verifyToken, adminHandler.announcementInfo);
// adminRoutes.post('/deleteAnnouncement', Auth_fuct.verifyToken, adminHandler.deleteAnnouncement);
// adminRoutes.post('/removeUser', Auth_fuct.verifyToken, adminHandler.removeUser);
// adminRoutes.post('/editUser', Auth_fuct.verifyToken, adminHandler.editUser);
// adminRoutes.post('/deleteUser', Auth_fuct.verifyToken, adminHandler.deleteUser);
// adminRoutes.post('/commision', Auth_fuct.verifyToken, adminHandler.commision);
// adminRoutes.post('/getUserList', Auth_fuct.verifyToken, adminHandler.getUserList);
// adminRoutes.post('/getUserListNew',Auth_fuct.verifyToken,adminHandler.getUserListNew);
// adminRoutes.post('/changeStatus', Auth_fuct.verifyToken, adminHandler.changeStatus);
// adminRoutes.get('/countUser', Auth_fuct.verifyToken, adminHandler.countUser);
// adminRoutes.post('/getUserInfo', Auth_fuct.verifyToken, adminHandler.getUserInfo);
// adminRoutes.get('/countAnnouncement', Auth_fuct.verifyToken, adminHandler.countAnnouncement);
// adminRoutes.post('/userTransactionHistory', Auth_fuct.verifyToken, adminHandler.userTransactionHistory);
// adminRoutes.post('/userDeviceHistory/:walletAddress', Auth_fuct.verifyToken, adminHandler.userDeviceHistory);
// adminRoutes.post('/getAnnouncementUserList', Auth_fuct.verifyToken, adminHandler.getAnnouncementUserList);




adminRoutes.post('/login',adminHandler.login);
 adminRoutes.post('/forgot',adminHandler.forgot);
 adminRoutes.get('/getProfile',adminHandler.getProfile);
 adminRoutes.post('/updateProfile',adminHandler.updateProfile);
 adminRoutes.post('/changePassword',adminHandler.changePassword);
 adminRoutes.post('/resetPassword',adminHandler.resetPassword);
 adminRoutes.post('/logout',adminHandler.logout);
 adminRoutes.post('/addAnnouncement',adminHandler.addAnnouncement);
 adminRoutes.post('/editAnnouncement',adminHandler.editAnnouncement);
 adminRoutes.get('/getAllAnnouncement',adminHandler.getAllAnnouncement);
 adminRoutes.post('/announcementInfo',adminHandler.announcementInfo);
 adminRoutes.post('/deleteAnnouncement',adminHandler.deleteAnnouncement);
 adminRoutes.post('/removeUser',adminHandler.removeUser);
 adminRoutes.post('/editUser',adminHandler.editUser);
 adminRoutes.post('/deleteUser',adminHandler.deleteUser);
 adminRoutes.post('/commision',adminHandler.commision);
 adminRoutes.post('/getUserList',adminHandler.getUserList);
 adminRoutes.post('/getUserListNew',adminHandler.getUserListNew);
 adminRoutes.post('/changeStatus',adminHandler.changeStatus);
 adminRoutes.get('/countUser',adminHandler.countUser);
 adminRoutes.post('/getUserInfo',adminHandler.getUserInfo);
 adminRoutes.get('/countAnnouncement',adminHandler.countAnnouncement);
adminRoutes.post('/userTransactionHistory',adminHandler.userTransactionHistory);
adminRoutes.post('/userDeviceHistory/:walletAddress',adminHandler.userDeviceHistory);
adminRoutes.post('/getAnnouncementUserList', adminHandler.getAnnouncementUserList);



module.exports = adminRoutes;