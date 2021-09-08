
const Koa = require('koa')
const views = require('koa-views')
const Router=require('koa-router')
const router= new Router()
const path = require('path')
const app = new Koa()
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

router.get('/',async ctx => {
  let title = 'EJS'
  await ctx.render('index', {
    title,
  })
})
app.use(router.routes()).use(router.allowedMethods())
app.listen(3000,'localhost' ,()=>{
  console.log('[demo] ejs is starting at port 3000')
})
