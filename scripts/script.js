
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
  

const txt = document.querySelector(".m1content .runtxt");
const vals = ["inspirations.", "challenges.", "Learnings.", "Experience."];

let valsIndex = 0;
let chIndex = 0;
changer();
function changer() {
  txt.innerHTML = `New ideas,<br>New ${vals[valsIndex].slice(0, chIndex)}<span class="curso">|</span>`;
  chIndex++;
  if (chIndex > vals[valsIndex].length) {
    chIndex = 0;
    valsIndex = (valsIndex + 1) % vals.length;
    setTimeout(changer, 3000); // 1-second delay after a word is fully printed
  } else {
    setTimeout(changer, 100); // 200ms delay for each character
  }
}
