var navMain = document.querySelector('.main-nav');
var navToggle = navMain.querySelector('.main-nav__toggle');

navMain.classList.remove('nain-nav--no-js');

navToggle.addEventListener('click', function() {
  if (navMain.classList.contains('main-nav--opened')) {
    navMain.classList.remove('main-nav--opened');
  } else {
    navMain.classList.add('main-nav--opened');
  }
});

navToggle.classList.remove('hidden');
navToggle.click();
