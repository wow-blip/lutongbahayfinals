// Mobile nav toggle with accessibility
const navToggle = document.querySelector('.nav-toggle');
const mainNav = document.querySelector('.main-nav');

function toggleNav(open) {
  if (!mainNav) return;
  mainNav.classList.toggle('open', open === undefined ? !mainNav.classList.contains('open') : open);
}

if (navToggle) {
  navToggle.addEventListener('click', () => toggleNav());
}

// Close nav when clicking a link (mobile)
document.querySelectorAll('.main-nav a').forEach(a => {
  a.addEventListener('click', () => toggleNav(false));
});

// Close nav on Escape
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape') toggleNav(false);
});

// Close when clicking outside nav
document.addEventListener('click', (e) => {
  if (!mainNav || !mainNav.classList.contains('open')) return;
  const withinNav = e.target.closest('.main-nav') || e.target.closest('.nav-toggle');
  if (!withinNav) toggleNav(false);
});

/* Hero slideshow for homepage */
function initHeroSlideshow(images = [], interval = 4000) {
  const hero = document.querySelector('.hero');
  if (!hero || images.length === 0) return;
  // create slideshow container
  const container = document.createElement('div');
  container.className = 'hero-slideshow';
  images.forEach((src, i) => {
    const slide = document.createElement('div');
    slide.className = 'slide' + (i === 0 ? ' active' : '');
    slide.style.backgroundImage = `url('${src}')`;
    container.appendChild(slide);
  });
  hero.insertBefore(container, hero.firstChild);

  let idx = 0;
  const slides = container.querySelectorAll('.slide');
  setInterval(() => {
    slides[idx].classList.remove('active');
    idx = (idx + 1) % slides.length;
    slides[idx].classList.add('active');
  }, interval);
}

// Only initialize slideshow on pages that mark themselves as the homepage via body.home
document.addEventListener('DOMContentLoaded', () => {
  if (!document.body.classList.contains('home')) return; // run only when page explicitly marked as homepage
  const hero = document.querySelector('.home .hero');
  if (!hero) return;
  const homeImages = ['slide 1.jpg', 'slide 2.jpg', 'slide 3.jpg'];
  initHeroSlideshow(homeImages, 4500);
});

// Search function for search bars
function search(query) {
  query = query.toLowerCase().trim();
  if (query === 'pinakbet') {
    window.location.href = 'pinakbet.html';
  } else if (query === 'laing') {
    window.location.href = 'laing.html';
  } else if (query === 'crispy fried chicken' || query === 'crispy-fried-chicken') {
    window.location.href = 'crispy-fried-chicken.html';
  } else {
    alert('Recipe not found. Try searching for Pinakbet, Laing, or Crispy Fried Chicken.');
  }
}