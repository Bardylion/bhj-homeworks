function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    const windowHeight = window.innerHeight;
    return (
        rect.top < windowHeight - 100 && rect.bottom > 0
    );
}

function handleScroll() {
    const reveals = document.querySelectorAll('.reveal');
    
    reveals.forEach(reveal => {
        if (isElementVisible(reveal)) {
            reveal.classList.add('reveal_active');
        }
    });
}

function initScrollReveal() {
    window.addEventListener('scroll', handleScroll);
    
    handleScroll();
}

document.addEventListener('DOMContentLoaded', initScrollReveal);

window.addEventListener('load', initScrollReveal);