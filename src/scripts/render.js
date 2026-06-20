import { seleccionDelDia, semillaAleatoria } from "../lib/seleccionDelDia.js";

/** Escapa texto para insertarlo de forma segura en HTML. */
function esc(str) {
  return String(str)
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

/** Aplica el tema mediante variables CSS en :root. */
function aplicarTema(tema) {
  const r = document.documentElement.style;
  r.setProperty("--bg", tema.bg);
  r.setProperty("--text", tema.text);
  r.setProperty("--soft", tema.soft);
  r.setProperty("--accent", tema.accent);
  r.setProperty("--card", tema.card);
  r.setProperty("--font", tema.font);
  r.setProperty("--heart", tema.heart);
}

/** Devuelve el HTML del contenido segun el layout. */
function html(sel) {
  const frase = `<p class="frase">${esc(sel.frase)}</p>`;
  const f = sel.fotos;
  const img = (foto, cls = "") =>
    `<figure class="foto ${cls}">
       <img src="${esc(foto.src)}" alt="${esc(foto.caption)}" loading="eager" />
       <figcaption>${esc(foto.caption)}</figcaption>
     </figure>`;

  switch (sel.layout) {
    case "hero":
      return `
        <section class="layout-hero">
          <div class="hero-media">${img(f[0])}</div>
          <div class="hero-overlay">${frase}</div>
        </section>`;

    case "polaroid":
      return `
        <section class="layout-polaroid">
          ${img(f[0], "polaroid-foto")}
          ${frase}
        </section>`;

    case "split":
      return `
        <section class="layout-split">
          <div class="split-foto">${img(f[0])}</div>
          <div class="split-texto">${frase}</div>
        </section>`;

    case "collage":
      return `
        <section class="layout-collage">
          <div class="collage-grid">
            ${f.map((foto) => img(foto)).join("")}
          </div>
          ${frase}
        </section>`;

    default:
      return frase;
  }
}

/** Banner para fechas especiales. */
function htmlEspecial(especial) {
  if (!especial) return "";
  return `
    <div class="especial" role="status">
      <span class="especial-titulo">${esc(especial.titulo)}</span>
      <span class="especial-mensaje">${esc(especial.mensaje)}</span>
    </div>`;
}

/** Crea corazones flotantes de fondo. */
function corazones(n = 14) {
  const cont = document.getElementById("corazones");
  if (!cont) return;
  cont.innerHTML = "";
  for (let i = 0; i < n; i++) {
    const el = document.createElement("span");
    el.className = "corazon";
    el.textContent = "♥"; // ♥
    el.style.left = Math.random() * 100 + "vw";
    el.style.fontSize = 10 + Math.random() * 26 + "px";
    el.style.animationDuration = 9 + Math.random() * 12 + "s";
    el.style.animationDelay = -Math.random() * 12 + "s";
    cont.appendChild(el);
  }
}

const fechaLarga = () =>
  new Date().toLocaleDateString("es-ES", {
    weekday: "long",
    day: "numeric",
    month: "long",
    year: "numeric",
  });

let semillaActual = null; // null => usar el dia de hoy

function render() {
  const sel = seleccionDelDia(semillaActual ?? undefined);
  aplicarTema(sel.tema);

  const fecha = document.getElementById("fecha");
  if (fecha) {
    fecha.textContent =
      semillaActual === null ? fechaLarga() : "vista sorpresa ✨";
  }

  const app = document.getElementById("contenido");
  if (app) {
    app.innerHTML = htmlEspecial(sel.especial) + html(sel);
    // reinicia la animacion de entrada
    app.classList.remove("aparecer");
    void app.offsetWidth; // fuerza reflow
    app.classList.add("aparecer");
  }

  document.body.dataset.tema = sel.tema.name;
  document.body.dataset.layout = sel.layout;
}

function init() {
  corazones();
  render();

  const sorpresa = document.getElementById("btn-sorpresa");
  if (sorpresa) {
    sorpresa.addEventListener("click", () => {
      semillaActual = semillaAleatoria();
      render();
    });
  }

  const hoy = document.getElementById("btn-hoy");
  if (hoy) {
    hoy.addEventListener("click", () => {
      semillaActual = null;
      render();
    });
  }
}

if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", init);
} else {
  init();
}
