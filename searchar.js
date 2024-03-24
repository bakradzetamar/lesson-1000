"use strict";
//  the length of filtered array
function filterProducts() {
    const searchInput = document.getElementById('search-input').value.toLowerCase();
    const filteredProducts = products.filter(product => product.name.toLowerCase().includes(searchInput));
    displayProducts(filteredProducts);
    
   
    const filteredLength = filteredProducts.length;
    console.log('Filtered products length:', filteredLength);
}
