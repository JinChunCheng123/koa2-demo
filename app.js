const Koa = require('koa')
const static = require('koa-static')
const path = require('path')
const app= new Koa()
//静态资源目录相对于入口文件的相对地址
const staticPath='./static'
app.use(static(path.resolve(__dirname,staticPath)))

app.listen(3000,()=>{
  console.log('static is starting on port 3000')
})