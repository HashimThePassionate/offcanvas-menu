// DOM Elements
const hamburger = document.getElementById("hamburger");
const offCanvasMenu = document.getElementById("offCanvasMenu");
const closeMenu = document.getElementById("closeMenu");
const overlay = document.getElementById("overlay");

// Open the off-canvas menu
hamburger.addEventListener("click", () => {
    offCanvasMenu.classList.add("open");
    overlay.classList.add("show");
});

// Close the off-canvas menu
closeMenu.addEventListener("click", () => {
    offCanvasMenu.classList.remove("open");
    overlay.classList.remove("show");
});

// Close the menu when clicking on the overlay
overlay.addEventListener("click", () => {
    offCanvasMenu.classList.remove("open");
    overlay.classList.remove("show");
});
