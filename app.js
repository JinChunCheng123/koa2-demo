/**
 * @Description: 
 * @Author: jinchuncheng
 * @Date: 2021-09-03
 */

const Koa = require('koa');
const app = new Koa();
const port = '3000'
const host = 'localhost'
//添加中间件
app.use(async (ctx,next) => {
  console.log('\x1B[31m%s\x1B[0m','1 start')
  await next()
  console.log('\x1B[31m%s\x1B[0m','1 end')

});
app.use(async (ctx,next) => {
  console.log('\x1B[31m%s\x1B[0m','2 start')
  await next()
  console.log('\x1B[31m%s\x1B[0m','2 end')
  
});
app.use(async (ctx,next) => {
  console.log('\x1B[31m%s\x1B[0m','3 start')
  ctx.body='Hello World'
  console.log('\x1B[31m%s\x1B[0m','3 end')

});
app.on('error', err => {
  console.error('server error', err)
});
app.listen(port, host, () => {
  console.log(`API server listening on ${host}:${port}`);
});


