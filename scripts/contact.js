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

const form=document.querySelector("form");
const contact=document.querySelector(".contact-text").children[0]
const textarea=document.querySelector(".contact-text")

form.addEventListener("submit",(e)=>{
    e.preventDefault();

    const value=textarea.value;
    console.log(value);
const div=document.createElement("div");
div.innerHTML=`
 <h1><i>Thanks for Contacting.</i></h1>`
    form.classList.add="invisible";
    textarea.appendChild(div);
    setTimeout(()=>{
        textarea.removeChild(div);
    },1500);
})