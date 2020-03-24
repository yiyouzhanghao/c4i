const connection = require("./mysqlcofig.js")
function sqlConnection(service_sn){
    connection.connect()
    let data 
    function sndata(err,result){
        if (err) throw err
        else {
            return data = result
        }
    }
    let data = connection.query('select * from c4i where service_sn like "%?"',[service_sn],sndata)
    return data
}
module.exports = sqlConnection