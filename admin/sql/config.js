const mysql = require("mysql")
const pool = mysql.createPool({
    host:"192.168.1.230",
    user:"root",
    password:"123456",
    database:"c4i",
    connectionLimit : 10,
})
module.exports = pool
