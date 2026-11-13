// Discover Local Bihar - Interactive Smart Tools Module
// 1. Distance & Route Calculator
// 2. 30-Second "Find Your Vibe" Trip Matcher
// 3. Live Tourism Weather & Seasonality Widget

// ==========================================================
// 1. DISTANCE & ROUTE CALCULATOR DATABASE
// ==========================================================
const BIHAR_TRAVEL_ORIGINS = [
  { id: "patna_airport", name: "Patna Airport (Jay Prakash Narayan)", name_hi: "पटना एयरपोर्ट (जय प्रकाश नारायण)", lat: 25.5913, lng: 85.0880 },
  { id: "patna_junction", name: "Patna Junction Railway Station", name_hi: "पटना जंक्शन रेलवे स्टेशन", lat: 25.6038, lng: 85.1362 },
  { id: "gaya_airport", name: "Gaya International Airport / Station", name_hi: "गया अंतरराष्ट्रीय एयरपोर्ट / जंक्शन", lat: 24.7443, lng: 84.9512 },
  { id: "varanasi", name: "Varanasi Cantt / Airport (UP Hub)", name_hi: "वाराणसी कैंट / एयरपोर्ट (यूपी हब)", lat: 25.3283, lng: 82.9867 },
  { id: "kolkata", name: "Kolkata (Howrah / Airport)", name_hi: "कोलकाता (हावड़ा / दमदम)", lat: 22.5858, lng: 88.3426 },
  { id: "darbhanga_airport", name: "Darbhanga Airport (Mithila Hub)", name_hi: "दरभंगा एयरपोर्ट (मिथिला हब)", lat: 26.1950, lng: 85.9144 },
  { id: "muzaffarpur", name: "Muzaffarpur Junction (North Bihar)", name_hi: "मुजफ्फरपुर जंक्शन (उत्तर बिहार)", lat: 26.1219, lng: 85.3909 },
  { id: "bhagalpur", name: "Bhagalpur Junction (Anga Hub)", name_hi: "भागलपुर जंक्शन (अंग हब)", lat: 25.2425, lng: 86.9842 }
];

const BIHAR_TRAVEL_DESTINATIONS = [
  {
    id: "bodhgaya",
    name: "Bodh Gaya (Mahabodhi Temple UNESCO Site)",
    name_hi: "बोधगया (महाबोधि मंदिर यूनेस्को धरोहर)",
    district: "Gaya",
    district_hi: "गया",
    nearest_station: "Gaya Junction (16 km)",
    nearest_station_hi: "गया जंक्शन (16 किमी)",
    highway: "NH-22 & NH-83",
    dest_lat: 24.6961,
    dest_lng: 84.9913,
    distances_from: {
      patna_airport: { km: 112, hours: "2.5 - 3 Hrs", train: "Vande Bharat / Jan Shatabdi from Patna (1.5 - 2 Hrs to Gaya)" },
      patna_junction: { km: 110, hours: "2.5 - 3 Hrs", train: "Daily frequent trains (Memu, Express, Vande Bharat: 1.5 - 2 hrs)" },
      gaya_airport: { km: 12, hours: "25 Mins", train: "Local taxi or auto-rickshaw directly from airport" },
      varanasi: { km: 250, hours: "5 - 5.5 Hrs", train: "Grand Chord Line trains (3 - 3.5 Hrs to Gaya Junction)" },
      kolkata: { km: 480, hours: "9 - 10 Hrs", train: "Rajdhani / Poorva / Doon Express (6.5 - 7.5 Hrs to Gaya)" },
      darbhanga_airport: { km: 240, hours: "5.5 - 6 Hrs", train: "Via Samastipur - Patna - Gaya rail route" },
      muzaffarpur: { km: 185, hours: "4 - 4.5 Hrs", train: "Direct trains via Patna bypass (3.5 - 4 Hrs)" },
      bhagalpur: { km: 235, hours: "5.5 - 6 Hrs", train: "Via Kiul - Gaya rail link (4.5 - 5 Hrs)" }
    }
  },
  {
    id: "nalanda",
    name: "Ruins of Nalanda University",
    name_hi: "नालंदा विश्वविद्यालय के खंडहर",
    district: "Nalanda",
    district_hi: "नालंदा",
    nearest_station: "Nalanda Station (2 km) / Bakhtiyarpur (42 km)",
    nearest_station_hi: "नालंदा स्टेशन (2 किमी) / बख्तियारपुर जंक्शन (42 किमी)",
    highway: "NH-20 & SH-49 (4-Lane Expressway)",
    dest_lat: 25.1357,
    dest_lng: 85.4447,
    distances_from: {
      patna_airport: { km: 88, hours: "2 - 2.5 Hrs", train: "Shramjeevi Express / Rajgir Passenger via Bakhtiyarpur" },
      patna_junction: { km: 85, hours: "2 Hrs", train: "Direct DMU/Passenger & Express trains to Nalanda (2 - 2.5 Hrs)" },
      gaya_airport: { km: 82, hours: "2 - 2.5 Hrs", train: "Via Gaya - Tilaiya - Rajgir rail section" },
      varanasi: { km: 310, hours: "6 - 6.5 Hrs", train: "Train to Bakhtiyarpur or Patna, then road taxi" },
      kolkata: { km: 470, hours: "9 - 9.5 Hrs", train: "Howrah - Rajgir Express connects directly" },
      darbhanga_airport: { km: 180, hours: "4 - 4.5 Hrs", train: "Road via Mokama - Bakhtiyarpur bridge" },
      muzaffarpur: { km: 155, hours: "3.5 - 4 Hrs", train: "Via Patna / Digha bridge route" },
      bhagalpur: { km: 195, hours: "4.5 - 5 Hrs", train: "Via Kiul - Nawada - Rajgir route" }
    }
  },
  {
    id: "rajgir",
    name: "Rajgir Glass Bridge, Nature Safari & Ropeway",
    name_hi: "राजगीर ग्लास ब्रिज, नेचर सफारी एवं रोपवे",
    district: "Nalanda",
    district_hi: "नालंदा",
    nearest_station: "Rajgir Railway Station (5 km)",
    nearest_station_hi: "राजगीर रेलवे स्टेशन (5 किमी)",
    highway: "NH-120 & NH-20",
    dest_lat: 25.0135,
    dest_lng: 85.4215,
    distances_from: {
      patna_airport: { km: 98, hours: "2 - 2.5 Hrs", train: "Shramjeevi / Rajgir Express from Patna (2.5 Hrs)" },
      patna_junction: { km: 95, hours: "2 - 2.5 Hrs", train: "Daily trains from Patna Jn directly to Rajgir terminal" },
      gaya_airport: { km: 74, hours: "1.8 - 2 Hrs", train: "Scenic road drive via Hisua / Nawada (1.8 Hrs)" },
      varanasi: { km: 320, hours: "6.5 Hrs", train: "Train to Gaya or Patna, then taxi" },
      kolkata: { km: 485, hours: "9.5 Hrs", train: "Direct Howrah-Rajgir Fast Passenger (12 Hrs) or train to Gaya" },
      darbhanga_airport: { km: 190, hours: "4.5 Hrs", train: "Via NH-31 & Bakhtiyarpur 4-lane" },
      muzaffarpur: { km: 165, hours: "3.8 - 4.2 Hrs", train: "Via Patna bypass Expressway" },
      bhagalpur: { km: 205, hours: "4.8 - 5.2 Hrs", train: "Via Kiul - Warisaliganj route" }
    }
  },
  {
    id: "valmiki",
    name: "Valmiki Tiger Reserve & Gandak River",
    name_hi: "वाल्मीकि टाइगर रिजर्व एवं गंडक नदी",
    district: "West Champaran",
    district_hi: "पश्चिम चंपारण",
    nearest_station: "Valmikinagar Road (VNE) / Bagaha (40 km)",
    nearest_station_hi: "वाल्मीकिनगर रोड स्टेशन / बगहा जंक्शन (40 किमी)",
    highway: "NH-727 via Bettiah & Bagaha",
    dest_lat: 27.3200,
    dest_lng: 84.1500,
    distances_from: {
      patna_airport: { km: 285, hours: "6.5 - 7 Hrs", train: "Sapt Kranti Express from Muzaffarpur/Patna to Bagaha" },
      patna_junction: { km: 290, hours: "6.5 - 7 Hrs", train: "Patna - Narkatiaganj intercity trains" },
      gaya_airport: { km: 395, hours: "8.5 - 9 Hrs", train: "Via Patna rail interchange" },
      varanasi: { km: 260, hours: "5.5 - 6 Hrs", train: "Via Gorakhpur (UP) rail link directly to Bagaha (3 Hrs from Gorakhpur)" },
      kolkata: { km: 840, hours: "16 Hrs", train: "Train to Gorakhpur or Muzaffarpur, then taxi" },
      darbhanga_airport: { km: 220, hours: "5 - 5.5 Hrs", train: "Via Sitamarhi - Raxaul - Narkatiaganj route" },
      muzaffarpur: { km: 215, hours: "4.8 - 5.3 Hrs", train: "Direct trains on Muzaffarpur - Gorakhpur mainline to Bagaha" },
      bhagalpur: { km: 450, hours: "10 - 11 Hrs", train: "Via Patna/Muzaffarpur rail route" }
    }
  },
  {
    id: "rohtasgarh",
    name: "Rohtasgarh Fort & Tutla Bhawani Waterfall",
    name_hi: "रोहतासगढ़ किला एवं तुतला भवानी जलप्रपात",
    district: "Rohtas",
    district_hi: "रोहतास",
    nearest_station: "Dehri-on-Sone (DOS) / Sasaram (SSM)",
    nearest_station_hi: "डेहरी-ऑन-सोन जंक्शन / सासाराम जंक्शन (40 किमी)",
    highway: "NH-19 (Grand Trunk Road) & SH-2",
    dest_lat: 24.6300,
    dest_lng: 83.9200,
    distances_from: {
      patna_airport: { km: 165, hours: "3.5 - 4 Hrs", train: "Train from Patna to Sasaram/Dehri (2.5 - 3 Hrs)" },
      patna_junction: { km: 160, hours: "3.5 - 4 Hrs", train: "Intercity & Express trains to Sasaram (2.5 Hrs)" },
      gaya_airport: { km: 110, hours: "2.2 - 2.6 Hrs", train: "Grand Chord mainline trains from Gaya to Dehri (1.2 Hrs)" },
      varanasi: { km: 140, hours: "2.8 - 3.2 Hrs", train: "Vande Bharat / Doon Express to Sasaram (1.5 - 2 Hrs)" },
      kolkata: { km: 540, hours: "10 Hrs", train: "Howrah - Kalka / Poorva Express to Sasaram (7 Hrs)" },
      darbhanga_airport: { km: 295, hours: "6.5 Hrs", train: "Via Patna interchange" },
      muzaffarpur: { km: 235, hours: "5 - 5.5 Hrs", train: "Via Patna Son bridge" },
      bhagalpur: { km: 310, hours: "7 Hrs", train: "Via Kiul - Gaya - Dehri route" }
    }
  },
  {
    id: "kakolat",
    name: "Kakolat Waterfall (Nawada Valley)",
    name_hi: "ककोलत शीतल जलप्रपात (नवादा)",
    district: "Nawada",
    district_hi: "नवादा",
    nearest_station: "Nawada (33 km) / Koderma Junction (45 km)",
    nearest_station_hi: "नवादा स्टेशन (33 किमी) / कोडरमा जंक्शन (45 किमी)",
    highway: "NH-31 (Ranchi-Patna Highway)",
    dest_lat: 24.6880,
    dest_lng: 85.6150,
    distances_from: {
      patna_airport: { km: 135, hours: "3.2 - 3.6 Hrs", train: "Via Bakhtiyarpur - Nawada rail route" },
      patna_junction: { km: 132, hours: "3 - 3.5 Hrs", train: "Patna - Ranchi road or train to Nawada" },
      gaya_airport: { km: 85, hours: "2 - 2.3 Hrs", train: "Via Gaya - Nawada road or rail" },
      varanasi: { km: 320, hours: "6 - 6.5 Hrs", train: "Train to Koderma or Gaya, then taxi" },
      kolkata: { km: 440, hours: "8 - 8.5 Hrs", train: "Howrah - Koderma train (5.5 Hrs), then 45 km scenic road drive" },
      darbhanga_airport: { km: 225, hours: "5 Hrs", train: "Via Mokama bridge" },
      muzaffarpur: { km: 200, hours: "4.5 Hrs", train: "Via Patna bypass" },
      bhagalpur: { km: 175, hours: "4 - 4.5 Hrs", train: "Via Jamui - Nawada route" }
    }
  },
  {
    id: "vikramshila",
    name: "Vikramshila University Ruins & Dolphin Sanctuary",
    name_hi: "विक्रमशिला विश्वविद्यालय खंडहर व डॉल्फिन अभयारण्य",
    district: "Bhagalpur",
    district_hi: "भागलपुर",
    nearest_station: "Kahalgaon Railway Station (13 km) / Bhagalpur (40 km)",
    nearest_station_hi: "कहलगांव स्टेशन (13 किमी) / भागलपुर जंक्शन (40 किमी)",
    highway: "NH-80 & NH-33",
    dest_lat: 25.3333,
    dest_lng: 87.2833,
    distances_from: {
      patna_airport: { km: 265, hours: "5.5 - 6 Hrs", train: "Vande Bharat / Intercity Express from Patna to Bhagalpur (3.5 Hrs)" },
      patna_junction: { km: 260, hours: "5.5 - 6 Hrs", train: "Regular express trains to Bhagalpur/Kahalgaon" },
      gaya_airport: { km: 280, hours: "6.5 Hrs", train: "Via Kiul Junction rail line" },
      varanasi: { km: 470, hours: "9 - 10 Hrs", train: "Direct trains on mainline to Bhagalpur" },
      kolkata: { km: 390, hours: "7.5 - 8 Hrs", train: "Howrah - Jamalpur Express / Kavi Guru Express (6.5 Hrs)" },
      darbhanga_airport: { km: 210, hours: "5 - 5.5 Hrs", train: "Via Samastipur - Barauni - Munger Ganga bridge" },
      muzaffarpur: { km: 220, hours: "5 - 5.5 Hrs", train: "Via Barauni - Begusarai - Bhagalpur" },
      bhagalpur: { km: 40, hours: "50 Mins", train: "Local passenger or express train to Kahalgaon (35 Mins)" }
    }
  },
  {
    id: "kesaria",
    name: "Kesaria World's Tallest Buddhist Stupa",
    name_hi: "केसरिया विश्व का सबसे ऊँचा बौद्ध स्तूप",
    district: "East Champaran",
    district_hi: "पूर्वी चंपारण",
    nearest_station: "Chakia Railway Station (30 km) / Muzaffarpur (65 km)",
    nearest_station_hi: "चकिया स्टेशन (30 किमी) / मुजफ्फरपुर जंक्शन (65 किमी)",
    highway: "NH-74 (Buddhist Circuit Highway)",
    dest_lat: 26.3500,
    dest_lng: 84.9000,
    distances_from: {
      patna_airport: { km: 115, hours: "2.8 - 3.2 Hrs", train: "Drive via Vaishali Buddhist highway" },
      patna_junction: { km: 118, hours: "2.8 - 3.2 Hrs", train: "Via Digha JP Setu bridge & Vaishali" },
      gaya_airport: { km: 225, hours: "5 Hrs", train: "Via Patna interchange" },
      varanasi: { km: 270, hours: "5.8 Hrs", train: "Via Chapra route" },
      kolkata: { km: 680, hours: "13 Hrs", train: "Train to Muzaffarpur, then 65 km taxi" },
      darbhanga_airport: { km: 110, hours: "2.5 Hrs", train: "Via Muzaffarpur - Chakia 4-lane" },
      muzaffarpur: { km: 65, hours: "1.3 - 1.5 Hrs", train: "Very convenient road drive via Chakia NH-28/74" },
      bhagalpur: { km: 285, hours: "6.5 Hrs", train: "Via Barauni - Muzaffarpur route" }
    }
  }
];

// ==========================================================
// 2. LIVE WEATHER & SEASONALITY DATABASE
// ==========================================================
const BIHAR_WEATHER_HUBS = [
  {
    id: "patna",
    name: "Patna",
    name_hi: "पटना",
    zone: "Central Heritage & River Hub",
    zone_hi: "केंद्रीय हेरिटेज व गंगा तट",
    lat: 25.5941,
    lng: 85.1376,
    best_season: "October - March (Pleasant Autumn & Winter)",
    best_season_hi: "अक्टूबर से मार्च (सुखद शरद व शीतकाल)",
    season_code: "peak",
    fallback: { temp: 24, humidity: 48, condition: "Pleasant & Clear", condition_hi: "सुखद व स्वच्छ", icon: "☀️" }
  },
  {
    id: "bodhgaya",
    name: "Bodh Gaya & Gaya",
    name_hi: "बोधगया एवं गया",
    zone: "Spiritual & Enlightenment Hub",
    zone_hi: "आध्यात्मिक व बुद्ध महाबोधि क्षेत्र",
    lat: 24.6961,
    lng: 84.9913,
    best_season: "November - February (Cool Meditation Season)",
    best_season_hi: "नवंबर से फरवरी (ध्यान व साधना के लिए उत्तम)",
    season_code: "peak",
    fallback: { temp: 23, humidity: 45, condition: "Sunny & Gentle Breeze", condition_hi: "धूप व हल्की हवा", icon: "🧘" }
  },
  {
    id: "rajgir",
    name: "Rajgir & Nalanda",
    name_hi: "राजगीर एवं नालंदा",
    zone: "Hills, Springs & Skywalk",
    zone_hi: "गिरी पर्वत, गर्म जलकुंड व ग्लास ब्रिज",
    lat: 25.0135,
    lng: 85.4215,
    best_season: "October - March (Ideal for Trekking & Ropeway)",
    best_season_hi: "अक्टूबर से मार्च (ट्रेकिंग व रोपवे के लिए सर्वोत्तम)",
    season_code: "peak",
    fallback: { temp: 22, humidity: 50, condition: "Crisp Valley Air", condition_hi: "स्वच्छ पर्वतीय हवा", icon: "⛰️" }
  },
  {
    id: "valmiki",
    name: "Valmiki Tiger Reserve",
    name_hi: "वाल्मीकि टाइगर रिजर्व",
    zone: "Himalayan Foothills & Safari",
    zone_hi: "तराई जंगल, वन्यजीव व गंडक सफारी",
    lat: 27.3200,
    lng: 84.1500,
    best_season: "November - April (Tiger Safari Open)",
    best_season_hi: "नवंबर से अप्रैल (टाइगर सफारी चालू)",
    season_code: "safari",
    fallback: { temp: 21, humidity: 62, condition: "Fresh Forest Canopy", condition_hi: "शीतल वन्य परिवेश", icon: "🐅" }
  },
  {
    id: "bhagalpur",
    name: "Bhagalpur & Mandar",
    name_hi: "भागलपुर एवं मंदार हिल",
    zone: "Silk City & Dolphin River Basin",
    zone_hi: "सिल्क सिटी व गंगा डॉल्फिन क्षेत्र",
    lat: 25.2425,
    lng: 86.9842,
    best_season: "October - March (Pleasant River Cruise)",
    best_season_hi: "अक्टूबर से मार्च (नदी क्रूज़ व डॉल्फिन दर्शन)",
    season_code: "peak",
    fallback: { temp: 25, humidity: 52, condition: "Breezy Riverfront", condition_hi: "मंद बयार व धूप", icon: "🐬" }
  },
  {
    id: "darbhanga",
    name: "Darbhanga & Madhubani",
    name_hi: "दरभंगा एवं मधुबनी",
    zone: "Mithila Cultural & Lake Zone",
    zone_hi: "मिथिला सांस्कृतिक व कला-सरोवर क्षेत्र",
    lat: 26.1542,
    lng: 85.8918,
    best_season: "October - March (Art Villages & Festivals)",
    best_season_hi: "अक्टूबर से मार्च (कला ग्राम व सांस्कृतिक उत्सव)",
    season_code: "peak",
    fallback: { temp: 24, humidity: 55, condition: "Pleasant Lake Climate", condition_hi: "सुहावना मौसम", icon: "🎨" }
  }
];

// ==========================================================
// 3. "FIND YOUR VIBE" 30-SECOND TRIP MATCHER PRESETS
// ==========================================================
const TRIP_MATCHER_CONFIG = {
  companions: [
    { id: "solo", icon: "🎒", label: "Solo Explorer", label_hi: "एकांत / सोलो यात्री" },
    { id: "family", icon: "👨‍👩‍👧‍👦", label: "Family with Kids", label_hi: "सपरिवार व बच्चे" },
    { id: "friends", icon: "🧗", label: "Friends & Adventure", label_hi: "दोस्त व युवा दल" },
    { id: "spiritual", icon: "🕉️", label: "Spiritual / Seniors", label_hi: "वरिष्ठ व आध्यात्मिक" }
  ],
  interests: [
    { id: "history", icon: "🏛️", label: "Ancient Empires & UNESCO", label_hi: "प्राचीन साम्राज्य व यूनेस्को धरोहर" },
    { id: "peace", icon: "🛕", label: "Buddha Nirvana & Temples", label_hi: "बुद्ध निर्वाण, ध्यान व तीर्थ" },
    { id: "nature", icon: "🐅", label: "Tigers, Waterfalls & Trek", label_hi: "टाइगर सफारी, झरने व ट्रेकिंग" },
    { id: "culture", icon: "🍲", label: "Mithila Art & Bihari Food", label_hi: "मिथिला पेंटिंग, सिल्क व जायके" }
  ],
  durations: [
    { id: "weekend", days: 2, label: "2 Days (Weekend)", label_hi: "2 दिन (वीकेंड एक्सप्रेस)" },
    { id: "circuit", days: 3, label: "3-4 Days (Classic Circuit)", label_hi: "3-4 दिन (लोकप्रिय परिपथ)" },
    { id: "grand", days: 6, label: "5-7 Days (Grand Explorer)", label_hi: "5-7 दिन (संपूर्ण बिहार भ्रमण)" }
  ],
  outcomes: {
    "history": {
      title: "Imperial Magadha Heritage Circuit",
      title_hi: "मगध साम्राज्य गौरवशाली ऐतिहासिक परिपथ",
      badge: "UNESCO Heritage Trail",
      badge_hi: "यूनेस्को विश्व धरोहर परिपथ",
      description: "Walk through the world's first university at Nalanda, Emperor Ashoka's pillars, the majestic ruins of Rajagriha, and South Asia's largest world-class museum in Patna.",
      description_hi: "विश्व के पहले आवासीय विश्वविद्यालय नालंदा, सम्राट अशोक के प्राचीन स्तम्भ, मगध की पहली राजधानी राजगृह और पटना के एशिया नंबर-1 बिहार म्यूजियम की ऐतिहासिक यात्रा।",
      spots: ["bihar-museum", "nalanda-ruins", "patna-museum", "vishwa-shanti-stupa-rajgir"],
      spots_count: 5,
      budget_est: "₹3,500 - ₹5,500 per person",
      budget_est_hi: "₹3,500 - ₹5,500 प्रति व्यक्ति",
      best_time: "October to March",
      best_time_hi: "अक्टूबर से मार्च",
      circuit_key: "buddhist"
    },
    "peace": {
      title: "Sacred Bodhi Enlightenment Trail",
      title_hi: "पवित्र बोधि आत्मशांति व निर्वाण परिपथ",
      badge: "Spiritual Awakening",
      badge_hi: "आध्यात्मिक व शांति परिपथ",
      description: "Experience profound inner peace beneath the sacred Bodhi Tree where Buddha attained enlightenment, meditate in peaceful international monasteries, and visit ancient Hindu pilgrimage sites.",
      description_hi: "भगवान बुद्ध की ज्ञानस्थली पवित्र बोधिवृक्ष के नीचे ध्यान, विश्व प्रसिद्ध अंतरराष्ट्रीय बौद्ध महाविहारों का भ्रमण और विष्णुपद मंदिर में आध्यात्मिक शांति का अनुभव।",
      spots: ["mahabodhi-temple", "vishwa-shanti-stupa-rajgir", "vishnupad-temple", "barabar-caves"],
      spots_count: 4,
      budget_est: "₹2,800 - ₹4,800 per person",
      budget_est_hi: "₹2,800 - ₹4,800 प्रति व्यक्ति",
      best_time: "October to February",
      best_time_hi: "अक्टूबर से फरवरी",
      circuit_key: "buddhist"
    },
    "nature": {
      title: "Wild Kaimur & Eco-Adventure Trek",
      title_hi: "वाइल्ड कैमूर व इको-एडवेंचर रोमांच परिपथ",
      badge: "Nature & Adrenaline",
      badge_hi: "रोमांच, सफारी व जलप्रपात",
      description: "Thrill yourself with India's highest glass bridge skywalk, track Bengal tigers in Valmiki National Park, bathe in thunderous Kakolat and Tutla Bhawani waterfalls, and conquer cliffside forts.",
      description_hi: "राजगीर का 250 फीट ऊँचा ग्लास स्काईवॉक, वाल्मीकि नेशनल पार्क में रॉयल बंगाल टाइगर सफारी, रोहतासगढ़ का विशाल किला और ककोलत व तुतला भवानी के गूंजते शीतल जलप्रपात।",
      spots: ["rajgir-glass-bridge", "valmiki-tiger-reserve", "rohtasgarh-fort", "kakolat-waterfall"],
      spots_count: 4,
      budget_est: "₹4,200 - ₹6,800 per person",
      budget_est_hi: "₹4,200 - ₹6,800 प्रति व्यक्ति",
      best_time: "November to March",
      best_time_hi: "नवंबर से मार्च",
      circuit_key: "nature"
    },
    "culture": {
      title: "Mithila Folk Heritage & Gastronomy Trail",
      title_hi: "मिथिला लोककला, हस्तशिल्प व पारंपरिक जायका परिपथ",
      badge: "Culinary & Living Art",
      badge_hi: "जीवंत कला व पाक विरासत",
      description: "Interact with Padma Shri awardee artists in Madhubani art villages, visit royal palaces in Darbhanga, savor GI-tagged authentic delicacies (Litti Chokha, Silao Khaja, Makhana Kheer), and shop Bhagalpuri Tussar Silk.",
      description_hi: "मधुबनी के विश्वप्रसिद्ध कला ग्रामों में पद्मश्री कलाकारों से प्रत्यक्ष भेंट, दरभंगा के भव्य राजमहल, जीआई-टैग प्राप्त लजीज बिहारी व्यंजन (लिट्टी चोखा, सिलाव खाजा, मखाना खीर) और भागलपुरी तसर सिल्क।",
      spots: ["madhubani-art-villages", "punaura-dham-sitamarhi", "vikramshila-ruins"],
      spots_count: 5,
      budget_est: "₹3,200 - ₹5,000 per person",
      budget_est_hi: "₹3,200 - ₹5,000 प्रति व्यक्ति",
      best_time: "September to March",
      best_time_hi: "सितंबर से मार्च",
      circuit_key: "mithila"
    }
  }
};

// ==========================================================
// CONTROLLER: DISTANCE & ROUTE CALCULATOR
// ==========================================================
function initDistanceCalculator() {
  const originSelect = document.getElementById('route-origin-select');
  const destSelect = document.getElementById('route-dest-select');
  if (!originSelect || !destSelect) return;

  const isHi = typeof currentLanguage !== 'undefined' && currentLanguage === 'hi';

  // Populate Origins
  let originOpts = '';
  BIHAR_TRAVEL_ORIGINS.forEach(orig => {
    originOpts += `<option value="${orig.id}">${isHi ? orig.name_hi : orig.name}</option>`;
  });
  originSelect.innerHTML = originOpts;

  // Populate Destinations
  let destOpts = '';
  BIHAR_TRAVEL_DESTINATIONS.forEach(dest => {
    destOpts += `<option value="${dest.id}">${isHi ? dest.name_hi : dest.name} [${isHi ? dest.district_hi : dest.district}]</option>`;
  });
  destSelect.innerHTML = destOpts;

  // Set default selection
  originSelect.value = "patna_airport";
  destSelect.value = "bodhgaya";

  // Bind change events
  originSelect.addEventListener('change', calculateAndRenderRoute);
  destSelect.addEventListener('change', calculateAndRenderRoute);

  calculateAndRenderRoute();
}

function calculateAndRenderRoute() {
  const originId = document.getElementById('route-origin-select')?.value || 'patna_airport';
  const destId = document.getElementById('route-dest-select')?.value || 'bodhgaya';
  const container = document.getElementById('route-result-container');
  if (!container) return;

  const origin = BIHAR_TRAVEL_ORIGINS.find(o => o.id === originId) || BIHAR_TRAVEL_ORIGINS[0];
  const dest = BIHAR_TRAVEL_DESTINATIONS.find(d => d.id === destId) || BIHAR_TRAVEL_DESTINATIONS[0];
  const routeData = dest.distances_from[originId] || { km: 120, hours: "3 Hrs", train: "Mainline connection available" };
  const isHi = typeof currentLanguage !== 'undefined' && currentLanguage === 'hi';

  const gmapsUrl = `https://www.google.com/maps/dir/?api=1&origin=${encodeURIComponent(origin.name)}&destination=${encodeURIComponent(dest.name)}`;

  container.innerHTML = `
    <div class="route-metrics-card">
      <div class="route-header-row">
        <div class="route-point origin">
          <span class="route-dot">🟢</span>
          <div>
            <small>${isHi ? 'प्रारंभिक स्थल (Origin)' : 'Starting Hub'}</small>
            <h4>${isHi ? origin.name_hi : origin.name}</h4>
          </div>
        </div>
        <div class="route-arrow-sep">➔</div>
        <div class="route-point dest">
          <span class="route-dot">📍</span>
          <div>
            <small>${isHi ? 'गंतव्य स्थल (Destination)' : 'Destination'}</small>
            <h4>${isHi ? dest.name_hi : dest.name}</h4>
          </div>
        </div>
      </div>

      <div class="route-stats-grid">
        <div class="route-stat-box">
          <span class="route-stat-icon">🛣️</span>
          <span class="route-stat-val">${routeData.km} km</span>
          <span class="route-stat-lbl">${isHi ? 'सड़क दूरी' : 'Road Distance'}</span>
        </div>
        <div class="route-stat-box">
          <span class="route-stat-icon">⏱️</span>
          <span class="route-stat-val">${routeData.hours}</span>
          <span class="route-stat-lbl">${isHi ? 'कार / टैक्सी समय' : 'Drive Time'}</span>
        </div>
        <div class="route-stat-box">
          <span class="route-stat-icon">🛤️</span>
          <span class="route-stat-val">${dest.highway}</span>
          <span class="route-stat-lbl">${isHi ? 'मुख्य हाईवे मार्ग' : 'Highway Route'}</span>
        </div>
        <div class="route-stat-box">
          <span class="route-stat-icon">🚉</span>
          <span class="route-stat-val">${isHi ? dest.nearest_station_hi : dest.nearest_station}</span>
          <span class="route-stat-lbl">${isHi ? 'निकटतम रेलवे स्टेशन' : 'Nearest Station'}</span>
        </div>
      </div>

      <div class="route-rail-tip">
        <span style="font-size: 1.1rem;">🚆</span>
        <div>
          <strong>${isHi ? 'रेल व पब्लिक ट्रांसपोर्ट सुझाव:' : 'Train & Transit Tip:'}</strong>
          <span>${routeData.train}</span>
        </div>
      </div>

      <div class="route-actions-row">
        <a href="${gmapsUrl}" target="_blank" rel="noopener" class="btn btn-primary btn-sm">
          🧭 ${isHi ? 'गूगल मैप्स में लाइव नेविगेशन खोलें' : 'Open Live GPS Navigation on Google Maps'}
        </a>
        <button class="btn btn-outline btn-sm" onclick="copyRouteSummary('${origin.name}', '${dest.name}', '${routeData.km} km', '${routeData.hours}')">
          📋 ${isHi ? 'रूट विवरण कॉपी करें' : 'Copy Route Details'}
        </button>
      </div>
    </div>
  `;
}

function copyRouteSummary(orig, dest, km, hrs) {
  const text = `Discover Bihar Route: From ${orig} to ${dest} | Distance: ${km} | Travel Time: ~${hrs}`;
  if (navigator.clipboard) {
    navigator.clipboard.writeText(text).then(() => {
      if (typeof showToast === 'function') showToast(typeof currentLanguage !== 'undefined' && currentLanguage === 'hi' ? 'रूट विवरण क्लिपबोर्ड में कॉपी हो गया!' : 'Route details copied to clipboard!');
    });
  } else {
    prompt('Route details:', text);
  }
}

// ==========================================================
// CONTROLLER: "FIND YOUR VIBE" TRIP MATCHER WIZARD
// ==========================================================
let tripMatcherState = {
  step: 1,
  companion: "friends",
  interest: "history",
  duration: "circuit"
};

function initTripMatcher() {
  renderTripMatcher();
}

function setMatcherChoice(field, val) {
  tripMatcherState[field] = val;
  if (tripMatcherState.step < 3) {
    tripMatcherState.step++;
  } else {
    tripMatcherState.step = 4; // Show Results
  }
  renderTripMatcher();
}

function resetMatcher() {
  tripMatcherState = { step: 1, companion: "friends", interest: "history", duration: "circuit" };
  renderTripMatcher();
}

function renderTripMatcher() {
  const container = document.getElementById('trip-matcher-container');
  if (!container) return;

  const isHi = typeof currentLanguage !== 'undefined' && currentLanguage === 'hi';
  const cfg = TRIP_MATCHER_CONFIG;

  if (tripMatcherState.step === 1) {
    container.innerHTML = `
      <div class="matcher-card">
        <div class="matcher-step-badge">${isHi ? 'चरण 1 / 3' : 'Step 1 of 3'} • ${isHi ? 'यात्री साथी' : 'Travel Companion'}</div>
        <h3 class="matcher-question">${isHi ? 'आप किसके साथ यात्रा करने की योजना बना रहे हैं?' : 'Who are you traveling with?'}</h3>
        <p class="matcher-subtitle">${isHi ? 'अपनी यात्रा शैली चुनें ताकि हम सबसे उपयुक्त अनुभव तैयार कर सकें' : 'Select your travel style to curate tailored safety & pace'}</p>
        
        <div class="matcher-options-grid">
          ${cfg.companions.map(c => `
            <button class="matcher-choice-btn ${tripMatcherState.companion === c.id ? 'active' : ''}" onclick="setMatcherChoice('companion', '${c.id}')">
              <span class="choice-icon">${c.icon}</span>
              <span class="choice-label">${isHi ? c.label_hi : c.label}</span>
            </button>
          `).join('')}
        </div>
      </div>
    `;
  } else if (tripMatcherState.step === 2) {
    container.innerHTML = `
      <div class="matcher-card">
        <div class="matcher-step-badge">${isHi ? 'चरण 2 / 3' : 'Step 2 of 3'} • ${isHi ? 'प्रमुख रुचि' : 'Primary Passion'}</div>
        <h3 class="matcher-question">${isHi ? 'आपको सबसे ज्यादा क्या आकर्षित करता है?' : 'What excites you the most?'}</h3>
        <p class="matcher-subtitle">${isHi ? 'प्राचीन इतिहास, आत्मशांति, रोमांचक वन्यजीव या समृद्ध कला व भोजन?' : 'World-heritage empires, spiritual solace, waterfalls, or living art & food?'}</p>
        
        <div class="matcher-options-grid">
          ${cfg.interests.map(i => `
            <button class="matcher-choice-btn ${tripMatcherState.interest === i.id ? 'active' : ''}" onclick="setMatcherChoice('interest', '${i.id}')">
              <span class="choice-icon">${i.icon}</span>
              <span class="choice-label">${isHi ? i.label_hi : i.label}</span>
            </button>
          `).join('')}
        </div>
        <div style="margin-top: 1rem; text-align: left;">
          <button class="btn btn-outline btn-sm" onclick="tripMatcherState.step = 1; renderTripMatcher();">← ${isHi ? 'पीछे जाएं' : 'Back'}</button>
        </div>
      </div>
    `;
  } else if (tripMatcherState.step === 3) {
    container.innerHTML = `
      <div class="matcher-card">
        <div class="matcher-step-badge">${isHi ? 'चरण 3 / 3' : 'Step 3 of 3'} • ${isHi ? 'यात्रा अवधि' : 'Available Days'}</div>
        <h3 class="matcher-question">${isHi ? 'आपके पास कितने दिनों का समय है?' : 'How many days do you have for this trip?'}</h3>
        <p class="matcher-subtitle">${isHi ? 'हम आपके समय का सर्वोत्तम उपयोग करने के लिए सटीक रूट तैयार करेंगे' : 'We will balance travel distances and sightseeing smoothly'}</p>
        
        <div class="matcher-options-grid">
          ${cfg.durations.map(d => `
            <button class="matcher-choice-btn ${tripMatcherState.duration === d.id ? 'active' : ''}" onclick="setMatcherChoice('duration', '${d.id}')">
              <span class="choice-icon">⏱️</span>
              <span class="choice-label">${isHi ? d.label_hi : d.label}</span>
            </button>
          `).join('')}
        </div>
        <div style="margin-top: 1rem; text-align: left;">
          <button class="btn btn-outline btn-sm" onclick="tripMatcherState.step = 2; renderTripMatcher();">← ${isHi ? 'पीछे जाएं' : 'Back'}</button>
        </div>
      </div>
    `;
  } else {
    // Result Card
    const outcome = cfg.outcomes[tripMatcherState.interest] || cfg.outcomes["history"];
    const companionObj = cfg.companions.find(c => c.id === tripMatcherState.companion);
    const durationObj = cfg.durations.find(d => d.id === tripMatcherState.duration);

    container.innerHTML = `
      <div class="matcher-result-card">
        <div class="result-badge-row">
          <span class="badge badge-verified">✨ 100% Ideal Match Found!</span>
          <span class="badge badge-category">${isHi ? outcome.badge_hi : outcome.badge}</span>
          <span class="badge badge-rating">${companionObj.icon} ${isHi ? companionObj.label_hi : companionObj.label} • ⏱ ${durationObj.days} Days</span>
        </div>

        <h3 class="result-title">${isHi ? outcome.title_hi : outcome.title}</h3>
        <p class="result-desc">${isHi ? outcome.description_hi : outcome.description}</p>

        <div class="result-highlights-grid">
          <div class="res-box">
            <span class="res-icon">💰</span>
            <div>
              <small>${isHi ? 'अनुमानित बजट' : 'Estimated Budget'}</small>
              <strong>${isHi ? outcome.budget_est_hi : outcome.budget_est}</strong>
            </div>
          </div>
          <div class="res-box">
            <span class="res-icon">☀️</span>
            <div>
              <small>${isHi ? 'सर्वोत्तम मौसम' : 'Best Travel Season'}</small>
              <strong>${isHi ? outcome.best_time_hi : outcome.best_time}</strong>
            </div>
          </div>
          <div class="res-box">
            <span class="res-icon">📍</span>
            <div>
              <small>${isHi ? 'प्रमुख आकर्षण' : 'Key Spots Included'}</small>
              <strong>${outcome.spots_count}+ ${isHi ? 'सत्यापित स्थल' : 'Verified Sites'}</strong>
            </div>
          </div>
        </div>

        <div class="result-actions-row">
          <button class="btn btn-primary" onclick="loadMatchedCircuitToPlanner('${outcome.circuit_key}', ${durationObj.days})">
            🗺️ ${isHi ? 'इस प्लान को ट्रिप प्लानर में लोड करें' : 'Load Plan into Interactive Trip Planner'} →
          </button>
          <button class="btn btn-outline" onclick="shareVibeOnWhatsApp('${outcome.title}', '${outcome.budget_est}')">
            📲 ${isHi ? 'व्हाट्सएप पर शेयर करें' : 'Share on WhatsApp'}
          </button>
          <button class="btn btn-sm btn-outline" onclick="resetMatcher()">
            🔄 ${isHi ? 'दोबारा क्विज़ खेलें' : 'Retake Quiz'}
          </button>
        </div>
      </div>
    `;
  }
}

function loadMatchedCircuitToPlanner(circuitKey, days) {
  if (typeof switchTab === 'function') {
    switchTab('planner');
  }
  if (typeof loadPresetCircuit === 'function') {
    loadPresetCircuit(circuitKey);
  }
  if (typeof setTripDuration === 'function') {
    setTripDuration(days);
  }
  if (typeof showToast === 'function') {
    const isHi = typeof currentLanguage !== 'undefined' && currentLanguage === 'hi';
    showToast(isHi ? 'आपकी अनुकूलित यात्रा ट्रिप प्लानर में लोड हो गई है!' : 'Your tailored circuit has been loaded into Trip Planner!');
  }
}

function shareVibeOnWhatsApp(title, budget) {
  const text = `🌟 Discover Local Bihar: Checked out the "${title}" itinerary! Est Budget: ${budget}. Explore all 38 districts & plan your authentic tour at: https://explore-in-bihar.vercel.app/`;
  const url = `https://api.whatsapp.com/send?text=${encodeURIComponent(text)}`;
  window.open(url, '_blank');
}

// ==========================================================
// CONTROLLER: LIVE TOURISM WEATHER & SEASONALITY STRIP
// ==========================================================
let activeWeatherHubId = "patna";

function initWeatherWidget() {
  renderWeatherHubsStrip();
  fetchLiveWeather(activeWeatherHubId);
}

function selectWeatherHub(hubId) {
  activeWeatherHubId = hubId;
  renderWeatherHubsStrip();
  fetchLiveWeather(hubId);
}

function renderWeatherHubsStrip() {
  const container = document.getElementById('weather-hub-pills');
  if (!container) return;

  const isHi = typeof currentLanguage !== 'undefined' && currentLanguage === 'hi';
  let html = '';
  BIHAR_WEATHER_HUBS.forEach(hub => {
    const isActive = hub.id === activeWeatherHubId ? 'active' : '';
    html += `
      <button class="weather-pill-btn ${isActive}" onclick="selectWeatherHub('${hub.id}')">
        <span>📍</span> ${isHi ? hub.name_hi : hub.name}
      </button>
    `;
  });
  container.innerHTML = html;
}

function fetchLiveWeather(hubId) {
  const hub = BIHAR_WEATHER_HUBS.find(h => h.id === hubId) || BIHAR_WEATHER_HUBS[0];
  const displayCard = document.getElementById('weather-card-display');
  if (!displayCard) return;

  const isHi = typeof currentLanguage !== 'undefined' && currentLanguage === 'hi';

  // Render initial fallback state instantly (zero latency)
  renderWeatherCardContent(hub, hub.fallback.temp, hub.fallback.humidity, hub.fallback.icon, isHi ? hub.fallback.condition_hi : hub.fallback.condition, isHi);

  // Asynchronously query Open-Meteo (100% Free, Zero API Key, CORS-enabled)
  const apiUrl = `https://api.open-meteo.com/v1/forecast?latitude=${hub.lat}&longitude=${hub.lng}&current=temperature_2m,relative_humidity_2m,weather_code&timezone=Asia%2FKolkata`;

  fetch(apiUrl)
    .then(res => res.json())
    .then(data => {
      if (data && data.current) {
        const liveTemp = Math.round(data.current.temperature_2m);
        const liveHumidity = data.current.relative_humidity_2m;
        const code = data.current.weather_code;
        const weatherInfo = mapWmoWeatherCode(code, isHi);
        renderWeatherCardContent(hub, liveTemp, liveHumidity, weatherInfo.icon, weatherInfo.text, isHi);
      }
    })
    .catch(() => {
      // Silently keep fallback state on network dropouts
    });
}

function renderWeatherCardContent(hub, temp, humidity, icon, conditionText, isHi) {
  const displayCard = document.getElementById('weather-card-display');
  if (!displayCard) return;

  displayCard.innerHTML = `
    <div class="weather-live-box">
      <div class="weather-main-metric">
        <span class="weather-emoji">${icon}</span>
        <div class="temp-wrap">
          <span class="temp-degree">${temp}°C</span>
          <span class="temp-condition">${conditionText}</span>
        </div>
      </div>
      <div class="weather-details-col">
        <div class="weather-hub-title">${isHi ? hub.name_hi : hub.name} • <span style="font-weight:400; font-size:0.85rem;">${isHi ? hub.zone_hi : hub.zone}</span></div>
        <div class="weather-metrics-meta">
          <span>💧 ${isHi ? 'आर्द्रता:' : 'Humidity:'} ${humidity}%</span>
          <span>🌤️ ${isHi ? 'सर्वोत्तम भ्रमण समय:' : 'Best Season:'} <strong>${isHi ? hub.best_season_hi : hub.best_season}</strong></span>
        </div>
      </div>
      <div class="weather-season-tag">
        <span class="season-pill">✨ ${isHi ? 'घूमने के लिए अनुकूल' : 'Pleasant Weather'}</span>
      </div>
    </div>
  `;
}

function mapWmoWeatherCode(code, isHi) {
  if (code === 0) return { icon: "☀️", text: isHi ? "स्वच्छ आकाश व खिली धूप" : "Clear Sunny Skies" };
  if (code >= 1 && code <= 3) return { icon: "🌤️", text: isHi ? "आंशिक बादल व सुहावना" : "Partly Cloudy & Pleasant" };
  if (code >= 45 && code <= 48) return { icon: "🌫️", text: isHi ? "हल्का कोहरा / धुंध" : "Light Morning Mist" };
  if (code >= 51 && code <= 67) return { icon: "🌦️", text: isHi ? "हल्की बूंदाबांदी" : "Gentle Showers" };
  if (code >= 80 && code <= 99) return { icon: "⛈️", text: isHi ? "वर्षा व फुहारें" : "Monsoon Showers" };
  return { icon: "☀️", text: isHi ? "सुखद व दर्शनीय" : "Pleasant Sightseeing" };
}

// Global Exports
window.initDistanceCalculator = initDistanceCalculator;
window.calculateAndRenderRoute = calculateAndRenderRoute;
window.initTripMatcher = initTripMatcher;
window.setMatcherChoice = setMatcherChoice;
window.resetMatcher = resetMatcher;
window.initWeatherWidget = initWeatherWidget;
window.selectWeatherHub = selectWeatherHub;

