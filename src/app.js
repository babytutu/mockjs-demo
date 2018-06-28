const Koa = require('koa')
const Mock = require('mockjs')

const app = new Koa()

const template = require('./template')

const args = process.argv[2]

app.use(async ctx => {
  const url = ctx.url.replace('/', '')
  ctx.body = Mock.mock(template[url] || template)
})

const port = args || 3000

console.info(`port: ${port}`)

console.info(`open: http://localhost:${port}`)

app.listen(port)
