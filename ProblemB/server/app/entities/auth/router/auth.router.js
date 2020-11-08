const express = require("express");
const route = express();
const authController = require('../controller/auth.controller')
const authValidation = require('../validation/auth.validation')


/**
 * @api {post} Login User
 * @apiGroup Auth
 * @apiName Login
 * @apiParam {string}  User Email of user
 * @apiParam {string}  pass Password
 * @apiParam {string}  language language
 * @apiSuccess {200} Errrocode:2011 message: succefull login
 * @apiError {400} Errorcode:4102  message: Error 
 * @apiError {412} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.post("/",authValidation.login,authController.makeLogin);



module.exports = route;

