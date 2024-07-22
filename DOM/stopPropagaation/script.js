// Add event Listener to the outerDiv

document.getElementById("outerDiv").addEventListener(
  "click",
  function (event) {
    alert("Outer Div clicked! event phase " + event.eventPhase);
  },
  false
); //Bubbling phase

// Add event listener to the mddleDiv

document.getElementById("middleDiv").addEventListener(
  "click",
  function (event) {
    alert("Middle Div clicked! event phase " + event.eventPhase);
    event.stopPropagation(); //Stop the event propagation
  },
  false
); // Bubbling phase

// Add event listener to the innerDiv

document.getElementById("innerDiv").addEventListener(
  "click",
  function (event) {
    alert("Inner Div clicked! event phase " + event.eventPhase);
  },
  false
); // Bubbling phase
