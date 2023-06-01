// Smooth scrolling when clicking on a nav link
const navLinks = document.querySelectorAll('nav a');

navLinks.forEach(link => {
  link.addEventListener('click', e => {
    e.preventDefault();
    const targetId = link.getAttribute('href');
    const targetSection = document.querySelector(targetId);
    const targetPosition = targetSection.offsetTop;
    window.scrollTo({
      top: targetPosition,
      behavior: 'smooth'
    });
  });
});

// Add 'active' class to nav link when scrolling to its corresponding section
const sections = document.querySelectorAll('section');

function activateLink() {
  const top = window.scrollY;
  sections.forEach(section => {
    const offset = section.offsetTop - 150;
    const height = section.offsetHeight;
    const id = section.getAttribute('id');
    if (top >= offset && top < offset + height) {
      document.querySelector(`nav a[href="#${id}"]`).classList.add('active');
    } else {
      document.querySelector(`nav a[href="#${id}"]`).classList.remove('active');
    }
  });
}

window.addEventListener('scroll', activateLink);

