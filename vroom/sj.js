
const navbar = document.querySelector("nav");
const navList = document.getElementById("nav-list");
const arrow = document.getElementById("arrow");
let isNav = false;
arrow.addEventListener("click", function () {
  navList.classList.toggle("visible");
  arrow.classList.toggle("rotate");
  isNav = navList.classList.contains("visible");
  console.log(isNav)
});


document.addEventListener("click", function(event) {
  const toggleBtn = document.getElementById("arrow");
  const navbar = document.getElementById("nav-list");
  const target = event.target;
  const isNavbar = target === navbar || navbar.contains(target);
  const isToggleBtn = target === toggleBtn;
  console.log("state: ", isNav)
  if (!isNavbar && !isToggleBtn && isNav == true) {
    navbar.classList.remove("visible");
    toggleBtn.classList.toggle("rotate")
    isNav = false
    console.log("state: ", isNav)
  }
});