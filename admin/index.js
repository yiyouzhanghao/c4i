const app = require("express")()
app.get('/snserachlist',(req,res)=>{
    console.log(req.query)
})
app.listen(3000)
