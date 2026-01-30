document.addEventListener('DOMContentLoaded', () => {

    // Scroll Reveal Animation (Simple version without IntersectionObserver for robustness, or use simple one)
    const fadeElems = document.querySelectorAll('.feature-item');

    const checkFade = () => {
        fadeElems.forEach(elem => {
            const rect = elem.getBoundingClientRect();
            if (rect.top < window.innerHeight * 0.8) {
                elem.style.opacity = '1';
                elem.style.transform = 'translateY(0)';
            }
        });
    };

    // Initial styles for js-enabled fade
    fadeElems.forEach(elem => {
        elem.style.opacity = '0';
        elem.style.transform = 'translateY(20px)';
        elem.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
    });

    window.addEventListener('scroll', checkFade);
    checkFade(); // Check on load

    // Fun: Mouse parallax effect for Floating Cheeses
    const cheeses = document.querySelectorAll('.floating-cheese');

    window.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        cheeses.forEach((cheese, index) => {
            const speed = (index + 1) * 20; // different speeds
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;

            // Allow existing CSS animation (translateY) to work by composing
            // This is tricky with plain JS overriding transform.
            // A safer way is modifying CSS Custom Properties if set up, 
            // but here let's just gently nudge them using margin/left/top or strictly transform if we remove keyframes.
            // For now, let's just leave the keyframes as they are more robust for "fun" ambient motion.

            // Alternative: Move the background or something subtle?
            // Let's rotate the logo on hover instead for interaction.
        });
    });

    // Logo Spin on Hover (Fun touch)
    const logo = document.querySelector('.nav-logo');
    if (logo) {
        logo.addEventListener('mouseover', () => {
            logo.style.transform = 'rotate(360deg)';
            logo.style.transition = 'transform 0.5s ease';
        });
        logo.addEventListener('mouseout', () => {
            logo.style.transform = 'rotate(0deg)';
        });
    }

    // --- Infinite Carousel Implementation ---

});
