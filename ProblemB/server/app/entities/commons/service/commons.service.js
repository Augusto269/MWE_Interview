const dataManager = require('../../../utils/data_manager')
const moment = require("moment");


exports.getValidationError = (error_validation_number,language) =>{
    let whereClause = {};
    whereClause['error_validation_number'] = error_validation_number;
    whereClause['language'] = language;
    return dataManager.error_validation.findOne({where:whereClause}).then(result=>{
        if(result.dataValues){
            return result.dataValues
        }
        return null
    })
}


exports.getErrorMsg = function(error_code, language){
    let whereClause = {};
    if(error_code){ whereClause['error_code'] = error_code;}
    if(language){whereClause['language'] = language;}
    return dataManager.error_msg.findAll({
        where: whereClause
    }).then(result => {
        return result[0].dataValues;
    })
}