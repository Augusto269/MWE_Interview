const express = require('express');
const cors = require('cors')
const morgan = require('morgan');
const bodyParser = require('body-parser');
const serverless = require('serverless-http');
 
global.aws_event = {};
global.aws_context = {};
const APP_VERSION = process.env.APP_VERSION || "Missing";
 
const app = express();

const options = {
    inflate: true,
    limit: '100kb',
    type: 'application/json'
  };
app.use(cors())
app.use(bodyParser.json());
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use("/api", (req, res, next) => {
    next();
});
app.use(bodyParser.raw(options));
app.use(bodyParser.json({type:'*/*'}));
 
const auth = require('../route/auth.route');
app.use(`/api/${APP_VERSION}/auth`, auth);

 
 
const app_wrapper = serverless(app);
 
function handler(event, context, callback){
    global.aws_event = event;
    global.aws_context= context;
    app_wrapper(event, context, callback);
};
 
module.exports.handler = handler;