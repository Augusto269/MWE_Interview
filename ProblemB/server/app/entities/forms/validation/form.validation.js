const validationHelper = require("../../validations/validations.helper");
const commonsController = require('../../commons/controller/commons.controller')

exports.deleteCodeFormValidation = async(req,res,next) => {
    try {
        let validation = []
        let userData = res.locals.userData;
        let idFormGenerate = req.params.idFormGenerate;
        await validationHelper.validationStringLenght(idFormGenerate, 9999999, 0, validation, 'idFormGenerate', userData.language, 24)
        if (validation.length == 0) {
            res.locals.userData = userData;
            res.locals.idFormGenerate = idFormGenerate;
            next()
        } else {
            let errorCode = 412;
            commonsController.error_msg(errorCode, userData.language).then(result => {
                res.status(412).send({
                    errorcode: errorCode,
                    message: result.message,
                    result: [],
                    details: validation
                });
            });
        }
    }
    catch (err) {
        let errorCode = 500;
        commonsController.createRegisterError(err, userData.uuid);
        commonsController.error_msg(errorCode, userData.language).then(result => {
            res.status(500).send({
                errorcode: errorCode,
                message: result.message,
                result: "",
                details: ""
            });
        });
    }
}
exports.CodeFormValidationData = async (req, res, next) => {
    try {
        let validation = []
        let body = req.body;
        let userData = res.locals.userData;
        let CodeFormData = {
            key: body.key,
            value: body.value,
            form_key: body.form_key,
            idFormGenerate: (req.params.CodeForm) ? req.params.CodeForm : null,
        }
        if(CodeFormData.idFormGenerate){await validationHelper.validationNumber(CodeFormData.idFormGenerate, 999999, 0, validation, 'idFormGenerate', userData.language, 24)}
        await validationHelper.validationStringLenght(CodeFormData.key, 35, 3, validation, 'Key', userData.language, 21)
        await validationHelper.validationStringLenght(CodeFormData.value, 100, 4, validation, 'Value', userData.language, 22)
        await validationHelper.validationStringLenght(CodeFormData.form_key, 100, 4, validation, 'Form_key', userData.language, 23)
        if (validation.length == 0) {
            res.locals.userData = userData;
            res.locals.CodeFormData = CodeFormData;
            next()
        } else {
            let errorCode = 4591;
            commonsController.error_msg(errorCode, userData.language).then(result => {
                res.status(412).send({
                    errorcode: errorCode,
                    message: result.message,
                    result: [],
                    details: validation
                });
            });
        }
    }
    catch (err) {
        let errorCode = 500;
        commonsController.createRegisterError(err, userData.uuid);
        commonsController.error_msg(errorCode, userData.language).then(result => {
            res.status(500).send({
                errorcode: errorCode,
                message: result.message,
                result: "",
                details: ""
            });
        });
    }
}

exports.getCodeFormValidation = async (req, res, next) => {
    try {
        let validation = []
        let userData = res.locals.userData;
        let CodeForm = req.params.CodeForm;
        await validationHelper.validationStringLenght(CodeForm, 35, 3, validation, 'CodeForm', userData.language, 21)
        if (validation.length == 0) {
            res.locals.userData = userData;
            res.locals.CodeForm = CodeForm;
            next()
        } else {
            let errorCode = 412;
            commonsController.error_msg(errorCode, userData.language).then(result => {
                res.status(412).send({
                    errorcode: errorCode,
                    message: result.message,
                    result: [],
                    details: validation
                });
            });
        }
    }
    catch (err) {
        let errorCode = 500;
        commonsController.createRegisterError(err, userData.uuid);
        commonsController.error_msg(errorCode, userData.language).then(result => {
            res.status(500).send({
                errorcode: errorCode,
                message: result.message,
                result: "",
                details: ""
            });
        });
    }
}

exports.getServiceProfileValidation = async (req, res, next) => {
    try {
        let validation = []
        let userData = res.locals.userData;
        let uuidServiceType = req.params.uuidServiceType;
        if(uuidServiceType !== 'Otros' && uuidServiceType !== 'Others'){
        await validationHelper.validationUUID(uuidServiceType, validation, 'uuidServiceType', userData.language)}
        if (validation.length == 0) {
            res.locals.userData = userData;
            res.locals.uuidServiceType = uuidServiceType;
            next()
        } else {
            let errorCode = 412;
            commonsController.error_msg(errorCode, userData.language).then(result => {
                res.status(412).send({
                    errorcode: errorCode,
                    message: result.message,
                    result: [],
                    details: validation
                });
            });
        }
    }
    catch (err) {
        let errorCode = 500;
        commonsController.createRegisterError(err, userData.uuid);
        commonsController.error_msg(errorCode, userData.language).then(result => {
            res.status(500).send({
                errorcode: errorCode,
                message: result.message,
                result: "",
                details: ""
            });
        });
    }
}

