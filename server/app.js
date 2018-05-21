const Koa = require('koa');

// 注意require('koa-router')返回的是函数:
const router = require('koa-router')();
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const controller = require('./controller');

const app = new Koa();

app.use(bodyParser());
app.use(controller());
app.use(serve(__dirname + '/view'));

// log request URL:
app.use(async (ctx, next) => {
    console.log(`Process ${ctx.request.method} ${ctx.request.url}...`);
    await next();
});

app.use(router.routes());

app.listen(3000);
console.log('app started at port 3000...');
