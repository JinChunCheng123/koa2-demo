/**
 * @Description: 
 * @Author: jinchuncheng
 * @Date: 2021-09-03
 */

 const Koa = require('koa')
 const routes= require('./routes')
 // 注意 require('koa-router') 返回的是函数:
 const router = require('koa-router')()
 const app = new Koa()
 
//   // 添加路由
//   router.get('/', async (ctx, next) => {
//      ctx.body = `<h1>index page</h1>`
//  })
 
//  router.get('/home', async (ctx, next) => {
//      ctx.body = '<h1>HOME page</h1>'
//  })
 
//  router.get('/404', async (ctx, next) => {
//      ctx.body = '<h1>404 Not Found</h1>'
//  })
 
//   // 调用路由中间件
//   app.use(router.routes())
routes(app)
 app.listen(3000)