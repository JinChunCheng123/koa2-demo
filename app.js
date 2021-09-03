/**
 * @Description: 
 * @Author: jinchuncheng
 * @Date: 2021-09-03
 */

const SimpleKoa = require('./lib/application.js');
const app = new SimpleKoa();
const port = '3000'
const host = '0.0.0.0'

app.use(async ctx => {
  ctx.body = 'Hello World..';
});

app.listen(port, host, () => {
  console.log(`API server listening on ${host}:${port}`);
});