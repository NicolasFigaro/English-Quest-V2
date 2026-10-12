ENGLISH QUEST — AVENTURA
Paquete listo para GitHub Pages.

ARCHIVOS
- index.html: aplicación completa (HTML, CSS y JavaScript).
- manifest.webmanifest: configuración de instalación tipo app (PWA).
- sw.js: caché offline; versión v5 para actualizar instalaciones anteriores.
- icon.svg: icono de la app.

PUBLICAR EN GITHUB PAGES
1. Haz una copia de seguridad de tu versión publicada.
2. Descomprime este ZIP.
3. Sube los cuatro archivos y este README a la raíz de tu repositorio (o a la carpeta que GitHub Pages publique).
4. En GitHub, abre Settings → Pages y confirma la rama/carpeta publicada.
5. Abre la URL con HTTPS y recarga. Si la app estaba instalada, ciérrala y vuelve a abrirla para que se actualice el service worker.

REDISEÑO
- Dirección visual estilo aventura: mapa A1–C2, compañero Pip, botones redondeados, tarjetas más juguetonas y navegación móvil.
- Selector de tema claro/oscuro, persistido con el progreso.
- Animación de recompensa con XP y confeti; efecto de subida de nivel.
- Transiciones de pantalla, navegación inferior adaptada a móviles, estados de foco accesibles y soporte para reducir movimiento.
- Se conserva la lógica de lecciones, vocabulario, juegos, gramática, perfil, logros, prueba de nivel, repaso, estadísticas, exportación/importación y guardado existentes en el HTML base.

PROGRESO Y LIMITACIONES
- El progreso continúa guardándose en localStorage con la clave existente `eq`; no se borra ni se migra a otro formato.
- localStorage es local a cada navegador/dispositivo; no hay sincronización automática entre dispositivos.
- El modo offline requiere abrir el sitio mediante HTTPS y permitir que el service worker se instale.
- Se validó la sintaxis de los seis bloques JavaScript con Node.js. Se intentó una prueba de navegador automatizada, pero el entorno bloqueó la navegación local; por eso no se afirma que se haya completado una prueba funcional integral de todas las pantallas.
