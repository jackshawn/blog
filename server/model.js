const db = require('./db');
let blog = require('./models/blog')
let photo = require('./models/photo')
module.exports = {
   blog: blog,
   photo: photo,
};

module.exports.sync = () => {
    db.sync();
};
