// Gita Wisdom New Tab - Application Logic

document.addEventListener('DOMContentLoaded', () => {
  // --- State Variables ---
  let currentVerse = null;
  let isPlayingAudio = false;
  let speechUtterance = null;
  
  // Default Settings & State
  let settings = {
    lang: 'en',
    theme: 'sunrise',
    showTransliteration: true,
    defaultExpandMeanings: false,
    voiceSpeed: 1.0,
    voiceType: 'sanskrit-only',
    bookmarks: [],
    stats: {
      totalRead: 0,
      streak: 0,
      lastReadDate: null,
      readToday: [] // list of coordinates, e.g., ["2.47"]
    }
  };

  // --- DOM Elements ---
  const elTime = document.getElementById('time-display');
  const elDate = document.getElementById('date-display');
  const elGreeting = document.getElementById('greeting-display');
  const elBgImage = document.getElementById('bg-image');
  
  // Main Card
  const elCard = document.getElementById('verse-card');
  const elVerseCoords = document.getElementById('verse-coords');
  const elVerseTheme = document.getElementById('verse-theme');
  const elSanskrit = document.getElementById('sanskrit-display');
  const elTransliteration = document.getElementById('transliteration-display');
  const elTranslation = document.getElementById('translation-display');
  
  // Commentary
  const elBtnToggleCommentary = document.getElementById('btn-toggle-commentary');
  const elCommentaryChevron = document.getElementById('commentary-chevron');
  const elCommentaryPanel = document.getElementById('commentary-panel');
  const elWordMeanings = document.getElementById('word-meanings-display');
  const elCommentaryText = document.getElementById('commentary-display');
  
  // Actions
  const elBtnPlayAudio = document.getElementById('btn-play-audio');
  const elPlayIcon = document.getElementById('play-icon');
  const elStopIcon = document.getElementById('stop-icon');
  const elAudioWave = document.getElementById('audio-wave');
  const elAudioStatusText = document.getElementById('audio-status-text');
  
  const elBtnBookmark = document.getElementById('btn-bookmark');
  const elBookmarkEmpty = document.getElementById('bookmark-icon-empty');
  const elBookmarkFilled = document.getElementById('bookmark-icon-filled');
  const elBtnCopy = document.getElementById('btn-copy');
  const elBtnNext = document.getElementById('btn-next-verse');
  const elFooterQuote = document.getElementById('footer-daily-quote');
  
  // Drawer & Sidebar
  const elBtnToggleDrawer = document.getElementById('btn-toggle-drawer');
  const elBtnCloseDrawer = document.getElementById('btn-close-drawer');
  const elDrawer = document.getElementById('app-drawer');
  const elDrawerBackdrop = document.getElementById('drawer-backdrop');
  
  // Settings Inputs
  const elRadioLangs = document.querySelectorAll('input[name="lang-pref"]');
  const elThemeBtns = document.querySelectorAll('.theme-btn');
  const elCheckTransliteration = document.getElementById('toggle-transliteration');
  const elCheckExpandMeanings = document.getElementById('toggle-expand-meanings');
  const elSelectVoiceSpeed = document.getElementById('select-voice-speed');
  const elSelectVoiceType = document.getElementById('select-voice-type');
  
  // Tabs
  const elTabBtns = document.querySelectorAll('.tab-btn');
  const elTabPanels = document.querySelectorAll('.tab-panel');
  
  // Lists & Stats
  const elSearchInput = document.getElementById('search-input');
  const elIndexContainer = document.getElementById('index-list-container');
  const elBookmarksContainer = document.getElementById('bookmarks-list-container');
  const elStatTotalRead = document.getElementById('stat-total-read');
  const elStatStreak = document.getElementById('stat-streak');
  const elGoalProgressFill = document.getElementById('goal-progress-fill');
  const elGoalText = document.getElementById('goal-text');
  const elGoalPercentage = document.getElementById('goal-percentage');
  const elStreakMotivation = document.getElementById('streak-motivation');
  const elToastContainer = document.getElementById('toast-container');

  // Quotes for footer
  const FOOTER_QUOTES = [
    "“Fix your mind on Me, be devoted to Me, worship Me, and offer your respects unto Me.” — Gita 18.65",
    "“Set thy heart upon thy work, but never on its reward.” — Gita 2.47",
    "“The mind is restless, Krishna, and hard to hold. But it can be trained.” — Gita 6.35",
    "“A man is made by his belief. As he believes, so he is.” — Gita 17.3",
    "“Calmness, gentleness, silence, self-restraint, and purity: these are the disciplines of the mind.” — Gita 17.16",
    "“For him who has conquered the mind, the mind is the best of friends.” — Gita 6.6",
    "“When meditation is mastered, the mind is as unwavering as the flame of a candle in a windless place.” — Gita 6.19",
    "“Yoga is the journey of the self, through the self, to the self.” — Gita 6.20"
  ];

  // --- Environment & Storage Helpers ---
  const isExtensionEnv = typeof chrome !== 'undefined' && chrome.storage && chrome.storage.local;

  async function getStorageData(keys) {
    if (isExtensionEnv) {
      return new Promise((resolve) => {
        chrome.storage.local.get(keys, resolve);
      });
    } else {
      const result = {};
      const keysArray = Array.isArray(keys) ? keys : [keys];
      keysArray.forEach(key => {
        const value = localStorage.getItem(`gita_wisdom_${key}`);
        if (value !== null) {
          try {
            result[key] = JSON.parse(value);
          } catch {
            result[key] = value;
          }
        }
      });
      return result;
    }
  }

  async function setStorageData(data) {
    if (isExtensionEnv) {
      return new Promise((resolve) => {
        chrome.storage.local.set(data, resolve);
      });
    } else {
      Object.entries(data).forEach(([key, val]) => {
        localStorage.setItem(`gita_wisdom_${key}`, JSON.stringify(val));
      });
    }
  }

  // --- Toast Notification ---
  function showToast(message, type = 'info') {
    const toast = document.createElement('div');
    toast.className = `toast toast-${type}`;
    
    // SVG icon for Toast
    let iconSvg = '';
    if (type === 'success') {
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"></polyline></svg>`;
    } else if (type === 'error') {
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="8" x2="12" y2="12"></line><line x1="12" y1="16" x2="12.01" y2="16"></line></svg>`;
    } else {
      iconSvg = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"></circle><line x1="12" y1="16" x2="12" y2="12"></line><line x1="12" y1="8" x2="12.01" y2="8"></line></svg>`;
    }

    toast.innerHTML = `${iconSvg} <span>${message}</span>`;
    elToastContainer.appendChild(toast);
    
    // Automatically remove after animation completes (3 seconds)
    setTimeout(() => {
      toast.remove();
    }, 3000);
  }

  // --- Clock, Date & Greeting ---
  function updateClock() {
    const now = new Date();
    
    // Formatting Time
    let hours = now.getHours();
    const minutes = String(now.getMinutes()).padStart(2, '0');
    const ampm = hours >= 12 ? 'PM' : 'AM';
    hours = hours % 12;
    hours = hours ? hours : 12; // 0 should be 12
    elTime.textContent = `${hours}:${minutes} ${ampm}`;

    // Formatting Date
    const options = { weekday: 'long', month: 'short', day: 'numeric' };
    elDate.textContent = now.toLocaleDateString('en-US', options);

    // Dynamic Spiritual Greeting
    const curHour = now.getHours();
    let greeting = "Hari Om";
    
    if (curHour >= 4 && curHour < 12) {
      greeting = "Suprabhatam • Hari Om";
    } else if (curHour >= 12 && curHour < 17) {
      greeting = "Shubh Dopahar • Hari Om";
    } else if (curHour >= 17 && curHour < 21) {
      greeting = "Shubh Sandhya • Hari Om";
    } else {
      greeting = "Shubh Ratri • Peace be with you";
    }
    
    elGreeting.textContent = greeting;
  }

  // --- Background & Theme Initialization ---
  function applyTheme(themeName) {
    document.body.setAttribute('data-theme', themeName);
    // Update theme selectors active state
    elThemeBtns.forEach(btn => {
      if (btn.getAttribute('data-theme') === themeName) {
        btn.classList.add('active');
      } else {
        btn.classList.remove('active');
      }
    });
  }

  // --- Settings drawer tabs ---
  elTabBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const targetTab = btn.getAttribute('data-tab');
      
      // Update tab buttons
      elTabBtns.forEach(t => t.classList.remove('active'));
      btn.classList.add('active');
      
      // Update panels
      elTabPanels.forEach(panel => {
        if (panel.id === `tab-${targetTab}`) {
          panel.classList.add('active');
        } else {
          panel.classList.remove('active');
        }
      });
    });
  });

  // --- Drawer Open/Close ---
  function openDrawer() {
    elDrawer.classList.add('open');
    elDrawerBackdrop.classList.add('active');
    renderIndexList();
    renderBookmarksList();
    updateMindfulnessUI();
  }

  function closeDrawer() {
    elDrawer.classList.remove('open');
    elDrawerBackdrop.classList.remove('active');
  }

  elBtnToggleDrawer.addEventListener('click', openDrawer);
  elBtnCloseDrawer.addEventListener('click', closeDrawer);
  elDrawerBackdrop.addEventListener('click', closeDrawer);

  // --- Shloka Loading & Rendering ---
  function renderShloka(verseObj) {
    if (!verseObj) return;
    currentVerse = verseObj;

    // Reset card animation
    elCard.classList.remove('animate-fade-in');
    void elCard.offsetWidth; // Trigger reflow
    elCard.classList.add('animate-fade-in');

    // Stop active audio
    stopAudio();

    // Populate contents
    elVerseCoords.textContent = `Chapter ${verseObj.chapter}, Verse ${verseObj.verse}`;
    elVerseTheme.textContent = verseObj.theme;
    elSanskrit.textContent = verseObj.sanskrit;
    elTransliteration.textContent = verseObj.transliteration;
    
    // Check preferred language for translation & explanation
    if (settings.lang === 'hi') {
      elTranslation.textContent = verseObj.translation.hi;
      elCommentaryText.textContent = verseObj.commentary.hi;
    } else {
      elTranslation.textContent = verseObj.translation.en;
      elCommentaryText.textContent = verseObj.commentary.en;
    }
    
    elWordMeanings.textContent = verseObj.wordMeanings;

    // Manage Transliteration Display
    if (settings.showTransliteration) {
      elTransliteration.classList.remove('hidden');
    } else {
      elTransliteration.classList.add('hidden');
    }

    // Manage Commentary Expanded State
    if (settings.defaultExpandMeanings) {
      elCommentaryPanel.classList.add('expanded');
      elCommentaryChevron.classList.add('rotate');
    } else {
      elCommentaryPanel.classList.remove('expanded');
      elCommentaryChevron.classList.remove('rotate');
    }

    // Sync Bookmark Icon
    const isBookmarked = settings.bookmarks.some(
      b => b.chapter === verseObj.chapter && b.verse === verseObj.verse
    );
    if (isBookmarked) {
      elBookmarkEmpty.classList.add('icon-hidden');
      elBookmarkEmpty.classList.remove('icon-visible');
      elBookmarkFilled.classList.remove('icon-hidden');
      elBookmarkFilled.classList.add('icon-visible');
    } else {
      elBookmarkEmpty.classList.remove('icon-hidden');
      elBookmarkEmpty.classList.add('icon-visible');
      elBookmarkFilled.classList.add('icon-hidden');
      elBookmarkFilled.classList.remove('icon-visible');
    }

    // Log the read event in mindfulness stats
    logReadStats(verseObj);
  }

  function loadRandomVerse() {
    if (!GITA_VERSES || GITA_VERSES.length === 0) return;
    const randomIndex = Math.floor(Math.random() * GITA_VERSES.length);
    renderShloka(GITA_VERSES[randomIndex]);
  }

  // Commentary Collapse Toggle
  elBtnToggleCommentary.addEventListener('click', () => {
    const isExpanded = elCommentaryPanel.classList.toggle('expanded');
    elCommentaryChevron.classList.toggle('rotate', isExpanded);
  });

  // --- Bookmarking System ---
  function toggleBookmark() {
    if (!currentVerse) return;
    
    const index = settings.bookmarks.findIndex(
      b => b.chapter === currentVerse.chapter && b.verse === currentVerse.verse
    );

    if (index === -1) {
      // Add Bookmark
      settings.bookmarks.push({
        chapter: currentVerse.chapter,
        verse: currentVerse.verse,
        theme: currentVerse.theme,
        sanskrit: currentVerse.sanskrit
      });
      setStorageData({ bookmarks: settings.bookmarks });
      
      // Toggle Icons
      elBookmarkEmpty.classList.replace('icon-visible', 'icon-hidden');
      elBookmarkFilled.classList.replace('icon-hidden', 'icon-visible');
      
      showToast('Verse added to bookmarks', 'success');
    } else {
      // Remove Bookmark
      settings.bookmarks.splice(index, 1);
      setStorageData({ bookmarks: settings.bookmarks });
      
      // Toggle Icons
      elBookmarkEmpty.classList.replace('icon-hidden', 'icon-visible');
      elBookmarkFilled.classList.replace('icon-visible', 'icon-hidden');
      
      showToast('Verse removed from bookmarks', 'info');
    }

    renderBookmarksList();
  }

  elBtnBookmark.addEventListener('click', toggleBookmark);

  // --- Copy Clipboard ---
  async function copyVerse() {
    if (!currentVerse) return;

    let textToCopy = `Bhagavad Gita [Chapter ${currentVerse.chapter}, Verse ${currentVerse.verse}]\n\n`;
    textToCopy += `Sanskrit Shloka:\n${currentVerse.sanskrit}\n\n`;
    
    if (settings.showTransliteration) {
      textToCopy += `Transliteration:\n${currentVerse.transliteration}\n\n`;
    }

    if (settings.lang === 'hi') {
      textToCopy += `Hindi Translation:\n${currentVerse.translation.hi}\n\n`;
      textToCopy += `Meaning/Explanation:\n${currentVerse.commentary.hi}\n`;
    } else {
      textToCopy += `English Translation:\n${currentVerse.translation.en}\n\n`;
      textToCopy += `Meaning/Explanation:\n${currentVerse.commentary.en}\n`;
    }

    try {
      await navigator.clipboard.writeText(textToCopy);
      showToast('Verse details copied to clipboard!', 'success');
    } catch (err) {
      console.error('Failed to copy verse:', err);
      showToast('Failed to copy verse', 'error');
    }
  }

  elBtnCopy.addEventListener('click', copyVerse);

  // --- Next Wisdom Button ---
  elBtnNext.addEventListener('click', () => {
    loadRandomVerse();
  });

  // --- Audio Text-to-Speech ---
  function playAudio() {
    if (!currentVerse) return;

    if (isPlayingAudio) {
      stopAudio();
      return;
    }

    // Cancel any active SpeechSynthesis
    window.speechSynthesis.cancel();

    // Determine what to speak
    const speechBlocks = [];
    const speed = parseFloat(settings.voiceSpeed) || 1.0;

    // Sanskrit Shloka Block
    if (settings.voiceType === 'sanskrit-only' || settings.voiceType === 'both') {
      // Remove newline characters and clean up string for optimal speech engine pacing
      const cleanSanskrit = currentVerse.sanskrit.replace(/\n/g, ' ').replace(/[।॥]/g, ',');
      speechBlocks.push({
        text: cleanSanskrit,
        lang: 'hi-IN', // Sanskrit/Hindi voice handles Devanagari correctly
        rate: speed * 0.85 // Sanskrit reads slightly slower for pronunciation clarity
      });
    }

    // Translation Block
    if (settings.voiceType === 'translation-only' || settings.voiceType === 'both') {
      const translation = settings.lang === 'hi' ? currentVerse.translation.hi : currentVerse.translation.en;
      speechBlocks.push({
        text: translation,
        lang: settings.lang === 'hi' ? 'hi-IN' : 'en-US',
        rate: speed
      });
    }

    if (speechBlocks.length === 0) return;

    isPlayingAudio = true;
    elPlayIcon.classList.replace('icon-visible', 'icon-hidden');
    elStopIcon.classList.replace('icon-hidden', 'icon-visible');
    elAudioWave.classList.remove('hidden');
    elBtnPlayAudio.classList.add('playing');
    elAudioStatusText.textContent = 'Speaking';

    let currentBlockIndex = 0;

    function speakNextBlock() {
      if (currentBlockIndex >= speechBlocks.length || !isPlayingAudio) {
        stopAudio();
        return;
      }

      const block = speechBlocks[currentBlockIndex];
      speechUtterance = new SpeechSynthesisUtterance(block.text);
      speechUtterance.rate = block.rate;
      speechUtterance.volume = 1.0;
      speechUtterance.pitch = 1.0;

      // Voice Selection Logic
      const voices = window.speechSynthesis.getVoices();
      let matchedVoice = null;

      if (block.lang === 'hi-IN') {
        // Look for Hindi/Indian voice
        matchedVoice = voices.find(v => v.lang === 'hi-IN' || v.lang.startsWith('hi') || v.name.includes('Hindi') || v.name.includes('India'));
      } else {
        // Look for English voice
        matchedVoice = voices.find(v => v.lang.startsWith('en') && (v.name.includes('Google') || v.name.includes('Natural') || v.name.includes('Microsoft')));
      }

      if (matchedVoice) {
        speechUtterance.voice = matchedVoice;
      } else if (voices.length > 0) {
        // Fallback to first available matching language voice
        const langVoice = voices.find(v => v.lang.startsWith(block.lang.substring(0, 2)));
        if (langVoice) speechUtterance.voice = langVoice;
      }

      speechUtterance.onend = () => {
        currentBlockIndex++;
        speakNextBlock();
      };

      speechUtterance.onerror = (e) => {
        console.error('Speech synthesis error:', e);
        stopAudio();
      };

      window.speechSynthesis.speak(speechUtterance);
    }

    // Trigger recitation
    speakNextBlock();
  }

  function stopAudio() {
    isPlayingAudio = false;
    window.speechSynthesis.cancel();
    
    // Reset Icons
    elPlayIcon.classList.replace('icon-hidden', 'icon-visible');
    elStopIcon.classList.replace('icon-visible', 'icon-hidden');
    elAudioWave.classList.add('hidden');
    elBtnPlayAudio.classList.remove('playing');
    elAudioStatusText.textContent = 'Listen';
    speechUtterance = null;
  }

  elBtnPlayAudio.addEventListener('click', playAudio);

  // Required by Chrome SpeechSynthesis voices load event asynchronously
  if (typeof window.speechSynthesis !== 'undefined' && window.speechSynthesis.onvoiceschanged !== undefined) {
    window.speechSynthesis.onvoiceschanged = () => {
      // Warm up voices
    };
  }

  // --- Dynamic Drawer Lists ---

  // TAB: All Verses (Index)
  function renderIndexList() {
    const searchVal = elSearchInput.value.toLowerCase().trim();
    elIndexContainer.innerHTML = '';
    
    const filtered = GITA_VERSES.filter(v => {
      const matchQuery = `${v.chapter} ${v.verse} ${v.theme} ${v.sanskrit} ${v.translation.en} ${v.translation.hi}`.toLowerCase();
      return matchQuery.includes(searchVal);
    });

    if (filtered.length === 0) {
      elIndexContainer.innerHTML = `
        <div class="empty-state">
          <p>No matching verses found.<br>Try searching with another keyword.</p>
        </div>
      `;
      return;
    }

    filtered.forEach(v => {
      const card = document.createElement('div');
      card.className = 'index-item-card';
      
      const snippet = settings.lang === 'hi' ? v.translation.hi : v.translation.en;
      
      card.innerHTML = `
        <div class="item-main-details">
          <div class="item-meta">
            <span class="item-coords">Chapter ${v.chapter}, Verse ${v.verse}</span>
            <span class="item-theme">${v.theme}</span>
          </div>
          <div class="item-snippet">${snippet}</div>
        </div>
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" style="color: var(--accent-color); flex-shrink: 0;">
          <polyline points="9 18 15 12 9 6"></polyline>
        </svg>
      `;

      card.addEventListener('click', () => {
        renderShloka(v);
        closeDrawer();
      });

      elIndexContainer.appendChild(card);
    });
  }

  elSearchInput.addEventListener('input', renderIndexList);

  // TAB: Bookmarked Verses
  function renderBookmarksList() {
    elBookmarksContainer.innerHTML = '';

    if (settings.bookmarks.length === 0) {
      elBookmarksContainer.innerHTML = `
        <div class="empty-state">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="40" height="40" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
            <path d="M19 21l-7-5-7 5V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path>
          </svg>
          <p>No saved verses yet.<br>Click the bookmark icon on the active verse card to save them here.</p>
        </div>
      `;
      return;
    }

    settings.bookmarks.forEach((bm) => {
      // Find full verse object from database to retrieve correct translation snippet
      const fullVerse = GITA_VERSES.find(v => v.chapter === bm.chapter && v.verse === bm.verse);
      const snippet = fullVerse 
        ? (settings.lang === 'hi' ? fullVerse.translation.hi : fullVerse.translation.en)
        : bm.sanskrit;

      const card = document.createElement('div');
      card.className = 'index-item-card';
      
      card.innerHTML = `
        <div class="item-main-details" style="max-width: 82%;">
          <div class="item-meta">
            <span class="item-coords">Chapter ${bm.chapter}, Verse ${bm.verse}</span>
          </div>
          <div class="item-snippet">${snippet}</div>
        </div>
        <button class="item-delete-btn" title="Remove Bookmark">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="16" height="16" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
            <polyline points="3 6 5 6 21 6"></polyline>
            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
          </svg>
        </button>
      `;

      // Click to load verse
      card.addEventListener('click', (e) => {
        // Prevent loading shloka if user clicked the delete button
        if (e.target.closest('.item-delete-btn')) return;
        
        const targetVerse = GITA_VERSES.find(v => v.chapter === bm.chapter && v.verse === bm.verse);
        if (targetVerse) {
          renderShloka(targetVerse);
          closeDrawer();
        }
      });

      // Click to delete
      const delBtn = card.querySelector('.item-delete-btn');
      delBtn.addEventListener('click', (e) => {
        e.stopPropagation();
        
        // Remove from list
        const idx = settings.bookmarks.findIndex(b => b.chapter === bm.chapter && b.verse === bm.verse);
        if (idx !== -1) {
          settings.bookmarks.splice(idx, 1);
          setStorageData({ bookmarks: settings.bookmarks });
          showToast('Bookmark removed', 'info');
          renderBookmarksList();
          
          // If the deleted bookmark is currently displayed, update card icon
          if (currentVerse && currentVerse.chapter === bm.chapter && currentVerse.verse === bm.verse) {
            elBookmarkEmpty.classList.replace('icon-hidden', 'icon-visible');
            elBookmarkFilled.classList.replace('icon-visible', 'icon-hidden');
          }
        }
      });

      elBookmarksContainer.appendChild(card);
    });
  }

  // --- Mindfulness Tracker & Habits Logic ---
  function logReadStats(verseObj) {
    const todayStr = new Date().toDateString(); // e.g. "Thu May 28 2026"
    const verseKey = `${verseObj.chapter}.${verseObj.verse}`;
    let statsChanged = false;

    if (!settings.stats) {
      settings.stats = { totalRead: 0, streak: 0, lastReadDate: null, readToday: [] };
    }

    const stats = settings.stats;

    // Check Streak progress
    if (stats.lastReadDate !== todayStr) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      const yesterdayStr = yesterday.toDateString();
      
      if (stats.lastReadDate === yesterdayStr) {
        stats.streak = stats.streak + 1;
      } else if (stats.lastReadDate === null) {
        stats.streak = 1;
      } else {
        // Reset streak since a day was missed
        stats.streak = 1;
      }
      
      stats.lastReadDate = todayStr;
      stats.readToday = []; // Reset read tracker for the new day
      statsChanged = true;
    }

    // Log the current verse read if not already done today
    if (!stats.readToday.includes(verseKey)) {
      stats.readToday.push(verseKey);
      stats.totalRead = (stats.totalRead || 0) + 1;
      statsChanged = true;
    }

    if (statsChanged) {
      setStorageData({ stats });
      updateMindfulnessUI();
    }
  }

  function updateMindfulnessUI() {
    if (!settings.stats) return;
    
    const stats = settings.stats;
    elStatTotalRead.textContent = stats.totalRead || 0;
    elStatStreak.textContent = stats.streak || 0;

    // Goal calculation (Daily target: 3 verses)
    const dailyGoal = 3;
    const readCount = stats.readToday ? stats.readToday.length : 0;
    const percentage = Math.min(Math.round((readCount / dailyGoal) * 100), 100);

    elGoalProgressFill.style.width = `${percentage}%`;
    elGoalText.textContent = `${readCount} / ${dailyGoal} Verses read today`;
    elGoalPercentage.textContent = `${percentage}%`;

    // Dynamic encouragement
    if (stats.streak > 0) {
      elStreakMotivation.textContent = `Wonderful! You have a streak of ${stats.streak} active day(s). Keep checking in daily to maintain your peaceful habit.`;
    } else {
      elStreakMotivation.textContent = `Start your mindful journey today! Reviewing a shloka daily aligns your mind and focus.`;
    }
  }

  // --- Setting Input Events & Initialization ---
  async function initSettings() {
    // 1. Fetch values from storage
    const stored = await getStorageData([
      'lang', 'theme', 'showTransliteration', 'defaultExpandMeanings', 'voiceSpeed', 'voiceType', 'bookmarks', 'stats'
    ]);

    // Apply retrieved settings (fall back to defaults if not found)
    if (stored.lang) settings.lang = stored.lang;
    if (stored.theme) settings.theme = stored.theme;
    if (stored.showTransliteration !== undefined) settings.showTransliteration = stored.showTransliteration;
    if (stored.defaultExpandMeanings !== undefined) settings.defaultExpandMeanings = stored.defaultExpandMeanings;
    if (stored.voiceSpeed) settings.voiceSpeed = stored.voiceSpeed;
    if (stored.voiceType) settings.voiceType = stored.voiceType;
    if (stored.bookmarks) settings.bookmarks = stored.bookmarks;
    if (stored.stats) settings.stats = stored.stats;

    // 2. Reflect settings in DOM controls
    
    // Language radio buttons
    elRadioLangs.forEach(radio => {
      radio.checked = radio.value === settings.lang;
    });

    // Checkbox toggles
    elCheckTransliteration.checked = settings.showTransliteration;
    elCheckExpandMeanings.checked = settings.defaultExpandMeanings;

    // Select boxes
    elSelectVoiceSpeed.value = settings.voiceSpeed;
    elSelectVoiceType.value = settings.voiceType;

    // Apply active theme
    applyTheme(settings.theme);

    // Apply background image panning (Ken burns offset)
    updateClock();
    
    // 3. Load Shloka (from storage or pick a random one)
    loadRandomVerse();
    
    // Load footer quote
    const randomQuoteIdx = Math.floor(Math.random() * FOOTER_QUOTES.length);
    elFooterQuote.textContent = FOOTER_QUOTES[randomQuoteIdx];
  }

  // --- Add Event Listeners for settings changes ---
  
  // Language Change
  elRadioLangs.forEach(radio => {
    radio.addEventListener('change', (e) => {
      settings.lang = e.target.value;
      setStorageData({ lang: settings.lang });
      
      // Re-render current shloka in new language
      if (currentVerse) {
        renderShloka(currentVerse);
      }
    });
  });

  // Theme Change
  elThemeBtns.forEach(btn => {
    btn.addEventListener('click', () => {
      const selectedTheme = btn.getAttribute('data-theme');
      settings.theme = selectedTheme;
      setStorageData({ theme: selectedTheme });
      applyTheme(selectedTheme);
      showToast(`Applied ${btn.querySelector('.theme-label').textContent} theme`, 'success');
    });
  });

  // Transliteration Toggle
  elCheckTransliteration.addEventListener('change', (e) => {
    settings.showTransliteration = e.target.checked;
    setStorageData({ showTransliteration: settings.showTransliteration });
    
    if (currentVerse) {
      renderShloka(currentVerse);
    }
  });

  // Expand Meanings Toggle
  elCheckExpandMeanings.addEventListener('change', (e) => {
    settings.defaultExpandMeanings = e.target.checked;
    setStorageData({ defaultExpandMeanings: settings.defaultExpandMeanings });
  });

  // Voice Speed Change
  elSelectVoiceSpeed.addEventListener('change', (e) => {
    settings.voiceSpeed = parseFloat(e.target.value);
    setStorageData({ voiceSpeed: settings.voiceSpeed });
  });

  // Voice Focus Type Change
  elSelectVoiceType.addEventListener('change', (e) => {
    settings.voiceType = e.target.value;
    setStorageData({ voiceType: settings.voiceType });
  });

  // Start Clock tick
  setInterval(updateClock, 1000);
  
  // Initialize everything
  initSettings();
});
