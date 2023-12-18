const menuIcon=document.querySelector("#menu-icon")
const menu=document.querySelector("#menu")
const parentparentdiv=document.querySelector(".cartOncart");
const subtotalEl=document.querySelector("#subtotal");
const parentdiv=document.querySelector("cart_items");
const shopMore=document.querySelector(".cart_items-heading");
const totalCart=document.querySelector(".cart");
const paymentmain=document.querySelector(".paymentmain");
const paymentmain2=document.querySelector(".paymentmain2");
const Datetoday=document.querySelector(".Datetoday");
const credit=document.querySelector(".credit");



menuIcon.addEventListener("click",()=>{
    if(menu.className==="hidden"){
        menu.classList.remove("hidden")
    }
    else{
        menu.classList.add("hidden")
    }
})


function updateCart(){
    renderCartItems();
    renderSubtotal()
}
let cart=JSON.parse(localStorage.getItem("cart"))||[];

function updateCart(){
    parentparentdiv.innerHTML="";
    cart.map((item)=>{
    
    const newdiv=document.createElement("div");
    newdiv.innerHTML=`
    <img src="${item.img}" alt="" class="cart_item-img">
<div class="cart_item-description">
    <h3 class="product_name">${item.title}</h3>
    <h4 class="product_price">Price:${item.price}</h4>
    <p class="cart_item-shipping">Free Shipping</p>
</div>
<div class="cart_item-actions">
    <button class="submit-button" onclick="removeItemFromCart(${item.id})"><i class="fa-solid fa-trash" ></i></button>
<div>

<button class="submit-button" onclick="changeNumberOfItems('minus',${item.id})">
<i class="fa-solid fa-minus" ></i></button>
<p style="display:inline;">${item.numberOfItem}</p>
    <button class="submit-button" onclick="changeNumberOfItems('plus',${item.id})"><i class="fa-solid fa-plus"></i></button>
</div>    
</div>
`
{/* <input type="number" style="width:3vw;" value="${item.numberOfItem}"> */}
newdiv.classList.add("card");
newdiv.classList.add("cart_item");
// newdiv.classList.add("flex-space-around");

parentparentdiv.appendChild(newdiv)

renderSubtotal()

})}

function removeItemFromCart(id){
    cart=cart.filter((item)=>{
        return item.id!==id;
    });
    updateCart()
    localStorage.setItem("cart",JSON.stringify(cart));
     renderSubtotal();

}

function changeNumberOfItems(action,id){
    cart= cart.map((item)=>{
 
         let numberOfItem=item.numberOfItem;
         if(item.id===id){
             if(action==='minus' && numberOfItem>1){
                 numberOfItem--;
             }
             else if(action==='plus' && numberOfItem<item.stock){
                 numberOfItem++;
             }
         }
         return{
             ...item,
             numberOfItem
         }
     })
     updateCart();
     localStorage.setItem("cart",JSON.stringify(cart));



     renderSubtotal()

 }
 updateCart();


 function renderSubtotal(){
    let totalPrice=0 , totalItems=0;

    cart.forEach((item)=>{
        totalPrice+=item.price*item.numberOfItem;
        totalItems+=item.numberOfItem;
    })
    subtotalEl.innerHTML=`Subtotal(${totalItems} items):$${totalPrice.toFixed(2)}`
    nothingInCart();
    paymentmain.innerHTML=`<h3>${totalPrice.toFixed(2)}</h3>`
    paymentmain2.innerHTML=`<h3>${totalPrice.toFixed(2)}</h3>`

}
function removeAllItems(){
    localStorage.removeItem("cart");
    totalCart.innerHTML="<h1>NOTHING IN CART</h1>";
    totalCart.classList.add("animatedPayment");

    nothingInCart();
    subtotalEl.innerHTML=`Subtotal(0 items):$0`
}

function nothingInCart(){
    if(cart.length===0){
        totalCart.innerHTML=`<h1>NOTHING IN CART</h1>`
    // totalCart.classList.add("animatedPayment");

     }
}
nothingInCart();
const date=Date();
const daate=new Date().getDate();
const month=new Date().getMonth();
const year=new Date().getFullYear();


Datetoday.innerHTML=`${daate}/${month+1}/${year}`
function placeOrder(){
if(credit.value!==""){
    removeAllItems()
    totalCart.innerHTML=`<h1>Payment Completed</h1>`;
    // totalCart.classList.add("animatedPayment");
}
    

    
}