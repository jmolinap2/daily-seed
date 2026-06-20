# 💛 Plan: Página "Cada Día Contigo"

Una página web sencilla pero **visualmente hermosa** que tu novia pueda abrir todos los días y encontrar algo distinto: otro diseño, otra frase, otras fotos de ustedes. Cada día se siente como un regalo nuevo.

---

## 1. Decisión técnica: Astro (no Angular)

| Criterio | Astro ✅ | Angular ❌ |
|---|---|---|
| Velocidad de carga | Altísima (envía casi cero JS) | Pesado, descarga un framework completo |
| Ideal para fotos + diseño | Sí, orientado a contenido | Pensado para apps con mucha lógica |
| Curva de aprendizaje | Baja, parece HTML | Alta (TypeScript, módulos, RxJS...) |
| Despliegue gratis | Trivial (Netlify/Vercel/Pages) | Posible pero más configuración |
| Mantener/agregar fotos | Editar un archivo y listo | Más pasos |

**Conclusión:** Astro. Logra "bonito y rápido" con mucho menos esfuerzo, justo lo que necesita este proyecto.

> Stack final: **Astro + Tailwind CSS** (estilos rápidos y elegantes) + animaciones suaves.

---

## 2. La idea del "contenido casi aleatorio y diferente cada día"

El reto: que cada día se vea **muy distinto** pero sin que tú tengas que tocar nada a diario, y que **sea estable durante el mismo día** (que no cambie cada vez que recarga).

### Mecanismo: "semilla del día"
- Se toma la fecha de hoy (ej. `2026-06-17`) y se convierte en un número (semilla).
- Con esa semilla se eligen de forma determinista:
  1. Un **tema visual** (paleta de colores + tipografía + fondo).
  2. Una o varias **frases** de un listado.
  3. Un set de **fotos** de ustedes.
  4. Un **layout** (disposición de los elementos).
- Como la semilla es la misma todo el día → el contenido no cambia al recargar, pero **mañana será otro** automáticamente.

> Resultado: ~365 combinaciones distintas al año sin esfuerzo diario. Si quieres, un botón secreto "✨ sorpréndeme" puede regenerar al azar dentro del mismo día.

---

## 3. Variedad visual (lo que hace que cada día se sienta "muy diferente")

Se preparan **bancos de elementos** y se combinan:

- **Temas (6–10):** ej. "Atardecer", "Pastel", "Noche estrellada", "Bosque", "Retro", "Minimal blanco", "Neón suave".
  - Cada tema = colores de fondo + degradado + color de texto + fuente.
- **Layouts (4–6):** foto grande con frase encima / collage tipo mosaico / polaroid centrada / split izquierda-derecha / carrusel.
- **Tipografías (4–6):** una serif romántica, una manuscrita, una sans moderna, etc. (Google Fonts).
- **Detalles animados:** corazones flotando, confeti suave, fade-in de la foto, parallax leve.

Combinando 8 temas × 5 layouts × 5 fuentes ya hay **200 looks** posibles.

---

## 4. Contenido (lo que tú preparas una vez)

### a) Frases — `src/data/frases.js`
Lista de frases tuyas (las que le dirías). Ej:
```js
export const frases = [
  "Hoy también elijo despertar pensando en ti.",
  "Eres mi parte favorita de cada día.",
  // ...50, 100, las que quieras
];
```

### b) Fotos — carpeta `public/fotos/`
- Pones las fotos de ustedes ahí.
- Un archivo `src/data/fotos.js` lista cuáles existen (y opcionalmente un piecito de texto por foto).
```js
export const fotos = [
  { src: "/fotos/playa.jpg", caption: "Aquel día en la playa 🌊" },
  { src: "/fotos/cafe.jpg",  caption: "Nuestro café de siempre ☕" },
];
```

### c) (Opcional) Fechas especiales
Un archivo que detecte si hoy es **aniversario, cumpleaños, etc.** y muestre un diseño + mensaje especial ese día.

---

## 5. Estructura del proyecto

```
cada-dia-contigo/
├── public/
│   └── fotos/                 ← aquí van las fotos de ustedes
├── src/
│   ├── data/
│   │   ├── frases.js
│   │   ├── fotos.js
│   │   ├── temas.js           ← paletas, fuentes, fondos
│   │   └── especiales.js      ← fechas especiales (opcional)
│   ├── lib/
│   │   └── seleccionDelDia.js ← lógica de la "semilla del día"
│   ├── components/
│   │   ├── Frase.astro
│   │   ├── FotoCollage.astro
│   │   ├── FondoAnimado.astro
│   │   └── BotonSorpresa.astro
│   ├── layouts/
│   │   └── Base.astro
│   └── pages/
│       └── index.astro        ← la página principal
├── astro.config.mjs
├── tailwind.config.mjs
└── package.json
```

---

## 6. Fases de desarrollo

### Fase 1 — Base (1ª sesión)
- [ ] Crear proyecto Astro + Tailwind (`npm create astro@latest`).
- [ ] Layout base y página `index` mostrando una foto y una frase fijas.
- [ ] Confirmar que se ve bien en celular (mobile-first: ella lo abrirá desde el teléfono).

### Fase 2 — Lógica del día
- [ ] Implementar `seleccionDelDia.js` (semilla por fecha → elecciones deterministas).
- [ ] Conectar frases, fotos y tema para que cambien según el día.

### Fase 3 — Belleza y variedad
- [ ] Crear los temas (paletas + fuentes + fondos).
- [ ] Crear 3–5 layouts distintos.
- [ ] Animaciones suaves (fade-in, corazones, parallax).

### Fase 4 — Detalles con cariño
- [ ] Botón "✨ Sorpréndeme".
- [ ] Fechas especiales (aniversario, cumpleaños).
- [ ] (Opcional) Contador "llevamos X días juntos".
- [ ] (Opcional) Música suave opcional con botón de play.

### Fase 5 — Publicar
- [ ] Subir a GitHub.
- [ ] Desplegar gratis en **Netlify, Vercel o Cloudflare Pages**.
- [ ] (Opcional) Dominio bonito, ej. `paramiamor.com` o un subdominio gratis.
- [ ] Darle el link 💛

---

## 7. Ideas extra (para más adelante)
- 💌 **Carta del día** plegable que se abre con clic.
- 📅 **Calendario** donde pueda revisar los días pasados.
- 🎵 Una canción distinta enlazada cada día (Spotify embed).
- 🔢 Contador de días/meses juntos.
- 🌙 Saludo según la hora ("Buenos días mi amor" / "Dulces sueños").
- 📊 Un día al azar "recuerdo aleatorio" con foto antigua.

---

## 8. Costos
- **$0.** Astro + hosting gratuito (Netlify/Vercel/Pages) cubren todo.
- Único gasto opcional: un dominio personalizado (~$10/año).

---

## 9. Siguiente paso inmediato
1. Confirmar el stack (Astro + Tailwind).
2. Reunir un primer lote de fotos y ~15 frases para empezar.
3. Crear el proyecto y montar la Fase 1.

> Cuando quieras, te genero el proyecto inicial ya funcionando con datos de ejemplo y tú solo reemplazas fotos y frases.
