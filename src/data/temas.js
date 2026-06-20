/**
 * Temas visuales. Cada dia se elige uno segun la semilla.
 * Para evitar problemas con la purga de clases de Tailwind, los temas
 * se aplican mediante VARIABLES CSS (no clases dinamicas).
 *
 * Campos:
 *  - name:   nombre interno
 *  - bg:     fondo de la pagina (gradiente css)
 *  - text:   color del texto principal
 *  - soft:   color de textos secundarios
 *  - accent: color de acento (botones, detalles)
 *  - card:   fondo de tarjetas/contenedores (con algo de transparencia)
 *  - font:   familia tipografica (debe estar cargada en index.astro)
 *  - heart:  color de los corazones flotantes
 */
export const temas = [
  {
    name: "atardecer",
    bg: "linear-gradient(160deg, #ff9a8b 0%, #ff6a88 45%, #ff99ac 100%)",
    text: "#3b1f2b",
    soft: "rgba(59,31,43,0.7)",
    accent: "#ffffff",
    card: "rgba(255,255,255,0.22)",
    font: "'Playfair Display', serif",
    heart: "rgba(255,255,255,0.55)",
  },
  {
    name: "noche-estrellada",
    bg: "linear-gradient(160deg, #0f2027 0%, #203a43 50%, #2c5364 100%)",
    text: "#eaf2ff",
    soft: "rgba(234,242,255,0.72)",
    accent: "#ffd479",
    card: "rgba(255,255,255,0.10)",
    font: "'Cormorant Garamond', serif",
    heart: "rgba(255,212,121,0.45)",
  },
  {
    name: "pastel",
    bg: "linear-gradient(160deg, #fbc2eb 0%, #a6c1ee 100%)",
    text: "#4a3b55",
    soft: "rgba(74,59,85,0.7)",
    accent: "#ffffff",
    card: "rgba(255,255,255,0.35)",
    font: "'Quicksand', sans-serif",
    heart: "rgba(255,255,255,0.6)",
  },
  {
    name: "bosque",
    bg: "linear-gradient(160deg, #134e5e 0%, #71b280 100%)",
    text: "#f3fff6",
    soft: "rgba(243,255,246,0.74)",
    accent: "#fff4c2",
    card: "rgba(255,255,255,0.14)",
    font: "'Cormorant Garamond', serif",
    heart: "rgba(255,244,194,0.4)",
  },
  {
    name: "minimal-claro",
    bg: "linear-gradient(160deg, #fdfbfb 0%, #ebedee 100%)",
    text: "#2b2b2b",
    soft: "rgba(43,43,43,0.6)",
    accent: "#e8627d",
    card: "rgba(255,255,255,0.7)",
    font: "'Quicksand', sans-serif",
    heart: "rgba(232,98,125,0.3)",
  },
  {
    name: "neon-suave",
    bg: "linear-gradient(160deg, #3a1c71 0%, #d76d77 50%, #ffaf7b 100%)",
    text: "#fff5fb",
    soft: "rgba(255,245,251,0.76)",
    accent: "#ffe7a8",
    card: "rgba(255,255,255,0.16)",
    font: "'Dancing Script', cursive",
    heart: "rgba(255,231,168,0.5)",
  },
  {
    name: "lavanda",
    bg: "linear-gradient(160deg, #c3a0f7 0%, #8ec5fc 100%)",
    text: "#352a4d",
    soft: "rgba(53,42,77,0.7)",
    accent: "#ffffff",
    card: "rgba(255,255,255,0.3)",
    font: "'Playfair Display', serif",
    heart: "rgba(255,255,255,0.6)",
  },
  {
    name: "amanecer-calido",
    bg: "linear-gradient(160deg, #f6d365 0%, #fda085 100%)",
    text: "#4a2c1a",
    soft: "rgba(74,44,26,0.7)",
    accent: "#ffffff",
    card: "rgba(255,255,255,0.28)",
    font: "'Dancing Script', cursive",
    heart: "rgba(255,255,255,0.55)",
  },
];
