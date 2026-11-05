// Discover Local Bihar - Main Application Controller

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
  favourites: [],
  map: null,
  markersLayer: null
};

// Initialize Application on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
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
});

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
  // Navigation Tabs
  document.querySelectorAll('.nav-link[data-tab]').forEach(btn => {
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

// Switch Navigation Tab
function switchTab(tabId) {
  state.activeTab = tabId;

  // Update nav links active class
  document.querySelectorAll('.nav-link[data-tab]').forEach(link => {
    link.classList.toggle('active', link.getAttribute('data-tab') === tabId);
  });

  // Hide mobile menu if open
  const navMenu = document.getElementById('main-nav-menu');
  if (navMenu) navMenu.classList.remove('show');

  // Show/Hide Tab Views
  document.querySelectorAll('.view-tab-content').forEach(view => {
    view.classList.toggle('active', view.id === `view-${tabId}`);
  });

  // Scroll to top
  window.scrollTo({ top: 0, behavior: 'smooth' });

  // Map invalidation trigger if map tab is opened
  if (tabId === 'destinations' && state.map) {
    setTimeout(() => {
      state.map.invalidateSize();
    }, 200);
  }

  if (tabId === 'saved') {
    renderSavedDestinations();
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
          <img src="${dest.image}" alt="${isHi ? dest.name_hi : dest.name}" loading="lazy" class="card-img" />
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
          <img src="${dest.image}" alt="${isHi ? dest.name_hi : dest.name}" loading="lazy" class="card-img" />
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

// Render Category Carousel / Cards on Home Page
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
    // Count destinations in this district
    const destCount = BIHAR_DESTINATIONS.filter(dest => dest.district_id === d.id).length;

    html += `
      <div class="district-card" onclick="openDistrictDetailModal('${d.id}')">
        <div class="district-img-wrap">
          <img src="${d.image}" alt="${isHi ? d.name_hi : d.name}" loading="lazy" class="district-img" />
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
          <img src="${food.image}" alt="${isHi ? food.name_hi : food.name}" loading="lazy" class="culture-card-img" />
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
          <img src="${art.image}" alt="${isHi ? art.name_hi : art.name}" loading="lazy" class="culture-card-img" />
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
          <img src="${fest.image}" alt="${isHi ? fest.name_hi : fest.name}" loading="lazy" class="culture-card-img" />
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
        <div class="modal-gallery-hero">
          <img src="${dest.image}" alt="${isHi ? dest.name_hi : dest.name}" class="modal-main-image" />
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
        <button class="btn btn-outline" id="modal-fav-btn-${dest.id}" onclick="toggleFavourite('${dest.id}')">
          ♥ ${isFav ? (isHi ? 'पसंदीदा से हटाएं' : 'Saved') : getTranslation('modal_btn_fav')}
        </button>
        <button class="btn btn-primary" onclick="document.getElementById('destination-detail-modal').remove(); openAddToTripDialog('${dest.id}');">
          ${getTranslation('modal_btn_add_trip')}
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

// Open District Detail Modal
function openDistrictDetailModal(districtId) {
  const d = getDistrictById(districtId);
  if (!d) return;

  const isHi = currentLanguage === 'hi';
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-backdrop';
  modalOverlay.id = 'district-detail-modal';

  // Find destinations belonging to this district
  const districtDests = BIHAR_DESTINATIONS.filter(dest => dest.district_id === d.id);

  let destsHtml = '';
  if (districtDests.length > 0) {
    districtDests.forEach(item => {
      destsHtml += `
        <div class="district-modal-dest-card" onclick="document.getElementById('district-detail-modal').remove(); openDestinationDetailModal('${item.id}');">
          <img src="${item.image}" alt="${isHi ? item.name_hi : item.name}" />
          <div>
            <h5>${isHi ? item.name_hi : item.name}</h5>
            <span class="badge badge-category">${isHi ? item.category_hi : item.category}</span>
          </div>
        </div>
      `;
    });
  } else {
    destsHtml = `<p class="text-muted">${isHi ? 'इस जिले के अन्य प्रमाणित स्थल शीघ्र जोड़े जा रहे हैं।' : 'Additional verified spots for this district are being added through field review.'}</p>`;
  }

  modalOverlay.innerHTML = `
    <div class="modal-card destination-modal-large">
      <div class="modal-header">
        <div>
          <span class="badge badge-category">${isHi ? (BIHAR_DIVISIONS.find(v => v.id === d.division)?.name_hi || d.division) : d.division.toUpperCase() + ' DIVISION'}</span>
          <h2>${isHi ? d.name_hi : d.name} ${isHi ? 'जिला' : 'District'}</h2>
          <p class="modal-location-sub">HQ: ${isHi ? d.headquarters_hi : d.headquarters}</p>
        </div>
        <button class="modal-close-btn" onclick="document.getElementById('district-detail-modal').remove()">&times;</button>
      </div>

      <div class="modal-body">
        <div class="modal-gallery-hero">
          <img src="${d.image}" alt="${isHi ? d.name_hi : d.name}" class="modal-main-image" />
        </div>

        <p class="district-lead-tagline"><strong>"${isHi ? d.tagline_hi : d.tagline}"</strong></p>

        <div class="modal-info-grid">
          <div class="modal-info-card">
            <h4>${getTranslation('district_modal_overview')}</h4>
            <p>${isHi ? d.description_hi : d.description}</p>
          </div>

          <div class="modal-info-card">
            <h4>${getTranslation('district_modal_history')}</h4>
            <p>${isHi ? d.historical_importance_hi : d.historical_importance}</p>
          </div>
        </div>

        <div class="modal-section-box">
          <h4>📍 ${getTranslation('district_modal_destinations')} (${districtDests.length})</h4>
          <div class="district-modal-dest-grid">
            ${destsHtml}
          </div>
        </div>

        <div class="modal-info-grid" style="margin-top:1.5rem;">
          <div class="modal-info-card">
            <h4>🍴 ${getTranslation('district_modal_food')}</h4>
            <p>${isHi ? (d.famous_food_hi || []).join(' • ') : (d.famous_food || []).join(' • ')}</p>
          </div>
          <div class="modal-info-card">
            <h4>🎉 ${getTranslation('district_modal_festivals')}</h4>
            <p>${isHi ? (d.festivals_hi || []).join(' • ') : (d.festivals || []).join(' • ')}</p>
          </div>
        </div>

        <div class="modal-section-box" style="margin-top:1.5rem;">
          <h4>🚆 ${getTranslation('district_modal_travel')}</h4>
          <p>${isHi ? d.transport_info_hi : d.transport_info}</p>
        </div>
      </div>

      <div class="modal-footer">
        <button class="btn btn-outline" onclick="filterDestinationsByDistrict('${d.id}')">
          ${isHi ? `${d.name_hi} के सभी स्थल फ़िल्टर करें` : `Filter Destinations for ${d.name}`}
        </button>
        <button class="btn btn-primary" onclick="document.getElementById('district-detail-modal').remove()">
          ${isHi ? 'बंद करें' : 'Close'}
        </button>
      </div>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  modalOverlay.addEventListener('click', (e) => {
    if (e.target === modalOverlay) modalOverlay.remove();
  });
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

// Initialize Leaflet Map
function initLeafletMap() {
  const mapElement = document.getElementById('destinations-leaflet-map');
  if (!mapElement || typeof L === 'undefined') return;

  try {
    // Center around Bihar
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

