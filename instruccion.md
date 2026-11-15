# ROL Y CONTEXTO
Actúa como un Arquitecto de Software Senior, Diseñador UX/UI Intercultural y Especialista en Derecho Digital y Soberanía de Datos Indígenas (Colombia). Vamos a refactorizar y escalar el prototipo adjunto (`KUNSAMU_ALUNA_aventura_60_niveles.html`) desarrollado en el marco del seminario-taller **Aluna IA** (Santa Marta, Colombia) para la comunidad **Arhuaca (lengua Iku)**.

# OBJETIVO PRINCIPAL
Transformar este prototipo en una **Progressive Web App (PWA) Offline-First, 100% original en su diseño visual, intercultural, bilingüe (Español ↔ Iku) y pedagógicamente rigurosa**. Debe servir tanto para miembros de la comunidad como para personas externas ("visitantes/aliados") que desean aprender en diálogo respetuoso con la cultura Arhuaca, sin depender de conexión a internet.

# REQUISITOS FUNCIONALES Y DE ARQUITECTURA

## 1. Arquitectura Modular y Offline-First (Sin Internet)
Divide el monolito HTML actual en una estructura limpia y modular lista para desplegar en Vercel o GitHub Pages:
- `index.html`: Estructura semántica accesible (ARIA labels, meta tags PWA, navegación clara).
- `css/styles.css`: Sistema de diseño intercultural responsivo y original.
- `js/app.js`: Controlador de vistas, enrutamiento, estado y lógica de evaluación.
- `js/data-iku.js`: Base de conocimiento estructurada (léxico bilingüe, retos lingüísticos y fichas de contraste de saberes).
- `js/db.js`: Capa de persistencia híbrida usando `localStorage` para progreso/configuración e `IndexedDB` para almacenar audios de pronunciación nativa cargados localmente sin límite de espacio.
- `manifest.json` y `sw.js`: Service Worker con estrategia *Cache-First* para garantizar que toda la aplicación, estilos y audios funcionen 100 % sin internet en zonas rurales o de la Sierra Nevada.

## 2. Selector de Perfil Intercultural (Onboarding Ético)
Al abrir la app por primera vez (o desde el perfil), muestra una pantalla de bienvenida sencilla donde el usuario elige su rol sin pedir datos personales sensibles:
- **Perfil Comunidad (Iku / Arhuaco):** Enfocado en fortalecimiento lingüístico, escritura y memoria oral.
- **Perfil Externo / Visitante (Hermano Menor):** Enfocado en aprender la lengua Iku desde el respeto territorial, desplegando antes de cada etapa una cápsula contextual breve sobre protocolos de respeto y cosmovisión.

## 3. Rediseño Pedagógico: Contraste de Saberes y Retos Lingüísticos Reales
Reemplaza los minijuegos genéricos actuales por un sistema de aprendizaje real del idioma **Iku** organizado en 6 Etapas Territoriales (ej. *1. Saludos y Parentesco, 2. El Agua y los Ríos, 3. La Tierra y los Pisos Térmicos, 4. Flora y Fauna Sagrada, 5. El Tejido y el Pensamiento, 6. Convivencia y Reciprocidad*):
- **Módulo "Contraste de Saberes" (Espejo Intercultural):** En cada unidad y concepto clave, muestra dos tarjetas comparativas lado a lado:
  - *Visión Occidental / Urbana:* Cómo se entiende el concepto desde fuera de la comunidad.
  - *Cosmovisión Iku / Ley de Origen:* Qué significa espiritual y comunitariamente para el pueblo Arhuaco (con etiqueta clara de validación comunitaria).
- **4 Tipos de Retos Interactivos Bilingües (en lugar de juegos sin sentido):**
  1. *Escucha y Asocia (Fonética):* Reproductor de audio nativo (desde IndexedDB con fallback a Web Speech API) + selección de significado.
  2. *Construcción de Sentido (Morfosintaxis Iku):* Ordenar bloques de palabras Español ↔ Iku.
  3. *Situación Territorial (Toma de Decisiones):* Casos prácticos donde el usuario aplica una expresión o norma cultural en un contexto real (ej. pedir permiso al entrar a un espacio, saludar a un mayor).
  4. *Emparejamiento Conceptual:* Conectar términos en Español con su equivalente en Iku y su contexto de uso (sin emojis genéricos).

## 4. Rediseño UX/UI Original (Anti-Plagio / Identidad Propia Contextualizada)
**CRÍTICO - PROPIEDAD INTELECTUAL Y ESTÉTICA PROPIA:** 
Elimina cualquier similitud visual con la interfaz de Duolingo (prohibido usar caminos serpenteantes con nodos circulares flotantes, botones 3D con sombra inferior gruesa tipo arcade, o mascotas caricaturescas). Construye un sistema de diseño **100 % original, editorial y contextualizado en la Sierra Nevada de Santa Marta**:
- **Nueva Arquitectura Visual de Progreso ("Sendero por Pisos Térmicos / Terrazas del Saber"):**
  - Reemplaza el mapa serpenteante por una **vista de Terrazas Territoriales**: estaciones organizadas en tarjetas rectangulares con bordes suaves (`16px`) conectadas por un trazo vertical geométrico en SVG inspirado en los rombos y tejidos de la mochila arhuaca.
  - Cada etapa representa un piso térmico o espacio de saber (desde la costa/Línea Negra hasta los picos nevados), mostrando icono simbólico, título bilingüe, estado (desbloqueado/completado) y barra de avance limpia.
- **Sistema de Diseño "Editorial & Territorio":**
  - **Paleta de colores:** Fondo algodón crudo (`#F7F3EB`), tarjetas blanco hueso (`#FFFDF9`) con borde fino (`1px solid #E2D9C8`), primario verde bosque Sierra (`#1E4D3B`), acento ocre tejido (`#C67D30`), terracota suave (`#A64B2A`), texto carbón (`#1F2925`).
  - **Controles e Iconografía:** Botones planos modernos con estados `:hover` y `:focus-visible` limpios (sin sombras rígidas tipo juego móvil comercial). Reemplaza la mascota caricaturesca por un **emblema geométrico minimalista tipo grabado** (una hoja o espiral de orientación) que acompaña sin imitar personajes comerciales.
- **Sencillez a Simple Vista y Accesibilidad:**
  - Navegación intuitiva con máximo 5 secciones principales: *Territorio (Ruta), Contraste de Saberes, Diccionario Vivo, Taller Comunitario, Privacidad y Derechos*.
  - Botón accesible en la barra superior para **Lectura Fácil** (amplía tipografía base a `19px` y aumenta el contraste).

## 5. Marco Legal, Privacidad y Soberanía de Datos (Obligatorio)
Implementa una vista dedicada ("Gobernanza, Privacidad y Derechos") y un aviso inicial claro que contemple:
- **Política de Privacidad y Habeas Data (Ley 1581 de 2012 - Colombia):** Arquitectura *Zero-Tracking* (cero analíticas externas, cero servidores recolectando datos; toda la información y audios permanecen exclusivamente en el dispositivo local del usuario con opción de exportar/borrar todo en un clic).
- **Derechos de Autor y Propiedad Intelectual Colectiva:** Separación legal explícita entre el software (código abierto bajo licencia MIT / Creative Commons) y el **Patrimonio Cultural Inmaterial y Lingüístico** (propiedad colectiva exclusiva del Pueblo Arhuaco, protegido bajo el Convenio 169 de la OIT y el estándar de etiquetas *Traditional Knowledge - TK Labels*).
- **Flujo de Gobernanza en el Taller Comunitario/Docente:** Al agregar una palabra o grabar un audio nuevo en la app, el formulario debe exigir seleccionar el estado de autorización (`Borrador local sin validar` vs. `Validado por hablante/autoridad comunitaria`) y el nombre de la fuente que autorizó su uso.

# INSTRUCCIONES DE EJECUCIÓN PARA TI (IA DEL IDE)
1. Revisa la lógica base del archivo adjunto (`KUNSAMU_ALUNA_aventura_60_niveles.html`) para mantener su fluidez sin recargas.
2. Genera la estructura de carpetas y entrega el código completo y funcional de cada archivo (`index.html`, `css/styles.css`, `js/data-iku.js`, `js/db.js`, `js/app.js`, `manifest.json`, `sw.js`).
3. En `js/data-iku.js`, incluye ejemplos estructurales realistas marcados explícitamente como `[Ejemplo pedagógico - Pendiente de validación comunitaria]` para evitar atribuir traducciones no verificadas.
4. Añade comentarios claros y concisos en español explicando el funcionamiento del Service Worker, IndexedDB y el sistema de renderizado para facilitar el mantenimiento por parte del equipo.