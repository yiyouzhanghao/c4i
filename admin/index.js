const Koa = require("koa")
const router = require("koa-router")()
const snserachlist = require("./routes/snserachlist.js")
const app = new Koa()
router.use('/snserachlist',snserachlist)
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)

