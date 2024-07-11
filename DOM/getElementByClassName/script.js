// Selecting all elements with the className fiction

const fictionElements = document.getElementsByClassName("fiction");

// Selecting all elements with the className non-fiction

const nonFictionSectionEl = document.getElementById("nonFictionSection");

const nonFiction = document.getElementsByClassName("non-fiction");

// Loop  through the HTML Collection

const fictionBooksElArr = Array.from(fictionElements);

fictionBooksElArr.map((el) => {
  console.log(el);
});
