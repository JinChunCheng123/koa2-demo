/**
 * @Description: 
 * @Author: jinchuncheng
 * @Date: 2021-09-04
 */
 class HomeCtrl {
    index(ctx) {
      ctx.body = "这是首页"
    }
  }
  module.exports = new HomeCtrl()