const nav = document.querySelector('nav');

// Add a solid/glass background to nav when scrolling
window.addEventListener('scroll', () => {
  if (!nav) return;
  nav.classList.toggle('naWinScroll', window.scrollY > 0);
});