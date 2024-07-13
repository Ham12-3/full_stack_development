// Gallery of images


const imagesEl = document.getElementById("imageGallery").querySelectorAll("img")


// Create an array to store images by Alice 

let imagesByAlice =[];


// Use getAttribute to filter images by author Alice 
imagesEl.forEach((image)=> {
const author = image.getAttribute("data-author")

    console.log(author)

    if(author==="Alice"){
        imagesByAlice.push(image)
    }

  
})

imagesByAlice.forEach((image)=> {
    console.log(image)


})

// Hide images that are not by Alice 

imagesEl.forEach((image)=> {
    const author = image.getAttribute("data-author")

    if(author!=="Alice"){
        image.style.display = "none"
    }
})

