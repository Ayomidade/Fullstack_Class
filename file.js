var overlay = document.getElementById("container");
var button = document.getElementById("open");
var button1 = document.getElementById("close");

// button.addEventListener("click", () => {
//   alert("Hello World");
// });
function open() {
  container.style.display = "flex";
}
function close() {
  container.style.display = "none";
}