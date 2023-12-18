const menuIcon=document.querySelector("#menu-icon")
const menu=document.querySelector("#menu")

menuIcon.addEventListener("click",()=>{
    if(menu.className==="hidden"){
        menu.classList.remove("hidden")
    }
    else{
        menu.classList.add("hidden")
    }
})
const logn=document.querySelector(".box-login")
const wholediv=document.querySelector(".login-whole")
const input=document.querySelector(".social-input")
const form=document.querySelector("form")
form.addEventListener("submit",(e)=>{
e.preventDefault();
logn.classList.add("invisible")
const thanksign=document.createElement("div");
thanksign.innerHTML=` <h1><i>Thanks for Signing.</i></h1>

`
thanksign.classList.add("llll")
wholediv.appendChild(thanksign);
thanksign.classList.add("animatedPayment");
})
