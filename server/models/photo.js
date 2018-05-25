const Sequelize = require('sequelize');
const db = require('../db');

let photo = db.define('photo', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: Sequelize.STRING,
    picture: Sequelize.STRING,
    video: Sequelize.STRING,
    link: Sequelize.STRING,
    category: Sequelize.STRING,
    date: Sequelize.DATE
}, {
    timestamps: false
});

module.exports = photo;
