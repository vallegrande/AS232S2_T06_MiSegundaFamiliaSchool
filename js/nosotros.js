document.addEventListener("DOMContentLoaded", function() {
    const images = document.querySelectorAll(".gallery-image");

    images.forEach(image => {
        image.addEventListener("mouseover", () => {
            image.style.transform = "scale(1.2)";
        });

        image.addEventListener("mouseout", () => {
            image.style.transform = "scale(1)";
        });
    });







    // Funcionalidad de Valores

    
    const valueBoxes = document.querySelectorAll('.value-box');

    const observerOptions = {
        threshold: 1.0 // Define el porcentaje de visibilidad para activar la animación
    };

    const revealOnScroll = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.transform = 'translateY(0)';
                entry.target.style.opacity = '1';
                observer.unobserve(entry.target);
            }
        });
    };

    const observer = new IntersectionObserver(revealOnScroll, observerOptions);

    valueBoxes.forEach((box, index) => {
        box.style.transform = 'translateY(40px)';
        box.style.opacity = '0';
        observer.observe(box);
    });
});
