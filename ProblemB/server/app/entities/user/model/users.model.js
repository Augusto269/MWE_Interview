module.exports = function (sequelize, DataTypes) {
    return sequelize.define('users', {
        UUID_User: {
            type: DataTypes.STRING(36),  
            primaryKey: true,         
        },
        name: {
            type: DataTypes.STRING(36),  
        },
        lastname: {
            type: DataTypes.STRING(36),  
        },
        DNI: {
            type: DataTypes.INTEGER,  
        },
        phone: {
            type: DataTypes.STRING(36),  
        },
        cuit: {
            type: DataTypes.STRING(36),  
        },
        profile: {
            type: DataTypes.STRING(36),  
        },
        address: {
            type: DataTypes.STRING(15),  
        },
        last_login: {
            type: DataTypes.DATE,  
        },
        last_logout: {
            type: DataTypes.DATE,  
        },
        createdAt: {
            type: DataTypes.DATE,  
        },
        updatedAt: {
            type: DataTypes.DATE,  
        },
        created_user: {
            type: DataTypes.STRING(36),  
        },
        updated_user: {
            type: DataTypes.STRING(36),  
        },
        password: {
            type: DataTypes.STRING(100),  
        },
        user: {
            type: DataTypes.STRING(100),  
            primaryKey: true,      
        },
                
    }, {
        tableName: 'users',
        timestamps: false
      })
};



