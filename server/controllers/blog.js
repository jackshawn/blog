let blog = require('../models/blog');
const Op = require('sequelize').Op;
const checkUserState = require('../utils/check');

// 获取博客
let getBlog = async (ctx, next) => {
  let res;
  if(ctx.query.getAll){
    res = await blog.findAll({
      order: [['date', 'DESC']]
    });
    console.log('get all blogs')
  } else {
    let startDate = ctx.query.startDate || new Date();
    res = await blog.findAll({
      where: {
        date: {
          [Op.lt]: startDate
        }
      },
      limit: 6,
      order: [['date', 'DESC']]
    });
    console.log(`get blogs date from ${startDate}`)
  }

  ctx.response.body = JSON.stringify({
    result: 'success',
    data: res
  });
};

// 上传博客
let postBlog = async (ctx, next) => {
  if(checkUserState(ctx)){
    let req = ctx.request.body;
    let res = await blog.create(req);
    console.log(`post a blog: ${JSON.stringify(req)}`)
    ctx.response.body = JSON.stringify({
      result: 'success',
      msg: ''
    });
  }
};

// 删除博客
let deleteBlog = async (ctx, next) => {
  if(checkUserState(ctx)) {
    let id = ctx.params.id;
    let res = await blog.destroy({
      where: {
        id: id
      }
    });
    console.log(`blog: ${id} deleted`)
    ctx.response.body = JSON.stringify({
      result: 'success',
      msg: ''
    });
  }
};


module.exports = {
  'GET /blog': getBlog,
  'POST /blog': postBlog,
  'DELETE /blog/:id': deleteBlog
};
