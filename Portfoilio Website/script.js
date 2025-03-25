window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
});

//Background
new FinisherHeader({
  "count": 300,
  "size": {
    "min": 2,
    "max": 8,
    "pulse": 0
  },
  "speed": {
    "x": {
      "min": 0,
      "max": 0.4
    },
    "y": {
      "min": 0,
      "max": 0.6
    }
  },
  "colors": {
    "background": "#192437",
    "particles": [
      "#07bdef",
      "#b460d0",
      "#ffffff"
    ]
  },
  "blending": "overlay",
  "opacity": {
    "center": 1,
    "edge": 0
  },
  "skew": 0,
  "shapes": [
    "c"
  ]
});

// Get all navbar links
const navLinks = document.querySelectorAll('a.correct-nav');  

navLinks.forEach(link => {
  link.addEventListener('click', function(e) {
    // Prevent default anchor behavior
    e.preventDefault();

    // Get the target section to scroll to
    const targetId = this.getAttribute('href');
    const targetElement = document.querySelector(targetId);

    // Scroll to the target element with an offset
    window.scrollTo({
      top: targetElement.offsetTop - 100, // Adjust the 100 value to the offset you want
      behavior: 'smooth'
    });
  });
});

// typed js
const typed = new Typed('.typing-text', {
  strings: ['Programmer', 'Graphic Designer', 'Athlete', 'Student'],
  typeSpeed: 60,
  backSpeed: 50,
  backDelay: 1500,
  loop: true,
  showCursor: false
});

ScrollReveal().reveal('.typing-text', {
  delay: 100,
  distance: '50px',
  origin: 'bottom',
  opacity: 0,
  duration: 500
});

// Swiper.js
const swiper = new Swiper(".swiper-container", {
  effect: "coverflow",
  grabCursor: true,
  centeredSlides: true,
  slidesPerView: "2.75",
  loop: true,
  spaceBetween: 0,
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  coverflowEffect: {
    rotate: 50, // Tilt degree
    stretch: 0, // Space between slides
    depth: 200, // 3D depth
    modifier: 1, // Effect multipler
    slideShadows: true, // Enable shadows
  },
});
