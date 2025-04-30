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
    const pauseBtn = document.getElementById('pauseBtn'); // El botón de pausa
    let interval; // Variable para almacenar la función de intervalo

    // Función para mover al siguiente slide
    function moveSlide() {
        index++; // Incrementa el índice del slide.
        if (index >= totalSlides) { // Si el índice es mayor o igual al número total de slides, vuelve al primer slide (índice 0).
            index = 0;
        }
        updateSlidePosition(); // Llama a la función para actualizar la posición del slide.
    }

    // Función que actualiza la posición del carrusel moviendo el contenedor de los slides.
    function updateSlidePosition() {
        slides.style.transform = `translateX(-${index * 100}%)`; // Desplaza el contenedor de los slides para mostrar el slide correspondiente.
    }

    // Función para mover al slide anterior
    function prevSlide() {
        index--; // Decrementa el índice del slide.
        if (index < 0) { // Si el índice es menor que 0, vuelve al último slide (índice totalSlides - 1).
            index = totalSlides - 1;
        }
        updateSlidePosition(); // Llama a la función para actualizar la posición del slide.
    }

    // Función para mover al siguiente slide
    function nextSlide() {
        moveSlide(); // Llama a la función que incrementa el índice y mueve al siguiente slide.
    }

    // Función para iniciar el carrusel automático
    function startAutoSlide() {
        interval = setInterval(moveSlide, 5000); // Inicia el intervalo que mueve el slide cada 4 segundos
        pauseBtn.textContent = '⏸'; // Cambia el texto del botón a 'Pausar'
    }

    // Función para detener el carrusel automático
    function stopAutoSlide() {
        clearInterval(interval); // Detiene el intervalo
        pauseBtn.textContent = '▶'; // Cambia el texto del botón a 'Reanudar'
    }

    // Función que alterna entre pausar y reanudar
    function togglePause() {
        if (interval) {
            stopAutoSlide(); // Si el carrusel está corriendo, lo pausamos
        } else {
            startAutoSlide(); // Si el carrusel está pausado, lo reanudamos
        }
    }

    // Evento para el botón de retroceder (prev)
    prevBtn.addEventListener('click', prevSlide);

    // Evento para el botón de avanzar (next)
    nextBtn.addEventListener('click', nextSlide);

    // Evento para el botón de pausa/reanudar
    pauseBtn.addEventListener('click', togglePause);

    // Inicia el carrusel automáticamente al cargar la página
    startAutoSlide();
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

//Menu desplegable
// Obtén los elementos del DOM
const menuToggle = document.getElementById('menu-toggle');
const menu = document.querySelector('nav ul');

// Añadir el evento para alternar el menú
menuToggle.addEventListener('click', () => {
    menu.classList.toggle('active');
});
