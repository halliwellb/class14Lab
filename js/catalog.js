/* global Product, Cart */

'use strict';

// Set up an empty cart for use on this page.
state.cart = new Cart([]);

// On screen load, we call this method to put all of the product options
// (the things in the state.allProducts array) into the drop down list.
function populateForm() {

  //TODO: Add an <option> tag inside the form's select for each product
  const selectElement = document.getElementById('items');
  console.log(state.allProducts)
  for (let i in state.allProducts) {
    let optionTag = document.createElement('option');
    optionTag.textContent = state.allProducts[i].name;
    optionTag.value = state.allProducts[i].name;
    selectElement.appendChild(optionTag);
  }
}

// When someone submits the form, we need to add the selected item to the cart
// object, save the whole thing back to local storage and update the screen
// so that it shows the # of items in the cart and a quick preview of the cart itself.
function handleSubmit(event) {
  // TODO: Prevent the page from reloading
  event.preventDefault();
  // Do all the things ...
  addSelectedItemToCart();
  state.cart.saveToLocalStorage();
  state.cart.updateCounter();
  updateCartPreview();

}

// TODO: Add the selected item and quantity to the cart
function addSelectedItemToCart() {
  // TODO: suss out the item picked from the select list
  let itemPicked = document.getElementById('items').value;
  console.log(itemPicked);
  // TODO: get the quantity
  let quantityEl = document.getElementById('quantity').value;
  console.log(quantityEl);
  // TODO: using those, add one item to the Cart
  state.cart.addItem(itemPicked, quantityEl);
}

// TODO: As you add items into the cart, show them (item & quantity) in the cart preview div
function updateCartPreview() {
  // TODO: Get the item and quantity from the form
  // console.log(item)
  // let product = item.product;
  // let quantity = item.quantity;
  // console.log(product, quantity)
  let itemPicked = document.getElementById('items').value;
  console.log(itemPicked);
  let quantityEl = document.getElementById('quantity').value;
  console.log(quantityEl);
  // TODO: Add a new element to the cartContents div with that information
  let cartContentsEl = document.getElementById('cartContents');
  let itemDiv = document.createElement('div');
  itemDiv.textContent = `${itemPicked}, ${quantityEl}`;
  cartContentsEl.appendChild(itemDiv);
}

// Set up the "submit" event listener on the form.
// This is the trigger for the app. When a user "submits" the form, it will
// Call that handleSubmit method above and kick off the whole process
const catalogForm = document.getElementById('catalog');
catalogForm.addEventListener('submit', handleSubmit);

// Before anything else of value can happen, we need to fill in the select
// drop down list in the form.
populateForm();
