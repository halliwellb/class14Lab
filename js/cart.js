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
function clearCart() {
  let tableRows = document.querySelectorAll('tbody');
  tableRows.innerHTML = '';
  console.log(tableRows)
}

// TODO: Fill in the <tr>'s under the <tbody> for each item in the cart
// TODO: Find the table body
// TODO: Iterate over the items in the cart
function showCart() {
  for(let i = 0; i < state.cart.items.length; i++){
    let tableBody = document.querySelectorAll('tbody')
    let tableRow = document.createElement('tr');
    let tableData = document.createElement('td');
    let itemsData = state.cart.items[i].product;
    let itemsData2 = state.cart.items[i].quantity;
    console.log(itemsData);
    console.log(itemsData2);
    tableData.innerHTML = itemsData, itemsData2;
    console.log(tableData);
    tableRow.appendChild(tableData);
    console.log(tableRow);
    tableBody.innerHTML = tableRow;
    console.log(tableBody);
  }
}
// TODO: Create a TR
// TODO: Create a TD for the delete link, quantity,  and the item
// TODO: Add the TR to the TBODY and each of the TD's to the TR

function removeItemFromCart(event) {
  event.preventDefault();
  // TODO: When a delete link is clicked, use cart.removeItem to remove the correct item
  state.cart.removeItem(event);
  // TODO: Save the cart back to local storage
  state.cart.saveToLocalStorage();
  // TODO: Re-draw the cart table
  showCart();
}

// This will initialize the page and draw the cart on screen
renderCart();
