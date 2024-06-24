const toggleButton = document.getElementById("toggleButton");
const aboutBox = document.getElementById("about");
const tri = document.querySelector("#toggleButton>h1");
toggleButton.addEventListener("click", function () {
  box2.classList.toggle('visible');
  aboutBox.classList.toggle("hidden");
  tri.classList.toggle("rotate");
});

const toggleButtonNew = document.getElementById("toggleButtonNew");
const ups = document.getElementById("updates");
const updatesH1 = document.querySelector("#toggleButtonNew>h1");
toggleButtonNew.addEventListener("click", function () {
  ups.classList.toggle("visible");
  updatesH1.classList.toggle("rotate");
});
const navrange = document.getElementById("navrange");
const navbtn = document.getElementById("newbutton")
var text = document.getElementsByClassName("h1")
navrange.addEventListener("mouseenter", function(){
  let i = 0;

const spinInterval = setInterval(() => {
  i++;
  orbit(centerElement, orbitingElements, 95, i);

  if (i >= 1) {
      clearInterval(spinInterval);
  }
}, 120);
    orbit(centerElement, orbitingElements, 150, i);
});
navrange.addEventListener("mouseleave", function(){
  for (var i = 0; i < text.length; i++)
    text[i].style.transform = `translate(-5em, -2em)`;        
})

function orbit(center, elements, radius, spin) {
  const centerX = center.offsetLeft + center.offsetWidth / 2;
  const centerY = center.offsetTop + center.offsetHeight / 2;

  for (let i = 0; i < elements.length; i++) {
      const angle = (i / elements.length) * 1.2 * Math.PI + spin + 3.7;
      const x = centerX + radius * Math.cos(angle) - elements[i].offsetWidth / 2 - 80;
      const y = centerY + radius * Math.sin(angle) - elements[i].offsetHeight / 2 - 7;
      setTimeout(() => {
        elements[i].style.transform = `translate(${x}px, ${y}px)`;        
      }, 0);
      
  }
}


const centerElement = document.getElementById('newbutton');
const orbitingElements = [
  document.getElementById('stuff2'),
  document.getElementById('stuff3'),
  document.getElementById('stuff1'),
  document.getElementById('stuff4'),
  document.getElementById('stuff5'),
  document.getElementById('stuff6'),


];

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


const updates = document.getElementById('updates');
const openubox = document.getElementById('stuff1');
let isUpdateOpen = false
openubox.addEventListener("click", function () {
  event.stopPropagation();
  updates.classList.toggle("visible");
  isUpdateOpen = !isUpdateOpen;

});

const closeubox = document.getElementById('close');
closeubox.addEventListener("click", function() {
  updates.classList.remove("visible");
});

document.addEventListener("click", function(event) {
  const updatecard = document.getElementById("updates");
  const target = event.target;
  const isupdatecard = target === updatecard || updatecard.contains(target);
  console.log("state: ", isUpdateOpen);
  if (!isupdatecard && isUpdateOpen) {
    updatecard.classList.remove("visible");
    isUpdateOpen = false;
  }
});