const express = require('express');
const cors = require('cors')
const bodyParser = require('body-parser');
const dotenv = require('dotenv');
dotenv.config();
const app = express();
const options = {
    inflate: true,
    limit: '100kb',
  };
app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.raw(options));

//define all entity endpoint
const APP_VERSION = process.env.APP_VERSION;
const user = require('./app/entities/user/router/user.router')
const auth = require('./app/entities/auth/router/auth.router')
const form = require('./app/entities/forms/router/form.router')

app.use(`/api/${APP_VERSION}/user`, user);  
app.use(`/api/${APP_VERSION}/auth`, auth);  
app.use(`/api/${APP_VERSION}/form`, form);

var port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`Server Start Successfully On port ${port}, version ${process.env.APP_VERSION}`)
});

