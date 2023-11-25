document.addEventListener('DOMContentLoaded', () => {
    // Smooth scrolling for anchor links
    const anchors = document.querySelectorAll('a[href^="#"]');

    for (let anchor of anchors) {
        anchor.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);

            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    }

    // Parallax-like effect for the background
    const background = document.querySelector('.parallax-background'); // Add this class to your background
    window.addEventListener('mousemove', parallax);

    function parallax(e) {
        if (background) {
            const x = (e.clientX - window.innerWidth / 2) / 50;
            const y = (e.clientY - window.innerHeight / 2) / 50;
            background.style.transform = `translateX(${x}px) translateY(${y}px)`;
        }
    }

    // Dynamic behavior for project cards
    const cards = document.querySelectorAll('.project-card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.classList.add('is-hovered');
        });
        
        card.addEventListener('mouseleave', () => {
            card.classList.remove('is-hovered');
        });
    });
});
