const userService = require('../service/user.service')
const commonsController = require('../../commons/controller/commons.controller')
const uuidv4 = require('uuid');

exports.newUser = async (req,res) => {
    try{
        newUser = res.locals.newUser ;
        newUser.password = await commonsController.encriptedPassword(newUser.password);
        newUser.UUID_User = uuidv4();
        newUser.userCreator = 'Testing for new';
        newUser.created_user = 'Testing for new';
        userService.createNewUser(newUser).then(result=>{
            let errorCode = 2500;
            commonsController.error_msg(errorCode, userData.language).then(result => {
              res.status(200).send({
                errorcode: errorCode,
                message: result.message,
                details: [],
                result: []
              });
            })
        }).catch(err=>{
            if(err == 1062){
                let errorCode = 4501;
                commonsController.createRegisterError(err, userData.uuid);
                commonsController.error_msg(errorCode, 'en').then(result => {
                    res.status(400).send({
                        errorcode: errorCode,
                        message: result.message,
                        result: "",
                        details: ""
                    });
                });
            }
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

        })

    }
    catch(err){
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