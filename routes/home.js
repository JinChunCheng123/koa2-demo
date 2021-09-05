/**
 * @Description: 
 * @Author: jinchuncheng
 * @Date: 2021-09-04
 */
const router = require("koa-router")()
const { index } = require("../controllers/home")
router.get("/", index)
module.exports = router