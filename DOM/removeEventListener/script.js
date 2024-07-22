// Named function for alerting the message

// we cannot use anonymous function in removeEventListener

function showAlert() {
  console.log("Hello World");
}

// gettting the button element

const alertButtonEl = document.getElementById("alertButton");

// Add addEventListener to the element

alertButtonEl.addEventListener("click", showAlert);

// Named function for removing event

function removeAlert() {
  alertButtonEl.removeEventListener("click", showAlert);
}

// getting the remove button element

const removeButtonEl = document.getElementById("removeButton");

// Add addEventListener to the element

removeButtonEl.addEventListener("click", removeAlert);
