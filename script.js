// scripts.js

document.addEventListener('DOMContentLoaded', () => {
    const cta = document.querySelector('.cta');
    cta.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelector(cta.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });

    // Scroll-to-top button functionality
    const scrollTopButton = document.createElement('button');
    scrollTopButton.textContent = 'Top';
    scrollTopButton.className = 'scroll-top';
    scrollTopButton.style.position = 'fixed';
    scrollTopButton.style.bottom = '20px';
    scrollTopButton.style.right = '20px';
    scrollTopButton.style.padding = '10px 20px';
    scrollTopButton.style.backgroundColor = '#ffcc00';
    scrollTopButton.style.color = '#333';
    scrollTopButton.style.border = 'none';
    scrollTopButton.style.borderRadius = '5px';
    scrollTopButton.style.display = 'none';
    scrollTopButton.style.cursor = 'pointer';
    document.body.appendChild(scrollTopButton);

    window.addEventListener('scroll', () => {
        if (window.scrollY > 300) {
            scrollTopButton.style.display = 'block';
        } else {
            scrollTopButton.style.display = 'none';
        }
    });

    scrollTopButton.addEventListener('click', () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    });
});
