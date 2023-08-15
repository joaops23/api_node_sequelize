const Sequelize = require('sequelize');
const sequelize = new Sequelize('movies', 'postgres', '1045', {
    host: 'localhost',
    dialect: 'postgres'
});

module.exports = sequelize;