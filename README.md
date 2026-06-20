# daily-seed 💛

Una página web sencilla pero bonita que muestra **contenido distinto cada día**: otro diseño, otra frase, otras fotos. Pensada para abrirla a diario.

- **Sin backend.** Todo se calcula en el navegador.
- El contenido del día se elige con una *semilla* basada en la fecha: es **estable durante el día** (no cambia al recargar) pero **distinto mañana**, automáticamente.
- Hosting **gratis** en cualquier sitio estático (Netlify, Vercel, Cloudflare Pages, GitHub Pages).

## Cómo correrlo

> Este proyecto usa **pnpm** (no npm).

```bash
pnpm install
pnpm dev      # servidor local en http://localhost:4321
pnpm build    # genera la version final en dist/
pnpm preview  # previsualiza el build
```

## Cómo personalizarlo (lo único que necesitas tocar)

1. **Frases** → [src/data/frases.js](src/data/frases.js): agrega o edita la lista.
2. **Fotos** → copia tus imágenes en [public/fotos/](public/fotos/) y lístalas en [src/data/fotos.js](src/data/fotos.js).
   - El `src` siempre empieza en `/fotos/...`.
   - Vienen 6 imágenes de ejemplo (SVG); reemplázalas por las reales.
3. **Nombre del saludo** → variable `nombre` al inicio de [src/pages/index.astro](src/pages/index.astro).
4. **Fechas especiales** (opcional) → [src/data/especiales.js](src/data/especiales.js): aniversarios, cumpleaños, etc.
5. **Temas visuales** (opcional) → [src/data/temas.js](src/data/temas.js): paletas, fondos y tipografías.

## Cómo funciona (resumen técnico)

- `src/lib/rng.js` — PRNG determinista (mulberry32) + `seedFromDate`.
- `src/lib/seleccionDelDia.js` — combina semilla + datos → `{ tema, layout, frase, fotos, especial }`.
- `src/scripts/render.js` — corre en el navegador, aplica el tema vía variables CSS y dibuja el layout.
- Hay 4 layouts (`hero`, `polaroid`, `split`, `collage`) y 8 temas → muchas combinaciones distintas.

> Los temas se aplican con **variables CSS** (no clases dinámicas) a propósito, para que Tailwind no las elimine al compilar.

## Publicar gratis

Sube el repo a GitHub y conéctalo a Netlify/Vercel/Cloudflare Pages con:
- Build command: `pnpm build`
- Output directory: `dist`
