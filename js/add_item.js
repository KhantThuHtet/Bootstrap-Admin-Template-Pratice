let hamburgerMenu = document.getElementsByClassName("hamburger-menu")[0];
let sidebar = document.getElementsByClassName("sidebar")[0];
let closeMenu = document.getElementsByClassName("close-menu")[0];

hamburgerMenu.addEventListener("click", () => {
  sidebar.style.left = "0";
});

closeMenu.addEventListener("click", () => {
  sidebar.style.left = "-100%";
});

$(document).ready(function () {
  $("#example").DataTable();
});