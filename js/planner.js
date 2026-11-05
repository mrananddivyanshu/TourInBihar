// Discover Local Bihar - Trip Planner & Itinerary Builder Module

const DEFAULT_TRIP = {
  title: "My Bihar Expedition",
  daysCount: 3,
  startDate: new Date().toISOString().split('T')[0],
  itinerary: {
    1: ["patna-sahib", "bihar-museum"],
    2: ["nalanda-ruins", "vishwa-shanti-stupa-rajgir"],
    3: ["mahabodhi-temple"]
  }
};

let currentTrip = null;

// Initialize Trip Planner
function initTripPlanner() {
  const saved = localStorage.getItem('dlb_saved_trip');
  if (saved) {
    try {
      currentTrip = JSON.parse(saved);
    } catch (e) {
      currentTrip = JSON.parse(JSON.stringify(DEFAULT_TRIP));
    }
  } else {
    currentTrip = JSON.parse(JSON.stringify(DEFAULT_TRIP));
  }
  renderPlannerUI();
}

// Save trip to LocalStorage
function saveCurrentTrip() {
  localStorage.setItem('dlb_saved_trip', JSON.stringify(currentTrip));
  showToast(getTranslation('toast_itinerary_saved'));
}

// Reset trip
function resetTripPlan() {
  if (confirm(currentLanguage === 'hi' ? 'क्या आप इस यात्रा योजना को रीसेट करना चाहते हैं?' : 'Are you sure you want to reset this trip plan?')) {
    currentTrip = {
      title: "My Bihar Expedition",
      daysCount: 3,
      startDate: new Date().toISOString().split('T')[0],
      itinerary: { 1: [], 2: [], 3: [] }
    };
    saveCurrentTrip();
    renderPlannerUI();
    showToast(getTranslation('toast_plan_cleared'));
  }
}

// Change trip duration (days)
function setTripDuration(days) {
  const newDays = parseInt(days, 10);
  currentTrip.daysCount = newDays;
  if (!currentTrip.itinerary) currentTrip.itinerary = {};
  
  // Ensure day arrays exist
  for (let i = 1; i <= newDays; i++) {
    if (!currentTrip.itinerary[i]) {
      currentTrip.itinerary[i] = [];
    }
  }
  saveCurrentTrip();
  renderPlannerUI();
}

// Add destination to specific day in trip
function addDestinationToDay(destId, dayNumber = 1) {
  if (!currentTrip.itinerary[dayNumber]) {
    currentTrip.itinerary[dayNumber] = [];
  }
  if (!currentTrip.itinerary[dayNumber].includes(destId)) {
    currentTrip.itinerary[dayNumber].push(destId);
    saveCurrentTrip();
    renderPlannerUI();
    const dest = getDestinationById(destId);
    const name = currentLanguage === 'hi' ? dest.name_hi : dest.name;
    showToast(`${name} - ${getTranslation('toast_added_trip')} (${getTranslation('planner_day_heading')} ${dayNumber})`);
  } else {
    showToast(currentLanguage === 'hi' ? 'यह स्थल पहले से इस दिन में जुड़ा हुआ है' : 'Already in this day plan');
  }
}

// Remove destination from day
function removeDestinationFromDay(destId, dayNumber) {
  if (currentTrip.itinerary[dayNumber]) {
    currentTrip.itinerary[dayNumber] = currentTrip.itinerary[dayNumber].filter(id => id !== destId);
    saveCurrentTrip();
    renderPlannerUI();
  }
}

// Load a preset circuit
function loadPresetCircuit(circuitKey) {
  if (circuitKey === 'buddhist') {
    currentTrip = {
      title: currentLanguage === 'hi' ? "बौद्ध विरासत परिपथ" : "Buddhist Heritage Circuit",
      daysCount: 4,
      startDate: new Date().toISOString().split('T')[0],
      itinerary: {
        1: ["patna-sahib", "bihar-museum"],
        2: ["vaishali-ashokan-pillar"],
        3: ["nalanda-ruins", "vishwa-shanti-stupa-rajgir"],
        4: ["mahabodhi-temple"]
      }
    };
  } else if (circuitKey === 'nature') {
    currentTrip = {
      title: currentLanguage === 'hi' ? "प्रकृति व जलप्रपात परिपथ" : "Nature & Waterfalls Circuit",
      daysCount: 3,
      startDate: new Date().toISOString().split('T')[0],
      itinerary: {
        1: ["tutla-bhawani", "rohtasgarh-fort"],
        2: ["mundeshwari-temple"],
        3: ["kakolat-waterfall"]
      }
    };
  } else if (circuitKey === 'mithila') {
    currentTrip = {
      title: currentLanguage === 'hi' ? "मिथिला सांस्कृतिक व कला परिपथ" : "Mithila Cultural & Art Trail",
      daysCount: 3,
      startDate: new Date().toISOString().split('T')[0],
      itinerary: {
        1: ["punaura-dham-sitamarhi"],
        2: ["madhubani-art-villages"],
        3: ["vikramshila-ruins"]
      }
    };
  }
  saveCurrentTrip();
  renderPlannerUI();
  showToast(currentLanguage === 'hi' ? 'परिपथ लोड हो गया है' : 'Preset circuit loaded successfully!');
}

// Open modal to add a destination to trip
function openAddToTripDialog(destId) {
  const dest = getDestinationById(destId);
  if (!dest) return;
  const isHi = currentLanguage === 'hi';

  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-backdrop';
  modalOverlay.id = 'add-to-trip-modal';

  let daysOptions = '';
  for (let i = 1; i <= currentTrip.daysCount; i++) {
    daysOptions += `<option value="${i}">${isHi ? `दिन ${i}` : `Day ${i}`}</option>`;
  }

  modalOverlay.innerHTML = `
    <div class="modal-card mini-dialog">
      <div class="modal-header">
        <h3>${isHi ? 'यात्रा योजना में जोड़ें' : 'Add to Trip Plan'}</h3>
        <button class="modal-close-btn" onclick="document.getElementById('add-to-trip-modal').remove()">&times;</button>
      </div>
      <div class="modal-body">
        <p class="dialog-dest-name"><strong>${isHi ? dest.name_hi : dest.name}</strong></p>
        <p class="dialog-subtitle">${isHi ? dest.district_name_hi : dest.district_name} • ${isHi ? dest.category_hi : dest.category}</p>
        <div class="form-group" style="margin-top:1.2rem;">
          <label for="select-trip-day">${isHi ? 'किस दिन जोड़ना चाहते हैं?' : 'Select Day for Itinerary:'}</label>
          <select id="select-trip-day" class="form-select">
            ${daysOptions}
          </select>
        </div>
      </div>
      <div class="modal-footer">
        <button class="btn btn-outline" onclick="document.getElementById('add-to-trip-modal').remove()">${isHi ? 'रद्द करें' : 'Cancel'}</button>
        <button class="btn btn-primary" id="confirm-add-trip-btn">${isHi ? 'जोड़ें' : 'Add to Plan'}</button>
      </div>
    </div>
  `;

  document.body.appendChild(modalOverlay);

  document.getElementById('confirm-add-trip-btn').addEventListener('click', () => {
    const day = parseInt(document.getElementById('select-trip-day').value, 10);
    addDestinationToDay(destId, day);
    modalOverlay.remove();
  });
}

// Print / Export Itinerary
function printItinerary() {
  window.print();
}

// Render Planner UI
function renderPlannerUI() {
  const container = document.getElementById('planner-schedule-container');
  if (!container) return;

  const isHi = currentLanguage === 'hi';
  const durationSelect = document.getElementById('planner-days-select');
  if (durationSelect && durationSelect.value != currentTrip.daysCount) {
    durationSelect.value = currentTrip.daysCount;
  }

  const tripTitleInput = document.getElementById('planner-trip-title');
  if (tripTitleInput) {
    tripTitleInput.value = currentTrip.title || (isHi ? "मेरी बिहार यात्रा" : "My Bihar Expedition");
  }

  let html = '';
  let totalPlaces = 0;

  for (let day = 1; day <= currentTrip.daysCount; day++) {
    const destIds = (currentTrip.itinerary && currentTrip.itinerary[day]) || [];
    totalPlaces += destIds.length;

    html += `
      <div class="planner-day-card" data-day="${day}">
        <div class="planner-day-header">
          <div class="day-badge">
            <span class="day-num">${isHi ? 'दिन' : 'Day'} ${day}</span>
            <span class="day-spots-count">${destIds.length} ${isHi ? 'स्थल' : 'Spots'}</span>
          </div>
          <button class="btn btn-sm btn-outline" onclick="openDestinationPickerForDay(${day})">
            + ${isHi ? 'स्थल जोड़ें' : 'Add Spot'}
          </button>
        </div>
        <div class="planner-day-spots">
    `;

    if (destIds.length === 0) {
      html += `
        <div class="day-empty-placeholder">
          <p>${isHi ? 'इस दिन के लिए अभी कोई स्थल नहीं चुना गया है।' : 'No spots added for this day yet.'}</p>
        </div>
      `;
    } else {
      destIds.forEach(id => {
        const dest = getDestinationById(id);
        if (dest) {
          html += `
            <div class="planner-spot-item">
              <img src="${dest.image}" alt="${isHi ? dest.name_hi : dest.name}" class="spot-thumbnail" />
              <div class="spot-info">
                <h4>${isHi ? dest.name_hi : dest.name}</h4>
                <p class="spot-meta">
                  <span>${isHi ? dest.district_name_hi : dest.district_name}</span> • 
                  <span>⏱ ${isHi ? dest.visiting_duration_hi : dest.visiting_duration}</span>
                </p>
              </div>
              <div class="spot-actions">
                <a href="${dest.google_maps_url}" target="_blank" rel="noopener" class="btn-icon" title="${isHi ? 'मैप देखें' : 'View on Maps'}">
                  📍
                </a>
                <button class="btn-icon btn-danger" onclick="removeDestinationFromDay('${dest.id}', ${day})" title="${isHi ? 'हटाएं' : 'Remove'}">
                  ✕
                </button>
              </div>
            </div>
          `;
        }
      });
    }

    html += `
        </div>
      </div>
    `;
  }

  container.innerHTML = html;

  // Update trip summary counters
  const summaryCounter = document.getElementById('planner-total-spots-badge');
  if (summaryCounter) {
    summaryCounter.textContent = `${totalPlaces} ${isHi ? 'स्थल नियोजित' : 'Places Planned'}`;
  }
}

// Picker dialog to browse destinations and add directly to a day
function openDestinationPickerForDay(dayNumber) {
  const isHi = currentLanguage === 'hi';
  const modalOverlay = document.createElement('div');
  modalOverlay.className = 'modal-backdrop';
  modalOverlay.id = 'picker-modal';

  let listHtml = '';
  BIHAR_DESTINATIONS.forEach(dest => {
    listHtml += `
      <div class="picker-item">
        <img src="${dest.image}" alt="${isHi ? dest.name_hi : dest.name}" />
        <div class="picker-details">
          <h4>${isHi ? dest.name_hi : dest.name}</h4>
          <p>${isHi ? dest.district_name_hi : dest.district_name} • ${isHi ? dest.category_hi : dest.category}</p>
        </div>
        <button class="btn btn-sm btn-primary" onclick="addDestinationToDay('${dest.id}', ${dayNumber}); document.getElementById('picker-modal').remove();">
          + ${isHi ? 'चुनें' : 'Select'}
        </button>
      </div>
    `;
  });

  modalOverlay.innerHTML = `
    <div class="modal-card">
      <div class="modal-header">
        <h3>${isHi ? `दिन ${dayNumber} के लिए पर्यटन स्थल चुनें` : `Select Destination for Day ${dayNumber}`}</h3>
        <button class="modal-close-btn" onclick="document.getElementById('picker-modal').remove()">&times;</button>
      </div>
      <div class="modal-body" style="max-height: 60vh; overflow-y: auto;">
        <div class="picker-list">
          ${listHtml}
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(modalOverlay);
}

