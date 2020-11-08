module.exports = function (sequelize, DataTypes) {
    return sequelize.define('times_appointment', {
        idTimesAppointment: {
            type: DataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true,
            unique: true    
        },
        key: {
            type: DataTypes.STRING(35),
        },
        value: {
            type: DataTypes.TEXT,
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
        tableName: 'times_appointment',
        timestamps: false
    })
};

