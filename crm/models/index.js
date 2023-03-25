/* eslint-disable */
'use strict'

const fs = require('fs')
const path = require('path')
const Sequelize = require('sequelize')
const basename = path.basename(__filename)
const env = process.env.NODE_ENV || 'development'
const config = require(__dirname + '/../config/config.js')
const db = {}

const sequelize = new Sequelize(config.database, config.username, config.password, config)

fs.readdirSync(__dirname)
  .filter(file => {
    return file.indexOf('.') !== 0 && file !== basename && file.slice(-3) === '.js'
  })
  .forEach(file => {
    const model = require(path.join(__dirname, file))(sequelize, Sequelize.DataTypes)
    db[model.name] = model
  })

Object.keys(db).forEach(modelName => {
  if (db[modelName].associate) {
    db[modelName].associate(db)
  }
})

const isHealthy = async () => {
  const query = await sequelize.query('SELECT 1', { type: db.Sequelize.QueryTypes.SELECT })
  return query
}

db.sequelize = sequelize
db.Sequelize = Sequelize
db.isHealthy = isHealthy

module.exports = db
