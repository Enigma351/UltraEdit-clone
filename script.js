// Make the files wider and smaller(files section)

const container = document.querySelector('.fileSection.container');
const largeSection = container.querySelector('.large-section');
const smallSection = container.querySelector('.small-section');

function removeElements(section) {
  section.querySelectorAll('.img-1, ul').forEach((el) => el.remove());
}

function restoreElements(section, html) {
  section.innerHTML = html;
}

const originalLarge = largeSection.innerHTML;
const originalSmall = smallSection.innerHTML;

smallSection.addEventListener('mouseenter', () => {
  largeSection.style.flex = '1';
  smallSection.style.flex = '2';
  restoreElements(smallSection, originalSmall);
  removeElements(largeSection);
});

largeSection.addEventListener('mouseenter', () => {
  smallSection.style.flex = '1';
  largeSection.style.flex = '2';
  restoreElements(largeSection, originalLarge);
  removeElements(smallSection);
});

container.addEventListener('mouseleave', () => {
  // Reset everything
  largeSection.style.flex = '2';
  smallSection.style.flex = '1';
  restoreElements(largeSection, originalLarge);
  // restoreElements(smallSection, originalSmall);
});

// make the sticky box interactive

const scrollBox = document.querySelector('.stickyBox');
const navBar = document.querySelector('.main-nav');

window.addEventListener('scroll', () => {
  const navTop = navBar.getBoundingClientRect().top;
  const windowHeight = window.innerHeight;
  console.log(windowHeight, navTop);

  if(window.scrollY > 200){
    scrollBox.classList.remove('hide');
  }
  else{
    scrollBox.classList.add('hide');
   
  }
  if(navTop < windowHeight + 100){
    scrollBox.classList.add('move-right');
  }
  else{
    scrollBox.classList.remove('move-right');
  }
});

scrollBox.addEventListener('click', () => {
  window.scrollTo({top: 0, behavior: 'smooth' });
});