var blog = require('../models/blog')

var fn_hello = async (ctx, next) => {
    var name = ctx.params.name;
    let b = await blog.findAll();
    // console.log(`find blog:` + JSON.stringify(b));
    ctx.response.body = `<h1>Hello, ${name}! </h1>` + JSON.stringify(b);
};



module.exports = {
    'GET /hello/:name': fn_hello
};
