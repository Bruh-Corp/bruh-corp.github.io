const toggleButton = document.getElementById('toggleButton');
const box2 = document.getElementById('box2');
const tri = document.getElementById('tri');
toggleButton.addEventListener('click', function() {
  box2.classList.toggle('visible');
  tri.classList.toggle('rotate');
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
