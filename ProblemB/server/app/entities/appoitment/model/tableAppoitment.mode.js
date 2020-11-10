module.exports = function (sequelize, DataTypes) {
    return sequelize.define('Appoitment_Table', {
        idAppoitment: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true    
        },
        key: {
            type: DataTypes.STRING(35),
        },
        value: {
            type: DataTypes.TEXT(),
        },
        appointment_per_hour:{
            type: DataTypes.INTEGER(4),
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
        tableName: 'Appoitment_Table',
        timestamps: false
    })
};

