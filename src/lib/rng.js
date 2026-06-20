/**
 * Generador de numeros pseudo-aleatorios determinista (mulberry32).
 * Dada una misma semilla, siempre produce la misma secuencia.
 * Asi el contenido del dia es estable (no cambia al recargar) pero
 * distinto cada dia.
 */

/** Convierte una fecha en un numero de semilla estable. */
export function seedFromDate(date = new Date()) {
  // Usamos la fecha LOCAL (no UTC) para que el "dia" cambie a la
  // medianoche de quien mira la pagina.
  const y = date.getFullYear();
  const m = date.getMonth() + 1;
  const d = date.getDate();
  // numero tipo 20260618
  return y * 10000 + m * 100 + d;
}

/** Mezcla la semilla para que numeros cercanos den secuencias muy distintas. */
function mix(seed) {
  let h = seed >>> 0;
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b);
  h = Math.imul(h ^ (h >>> 16), 0x45d9f3b);
  h = h ^ (h >>> 16);
  return h >>> 0;
}

/** Crea un PRNG a partir de una semilla. Devuelve floats en [0, 1). */
export function makeRng(seed) {
  let a = mix(seed);
  return function next() {
    a |= 0;
    a = (a + 0x6d2b79f5) | 0;
    let t = Math.imul(a ^ (a >>> 15), 1 | a);
    t = (t + Math.imul(t ^ (t >>> 7), 61 | t)) ^ t;
    return ((t ^ (t >>> 14)) >>> 0) / 4294967296;
  };
}

/** Elige un elemento del arreglo usando el rng. */
export function pick(rng, arr) {
  return arr[Math.floor(rng() * arr.length)];
}

/**
 * Elige `count` elementos distintos del arreglo (sin repetir),
 * de forma determinista. Si pide mas de los que hay, devuelve todos.
 */
export function pickMany(rng, arr, count) {
  const copy = arr.slice();
  // Fisher-Yates con el rng
  for (let i = copy.length - 1; i > 0; i--) {
    const j = Math.floor(rng() * (i + 1));
    [copy[i], copy[j]] = [copy[j], copy[i]];
  }
  return copy.slice(0, Math.min(count, copy.length));
}
