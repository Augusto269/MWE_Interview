const validationHelper = require("../../validations/validations.helper");
const commonsController = require('../../commons/controller/commons.controller')

exports.newUser = async (req, res, next) => {
    try {
        let validation = []
        var body = req.body;
        const newUser = {
            user: body.account,
            password: body.password,
            name: body.name,
            lastname: body.lastname,
            DNI: body.DNI,
            profile: body.Profile,
        }
        await validationHelper.validationEmail(newUser.user, validation, 'user', 'en', 1);
        await validationHelper.validationPassword(newUser.password, validation, 'password', 'en', 2);
        await validationHelper.validationStringLenght(newUser.name, 40, 2, validation, 'name', 'en', 3);
        await validationHelper.validationStringLenght(newUser.lastname, 40, 2, validation, 'lastname', 'en', 4);
        await validationHelper.validationNumber(newUser.DNI, 99999999, 9999999, validation, 'DNI', 'en', 5);
        await validationHelper.validationUUID(newUser.profile, validation, 'Profile', 'en', 6);
        if (validation.length == 0) {
            res.locals.newUser = newUser;
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