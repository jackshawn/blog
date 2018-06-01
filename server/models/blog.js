const Sequelize = require('sequelize');
const db = require('../utils/db');

let blog = db.define('blog', {
  id: {
    type: Sequelize.INTEGER,
    primaryKey: true
  },
  title: Sequelize.STRING,
  content: Sequelize.TEXT,
  date: Sequelize.DATE,
  type: Sequelize.STRING
}, {
  timestamps: false
});

module.exports = blog;
