/*
function calcularPrecio() {
		// Obtener el precio de la opción seleccionada
		var select = document.getElementById("producto");
		var precio = parseInt(select.options[select.selectedIndex].getAttribute("data-precio"));

		// Obtener la cantidad ingresada por el usuario
		var cantidad = parseInt(document.getElementById("cantidad").value);

		// Calcular el precio final y mostrarlo
		var precioFinal = precio * cantidad;
		document.getElementById("precio-final").textContent = "$" + precioFinal;
}
*/


function calcularPrecio() {
    // Obtener el valor del producto seleccionado
    const producto = document.getElementById("producto").value;



    
    
    // Obtener la cantidad ingresada por el usuario
    const cantidad = document.getElementById("cantidad").value;

    // Calcular el precio total
    const precioTotal = producto * cantidad;

    // Mostrar el precio del producto seleccionado
    const precioProducto = document.getElementById("precio-producto");
    precioProducto.innerText =  producto+"€";

    // Mostrar el precio final
    const precioFinal = document.getElementById("precio-final");
    precioFinal.innerText =  precioTotal +"€";
}


/*SLIDER 
const slides = document.querySelectorAll('.slides img');
let currentSlide = 0;
const slideInterval = setInterval(nextSlide, 3000);

function nextSlide() {
  slides[currentSlide].classList.remove('active');
  currentSlide = (currentSlide + 1) % slides.length;
  slides[currentSlide].classList.add('active');
}*/
