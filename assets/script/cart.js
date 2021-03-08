i = 0;

let cartItems = [];

function add(id) {
  if (i >= 0) {
    document.getElementById("amount").innerHTML = i += 1;
  }
  cartItems.push(id);
  renderCart();
  // let cart = localStorage.getItem("cart");
  // let cartItems = JSON.parse(cart);
  // document.getElementById("amount").innerHTML = cartItems.length;
  // cartList.push(id);
  // console.log(cartItems);
  // localStorage.setItem("cart", JSON.stringify(cartList));
  // createCart();
}

function createCart() {
  let cartItems;
}

function renderCart() {
  let cartList = document.getElementById("cartList");
  products = [];
  cartList.innerHTML = "";
  cartItems.forEach((item) => {
    products = mangaBooks.filter((book) => {
      return book.id == item;
    });
    products.forEach((product) => {
      cartList.innerHTML += `

      <li id="cartFont"><img src=${product.img} alt=${product.title} id="cartImg"/>${product.title}<label id="amount_cart"></label></br>
      <button type="button" name="button" onclick="remCart()" id="remBtn">
        Remove
      </button></li>
      `;
    });
  });
}

function showCart() {
  let checkout = document.getElementById("checkout");
  let cart = document.getElementById("cartMenu");
  cart.classList.toggle("show");
  checkout.innerHTML = `<button type="button" name="button" onclick="" id="checkout">
    <a href="payment.html">Checkout</a>
  </button>`;
}

function remCart() {
  let cartList = document.getElementById("cartList");
  products = [];
  cartList.innerHTML = "";
  cartItems.forEach((item) => {
    products = mangaBooks.filter((book) => {
      return book.id == item;
    });
    products
      ? products.forEach((product) => {
          cartList.innerHTML -= `

      <li id="cartFont"><img src=${product.img} alt=${product.title} id="cartImg"/>${product.title}<label id="amount_cart"></label></br>
      <button type="button" name="button" onclick="remCart()" id="remBtn">
        Remove
      </button></li>
      `;
        })
      : (cartList.innerHTML -= `

    <li id="cartFont">Nothing in cart</li>
    `);
  });
}
// function mangaAmount(id) {
//   i = 0;
//   amount = document.getElementById("amount_cart");
//   if(cartItems.include(${id.title})){
//       amount = i+1
//   }
// }
