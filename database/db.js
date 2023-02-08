const { Sequelize } = require('sequelize');

const db = new Sequelize({
    dialect: process.env.DB_DIALECT,//seleccionar el dialecto
    host: process.env.DB_HOST, //direccion donde se encuentra la base de datos
    username: process.env.DB_USERNAME, //usuario por defecto postgre
    password: process.env.DB_PASSWORD, //contraseña que se digita en postgre
    database: process.env.DB_DATABASE, //nombre de la base de datos
    logging: false
});


module.exports = { db };