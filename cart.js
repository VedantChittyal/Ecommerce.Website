const cartItems = document.getElementById("cart-items");
const totalEl = document.getElementById("total");

let cart = JSON.parse(localStorage.getItem("cart")) || [];
let total = 0;

cart.forEach(item => {
  total += item.price;

  const div = document.createElement("div");
  div.className = "cart-item";
  div.innerHTML = `
    <span>${item.name}</span>
    <span>₹${item.price}</span>
  `;
  cartItems.appendChild(div);
});

totalEl.innerText = "Total: ₹" + total;
