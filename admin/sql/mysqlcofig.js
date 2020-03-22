const mysql = require("mysql")
let mysqlCofig = mysql.createConnection({
    host:"192.168.1.230",
    user:"root",
    password:"123456",
    database:"c4i"
})
// exports.mysqlCofig = mysqlCofig
module.exports = mysqlCofig

