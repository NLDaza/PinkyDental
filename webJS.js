// scrollTop.js

// Mostrar u ocultar el botón al hacer scroll
window.onscroll = function() {
    let scrollBtn = document.getElementById("scrollTopBtn");
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollBtn.style.display = "block";
    } else {
        scrollBtn.style.display = "none";
    }
};

// Acción al hacer clic en el botón
document.getElementById("scrollTopBtn").onclick = function() {
    document.body.scrollTop = 0; // Safari
    document.documentElement.scrollTop = 0; // Chrome, Firefox, IE y Opera
};

document.addEventListener('DOMContentLoaded', function() {
    let index = 0;
    const slides = document.querySelector('.slides');
    const totalSlides = document.querySelectorAll('.slide').length;
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');

    function moveSlide() {
        index++;
        if (index >= totalSlides) {
            index = 0;
        }
        updateSlidePosition();
    }

    function updateSlidePosition() {
        slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function prevSlide() {
        index--;
        if (index < 0) {
            index = totalSlides - 1;
        }
        updateSlidePosition();
    }

    function nextSlide() {
        moveSlide();
    }

    // Evento botones
    prevBtn.addEventListener('click', prevSlide);
    nextBtn.addEventListener('click', nextSlide);

    // Automático cada 4 segundos
    setInterval(moveSlide, 4000);
});

