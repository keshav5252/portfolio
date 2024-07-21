
window.addEventListener('scroll', function() {
    var navbar = document.querySelector('nav');
    var header = document.querySelector('header');
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
      header.style.height ='0'
    } else {
      navbar.classList.remove('scrolled');
      header.style.height ='auto'

    }
  });
  