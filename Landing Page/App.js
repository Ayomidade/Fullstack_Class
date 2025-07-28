var overlay = document.getElementById("overlay");

var button = document.getElementById("btn");
button.addEventListener("click", (e) => {
  e.preventDefault();
  alert("hello world");
});
function open() {
  // overlay.style.display = "flex";
  alert("hello world");
}
function close() {
  overlay.style.display = "none";
}
