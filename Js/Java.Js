// Función para autocompletar los campos del formulario
function autocompletar(codigo, nombre) {
    const formularioArticulo = document.getElementById('Articulo');
    const formularioCodArt = document.getElementById('CodArt');

    // Actualiza los campos del formulario con los valores
    formularioArticulo.value = nombre;
    formularioCodArt.value = codigo;
}


// Obtén los elementos del DOM
const contenedor = document.getElementById('contenedor');
const formulario = document.getElementById('formulario');
const nombreInput = document.getElementById('nombre');
const edadInput = document.getElementById('edad');
const emailInput = document.getElementById('email');

// Agrega un evento click al contenedor
contenedor.addEventListener('click', () => {
    // Obtén los datos del contenedor
    const nombreContenedor = contenedor.querySelector('p:nth-child(1)').textContent.split(': ')[1];
    const edadContenedor = contenedor.querySelector('p:nth-child(2)').textContent.split(': ')[1];
    const emailContenedor = contenedor.querySelector('p:nth-child(3)').textContent.split(': ')[1];

    // Autocompleta el formulario con los datos del contenedor
    nombreInput.value = nombreContenedor;
    edadInput.value = edadContenedor;
    emailInput.value = emailContenedor;
});





    const cartItems = document.getElementById('cart-items');
    const addToCartButton = document.querySelector('.submit-button');

    addToCartButton.disabled = true; // El botón estará deshabilitado hasta que se completen todos los campos.

    function addToCart() {
    const lista = document.getElementById('ListaForm').value;
    const codArt = document.getElementById('CodArtForm').value;
    const articulo = document.getElementById('ArticuloForm').value;
    const precio = document.getElementById('PrecioForm').value;
    const local = document.getElementById('LocalForm').value;

    if (lista && codArt && articulo && precio && local) {
        const listItem = document.createElement('li');
    listItem.innerHTML = `Lista: ${lista}, Cod Art: ${codArt}, Articulo: ${articulo}, <span class="price">Precio: ${precio}</span>, Local: ${local}`;
    cartItems.appendChild(listItem);

    // Limpia los campos del formulario después de agregar al carrito
    document.getElementById('ListaForm').value = '';
    document.getElementById('CodArtForm').value = '';
    document.getElementById('ArticuloForm').value = '';
    document.getElementById('PrecioForm').value = '';
    document.getElementById('LocalForm').value = '';

    addToCartButton.disabled = true; // Deshabilita el botón después de agregar al carrito
    } else {
        alert('Por favor, complete todos los campos antes de agregar al carrito.');
    }
}

    // Habilita el botón cuando todos los campos estén completos
    document.getElementById('ListaForm').addEventListener('input', enableButton);
    document.getElementById('CodArtForm').addEventListener('input', enableButton);
    document.getElementById('ArticuloForm').addEventListener('input', enableButton);
    document.getElementById('PrecioForm').addEventListener('input', enableButton);
    document.getElementById('LocalForm').addEventListener('input', enableButton);

    function enableButton() {
    const lista = document.getElementById('ListaForm').value;
    const codArt = document.getElementById('CodArtForm').value;
    const articulo = document.getElementById('ArticuloForm').value;
    const precio = document.getElementById('PrecioForm').value;
    const local = document.getElementById('LocalForm').value;

    if (lista && codArt && articulo && precio && local) {
        addToCartButton.disabled = false;
    } else {
        addToCartButton.disabled = true;
    }
}



// Obtén los elementos del carrusel
const carouselItems = document.querySelector('.carousel-items');
const carouselItemWidth = document.querySelector('.carousel-item').offsetWidth;

// Configura la velocidad de desplazamiento y el intervalo
const scrollSpeed = 2; // Velocidad de desplazamiento (ajusta según sea necesario)
const interval = 3000; // Intervalo en milisegundos entre desplazamientos (ajusta según sea necesario)

let currentIndex = 0;

function moveCarousel() {
  currentIndex = (currentIndex + 1) % 3; // Cambia el número (3) al número de elementos en tu carrusel
  const translateX = -currentIndex * carouselItemWidth;
  carouselItems.style.transition = 'transform 0.5s';
  carouselItems.style.transform = `translateX(${translateX}px)`;
}

// Mueve el carrusel automáticamente a intervalos regulares
setInterval(moveCarousel, interval);

// Desplaza el carrusel a una velocidad constante
function scrollCarousel() {
  currentIndex = (currentIndex + scrollSpeed) % 3; // Cambia el número (3) al número de elementos en tu carrusel
  const translateX = -currentIndex * carouselItemWidth;
  carouselItems.style.transition = 'none';
  carouselItems.style.transform = `translateX(${translateX}px)`;
}

// Comienza el desplazamiento automático al cargar la página
scrollCarousel();

// Escucha eventos de mouse para detener el desplazamiento automático al interactuar con el carrusel
carouselItems.addEventListener('mouseenter', () => {
  clearInterval(intervalId);
});

carouselItems.addEventListener('mouseleave', () => {
  intervalId = setInterval(moveCarousel, interval);
});





$(document).ready(function () {
    $('.carousel-container').slick({
        autoplay: true,          // Habilita la reproducción automática
        autoplaySpeed: 3000,     // Velocidad en milisegundos (por ejemplo, 3000ms = 3 segundos)
        dots: true,              // Muestra los puntos de navegación
    });
});


$(document).ready(function () {
    $('.carousel-container').slick({
        autoplay: true,
        autoplaySpeed: 3000,
        dots: true,
        responsive: [
            {
                breakpoint: 768, // Puedes ajustar este valor según tus necesidades
                settings: {
                    arrows: false,
                }
            }
        ]
    });
});





function addToCart() {
    const lista = document.getElementById('ListaForm').value;
    const codArt = document.getElementById('CodArtForm').value;
    const articulo = document.getElementById('ArticuloForm').value;
    const precio = document.getElementById('PrecioForm').value;
    const local = document.getElementById('LocalForm').value;

    if (lista && codArt && articulo && precio && local) {
        const listItem = document.createElement('li');
        listItem.innerHTML = `${lista}, Cod Art: ${codArt}, ${articulo}, <span class="item-name">${local}</span>, <span class="item-price">${precio}</span>`;
        cartItems.appendChild(listItem);

        // Borra solo los campos de "Código", "Artículo" y "Precio"
        document.getElementById('CodArtForm').value = '';
        document.getElementById('ArticuloForm').value = '';
        document.getElementById('PrecioForm').value = '';

        addToCartButton.disabled = true; // Deshabilita el botón después de agregar al carrito
    } else {
        alert('Por favor, complete todos los campos antes de agregar al carrito.');
    }
}






// Menu desplegable quieto


document.addEventListener("DOMContentLoaded", function() {
    const menuButton = document.getElementById("menuButton");
    const dropdownContent = document.querySelector(".dropdown-content");
    let isOpen = false; // Variable para rastrear el estado del menú

    menuButton.addEventListener("mouseenter", function(e) {
        if (!isOpen) {
            dropdownContent.style.display = "block";
            dropdownContent.style.opacity = 1;
            dropdownContent.style.pointerEvents = "auto";
            isOpen = true; // Abre el menú en la primera interacción
        } else {
            dropdownContent.style.display = "none";
            dropdownContent.style.opacity = 0;
            dropdownContent.style.pointerEvents = "none";
            isOpen = false; // Cierra el menú en la segunda interacción
        }
    });
});


// Carrusel tiempo y saca los puntitos




// appi para

