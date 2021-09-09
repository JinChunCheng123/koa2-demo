/**
 * @Description: 
 * @Author: jinchuncheng
 * @Date: 2021-09-09
 */
class HomeCtrl {
  index(ctx) {
    ctx.body = "Index Page"
  }
}
module.exports = new HomeCtrl()
