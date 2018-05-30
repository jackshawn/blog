let photo = require('../models/photo');
const Op = require('sequelize').Op;
let uploadFile = require('../upload');
const path = require('path');

// 获取照片
let getPhoto = async (ctx, next) => {
  let category = ctx.params.category;
  let startDate = ctx.query.startDate || new Date();
  let res = await photo.findAll({
    where: {
      category: category,
      date: {
        [Op.lt]: startDate
      }
    },
    limit: 6,
    order: [['date', 'DESC']]
  });
  console.log(`get ${category} photos date from ${startDate}`)
  ctx.response.body = JSON.stringify({
    result: 'success',
    data: res
  });
};

// 上传照片
let postPhoto = async (ctx, next) => {

  let category = ctx.params.category;

  let serverFilePath = path.join(__dirname, '../view/')

  let result = await uploadFile(ctx, {
    fileType: 'album',
    path: serverFilePath
  })

  let req = result.type.toLowerCase() === 'mp4' ? {
    category: category,
    picture: '',
    video: '../album/' + result.name,
    title: result.formData.title,
    link: result.formData.link,
    date: result.formData.date
  } : {
    category: category,
    picture: '../album/' + result.name,
    video: '',
    title: result.formData.title,
    link: result.formData.link,
    date: result.formData.date
  }

  let res = await photo.create(req);

  console.log(`post a ${category} photo: ${JSON.stringify(req)}`)

  ctx.response.body = result.success ? '照片上传成功' : '照片上传失败'
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
