import "./css/reset.css"
import "./css/index.css"
import axios from "axios"
function snsearchclick(){
    let sninput = document.getElementById("sninput")
    let sninputvalue = sninput.value
    if(sninputvalue){
        axios.get('/snserachlist',{
            params: {
              sn:sninputvalue 
            }
          }
        )
    }
    else{
        sninput.setAttribute("placeholder","输入不能为空")
    }
}
let snsearch = document.getElementById("snsearch")
snsearch.addEventListener("click",snsearchclick)