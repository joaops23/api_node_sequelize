const Sequelize = require('sequelize');
const sequelize = require('../db.js');

const schema = 'movies';

class Movie extends Sequelize.Model{}
Movie.init({
    title: Sequelize.STRING,
    poster: Sequelize.STRING,
    overview: Sequelize.TEXT
}, {sequelize, modelName: 'Movie', schema});

sequelize.sync();
module.exports = Movie;
