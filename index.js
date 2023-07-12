let box = document.getElementsByClassName("box")
let arr = [...box]
let display = document.getElementById("result")
let button = document.getElementById("button")
let msg = document.getElementById("message")

button.addEventListener("click" , ()=>{
    display.style.visibility = "hidden"
window.location.reload()
} )

arr.forEach((elem,ind)=>{
    elem.addEventListener("click" , ()=>{
        if(elem.childElementCount==0){
            // console.log(ind)
        clickFunction(elem,ind)
        }
        
    })
})

let flag = false
function   clickFunction(elem,ind){
 flag = !flag
    let h1 = document.createElement("h2")
  h1.innerText = flag==true?"X":"O" 
  let box = document.getElementById(`${elem.id}`)
  box.append(h1)
  
 let x= checkResult()
 if(x=="X"){
display.style.visibility = "visible"

    msg.innerText="X won"
 }else if(x=="O"){
    display.style.visibility = "visible"
    msg.innerText="O won"
    
 }
}

// get content
function getText(id){
    if (document.getElementById(`${id}`).childElementCount!==0){
let value = document.getElementById(`${id}`).children[0].innerText

return value

}else{
    return 1
}

}

function  checkResult(){

    // for rows
let str = ""
let str1 = ""
let str2 = ""
let str3 = ""
    for(let i=1;i<=3;i++){
  str = `${getText(i)}`+`${getText(i+3)}`+`${getText(i+6)}`
  str1 = `${getText(((i-1)*3)+1)}`+`${getText(((i-1)*3)+2)}`+`${getText(((i-1)*3)+3)}`
  str2 = `${getText(1)}`+`${getText(5)}`+`${getText(9)}`
  str3 = `${getText(3)}`+`${getText(5)}`+`${getText(7)}`
  if(str=="XXX" || str1=="XXX" || str2=="XXX" || str3=="XXX" ){
return "X"
  }else if(str=="OOO" || str1=="OOO"  || str2=="OOO" || str3=="OOO"){
    return "O"
  }

    }
   



}