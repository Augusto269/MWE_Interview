const commonsServices = require("../commons/service/commons.service");
const moment = require('moment')


exports.validateDate = async (date, validation, field, language) => {
    if (date) {
        if (moment(date).isValid()) {
            return validation
        } else {
            let errorMsg = await commonsServices.getValidationError(19, language)
            let newError = {
                field: field,
                error: `${errorMsg.message}`
            }
            return validation.push(newError)
        }
    } else {
        let errorMsg = await commonsServices.getValidationError(9999, language)
        let newError = {
            field: field,
            error: `${field} ${errorMsg.message}`
        }
        return validation.push(newError)
    }
}

exports.validationLanguage = async (string, length, validation, field) => {
    if (string.length >= length && string !== 'es' && string !== 'en') {
        let errorMsg = await commonsServices.getValidationError(16, 'en')
        let newError = {
            field: field,
            error: `${errorMsg.message}`
        }
        return validation.push(newError)
    }
    return validation


}
exports.validationPassword = async (string, validation, field, language) => {
    var strongRegex = new RegExp("^(?=.*?[0-9])(?=.*?[A-Z])(?=.*?[#?!@.$%^&*\\-_]).{8,}$");
    if (strongRegex.test(string)) {
        return validation
    }
    let errorMsg = await commonsServices.getValidationError(15, language)
    let newError = {
        field: field,
        error: `${errorMsg.message}`
    }
    return validation.push(newError)

}
exports.validationCUIT = async (string, validation, field, language) => {
    let cuit = string.replace(/[^0-9]/g, '');
    if (cuit.length != 11) { verificar = false; }
    else {
        var acumulado = 0;
        var digitos = cuit.split("");
        var digito = digitos.pop();
        for (var i = 0; i < digitos.length; i++) {
            acumulado += digitos[9 - i] * (2 + (i % 6));
        }
        var verif = 11 - (acumulado % 11);
        if (verif == 11) {
            verif = 0;
        }
        if (digito == verif) { verificar = true } else { verificar = false };
    }
    if (verificar) { return cuit }
    else {
        let errorMsg = await commonsServices.getValidationError(8, language)
        let newError = {
            field: field,
            error: `${errorMsg.message}`
        }
        return validation.push(newError);
    }
}

exports.validationStringLenght = async (string, max, min, validation, field, language, errorValidation) => {
    if (string) {
        if (string.length <= max && string.length >= min) {
            return validation
        } else {
            let errorMsg = await commonsServices.getValidationError(errorValidation, language)
            let newError = {
                field: field,
                error: `${errorMsg.message}`
            }
            return validation.push(newError)
        }
    } else {
        let errorMsg = await commonsServices.getValidationError(9999, language)
        let newError = {
            field: field,
            error: `${field} ${errorMsg.message}`
        }
        return validation.push(newError)
    }
}
exports.validationUUID = async (string, validation, field, language) => {
    var strongRegex = new RegExp(/^[0-9a-f]{8}-[0-9a-f]{4}-[0-5][0-9a-f]{3}-[089ab][0-9a-f]{3}-[0-9a-f]{12}$/i);
    if (strongRegex.test(string)) { return validation }
    else {
        let errorMsg = await commonsServices.getValidationError(9, language)
        let newError = {
            field: field,
            error: `${errorMsg.message}`
        }
        return validation.push(newError);
    }
}

exports.validationNumber = async (number, max, min, validation, field, language, errorValidation) => {
    if (number) {
        if (number <= max && number >= min) {
            return validation
        } else {
            let errorMsg = await commonsServices.getValidationError(errorValidation, language)
            let newError = {
                field: field,
                error: `${errorMsg.message}`
            }
            return validation.push(newError)
        }
    } else {
        let errorMsg = await commonsServices.getValidationError(9999, language)
        let newError = {
            field: field,
            error: `${field} ${errorMsg.message}`
        }
        return validation.push(newError)
    }
}
exports.validationEmail = async (email, validation, field, language) => {
    var emailReg = new RegExp(/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/);
    if (email) {
        if (emailReg.test(email)) {
            return validation
        } else {
            let errorMsg = await commonsServices.getValidationError(14, language)
            let newError = {
                field: field,
                error: `${errorMsg.message}`
            }
            return validation.push(newError)
        }
    } else {
        let errorMsg = await commonsServices.getValidationError(9999, language)
        let newError = {
            field: field,
            error: `${field} ${errorMsg.message}`
        }
        return validation.push(newError)
    }
}

exports.validationTrueOrFalse = async (text, validation, field, language) => {
    let string = text.toString();
    if (string.length > 0) {
        if (string.length == 4 || string.length == 5) {
            return validation
        } else {
            let errorMsg = await commonsServices.getValidationError(27, language)
            let newError = {
                field: field,
                error: `${errorMsg.message}`
            }
            return validation.push(newError)
        }
    } else {
        let errorMsg = await commonsServices.getValidationError(9999, language)
        let newError = {
            field: field,
            error: `${field} ${errorMsg.message}`
        }
        return validation.push(newError)
    }
}


exports.validationTime = async (time, validation, field, language) => {
    var timeReg = new RegExp(/^([0-1]?[0-9]|2[0-4]):([0-5][0-9])(:[0-5][0-9])?$/);
    if (time) {
        if (timeReg.test(time)) {
            return validation
        } else {
            let errorMsg = await commonsServices.getValidationError(29, language)
            let newError = {
                field: field,
                error: `${errorMsg.message}`
            }
            return validation.push(newError)
        }
    } else {
        let errorMsg = await commonsServices.getValidationError(9999, language)
        let newError = {
            field: field,
            error: `${field} ${errorMsg.message}`
        }
        return validation.push(newError)
    }
}
