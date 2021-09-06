const mongoose = require("mongoose")
const { model, Schema } = mongoose
//首先通过schema创建表结构，每一条自动添加_id
const newsSchema = new Schema({
  title: {
    required: true,
    type: String
  },
  content: {
    required: true,
    type: String
  }
})
//建表
module.exports = model("News", newsSchema)
