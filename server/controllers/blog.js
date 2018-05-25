let blog = require('../models/blog');
const Op = require('Sequelize').Op;

// 获取博客
let getBlog = async (ctx, next) => {
  let startDate = ctx.query.startDate;
  let res = await blog.findAll({
    where: {
      date: {
        [Op.lt]: startDate
      }
    },
    limit: 6
  });
  console.log(`get blogs date from ${startDate}`)
  ctx.response.body = JSON.stringify(res);
};

// 上传博客
let postBlog = async (ctx, next) => {
  let req = ctx.request.body
  let res = await blog.create(req);
  let result = res ? {
    result: 'success',
    msg: ''
  } : {
    result: 'fail',
    msg: ''
  }
  console.log(`post a blog: ${JSON.stringify(req)}`)
  ctx.response.body = JSON.stringify(result);
};

// 删除博客
let deleteBlog = async (ctx, next) => {
  let id = ctx.params.id;
  let res = await blog.destroy({
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
  console.log(`blog: ${id} deleted`)
  ctx.response.body = JSON.stringify(result);
};


module.exports = {
  'GET /blog': getBlog,
  'POST /blog': postBlog,
  'DELETE /blog/:id': deleteBlog
};
