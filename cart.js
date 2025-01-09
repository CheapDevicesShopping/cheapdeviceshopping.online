// Initialize the cart as an empty array
let cart = [];

// Select Add to Cart buttons and cart count display
const addToCartButtons = document.querySelectorAll('.add-to-cart');
const cartCount = document.getElementById('cart-count');

document.querySelectorAll('.add-to-cart').forEach(button => {
  button.addEventListener('click', (event) => {
   // const cart = JSON.parse(localStorage.getItem('cart')) || []; // Load existing cart
    const productElement = event.target.closest('.product');
    const productId = productElement.getAttribute('data-id');
    const productName = productElement.getAttribute('data-name');
    const productPrice = parseFloat(productElement.getAttribute('data-price'));

    // Add item to cart
    const item = { id: productId, name: productName, price: productPrice };
    cart.push(item);

    // Update cart count
    cartCount.textContent = cart.length;

    // Save cart back to localStorage
    localStorage.setItem('cart', JSON.stringify(cart));

    alert(`${productName} has been added to your cart!`);
  });
});

// Load cart from local storage
function loadCart() {
    const storedCart = localStorage.getItem('cart');
    if (storedCart) {
      cart = JSON.parse(storedCart);
      cartCount.textContent = cart.length;
    }
  }
  
  // Call loadCart on page load
  loadCart();
  
  