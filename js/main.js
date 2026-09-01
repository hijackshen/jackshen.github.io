document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const current = window.pageYOffset;
    nav.style.transform = current > lastScroll && current > 200 ? 'translateY(-100%)' : 'translateY(0)';
    lastScroll = current;
  });
});