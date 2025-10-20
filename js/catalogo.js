// ===== DATOS DE PRODUCTOS =====
// PERSONALIZABLE: Modifica nombres, precios y descripciones aquí
const productosData = {
    pc: [
    { 
        id: 1, 
        nombre: "PC Gamer RTX 4060", 
        precio: 1299.99, 
        imagen: "pc1.png", 
        descripcion: "PC completa equipada con tarjeta gráfica RTX 4060, procesador Ryzen 5 7600, 16GB DDR5 y SSD NVMe de 1TB. Ideal para gaming en 2K con excelente fluidez y temperaturas estables. Chasis con iluminación RGB sincronizable y ventilación de alto rendimiento." 
    },
    { 
        id: 2, 
        nombre: "PC Workstation i9", 
        precio: 2199.99, 
        imagen: "pc2.png", 
        descripcion: "Estación de trabajo profesional con Intel Core i9 de última generación, 32GB RAM DDR5, tarjeta gráfica RTX 4070 y almacenamiento SSD NVMe 2TB. Diseñada para diseño 3D, renderizado, IA y tareas exigentes. Gabinete silencioso con refrigeración líquida." 
    },
    { 
        id: 3, 
        nombre: "PC Gaming RGB Pro", 
        precio: 1599.99, 
        imagen: "pc3.png", 
        descripcion: "Setup gamer de alto rendimiento con iluminación RGB total, procesador Ryzen 7, RTX 4060 Ti y 32GB RAM. Ofrece FPS estables en juegos AAA y experiencia inmersiva con sincronización RGB. Perfecta para jugadores que buscan potencia y estilo." 
    },
    { 
        id: 4, 
        nombre: "PC Streaming Ultra", 
        precio: 1899.99, 
        imagen: "pc4.png", 
        descripcion: "Configurada para creadores de contenido: procesador Ryzen 9, 64GB RAM, tarjeta capturadora 4K integrada y RTX 4070 Ti. Optimizada para streaming, edición de video y multitarea sin latencia. Diseño sobrio con panel de vidrio templado." 
    },
    { 
        id: 5, 
        nombre: "PC Budget Gamer", 
        precio: 899.99, 
        imagen: "pc5.png", 
        descripcion: "Excelente opción calidad-precio para gaming Full HD. Incluye Ryzen 5 5600G, 16GB RAM, SSD 500GB y gráficos Vega integrados. Ideal para jugadores casuales o estudiantes que buscan rendimiento sin gastar de más." 
    },
    { 
        id: 6, 
        nombre: "PC Creator Station", 
        precio: 2499.99, 
        imagen: "pc6.png", 
        descripcion: "Diseñada para profesionales de la edición, animación y modelado 3D. Incluye Intel i9, 64GB RAM, RTX 4080 y SSD NVMe 2TB. Ofrece máxima velocidad en renders y soporte para pantallas 8K. Chasis premium con iluminación RGB y refrigeración líquida." 
    },
    { 
        id: 7, 
        nombre: "PC Mini ITX Gamer", 
        precio: 1399.99, 
        imagen: "pc1.png", 
        descripcion: "PC compacta y potente, ideal para espacios reducidos sin sacrificar rendimiento. Ryzen 7, RTX 4060, 32GB RAM y SSD 1TB. Diseño Mini ITX con excelente flujo de aire y estética minimalista." 
    },
    { 
        id: 8, 
        nombre: "PC Extreme 4090", 
        precio: 3499.99, 
        imagen: "pc2.png", 
        descripcion: "Lo mejor del mercado: procesador AMD Threadripper, 128GB DDR5 y tarjeta gráfica RTX 4090. Capaz de manejar IA, renderizado 3D y gaming 4K con total fluidez. Sistema de refrigeración líquida custom y gabinete full tower premium." 
    },
    { 
        id: 9, 
        nombre: "PC Office Pro", 
        precio: 699.99, 
        imagen: "pc3.png", 
        descripcion: "Diseñada para oficinas modernas: procesador Intel i5, 16GB RAM, SSD 512GB. Perfecta para multitarea, videollamadas y productividad diaria. Bajo consumo energético y rendimiento estable con diseño compacto." 
    },
    { 
        id: 10, 
        nombre: "PC VR Ready", 
        precio: 1799.99, 
        imagen: "pc4.png", 
        descripcion: "Optimizada para realidad virtual avanzada. Incluye RTX 4070, Ryzen 7 y 32GB RAM. Compatible con Oculus, HTC Vive y sistemas VR de alta gama. Ofrece experiencias fluidas e inmersivas sin caídas de rendimiento." 
    },
    { 
        id: 11, 
        nombre: "PC Silent Edition", 
        precio: 1499.99, 
        imagen: "pc5.png", 
        descripcion: "Silenciosa, elegante y potente. Procesador Intel i7, RTX 4060 Ti y 32GB RAM con sistema de refrigeración pasiva avanzada. Ideal para oficinas o creadores que buscan rendimiento sin ruido." 
    },
    { 
        id: 12, 
        nombre: "PC Custom RGB Max", 
        precio: 2099.99, 
        imagen: "pc6.png", 
        descripcion: "Máximo nivel de personalización: RGB direccionable, refrigeración líquida AIO y componentes premium. Ryzen 9, RTX 4070 Ti y 64GB RAM. Ideal para entusiastas que buscan estética y potencia extrema." 
    }
],
teclados: [
    { 
        id: 13, 
        nombre: "Teclado Mecánico RGB Pro", 
        precio: 129.99, 
        imagen: "teclado1.png", 
        descripcion: "Teclado mecánico profesional con switches Cherry MX Red, iluminación RGB totalmente personalizable y estructura de aluminio. Anti-ghosting completo y cable trenzado desmontable. Perfecto para gamers exigentes." 
    },
    { 
        id: 14, 
        nombre: "Teclado Gamer Wireless", 
        precio: 89.99, 
        imagen: "teclado2.png", 
        descripcion: "Teclado inalámbrico 2.4GHz con batería de hasta 40 horas, switches mecánicos de respuesta rápida y retroiluminación RGB. Ideal para setups sin cables y máximo confort de uso." 
    },
    { 
        id: 15, 
        nombre: "Teclado Compacto 60%", 
        precio: 109.99, 
        imagen: "teclado3.png", 
        descripcion: "Diseño ultra compacto con formato 60%, ideal para gamers con poco espacio. Incluye switches hot-swap, cable USB-C desmontable y funciones multimedia integradas." 
    },
    { 
        id: 16, 
        nombre: "Teclado RGB Wave", 
        precio: 149.99, 
        imagen: "teclado4.png", 
        descripcion: "Teclado con efecto RGB Wave dinámico, switches táctiles, reposamanos magnético y estructura ergonómica. Perfecto para sesiones largas de juego o trabajo." 
    },
    { 
        id: 17, 
        nombre: "Teclado Low Profile", 
        precio: 119.99, 
        imagen: "teclado5.png", 
        descripcion: "Diseño de perfil bajo con switches mecánicos Kailh y estructura metálica minimalista. Escritura rápida, precisa y cómoda. Ideal para oficina o setups modernos." 
    },
    { 
        id: 18, 
        nombre: "Teclado Ergonómico Split", 
        precio: 179.99, 
        imagen: "teclado6.png", 
        descripcion: "Teclado dividido en dos secciones ajustables para máxima comodidad. Ideal para programadores, escritores o diseñadores. Con retroiluminación LED y apoyo para muñecas." 
    },
    { 
        id: 19, 
        nombre: "Teclado Optical Switch", 
        precio: 159.99, 
        imagen: "teclado1.png", 
        descripcion: "Switches ópticos ultrarrápidos de 0.2ms, ideales para eSports. Diseño duradero con más de 100 millones de pulsaciones, RGB per-key y memoria integrada." 
    },
    { 
        id: 20, 
        nombre: "Teclado Vintage Typewriter", 
        precio: 189.99, 
        imagen: "teclado2.png", 
        descripcion: "Estilo retro con teclas redondas tipo máquina de escribir, estructura metálica y switches azules. Perfecto para nostálgicos y creadores de contenido." 
    },
    { 
        id: 21, 
        nombre: "Teclado Mini Numpad", 
        precio: 79.99, 
        imagen: "teclado3.png", 
        descripcion: "Teclado numérico mecánico independiente, ideal para tareas contables o productividad. Con iluminación LED y cable desmontable." 
    },
    { 
        id: 22, 
        nombre: "Teclado Gaming TKL", 
        precio: 139.99, 
        imagen: "teclado4.png", 
        descripcion: "Formato TKL sin pad numérico, construcción de aluminio, switches lineales y RGB por tecla. Ligero y compacto para torneos." 
    },
    { 
        id: 23, 
        nombre: "Teclado Bluetooth Multi", 
        precio: 99.99, 
        imagen: "teclado5.png", 
        descripcion: "Conexión Bluetooth multi-dispositivo (hasta 3 equipos). Ideal para laptops, tablets o PCs. Batería de larga duración y diseño silencioso." 
    },
    { 
        id: 24, 
        nombre: "Teclado Macro Pad", 
        precio: 69.99, 
        imagen: "teclado6.png", 
        descripcion: "12 teclas programables para macros y atajos. Compatible con software de personalización RGB y perfiles de juego. Perfecto para streamers." 
    }
],
monitores: [
    { 
        id: 25, 
        nombre: "Monitor Gaming 27'' 144Hz", 
        precio: 349.99, 
        imagen: "monitor1.png", 
        descripcion: "Monitor IPS de 27 pulgadas con resolución Full HD, tasa de refresco de 144Hz y tiempo de respuesta de 1ms. Compatible con FreeSync y G-Sync. Ideal para juegos competitivos con colores vibrantes y ángulos amplios." 
    },
    { 
        id: 26, 
        nombre: "Monitor 4K UHD 32''", 
        precio: 549.99, 
        imagen: "monitor2.png", 
        descripcion: "Pantalla 4K de 32 pulgadas con HDR10 y 99% de cobertura sRGB. Ideal para diseño gráfico, edición de video y productividad. Incluye puertos HDMI, DisplayPort y USB-C." 
    },
    { 
        id: 27, 
        nombre: "Monitor Ultrawide 34''", 
        precio: 699.99, 
        imagen: "monitor3.png", 
        descripcion: "Monitor curvo 21:9 con resolución 3440x1440. Experiencia panorámica inmersiva para juegos, edición y multitarea. Compatible con soporte VESA y modo Picture-in-Picture." 
    },
    { 
        id: 28, 
        nombre: "Monitor 240Hz Esports", 
        precio: 449.99, 
        imagen: "monitor4.png", 
        descripcion: "Diseñado para gamers profesionales. Panel TN ultrarrápido de 0.5ms, 240Hz y compatibilidad G-Sync. Ideal para shooters competitivos y torneos." 
    },
    { 
        id: 29, 
        nombre: "Monitor Dual 24'' Pack", 
        precio: 399.99, 
        imagen: "monitor5.png", 
        descripcion: "Pack de 2 monitores Full HD de 24 pulgadas. Ideal para oficinas, programadores o streamers que necesitan multitarea. Bisel delgado y soporte ajustable." 
    },
    { 
        id: 30, 
        nombre: "Monitor Creator 27'' 4K", 
        precio: 799.99, 
        imagen: "monitor6.png", 
        descripcion: "Monitor profesional 4K calibrado de fábrica con 100% Adobe RGB y soporte HDR600. Diseñado para diseñadores, fotógrafos y editores." 
    },
    { 
        id: 31, 
        nombre: "Monitor Portable 15''", 
        precio: 249.99, 
        imagen: "monitor1.png", 
        descripcion: "Pantalla portátil de 15 pulgadas Full HD con conexión USB-C. Ideal para laptops, consolas o trabajo remoto. Ligera, delgada y con funda protectora incluida." 
    },
    { 
        id: 32, 
        nombre: "Monitor Super Ultrawide 49''", 
        precio: 1299.99, 
        imagen: "monitor2.png", 
        descripcion: "Pantalla curvada de 49 pulgadas con formato 32:9, equivalente a dos monitores de 27''. Perfecta para multitarea, edición y simuladores." 
    },
    { 
        id: 33, 
        nombre: "Monitor Vertical 24''", 
        precio: 299.99, 
        imagen: "monitor3.png", 
        descripcion: "Monitor Full HD con rotación 90° para uso vertical. Ideal para programación, lectura o edición de texto. Soporte ergonómico ajustable." 
    },
    { 
        id: 34, 
        nombre: "Monitor OLED 27''", 
        precio: 899.99, 
        imagen: "monitor4.png", 
        descripcion: "Panel OLED con negros perfectos y contraste infinito. Colores intensos, HDR y tiempos de respuesta mínimos. Ideal para creadores y gamers exigentes." 
    },
    { 
        id: 35, 
        nombre: "Monitor Mini LED 32''", 
        precio: 1099.99, 
        imagen: "monitor5.png", 
        descripcion: "Pantalla 4K con tecnología Mini LED, HDR1000 y 1152 zonas de atenuación. Brillo extremo y detalle preciso. Diseñado para contenido profesional." 
    },
    { 
        id: 36, 
        nombre: "Monitor Touch 27''", 
        precio: 499.99, 
        imagen: "monitor6.png", 
        descripcion: "Pantalla táctil 10 puntos en resolución 4K. Ideal para diseño digital, presentaciones interactivas y educación. Soporte inclinable y conexión USB-C." 
    }
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
