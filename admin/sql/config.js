const mysql = require("mysql")
const pool = mysql.createPool({
    host:"127.0.0.1",
    user:"root",
    password:"123456",
    database:"c4i",
    connectionLimit : 10,
})
module.exports = pool
