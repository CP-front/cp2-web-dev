document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.item');
    const dots = document.querySelectorAll('.dot');
    let currentSlide = 0;
    let slideInterval;

    function initSlideshow() {
        if (slides.length === 0) return;
              
        startSlideshow();
        
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                currentSlide = index;
                updateSlideshow();
                resetInterval();
            });
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % slides.length;
        updateSlideshow();
    }

    function updateSlideshow() {
        slides.forEach(slide => slide.classList.remove('active'));
        dots.forEach(dot => dot.classList.remove('active'));
        
        slides[currentSlide].classList.add('active');
        dots[currentSlide].classList.add('active');
    }

    function startSlideshow() {
        slideInterval = setInterval(nextSlide, 5000);
    }

    function resetInterval() {
        clearInterval(slideInterval);
        startSlideshow();
    }

    if (document.querySelector('.hero')) {
        initSlideshow();
    }
});