const navLinks = document.querySelector("#nav-links");
const menuIcon = document.querySelector("#menu-icon");
const closeIcon = document.querySelector("#close-icon");

const showMenu = () => {
  navLinks.style.right = "0";
};
const hideMenu = () => {
  navLinks.style.right = "-200px";
};

menuIcon.addEventListener("click", showMenu);
closeIcon.addEventListener("click", hideMenu);
