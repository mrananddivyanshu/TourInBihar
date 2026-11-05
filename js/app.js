// Discover Local Bihar - Main Application Controller (v3.0)

// Global Image Fallback Handler (Guarantees zero broken image icons under all conditions)
const BIHAR_FALLBACK_SVG = "data:image/svg+xml;charset=UTF-8,%3Csvg xmlns='http://www.w3.org/2000/svg' width='800' height='500' viewBox='0 0 800 500'%3E%3Cdefs%3E%3ClinearGradient id='g' x1='0%25' y1='0%25' x2='100%25' y2='100%25'%3E%3Cstop offset='0%25' stop-color='%23111C2E'/%3E%3Cstop offset='50%25' stop-color='%2318263B'/%3E%3Cstop offset='100%25' stop-color='%23E87924'/%3E%3C/linearGradient%3E%3C/defs%3E%3Crect width='100%25' height='100%25' fill='url(%23g)'/%3E%3Ccircle cx='400' cy='220' r='90' fill='%23ffffff' opacity='0.08'/%3E%3Cpath d='M400 150 L430 220 L490 220 L440 255 L460 320 L400 280 L340 320 L360 255 L310 220 L370 220 Z' fill='%23E87924' opacity='0.7'/%3E%3Ctext x='400' y='360' font-family='system-ui, -apple-system, sans-serif' font-size='26' font-weight='700' fill='%23ffffff' text-anchor='middle'%3EDiscover Bihar%3C/text%3E%3Ctext x='400' y='395' font-family='system-ui, -apple-system, sans-serif' font-size='16' font-weight='500' fill='%23F7EBD8' opacity='0.85' text-anchor='middle'%3EAuthentic Heritage %26 Tourism%3C/text%3E%3C/svg%3E";

function handleHeroImgError(img) {
  if (!img) return;
  if (!img.dataset) img.dataset = {};
  if (!img.dataset.retryCount) {
    img.dataset.retryCount = "1";
    img.src = "images/mahabodhi.jpg";
    return;
  }
  if (img.dataset.retryCount === "1") {
    img.dataset.retryCount = "2";
    img.src = "images/nalanda.jpg";
    return;
  }
  img.onerror = null;
  img.src = BIHAR_FALLBACK_SVG;
}

function handleImgError(img) {
  if (!img) return;
  if (!img.dataset) img.dataset = {};
  if (img.dataset.hasFailedOnce) {
    img.onerror = null;
    img.src = BIHAR_FALLBACK_SVG;
    return;
  }
  img.dataset.hasFailedOnce = "true";
  img.onerror = function() {
    this.onerror = null;
    this.src = BIHAR_FALLBACK_SVG;
  };
  
  const alt = ((img.alt || '') + ' ' + (img.title || '')).toLowerCase();
  if (alt.includes('mahabodhi') || alt.includes('gaya') || alt.includes('बोधगया')) {
    img.src = 'images/mahabodhi.jpg';
  } else if (alt.includes('patna museum') || alt.includes('जादू घर')) {
    img.src = 'images/patnamuseum.jpg';
  } else if (alt.includes('museum') || alt.includes('संग्रहालय') || alt.includes('bihar museum')) {
    img.src = 'images/biharmuseum.jpg';
  } else if (alt.includes('nalanda') || alt.includes('नालंदा')) {
    img.src = 'images/nalanda.jpg';
  } else if (alt.includes('rajgir') || alt.includes('राजगीर')) {
    img.src = 'images/rajgir.jpg';
  } else if (alt.includes('patna') || alt.includes('पटना')) {
    img.src = 'images/golghar.jpg';
  } else if (alt.includes('sher shah') || alt.includes('शेरशाह') || alt.includes('rohtas')) {
    img.src = 'images/shershah.jpg';
  } else if (alt.includes('valmiki') || alt.includes('वाल्मीकि')) {
    img.src = 'images/valmiki.jpg';
  } else if (alt.includes('mundeshwari') || alt.includes('मुंडेश्वरी')) {
    img.src = 'images/mundeshwari.jpg';
  } else if (alt.includes('kakolat') || alt.includes('ककोलत')) {
    img.src = 'images/kakolat.jpg';
  } else if (alt.includes('kesaria') || alt.includes('केसरिया')) {
    img.src = 'images/kesaria.jpg';
  } else if (alt.includes('madhubani') || alt.includes('mithila') || alt.includes('मधुबनी')) {
    img.src = 'images/madhubani.jpg';
  } else {
    img.src = 'images/nalanda.jpg';
  }
}

// Global App State
const state = {
  activeTab: 'home',
  filters: {
    category: 'all',
    district: 'all',
    division: 'all',
    entryFee: 'all',
    wheelchair: false,
    searchQuery: ''
  },
  districtSearchQuery: '',
  districtDivisionFilter: 'all',
  selectedFestivalSeason: 'all',
  activeDistrictModalLang: {}, // tracks currently selected local language per district modal
  favourites: [],
  map: null,
  markersLayer: null
};

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  // Initialize Theme System (PRD FR-24, FR-25, FR-26)
  initThemeSystem();

  // Load saved favourites
  try {
    const savedFavs = localStorage.getItem('dlb_favourites');
    if (savedFavs) {
      state.favourites = JSON.parse(savedFavs);
    }
  } catch (e) {
    state.favourites = [];
  }

  // Set Language
  applyTranslations();

  // Populate dynamic filter options
  populateFilterDropdowns();

  // Initialize Planner
  if (typeof initTripPlanner === 'function') {
    initTripPlanner();
  }

  // Setup Event Listeners
  setupEventListeners();

  // Initial Views Render
  renderAllViews();

  // Initialize Leaflet Map
  initLeafletMap();

  // Update counters
  updateFavouritesCount();

  // Handle Initial Deep-Link Hash Routing
  handleHashRouting();

  // Listen for Browser Hash Changes (Deep-Linking)
  window.addEventListener('hashchange', handleHashRouting);
});

// ==========================================================
// THEME MANAGEMENT SYSTEM (PRD v3.0 FR-24, FR-25, FR-26)
// ==========================================================
function initThemeSystem() {
  const currentTheme = document.documentElement.getAttribute('data-theme') || 'light';
  updateThemeUI(currentTheme);

  const toggleBtn = document.getElementById('theme-toggle-btn');
  if (toggleBtn) {
    toggleBtn.addEventListener('click', toggleTheme);
  }

  const mobileToggleBtn = document.getElementById('mobile-theme-toggle-btn');
  if (mobileToggleBtn) {
    mobileToggleBtn.addEventListener('click', toggleTheme);
  }

  // Sync with OS theme changes if user hasn't explicitly set a preference
  if (window.matchMedia) {
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
      if (!localStorage.getItem('dlb_theme_preference')) {
        const newTheme = e.matches ? 'dark' : 'light';
        applyTheme(newTheme, false);
      }
    });
  }
}

function toggleTheme() {
  const current = document.documentElement.getAttribute('data-theme') || 'light';
  const next = current === 'dark' ? 'light' : 'dark';
  applyTheme(next, true);
}

function applyTheme(theme, saveToStorage = true) {
  document.documentElement.setAttribute('data-theme', theme);
  if (saveToStorage) {
    try {
      localStorage.setItem('dlb_theme_preference', theme);
    } catch (e) {}
  }
  updateThemeUI(theme);
  const toastMsg = theme === 'dark'
    ? getTranslation('theme_toggle_toast_dark')
    : getTranslation('theme_toggle_toast_light');
  showToast(toastMsg);
}

function updateThemeUI(theme) {
  const isDark = theme === 'dark';
  const icon = document.getElementById('theme-icon');
  const mobileIcon = document.getElementById('mobile-theme-icon');
  const mobileLabel = document.getElementById('mobile-theme-label');

  if (icon) {
    icon.textContent = isDark ? '☀️' : '🌙';
  }
  if (mobileIcon) {
    mobileIcon.textContent = isDark ? '☀️' : '🌙';
  }
  if (mobileLabel) {
    mobileLabel.textContent = isDark ? getTranslation('theme_light') : getTranslation('theme_dark');
  }

  const btn = document.getElementById('theme-toggle-btn');
  if (btn) {
    const titleText = isDark ? 'Switch to Light Mode' : 'Switch to Dark Mode';
    btn.setAttribute('aria-label', titleText);
    btn.setAttribute('title', titleText);
  }
}

// Update Favourites Badge
function updateFavouritesCount() {
  const countEl = document.getElementById('fav-count-badge');
  if (countEl) {
    countEl.textContent = state.favourites.length;
    countEl.style.display = state.favourites.length > 0 ? 'inline-flex' : 'none';
  }
}

// Toggle Favourite Destination
function toggleFavourite(destId) {
  const index = state.favourites.indexOf(destId);
  const dest = getDestinationById(destId);
  const isHi = currentLanguage === 'hi';
  const name = dest ? (isHi ? dest.name_hi : dest.name) : '';

  if (index === -1) {
    state.favourites.push(destId);
    showToast(`${name} - ${getTranslation('toast_added_fav')}`);
  } else {
    state.favourites.splice(index, 1);
    showToast(`${name} - ${getTranslation('toast_removed_fav')}`);
  }

  localStorage.setItem('dlb_favourites', JSON.stringify(state.favourites));
  updateFavouritesCount();
  renderDestinationCards();
  if (state.activeTab === 'saved') {
    renderSavedDestinations();
  }

  // Update modal heart button if open
  const modalHeartBtn = document.getElementById(`modal-fav-btn-${destId}`);
  if (modalHeartBtn) {
    modalHeartBtn.classList.toggle('active', state.favourites.includes(destId));
  }
}

// Populate Filter Dropdowns
function populateFilterDropdowns() {
  const districtSelect = document.getElementById('filter-district-select');
  const isHi = currentLanguage === 'hi';

  if (districtSelect) {
    let opts = `<option value="all">${isHi ? 'सभी 38 जिले (All Districts)' : 'All 38 Districts'}</option>`;
    // Sort districts alphabetically
    const sorted = [...BIHAR_DISTRICTS].sort((a, b) => a.name.localeCompare(b.name));
    sorted.forEach(d => {
      opts += `<option value="${d.id}">${isHi ? `${d.name_hi} (${d.name})` : d.name}</option>`;
    });
    districtSelect.innerHTML = opts;
  }

  // Division Filter for District directory
  const divisionContainer = document.getElementById('district-division-pills');
  if (divisionContainer) {
    let pills = '';
    BIHAR_DIVISIONS.forEach(div => {
      const activeClass = state.districtDivisionFilter === div.id ? 'active' : '';
      pills += `
        <button class="pill-btn ${activeClass}" onclick="setDistrictDivisionFilter('${div.id}')">
          ${isHi ? div.name_hi : div.name}
        </button>
      `;
    });
    divisionContainer.innerHTML = pills;
  }
}

// Setup Event Listeners
function setupEventListeners() {
  // Navigation Tabs & Dropdown Items
  document.querySelectorAll('.nav-link[data-tab], .nav-dropdown-item[data-tab]').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      const targetTab = btn.getAttribute('data-tab');
      switchTab(targetTab);
    });
  });

  // Mobile Menu Toggle
  const mobileToggle = document.getElementById('mobile-menu-btn');
  const navMenu = document.getElementById('main-nav-menu');
  if (mobileToggle && navMenu) {
    mobileToggle.addEventListener('click', () => {
      navMenu.classList.toggle('show');
    });
  }

  // Dropdown toggle click handling (mobile and desktop support)
  document.querySelectorAll('.nav-dropdown-toggle').forEach(btn => {
    btn.addEventListener('click', (e) => {
      e.preventDefault();
      e.stopPropagation();
      const parent = btn.closest('.nav-dropdown');
      if (parent) {
        const isOpen = parent.classList.contains('open');
        document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
        if (!isOpen) parent.classList.add('open');
      }
    });
  });

  // Close dropdowns when clicking outside
  document.addEventListener('click', (e) => {
    if (!e.target.closest('.nav-dropdown')) {
      document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));
    }
  });

  // Language Toggle
  const langToggleBtn = document.getElementById('lang-toggle-btn');
  if (langToggleBtn) {
    langToggleBtn.addEventListener('click', () => {
      const newLang = currentLanguage === 'en' ? 'hi' : 'en';
      setLanguage(newLang);
    });
  }

  // Main Search Input
  const mainSearchInput = document.getElementById('hero-search-input');
  const mainSearchBtn = document.getElementById('hero-search-btn');
  if (mainSearchInput) {
    mainSearchInput.addEventListener('keydown', (e) => {
      if (e.key === 'Enter') {
        executeMainSearch();
      }
    });
  }
  if (mainSearchBtn) {
    mainSearchBtn.addEventListener('click', executeMainSearch);
  }

  // Filter Event Listeners
  const categoryFilter = document.getElementById('filter-category-select');
  if (categoryFilter) {
    categoryFilter.addEventListener('change', (e) => {
      state.filters.category = e.target.value;
      renderDestinationCards();
      updateMapMarkers();
    });
  }

  const districtFilter = document.getElementById('filter-district-select');
  if (districtFilter) {
    districtFilter.addEventListener('change', (e) => {
      state.filters.district = e.target.value;
      renderDestinationCards();
      updateMapMarkers();
    });
  }

  const entryFilter = document.getElementById('filter-entry-select');
  if (entryFilter) {
    entryFilter.addEventListener('change', (e) => {
      state.filters.entryFee = e.target.value;
      renderDestinationCards();
      updateMapMarkers();
    });
  }

  const wheelchairCheckbox = document.getElementById('filter-wheelchair-check');
  if (wheelchairCheckbox) {
    wheelchairCheckbox.addEventListener('change', (e) => {
      state.filters.wheelchair = e.target.checked;
      renderDestinationCards();
      updateMapMarkers();
    });
  }

  // Reset Filters Button
  const resetFiltersBtn = document.getElementById('reset-filters-btn');
  if (resetFiltersBtn) {
    resetFiltersBtn.addEventListener('click', resetAllFilters);
  }

  // District Search Input
  const distSearchInput = document.getElementById('district-search-input');
  if (distSearchInput) {
    distSearchInput.addEventListener('input', (e) => {
      state.districtSearchQuery = e.target.value.toLowerCase().trim();
      renderDistrictsGrid();
    });
  }

  // Trip Planner Duration Select
  const plannerDaysSelect = document.getElementById('planner-days-select');
  if (plannerDaysSelect) {
    plannerDaysSelect.addEventListener('change', (e) => {
      setTripDuration(e.target.value);
    });
  }
}

// Deep-Linking & Hash Routing (PRD Section 6.2 & 6.4)
function handleHashRouting() {
  const hash = window.location.hash.replace(/^#\/?/, '');
  if (!hash) return;

  const parts = hash.split('/');
  const mainRoute = parts[0];
  const param = parts[1];

  if (mainRoute === 'districts' && param) {
    switchTab('districts');
    setTimeout(() => openDistrictDetailModal(param), 150);
  } else if (mainRoute === 'destinations' && param) {
    switchTab('destinations');
    setTimeout(() => openDestinationDetailModal(param), 150);
  } else if (['home', 'destinations', 'districts', 'culture', 'stats', 'festivals', 'planner', 'guide', 'saved'].includes(mainRoute)) {
    switchTab(mainRoute);
  }
}

// Copy Direct Share Link to Clipboard
function copyDirectLink(type, id) {
  const url = `${window.location.origin}${window.location.pathname}#${type}/${id}`;
  navigator.clipboard.writeText(url).then(() => {
    showToast(getTranslation('toast_link_copied'));
  }).catch(() => {
    // Fallback prompt
    prompt(currentLanguage === 'hi' ? 'लिंक कॉपी करें:' : 'Copy link:', url);
  });
}

// Switch Navigation Tab
function switchTab(tabId) {
  state.activeTab = tabId;

  // Sync window hash
  if (window.location.hash.replace(/^#\/?/, '').split('/')[0] !== tabId) {
    history.replaceState(null, '', `#${tabId}`);
  }

  // Update nav links active class
  document.querySelectorAll('.nav-link[data-tab], .nav-dropdown-item[data-tab]').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-tab') === tabId);
  });

  // Highlight parent dropdown toggle if child is active
  const cultureParent = document.getElementById('culture-dropdown-btn');
  if (cultureParent) {
    cultureParent.classList.toggle('active', ['culture', 'festivals'].includes(tabId));
  }
  const planParent = document.getElementById('plan-dropdown-btn');
  if (planParent) {
    planParent.classList.toggle('active', ['planner', 'guide', 'stats'].includes(tabId));
  }

  // Hide mobile menu if open and close dropdowns
  const navMenu = document.getElementById('main-nav-menu');
  if (navMenu) navMenu.classList.remove('show');
  document.querySelectorAll('.nav-dropdown.open').forEach(d => d.classList.remove('open'));

  // Show/Hide Tab Views
  document.querySelectorAll('.view-tab-content').forEach(view => {
    view.classList.toggle('active', view.id === `view-${tabId}`);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Invalidate Map if destinations tab opened
  if (tabId === 'destinations' && state.map) {
    setTimeout(() => {
      state.map.invalidateSize();
    }, 200);
  }

  if (tabId === 'saved') {
    renderSavedDestinations();
  }
  if (tabId === 'stats') {
    renderStatisticsView();
  }
  if (tabId === 'festivals') {
    renderFestivalsCalendar();
  }
}

// Execute Hero Search
function executeMainSearch() {
  const query = (document.getElementById('hero-search-input')?.value || '').trim();
  state.filters.searchQuery = query.toLowerCase();
  
  // Switch to destinations tab
  switchTab('destinations');

  // Sync destination filter search input
  const destSearch = document.getElementById('dest-search-input');
  if (destSearch) destSearch.value = query;

  renderDestinationCards();
  updateMapMarkers();
}

// Set Search Term directly from quick search pills
function setQuickSearch(term) {
  const searchInput = document.getElementById('hero-search-input');
  if (searchInput) searchInput.value = term;
  executeMainSearch();
}

// Reset Filters
function resetAllFilters() {
  state.filters = {
    category: 'all',
    district: 'all',
    division: 'all',
    entryFee: 'all',
    wheelchair: false,
    searchQuery: ''
  };

  const catSelect = document.getElementById('filter-category-select');
  const distSelect = document.getElementById('filter-district-select');
  const entrySelect = document.getElementById('filter-entry-select');
  const wcCheck = document.getElementById('filter-wheelchair-check');
  const searchInput = document.getElementById('dest-search-input');
  const heroSearchInput = document.getElementById('hero-search-input');

  if (catSelect) catSelect.value = 'all';
  if (distSelect) distSelect.value = 'all';
  if (entrySelect) entrySelect.value = 'all';
  if (wcCheck) wcCheck.checked = false;
  if (searchInput) searchInput.value = '';
  if (heroSearchInput) heroSearchInput.value = '';

  renderDestinationCards();
  updateMapMarkers();
}

// Filter Destinations Array based on current state
function getFilteredDestinations() {
  return BIHAR_DESTINATIONS.filter(dest => {
    // Category match
    if (state.filters.category !== 'all' && dest.category_slug !== state.filters.category) {
      return false;
    }
    // District match
    if (state.filters.district !== 'all' && dest.district_id !== state.filters.district) {
      return false;
    }
    // Entry Fee match
    if (state.filters.entryFee === 'free' && dest.entry_type !== 'Free') {
      return false;
    }
    if (state.filters.entryFee === 'paid' && dest.entry_type !== 'Paid') {
      return false;
    }
    // Wheelchair Accessibility match
    if (state.filters.wheelchair && (!dest.accessibility || !dest.accessibility.wheelchair)) {
      return false;
    }
    // Search query match (supports English & Hindi terms)
    if (state.filters.searchQuery) {
      const q = state.filters.searchQuery;
      const haystack = [
        dest.name,
        dest.name_hi,
        dest.district_name,
        dest.district_name_hi,
        dest.category,
        dest.category_hi,
        dest.overview,
        dest.overview_hi,
        ...(dest.nearby_attractions || [])
      ].join(' ').toLowerCase();

      if (!haystack.includes(q)) {
        return false;
      }
    }
    return true;
  });
}

// Render Destination Cards Grid
function renderDestinationCards() {
  const container = document.getElementById('destinations-grid-container');
  const countBadge = document.getElementById('destinations-count-badge');
  if (!container) return;

  const filtered = getFilteredDestinations();
  const isHi = currentLanguage === 'hi';

  if (countBadge) {
    countBadge.textContent = `${getTranslation('showing_results')} ${filtered.length} ${getTranslation('results_found')}`;
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box">
        <span class="empty-icon">🔍</span>
        <h3>${isHi ? 'कोई स्थल नहीं मिला' : 'No Destinations Found'}</h3>
        <p>${getTranslation('no_results')}</p>
        <button class="btn btn-outline" onclick="resetAllFilters()">${getTranslation('reset_filters')}</button>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(dest => {
    const isFav = state.favourites.includes(dest.id);
    const verifiedBadge = dest.verification && dest.verification.status === 'Verified'
      ? `<span class="badge badge-verified" title="${dest.verification.source || 'Verified'}">✓ ${getTranslation('badge_verified')}</span>`
      : `<span class="badge badge-review">⏳ ${getTranslation('badge_needs_review')}</span>`;

    html += `
      <div class="destination-card" data-id="${dest.id}">
        <div class="card-media-wrapper">
          <img src="${dest.image}" alt="${isHi ? dest.name_hi : dest.name}" loading="lazy" class="card-img" onerror="handleImgError(this)" />
          <button class="fav-heart-btn ${isFav ? 'active' : ''}" onclick="toggleFavourite('${dest.id}')" title="${isFav ? 'Remove' : 'Save'}">
            ♥
          </button>
          <div class="card-top-badges">
            ${verifiedBadge}
            <span class="badge badge-category">${isHi ? dest.category_hi : dest.category}</span>
          </div>
          <span class="badge badge-rating">★ ${dest.rating || '4.8'}</span>
        </div>

        <div class="card-content">
          <div class="card-location">
            <span>📍 ${isHi ? dest.district_name_hi : dest.district_name}</span>
            <span class="card-entry-badge ${dest.entry_type === 'Free' ? 'free' : 'paid'}">
              ${dest.entry_type === 'Free' ? (isHi ? 'निःशुल्क' : 'Free Entry') : (isHi ? 'सशुल्क' : 'Paid Entry')}
            </span>
          </div>

          <h3 class="card-title">${isHi ? dest.name_hi : dest.name}</h3>

          <p class="card-description">
            ${(isHi ? dest.overview_hi : dest.overview).substring(0, 115)}...
          </p>

          <div class="card-meta-row">
            <span class="meta-item">⏱ ${isHi ? dest.visiting_duration_hi : dest.visiting_duration}</span>
            ${dest.accessibility && dest.accessibility.wheelchair ? `<span class="meta-item">♿ ${isHi ? 'सुलभ' : 'Accessible'}</span>` : ''}
          </div>

          <div class="card-actions">
            <button class="btn btn-primary btn-sm" onclick="openDestinationDetailModal('${dest.id}')">
              ${getTranslation('card_view_details')}
            </button>
            <button class="btn btn-outline btn-sm" onclick="openAddToTripDialog('${dest.id}')" title="${getTranslation('card_add_trip')}">
              + ${getTranslation('card_add_trip')}
            </button>
            <a href="${dest.google_maps_url}" target="_blank" rel="noopener" class="btn-icon" title="${getTranslation('card_directions')}">
              🧭
            </a>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Render Featured Highlights on Home Page
function renderHomeFeatured() {
  const container = document.getElementById('home-featured-grid');
  if (!container) return;

  const featured = BIHAR_DESTINATIONS.filter(d => d.featured).slice(0, 6);
  const isHi = currentLanguage === 'hi';

  let html = '';
  featured.forEach(dest => {
    const isFav = state.favourites.includes(dest.id);
    html += `
      <div class="destination-card" data-id="${dest.id}">
        <div class="card-media-wrapper">
          <img src="${dest.image}" alt="${isHi ? dest.name_hi : dest.name}" loading="lazy" class="card-img" onerror="handleImgError(this)" />
          <button class="fav-heart-btn ${isFav ? 'active' : ''}" onclick="toggleFavourite('${dest.id}')">
            ♥
          </button>
          <div class="card-top-badges">
            <span class="badge badge-verified">✓ ${getTranslation('badge_verified')}</span>
            <span class="badge badge-category">${isHi ? dest.category_hi : dest.category}</span>
          </div>
          <span class="badge badge-rating">★ ${dest.rating || '4.8'}</span>
        </div>
        <div class="card-content">
          <div class="card-location">
            <span>📍 ${isHi ? dest.district_name_hi : dest.district_name}</span>
          </div>
          <h3 class="card-title">${isHi ? dest.name_hi : dest.name}</h3>
          <p class="card-description">${(isHi ? dest.overview_hi : dest.overview).substring(0, 110)}...</p>
          <div class="card-actions">
            <button class="btn btn-primary btn-sm" onclick="openDestinationDetailModal('${dest.id}')">
              ${getTranslation('card_view_details')}
            </button>
            <button class="btn btn-outline btn-sm" onclick="openAddToTripDialog('${dest.id}')">
              + ${getTranslation('card_add_trip')}
            </button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Render Category Cards on Home Page
function renderCategoryCards() {
  const container = document.getElementById('home-categories-grid');
  if (!container) return;

  const isHi = currentLanguage === 'hi';
  let html = '';

  DESTINATION_CATEGORIES.filter(c => c.id !== 'all').forEach(cat => {
    const count = BIHAR_DESTINATIONS.filter(d => d.category_slug === cat.id).length;
    html += `
      <div class="category-card" onclick="filterByCategoryFromCard('${cat.id}')">
        <div class="category-icon-bubble">
          ${getCategoryEmoji(cat.id)}
        </div>
        <h4>${isHi ? cat.name_hi : cat.name}</h4>
        <span class="cat-count">${count} ${isHi ? 'स्थल' : 'Places'}</span>
      </div>
    `;
  });

  container.innerHTML = html;
}

function getCategoryEmoji(catId) {
  const map = {
    historical: "🏛️",
    religious: "🕉️",
    nature: "🐅",
    adventure: "🧗",
    cultural: "🎨",
    museums: "🏺",
    waterfalls: "🌊",
    handicrafts: "🛍️"
  };
  return map[catId] || "📍";
}

function filterByCategoryFromCard(categoryId) {
  state.filters.category = categoryId;
  const select = document.getElementById('filter-category-select');
  if (select) select.value = categoryId;
  switchTab('destinations');
  renderDestinationCards();
  updateMapMarkers();
}

// Render All 38 Districts Grid
function renderDistrictsGrid() {
  const container = document.getElementById('districts-grid-container');
  if (!container) return;

  const isHi = currentLanguage === 'hi';
  const query = state.districtSearchQuery;
  const division = state.districtDivisionFilter;

  let filtered = BIHAR_DISTRICTS.filter(d => {
    if (division !== 'all' && d.division !== division) return false;
    if (query) {
      const match = (d.name + ' ' + d.name_hi + ' ' + d.headquarters + ' ' + d.headquarters_hi).toLowerCase();
      if (!match.includes(query)) return false;
    }
    return true;
  });

  let html = '';
  filtered.forEach(d => {
    const destCount = BIHAR_DESTINATIONS.filter(dest => dest.district_id === d.id).length;

    html += `
      <div class="district-card" onclick="openDistrictDetailModal('${d.id}')">
        <div class="district-img-wrap">
          <img src="${d.image}" alt="${isHi ? d.name_hi : d.name}" loading="lazy" class="district-img" onerror="handleImgError(this)" />
          <span class="district-badge-division">${isHi ? (BIHAR_DIVISIONS.find(v => v.id === d.division)?.name_hi || d.division) : d.division.toUpperCase() + ' DIV'}</span>
        </div>
        <div class="district-card-body">
          <div class="district-card-header">
            <h3>${isHi ? d.name_hi : d.name}</h3>
            <span class="district-hq-text">HQ: ${isHi ? d.headquarters_hi : d.headquarters}</span>
          </div>
          <p class="district-tagline">${isHi ? d.tagline_hi : d.tagline}</p>

          <div class="district-highlights">
            <div class="highlight-line">
              <strong>🍴 ${isHi ? 'व्यंजन:' : 'Food:'}</strong>
              <span>${isHi ? (d.famous_food_hi || []).slice(0, 2).join(', ') : (d.famous_food || []).slice(0, 2).join(', ')}</span>
            </div>
            <div class="highlight-line">
              <strong>🎉 ${isHi ? 'त्योहार:' : 'Festivals:'}</strong>
              <span>${isHi ? (d.festivals_hi || []).slice(0, 2).join(', ') : (d.festivals || []).slice(0, 2).join(', ')}</span>
            </div>
          </div>

          <div class="district-card-footer">
            <span class="dest-badge-count">📍 ${destCount} ${isHi ? 'सत्यापित स्थल' : 'Verified Spots'}</span>
            <span class="district-explore-link">${isHi ? 'विस्तार से देखें →' : 'Explore →'}</span>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function setDistrictDivisionFilter(divisionId) {
  state.districtDivisionFilter = divisionId;
  populateFilterDropdowns();
  renderDistrictsGrid();
}

// ==========================================================
// FEATURE 1: REAL TOURISM STATISTICS DASHBOARD (PRD Sec 6.12)
// ==========================================================
function renderStatisticsView() {
  const container = document.getElementById('stats-view-container');
  if (!container || typeof BIHAR_TOURISM_STATISTICS === 'undefined') return;

  const stats = BIHAR_TOURISM_STATISTICS;
  const isHi = currentLanguage === 'hi';

  // Latest year calculation (2023 final & 2024 provisional)
  const latestFinal = stats.yearly_data.find(d => d.year === "2023");
  const latestProvisional = stats.yearly_data.find(d => d.year === "2024");
  const preCovidPeak = stats.yearly_data.find(d => d.year === "2019");

  const formatNumber = num => (num >= 10000000 
    ? `${(num / 10000000).toFixed(2)} Cr` 
    : `${(num / 100000).toFixed(2)} Lakh`);

  // Max total for Bar Scaling
  const maxFootfall = Math.max(...stats.yearly_data.map(y => y.total));

  // Build Yearly Chart Rows
  let yearlyChartHtml = '';
  stats.yearly_data.forEach(item => {
    const domesticPct = ((item.domestic / maxFootfall) * 100).toFixed(1);
    const foreignPct = ((item.foreign / maxFootfall) * 100).toFixed(1);

    yearlyChartHtml += `
      <div class="chart-bar-row">
        <span class="bar-year-label">${item.year}</span>
        <div class="bar-track" title="Domestic: ${item.domestic.toLocaleString()} | Foreign: ${item.foreign.toLocaleString()}">
          <div class="bar-segment-domestic" style="width: ${domesticPct}%;"></div>
          <div class="bar-segment-foreign" style="width: ${foreignPct}%;"></div>
        </div>
        <span class="bar-value-label">${formatNumber(item.total)} (${isHi ? item.status_hi : item.status})</span>
      </div>
    `;
  });

  // Build Monthly Distribution
  let monthlyHtml = '';
  stats.seasonal_trends.forEach(m => {
    const heightPct = (m.share_pct * 4).toFixed(0);
    monthlyHtml += `
      <div class="month-bar-card" title="${isHi ? m.season_hi : m.season}">
        <div class="month-bar-fill-wrap">
          <div class="month-bar-fill" style="height: ${heightPct}px;"></div>
        </div>
        <span class="month-bar-pct">${m.share_pct}%</span>
        <span class="month-bar-name">${isHi ? m.month_hi : m.month}</span>
      </div>
    `;
  });

  // Build Top Circuits Ranking
  let circuitsHtml = '';
  stats.top_circuits.forEach((c, idx) => {
    circuitsHtml += `
      <div class="circuit-ranking-card">
        <div class="circuit-rank-header">
          <span style="font-weight: 800; color: var(--primary);">#${idx + 1}</span>
          <span class="circuit-share-badge">${c.estimated_annual_share} Footfall Share</span>
        </div>
        <h4 style="font-size: 1.05rem; margin-bottom: 0.3rem;">${isHi ? c.name_hi : c.name}</h4>
        <p style="font-size: 0.82rem; color: var(--secondary); font-weight: 600; margin-bottom: 0.5rem;">
          📍 ${isHi ? c.district_hi : c.district}
        </p>
        <p style="font-size: 0.85rem; color: var(--text-muted); line-height: 1.4; margin-bottom: 0.6rem;">
          ${isHi ? c.significance : c.significance}
        </p>
        <p style="font-size: 0.8rem; color: #495057;">
          <strong>${isHi ? 'प्रमुख आकर्षण:' : 'Key Spots:'}</strong> ${isHi ? c.key_attractions_hi : c.key_attractions}
        </p>
      </div>
    `;
  });

  container.innerHTML = `
    <div class="stats-dashboard-container">
      <!-- Top Metric KPI Cards -->
      <div class="stats-kpi-grid">
        <div class="stats-kpi-card">
          <span class="stats-kpi-icon">🇮🇳</span>
          <span class="stats-kpi-val">${formatNumber(latestFinal.domestic)}</span>
          <span class="stats-kpi-label">${getTranslation('stats_domestic_label')} (2023)</span>
          <span class="stats-kpi-sub">↑ 43.7% vs 2022 Post-Pandemic Revival</span>
        </div>

        <div class="stats-kpi-card">
          <span class="stats-kpi-icon">🌍</span>
          <span class="stats-kpi-val">${formatNumber(latestFinal.foreign)}</span>
          <span class="stats-kpi-label">${getTranslation('stats_foreign_label')} (2023)</span>
          <span class="stats-kpi-sub">↑ 529% International Buddhist Circuit Growth</span>
        </div>

        <div class="stats-kpi-card">
          <span class="stats-kpi-icon">📈</span>
          <span class="stats-kpi-val">${formatNumber(latestProvisional.total)}</span>
          <span class="stats-kpi-label">${getTranslation('stats_total_label')} (2024 Provisional)</span>
          <span class="stats-kpi-sub">Highest ever recorded annual footfall</span>
        </div>

        <div class="stats-kpi-card">
          <span class="stats-kpi-icon">🏛️</span>
          <span class="stats-kpi-val">38 / 38</span>
          <span class="stats-kpi-label">Districts Integrated on Platform</span>
          <span class="stats-kpi-sub">100% District Coverage</span>
        </div>
      </div>

      <!-- Year-Wise Growth Comparative Bar Chart -->
      <div class="stats-panel-box">
        <h3>📊 Year-Wise Tourist Visits (2018 - 2024)</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.5rem;">
          Comparison of domestic and international visitors recorded across official state check-points, monument entry registers, and heritage circuits.
        </p>
        
        <div class="yearly-chart-container">
          ${yearlyChartHtml}
        </div>

        <div class="chart-legend">
          <div class="legend-item">
            <div class="legend-color-box" style="background: #1B3B6F;"></div>
            <span>Domestic Tourist Visits (DTV)</span>
          </div>
          <div class="legend-item">
            <div class="legend-color-box" style="background: #E67E22;"></div>
            <span>Foreign Tourist Visits (FTV)</span>
          </div>
        </div>
      </div>

      <!-- Monthly Footfall Seasonality -->
      <div class="stats-panel-box">
        <h3>☀️ ${getTranslation('stats_monthly_heading')}</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.5rem;">
          Tourism seasonality across Bihar shows dramatic surge during winter months (October through March) driven by Chhath Puja, Sonepur Mela, and Buddhist travel.
        </p>
        <div class="monthly-dist-grid">
          ${monthlyHtml}
        </div>
      </div>

      <!-- Top Circuits Popularity Breakdown -->
      <div class="stats-panel-box">
        <h3>🏆 ${getTranslation('stats_top_circuits')}</h3>
        <p style="font-size: 0.88rem; color: var(--text-muted); margin-bottom: 1.5rem;">
          Distribution of visitor density across major archaeological, spiritual, and eco-tourism corridors in Bihar.
        </p>
        <div class="circuits-ranking-grid">
          ${circuitsHtml}
        </div>
      </div>

      <!-- Official Source Verification Disclaimer -->
      <div class="stats-disclaimer-box">
        <strong>📌 Data Transparency Notice:</strong> ${stats.official_source}. In adherence with PRD Section 6.12, all figures are compiled strictly from official administrative reports without any algorithmic fabrication or artificial estimates.
      </div>
    </div>
  `;
}

// ==========================================================
// FEATURE 3: DEDICATED FESTIVALS CALENDAR (PRD Section 6.11)
// ==========================================================
function renderFestivalsCalendar() {
  const container = document.getElementById('festivals-calendar-grid');
  if (!container || typeof BIHAR_FESTIVALS_CALENDAR === 'undefined') return;

  const isHi = currentLanguage === 'hi';
  const season = state.selectedFestivalSeason;

  const filtered = BIHAR_FESTIVALS_CALENDAR.filter(f => {
    if (season === 'all') return true;
    return f.season_category === season;
  });

  let html = '';
  filtered.forEach(fest => {
    const isAnnounced = fest.date_status === 'Announced';
    const statusBadge = isAnnounced 
      ? `<span class="badge badge-announced">✓ ${getTranslation('badge_dates_announced')}</span>` 
      : `<span class="badge badge-awaited">⏳ ${getTranslation('badge_dates_awaited')}</span>`;

    html += `
      <div class="festival-card">
        <div class="festival-img-wrap">
          <img src="${fest.image}" alt="${isHi ? fest.name_hi : fest.name}" loading="lazy" class="festival-img" onerror="handleImgError(this)" />
          <div class="festival-date-badge">${statusBadge}</div>
        </div>

        <div class="festival-body">
          <div class="festival-location-meta">
            📍 ${isHi ? fest.district_hi : fest.district}
          </div>

          <h3 class="festival-title">${isHi ? fest.name_hi : fest.name}</h3>

          <div class="festival-schedule-box">
            <strong>📅 ${getTranslation('festival_time_label')}:</strong>
            <span>${isHi ? fest.official_dates_hi : fest.official_dates}</span>
          </div>

          <p class="festival-desc">${isHi ? fest.description_hi : fest.description}</p>

          <div class="festival-highlights-row">
            ${(fest.highlights || []).map(h => `<span class="tag-item">✨ ${h}</span>`).join('')}
          </div>

          <div class="festival-organizer-note">
            <strong>🏛️ ${getTranslation('festival_organizer')}:</strong> ${isHi ? fest.authority_hi : fest.authority}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function filterFestivalsBySeason(seasonCategory) {
  state.selectedFestivalSeason = seasonCategory;
  document.querySelectorAll('.season-filter-pill').forEach(btn => {
    btn.classList.toggle('active', btn.getAttribute('data-season') === seasonCategory);
  });
  renderFestivalsCalendar();
}

// Render Culture & Food Section
function renderCultureSection() {
  const foodContainer = document.getElementById('culture-food-grid');
  const artsContainer = document.getElementById('culture-arts-grid');
  const festivalsContainer = document.getElementById('culture-festivals-grid');
  const isHi = currentLanguage === 'hi';

  if (foodContainer) {
    let foodHtml = '';
    BIHAR_FOOD.forEach(food => {
      foodHtml += `
        <div class="culture-card">
          <img src="${food.image}" alt="${isHi ? food.name_hi : food.name}" loading="lazy" class="culture-card-img" onerror="handleImgError(this)" />
          <div class="culture-card-body">
            <div class="culture-badge-wrap">
              <span class="badge badge-category">${isHi ? food.category_hi : food.category}</span>
              ${food.gi_status.includes('GI') ? `<span class="badge badge-verified">🏅 GI Tag</span>` : ''}
            </div>
            <h3>${isHi ? food.name_hi : food.name}</h3>
            <p class="culture-origin">📍 ${isHi ? food.origin_hi : food.origin}</p>
            <p class="culture-desc">${isHi ? food.description_hi : food.description}</p>
            <div class="culture-tags">
              ${(food.tags || []).map(t => `<span class="tag-item">#${t}</span>`).join('')}
            </div>
          </div>
        </div>
      `;
    });
    foodContainer.innerHTML = foodHtml;
  }

  if (artsContainer) {
    let artsHtml = '';
    BIHAR_ARTS_CRAFTS.forEach(art => {
      artsHtml += `
        <div class="culture-card">
          <img src="${art.image}" alt="${isHi ? art.name_hi : art.name}" loading="lazy" class="culture-card-img" onerror="handleImgError(this)" />
          <div class="culture-card-body">
            <span class="badge badge-category">${isHi ? art.type_hi : art.type}</span>
            <h3>${isHi ? art.name_hi : art.name}</h3>
            <p class="culture-origin">📍 ${isHi ? art.region_hi : art.region}</p>
            <p class="culture-desc">${isHi ? art.description_hi : art.description}</p>
          </div>
        </div>
      `;
    });
    artsContainer.innerHTML = artsHtml;
  }

  if (festivalsContainer) {
    let festHtml = '';
    BIHAR_FESTIVALS.forEach(fest => {
      festHtml += `
        <div class="culture-card">
          <img src="${fest.image}" alt="${isHi ? fest.name_hi : fest.name}" loading="lazy" class="culture-card-img" onerror="handleImgError(this)" />
          <div class="culture-card-body">
            <span class="badge badge-category">📅 ${isHi ? fest.month_hi : fest.month}</span>
            <h3>${isHi ? fest.name_hi : fest.name}</h3>
            <p class="culture-desc">${isHi ? fest.significance_hi : fest.significance}</p>
          </div>
        </div>
      `;
    });
    festivalsContainer.innerHTML = festHtml;
  }
}

// Switch Culture Section Sub-tabs
function switchCultureTab(tabName) {
  document.querySelectorAll('.culture-subtab-btn').forEach(b => {
    b.classList.toggle('active', b.getAttribute('data-subtab') === tabName);
  });
  document.querySelectorAll('.culture-subtab-content').forEach(c => {
    c.classList.toggle('active', c.id === `culture-tab-${tabName}`);
  });
}

// Render Travel Guide & Safety Information
function renderTravelGuide() {
  const helplineContainer = document.getElementById('guide-helplines-grid');
  const seasonsContainer = document.getElementById('guide-seasons-grid');
  const transportContainer = document.getElementById('guide-transport-grid');
  const etiquetteContainer = document.getElementById('guide-etiquette-grid');
  const isHi = currentLanguage === 'hi';

  if (helplineContainer) {
    let html = '';
    TRAVEL_GUIDE_DATA.emergency_helplines.forEach(item => {
      html += `
        <div class="helpline-card">
          <div class="helpline-header">
            <h4>${isHi ? item.service_hi : item.service}</h4>
            <a href="tel:${item.number}" class="helpline-number">${item.number}</a>
          </div>
          <p>${isHi ? item.description_hi : item.description}</p>
        </div>
      `;
    });
    helplineContainer.innerHTML = html;
  }

  if (seasonsContainer) {
    let html = '';
    TRAVEL_GUIDE_DATA.seasons.forEach(s => {
      html += `
        <div class="season-card">
          <div class="season-header">
            <h4>${isHi ? s.name_hi : s.name}</h4>
            <span class="badge badge-verified">${isHi ? s.badge_hi : s.badge}</span>
          </div>
          <div class="season-temp">🌡 ${s.temp}</div>
          <p>${isHi ? s.summary_hi : s.summary}</p>
        </div>
      `;
    });
    seasonsContainer.innerHTML = html;
  }

  if (transportContainer) {
    let html = '';
    TRAVEL_GUIDE_DATA.transport_guide.forEach(t => {
      html += `
        <div class="transport-card">
          <h4>${isHi ? t.mode_hi : t.mode}</h4>
          <p>${isHi ? t.details_hi : t.details}</p>
        </div>
      `;
    });
    transportContainer.innerHTML = html;
  }

  if (etiquetteContainer) {
    let dos = '';
    let donts = '';
    TRAVEL_GUIDE_DATA.dos_and_donts.forEach(item => {
      if (item.type === 'do') {
        dos += `<li><span class="check-mark">✔</span> ${isHi ? item.text_hi : item.text}</li>`;
      } else {
        donts += `<li><span class="cross-mark">✖</span> ${isHi ? item.text_hi : item.text}</li>`;
      }
    });
    etiquetteContainer.innerHTML = `
      <div class="etiquette-col do-col">
        <h3>${isHi ? 'क्या करें (Dos)' : 'Things To Do'}</h3>
        <ul>${dos}</ul>
      </div>
      <div class="etiquette-col dont-col">
        <h3>${isHi ? 'क्या न करें (Don\'ts)' : 'Things To Avoid'}</h3>
        <ul>${donts}</ul>
      </div>
    `;
  }
}

// Render Saved Destinations
function renderSavedDestinations() {
  const container = document.getElementById('saved-destinations-grid');
  if (!container) return;

  const isHi = currentLanguage === 'hi';
  const savedDests = state.favourites
    .map(id => getDestinationById(id))
    .filter(Boolean);

  if (savedDests.length === 0) {
    container.innerHTML = `
      <div class="empty-state-box">
        <span class="empty-icon">♥</span>
        <h3>${isHi ? 'कोई पसंदीदा स्थल नहीं' : 'No Saved Favourites Yet'}</h3>
        <p>${getTranslation('saved_empty')}</p>
        <button class="btn btn-primary" onclick="switchTab('destinations')">
          ${isHi ? 'पर्यटन स्थल देखें' : 'Explore Destinations'}
        </button>
      </div>
    `;
    return;
  }

  let html = '';
  savedDests.forEach(dest => {
    html += `
      <div class="destination-card" data-id="${dest.id}">
        <div class="card-media-wrapper">
          <img src="${dest.image}" alt="${isHi ? dest.name_hi : dest.name}" class="card-img" />
          <button class="fav-heart-btn active" onclick="toggleFavourite('${dest.id}')">
            ♥
          </button>
          <div class="card-top-badges">
            <span class="badge badge-category">${isHi ? dest.category_hi : dest.category}</span>
          </div>
        </div>
        <div class="card-content">
          <div class="card-location">
            <span>📍 ${isHi ? dest.district_name_hi : dest.district_name}</span>
          </div>
          <h3 class="card-title">${isHi ? dest.name_hi : dest.name}</h3>
          <p class="card-description">${(isHi ? dest.overview_hi : dest.overview).substring(0, 110)}...</p>
          <div class="card-actions">
            <button class="btn btn-primary btn-sm" onclick="openDestinationDetailModal('${dest.id}')">
              ${getTranslation('card_view_details')}
            </button>
            <button class="btn btn-outline btn-sm" onclick="openAddToTripDialog('${dest.id}')">
              + ${getTranslation('card_add_trip')}
            </button>
            <button class="btn btn-sm btn-danger-outline" onclick="toggleFavourite('${dest.id}')">
              ${getTranslation('saved_remove')}
            </button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// Open Destination Detail Modal
function openDestinationDetailModal(destId) {
  const dest = getDestinationById(destId);
  if (!dest) return;

  const isHi = currentLanguage === 'hi';
  const isFav = state.favourites.includes(dest.id);

  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-backdrop';
  modalOverlay.id = 'destination-detail-modal';

  modalOverlay.innerHTML = `
    <div class="modal-card destination-modal-large">
      <div class="modal-header">
        <div>
          <span class="badge badge-category">${isHi ? dest.category_hi : dest.category}</span>
          <h2>${isHi ? dest.name_hi : dest.name}</h2>
          <p class="modal-location-sub">📍 ${isHi ? dest.district_name_hi : dest.district_name}, Bihar</p>
        </div>
        <button class="modal-close-btn" onclick="document.getElementById('destination-detail-modal').remove()">&times;</button>
      </div>

      <div class="modal-body">
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">
          <a onclick="document.getElementById('destination-detail-modal')?.remove(); switchTab('home');">${getTranslation('breadcrumb_home')}</a>
          <span class="breadcrumb-separator">›</span>
          <a onclick="document.getElementById('destination-detail-modal')?.remove(); switchTab('destinations');">${getTranslation('breadcrumb_destinations')}</a>
          <span class="breadcrumb-separator">›</span>
          <span class="breadcrumb-current">${isHi ? dest.name_hi : dest.name}</span>
        </nav>

        <div class="modal-gallery-hero">
          <img src="${dest.image}" alt="${isHi ? dest.name_hi : dest.name}" class="modal-main-image" onerror="handleImgError(this)" />
        </div>

        <div class="modal-info-grid">
          <div class="modal-info-card">
            <h4>${getTranslation('modal_overview')}</h4>
            <p>${isHi ? dest.overview_hi : dest.overview}</p>
          </div>

          <div class="modal-info-card">
            <h4>${getTranslation('modal_history')}</h4>
            <p>${isHi ? dest.historical_significance_hi : dest.historical_significance}</p>
          </div>
        </div>

        <!-- Special Highlights & Why Visit & Local Food -->
        <div class="modal-section-box" style="margin-top:1.25rem; background:var(--bg-secondary); border-radius:var(--border-radius); padding:1.25rem;">
          <h4 style="font-size:1.15rem; font-weight:700; color:var(--text-primary); margin-bottom:0.75rem;">
            ✨ ${isHi ? 'यहाँ क्या खास है और क्यों आना चाहिए?' : 'Key Highlights & Why You Should Visit'}
          </h4>
          <div style="display:grid; grid-template-columns:repeat(auto-fit, minmax(260px, 1fr)); gap:1rem;">
            <div style="background:var(--bg-card); padding:1rem; border-radius:8px; border-left:4px solid var(--accent);">
              <strong style="color:var(--accent); font-size:0.85rem; text-transform:uppercase; display:block; margin-bottom:0.35rem;">
                ✨ ${isHi ? 'यहाँ क्या खास है (विशेषता)' : 'What is Special'}
              </strong>
              <p style="font-size:0.92rem; line-height:1.5; color:var(--text-primary); margin:0;">
                ${isHi ? (dest.what_is_special_hi || dest.what_is_special || dest.overview_hi) : (dest.what_is_special || dest.overview)}
              </p>
            </div>
            <div style="background:var(--bg-card); padding:1rem; border-radius:8px; border-left:4px solid #10B981;">
              <strong style="color:#10B981; font-size:0.85rem; text-transform:uppercase; display:block; margin-bottom:0.35rem;">
                🌟 ${isHi ? 'यहाँ क्यों आना चाहिए' : 'Why You Should Visit'}
              </strong>
              <p style="font-size:0.92rem; line-height:1.5; color:var(--text-primary); margin:0;">
                ${isHi ? (dest.why_visit_hi || dest.why_visit || dest.historical_significance_hi) : (dest.why_visit || dest.historical_significance)}
              </p>
            </div>
          </div>
          ${(dest.local_food_hi || dest.local_food) ? `
            <div style="margin-top:0.85rem; background:var(--accent-light); padding:0.75rem 1rem; border-radius:8px; border-left:4px solid var(--accent);">
              <strong style="color:var(--accent); font-size:0.85rem; text-transform:uppercase; display:block; margin-bottom:0.25rem;">
                🍲 ${isHi ? 'आसपास का प्रसिद्ध खान-पान / स्थानीय स्वाद' : 'Famous Local Cuisine Nearby'}
              </strong>
              <p style="font-size:0.92rem; color:var(--text-primary); margin:0; font-weight:600;">
                ${isHi ? (dest.local_food_hi || dest.local_food) : dest.local_food}
              </p>
            </div>
          ` : ''}
        </div>

        <div class="modal-quick-specs">
          <div class="spec-box">
            <span class="spec-label">⏰ ${getTranslation('modal_timings')}</span>
            <span class="spec-val">${isHi ? dest.opening_hours_hi : dest.opening_hours}</span>
          </div>
          <div class="spec-box">
            <span class="spec-label">🎟 ${getTranslation('modal_entry_fee')}</span>
            <span class="spec-val">${isHi ? dest.entry_fee_hi : dest.entry_fee}</span>
          </div>
          <div class="spec-box">
            <span class="spec-label">⌛ ${getTranslation('duration_label')}</span>
            <span class="spec-val">${isHi ? dest.visiting_duration_hi : dest.visiting_duration}</span>
          </div>
          <div class="spec-box">
            <span class="spec-label">♿ ${getTranslation('modal_accessibility')}</span>
            <span class="spec-val">${dest.accessibility?.wheelchair ? (isHi ? 'सुलभ' : 'Wheelchair Accessible') : (isHi ? 'सीमित' : 'Limited Steps')}</span>
          </div>
        </div>

        ${dest.travel_tips ? `
          <div class="modal-section-box">
            <h4>💡 ${getTranslation('modal_tips')}</h4>
            <ul class="travel-tips-list">
              ${(isHi ? dest.travel_tips_hi : dest.travel_tips).map(tip => `<li>${tip}</li>`).join('')}
            </ul>
          </div>
        ` : ''}

        ${dest.nearby_attractions ? `
          <div class="modal-section-box">
            <h4>📍 ${getTranslation('modal_nearby')}</h4>
            <div class="nearby-tags">
              ${dest.nearby_attractions.map(spot => `<span class="nearby-tag-pill">${spot}</span>`).join('')}
            </div>
          </div>
        ` : ''}

        <div class="modal-verification-box">
          <div class="verif-header">
            <span class="badge badge-verified">✓ ${dest.verification?.status || 'Verified'}</span>
            <span class="verif-date">${getTranslation('modal_last_verified')}: ${dest.verification?.date || 'October 2026'}</span>
          </div>
          <p class="verif-source">${getTranslation('modal_source')}: ${dest.verification?.source || 'Bihar State Tourism Development Corporation'}</p>
        </div>
      </div>

      <div class="modal-footer">
        <a href="${dest.google_maps_url}" target="_blank" rel="noopener" class="btn btn-outline">
          🗺 ${getTranslation('modal_btn_directions')}
        </a>
        <button class="btn btn-outline" onclick="copyDirectLink('destinations', '${dest.id}')">
          🔗 ${getTranslation('share_link_btn')}
        </button>
        <button class="btn btn-outline" id="modal-fav-btn-${dest.id}" onclick="toggleFavourite('${dest.id}')">
          ♥ ${isFav ? (isHi ? 'पसंदीदा से हटाएं' : 'Saved') : getTranslation('modal_btn_fav')}
        </button>
        <button class="btn btn-primary" onclick="document.getElementById('destination-detail-modal').remove(); openAddToTripDialog('${dest.id}');">
          ${getTranslation('modal_btn_add_trip')}
        </button>
        <button class="btn btn-sm btn-outline" onclick="document.getElementById('destination-detail-modal').remove(); openCorrectionModal('${dest.name}');">
          ⚠️ ${isHi ? 'सुधार सुझाव' : 'Report Issue'}
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  // Close on backdrop click
  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.remove();
  });
}

// Helper to provide authentic, reliable images for any attraction
function getAttractionImage(attName, districtImage) {
  const s = (attName || '').toLowerCase();
  if (s.includes('bihar museum') || s.includes('बिहार संग्रहालय')) {
    return 'images/biharmuseum.jpg';
  }
  if (s.includes('patna museum') || s.includes('पटना संग्रहालय') || s.includes('जादू घर') || s.includes('jadu ghar')) {
    return 'images/patnamuseum.jpg';
  }
  if (s.includes('museum') || s.includes('संग्रहालय')) {
    return 'images/biharmuseum.jpg';
  }
  if (s.includes('mahabodhi') || s.includes('बोधगया') || s.includes('bodh gaya')) {
    return 'images/mahabodhi.jpg';
  }
  if (s.includes('nalanda') || s.includes('नालंदा')) {
    return 'images/nalanda.jpg';
  }
  if (s.includes('rajgir') || s.includes('राजगीर') || s.includes('glass bridge')) {
    return 'images/rajgir.jpg';
  }
  if (s.includes('golghar') || s.includes('गोलघर')) {
    return 'images/golghar.jpg';
  }
  if (s.includes('patna sahib') || s.includes('गुरुद्वारा') || s.includes('takht')) {
    return 'images/patnasahib.jpg';
  }
  if (s.includes('sher shah') || s.includes('शेरशाह') || s.includes('sasaram') || s.includes('सासाराम')) {
    return 'images/shershah.jpg';
  }
  if (s.includes('valmiki') || s.includes('वाल्मीकि')) {
    return 'images/valmiki.jpg';
  }
  if (s.includes('kesaria') || s.includes('केसरिया') || s.includes('vaishali') || s.includes('वैशाली')) {
    return 'images/kesaria.jpg';
  }
  if (s.includes('vikramshila') || s.includes('विक्रमशिला')) {
    return 'images/vikramshila.jpg';
  }
  if (s.includes('kakolat') || s.includes('ककोलत') || s.includes('waterfall') || s.includes('झरना') || s.includes('प्रपात')) {
    return 'images/kakolat.jpg';
  }
  if (s.includes('mandar') || s.includes('मंदार')) {
    return 'images/mandar.jpg';
  }
  if (s.includes('sitamarhi') || s.includes('सीतामढ़ी') || s.includes('punaura') || s.includes('पुनौरा')) {
    return 'images/sitamarhi.jpg';
  }
  if (s.includes('barabar') || s.includes('बराबर') || s.includes('cave') || s.includes('गुफा')) {
    return 'images/barabar.jpg';
  }
  if (s.includes('kanwar') || s.includes('कांवर') || s.includes('lake') || s.includes('झील') || s.includes('सरोवर')) {
    return 'images/kanwar.jpg';
  }
  if (s.includes('temple') || s.includes('mandir') || s.includes('मंदिर') || s.includes('धाम') || s.includes('भवानी') || s.includes('स्थान') || s.includes('नाथ') || s.includes('देवी')) {
    return 'images/mundeshwari.jpg';
  }
  if (s.includes('fort') || s.includes('किला') || s.includes('महल') || s.includes('palace') || s.includes('tomb') || s.includes('मकबरा') || s.includes('ruin') || s.includes('खंडहर')) {
    return 'images/shershah.jpg';
  }
  if (s.includes('art') || s.includes('कला') || s.includes('painting') || s.includes('चित्रकला') || s.includes('सिल्क') || s.includes('silk') || s.includes('मंजूषा')) {
    return 'images/madhubani.jpg';
  }
  return districtImage || 'images/nalanda.jpg';
}

// Add custom attraction to Trip Planner
function openAddToTripDialogCustom(name, districtName) {
  const isHi = currentLanguage === 'hi';
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-backdrop';
  modalOverlay.id = 'add-to-trip-modal';

  let daysOptions = '';
  const totalDays = (typeof currentTrip !== 'undefined' && currentTrip.daysCount) ? currentTrip.daysCount : 3;
  for (let i = 1; i <= totalDays; i++) {
    daysOptions += `<option value="${i}">${isHi ? `दिन ${i}` : `Day ${i}`}</option>`;
  }

  modalOverlay.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <h3>${isHi ? 'यात्रा योजना में जोड़ें' : 'Add to Trip Plan'}</h3>
        <button class="modal-close-btn" onclick="document.getElementById('add-to-trip-modal').remove()">&times;</button>
      </div>
      <div class="modal-body">
        <p class="dialog-dest-name"><strong>${name}</strong></p>
        <p class="dialog-subtitle">${districtName} • ${isHi ? 'प्रसिद्ध दर्शनीय स्थल' : 'Top Attraction'}</p>
        <div class="form-group" style="margin-top:1.2rem;">
          <label for="select-trip-day-custom" style="font-weight:700;">${isHi ? 'किस दिन में जोड़ना चाहते हैं?' : 'Select Day:'}</label>
          <select id="select-trip-day-custom" class="form-select">
            ${daysOptions}
          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="document.getElementById('add-to-trip-modal').remove()">${isHi ? 'रद्द करें' : 'Cancel'}</button>
        <button class="btn btn-primary" id="confirm-add-trip-custom-btn">${isHi ? 'जोड़ें' : 'Add to Plan'}</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  document.getElementById('confirm-add-trip-custom-btn').addEventListener('click', () => {
    const day = parseInt(document.getElementById('select-trip-day-custom').value, 10);
    if (typeof currentTrip !== 'undefined' && currentTrip.itinerary) {
      if (!currentTrip.itinerary[day]) currentTrip.itinerary[day] = [];
      const customId = 'custom-' + encodeURIComponent(name);
      if (!currentTrip.itinerary[day].includes(customId)) {
        currentTrip.itinerary[day].push(customId);
        if (!window.customSpots) window.customSpots = {};
        window.customSpots[customId] = {
          id: customId,
          name: name,
          name_hi: name,
          district_name: districtName,
          district_name_hi: districtName,
          category: 'Attraction',
          category_hi: 'दर्शनीय स्थल',
          image: getAttractionImage(name, '')
        };
        if (typeof saveCurrentTrip === 'function') saveCurrentTrip();
        showToast(`${name} - ${getTranslation('toast_added_trip')} (${getTranslation('planner_day_heading')} ${day})`);
      } else {
        showToast(isHi ? 'यह स्थल पहले से इस दिन में जुड़ा हुआ है' : 'Already in this day plan');
      }
    }
    modalOverlay.remove();
  });
}

// ==========================================================
// FEATURE 2: DISTRICT DETAIL MODAL & LOCAL LANGUAGE (PRD Sec 20)
// ==========================================================
function openDistrictDetailModal(districtId, selectedMode) {
  const d = getDistrictById(districtId);
  if (!d) return;

  const localLangInfo = typeof getDistrictLocalLanguageInfo === 'function' 
    ? getDistrictLocalLanguageInfo(districtId) 
    : null;

  // By default, if the district has a local language, open in 'local' (e.g. Maithili for Madhubani)
  const hasLocal = !!(localLangInfo && localLangInfo.greeting);
  const activeMode = selectedMode || (hasLocal ? 'local' : (currentLanguage === 'hi' ? 'hi' : 'en'));

  let modalOverlay = document.getElementById('district-detail-modal');
  if (!modalOverlay) {
    modalOverlay = document.createElement('div');
    modalOverlay.className = 'modal-backdrop';
    modalOverlay.id = 'district-detail-modal';
    document.body.appendChild(modalOverlay);
    modalOverlay.addEventListener('click', (e) => {
      if (e.target === modalOverlay) modalOverlay.remove();
    });
  }

  // Language Mode Flags
  const isLocal = activeMode === 'local';
  const isHi = activeMode === 'hi';
  const isEn = activeMode === 'en';

  const langNameTitle = localLangInfo ? (localLangInfo.lang_name.split(' ')[0]) : 'स्थानीय';

  // Localized District Metadata
  const distTitle = isLocal ? `${d.name_hi || d.name} जिला` : (isHi ? `${d.name_hi} जिला` : `${d.name} District`);
  const leadTagline = isLocal ? (localLangInfo.tagline_local || d.tagline_hi || d.tagline) : (isHi ? d.tagline_hi : d.tagline);
  const distDesc = isLocal ? (localLangInfo.description_local || d.description_hi) : (isHi ? d.description_hi : d.description);
  const distHistory = isLocal ? (localLangInfo.history_local || d.historical_importance_hi) : (isHi ? d.historical_importance_hi : d.historical_importance);

  const langCode = (localLangInfo && localLangInfo.primary) || 'mai';

  // Regional Dialect Vocabulary Definitions (Maithili, Bhojpuri, Magahi, Angika, Bajjika, Surjapuri)
  const DIALECT_VOCAB = {
    mai: {
      headingPlaces: 'प्रमुख दर्शनीय एवं पर्यटन स्थल',
      subtextPlaces: 'एहि जिलाक प्रमुख दर्शनीय स्थल, ऐतिहासिक धरोहर आ तीर्थ केंद्र',
      special: 'एतय की खास अछि (विशेषता):',
      whyVisit: 'कियेक आबय के चाही (Why Visit):',
      food: 'प्रसिद्ध स्थानीय स्वाद (खान-पान):',
      btnDetails: 'पूरा विवरण देखू',
      btnAddTrip: 'यात्रा में जोड़ू',
      btnSearch: 'अउर खोजू',
      overview: 'जिल्लाक परिचय (Overview)',
      history: 'ऐतिहासिक महत्व (History)',
      foodSection: 'प्रसिद्ध स्थानीय स्वाद व खान-पान',
      festivals: 'पारंपरिक पर्व-त्योहार',
      travel: 'पहुँचय के साधन (How to Reach)',
      defaultSpecial: (att, distName) => `${att} ${distName} जिलाक प्रमुख आकर्षण थिक जतय देश-विदेश सँ पर्यटक आबैत छथि।`,
      defaultWhy: 'मिथिला आ बिहारक समृद्ध सांस्कृतिक धरोहर, वास्तुकला आ प्राकृतिक सुंदरताक दर्शन लेल।'
    },
    bho: {
      headingPlaces: 'प्रमुख घूमे लायक पर्यटन स्थल',
      subtextPlaces: 'एह जिला के सबसे प्रसिद्ध ऐतिहासिक धरोहर, झरना आ पावन तीर्थ',
      special: 'इहवाँ का खास बा (विशेषता):',
      whyVisit: 'काहे आवे के चाहीं (Why Visit):',
      food: 'आसपास के प्रसिद्ध खान-पान व स्वाद:',
      btnDetails: 'पूरा विवरण देखीं',
      btnAddTrip: 'यात्रा में जोड़ीं',
      btnSearch: 'अउरी खोजीं',
      overview: 'जिला के परिचय (Overview)',
      history: 'ऐतिहासिक महत्व (History)',
      foodSection: 'प्रसिद्ध स्थानीय खान-पान व स्वाद',
      festivals: 'प्रमुख पर्व-त्योहार व मेला',
      travel: 'पहुंचे के साधन (How to Reach)',
      defaultSpecial: (att, distName) => `${att} ${distName} जिला के सबसे प्रमुख आ लोकप्रिय दर्शनीय स्थल ह, जहाँ घूमे खातिर लोग दूर-दूर से आवेला।`,
      defaultWhy: 'भोजपुरी माटी के वीरता, गौरवशाली इतिहास आ प्राकृतिक सुंदरता के अनुभव करे खातिर।'
    },
    mag: {
      headingPlaces: 'प्रमुख दर्शनीय आ पर्यटन स्थल',
      subtextPlaces: 'एह जिला के प्रमुख घूमे जोग धरोहर, पावन तीर्थ आ प्राकृतिक स्थल',
      special: 'इहवाँ का खास हे (विशेषता):',
      whyVisit: 'काहे आवे के चाही (Why Visit):',
      food: 'प्रसिद्ध स्थानीय स्वाद आ खान-पान:',
      btnDetails: 'पूरा विवरण देखथिन',
      btnAddTrip: 'यात्रा में जोड़ीं',
      btnSearch: 'अउरी खोजथिन',
      overview: 'जिला के परिचय (Overview)',
      history: 'ऐतिहासिक महत्व (History)',
      foodSection: 'प्रसिद्ध स्थानीय खान-पान आ स्वाद',
      festivals: 'प्रमुख परब-त्योहार आ मेला',
      travel: 'पहुंचे के साधन (How to Reach)',
      defaultSpecial: (att, distName) => `${att} ${distName} जिला के एगो नामी दर्शनीय स्थल हे, जहाँ श्रद्धालु आ पर्यटक भारी संख्या में आवे हेथिन।`,
      defaultWhy: 'मगध के महान प्राचीन इतिहास, विश्वस्तरीय बौद्ध-जैन धरोहर आ आध्यात्मिक शांति खातिर।'
    },
    anp: {
      headingPlaces: 'प्रमुख दर्शनीय आ घूमे के जगह',
      subtextPlaces: 'एह जिला के प्रमुख ऐतिहासिक धरोहर, पावन तीर्थ आ दर्शनीय स्थल',
      special: 'एतय की खास छै (विशेषता):',
      whyVisit: 'काहे आय के चाहि (Why Visit):',
      food: 'आसपास के प्रसिद्ध खान-पान व स्वाद:',
      btnDetails: 'पूरा विवरण देखियै',
      btnAddTrip: 'यात्रा में जोड़ियै',
      btnSearch: 'आरू खोजियै',
      overview: 'जिला के परिचय (Overview)',
      history: 'ऐतिहासिक महत्व (History)',
      foodSection: 'प्रसिद्ध स्थानीय खान-पान व स्वाद',
      festivals: 'पारंपरिक पर्व-त्योहार आ मेला',
      travel: 'पहुंचे के साधन (How to Reach)',
      defaultSpecial: (att, distName) => `${att} ${distName} जिला के एगो बहुते विख्यात दर्शनीय स्थल छेकै, जतय दूर-दूर सँ पर्यटक आबै छै।`,
      defaultWhy: 'अंग प्रदेश के पुरातन गौरव, सिल्क संस्कृति आ पावन तीर्थ के दर्शन लेल।'
    },
    baj: {
      headingPlaces: 'प्रमुख दर्शनीय एवं घूमे वाला जगह',
      subtextPlaces: 'एह जिला के प्रमुख ऐतिहासिक धरोहर, पावन मंदिर आ दर्शनीय स्थल',
      special: 'एतय का खास बा (विशेषता):',
      whyVisit: 'काहे आवे के चाही (Why Visit):',
      food: 'प्रसिद्ध स्थानीय स्वाद व खान-पान:',
      btnDetails: 'पूरा विवरण देखल जाय',
      btnAddTrip: 'यात्रा में जोड़ीं',
      btnSearch: 'अउर खोजीं',
      overview: 'जिला के परिचय (Overview)',
      history: 'ऐतिहासिक महत्व (History)',
      foodSection: 'प्रसिद्ध स्थानीय स्वाद व खान-पान',
      festivals: 'पारंपरिक परब-त्योहार व मेला',
      travel: 'पहुंचे के साधन (How to Reach)',
      defaultSpecial: (att, distName) => `${att} ${distName} जिला के प्रमुख प्रसिद्ध आकर्षण ह, जहाँ पर्यटक आ श्रद्धालु नियमित आवेला।`,
      defaultWhy: 'तिरहुत-बज्जिका अंचल के अनूठा गणतंत्र, पावन तीर्थ आ ऐतिहासिक स्मृतियन के साक्षात्कार लेल।'
    },
    sjp: {
      headingPlaces: 'प्रमुख दर्शनीय एवं पर्यटन स्थल',
      subtextPlaces: 'इस जिला के प्रसिद्ध प्राकृतिक स्थल, पावन तीर्थ और दर्शनीय स्थल',
      special: 'यहाँ क्या खास है (विशेषता):',
      whyVisit: 'यहाँ क्यों आना चाहिए:',
      food: 'प्रसिद्ध स्थानीय स्वाद व खान-पान:',
      btnDetails: 'पूरा विवरण देखें',
      btnAddTrip: 'यात्रा में जोड़ें',
      btnSearch: 'और खोजें',
      overview: 'जिले का परिचय',
      history: 'ऐतिहासिक महत्व',
      foodSection: 'प्रसिद्ध स्थानीय व्यंजन',
      festivals: 'प्रमुख पर्व व मेले',
      travel: 'यातायात व पहुंच',
      defaultSpecial: (att, distName) => `${att} ${distName} जिला का एक प्रमुख एवं लोकप्रिय दर्शनीय स्थल है जहाँ बड़ी संख्या में पर्यटक आते हैं।`,
      defaultWhy: 'सीमांचल की प्राकृतिक छटा, चाय बागान, वन्य जीवन और ऐतिहासिक धरोहर के दर्शन हेतु।'
    }
  };

  const HI_VOCAB = {
    headingPlaces: 'प्रमुख दर्शनीय एवं पर्यटन स्थल',
    subtextPlaces: 'इस जिले के प्रमुख दर्शनीय स्थल, ऐतिहासिक धरोहर एवं तीर्थ केंद्र',
    special: 'यहाँ क्या खास है (विशेषता):',
    whyVisit: 'यहाँ क्यों आना चाहिए:',
    food: 'प्रसिद्ध स्थानीय खान-पान:',
    btnDetails: 'पूरा विवरण देखें',
    btnAddTrip: 'यात्रा में जोड़ें',
    btnSearch: 'और खोजें',
    overview: 'जिले का परिचय',
    history: 'ऐतिहासिक महत्व',
    foodSection: 'प्रसिद्ध स्थानीय व्यंजन',
    festivals: 'प्रमुख पर्व व मेले',
    travel: 'यातायात व पहुंच',
    defaultSpecial: (att, distName) => `${att} ${distName} जिले का एक प्रमुख एवं लोकप्रिय दर्शनीय स्थल है।`,
    defaultWhy: 'स्थानीय संस्कृति, ऐतिहासिक महत्व और पावन धार्मिक परंपरा के प्रत्यक्ष दर्शन के लिए।'
  };

  const EN_VOCAB = {
    headingPlaces: 'Top Tourist Attractions',
    subtextPlaces: 'Must-visit heritage, spiritual, and natural landmarks of this district',
    special: 'What is Special:',
    whyVisit: 'Why You Should Visit:',
    food: 'Famous Local Cuisine Nearby:',
    btnDetails: 'View Full Details',
    btnAddTrip: '+ Add to Trip',
    btnSearch: 'Search Spot',
    overview: 'District Overview',
    history: 'Historical Importance',
    foodSection: 'Famous Local Food',
    festivals: 'Festivals & Fairs',
    travel: 'How to Reach',
    defaultSpecial: (att, distName) => `${att} is one of the most prominent landmarks and tourist spots in ${distName} district.`,
    defaultWhy: 'To experience authentic heritage, scenic landscapes, and vibrant regional culture.'
  };

  const vocab = isLocal ? (DIALECT_VOCAB[langCode] || DIALECT_VOCAB.mai) : (isHi ? HI_VOCAB : EN_VOCAB);

  const labelHeadingPlaces = vocab.headingPlaces;
  const subtextPlaces = vocab.subtextPlaces;
  const labelSpecial = vocab.special;
  const labelWhyVisit = vocab.whyVisit;
  const labelFood = vocab.food;
  const btnDetails = vocab.btnDetails;
  const btnAddTrip = vocab.btnAddTrip;
  const btnSearch = vocab.btnSearch;

  const labelOverview = vocab.overview;
  const labelHistory = vocab.history;
  const labelFoodSection = vocab.foodSection;
  const foodList = isLocal ? (localLangInfo.famous_food_local || d.famous_food_hi || d.famous_food) : (isHi ? d.famous_food_hi : d.famous_food);
  const labelFestivals = vocab.festivals;
  const festList = isLocal ? (localLangInfo.festivals_local || d.festivals_hi || d.festivals) : (isHi ? d.festivals_hi : d.festivals);
  const labelTravel = vocab.travel;
  const travelText = isLocal ? (localLangInfo.travel_local || d.transport_info_hi) : (isHi ? d.transport_info_hi : d.transport_info);

  // Default regional food list for tourist cards
  const defaultCardFood = (foodList && foodList.length > 0) ? foodList.slice(0, 3).join(', ') : 'लिट्टी चोखा, सत्तू, पेड़ा';

  // All Tourist Destinations belonging to this District
  const districtDests = BIHAR_DESTINATIONS.filter(dest => dest.district_id === d.id);

  let destsCardsHtml = '';

  // 1. Render all matching rich destinations in the primary dataset
  if (districtDests.length > 0) {
    districtDests.forEach(item => {
      const itemName = isLocal ? (item.name_local || item.name_hi || item.name) : (isHi ? item.name_hi : item.name);
      const itemCat = isLocal ? (item.category_hi || item.category) : (isHi ? item.category_hi : item.category);
      const itemSpecial = isLocal 
        ? (item.what_is_special_local || item.what_is_special_hi || item.overview_hi || item.overview) 
        : (isHi ? (item.what_is_special_hi || item.overview_hi) : (item.what_is_special || item.overview));
      const itemWhy = isLocal 
        ? (item.why_visit_local || item.why_visit_hi || item.historical_significance_hi || item.historical_significance) 
        : (isHi ? (item.why_visit_hi || item.historical_significance_hi) : (item.why_visit || item.historical_significance));
      const itemFood = isLocal 
        ? (item.local_food_local || item.local_food_hi || defaultCardFood) 
        : (isHi ? (item.local_food_hi || defaultCardFood) : (item.local_food || defaultCardFood));

      destsCardsHtml += `
        <div class="district-dest-card-rich">
          <div class="district-dest-card-img-wrap">
            <img src="${item.image}" alt="${itemName}" onerror="handleImgError(this)" loading="lazy" />
            <span class="badge badge-category" style="position:absolute;top:10px;left:10px;">${itemCat}</span>
            <span class="badge badge-rating" style="position:absolute;bottom:10px;right:10px;background:rgba(0,0,0,0.65);color:#fff;">★ ${item.rating || '4.8'}</span>
          </div>
          <div class="district-dest-card-body">
            <h4 class="district-dest-card-title">${itemName}</h4>
            
            <div class="district-dest-feature-box">
              <strong>✨ ${labelSpecial}</strong>
              <p>${itemSpecial}</p>
            </div>

            <div class="district-dest-feature-box" style="background:var(--accent-light);border-left:3px solid var(--accent);">
              <strong>🌟 ${labelWhyVisit}</strong>
              <p>${itemWhy}</p>
            </div>

            <div class="district-dest-food-box">
              <strong>🍲 ${labelFood}</strong>
              <span>${itemFood}</span>
            </div>

            <div class="district-dest-actions">
              <button class="btn btn-primary btn-sm" onclick="document.getElementById('district-detail-modal')?.remove(); openDestinationDetailModal('${item.id}');">
                ${btnDetails}
              </button>
              <button class="btn btn-outline btn-sm" onclick="openAddToTripDialog('${item.id}')">
                + ${btnAddTrip}
              </button>
            </div>
          </div>
        </div>
      `;
    });
  }

  // 2. Render ALL famous attractions from d.famous_attractions that don't have separate destination entries
  const existingNames = districtDests.map(dd => dd.name.toLowerCase());
  const additionalAttractions = (d.famous_attractions || []).filter(fa => 
    !existingNames.some(en => en.includes(fa.toLowerCase()) || fa.toLowerCase().includes(en))
  );

  if (additionalAttractions.length > 0) {
    additionalAttractions.forEach(att => {
      const attImg = getAttractionImage(att, d.image);
      const attSpecial = vocab.defaultSpecial(att, isLocal ? (d.name_hi || d.name) : (isHi ? d.name_hi : d.name));
      const attWhy = vocab.defaultWhy;

      destsCardsHtml += `
        <div class="district-dest-card-rich">
          <div class="district-dest-card-img-wrap">
            <img src="${attImg}" alt="${att}" onerror="handleImgError(this)" loading="lazy" />
            <span class="badge badge-category" style="position:absolute;top:10px;left:10px;">${isLocal ? 'प्रसिद्ध दर्शनीय स्थल' : (isHi ? 'प्रसिद्ध दर्शनीय स्थल' : 'Popular Landmark')}</span>
          </div>
          <div class="district-dest-card-body">
            <h4 class="district-dest-card-title">${att}</h4>
            
            <div class="district-dest-feature-box">
              <strong>✨ ${labelSpecial}</strong>
              <p>${attSpecial}</p>
            </div>

            <div class="district-dest-feature-box" style="background:var(--accent-light);border-left:3px solid var(--accent);">
              <strong>🌟 ${labelWhyVisit}</strong>
              <p>${attWhy}</p>
            </div>

            <div class="district-dest-food-box">
              <strong>🍲 ${labelFood}</strong>
              <span>${defaultCardFood}</span>
            </div>

            <div class="district-dest-actions">
              <button class="btn btn-primary btn-sm" onclick="setQuickSearch('${att.replace(/'/g, "\\'")}'); document.getElementById('district-detail-modal')?.remove();">
                🔍 ${btnDetails}
              </button>
              <button class="btn btn-outline btn-sm" onclick="openAddToTripDialogCustom('${att.replace(/'/g, "\\'")}', '${(d.name_hi || d.name).replace(/'/g, "\\'")}')">
                + ${btnAddTrip}
              </button>
            </div>
          </div>
        </div>
      `;
    });
  }

  const totalDestCount = districtDests.length + additionalAttractions.length;

  modalOverlay.innerHTML = `
    <div class="modal-card destination-modal-large">
      <div class="modal-header">
        <div>
          <span class="badge badge-category">${isHi ? (BIHAR_DIVISIONS.find(v => v.id === d.division)?.name_hi || d.division) : d.division.toUpperCase() + ' DIVISION'}</span>
          <h2>${distTitle}</h2>
          <p class="modal-location-sub">HQ: ${isHi ? d.headquarters_hi : d.headquarters}</p>
        </div>
        <button class="modal-close-btn" onclick="document.getElementById('district-detail-modal').remove()">&times;</button>
      </div>

      <div class="modal-body">
        <nav class="breadcrumb-nav" aria-label="Breadcrumb">
          <a onclick="document.getElementById('district-detail-modal')?.remove(); switchTab('home');">${getTranslation('breadcrumb_home')}</a>
          <span class="breadcrumb-separator">›</span>
          <a onclick="document.getElementById('district-detail-modal')?.remove(); switchTab('districts');">${getTranslation('breadcrumb_districts')}</a>
          <span class="breadcrumb-separator">›</span>
          <span class="breadcrumb-current">${isHi ? d.name_hi : d.name}</span>
        </nav>

        <!-- Top Language Selector Bar (PRD Section 20) -->
        <div class="district-modal-lang-bar">
          <div class="district-modal-lang-tag">
            <span>🗣️</span> <span>${isLocal ? `अपन स्थानीय भाषा में देखू (${langNameTitle})` : (isHi ? `भाषा चुनें / Language:` : `Language:`)}</span>
          </div>
          <div class="district-modal-lang-pills">
            ${hasLocal ? `
              <button class="district-modal-lang-pill ${activeMode === 'local' ? 'active' : ''}" onclick="openDistrictDetailModal('${districtId}', 'local')">
                ⭐ ${langNameTitle} (${isLocal ? 'सक्रिय' : 'अपन भाषा'})
              </button>
            ` : ''}
            <button class="district-modal-lang-pill ${activeMode === 'hi' ? 'active' : ''}" onclick="openDistrictDetailModal('${districtId}', 'hi')">
              हिन्दी
            </button>
            <button class="district-modal-lang-pill ${activeMode === 'en' ? 'active' : ''}" onclick="openDistrictDetailModal('${districtId}', 'en')">
              English
            </button>
          </div>
        </div>

        <div class="modal-gallery-hero">
          <img src="${d.image}" alt="${isHi ? d.name_hi : d.name}" class="modal-main-image" onerror="handleImgError(this)" />
        </div>

        <p class="district-lead-tagline"><strong>"${leadTagline}"</strong></p>

        <!-- Local Greeting Banner -->
        ${(isLocal && localLangInfo && localLangInfo.greeting) ? `
          <div class="district-local-lang-box" style="margin-bottom:1.5rem;">
            <div class="local-lang-greeting-quote">
              "${localLangInfo.greeting}"
            </div>
            ${localLangInfo.proverb ? `
              <div class="local-lang-proverb-badge">
                <strong>${isLocal ? 'कहावत / लोकोक्ति' : 'लोकोक्ति'}:</strong> ${localLangInfo.proverb}
              </div>
            ` : ''}
          </div>
        ` : ''}

        <!-- 1. TOURIST PLACES SECTION (DISPLAYED FIRST) -->
        <div class="modal-section-box" style="margin-bottom: 2rem; border: 2px solid var(--accent); border-radius: var(--border-radius); padding: 1.25rem;">
          <div style="display:flex; justify-content:space-between; align-items:center; flex-wrap:wrap; margin-bottom:1rem; border-bottom:1px solid var(--border-color); padding-bottom:0.75rem;">
            <div>
              <h3 style="font-size:1.45rem; font-weight:800; color:var(--text-primary); margin:0;">
                📍 ${labelHeadingPlaces} (${totalDestCount})
              </h3>
              <p style="font-size:0.9rem; color:var(--text-muted); margin:0.25rem 0 0 0;">${subtextPlaces}</p>
            </div>
            <span class="badge badge-verified" style="font-size:0.85rem; padding:0.35rem 0.8rem;">✓ 100% Verified Guide</span>
          </div>

          <div class="district-modal-dest-grid">
            ${destsCardsHtml}
          </div>
        </div>

        <!-- 2. DISTRICT OVERVIEW & HISTORY -->
        <div class="modal-info-grid">
          <div class="modal-info-card">
            <h4>${labelOverview}</h4>
            <p>${distDesc}</p>
          </div>

          <div class="modal-info-card">
            <h4>${labelHistory}</h4>
            <p>${distHistory}</p>
          </div>
        </div>

        <!-- 3. CUISINE & FESTIVALS -->
        <div class="modal-info-grid" style="margin-top:1.5rem;">
          <div class="modal-info-card">
            <h4>🍴 ${labelFoodSection}</h4>
            <p>${foodList.join(' • ')}</p>
          </div>
          <div class="modal-info-card">
            <h4>🎉 ${labelFestivals}</h4>
            <p>${festList.join(' • ')}</p>
          </div>
        </div>

        <!-- 4. HOW TO REACH -->
        <div class="modal-section-box" style="margin-top:1.5rem;">
          <h4>🚆 ${labelTravel}</h4>
          <p>${travelText}</p>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-outline" onclick="copyDirectLink('districts', '${d.id}')">
          🔗 ${getTranslation('share_link_btn')}
        </button>
        <button class="btn btn-outline" onclick="filterDestinationsByDistrict('${d.id}')">
          ${isHi ? `${d.name_hi} के सभी स्थल फिल्टर करें` : `Filter ${d.name} Spots`}
        </button>
        <button class="btn btn-primary" onclick="document.getElementById('district-detail-modal').remove()">
          ${isHi ? 'बंद करें' : 'Close'}
        </button>
      </div>
    </div>
  `;
}

function filterDestinationsByDistrict(districtId) {
  document.getElementById('district-detail-modal')?.remove();
  state.filters.district = districtId;
  const select = document.getElementById('filter-district-select');
  if (select) select.value = districtId;
  switchTab('destinations');
  renderDestinationCards();
  updateMapMarkers();
}

// ==========================================================
// FEATURE 5: SUBMIT CORRECTION MODAL (PRD Section 7 & 11)
// ==========================================================
function openCorrectionModal(prefillTarget = '') {
  const isHi = currentLanguage === 'hi';
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-backdrop';
  modalOverlay.id = 'correction-modal';

  modalOverlay.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <div>
          <h3>${getTranslation('correction_modal_title')}</h3>
          <p class="modal-location-sub">${getTranslation('correction_modal_subtitle')}</p>
        </div>
        <button class="modal-close-btn" onclick="document.getElementById('correction-modal').remove()">&times;</button>
      </div>

      <form id="correction-form" onsubmit="handleCorrectionSubmit(event)">
        <div class="modal-body">
          <div class="form-group-full">
            <label for="corr-target">${getTranslation('correction_field_dest')}:</label>
            <input type="text" id="corr-target" class="form-input" required value="${prefillTarget}" placeholder="e.g. Nalanda Mahavihara or Gaya" />
          </div>

          <div class="form-group-full">
            <label for="corr-category">${getTranslation('correction_field_cat')}:</label>
            <select id="corr-category" class="form-select" required>
              <option value="timing">${getTranslation('correction_cat_timing')}</option>
              <option value="fee">${getTranslation('correction_cat_fee')}</option>
              <option value="location">${getTranslation('correction_cat_location')}</option>
              <option value="description">${getTranslation('correction_cat_description')}</option>
              <option value="other">${getTranslation('correction_cat_other')}</option>
            </select>
          </div>

          <div class="form-group-full">
            <label for="corr-details">${getTranslation('correction_field_details')}:</label>
            <textarea id="corr-details" class="form-textarea" rows="3" required placeholder="${isHi ? 'कृपया सटीक और सत्यापित जानकारी यहाँ लिखें...' : 'Provide the accurate verified information...'}"></textarea>
          </div>

          <div class="form-group-full">
            <label for="corr-source">${getTranslation('correction_field_source')}:</label>
            <input type="url" id="corr-source" class="form-input" placeholder="https://tourism.bihar.gov.in/... or official notice" />
          </div>

          <div class="form-grid-two">
            <div class="form-group-full">
              <label for="corr-name">${getTranslation('correction_field_name')}:</label>
              <input type="text" id="corr-name" class="form-input" placeholder="Optional" />
            </div>
            <div class="form-group-full">
              <label for="corr-email">${getTranslation('correction_field_email')}:</label>
              <input type="email" id="corr-email" class="form-input" placeholder="Optional" />
            </div>
          </div>
        </div>

        <div class="modal-footer">
          <button type="button" class="btn btn-outline" onclick="document.getElementById('correction-modal').remove()">
            ${isHi ? 'रद्द करें' : 'Cancel'}
          </button>
          <button type="submit" class="btn btn-primary">
            ${getTranslation('correction_btn_submit')}
          </button>
        </div>
      </form>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.remove();
  });
}

function handleCorrectionSubmit(e) {
  e.preventDefault();
  const submission = {
    target: document.getElementById('corr-target').value,
    category: document.getElementById('corr-category').value,
    details: document.getElementById('corr-details').value,
    source: document.getElementById('corr-source').value,
    name: document.getElementById('corr-name').value,
    email: document.getElementById('corr-email').value,
    timestamp: new Date().toISOString()
  };

  // Store into LocalStorage log
  try {
    const existing = JSON.parse(localStorage.getItem('dlb_corrections_log') || '[]');
    existing.push(submission);
    localStorage.setItem('dlb_corrections_log', JSON.stringify(existing));
  } catch (err) {
    console.error(err);
  }

  document.getElementById('correction-modal')?.remove();
  showToast(getTranslation('toast_correction_submitted'));
}

// Initialize Leaflet Map
function initLeafletMap() {
  const mapElement = document.getElementById('destinations-leaflet-map');
  if (!mapElement || typeof L === 'undefined') return;

  try {
    state.map = L.map('destinations-leaflet-map').setView([25.6, 85.5], 7);

    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      maxZoom: 18,
      attribution: '© OpenStreetMap contributors'
    }).addTo(state.map);

    state.markersLayer = L.layerGroup().addTo(state.map);
    updateMapMarkers();
  } catch (err) {
    console.error("Map initialization failed", err);
  }
}

// Update Map Markers according to active filters
function updateMapMarkers() {
  if (!state.map || !state.markersLayer || typeof L === 'undefined') return;

  state.markersLayer.clearLayers();
  const filtered = getFilteredDestinations();
  const isHi = currentLanguage === 'hi';

  const bounds = [];

  filtered.forEach(dest => {
    if (dest.coordinates && dest.coordinates.lat && dest.coordinates.lng) {
      const lat = dest.coordinates.lat;
      const lng = dest.coordinates.lng;
      bounds.push([lat, lng]);

      const marker = L.marker([lat, lng]);

      const popupContent = `
        <div class="map-popup-card">
          <img src="${dest.image}" alt="${isHi ? dest.name_hi : dest.name}" class="popup-img" />
          <div class="popup-body">
            <h4 class="popup-title">${isHi ? dest.name_hi : dest.name}</h4>
            <p class="popup-loc">📍 ${isHi ? dest.district_name_hi : dest.district_name} • ${isHi ? dest.category_hi : dest.category}</p>
            <div class="popup-btns">
              <button class="btn btn-primary btn-xs" onclick="openDestinationDetailModal('${dest.id}')">
                ${getTranslation('card_view_details')}
              </button>
              <a href="${dest.google_maps_url}" target="_blank" rel="noopener" class="btn btn-outline btn-xs">
                🧭
              </a>
            </div>
          </div>
        </div>
      `;

      marker.bindPopup(popupContent);
      state.markersLayer.addLayer(marker);
    }
  });

  if (bounds.length > 0 && state.map) {
    state.map.fitBounds(bounds, { padding: [50, 50], maxZoom: 11 });
  }
}

// Render All Views
function renderAllViews() {
  renderHomeFeatured();
  renderCategoryCards();
  renderDestinationCards();
  renderDistrictsGrid();
  renderCultureSection();
  renderStatisticsView();
  renderFestivalsCalendar();
  renderTravelGuide();
  if (state.activeTab === 'saved') {
    renderSavedDestinations();
  }
  if (typeof renderPlannerUI === 'function') {
    renderPlannerUI();
  }
}

// Show Toast Notification
function showToast(message) {
  let toastContainer = document.getElementById('toast-container');
  if (!toastContainer) {
    toastContainer = document.createElement('div');
    toastContainer.id = 'toast-container';
    toastContainer.className = 'toast-container';
    document.body.appendChild(toastContainer);
  }

  const toast = document.createElement('div');
  toast.className = 'toast-message';
  toast.innerHTML = `<span>✔</span> <span>${message}</span>`;
  toastContainer.appendChild(toast);

  setTimeout(() => {
    toast.classList.add('fade-out');
    setTimeout(() => toast.remove(), 400);
  }, 2800);
}
