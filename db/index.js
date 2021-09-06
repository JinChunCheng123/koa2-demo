/**
 * @Description: 
 * @Author: jinchuncheng
 * @Date: 2021-07-30
 */
const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost:27017/local-db", { useNewUrlParser: true, useUnifiedTopology: true }, (err) => {
  if (err) {
    console.log("[Mongoose] database connect failed!", err )
  } else {
    console.log("[Mongoose] database connect success!")
  }
})
module.exports = mongoose
