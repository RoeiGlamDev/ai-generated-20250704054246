// Get all elements with the class "fade-in"
const fadeInElements = document.querySelectorAll('.fade-in');

// Add event listener to window for scroll event
window.addEventListener('scroll', () => {
    // Get the current scroll position
    const scrollPosition = window.scrollY;

    // Loop through each fade-in element
    fadeInElements.forEach((element) => {
        // Get the element's offset top position
        const offsetTop = element.offsetTop;

        // Check if the element is in view
        if (scrollPosition >= offsetTop - window.innerHeight + 100) {
            // Add the "visible" class to the element
            element.classList.add('visible');
        }
    });
});

// Add event listener to window for load event
window.addEventListener('load', () => {
    // Get the hero video element
    const heroVideo = document.getElementById('hero-video');

    // Play the hero video
    heroVideo.play();
});