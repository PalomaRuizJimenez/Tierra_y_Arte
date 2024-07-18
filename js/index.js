// BANNER LOOP
// Número de elementos que se clonarán y agregarán al carrusel de texto
const elementNumber = 30;
// Selecciona el contenedor del carrusel de texto
const textCarousel = document.querySelector(".text__carousel--wrapper");
console.log(textCarousel);
// Selecciona el primer elemento de texto dentro del carrusel
if (textCarousel) {
  const textCarouselElement = textCarousel.querySelector("span");

  // Clona y añade el elemento de texto al carrusel 'elementNumber' veces
  Array.from({ length: elementNumber }).forEach(() => {
    textCarousel.appendChild(textCarouselElement.cloneNode(true));
  });
}

// MENÚ HAMBURGUESA
// Espera a que el DOM se haya cargado completamente
document.addEventListener('DOMContentLoaded', function () {
  console.log(1);
  // Selecciona el botón de hamburguesa por su ID
  const hamburgerButton = document.getElementById('hamburgerButton');
  // Selecciona el botón de cerrar por su ID
  const closeButton = document.getElementById('closeButton');
  // Selecciona el overlay por su ID
  const overlay = document.getElementById('overlay');
  // Selecciona el menú de navegación móvil por su ID
  const mobileNav = document.getElementById('mobileNav');

  // Añade un evento de clic al botón de hamburguesa para mostrar el menú móvil
  hamburgerButton.addEventListener('click', function () {
    console.log(`sí`);
    overlay.style.display = 'block';
    mobileNav.style.display = 'flex';
  });

  // Añade un evento de clic al botón de cerrar para ocultar el menú móvil
  closeButton.addEventListener('click', function () {
    overlay.style.display = 'none';
    mobileNav.style.display = 'none';
  });

  // Añade un evento de clic al overlay para ocultar el menú móvil cuando se haga clic fuera del menú
  overlay.addEventListener('click', function (e) {
    if (e.target === overlay) {
      overlay.style.display = 'none';
      mobileNav.style.display = 'none';
    }
  });
});

// CARRUSEL MASONRY
// Espera a que el DOM se haya cargado completamente
document.addEventListener("DOMContentLoaded", () => {
  // Selecciona todas las imágenes dentro del carrusel
  const pictures = document.querySelectorAll(".carrusel picture");
  let currentIndex = 0;

  // Función para mostrar la siguiente imagen del carrusel
  if (pictures) {
    const showNextImage = () => {
      // Elimina la clase "active" de la imagen actual
      pictures[currentIndex].classList.remove("active");
      // Incrementa el índice y lo ajusta para que sea cíclico
      currentIndex = (currentIndex + 1) % pictures.length;
      // Añade la clase "active" a la nueva imagen actual
      pictures[currentIndex].classList.add("active");
    };

    // Añade el evento click a cada imagen para mostrar la siguiente imagen al hacer click
    pictures.forEach(picture => {
      picture.addEventListener("click", showNextImage);
    });

    // Cambia la imagen automáticamente cada 5 segundos
    setInterval(showNextImage, 5000);

    // Inicializa la primera imagen como activa
    if (pictures.length) {
      pictures[0].classList.add("active");
    }
  }
});

// FOOTER
// Espera a que el DOM se haya cargado completamente
document.addEventListener("DOMContentLoaded", function() {
  // Obtiene el formulario por su ID
  const form = document.getElementById("myForm");
  if (form) {
    // Verifica si el formulario contiene un input de tipo file
    const fileInput = form.querySelector('input[type="file"]');

    if (fileInput) {
      // Si existe un input de tipo file, agrega el atributo enctype="multipart/form-data" al formulario
      form.setAttribute("enctype", "multipart/form-data");
    }
  }
});