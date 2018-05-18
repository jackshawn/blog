const db = require('../db');

let photo = db.define('photo', {
    id: {
        type: db.INTEGER,
        primaryKey: true
    },
    title: db.STRING,
    picture: db.STRING,
    video: db.STRING,
    link: db.STRING,
    type: db.STRING,
    time: db.DATE
}, {
    timestamps: false
});

module.exports = photo;