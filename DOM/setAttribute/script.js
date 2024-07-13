// using setAttribute to change product images 

const product1ImageEl = document.getElementById("product1").querySlelector("img")

console.log(product1ImageEl)

producr1ImageEl.setAttribute("src", "https://cdn.pixabay.com/photo/2024/06/21/08/21/hut-8843868_1280.jpg")

product1ImageEl.setAttribute
("alt", "A hut in the forest")



// Change the product link 

const product1LinkEl = document.getElementById("product1").querySelector("a")


product1LinkEl.setAttribute("href", "https://www.example.com")

console.log(product1LinkEl) // <a href="https://www.example.com">Product 1</a>





