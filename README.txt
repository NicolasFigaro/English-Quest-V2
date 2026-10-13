English Quest v12
=================
Fusión de v11 (estructura modular y correcciones) con v09 (identidad verde, inicio "aventura", mascota).

Archivos
- index.html  Estructura mínima: barra superior, <main id="v"> y navegación.
- styles.css  Estilos. La "CAPA FINAL" (al final del archivo) define colores, navegación y pantalla de inicio.
- app.js      Toda la lógica. Pip, recompensas y repaso adaptativo van al final.
- sw.js       Service worker (caché english-quest-shell-v12).
- manifest.webmanifest, icon.svg, icons/  Instalación como app (iconos normal, maskable y apple-touch).

Para publicar: sube la carpeta completa y sírvela por HTTPS (el service worker no funciona desde file://).
Si cambias algún archivo, sube también el número de versión en sw.js.

Diseño
- Tema: sigue al sistema la primera vez; después recuerda tu elección.
- Navegación: 5 pestañas en móvil; barra lateral con 7 secciones en escritorio.
  Progreso está en la barra superior (móvil) y Gramática en el selector Lecciones/Gramática de Ruta.
- Mascota: Pip (un único dibujo, definido una vez como PIP_PATHS en app.js).

Cambios respecto a v11
- Rediseño de inicio y paleta verde con contraste >= 4.5:1 (claro y oscuro).
- Vocabulario ampliado, distractores C1/C2 y esquema v2 recuperados de v09.
- Corregido un bucle infinito en el observador de Pip que congelaba la página al ganar XP.
- Manifest: orientación libre, icono maskable propio, colores acordes con el tema.
