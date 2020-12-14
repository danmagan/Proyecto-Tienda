let btnMenu = document.querySelector("#btn-menu");

let menu = document.querySelector("#menu");

const btnCarrito = document.querySelector("#btn-carrito");

const carrito = document.querySelector(".container-carrito");

const agregarCarrito = document.querySelector("#agregar-carrito");

const productos = document.querySelector('.container-principal');

let productosCarrito = [];

btnMenu.addEventListener('click', function(){
	'use strict';
	menu.classList.toggle("nav-display"); 
});



btnCarrito.addEventListener('click', function(){
	'use strict';
	carrito.classList.toggle("carrito-display");
});

const producto = document.querySelectorAll(".producto");

productosCarrito = [];

for(i=0;i<producto.length;i++){
	producto[i].addEventListener("click", leerDatosProducto);
}

function leerDatosProducto(e){
	let nuevoProducto = e.target.parentElement;
	
	let objetoProducto = {imagen: nuevoProducto.querySelector(".img-producto").src,
	 nombre : nuevoProducto.querySelector(".titulo-producto").textContent
	 , precio: nuevoProducto.querySelector(".producto-precio").textContent,
	 id: nuevoProducto.querySelector('a').getAttribute('data-id'),cantidad: 1}

	agregarProductoCarrito(objetoProducto);
}

function agregarProductoCarrito(producto){
	
	let some = productosCarrito.some(function(productos){
		return productos.id === producto.id;
	});
	if(some){
		let productos = productosCarrito.map(productos => {
			if(productos.id === producto.id){
				productos.cantidad++;
				console.log(productos.cantidad)
				return productos;
			}
			else{
				return productos;
			}
		})
	}
	else{
		productosCarrito.push(producto);
	}
	generarProducto();
}

function generarProducto(){ 
		limpiarCarrito();
		productosCarrito.forEach(function(productoCarro){
		const row = document.createElement("div");
		row.classList.add("row");

		row.innerHTML = `<div class="col col-imagen"><img src="${productoCarro.imagen}"></div>
		<div class="col col-titulo"><p>${productoCarro.nombre}</p></div>
		<div class="col col-precio"><p>${productoCarro.precio}</p></div>
		<div class="col col-cantidad"><p>${productoCarro.cantidad}</p></div>`;

		carrito.appendChild(row);
	});
}

function limpiarCarrito(){
	carrito.innerHTML = "";
}