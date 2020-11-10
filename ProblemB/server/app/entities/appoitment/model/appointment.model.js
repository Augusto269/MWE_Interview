module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Appoitment', {
        uuidAppoitment: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true    
        },
        AppoitmentKey:{
            type: DataTypes.STRING(35),
        },
        hour: {
            type: DataTypes.STRING(35),
        },
        user: {
            type: DataTypes.TEXT(),
        },      
        date : {
            type: DataTypes.DATE(),
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
        tableName: 'Appoitment',
        timestamps: false
    })
};

