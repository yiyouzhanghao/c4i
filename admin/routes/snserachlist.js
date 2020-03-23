const router = require("koa-router")()
router.get("snserachlist",(ctx)=>{
    console.log(ctx.query)
})
module.exports = router.routes()