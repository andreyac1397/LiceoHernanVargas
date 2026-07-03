/* ============================================================
   CONTACTO.JS - Liceo Hernán Vargas Ramírez
   ------------------------------------------------------------
   Validación sencilla del formulario de contacto.
   NOTA: Este formulario NO envía correos. Es una demostración
   en el navegador. Para enviarlo de verdad, conéctalo a un
   servicio como Formspree, tu backend o un correo "mailto".
   ============================================================ */

document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("formContacto");
  const estado = document.getElementById("estadoForm");
  if (!form || !estado) return;

  form.addEventListener("submit", (evento) => {
    evento.preventDefault();

    /* Validación básica de campos obligatorios */
    const nombre = form.nombre.value.trim();
    const email = form.email.value.trim();
    const asunto = form.asunto.value.trim();
    const mensaje = form.mensaje.value.trim();

    const emailValido = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);

    if (!nombre || !email || !asunto || !mensaje) {
      mostrarEstado("Por favor completa todos los campos.", "error");
      return;
    }

    if (!emailValido) {
      mostrarEstado("Escribe un correo electrónico válido.", "error");
      return;
    }

    /* Simulación de envío correcto */
    mostrarEstado(
      "¡Gracias, " + nombre + "! Tu mensaje fue registrado (demostración).",
      "exito"
    );
    form.reset();
  });

  function mostrarEstado(texto, tipo) {
    estado.textContent = texto;
    estado.className = "formulario__estado formulario__estado--" + tipo;
  }
});
