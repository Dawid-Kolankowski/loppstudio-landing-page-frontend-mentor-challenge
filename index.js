const btnHamburger = document.querySelector('#btnHamburger');
const nav = document.querySelector('.nav__menu');
btnHamburger.addEventListener('click', function () {
  console.log('click hamburger');

  if (nav.classList.contains('display-none')) {
    nav.classList.remove('display-none');
  } else {
    nav.classList.add('display-none');
  }
});
