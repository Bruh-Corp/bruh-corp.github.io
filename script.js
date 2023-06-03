const toggleButton = document.getElementById("toggleButton");
//const box2 = document.getElementById('box2');
const aboutBox = document.getElementById("about");
const tri = document.querySelector("#toggleButton>h1");
toggleButton.addEventListener("click", function () {
  //box2.classList.toggle('visible');
  aboutBox.classList.toggle("hidden");
  tri.classList.toggle("rotate");
});

// const triContact = document.getElementById("triContact");
// const contactButton = document.getElementById("contactButton");
// const contactBox = document.getElementById("contact");
// contactButton.addEventListener("click", function () {
//   contactBox.classList.toggle("abc");
//   triContact.classList.toggle("rotate");
// });

const navbar = document.querySelector("nav");
const navList = document.getElementById("nav-list");
const arrow = document.getElementById("arrow");
navbar.addEventListener("click", function () {
  navList.classList.toggle("visible");
  arrow.classList.toggle("rotate");
});

function playSound(fileName) {
  var snd = new Audio(fileName);
  snd.play(); //plays the sound
}
