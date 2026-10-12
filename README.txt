ENGLISH QUEST — AVENTURA AMIGABLE

CONTENIDO DEL PAQUETE
- index.html: aplicación completa (HTML, CSS y JavaScript).
- manifest.webmanifest: configuración PWA con iconos PNG para instalación.
- sw.js: service worker v6 con estrategia stale-while-revalidate y guardado solo de respuestas correctas.
- icon.svg, icon-192.png, icon-512.png, apple-touch-icon.png: iconos de la app.

PUBLICAR EN GITHUB PAGES
1. Exporta primero una copia de tu progreso desde Perfil.
2. Descomprime este ZIP y sube todos los archivos a la raíz de la carpeta publicada.
3. En GitHub, ve a Settings > Pages y confirma la rama/carpeta.
4. Abre la web mediante HTTPS y recarga. Si la app estaba instalada, ciérrala y vuelve a abrirla.

CAMBIOS PRINCIPALES
- Inicio rediseñado como aventura: mascota Pip, meta diaria, racha, XP, ruta de misiones, siguiente unidad y accesos rápidos.
- Paleta verde, crema y cian, tarjetas con volumen, botones táctiles y mejor distribución móvil; se conserva el tema claro/oscuro.
- Fecha unificada con calendario local para evitar desajustes de UTC.
- Eliminado el bloqueo de doble toque y restaurado el zoom del navegador para accesibilidad.
- Recompensa de XP de la lección diaria limitada a una vez por día local, incluso si se repite la lección.
- Recordatorio descrito con honestidad: el temporizador de una página no garantiza avisos cuando la app está cerrada o suspendida.
- Schema version 2 añadido sin borrar el progreso existente (localStorage key: eq).
- Distractores C1/C2 de la práctica guiada mejorados para ser más plausibles.

DATOS Y LIMITACIONES
El progreso sigue guardándose localmente en este navegador y dispositivo; no hay sincronización entre dispositivos. Exporta un respaldo antes de reemplazar la versión. El modo offline depende de que el service worker se instale correctamente en HTTPS. La app es una herramienta de práctica, no una certificación oficial CEFR.
