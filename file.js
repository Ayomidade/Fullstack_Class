var overlay = document.getElementById("container");
var button = document.getElementById("open");
var button1 = document.getElementById("close");

button.addEventListener("click", () => {
  container.style.display = "flex";
});

button1.addEventListener("click", () => {
  container.style.display = "none";
});
