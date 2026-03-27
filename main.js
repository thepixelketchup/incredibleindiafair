document.addEventListener('DOMContentLoaded', () => {
    // Reveal animations using Intersection Observer
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, observerOptions);

    document.querySelectorAll('.reveal-text').forEach(el => {
        // Enforce word wrapping for reveal
        if (el.children.length === 0) {
            const text = el.innerText;
            el.innerHTML = `<span>${text}</span>`;
        }
        observer.observe(el);
    });
});
