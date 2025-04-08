const productos = [
    {
        id: 0,
        nombre: "Smartphone SAMSUNG GALAXY A05s",
        descripcion: "El Galaxy A05s ofrece una experiencia inmersiva con su pantalla FHD+ de 6,7 pulgadas, potente procesador Snapdragon 680 y batería de 5.000 mAh con carga rápida. Disfruta de un diseño elegante, múltiples cámaras y funciones prácticas como lector de huella y jack de 3,5 mm.",
        precio: 140.75,
        imagen: "samsung.jpeg"
    },
    {
        id: 1,
        nombre: "Smartphone APPLE IPHONE 15",
        descripcion: "El iPhone 15 destaca por su nuevo diseño con bordes curvos, puerto USB-C y pantalla Super Retina XDR de 6,1 pulgadas con Dynamic Island. Incorpora el potente chip A16 Bionic, cámara principal de 48 MP y mejoras en autonomía y durabilidad.",
        precio: 859.99,
        imagen: "iphone.jpeg"
    },
    {
        id: 2,
        nombre: "Portátil LENOVO V15",
        descripcion: "El Lenovo V15 con procesador Intel N4500 ofrece un rendimiento eficiente para tareas básicas, acompañado de 8 GB de RAM y un rápido SSD de 256 GB. Su diseño delgado y sistema FreeDOS lo hacen ideal para quienes buscan un portátil accesible y personalizable.",
        precio: 489.75,
        imagen: "portatil.jpg"
    },
    {
        id: 3,
        nombre: "Pantalla de televisión SONY OLED XR83A80L",
        descripcion: "El Sony XR-83A80L es un televisor OLED de 83 pulgadas con procesador Cognitive Processor XR que ofrece imágenes ultra realistas y sonido envolvente. Diseñado para cine en casa y gaming, cuenta con tecnología Google TV, HDMI 2.1 y compatibilidad con Dolby Vision y Atmos.",
        precio: 3499.00,
        imagen: "tv.jpg"
    }
];

let carrito = JSON.parse(localStorage.getItem('carrito')) || {};

function renderProductos() {
    const contenedor = document.getElementById('productos');
    productos.forEach(producto => {
        const div = document.createElement('div');
        div.className = 'producto';
        div.innerHTML = `
            <img src="${producto.imagen}" alt="${producto.nombre}" class="img-producto">
            <h3>${producto.nombre}</h3>
            <p>${producto.descripcion}</p>
            <p><strong>${producto.precio.toFixed(2)} €</strong></p>
            <button onclick="agregarAlCarrito(${producto.id})">Agregar</button>
        `;
        contenedor.appendChild(div);
    });
}

function renderCarrito() {
    const lista = document.getElementById('lista-carrito');
    lista.innerHTML = '';
    for (const id in carrito) {
        const prod = productos.find(p => p.id == id);
        const cantidad = carrito[id];
        const li = document.createElement('li');
        li.innerHTML = `
            ${prod.nombre} x${cantidad}
            <button onclick="agregarAlCarrito(${prod.id})">+</button>
            <button onclick="quitarDelCarrito(${prod.id})">-</button>
        `;
        lista.appendChild(li);
    }
    localStorage.setItem('carrito', JSON.stringify(carrito));
}

function agregarAlCarrito(id) {
    carrito[id] = (carrito[id] || 0) + 1;
    renderCarrito();
}

function quitarDelCarrito(id) {
    if (carrito[id]) {
        carrito[id]--;
        if (carrito[id] === 0) delete carrito[id];
    }
    renderCarrito();
}

function vaciarCarrito() {
    carrito = {};
    renderCarrito();
}

document.addEventListener('DOMContentLoaded', () => {
    renderProductos();
    renderCarrito();
});