const Router = require("koa-router")
const router = new Router()
const { index, create } = require("../controllers/home")
router.get("/", index)
module.exports = router
