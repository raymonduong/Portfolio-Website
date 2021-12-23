var time = new Date();
var hours = time.getHours();
var greet;
if (hours < 12) greet = "Good morning";
else if (hours >= 12 && hours <= 17) greet = "Good afternoon";
else if (hours >= 17 && hours <= 24) greet = "Good evening";
document.getElementById("Greetings").innerHTML =
  greet + ", my name is Raymond. 👋";

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
  hamburger.classList.toggle("active");
  navMenu.classList.toggle("active");
}
const navLink = document.querySelectorAll(".nav-link");

navLink.forEach((n) => n.addEventListener("click", closeMenu));

function closeMenu() {
  hamburger.classList.remove("active");
  navMenu.classList.remove("active");
}

