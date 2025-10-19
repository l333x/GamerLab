// ===== DATOS DE PRODUCTOS =====
// PERSONALIZABLE: Modifica nombres, precios y descripciones aquí
const productosData = {
    pc: [
        { id: 1, nombre: "PC Gamer RTX 4060", precio: 1299.99, imagen: "pc1.png", descripcion: "PC completa: RTX 4060, Ryzen 5 7600, 16GB RAM, SSD 1TB NVMe" },
        { id: 2, nombre: "PC Workstation i9", precio: 2199.99, imagen: "pc2.png", descripcion: "Estación de trabajo: Intel i9, 32GB RAM, RTX 4070, SSD 2TB" },
        { id: 3, nombre: "PC Gaming RGB Pro", precio: 1599.99, imagen: "pc3.png", descripcion: "Setup gaming completo con iluminación RGB sincronizada" },
        { id: 4, nombre: "PC Streaming Ultra", precio: 1899.99, imagen: "pc4.png", descripcion: "Optimizada para streaming: captura 4K, 64GB RAM" },
        { id: 5, nombre: "PC Budget Gamer", precio: 899.99, imagen: "pc5.png", descripcion: "Excelente relación calidad-precio para gaming 1080p" },
        { id: 6, nombre: "PC Creator Station", precio: 2499.99, imagen: "pc6.png", descripcion: "Para edición de video 8K y modelado 3D profesional" },
        { id: 7, nombre: "PC Mini ITX Gamer", precio: 1399.99, imagen: "pc1.png", descripcion: "PC compacta de alto rendimiento, perfecta para espacios pequeños" },
        { id: 8, nombre: "PC Extreme 4090", precio: 3499.99, imagen: "pc2.png", descripcion: "Lo mejor de lo mejor: RTX 4090, Threadripper, 128GB RAM" },
        { id: 9, nombre: "PC Office Pro", precio: 699.99, imagen: "pc3.png", descripcion: "Ideal para oficina y productividad multitarea" },
        { id: 10, nombre: "PC VR Ready", precio: 1799.99, imagen: "pc4.png", descripcion: "Optimizada para realidad virtual de alta gama" },
        { id: 11, nombre: "PC Silent Edition", precio: 1499.99, imagen: "pc5.png", descripcion: "Máximo rendimiento con mínimo ruido" },
        { id: 12, nombre: "PC Custom RGB Max", precio: 2099.99, imagen: "pc6.png", descripcion: "Personalización extrema con refrigeración líquida" }
    ],
    teclados: [
        { id: 13, nombre: "Teclado Mecánico RGB Pro", precio: 129.99, imagen: "teclado1.png", descripcion: "Switches Cherry MX Red, RGB personalizable, anti-ghosting" },
        { id: 14, nombre: "Teclado Gamer Wireless", precio: 89.99, imagen: "teclado2.png", descripcion: "Inalámbrico 2.4GHz, batería 40 horas, switches mecánicos" },
        { id: 15, nombre: "Teclado Compacto 60%", precio: 109.99, imagen: "teclado3.png", descripcion: "Diseño compacto, switches hot-swap, perfecto para gaming" },
        { id: 16, nombre: "Teclado RGB Wave", precio: 149.99, imagen: "teclado4.png", descripcion: "Iluminación RGB Wave, switches táctiles, reposamanos magnético" },
        { id: 17, nombre: "Teclado Low Profile", precio: 119.99, imagen: "teclado5.png", descripcion: "Perfil bajo, switches Kailh, diseño minimalista premium" },
        { id: 18, nombre: "Teclado Ergonómico Split", precio: 179.99, imagen: "teclado6.png", descripcion: "Diseño dividido ergonómico, ideal para largas sesiones" },
        { id: 19, nombre: "Teclado Optical Switch", precio: 159.99, imagen: "teclado1.png", descripcion: "Switches ópticos ultrarrápidos, 0.2ms respuesta" },
        { id: 20, nombre: "Teclado Vintage Typewriter", precio: 189.99, imagen: "teclado2.png", descripcion: "Estilo retro con tecnología moderna, switches blue" },
        { id: 21, nombre: "Teclado Mini Numpad", precio: 79.99, imagen: "teclado3.png", descripcion: "Teclado numérico mecánico independiente" },
        { id: 22, nombre: "Teclado Gaming TKL", precio: 139.99, imagen: "teclado4.png", descripcion: "Tenkeyless, switches lineales, construcción de aluminio" },
        { id: 23, nombre: "Teclado Bluetooth Multi", precio: 99.99, imagen: "teclado5.png", descripcion: "Conexión multi-dispositivo, compatible con 3 equipos simultáneos" },
        { id: 24, nombre: "Teclado Macro Pad", precio: 69.99, imagen: "teclado6.png", descripcion: "12 teclas programables para atajos y macros personalizados" }
    ],
    monitores: [
        { id: 25, nombre: "Monitor Gaming 27'' 144Hz", precio: 349.99, imagen: "monitor1.png", descripcion: "Panel IPS 27', 144Hz, 1ms, FreeSync y G-Sync compatible" },
        { id: 26, nombre: "Monitor 4K UHD 32''", precio: 549.99, imagen: "monitor2.png", descripcion: "Resolución 4K, HDR10, 99% sRGB, ideal para diseño" },
        { id: 27, nombre: "Monitor Ultrawide 34''", precio: 699.99, imagen: "monitor3.png", descripcion: "21:9 ultrawide, 3440x1440, curvo, experiencia inmersiva" },
        { id: 28, nombre: "Monitor 240Hz Esports", precio: 449.99, imagen: "monitor4.png", descripcion: "240Hz refresh rate, 0.5ms respuesta, para gaming competitivo" },
        { id: 29, nombre: "Monitor Dual 24'' Pack", precio: 399.99, imagen: "monitor5.png", descripcion: "Pack de 2 monitores Full HD, ideal para productividad" },
        { id: 30, nombre: "Monitor Creator 27'' 4K", precio: 799.99, imagen: "monitor6.png", descripcion: "100% Adobe RGB, calibración de fábrica, para profesionales" },
        { id: 31, nombre: "Monitor Portable 15''", precio: 249.99, imagen: "monitor1.png", descripcion: "Monitor portátil USB-C, Full HD, ideal para laptop" },
        { id: 32, nombre: "Monitor Super Ultrawide 49''", precio: 1299.99, imagen: "monitor2.png", descripcion: "49' 32:9, equivalente a dos monitores 27', curvo 1800R" },
        { id: 33, nombre: "Monitor Vertical 24''", precio: 299.99, imagen: "monitor3.png", descripcion: "Rotación 90°, perfecto para programación y lectura" },
        { id: 34, nombre: "Monitor OLED 27''", precio: 899.99, imagen: "monitor4.png", descripcion: "Panel OLED, contraste infinito, negros perfectos" },
        { id: 35, nombre: "Monitor Mini LED 32''", precio: 1099.99, imagen: "monitor5.png", descripcion: "Tecnología Mini LED, HDR1000, 1152 zonas de atenuación" },
        { id: 36, nombre: "Monitor Touch 27''", precio: 499.99, imagen: "monitor6.png", descripcion: "Pantalla táctil 10 puntos, 4K, ideal para diseño digital" }
    ]
};

// ===== VARIABLES GLOBALES =====
let categoriaActual = null;
let paginaActual = 1;
const productosPorPagina = 6;

// ===== ELEMENTOS DEL DOM =====
const categoryButtons = document.querySelectorAll('.category-btn');
const emptyState = document.getElementById('emptyState');
const productsGrid = document.getElementById('productsGrid');
const pagination = document.getElementById('pagination');
const pageButtons = document.querySelectorAll('.page-btn');

// Modal principal
const productModal = document.getElementById('productModal');
const closeModalBtn = document.getElementById('closeModal');
const modalProductImage = document.getElementById('modalProductImage');
const modalProductName = document.getElementById('modalProductName');
const modalProductPrice = document.getElementById('modalProductPrice');
const modalProductDescription = document.getElementById('modalProductDescription');
const btnVerAR = document.getElementById('btnVerAR');
const btnCotizar = document.getElementById('btnCotizar');

// Modal AR (QR)
const arModal = document.getElementById('arModal');
const closeARModalBtn = document.getElementById('closeARModal');
const btnCloseAR = document.getElementById('btnCloseAR');

// ===== EVENT LISTENERS =====

// Botones de categoría
categoryButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const categoria = btn.dataset.category;
        seleccionarCategoria(categoria, btn);
    });
});

// Botones de paginación
pageButtons.forEach(btn => {
    btn.addEventListener('click', () => {
        const pagina = parseInt(btn.dataset.page);
        cambiarPagina(pagina);
    });
});

// Cerrar modal principal
closeModalBtn.addEventListener('click', cerrarModalProducto);
productModal.querySelector('.modal-backdrop').addEventListener('click', cerrarModalProducto);

// Cerrar modal AR
closeARModalBtn.addEventListener('click', cerrarModalAR);
btnCloseAR.addEventListener('click', cerrarModalAR);
arModal.querySelector('.modal-backdrop').addEventListener('click', cerrarModalAR);

// Botón Ver en AR
btnVerAR.addEventListener('click', () => {
    arModal.classList.add('show');
});

// Botón Cotizar
btnCotizar.addEventListener('click', () => {
    window.location.href = 'cotizador.html';
});

// ===== FUNCIONES PRINCIPALES =====

/**
 * Selecciona una categoría y muestra sus productos
 */
function seleccionarCategoria(categoria, botonClickeado) {
    // Remover clase active de todos los botones
    categoryButtons.forEach(btn => btn.classList.remove('active'));
    
    // Activar botón seleccionado
    botonClickeado.classList.add('active');
    
    // Actualizar categoría y resetear página
    categoriaActual = categoria;
    paginaActual = 1;
    
    // Ocultar estado vacío
    emptyState.style.display = 'none';
    
    // Mostrar paginación
    pagination.style.display = 'flex';
    
    // Actualizar botones de página
    actualizarBotonesPagina();
    
    // Mostrar productos con animación
    mostrarProductos();
}

/**
 * Muestra los productos de la categoría actual con animación
 */
function mostrarProductos() {
    // Fade out del grid actual
    productsGrid.classList.remove('show');
    
    setTimeout(() => {
        // Limpiar grid
        productsGrid.innerHTML = '';
        
        // Obtener productos de la categoría actual
        const productos = productosData[categoriaActual];
        
        // Calcular índices para paginación
        const inicio = (paginaActual - 1) * productosPorPagina;
        const fin = inicio + productosPorPagina;
        const productosPagina = productos.slice(inicio, fin);
        
        // Crear tarjetas de productos
        productosPagina.forEach(producto => {
            const card = crearTarjetaProducto(producto);
            productsGrid.appendChild(card);
        });
        
        // Fade in del grid
        setTimeout(() => {
            productsGrid.classList.add('show');
        }, 50);
    }, 300);
}

/**
 * Crea una tarjeta HTML para un producto
 */
function crearTarjetaProducto(producto) {
    const card = document.createElement('div');
    card.className = 'product-card';
    card.innerHTML = `
        <img src="./images/${producto.imagen}" alt="${producto.nombre}" class="product-image">
        <h3 class="product-name">${producto.nombre}</h3>
        <p class="product-price">${producto.precio.toFixed(2)}</p>
    `;
    
    // Event listener para abrir modal
    card.addEventListener('click', () => abrirModalProducto(producto));
    
    return card;
}

/**
 * Cambia a una página diferente
 */
function cambiarPagina(numeroPagina) {
    if (numeroPagina === paginaActual) return;
    
    paginaActual = numeroPagina;
    actualizarBotonesPagina();
    mostrarProductos();
}

/**
 * Actualiza el estado visual de los botones de página
 */
function actualizarBotonesPagina() {
    pageButtons.forEach(btn => {
        const pagina = parseInt(btn.dataset.page);
        if (pagina === paginaActual) {
            btn.classList.add('active');
        } else {
            btn.classList.remove('active');
        }
    });
}

/**
 * Abre el modal con información del producto
 */
function abrirModalProducto(producto) {
    modalProductImage.src = `./images/${producto.imagen}`;
    modalProductImage.alt = producto.nombre;
    modalProductName.textContent = producto.nombre;
    modalProductPrice.textContent = `${producto.precio.toFixed(2)}`;
    modalProductDescription.textContent = producto.descripcion;
    
    productModal.classList.add('show');
    document.body.style.overflow = 'hidden'; // Prevenir scroll
}

/**
 * Cierra el modal principal de producto
 */
function cerrarModalProducto() {
    productModal.classList.remove('show');
    document.body.style.overflow = 'auto'; // Restaurar scroll
}

/**
 * Cierra el modal de AR (QR)
 */
function cerrarModalAR() {
    arModal.classList.remove('show');
}

// ===== INICIALIZACIÓN =====
// La página inicia vacía, esperando que el usuario seleccione una categoría
console.log('Catálogo de Gamer Lab cargado correctamente');
console.log('Total de productos:', Object.values(productosData).flat().length);
