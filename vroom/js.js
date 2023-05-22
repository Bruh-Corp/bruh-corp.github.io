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
