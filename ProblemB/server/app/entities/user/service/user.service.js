const moment  = require('moment');
const dataManager = require('../../../utils/data_manager')


exports.createNewUser = (newUser) => {
    newUser.createdAt = moment();
    return dataManager.users.create(newUser).then(result => {
        return result;
      })
}

exports.updateUser = function (updateUserData, uuid) {
  let whereClause = {};
  whereClause["uuid"] = uuid;
  if(updateUserData && uuid){
    return dataManager.user.update(updateUserData, { where: whereClause }).then(result => {
      return result
    });
  }else{
    return false
  }  
};