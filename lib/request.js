/**
 * @Description: 
 * @Author: jinchuncheng
 * @Date: 2021-09-03
 */
 const url = require('url')

 module.exports = {
   get query() {
     return url.parse(this.req.url).query
   },
   get path() {
     return url.parse(this.req.url).pathname
   },
   get method() {
     return this.req.method.toLowerCase()
   }
 }
