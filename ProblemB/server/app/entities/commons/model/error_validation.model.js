module.exports = function (sequelize, DataTypes) {
    return sequelize.define('error_validation', {
        id_error: {
            type: DataTypes.INTEGER,  
            autoIncrement: true,
            primaryKey: true,         
        },
        error_validation_number: {
            type: DataTypes.INTEGER,  
        },
        language: {
            type: DataTypes.STRING(2),  
        },
        message: {
            type: DataTypes.STRING(100),  
        },
                
    }, {
        tableName: 'error_validation',
        timestamps: false
      })
};



