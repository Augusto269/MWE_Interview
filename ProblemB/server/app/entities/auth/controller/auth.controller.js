const authService = require("../service/auth.service.js");
const commonsController = require("../../commons/controller/commons.controller");
const userService = require("../../user/service/user.service");
const serviceForms = require('../../forms/service/form.service');
const moment = require("moment");
const jwt = require("jwt-simple");
const dotenv = require('dotenv');
dotenv.config();


exports.makeLogin = async function (req, res) {
  try {
    let makeLogin = res.locals.makeLogin;
    authService
      .getLogin(makeLogin)
      .then(async result => {
        if (result) {
          let hashedPassword = await commonsController.comparePassword(result.password,makeLogin.pass);
          if (hashedPassword) {
            // Login Successfully
            console.log(result.profile);
            let profile = await serviceForms.getAllProfiles(result.profile)
            console.log(profile);
            switch (profile[0].description) {
              case 'user':
                var asignedProfile = process.env.USESR;
                break;
              case 'admin':
                var asignedProfile = process.env.ADMIN;
                break;
              default:
                throw new Error("Profile not found");
            }
            let payload = {};
            result.first_login
              ? (payload = {
                name: `${result.name} ${result.lastname}`,
                user: result.user,
                uuid: result.uuid,
                language: makeLogin.language,
                profilef: asignedProfile,
                profilefirstLogin: 101,
                iat: moment().unix(),
                exp: moment()
                  .add(process.env.TOKEN_TIME_SET, "minutes")
                  .unix()
              })
              : (payload = {
                name: `${result.name} ${result.lastname}`,
                user: result.user,
                uuid: result.uuid,
                language: makeLogin.language,
                profilef: asignedProfile,
                profile: profile[0].UUID_profile,
                iat: moment().unix(),
                exp: moment()
                  .add(process.env.TOKEN_TIME_SET, "minutes")
                  .unix()
              });

            let Token = jwt.encode(payload, process.env.SECRET_PASSWORD_TOKEN);
            // Logeado correctamente hago el update del last_login al user
            let updateUserData = { last_login: moment() };            
            userService.updateUser(updateUserData, result.uuid);              
            let errorCode = 2000;
              commonsController.error_msg(errorCode, makeLogin.language).then(result => {
                res.status(200).send({
                  errorcode: errorCode,
                  message: result.message,
                  result: Token,
                  profile: result.profile
                });
              });
          } else {
            // Wrong Password
            let errorCode = 4000;
            commonsController.error_msg(errorCode, makeLogin.language).then(result => {
              res.status(400).send({
                errorcode: errorCode,
                message: result.message,
                result: "",
                details: ""
              });
            });
          }
        } else {
          // Wrong User
          let errorCode = 4000;
          commonsController.error_msg(errorCode, makeLogin.language).then(result => {
            res.status(400).send({
              errorcode: errorCode,
              message: result.message,
              result: "",
              details: ""
            });
          });
        }
      })
  }
  catch (err) {
    let errorCode = 500;
    commonsController.createRegisterError(err, 'No Loggin');
    commonsController.error_msg(errorCode, makeLogin.language).then(result => {
      res.status(500).send({
        errorcode: errorCode,
        message: result.message,
        result: "",
        details: ""
      });
    });
  };
};

/* Middlewares */
exports.securityMiddleware = function (req, res, next) {
  try {
    if (!req.headers.authorization) {
      return res.status(403).send({
        errorcode: 4101,
        message: "Peticion sin Cabecera",
        result: "",
        details: ""
      });
    } else {
      var token = req.headers.authorization.replace(/['"]+/g, "");
      try {
        payload = jwt.decode(token, process.env.SECRET_PASSWORD_TOKEN);
        userData = {
          uuid: payload.uuid,
          language: payload.language,
          profile: payload.profile
        };
        res.locals.userData = userData;
        next();
      } catch (err) {
        return res.status(400).send({
          errorcode: 4100,
          message: "Invalid Token ",
          result: "",
          details: ""
        });
      }
    }
  } catch (err) {
    let errorCode = 500;
    commonsController.createRegisterError(err, userData.uuid);
    commonsController.error_msg(errorCode, makeLogin.language).then(result => {
      res.status(500).send({
        errorcode: errorCode,
        message: result.message,
        result: "",
        details: ""
      });
    });
  }
};

exports.renewtoken = function (uuid, language) {
  return userService.getUser(uuid)
    .then(async result => {
      let profile = await serviceForms.getAllProfiles(result.profile)
      switch (profile[0].description) {      
        case 'admin':
          var asignedProfile = process.env.ADMINSTRADOR;
          break;       
        case 'user':
          var asignedProfile = process.env.USER;
          break;
        default:
          var asignedProfile = 'NaN';
          break;
      }
      payload = {
        uuid: result.uuid,
        name: `${result.name} ${result.lastname}`,
        user : result.user,
        language: language,
        profile: result.profile,
        profilef: asignedProfile,
        iat: moment().unix(),
        exp: moment()
          .add(process.env.TOKEN_TIME_SET, "minutes")
          .unix()
      }
      let Token = jwt.encode(payload, process.env.SECRET_PASSWORD_TOKEN);
      return Token
    })
}

exports.adminAuth = function (req, res, next) {
  try {
    let userData = res.locals.userData;
    serviceForms.getAllProfiles(userData.profile).then(resultGetProfile => {
      if (resultGetProfile[0].description == 'Admin'||resultGetProfile[0].description == 'Super') {
        next()
      } else {
        let errorCode = 4999;
        commonsController.error_msg(errorCode, userData.language).then(result => {
          res.status(200).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: []
          });
        });
      }
    }).catch(err => {
      let errorCode = 500;
      commonsController.createRegisterError(err, userData.uuid);
      commonsController.error_msg(errorCode, userData.language).then(result => {
        res.status(500).send({
          errorcode: errorCode,
          message: result.message,
          result: "",
          details: ""
        });
      });
    })
  } catch (err) {
    let errorCode = 500;
    commonsController.createRegisterError(err, userData.uuid);
    commonsController.error_msg(errorCode, userData.language).then(result => {
      res.status(500).send({
        errorcode: errorCode,
        message: result.message,
        result: "",
        details: ""
      });
    });
  }
}

exports.administratorAuth = function (req, res, next) {
  try {
    let userData = res.locals.userData;
    serviceForms.getAllProfiles(userData.profile).then(resultGetProfile => {
      if (resultGetProfile[0].description == 'Super') {
        next()
      } else {
        let errorCode = 4999;
        commonsController.error_msg(errorCode, userData.language).then(result => {
          res.status(200).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: []
          });
        });
      }
    }).catch(err => {
      let errorCode = 500;
      commonsController.createRegisterError(err, userData.uuid);
      commonsController.error_msg(errorCode, userData.language).then(result => {
        res.status(500).send({
          errorcode: errorCode,
          message: result.message,
          result: "",
          details: ""
        });
      });
    })
  } catch (err) {
    let errorCode = 500;
    commonsController.createRegisterError(err, userData.uuid);
    commonsController.error_msg(errorCode, userData.language).then(result => {
      res.status(500).send({
        errorcode: errorCode,
        message: result.message,
        result: "",
        details: ""
      });
    });
  }
}
exports.userAuth = function (req, res, next) {
  try {
    let userData = res.locals.userData;
    serviceForms.getAllProfiles(userData.profile).then(resultGetProfile => {
      if (resultGetProfile[0].description == 'User' || resultGetProfile[0].description == 'Admin') {
        next()
      } else {
        let errorCode = 4999;
        commonsController.error_msg(errorCode, userData.language).then(result => {
          res.status(200).send({
            errorcode: errorCode,
            message: result.message,
            details: [],
            result: []
          });
        });
      }
    }).catch(err => {
      let errorCode = 500;
      commonsController.createRegisterError(err, userData.uuid);
      commonsController.error_msg(errorCode, userData.language).then(result => {
        res.status(500).send({
          errorcode: errorCode,
          message: result.message,
          result: "",
          details: ""
        });
      });
    })
  } catch (err) {
    let errorCode = 500;
    commonsController.createRegisterError(err, userData.uuid);
    commonsController.error_msg(errorCode, userData.language).then(result => {
      res.status(500).send({
        errorcode: errorCode,
        message: result.message,
        result: "",
        details: ""
      });
    });
  }
}
