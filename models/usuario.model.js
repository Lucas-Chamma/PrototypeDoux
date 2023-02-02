const sequelize = require('../config/db.js')
const DataTypes = require('sequelize')


const Usuario = sequelize.define("usuarios", {
   nome: {
     type: DataTypes.STRING,
     allowNull: false
   },
   email: {
      type: DataTypes.STRING,
      allowNull: false,
      unique: true
   },
   senha: {
      type: DataTypes.STRING,
      allowNull: false,
   },
   tipo: {
      type: DataTypes.STRING
   },
   status: {
      type: DataTypes.STRING
   }
}, {
   freezeTableName: true
})

module.exports = Usuario