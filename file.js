// // var overlay = document.getElementById("container");
// var add = document.getElementById("event");
// // var button1 = document.getElementById("close");

// add.addEventListener("click", () => {
//   events.style.display = "flex";

// });

// button1.addEventListener("click", () => {
//   container.style.display = "none";
// });

// var links = document.getElementById("links");
// var menu = document.getElementById("bar");

// menu.addEventListener("click", () => {
//   links.style.display = "block";
// });

var isLoggedIn = false;
if (isLoggedIn) {
  console.log("You are Active");
} else if (!isLoggedIn) {
  console.log("You are Inactive");
}

var userAge = 10;
if (userAge >= 50) {
  console.log("You are old enough");
}
else if (userAge <= 45) {
  console.log("You are young enough");
} else {
  console.log("You are not in the age range");
}

var isLoggedIn = true;
var isAllowed = false;
if (isLoggedIn && !isAllowed) {
  console.log("You are logged in and allowed")
}
