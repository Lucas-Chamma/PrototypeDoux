const Sequelize = require("sequelize")

if(process.env.NODE_ENV !== 'production') {
   require('dotenv').config()
}

const DB_DIALECT = process.env.DB_DIALECT
const DB_HOST = process.env.DB_HOST
const DB_DATABASE = process.env.DB_DATABASE
const DB_USERNAME = process.env.DB_USERNAME
const DB_PASSWORD = process.env.DB_PASSWORD

const sequelize = new Sequelize(
   DB_DATABASE,
   DB_USERNAME,
   DB_PASSWORD,
   {
      host: DB_HOST,
      dialect: DB_DIALECT
   }
)
async function testeConection() {
   try {
      await sequelize.authenticate();
      console.log('Connection has been established successfully.');
    } catch (error) {
      console.error('Unable to connect to the database:', error);
    }
}

testeConection()


module.exports = sequelize