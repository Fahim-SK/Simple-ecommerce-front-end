const menuIcon=document.querySelector("#menu-icon")
const menu=document.querySelector("#menu")
const subtotale=document.querySelector("#subtotale")
const body=document.body;
const para=document.createElement("span");



menuIcon.addEventListener("click",()=>{
    if(menu.className==="hidden"){
        menu.classList.remove("hidden")
    }
    else{
        menu.classList.add("hidden")
    }
})



const parent=document.querySelector(".product_body");
let products=[{

    id:1,
    img:"./images/glass.jpg",
    title:"Glass",
    price:30,
    stock:7
    }
    ,{
        id:2,
        img:"./images/head.jpg",
    title:"Head-phone",
    price:70,
    stock:5
    
    },
    {
        id:3,
        img:"./images/watch.jpg",
    title:"Watch",
    price:130,
    stock:20
    
    },{
        id:4,
        img:"./images/bottle.jpg",
    title:"Bottle",
    price:19.99,
    stock:73
    
    },{
        id:5,
        img:"./images/camera.jpg",
    title:"Camera",
    price:300,
    stock:3
    
    },{
        id:6,
        img:"./images/cup.jpg",
    title:"Cup",
    price:10.99,
    stock:33
    
    },{
        id:7,
        img:"./images/tool.jpg",
    title:"Seat",
    price:30.99,
    stock:5
    
    },{
        id:8,
        img:"./images/analog-watch.jpg",
    title:"Analog-Watch",
    price:19.99,
    stock:9
    
    },{
        id:9,
        img:"./images/bag.jpg",
    title:"Bag",
    price:149.99,
    stock:13
    
    },{
        id:10,
        img:"./images/pen.jpg",
    title:"Pen",
    price:10.99,
    stock:15
    
    },{
        id:11,
        img:"./images/shoes.jpg",
    title:"Pair of Shoes",
    price:24.99,
    stock:30
    
    },


];

const productBody=document.querySelector(".product_body");
const cartItem=document.querySelector(".cartItem");


function renderProducts(){
    products.forEach((item)=>{
        productBody.innerHTML+=`
        <div class="glass" >
        
            <img src="${item.img}" alt="" class="img-glass">
            <h2 style="padding-top: 20px; ">${item.title}</h2>
            <h3>Price:$${item.price}</h3>
            <p class="des">Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus, eius.</p>
            <button class="submit-button" onclick="addToCart(${item.id})">Add to Cart</button>
            <h2 style="color:#FBEAFF;">${item.stock} in Stock</h2>
        </div>`
    })
}
renderProducts();

let cart=JSON.parse(localStorage.getItem("cart"))||[];

function addToCart(id){



    setTimeout(()=>{
        para.innerHTML=``;
        para.classList.remove("new");
    },1000);
    
    para.innerHTML=`Added to cart`;
    para.classList.add("new");
    body.appendChild(para);



if(cart.some((item)=>item.id===id)){
    changeNumberOfItems('plus',id)
}
else{
    const item=products.find((item)=>item.id===id);
    cart.push({
        ...item,
        numberOfItem:1
    });
    updateCart()
}
renderSubtotal();
}



function renderCartItems(){
    cartItem.innerHTML="";
    cart.forEach((item)=>{
    const div=document.createElement("div");
    div.innerHTML=`<input type="checkbox">
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
<input type="number" style="width:3vw;" value="${item.numberOfItem}">
    <button class="submit-button" onclick="changeNumberOfItems('plus',${item.id})"><i class="fa-solid fa-plus"></i></button>
</div>    
</div>`
// cartItem.appendChild(div);
    })
    
}
function updateCart(){
    renderCartItems();
    renderSubtotal();
    localStorage.setItem("cart",JSON.stringify(cart));
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
    
}

function renderSubtotal(){
    let totalPrice=0 , totalItems=0;

    cart.forEach((item)=>{
        totalPrice+=item.price*item.numberOfItem;
        totalItems+=item.numberOfItem;
    })
    subtotale.innerHTML=`Subtotal(${totalItems}items):$${totalPrice.toFixed(2)}`
}
renderSubtotal();



const subscribeButton=document.querySelector(".btn-subscribe");
function subscribe(){
    subscribeButton.innerText="SUBSCRIBED"
}
