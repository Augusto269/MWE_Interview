const appoitmentService = require('../service/appoitment.service')
const commonsController = require("../../commons/controller/commons.controller");
const moment = require("moment")
exports.addNewAppoitment = (req,res) =>{
    try {
        let userData = res.locals.userData;
        let Appoitment = res.locals.Appoitment;
        Appoitment.created_user = userData.uuid;
        Appoitment.createdat = moment();
        Appoitment.delete = false;
        appoitmentService.addNewAppoitment(Appoitment).then(resultAdd => {
          let errorCode = 2000;
          commonsController.error_msg(errorCode, userData.language).then(result => {
            res.status(200).send({
              errorcode: errorCode,
              message: result.message,
              details: [],
              result: resultAdd
            });
          });
        }).catch(err => {
          let errorCode = 500;
          commonsController.createRegisterError(err, userData.uuid);
          commonsController.error_msg(errorCode, userData.language).then(result => {
            res.status(500).send({
              errorcode: errorCode,
              message: result.message,
              details: [],
              result: []
            });
          });
        })
      } catch (err) {
        let errorCode = 500;
        commonsController.createRegisterError(err, userData.uuid);
        commonsController.error_msg(errorCode, userData.language).then(result => {
          res.status(500).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: []
          });
        });
      }
}

exports.getAllTableAppoitment = (req,res) =>{
    try {
        let userData = res.locals.userData;
        appoitmentService.getAllTableAppoitment(idFormGenerate).then(getCodeDatForm => {
          let errorCode = 2000;
          commonsController.error_msg(errorCode, userData.language).then(result => {
            res.status(200).send({
              errorcode: errorCode,
              message: result.message,
              details: [],
              result: []
            });
          });
        }).catch(err => {
          let errorCode = 500;
          commonsController.createRegisterError(err, userData.uuid);
          commonsController.error_msg(errorCode, userData.language).then(result => {
            res.status(500).send({
              errorcode: errorCode,
              message: result.message,
              details: [],
              result: []
            });
          });
        })
      } catch (err) {
        let errorCode = 500;
        commonsController.createRegisterError(err, userData.uuid);
        commonsController.error_msg(errorCode, userData.language).then(result => {
          res.status(500).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: []
          });
        });
      }
}

exports.updatedAppoitment = (req,res) =>{
  try {
      let userData = res.locals.userData;
      let Appoitment = res.locals.Appoitment;
      Appoitment.updated_user = userData.uuid;
      Appoitment.updatedAt = moment();
      appoitmentService.updatedAppoitment(Appoitment).then(resultUpdate => {
        if(!resultUpdate){
          let errorCode = 4000;
          commonsController.error_msg(errorCode, userData.language).then(result => {
            res.status(400).send({
              errorcode: errorCode,
              message: result.message,
              details: [],
              result: []
            });
          });
        }
        let errorCode = 2000;
        commonsController.error_msg(errorCode, userData.language).then(result => {
          res.status(200).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: resultUpdate
          });
        });
      }).catch(err => {
        let errorCode = 500;
        commonsController.createRegisterError(err, userData.uuid);
        commonsController.error_msg(errorCode, userData.language).then(result => {
          res.status(500).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: []
          });
        });
      })
    } catch (err) {
      let errorCode = 500;
      commonsController.createRegisterError(err, userData.uuid);
      commonsController.error_msg(errorCode, userData.language).then(result => {
        res.status(500).send({
          errorcode: errorCode,
          message: result.message,
          details: [],
          result: []
        });
      });
    }
}


exports.deleteAppoitment = (req,res) =>{
  try {
      let userData = res.locals.userData;
      let Appoitment = res.locals.Appoitment;
      let Appoitment = {
        updated_user = userData.uuid,
        updatedAt = moment(),
        delete : true,
      }
      appoitmentService.updatedAppoitment(Appoitment).then(resultUpdate => {
        if(!resultUpdate){
          let errorCode = 4000;
          commonsController.error_msg(errorCode, userData.language).then(result => {
            res.status(400).send({
              errorcode: errorCode,
              message: result.message,
              details: [],
              result: []
            });
          });
        }
        let errorCode = 2000;
        commonsController.error_msg(errorCode, userData.language).then(result => {
          res.status(200).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: resultUpdate
          });
        });
      }).catch(err => {
        let errorCode = 500;
        commonsController.createRegisterError(err, userData.uuid);
        commonsController.error_msg(errorCode, userData.language).then(result => {
          res.status(500).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: []
          });
        });
      })
    } catch (err) {
      let errorCode = 500;
      commonsController.createRegisterError(err, userData.uuid);
      commonsController.error_msg(errorCode, userData.language).then(result => {
        res.status(500).send({
          errorcode: errorCode,
          message: result.message,
          details: [],
          result: []
        });
      });
    }
}

exports.getAllApoinmentDay = (req,res) =>{
  try {
      let userData = res.locals.userData;
      res.locals.Appoitment = Appoitment;
      appoitmentService.getAllApoinmentDay(Appoitment).then(getAllApoinmentDay => {
        let errorCode = 2000;
        //Here I would go the function with the logic to neatly order the response to send it to the front and that it can be taken
        commonsController.error_msg(errorCode, userData.language).then(result => {
          res.status(200).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: getAllApoinmentDay
          });
        });
      }).catch(err => {
        let errorCode = 500;
        commonsController.createRegisterError(err, userData.uuid);
        commonsController.error_msg(errorCode, userData.language).then(result => {
          res.status(500).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: []
          });
        });
      })
    } catch (err) {
      let errorCode = 500;
      commonsController.createRegisterError(err, userData.uuid);
      commonsController.error_msg(errorCode, userData.language).then(result => {
        res.status(500).send({
          errorcode: errorCode,
          message: result.message,
          details: [],
          result: []
        });
      });
    }
}
