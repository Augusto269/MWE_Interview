module.exports = function (sequelize, DataTypes) {
    return sequelize.define('logs_err', {
        errornumber: {
            type: DataTypes.INTEGER,  
            autoIncrement: true,
            primaryKey: true,         
        },
        code: {
            type: DataTypes.STRING(100),  
        },
        errno: {
            type: DataTypes.STRING(100),  
        },
        sqlState: {
            type: DataTypes.STRING(255),  
        },
        message: {
            type: DataTypes.STRING(255),  
        },
        sql: {
            type: DataTypes.TEXT,  
        },
        parameters: {
            type: DataTypes.TEXT,  
        },
        createduser: {
            type: DataTypes.STRING(36),  
        },
        createdat: {
            type: DataTypes.DATE,  
        },
                
    }, {
        tableName: 'logs_err',
        timestamps: false
      })
};



