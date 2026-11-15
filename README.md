# KUNSAMU · Saberes y Lengua Iku
### Plataforma Educativa Intercultural Offline-First para la Sierra Nevada de Santa Marta
**Seminario-Taller Aluna IA · Santa Marta, Colombia**

---

## 1. Descripcion General
**KUNSAMU** es una Progressive Web App (PWA) bilingüe (Español - Iku) concebida para fortalecer el dialogo intercultural entre la cosmovision del pueblo Arhuaco de la Sierra Nevada de Santa Marta y la sociedad mayoritaria (Hermanos Menores). La plataforma esta construida con arquitectura 100% estatica (Zero-Build), sin dependencias externas, y disenada especificamente para operar de manera offline permanente en zonas de nula conectividad.

---

## 2. Arquitectura de Navegacion (5 Secciones Principales)
La plataforma consolida exactamente 5 secciones para una experiencia limpia tanto en escritorio como en dispositivos moviles:

1. **Inicio:** Bienvenida personalizada, resumen metrico de progreso (niveles completados, insignias obtenidas, terminos comunitarios), acceso directo al siguiente reto territorial y acompanamiento de **Semillita** (mascota guia en SVG vectorial con estados de celebracion y reflexion).
2. **Ruta (Pisos del Saber):** Recorrido pedagógico organizado en 6 Pisos Territoriales (desde la Linea Negra hasta los Picos Nevados) en una cuadricula en zigzag inspirada en los rombos y grecas de las mochilas arhuacas (Tutu).
3. **Juegos y Saberes:** Practica libre con 4 minijuegos contextualizados:
   - *Descubriendo la Palabra:* Identificacion del vocablo ancestral a partir de pistas conceptuales y foneticas.
   - *Memoria del Territorio:* Emparejamiento de conceptos Iku / Español.
   - *Tejiendo Frases:* Construccion de saludos y solicitudes de permiso territorial ordenando fichas.
   - *Saberes de la Sierra:* Trivia cultural con datos reales sobre los ecosistemas y la cosmovision Arhuaca.
4. **Diccionario:** Buscador bilingüe con reproduccion de audio fonetico y modulo de **Contraste de Saberes** (analisis comparativo entre la logica occidental urbana y la Ley de Origen de la Sierra Nevada).
5. **Album y Perfil:** Galeria de insignias territoriales desbloqueables, alternancia de perfiles con almacenamiento aislado, boton de reseteo por perfil, **Taller Comunitario** para registro local de vocablos y grabacion de voz nativa, y panel de **Habeas Data y Soberania Digital**.

---

## 3. Pedagogia de Andamiaje ("Aprender antes de Evaluar")
Para evitar la frustracion del usuario que no domina la lengua Iku, cada nivel sigue un flujo de dos fases:
- **Fase 1 (Ficha de Descubrimiento):** Muestra el vocablo en Iku, su traduccion en espanol, desglose silabico, boton de pronunciacion fonetica y una capsula de significado territorial o contraste etico.
- **Fase 2 (Reto Territorial):** Pregunta contextualizada con boton siempre accesible de *"Ver ficha de estudio"* y un boton pulsante de *"Pedir pista a Semillita"*, que ofrece pistas progresivas y elimina opciones incorrectas tras un intento fallido.

---

## 4. Diferenciacion de Perfiles con Almacenamiento Aislado
La plataforma implementa aislamiento estricto en `localStorage`:
- **`kunsamu_v6_visitante` (Hermano Menor / Aliado):** Enfoque en respeto territorial, protocolos culturales y traduccion guiada. Paleta visual: verde bosque (`#1E5641`), hoja (`#27765B`) y algodon crudo (`#F7F5EE`).
- **`kunsamu_v6_comunidad` (Comunidad Arhuaca / Iku):** Enfoque en inmersion directa, ortografia nativa y memoria comunitaria. Paleta visual: verde profundo (`#1A4736`) con acentos calidos de tierra y ocre (`#8C5A32` y `#D99B38`).
- **Reinicio Soberano:** Cada perfil cuenta con la capacidad de reiniciar su avance sin alterar los datos del otro perfil.

---

## 5. Soberania de Datos Indigenas y Privacidad (Habeas Data)
En cumplimiento de la **Ley 1581 de 2012 de Colombia**, el **Convenio 169 de la OIT sobre Pueblos Indigenas y Tribales** y las recomendaciones internacionales de **Etiquetas de Conocimiento Tradicional (TK Labels)**:
- **Zero-Tracking:** Ni un solo dato de navegacion, progreso o voz es transmitido a servidores externos o terceros.
- **Almacenamiento Local Soberano:** El progreso se almacena en `localStorage` y las grabaciones de voz nativa se retienen en `IndexedDB` dentro del propio dispositivo del usuario.
- **Portabilidad y Olvido:** El usuario puede exportar en cualquier momento un archivo `.json` con la totalidad de su informacion o ejecutar un borrado total permanente.

---

## 6. Despliegue en GitHub y Cloudflare Pages

### Estructura de Archivos en la Raiz:
```text
/
├── index.html              # Punto de entrada principal
├── manifest.json           # Manifiesto PWA para instalacion movil
├── sw.js                   # Service Worker Offline-First (Cache-First)
├── icon.svg                # Icono SVG de respaldo
├── README.md               # Documentacion tecnica y de gobernanza
├── assets/
│   └── semillita.svg       # Mascota vectorial interactiva y Favicon
├── css/
│   └── styles.css          # Sistema de diseno intercultural sin emojis
└── js/
    ├── icons.js            # Sistema centralizado de iconos SVG vectoriales
    ├── data-iku.js         # Base de saberes, 6 pisos, minijuegos y diccionario
    ├── db.js               # Persistencia aislada, SoundEngine e IndexedDB
    └── app.js              # Controlador principal y logica interactiva
```

### Pasos para Despliegue en Cloudflare Pages:
1. Sube el repositorio a **GitHub**.
2. Ingresa a tu panel de **Cloudflare Dashboard** > **Workers & Pages** > **Create application** > **Pages** > **Connect to Git**.
3. Selecciona tu repositorio de GitHub.
4. En **Build settings**:
   - **Framework preset:** `None`
   - **Build command:** Dejar vacio (no requiere compilacion)
   - **Build output directory:** `/` (o la raiz del repositorio)
5. Haz clic en **Save and Deploy**.
6. Cloudflare Pages generara una URL segura HTTPS (ej. `kunsamu.pages.dev`) donde la PWA quedara inmediatamente disponible e instalable de forma permanente.
