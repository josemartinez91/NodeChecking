const {Sequelize, DataTypes} = require('sequelize');

const db = new Sequelize({
    dialect: 'postgres',
    host: 'localhost',
    username: 'postgres',
    password: 'El3mendo',
    port: 5432,
    database: 'firstApi'
});

module.exports = {db, DataTypes}