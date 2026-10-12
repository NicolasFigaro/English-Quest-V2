ENGLISH QUEST — paquete de publicación

ARCHIVOS
- index.html: aplicación con las mejoras de interfaz, animación e interacción.
- manifest.webmanifest: configuración para instalarla como aplicación web.
- icon.svg: icono de la aplicación.
- sw.js: caché básica del shell para abrir la app sin conexión después de la primera carga.

PUBLICAR EN GITHUB PAGES
1. Haz una copia de seguridad de los archivos actuales de tu repositorio.
2. Sube los cuatro archivos a la misma carpeta publicada por GitHub Pages.
3. Asegúrate de que el HTML se llame exactamente index.html.
4. Abre la URL HTTPS de GitHub Pages una vez con conexión para que se instale el service worker.
5. Si ya había una versión anterior del service worker, puede tardar una recarga o dos en actualizarse.

NOTAS
- El progreso se guarda en localStorage: es específico de ese navegador/dispositivo. Usa Perfil > Exportar para hacer copias de seguridad.
- La caché offline cubre el shell de la aplicación y sus archivos locales; funciones de voz y notificaciones dependen del navegador y pueden no estar disponibles sin conexión.
- La app no necesita librerías JavaScript externas.
- La sintaxis de los bloques JavaScript del HTML se comprobó con Node.js. Aun así, conviene probar los flujos completos en Chrome y Safari/iPhone antes de sustituir la versión publicada.
