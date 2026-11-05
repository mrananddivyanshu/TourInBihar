# Discover Local Bihar (बिहार पर्यटन)
> **Tagline:** Explore Beyond the Ordinary / साधारण से परे अन्वेषण करें  
> **Platform Type:** Digital Tourism & Travel Discovery Platform  
> **Version:** 2.0 (PRD Implementation)  
> **Coverage:** All 38 Districts of Bihar, India

---

## 🌟 Overview

**Discover Local Bihar** is a centralized, digital tourism discovery platform connecting travellers with Bihar's historical landmarks, sacred pilgrimage sites, pristine wildlife reserves, roaring waterfalls, GI-tagged local culinary specialties, living folk art, and vibrant festivals across **all 38 districts** of Bihar.

---

## 🚀 Core Features Implemented (PRD Specification)

### 1. 🏛️ Home & Destination Discovery
- **Hero Banner:** Inspiring visual presentation with search bar and quick suggestion pills.
- **Smart Search:** Real-time query matching across destination names, district names, culinary dishes, cultural art forms, and bilingual English & Hindi terms.
- **Key Stats:** 38 Districts, 100+ Curated Spots, 3,000+ Years of History, 100% Free & Verified Guide.
- **8 Distinct Categories:**
  1. Historical Monuments & Architecture
  2. Religious & Spiritual Places
  3. Nature & Wildlife
  4. Adventure & Outdoor Activities
  5. Cultural & Heritage Places
  6. Museums & Educational Places
  7. Lakes, Rivers & Waterfalls
  8. Local Markets & Handicrafts

### 2. 🗺️ Directory of All 38 Districts
Full coverage across all 9 administrative divisions of Bihar:
- **Patna Division:** Patna, Nalanda, Bhojpur, Buxar, Rohtas, Kaimur
- **Magadh Division:** Gaya, Nawada, Aurangabad, Jehanabad, Arwal
- **Tirhut Division:** Muzaffarpur, Vaishali, East Champaran, West Champaran, Sitamarhi, Sheohar
- **Saran Division:** Saran, Siwan, Gopalganj
- **Darbhanga Division:** Darbhanga, Madhubani, Samastipur
- **Kosi Division:** Saharsa, Supaul, Madhepura
- **Purnia Division:** Purnia, Araria, Kishanganj, Katihar
- **Bhagalpur Division:** Bhagalpur, Banka
- **Munger Division:** Munger, Jamui, Khagaria, Begusarai, Lakhisarai, Sheikhpura

Each district includes:
- Administrative division and headquarters
- Overview and historical significance in English and Hindi
- Famous culinary specialties (e.g., Silao Khaja, Shahi Litchi, Udwantnagar Belgrami, Gaya Tilkut, Mithila Makhana)
- Festivals and cultural celebrations
- Transport connectivity and how to reach
- Verified tourist attractions list

### 3. 🔍 Advanced Filters & Interactive Map
- Filter by category, district, free vs. paid admission, and wheelchair accessibility.
- **Interactive Leaflet / OpenStreetMap:** Live map markers for all destinations synchronized with active filters.
- Direct **Google Maps navigation links** for instant route guidance.

### 4. 📋 Rich Destination Detail Modals
Every destination features:
- High-resolution photography gallery
- Comprehensive historical background and cultural significance
- Verified opening hours and admission charges
- Physical accessibility ratings (wheelchair friendly)
- Practical travel tips and nearby attractions
- Data verification badges with verification date and official source

### 5. 🗓️ Interactive Trip Planner & Itinerary Builder
- Plan 1, 2, 3, 5, or 7-day trips across Bihar.
- Curated preset circuits:
  - **Buddhist Heritage Circuit:** Patna Sahib → Nalanda → Rajgir → Bodh Gaya
  - **Nature & Waterfalls Circuit:** Tutla Bhawani → Rohtasgarh → Mundeshwari → Kakolat
  - **Mithila Cultural & Art Trail:** Punaura Dham → Madhubani Art Villages → Vikramshila
- Day-wise destination organization with one-click addition/removal.
- **Print / PDF Export:** Clean print-ready stylesheet for travel.
- Automatic persistence via browser `localStorage`.

### 6. 🍲 Authentic Local Food & Cultural Heritage
- **Cuisine:** Litti Chokha, Silao Khaja (GI Tag), Thekua, Sattu Sharbat, Mithila Makhana (GI Tag), Shahi Litchi (GI Tag), Champaran Ahuna Handi Mutton, Gaya Tilkut & Anarsa.
- **Folk Arts & Crafts:** Madhubani / Mithila Painting, Manjusha Art (Angika), Tikuli Art of Patna, Sikki Golden Grass Craft, Bhagalpuri Tussar Silk.
- **Festivals:** Chhath Mahaparv, Sonepur Cattle Fair, Rajgir Mahotsav, Pitrapaksha Mela, Sama Chakeba.

### 7. 🇮🇳 Full Multilingual Support (हिन्दी एवं English)
- Instant toggle between Hindi and English without page reloads.
- Persistent language choice saved in `localStorage`.
- Comprehensive bilingual translation coverage for all UI elements, labels, categories, and district guides.

### 8. 🚨 Travel Guide, Safety & Emergency Helplines
- Verified 24x7 emergency contacts:
  - Unified Emergency: **112**
  - Bihar State Tourism Helpline: **1800-3456-112**
  - Medical Ambulance: **108**
  - Women Helpline: **181 / 1090**
  - Railway Helpline: **139**
  - Tourist Police Assistance: **+91 612 2225917**
- Seasonal weather advisories (Winter, Monsoon, Summer).
- Comprehensive transport guide (Airports, Vande Bharat & Railways, Highways, Local Commute).
- Tourist code of conduct (Dos & Don'ts).

---

## 💻 Tech Stack

- **Frontend:** Semantic HTML5, CSS3 (Modern Flexbox & CSS Grid, responsive design tokens), Vanilla JavaScript (ES6+).
- **Mapping:** Leaflet.js with OpenStreetMap tiles.
- **Storage:** HTML5 LocalStorage for zero-latency client-side persistence of Favourites and Itineraries.
- **Zero Build Configuration Required:** Runs directly in any modern web browser.

---

## 🏃 How to Run

1. Clone or open this repository directory.
2. Double-click or open `index.html` in any web browser (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari).
3. Alternatively, serve via any static HTTP server:
   ```bash
   # Python (if installed)
   python -m http.server 8000

   # Or using VS Code "Live Server" extension
   ```
4. Access the web platform at `http://localhost:8000` or file URL.

---

## 📜 Acceptance Criteria Verification (PRD Section 18)

| Acceptance Criterion | Status | Implementation Details |
|---|---|---|
| All 38 districts available in directory | ✅ PASSED | All 38 districts present with division, HQ, food, festivals, transport & intro |
| Search for destinations works | ✅ PASSED | Real-time smart search across EN/HI names, districts, food & categories |
| District & category filters work | ✅ PASSED | Interactive dropdowns + pill filters updating both cards and live map |
| Destination details open correctly | ✅ PASSED | Full modal with galleries, timings, fees, history, accessibility, tips |
| Hindi & English switching works | ✅ PASSED | Instant toggle button translating the full interface, persisted in LocalStorage |
| Favourites saved correctly | ✅ PASSED | One-click heart toggle, counter badge, saved list view in LocalStorage |
| Map links work | ✅ PASSED | Leaflet interactive map + direct Google Maps directions links |
| Responsive across mobile and desktop | ✅ PASSED | Mobile hamburger menu, fluid CSS Grid, touch-friendly controls |
| Clear verification status | ✅ PASSED | Green "Verified" badges with verification date and official source (ASI/BSTDC) |

