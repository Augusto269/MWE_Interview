const express = require("express");
const route = express();
const appoitmentController = require('../controller/appoitment.controller')
const authController = require('../../auth/controller/auth.controller')
const appoitmentValidation = require('../validation/appoitment.validation')
/**
 * @api {get} appoitment/ Get All Table Appoitment
 * @apiGroup Appoitment 
 * @apiName  Get Table all appoitment 
 * @apiSuccess {200} Errrocode:200 message: Array of Table appoitment name
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.get("/",authController.securityMiddleware, appoitmentController.getAllTableAppoitment)

/**
 * @api {post} appoitment/ Add a Appointment Key
 * @apiGroup Appoitment && Admin
 * @apiName  Add a Appointment Key 
 * @apiParam {string}  AppointmentKey
 * @apiParam {array}  AppointmentValue
 * @apiParam {array}  appointment_per_hour
 * @apiSuccess {200} Errrocode:200 message: Succefully Add Table Appointment
 * @apiError {401} Errorcode:4999  message: Not Authorized
 * @apiError {400} Errorcode:4000  message: Table Appointment not found
 * @apiError {412} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.post("/",authController.securityMiddleware,authController.administratorAuth, appoitmentValidation.addNeworUpdatedAppoitment,  appoitmentController.addNewAppoitment)

/**
 * @api {put} appoitment/:AppoitmentKey Updated a Appointment Key
 * @apiGroup Appoitment && Admin
 * @apiName  Updated a Appointment Key 
 * @apiParam  {string}  AppoitmentKey
 * @apiParam {array}  AppointmentValue
 * @apiParam {array}  appointment_per_hour
 * @apiSuccess {200} Errrocode:200 message: Succefully Updated Table Appointment
 * @apiError {401} Errorcode:4999 message: Not Authorized
 * @apiError {400} Errorcode:4004  message: Table Appointment not found
 * @apiError {412} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.put("/:iDAppoitmentKey",authController.securityMiddleware,authController.administratorAuth, appoitmentValidation.addNeworUpdatedAppoitment,appoitmentController.updatedAppoitment)

/**
 * @api {delete} appoitment/:AppoitmentKey Delete a Appointment Key
 * @apiGroup Appoitment && Admin
 * @apiName  Updated a Appointment Key 
 * @apiParam  {string}  AppoitmentKey
 * @apiSuccess {200} Errrocode:200 message: Succefully delete Table Appointment
 * @apiError {401} Errorcode:4999 message: Not Authorized
 * @apiError {400} Errorcode:4004  message: Table Appointment not found
 * @apiError {412} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.delete("/:iDAppoitmentKey",authController.securityMiddleware,authController.administratorAuth, appoitmentValidation.addNeworUpdatedAppoitment,appoitmentController.deleteAppoitment )



/**
 * @api {get} appoitment/:AppoitmentKey Get All Register appoinment of the day 
 * @apiGroup Appoitment
 * @apiName  Get All Register appoinment of the day 
 * @apiParam {string}  AppointmentKey
 * @apiParam {date}  date('DD-MM-YYYY')
 * @apiSuccess {200} Errrocode:200 message: Return array of appoinment of the day
 * @apiError {401} Errorcode:4999  message: Not Authorized
 * @apiError {400} Errorcode:4000  message: Table Appointment not found
 * @apiError {412} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.get("/calenders/:AppoitmentKey/:date",authController.securityMiddleware , appoitmentValidation.getAllApoinmentDay, appoitmentController.getAllApoinmentDay )

/**
 * @api {post} appoitment/:AppoitmentKey Add Register appoinment of the day 
 * @apiGroup Appoitment
 * @apiName  Add Register appoinment of the day 
 * @apiParam {string}  AppointmentKey
 * @apiParam {date}  date ('DD-MM-YYYY')
 * @apiParam {string}  hour ('HH:MM')
 * @apiSuccess {200} Errrocode:200 message: Suceffuly
 * @apiError {401} Errorcode:4999  message: Not Authorized
 * @apiError {400} Errorcode:4000  message: Table Appointment not found
 * @apiError {412} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.post("/calenders/:AppoitmentKey/:date",authController.securityMiddleware )

/**
 * @api {post} appoitment/:AppoitmentKey Add Register appoinment of the day 
 * @apiGroup Appoitment && Admin
 * @apiName  Add Register appoinment of the day 
 * @apiParam {string}  AppointmentKey
 * @apiParam {date}  date ('DD-MM-YYYY')
 * @apiParam {string}  hour ('HH:MM')
 * @apiParam {string}  User (uuid)
 * @apiSuccess {200} Errrocode:200 message: Suceffuly
 * @apiError {401} Errorcode:4999  message: Not Authorized
 * @apiError {400} Errorcode:4000  message: Table Appointment not found
 * @apiError {412} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.post("/calenders/:AppoitmentKey/:date",authController.securityMiddleware,authController.administratorAuth, )

/**
 * @api {put} appoitment/:AppoitmentKey Updated Register appoinment of the day 
 * @apiGroup Appoitment
 * @apiName  Add Register appoinment of the day 
 * @apiParam {string}  AppointmentKey
 * @apiParam {date}  date ('DD-MM-YYYY')
 * @apiParam {string}  id
 * @apiParam {string}  hour ('HH:MM')
 * @apiSuccess {200} Errrocode:200 message: Suceffuly
 * @apiError {401} Errorcode:4999  message: Not Authorized
 * @apiError {400} Errorcode:4000  message: Table Appointment not found
 * @apiError {412} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.put("/calenders/:AppoitmentKey/:date/:id",authController.securityMiddleware )

/**
 * @api {delete} appoitment/:AppoitmentKey Delete Register appoinment of the day 
 * @apiGroup Appoitment 
 * @apiName  Delete Register appoinment of the day 
 * @apiParam {string}  AppointmentKey
 * @apiParam {date}  date ('DD-MM-YYYY')
 * @apiParam {string}  hour ('HH:MM')
 * @apiParam {string}  id
 * @apiSuccess {200} Errrocode:200 message: Suceffuly
 * @apiError {401} Errorcode:4999  message: Not Authorized
 * @apiError {400} Errorcode:4000  message: Table Appointment not found
 * @apiError {412} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.delete("/calenders/:AppoitmentKey/:date/:id",authController.securityMiddleware,)
/**
 * @api {delete} appoitment/:AppoitmentKey Delete Register appoinment of the day 
 * @apiGroup Appoitment && Admin
 * @apiName  Delete Register appoinment of the day 
 * @apiParam {string}  AppointmentKey
 * @apiParam {date}  date ('DD-MM-YYYY')
 * @apiParam {string}  hour ('HH:MM')
 * @apiParam {string}  id
 * @apiParam {string}  User (uuid)
 * @apiSuccess {200} Errrocode:200 message: Suceffuly
 * @apiError {401} Errorcode:4999  message: Not Authorized
 * @apiError {400} Errorcode:4000  message: Table Appointment not found
 * @apiError {412} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.delete("/admin/calenders/:AppoitmentKey/:date/:id",authController.securityMiddleware,authController.administratorAuth, )
/**
 * @api {put} appoitment/:AppoitmentKey Delete Register appoinment of the day 
 * @apiGroup Appoitment && Admin
 * @apiName  Delete Register appoinment of the day 
 * @apiParam {string}  AppointmentKey
 * @apiParam {date}  date ('DD-MM-YYYY')
 * @apiParam {string}  hour ('HH:MM')
 * @apiParam {string}  id
 * @apiParam {string}  User (uuid)
 * @apiSuccess {200} Errrocode:200 message: Suceffuly
 * @apiError {401} Errorcode:4999  message: Not Authorized
 * @apiError {400} Errorcode:4000  message: Table Appointment not found
 * @apiError {412} Errorcode:412  message: errorValidation
 * @apiError {500} Errorcode:500  message: Internal Error
 */
route.put("/admin/calenders/:AppoitmentKey/:date/:id",authController.securityMiddleware,authController.administratorAuth, )