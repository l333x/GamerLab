// ===================================
// DATOS DE PRODUCTOS
// ===================================
const productos = [
  {
    id: 1,
    nombre: "Teclado Mecánico RGB Pro",
    categoria: "teclado",
    imagen: "./images/teclado1.png",
    precio: 129.99,
    cuotas: [3, 6, 9, 12, 18],
    descripcion: "Teclado mecánico con switches Cherry MX, RGB personalizable, diseño ergonómico."
  },
  {
    id: 2,
    nombre: "Teclado Gamer Wireless",
    categoria: "teclado",
    imagen: "./images/teclado2.png",
    precio: 89.99,
    cuotas: [3, 6, 9, 12, 18],
    descripcion: "Teclado inalámbrico, batería de 40 horas, retroiluminación LED."
  },
  {
    id: 3,
    nombre: "Monitor Gaming 27'' 144Hz",
    categoria: "monitor",
    imagen: "./images/monitor1.png",
    precio: 349.99,
    cuotas: [9, 12],
    descripcion: "Monitor curvo 27 pulgadas, 144Hz, 1ms respuesta, panel VA."
  },
  {
    id: 4,
    nombre: "Monitor 4K UHD 32''",
    categoria: "monitor",
    imagen: "./images/monitor2.png",
    precio: 549.99,
    cuotas: [9, 12],
    descripcion: "Monitor 4K, HDR10, IPS, ideal para diseño y gaming."
  },
  {
    id: 5,
    nombre: "PC Gamer RTX 4060",
    categoria: "pc",
    imagen: "./images/pc1.png",
    precio: 1299.99,
    cuotas: [6, 9, 12],
    descripcion: "PC completa: RTX 4060, Ryzen 5 7600, 16GB RAM, SSD 1TB."
  },
  {
    id: 6,
    nombre: "PC Workstation i9",
    categoria: "pc",
    imagen: "./images/pc2.png",
    precio: 2199.99,
    cuotas: [6, 9, 12],
    descripcion: "Estación de trabajo: Intel i9, 32GB RAM, RTX 4070, SSD 2TB."
  }
];

// ===================================
// DATOS DE RESEÑAS
// ===================================
const resenas = [
  {
    nombre: "María G.",
    inicial: "M",
    estrellas: 5,
    comentario: "Excelente servicio, pude ver el producto en mi escritorio antes de comprar. ¡Totalmente recomendado!"
  },
  {
    nombre: "Carlos R.",
    inicial: "C",
    estrellas: 5,
    comentario: "El cotizador es muy útil y preciso. Me ayudó a planificar mi compra perfectamente."
  },
  {
    nombre: "Ana M.",
    inicial: "A",
    estrellas: 4,
    comentario: "Muy buena experiencia. Los cálculos son claros y el proceso es sencillo."
  },
  {
    nombre: "Luis P.",
    inicial: "L",
    estrellas: 5,
    comentario: "Increíble herramienta. Me facilita saber cuánto pagaré mensualmente sin sorpresas."
  },
  {
    nombre: "Sofia T.",
    inicial: "S",
    estrellas: 5,
    comentario: "Transparente y fácil de usar. Me encanta poder calcular antes de decidir."
  },
  {
    nombre: "Diego V.",
    inicial: "D",
    estrellas: 4,
    comentario: "Excelente atención y el cotizador funciona de maravilla. Muy satisfecho."
  },
  {
    nombre: "Patricia L.",
    inicial: "P",
    estrellas: 5,
    comentario: "La mejor experiencia de compra online. Todo muy claro desde el inicio."
  },
  {
    nombre: "Roberto H.",
    inicial: "R",
    estrellas: 5,
    comentario: "Súper práctico y confiable. Ahora puedo planificar mis pagos sin complicaciones."
  },
  {
    nombre: "Valentina S.",
    inicial: "V",
    estrellas: 4,
    comentario: "Me gustó mucho poder personalizar las cuotas según mi presupuesto."
  },
  {
    nombre: "Fernando N.",
    inicial: "F",
    estrellas: 5,
    comentario: "Profesional y eficiente. El cotizador me dio toda la información que necesitaba."
  }
];

// ===================================
// VARIABLES GLOBALES
// ===================================
let productoSeleccionado = null;
let cuotaSeleccionada = null;

// ===================================
// ELEMENTOS DEL DOM
// ===================================
const selector = document.getElementById('producto-selector');
const productoInfo = document.getElementById('producto-info');
const calculadora = document.getElementById('calculadora');
const productoImg = document.getElementById('producto-img');
const productoNombre = document.getElementById('producto-nombre');
const productoDescripcion = document.getElementById('producto-descripcion');
const precioBase = document.getElementById('precio-base');
const cuotasContainer = document.getElementById('cuotas-container');
const btnCalcular = document.getElementById('btn-calcular');
const resultados = document.getElementById('resultados');

// ===================================
// EVENT LISTENERS
// ===================================

// Cuando se selecciona un producto
selector.addEventListener('change', (e) => {
  const productoId = parseInt(e.target.value);
  if (productoId) {
    cargarProducto(productoId);
  } else {
    ocultarSecciones();
  }
});

// Botón calcular
btnCalcular.addEventListener('click', calcularFinanciamiento);

// ===================================
// FUNCIONES PRINCIPALES
// ===================================

/**
 * Carga la información del producto seleccionado
 */
function cargarProducto(id) {
  productoSeleccionado = productos.find(p => p.id === id);
  
  if (!productoSeleccionado) return;

  // Mostrar secciones
  productoInfo.style.display = 'block';
  calculadora.style.display = 'block';
  resultados.style.display = 'none';

  // Cargar información del producto
  productoImg.src = `../images/${productoSeleccionado.imagen}`;
  productoImg.alt = productoSeleccionado.nombre;
  productoNombre.textContent = productoSeleccionado.nombre;
  productoDescripcion.textContent = productoSeleccionado.descripcion;
  precioBase.textContent = `${productoSeleccionado.precio.toFixed(2)}`;

  // Generar botones de cuotas
  generarBotonesCuotas();

  // Resetear selección de cuota
  cuotaSeleccionada = null;
}

/**
 * Genera los botones de cuotas según el producto
 */
function generarBotonesCuotas() {
  cuotasContainer.innerHTML = '';
  
  productoSeleccionado.cuotas.forEach(meses => {
    const btn = document.createElement('button');
    btn.className = 'btn-cuota';
    btn.textContent = `${meses} meses`;
    btn.dataset.meses = meses;
    
    btn.addEventListener('click', () => {
      // Remover active de todos los botones
      document.querySelectorAll('.btn-cuota').forEach(b => b.classList.remove('active'));
      
      // Agregar active al botón clickeado
      btn.classList.add('active');
      cuotaSeleccionada = meses;
    });
    
    cuotasContainer.appendChild(btn);
  });
}

/**
 * Calcula el financiamiento con IVA
 */
function calcularFinanciamiento() {
  // Validar que hay un producto seleccionado
  if (!productoSeleccionado) {
    alert('Por favor, selecciona un producto');
    return;
  }

  // Validar que hay una cuota seleccionada
  if (!cuotaSeleccionada) {
    alert('Por favor, selecciona la cantidad de meses');
    return;
  }

  // Obtener precio base del producto seleccionado
  const precio = productoSeleccionado.precio;

  // CÁLCULOS
  const iva = precio * 0.15; // IVA del 15%
  const precioTotal = precio + iva;
  const cuotaMensual = precioTotal / cuotaSeleccionada;
  const totalPagar = precioTotal; // En este caso es lo mismo

  // Mostrar resultados
  document.getElementById('result-base').textContent = `${precio.toFixed(2)}`;
  document.getElementById('result-iva').textContent = `${iva.toFixed(2)}`;
  document.getElementById('result-total').textContent = `${precioTotal.toFixed(2)}`;
  document.getElementById('result-cuota').textContent = `${cuotaMensual.toFixed(2)}/mes (${cuotaSeleccionada} meses)`;
  document.getElementById('result-total-pagar').textContent = `${totalPagar.toFixed(2)}`;

  // Mostrar sección de resultados con animación
  resultados.style.display = 'block';
  
  // Scroll suave hacia los resultados
  resultados.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

/**
 * Oculta las secciones de producto y calculadora
 */
function ocultarSecciones() {
  productoInfo.style.display = 'none';
  calculadora.style.display = 'none';
  resultados.style.display = 'none';
}

// ===================================
// CARRUSEL DE RESEÑAS
// ===================================

/**
 * Genera una tarjeta de reseña
 */
function crearReseñaCard(resena) {
  const card = document.createElement('div');
  card.className = 'resena-card';
  
  // Generar estrellas
  const estrellas = '⭐'.repeat(resena.estrellas);
  
  card.innerHTML = `
    <div class="resena-header">
      <div class="resena-avatar">${resena.inicial}</div>
      <div class="resena-info">
        <h5>${resena.nombre}</h5>
        <div class="resena-estrellas">${estrellas}</div>
      </div>
    </div>
    <p class="resena-comentario">${resena.comentario}</p>
  `;
  
  return card;
}

/**
 * Inicializa los carruseles de reseñas
 */
function inicializarCarruseles() {
  const carrusel1 = document.getElementById('carrusel-1');
  const carrusel2 = document.getElementById('carrusel-2');

  // Dividir reseñas: primeras 5 para fila 1, últimas 5 para fila 2
  const resenasFila1 = resenas.slice(0, 5);
  const resenasFila2 = resenas.slice(5, 10);

  // Crear carrusel 1 (izquierda a derecha)
  // Duplicamos las reseñas para efecto infinito
  [...resenasFila1, ...resenasFila1].forEach(resena => {
    carrusel1.appendChild(crearReseñaCard(resena));
  });

  // Crear carrusel 2 (derecha a izquierda)
  [...resenasFila2, ...resenasFila2].forEach(resena => {
    carrusel2.appendChild(crearReseñaCard(resena));
  });
}

// ===================================
// INICIALIZACIÓN
// ===================================

/**
 * Inicializa la página cuando el DOM está listo
 */
document.addEventListener('DOMContentLoaded', () => {
  // Inicializar carruseles de reseñas
  inicializarCarruseles();
  
  // Ocultar secciones al inicio
  ocultarSecciones();
  
  console.log('Cotizador Inteligente - Gamer Lab');
  console.log('Sistema listo para calcular financiamientos');

});
