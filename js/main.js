document.addEventListener('DOMContentLoaded', () => {
  const nav = document.getElementById('nav');
  let lastScroll = 0;

  window.addEventListener('scroll', () => {
    const current = window.pageYOffset;
    nav.style.transform = current > lastScroll && current > 200 ? 'translateY(-100%)' : 'translateY(0)';
    lastScroll = current;
  });

  // Photo fallback: show placeholder if image fails to load
  const handleImage = (imgId, placeholderId) => {
    const img = document.getElementById(imgId);
    const placeholder = document.getElementById(placeholderId);
    if (!img || !placeholder) return;
    placeholder.style.display = 'flex';
    img.style.display = 'none';
    img.addEventListener('load', () => {
      img.style.display = 'block';
      placeholder.style.display = 'none';
    });
    img.addEventListener('error', () => {
      img.style.display = 'none';
      placeholder.style.display = 'flex';
    });
  };

  handleImage('avatar-img', 'avatar-placeholder');
  handleImage('about-img', 'about-photo-placeholder');
});