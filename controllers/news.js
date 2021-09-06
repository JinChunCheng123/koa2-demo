const News = require("../db/models/news.js")
class NewsCtrl {
  index(ctx) {
    ctx.body = "这是首页"
  }
  async find(ctx) {
    ctx.body = await News.find()
  }
  async findById(ctx) {
    const news = await News.findById(ctx.params.id)
    // console.log(news)
    if (news) {
      ctx.body = news
    } else {
      ctx.throw(404, "新闻不存在")
    }
  }
  async create(ctx) {
    ctx.body = await News.create(ctx.request.body)
  }
  async update(ctx) {
    ctx.body = await News.findByIdAndUpdate(ctx.params.id, ctx.request.body)
  }
  async delete(ctx) {
    ctx.body = await News.findByIdAndRemove(ctx.params.id)
  }
}
module.exports = new NewsCtrl()
