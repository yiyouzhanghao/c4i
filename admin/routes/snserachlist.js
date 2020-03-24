const sqlConnection = require("../sql/index.js")
const router = require("koa-router")()
router.get("/",(ctx)=>{
    let a = sqlConnection(Number(ctx.query.sn))
    console.log(a)
})
module.exports = router.routes()