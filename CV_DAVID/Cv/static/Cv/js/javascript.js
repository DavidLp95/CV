// SECCION DEL TRADUCTOR 

const response = await fetch(URL,){
    metothod: "POST",
    headers: {'content-Type':''}
}),









// SECCION DEL CARRUSEL DOOM
// Esperar a que el DOM esté completamente cargado
document.addEventListener('DOMContentLoaded', function() {
    
    // 1. OBTENER ELEMENTOS DEL DOM
    const slidesContainer = document.querySelector('.slides-container'); // Contenedor de todos los slides
    const slides = document.querySelectorAll('.slide'); // Todos los slides individuales
    const prevBtn = document.querySelector('.anterior'); // Botón anterior
    const nextBtn = document.querySelector('.siguiente'); // Botón siguiente
    
    let currentIndex = 0; // Índice del slide actual
    
    // 2. FUNCIÓN PARA MOSTRAR UN SLIDE ESPECÍFICO
    function showSlide(index) {
        // Asegurarse que el índice esté dentro de los límites
        if (index >= slides.length) currentIndex = 0;
        if (index < 0) currentIndex = slides.length - 1;
        
        // Mover el contenedor para mostrar el slide actual
        slidesContainer.style.transform = `translateX(-${currentIndex * 100}%)`;
        
        // Actualizar clases activas (opcional)
        slides.forEach(slide => slide.classList.remove('activo'));
        slides[currentIndex].classList.add('activo');
    }
    
    // 3. EVENTOS PARA LOS BOTONES
    
    // Botón siguiente
    nextBtn.addEventListener('click', function() {
        currentIndex++;
        showSlide(currentIndex);
    });
    
    // Botón anterior
    prevBtn.addEventListener('click', function() {
        currentIndex--;
        showSlide(currentIndex);
    });
    
    // 4. AUTOPLAY (OPCIONAL)
    let intervalo = setInterval(function() {
        currentIndex++;
        showSlide(currentIndex);
    }, 3000); // Cambia cada 3 segundos
    
    // Pausar autoplay cuando el mouse está sobre el carrusel
    slidesContainer.addEventListener('mouseenter', function() {
        clearInterval(intervalo);
    });
    
    // Reanudar autoplay cuando el mouse sale
    slidesContainer.addEventListener('mouseleave', function() {
        intervalo = setInterval(function() {
            currentIndex++;
            showSlide(currentIndex);
        }, 3000);
    });
    
    // Mostrar el primer slide al cargar
    showSlide(currentIndex);
});


// traductor del html a ingles

function translateToEnglish() {
    const elemento = document.getElementById('traducion_:ingles'); // Reemplaza 'elemento' con el ID del elemento que deseas traducir
    if ('traducion_:ingles' === elemento.id) {
        elemento.innerHTML = "English"; // Reemplaza con la traducción deseada
    } else {
        console.error("Elemento no encontrado");
    }

}
// Llamar a la función para traducir al inglés
translateToEnglish();
// traductor del html a español
function translateToSpanish() {
    const elemento = document.getElementById('traducion_:espanol'); // Reemplaza 'elemento' con el ID del elemento que deseas traducir
    if ('traducion_:espanol' === elemento.id) {
        elemento.innerHTML = "Español"; // Reemplaza con la traducción deseada
    } else {
        console.error("Elemento no encontrado");
    }
}

