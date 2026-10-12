ENGLISH QUEST — AVENTURA (edición modular)

ARCHIVOS PRINCIPALES
- index.html: estructura de la aplicación.
- styles.css: diseño, navegación, temas, animaciones y adaptación móvil/escritorio.
- app.js: lecciones, juegos, vocabulario, progreso, XP, repasos, prueba adaptativa y Pip.
- sw.js: service worker con actualización stale-while-revalidate y fallback offline.
- manifest.webmanifest: instalación PWA.
- icon.svg y icons/icon-192.png / icon-512.png: iconos de aplicación.

PUBLICAR EN GITHUB PAGES
1. Guarda una copia de la versión publicada y exporta tu progreso desde Perfil.
2. Descomprime el paquete y sube todos los archivos/carpetas a la raíz publicada del repositorio.
3. En Settings > Pages confirma la rama y carpeta correctas.
4. Abre el sitio mediante HTTPS. Para forzar actualización, cierra la app instalada y vuelve a abrirla; si queda código antiguo, borra los datos del sitio una vez.

CAMBIOS
- Inicio rediseñado con resumen, objetivo diario, lección principal, ruta A1-C2 y juegos rápidos.
- Navegación lateral en escritorio y navegación inferior en móvil.
- Fecha local unificada para racha, XP y misión diaria (evita el desfase UTC).
- Eliminado el bloqueo de doble toque y el bloqueo de zoom del viewport.
- Pip se minimiza en pantallas pequeñas para no cubrir respuestas; la acción rápida queda separada.
- XP completo de lección diaria solo en la primera finalización del día; las repeticiones dan XP reducido.
- Service worker cachea solo respuestas correctas y refresca recursos estáticos en segundo plano.
- Íconos PNG de 192 y 512 para instalación en Android/Chrome e icono táctil para iOS.
- Mensaje de recordatorios corregido: sin Web Push no se garantiza una notificación con la app cerrada.

DATOS Y LIMITACIONES
- Se mantiene la clave localStorage `eq` y los datos de progreso existentes; no se requiere backend.
- Los datos viven en el navegador/dispositivo. Exporta una copia desde Perfil antes de cambiar de dispositivo.
- Los niveles CEFR son una referencia pedagógica orientativa, no una certificación oficial.
- La sintaxis JavaScript se valida con Node.js; debe hacerse una prueba manual en navegador y en GitHub Pages antes de sustituir la versión publicada.
