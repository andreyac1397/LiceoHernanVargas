# Sitio Web Institucional - Liceo Hernán Vargas Ramírez

Este repositorio contiene el desarrollo del sitio web institucional del **Liceo Hernán Vargas Ramírez**, ubicado en Juan Viñas, Jiménez, Cartago, Costa Rica.

El proyecto fue desarrollado como parte de la práctica supervisada, con el propósito de brindar a la comunidad educativa un espacio digital organizado, accesible y moderno para consultar información institucional, comunicados, calendario, documentos, recursos educativos, servicios de biblioteca y datos de contacto.

---

## Descripción del proyecto

El sitio web del Liceo Hernán Vargas Ramírez tiene como finalidad centralizar información relevante para estudiantes, docentes, familias, personal administrativo y comunidad en general.

La primera versión del sitio se desarrolló como una solución web estática, utilizando archivos HTML, CSS, JavaScript y JSON. Esta estructura permite mantener el sitio de forma ordenada, facilitar futuras actualizaciones y dejar preparada la base para una segunda versión con backend, base de datos y panel administrativo.

---

## Objetivo general

Desarrollar un sitio web institucional para el Liceo Hernán Vargas Ramírez que permita presentar información académica, administrativa, bibliotecaria y comunitaria de forma clara, moderna y accesible para la comunidad educativa.

---

## Objetivos específicos

- Organizar la información institucional del liceo en diferentes secciones web.
- Facilitar el acceso a boletines, comunicados, horarios, trámites y documentos importantes.
- Mostrar actividades institucionales mediante un calendario interactivo.
- Presentar los servicios de la Biblioteca BiblioCRA y sus recursos disponibles.
- Brindar acceso a recursos digitales de apoyo académico.
- Incorporar datos de contacto, ubicación y enlaces oficiales de la institución.
- Dejar preparada la estructura para una futura versión con funcionalidades dinámicas.

---

## Tecnologías utilizadas

- HTML5
- CSS3
- JavaScript
- JSON
- GitHub
- Google Maps
- Google Drive
- Google Sites

---

## Estructura del proyecto

```text
sitio-web-lhvr/
│
├── index.html
│
├── pages/
│   ├── nosotros.html
│   ├── oferta-academica.html
│   ├── boletines.html
│   ├── calendario.html
│   ├── biblioteca-recursos.html
│   ├── FormularioBibliocra.html
│   ├── directorio-docente.html
│   ├── documentos-importantes.html
│   ├── enlaces-interes.html
│   ├── comunidad.html
│   ├── galeria.html
│   └── contacto-ubicacion.html
│
├── css/
│   ├── estilos.css
│   ├── responsive.css
│   ├── calendario.css
│   ├── horarios.css
│   ├── biblioteca.css
│   ├── formulario-bibliocra.css
│   ├── comunidad.css
│   └── docentes.css
│
├── js/
│   ├── main.js
│   ├── filtros.js
│   ├── boletines.js
│   ├── calendario.js
│   └── contacto.js
│
├── data/
│   ├── boletines.json
│   ├── calendario.json
│   ├── documentos.json
│   ├── docentes.json
│   └── enlaces.json
│
└── assets/
    ├── img/
    └── logos/
Secciones del sitio
Inicio

Página principal del sitio. Incluye presentación institucional, accesos rápidos, últimas publicaciones y próximas actividades del calendario.

Nosotros

Presenta información general del liceo, historia institucional, misión, visión, normativa y datos institucionales.

Oferta académica

Muestra las áreas académicas y formativas que forman parte de la oferta educativa de la institución.

Boletines

Sección destinada a comunicados, circulares, noticias, actividades y recordatorios institucionales.

Calendario

Calendario institucional interactivo con vista mensual, filtros por categoría y detalle de eventos.

Biblioteca BiblioCRA

Página dedicada a la Biblioteca BiblioCRA. Incluye información sobre horarios, servicios, préstamo de materiales, historia, áreas disponibles, reglamento, recursos digitales y enlaces externos.

Formulario BiblioCRA

Formulario visual para solicitud de préstamo de materiales. En esta primera versión funciona como maqueta preparada para una futura integración con backend y base de datos.

Directorio docente

Muestra el directorio docente organizado por áreas académicas.

Horarios y trámites

Incluye horarios, documentos importantes, formularios y trámites de utilidad para la comunidad educativa.

Recursos de apoyo

Presenta enlaces a plataformas, herramientas y recursos digitales para apoyar el proceso de aprendizaje.

Comunidad

Sección dedicada a la vida institucional, participación estudiantil, actividades culturales, historia y relación del liceo con la comunidad de Juan Viñas.

Galería

Muestra imágenes institucionales y actividades destacadas del liceo mediante una galería visual.

Contacto y ubicación

Incluye dirección, teléfono, correo institucional, Facebook oficial, horario de atención y mapa de ubicación.

Funcionalidades implementadas
Encabezado y menú principal generados desde JavaScript.
Pie de página compartido en todas las páginas.
Datos institucionales centralizados en main.js.
Navegación entre secciones internas del sitio.
Carga dinámica de boletines desde archivo JSON.
Carga dinámica de calendario desde archivo JSON.
Carga dinámica de docentes desde archivo JSON.
Carga dinámica de documentos y recursos digitales.
Filtros por categoría.
Calendario institucional interactivo.
Resumen de próximas actividades en la página de inicio.
Lightbox para visualizar imágenes de la galería.
Formulario de contacto visual preparado para una segunda versión.
Formulario visual de préstamo BiblioCRA preparado para futura conexión con backend.
Diseño responsive para computadoras, tablets y dispositivos móviles.
Archivos de datos

El sitio utiliza archivos JSON para facilitar la administración de contenido.

data/boletines.json
data/calendario.json
data/documentos.json
data/docentes.json
data/enlaces.json

Estos archivos permiten actualizar publicaciones, eventos, documentos, docentes y recursos sin modificar directamente la estructura principal del HTML.

Estado actual del proyecto

La primera versión del sitio se encuentra completa a nivel visual e informativo.

Apartados desarrollados:

Inicio
Nosotros
Oferta académica
Boletines
Calendario institucional
Biblioteca BiblioCRA
Formulario visual BiblioCRA
Directorio docente
Horarios y trámites
Recursos digitales
Comunidad
Galería
Contacto y ubicación
Alcance de la primera versión

La primera versión del sitio está enfocada en la presentación de información institucional y en la organización visual del contenido.

Incluye páginas informativas, formularios visuales, enlaces externos, documentos, recursos y carga de información mediante archivos JSON.

Los formularios incluidos quedan preparados visualmente, pero no almacenan datos ni envían información a una base de datos en esta etapa.

Posibles mejoras para una segunda versión

Para una futura versión del sistema se recomienda implementar:

Backend para procesamiento de formularios.
Base de datos para almacenar solicitudes, publicaciones y registros.
Panel administrativo para actualizar contenido.
Inicio de sesión por roles.
Gestión de boletines desde una interfaz.
Gestión de calendario desde un panel interno.
Envío real de formularios de contacto.
Registro y control de préstamos de Biblioteca BiblioCRA.
Gestión de usuarios administrativos.
Reportes o consultas internas.
Ejecución local

Para visualizar el sitio de forma local:

Descargar o clonar el repositorio.
Abrir el archivo index.html en un navegador web.
Navegar por las diferentes secciones del sitio.

También puede publicarse mediante servicios como:

GitHub Pages
Vercel
Netlify
Contacto institucional

Liceo Hernán Vargas Ramírez
Juan Viñas, Jiménez, Cartago, Costa Rica.

Correo institucional: lic.hernanvargasramirez@mep.go.cr
Teléfono: 2532-2274 / 8644-6240
Facebook oficial: https://www.facebook.com/liceohernanvargasramirez/?locale=es_LA

Autor

Proyecto desarrollado por:

Andrey Calderón Vega

Como parte de la práctica supervisada realizada en el Liceo Hernán Vargas Ramírez.

Uso del contenido

Este proyecto fue desarrollado con fines académicos e institucionales.

El uso de imágenes, documentos, logos, enlaces y contenido relacionado con el Liceo Hernán Vargas Ramírez debe realizarse con la autorización correspondiente de la institución.

Licencia

Este repositorio corresponde a un proyecto académico e institucional.
Su uso, modificación o publicación debe respetar los lineamientos establecidos por la institución educativa.
