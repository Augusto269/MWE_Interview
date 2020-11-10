const express = require("express");
const route = express();
const userController = require('../controller/user.controller');
const userValidation = require('../validation/user.validation');

/**
 * @api {post} user Created New User
 * @apiGroup Admin  && User
 * @apiName Created New User
 * @apiParam {string}  Account Email of user
 * @apiParam {string}  Password Password
 * @apiParam {string}  Name name of the user
 * @apiParam {string}  LastName Lastname of the user
 * @apiParam {string}  DNI DNI
 * @apiParam {string}  Profile UUID
 * @apiSuccess {200} Errrocode:2011 message: succefull created
 * @apiError {401} Errorcode:499  message: Not Authorized
 * @apiError {400} Errorcode:4102  message: Error user alredy exist
 * @apiError {412} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.post("/admin/newUser", userValidation.newUser, userController.newUser);



module.exports = route;

