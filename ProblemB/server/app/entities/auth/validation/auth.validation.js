const validationHelper  = require("../../validations/validations.helper");
const commonsController = require('../../commons/controller/commons.controller')

exports.login = async (req,res,next) =>{
    try {
        let validation = []
        var body = req.body;
        const makeLogin = {
            user: body.user,
            pass: body.pass,
            language: body.language
        }
    await validationHelper.validationEmail(makeLogin.user,validation,'user','en')
    await validationHelper.validationPassword(makeLogin.pass,validation,'pass','en')
    await validationHelper.validationLanguage(makeLogin.language,1,validation,'language','en')
    if(validation.length == 0){
        res.locals.makeLogin = makeLogin;
        next()
    }else{
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
        commonsController.createRegisterError(err, 'No Logging');
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