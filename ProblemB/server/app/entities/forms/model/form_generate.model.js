module.exports = function (sequelize, DataTypes) {
    return sequelize.define('form_generate', {
        idFormGenerate: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true    
        },
        key: {
            type: DataTypes.STRING(35),
        },
        value: {
            type: DataTypes.STRING(100),
        },
        form_key:{
            type: DataTypes.STRING(100),
        },
        created_user:{
            type: DataTypes.STRING(36),
        },
        updated_user:{
            type: DataTypes.STRING(36),
        },
        createdat:{
            type: DataTypes.DATE,
        },
        updatedat:{
            type: DataTypes.DATE,
        },
        delete: {
            type: DataTypes.BOOLEAN
        }
    }, {
        tableName: 'form_generate',
        timestamps: false
    })
};

