const clearCartButton = document.getElementById('clear-cart')


//clear cart functionality
clearCartButton.addEventListener('click', () => {
    const confirmClear = confirm('Are sure bro');
    if (confirmClear) {
      //clear local storage and cart display
      localStorage.removeItem('cart');
      cartItemsDiv.innerHTML = ''; //Clear items in the cart display
      totalPriceElement.textContent = '0.00'; //Reset total price
      alert('Cart has been cleared :')
    }
  })