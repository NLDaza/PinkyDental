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

//Para desplegar los servicios:
document.querySelectorAll('.titulo-servicio').forEach(boton => {
    boton.addEventListener('click', () => {
      const item = boton.parentElement;
      const contenido = item.querySelector('.contenido-servicio');
  
      const abierto = item.classList.contains('active');
  
      // Cerrar todos los demás
      document.querySelectorAll('.item').forEach(i => {
        i.classList.remove('active');
        i.querySelector('.contenido-servicio').style.maxHeight = null;
      });
  
      // Si no estaba abierto, abrirlo
      if (!abierto) {
        item.classList.add('active');
        contenido.style.maxHeight = contenido.scrollHeight + "px";
      }
    });
  });
  
  // Navegación suave (desde el header) sin modificar historial, se hace la sustitucion del href por el data-target.
document.querySelectorAll('nav a[data-target]').forEach(enlace => {
    enlace.addEventListener('click', function(e) {
        e.preventDefault();
        const targetId = this.getAttribute('data-target');
        const seccion = document.getElementById(targetId);
        if (seccion) {
            seccion.scrollIntoView({ behavior: 'smooth' });
        }
    });
});
