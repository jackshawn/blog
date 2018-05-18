const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();

const app = new Koa();

const serve = require('koa-static');

const controller = require('./controller');

app.use(controller());

app.use(serve(__dirname + '/view'));

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

// const blog = require('./models/blog');
// (async () => {
//     let b = await blog.findAll();
//     console.log(`find blog:` + JSON.stringify(b));
// })();
// // add url-route:
// router.get('/hello/:name', async (ctx, next) => {
//     var name = ctx.params.name;
//     ctx.response.body = `<h1>Hello, ${name}!</h1>`;
// });
//
// router.get('/', async (ctx, next) => {
//     ctx.response.body = '<h1>Index</h1>';
// });

// add router middleware:
app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');