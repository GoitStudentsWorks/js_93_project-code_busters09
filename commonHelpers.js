import{s as r,u as p,i as m,f as $}from"./assets/footer-send-9a59ec19.js";import"./assets/vendor-cfb45d56.js";const _="/js_93_project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",w="/js_93_project-code_busters09/assets/yellow_basket_desctop_1x-min-6400acde.png",j="/js_93_project-code_busters09/assets/yellow_basket_mobile_1x-min-195418a1.png",M="/js_93_project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",S="/js_93_project-code_busters09/assets/yellow_basket_desctop_2x-min-91220a6c.png",T="/js_93_project-code_busters09/assets/yellow_basket_mobile_2x-min-566aede4.png",E="/js_93_project-code_busters09/assets/cart-modal-a27bffcd.png",b=document.querySelector(".modal-cart-submit"),q=document.querySelector(".cart-modal-content"),o=document.getElementById("cart-content");o.addEventListener("click",H);document.querySelector(".cart_products_container");const g=document.querySelector(".cart-quentity");let e=r.getFromStorage("cart");function H(t){t.target.closest(".cart-delete-all-button")&&(r.clearCart(),p(),g.textContent="Cart(0)",o.innerHTML=l())}function v(){if(e){const t=e.length;g.textContent=`Cart (${t})`}}v();function f(){let t=0;return e&&e.forEach(s=>{t+=s.price}),t.toFixed(2)}function U(){e&&e.length!==0?o.innerHTML=y():o.innerHTML=l()}U();const F=o.querySelector(".cart_products_list");h();function y(){const t=f();return`<div class="products_container">
  <div class="cart-add-products">      
    <div class="delete-all">        
      <button type="submit" class="cart-delete-all-button">Delete all            
        <svg class="cart_close_all" width="24" height="24">
          <use xlink:href="${m}#icon-ion_close-sharp"></use>
        </svg>            
      </button>          
    </div>        
    <div class="cart_products_container">       
      <ul class="cart_products_list">                        
        <!-- Add your products here -->            
      </ul>          
    </div>      
  </div>      
  <div class="products_order_container">      
    <p class="your_order">Your Order</p>        
    <div class="total-count">          
      <div class="total-count-div">            
        <p class="cart-total">Total</p>            
        <div class="cart-total-sum">              
          <p class="cart-sum">Sum:</p>              
          <p class="cart-sum-number">$${t}</p>
        </div>
      </div>
    </div>

    <form class="order-form">
      <div class="cart-input">
        <label class="label-cart">
          <span class="label-mark">Mail:</span>
          <input
            type="email"
            class="cart-email"
            id="email"
            placeholder="enter your email"
            multiple>
        </label>
      </div>
      <div class="cart-btn">
        <button type="submit" class="cart-checkout-button">Checkout</button>
      </div>
    </form>
    `}function h(){if(e){const t=e.map(({_id:c,name:i,img:n,category:a,size:d,price:C})=>{let L=a.replace(/_/g," ");return`
    <li id="${c}" class="cart-list">
      <div class="obj-delete">
        <button class="cart-delete-button">
          <svg class="cart_close_all" width="18" height="18">
            <use xlink:href="${m}#icon-ion_close-sharp"></use>
          </svg>
        </button>
      </div>
      <div class="cart-obj">
        <div class="add-img">
          <img src="${n}" alt="Product Image" class="product-image" wi>
        </div>
        <div class="add-img-info">
          <p class="product-name">${i}</p>
          <div class="product-category-size">
            <p class="product-category">Category: <span class="colored-text">${L}</span></p>
            <p class="product-size">Size: <span class="colored-text">${d}</span></p>
          </div>
          <p class="product-price">$ ${C}</p>
        </div>
      </div>
    </li>`}).join("");if(e.length===0)return;F.innerHTML=t,document.querySelectorAll(".cart-delete-button").forEach(c=>c.addEventListener("click",I))}}function I(t){const s=t.target.closest("li").id;r.removeFromCart(s),p(),e=r.getFromStorage("cart"),e.length===0&&(o.innerHTML=l());const c=document.querySelector(".cart-sum-number");c&&(c.textContent=f()),y(),h(),v()}function l(){return`  
  <div class="box-img">
    <picture>
      <source media="(min-width: 1440px)" srcset="
          ${_} 1x,
          ${M} 2x
        " type="image/png" />
      <source media="(min-width: 768px)" srcset="
          ${w} 1x,
          ${S} 2x
        " type="image/png" />
      <source media="(min-width: 320px)" srcset="
          ${j} 1x,
          ${T} 2x
        " type="image/png" />
      <img class="cart-img" src="${_}" alt="basket" />
    </picture>
  </div>
  <div class="cart-empty">
    <p class="cart-message">
      Your basket is <span class="hero-title-span">empty...</span>
    </p>
    <p class="cart-message-info">
      Go to the main page to select your favorite products and add them to
      the cart.
    </p>
  </div>
</div>`}if(document.querySelector(".order-form")){let s=function(c){c.preventDefault();const i=r.getCart().map(a=>({productId:a._id,amount:1})),n=document.querySelector(".cart-email");n.value&&$.order(n.value,i).then(a=>{const d=a.data.message;r.clearCart(),p(),g.textContent="Cart(0)",o.innerHTML=l(),q.innerHTML=P(d),R()}).catch(a=>{console.log(a)}).finally()};document.querySelector(".order-form").addEventListener("submit",s)}function R(){b.style.display="block",document.body.classList.add("no-scroll"),document.addEventListener("keydown",k),window.addEventListener("click",x)}function u(){b.style.display="none",document.removeEventListener("keydown",k),window.removeEventListener("click",x),document.body.classList.remove("no-scroll")}function k(t){t.key==="Escape"&&u()}function x(t){(t.target.classList.contains("cart-modal-content")||t.target.closest(".cart-delete-modal"))&&u()}function P(t){let s=t.substring(0,t.indexOf("Thank you for shopping")),c=t.substring(t.indexOf("Thank you for shopping"));return s=s.toUpperCase().replace("!",""),`
  <button class="cart-delete-modal">
    <svg class="cart_close_all" width="18" height="18">
      <use xlink:href="${m}#icon-ion_close-sharp"></use>
    </svg>
  </button>
  <img class="cart-modal-img" src="${E}" alt="basket" />
  
  <h1 class="cart-success">${s}</h1>
  <p class="cart-modal-info">${c}</p>
  `}
//# sourceMappingURL=commonHelpers.js.map
