const DB = require("../sql/db.js")
const router = require("koa-router")()
router.get("/",async (ctx)=>{
    let data = ctx.query.sn
    let sql = `SELECT * FROM c4i where where service_sn like %${data}`
    const db = DB.getinstence()
    db.getconnect()
    const queryData = await db.getquery(sql)
    console.log(queryData)
})
module.exports = router.routes()