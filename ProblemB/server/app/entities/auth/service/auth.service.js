const dataManager = require("../../../utils/data_manager");

exports.getLogin = function(login) {
  let whereClause = {};
  if (login.user) {
    whereClause["user"] = login.user;
  }
  return dataManager.users
    .findOne({
      where: whereClause
    })
    .then(result => {
      if (result) {
        return result.dataValues;
      } else {
        return false;
      }
    })
};
