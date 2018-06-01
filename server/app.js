const Koa = require('koa');

const router = require('koa-router')();
const serve = require('koa-static');
const bodyParser = require('koa-bodyparser');
const controller = require('./utils/controller');
const session = require('koa-session-minimal');
const { sessionConfig } = require('./utils/config');

const app = new Koa();

app.use(bodyParser());
app.use(session(sessionConfig));

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
