//creo una variable ALT + 96
let miForm=`

<div class="container">
    <div class="formulario">
        <form class="contact-form" action="">
            <fieldset>
                <div class="form-group">
                    <label for="Lista">Lista:</label>
                    <select name="Lista" id="ListaForm" required>
                        <option value="" disabled selected>Selecciona una lista</option>
                        <option value="Lista C">Lista C</option>
                        <option value="Lista B">Lista B</option>
                        <option value="Lista B1">Lista B1</option>
                        <option value="Lista A1">Lista A1</option>
                        <option value="Lista A2">Lista A2</option>
                        <!-- Agrega más opciones aquí -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="Plataforma">Plataforma:</label>
                    <select name="Plataforma" id="PlataformaForm" required>
                        <option value="" disabled selected>Selecciona una plataforma</option>
                        <option value="ICG">ICG</option>
                        <option value="Foster">Foster</option>
                        <option value="Menu Digital">Menu Digital</option>
                        <option value="Menu QR">Menu QR</option>
                        <option value="Club">Club</option>
                        <!-- Agrega más opciones aquí -->
                    </select>
                </div>
                <div class="form-group">
                    <label for="CodArt">Cod Art:</label>
                    <input type="text" name="CodArt" id="CodArtForm" placeholder="Se autocompleta...." readonly required>
                </div>
                <div class="form-group">
                    <label for="Articulo">Articulo:</label>
                    <input type="text" name="Articulo" id="ArticuloForm" placeholder="Se autocompleta..." readonly required>
                </div>
                <div class="form-group">
                    <label for="Precio">Precio:</label>
                    <input type="number" name="Precio" id="PrecioForm" placeholder="Ingrese el precio correcto..." required>
                </div>
                <div class="form-group">
                    <label for="Local">Local:</label>
                    <input type="text" name="Local" id="LocalForm" placeholder="Nombre del local..." required>
                </div>
                <button type="button" class="submit-button" onclick="addToCart()">Agregar al carrito</button>
            </fieldset>
        </form>
    </div>
    <div class="plataforma">
        <fieldset>
            <legend>Carrito de compras</legend>
            <ul id="cart-items">
                <!-- Los elementos seleccionados se mostrarán aquí -->
            </ul>
            
            <button id="export-button" class="submit-button" style="margin-top: 10px;">Exportar a Excel</button>

        </fieldset>
    </div>
</div>

`
document.querySelector("form").innerHTML = miForm


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
    listItem.innerHTML = ` ${lista}, Cod Art: ${codArt}, ${articulo}, <span class="price"> ${precio}</span>, ${local}`;
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

// Función para autocompletar los campos del formulario
function autocompletar(codigo, nombre) {
    const formularioArticuloSpan = document.getElementById('ArticuloForm');
    const formularioCodArt = document.getElementById('CodArtForm');

    // Actualiza los campos del formulario con los valores
    formularioArticuloSpan.value = nombre;
    formularioCodArt.value = codigo;
}

