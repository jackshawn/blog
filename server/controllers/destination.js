let destination = require('../models/destination');
const Op = require('sequelize').Op;

// 获取位置
let getDestination = async (ctx, next) => {
  let startDate = ctx.query.startDate || new Date();
  let res = await destination.findAll();
  console.log('get destination')
  ctx.response.body = JSON.stringify({
    result: 'success',
    data: res
  });
};

// 上传位置
let postDestination = async (ctx, next) => {
  let req = ctx.request.body;
  console.log(req);
  let res = await destination.create(req);
  let result = res ? {
    result: 'success',
    msg: ''
  } : {
    result: 'fail',
    msg: ''
  }
  console.log(`post a destination: ${JSON.stringify(req)}`)
  ctx.response.body = JSON.stringify(result);
};

// 删除位置
let deleteDestination = async (ctx, next) => {
  let id = ctx.params.id;
  let res = await destination.destroy({
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
  console.log(`destination: ${id} deleted`)
  ctx.response.body = JSON.stringify(result);
};


module.exports = {
  'GET /destination': getDestination,
  'POST /destination': postDestination,
  'DELETE /destination/:id': deleteDestination
};
