const sequelize = require("./config/db")

const Loja = require("./models/loja.model")
const Usuario = require("./models/usuario.model")

//Usuario 1:1 Loja
Usuario.hasOne(Loja, {foreingKey: 'usuarioId', onDelete: 'CASCADE'})
Loja.belongsTo(Usuario, {foreingKey: 'usuarioId', onDelete: 'CASCADE'})

//sequelize.sync({force: true}) 

module.exports = {
    Usuario,
    Loja
}