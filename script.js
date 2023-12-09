const toggleButton = document.getElementById("toggleButton");
const aboutBox = document.getElementById("about");
const tri = document.querySelector("#toggleButton>h1");
toggleButton.addEventListener("click", function () {
  //box2.classList.toggle('visible');
  aboutBox.classList.toggle("hidden");
  tri.classList.toggle("rotate");
});

const toggleButtonNew = document.getElementById("toggleButtonNew");
const updates = document.getElementById("updates");
const updatesH1 = document.querySelector("#toggleButtonNew>h1");
toggleButtonNew.addEventListener("click", function () {
  updates.classList.toggle("visible");
  updatesH1.classList.toggle("rotate");
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
let isNav = false;
arrow.addEventListener("click", function () {
  navList.classList.toggle("visible");
  arrow.classList.toggle("rotate");
  isNav = navList.classList.contains("visible");
  console.log(isNav)
});

function playSound(fileName) {
  var snd = new Audio(fileName);
  snd.play();
}


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
