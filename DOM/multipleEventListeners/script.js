// Access the button element

const buttonEl = document.getElementById("actionButton");

// Single click event listener

buttonEl.addEventListener("click", function () {
  console.log("Button clicked");
});

// double click
buttonEl.addEventListener("dblclick", function () {
  console.log("Button double clicked");
});

// Mouse movement

buttonEl.addEventListener("mouseenter", function () {
  console.log("Mouse moved");
});
