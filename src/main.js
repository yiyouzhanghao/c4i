import "./css/reset.css"
import "./css/index.css"
import axios from "axios"
const template = require("./template/sn.art")
function snsearchclick(){
    let sninput = document.getElementById("sninput")
    let sninputvalue = sninput.value
    if(sninputvalue){
        axios.get('/snserachlist',{
            params: {
              sn:sninputvalue 
            }
          }
        ).then((response)=>{
            let data = response.data
            document.getElementById("render").innerHTML = template({data:data})
        }).catch((err)=>{
          console.log(err)
        })
    }
    else{
        sninput.setAttribute("placeholder","输入不能为空")
    }
}
let snsearch = document.getElementById("snsearch")
snsearch.addEventListener("click",snsearchclick)
function changebtnclick(e){
  let ele = document.getElementById(`${e.target.className}`)
  if(e.target.id=="change"){
    console.log(ele)
  }
}
let render = document.getElementById("render")
render.addEventListener("click",changebtnclick)

