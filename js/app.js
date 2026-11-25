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
        .semillita-body { animation: semBob 3s ease-in-out infinite; transform-origin: center bottom; }
        .semillita-eye { transform-box: fill-box; transform-origin: center; animation: semBlink 4.5s ease-in-out infinite; }
        .semillita-leaf { transform-origin: 52px 38px; animation: semLeafSway 3.6s ease-in-out infinite; }
        @keyframes semBob { 0%, 100% { transform: translateY(0); } 50% { transform: translateY(-7px); } }
        @keyframes semBlink { 0%, 92%, 100% { transform: scaleY(1); } 96% { transform: scaleY(0.1); } }
        @keyframes semLeafSway { 0%, 100% { transform: rotate(-3deg); } 50% { transform: rotate(5deg); } }
        .semillita--happy .semillita-body { animation: semHappyJump 0.6s ease-in-out 3; }
        .semillita--happy .semillita-eye { animation: none; }
        .semillita--happy .eye-normal { display: none; }
        .semillita--happy .eye-happy { display: block !important; }
        .semillita--happy .mouth-normal { display: none; }
        .semillita--happy .mouth-happy { display: block !important; }
        @keyframes semHappyJump { 0%, 100% { transform: translateY(0) scale(1); } 40% { transform: translateY(-14px) scale(1.05, 0.95); } 70% { transform: translateY(2px) scale(0.97, 1.03); } }
        .semillita--thinking .semillita-body { animation: semThinkTilt 2.2s ease-in-out infinite; }
        .semillita--thinking .semillita-leaf { animation: semThinkLeaf 1.2s ease-in-out infinite; }
        @keyframes semThinkTilt { 0%, 100% { transform: rotate(0deg) translateY(0); } 50% { transform: rotate(5deg) translateY(-4px); } }
        @keyframes semThinkLeaf { 0%, 100% { transform: rotate(8deg); } 50% { transform: rotate(-6deg); } }
      </style>
    </defs>
    <g class="semillita-body">
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
      'navIcon-misiones': 'misiones',
      'navIcon-diccionario': 'diccionario',
      'navIcon-album': 'album',
      'navIcon-perfil': 'perfil',

      // Bottom nav mobile
      'mobIcon-inicio': 'inicio',
      'mobIcon-ruta': 'ruta',
      'mobIcon-juegos': 'juegos',
      'mobIcon-misiones': 'misiones',
      'mobIcon-diccionario': 'diccionario',
      'mobIcon-album': 'album',
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
    if (wrap && !wrap.querySelector('svg')) wrap.innerHTML = SEMILLITA_SVG_STRING;

    const thumb = $('bubbleMascotThumb');
    if (thumb && !thumb.querySelector('svg')) thumb.innerHTML = SEMILLITA_SVG_STRING;
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
      misiones: $('viewMisiones'),
      diccionario: $('viewDiccionario'),
      album: $('viewAlbum'),
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
      case 'misiones':
        renderMissionsView();
        break;
      case 'diccionario':
        if (!state.exploredDictionary) {
          state.exploredDictionary = true;
          StateManager.save(state, state.profileRole);
          checkAndUnlockBadges();
        }
        renderLexiconView();
        renderContrastView();
        break;
      case 'album':
        renderAlbumView();
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
    checkAndUnlockBadges(true);
    const badgesEl = $('homeCompletedBadges');
    if (badgesEl) {
      badgesEl.textContent = `${(state.completedBadges || []).length} / ${(ALBUM_BADGES_DATA || []).length || 10}`;
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
   * 5. VISTA 2: RUTA EN PAISAJE VERTICAL CONTINUO (6 PISOS CONECTADOS)
   * ==========================================================================
   */
  function getStageSilhouetteSVG(stageId) {
    if (stageId === 1) {
      return `<svg class="stage-bg-silhouette" viewBox="0 0 800 240" preserveAspectRatio="none" aria-hidden="true">
        <path d="M 0 160 Q 100 140 200 160 T 400 160 T 600 160 T 800 160 L 800 240 L 0 240 Z" fill="#1B5E43" />
        <path d="M 0 185 Q 120 165 240 185 T 480 185 T 720 185 T 800 185 L 800 240 L 0 240 Z" fill="#2B7A78" />
        <path d="M 90 190 L 96 140 M 96 140 Q 75 125 60 135 M 96 140 Q 90 120 96 110 M 96 140 Q 115 125 130 135" stroke="#1B5E43" stroke-width="3" fill="none" stroke-linecap="round" />
        <path d="M 710 195 L 716 145 M 716 145 Q 695 130 680 140 M 716 145 Q 710 125 716 115 M 716 145 Q 735 130 750 140" stroke="#1B5E43" stroke-width="3" fill="none" stroke-linecap="round" />
      </svg>`;
    }
    if (stageId === 2) {
      return `<svg class="stage-bg-silhouette" viewBox="0 0 800 240" preserveAspectRatio="none" aria-hidden="true">
        <path d="M 120 0 L 150 240 M 135 0 L 165 240 M 150 0 L 180 240" stroke="#2B7A78" stroke-width="4" stroke-dasharray="12 8" fill="none" />
        <path d="M 0 210 Q 150 180 300 210 T 600 210 T 800 210 L 800 240 L 0 240 Z" fill="#1E5641" />
        <path d="M 680 230 C 650 170 730 140 760 190 Z" fill="#27765B" />
        <path d="M 60 230 C 30 170 110 140 140 190 Z" fill="#27765B" />
      </svg>`;
    }
    if (stageId === 3) {
      return `<svg class="stage-bg-silhouette" viewBox="0 0 800 240" preserveAspectRatio="none" aria-hidden="true">
        <path d="M 0 140 L 200 100 L 400 130 L 600 90 L 800 120 L 800 240 L 0 240 Z" fill="#1E5641" />
        <path d="M 80 170 H 260 M 120 190 H 320 M 160 210 H 380" stroke="#8C5A32" stroke-width="3" stroke-linecap="round" />
        <path d="M 520 80 Q 550 65 580 80 Q 610 65 640 80 H 520 Z" fill="#FFFFFF" />
      </svg>`;
    }
    if (stageId === 4) {
      return `<svg class="stage-bg-silhouette" viewBox="0 0 800 240" preserveAspectRatio="none" aria-hidden="true">
        <g stroke="#D99B38" stroke-width="2.5" fill="none">
          <polygon points="100,60 130,90 100,120 70,90" />
          <polygon points="100,72 118,90 100,108 82,90" />
          <polygon points="700,60 730,90 700,120 670,90" />
          <polygon points="700,72 718,90 700,108 682,90" />
        </g>
        <path d="M 360 220 C 360 170 440 170 440 220 Z" fill="#8C5A32" />
      </svg>`;
    }
    if (stageId === 5) {
      return `<svg class="stage-bg-silhouette" viewBox="0 0 800 240" preserveAspectRatio="none" aria-hidden="true">
        <ellipse cx="400" cy="200" rx="180" ry="26" fill="#2B7A78" />
        <g stroke="#1E5641" stroke-width="2.5" fill="#4B6354">
          <path d="M 120 220 L 120 160 M 120 160 Q 100 145 90 155 M 120 160 Q 120 135 120 130 M 120 160 Q 140 145 150 155" />
          <path d="M 680 220 L 680 150 M 680 150 Q 660 135 650 145 M 680 150 Q 680 125 680 120 M 680 150 Q 700 135 710 145" />
        </g>
      </svg>`;
    }
    return `<svg class="stage-bg-silhouette" viewBox="0 0 800 240" preserveAspectRatio="none" aria-hidden="true">
      <polygon points="260,240 400,60 540,240" fill="#E2EDF5" />
      <polygon points="340,110 400,60 460,110 430,130 400,115 370,130" fill="#FFFFFF" />
      <polygon points="120,240 240,90 360,240" fill="#D3E4EE" />
      <polygon points="190,130 240,90 290,130 265,145 240,135 215,145" fill="#FFFFFF" />
      <circle cx="400" cy="45" r="24" fill="#D99B38" />
    </svg>`;
  }

  function renderRouteView() {
    const container = $('routeStagesContainer');
    if (!container) return;

    let html = '<div class="route-continuous-canvas" id="routeContinuousCanvas">';

    TERRITORIAL_STAGES.forEach((stage, sIdx) => {
      const stageLevels = stage.levels || [];
      const completedCount = stageLevels.filter((l) => state.completedLevels.includes(l.id)).length;
      const stageTitle = stage.name || stage.titleEs || 'Territorio Sagrado';
      const stageEco = stage.ecosystem || stage.biomeDescription || '';

      html += `
        <section class="piso-section piso-stage-${stage.id}" id="stage-section-${stage.id}" data-stage="${stage.id}">
          ${getStageSilhouetteSVG(stage.id)}

          <div class="piso-header-seamless">
            <div class="piso-title-wrap">
              <div class="piso-badge">
                ${getSVGIcon(stage.iconKey || 'ruta')}
              </div>
              <div>
                <h3 class="piso-full-title">Piso ${stage.id}: ${escapeHTML(stageTitle)}</h3>
                <span class="piso-ecosystem-tag">${escapeHTML(stage.altitude || '')} · ${escapeHTML(stageEco)}</span>
              </div>
            </div>
            <div class="piso-progress-pill">
              ${completedCount} de ${stageLevels.length} pasos tejidos
            </div>
          </div>

          <div class="zigzag-loom-area">
            <svg class="zigzag-svg-threads" viewBox="0 0 800 160" preserveAspectRatio="none" aria-hidden="true">
              <path class="thread-line ${state.completedLevels.includes(`${stage.id}-1`) ? 'active' : ''}" d="M 100 80 L 300 102" />
              <path class="thread-line ${state.completedLevels.includes(`${stage.id}-2`) ? 'active' : ''}" d="M 300 102 L 500 80" />
              <path class="thread-line ${state.completedLevels.includes(`${stage.id}-3`) ? 'active' : ''}" d="M 500 80 L 700 102" />
            </svg>

            <div class="zigzag-nodes-grid">
              ${stageLevels.map((lvl, idx) => {
                const isCompleted = state.completedLevels.includes(lvl.id);
                const prevLevelId = idx > 0 ? stageLevels[idx - 1].id : (stage.id > 1 ? `${stage.id - 1}-4` : null);
                const isUnlocked = isCompleted || !prevLevelId || state.completedLevels.includes(prevLevelId);
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
                            type="button"
                            data-level-id="${lvl.id}"
                            data-locked="${!isUnlocked}"
                            data-prev-id="${prevLevelId || ''}"
                            aria-label="Nivel ${lvl.id}: ${escapeHTML(lvl.title)} (${isCompleted ? 'Completado' : isUnlocked ? 'Disponible' : 'Bloqueado'})">
                      <div class="diamond-inner-content">
                        ${iconContent}
                        <span class="diamond-level-num">${lvl.id}</span>
                      </div>
                    </button>
                    <span class="level-node-title">${escapeHTML(lvl.title)}</span>
                  </div>
                `;
              }).join('')}
            </div>
          </div>
        </section>
      `;

      // Conector puente SVG entre pisos consecutivos (1-4 -> 2-1 ... 5-4 -> 6-1)
      if (stage.id < 6) {
        const lastLevelOfStage = `${stage.id}-4`;
        const isBridgeActive = state.completedLevels.includes(lastLevelOfStage);
        const nextStage = TERRITORIAL_STAGES[sIdx + 1];
        const nextName = nextStage ? (nextStage.name || nextStage.titleEs) : '';
        const nextAlt = nextStage ? (nextStage.altitude || '') : '';

        html += `
          <div class="piso-bridge-connector" data-bridge="${stage.id}-${stage.id + 1}">
            <svg class="bridge-thread-svg" viewBox="0 0 800 70" preserveAspectRatio="none" aria-hidden="true">
              <path class="thread-bridge-line ${isBridgeActive ? 'active' : ''}" d="M 700 0 C 700 38, 100 32, 100 70" />
            </svg>
            <div class="altitude-divider-pill">
              <span>Ascenso a Piso ${stage.id + 1}: ${escapeHTML(nextName)} (${escapeHTML(nextAlt)})</span>
            </div>
          </div>
        `;
      }
    });

    html += '</div>';
    container.innerHTML = html;

    // Vincular clic real en TODOS los 24 botones de nivel (1-1 al 6-4)
    container.querySelectorAll('[data-level-id]').forEach((btn) => {
      btn.onclick = (e) => {
        e.preventDefault();
        e.stopPropagation();
        const levelId = btn.dataset.levelId;
        const isLocked = btn.dataset.locked === 'true';
        const prevId = btn.dataset.prevId;

        if (isLocked) {
          SoundEngine.playErrorSound();
          showToast(prevId
            ? `Completa primero el nivel ${prevId} para tejer este paso`
            : 'Completa primero el nivel anterior para tejer este paso');
          return;
        }

        SoundEngine.playClickSound();
        openTerritorialLevel(levelId);
      };
    });
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

    const syllablesList = Array.isArray(d.syllables)
      ? d.syllables
      : String(d.syllables || '').split(/[·/\s]+/).filter(Boolean);

    return `
      <div class="modal-header">
        <div>
          <span class="hero-tag" style="background: var(--primary-soft); color: var(--primary-forest);">
            Fase 1 · Descubrimiento y Andamiaje
          </span>
          <h3 style="font-size: 1.15rem; font-weight: 800; margin-top: 4px;">
            Nivel ${level.id} · ${escapeHTML(stage ? (stage.name || stage.titleEs) : 'Sierra Nevada')}
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
            ${syllablesList.map((s) => `<span class="syllable-chip">${escapeHTML(s)}</span>`).join('')}
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
      : (level.question || level.instruction || 'Completa este reto territorial:');

    // Renderizar segun los 4 tipos de mecanica de data-iku.js
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
      const caseContent = level.caseDescription || level.caseText || '';
      challengeBodyHTML = `
        <div style="background: var(--bg-canvas); border-left: 4px solid var(--accent-earth); padding: 14px; border-radius: var(--radius-sm); margin-bottom: 18px; font-size: 0.92rem; line-height: 1.5;">
          ${escapeHTML(caseContent)}
        </div>
        <div class="challenge-options-list">
          ${(level.options || []).map((opt, i) => `
            <button class="challenge-option-btn" data-option-index="${i}">
              ${escapeHTML(opt.text)}
            </button>
          `).join('')}
        </div>
      `;
    } else if (level.type === 'syntax-build') {
      challengeBodyHTML = `
        <div style="background: var(--primary-soft); border-radius: var(--radius-md); padding: 12px 16px; margin-bottom: 14px; font-size: 0.9rem; color: var(--primary-forest);">
          <strong>Sentido esperado:</strong> "${escapeHTML(level.targetMeaning || '')}"
        </div>
        <strong style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 6px;">Tu frase tejida:</strong>
        <div class="tokens-slot-area" id="challengeSyntaxSlot"></div>
        <strong style="font-size: 0.8rem; color: var(--text-muted); display: block; margin-bottom: 6px;">Bloques disponibles (toca para ordenar):</strong>
        <div id="challengeSyntaxPool" style="display: flex; gap: 10px; flex-wrap: wrap; margin-bottom: 18px;"></div>
        <div style="display: flex; gap: 10px; flex-wrap: wrap;">
          <button class="btn-forest" id="btnVerifyChallengeSyntax">Comprobar Tejido</button>
          <button class="btn-secondary btn-sm" id="btnResetChallengeSyntax">Reiniciar</button>
        </div>
      `;
    } else if (level.type === 'concept-match') {
      const pairs = level.pairs || [];
      const leftItems = pairs.map((p, i) => ({ text: p.left, i })).sort(() => Math.random() - 0.5);
      const rightItems = pairs.map((p, i) => ({ text: p.right, i })).sort(() => Math.random() - 0.5);

      challengeBodyHTML = `
        <div style="display: grid; grid-template-columns: 1fr 1fr; gap: 12px; margin-bottom: 14px;">
          <div id="challengeMatchLeftCol" style="display: flex; flex-direction: column; gap: 10px;">
            ${leftItems.map((item) => `
              <button class="challenge-option-btn" data-match-left="${item.i}" style="padding: 11px 14px; font-size: 0.86rem;">
                ${escapeHTML(item.text)}
              </button>
            `).join('')}
          </div>
          <div id="challengeMatchRightCol" style="display: flex; flex-direction: column; gap: 10px;">
            ${rightItems.map((item) => `
              <button class="challenge-option-btn" data-match-right="${item.i}" style="padding: 11px 14px; font-size: 0.86rem;">
                ${escapeHTML(item.text)}
              </button>
            `).join('')}
          </div>
        </div>
        <div id="challengeMatchCounter" style="font-size: 0.84rem; color: var(--text-muted); font-weight: 600;">
          Parejas armonizadas: 0 de ${pairs.length}
        </div>
      `;
    }

    const html = `
      <div class="modal-header">
        <div>
          <span class="hero-tag" style="background: var(--accent-ochre-light); color: var(--accent-ochre-dark);">
            Fase 2 · Reto de Aprendizaje (Nivel ${escapeHTML(level.id)})
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

    const btnBack = $('btnBackToStudy');
    if (btnBack) {
      btnBack.onclick = () => openTerritorialLevel(level.id);
    }

    const btnAudio = $('btnPlayChallengeAudio');
    if (btnAudio) {
      btnAudio.onclick = () => {
        const text = level.discovery ? level.discovery.ikuWord : level.title;
        SoundEngine.playSpeechSynthesis(text);
      };
    }

    if (level.type === 'syntax-build') {
      initSyntaxChallengeLogic(level);
    } else if (level.type === 'concept-match') {
      initMatchChallengeLogic(level);
    } else {
      initChallengeOptionsLogic(level);
    }
  }

  function initSyntaxChallengeLogic(level) {
    const tokensSource = (state.profileRole === 'comunidad' || !level.esTokens)
      ? level.ikuTokens
      : level.esTokens;
    const indexed = (tokensSource || []).map((text, idx) => ({ text, idx }));
    let pool = [...indexed].sort(() => Math.random() - 0.5);
    let chosen = [];

    const slotEl = $('challengeSyntaxSlot');
    const poolEl = $('challengeSyntaxPool');
    const hintBtn = $('btnRequestHint');

    function renderTokens() {
      if (!slotEl || !poolEl) return;
      slotEl.innerHTML = chosen.length === 0
        ? '<span style="color: #9AAEA4; font-size: 0.84rem;">Toca los bloques de abajo en orden...</span>'
        : chosen.map((item, pos) => `<span class="word-token-chip" data-remove-syn="${pos}">${escapeHTML(item.text)}</span>`).join('');

      poolEl.innerHTML = pool.map((item, pos) => `
        <button type="button" class="word-token-chip" data-pick-syn="${pos}">${escapeHTML(item.text)}</button>
      `).join('');

      poolEl.querySelectorAll('[data-pick-syn]').forEach((btn) => {
        btn.onclick = () => {
          const pos = Number(btn.dataset.pickSyn);
          chosen.push(pool.splice(pos, 1)[0]);
          SoundEngine.playClickSound();
          renderTokens();
        };
      });

      slotEl.querySelectorAll('[data-remove-syn]').forEach((chip) => {
        chip.onclick = () => {
          const pos = Number(chip.dataset.removeSyn);
          pool.push(chosen.splice(pos, 1)[0]);
          SoundEngine.playClickSound();
          renderTokens();
        };
      });
    }

    renderTokens();

    const btnReset = $('btnResetChallengeSyntax');
    if (btnReset) {
      btnReset.onclick = () => {
        pool = [...indexed].sort(() => Math.random() - 0.5);
        chosen = [];
        renderTokens();
      };
    }

    const btnVerify = $('btnVerifyChallengeSyntax');
    if (btnVerify) {
      btnVerify.onclick = () => {
        const expected = level.correctOrder || indexed.map((x) => x.idx);
        const isCorrect = chosen.length === expected.length && chosen.every((c, i) => c.idx === expected[i]);
        if (isCorrect) {
          SoundEngine.playSuccessSound();
          setSemillitaHappy();
          launchCelebrationConfetti();
          showChallengeFeedback(`¡Frase armonizada! ${level.culturalNote || ''}`, true);
          completeCurrentLevel(level);
        } else {
          SoundEngine.playErrorSound();
          showChallengeFeedback('El orden de los bloques aun no coincide. Revisa el sentido y vuelve a intentar.', false);
          if (hintBtn) {
            hintBtn.style.display = 'inline-flex';
            initHintSystem(level);
          }
        }
      };
    }
  }

  function initMatchChallengeLogic(level) {
    const leftBtns = $$('#challengeMatchLeftCol [data-match-left]');
    const rightBtns = $$('#challengeMatchRightCol [data-match-right]');
    const counterEl = $('challengeMatchCounter');
    const hintBtn = $('btnRequestHint');

    let selectedLeft = null;
    let matchedCount = 0;
    const total = (level.pairs || []).length;

    leftBtns.forEach((btn) => {
      btn.onclick = () => {
        leftBtns.forEach((b) => { if (!b.disabled) b.classList.remove('correct'); });
        selectedLeft = Number(btn.dataset.matchLeft);
        btn.classList.add('correct');
        SoundEngine.playClickSound();
      };
    });

    rightBtns.forEach((btn) => {
      btn.onclick = () => {
        if (selectedLeft === null) {
          showChallengeFeedback('Primero selecciona un concepto de la columna izquierda.', false);
          return;
        }
        const rightIdx = Number(btn.dataset.matchRight);
        if (selectedLeft === rightIdx) {
          const leftMatch = document.querySelector(`[data-match-left="${selectedLeft}"]`);
          if (leftMatch) {
            leftMatch.disabled = true;
            leftMatch.classList.add('correct');
          }
          btn.disabled = true;
          btn.classList.add('correct');
          selectedLeft = null;
          matchedCount++;
          SoundEngine.playSuccessSound();

          if (counterEl) counterEl.textContent = `Parejas armonizadas: ${matchedCount} de ${total}`;

          if (matchedCount === total) {
            setSemillitaHappy();
            launchCelebrationConfetti();
            showChallengeFeedback(`¡Emparejamiento completado! ${level.culturalNote || ''}`, true);
            completeCurrentLevel(level);
          }
        } else {
          btn.classList.add('wrong');
          SoundEngine.playErrorSound();
          showChallengeFeedback('Esa correspondencia no coincide. Intenta otra pareja.', false);
          if (hintBtn) {
            hintBtn.style.display = 'inline-flex';
            initHintSystem(level);
          }
          setTimeout(() => btn.classList.remove('wrong'), 900);
        }
      };
    });
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

  function checkAndUnlockBadges(silent = false) {
    if (!state.completedBadges) state.completedBadges = [];
    const newlyUnlocked = [];

    (ALBUM_BADGES_DATA || []).forEach((badge) => {
      let earned = false;
      if (badge.type === 'stage') {
        const stage = TERRITORIAL_STAGES.find((s) => s.id === badge.stageRequired);
        if (stage && stage.levels.every((l) => state.completedLevels.includes(l.id))) {
          earned = true;
        }
      } else if (badge.type === 'missions') {
        earned = (state.completedMissions || []).length >= (badge.countRequired || 1);
      } else if (badge.type === 'lexicon') {
        earned = !!state.exploredDictionary || (state.customWords || []).length > 0;
      } else if (badge.type === 'games') {
        earned = (state.completedGames || 0) >= (badge.countRequired || 1);
      }

      if (earned && !state.completedBadges.includes(badge.id)) {
        state.completedBadges.push(badge.id);
        newlyUnlocked.push(badge.title);
      }
    });

    if (newlyUnlocked.length > 0) {
      StateManager.save(state, state.profileRole);
      if (!silent) {
        showToast(`¡Insignia desbloqueada: ${newlyUnlocked[0]}!`);
      }
    }
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

  function recordMinigameWin() {
    state.completedGames = (state.completedGames || 0) + 1;
    state.points = (state.points || 0) + 10;
    StateManager.save(state, state.profileRole);
    updatePointsDisplay();
    checkAndUnlockBadges();
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
          recordMinigameWin();
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
              recordMinigameWin();
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
            recordMinigameWin();
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
          recordMinigameWin();
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
   * 8B. VISTA 4: MISIONES EN EL TERRITORIO (CON PROGRESO Y RECOMPENSAS REALES)
   * ==========================================================================
   */
  function renderMissionsView() {
    const gridEl = $('missionsGridContainer');
    const summaryEl = $('missionsProgressSummary');
    const pointsEl = $('missionsPointsSummary');
    const fillEl = $('missionsProgressFill');
    if (!gridEl) return;

    const missions = TERRITORIAL_MISSIONS || [];
    const completed = state.completedMissions || [];
    const earnedPts = missions
      .filter((m) => completed.includes(m.id))
      .reduce((sum, m) => sum + (m.points || 25), 0);
    const pct = missions.length > 0 ? Math.round((completed.length / missions.length) * 100) : 0;

    if (summaryEl) summaryEl.textContent = `${completed.length} de ${missions.length} misiones completadas`;
    if (pointsEl) pointsEl.textContent = `+${earnedPts} pts ganados`;
    if (fillEl) fillEl.style.width = `${pct}%`;

    gridEl.innerHTML = missions.map((m, idx) => {
      const isDone = completed.includes(m.id);
      const pts = m.points || 25;

      return `
        <article class="mission-card ${isDone ? 'completed' : ''}">
          <div>
            <div class="mission-tag-row">
              <span class="mission-badge-tag">Mision ${idx + 1} · Piso ${m.stageRef || 1}</span>
              ${isDone ? `<span class="mission-done-pill">${getSVGIcon('check')} Realizada</span>` : `<span style="font-size: 0.78rem; font-weight: 800; color: var(--accent-ochre-dark);">+${pts} pts</span>`}
            </div>

            <div class="mission-title-row" style="margin-top: 12px;">
              <div class="mission-icon-box">
                ${getSVGIcon(m.iconKey || 'misiones')}
              </div>
              <h3 style="font-size: 1.05rem; font-weight: 800; color: var(--text-main);">${escapeHTML(m.title)}</h3>
            </div>

            <p style="font-size: 0.88rem; color: var(--text-muted); line-height: 1.5; margin: 12px 0;">
              ${escapeHTML(m.desc)}
            </p>

            <div class="mission-reflection-box">
              <strong>Reflexion:</strong> ${escapeHTML(m.reflection)}
            </div>
          </div>

          <button type="button"
                  class="${isDone ? 'btn-secondary' : 'btn-primary'}"
                  data-complete-mission="${m.id}"
                  style="width: 100%; ${isDone ? 'opacity: 0.78;' : ''}">
            ${isDone ? `${getSVGIcon('check')} Mision completada` : `Marcar como realizada (+${pts} pts)`}
          </button>
        </article>
      `;
    }).join('');

    gridEl.querySelectorAll('[data-complete-mission]').forEach((btn) => {
      btn.onclick = () => {
        const mId = btn.dataset.completeMission;
        if (!state.completedMissions) state.completedMissions = [];

        if (state.completedMissions.includes(mId)) {
          showToast('Esta mision territorial ya fue registrada en tu progreso.');
          return;
        }

        const mission = missions.find((x) => x.id === mId);
        const pts = (mission && mission.points) || 25;

        state.completedMissions.push(mId);
        state.points = (state.points || 0) + pts;
        StateManager.save(state, state.profileRole);

        SoundEngine.playSuccessSound();
        setSemillitaHappy();
        launchCelebrationConfetti();
        updatePointsDisplay();
        checkAndUnlockBadges();
        renderMissionsView();
        renderHomeView();
        showToast(`¡Mision realizada! Sumaste +${pts} puntos al marcador.`);
      };
    });
  }

  /**
   * ==========================================================================
   * 9. VISTA 6 & 7: ALBUM DE INSIGNIAS + PERFIL Y GOBERNANZA (HABEAS DATA)
   * ==========================================================================
   */
  function renderAlbumView() {
    checkAndUnlockBadges(true);
    const badges = ALBUM_BADGES_DATA || [];
    const unlockedIds = state.completedBadges || [];
    const earnedCount = badges.filter((b) => unlockedIds.includes(b.id)).length;
    const pct = badges.length > 0 ? Math.round((earnedCount / badges.length) * 100) : 0;

    const summaryEl = $('albumProgressSummary');
    const percentEl = $('albumProgressPercent');
    const fillEl = $('albumProgressFill');
    if (summaryEl) summaryEl.textContent = `${earnedCount} / ${badges.length} insignias conseguidas`;
    if (percentEl) percentEl.textContent = `${pct}% completado`;
    if (fillEl) fillEl.style.width = `${pct}%`;

    renderBadgesGallery();
  }

  function renderProfileView() {
    updateProfileUI(state.profileRole || 'visitante');
    const pPts = $('profStatPoints');
    const pLvls = $('profStatLevels');
    const pMis = $('profStatMissions');
    const pBdg = $('profStatBadges');

    if (pPts) pPts.textContent = state.points || 0;
    if (pLvls) pLvls.textContent = `${(state.completedLevels || []).length} / 24`;
    if (pMis) pMis.textContent = `${(state.completedMissions || []).length} / ${(TERRITORIAL_MISSIONS || []).length || 6}`;
    if (pBdg) pBdg.textContent = `${(state.completedBadges || []).length} / ${(ALBUM_BADGES_DATA || []).length || 10}`;

    renderCustomWordsList();
    setupHabeasDataEvents();
  }

  function renderBadgesGallery() {
    const container = $('badgesGalleryContainer');
    if (!container) return;

    const badges = ALBUM_BADGES_DATA || [];
    const unlockedIds = state.completedBadges || [];

    container.innerHTML = badges.map((b) => {
      const isUnlocked = unlockedIds.includes(b.id);

      return `
        <div class="badge-card ${isUnlocked ? 'unlocked' : 'locked'}" data-badge-id="${b.id}" role="button" tabindex="0">
          ${!isUnlocked ? `<span class="badge-lock-corner">${getSVGIcon('candado')}</span>` : ''}
          <div class="badge-icon-disc">
            ${getSVGIcon(b.iconKey || 'medalla')}
          </div>
          <h4 style="font-size: 0.95rem; font-weight: 800; color: var(--text-main); margin-bottom: 4px;">
            ${escapeHTML(b.title)}
          </h4>
          <p style="font-size: 0.78rem; color: var(--text-muted); line-height: 1.35; margin-bottom: 8px;">
            ${escapeHTML(b.desc)}
          </p>
          <div style="margin-top: 10px;">
            <span class="hero-tag" style="background: ${isUnlocked ? 'var(--status-gold-bg)' : '#E8ECE8'}; color: ${isUnlocked ? 'var(--accent-ochre-dark)' : '#6E8075'};">
              ${isUnlocked ? 'Desbloqueada · Ver detalle' : 'Bloqueada · Ver requisito'}
            </span>
          </div>
        </div>
      `;
    }).join('');

    container.querySelectorAll('[data-badge-id]').forEach((card) => {
      card.onclick = () => {
        const badge = badges.find((item) => item.id === card.dataset.badgeId);
        if (!badge) return;
        const isUnlocked = unlockedIds.includes(badge.id);

        SoundEngine.playClickSound();
        openModal(`
          <div class="modal-header">
            <div>
              <span class="hero-tag" style="background: ${isUnlocked ? 'var(--status-gold-bg)' : '#E8ECE8'}; color: ${isUnlocked ? 'var(--accent-ochre-dark)' : '#5B6C62'};">
                ${isUnlocked ? 'Insignia Desbloqueada' : 'Insignia por Desbloquear'}
              </span>
              <h3 style="font-size: 1.2rem; font-weight: 800; margin-top: 4px;">${escapeHTML(badge.title)}</h3>
            </div>
            <button class="icon-action-btn" id="modalCloseX" aria-label="Cerrar modal">
              ${getSVGIcon('cerrar')}
            </button>
          </div>
          <div class="modal-body" style="text-align: center;">
            <div class="badge-icon-disc" style="width: 78px; height: 78px; margin-bottom: 16px; ${isUnlocked ? 'background: var(--accent-ochre-light); color: var(--accent-ochre-dark);' : ''}">
              ${getSVGIcon(badge.iconKey || 'medalla')}
            </div>
            <p style="font-size: 0.95rem; color: var(--text-main); line-height: 1.5; margin-bottom: 14px;">
              ${escapeHTML(badge.desc)}
            </p>
            <div style="font-size: 0.85rem; font-style: italic; color: var(--accent-earth); font-weight: 600; margin-bottom: 18px;">
              "${escapeHTML(badge.quote)}"
            </div>
            <div style="background: ${isUnlocked ? 'var(--status-success-bg)' : 'var(--bg-canvas)'}; border: 1.5px solid ${isUnlocked ? 'var(--status-success)' : 'var(--border-medium)'}; border-radius: var(--radius-md); padding: 14px; text-align: left;">
              <strong style="display: block; font-size: 0.84rem; color: ${isUnlocked ? 'var(--status-success)' : 'var(--primary-forest)'}; margin-bottom: 4px;">
                ${isUnlocked ? 'Logro cumplido:' : 'Requisito para conseguirla:'}
              </strong>
              <p style="font-size: 0.88rem; color: var(--text-main); margin: 0;">
                ${escapeHTML(badge.requirement || 'Completa el piso territorial correspondiente en la Ruta.')}
              </p>
            </div>
          </div>
        `);
      };
    });
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
    const btnTopMascot = $('btnTopbarMascot');
    if (btnTopMascot) {
      btnTopMascot.onclick = () => {
        SoundEngine.playClickSound();
        setSemillitaHappy(1800);
        const tips = [
          'Semillita: ¡Que la luz de Aluna aclare tu pensamiento hoy!',
          'Semillita: En la Sierra Nevada, cada rio es sangre viviente de la Madre Tierra.',
          'Semillita: Puedes tocar cualquier nivel desbloqueado para aprender y repasar.',
          'Semillita: Si tienes dudas en un reto, pide una pista antes de contestar.'
        ];
        const randomTip = tips[Math.floor(Math.random() * tips.length)];
        showToast(randomTip);
      };
    }

    const homeMascot = $('homeMascotWrap');
    if (homeMascot) {
      homeMascot.onclick = () => {
        SoundEngine.playSuccessSound();
        setSemillitaHappy(2200);
        showToast('Semillita: ¡Hola, caminante! Estoy lista para subir contigo por la Sierra.');
      };
    }

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
