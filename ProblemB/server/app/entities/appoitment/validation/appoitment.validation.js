const validationHelper = require("../../validations/validations.helper");
const commonsController = require('../../commons/controller/commons.controller')

exports.addNeworUpdatedAppoitment = async (req, res, next) => {
    try {
        let validation = []
        var body = req.body;
        const Appoitment = {
            key: body.key,
            value: body.value,
            appointment_per_hour : body.appointment_per_hour
        }
        await validationHelper.validationStringLenght(Appoitment.key, 40, 2, validation, 'name', userData.language, 9);
       // await validationHelper.validateArray(appoitment.value, 40, 2, validation, 'lastname', userData.language, 10);
        if (validation.length == 0) {
            res.locals.Appoitment = Appoitment;
            next()
        } else {
            let errorCode = 412;
            commonsController.error_msg(errorCode, 'en').then(result => {
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
        commonsController.error_msg(errorCode, 'en').then(result => {
            res.status(500).send({
                errorcode: errorCode,
                message: result.message,
                result: "",
                details: ""
            });
        });
    }
}



exports.getAllApoinmentDay = async (req, res, next) => {
    try {
        let validation = []
        var params = req.body;
        const Appoitment = {
            AppoitmentKey: params.AppoitmentKey,
            date: body.date,
        }
        await validationHelper.validationStringLenght(Appoitment.AppoitmentKey, 40, 2, validation, 'AppoitmentKey', userData.language, 12);
        await validationHelper.validationTime(Appoitment.AppoitmentKey, validation, 'date', userData.language, 13)
       // await validationHelper.validateArray(appoitment.value, 40, 2, validation, 'lastname', userData.language, 10);
        if (validation.length == 0) {
            res.locals.Appoitment = Appoitment;
            next()
        } else {
            let errorCode = 412;
            commonsController.error_msg(errorCode, 'en').then(result => {
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
        commonsController.error_msg(errorCode, 'en').then(result => {
            res.status(500).send({
                errorcode: errorCode,
                message: result.message,
                result: "",
                details: ""
            });
        });
    }
}