const { where } = require("sequelize/types");
const dataManager = require("../../../utils/data_manager");


exports.getAllTableAppoitment = function() {
    let tables = []
    let whereClause = {};
    whereClause["delete"] = false
    return dataManager.profiles.Appoitment_Table({
        where: whereClause
    }).then(result => {
        result.forEach(result_profile => {
            Atable={
                idAppoitment: result_profile.dataValues.idAppoitment,
                key: result_profile.dataValues.key,
                value: result_profile.dataValues.value,

            }
            tables.push(Atable)
        });
        return tables
    })
}
exports.getAllApoinmentDay = function(Appoitment) {
    let Appoitments = []
    let whereClause = {};
    whereClause["delete"] = false
    whereClause["date"] = Appoitment.date;
    whereClause["appoitmentKey"] = Appoitment.AppoitmentKey;
    return dataManager.profiles.Appoitment_Table({
        where: whereClause
    }).then(result => {
        result.forEach(result_appoitment => {
            Appoitment={
                uuidAppoitment: result_appoitment.dataValues.uuidAppoitment,
                hour: result_appoitment.dataValues.hour,
                user: result_appoitment.dataValues.user,
            }
            Appoitment.push(Appoitment)
        });
        return Appoitments
    })
}

exports.addNewAppoitment = (newAppoitment) => {
    return dataManager.Appoitment_Table.create(newAppoitment).then(result=>{
        return result
    })
}

exports.updatedAppoitment = (updatedAppoitment) => {
    let whereClause = {};
    whereClause["key"] = updatedAppoitment.key;
    delete updatedAppoitment.id;
    if(Object.entries(whereClause).length === 0  || !whereClause.key ){throw new Error("Clausule empty on updateFormData")}
    return dataManager.form_generate.update(updatedAppoitment, { where: whereClause }).then(result=>{
        return result
    })
}