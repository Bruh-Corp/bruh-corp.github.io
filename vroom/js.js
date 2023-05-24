const toggleButton = document.getElementById('toggleButton');
const box2 = document.getElementById('box2');
const box2a = document.getElementById('box2a');
const tri = document.getElementById('tri');
toggleButton.addEventListener('click', function() {
  box2.classList.toggle('visible');
  box2a.classList.toggle('hidden');
  tri.classList.toggle('rotate');
});

const triContact = document.getElementById('triContact');
const contactButton = document.getElementById('contactButton');
const contactBox = document.querySelector('.box2b');
contactButton.addEventListener('click', function() {
  contactBox.classList.toggle('abc');
  triContact.classList.toggle('rotate');
});


const navbar = document.getElementById('navbar');
const box3 = document.getElementById('box3');
const navtri = document.getElementById('navtri');

navbar.addEventListener('click', function() {
 box3.classList.toggle('visible');
  navtri.classList.toggle('rotate');
});

const buttons = document.querySelectorAll('.btn');
const nav3 = document.getElementById('box3');

buttons.forEach((button, index) => {
  button.addEventListener('mouseover', () => {
    nav3.classList.add(`bg${index + 1}`);
  });

  button.addEventListener('mouseout', () => {
    nav3.classList.remove(`bg${index + 1}`);
  });
});

const box2About = document.querySelector('.contactWrap');
const box2b = document.querySelector('.box2b');

box2About.addEventListener('click', function() {
  box2b.classList.toggle('visible');
});

document.addEventListener('click', function(event) {
  if (!box2b.contains(event.target) && !box2About.contains(event.target)) {
    box2b.classList.remove('visible');
  }
});