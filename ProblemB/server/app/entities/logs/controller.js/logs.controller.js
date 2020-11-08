
const commonsServices = require("../service/commons.service");


exports.createRegisterError = function (error, uuid) {
  console.log(error);
  if(error.parent){
  var errorDebug = {
    code: error.parent.code,
    errno: error.parent.errno,
    sqlState: error.parent.sqlState,
    sqlmessage: error.parent.sqlMessage,
    sql: error.parent.sql,
    parameters: (error.parent.parameters) ? error.parent.parameters.toString() : false,
    createduser: uuid
  }}
  else{
    var errorDebug = {
      code: '500',
      errno: '500',
      sqlState: null,
      sqlmessage: 'Error NODEJS',
      sql: error.message,
      parameters: error.stack,
      createduser: uuid
    }
  }
  commonsServices.serviceCreateRegisterError(errorDebug);
}

exports.error_msg = function(error_code, language) {
  console.log(error_code);
  return commonsServices.getErrorMsg(error_code, language)
    .then(result => {
      return result;
    })
    .catch(err => {
      return null;
    });
};

  