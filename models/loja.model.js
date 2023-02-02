const sequelize = require('../config/db.js')
const DataTypes = require('sequelize')

const Loja = sequelize.define("Lojas", {
    cnpj: {
        type: DataTypes.STRING,
        allowNull: false
    },
    logradouro: {
        type: DataTypes.STRING,
        allowNull: false
     },
     cidade: {
        type: DataTypes.STRING,
        allowNull: false
     },
     estado: {
        type: DataTypes.STRING,
        allowNull: false
     },
     telefone: {
        type: DataTypes.STRING
    },
    estoquePrincipal: {
        type: DataTypes.SMALLINT
     }
}, {
    freezeTableName: true
})

module.exports = Loja