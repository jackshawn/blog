const Sequelize = require('sequelize');
const db = require('../db');

let user = db.define('user', {
    username: Sequelize.STRING,
    password: Sequelize.STRING
}, {
    timestamps: false
});

module.exports = user;
