const {
    Model,
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
    class Form extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
        static associate(models) {
            // define association here
        }
    }
    Form.init({
        clientName: DataTypes.STRING,
        clientEmail: DataTypes.STRING,
        courseInterest: DataTypes.STRING,
        isClaimed: DataTypes.BOOLEAN,
        claimedBy: DataTypes.UUID,
    }, {
        sequelize,
        modelName: 'Form',
    });
    return Form;
};
