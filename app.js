
const Koa = require('koa')
const views = require('koa-views')
const router=require('koa-router')()
const path = require('path')
const app = new Koa()
app.use(views(path.join(__dirname, './view'), {
  extension: 'ejs'
}))

router.get('/',ctx => {
  let title = 'EJS'
  ctx.render('index', {
    title,
  })
})
app.listen(3001, ()=>{
  console.log('[demo] ejs is starting at port 3001')
})
