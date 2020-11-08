var fs = require("fs");
var Sequelize = require("sequelize");
const dotenv = require('dotenv');
dotenv.config();

    var sequelize = new Sequelize(process.env.DB, process.env.USER_DB, process.env.PASSWORD, {
        host: process.env.HOST_DB,
        port: process.env.PORT_DB,
        dialect: 'mysql',
        smultipleStatements: true,
        logging: console.log,  
        timezone: '-03:00',  
    });      
    sequelize          
        .authenticate()
        .then(() => {   
        })
        .catch(err => {
        console.error('Unable to connect to the database:',process.env.DB, process.env.USER, process.env.PASSWORD,process.env.HOST,process.env.PORT, err);
        console.log('Buscar '+process.env.DB +'  User  '+process.env.USER+'  password   '+process.env.PASSWORD);
        });
    
var db = {};

const base_dir = __dirname + "/../entities";
fs.readdirSync(base_dir).filter(function(item){
    return fs.statSync(base_dir + "/" + item).isDirectory();
}).forEach(function(parent_dir){
    fs.readdirSync(base_dir + "/" + parent_dir).filter(function(dir){
        return (dir === 'model' || dir === 'models') && fs.statSync(base_dir + "/" + parent_dir + "/" + dir).isDirectory();
    }).forEach(function(model_dir){
        var current_dir = base_dir +"/" +  parent_dir +"/" + model_dir;
        fs.readdirSync(current_dir).filter(function(file){
            return file.indexOf('.model.') > 0 && fs.statSync(current_dir + "/" + file).isFile();
        }).forEach(function(model_file){
            var file = current_dir + "/" + model_file;
            var model = sequelize.import(file);
            db[model.name] = model;
        });
    });
});

Object.keys(db).forEach(function (modelName) {
    if ("associate" in db[modelName]) {
        db[modelName].associate(db);
    }
});

db.sequelize = sequelize;

module.exports = db;
