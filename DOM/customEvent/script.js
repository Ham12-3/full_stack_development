// Accessing the username input and submit button
const usernameEl = document.getElementById("username");

const submitButtonEl = document.getElementById("submitButton");

// Create a custom event
const usernameSubmited = new CustomEvent("usernameSubmitted", {
  bubbles: true,
  cancelable: true,
  detail: {
    text: "",
  },
});

// Attach an event listener to handle custom event

document.addEventListener("usernameSubmitted", function (event) {
  console.log(`Username is ${event.detail.text} has been submitted`);
});

// Attach an event lsitener to the submit button

submitButtonEl.addEventListener("click", function () {
  usernameSubmited.detail.text = usernameEl.value;
  document.dispatchEvent(usernameSubmited);
});
