let user = require('../models/user');
const Op = require('Sequelize').Op;

// 登录
let login = async (ctx, next) => {
  const { username, password } = ctx.request.body
  let res = await user.findAll({
    where: {
      username: username
    }
  });
  let result = (res.length === 1 && res[0].password === password) ? {
    result: 'success',
    msg: ''
  } : {
    result: 'fail',
    msg: ''
  }
  console.log(`user ${username} login`)
  ctx.response.body = JSON.stringify(result);
};

// 退出
let logout = async (ctx, next) => {
  // todo
  console.log(`logout`)
  ctx.response.body = JSON.stringify({
    result: 'success',
    msg: ''
  });
};

module.exports = {
  'POST /login': login,
  'GET /logout': logout
};
