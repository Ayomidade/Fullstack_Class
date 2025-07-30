// alert("Working");

var button = document.getElementById("menu");

var nav = document.getElementById("nav");

var uni = document.getElementById("close");

button.addEventListener("click", () => {
  nav.style.display = "block";
  button.style.display = "none";
  uni.style.display = "block";
});

uni.addEventListener("click", () => {
  nav.style.display = "none";
  button.style.display = "block";
  uni.style.display = "none";
});
