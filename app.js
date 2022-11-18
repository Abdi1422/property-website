const body = document.querySelector(".body");                     
const backgroundimage=document.querySelector(".background-image")
        
let otherbtn = document.querySelector(".otherbtn")    
let contactbtn = document.querySelector(".contactbtn") 
let twopopup=document.createElement("div")
let onepopup= document.createElement("div")
let popupbackground=document.createElement("div")
let byphone=document.createElement("h1")
let fromtheuk = document.createElement("p")
let num = document.createElement("p")
let abroad = document.createElement("p")
let num2 = document.createElement("p")
let open = document.createElement("p")
let time = document.createElement("p")
let more = document.createElement("p")
contactbtn.addEventListener("click",function(){
    backgroundimage.append(popupbackground)
    popupbackground.setAttribute("class","popupbackground")
    backgroundimage.append(twopopup)
    twopopup.setAttribute("class","twopopup")
    twopopup.append(byphone)
    byphone.innerText="By phone?"
    twopopup.append(fromtheuk)
    fromtheuk.innerText="From the uk"
    twopopup.append(num)
    num.innerText="01632 960218"
    twopopup.append(abroad)
    abroad.innerText="From abroad"
    twopopup.append(num2)
    num2.innerText="+44 1632 960377"
    open.innerText="Lines open"
    twopopup.append(time)
    time.innerText="Monday to Friday, 9am to 5pm"
    twopopup.append(more)
    more.innerText="* Calls to 0800 numbers are free when calling from a UK landline or personal mobile but charges may apply when calling from abroad. Please be advised that we may record calls for training and monitoring purposes."
})

let email=document.createElement("h1")
let cheap=document.createElement("p")
let twitter=document.createElement("p")
let at = document.createElement("p")
let insta = document.createElement("p")
let instat= document.createElement("p")
let more2= document.createElement("p")
otherbtn.addEventListener("click",function(){
    backgroundimage.append(popupbackground)
    popupbackground.setAttribute("class","popupbackground")
    backgroundimage.append(onepopup)
    onepopup.setAttribute("class","onepopup")
    onepopup.append(email)
    email.innerText="Email" 
    onepopup.append(cheap)
    cheap.innerText="Housesforcheap@gmail.com" 
    onepopup.append(twitter)
    twitter.innerText="Twitter"
    onepopup.append(at)
    at.innerText="@houseforcheap"
    onepopup.append(insta)
    insta.innerText="Instagram"
    onepopup.append(instat)
    instat.innerText="@homesforcheap"
    onepopup.append(more2)
    more2.innerText="* Please send us a secure message using the Inbox feature within your account. This will help us respond with information specific to you."
})

popupbackground.addEventListener("click",function(){
    popupbackground.remove()
    onepopup.remove()
    twopopup.remove()
})