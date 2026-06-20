/**
 * Fechas especiales (opcional). Si HOY coincide (mes-dia), se muestra
 * un mensaje destacado ademas del contenido normal del dia.
 *
 * Formato de clave: "MM-DD"  (mes-dia, con cero a la izquierda).
 * Ejemplo: el 14 de febrero -> "02-14".
 */
export const especiales = {
  // "02-14": { titulo: "Feliz San Valentin", mensaje: "Mi persona favorita, hoy y siempre." },
  // "08-23": { titulo: "Feliz aniversario", mensaje: "Otro anio eligiendote." },
  // "12-25": { titulo: "Feliz Navidad", mensaje: "Mi regalo favorito eres tu." },
};

/** Devuelve el evento especial de hoy, o null si no hay. */
export function especialDeHoy(date = new Date()) {
  const mm = String(date.getMonth() + 1).padStart(2, "0");
  const dd = String(date.getDate()).padStart(2, "0");
  return especiales[`${mm}-${dd}`] ?? null;
}
