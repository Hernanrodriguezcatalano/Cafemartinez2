//creo una variable ALT + 96
let miHeader=`
<div class="video">
<video autoplay muted loop width="1500" height="350">
    <source src="WhatsApp Video 2023-10-03 at 23.17.22.mp4" type="video/mp4">
    Tu navegador no soporta la reproducción de videos.
</video>
</div>

<audio id="miAudio" autoplay loop src="videoplayback.m4a"></audio>

<!-- Menú tradicional para pantallas más grandes (mayores o iguales a 1200px) -->
<nav class="menu-large">
<ul>
<li><a href="../index.html">INICIO</a></li>
<li><a href="../Tradicional/Cafeteria.html">TRADICIONAL</a></li>
<li><a href="../SMART.html">SMART</a></li>
<li><a href="../A La Barra.html">ALB</a></li>
<li><a href="../peya.html">PEYA</a></li>
</ul>
<span></span>
</nav>



<nav class="menu-small">
<div class="dropdown">
<button class="dropdown-btn" id="menuButton">MENÚ</button>
<div class="dropdown-content">
<a href="../index.html">INICIO</a>
<a href="../Tradicional/Cafeteria.html">TRADICIONAL</a>
<a href="../SMART.html">SMART</a>
<a href="../A La Barra.html">ALB</a>
<a href="../peya.html">PEYA</a>
</div>
</div>
</nav>

`
document.querySelector("header").innerHTML = miHeader

var miAudio = document.getElementById('miAudio');
miAudio.volume = 0.05; 
