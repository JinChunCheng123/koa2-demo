const Router = require("koa-router")
const { index, create, find, findById } = require("../controllers/news")
const router = new Router({
  prefix: "/news"
})
router.get("/", find)
router.get("/:id", findById)
router.post("/", create)
module.exports = router
