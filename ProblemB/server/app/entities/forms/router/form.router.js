const express = require("express");
const route = express();
const formsController = require('../controller/form.controller')
const authController = require('../../auth/controller/auth.controller')
const formValidation = require('../validation/form.validations')
/**
 * @api {get} forms/:CodeForm Get DATA form CodeForm
 * @apiGroup Forms 
 * @apiName  Get all Data For CodeForm
 * @apiSuccess {200} Errrocode:200 message: allData for CodeForm
 * @apiError {400} Errorcode:4000  message: error
 * @apiError {400} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.get("/:CodeForm",authController.securityMiddleware,formValidation.getCodeFormValidation, formsController.getCodeFormData )
/**
 * @api {post} forms/ POST  ADD DATA form CodeForm
 * @apiGroup Forms 
 * @apiName  Add DATA form CodeForm
 * @apiSuccess {200} Errrocode:2023 message: allData for CodeForm
 * @apiError {400} Errorcode:4000  message: error
 * @apiError {400} Errorcode:4111  message: Error Add new 
 * @apiError {400} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.post("/",authController.securityMiddleware,authController.adminAuth, formValidation.CodeFormValidationData, formsController.createCodeFormData )
/**
 * @api {put} forms/all/ Edit DATA form CodeForm
 * @apiGroup Forms 
 * @apiName  Edit  Data For CodeForm
 * @apiSuccess {200} Errrocode:2024 message: allData for CodeForm
 * @apiError {400} Errorcode:4000  message: error
 * @apiError {400} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.put("/:idFormGenerate",authController.securityMiddleware,authController.adminAuth, formValidation.CodeFormValidationData, formsController.updatedCodeFormData )
/**
 * @api {delete} forms/:CodeForm/:idFormGenerate Delete DATA form CodeForm CodeForm = All
 * @apiGroup Forms 
 * @apiName  Delete  Data For CodeForm
 * @apiSuccess {200} Errrocode:2025 message: delete for CodeForm
 * @apiError {400} Errorcode:4000  message: error
 * @apiError {400} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.delete("/:idFormGenerate",authController.securityMiddleware,formValidation.deleteCodeFormValidation, formsController.deleteCodeFormData )

/**
 * @api {get} forms/profile Get All Profile
 * @apiGroup  Admin 
 * @apiName  Get all Profiles
 * @apiSuccess {200} Errrocode:200 message: Profiles
 * @apiError {400} Errorcode:4000  message: error
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.get("/admin/profile",authController.securityMiddleware,authController.adminAuth, formsController.profile )



module.exports = route;