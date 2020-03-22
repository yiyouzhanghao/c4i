const connection = require("./mysqlcofig.js")
var name = 1878
connection.connect()
connection.query('select * from c4i where service_sn like "%?"',[name],(err,result)=>{
    if (err) throw err
    console.log(result)
})