// Add a single event listener to the ul

document.getElementById("itemList").addEventListener("click", function (e) {
  const clickedEl = event.target;

  //   Check the clicked element is a list item

  console.log(clickedEl.tagName);
  if (clickedEl.tagName === "LI") {
    const itemNumber = clickedEl.getAttribute("data-item");
    console.log(`You clicked ${itemNumber}`);
  }
});
