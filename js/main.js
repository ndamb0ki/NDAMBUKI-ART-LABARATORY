// Dim and hover effect for all bento cards
const bentoCards = document.querySelectorAll('.bento-card');

bentoCards.forEach(card => {
  card.addEventListener('mouseenter', () => {
    bentoCards.forEach(c => {
      c.style.filter = (c === card) ? 'brightness(1)' : 'brightness(0.6)';
    });
  });

  card.addEventListener('mouseleave', () => {
    bentoCards.forEach(c => c.style.filter = 'brightness(1)');
  });
});

// Animate bento cards sequentially on page load
document.addEventListener('DOMContentLoaded', () => {
  const allBentoSections = document.querySelectorAll('.bento');

  allBentoSections.forEach(section => {
    const cards = section.querySelectorAll('.bento-card');
    cards.forEach((card, index) => {
      setTimeout(() => {
        card.classList.add('show'); // ensure your CSS has .show animation
      }, index * 300); // delay per card
    });
  });
});
document.addEventListener('DOMContentLoaded', () => {
  const navToggle = document.getElementById('navToggle');
  const navLinks = document.getElementById('navLinks');

  navToggle.addEventListener('click', () => {
    navLinks.classList.toggle('open');
  });
});


