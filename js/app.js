/**
 * ============================================================================
 * KUNSAMU · ALUNA IA: LOGICA PRINCIPAL DE LA APLICACION (OFFLINE-FIRST)
 * ============================================================================
 * Arquitectura modular para 5 secciones:
 * 1. Inicio: Resumen, siguiente nivel y Semillita guia viva.
 * 2. Ruta (Pisos del Saber): Cuadricula en zigzag de tejido geometrico arhuaco.
 * 3. Juegos y Saberes: 4 minijuegos interactivos de practica libre.
 * 4. Diccionario: Buscador bilingüe y Contraste de Saberes.
 * 5. Album y Perfil: Medallas, cambio/reinicio de perfil, taller y Habeas Data.
 *
 * Cero emojis. Cero dependencias externas. 100% compatible con Cloudflare Pages.
 * ============================================================================
 */

(function () {
  'use strict';

  // Helper para acceder a elementos por ID
  const $ = (id) => document.getElementById(id);
  const $$ = (selector) => document.querySelectorAll(selector);

  // SVG de Semillita en cadena limpia para inyeccion inline dinamica
  const SEMILLITA_SVG_STRING = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 140 150" width="100%" height="100%" class="semillita-svg" role="img" aria-label="Semillita, guia intercultural">
    <defs>
      <linearGradient id="leafGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#73D98A"/>
        <stop offset="60%" stop-color="#4CAF68"/>
        <stop offset="100%" stop-color="#237A4B"/>
      </linearGradient>
      <linearGradient id="bodyGrad" x1="20%" y1="0%" x2="80%" y2="100%">
        <stop offset="0%" stop-color="#C2F3CB"/>
        <stop offset="45%" stop-color="#96E5A8"/>
        <stop offset="100%" stop-color="#5EBE78"/>
      </linearGradient>
      <linearGradient id="shadowGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#1E5641" stop-opacity="0"/>
        <stop offset="100%" stop-color="#1B4D36" stop-opacity="0.32"/>
      </linearGradient>
      <linearGradient id="goldAccentGrad" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stop-color="#FCD37B"/>
        <stop offset="100%" stop-color="#D99B38"/>
      </linearGradient>
      <style>
        .semillita-svg { overflow: visible; display: block; }
        .semillita-bob { animation: semBob 3s ease-in-out infinite; transform-origin: 70px 115px; }
        .semillita-eye { transform-origin: center; animation: semBlink 4.5s ease-in-out infinite; }
        .semillita-leaf { transform-origin: 52px 35px; animation: semLeafSway 3.6s ease-in-out infinite; }
        @keyframes semBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        @keyframes semBlink { 0%, 92%, 100% { transform: scaleY(1); } 96% { transform: scaleY(0.1); } }
        @keyframes semLeafSway { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(5deg); } }
        .semillita--happy .semillita-bob { animation: semHappyJump 0.6s ease-in-out 3; }
        .semillita--happy .semillita-eye { animation: none; }
        .semillita--happy .eye-normal { display: none; }
        .semillita--happy .eye-happy { display: block !important; }
        .semillita--happy .mouth-normal { display: none; }
        .semillita--happy .mouth-happy { display: block !important; }
        @keyframes semHappyJump { 0%, 100% { transform: translateY(0) scale(1); } 40% { transform: translateY(-16px) scale(1.06, 0.94); } 70% { transform: translateY(2px) scale(0.96, 1.04); } }
        .semillita--thinking .semillita-bob { animation: semThinkTilt 2.2s ease-in-out infinite; }
        .semillita--thinking .semillita-leaf { animation: semThinkLeaf 1.2s ease-in-out infinite; }
        @keyframes semThinkTilt { 0%, 100% { transform: rotate(0deg) translateY(0); } 50% { transform: rotate(6deg) translateY(-4px); } }
        @keyframes semThinkLeaf { 0%, 100% { transform: rotate(8deg); } 50% { transform: rotate(-6deg); } }
      </style>
    </defs>
    <g class="semillita-bob">
      <g class="semillita-feet" stroke="#1E5641" stroke-width="4.2" stroke-linecap="round" stroke-linejoin="round" fill="none">
        <path d="M 50 128 L 57 137 L 64 128" />
        <path d="M 74 128 L 81 137 L 88 128" />
      </g>
      <g class="semillita-leaf">
        <path d="M 52 42 C 40 28, 26 12, 42 2 C 58 10, 68 24, 56 43 Z" fill="url(#leafGrad)" stroke="#1E5641" stroke-width="3.8" stroke-linejoin="round" />
        <path d="M 44 26 C 47 18, 45 10, 42 4" fill="none" stroke="#1E5641" stroke-width="2.2" stroke-linecap="round" />
      </g>
      <path d="M 52 38 Q 54 44 56 48" fill="none" stroke="#1E5641" stroke-width="4" stroke-linecap="round" />
      <ellipse cx="69" cy="120" rx="36" ry="10" fill="url(#shadowGrad)" />
      <path d="M 70 42 C 98 42, 114 62, 114 88 C 114 114, 96 126, 70 126 C 44 126, 26 114, 26 88 C 26 62, 42 42, 70 42 Z" fill="url(#bodyGrad)" stroke="#1E5641" stroke-width="4.5" stroke-linejoin="round" />
      <path d="M 88 48 C 106 62, 110 82, 108 100 C 106 114, 94 122, 78 124 C 96 122, 110 110, 110 88 C 110 66, 98 52, 88 48 Z" fill="#3E9E60" opacity="0.38" />
      <ellipse cx="48" cy="58" rx="10" ry="6" transform="rotate(-25 48 58)" fill="#FFFFFF" opacity="0.45" />
      <ellipse cx="40" cy="95" rx="7.5" ry="4.5" fill="#ECA646" opacity="0.4" />
      <ellipse cx="98" cy="95" rx="7.5" ry="4.5" fill="#ECA646" opacity="0.4" />
      <g class="semillita-eye eye-normal">
        <ellipse cx="50" cy="84" rx="5.5" ry="8" fill="#16463E" />
        <circle cx="52" cy="80.5" r="2.2" fill="#FFFFFF" />
      </g>
      <g class="semillita-eye eye-normal">
        <ellipse cx="88" cy="84" rx="5.5" ry="8" fill="#16463E" />
        <circle cx="90" cy="80.5" r="2.2" fill="#FFFFFF" />
      </g>
      <g class="eye-happy" style="display: none;" stroke="#16463E" stroke-width="3.5" stroke-linecap="round" fill="none">
        <path d="M 44 86 Q 50 78 56 86" />
        <path d="M 82 86 Q 88 78 94 86" />
      </g>
      <path class="mouth-normal" d="M 62 97 Q 69 104 76 97" fill="none" stroke="#16463E" stroke-width="3.2" stroke-linecap="round" />
      <path class="mouth-happy" style="display: none;" d="M 60 96 Q 69 108 78 96 Z" fill="#D9665B" stroke="#16463E" stroke-width="3" stroke-linejoin="round" />
    </g>
  </svg>`;

  // Variables de Estado de la Sesión
  let state = null;
  let currentActiveLevel = null;
  let currentHintIndex = 0;
  let toastTimer = null;
  let activeAudioRecorder = null;
  let recordedAudioBlob = null;
  let activeGameTab = 'palabra';

  /**
   * ==========================================================================
   * 1. INICIALIZACION DEL SISTEMA
   * ==========================================================================
   */
  async function initApp() {
    SoundEngine.init();

    // 1. Cargar estado persistente del perfil activo
    const storedRole = StateManager.getActiveRole();
    if (!storedRole) {
      state = StateManager.load('visitante');
      showProfileSelectorModal(true);
    } else {
      state = StateManager.load(storedRole);
    }

    // 2. Aplicar preferencias visuales
    applyProfileTheme(state.profileRole || 'visitante');
    applyAccessibilityPreferences();
    updatePointsDisplay();
    updateSoundToggleUI();

    // 3. Poblar iconos SVG del sistema
    populateSVGIcons();

    // 4. Configurar escuchadores globales
    setupNavigation();
    setupTopBarEvents();
    setupProfileModalEvents();
    setupWorkshopEvents();

    // 5. Inyectar Semillita en Inicio
    injectSemillitaSVG();

    // 6. Renderizar vista de inicio por defecto
    renderHomeView();
  }

  /**
   * Inyecta los iconos SVG en elementos con id específico
   */
  function populateSVGIcons() {
    const iconBindings = {
      // Sidebar desktop
      'navIcon-inicio': 'inicio',
      'navIcon-ruta': 'ruta',
      'navIcon-juegos': 'juegos',
      'navIcon-diccionario': 'diccionario',
      'navIcon-perfil': 'perfil',

      // Bottom nav mobile
      'mobIcon-inicio': 'inicio',
      'mobIcon-ruta': 'ruta',
      'mobIcon-juegos': 'juegos',
      'mobIcon-diccionario': 'diccionario',
      'mobIcon-perfil': 'perfil',

      // Topbar
      'rolePillIcon': 'perfil',
      'topbarPointsIcon': 'estrella',
      'topbarStreakIcon': 'fuego',
      'easyReadingIcon': 'lectura_facil',

      // Inicio
      'btnPlayIcon': 'flecha_der',
      'statBadgeLevels': 'ruta',
      'statBadgeBadges': 'medalla',
      'statBadgeWords': 'diccionario',

      // Juegos
      'tabIconPalabra': 'juego_palabra',
      'tabIconMemoria': 'juego_memoria',
      'tabIconFrases': 'juego_frases',
      'tabIconTrivia': 'juego_trivia',

      // Perfil
      'profileAvatarIcon': 'perfil',
      'micRecordIcon': 'microfono',
      'shieldLegalIcon': 'escudo',
      'exportDataIcon': 'exportar',
      'wipeDataIcon': 'borrar',
      'closeProfileModalIcon': 'cerrar'
    };

    Object.entries(iconBindings).forEach(([elemId, iconKey]) => {
      const el = $(elemId);
      if (el) el.innerHTML = getSVGIcon(iconKey);
    });
  }

  /**
   * Inyecta el SVG interactivo de Semillita en los contenedores
   */
  function injectSemillitaSVG() {
    const wrap = $('homeMascotWrap');
    if (wrap) wrap.innerHTML = SEMILLITA_SVG_STRING;

    const thumb = $('bubbleMascotThumb');
    if (thumb) thumb.innerHTML = SEMILLITA_SVG_STRING;
  }

  /**
   * Activa el estado feliz de Semillita
   */
  function setSemillitaHappy(duration = 2400) {
    const svgs = $$('.semillita-svg');
    svgs.forEach((s) => s.classList.add('semillita--happy'));
    setTimeout(() => {
      svgs.forEach((s) => s.classList.remove('semillita--happy'));
    }, duration);
  }

  /**
   * Activa el estado reflexivo de Semillita al dar pistas
   */
  function setSemillitaThinking(duration = 2600) {
    const svgs = $$('.semillita-svg');
    svgs.forEach((s) => s.classList.add('semillita--thinking'));
    setTimeout(() => {
      svgs.forEach((s) => s.classList.remove('semillita--thinking'));
    }, duration);
  }

  /**
   * ==========================================================================
   * 2. SISTEMA DE NAVEGACION (5 SECCIONES EXACTAS)
   * ==========================================================================
   */
  function setupNavigation() {
    const navButtons = $$('[data-view]');
    navButtons.forEach((btn) => {
      btn.onclick = () => {
        SoundEngine.playClickSound();
        const viewId = btn.dataset.view;
        switchView(viewId);
      };
    });

    const btnExplore = $('btnExploreRouteHero');
    if (btnExplore) {
      btnExplore.onclick = () => switchView('ruta');
    }

    const btnContinue = $('btnContinueNextLevel');
    if (btnContinue) {
      btnContinue.onclick = () => openNextPendingLevel();
    }
  }

  function switchView(viewName) {
    // Sincronizar botones de sidebar y bottom nav
    $$('.nav-item-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.view === viewName);
    });
    $$('.bottom-nav-btn').forEach((b) => {
      b.classList.toggle('active', b.dataset.view === viewName);
    });

    // Ocultar todas las vistas y mostrar la seleccionada
    const views = {
      inicio: $('viewInicio'),
      ruta: $('viewRuta'),
      juegos: $('viewJuegos'),
      diccionario: $('viewDiccionario'),
      perfil: $('viewPerfil')
    };

    Object.entries(views).forEach(([name, el]) => {
      if (el) el.classList.toggle('active', name === viewName);
    });

    window.scrollTo({ top: 0, behavior: 'smooth' });

    // Cargar contenido segun la vista activa
    switch (viewName) {
      case 'inicio':
        renderHomeView();
        break;
      case 'ruta':
        renderRouteView();
        break;
      case 'juegos':
        renderGamesView();
        break;
      case 'diccionario':
        renderLexiconView();
        renderContrastView();
        break;
      case 'perfil':
        renderProfileView();
        break;
    }
  }

  /**
   * ==========================================================================
   * 3. GESTION DE PERFILES AISLADOS (HERMANO MENOR VS COMUNIDAD)
   * ==========================================================================
   */
  function applyProfileTheme(role) {
    document.body.classList.remove('theme-visitante', 'theme-comunidad');
    if (role === 'comunidad') {
      document.body.classList.add('theme-comunidad');
    } else {
      document.body.classList.add('theme-visitante');
    }
    updateProfileUI(role);
  }

  function updateProfileUI(role) {
    const isComunidad = role === 'comunidad';

    // Barra superior
    const rolePillText = $('rolePillText');
    if (rolePillText) {
      rolePillText.textContent = isComunidad ? 'Perfil: Comunidad Iku' : 'Perfil: Hermano Menor';
    }

    // Hero en Inicio
    const heroTag = $('homeHeroTag');
    if (heroTag) {
      heroTag.textContent = isComunidad
        ? 'Ruta de Fortalecimiento Lingüístico y Memoria'
        : 'Ruta de Aprendizaje y Respeto Territorial';
    }

    const heroGreeting = $('homeHeroGreeting');
    if (heroGreeting) {
      heroGreeting.textContent = isComunidad
        ? '¡Bienvenido a KUNSAMU, Hermano Mayor!'
        : 'Bienvenido a KUNSAMU, Caminante';
    }

    const heroDesc = $('homeHeroDesc');
    if (heroDesc) {
      heroDesc.textContent = isComunidad
        ? 'Plataforma para ejercitar la escritura de la lengua Iku, preservar la memoria de los sabedores y proteger el saber territorial.'
        : 'Un puente de diálogo intercultural para escuchar el territorio de la Sierra Nevada, aprender la lengua Iku y respetar la Ley de Origen.';
    }

    // Tarjeta en Album y Perfil
    const profileTitle = $('profileCurrentTitle');
    if (profileTitle) {
      profileTitle.textContent = isComunidad ? 'Comunidad Arhuaca (Iku)' : 'Hermano Menor (Visitante / Aliado)';
    }

    const profileDesc = $('profileCurrentDesc');
    if (profileDesc) {
      profileDesc.textContent = isComunidad
        ? 'Enfocado en fortalecimiento lingüístico, escritura nativa y memoria comunitaria.'
        : 'Ruta guiada con protocolos culturales, traducción asistida y respeto a los sitios sagrados.';
    }

    // Mensaje de Semillita
    updateSemillitaBubbleMessage();
  }

  function updateSemillitaBubbleMessage() {
    const msgEl = $('homeMascotMessage');
    const titleEl = $('bubbleMascotTitle');
    if (!msgEl) return;

    const isComunidad = state.profileRole === 'comunidad';
    if (isComunidad) {
      if (titleEl) titleEl.textContent = 'Mensaje para la Comunidad';
      msgEl.textContent = 'La lengua Iku es el tejido que sostiene la memoria de los Mamos. Cada palabra escrita con respeto fortalece nuestras raices en la Sierra.';
    } else {
      if (titleEl) titleEl.textContent = 'Consejo de Respeto Territorial';
      msgEl.textContent = 'Antes de cruzar un rio sagrado o subir hacia el bosque de niebla, recuerda pedir permiso en silencio y agradecer la vida del agua.';
    }
  }

  function showProfileSelectorModal(isFirstTime = false) {
    const modal = $('profileSelectorModal');
    if (!modal) return;
    modal.classList.add('active');
    document.body.style.overflow = 'hidden';

    const btnClose = $('btnCloseProfileModal');
    if (btnClose) {
      btnClose.style.display = isFirstTime ? 'none' : 'inline-flex';
    }
  }

  function hideProfileSelectorModal() {
    const modal = $('profileSelectorModal');
    if (modal) modal.classList.remove('active');
    document.body.style.overflow = '';
  }

  function setupProfileModalEvents() {
    const btnQuick = $('btnQuickRoleSwitch');
    if (btnQuick) {
      btnQuick.onclick = () => showProfileSelectorModal(false);
    }

    const btnSwitchInView = $('btnSwitchProfileInView');
    if (btnSwitchInView) {
      btnSwitchInView.onclick = () => showProfileSelectorModal(false);
    }

    const btnClose = $('btnCloseProfileModal');
    if (btnClose) {
      btnClose.onclick = hideProfileSelectorModal;
    }

    const optVisitante = $('selectRoleVisitante');
    if (optVisitante) {
      optVisitante.onclick = () => selectProfile('visitante');
    }

    const optComunidad = $('selectRoleComunidad');
    if (optComunidad) {
      optComunidad.onclick = () => selectProfile('comunidad');
    }

    // Botón para reiniciar exclusivamente el perfil activo
    const btnReset = $('btnResetActiveProfile');
    if (btnReset) {
      btnReset.onclick = () => {
        const roleLabel = state.profileRole === 'comunidad' ? 'Comunidad Iku' : 'Hermano Menor';
        const confirmReset = confirm(
          `¿Confirmas reiniciar todo el progreso y puntos del perfil "${roleLabel}"?\n\nEl otro perfil conservará sus datos intactos.`
        );
        if (confirmReset) {
          state = StateManager.resetProfile(state.profileRole);
          applyProfileTheme(state.profileRole);
          updatePointsDisplay();
          renderHomeView();
          renderProfileView();
          showToast(`Progreso de "${roleLabel}" reiniciado correctamente.`);
        }
      };
    }
  }

  function selectProfile(role) {
    state = StateManager.load(role);
    state.profileRole = role;
    StateManager.save(state, role);

    applyProfileTheme(role);
    updatePointsDisplay();
    hideProfileSelectorModal();

    renderHomeView();
    showToast(role === 'comunidad' ? 'Perfil: Comunidad Iku activado' : 'Perfil: Hermano Menor activado');
  }

  /**
   * ==========================================================================
   * 4. VISTA 1: INICIO (HERO, PROGRESO Y ACCESO DIRECTO)
   * ==========================================================================
   */
  function renderHomeView() {
    // 1. Niveles completados
    const levelsEl = $('homeCompletedLevels');
    if (levelsEl) {
      levelsEl.textContent = `${state.completedLevels.length} / 24`;
    }

    // 2. Insignias desbloqueadas
    checkAndUnlockBadges();
    const badgesEl = $('homeCompletedBadges');
    if (badgesEl) {
      badgesEl.textContent = `${(state.completedBadges || []).length} / 6`;
    }

    // 3. Vocablos aportados en Taller
    const wordsEl = $('homeCustomWords');
    if (wordsEl) {
      wordsEl.textContent = (state.customWords || []).length;
    }

    // 4. Texto del botón de continuar
    const btnText = $('btnContinueLevelText');
    if (btnText) {
      const nextId = getNextPendingLevelId();
      btnText.textContent = nextId ? `Continuar al Nivel ${nextId}` : '¡Todos los niveles completados!';
    }

    updateSemillitaBubbleMessage();
  }

  function getNextPendingLevelId() {
    for (const stage of TERRITORIAL_STAGES) {
      for (const lvl of stage.levels) {
        if (!state.completedLevels.includes(lvl.id)) {
          return lvl.id;
        }
      }
    }
    return null;
  }

  function openNextPendingLevel() {
    const nextId = getNextPendingLevelId();
    if (nextId) {
      openTerritorialLevel(nextId);
    } else {
      showToast('¡Has culminado con exito todos los pisos de la Sierra Nevada!');
      switchView('ruta');
    }
  }

  /**
   * ==========================================================================
   * 5. VISTA 2: RUTA (PISOS DEL SABER EN TEJIDO ZIGZAG)
   * ==========================================================================
   */
  function renderRouteView() {
    const container = $('routeStagesContainer');
    if (!container) return;

    let html = '';

    TERRITORIAL_STAGES.forEach((stage) => {
      const stageLevels = stage.levels || [];
      const completedCount = stageLevels.filter((l) => state.completedLevels.includes(l.id)).length;

      html += `
        <article class="piso-container" id="stage-card-${stage.id}">
          <div class="piso-header">
            <div class="piso-title-wrap">
              <div class="piso-badge">
                ${getSVGIcon(stage.iconKey || 'ruta')}
              </div>
              <div>
                <h3>Piso ${stage.id}: ${escapeHTML(stage.name)}</h3>
                <span class="piso-ecosystem">${escapeHTML(stage.ecosystem)} · ${escapeHTML(stage.altitude)}</span>
              </div>
            </div>
            <div class="piso-progress-pill">
              ${completedCount} de ${stageLevels.length} completados
            </div>
          </div>

          <!-- Cuadricula en Zigzag con Hilos SVG de Telar -->
          <div class="zigzag-loom-area">
            <!-- Trazado SVG escalonado entre los 4 nodos -->
            <svg class="zigzag-svg-threads" viewBox="0 0 800 160" preserveAspectRatio="none" aria-hidden="true">
              <path class="thread-line ${completedCount >= 1 ? 'active' : ''}" d="M 100 80 L 300 102" />
              <path class="thread-line ${completedCount >= 2 ? 'active' : ''}" d="M 300 102 L 500 80" />
              <path class="thread-line ${completedCount >= 3 ? 'active' : ''}" d="M 500 80 L 700 102" />
            </svg>

            <div class="zigzag-nodes-grid">
              ${stageLevels.map((lvl, idx) => {
                const isCompleted = state.completedLevels.includes(lvl.id);
                // Desbloqueado si es el primer nivel o el anterior esta completo
                const isUnlocked = isCompleted || idx === 0 || (idx > 0 && state.completedLevels.includes(stageLevels[idx - 1].id)) || (stage.id > 1 && idx === 0 && isPreviousStageComplete(stage.id));
                const isCurrent = isUnlocked && !isCompleted;

                let stateClass = 'locked';
                let iconContent = getSVGIcon('candado');

                if (isCompleted) {
                  stateClass = 'completed';
                  iconContent = getSVGIcon('check');
                } else if (isCurrent) {
                  stateClass = 'current';
                  iconContent = getSVGIcon('rombo');
                }

                return `
                  <div class="level-node-wrap">
                    <button class="level-diamond-btn ${stateClass}"
                            data-level-id="${lvl.id}"
                            ${isUnlocked ? '' : 'disabled'}
                            aria-label="Nivel ${lvl.id}: ${escapeHTML(lvl.title)}">
                      <div class="diamond-inner-content">
                        ${iconContent}
                        <span style="font-size: 0.68rem; font-weight: 800; margin-top: 2px;">${lvl.id}</span>
                      </div>
                    </button>
                    <span class="level-node-title">${escapeHTML(lvl.title)}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </article>
      `;
    });

    container.innerHTML = html;

    // Vincular clic en nodos
    container.querySelectorAll('[data-level-id]').forEach((btn) => {
      btn.onclick = () => {
        SoundEngine.playClickSound();
        openTerritorialLevel(btn.dataset.levelId);
      };
    });
  }

  function isPreviousStageComplete(currentStageId) {
    if (currentStageId <= 1) return true;
    const prevStage = TERRITORIAL_STAGES.find((s) => s.id === currentStageId - 1);
    if (!prevStage) return true;
    return prevStage.levels.every((l) => state.completedLevels.includes(l.id));
  }

  /**
   * ==========================================================================
   * 6. PEDAGOGIA DE ANDAMIAJE (FASE 1: DESCUBRIMIENTO -> FASE 2: RETO)
   * ==========================================================================
   */
  function openTerritorialLevel(levelId) {
    let targetLevel = null;
    let targetStage = null;

    for (const stage of TERRITORIAL_STAGES) {
      const found = stage.levels.find((l) => l.id === levelId);
      if (found) {
        targetLevel = found;
        targetStage = stage;
        break;
      }
    }

    if (!targetLevel) return;
    currentActiveLevel = targetLevel;
    currentHintIndex = 0;

    // FASE 1: Mostrar Ficha de Descubrimiento obligatoria
    const discoveryHTML = buildDiscoveryHTML(targetLevel, targetStage);
    openModal(discoveryHTML);

    // Configurar boton para ir al reto (Fase 2)
    const btnStartChallenge = $('btnStartChallenge');
    if (btnStartChallenge) {
      btnStartChallenge.onclick = () => {
        SoundEngine.playClickSound();
        openChallengePhase(targetLevel);
      };
    }

    // Configurar boton de audio en descubrimiento
    const btnPlayAudio = $('btnPlayDiscoveryAudio');
    if (btnPlayAudio) {
      btnPlayAudio.onclick = () => {
        const textToSpeak = targetLevel.discovery ? targetLevel.discovery.ikuWord : targetLevel.title;
        SoundEngine.playSpeechSynthesis(textToSpeak);
      };
    }
  }

  function buildDiscoveryHTML(level, stage) {
    const d = level.discovery || {
      ikuWord: level.title,
      esWord: 'Concepto Territorial',
      syllables: ['i', 'ku'],
      phonetic: 'i-ku',
      culturalMeaning: level.context || 'Principio ancestral de la Sierra Nevada.',
      westernContrast: 'Enfoque convencional de estudio.'
    };

    const isComunidad = state.profileRole === 'comunidad';

    return `
      <div class="modal-header">
        <div>
          <span class="hero-tag" style="background: var(--primary-soft); color: var(--primary-forest);">
            Fase 1 · Descubrimiento y Andamiaje
          </span>
          <h3 style="font-size: 1.15rem; font-weight: 800; margin-top: 4px;">
            Nivel ${level.id} · ${escapeHTML(stage ? stage.name : 'Sierra Nevada')}
          </h3>
        </div>
        <button class="icon-action-btn" id="modalCloseX" aria-label="Cerrar modal">
          ${getSVGIcon('cerrar')}
        </button>
      </div>

      <div class="modal-body">
        <div class="discovery-card-hero">
          <div class="discovery-iku-title">${escapeHTML(d.ikuWord)}</div>
          <div class="discovery-es-meaning">${escapeHTML(d.esWord)}</div>

          <!-- Silabas separadas -->
          <div class="syllables-row">
            ${(d.syllables || []).map((s) => `<span class="syllable-chip">${escapeHTML(s)}</span>`).join('')}
          </div>

          <button class="btn-secondary btn-sm" id="btnPlayDiscoveryAudio" style="margin: 0 auto 10px;">
            <span class="svg-icon" style="width: 16px; height: 16px;">${getSVGIcon('audio')}</span>
            <span>Escuchar Pronunciacion (${escapeHTML(d.phonetic || '')})</span>
          </button>
        </div>

        <!-- Contraste de Saberes o Contexto Cultural -->
        <div style="background: var(--bg-canvas); border: 1.5px solid var(--border-medium); border-radius: var(--radius-md); padding: 16px; margin-bottom: 20px;">
          <strong style="display: block; font-size: 0.92rem; color: var(--primary-forest); margin-bottom: 6px;">
            ${isComunidad ? 'Raiz Cultural y Memoria Arhuaca:' : 'Contraste de Saberes (Cosmovision vs Occidente):'}
          </strong>
          <p style="font-size: 0.88rem; color: var(--text-main); line-height: 1.5; margin-bottom: 8px;">
            ${escapeHTML(d.culturalMeaning)}
          </p>
          ${!isComunidad && d.westernContrast ? `
            <div style="font-size: 0.82rem; color: var(--text-muted); border-top: 1px dashed var(--border-medium); padding-top: 6px;">
              <strong>Mirada Occidental:</strong> ${escapeHTML(d.westernContrast)}
            </div>
          ` : ''}
        </div>

        <div style="text-align: center;">
          <button class="btn-primary" id="btnStartChallenge" style="width: 100%;">
            <span>¡Entendido, ir al reto!</span>
            ${getSVGIcon('flecha_der')}
          </button>
        </div>
      </div>
    `;
  }

  function openChallengePhase(level) {
    const isComunidad = state.profileRole === 'comunidad';

    let challengeBodyHTML = '';
    let instructionText = isComunidad && level.communityInstruction
      ? level.communityInstruction
      : level.instruction;

    // Renderizar segun el tipo de mecanica
    if (level.type === 'audio-assoc') {
      challengeBodyHTML = `
        <div style="text-align: center; margin-bottom: 18px;">
          <button class="btn-secondary" id="btnPlayChallengeAudio">
            <span class="svg-icon">${getSVGIcon('audio')}</span>
            <span>Reproducir sonido de la palabra</span>
          </button>
        </div>
        <div class="challenge-options-list">
          ${(level.options || []).map((opt, i) => `
            <button class="challenge-option-btn" data-option-index="${i}">
              ${escapeHTML(opt.text)}
            </button>
          `).join('')}
        </div>
      `;
    } else if (level.type === 'territorial-case') {
      challengeBodyHTML = `
        <div style="background: var(--bg-canvas); border-left: 4px solid var(--accent-earth); padding: 14px; border-radius: var(--radius-sm); margin-bottom: 18px; font-size: 0.92rem;">
          ${escapeHTML(level.caseText || '')}
        </div>
        <div class="challenge-options-list">
          ${(level.options || []).map((opt, i) => `
            <button class="challenge-option-btn" data-option-index="${i}">
              ${escapeHTML(opt.text)}
            </button>
          `).join('')}
        </div>
      `;
    } else {
      // Opciones estandar / morfosintaxis
      challengeBodyHTML = `
        <div class="challenge-options-list">
          ${(level.options || []).map((opt, i) => `
            <button class="challenge-option-btn" data-option-index="${i}">
              ${escapeHTML(opt.text)}
            </button>
          `).join('')}
        </div>
      `;
    }

    const html = `
      <div class="modal-header">
        <div>
          <span class="hero-tag" style="background: var(--accent-ochre-light); color: var(--accent-ochre-dark);">
            Fase 2 · Reto de Aprendizaje
          </span>
          <h3 style="font-size: 1.15rem; font-weight: 800; margin-top: 4px;">
            ${escapeHTML(level.title)}
          </h3>
        </div>
        <button class="btn-secondary btn-sm" id="btnBackToStudy">
          ${getSVGIcon('estudio')}
          <span>Ver ficha de estudio</span>
        </button>
      </div>

      <div class="modal-body">
        <p style="font-size: 0.95rem; font-weight: 600; color: var(--text-main); margin-bottom: 16px;">
          ${escapeHTML(instructionText)}
        </p>

        ${challengeBodyHTML}

        <!-- Boton de Pistas Progresivas -->
        <div style="text-align: center; margin-top: 14px;">
          <button class="btn-request-hint" id="btnRequestHint" style="display: none;">
            ${getSVGIcon('pista')}
            <span>Pedir pista a Semillita</span>
          </button>
          <div id="hintSlotArea"></div>
        </div>

        <div id="challengeFeedback" style="margin-top: 16px;"></div>
      </div>
    `;

    openModal(html);

    // Boton para volver a la ficha de estudio
    const btnBack = $('btnBackToStudy');
    if (btnBack) {
      btnBack.onclick = () => openTerritorialLevel(level.id);
    }

    // Audio en el reto
    const btnAudio = $('btnPlayChallengeAudio');
    if (btnAudio) {
      btnAudio.onclick = () => {
        const text = level.discovery ? level.discovery.ikuWord : level.title;
        SoundEngine.playSpeechSynthesis(text);
      };
    }

    // Configurar logica de opciones
    initChallengeOptionsLogic(level);
  }

  function initChallengeOptionsLogic(level) {
    const optionBtns = $$('.challenge-option-btn[data-option-index]');
    const hintBtn = $('btnRequestHint');

    optionBtns.forEach((btn) => {
      btn.onclick = () => {
        const idx = Number(btn.dataset.optionIndex);
        const opt = level.options[idx];

        if (opt.correct) {
          // ACIERTO
          btn.classList.add('correct');
          SoundEngine.playSuccessSound();
          setSemillitaHappy();
          launchCelebrationConfetti();

          showChallengeFeedback('¡Excelente respuesta en armonia con el saber!', true);
          completeCurrentLevel(level);
        } else {
          // ERROR AMIGABLE
          btn.classList.add('wrong');
          SoundEngine.playErrorSound();

          showChallengeFeedback(opt.feedback || 'Esa respuesta no coincide. Puedes intentar de nuevo.', false);

          // Mostrar boton de pista tras el primer error
          if (hintBtn) {
            hintBtn.style.display = 'inline-flex';
            initHintSystem(level);
          }

          setTimeout(() => btn.classList.remove('wrong'), 1000);
        }
      };
    });
  }

  function initHintSystem(level) {
    const hintBtn = $('btnRequestHint');
    const hintSlot = $('hintSlotArea');
    if (!hintBtn || !hintSlot) return;

    hintBtn.onclick = () => {
      SoundEngine.playHintSound();
      setSemillitaThinking();

      const hints = level.hints || [
        'Semillita te recuerda: Observa la relacion de esta palabra con el cuidado del agua.',
        'Pista final: Se ha descartado una opcion incorrecta para guiarte.'
      ];

      if (currentHintIndex < hints.length) {
        hintSlot.innerHTML = `
          <div class="hint-box-display">
            <strong>Consejo de Semillita (Pista ${currentHintIndex + 1}):</strong>
            <p style="margin-top: 4px;">${escapeHTML(hints[currentHintIndex])}</p>
          </div>
        `;

        // En la segunda pista, eliminar una opcion incorrecta
        if (currentHintIndex === 1) {
          eliminateOneWrongOption(level);
        }

        currentHintIndex++;

        if (currentHintIndex >= hints.length) {
          hintBtn.disabled = true;
          hintBtn.style.opacity = '0.6';
        }
      }
    };
  }

  function eliminateOneWrongOption(level) {
    const optionBtns = $$('.challenge-option-btn[data-option-index]');
    for (const btn of optionBtns) {
      const idx = Number(btn.dataset.optionIndex);
      if (level.options && level.options[idx] && !level.options[idx].correct && !btn.classList.contains('option-eliminated')) {
        btn.classList.add('option-eliminated');
        break;
      }
    }
  }

  function showChallengeFeedback(text, isSuccess) {
    const banner = $('challengeFeedback');
    if (!banner) return;

    banner.innerHTML = `
      <div style="background: ${isSuccess ? 'var(--status-success-bg)' : 'var(--status-error-bg)'};
                  color: ${isSuccess ? 'var(--status-success)' : 'var(--status-error)'};
                  border: 1.5px solid ${isSuccess ? 'var(--status-success)' : 'var(--status-error)'};
                  border-radius: var(--radius-md);
                  padding: 14px;
                  font-weight: 700;
                  font-size: 0.92rem;">
        ${escapeHTML(text)}
      </div>
    `;
  }

  function completeCurrentLevel(level) {
    if (!state.completedLevels.includes(level.id)) {
      state.completedLevels.push(level.id);
      state.points += 25;
      StateManager.save(state, state.profileRole);
      updatePointsDisplay();
      checkAndUnlockBadges();
    }

    setTimeout(() => {
      const feedback = $('challengeFeedback');
      if (feedback) {
        feedback.innerHTML += `
          <div style="margin-top: 16px; display: flex; gap: 10px; justify-content: center;">
            <button class="btn-primary" id="btnContinueAfterWin">
              Continuar en la Sierra
            </button>
          </div>
        `;
        const btnContinue = $('btnContinueAfterWin');
        if (btnContinue) {
          btnContinue.onclick = () => {
            closeModal();
            renderRouteView();
            renderHomeView();
          };
        }
      }
    }, 700);
  }

  function checkAndUnlockBadges() {
    if (!state.completedBadges) state.completedBadges = [];

    TERRITORIAL_STAGES.forEach((stage) => {
      const allLevelsDone = stage.levels.every((l) => state.completedLevels.includes(l.id));
      const badgeId = `badge-stage-${stage.id}`;

      if (allLevelsDone && !state.completedBadges.includes(badgeId)) {
        state.completedBadges.push(badgeId);
        StateManager.save(state, state.profileRole);
        showToast(`¡Has desbloqueado la insignia: Piso ${stage.id} de la Sierra!`);
      }
    });
  }

  /**
   * ==========================================================================
   * 7. VISTA 3: JUEGOS Y SABERES (4 MINIJUEGOS CON IDENTIDAD REAL)
   * ==========================================================================
   */
  function renderGamesView() {
    // Configurar pestanas de minijuegos
    const tabs = $$('.game-tab-btn');
    tabs.forEach((tab) => {
      tab.onclick = () => {
        SoundEngine.playClickSound();
        tabs.forEach((t) => t.classList.remove('active'));
        tab.classList.add('active');
        activeGameTab = tab.dataset.game;
        renderActiveGamePanel();
      };
    });

    renderActiveGamePanel();
  }

  function renderActiveGamePanel() {
    const container = $('gamePanelContainer');
    if (!container) return;

    switch (activeGameTab) {
      case 'palabra':
        renderGameWord(container);
        break;
      case 'memoria':
        renderGameMemory(container);
        break;
      case 'frases':
        renderGameFrases(container);
        break;
      case 'trivia':
        renderGameTrivia(container);
        break;
    }
  }

  // MINIJUEGO 1: Descubriendo la Palabra
  function renderGameWord(container) {
    const list = (MINIGAMES_DATA && MINIGAMES_DATA.discoveringWords) || [];
    const item = list[Math.floor(Math.random() * list.length)] || list[0];

    container.innerHTML = `
      <div class="word-discovery-card">
        <span class="hero-tag" style="background: var(--primary-soft); color: var(--primary-forest); margin-bottom: 12px;">
          Descubriendo la Palabra
        </span>
        <div class="word-clue-box">
          "${escapeHTML(item.clue)}"
        </div>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px;">
          ¿Cual es el termino en Iku correspondiente?
        </p>
        <div class="word-options-grid">
          ${item.options.map((opt) => `
            <button class="challenge-option-btn" data-word-guess="${escapeHTML(opt)}" style="text-align: center;">
              <strong>${escapeHTML(opt)}</strong>
            </button>
          `).join('')}
        </div>
        <div id="wordGameFeedback"></div>
      </div>
    `;

    container.querySelectorAll('[data-word-guess]').forEach((btn) => {
      btn.onclick = () => {
        const guess = btn.dataset.wordGuess;
        const fb = $('wordGameFeedback');
        if (guess === item.ikuWord) {
          btn.classList.add('correct');
          SoundEngine.playSuccessSound();
          setSemillitaHappy();
          fb.innerHTML = `
            <div style="background: var(--status-success-bg); color: var(--status-success); border-radius: var(--radius-md); padding: 14px; font-weight: 700; margin-top: 14px;">
              ¡Correcto! ${escapeHTML(item.ikuWord)}: ${escapeHTML(item.esWord)}.
              <p style="font-size: 0.82rem; font-weight: 500; margin-top: 4px;">${escapeHTML(item.curiosity)}</p>
            </div>
            <button class="btn-primary" id="btnNextWordGame" style="margin-top: 12px;">Siguiente Palabra</button>
          `;
          const btnNext = $('btnNextWordGame');
          if (btnNext) btnNext.onclick = () => renderGameWord(container);
        } else {
          btn.classList.add('wrong');
          SoundEngine.playErrorSound();
          fb.innerHTML = `
            <div style="color: var(--status-error); font-size: 0.88rem; font-weight: 600; margin-top: 10px;">
              No es esa palabra. Intenta de nuevo con otra opcion.
            </div>
          `;
          setTimeout(() => btn.classList.remove('wrong'), 800);
        }
      };
    });
  }

  // MINIJUEGO 2: Memoria del Territorio
  function renderGameMemory(container) {
    const pairs = (MINIGAMES_DATA && MINIGAMES_DATA.territoryMemory) || [];
    // Crear cartas duplicadas (una con texto Iku, otra con Español)
    let cards = [];
    pairs.slice(0, 6).forEach((p) => {
      cards.push({ id: p.id, label: p.iku, type: 'iku', matchId: p.id });
      cards.push({ id: p.id + '-es', label: p.es, type: 'es', matchId: p.id });
    });
    cards = cards.sort(() => Math.random() - 0.5);

    let firstSelected = null;
    let lockBoard = false;
    let matchedCount = 0;

    container.innerHTML = `
      <div style="text-align: center; max-width: 640px; margin: 0 auto;">
        <span class="hero-tag" style="background: var(--primary-soft); color: var(--primary-forest); margin-bottom: 12px;">
          Memoria del Territorio
        </span>
        <p style="font-size: 0.92rem; color: var(--text-muted); margin-bottom: 20px;">
          Empareja cada termino en Iku con su significado en Español.
        </p>
        <div class="memory-board-grid" id="memoryGridSlot">
          ${cards.map((c, i) => `
            <div class="memory-card" data-card-idx="${i}" data-match-id="${c.matchId}">
              <span class="card-inner-text" style="display: none;">${escapeHTML(c.label)}</span>
              <span class="card-cover-icon">${getSVGIcon('rombo')}</span>
            </div>
          `).join('')}
        </div>
        <div id="memoryGameFeedback" style="margin-top: 18px;"></div>
      </div>
    `;

    const cardEls = container.querySelectorAll('.memory-card');
    cardEls.forEach((cardEl) => {
      cardEl.onclick = () => {
        if (lockBoard) return;
        if (cardEl.classList.contains('flipped') || cardEl.classList.contains('matched')) return;

        SoundEngine.playClickSound();
        cardEl.classList.add('flipped');
        cardEl.querySelector('.card-inner-text').style.display = 'block';
        cardEl.querySelector('.card-cover-icon').style.display = 'none';

        if (!firstSelected) {
          firstSelected = cardEl;
        } else {
          // Evaluar pareja
          if (firstSelected.dataset.matchId === cardEl.dataset.matchId) {
            SoundEngine.playSuccessSound();
            firstSelected.classList.add('matched');
            cardEl.classList.add('matched');
            firstSelected = null;
            matchedCount++;

            if (matchedCount === 6) {
              setSemillitaHappy();
              launchCelebrationConfetti();
              $('memoryGameFeedback').innerHTML = `
                <div style="background: var(--status-success-bg); color: var(--status-success); border-radius: var(--radius-md); padding: 14px; font-weight: 700;">
                  ¡Completaste todas las parejas del territorio!
                </div>
                <button class="btn-primary" id="btnRestartMemory" style="margin-top: 12px;">Volver a Jugar</button>
              `;
              const btnRes = $('btnRestartMemory');
              if (btnRes) btnRes.onclick = () => renderGameMemory(container);
            }
          } else {
            lockBoard = true;
            SoundEngine.playErrorSound();
            setTimeout(() => {
              firstSelected.classList.remove('flipped');
              firstSelected.querySelector('.card-inner-text').style.display = 'none';
              firstSelected.querySelector('.card-cover-icon').style.display = 'block';

              cardEl.classList.remove('flipped');
              cardEl.querySelector('.card-inner-text').style.display = 'none';
              cardEl.querySelector('.card-cover-icon').style.display = 'block';

              firstSelected = null;
              lockBoard = false;
            }, 900);
          }
        }
      };
    });
  }

  // MINIJUEGO 3: Tejiendo Frases
  function renderGameFrases(container) {
    const exercises = (MINIGAMES_DATA && MINIGAMES_DATA.sentenceWeaving) || [];
    const item = exercises[Math.floor(Math.random() * exercises.length)] || exercises[0];

    let availableTokens = [...item.tokens].sort(() => Math.random() - 0.5);
    let chosenTokens = [];

    function updateWeaveUI() {
      container.innerHTML = `
        <div class="sentence-weaving-wrap">
          <span class="hero-tag" style="background: var(--primary-soft); color: var(--primary-forest); margin-bottom: 12px;">
            Tejiendo Frases
          </span>
          <h3 style="font-size: 1.15rem; font-weight: 800; margin-bottom: 6px;">
            ${escapeHTML(item.theme)}
          </h3>
          <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 16px;">
            Traduccion deseada: "<em>${escapeHTML(item.translation)}</em>"
          </p>

          <strong style="font-size: 0.82rem; color: var(--text-muted); display: block; margin-bottom: 6px;">Tu frase tejida:</strong>
          <div class="tokens-slot-area" id="slotAreaWeave">
            ${chosenTokens.map((t, idx) => `
              <span class="word-token-chip" data-remove-token="${idx}">${escapeHTML(t)}</span>
            `).join('')}
            ${chosenTokens.length === 0 ? '<span style="color: #9AAEA4; font-size: 0.84rem;">Toca las fichas de abajo para tejer la expresion...</span>' : ''}
          </div>

          <strong style="font-size: 0.82rem; color: var(--text-muted); display: block; margin-bottom: 6px;">Fichas disponibles:</strong>
          <div style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 24px;">
            ${availableTokens.map((t, idx) => `
              <button class="word-token-chip" data-pick-token="${idx}">${escapeHTML(t)}</button>
            `).join('')}
          </div>

          <div style="display: flex; gap: 12px;">
            <button class="btn-forest" id="btnVerifyWeave">Comprobar Tejido</button>
            <button class="btn-secondary" id="btnResetWeave">Reiniciar Frase</button>
          </div>
          <div id="weaveFeedback" style="margin-top: 16px;"></div>
        </div>
      `;

      // Seleccionar ficha
      container.querySelectorAll('[data-pick-token]').forEach((btn) => {
        btn.onclick = () => {
          const idx = Number(btn.dataset.pickToken);
          const picked = availableTokens.splice(idx, 1)[0];
          chosenTokens.push(picked);
          SoundEngine.playClickSound();
          updateWeaveUI();
        };
      });

      // Quitar ficha
      container.querySelectorAll('[data-remove-token]').forEach((chip) => {
        chip.onclick = () => {
          const idx = Number(chip.dataset.removeToken);
          const removed = chosenTokens.splice(idx, 1)[0];
          availableTokens.push(removed);
          SoundEngine.playClickSound();
          updateWeaveUI();
        };
      });

      const btnReset = $('btnResetWeave');
      if (btnReset) {
        btnReset.onclick = () => {
          availableTokens = [...item.tokens].sort(() => Math.random() - 0.5);
          chosenTokens = [];
          updateWeaveUI();
        };
      }

      const btnVerify = $('btnVerifyWeave');
      if (btnVerify) {
        btnVerify.onclick = () => {
          const fb = $('weaveFeedback');
          const isCorrect = chosenTokens.join(' ') === item.correctOrder.join(' ');
          if (isCorrect) {
            SoundEngine.playSuccessSound();
            setSemillitaHappy();
            fb.innerHTML = `
              <div style="background: var(--status-success-bg); color: var(--status-success); border-radius: var(--radius-md); padding: 14px; font-weight: 700;">
                ¡Frase tejida con armonia!
                <p style="font-size: 0.82rem; font-weight: 500; margin-top: 4px;">${escapeHTML(item.explanation)}</p>
              </div>
              <button class="btn-primary" id="btnNextSentence" style="margin-top: 12px;">Siguiente Frase</button>
            `;
            const btnNext = $('btnNextSentence');
            if (btnNext) btnNext.onclick = () => renderGameFrases(container);
          } else {
            SoundEngine.playErrorSound();
            fb.innerHTML = `
              <div style="color: var(--status-error); font-size: 0.88rem; font-weight: 600; margin-top: 6px;">
                El orden de las palabras aun no esta equilibrado. Prueba mover las fichas.
              </div>
            `;
          }
        };
      }
    }

    updateWeaveUI();
  }

  // MINIJUEGO 4: Saberes de la Sierra (Trivia)
  function renderGameTrivia(container) {
    const list = (MINIGAMES_DATA && MINIGAMES_DATA.sierraTrivia) || [];
    const item = list[Math.floor(Math.random() * list.length)] || list[0];

    container.innerHTML = `
      <div class="trivia-question-box">
        <span class="hero-tag" style="background: var(--primary-soft); color: var(--primary-forest); margin-bottom: 12px;">
          Saberes de la Sierra
        </span>
        <div class="trivia-question-title">
          ${escapeHTML(item.question)}
        </div>
        <div class="trivia-options-list">
          ${item.options.map((opt, i) => `
            <button class="trivia-option-btn" data-trivia-idx="${i}">
              ${escapeHTML(opt)}
            </button>
          `).join('')}
        </div>
        <div id="triviaFeedback"></div>
      </div>
    `;

    container.querySelectorAll('[data-trivia-idx]').forEach((btn) => {
      btn.onclick = () => {
        const idx = Number(btn.dataset.triviaIdx);
        const fb = $('triviaFeedback');

        if (idx === item.correct) {
          btn.classList.add('correct');
          SoundEngine.playSuccessSound();
          setSemillitaHappy();
          fb.innerHTML = `
            <div style="background: var(--status-success-bg); color: var(--status-success); border-radius: var(--radius-md); padding: 14px; font-weight: 700; margin-top: 14px;">
              ¡Respuesta sabia!
              <p style="font-size: 0.84rem; font-weight: 500; margin-top: 4px;">${escapeHTML(item.curiosity)}</p>
            </div>
            <button class="btn-primary" id="btnNextTrivia" style="margin-top: 12px;">Siguiente Pregunta</button>
          `;
          const btnNext = $('btnNextTrivia');
          if (btnNext) btnNext.onclick = () => renderGameTrivia(container);
        } else {
          btn.classList.add('wrong');
          SoundEngine.playErrorSound();
          fb.innerHTML = `
            <div style="color: var(--status-error); font-size: 0.88rem; font-weight: 600; margin-top: 8px;">
              Respuesta incorrecta. Reflexiona y elige otra alternativa.
            </div>
          `;
          setTimeout(() => btn.classList.remove('wrong'), 800);
        }
      };
    });
  }

  /**
   * ==========================================================================
   * 8. VISTA 4: DICCIONARIO BILINGUE Y CONTRASTE DE SABERES
   * ==========================================================================
   */
  function renderLexiconView() {
    const container = $('lexiconGridContainer');
    if (!container) return;

    const searchInput = $('lexiconSearchInput');
    const query = searchInput ? searchInput.value.trim().toLowerCase() : '';

    const combinedWords = [
      ...BILINGUAL_LEXICON,
      ...(state.customWords || []).map((w) => ({
        iku: w.iku,
        es: w.es,
        phonetic: w.phonetic || w.iku,
        meaning: w.culturalContext || 'Vocablo registrado en el taller comunitario',
        category: 'Comunidad'
      }))
    ];

    const filtered = combinedWords.filter((w) => {
      if (!query) return true;
      return (
        w.iku.toLowerCase().includes(query) ||
        w.es.toLowerCase().includes(query) ||
        (w.meaning && w.meaning.toLowerCase().includes(query))
      );
    });

    if (filtered.length === 0) {
      container.innerHTML = `
        <div style="grid-column: 1 / -1; text-align: center; padding: 24px; color: var(--text-muted);">
          No se encontraron vocablos con el criterio "${escapeHTML(query)}".
        </div>
      `;
      return;
    }

    container.innerHTML = filtered.map((w) => `
      <article class="lexicon-card">
        <div>
          <div class="lexicon-word-row">
            <div>
              <div class="iku-term-title">${escapeHTML(w.iku)}</div>
              <div class="es-term-sub">${escapeHTML(w.es)}</div>
            </div>
            <button class="btn-secondary btn-sm" data-speak-term="${escapeHTML(w.iku)}" aria-label="Escuchar pronunciacion">
              <span class="svg-icon" style="width: 14px; height: 14px;">${getSVGIcon('audio')}</span>
            </button>
          </div>
          <p style="font-size: 0.84rem; color: var(--text-muted); margin-top: 8px; line-height: 1.4;">
            ${escapeHTML(w.meaning)}
          </p>
        </div>
        <div style="font-size: 0.76rem; color: var(--primary-forest); font-weight: 700; border-top: 1px dashed var(--border-light); padding-top: 6px;">
          Fonetica: ${escapeHTML(w.phonetic || w.iku)}
        </div>
      </article>
    `).join('');

    // Escuchar pronunciacion
    container.querySelectorAll('[data-speak-term]').forEach((btn) => {
      btn.onclick = () => {
        SoundEngine.playSpeechSynthesis(btn.dataset.speakTerm);
      };
    });

    if (searchInput && !searchInput.dataset.bound) {
      searchInput.dataset.bound = 'true';
      searchInput.oninput = () => renderLexiconView();
    }
  }

  function renderContrastView() {
    const container = $('contrastCardsContainer');
    if (!container) return;

    container.innerHTML = KNOWLEDGE_CONTRASTS.map((c) => {
      const savedNote = (state.reflections && state.reflections[c.id]) || '';

      return `
        <article class="contrast-card-box">
          <div style="display: flex; align-items: center; gap: 10px; margin-bottom: 12px;">
            <div style="width: 36px; height: 36px; background: var(--primary-soft); border-radius: var(--radius-sm); display: flex; align-items: center; justify-content: center; color: var(--primary-forest);">
              ${getSVGIcon(c.iconKey || 'diccionario')}
            </div>
            <div>
              <h4 style="font-size: 1.1rem; font-weight: 800; color: var(--text-main);">${escapeHTML(c.concept)}</h4>
              <span style="font-size: 0.78rem; color: var(--accent-earth); font-weight: 700;">${escapeHTML(c.stageRef)}</span>
            </div>
          </div>

          <div class="contrast-split-grid">
            <div class="contrast-column occidental">
              <strong style="display: block; font-size: 0.86rem; margin-bottom: 4px; color: #4B5563;">
                ${escapeHTML(c.urbanView.title)}
              </strong>
              <p style="margin: 0; line-height: 1.45;">${escapeHTML(c.urbanView.description)}</p>
            </div>
            <div class="contrast-column arhuaco">
              <strong style="display: block; font-size: 0.86rem; margin-bottom: 4px; color: var(--primary-forest);">
                ${escapeHTML(c.ikuView.title)}
              </strong>
              <p style="margin: 0; line-height: 1.45; font-weight: 600;">${escapeHTML(c.ikuView.description)}</p>
            </div>
          </div>

          <div style="margin-top: 14px; background: var(--bg-canvas); padding: 12px; border-radius: var(--radius-md);">
            <strong style="font-size: 0.84rem; color: var(--primary-forest);">Pregunta para la reflexion etica:</strong>
            <p style="font-size: 0.86rem; color: var(--text-main); margin: 4px 0 10px;">${escapeHTML(c.reflectionQuestion)}</p>
            <div style="display: flex; gap: 8px;">
              <input type="text"
                     class="search-input-field"
                     style="font-size: 0.84rem; padding: 8px 12px;"
                     placeholder="Tu reflexion personal se guarda solo en este navegador..."
                     data-reflection-id="${c.id}"
                     value="${escapeHTML(savedNote)}">
              <button class="btn-secondary btn-sm" data-save-reflection="${c.id}">
                Guardar
              </button>
            </div>
          </div>
        </article>
      `;
    }).join('');

    container.querySelectorAll('[data-save-reflection]').forEach((btn) => {
      btn.onclick = () => {
        const id = btn.dataset.saveReflection;
        const input = container.querySelector(`[data-reflection-id="${id}"]`);
        if (input) {
          if (!state.reflections) state.reflections = {};
          state.reflections[id] = input.value.trim();
          StateManager.save(state, state.profileRole);
          showToast('Reflexion guardada en memoria local');
        }
      };
    });
  }

  /**
   * ==========================================================================
   * 9. VISTA 5: ALBUM, PERFIL Y SOBERANIA DE DATOS (HABEAS DATA)
   * ==========================================================================
   */
  function renderProfileView() {
    renderBadgesGallery();
    renderCustomWordsList();
    setupHabeasDataEvents();
  }

  function renderBadgesGallery() {
    const container = $('badgesGalleryContainer');
    if (!container) return;

    checkAndUnlockBadges();
    const badges = ALBUM_BADGES_DATA || [];

    container.innerHTML = badges.map((b) => {
      const isUnlocked = (state.completedBadges || []).includes(`badge-stage-${b.stageRequired}`);

      return `
        <div class="badge-card ${isUnlocked ? 'unlocked' : ''}">
          <div class="badge-icon-disc">
            ${getSVGIcon(b.iconKey || 'medalla')}
          </div>
          <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-main); margin-bottom: 4px;">
            ${escapeHTML(b.title)}
          </h4>
          <p style="font-size: 0.78rem; color: var(--text-muted); line-height: 1.35; margin-bottom: 8px;">
            ${escapeHTML(b.desc)}
          </p>
          <div style="font-size: 0.74rem; font-style: italic; color: var(--accent-earth); font-weight: 600;">
            "${escapeHTML(b.quote)}"
          </div>
          <div style="margin-top: 10px;">
            <span class="hero-tag" style="background: ${isUnlocked ? 'var(--status-gold-bg)' : '#E8ECE8'}; color: ${isUnlocked ? 'var(--status-gold)' : '#7C8C82'};">
              ${isUnlocked ? 'Desbloqueada' : `Piso ${b.stageRequired}`}
            </span>
          </div>
        </div>
      `;
    }).join('');
  }

  function setupWorkshopEvents() {
    const form = $('communityWordForm');
    const btnRecord = $('btnRecordAudio');
    const btnStop = $('btnStopAudio');
    const statusText = $('recordingStatusText');
    const previewSlot = $('audioPreviewSlot');

    if (btnRecord) {
      btnRecord.onclick = async () => {
        try {
          activeAudioRecorder = new NativeAudioRecorder();
          await activeAudioRecorder.start();
          btnRecord.style.display = 'none';
          if (btnStop) btnStop.style.display = 'inline-flex';
          if (statusText) statusText.textContent = 'Grabando voz...';
        } catch (e) {
          showToast('Permiso de microfono no concedido o no disponible.');
        }
      };
    }

    if (btnStop) {
      btnStop.onclick = async () => {
        if (!activeAudioRecorder) return;
        recordedAudioBlob = await activeAudioRecorder.stop();
        if (btnRecord) btnRecord.style.display = 'inline-flex';
        btnStop.style.display = 'none';
        if (statusText) statusText.textContent = 'Audio listo para guardar';

        if (previewSlot && recordedAudioBlob) {
          const url = URL.createObjectURL(recordedAudioBlob);
          previewSlot.innerHTML = `<audio controls src="${url}" style="width: 100%; margin-top: 8px;"></audio>`;
        }
      };
    }

    if (form) {
      form.onsubmit = async (e) => {
        e.preventDefault();
        const fd = new FormData(form);
        const es = fd.get('wordEs').trim();
        const iku = fd.get('wordIku').trim();
        const authorizer = fd.get('wordAuthorizer').trim();

        if (!es || !iku || !authorizer) {
          showToast('Por favor completa los campos requeridos (*)');
          return;
        }

        const newId = `custom-word-${Date.now()}`;

        if (recordedAudioBlob) {
          await AudioVaultDB.saveAudio({
            id: newId,
            blob: recordedAudioBlob,
            ikuText: iku,
            speaker: authorizer,
            date: new Date().toISOString()
          });
          recordedAudioBlob = null;
          if (previewSlot) previewSlot.innerHTML = '';
        }

        if (!state.customWords) state.customWords = [];
        state.customWords.push({
          id: newId,
          es,
          iku,
          phonetic: fd.get('wordPhonetic').trim(),
          authorizer,
          culturalContext: fd.get('wordContext').trim()
        });

        StateManager.save(state, state.profileRole);
        form.reset();
        renderCustomWordsList();
        renderHomeView();
        showToast('Termino y audio guardados en memoria local.');
      };
    }
  }

  function renderCustomWordsList() {
    const listEl = $('customWordsList');
    if (!listEl) return;

    const words = state.customWords || [];
    if (words.length === 0) {
      listEl.innerHTML = '<p style="font-size: 0.84rem; color: var(--text-muted);">Aun no se han registrado terminos comunitarios.</p>';
      return;
    }

    listEl.innerHTML = words.map((w, idx) => `
      <div style="background: var(--bg-card); border: 1px solid var(--border-light); border-radius: var(--radius-sm); padding: 10px 14px; margin-bottom: 8px; display: flex; justify-content: space-between; align-items: center;">
        <div>
          <strong>${escapeHTML(w.es)} / ${escapeHTML(w.iku)}</strong>
          <div style="font-size: 0.76rem; color: var(--text-muted);">Autorizado por: ${escapeHTML(w.authorizer)}</div>
        </div>
        <button class="btn-secondary btn-sm" data-delete-word="${idx}" style="color: var(--status-error);">
          ${getSVGIcon('borrar')}
        </button>
      </div>
    `).join('');

    listEl.querySelectorAll('[data-delete-word]').forEach((btn) => {
      btn.onclick = () => {
        const idx = Number(btn.dataset.deleteWord);
        state.customWords.splice(idx, 1);
        StateManager.save(state, state.profileRole);
        renderCustomWordsList();
        renderHomeView();
        showToast('Registro eliminado');
      };
    });
  }

  function setupHabeasDataEvents() {
    const btnExport = $('btnExportDataJSON');
    if (btnExport) {
      btnExport.onclick = async () => {
        await DataSovereigntyHub.exportAllData(state);
        showToast('Archivo JSON de datos exportado a tus descargas.');
      };
    }

    const btnWipe = $('btnWipeAllLocalData');
    if (btnWipe) {
      btnWipe.onclick = async () => {
        const confirmWipe = confirm(
          'ADVERTENCIA DE HABEAS DATA Y SOBERANIA DIGITAL:\n\nEsta accion eliminara TODOS tus progresos, insignias, reflexiones y audios en este navegador.\n\n¿Deseas continuar?'
        );
        if (confirmWipe) {
          await DataSovereigntyHub.wipeAllData();
          alert('Todos tus datos han sido purgados de este dispositivo.');
          window.location.reload();
        }
      };
    }
  }

  /**
   * ==========================================================================
   * 10. ACCESIBILIDAD, SONIDO Y TOPBAR
   * ==========================================================================
   */
  function setupTopBarEvents() {
    const btnSound = $('btnToggleSound');
    if (btnSound) {
      btnSound.onclick = () => {
        SoundEngine.toggleMute();
        updateSoundToggleUI();
        showToast(SoundEngine.isMuted ? 'Sonidos silenciados' : 'Sonidos activados');
      };
    }

    const btnEasy = $('btnToggleEasyReading');
    if (btnEasy) {
      btnEasy.onclick = () => {
        state.easyReading = !state.easyReading;
        StateManager.save(state, state.profileRole);
        applyAccessibilityPreferences();
        showToast(state.easyReading ? 'Modo Lectura Facil activado' : 'Modo estandar');
      };
    }
  }

  function updateSoundToggleUI() {
    const iconSlot = $('soundToggleIcon');
    if (!iconSlot) return;
    iconSlot.innerHTML = SoundEngine.isMuted ? getSVGIcon('volumen_off') : getSVGIcon('volumen_on');
    const btn = $('btnToggleSound');
    if (btn) btn.classList.toggle('active', !SoundEngine.isMuted);
  }

  function applyAccessibilityPreferences() {
    document.body.classList.toggle('easy-reading', !!state.easyReading);
    const btn = $('btnToggleEasyReading');
    if (btn) btn.classList.toggle('active', !!state.easyReading);
  }

  function updatePointsDisplay() {
    const pts = $('topBarPoints');
    if (pts) pts.textContent = state.points || 0;
    const str = $('topBarStreak');
    if (str) str.textContent = state.streakDays || 1;
  }

  /**
   * ==========================================================================
   * 11. MODAL Y NOTIFICACIONES
   * ==========================================================================
   */
  function openModal(htmlContent) {
    const overlay = $('globalAppModal');
    const panel = $('globalModalPanel');
    if (!overlay || !panel) return;

    panel.innerHTML = htmlContent;
    overlay.classList.add('active');
    document.body.style.overflow = 'hidden';

    const closeBtn = $('modalCloseX');
    if (closeBtn) {
      closeBtn.onclick = closeModal;
    }

    overlay.onclick = (e) => {
      if (e.target === overlay) closeModal();
    };
  }

  function closeModal() {
    const overlay = $('globalAppModal');
    if (overlay) overlay.classList.remove('active');
    document.body.style.overflow = '';
    currentActiveLevel = null;
  }

  function showToast(message) {
    let toast = $('appToastNotice');
    if (!toast) return;

    toast.textContent = message;
    toast.classList.add('visible');

    clearTimeout(toastTimer);
    toastTimer = setTimeout(() => {
      toast.classList.remove('visible');
    }, 3200);
  }

  function escapeHTML(str) {
    return String(str || '').replace(/[&<>"']/g, (c) => ({
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;'
    }[c]));
  }

  /**
   * Motor de Confeti y Particulas de la Sierra Nevada
   */
  function launchCelebrationConfetti() {
    const canvas = $('celebrationCanvas');
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const particles = [];
    const colors = ['#27765B', '#4CAF68', '#D99B38', '#8C5A32', '#F7F5EE', '#73D98A'];

    for (let i = 0; i < 48; i++) {
      particles.push({
        x: canvas.width * 0.5 + (Math.random() - 0.5) * 160,
        y: canvas.height * 0.45 + (Math.random() - 0.5) * 80,
        vx: (Math.random() - 0.5) * 10,
        vy: -Math.random() * 10 - 3,
        size: Math.random() * 8 + 4,
        color: colors[Math.floor(Math.random() * colors.length)],
        rotation: Math.random() * 360,
        rotSpeed: (Math.random() - 0.5) * 6,
        life: 1
      });
    }

    let animationFrame;
    const startTime = performance.now();

    function render(now) {
      const elapsed = (now - startTime) / 1000;
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      let alive = false;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.vy += 0.3;
        p.rotation += p.rotSpeed;
        p.life -= 0.016;

        if (p.life > 0) {
          alive = true;
          ctx.save();
          ctx.globalAlpha = Math.max(0, p.life);
          ctx.translate(p.x, p.y);
          ctx.rotate((p.rotation * Math.PI) / 180);
          ctx.fillStyle = p.color;

          // Dibujar forma de rombo arhuaco
          ctx.beginPath();
          ctx.moveTo(0, -p.size);
          ctx.lineTo(p.size * 0.65, 0);
          ctx.lineTo(0, p.size);
          ctx.lineTo(-p.size * 0.65, 0);
          ctx.closePath();
          ctx.fill();

          ctx.restore();
        }
      });

      if (alive && elapsed < 2.0) {
        animationFrame = requestAnimationFrame(render);
      } else {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        cancelAnimationFrame(animationFrame);
      }
    }

    animationFrame = requestAnimationFrame(render);
  }

  // Inicializar aplicacion al cargar el DOM
  document.addEventListener('DOMContentLoaded', initApp);
})();
