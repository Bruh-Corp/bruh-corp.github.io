const toggleButton = document.getElementById("toggleButton");
//const box2 = document.getElementById('box2');
const box2a = document.getElementById("box2a");
const tri = document.getElementById("tri");
toggleButton.addEventListener("click", function () {
  //box2.classList.toggle('visible');
  box2a.classList.toggle("hidden");
  tri.classList.toggle("rotate");
});

const triContact = document.getElementById("triContact");
const contactButton = document.getElementById("contactButton");
const contactBox = document.querySelector(".box2b");
contactButton.addEventListener("click", function () {
  contactBox.classList.toggle("abc");
  triContact.classList.toggle("rotate");
});

const navbar = document.getElementById("navbar");
const box3 = document.getElementById("box3");
const navtri = document.getElementById("navtri");

navbar.addEventListener("click", function () {
  box3.classList.toggle("visible");
  navtri.classList.toggle("rotate");
});

function sound() {
  var snd = new Audio("./pics&shit/hover.mp3"); //wav is also supported
  snd.play(); //plays the sound
}
