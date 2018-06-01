let photo = require('../models/photo');
const Op = require('sequelize').Op;
let uploadFile = require('../utils/upload');
const checkUserState = require('../utils/check');
const path = require('path');

// 获取照片
let getPhoto = async (ctx, next) => {
  let res = undefined;
  let category = ctx.params.category;
  let id = ctx.query.ID;

  if(category === 'all'){
    res = await photo.findAll({
      order: [['id', 'DESC']]
    });
    console.log('get all photos')
  } else {
    res = await photo.findAll({
      where: id ? {
        category: category,
        id: {
          [Op.lt]: id
        }
      } : {category: category},
      limit: 6,
      order: [['id', 'DESC']]
    });
    console.log(`get ${category} photos`)
  }

  ctx.response.body = JSON.stringify({
    result: 'success',
    data: res
  });
};

// 上传照片
let postPhoto = async (ctx, next) => {
  if(checkUserState(ctx)) {
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
      title: result.formData.title
    } : {
      category: category,
      picture: '../album/' + result.name,
      video: '',
      title: result.formData.title
    }

    let res = await photo.create(req);

    console.log(`post a ${category} photo: ${JSON.stringify(req)}`)

    ctx.response.body = result.success ? '照片上传成功' : '照片上传失败'
  }

};

// 删除照片
let deletePhoto = async (ctx, next) => {
  if(checkUserState(ctx)) {
    let id = ctx.params.id;
    let res = await photo.destroy({
      where: {
        id: id
      }
    });
    console.log(`photo: ${id} deleted`)
    ctx.response.body = JSON.stringify({
      result: 'success',
      msg: ''
    });
  }
};

module.exports = {
  'GET /photo/:category': getPhoto,
  'POST /photo/:category': postPhoto,
  'DELETE /photo/:id': deletePhoto
};
