const Koa = require('koa');
const KoaRouter = require('koa-router');

const app = new Koa();
const router = new KoaRouter();

// 跨域解决
app.use(async (ctx, next) => {
    ctx.set('Access-Control-Allow-Origin', '*');
    ctx.set('Access-Control-Allow-Headers', 'content-type,token,accept');
    ctx.set('Access-Control-Allow-Methods', 'POST,GET,OPTIONS');
    ctx.set('Access-Type', 'application/json');
    ctx.set('Access-Control-Max-Age', 10);
    // 处理options
    if (ctx.request.method.toLowerCase() === 'options') {
        ctx.response.status = 200;
        ctx.body = '';
    } else {
        await next();
    }
});

// 测试接口地址
router.get('/', async ctx => {
    ctx.body = {
        data: 'Hello World'
    };
});
router.get('/user/info', async ctx => {
    ctx.body = {
        name: 'Chris',
        msg: 'Hello World'
    };
});

app.use(router.routes());

// 启动
app.listen(3000, () => {
    console.log(`正在监听3000端口...`);
});