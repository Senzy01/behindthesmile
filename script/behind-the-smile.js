// Fade-in animation when sections appear in viewport
document.addEventListener("DOMContentLoaded", () => {
  const faders = document.querySelectorAll('.fade-in');

  const appearOptions = {
    threshold: 0.2,
    rootMargin: "0px 0px -50px 0px"
  };

  const appearOnScroll = new IntersectionObserver(function(entries, observer) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('visible');
      observer.unobserve(entry.target);
    });
  }, appearOptions);

  faders.forEach(fader => {
    appearOnScroll.observe(fader);
  });

  window.addEventListener('DOMContentLoaded', () => {
    const heroText = document.querySelector('.hero-text h1');
    const tagline = document.querySelector('.hero-text .tagline');
  
    // Split headline into spans
    const chars = heroText.textContent.split('');
    heroText.textContent = '';
  
    chars.forEach((char, i) => {
      const span = document.createElement('span');
      span.textContent = char;
      span.style.opacity = '0';
      span.style.transition = opacity 0.4s ease ${i * 0.05}s;
      heroText.appendChild(span);
    });
  
    // Trigger animation
    setTimeout(() => {
      document.querySelectorAll('.hero-text h1 span').forEach(span => {
        span.style.opacity = '1';
      });
    }, 100);
  
    // Fade in tagline after headline
    tagline.style.opacity = '0';
    tagline.style.transition = 'opacity 1s ease 2s';
    setTimeout(() => {
      tagline.style.opacity = '1';
    }, 2000);
  });
  
  
// Smooth Scroll for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      const target = document.querySelector(this.getAttribute('href'));
      if (target) {
          target.scrollIntoView({
              behavior: 'smooth'
          });
      }
  });
});
