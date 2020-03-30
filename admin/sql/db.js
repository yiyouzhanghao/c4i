const mysql = require("mysql")
const config = require("../sql/cofig.js")
class DB{
    constructor(config){
        this.config = config
        this.connectStatus = null
    }
    static getinstence(){
        if (!DB.instence){
             DB.instence = new DB(config)
        }
        return DB.instence
        
    }
    getconnect(){
        if(!this.connectStatus){
            let connection = mysql.createConnection(
                this.config
            )
            return this.connectStatus = connection.connect()
        }else{
            return this.connectStatus
        }
    }
    getquery(sql){
        return new Promise((resolv,reject)=>{
             this.connectStatus.query(sql,(err,result)=>{
                if(err){
                    console.log(err)
                }else{
                    resolv(result)
                }
            })
        })
    }
}
module.exports = DB