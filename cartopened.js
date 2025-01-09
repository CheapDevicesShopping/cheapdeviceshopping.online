// Load cart from local storage
const cart = JSON.parse(localStorage.getItem('cart')) || [];
const cartItemsDiv = document.getElementById('cart-items');
const totalPriceElement = document.getElementById('total-price');


let totalPrice = 0;  //Initialize total price

// Display cart items and calculate total price
cart.forEach(item => {
  const itemDiv = document.createElement('div');
  itemDiv.textContent = `${item.name} - $${item.price}`;
  cartItemsDiv.appendChild(itemDiv);

  //Add item price to total
  totalPrice += item.price;
});

//Update total price in the HTML
totalPriceElement.textContent = totalPrice.toFixed(2);

