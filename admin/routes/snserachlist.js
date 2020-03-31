const pool = require("../sql/config.js")
const router = require("koa-router")()
router.get("/",async (ctx)=>{
    let data = ctx.query.sn
    let sql = `SELECT * FROM c4i where service_sn like "%${data}";`
    function querySn(sql){
        return new Promise((resolve,reject)=>{
            pool.getConnection((err,connect)=>{
                if(err) throw err;
                connect.query(sql,(err,result)=>{
                    if(err) throw err;
                    resolve(result)
                })
            }) 
        })
    }
    const body = await querySn(sql)
    ctx.body = body
})
module.exports = router.routes()