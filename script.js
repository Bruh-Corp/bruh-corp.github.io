const toggleButton = document.getElementById("toggleButton");
//const box2 = document.getElementById('box2');
const aboutBox = document.getElementById("about");
const tri = document.querySelector("#toggleButton>h1");
toggleButton.addEventListener("click", function () {
  //box2.classList.toggle('visible');
  aboutBox.classList.toggle("hidden");
  tri.classList.toggle("rotate");
});

const contactButton = document.querySelector('#contactToggleButton');
const contactH1 = contactButton.querySelector('h1');
const contactBox = document.getElementById("contacts");
contactButton.addEventListener("click", function () {
   contactBox.classList.toggle("visible");
   contactH1.classList.toggle("rotate");
 });

 
 const boxtouch = document.getElementById("contacts");
 const touchContact = document.getElementById("touchListener")

  touchContact.addEventListener("click", function () {
    boxtouch.classList.toggle("visi");
  });

const contactsBoxSeeker = document.getElementById("contacts")
document.addEventListener('click', function(event) {
  if (!contactsBoxSeeker.contains(event.target) && !contactsBoxSeeker.contains(event.target)) {
    contactsBoxSeeker.classList.remove('visi');
  }
});



const navbar = document.querySelector("nav");
const navList = document.getElementById("nav-list");
const arrow = document.getElementById("arrow");
arrow.addEventListener("click", function () {
  navList.classList.toggle("visible");
  arrow.classList.toggle("rotate");
});

function playSound(fileName) {
  var snd = new Audio(fileName);
  snd.play();
}
