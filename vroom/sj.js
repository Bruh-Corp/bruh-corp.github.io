
const navbar = document.getElementById('navbar');
const box3 = document.getElementById('box3');
const navtri = document.getElementById('navtri');

navtri.addEventListener('click', function() {
 box3.classList.toggle('visible');
  navtri.classList.toggle('rotate');
});
