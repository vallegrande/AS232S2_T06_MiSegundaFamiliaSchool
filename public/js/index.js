// FUNCIONALIDAD DE BOTON OCULTAR/MOSTRAR
const textSection = document.querySelector('.text-section');
const carouselSection = document.querySelector('.carousel-section');
const toggleButton = document.createElement('button');
toggleButton.textContent = 'Mostrar/Ocultar';

// Función para alternar la visibilidad de ambas secciones
function toggleSections() {
    textSection.classList.toggle('hidden');
    carouselSection.classList.toggle('hidden');
}

// Agregar evento de clic al botón para alternar las secciones
toggleButton.addEventListener('click', toggleSections);

// Insertar el botón en el DOM
const mainSection = document.querySelector('.main-section');
mainSection.appendChild(toggleButton);






