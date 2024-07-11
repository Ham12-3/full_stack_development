const productCardEls = document.querySelectorAll('.product-card');

console.log(productCardEls)

// Extract and log names of all products 

const productNamesEls = document.querySelectorAll('.product-name');


console.log(productNamesEls)

productNamesEls.forEach((product)=> {
    console.log(product.innerHTML)
})


// Select and log all prices of laptop category product 


const productNameEls = document.querySelectorAll('[data-category="laptop"] .product-price');

console.log(laptopPricesEls)


laptopPricesEls.forEach((price)=> {
    console.log(el.textContent)
})

// select all prodcutw with a rating about 4.6 

const highestRatingEl = document.querySelectorAll('[data-rating = "4.7"], [data-rating = "4.8"]');


console.log(highestRatingEl) 


highestRatingEl.forEach((product)=> {
    console.log(product.innerHTML)
})  // this will log the product name and price of the product with a rating of 4.7 and 4.8

