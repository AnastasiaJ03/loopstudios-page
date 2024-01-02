const burger = document.getElementById("hamburger");
const menu = document.querySelector(".mobile");
const closebtn = document.querySelector(".close");

const handleOpenMenu = () => {
  menu.classList.add("open");
};

const handleCloseMenu = () => {
  menu.classList.remove("open");
};

burger.addEventListener("click", handleOpenMenu);
closebtn.addEventListener("click", handleCloseMenu);
