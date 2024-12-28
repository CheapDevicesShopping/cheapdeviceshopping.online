// Initialize item count
let itemCount = 0;

// Select the Add to Cart buttons and the cart counter span
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');

// Add click event listeners to each Add to Cart button
addToCartButtons.forEach(button => {
  button.addEventListener('click', () => {
    itemCount++; // Increment item count
    cartCount.textContent = itemCount; // Update cart counter
    alert('Item added to cart!');
  });
});