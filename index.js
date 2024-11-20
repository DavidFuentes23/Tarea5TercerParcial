 // Función para cargar los productos desde el archivo JSON
async function cargarProductos() {
    try {
        const response = await fetch('data.json'); // Asegúrate de que la ruta sea correcta
        const data = await response.json();
        mostrarProductos(data.productos);
    } catch (error) {
        console.error('Error al cargar los productos:', error);
    }
}

// Función para mostrar los productos en la página
function mostrarProductos(productos) {
    const contenedor = document.getElementById('productos');
    contenedor.innerHTML = ''; // Limpiar el contenedor antes de agregar nuevos productos

    productos.forEach(producto => {
        const col = document.createElement('div');
        col.className = 'col-md-4 mb-4'; // Columna de Bootstrap

        col.innerHTML = `
            <div class="card">
                <img src="${producto.imagen}" class="card-img-top" alt="${producto.titulo}">
                <div class="card-body">
                    <h5 class="card-title">${producto.titulo}</h5>
                    <p class="card-text">${producto.descripcion}</p>
                    <p class="card-text"><strong>Precio: $${producto.costo.toFixed(2)}</strong></p>
                </div>
            </div>
        `;
        contenedor.appendChild(col); // Agregar la columna al contenedor
    });
}

// Llamar a la función para cargar los productos al cargar la página
document.addEventListener('DOMContentLoaded', cargarProductos);