const Koa = require("koa")
const router = require("koa-router")()
const snserachlist = require("./routes/snserachlist.js")
const app = new Koa()
router.use('/snserachlist:sn',snserachlist.routes())
// app.use(async (ctx)=>{
//     console.log(ctx)
// })
app.use(router.routes())
app.use(router.allowedMethods())
app.listen(3000)

