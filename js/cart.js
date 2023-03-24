/* global Cart */
'use strict';

// Create an event listener so that when the delete link is clicked, the removeItemFromCart method is invoked.
const table = document.getElementById('cart');
table.addEventListener('click', removeItemFromCart);

function loadCart() {
  const cartItems = JSON.parse(localStorage.getItem('cart')) || [];
  state.cart = new Cart(cartItems);
}

// Make magic happen --- re-pull the Cart, clear out the screen and re-draw it
function renderCart() {
  loadCart();
  clearCart();
  showCart();
}

// TODO: Remove all of the rows (tr) in the cart table (tbody)
<<<<<<< HEAD
function clearCart() {}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
function showCart() {
  let tableBody = document.querySelectorAll('tbody');

  for(let i = 0; i < state.cart.items.length; i++){
  let tableRow = document.createElement('tr');
  let tableData = document.createElement('td');
  
  }

  // TODO: Find the table body

  // TODO: Iterate over the items in the cart
  // TODO: Create a TR
  // TODO: Create a TD for the delete link, quantity,  and the item
  // TODO: Add the TR to the TBODY and each of the TD's to the TR

=======
function clearCart() {
  let tableBody = document.querySelectorAll('tr');
  tableBody.innerHTML= '';
>>>>>>> 28413d244e1d20db3f02fd0383e8420bf8862616
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
// TODO: Find the table body
// TODO: Iterate over the items in the cart
function showCart() {
  console.log(cart)
  let tableBody = document.querySelectorAll('tbody')
  console.log(state.cart)
  for(let i = 0; i < state.cart.items.length; i++){
    let tableRow = document.createElement('tr');
    let tableData = document.createElement('td');
    tableData.textContent = 'delete', 'quantity', `${state.cart[i]}`;
    tableRow.appendChild(tableData);
  }
}
// TODO: Create a TR
// TODO: Create a TD for the delete link, quantity,  and the item
// TODO: Add the TR to the TBODY and each of the TD's to the TR

function removeItemFromCart(event) {
  event.preventDefault();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  Cart.prototype.removeItem();
  // TODO: Save the cart back to local storage
  Cart.prototype.saveToLocalStorage();
  // TODO: Re-draw the cart table
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
