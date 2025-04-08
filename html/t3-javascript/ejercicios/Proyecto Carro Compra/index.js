const productos = [
    {
        id: 0,
        nombre: "Peluche palmerín",
        descripcion: "Este adorable peluche de Palmerín, la simpática mascota andaluza, está hecho con materiales suaves y de alta calidad, ideal para abrazar. Con su diseño alegre y colores vibrantes, es perfecto tanto para niños como para coleccionistas.",
        precio: 9.99,
        imagen: "peluche.jpg"
    },
    {
        id: 1,
        nombre: "Llavero escudo",
        descripcion: "Este llavero con el escudo del Real Betis Balompié es el complemento perfecto para cualquier bético de corazón. Fabricado con materiales resistentes, luce con orgullo los colores y el emblema del equipo en tu día a día.",
        precio: 3.99,
        imagen: "llavero.jpg"
    },
    {
        id: 2,
        nombre: "Camiseta Bakambu",
        descripcion: "Luce con orgullo la camiseta oficial del Real Betis con el nombre y dorsal de Bakambu, diseñada para los verdaderos fans verdiblancos. Con tejido transpirable y escudo bordado, es perfecta para animar al equipo desde la grada o en tu día a día.",
        precio: 69.99,
        imagen: "camiseta.jpg"
    },
    {
        id: 3,
        nombre: "Balón de fútbol",
        descripcion: "Este balón del Real Betis combina diseño deportivo con los icónicos colores del club, ideal para jugar o coleccionar. Resistente y de gran calidad, lleva el escudo verdiblanco para que demuestres tu pasión en cada toque.",
        precio: 24.99,
        imagen: "balon.jpg"
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