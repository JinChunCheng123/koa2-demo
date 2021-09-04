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
  const startTime=new Date()
  await next()
  let ms=new Date()-startTime
  console.log('waste time:',ms)
  console.log('\x1B[31m%s\x1B[0m','1 end')

});
app.use(async (ctx,next) => {
  console.log('\x1B[31m%s\x1B[0m','2 start')
  for(let i=0;i<100000000;i++){}
  await next()
  console.log('\x1B[31m%s\x1B[0m','2 end')
  
});
app.use(async (ctx,next) => {
  console.log('\x1B[31m%s\x1B[0m','3 start')
  console.log('\x1B[31m%s\x1B[0m','3 end')

});
app.listen(port, host, () => {
  console.log(`API server listening on ${host}:${port}`);
});