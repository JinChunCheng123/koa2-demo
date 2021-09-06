const Koa = require("koa")
const routes = require("./routes")
const parameter = require("koa-parameter")
const BodyParser = require("koa-bodyparser")
const DB = require("./db")
const app = new Koa()

app.use(BodyParser())
app.use(parameter(app))

routes(app)
app.listen(7777)
