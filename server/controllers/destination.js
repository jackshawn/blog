let destination = require('../models/destination');
const Op = require('sequelize').Op;
const checkUserState = require('../utils/check');

// 获取位置
let getDestination = async (ctx, next) => {
  let res = await destination.findAll();
  console.log('get destination')
  ctx.response.body = JSON.stringify({
    result: 'success',
    data: res
  });
};

// 上传位置
let postDestination = async (ctx, next) => {
  if(checkUserState(ctx)){
    let req = ctx.request.body;
    let res = await destination.create(req);
    console.log(`post a destination: ${JSON.stringify(req)}`)
    ctx.response.body = JSON.stringify({
      result: 'success',
      msg: ''
    });
  }
};

// 删除位置
let deleteDestination = async (ctx, next) => {
  if(checkUserState(ctx)){
    let id = ctx.params.id;
    let res = await destination.destroy({
      where: {
        id: id
      }
    });
    console.log(`destination: ${id} deleted`)
    ctx.response.body = JSON.stringify({
      result: 'success',
      msg: ''
    });
  }
};


module.exports = {
  'GET /destination': getDestination,
  'POST /destination': postDestination,
  'DELETE /destination/:id': deleteDestination
};
