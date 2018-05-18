const Sequelize = require('sequelize');
const db = require('../db');

let blog = db.define('blog', {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true
    },
    title: Sequelize.STRING,
    content: Sequelize.TEXT,
    time: Sequelize.DATE
}, {
    timestamps: false
});


module.exports = blog;