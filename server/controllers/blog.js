let blog = require('../models/blog');
const Op = require('sequelize').Op;
const checkUserState = require('../utils/check');

// 获取博客
let getBlog = async (ctx, next) => {
  let res = undefined;
  let getAll = ctx.query.getAll;
  let id = ctx.query.ID;

  if(getAll){
    res = await blog.findAll({
      order: [['id', 'DESC']]
    });
    console.log('get all blogs')
  } else {
    res = await blog.findAll({
      where: id ? {
        id: {
          [Op.lt]: id
        }
      } : {},
      limit: 6,
      order: [['id', 'DESC']]
    });
    console.log('get blogs')
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
