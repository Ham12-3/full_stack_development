

// Using getAttribute and setAttributes 


const userCard = document.getElementById('userCard');

const userId = userCard.getAttribute('data-user-id');

console.log(userId); // 123

// odifying data attributes 

userCard.setAttribute('data-user-role', "super-admin");

userCard.setAttribute("data-user-position", "Engineer")

console.log(userCard)

// Usong the dataset 

const userId2 = userCard.dataset.userRole

