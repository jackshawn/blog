let photo = require('../models/photo');
const Op = require('Sequelize').Op;


let getPhoto = async (ctx, next) => {
    let category = ctx.params.category;
    let startDate = ctx.query;
    let res = await photo.findAll({
      where: {
        category: category,
        time: {

        },
        limit: 6
      }
    });
    ctx.response.body = JSON.stringify(res);
};


let postPhoto = async (ctx, next) => {
    let category = ctx.params.category;
    let b = await photo.findAll();
    console.log(ctx.request.body);
    // console.log(`find blog:` + JSON.stringify(b));
    ctx.response.body = `<h1>Hello, ${category}! </h1>` + JSON.stringify(b);
};



module.exports = {
    'GET /photo/:category': getPhoto,
    'POST /photo/:category': postPhoto
};
