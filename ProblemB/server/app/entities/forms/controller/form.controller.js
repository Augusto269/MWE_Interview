const formsService = require('../service/form.service')
const commonsController = require("../../commons/controller/commons.controller");
const moment = require("moment");

exports.deleteCodeFormData = function( req, res) {
  try {
    let userData = res.locals.userData;
    let idFormGenerate = res.locals.idFormGenerate;
    formsService.deleteFormDataLogic(idFormGenerate).then(getCodeDatForm => {
      let errorCode = 2025;
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

exports.updatedCodeFormData = function (req, res) {
  try {
    let userData = res.locals.userData;
    let CodeFormData = res.locals.CodeFormData;
    CodeFormData.updated_user = userData.uuid;
    CodeFormData.updatedat = moment();
    CodeFormData.delete = false;
    formsService.updateFormData(CodeFormData).then(codeForm => {
      let errorCode = 2024;
      commonsController.error_msg(errorCode, userData.language).then(result => {
        res.status(200).send({
          errorcode: errorCode,
          message: result.message,
          details: [],
          result: [],
        });
      });
    }).catch(err => {
      if (!err.parent) {
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
      } else {
        let errorCode = 4111;
        commonsController.createRegisterError(err, userData.uuid);
        commonsController.error_msg(errorCode, userData.language).then(result => {
          res.status(400).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: []
          });
        });
      }
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

exports.createCodeFormData = function (req, res) {
  try {
    let userData = res.locals.userData;
    let CodeFormData = res.locals.CodeFormData;
    CodeFormData.created_user = userData.uuid;
    CodeFormData.createdat = moment();
    CodeFormData.delete = false;
    formsService.createFormData(CodeFormData).then(codeForm => {
      let errorCode = 2023;
      commonsController.error_msg(errorCode, userData.language).then(result => {
        res.status(200).send({
          errorcode: errorCode,
          message: result.message,
          details: [],
          result: [],
        });
      });
    }).catch(err => {
      if (err.parent) {
        let errorCode = 4111;
        commonsController.createRegisterError(err, userData.uuid);
        commonsController.error_msg(errorCode, userData.language).then(result => {
          res.status(400).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: []
          });
        });
      } else {
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

exports.getCodeFormData = function (req, res) {
  try {
    let userData = res.locals.userData;
    let CodeForm = res.locals.CodeForm;
    formsService.getCodeFormData(CodeForm).then(getCodeDatForm => {
      let errorCode = 200;
      commonsController.error_msg(errorCode, userData.language).then(result => {
        res.status(200).send({
          errorcode: errorCode,
          message: result.message,
          details: [],
          result: getCodeDatForm
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

exports.profile = function (req, res) {
  try {
    let userData = res.locals.userData;
    formsService.getAllProfiles(null,null,true).then(allProfiles => {
      let errorCode = 200;
      commonsController.error_msg(errorCode, userData.language).then(result => {
        res.status(200).send({
          errorcode: errorCode,
          message: result.message,
          details: [],
          result: allProfiles
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

