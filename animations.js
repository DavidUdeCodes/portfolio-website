ScrollReveal({ 
    reset: false,
    distance: '80px',
    duration: 1000,
    delay: 100
});

ScrollReveal().reveal(".animation-top, .section-title-bar, .sub-section-title", {origin: "top"});
ScrollReveal().reveal(".animation-bottom", {
    origin: "bottom",
    afterReveal: function (el) {
        el.classList.add("float-image"); // Adds class after reveal
    }
});
ScrollReveal().reveal(".animation-left", {origin: "left"});
ScrollReveal().reveal(".animation-right", {origin: "right"});
