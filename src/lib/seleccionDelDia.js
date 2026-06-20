import { seedFromDate, makeRng, pick, pickMany } from "./rng.js";
import { frases } from "../data/frases.js";
import { temas } from "../data/temas.js";
import { fotos } from "../data/fotos.js";
import { especialDeHoy } from "../data/especiales.js";

/** Los layouts disponibles. El renderizador sabe dibujar cada uno. */
export const LAYOUTS = ["hero", "polaroid", "split", "collage"];

/**
 * Calcula TODO el contenido del dia a partir de una semilla.
 * Determinista: misma semilla -> mismo resultado.
 *
 * @param {number} [seed] semilla; por defecto la del dia de hoy.
 * @param {Date}   [date] fecha (para fechas especiales).
 */
export function seleccionDelDia(seed, date = new Date()) {
  const s = seed ?? seedFromDate(date);
  const rng = makeRng(s);

  // El orden de consumo del rng importa: mantenerlo estable.
  const tema = pick(rng, temas);
  const layout = pick(rng, LAYOUTS);
  const frase = pick(rng, frases);

  // El collage necesita varias fotos; los demas layouts una sola.
  const cuantasFotos = layout === "collage" ? 3 : 1;
  const fotosElegidas = pickMany(rng, fotos, cuantasFotos);

  return {
    seed: s,
    tema,
    layout,
    frase,
    fotos: fotosElegidas,
    especial: especialDeHoy(date),
  };
}

/** Una semilla totalmente aleatoria (para el boton "Sorprendeme"). */
export function semillaAleatoria() {
  return Math.floor(Math.random() * 1_000_000_000);
}
