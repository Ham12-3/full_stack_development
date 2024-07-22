// Add event listener to the div

document
  .getElementById("parentDiv")
  .addEventListener("click", function (event) {}, true);

//   Add event listener to the ul

document.getElementById("list").addEventListener(
  "click",
  function (event) {
    alert("List clicked! event phase " + event.eventPhase);
  },
  true
); // capturing phase

// Add event istener to the li

document.getElementById("item1").addEventListener(
  "click",
  function (event) {
    alert("Item clicked! event phase " + event.eventPhase);
  },
  true
); // Bubbling phase

document.getElementById("item2").addEventListener(
  "click",
  function (event) {
    alert("Item clicked! event phase " + event.eventPhase);
  },
  true
); // Bubbling phase
