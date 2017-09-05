const Koa = require("koa");
const app = new Koa();
const router = require('koa-router')();

router.get('/api', function (ctx, next) {
    ctx.body = 'Hello World!';
});

router.post('/api/submitComment', function (ctx,next) {
    console.log('提交评论');

    let postdata;
    ctx.req.addListener('data', (data) => {
      postdata += data;
      console.log(data);
    });
    ctx.req.addListener('end', function() {
      console.log(postdata);
    });

    //返回值
    ctx.body = {
        errno: 0,
        msg: 'ok'
    }
})

app.use(router.routes())
  .use(router.allowedMethods());

//监听8088端口
app.listen(8088, _ => {
  console.log('server started')
});
