let currentSlide = 0;
const slides = document.querySelectorAll('.slide');

document.getElementById('next-slide').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide + 1) % slides.length;
    slides[currentSlide].style.display = 'block';
});

document.getElementById('prev-slide').addEventListener('click', () => {
    slides[currentSlide].style.display = 'none';
    currentSlide = (currentSlide - 1 + slides.length) % slides.length;
    slides[currentSlide].style.display = 'block';
});