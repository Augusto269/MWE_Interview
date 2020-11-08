module.exports = function (sequelize, DataTypes) {
    return sequelize.define('profiles', {
        UUID_Profile: {
            type: DataTypes.STRING(36),  
            primaryKey: true,         
        },
        profile_name: {
            type: DataTypes.STRING(36),  
        },                
    }, {
        tableName: 'profiles',
        timestamps: false
      })
};



