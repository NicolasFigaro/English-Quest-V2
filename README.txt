ENGLISH QUEST — PAQUETE PARA GITHUB PAGES

Contenido:
- index.html: aplicación completa (HTML, CSS y JavaScript).
- manifest.webmanifest: metadatos para instalación tipo PWA.
- icon.svg: icono de la aplicación.
- sw.js: caché básica de la app shell para uso offline después de una primera carga correcta.

PUBLICAR EN GITHUB PAGES
1. Haz una copia de seguridad de tu versión actual.
2. Sube los cuatro archivos al directorio publicado por GitHub Pages.
3. Abre el sitio con HTTPS y recarga la página.
4. Si tenías una versión anterior instalada, cierra y vuelve a abrir la app para que el service worker v3 se active.

NOVEDADES DE APRENDIZAJE
- Práctica adaptativa de 10 preguntas, priorizando temas aún no completados y errores recientes.
- Estadísticas de precisión por habilidad en sesiones adaptativas.
- Centro de repaso con palabras vencidas según el calendario de repetición espaciada.
- Cuaderno de errores y repaso de palabras con programación del siguiente repaso.

NOTAS IMPORTANTES
- El progreso se guarda en localStorage de este navegador/dispositivo; no se sincroniza automáticamente entre dispositivos.
- El modo offline funciona una vez que el sitio se ha servido por HTTPS y el service worker se ha instalado correctamente.
- Las estadísticas por habilidad se basan únicamente en respuestas registradas en las sesiones adaptativas. No son una certificación CEFR.
- Comprueba las pantallas y el guardado en tu navegador antes de sustituir una versión publicada que uses a diario.
