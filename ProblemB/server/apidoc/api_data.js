define({ "api": [
  {
    "type": "get",
    "url": "forms/profile",
    "title": "Get All Profile",
    "group": "Admin",
    "name": "Get_all_Profiles",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:200",
            "description": "<p>message: Profiles</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4000",
            "description": "<p>message: error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/forms/router/form.router.js",
    "groupTitle": "Admin"
  },
  {
    "type": "post",
    "url": "user",
    "title": "Created New User",
    "group": "Admin_&&_User",
    "name": "Created_New_User",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Account",
            "description": "<p>Email of user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Password",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Name",
            "description": "<p>name of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "LastName",
            "description": "<p>Lastname of the user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "DNI",
            "description": "<p>DNI</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "Profile",
            "description": "<p>UUID</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:2011",
            "description": "<p>message: succefull created</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "Errorcode:499",
            "description": "<p>message: Not Authorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4102",
            "description": "<p>message: Error user alredy exist</p>"
          },
          {
            "group": "Error 4xx",
            "type": "412",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/user/router/user.router.js",
    "groupTitle": "Admin_&&_User"
  },
  {
    "type": "post",
    "url": "appoitment/:AppoitmentKey",
    "title": "Add Register appoinment of the day",
    "group": "Appoitment",
    "name": "Add_Register_appoinment_of_the_day",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AppointmentKey",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>('DD-MM-YYYY')</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hour",
            "description": "<p>('HH:MM')</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:200",
            "description": "<p>message: Suceffuly</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "Errorcode:4999",
            "description": "<p>message: Not Authorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4000",
            "description": "<p>message: Table Appointment not found</p>"
          },
          {
            "group": "Error 4xx",
            "type": "412",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/appoitment/router/appoitment.router.js",
    "groupTitle": "Appoitment"
  },
  {
    "type": "put",
    "url": "appoitment/:AppoitmentKey",
    "title": "Updated Register appoinment of the day",
    "group": "Appoitment",
    "name": "Add_Register_appoinment_of_the_day",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AppointmentKey",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>('DD-MM-YYYY')</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hour",
            "description": "<p>('HH:MM')</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:200",
            "description": "<p>message: Suceffuly</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "Errorcode:4999",
            "description": "<p>message: Not Authorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4000",
            "description": "<p>message: Table Appointment not found</p>"
          },
          {
            "group": "Error 4xx",
            "type": "412",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/appoitment/router/appoitment.router.js",
    "groupTitle": "Appoitment"
  },
  {
    "type": "delete",
    "url": "appoitment/:AppoitmentKey",
    "title": "Delete Register appoinment of the day",
    "group": "Appoitment",
    "name": "Delete_Register_appoinment_of_the_day",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AppointmentKey",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>('DD-MM-YYYY')</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hour",
            "description": "<p>('HH:MM')</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:200",
            "description": "<p>message: Suceffuly</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "Errorcode:4999",
            "description": "<p>message: Not Authorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4000",
            "description": "<p>message: Table Appointment not found</p>"
          },
          {
            "group": "Error 4xx",
            "type": "412",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/appoitment/router/appoitment.router.js",
    "groupTitle": "Appoitment"
  },
  {
    "type": "get",
    "url": "appoitment/:AppoitmentKey",
    "title": "Get All Register appoinment of the day",
    "group": "Appoitment",
    "name": "Get_All_Register_appoinment_of_the_day",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AppointmentKey",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>('DD-MM-YYYY')</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:200",
            "description": "<p>message: Return array of appoinment of the day</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "Errorcode:4999",
            "description": "<p>message: Not Authorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4000",
            "description": "<p>message: Table Appointment not found</p>"
          },
          {
            "group": "Error 4xx",
            "type": "412",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/appoitment/router/appoitment.router.js",
    "groupTitle": "Appoitment"
  },
  {
    "type": "get",
    "url": "appoitment/",
    "title": "Get All Table Appoitment",
    "group": "Appoitment",
    "name": "Get_Table_all_appoitment",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:200",
            "description": "<p>message: Array of Table appoitment name</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/appoitment/router/appoitment.router.js",
    "groupTitle": "Appoitment"
  },
  {
    "type": "post",
    "url": "appoitment/:AppoitmentKey",
    "title": "Add Register appoinment of the day",
    "group": "Appoitment_&&_Admin",
    "name": "Add_Register_appoinment_of_the_day",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AppointmentKey",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>('DD-MM-YYYY')</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hour",
            "description": "<p>('HH:MM')</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "User",
            "description": "<p>(uuid)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:200",
            "description": "<p>message: Suceffuly</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "Errorcode:4999",
            "description": "<p>message: Not Authorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4000",
            "description": "<p>message: Table Appointment not found</p>"
          },
          {
            "group": "Error 4xx",
            "type": "412",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/appoitment/router/appoitment.router.js",
    "groupTitle": "Appoitment_&&_Admin"
  },
  {
    "type": "post",
    "url": "appoitment/",
    "title": "Add a Appointment Key",
    "group": "Appoitment_&&_Admin",
    "name": "Add_a_Appointment_Key",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AppointmentKey",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "AppointmentValue",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "appointment_per_hour",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:200",
            "description": "<p>message: Succefully Add Table Appointment</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "Errorcode:4999",
            "description": "<p>message: Not Authorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4000",
            "description": "<p>message: Table Appointment not found</p>"
          },
          {
            "group": "Error 4xx",
            "type": "412",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/appoitment/router/appoitment.router.js",
    "groupTitle": "Appoitment_&&_Admin"
  },
  {
    "type": "delete",
    "url": "appoitment/:AppoitmentKey",
    "title": "Delete Register appoinment of the day",
    "group": "Appoitment_&&_Admin",
    "name": "Delete_Register_appoinment_of_the_day",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AppointmentKey",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>('DD-MM-YYYY')</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hour",
            "description": "<p>('HH:MM')</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "User",
            "description": "<p>(uuid)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:200",
            "description": "<p>message: Suceffuly</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "Errorcode:4999",
            "description": "<p>message: Not Authorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4000",
            "description": "<p>message: Table Appointment not found</p>"
          },
          {
            "group": "Error 4xx",
            "type": "412",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/appoitment/router/appoitment.router.js",
    "groupTitle": "Appoitment_&&_Admin"
  },
  {
    "type": "put",
    "url": "appoitment/:AppoitmentKey",
    "title": "Delete Register appoinment of the day",
    "group": "Appoitment_&&_Admin",
    "name": "Delete_Register_appoinment_of_the_day",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AppointmentKey",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "date",
            "optional": false,
            "field": "date",
            "description": "<p>('DD-MM-YYYY')</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "hour",
            "description": "<p>('HH:MM')</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "id",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "User",
            "description": "<p>(uuid)</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:200",
            "description": "<p>message: Suceffuly</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "Errorcode:4999",
            "description": "<p>message: Not Authorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4000",
            "description": "<p>message: Table Appointment not found</p>"
          },
          {
            "group": "Error 4xx",
            "type": "412",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/appoitment/router/appoitment.router.js",
    "groupTitle": "Appoitment_&&_Admin"
  },
  {
    "type": "delete",
    "url": "appoitment/:AppoitmentKey",
    "title": "Delete a Appointment Key",
    "group": "Appoitment_&&_Admin",
    "name": "Updated_a_Appointment_Key",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AppoitmentKey",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:200",
            "description": "<p>message: Succefully delete Table Appointment</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "Errorcode:4999",
            "description": "<p>message: Not Authorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4004",
            "description": "<p>message: Table Appointment not found</p>"
          },
          {
            "group": "Error 4xx",
            "type": "412",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/appoitment/router/appoitment.router.js",
    "groupTitle": "Appoitment_&&_Admin"
  },
  {
    "type": "put",
    "url": "appoitment/:AppoitmentKey",
    "title": "Updated a Appointment Key",
    "group": "Appoitment_&&_Admin",
    "name": "Updated_a_Appointment_Key",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "AppoitmentKey",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "AppointmentValue",
            "description": ""
          },
          {
            "group": "Parameter",
            "type": "array",
            "optional": false,
            "field": "appointment_per_hour",
            "description": ""
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:200",
            "description": "<p>message: Succefully Updated Table Appointment</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "401",
            "optional": false,
            "field": "Errorcode:4999",
            "description": "<p>message: Not Authorized</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4004",
            "description": "<p>message: Table Appointment not found</p>"
          },
          {
            "group": "Error 4xx",
            "type": "412",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/appoitment/router/appoitment.router.js",
    "groupTitle": "Appoitment_&&_Admin"
  },
  {
    "type": "post",
    "url": "Login",
    "title": "User",
    "group": "Auth",
    "name": "Login",
    "parameter": {
      "fields": {
        "Parameter": [
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "User",
            "description": "<p>Email of user</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "pass",
            "description": "<p>Password</p>"
          },
          {
            "group": "Parameter",
            "type": "string",
            "optional": false,
            "field": "language",
            "description": "<p>language</p>"
          }
        ]
      }
    },
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:2011",
            "description": "<p>message: succefull login</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4102",
            "description": "<p>message: Error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "412",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/auth/router/auth.router.js",
    "groupTitle": "Auth"
  },
  {
    "type": "post",
    "url": "forms/",
    "title": "POST  ADD DATA form CodeForm",
    "group": "Forms",
    "name": "Add_DATA_form_CodeForm",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:2023",
            "description": "<p>message: allData for CodeForm</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4000",
            "description": "<p>message: error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4111",
            "description": "<p>message: Error Add new</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/forms/router/form.router.js",
    "groupTitle": "Forms"
  },
  {
    "type": "delete",
    "url": "forms/:CodeForm/:idFormGenerate",
    "title": "Delete DATA form CodeForm CodeForm = All",
    "group": "Forms",
    "name": "Delete_Data_For_CodeForm",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:2025",
            "description": "<p>message: delete for CodeForm</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4000",
            "description": "<p>message: error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/forms/router/form.router.js",
    "groupTitle": "Forms"
  },
  {
    "type": "put",
    "url": "forms/all/",
    "title": "Edit DATA form CodeForm",
    "group": "Forms",
    "name": "Edit_Data_For_CodeForm",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:2024",
            "description": "<p>message: allData for CodeForm</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4000",
            "description": "<p>message: error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/forms/router/form.router.js",
    "groupTitle": "Forms"
  },
  {
    "type": "get",
    "url": "forms/:CodeForm",
    "title": "Get DATA form CodeForm",
    "group": "Forms",
    "name": "Get_all_Data_For_CodeForm",
    "success": {
      "fields": {
        "Success 200": [
          {
            "group": "Success 200",
            "type": "200",
            "optional": false,
            "field": "Errrocode:200",
            "description": "<p>message: allData for CodeForm</p>"
          }
        ]
      }
    },
    "error": {
      "fields": {
        "Error 4xx": [
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:4000",
            "description": "<p>message: error</p>"
          },
          {
            "group": "Error 4xx",
            "type": "400",
            "optional": false,
            "field": "Errorcode:412",
            "description": "<p>message: errorValidation</p>"
          },
          {
            "group": "Error 4xx",
            "type": "500",
            "optional": false,
            "field": "Errorcode:500",
            "description": "<p>message: Internal Error</p>"
          }
        ]
      }
    },
    "version": "0.0.0",
    "filename": "app/entities/forms/router/form.router.js",
    "groupTitle": "Forms"
  }
] });
