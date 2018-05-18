const Sequelize = require('sequelize');
const config = require('./config');
let sequelize = new Sequelize(config.database, config.username, config.password, {
    host: config.host,
    dialect: 'mysql',
    pool: {
        max: 5,
        min: 0,
        idle: 30000
    }
});

// let blog = sequelize.define('blog', {
//     id: {
//         type: Sequelize.INTEGER,
//         primaryKey: true
//     },
//     title: Sequelize.STRING,
//     content: Sequelize.TEXT,
//     time: Sequelize.DATE
// }, {
//     timestamps: false
// });
//
// (async () => {
//     let b = await blog.findAll();
//     console.log(`find blog:` + JSON.stringify(b));
// })();

module.exports = sequelize;