/* ============================================================
   MAIN.JS - Liceo Hernán Vargas Ramírez
   ------------------------------------------------------------
   Funciones generales del sitio:
   1. Datos editables del colegio (nombre, lema, contacto...)
   2. Inserción del encabezado (menú) compartido
   3. Inserción del pie de página compartido
   4. Menú móvil tipo hamburguesa
   5. Marcar el enlace activo según la página actual
   ------------------------------------------------------------
   NOTA: El encabezado y el pie se generan desde aquí para que
   solo haya que editar el menú en un solo lugar.
   ============================================================ */

/* ===== 1. DATOS EDITABLES DEL COLEGIO =====
   Cambia aquí los datos básicos y se actualizan en todo el sitio. */
const DATOS_COLEGIO = {
  nombre: "Liceo Hernán Vargas Ramírez",
  siglas: "LHVR",
  lema: "Formación integral con valores, conocimiento y comunidad.",
  direccion: "Calle 3, Juan Viñas, Jiménez, Cartago, Costa Rica. 120 metros este de la Parroquia de Juan Viñas, frente al supermercado La Canasta.",
  telefono: "2532-2274 / 8644-6240",
  correo: "lic.hernanvargasramirez@mep.go.cr",
  maps: "https://maps.app.goo.gl/haUwDr5NaYrQTdSYA",
  facebook: "https://www.facebook.com/liceohernanvargasramirez/?locale=es_LA",
  horario: "Lunes a viernes, 7:00 a.m. - 4:10 p.m.",
};

/* ===== Menú principal (edítalo en un solo lugar) =====
   "ruta" es relativa a la raíz del sitio. */
const MENU = [
  { etiqueta: "Inicio", ruta: "index.html", id: "inicio" },
  { etiqueta: "Nosotros", ruta: "pages/nosotros.html", id: "nosotros" },
  { etiqueta: "Oferta académica", ruta: "pages/oferta-academica.html", id: "oferta" },
  { etiqueta: "Boletines", ruta: "pages/boletines.html", id: "boletines" },
  { etiqueta: "Calendario", ruta: "pages/calendario.html", id: "calendario" },
  { etiqueta: "Biblioteca", ruta: "pages/biblioteca-recursos.html", id: "biblioteca" },
  { etiqueta: "Docentes", ruta: "pages/directorio-docente.html", id: "docentes" },
  { etiqueta: "Horarios y tramites", ruta: "pages/documentos-importantes.html", id: "documentos" },
  { etiqueta: "Recursos de apoyo", ruta: "pages/enlaces-interes.html", id: "enlaces" },
  { etiqueta: "Comunidad", ruta: "pages/comunidad.html", id: "comunidad" },
  { etiqueta: "Galería", ruta: "pages/galeria.html", id: "galeria" },
  { etiqueta: "Contacto", ruta: "pages/contacto-ubicacion.html", id: "contacto" },
];

/* Detecta si estamos dentro de la carpeta /pages/ para ajustar las rutas */
function obtenerBase() {
  return window.location.pathname.includes("/pages/") ? "../" : "";
}

/* ===== 2. ENCABEZADO / MENÚ ===== */
function construirEncabezado() {
  const base = obtenerBase();
  const paginaActual = document.body.dataset.pagina || "inicio";

  const enlaces = MENU.map((item) => {
    const activo = item.id === paginaActual ? " activo" : "";
    return `<li><a class="menu__enlace${activo}" href="${base}${item.ruta}">${item.etiqueta}</a></li>`;
  }).join("");

  const html = `
    <header class="encabezado">
      <div class="barra">
        <a class="marca" href="${base}index.html" aria-label="Ir al inicio">
          <img class="marca__logo" src="${base}assets/logos/logo-liceo.jpg" alt="Logo del ${DATOS_COLEGIO.nombre}" />
          <span class="marca__texto">
            <span class="marca__nombre">${DATOS_COLEGIO.siglas}</span>
            <span class="marca__lema">${DATOS_COLEGIO.nombre}</span>
          </span>
        </a>

        <button class="boton-menu" id="botonMenu" aria-label="Abrir menú" aria-expanded="false" aria-controls="menuPrincipal">
          <span></span><span></span><span></span>
        </button>

        <nav aria-label="Menú principal">
          <ul class="menu" id="menuPrincipal">
            ${enlaces}
          </ul>
        </nav>
      </div>
    </header>
  `;

  const contenedor = document.getElementById("encabezado");
  if (contenedor) contenedor.innerHTML = html;
}

/* ===== 3. PIE DE PÁGINA ===== */
function construirPie() {
  const base = obtenerBase();
  const anio = new Date().getFullYear();

  const enlacesRapidos = MENU.slice(0, 6)
    .map((i) => `<li><a href="${base}${i.ruta}">${i.etiqueta}</a></li>`)
    .join("");

  const html = `
    <footer class="pie">
      <div class="contenedor">
        <div class="pie__grid">
          <div class="pie__marca">
            <img class="pie__logo" src="${base}assets/logos/logo-liceo.jpg" alt="Logo del ${DATOS_COLEGIO.nombre}" />
            <div>
              <p class="pie__nombre">${DATOS_COLEGIO.nombre}</p>
              <p class="pie__texto">${DATOS_COLEGIO.lema}</p>
            </div>
          </div>

          <div>
            <h4>Enlaces rápidos</h4>
            <ul class="pie__lista">${enlacesRapidos}</ul>
          </div>

          <div>
            <h4>Contacto</h4>
            <ul class="pie__lista">
              <li>${DATOS_COLEGIO.direccion}</li>
              <li>Tel: ${DATOS_COLEGIO.telefono}</li>
              <li>
                Correo: 
                <a class="pie__enlace-contacto" href="mailto:${DATOS_COLEGIO.correo}">
                  ${DATOS_COLEGIO.correo}
                </a>
              </li>
              <li>${DATOS_COLEGIO.horario}</li>
              <li>
              Visite nuestro 
              <a class="pie__link-social" href="${DATOS_COLEGIO.facebook}" target="_blank" rel="noopener">
                Facebook oficial aquí
              </a>.
            </li>
            </ul>
          </div>
        </div>

        <div class="pie__base">
          <p>&copy; ${anio} ${DATOS_COLEGIO.nombre}. Todos los derechos reservados.</p>
        </div>
      </div>
    </footer>
  `;

  const contenedor = document.getElementById("pie");
  if (contenedor) contenedor.innerHTML = html;
}

/* ===== 4. MENÚ MÓVIL (HAMBURGUESA) ===== */
function activarMenuMovil() {
  const boton = document.getElementById("botonMenu");
  const menu = document.getElementById("menuPrincipal");
  if (!boton || !menu) return;

  boton.addEventListener("click", () => {
    const abierto = menu.classList.toggle("abierto");
    boton.classList.toggle("activo", abierto);
    boton.setAttribute("aria-expanded", abierto ? "true" : "false");
    boton.setAttribute("aria-label", abierto ? "Cerrar menú" : "Abrir menú");
  });

  /* Cerrar el menú al hacer clic en un enlace (útil en móvil) */
  menu.querySelectorAll("a").forEach((enlace) => {
    enlace.addEventListener("click", () => {
      menu.classList.remove("abierto");
      boton.classList.remove("activo");
      boton.setAttribute("aria-expanded", "false");
    });
  });
}

/* ===== 5. RELLENAR DATOS DEL COLEGIO EN LA PÁGINA =====
   Cualquier elemento con data-dato="clave" recibe el valor. */
function rellenarDatos() {
  document.querySelectorAll("[data-dato]").forEach((el) => {
    const clave = el.dataset.dato;
    if (DATOS_COLEGIO[clave]) el.textContent = DATOS_COLEGIO[clave];
  });
}

function rellenarLinks() {
  document.querySelectorAll("[data-dato-link]").forEach((el) => {
    const clave = el.dataset.datoLink;
    if (DATOS_COLEGIO[clave]) {
      el.href = DATOS_COLEGIO[clave];
    }
  });
}


/* ===== LIGHTBOX DE GALERÍA ===== */
function activarLightboxGaleria() {
  const lightbox = document.getElementById("lightboxGaleria");
  const imagenGrande = document.getElementById("lightboxImagen");
  const tituloImagen = document.getElementById("lightboxTitulo");
  const botonCerrar = document.getElementById("cerrarLightbox");
  const imagenesGaleria = document.querySelectorAll(".galeria__item img");

  if (!lightbox || !imagenGrande || !tituloImagen || !botonCerrar || imagenesGaleria.length === 0) {
    return;
  }

  function abrirLightbox(imagen) {
    const item = imagen.closest(".galeria__item");
    const pie = item ? item.querySelector(".galeria__pie") : null;

    imagenGrande.src = imagen.src;
    imagenGrande.alt = imagen.alt || "Imagen de la galería";
    tituloImagen.textContent = pie ? pie.textContent.trim() : imagen.alt;

    lightbox.classList.add("lightbox--activo");
    lightbox.setAttribute("aria-hidden", "false");
    document.body.classList.add("sin-scroll");

    botonCerrar.focus();
  }

  function cerrarLightbox() {
    lightbox.classList.remove("lightbox--activo");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.classList.remove("sin-scroll");

    imagenGrande.src = "";
    imagenGrande.alt = "";
    tituloImagen.textContent = "";
  }

  imagenesGaleria.forEach((imagen) => {
    const item = imagen.closest(".galeria__item");

    if (item) {
      item.setAttribute("tabindex", "0");
      item.setAttribute("role", "button");
      item.setAttribute("aria-label", "Abrir imagen de galería");

      item.addEventListener("click", () => {
        abrirLightbox(imagen);
      });

      item.addEventListener("keydown", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          abrirLightbox(imagen);
        }
      });
    }
  });

  botonCerrar.addEventListener("click", cerrarLightbox);

  lightbox.addEventListener("click", (e) => {
    if (e.target === lightbox) {
      cerrarLightbox();
    }
  });

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("lightbox--activo")) {
      cerrarLightbox();
    }
  });
}

/* ===== INICIO ===== */
document.addEventListener("DOMContentLoaded", () => {
  construirEncabezado();
  construirPie();
  activarMenuMovil();
  rellenarDatos();
  rellenarLinks();
  activarLightboxGaleria();
});
