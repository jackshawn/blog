const Sequelize = require('sequelize');
const db = require('../db');

let destination = db.define('destination', {
    longitude: Sequelize.STRING,
    latitude: Sequelize.STRING,
    location: Sequelize.STRING,
    link: Sequelize.STRING,
    date: Sequelize.DATE,
}, {
    timestamps: false
});

module.exports = destination;
