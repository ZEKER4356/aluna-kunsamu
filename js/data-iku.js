/**
 * ============================================================================
 * BASE DE CONOCIMIENTO INTERCULTURAL: ALUNA KUNSAMU (LENGUA IKU / ESPAÑOL)
 * ============================================================================
 * Aviso ético y de soberanía lingüística:
 * Toda aproximación lingüística en este archivo es de carácter pedagógico-estructural
 * y está rotulada expresamente como:
 * "[Ejemplo pedagógico - Pendiente de validación comunitaria]".
 * El pueblo Arhuaco (Iku) es el custodio exclusivo de su lengua y cosmovisión
 * bajo el Convenio 169 de la OIT y la Ley de Origen.
 * ============================================================================
 */

const PENDING_VALIDATION_TAG = '[Ejemplo pedagógico - Pendiente de validación comunitaria]';

/**
 * 6 Pisos Territoriales del Saber (Desde la Línea Negra / Costa hasta los Picos Nevados / Chundwa)
 * Con claves vectoriales para el sistema centralizado de iconos SVG (sin emojis).
 */
const TERRITORIAL_STAGES = [
  {
    id: 1,
    name: "Litoral y Sabana",
    titleEs: "Litoral y Sabana",
    titleIku: "Sé Ika / Niwi Umukin",
    altitude: "0 – 800 m.s.n.m.",
    ecosystem: "Línea Negra y Tierras Bajas",
    iconKey: "piso1_mar",
    theme: "Saludos, Parentesco y Entrada al Territorio",
    color: "#2C5E4A",
    biomeDescription: "Mar Caribe, desembocaduras de ríos y playas ancestrales de la Línea Negra.",
    contextCapsule: {
      title: "Protocolo del Hermano Menor al entrar al Territorio",
      content: "La Línea Negra (Sé Ika) es el límite ancestral demarcado por los sitios sagrados que circundan la Sierra Nevada. Antes de entrar o hablar, se pide permiso mentalmente a los padres espirituales y se guarda silencio reflexivo.",
      advice: "El saludo no es una fórmula apresurada: implica reconocer el linaje de la otra persona y desear que su pensamiento (Aluna) esté en calma."
    },
    levels: [
      {
        id: "1-1",
        stageId: 1,
        title: "El Saludo de la Mañana",
        landmarkName: "Umbral de la Playa Sagrada",
        type: "audio-assoc", // 1. Escucha y Asocia
        instruction: "Escucha la entonación y selecciona la traducción y sentido adecuado.",
        ikuAudioKey: "dunia_basinga",
        ikuText: "Dünia / Basinga",
        phonetic: "[Dü-nia / Ba-sin-ga]",
        options: [
          { text: "Buenos días / Saludo de amanecer en calma", correct: true, explain: "Expresión cotidiana de saludo respetuoso al despuntar el sol." },
          { text: "Hasta mañana al anochecer", correct: false, explain: "No es una despedida, es el saludo matutino." },
          { text: "¿A dónde vas con prisa?", correct: false, explain: "El saludo iku abre la conversación sin apresuramientos." }
        ],
        culturalNote: "El saludo reconoce el estado del pensamiento y la paz del hogar.",
        discovery: {
                  "ikuWord": "Dünia / Basinga",
                  "esWord": "Buenos días / Saludo de amanecer en calma",
                  "syllables": "Dü · nia / Ba · sin · ga",
                  "phonetic": "[Dü-nia / Ba-sin-ga]",
                  "culturalMeaning": "El saludo no es una fórmula apresurada. Pregunta por el estado de paz del pensamiento (Aluna) y la serenidad del hogar al nacer el sol.",
                  "westernContrast": "En occidente suele ser un 'buenos días' automático sin detenerse; en la Sierra abre un espacio de calma y escucha sincera.",
                  "audioKey": "dunia_basinga"
        },
        hints: [
                  "Recuerda que en la Sierra saludar reconoce el estado del pensamiento y la paz del hogar.",
                  "Fíjate en 'Dünia', raíz vinculada al inicio de la jornada en armonía."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "1-2",
        stageId: 1,
        title: "Presentación y Parentesco",
        landmarkName: "Piedra de los Primeros Acuerdos",
        type: "syntax-build", // 2. Construcción de Sentido (Morfosintaxis)
        instruction: "Ordena los bloques de palabras para construir la frase en Español y su correspondencia en Iku.",
        targetMeaning: "Yo vengo en paz a escuchar a los mayores",
        ikuTokens: ["Nâ", "niwi", "aluna", "kuma", "zakan"],
        esTokens: ["Yo vengo", "con respeto", "a escuchar", "la palabra", "antigua"],
        correctOrder: [0, 1, 2, 3, 4],
        culturalNote: "En la morfosintaxis Iku, la actitud de respeto y la relación con el interlocutor antecede a la acción individual.",
        discovery: {
                  "ikuWord": "Nâ niwi aluna kuma zakan",
                  "esWord": "Yo vengo en paz a escuchar a los mayores",
                  "syllables": "Nâ · ni · wi · a · lu · na · ku · ma · za · kan",
                  "phonetic": "[Nâ ni-wi a-lu-na ku-ma za-kan]",
                  "culturalMeaning": "En la morfosintaxis Iku, la actitud de respeto y la relación con los mayores antecede a cualquier interés individual.",
                  "westernContrast": "En el mundo urbano se prioriza el 'Yo quiero' o 'Yo hago'; aquí se antepone la escucha reverente de la palabra sabia.",
                  "audioKey": "na_niwi_aluna"
        },
        hints: [
                  "La frase comienza expresando la presencia pacífica ('Nâ niwi') y el respeto al pensamiento sabio ('aluna').",
                  "El acto de escuchar con reverencia ('zakan') culmina la expresión."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "1-3",
        stageId: 1,
        title: "Llegada a un Asentamiento",
        landmarkName: "Kankurwa de Tierras Bajas",
        type: "territorial-case", // 3. Situación Territorial (Toma de Decisiones)
        caseDescription: "Llegas como visitante a una comunidad cercana a la desembocadura de un río. Hay una reunión comunitaria en el patio central.",
        question: "¿Cuál es la conducta respetuosa según la norma de convivencia?",
        options: [
          {
            text: "Permanecer a una distancia prudente, esperar en silencio hasta ser recibido y no sacar teléfonos ni cámaras.",
            correct: true,
            feedback: "Correcto. El respeto al espacio colectivo y el silencio prudente son la primera carta de presentación de una persona consciente."
          },
          {
            text: "Acercarse de inmediato tomando fotos y videos para 'documentar' la experiencia cultural.",
            correct: false,
            feedback: "Incorrecto. Capturar imágenes sin autorización comunitaria viola la privacidad y la soberanía del pueblo indígena."
          },
          {
            text: "Interrumpir la conversación para presentarse en voz alta exigiendo atención.",
            correct: false,
            feedback: "Incorrecto. En la Sierra, la escucha paciente precede a cualquier palabra."
          }
        ],
        culturalNote: "El protocolo territorial exige prudencia, espera y consentimiento previo.",
        discovery: {
                  "ikuWord": "Niwi Kankurwa",
                  "esWord": "El Umbral del Asentamiento Sagrado",
                  "syllables": "Ni · wi · Kan · kur · wa",
                  "phonetic": "[Ni-wi Kan-kur-wa]",
                  "culturalMeaning": "Los asentamientos y templos (Kankurwas) son espacios de concentración y equilibrio. Se ingresa con permiso previo y silencio contemplativo.",
                  "westernContrast": "El turismo invasivo llega tomando fotos sin pedir permiso; la ética de la Sierra exige respeto a la soberanía comunitaria.",
                  "audioKey": "niwi_kankurwa"
        },
        hints: [
                  "La primera norma del Hermano Menor es la distancia prudente, la paciencia y no usar cámaras.",
                  "Descarta cualquier opción que interrumpa a los mayores o invada el espacio sin consentimiento."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "1-4",
        stageId: 1,
        title: "Términos del Parentesco y Respeto",
        landmarkName: "Portal del Territorio Sagrado",
        type: "concept-match", // 4. Emparejamiento Conceptual
        instruction: "Relaciona cada concepto en Español con su rol y significado en la cultura Iku.",
        pairs: [
          { left: "Mamo", right: "Autoridad espiritual, guía del orden cósmico" },
          { left: "Saga", right: "Sabia y cuidadora del linaje femenino y la vida" },
          { left: "Wintukwa", right: "Nombre propio ancestral de la comunidad Arhuaca" },
          { left: "Niwi Umukin", right: "Territorio sagrado de la Sierra Nevada" }
        ],
        culturalNote: "Los roles en la comunidad no son cargos burocráticos, sino misiones de vida recibidas por linaje y aprendizaje.",
        discovery: {
                  "ikuWord": "Mamo / Saga / Niwi Umukin",
                  "esWord": "Autoridades Tradicionales y Territorio",
                  "syllables": "Ma · mo / Sa · ga / Ni · wi · U · mu · kin",
                  "phonetic": "[Ma-mo / Sa-ga / Ni-wi U-mu-kin]",
                  "culturalMeaning": "El Mamo custodia el orden cósmico masculino y la Saga el linaje de la fertilidad y la vida femenina. Niwi Umukin es la Sierra sagrada.",
                  "westernContrast": "No son funcionarios ni políticos electos; son sabios formados desde niños en el silencio para orientar a la comunidad.",
                  "audioKey": "mamo_saga"
        },
        hints: [
                  "El Mamo es el sacerdote espiritual y la Saga es la sabia del linaje femenino y la vida.",
                  "Wintukwa es el nombre propio del pueblo Arhuaco y Niwi Umukin la Sierra sagrada."
        ],
        validation: PENDING_VALIDATION_TAG
      }
    ]
  },
  {
    id: 2,
    name: "Piemontes y Cascadas",
    titleEs: "Piemontes y Cascadas",
    titleIku: "Sí / Chundwa Zari",
    altitude: "800 – 1.800 m.s.n.m.",
    ecosystem: "Cuencas y Ríos Sagrados",
    iconKey: "piso2_bosque",
    theme: "El Agua, los Pagamentos y el Flujo Vital",
    color: "#1E525E",
    biomeDescription: "Ríos torrentosos de aguas transparentes, pozas ceremoniales y selva premontana.",
    contextCapsule: {
      title: "El Agua como Sangre de la Madre Tierra",
      content: "Para el pueblo Arhuaco, los ríos no son caudales comerciales ni vertederos: son venas y arterias que transportan vida y pensamiento desde las nieves hasta el mar Caribe.",
      advice: "Junto al agua no se grita ni se alteran los cauces. Los mamos realizan pagamentos (tributos espirituales de retribución) en las desembocaduras y lagunas."
    },
    levels: [
      {
        id: "2-1",
        stageId: 2,
        title: "El Canto del Agua",
        landmarkName: "Ojo de Agua Cristalino",
        type: "audio-assoc",
        instruction: "Escucha el sonido del agua en la cuenca alta y reconoce su término.",
        ikuAudioKey: "si_zari",
        ikuText: "Sí / Cho",
        phonetic: "[Sí / Cho]",
        options: [
          { text: "Agua / Río / Fuente de vida", correct: true, explain: "La raíz 'Sí' designa el agua primordial y sus afluentes." },
          { text: "Fuego del fogón", correct: false, explain: "'Sí' refiere al elemento líquido sagrado." },
          { text: "Piedra pulida", correct: false, explain: "El agua nutre la piedra, pero 'Sí' es el agua misma." }
        ],
        culturalNote: "El agua tiene memoria y conecta a todos los seres del territorio.",
        discovery: {
                  "ikuWord": "Sí / Cho",
                  "esWord": "Agua / Río / Fuente de Vida",
                  "syllables": "Sí / Cho",
                  "phonetic": "[Sí / Tcho]",
                  "culturalMeaning": "El agua es la sangre de la Madre Tierra (Ati Nabova). No es una mercancía: fluye como vehículo del pensamiento desde los glaciares al mar.",
                  "westernContrast": "En la ciudad se ve como un recurso facturado por metro cúbico; en la Sierra es un ser sagrado con memoria y linaje.",
                  "audioKey": "si_zari"
        },
        hints: [
                  "La raíz ancestral 'Sí' designa el agua primordial y los ríos que nutren la Sierra.",
                  "Descarta opciones como fuego o herramientas; 'Sí' es la sangre viva de la tierra."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "2-2",
        stageId: 2,
        title: "Agradecimiento al Nacimiento del Río",
        landmarkName: "Cascada de la Purificación",
        type: "syntax-build",
        instruction: "Construye la expresión de cuidado y reciprocidad hacia las aguas.",
        targetMeaning: "Cuidamos las fuentes de agua para que la vida no se apague",
        ikuTokens: ["Sí", "kuma", "mʉchʉkan", "aluna", "sekwia"],
        esTokens: ["Cuidamos", "el agua limpia", "con pensamiento", "desde el origen", "para todos"],
        correctOrder: [0, 1, 2, 3, 4],
        culturalNote: "El pagamento no es una transacción mercantil, es la devolución espiritual de lo que se toma para vivir.",
        discovery: {
                  "ikuWord": "Sí kuma mʉchʉkan aluna sekwia",
                  "esWord": "Cuidamos las fuentes de agua para la vida de todos",
                  "syllables": "Sí · ku · ma · mʉ · chʉ · kan · a · lu · na · sek · wia",
                  "phonetic": "[Sí ku-ma mü-chü-kan a-lu-na sek-wia]",
                  "culturalMeaning": "El pagamento no es una transacción económica; es la retribución espiritual por el agua recibida para mantener el caudal limpio.",
                  "westernContrast": "En el mundo moderno se extrae agua sin retribuir; el pagamento arhuaco restablece el ciclo cósmico de reciprocidad.",
                  "audioKey": "si_pagamento"
        },
        hints: [
                  "La frase inicia nombrando al agua sagrada ('Sí') y el cuidado desde el pensamiento limpio ('aluna').",
                  "Recuerda que la reciprocidad ('sekwia') es cuidar para todas las vidas."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "2-3",
        stageId: 2,
        title: "Paso por una Cascada Sagrada",
        landmarkName: "Poza Sagrada del Pagamento",
        type: "territorial-case",
        caseDescription: "Caminando cerca a Nabusímake, encuentras una poza de agua cristalina donde los mamos realizan trabajos espirituales.",
        question: "¿Qué acción corresponde a un visitante o hermano menor respetuoso?",
        options: [
          {
            text: "No entrar al agua, no arrojar jabón ni bloqueador, y continuar el camino guardando contemplación silenciosa.",
            correct: true,
            feedback: "Correcto. Muchos espacios acuáticos son sitios de curación y pagamento; contaminarlos con químicos rompe el equilibrio."
          },
          {
            text: "Bañarse utilizando jabones perfumados y dejar piedras pintadas como 'recuerdo'.",
            correct: false,
            feedback: "Incorrecto. Los productos químicos dañan el agua y alterar las piedras profana el sitio de pagamento."
          },
          {
            text: "Desviar un canal pequeño para crear una piscina improvisada.",
            correct: false,
            feedback: "Incorrecto. Modificar el curso del agua es una falta grave a la integridad del ecosistema."
          }
        ],
        culturalNote: "El respeto a las fuentes hídricas garantiza la salud colectiva de toda la región.",
        discovery: {
                  "ikuWord": "Cho Niwi / Zari",
                  "esWord": "Poza Sagrada y Cascada de Curación",
                  "syllables": "Cho · Ni · wi / Za · ri",
                  "phonetic": "[Tcho Ni-wi / Za-ri]",
                  "culturalMeaning": "Muchos saltos de agua y pozas son centros de saneamiento espiritual donde los mamos curan enfermedades del territorio. No deben contaminarse.",
                  "westernContrast": "En balnearios comerciales la gente usa jabones químicos; en los sitios sagrados de la Sierra se guarda estricta pureza biológica.",
                  "audioKey": "cho_zari"
        },
        hints: [
                  "El visitante consciente nunca usa químicos, jabones ni altera las piedras de pagamento en el agua.",
                  "La actitud correcta es la contemplación en silencio y dejar el cauce intacto."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "2-4",
        stageId: 2,
        title: "Relaciones de la Cuenca Hidrográfica",
        landmarkName: "Puente Colgante de Bejuco",
        type: "concept-match",
        instruction: "Une cada concepto del agua con su dimensión espiritual y territorial.",
        pairs: [
          { left: "Nacimiento (Páramo)", right: "Origen puro del pensamiento y la vida" },
          { left: "Río que desciende", right: "Arteria que alimenta a los pueblos de la ladera" },
          { left: "Desembocadura (Mar)", right: "Punto de encuentro con la Línea Negra y entrega" },
          { left: "Pagamento", right: "Retribución y equilibrio por el agua recibida" }
        ],
        culturalNote: "La cuenca se entiende como un cuerpo vivo indisoluble desde la cumbre hasta el mar.",
        discovery: {
                  "ikuWord": "Zari / Niwi Chundwa",
                  "esWord": "Ciclo Hidrológico Ancestral",
                  "syllables": "Za · ri / Ni · wi · Chund · wa",
                  "phonetic": "[Za-ri / Ni-wi Chund-wa]",
                  "culturalMeaning": "Desde el nacimiento en las lagunas de Chundwa hasta las desembocaduras en la Línea Negra, la cuenca es un sistema indivisible de vida.",
                  "westernContrast": "La gestión fragmentada occidental divide el río en tramos; la cosmovisión Arhuaca entiende que lo que se daña arriba se sufre abajo.",
                  "audioKey": "cuenca_zari"
        },
        hints: [
                  "Las lagunas de páramo son el nacimiento puro; el mar es la desembocadura de entrega en la Línea Negra.",
                  "El pagamento devuelve espiritualmente lo que tomamos para vivir."
        ],
        validation: PENDING_VALIDATION_TAG
      }
    ]
  },
  {
    id: 3,
    name: "Bosque de Niebla y Cultivos",
    titleEs: "Bosque de Niebla y Cultivos",
    titleIku: "Kaku Serankwa / Nabova",
    altitude: "1.800 – 2.800 m.s.n.m.",
    ecosystem: "La Tierra y los Pisos Térmicos",
    iconKey: "piso3_tierra",
    theme: "Suelos, Semillas Nativas y Complementariedad",
    color: "#5B4A2F",
    biomeDescription: "Terrazas de piedra, huertas familiares de maíz, plátano, café bajo sombra y frijol.",
    contextCapsule: {
      title: "La Sierra como Maqueta del Mundo",
      content: "La Sierra Nevada reúne todos los climas de la Tierra en una distancia muy corta. Las familias arhuacas cultivan parcelas en distintos pisos térmicos: plátano abajo, maíz y frijol al medio, papa y arracacha arriba.",
      advice: "El trueque entre pisos térmicos no busca la acumulación de ganancias, sino la soberanía alimentaria y la cohesión comunitaria."
    },
    levels: [
      {
        id: "3-1",
        stageId: 3,
        title: "La Semilla y el Surco",
        landmarkName: "Semillero Comunitario Ancestral",
        type: "audio-assoc",
        instruction: "Reconoce la palabra vinculada a la tierra fértil y los cultivos tradicionales.",
        ikuAudioKey: "nabova_tierra",
        ikuText: "Nabova / Ika",
        phonetic: "[Na-bo-va / I-ka]",
        options: [
          { text: "Madre Tierra / Espacio de cultivo y morada", correct: true, explain: "Nabova es la Madre Tierra que acoge y sustenta la vida." },
          { text: "Herramienta metálica comprada en la ciudad", correct: false, explain: "El término evoca la matriz de la tierra, no objetos mecánicos." },
          { text: "Camino de asfalto", correct: false, explain: "La tierra es organismo vivo, no superficie inerte." }
        ],
        culturalNote: "Antes de sembrar se pide permiso a Ati Nabova para que la semilla germine con fuerza.",
        discovery: {
                  "ikuWord": "Nabova / Ika",
                  "esWord": "Madre Tierra / Espacio de Cultivo y Morada",
                  "syllables": "Na · bo · va / I · ka",
                  "phonetic": "[Na-bo-va / I-ka]",
                  "culturalMeaning": "Ati Nabova es la Madre Tierra viva que amamanta a todos los seres. La tierra no se compra ni se vende; se cuida con respeto.",
                  "westernContrast": "En el mercado la tierra es un bien inmobiliario para especular; para los Arhuacos es nuestra madre nutricia colectiva.",
                  "audioKey": "nabova_tierra"
        },
        hints: [
                  "El vocablo 'Nabova' nombra la matriz de la Madre Tierra que sustenta los cultivos nativos.",
                  "Descarta caminos de asfalto o máquinas; es la fuerza fértil del suelo."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "3-2",
        stageId: 3,
        title: "La Cosecha Compartida",
        landmarkName: "Huerto de las Tres Hermanas",
        type: "syntax-build",
        instruction: "Forma la frase sobre el intercambio recíproco de alimentos.",
        targetMeaning: "Compartimos la semilla con los vecinos para que nunca falte el alimento",
        ikuTokens: ["Zanʉ", "nabova", "wasa", "gwa", "kuma"],
        esTokens: ["La semilla nativa", "se comparte", "entre familias", "con alegría", "en la cosecha"],
        correctOrder: [0, 1, 2, 3, 4],
        culturalNote: "Las semillas no se patentan ni se venden como mercancía exclusiva: son herencia colectiva.",
        discovery: {
                  "ikuWord": "Zanʉ nabova wasa gwa kuma",
                  "esWord": "Compartimos la semilla nativa con alegría en la cosecha",
                  "syllables": "Za · nʉ · na · bo · va · wa · sa · gwa · ku · ma",
                  "phonetic": "[Za-nü na-bo-va wa-sa gwa ku-ma]",
                  "culturalMeaning": "Las semillas nativas son memoria biológica y herencia colectiva. Se intercambian en trueque para garantizar la soberanía de todas las familias.",
                  "westernContrast": "En la agroindustria las semillas son patentadas y privatizadas; en la Sierra pertenecen a la Madre Tierra y al bien común.",
                  "audioKey": "zanu_semilla"
        },
        hints: [
                  "La expresión abre con la semilla nativa ('Zanʉ') y su ligamen a la tierra fértil ('nabova').",
                  "El trueque comunitario se realiza con alegría ('gwa') para que nunca falte el alimento."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "3-3",
        stageId: 3,
        title: "Uso de Abonos y Semillas Foráneas",
        landmarkName: "Terraza de Cultivo de Piedra",
        type: "territorial-case",
        caseDescription: "Un proyecto externo ofrece semillas transgénicas y fertilizantes químicos prometiendo cosechas más rápidas.",
        question: "¿Cuál es la postura acorde con la soberanía y la Ley de Origen?",
        options: [
          {
            text: "Privilegiar las semillas nativas adaptadas ancestralmente y mantener los ciclos naturales de la tierra sin agroquímicos dañinos.",
            correct: true,
            feedback: "Correcto. Las semillas tradicionales conservan la memoria biológica y cultural de la Sierra."
          },
          {
            text: "Reemplazar todas las variedades criollas por semillas híbridas para maximizar la venta rápida.",
            correct: false,
            feedback: "Incorrecto. Depender de semillas comerciales destruye la autonomía alimentaria y empobrece el suelo."
          },
          {
            text: "Quemar el bosque para sembrar monocultivos de exportación.",
            correct: false,
            feedback: "Incorrecto. La quema descontrolada atenta contra los espíritus guardianes del bosque."
          }
        ],
        culturalNote: "La agroecología comunitaria arhuaca protege la biodiversidad milenaria.",
        discovery: {
                  "ikuWord": "Zanʉ Wintukwa",
                  "esWord": "Soberanía Alimentaria y Agroecología",
                  "syllables": "Za · nʉ · Win · tuk · wa",
                  "phonetic": "[Za-nü Win-tuk-wa]",
                  "culturalMeaning": "La Sierra produce en diversos pisos térmicos sin químicos nocivos. Las variedades criollas resisten las sequías y protegen la salud.",
                  "westernContrast": "Los paquetes agroquímicos crean dependencia económica y esterilizan el suelo; la tradición arhuaca conserva la fertilidad natural.",
                  "audioKey": "zanu_agro"
        },
        hints: [
                  "La postura fiel a la Ley de Origen privilegia las semillas criollas y rechaza transgénicos y venenos agrícolas.",
                  "La autonomía comunitaria no se negocia por promesas de ganancias rápidas."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "3-4",
        stageId: 3,
        title: "Alimentos por Pisos Térmicos",
        landmarkName: "Tambo del Trueque Interzonal",
        type: "concept-match",
        instruction: "Relaciona cada cultivo tradicional con su piso térmico correspondiente en la Sierra.",
        pairs: [
          { left: "Tierras altas (Frío)", right: "Papa nativa, habas, arracacha de páramo" },
          { left: "Tierras medias (Templado)", right: "Maíz criollo, café bajo sombra, frijol" },
          { left: "Tierras bajas (Cálido)", right: "Yuca, plátano, malanga y frutas tropicales" },
          { left: "El Trueque (Zanü)", right: "Circulación de alimentos sin intermediarios" }
        ],
        culturalNote: "El sistema de pisos térmicos permite que ninguna familia sufra desnutrición.",
        discovery: {
                  "ikuWord": "Niwi Umukin Pisos",
                  "esWord": "Complementariedad Ecológica de Pisos Térmicos",
                  "syllables": "Ni · wi · U · mu · kin",
                  "phonetic": "[Ni-wi U-mu-kin]",
                  "culturalMeaning": "Las familias tienen huertas en distintos niveles: plátano abajo, maíz al medio, papa y arracacha arriba. El trueque interzonal equilibra la dieta.",
                  "westernContrast": "El monocultivo masivo desgasta el terreno; los pisos térmicos diversificados garantizan abundancia todo el año.",
                  "audioKey": "pisos_trueque"
        },
        hints: [
                  "Tierras altas corresponden a papa nativa y arracacha; tierras medias a maíz y café; tierras bajas a plátano y yuca.",
                  "El trueque ('Zanü') permite la circulación sin dinero entre altitudes."
        ],
        validation: PENDING_VALIDATION_TAG
      }
    ]
  },
  {
    id: 4,
    name: "Subpáramo y Pensamiento",
    titleEs: "Subpáramo y Pensamiento",
    titleIku: "Kansamona / Yina",
    altitude: "2.800 – 3.800 m.s.n.m.",
    ecosystem: "Flora, Fauna y Saberes",
    iconKey: "piso4_tejido",
    theme: "Guardianes de la Montaña, Aves y Plantas Medicinales",
    color: "#3B4A2D",
    biomeDescription: "Bosque de niebla espeso, robles centenarios, orquídeas silvestres y cantos de aves sagradas.",
    contextCapsule: {
      title: "Los Animales como Hermanos con Linaje",
      content: "En el tiempo primordial de Aluna, antes de que el mundo se materializara, los seres compartían forma de personas. El cóndor, el jaguar, el colibrí y el frailejón tienen guardianes y leyes propias.",
      advice: "No se caza por deporte ni se enjaulan animales silvestres. Las plantas medicinales se recolectan pidiendo permiso a su madre espiritual."
    },
    levels: [
      {
        id: "4-1",
        stageId: 4,
        title: "El Vuelo del Cóndor",
        landmarkName: "Mirador de los Vientos Altos",
        type: "audio-assoc",
        instruction: "Escucha la invocación a las aves sagradas que custodian los vientos.",
        ikuAudioKey: "condor_guardian",
        ikuText: "Mʉnzʉba / Gwa",
        phonetic: "[Mün-zü-ba / Gwa]",
        options: [
          { text: "Cóndor / Mensajero de las cumbres y el viento", correct: true, explain: "El cóndor es el guardián de las alturas y mensajero del pensamiento." },
          { text: "Pájaro de jaula doméstica", correct: false, explain: "Los guardianes de la Sierra vuelan en libertad absoluta." },
          { text: "Insecto del suelo", correct: false, explain: "Representa el vuelo majestuoso sobre las crestas rocosas." }
        ],
        culturalNote: "El cóndor limpia el territorio y comunica los mundos visibles e invisibles.",
        discovery: {
                  "ikuWord": "Mʉnzʉba / Gwa",
                  "esWord": "Cóndor / Mensajero Sagrado de las Alturas",
                  "syllables": "Mʉn · zʉ · ba / Gwa",
                  "phonetic": "[Mün-zü-ba / Gwa]",
                  "culturalMeaning": "El cóndor custodia las cumbres de la Sierra y transporta los mensajes del pensamiento entre los nevados y el mar.",
                  "westernContrast": "En el mundo urbano los animales se ven como adornos, piezas de zoológico o plagas; en la Sierra son hermanos con linaje sagrado.",
                  "audioKey": "condor_guardian"
        },
        hints: [
                  "Fíjate en 'Mʉnzʉba', el ave tutelar que vigila los vientos más altos de la Sierra.",
                  "No es un ave doméstica enjaulada; es el guardián libre de los picos sagrados."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "4-2",
        stageId: 4,
        title: "Cosecha de Plantas de Remedio",
        landmarkName: "Jardín de Plantas Maestras",
        type: "syntax-build",
        instruction: "Construye la regla para pedir permiso antes de cortar una hoja medicinal.",
        targetMeaning: "Pedimos permiso a la planta antes de recoger sus hojas para sanar",
        ikuTokens: ["Yina", "samʉ", "kuma", "mʉchʉ", "aluna"],
        esTokens: ["Agradecemos", "a la planta medicinal", "con respeto", "por la salud", "de la familia"],
        correctOrder: [0, 1, 2, 3, 4],
        culturalNote: "La curación es física y espiritual; sin permiso, la planta no entrega su fuerza curativa.",
        discovery: {
                  "ikuWord": "Yina samʉ kuma mʉchʉ aluna",
                  "esWord": "Agradecemos a la planta medicinal con respeto por la salud",
                  "syllables": "Yi · na · sa · mʉ · ku · ma · mʉ · chʉ · a · lu · na",
                  "phonetic": "[Yi-na sa-mü ku-ma mü-chü a-lu-na]",
                  "culturalMeaning": "Antes de cosechar una hoja medicinal, se habla espiritualmente con su madre tutelar pidiendo permiso para que su remedio surta efecto.",
                  "westernContrast": "La industria farmacéutica extrae principios activos comercialmente; la medicina indígena cura restableciendo el equilibrio con la planta.",
                  "audioKey": "yina_medicina"
        },
        hints: [
                  "La frase nombra primero a las plantas medicinales maestras ('Yina') y el agradecimiento ('samʉ').",
                  "La curación siempre busca la salud en el pensamiento y el cuerpo ('aluna')."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "4-3",
        stageId: 4,
        title: "Encuentro con un Animal Silvestre",
        landmarkName: "Cruce del Sendero del Jaguar",
        type: "territorial-case",
        caseDescription: "Caminando por un sendero de niebla, ves a un oso de anteojos o a un venado bebiendo agua.",
        question: "¿Cuál es la actitud correcta?",
        options: [
          {
            text: "Detenerse en silencio, mantener distancia sin asustarlo, no perseguirlo ni intentar alimentarlo, y agradecer interiormente el avistamiento.",
            correct: true,
            feedback: "Correcto. Los animales silvestres deben vivir sin acoso humano para conservar su equilibrio."
          },
          {
            text: "Lanzar piedras o palos para hacerlo correr y grabarlo con el celular.",
            correct: false,
            feedback: "Incorrecto. Perturbar a los animales salvajes es una agresión al orden de la Sierra."
          },
          {
            text: "Intentar atraparlo para llevarlo a una reserva privada urbana.",
            correct: false,
            feedback: "Incorrecto. La Sierra Nevada es su hogar sagrado; privarlos de su libertad es inaceptable."
          }
        ],
        culturalNote: "Los encuentros con la fauna son recordatorios de la convivencia pacífica entre especies.",
        discovery: {
                  "ikuWord": "Mʉnkü / Kansamona",
                  "esWord": "Encuentro con Seres Guardianes",
                  "syllables": "Mʉn · kü / Kan · sa · mo · na",
                  "phonetic": "[Mün-kü / Kan-sa-mo-na]",
                  "culturalMeaning": "El jaguar (Mʉnkü), el venado y el oso de anteojos habitan su territorio propio. Su presencia es señal de que la montaña está viva.",
                  "westernContrast": "El turismo descontrolado persigue a los animales para fotografiarlos; la ley de la Sierra exige silencio, distancia y agradecimiento.",
                  "audioKey": "munku_jaguar"
        },
        hints: [
                  "Si encuentras un animal silvestre, debes detenerte en silencio sin asustarlo ni perseguirlo.",
                  "Descarta cualquier acción agresiva como lanzar piedras o intentar atraparlo."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "4-4",
        stageId: 4,
        title: "Guardián y Función Territorial",
        landmarkName: "Bosque de los Seres Antiguos",
        type: "concept-match",
        instruction: "Empareja cada ser sagrado con su misión en el equilibrio de la Sierra.",
        pairs: [
          { left: "Jaguar (Mʉnkü)", right: "Fuerza telúrica, guardián de la noche y el bosque espeso" },
          { left: "Frailejón (Kunsamu)", right: "Filtro de niebla y custodio del agua en los páramos" },
          { left: "Colibrí (Tútukwa)", right: "Polinizador de la armonía y mensajero de alegría" },
          { left: "Culebra coral", right: "Guardiana del umbral y equilibrio del suelo fértil" }
        ],
        culturalNote: "Cada especie, por pequeña que sea, tiene una función irremplazable.",
        discovery: {
                  "ikuWord": "Kansamona Yina",
                  "esWord": "Misiones Cósmicas de la Biodiversidad",
                  "syllables": "Kan · sa · mo · na · Yi · na",
                  "phonetic": "[Kan-sa-mo-na Yi-na]",
                  "culturalMeaning": "Cada especie cumple un trabajo para sostener el mundo: el frailejón atrapa la niebla, el colibrí poliniza la armonía y el jaguar resguarda la noche.",
                  "westernContrast": "La ciencia clasifica especies biológicamente; la cosmovisión Arhuaca comprende su rol espiritual en el equilibrio cósmico.",
                  "audioKey": "fauna_roles"
        },
        hints: [
                  "El jaguar (Mʉnkü) es la fuerza tutelar de la noche; el frailejón (Kunsamu) atrapa el agua de la niebla.",
                  "El colibrí (Tútukwa) es mensajero de armonía y la culebra custodia los umbrales de la tierra."
        ],
        validation: PENDING_VALIDATION_TAG
      }
    ]
  },
  {
    id: 5,
    name: "Páramo y Frailejones",
    titleEs: "Páramo y Frailejones",
    titleIku: "Tutu / Aluna Kunsamu",
    altitude: "3.800 – 4.600 m.s.n.m.",
    ecosystem: "El Tejido y las Lagunas",
    iconKey: "piso5_paramo",
    theme: "La Mochila (Tutu), la Concentración y el Poporo",
    color: "#6B382A",
    biomeDescription: "Páramo abierto, frailejones dorados (*Kunsamu*), lagunas sagradas y viento frío.",
    contextCapsule: {
      title: "El Tejido como Escritura y Mapa Cósmico",
      content: "La mochila arhuaca (Tutu) tejida en lana o algodón no es un accesorio artesanal ni mercancía de moda: es la materialización del pensamiento de la mujer tejedora. Cada figura geométrica (Gwia, Kunsamu, Zikatu) registra leyes de la naturaleza.",
      advice: "Comprar una mochila sin entender su significado la reduce a objeto; valorarla implica reconocer la memoria y el trabajo espiritual de la mujer iku."
    },
    levels: [
      {
        id: "5-1",
        stageId: 5,
        title: "La Voz del Huso y la Espiral",
        landmarkName: "Taller del Huso Sagrado",
        type: "audio-assoc",
        instruction: "Escucha el vocablo que designa la mochila tradicional y su urdimbre.",
        ikuAudioKey: "tutu_mochila",
        ikuText: "Tutu / Zikatu",
        phonetic: "[Tu-tu / Zi-ka-tu]",
        options: [
          { text: "Mochila sagrada / Tejido del pensamiento", correct: true, explain: "Tutu es la mochila que resguarda el pensamiento y los objetos ceremoniales." },
          { text: "Bolsa plástica desechable", correct: false, explain: "El Tutu es sagrado y biodegradable, portador de identidad." },
          { text: "Moneda comercial", correct: false, explain: "El tejido trasciende el valor monetario." }
        ],
        culturalNote: "El fondo de la mochila inicia en espiral, semejando el nacimiento del universo.",
        discovery: {
                  "ikuWord": "Tutu / Zikatu",
                  "esWord": "Mochila Sagrada / Tejido del Pensamiento",
                  "syllables": "Tu · tu / Zi · ka · tu",
                  "phonetic": "[Tu-tu / Zi-ka-tu]",
                  "culturalMeaning": "La mochila arhuaca (Tutu) es la materialización del pensamiento de la mujer tejedora. En su urdimbre se plasman la genealogía y el origen del cosmos.",
                  "westernContrast": "En las tiendas urbanas se compra como una artesanía o bolso de moda; en la Sierra es un mapa cósmico y resguardo del alma.",
                  "audioKey": "tutu_mochila"
        },
        hints: [
                  "El término 'Tutu' designa la mochila sagrada tejida en lana o algodón nativo.",
                  "Descarta bolsas comerciales o plásticas; el Tutu es sagrado y porta memoria ancestral."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "5-2",
        stageId: 5,
        title: "Hilar con Buen Pensamiento",
        landmarkName: "Telar de la Niebla de Páramo",
        type: "syntax-build",
        instruction: "Ordena los conceptos sobre la serenidad requerida para tejer.",
        targetMeaning: "La mujer teje con mente clara para que la mochila guarde paz",
        ikuTokens: ["Zan", "aluna", "tutu", "kuma", "nʉkwa"],
        esTokens: ["La mujer sabia", "hila el pensamiento", "en la lana", "con serenidad", "para su pueblo"],
        correctOrder: [0, 1, 2, 3, 4],
        culturalNote: "Si la tejedora está disgustada, detiene el tejido hasta recuperar la serenidad interior.",
        discovery: {
                  "ikuWord": "Zan aluna tutu kuma nʉkwa",
                  "esWord": "La mujer sabia hila el pensamiento en la lana con serenidad",
                  "syllables": "Zan · a · lu · na · tu · tu · ku · ma · nʉ · kwa",
                  "phonetic": "[Zan a-lu-na tu-tu ku-ma nü-kwa]",
                  "culturalMeaning": "Si la tejedora está disgustada o con pensamientos revueltos, detiene el tejido hasta recuperar la paz para no impregnar desorden en la mochila.",
                  "westernContrast": "La confección industrial busca rapidez mecánica; el tejido arhuaco exige concentración espiritual y serenidad interior.",
                  "audioKey": "tejer_pensamiento"
        },
        hints: [
                  "La frase resalta a la mujer tejedora ('Zan') tejiendo con mente clara ('aluna') en la mochila ('tutu').",
                  "El valor reside en la serenidad para transmitir paz a la comunidad ('nʉkwa')."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "5-3",
        stageId: 5,
        title: "El Poporo y la Responsabilidad Masculina",
        landmarkName: "Bohío Ceremonial del Yeyu",
        type: "territorial-case",
        caseDescription: "Un turista le pide a un joven arhuaco que le preste su poporo (Yeyu) para probarlo y tomarse una foto sonriendo.",
        question: "¿Por qué el poporo no se presta ni es un juguete?",
        options: [
          {
            text: "El poporo es un símbolo sagrado de madurez, compromiso con la Ley de Origen y registro del pensamiento personal que no se trivializa.",
            correct: true,
            feedback: "Correcto. El poporo es entregado por el Mamo en una ceremonia de paso y acompaña al hombre arhuaco durante toda su vida como símbolo de madurez ética."
          },
          {
            text: "Porque es un adorno que se puede ensuciar fácilmente.",
            correct: false,
            feedback: "Incorrecto. No se trata de valor estético externo, sino de una consagración espiritual profunda."
          },
          {
            text: "Porque solo se presta si pagan una tarifa en dinero.",
            correct: false,
            feedback: "Incorrecto. Lo sagrado no tiene precio comercial."
          }
        ],
        culturalNote: "El poporo y el huso representan la complementariedad entre lo femenino y lo masculino.",
        discovery: {
                  "ikuWord": "Yeyu / Poporo",
                  "esWord": "El Poporo y la Madurez Ética Masculina",
                  "syllables": "Ye · yu / Po · po · ro",
                  "phonetic": "[Ye-yu / Po-po-ro]",
                  "culturalMeaning": "El poporo (Yeyu) se entrega al hombre cuando alcanza la madurez. Representa el diálogo constante, el compromiso con la Ley de Origen y la fidelidad.",
                  "westernContrast": "Los turistas a menudo quieren probarlo como si fuera un juego o disfraz; es un objeto sagrado que no se presta jamás.",
                  "audioKey": "yeyu_poporo"
        },
        hints: [
                  "El poporo es el registro de los pensamientos y compromisos del hombre con la comunidad.",
                  "Nunca se presta para fotos ni se comercializa; encarna la responsabilidad espiritual."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "5-4",
        stageId: 5,
        title: "Diseños del Tejido y Simbología",
        landmarkName: "Laguna de la Concentración Pura",
        type: "concept-match",
        instruction: "Une cada figura del tejido tradicional arhuaco con su significado.",
        pairs: [
          { left: "Kunsamu", right: "Pensamiento estructurado, espiral de la vida y el saber" },
          { left: "Gwia (Caracol)", right: "Evolución, tiempo cíclico y concha marina ancestral" },
          { left: "Zikatu (Pisos térmicos)", right: "Rombos escalonados que representan las terrazas de la Sierra" },
          { left: "Churí (Cascabel)", right: "Guardián de la sabiduría y protección ante el peligro" }
        ],
        culturalNote: "Las figuras en las mochilas son códigos visuales transmitidos de generación en generación.",
        discovery: {
                  "ikuWord": "Gwia / Kunsamu / Zikatu",
                  "esWord": "Geometría Sagrada de la Mochila Arhuaca",
                  "syllables": "Gwi · a / Kun · sa · mu / Zi · ka · tu",
                  "phonetic": "[Gwi-a / Kun-sa-mu / Zi-ka-tu]",
                  "culturalMeaning": "Las figuras geométricas del Tutu son símbolos de la Ley de Origen: Kunsamu simboliza el pensamiento de la montaña y Gwia el equilibrio cósmico.",
                  "westernContrast": "No son estampados decorativos al azar; son códigos visuales transmitidos de generación en generación.",
                  "audioKey": "geometria_tutu"
        },
        hints: [
                  "Kunsamu representa los pisos térmicos y la montaña; Gwia simboliza la dualidad y el equilibrio del universo.",
                  "Cada figura geométrica plasma una ley viva de la naturaleza."
        ],
        validation: PENDING_VALIDATION_TAG
      }
    ]
  },
  {
    id: 6,
    name: "Picos Nevados · Gonawindúa",
    titleEs: "Picos Nevados · Gonawindúa",
    titleIku: "Kensamuna / Chundwa",
    altitude: "4.600 – 5.775 m.s.n.m.",
    ecosystem: "Glaciares y Ley de Origen",
    iconKey: "piso6_picos",
    theme: "Ley de Origen, Hermandad Mayor y Menor, Paz Cósmica",
    color: "#243E42",
    biomeDescription: "Glaciares perpetuos, lagunas sagradas de origen y morada suprema de los padres espirituales.",
    contextCapsule: {
      title: "El Corazón del Mundo y la Responsabilidad Global",
      content: "Chundwa es la morada suprema de los padres espirituales. Los cuatro pueblos de la Sierra (Arhuaco, Kogui, Wiwa y Kankuamo) se consideran Hermanos Mayores, encargados de cuidar el equilibrio del planeta en beneficio también de los Hermanos Menores (la sociedad contemporánea).",
      advice: "El diálogo intercultural auténtico exige despojarse del afán de dominio y aprender a escuchar la voz de los pueblos originarios."
    },
    levels: [
      {
        id: "6-1",
        stageId: 6,
        title: "La Ley de Origen",
        landmarkName: "Altar Primordial de la Ley de Origen",
        type: "audio-assoc",
        instruction: "Escucha el principio fundamental que rige el orden y la justicia en la Sierra.",
        ikuAudioKey: "kensamuna_origen",
        ikuText: "Kensamuna / Makuma",
        phonetic: "[Ken-sa-mu-na / Ma-ku-ma]",
        options: [
          { text: "Ley de Origen / Mandato ancestral de equilibrio universal", correct: true, explain: "Kensamuna es el código cósmico que rige la existencia de la naturaleza y los pueblos." },
          { text: "Contrato comercial temporal", correct: false, explain: "La Ley de Origen es eterna e inmutable, no una ley transitoria humana." },
          { text: "Norma de tránsito de vehículos", correct: false, explain: "Refiere a la gobernanza espiritual y territorial." }
        ],
        culturalNote: "Cumplir la Ley de Origen es asegurar que el agua siga corriendo y el sol alumbrando.",
        discovery: {
                  "ikuWord": "Kensamuna / Makuma",
                  "esWord": "Ley de Origen / Mandato Ancestral de Equilibrio",
                  "syllables": "Ken · sa · mu · na / Ma · ku · ma",
                  "phonetic": "[Ken-sa-mu-na / Ma-ku-ma]",
                  "culturalMeaning": "Kensamuna es el mandato primordial dejado por los padres espirituales en Aluna para que el agua, los bosques y las personas coexistan en armonía.",
                  "westernContrast": "Las leyes del Estado cambian según el gobierno de turno; la Ley de Origen es eterna e inmutable, base de toda justicia verdadera.",
                  "audioKey": "kensamuna_origen"
        },
        hints: [
                  "Fíjate en 'Kensamuna', el código cósmico que rige la existencia de la Sierra y de todos los pueblos.",
                  "No es un contrato temporal ni una norma humana; es el orden natural universal."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "6-2",
        stageId: 6,
        title: "El Diálogo entre Hermanos",
        landmarkName: "Roca de la Alianza entre los Cuatro Pueblos",
        type: "syntax-build",
        instruction: "Forma el mensaje de armonía y reciprocidad entre pueblos.",
        targetMeaning: "Caminamos juntos cuidando la Sierra para que el mundo viva en equilibrio",
        ikuTokens: ["Ika", "wintukwa", "aluna", "sekwia", "makuma"],
        esTokens: ["Caminamos juntos", "Hermano Mayor y Menor", "con respeto mutuo", "cuidando la Sierra", "para el porvenir"],
        correctOrder: [0, 1, 2, 3, 4],
        culturalNote: "El Hermano Menor tiene conocimientos técnicos valiosos, pero debe complementarlos con la ética de la Ley de Origen.",
        discovery: {
                  "ikuWord": "Ika wintukwa aluna sekwia makuma",
                  "esWord": "Caminamos juntos Hermano Mayor y Menor con respeto mutuo",
                  "syllables": "I · ka · win · tuk · wa · a · lu · na · sek · wia · ma · ku · ma",
                  "phonetic": "[I-ka win-tuk-wa a-lu-na sek-wia ma-ku-ma]",
                  "culturalMeaning": "El Hermano Menor posee conocimientos técnicos de occidente, pero debe armonizarlos con la sabiduría ancestral del Hermano Mayor para sanar la Tierra.",
                  "westernContrast": "La soberbia moderna pretendía dominar la naturaleza; la Sierra enseña que la supervivencia requiere hermandad y complementariedad.",
                  "audioKey": "hermanos_alianza"
        },
        hints: [
                  "La frase une la identidad del pueblo ('wintukwa') con el buen pensamiento ('aluna').",
                  "El objetivo es caminar juntos cuidando la Sierra para que el mundo viva en equilibrio ('makuma')."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "6-3",
        stageId: 6,
        title: "Consulta Previa y Autonomía",
        landmarkName: "Cima Sagrada de Chundwa",
        type: "territorial-case",
        caseDescription: "Una empresa propone construir una megaobra turística en un sitio sagrado de la Línea Negra prometiendo empleos temporales.",
        question: "¿Cuál es el derecho que asiste a la comunidad indígena según la Constitución y el Convenio 169 de la OIT?",
        options: [
          {
            text: "El derecho fundamental a la Consulta Previa, Libre e Informada, y al Consentimiento, respetando las decisiones colectivas de las autoridades tradicionales.",
            correct: true,
            feedback: "Correcto. El Convenio 169 de la OIT y la Corte Constitucional de Colombia protegen la integridad territorial y cultural de los pueblos indígenas."
          },
          {
            text: "Ninguno, cualquier empresa privada puede ingresar libremente a territorios ancestrales sin consultar.",
            correct: false,
            feedback: "Incorrecto. Violar la consulta previa vulnera derechos fundamentales amparados por tratados internacionales."
          },
          {
            text: "Aceptar dinero individualmente sin hablar con el cabildo ni con los mamos.",
            correct: false,
            feedback: "Incorrecto. Las decisiones sobre el territorio son comunitarias y espirituales, nunca negociaciones aisladas."
          }
        ],
        culturalNote: "La integridad de la Sierra Nevada no es negociable.",
        discovery: {
                  "ikuWord": "Sé Ika / Consulta Previa OIT 169",
                  "esWord": "Consentimiento Libre, Previo e Informado",
                  "syllables": "Sé · I · ka / O · I · T",
                  "phonetic": "[Sé I-ka]",
                  "culturalMeaning": "Cualquier proyecto que afecte la Sierra exige la decisión colectiva de los cuatro pueblos a través de sus autoridades tradicionales y mamos.",
                  "westernContrast": "En el modelo extractivo las empresas deciden por dinero; la Constitución y el Convenio 169 reconocen la soberanía territorial indígena.",
                  "audioKey": "consulta_previa"
        },
        hints: [
                  "El derecho fundamental que asiste a los pueblos es la Consulta Previa, Libre e Informada y el Consentimiento.",
                  "Las decisiones son comunitarias y espirituales, nunca acuerdos individuales bajo la mesa."
        ],
        validation: PENDING_VALIDATION_TAG
      },
      {
        id: "6-4",
        stageId: 6,
        title: "Los Cuatro Pueblos de la Sierra",
        landmarkName: "Cumbre del Corazón del Mundo",
        type: "concept-match",
        instruction: "Relaciona cada pueblo originario de la Sierra Nevada con su identidad compartida.",
        pairs: [
          { left: "Pueblo Arhuaco (Iku)", right: "Guardianes de la sabiduría, el tejido y la palabra en el corazón de la Sierra" },
          { left: "Pueblo Kogui (Kággabba)", right: "Custodios rigurosos de la tradición primordial y el templo sagrado" },
          { left: "Pueblo Wiwa (Damana)", right: "Defensores de la palabra cálida en las cuencas orientales" },
          { left: "Pueblo Kankuamo", right: "Recuperadores incansables de su memoria y guardianes del pie de monte" }
        ],
        culturalNote: "Los cuatro pueblos forman las cuatro patas de la mesa cósmica de la Sierra Nevada.",
        discovery: {
                  "ikuWord": "Arhuaco / Kogui / Wiwa / Kankuamo",
                  "esWord": "Los Cuatro Pueblos del Corazón del Mundo",
                  "syllables": "Ar · hua · co / Ko · gui / Wi · wa / Kan · kua · mo",
                  "phonetic": "[Iku / Kaggabba / Damana / Kankuamo]",
                  "culturalMeaning": "Los cuatro pueblos son las cuatro patas de la mesa sagrada que sostiene la Sierra Nevada y el equilibrio del planeta entero.",
                  "westernContrast": "A menudo se les confunde como un solo grupo homogéneo; cada uno tiene su lengua propia, sus templos y su encomienda territorial.",
                  "audioKey": "cuatro_pueblos"
        },
        hints: [
                  "Arhuaco (Iku) cuida el tejido y la palabra; Kogui (Kággabba) la tradición sacerdotal primordial.",
                  "Wiwa (Damana) la palabra cálida oriental y Kankuamo la memoria del pie de monte."
        ],
        validation: PENDING_VALIDATION_TAG
      }
    ]
  }
];

/**
 * Sistema de Diálogos Dinámicos de Semillita
 * Textos limpios y reflexivos (sin emojis).
 */
const SEMILLITA_DIALOGUES = {
  greetings: {
    comunidad: [
      "¡Dünia! Hermano o hermana, cuidemos juntos nuestra lengua viva.",
      "El pensamiento de los mayores vive en cada palabra que aprendes.",
      "Hilar la palabra es tejer la fuerza de nuestra comunidad.",
      "¿Listo para recorrer el camino de nuestros ancestros?"
    ],
    visitante: [
      "Bienvenido, Hermano Menor. Escucha el silencio de la Sierra.",
      "Caminar este territorio exige respeto, calma y mente abierta.",
      "Cada piso térmico te enseñará una lección de equilibrio con la naturaleza.",
      "Recuerda: en la Sierra Nevada, escuchar con humildad precede al hablar."
    ]
  },
  onSuccess: {
    comunidad: [
      "¡Excelente! Tu palabra fortalece el linaje de nuestro pueblo.",
      "El pensamiento (Aluna) se ilumina con este paso.",
      "Un paso más cerca de la cumbre de Chundwa."
    ],
    visitante: [
      "Comprendido con respeto. Así se aprende en armonía con el territorio.",
      "Has tomado la decisión correcta para el equilibrio.",
      "La Sierra acoge tu buen pensamiento y curiosidad respetuosa."
    ]
  },
  onEncourage: {
    comunidad: [
      "Con calma. La lengua se aprende paso a paso como el tejido.",
      "Respira y vuelve a sentir el sentido profundo de la palabra.",
      "El error también es maestro cuando se busca el orden."
    ],
    visitante: [
      "Tómate un momento para reflexionar en la norma de respeto.",
      "Escucha con paciencia: la sabiduría de la montaña no tiene prisa.",
      "Vuelve a intentarlo con serenidad y mente atenta."
    ]
  },
  idleQuotes: {
    comunidad: [
      "¿Sabías que en el fondo de la mochila arhuaca inicia la espiral del universo?",
      "Nuestra lengua Iku nombra seres y estados del espíritu con gran precisión.",
      "Los abuelos dicen que quien cuida la semilla nativa, cuida a las generaciones venideras.",
      "El poporo no es un adorno: es el cuaderno de vida y madurez ética."
    ],
    visitante: [
      "La Línea Negra une el mar Caribe con los picos nevados en un solo cuerpo sagrado.",
      "En la Sierra no hay basuras: todo lo que tomamos de la tierra debemos retribuirlo limpio.",
      "El Mamo no manda sobre los demás: sirve con humildad a la Ley de Origen.",
      "Cuando visites un río, no uses jabones químicos; el agua tiene memoria viva."
    ]
  }
};

/**
 * Módulo de Contraste de Saberes (Espejo Intercultural)
 */
const KNOWLEDGE_CONTRASTS = [
  {
    id: "kc-1",
    concept: "El Territorio y la Tierra",
    iconKey: "territorio",
    stageRef: "Pisos 1 y 3",
    urbanView: {
      title: "Visión Urbana / Mercantil",
      description: "La tierra se concibe como propiedad privada, bien raíz, recurso explotable o lote delimitado jurídicamente por escrituras para maximizar rentabilidad económica y construcción."
    },
    ikuView: {
      title: "Cosmovisión Iku / Ley de Origen",
      description: "La Tierra es la Madre Sagrada (Ati Nabova). No es una propiedad que se compre o se venda; los seres humanos somos sus hijos y custodios temporales con la obligación de mantener su equilibrio."
    },
    validation: PENDING_VALIDATION_TAG,
    reflectionQuestion: "¿Cómo cambiaría la planeación de las ciudades si tratáramos al suelo como un organismo vivo con derechos propios?"
  },
  {
    id: "kc-2",
    concept: "El Agua y las Cuencas",
    iconKey: "piso2_rio",
    stageRef: "Piso 2",
    urbanView: {
      title: "Visión Occidental / Técnica",
      description: "El agua se define como un 'recurso hídrico', insumo para la industria, energía hidroeléctrica o consumo medido por metros cúbicos y tarifas de acueducto."
    },
    ikuView: {
      title: "Cosmovisión Iku / Ley de Origen",
      description: "El agua es la sangre de la Madre Tierra. Nace en los ojos sagrados de los páramos (lagunas) y cada gota transporta pensamiento. Se retribuye mediante pagamentos para agradecer lo recibido."
    },
    validation: PENDING_VALIDATION_TAG,
    reflectionQuestion: "¿Qué pasaría si antes de abrir una llave reconociéramos el viaje y el espíritu del agua que calma nuestra sed?"
  },
  {
    id: "kc-3",
    concept: "La Mochila (Tutu)",
    iconKey: "piso5_tejido",
    stageRef: "Piso 5",
    urbanView: {
      title: "Visión Comercial / Turística",
      description: "Se percibe como una artesanía bonita, accesorio de moda étnica o 'souvenir' que se compra, regatea y combina con la ropa de temporada."
    },
    ikuView: {
      title: "Cosmovisión Iku / Ley de Origen",
      description: "Es la materialización del pensamiento (Aluna) de la mujer tejedora. En su urdimbre se plasman la genealogía, los estados de ánimo y las figuras geométricas sagradas que codifican leyes naturales."
    },
    validation: PENDING_VALIDATION_TAG,
    reflectionQuestion: "¿Por qué el regateo del precio a una artesana indígena denota una incomprensión profunda de su trabajo espiritual?"
  },
  {
    id: "kc-4",
    concept: "La Autoridad y el Gobierno",
    iconKey: "contraste",
    stageRef: "Pisos 1 y 6",
    urbanView: {
      title: "Visión Institucional Estatal",
      description: "El poder se asocia a cargos electos por votos en periodos fijos, jerarquías burocráticas, leyes escritas en códigos y capacidad de sanción policial o administrativa."
    },
    ikuView: {
      title: "Cosmovisión Iku / Ley de Origen",
      description: "El Mamo y la Saga no ejercen poder para mandar sobre otros; son servidores de la Ley de Origen, formados desde niños en la oscuridad para escuchar el orden cósmico y velar por la armonía colectiva."
    },
    validation: PENDING_VALIDATION_TAG,
    reflectionQuestion: "¿En qué se diferencia liderar por imposición frente a liderar desde el ejemplo moral y la guía espiritual?"
  },
  {
    id: "kc-5",
    concept: "El Tiempo y la Historia",
    iconKey: "caso",
    stageRef: "Piso 1",
    urbanView: {
      title: "Visión Lineal / Cronológica",
      description: "El tiempo es una línea recta que avanza hacia el futuro ('progreso'), donde el pasado queda obsoleto y 'el tiempo es oro' (dinero que no debe perderse)."
    },
    ikuView: {
      title: "Cosmovisión Iku / Ley de Origen",
      description: "El tiempo es espiral y cíclico. El origen (Kensamuna) está vivo en el presente: volvemos al principio para encontrar las respuestas a los problemas de hoy. Lo antiguo no caduca, madura."
    },
    validation: PENDING_VALIDATION_TAG,
    reflectionQuestion: "¿Cómo nos afecta vivir con prisa constante frente al ritmo sereno y reflexivo de la montaña?"
  },
  {
    id: "kc-6",
    concept: "La Salud y el Bienestar",
    iconKey: "piso3_tierra",
    stageRef: "Piso 4",
    urbanView: {
      title: "Visión Biomédica Convencional",
      description: "La enfermedad se concibe como un fallo biológico mecánico en un órgano específico, tratado con fármacos químicos aislados para suprimir los síntomas visibles."
    },
    ikuView: {
      title: "Cosmovisión Iku / Ley de Origen",
      description: "La enfermedad es la manifestación física de un desequilibrio espiritual, territorial o comunitario (un daño a un árbol, un pensamiento desordenado o un pagamento pendiente)."
    },
    validation: PENDING_VALIDATION_TAG,
    reflectionQuestion: "¿Qué relación existe entre la salud de nuestro entorno ambiental y nuestra salud mental y física?"
  },
  {
    id: "kc-7",
    concept: "La Tecnología y la Inteligencia Artificial",
    iconKey: "taller",
    stageRef: "Aluna IA / Seminario",
    urbanView: {
      title: "Visión Tecnocéntrica Global",
      description: "Herramientas de automatización masiva, extracción de datos a gran escala y generación acelerada de contenidos sin consideración de derechos culturales colectivos."
    },
    ikuView: {
      title: "Soberanía Tecnológica Indígena",
      description: "La tecnología debe subordinarse a la ética, la protección de la vida y el consentimiento de los pueblos. Si una herramienta digital no fortalece la memoria comunitaria, perturba el orden."
    },
    validation: PENDING_VALIDATION_TAG,
    reflectionQuestion: "¿Cómo podemos diseñar tecnologías que no extraigan saberes indígenas, sino que respeten su soberanía y lenguas?"
  },
  {
    id: "kc-8",
    concept: "El Silencio y la Escucha",
    iconKey: "audio",
    stageRef: "Piso 1 y 6",
    urbanView: {
      title: "Visión Urbana Hiperconectada",
      description: "El silencio se interpreta con incomodidad, vacío o pérdida de tiempo; se busca llenar constantemente los espacios con ruido, notificaciones y estímulos."
    },
    ikuView: {
      title: "Cosmovisión Iku / Ley de Origen",
      description: "El silencio es el espacio donde florece el pensamiento verdadero (Aluna). Escuchar a los mayores y al viento es un acto de sabiduría mayor que el hablar profuso."
    },
    validation: PENDING_VALIDATION_TAG,
    reflectionQuestion: "¿Cuándo fue la última vez que pasaste diez minutos en silencio total escuchando tu entorno?"
  }
];

/**
 * Diccionario Vivo Español - Iku
 */
const BILINGUAL_LEXICON = [
  {
    id: "lex-1",
    es: "Agua",
    iku: "Sí / Cho",
    phonetic: "[Sí / Tcho]",
    category: "Sustantivo sagrado",
    stageId: 2,
    culturalContext: "Elemento primigenio y sangre de Ati Nabova. Requiere pagamento y respeto en nacimientos y desembocaduras.",
    status: "validado-pedagogico",
    source: "Registro del Seminario Aluna IA (Santa Marta, 2026)",
    validation: PENDING_VALIDATION_TAG
  },
  {
    id: "lex-2",
    es: "Tierra / Mundo",
    iku: "Nabova / Ika",
    phonetic: "[Na-bo-va / I-ka]",
    category: "Sustantivo cósmico",
    stageId: 3,
    culturalContext: "La Madre Tierra universal que acoge la vida de plantas, animales y personas.",
    status: "validado-pedagogico",
    source: "Registro del Seminario Aluna IA (Santa Marta, 2026)",
    validation: PENDING_VALIDATION_TAG
  },
  {
    id: "lex-3",
    es: "Pensamiento / Origen espiritual",
    iku: "Aluna",
    phonetic: "[A-lu-na]",
    category: "Concepto matriz",
    stageId: 5,
    culturalContext: "La dimensión intangible previa a la materia donde se concibió todo lo existente.",
    status: "validado-pedagogico",
    source: "Registro del Seminario Aluna IA (Santa Marta, 2026)",
    validation: PENDING_VALIDATION_TAG
  },
  {
    id: "lex-4",
    es: "Mochila tradicional",
    iku: "Tutu",
    phonetic: "[Tu-tu]",
    category: "Sustantivo / Tejido sagrado",
    stageId: 5,
    culturalContext: "Tejido en espiral que porta y resguarda la memoria, la fertilidad y la identidad.",
    status: "validado-pedagogico",
    source: "Registro del Seminario Aluna IA (Santa Marta, 2026)",
    validation: PENDING_VALIDATION_TAG
  },
  {
    id: "lex-5",
    es: "Buenos días / Saludo en calma",
    iku: "Dünia / Basinga",
    phonetic: "[Dü-nia / Ba-sin-ga]",
    category: "Fórmula de saludo",
    stageId: 1,
    culturalContext: "Reconocimiento respetuoso de la paz interior del interlocutor al amanecer.",
    status: "validado-pedagogico",
    source: "Registro del Seminario Aluna IA (Santa Marta, 2026)",
    validation: PENDING_VALIDATION_TAG
  },
  {
    id: "lex-6",
    es: "Autoridad espiritual masculina",
    iku: "Mamo",
    phonetic: "[Ma-mo]",
    category: "Guía cósmico",
    stageId: 1,
    culturalContext: "Sacerdote y custodio de la Ley de Origen, formado para preservar el equilibrio.",
    status: "validado-pedagogico",
    source: "Registro del Seminario Aluna IA (Santa Marta, 2026)",
    validation: PENDING_VALIDATION_TAG
  },
  {
    id: "lex-7",
    es: "Autoridad espiritual femenina",
    iku: "Saga",
    phonetic: "[Sa-ga]",
    category: "Sabia comunitaria",
    stageId: 1,
    culturalContext: "Consejera y guardiana de la fertilidad, el nacimiento y el linaje femenino.",
    status: "validado-pedagogico",
    source: "Registro del Seminario Aluna IA (Santa Marta, 2026)",
    validation: PENDING_VALIDATION_TAG
  },
  {
    id: "lex-8",
    es: "Pueblo Arhuaco",
    iku: "Iku / Wintukwa",
    phonetic: "[I-ku / Win-tuk-wa]",
    category: "Gentilicio ancestral",
    stageId: 1,
    culturalContext: "Pueblo originario de la vertiente occidental y sur de la Sierra Nevada de Santa Marta.",
    status: "validado-pedagogico",
    source: "Registro del Seminario Aluna IA (Santa Marta, 2026)",
    validation: PENDING_VALIDATION_TAG
  },
  {
    id: "lex-9",
    es: "Semilla nativa",
    iku: "Zanʉ",
    phonetic: "[Za-nü]",
    category: "Sustantivo agrícola",
    stageId: 3,
    culturalContext: "Grano tradicional preservado para la siembra sin alteración genética externa.",
    status: "validado-pedagogico",
    source: "Registro del Seminario Aluna IA (Santa Marta, 2026)",
    validation: PENDING_VALIDATION_TAG
  },
  {
    id: "lex-10",
    es: "Cóndor de las alturas",
    iku: "Mʉnzʉba",
    phonetic: "[Mün-zü-ba]",
    category: "Fauna sagrada",
    stageId: 4,
    culturalContext: "Ave guardiana de las cumbres nevadas y mensajera de los vientos altos.",
    status: "validado-pedagogico",
    source: "Registro del Seminario Aluna IA (Santa Marta, 2026)",
    validation: PENDING_VALIDATION_TAG
  },
  {
    id: "lex-11",
    es: "Ley de Origen",
    iku: "Kensamuna",
    phonetic: "[Ken-sa-mu-na]",
    category: "Orden cósmico supremo",
    stageId: 6,
    culturalContext: "El mandato divino que organiza las relaciones entre naturaleza, seres y cosmos.",
    status: "validado-pedagogico",
    source: "Registro del Seminario Aluna IA (Santa Marta, 2026)",
    validation: PENDING_VALIDATION_TAG
  },
  {
    id: "lex-12",
    es: "Sierra Nevada / Picos nevados",
    iku: "Chundwa",
    phonetic: "[Tchun-dwa]",
    category: "Topónimo sagrado",
    stageId: 6,
    culturalContext: "El corazón del mundo, morada de los padres espirituales y cuna de las aguas.",
    status: "validado-pedagogico",
    source: "Registro del Seminario Aluna IA (Santa Marta, 2026)",
    validation: PENDING_VALIDATION_TAG
  }
];

/**
 * Misiones de Reflexión Territorial (Éticas y No Invasivas)
 */
const TERRITORIAL_MISSIONS = [
  {
    id: "mis-1",
    stageRef: 1,
    title: "El Silencio de los Primeros Minutos",
    iconKey: "territorio",
    desc: "Durante 10 minutos al iniciar el día, apaga pantallas y teléfonos. Siéntate en calma y escucha los sonidos lejanos de la naturaleza o la ciudad sin juzgarlos.",
    reflection: "¿Qué descubres cuando decides no llenar el ambiente con tu propia voz o con ruido digital?",
    points: 25
  },
  {
    id: "mis-2",
    stageRef: 2,
    title: "Reconocer el Viaje del Agua",
    iconKey: "piso2_rio",
    desc: "Investiga mentalmente de qué cuenca o río proviene el agua que llega al grifo de tu casa. Agradece conscientemente antes de beber un vaso de agua.",
    reflection: "¿Cuántas vidas y ecosistemas hicieron posible que tengas agua limpia hoy?",
    points: 25
  },
  {
    id: "mis-3",
    stageRef: 3,
    title: "El Origen de tu Alimento",
    iconKey: "piso3_tierra",
    desc: "Observa un fruto, grano o verdura en tu mesa. Piensa en las manos campesinas o indígenas que cuidaron la tierra y en cuántos kilómetros viajó hasta tu plato.",
    reflection: "¿Cómo podemos apoyar a los guardianes de las semillas nativas en nuestra vida diaria?",
    points: 25
  },
  {
    id: "mis-4",
    stageRef: 4,
    title: "Contemplación sin Perturbación",
    iconKey: "piso4_fauna",
    desc: "Observa un pájaro o un insecto en un parque o jardín sin acercarte a asustarlo, sin intentar tocarlo ni grabarlo con el flash. Solo obsérvalo vivir.",
    reflection: "¿Por qué contemplar con distancia respetuosa es una muestra de amor hacia otras especies?",
    points: 25
  },
  {
    id: "mis-5",
    stageRef: 5,
    title: "Valorar el Objeto Hecho a Mano",
    iconKey: "piso5_tejido",
    desc: "Examina una prenda o tela de tu casa. Reflexiona sobre el tiempo de vida de quien la tejió frente a la ropa desechable de producción industrial rápida.",
    reflection: "¿Qué historias y pensamientos quedan atrapados en un tejido elaborado con paciencia?",
    points: 25
  },
  {
    id: "mis-6",
    stageRef: 6,
    title: "Escucha a un Mayor o Mayor",
    iconKey: "contraste",
    desc: "Conversa con un abuelo, abuela o persona mayor de tu familia o vecindario. Pídele que te comparta un recuerdo de cómo era el territorio hace cuarenta años.",
    reflection: "¿Qué conocimientos guardan los mayores que ningún buscador de internet puede reemplazar?",
    points: 25
  }
];

/**
 * ============================================================================
 * DATOS PARA MINIJUEGOS Y SABERES (PRACTICA LIBRE)
 * ============================================================================
 */
const MINIGAMES_DATA = {
  // Minijuego 1: Descubriendo la Palabra
  discoveringWords: [
    {
      id: "dw-1",
      clue: "Principio espiritual y pensamiento que da origen a todo en la Sierra Nevada.",
      ikuWord: "ALUNA",
      esWord: "Pensamiento Cósmico / Conciencia",
      options: ["ALUNA", "KUNSAMU", "CHUNDWA", "SEYNEKUN"],
      phonetic: "a-lu-na",
      curiosity: "Para los Arhuacos, antes de que el mundo existiera en materia, ya existia en Aluna (pensamiento)."
    },
    {
      id: "dw-2",
      clue: "Ser sagrado y madre nutricia que recorre la Sierra y desemboca en el mar.",
      ikuWord: "TIMA",
      esWord: "Agua / Rio Vivo",
      options: ["TIMA", "KUNIZA", "DUNIA", "GUMNA"],
      phonetic: "ti-ma",
      curiosity: "El agua no es vista como un recurso economico, sino como sangre viviente de la Madre Tierra."
    },
    {
      id: "dw-3",
      clue: "Pico nevado sagrado donde habitan los padres espirituales primigenios.",
      ikuWord: "CHUNDWA",
      esWord: "Picos Nevados / Origen Sagrado",
      options: ["CHUNDWA", "MAKU", "NABUSIMAKE", "YUI"],
      phonetic: "chund-wa",
      curiosity: "Las nieves perpetuas de la Sierra regulan el equilibrio climatico de toda la cuenca del Caribe."
    },
    {
      id: "dw-4",
      clue: "Planta sagrada del saber y la memoria, mediadora entre el humano y el espíritu.",
      ikuWord: "AYU",
      esWord: "Hoja Sagrada de Coca",
      options: ["AYU", "KUKU", "SARI", "ZAKU"],
      phonetic: "a-yu",
      curiosity: "El poporo y el ayu son simbolos de madurez, acuerdo y pensamiento reflexivo."
    },
    {
      id: "dw-5",
      clue: "Piedra o hito sagrado del territorio donde se hace pagamento espiritual.",
      ikuWord: "AMU",
      esWord: "Piedra Sagrada / Testigo Territorial",
      options: ["AMU", "TIMA", "IKU", "WAKU"],
      phonetic: "a-mu",
      curiosity: "Las piedras sagradas son canales de comunicacion espiritual delimitados en la Linea Negra."
    }
  ],

  // Minijuego 2: Memoria del Territorio (Parejas)
  territoryMemory: [
    { id: "mem-1", iku: "Tima", es: "Agua / Rio", icon: "piso1_mar" },
    { id: "mem-2", iku: "Aluna", es: "Pensamiento", icon: "piso4_tejido" },
    { id: "mem-3", iku: "Chundwa", es: "Nevados", icon: "piso6_picos" },
    { id: "mem-4", iku: "Kunsamu", es: "Dialogo", icon: "diccionario" },
    { id: "mem-5", iku: "Maku", es: "Autoridad Espiritual", icon: "escudo" },
    { id: "mem-6", iku: "Seynekun", es: "Madre Tierra", icon: "piso3_tierra" }
  ],

  // Minijuego 3: Tejiendo Frases (Ordenar palabras)
  sentenceWeaving: [
    {
      id: "sw-1",
      theme: "Saludo con respeto territorial",
      tokens: ["Nia", "guani,", "tima", "san"],
      correctOrder: ["Nia", "guani,", "tima", "san"],
      translation: "Buenos dias, con respeto al rio sagrado.",
      explanation: "En la Sierra el saludo reconoce primero la presencia y vitalidad del territorio."
    },
    {
      id: "sw-2",
      theme: "Pedir permiso para cruzar el sendero",
      tokens: ["Kunsamu", "se", "Seynekun", "aluna"],
      correctOrder: ["Seynekun", "aluna", "Kunsamu", "se"],
      translation: "En armonia con el pensamiento de la Madre Tierra pido permiso.",
      explanation: "El viajero pide permiso espiritual al entrar en un piso termico superior."
    },
    {
      id: "sw-3",
      theme: "Agradecimiento a la siembra",
      tokens: ["Dun", "kunu", "kunsamu", "yui"],
      correctOrder: ["Dun", "kunu", "yui", "kunsamu"],
      translation: "Agradecemos la semilla que da la vida con sabiduria.",
      explanation: "El cultivo no es propiedad individual, sino agradecimiento a los padres creadores."
    }
  ],

  // Minijuego 4: Saberes de la Sierra (Trivia Cultural con Datos Reales)
  sierraTrivia: [
    {
      id: "triv-1",
      question: "¿Que es la Linea Negra (Sheshizha) para los cuatro pueblos de la Sierra?",
      options: [
        "Un limite sagrado de hitos naturales que rodea toda la Sierra Nevada.",
        "Una carretera asfaltada construida en el siglo pasado.",
        "Un muro de piedra alrededor de Santa Marta.",
        "Una frontera comercial sin significado espiritual."
      ],
      correct: 0,
      curiosity: "La Linea Negra contiene 348 sitios sagrados reconocidos legalmente como patrimonio cultural y espiritual."
    },
    {
      id: "triv-2",
      question: "¿Por que la mochila arhuaca (Tutu) tiene patrones geometricos especificos?",
      options: [
        "Porque representan montanas, lagunas, huellas de animales y el orden cosmico.",
        "Porque es una decoracion al azar sin ningun proposito.",
        "Porque se copia de telas industriales importadas.",
        "Porque solo indica el precio de venta."
      ],
      correct: 0,
      curiosity: "Cada rombo y greca en una mochila arhuaca cuenta una historia familiar, territorial y de proteccion espiritual."
    },
    {
      id: "triv-3",
      question: "¿Cual es el rol principal de un Mamo en la comunidad Arhuaca?",
      options: [
        "Guia espiritual, juez de armonia y custodio del equilibrio con la naturaleza.",
        "Un comerciante que exporta productos a las ciudades.",
        "Un funcionario administrativo del gobierno municipal.",
        "Un atleta de alta montana."
      ],
      correct: 0,
      curiosity: "Los Mamos son formados desde la infancia en el recogimiento para escuchar los mensajes de la Sierra."
    },
    {
      id: "triv-4",
      question: "¿Que ecosistema de la Sierra Nevada abastece de agua a mas de 30 rios del Caribe colombiano?",
      options: [
        "El paramo y las lagunas sagradas en las altas cumbres.",
        "Las playas del mar caribe.",
        "Los cultivos intensivos de la llanura.",
        "Las zonas industriales del puerto."
      ],
      correct: 0,
      curiosity: "La Sierra Nevada es la montana costera mas alta del mundo y una fabrica natural de agua dulce."
    }
  ]
};

/**
 * ============================================================================
 * INSIGNIAS Y RECONOCIMIENTOS DEL ALBUM TERRITORIAL
 * ============================================================================
 */
const ALBUM_BADGES_DATA = [
  {
    id: "badge-stage-1",
    title: "Insignia de la Linea Negra",
    type: "stage",
    stageRequired: 1,
    iconKey: "piso1_mar",
    desc: "Reconoce los hitos de agua y el respeto inicial al ingresar al territorio sagrado.",
    requirement: "Completa los 4 niveles del Piso 1: Litoral y Sabana (1-1 al 1-4).",
    quote: "Quien respeta la orilla, sabe caminar la montana."
  },
  {
    id: "badge-stage-2",
    title: "Custodio de Cascadas y Rios",
    type: "stage",
    stageRequired: 2,
    iconKey: "piso2_bosque",
    desc: "Comprende la vitalidad de las cuencas y los pagamentos junto al agua viva.",
    requirement: "Completa los 4 niveles del Piso 2: Piemontes y Cascadas (2-1 al 2-4).",
    quote: "Cada gota que corre alimenta la vida de la Sierra."
  },
  {
    id: "badge-stage-3",
    title: "Sembrador de Reciprocidad",
    type: "stage",
    stageRequired: 3,
    iconKey: "piso3_tierra",
    desc: "Valora el trabajo comunitario, el cultivo sin venenos y la semilla ancestral.",
    requirement: "Completa los 4 niveles del Piso 3: Bosque de Niebla y Cultivos (3-1 al 3-4).",
    quote: "La tierra no nos pertenece; nosotros pertenecemos a la tierra."
  },
  {
    id: "badge-stage-4",
    title: "Tejedor del Pensamiento",
    type: "stage",
    stageRequired: 4,
    iconKey: "piso4_tejido",
    desc: "Descifra la armonia entre fauna, flora sagrada y el orden del subparamo.",
    requirement: "Completa los 4 niveles del Piso 4: Subparamo y Pensamiento (4-1 al 4-4).",
    quote: "En cada puntada se amarra un buen proposito de vida."
  },
  {
    id: "badge-stage-5",
    title: "Guardian del Silencio Sagrado",
    type: "stage",
    stageRequired: 5,
    iconKey: "piso5_paramo",
    desc: "Sabe contemplar las lagunas de alta montana y los frailejones sin perturbar.",
    requirement: "Completa los 4 niveles del Piso 5: Paramo y Frailejones (5-1 al 5-4).",
    quote: "En el frio del paramo se purifica la intencion del caminante."
  },
  {
    id: "badge-stage-6",
    title: "Mensajero de Gonawindua",
    type: "stage",
    stageRequired: 6,
    iconKey: "piso6_picos",
    desc: "Culmina el ascenso a los picos nevados en equilibrio y armonia intercultural.",
    requirement: "Completa los 4 niveles del Piso 6: Picos Nevados · Gonawindua (6-1 al 6-4).",
    quote: "La nieve de la Sierra es la sabiduria blanca de los padres originarios."
  },
  {
    id: "badge-missions-3",
    title: "Observador Consciente",
    type: "missions",
    countRequired: 3,
    iconKey: "misiones",
    desc: "Lleva el dialogo intercultural a la vida cotidiana observando su entorno con respeto.",
    requirement: "Marca como realizadas al menos 3 misiones en la seccion Misiones.",
    quote: "Mirar con atencion es el primer paso para cuidar la vida."
  },
  {
    id: "badge-missions-6",
    title: "Guardian del Territorio Vivo",
    type: "missions",
    countRequired: 6,
    iconKey: "escudo",
    desc: "Completa todas las practicas de escucha, ahorro de agua y dialogo con los mayores.",
    requirement: "Completa las 6 misiones territoriales en la seccion Misiones.",
    quote: "El aprendizaje verdadero florece cuando se vuelve accion diaria."
  },
  {
    id: "badge-lexicon",
    title: "Custodio de la Palabra Iku",
    type: "lexicon",
    iconKey: "diccionario",
    desc: "Explora el lexico bilingue y honra la memoria linguistica del pueblo Arhuaco.",
    requirement: "Consulta palabras en el Diccionario o registra un termino en el Taller Comunitario.",
    quote: "Cada palabra preservada mantiene encendida la memoria de Aluna."
  },
  {
    id: "badge-games",
    title: "Espiritu de Juego y Saber",
    type: "games",
    countRequired: 1,
    iconKey: "juegos",
    desc: "Ejercita la memoria y la escucha mediante los minijuegos interculturales.",
    requirement: "Gana al menos una partida en cualquiera de los minijuegos de Juegos y Saberes.",
    quote: "Aprender jugando despierta la alegria de compartir el conocimiento."
  }
];
