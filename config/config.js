require('dotenv').config();

module.exports = {
    username: process.env.DB_USERNAME,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    dialect: 'postgres',
    dialectOptions: {
        connectTimeout: 60000,
    },
    seederStorage: 'sequelize',
    seederStorageTableName: 'sequelizeseeds',
    logging: false,
};