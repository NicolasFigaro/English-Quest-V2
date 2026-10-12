ENGLISH QUEST — paquete de publicación (currículo ampliado)

ARCHIVOS
- index.html: app con diseño adaptable, lecciones y seguimiento del aprendizaje.
- manifest.webmanifest: configuración para instalarla como aplicación web.
- icon.svg: icono.
- sw.js: caché básica del shell para la primera carga sin conexión.

NOVEDADES
- 12 unidades didácticas nuevas repartidas entre A1, A2, B1, B2, C1 y C2.
- Mapa de aprendizaje agrupado por nivel con porcentaje de unidades completadas.
- Evaluaciones de dominio de 10 preguntas por nivel, disponibles al completar sus unidades; el umbral es 80 %.
- Cuaderno de errores de evaluaciones y prácticas de vocabulario, con opción de marcar elementos revisados.
- Resultados guardados localmente. Aprobar una evaluación actualiza el nivel de referencia, pero no equivale a una certificación oficial.

PUBLICAR EN GITHUB PAGES
1. Haz una copia de seguridad del repositorio actual.
2. Descomprime el ZIP y sube los cuatro archivos de esta carpeta a la carpeta publicada por GitHub Pages.
3. El HTML debe llamarse exactamente index.html.
4. Abre la URL HTTPS de GitHub Pages con conexión para actualizar el service worker.
5. Si aparece una versión anterior, recarga la página o cierra y vuelve a abrir la app.

NOTAS
- El progreso se guarda en localStorage de ese navegador/dispositivo. Usa Perfil > Exportar para crear copias de seguridad.
- Las funciones de voz y notificaciones dependen del navegador y pueden no estar disponibles sin conexión.
- No necesita librerías JavaScript externas.
- Se comprobó la sintaxis de los cuatro bloques JavaScript con Node.js. No se completó una prueba integral automatizada en navegador; prueba los recorridos principales en Chrome y Safari/iPhone antes de sustituir la versión publicada.
