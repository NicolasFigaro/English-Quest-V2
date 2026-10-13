English Quest v13
=================
Fusión de v11 (estructura modular y correcciones) con v09 (identidad verde, inicio "aventura", mascota).

Archivos
- index.html  Estructura mínima: barra superior, <main id="v"> y navegación.
- styles.css  Estilos. La "CAPA FINAL" (al final del archivo) define colores, navegación y pantalla de inicio.
- app.js      Toda la lógica. Pip, recompensas y repaso adaptativo van al final.
- sw.js       Service worker (caché english-quest-shell-v13).
- manifest.webmanifest, icon.svg, icons/  Instalación como app (iconos normal, maskable y apple-touch).

Para publicar: sube la carpeta completa y sírvela por HTTPS (el service worker no funciona desde file://).
Si cambias algún archivo, sube también el número de versión en sw.js.

Diseño
- Tema: sigue al sistema la primera vez; después recuerda tu elección.
- Navegación: 5 pestañas en móvil; barra lateral con 7 secciones en escritorio.
  Progreso está en la barra superior (móvil) y Gramática en el selector Lecciones/Gramática de Ruta.
- Mascota: Pip (un único dibujo, definido una vez como PIP_PATHS en app.js).

Novedades de esta revisión
- Bienvenida: nombre opcional y elegir nivel a mano o hacer la prueba. El nombre y el nivel se cambian en Perfil.
- Fluidez: sin :hover pegajoso en pantallas táctiles (marcaba la opción de la pregunta siguiente), animaciones de entrada
  más cortas y avance más rápido tras acertar (más lento tras fallar para leer la corrección).
- Contenido: ~45 palabras nuevas por nivel, 40 verbos irregulares, 30 phrasal verbs, 8 frases nuevas por nivel;
  eliminadas 12 palabras repetidas entre niveles.

Cambios respecto a v11
- Rediseño de inicio y paleta verde con contraste >= 4.5:1 (claro y oscuro).
- Vocabulario ampliado, distractores C1/C2 y esquema v2 recuperados de v09.
- Corregido un bucle infinito en el observador de Pip que congelaba la página al ganar XP.
- Manifest: orientación libre, icono maskable propio, colores acordes con el tema.

Cambios v13
- Al fallar una pregunta (quiz, letras, escribir, escuchar, frases, lección diaria y prueba de nivel) ya no avanza sola:
  muestra tu respuesta, la correcta, la traducción y la regla de gramática, y esperas a pulsar "Continuar".
  Si aciertas, avanza rápido (0,7 s).
- Zoom bloqueado (pellizco, doble toque, Ctrl+rueda, Ctrl +/-). Inputs a 16 px mínimo para que iOS no haga zoom al enfocar.

==================== v14 ====================
NEW FILES
- guide-data.js : content from the Word guide (17 new lessons, 12 grammar cards, 15 "find the error" items, GET phrasal verbs, irregular verbs, "Trabajo" vocabulary, 2 stories).
- study-guide.js: "Guía de estudio" screen (tables, 5-day plan with checkboxes, links). Open it from Grammar or the Learn/Home card.
- exam.js       : "Simulacro Basic English" (80 questions / 10 sections from the PDF, with explanations, timer, manual override) and "Mini-práctica de la guía".
- icons/        : apple-touch-icon, icon-192, icon-512, icon-maskable-512.

FIXES
- Corrupt localStorage no longer causes a white screen.
- Quiz options can no longer repeat or duplicate the answer.
- Escaped data-s attributes (quotes in sentences broke buttons).
- Lessons use their real number of exercises (not always 3).
- Search dictionary now includes words added later.
- Streak counts any XP-earning activity.
- Reminders don't crash without a service worker.
- Error log cap raised to 200.
- Service worker cache: english-quest-shell-v14 (new files added).

==================== v15 ====================
NEW FILE: extras.js (loaded last)
- Repaso de errores: spaced review (1/3/7/14 days) of mistakes from lessons, adaptive practice and the exam. Home plan card, Games card.
- Temas débiles: ranks lessons by how many related mistakes you made; "Practicar" opens the lesson.
- Cuenta atrás: set your exam date on Home; get a daily mini-plan (due errors, weakest topic, next exam section).
- Copia de seguridad (Perfil): export/import progress as a .json file.
- Juegos: "Escucha y escribe" (dictation with word-by-word diff) and "Repite la frase" (speech recognition where the browser supports it, otherwise self-rating).
- Home: secondary cards grouped in a "Más práctica y recursos" drawer.
- Bigger tap targets (44px) and visible keyboard focus.
- exam.js: exam mistakes now store the related lesson (unit) for the weak-topics ranking.
- sw.js cache: english-quest-shell-v15.
