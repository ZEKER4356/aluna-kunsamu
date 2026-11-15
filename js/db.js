/**
 * ============================================================================
 * CAPA DE PERSISTENCIA HIBRIDA & AUDIO VAULT (OFFLINE-FIRST)
 * ============================================================================
 * Cumplimiento de Soberania Digital y Ley 1581 de 2012 (Habeas Data - Colombia):
 * - Arquitectura Zero-Tracking: Ni un solo byte sale del dispositivo del usuario.
 * - LocalStorage: Estado liviano aislado por perfil (kunsamu_v6_visitante / kunsamu_v6_comunidad).
 * - IndexedDB: Fonoteca de audios nativos en alta calidad sin limites de almacenamiento.
 * ============================================================================
 */

const STORAGE_PREFIX = 'kunsamu_v6_';
const ACTIVE_ROLE_KEY = 'kunsamu_v6_active_role';
const DB_NAME = 'KunsamuIkuOfflineDB_v6';
const DB_VERSION = 1;
const AUDIO_STORE = 'audio_vault';

/**
 * Estado inicial por defecto de la aplicacion
 */
const DEFAULT_STATE = {
  profileRole: null, // 'visitante' | 'comunidad'
  alias: 'Caminante de la Sierra',
  easyReading: false,
  soundMuted: false,
  points: 0,
  completedLevels: [], // IDs de niveles completados (ej. '1-1', '1-2')
  completedMissions: [], // IDs de misiones realizadas
  completedBadges: [], // IDs de insignias desbloqueadas
  unlockedStage: 1, // Piso activo (1 a 6)
  customWords: [], // Palabras aportadas desde el Taller Comunitario
  reflections: {}, // Notas y reflexiones personales
  streakDays: 1,
  lastVisit: new Date().toISOString()
};

/**
 * Gestor de LocalStorage para Progreso y Preferencias con Aislamiento Total por Perfil:
 * - kunsamu_v6_visitante: Estado del Hermano Menor / Visitante
 * - kunsamu_v6_comunidad: Estado de la Comunidad Arhuaca / Iku
 */
class StateManager {
  static getActiveRole() {
    try {
      return localStorage.getItem(ACTIVE_ROLE_KEY) || null;
    } catch (e) {
      return null;
    }
  }

  static setActiveRole(role) {
    try {
      if (role) {
        localStorage.setItem(ACTIVE_ROLE_KEY, role);
      } else {
        localStorage.removeItem(ACTIVE_ROLE_KEY);
      }
    } catch (e) {
      console.warn('[StateManager] Error al guardar rol activo:', e);
    }
  }

  static getStorageKey(role) {
    const active = role || this.getActiveRole() || 'visitante';
    return `${STORAGE_PREFIX}${active}`;
  }

  static load(targetRole = null) {
    try {
      const activeRole = targetRole || this.getActiveRole();
      if (!activeRole) {
        return { ...DEFAULT_STATE, profileRole: null };
      }

      const key = `${STORAGE_PREFIX}${activeRole}`;
      const data = localStorage.getItem(key);
      if (!data) {
        return { ...DEFAULT_STATE, profileRole: activeRole };
      }

      const parsed = JSON.parse(data);
      return { ...DEFAULT_STATE, ...parsed, profileRole: activeRole };
    } catch (e) {
      console.warn('[StateManager] Error al leer LocalStorage, iniciando estado limpio.', e);
      return { ...DEFAULT_STATE, profileRole: targetRole || null };
    }
  }

  static save(state, targetRole = null) {
    try {
      const role = targetRole || state.profileRole || this.getActiveRole() || 'visitante';
      state.profileRole = role;
      state.lastVisit = new Date().toISOString();
      const key = `${STORAGE_PREFIX}${role}`;
      localStorage.setItem(key, JSON.stringify(state));
      this.setActiveRole(role);
    } catch (e) {
      console.error('[StateManager] Error al persistir en LocalStorage:', e);
    }
  }

  /**
   * Reinicia exclusivamente el progreso del perfil especificado conservando el otro intacto.
   * @param {string} targetRole - 'visitante' o 'comunidad'
   * @returns {Object} Nuevo estado limpio para ese perfil
   */
  static resetProfile(targetRole) {
    try {
      const role = targetRole || this.getActiveRole() || 'visitante';
      const key = `${STORAGE_PREFIX}${role}`;
      localStorage.removeItem(key);
      const cleanState = { ...DEFAULT_STATE, profileRole: role };
      this.save(cleanState, role);
      return cleanState;
    } catch (e) {
      console.error('[StateManager] Error al reiniciar perfil:', e);
      return { ...DEFAULT_STATE, profileRole: targetRole };
    }
  }

  static clear(targetRole = null) {
    try {
      if (targetRole) {
        localStorage.removeItem(`${STORAGE_PREFIX}${targetRole}`);
      } else {
        localStorage.removeItem(`${STORAGE_PREFIX}visitante`);
        localStorage.removeItem(`${STORAGE_PREFIX}comunidad`);
        localStorage.removeItem(ACTIVE_ROLE_KEY);
      }
    } catch (e) {
      console.error('[StateManager] Error al limpiar LocalStorage:', e);
    }
  }
}

/**
 * Gestor de Base de Datos IndexedDB para Archivos de Audio y Vocabulario Fonetico
 */
class AudioVaultDB {
  static dbPromise = null;

  static async open() {
    if (this.dbPromise) return this.dbPromise;

    this.dbPromise = new Promise((resolve, reject) => {
      const request = indexedDB.open(DB_NAME, DB_VERSION);

      request.onupgradeneeded = (event) => {
        const db = event.target.result;
        if (!db.objectStoreNames.contains(AUDIO_STORE)) {
          const store = db.createObjectStore(AUDIO_STORE, { keyPath: 'id' });
          store.createIndex('by_speaker', 'speaker', { unique: false });
          store.createIndex('by_validation', 'validationStatus', { unique: false });
          store.createIndex('by_stage', 'stageId', { unique: false });
        }
      };

      request.onsuccess = () => resolve(request.result);
      request.onerror = () => reject(request.error);
    });

    return this.dbPromise;
  }

  static async saveAudio(entry) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([AUDIO_STORE], 'readwrite');
      const store = tx.objectStore(AUDIO_STORE);
      const req = store.put(entry);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  static async getAudio(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([AUDIO_STORE], 'readonly');
      const store = tx.objectStore(AUDIO_STORE);
      const req = store.get(id);
      req.onsuccess = () => resolve(req.result);
      req.onerror = () => reject(req.error);
    });
  }

  static async listAllAudios() {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([AUDIO_STORE], 'readonly');
      const store = tx.objectStore(AUDIO_STORE);
      const req = store.getAll();
      req.onsuccess = () => resolve(req.result || []);
      req.onerror = () => reject(req.error);
    });
  }

  static async deleteAudio(id) {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([AUDIO_STORE], 'readwrite');
      const store = tx.objectStore(AUDIO_STORE);
      const req = store.delete(id);
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }

  static async clearAll() {
    const db = await this.open();
    return new Promise((resolve, reject) => {
      const tx = db.transaction([AUDIO_STORE], 'readwrite');
      const store = tx.objectStore(AUDIO_STORE);
      const req = store.clear();
      req.onsuccess = () => resolve(true);
      req.onerror = () => reject(req.error);
    });
  }
}

/**
 * Sintetizador Auditivo Pedagogico mediante Web Audio API (Cero dependencias externas)
 */
class SoundEngine {
  static audioCtx = null;
  static isMuted = false;

  static init() {
    try {
      const saved = localStorage.getItem('kunsamu_v6_muted');
      this.isMuted = saved === 'true';
    } catch (e) {
      this.isMuted = false;
    }
  }

  static toggleMute() {
    this.isMuted = !this.isMuted;
    try {
      localStorage.setItem('kunsamu_v6_muted', String(this.isMuted));
    } catch (e) {}
    return this.isMuted;
  }

  static getContext() {
    if (!this.audioCtx) {
      const AudioCtx = window.AudioContext || window.webkitAudioContext;
      if (AudioCtx) {
        this.audioCtx = new AudioCtx();
      }
    }
    if (this.audioCtx && this.audioCtx.state === 'suspended') {
      this.audioCtx.resume();
    }
    return this.audioCtx;
  }

  static playTone(freq, type = 'sine', duration = 0.2, gainValue = 0.12) {
    if (this.isMuted) return;
    try {
      const ctx = this.getContext();
      if (!ctx) return;

      const osc = ctx.createOscillator();
      const gain = ctx.createGain();

      osc.type = type;
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      gain.gain.setValueAtTime(gainValue, ctx.currentTime);
      gain.gain.exponentialRampToValueAtTime(0.001, ctx.currentTime + duration);

      osc.connect(gain);
      gain.connect(ctx.destination);

      osc.start();
      osc.stop(ctx.currentTime + duration);
    } catch (e) {
      console.warn('Audio no disponible en este entorno:', e);
    }
  }

  static playSuccessSound() {
    if (this.isMuted) return;
    // Arpegio armonico ascendente (pentatonica organica)
    const notes = [440, 554.37, 659.25, 880];
    notes.forEach((freq, idx) => {
      setTimeout(() => {
        this.playTone(freq, 'triangle', 0.28, 0.15);
      }, idx * 80);
    });
  }

  static playErrorSound() {
    if (this.isMuted) return;
    const ctx = this.getContext();
    if (!ctx) return;
    this.playTone(220, 'sawtooth', 0.25, 0.08);
    setTimeout(() => {
      this.playTone(196, 'sawtooth', 0.35, 0.08);
    }, 120);
  }

  static playClickSound() {
    if (this.isMuted) return;
    this.playTone(600, 'sine', 0.05, 0.06);
  }

  static playHintSound() {
    if (this.isMuted) return;
    this.playTone(523.25, 'sine', 0.15, 0.1);
    setTimeout(() => this.playTone(659.25, 'sine', 0.25, 0.12), 110);
  }

  static playSpeechSynthesis(text, lang = 'es-CO') {
    if (this.isMuted) return;
    if (!('speechSynthesis' in window)) return;
    window.speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = lang;
    utterance.rate = 0.88;
    utterance.pitch = 1.05;
    window.speechSynthesis.speak(utterance);
  }
}

// Inicializar preferencia de sonido
SoundEngine.init();

/**
 * Grabadora de Audio Nativo para Sabedores y Docentes
 */
class NativeAudioRecorder {
  constructor() {
    this.mediaRecorder = null;
    this.audioChunks = [];
    this.stream = null;
  }

  async start() {
    this.audioChunks = [];
    this.stream = await navigator.mediaDevices.getUserMedia({ audio: true });
    this.mediaRecorder = new MediaRecorder(this.stream);

    this.mediaRecorder.ondataavailable = (e) => {
      if (e.data.size > 0) {
        this.audioChunks.push(e.data);
      }
    };

    this.mediaRecorder.start();
  }

  async stop() {
    return new Promise((resolve) => {
      this.mediaRecorder.onstop = () => {
        const audioBlob = new Blob(this.audioChunks, { type: 'audio/webm' });
        if (this.stream) {
          this.stream.getTracks().forEach((track) => track.stop());
        }
        resolve(audioBlob);
      };
      this.mediaRecorder.stop();
    });
  }
}

/**
 * Modulo de Soberania de Datos (Ley 1581 de 2012 - Habeas Data / Convenio 169 OIT)
 */
class DataSovereigntyHub {
  static async exportAllData(currentState) {
    const audios = await AudioVaultDB.listAllAudios();
    const exportBundle = {
      plataforma: 'KUNSAMU · ALUNA IA',
      version: '6.0.0',
      fechaDescarga: new Date().toISOString(),
      politica: 'Almacenamiento Local Soberano (Ley 1581 de 2012 Colombia / Convenio 169 OIT)',
      estadoAplicacion: currentState,
      audiosRegistradosLocales: audios.map((a) => ({
        id: a.id,
        ikuText: a.ikuText,
        speaker: a.speaker,
        authorizer: a.authorizer,
        validationStatus: a.validationStatus,
        date: a.date
      }))
    };

    const blob = new Blob([JSON.stringify(exportBundle, null, 2)], {
      type: 'application/json'
    });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = `kunsamu_soberania_datos_${currentState.profileRole || 'iku'}_${new Date().toISOString().slice(0, 10)}.json`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
  }

  static async wipeAllData() {
    StateManager.clear();
    await AudioVaultDB.clearAll();
  }
}
