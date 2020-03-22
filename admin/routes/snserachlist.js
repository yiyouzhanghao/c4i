const routes = require("koa-router")()
routes.get("/snserachlist/:sn",async (ctx)=>{
    console.log(ctx)
})
module.exports = routes