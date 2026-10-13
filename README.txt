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
