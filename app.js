const body = document.querySelector(".body");
const backgroundimage=document.querySelector(".background-image")

let otherbtn = document.querySelector(".otherbtn")
let contactbtn = document.querySelector(".contactbtn")
let otherpopup=document.createElement("div")
let contactpopup=document.createElement("div")
otherbtn.addEventListener("click",function(){
    backgroundimage.append("otherpopup")
    otherpopup.setAttribute("class","otherpopup")
})
contactbtn.addEventListener("click",function(){
    backgroundimage.append("contactpopup")
    contactpopup.setAttribute("class","contactpopup")
})
