const dataManager = require("../../../utils/data_manager");

exports.updateFormData = (CodeForm) => {
    let whereClause = {};
    whereClause["key"] = CodeForm.key;
    whereClause["idFormGenerate"] = CodeForm.idFormGenerate;
    delete CodeForm.id;
    if(Object.entries(whereClause).length === 0  || !whereClause.key ){throw new Error("Clausule empty on updateFormData")}
    return dataManager.form_generate.update(CodeForm, { where: whereClause }).then(result=>{
        return result
    })
}

exports.createFormData = (CodeFormData) => {
    return dataManager.form_generate.create(CodeFormData).then(result=>{
        return result
    })
}
exports.deleteFormDataLogic = (idFormGenerate) =>{
    let whereClause = {};
    whereClause["idFormGenerate"] = idFormGenerate;
    CodeForm = {delete : true}
    delete CodeForm.id;
    if(Object.entries(whereClause).length === 0  || !whereClause.idFormGenerate ){throw new Error("Clausule empty on updateFormData")}
    return dataManager.form_generate.update(CodeForm, { where: whereClause }).then(result=>{
        return result
    })
}
exports.getCodeFormData = (CodeForm) => {
    let whereClause = {};
    let aCodeFormData = []
    if(CodeForm !== 'all'){whereClause["key"] = CodeForm}
    whereClause["delete"] = false;
    return dataManager.form_generate.findAll({
        where: whereClause,
        order: [
            ['value', 'ASC']
        ],
    }).then(result=>{
        result.map(aResult=>{
            let TmpData = {
                key:aResult.dataValues.key,
                value:aResult.dataValues.value,
                form_key:aResult.dataValues.form_key,
                idFormGenerate: aResult.dataValues.idFormGenerate
            }
            aCodeFormData.push(TmpData)
        })
        return aCodeFormData

    })
}

exports.getAllProfiles = function(id_profile,description,show) {
    let whereClause = {};
    let allProfiles = []
    if(description) {whereClause["description"] = description;}
    if(id_profile) {whereClause["UUID_Profile"] = id_profile;}
    console.log(whereClause);
    return dataManager.profiles.findAll({
        where: whereClause
    }).then(result => {
        result.forEach(result_profile => {
            Aprofile={
                UUID_profile: result_profile.dataValues.UUID_Profile,
                description: result_profile.dataValues.profile_name,
            }
            allProfiles.push(Aprofile)
        });
        return allProfiles
    })
}

exports.getAllProvinces = function () {
    allProvinces = []
    return dataManager.provincias.findAll({
        order: [
            ['name', 'ASC']
        ],
    })
        .then(result => {
            result.forEach(result => {
                Aprovince={
                    name: result.dataValues.name,
                    code: result.dataValues.code,
                    standard: result.dataValues.standard
                }
                allProvinces.push(Aprovince)
            });
            return allProvinces
        })
}
exports.getAllCityes = function (CodeProvince) {
    allCities = []
    let whereClause = {};
    whereClause["code"] = CodeProvince;
    return dataManager.localidades.findAll({
        where: whereClause,
        order: [
            ['name', 'ASC']
        ],
    }).then(result => {
        result.forEach(result => {
            Acity = {
                name: result.dataValues.name,
                code: result.dataValues.code,
                standard: result.dataValues.standard
            }
            allCities.push(Acity)
        });
        return allCities
    })
}