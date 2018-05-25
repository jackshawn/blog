let photo = require('../models/photo');
const Op = require('Sequelize').Op;

// 获取照片
let getPhoto = async (ctx, next) => {
  let category = ctx.params.category;
  let startDate = ctx.query.startDate;
  let res = await photo.findAll({
    where: {
      category: category,
      date: {
        [Op.lt]: startDate
      }
    },
    limit: 6
  });
  console.log(`get ${category} photos date from ${startDate}`)
  ctx.response.body = JSON.stringify(res);
};

// 上传照片
let postPhoto = async (ctx, next) => {
  let category = ctx.params.category;
  let req = Object.assign(ctx.request.body, {
    category: category
  })
  let res = await photo.create(req);
  let result = res ? {
    result: 'success',
    msg: ''
  } : {
    result: 'fail',
    msg: ''
  }
  console.log(`post a ${category} photo: ${JSON.stringify(req)}`)
  ctx.response.body = JSON.stringify(result);
};

// 删除照片
let deletePhoto = async (ctx, next) => {
  let id = ctx.params.id;
  let res = await photo.destroy({
    where: {
      id: id
    }
  });
  let result = res ? {
    result: 'success',
    msg: ''
  } : {
    result: 'fail',
    msg: ''
  }
  console.log(`photo: ${id} deleted`)
  ctx.response.body = JSON.stringify(result);
};


module.exports = {
  'GET /photo/:category': getPhoto,
  'POST /photo/:category': postPhoto,
  'DELETE /photo/:id': deletePhoto
};
