// Discover Local Bihar - Comprehensive Destination Dataset
// Authentic verified destinations across all categories

const DESTINATION_CATEGORIES = [
  { id: "all", name: "All Categories", name_hi: "सभी श्रेणियां", icon: "compass" },
  { id: "historical", name: "Historical Monuments", name_hi: "ऐतिहासिक स्मारक", icon: "landmark" },
  { id: "religious", name: "Religious & Spiritual", name_hi: "धार्मिक व आध्यात्मिक", icon: "temple" },
  { id: "nature", name: "Nature & Wildlife", name_hi: "प्रकृति एवं वन्यजीव", icon: "trees" },
  { id: "adventure", name: "Adventure & Outdoors", name_hi: "रोमांच और ट्रैकिंग", icon: "mountain" },
  { id: "cultural", name: "Cultural & Heritage", name_hi: "संस्कृति और विरासत", icon: "palette" },
  { id: "museums", name: "Museums & Education", name_hi: "संग्रहालय व ज्ञान केंद्र", icon: "book-open" },
  { id: "waterfalls", name: "Lakes & Waterfalls", name_hi: "झीलें व जलप्रपात", icon: "droplets" },
  { id: "handicrafts", name: "Markets & Crafts", name_hi: "हस्तशिल्प व बाजार", icon: "shopping-bag" }
];

const BIHAR_DESTINATIONS = [
  // 1. Nalanda Archaeological Ruins
  {
    id: "nalanda-ruins",
    name: "Ruins of Nalanda Mahavihara",
    name_hi: "नालंदा महाविहार के खंडहर",
    district_id: "nalanda",
    district_name: "Nalanda",
    district_name_hi: "नालंदा",
    category_slug: "historical",
    category: "Historical Monuments",
    category_hi: "ऐतिहासिक स्मारक",
    featured: true,
    rating: 4.8,
    reviews_count: 8420,
    image: "images/nalanda.jpg",
    gallery: [
      "images/nalanda.jpg",
      "images/nalanda.jpg"
    ],
    overview: "A UNESCO World Heritage site, Nalanda Mahavihara was the world's first great residential university, flourishing from the 5th to the 12th century CE. It attracted over 10,000 students and 2,000 teachers from across Asia including China, Korea, Japan, Tibet, and Persia.",
    overview_hi: "यूनेस्को विश्व धरोहर स्थल, नालंदा महाविहार विश्व का पहला महान आवासीय विश्वविद्यालय था, जो 5वीं से 12वीं शताब्दी ईस्वी तक ज्ञान का वैश्विक केंद्र रहा। यहाँ चीन, कोरिया, जापान, तिब्बत और फारस सहित पूरे एशिया से 10,000 से अधिक छात्र अध्ययन करते थे।",
    historical_significance: "Founded during the Gupta Empire (Kumaragupta I) and patronized by Emperor Harshavardhana and the Pala kings. Visited extensively by Chinese pilgrim Xuanzang (Hiuen Tsang). Destroyed in late 12th century.",
    historical_significance_hi: "गुप्त साम्राज्य के काल में स्थापित; चीनी यात्री ह्वेनसांग ने यहाँ वर्षों रहकर बौद्ध ग्रंथों का अध्ययन किया। 12वीं सदी में इसके विशाल पुस्तकालय 'धर्मगंज' को नष्ट कर दिया गया था।",
    coordinates: { lat: 25.1357, lng: 85.4447 },
    google_maps_url: "https://maps.google.com/?q=25.1357,85.4447",
    visiting_duration: "2.5 - 3 Hours",
    visiting_duration_hi: "2.5 - 3 घंटे",
    opening_hours: "09:00 AM - 05:00 PM (Daily)",
    opening_hours_hi: "सुबह 09:00 से शाम 05:00 बजे तक (प्रतिदिन)",
    entry_fee: "₹50 for Indian & SAARC citizens, ₹500 for Foreign tourists, Free for children under 15",
    entry_fee_hi: "भारतीय व सार्क नागरिकों के लिए ₹50, विदेशी पर्यटकों के लिए ₹500, 15 वर्ष से कम आयु के बच्चों के लिए निःशुल्क",
    entry_type: "Paid",
    family_friendly: true,
    accessibility: {
      wheelchair: true,
      notes: "Paved ramps available across key excavation zones and archaeological museum.",
      notes_hi: "मुख्य खुदाई स्थलों और पुरातत्व संग्रहालय में रैंप की सुविधा उपलब्ध है।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-18",
      source: "Archaeological Survey of India (ASI) & BSTDC"
    },
    travel_tips: [
      "Hire an ASI authorized government guide near the ticket counter for deep historical context.",
      "Visit the adjacent Nalanda Archaeological Museum for exquisite sculptures.",
      "Wear comfortable walking shoes as the excavation complex covers over 14 hectares."
    ],
    travel_tips_hi: [
      "गहन ऐतिहासिक जानकारी के लिए टिकट काउंटर के पास अधिकृत एएसआई गाइड लें।",
      "पास ही स्थित नालंदा पुरातत्व संग्रहालय में प्राचीन मूर्तियों को अवश्य देखें।",
      "परिसर 14 हेक्टेयर में फैला है, इसलिए आरामदायक जूते पहनकर जाएं।"
    ],
    nearby_attractions: ["Hiuen Tsang Memorial Hall", "Kundalpur Jain Temple", "Silao (famous for Khaja)", "Rajgir (15 km)"],
    best_season: "October to March",
    best_season_hi: "अक्टूबर से मार्च"
  },

  // 2. Mahabodhi Temple Bodh Gaya
  {
    id: "mahabodhi-temple",
    name: "Mahabodhi Temple Complex",
    name_hi: "महाबोधि मंदिर परिसर",
    district_id: "gaya",
    district_name: "Gaya",
    district_name_hi: "गया",
    category_slug: "religious",
    category: "Religious & Spiritual",
    category_hi: "धार्मिक व आध्यात्मिक",
    featured: true,
    rating: 4.9,
    reviews_count: 14200,
    image: "images/mahabodhi.jpg",
    gallery: [
      "images/mahabodhi.jpg",
      "https://upload.wikimedia.org/wikipedia/commons/thumb/6/6b/Mahabodhi_temple_front_view.jpg/800px-Mahabodhi_temple_front_view.jpg"
    ],
    overview: "A UNESCO World Heritage site of supreme spiritual significance, this is the exact holy ground where Prince Siddhartha Gautama attained Enlightenment (Bodhi) under the sacred Bodhi Tree around 531 BCE, becoming the Supreme Buddha.",
    overview_hi: "परम पावन यूनेस्को विश्व धरोहर स्थल, यह वह पवित्र भूमि है जहाँ लगभग 531 ईसा पूर्व में राजकुमार सिद्धार्थ गौतम ने पवित्र बोधि वृक्ष के नीचे तपस्या कर बुद्धत्व (ज्ञान) प्राप्त किया था।",
    historical_significance: "First built by Emperor Ashoka in the 3rd century BCE, the current 55-meter grand pyramidal temple dates to the Gupta and Pala periods. Contains the holy Vajrasana (Diamond Throne).",
    historical_significance_hi: "ईसा पूर्व तीसरी सदी में सम्राट अशोक द्वारा निर्मित; वर्तमान 55 मीटर ऊंचा भव्य मंदिर गुप्त और पाल काल का है। यहाँ पवित्र वज्रासन स्थित है।",
    coordinates: { lat: 24.6959, lng: 84.9913 },
    google_maps_url: "https://maps.google.com/?q=24.6959,84.9913",
    visiting_duration: "2 - 4 Hours",
    visiting_duration_hi: "2 - 4 घंटे",
    opening_hours: "05:00 AM - 09:00 PM (Daily)",
    opening_hours_hi: "सुबह 05:00 से रात 09:00 बजे तक (प्रतिदिन)",
    entry_fee: "Free Entry (Nominal fee for cameras & smart video equipment)",
    entry_fee_hi: "निःशुल्क प्रवेश (कैमरा और वीडियो उपकरण के लिए सामान्य शुल्क)",
    entry_type: "Free",
    family_friendly: true,
    accessibility: {
      wheelchair: true,
      notes: "Wheelchair accessible paths around the inner sanctum and Bodhi tree courtyard.",
      notes_hi: "मुख्य गर्भगृह और बोधि वृक्ष के चारों ओर व्हीलचेयर अनुकूल मार्ग उपलब्ध है।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-20",
      source: "Bodhgaya Temple Management Committee (BTMC) & UNESCO"
    },
    travel_tips: [
      "Early morning (5:30 AM) and evening chanting hours (6:00 PM) offer a transcendent meditative experience.",
      "Electronic phones and smart devices must be deposited in safe lockers at the entrance.",
      "Explore the 80-foot Great Buddha statue and international monasteries (Thai, Bhutanese, Tibetan, Japanese) nearby."
    ],
    travel_tips_hi: [
      "सुबह 5:30 बजे और शाम 6:00 बजे की प्रार्थना के समय का अनुभव अत्यंत शांत और आध्यात्मिक होता है।",
      "मोबाइल फोन और गैजेट्स प्रवेश द्वार पर बने निःशुल्क लॉकर में जमा कराने होते हैं।",
      "पास में स्थित 80 फीट ऊंची विशाल बुद्ध प्रतिमा और विभिन्न देशों के बौद्ध मठों का भी भ्रमण करें।"
    ],
    nearby_attractions: ["80 Ft Great Buddha Statue", "Dungeshwari Caves", "Muchalinda Lake", "Metta Buddharam Temple", "Vishnupad Temple Gaya (12 km)"],
    best_season: "October to March (Buddha Jayanti in May)",
    best_season_hi: "अक्टूबर से मार्च (मई में बुद्ध पूर्णिमा)"
  },

  // 3. Rajgir Glass Bridge & Nature Safari
  {
    id: "rajgir-glass-bridge",
    name: "Rajgir Glass Bridge & Nature Safari",
    name_hi: "राजगीर ग्लास ब्रिज एवं नेचर सफारी",
    district_id: "nalanda",
    district_name: "Nalanda",
    district_name_hi: "नालंदा",
    category_slug: "adventure",
    category: "Adventure & Outdoors",
    category_hi: "रोमांच और ट्रैकिंग",
    featured: true,
    rating: 4.7,
    reviews_count: 5120,
    image: "images/rajgir.jpg",
    gallery: [
      "images/rajgir.jpg",
      "images/rajgir.jpg"
    ],
    overview: "Suspended 250 feet above a picturesque canyon in the lush green Giri hills of Rajgir, this 85-foot-long crystal-clear glass bridge is Bihar's iconic modern eco-adventure attraction. The complex also features zip-lining, archery, wall climbing, and an open Zoo Safari.",
    overview_hi: "राजगीर की हरी-भरी गिरी पहाड़ियों के बीच 250 फीट की ऊंचाई पर बना 85 फीट लंबा यह पारदर्शी ग्लास स्काईवॉक बिहार का प्रमुख रोमांचक आकर्षण है। यहाँ जिप-लाइन, तीरंदाजी, रॉक क्लाइंबिंग और आधुनिक जू सफारी भी स्थित है।",
    historical_significance: "Rajgir (ancient Rajagriha) was the capital of the mighty Magadhan empire. Today it blends ancient heritage with eco-tourism.",
    historical_significance_hi: "प्राचीन मगध की पहली राजधानी राजगृह के ऐतिहासिक परिवेश में विकसित आधुनिक पर्यावरण पर्यटन केंद्र।",
    coordinates: { lat: 25.0135, lng: 85.4215 },
    google_maps_url: "https://maps.google.com/?q=25.0135,85.4215",
    visiting_duration: "3 - 5 Hours",
    visiting_duration_hi: "3 - 5 घंटे",
    opening_hours: "09:00 AM - 05:00 PM (Closed Mondays)",
    opening_hours_hi: "सुबह 09:00 से शाम 05:00 बजे तक (सोमवार को बंद)",
    entry_fee: "₹50 Base Safari Entry; ₹125 for Glass Bridge; Zoo Safari bus ticket extra",
    entry_fee_hi: "नेचर सफारी प्रवेश शुल्क ₹50; ग्लास ब्रिज ₹125; जू सफारी टिकट अलग से",
    entry_type: "Paid",
    family_friendly: true,
    accessibility: {
      wheelchair: false,
      notes: "Battery-operated eco-carts assist seniors to the entry point; walking/steps required on the skywalk.",
      notes_hi: "प्रवेश द्वार तक बैटरी चालित वाहन उपलब्ध हैं; स्काईवॉक पर चलने के लिए सीढ़ियां हैं।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-12",
      source: "Bihar State Forest & Tourism Department"
    },
    travel_tips: [
      "Book tickets online through the official portal in advance as on-spot daily visitor slots are strictly capped.",
      "Pair with the Rajgir Aerial Ropeway to Vishwa Shanti Stupa atop Ratnagiri hill.",
      "Wear comfortable sports footwear for adventure activities."
    ],
    travel_tips_hi: [
      "आधिकारिक पोर्टल पर टिकट पहले से बुक कर लें क्योंकि दैनिक पर्यटकों की संख्या सीमित होती है।",
      "रत्नागिरी पहाड़ी पर स्थित विश्व शांति स्तूप के लिए राजगीर रोपवे की यात्रा भी साथ जोड़ें।",
      "रोमांचक गतिविधियों के लिए आरामदायक स्पोर्ट्स जूते पहनें।"
    ],
    nearby_attractions: ["Vishwa Shanti Stupa & Ropeway", "Venu Vana", "Bimbisara Jail Ruins", "Hot Water Springs (Brahma Kund)"],
    best_season: "October to March",
    best_season_hi: "अक्टूबर से मार्च"
  },

        // 4. Bihar Museum, Patna (Asia's Premier & Largest World-Class Museum)
  {
    id: "bihar-museum",
    name: "Bihar Museum (Asia's #1 World-Class Museum)",
    name_hi: "बिहार संग्रहालय, पटना (एशिया का नंबर-1 विश्वस्तरीय संग्रहालय)",
    name_local: "बिहार संग्रहालय, पटना (एशिया केर नंबर-1 भव्य संग्रहालय)",
    district_id: "patna",
    district_name: "Patna",
    district_name_hi: "पटना",
    category_slug: "museums",
    category: "Museums & Education",
    category_hi: "संग्रहालय व ज्ञान केंद्र",
    featured: true,
    rating: 4.9,
    reviews_count: 12500,
    image: "images/biharmuseum.jpg",
    gallery: [
      "images/biharmuseum.jpg",
      "images/patnamuseum.jpg"
    ],
    overview: "Spanning 13.5 acres on Bailey Road with an investment of ₹530+ crores, Bihar Museum is recognized as Asia's #1 world-class experiential museum and South Asia's largest cultural institution. Designed by Pritzker Prize-winning Japanese architect Fumihiko Maki and Opolis Architects, it won the prestigious international Leading Culture Destinations Award ('Oscars for Museums'). It houses the iconic 2,300-year-old Didarganj Yakshi, ancient Kurkihar bronzes, and 3,000+ years of civilizational treasures across state-of-the-art interactive galleries.",
    overview_hi: "बेली रोड पर 13.5 एकड़ में 530 करोड़ रुपये से अधिक की लागत से निर्मित बिहार संग्रहालय को एशिया का नंबर-1 विश्वस्तरीय अनुभवात्मक संग्रहालय और दक्षिण एशिया का सबसे बड़ा सांस्कृतिक केंद्र माना जाता है। प्रित्ज़कर पुरस्कार विजेता जापानी वास्तुकार फुमिहिको माकी द्वारा डिज़ाइन किए गए इस संग्रहालय ने अंतरराष्ट्रीय 'लीडिंग कल्चर डेस्टिनेशंस अवार्ड' (संग्रहालयों का ऑस्कर) जीता है। यहाँ 2,300 वर्ष पुरानी विश्वप्रसिद्ध दीदारगंज यक्षी और 3,000 वर्षों की ऐतिहासिक विरासत प्रदर्शित है।",
    historical_significance: "Houses world-renowned ancient antiquities including the Didarganj Yakshi (3rd century BCE polished Mauryan masterpiece), Kurkihar bronze idols, and historical artifacts from Magadha and Mithila.",
    historical_significance_hi: "विश्वप्रसिद्ध दीदारगंज यक्षी (तीसरी सदी ई.पू. की अद्भुत मौर्यकालीन मूर्ति), प्राचीन कांस्य प्रतिमाएं और मिथिला-मगध की अद्वितीय पुरातात्विक संपदा यहाँ संरक्षित है।",
    what_is_special: "Asia's #1 premier world-class museum spanning 13.5 acres, home to the priceless 3rd-century BCE polished Mauryan Didarganj Yakshi sculpture, Kurkihar bronzes, and high-tech immersive history galleries.",
    what_is_special_hi: "एशिया का नंबर-1 विश्वस्तरीय आधुनिक संग्रहालय जो 13.5 एकड़ में फैला है; यहाँ 2300 वर्ष पुरानी मौर्यकालीन दीदारगंज यक्षी की अद्भुत चमकती प्रतिमा, कुरकिहार कांस्य मूर्तियां और अत्याधुनिक डिजिटल दीर्घाएं हैं।",
    what_is_special_local: "एशिया केर नंबर-1 विश्वस्तरीय संग्रहालय जे 13.5 एकड़ में पसरल अछि; एतय विश्वप्रसिद्ध 2300 बरिस पुरान मौर्यकालीन दीदारगंज यक्षी केर प्रतिमा आ अत्याधुनिक दीर्घा अछि।",
    why_visit: "To witness Asia's most award-winning, state-of-the-art museum, explore ancient Magadhan civilizational masterworks, and walk through the historic subterranean heritage tunnel.",
    why_visit_hi: "एशिया के सबसे भव्य और पुरस्कार-विजेता अत्याधुनिक संग्रहालय को देखने, प्राचीन मगध की ऐतिहासिक धरोहरों का सजीव अनुभव करने और 1.5 किमी लंबी भूमिगत हेरिटेज टनल का अनुभव लेने के लिए।",
    why_visit_local: "एशिया केर सबसँ भव्य आ आधुनिक संग्रहालय देखय लेल, प्राचीन भारतक गौरवशाली इतिहासक प्रत्यक्ष साक्षात्कार करय लेल।",
    local_food: "Potbelly Cafe Bihari Delicacies (Litti Chokha, Champaran Meat, Makhana Kheer), Patna Khaja",
    local_food_hi: "पॉटबेली कैफे के बिहारी व्यंजन (लिट्टी चोखा, चंपारण हांडी मीट, मखाना खीर), पटना का खाजा",
    local_food_local: "पॉटबेली कैफे केर पारंपरिक बिहारी स्वाद, लिट्टी चोखा आ मखान खीर",
    coordinates: { lat: 25.6095, lng: 85.1165 },
    google_maps_url: "https://maps.google.com/?q=25.6095,85.1165",
    visiting_duration: "3 - 4 Hours",
    visiting_duration_hi: "3 - 4 घंटे",
    opening_hours: "10:00 AM - 05:00 PM (Closed Mondays)",
    opening_hours_hi: "सुबह 10:00 से शाम 05:00 बजे तक (सोमवार को बंद)",
    entry_fee: "₹100 for Indian adults, ₹50 for children/students, ₹500 for Foreigners",
    entry_fee_hi: "भारतीय वयस्कों के लिए ₹100, बच्चों/विद्यार्थियों के लिए ₹50, विदेशी पर्यटकों के लिए ₹500",
    entry_type: "Paid",
    family_friendly: true,
    accessibility: {
      wheelchair: true,
      notes: "Fully barrier-free design with elevators, accessible restrooms, audio guides, and wheelchair loans.",
      notes_hi: "पूरी तरह व्हीलचेयर अनुकूल, लिफ्ट, सुलभ प्रसाधन, ऑडियो गाइड और व्हीलचेयर सुविधा उपलब्ध।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-22",
      source: "Department of Arts, Culture & Youth, Govt. of Bihar"
    },
    travel_tips: [
      "Do not miss the dedicated Children's Discovery Gallery and the Mauryan sculpture hall.",
      "Audio guides in Hindi, English, and multiple languages are available at the reception.",
      "Enjoy authentic regional Bihari cuisine at 'The Potbelly' cafe inside the museum garden."
    ],
    travel_tips_hi: [
      "बच्चों की विशेष डिस्कवरी गैलरी और मौर्य मूर्तिकला दीर्घा को बिल्कुल न छोड़ें।",
      "रिसेप्शन पर हिंदी और अंग्रेजी में ऑडियो गाइड उपलब्ध है।",
      "संग्रहालय परिसर के कैफे 'द पॉटबेली' में पारंपरिक बिहारी व्यंजनों का आनंद लें।"
    ],
    nearby_attractions: ["Patna Museum (Historic Jadu Ghar)", "Golghar", "Patna Planetarium", "Eco Park", "Ganga Marine Drive"],
    best_season: "All Year Round",
    best_season_hi: "वर्ष भर अनुकूल"
  },

  // 4B. Patna Museum (Historic Jadu Ghar, Estd 1917)
  {
    id: "patna-museum",
    name: "Patna Museum (Historic Jadu Ghar)",
    name_hi: "पटना संग्रहालय (ऐतिहासिक जादू घर)",
    name_local: "पटना संग्रहालय (ऐतिहासिक जादू घर)",
    district_id: "patna",
    district_name: "Patna",
    district_name_hi: "पटना",
    category_slug: "museums",
    category: "Museums & Education",
    category_hi: "संग्रहालय व ज्ञान केंद्र",
    featured: true,
    rating: 4.8,
    reviews_count: 8900,
    image: "images/patnamuseum.jpg",
    gallery: [
      "images/patnamuseum.jpg",
      "images/biharmuseum.jpg"
    ],
    overview: "Established in 1917 during the British Raj, Patna Museum (popularly known as Jadu Ghar) is one of the oldest, richest, and most prestigious museums in Asia. Built in majestic Indo-Saracenic (Mughal-Rajput) architecture on Buddha Marg, it famously safeguards the sacred 5th-century BCE casket containing the holy bone relics of Lord Gautama Buddha (unearthed from Vaishali), a 200-million-year-old fossilized tree trunk (53 feet long), and Rahul Sankrityayan's priceless collection of ancient Tibetan Thangka paintings.",
    overview_hi: "1917 में स्थापित पटना संग्रहालय (लोकप्रिय नाम 'जादू घर') एशिया के सबसे पुराने, समृद्ध और प्रतिष्ठित संग्रहालयों में गिना जाता है। बुद्ध मार्ग पर भव्य इंडो-सारसेनिक (मुगल-राजपूत) स्थापत्य में निर्मित इस संग्रहालय में भगवान गौतम बुद्ध के पावन अस्थि अवशेषों की पवित्र मंजूषा (वैशाली स्तूप से प्राप्त), 20 करोड़ वर्ष पुराना 53 फीट लंबा जीवाश्मीकृत वृक्ष और महापंडित राहुल सांकृत्यायन द्वारा तिब्बत से लाई गई अमूल्य थंका पेंटिंग्स सुरक्षित हैं।",
    historical_significance: "Founded by the British to house antiquities found across Bihar; possesses one of the world's only verified Buddha relic caskets from Vaishali.",
    historical_significance_hi: "ब्रिटिश काल में स्थापित ऐतिहासिक संस्थान; यहाँ वैशाली से प्राप्त भगवान बुद्ध की पवित्र अस्थि मंजूषा संरक्षित है।",
    what_is_special: "Houses the supreme sacred bone relics of Lord Buddha in a special gold-plated sanctum, along with a 200-million-year-old fossil tree and over 50,000 ancient artifacts.",
    what_is_special_hi: "भगवान बुद्ध के पवित्र पावन अस्थि अवशेष, 20 करोड़ वर्ष पुराना जीवाश्म वृक्ष और 50,000 से अधिक दुर्लभ पुरातात्विक व ब्रिटिशकालीन संग्रह।",
    what_is_special_local: "भगवान बुद्धक पावन अस्थि अवशेष केर पवित्र मंजूषा आ 20 करोड़ बरिस पुरान जीवाश्म वृक्ष केर ऐतिहासिक धरोहर।",
    why_visit: "To offer reverence at the sacred Buddha Relic Sanctum, admire royal British and Mughal-Rajput palace architecture, and experience over a century of museum legacy.",
    why_visit_hi: "भगवान बुद्ध के पावन अस्थि दर्शन करने, 100 वर्ष से अधिक पुरानी ऐतिहासिक इमारत की वास्तुकला देखने और प्राचीन भारत के दुर्लभ सिक्कों व मूर्तियों को निहारने के लिए।",
    why_visit_local: "भगवान बुद्धक पावन दर्शन आ 100 बरिस पुरान ऐतिहासिक जादू घरक अद्भुत संग्रह देखय लेल।",
    local_food: "Patna Maurya Litti Chokha, Fraser Road Sattu Paratha, Chandrakala, Khaja",
    local_food_hi: "पटना मौर्य कॉम्पलेक्स का लिट्टी चोखा, फ्रेजर रोड का सत्तू पराठा, चंद्रकला, खाजा",
    local_food_local: "पटनाक प्रसिद्ध लिट्टी चोखा, चंद्रकला आ सत्तू शरबत",
    coordinates: { lat: 25.6111, lng: 85.1328 },
    google_maps_url: "https://maps.google.com/?q=25.6111,85.1328",
    visiting_duration: "2 - 3 Hours",
    visiting_duration_hi: "2 - 3 घंटे",
    opening_hours: "10:30 AM - 04:30 PM (Closed Mondays)",
    opening_hours_hi: "सुबह 10:30 से शाम 04:30 बजे तक (सोमवार को बंद)",
    entry_fee: "₹20 for Indians, ₹10 for students, ₹250 for Buddha Relic Gallery, ₹500 for Foreigners",
    entry_fee_hi: "सामान्य प्रवेश ₹20, विद्यार्थियों के लिए ₹10, बुद्ध अस्थि दर्शन गैलरी ₹250, विदेशी पर्यटकों के लिए ₹500",
    entry_type: "Paid",
    family_friendly: true,
    accessibility: {
      wheelchair: true,
      notes: "Ground floor galleries are accessible, ramp access at entrance.",
      notes_hi: "भूतल दीर्घाएं व्हीलचेयर अनुकूल, प्रवेश द्वार पर रैंप सुविधा उपलब्ध।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-22",
      source: "Directorate of Museums, Govt. of Bihar"
    },
    travel_tips: [
      "Special ticket required for the Buddha Relic Casket Gallery.",
      "Photography may require additional nominal ticket fee.",
      "Visit both Bihar Museum and Patna Museum on the same day for a complete heritage journey."
    ],
    travel_tips_hi: [
      "भगवान बुद्ध अस्थि अवशेष गैलरी देखने के लिए विशेष टिकट आवश्यक है।",
      "फोटोग्राफी के लिए अतिरिक्त मामूली शुल्क लागू है।",
      "संपूर्ण ऐतिहासिक अनुभव के लिए बिहार संग्रहालय और पटना संग्रहालय दोनों का भ्रमण अवश्य करें।"
    ],
    nearby_attractions: ["Bihar Museum (via Heritage Tunnel)", "Golghar", "Ganga Ghats", "Patna Planetarium", "High Court"],
    best_season: "All Year Round",
    best_season_hi: "वर्ष भर अनुकूल"
  },

  // 5. Rohtasgarh Fort, Sasaram
  {
    id: "rohtasgarh-fort",
    name: "Rohtasgarh Fort",
    name_hi: "रोहतासगढ़ दुर्ग",
    district_id: "rohtas",
    district_name: "Rohtas",
    district_name_hi: "रोहतास",
    category_slug: "historical",
    category: "Historical Monuments",
    category_hi: "ऐतिहासिक स्मारक",
    featured: true,
    rating: 4.7,
    reviews_count: 3200,
    image: "images/rohtasgarh.jpg",
    gallery: [
      "images/rohtasgarh.jpg"
    ],
    overview: "Perched 1,500 feet atop the Kaimur plateau overlooking the Sone River, Rohtasgarh is one of the most impregnable and sprawling hill-fortresses in India, spanning over 28 square miles. It features royal palace chambers, hanging balconies, ancient temples, and cannon bastions.",
    overview_hi: "सोन नदी के ऊपर कैमूर पठार पर 1,500 फीट की ऊंचाई पर स्थित रोहतासगढ़ भारत के सबसे दुर्भेद्य और विशाल पहाड़ी किलों में से एक है, जो लगभग 28 वर्ग मील में फैला है। इसमें भव्य महल, लटकते झरोखे, मंदिर और प्राचीन तोपखाने हैं।",
    historical_significance: "Founded by Raja Rohitashva (son of legendary King Harishchandra). Later conquered by Sher Shah Suri in 1538 and fortified by Mughal Governor Raja Man Singh as his military headquarters.",
    historical_significance_hi: "सत्यवादी राजा हरिश्चंद्र के पुत्र रोहिताश्व द्वारा स्थापित; 1538 में शेरशाह सूरी और बाद में राजा मानसिंह ने इसे अपना सामरिक केंद्र बनाया।",
    coordinates: { lat: 24.6152, lng: 83.9218 },
    google_maps_url: "https://maps.google.com/?q=24.6152,83.9218",
    visiting_duration: "4 - 6 Hours",
    visiting_duration_hi: "4 - 6 घंटे",
    opening_hours: "06:00 AM - 05:00 PM (Daily)",
    opening_hours_hi: "सुबह 06:00 से शाम 05:00 बजे तक (प्रतिदिन)",
    entry_fee: "Free Entry",
    entry_fee_hi: "निःशुल्क प्रवेश",
    entry_type: "Free",
    family_friendly: true,
    accessibility: {
      wheelchair: false,
      notes: "Uphill trek or 4x4 off-road vehicle required to reach the fortress summit plateau.",
      notes_hi: "किले तक पहुंचने के लिए पहाड़ी चढ़ाई या 4x4 वाहन की आवश्यकता होती है।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-15",
      source: "Archaeological Survey of India (ASI)"
    },
    travel_tips: [
      "Start early morning from Sasaram or Dehri-on-Sone with a local guide and ample hydration.",
      "Explore the Aina Mahal, Takht-e-Badshahi, Jama Masjid, and Rohtasan Temple ruins inside.",
      "Combined trip recommended with the nearby Tutla Bhawani waterfall valley."
    ],
    travel_tips_hi: [
      "सासाराम या डेहरी-ऑन-सोन से सुबह जल्दी निकलें और साथ में पर्याप्त पानी रखें।",
      "किले के अंदर आईना महल, तख्ते बादशाही और रोहितासन मंदिर के अवशेष अवश्य देखें।",
      "पास में स्थित तुतला भवानी जलप्रपात घाटी के साथ संयुक्त यात्रा की योजना बनाएं।"
    ],
    nearby_attractions: ["Tomb of Sher Shah Suri (Sasaram)", "Tutla Bhawani Waterfall", "Dhuan Kund & Manjhar Kund Waterfalls", "Akbarpur Valley"],
    best_season: "October to February",
    best_season_hi: "अक्टूबर से फरवरी"
  },

  // 6. Tomb of Sher Shah Suri, Sasaram
  {
    id: "sher-shah-tomb",
    name: "Tomb of Sher Shah Suri",
    name_hi: "शेरशाह सूरी का मकबरा, सासाराम",
    district_id: "rohtas",
    district_name: "Rohtas",
    district_name_hi: "रोहतास",
    category_slug: "historical",
    category: "Historical Monuments",
    category_hi: "ऐतिहासिक स्मारक",
    featured: true,
    rating: 4.7,
    reviews_count: 6700,
    image: "images/shershah.jpg",
    gallery: [
      "images/shershah.jpg"
    ],
    overview: "Regarded as the 'Taj Mahal of Bihar' and an Indo-Islamic architectural marvel, this magnificent red sandstone mausoleum stands 122 feet high in the center of a scenic square artificial lake. Built between 1540 and 1545 CE, its dome is actually larger than that of the Taj Mahal.",
    overview_hi: "'बिहार का ताजमहल' कहा जाने वाला यह भव्य लाल बलुआ पत्थर का मकबरा एक विशाल कृत्रिम झील के बीच 122 फीट ऊंचा खड़ा है। 1540 से 1545 के बीच निर्मित इस मकबरे का गुंबद आकार में ताजमहल के गुंबद से भी बड़ा है।",
    historical_significance: "Resting place of emperor Sher Shah Suri, founder of the Suri Empire who reformed India's currency (introducing the Silver Rupee), postal system, and built the Grand Trunk Road.",
    historical_significance_hi: "सूर साम्राज्य के संस्थापक सम्राट शेरशाह सूरी की समाधि, जिन्होंने रुपया मुद्रा, डाक व्यवस्था और ऐतिहासिक जीटी रोड का निर्माण कराया था।",
    coordinates: { lat: 24.9472, lng: 84.0156 },
    google_maps_url: "https://maps.google.com/?q=24.9472,84.0156",
    visiting_duration: "1.5 - 2 Hours",
    visiting_duration_hi: "1.5 - 2 घंटे",
    opening_hours: "06:00 AM - 05:30 PM (Daily)",
    opening_hours_hi: "सुबह 06:00 से शाम 05:30 बजे तक (प्रतिदिन)",
    entry_fee: "₹25 for Indian citizens, ₹300 for Foreign visitors",
    entry_fee_hi: "भारतीय नागरिकों के लिए ₹25, विदेशी पर्यटकों के लिए ₹300",
    entry_type: "Paid",
    family_friendly: true,
    accessibility: {
      wheelchair: true,
      notes: "Paved causeway leads across the water to the main plinth.",
      notes_hi: "झील के ऊपर बने पुल से मुख्य चबूतरे तक सुगम पक्का मार्ग है।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-16",
      source: "Archaeological Survey of India (ASI)"
    },
    travel_tips: [
      "Visit during late afternoon to capture the golden sunset reflection over the water.",
      "Explore Hasan Khan Suri's tomb and Chandan Shahid Pahar nearby in Sasaram town."
    ],
    travel_tips_hi: [
      "शाम के समय जाएं ताकि पानी में मकबरे का सुनहरा प्रतिबिंब देख सकें।",
      "सासाराम में ही हसन खान सूरी का मकबरा और चंदन शहीद पहाड़ी भी अवश्य देखें।"
    ],
    nearby_attractions: ["Tomb of Hasan Khan Suri", "Chandan Shahid Hill", "Rohtasgarh Fort (45 km)", "Tutla Bhawani (35 km)"],
    best_season: "October to March",
    best_season_hi: "अक्टूबर से मार्च"
  },

  // 7. Valmiki National Park & Tiger Reserve
  {
    id: "valmiki-tiger-reserve",
    name: "Valmiki National Park & Tiger Reserve",
    name_hi: "वाल्मीकि राष्ट्रीय उद्यान एवं टाइगर रिजर्व",
    district_id: "west-champaran",
    district_name: "West Champaran",
    district_name_hi: "पश्चिम चंपारण",
    category_slug: "nature",
    category: "Nature & Wildlife",
    category_hi: "प्रकृति एवं वन्यजीव",
    featured: true,
    rating: 4.8,
    reviews_count: 4200,
    image: "images/valmiki.jpg",
    gallery: [
      "images/valmiki.jpg"
    ],
    overview: "Nestled in the foothills of the Himalayas along the India-Nepal border, Valmiki is Bihar's only Tiger Reserve and premier national park, covering 898 sq km. Home to royal Bengal tigers, leopards, Indian one-horned rhinos, flying foxes, and 250+ exotic bird species.",
    overview_hi: "भारत-नेपाल सीमा पर हिमालय की तराई में स्थित वाल्मीकि बिहार का एकमात्र राष्ट्रीय उद्यान और टाइगर रिजर्व है, जो 898 वर्ग किमी में फैला है। यहाँ रॉयल बंगाल टाइगर, तेंदुए, एक सींग वाले गैंडे और 250 से अधिक दुर्लभ पक्षी पाए जाते हैं।",
    historical_significance: "Encompasses the mythological Valmiki Ashram where Sita stayed during exile and Maharishi Valmiki composed the immortal Ramayana epic.",
    historical_significance_hi: "पौराणिक महर्षि वाल्मीकि आश्रम का क्षेत्र, जहाँ माता सीता ने वनवास काटा और महर्षि वाल्मीकि ने रामायण की रचना की।",
    coordinates: { lat: 27.2797, lng: 84.1481 },
    google_maps_url: "https://maps.google.com/?q=27.2797,84.1481",
    visiting_duration: "1 - 2 Days",
    visiting_duration_hi: "1 - 2 दिन",
    opening_hours: "06:00 AM - 05:00 PM (Safaris scheduled at morning & afternoon; closed during peak monsoon July-Sept)",
    opening_hours_hi: "सुबह 06:00 से शाम 05:00 (सवेरे व शाम को सफारी; मानसून में जुलाई-सितंबर बंद)",
    entry_fee: "₹150 Park entry + Gypsy Safari charges (~₹2,500 per gypsy of 6 persons)",
    entry_fee_hi: "₹150 पार्क प्रवेश + जिप्सी सफारी शुल्क (लगभग ₹2,500 प्रति 6 सीटर जिप्सी)",
    entry_type: "Paid",
    family_friendly: true,
    accessibility: {
      wheelchair: false,
      notes: "Open forest jeeps / gypsies used for safaris. Eco-cottages available at Valmikinagar with ground access.",
      notes_hi: "सफारी खुली जिप्सी द्वारा होती है। वाल्मीकिनगर में ईको-कॉटेज में ग्राउंड फ्लोर कमरे उपलब्ध हैं।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-10",
      source: "National Tiger Conservation Authority (NTCA) & Bihar Forest Dept"
    },
    travel_tips: [
      "Stay at the scenic Forest Eco-Huts on the banks of Gandak River at Valmikinagar.",
      "Take the Gandak River boat safari and visit the historic Triveni Sangam.",
      "Book jeep safaris early through the official forest department counter or site."
    ],
    travel_tips_hi: [
      "वाल्मीकिनगर में गंडक नदी के तट पर बने सुंदर ईको-हट्स में ठहरें।",
      "गंडक नदी में बोट सफारी करें और त्रिवेणी संगम के दर्शन करें।",
      "वन विभाग के काउंटर या वेबसाइट से पहले से सफारी बुक करें।"
    ],
    nearby_attractions: ["Valmiki Ashram", "Gandak Barrage Triveni", "Jatashankar Temple", "Someshwar Fort Ruins", "Bhitiharwa Ashram (Gandhi)"],
    best_season: "November to April",
    best_season_hi: "नवंबर से अप्रैल"
  },

  // 8. Takht Sri Patna Sahib, Patna
  {
    id: "patna-sahib",
    name: "Takht Sri Patna Sahib (Gurudwara)",
    name_hi: "तख्त श्री पटना साहिब (गुरुद्वारा)",
    district_id: "patna",
    district_name: "Patna",
    district_name_hi: "पटना",
    category_slug: "religious",
    category: "Religious & Spiritual",
    category_hi: "धार्मिक व आध्यात्मिक",
    featured: true,
    rating: 4.9,
    reviews_count: 11500,
    image: "images/patnasahib.jpg",
    gallery: [
      "images/patnasahib.jpg"
    ],
    overview: "One of the five sacred Takhts (Thrones of Authority) of Sikhism, Takht Sri Harmandir Ji Patna Sahib is the revered birthplace of the Tenth Sikh Guru, Guru Gobind Singh Ji, born here in 1666 CE. Standing near the bank of River Ganga, it welcomes pilgrims with continuous langar.",
    overview_hi: "सिख धर्म के पांच पावन तख्तों में से एक, तख्त श्री हरमंदिर जी पटना साहिब सिखों के दसवें गुरु, गुरु गोबिंद सिंह जी की पवित्र जन्मस्थली (1666 ई.) है। गंगा तट के निकट स्थित यह पावन गुरुद्वारा 24 घंटे लंगर और आध्यात्मिक शांति प्रदान करता है।",
    historical_significance: "Birthplace of Guru Gobind Singh Ji. Also blessed by visits from Guru Nanak Dev Ji and Guru Tegh Bahadur Ji. Houses rare personal weapons and relics of the Tenth Master.",
    historical_significance_hi: "गुरु गोबिंद सिंह जी का जन्मस्थान; गुरु नानक देव जी और गुरु तेग बहादुर जी के पावन चरण भी यहाँ पड़े थे। यहाँ दशमेश पिता के दुर्लभ शस्त्र और पावन अवशेष सुरक्षित हैं।",
    coordinates: { lat: 25.5941, lng: 85.2289 },
    google_maps_url: "https://maps.google.com/?q=25.5941,85.2289",
    visiting_duration: "1.5 - 2.5 Hours",
    visiting_duration_hi: "1.5 - 2.5 घंटे",
    opening_hours: "04:00 AM - 10:00 PM (Daily)",
    opening_hours_hi: "सुबह 04:00 से रात 10:00 बजे तक (प्रतिदिन)",
    entry_fee: "Free Entry (Open to all faiths and communities)",
    entry_fee_hi: "निःशुल्क प्रवेश (सभी धर्मों और श्रद्धालुओं के लिए खुला)",
    entry_type: "Free",
    family_friendly: true,
    accessibility: {
      wheelchair: true,
      notes: "Wheelchair assistance available at entrance; elevators installed for upper prayer halls.",
      notes_hi: "प्रवेश द्वार पर व्हीलचेयर सुविधा और ऊपरी दीवान हाल के लिए लिफ्ट उपलब्ध है।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-18",
      source: "Takht Sri Patna Sahib Prabandhak Committee"
    },
    travel_tips: [
      "Head covering (scarf/rumal) and shoes deposit are compulsory before entering the sanctum.",
      "Partake in the blessed Guru Ka Langar serving fresh nutritious meals 24x7.",
      "During Prakash Parv (Guru Gobind Singh Jayanti), the entire complex is illuminated with grand festivities."
    ],
    travel_tips_hi: [
      "परिसर में प्रवेश से पहले सिर ढकना और जूते जमा कराना अनिवार्य है।",
      "24 घंटे चलने वाले पवित्र गुरु के लंगर में प्रसाद ग्रहण करें।",
      "प्रकाश पर्व के अवसर पर यहाँ अलौकिक सजावट और भव्य नगर कीर्तन का आयोजन होता है।"
    ],
    nearby_attractions: ["Guru Ka Bagh", "Bal Leela Gurudwara", "Patna Museum", "Ganga Path / Marine Drive", "Padri Ki Haveli"],
    best_season: "All Year (Special during Prakash Parv in winter)",
    best_season_hi: "वर्ष भर (सर्दियों में प्रकाश पर्व विशेष)"
  },

  // 9. Mundeshwari Devi Temple, Kaimur
  {
    id: "mundeshwari-temple",
    name: "Mundeshwari Devi Temple",
    name_hi: "माँ मुंडेश्वरी देवी मंदिर",
    district_id: "kaimur",
    district_name: "Kaimur",
    district_name_hi: "कैमूर",
    category_slug: "religious",
    category: "Religious & Spiritual",
    category_hi: "धार्मिक व आध्यात्मिक",
    featured: true,
    rating: 4.8,
    reviews_count: 4800,
    image: "images/mundeshwari.jpg",
    gallery: [
      "images/mundeshwari.jpg"
    ],
    overview: "Perched atop the isolated Pavra hill (608 ft) in Kaimur, Mundeshwari is certified by the Archaeological Survey of India as the oldest surviving functional Hindu temple in India. Continuous worship has been conducted here since at least 108 CE / 635 CE.",
    overview_hi: "कैमूर की 608 फीट ऊंची पवरा पहाड़ी पर स्थित माँ मुंडेश्वरी मंदिर भारतीय पुरातत्व सर्वेक्षण (एएसआई) द्वारा भारत का सबसे प्राचीन निरंतर सक्रिय मंदिर प्रमाणित है, जहाँ लगभग 108 ई./635 ई. से बिना रुके निरंतर पूजा-अर्चना होती आ रही है।",
    historical_significance: "Unique octagonal stone plan (Nagara style prototype); Gupta-era inscriptions dating back to 635 CE. Features an ancient four-faced Shiva Lingam that subtly shifts hues with daylight.",
    historical_significance_hi: "अनोखा अष्टकोणीय प्रस्तर मंदिर; 635 ई. के गुप्तकालीन शिलालेख; गर्भगृह में स्थापित चतुर्मुखी शिवलिंग जो सूर्य की रोशनी के साथ रंग बदलता प्रतीत होता है।",
    coordinates: { lat: 25.0272, lng: 83.6191 },
    google_maps_url: "https://maps.google.com/?q=25.0272,83.6191",
    visiting_duration: "2 - 3 Hours",
    visiting_duration_hi: "2 - 3 घंटे",
    opening_hours: "06:00 AM - 07:00 PM (Daily)",
    opening_hours_hi: "सुबह 06:00 से शाम 07:00 बजे तक (प्रतिदिन)",
    entry_fee: "Free Entry",
    entry_fee_hi: "निःशुल्क प्रवेश",
    entry_type: "Free",
    family_friendly: true,
    accessibility: {
      wheelchair: false,
      notes: "Roadway leads up to the top parking lot; stone steps required to ascend the final sanctum.",
      notes_hi: "पहाड़ी के ऊपर पार्किंग तक पक्की सड़क है; अंतिम मंदिर तक कुछ सीढ़ियां हैं।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-14",
      source: "Archaeological Survey of India & Bihar State Religious Trust Board"
    },
    travel_tips: [
      "Witness the non-violent 'Ahimsa Bali' ritual where a ceremonial ram is consecrated without any harm or bloodshed.",
      "Breathtaking 360-degree panoramic views of the Kaimur hill range from the temple courtyard."
    ],
    travel_tips_hi: [
      "यहाँ की अनूठी 'अहिंसक बलि' परंपरा देखें जहाँ बिना किसी रक्तपात के बकरे को केवल अक्षत छिड़क कर संकल्प दिलाया जाता है।",
      "मंदिर प्रांगण से कैमूर की पहाड़ियों का 360-डिग्री विहंगम दृश्य देखने को मिलता है।"
    ],
    nearby_attractions: ["Telhar Kund Waterfall (30 km)", "Karkat Waterfall", "Baidyanath Temple", "Durgawati Reservoir"],
    best_season: "October to March (Navratri in April & October)",
    best_season_hi: "अक्टूबर से मार्च (नवरात्र विशेष)"
  },

  // 10. Kakolat Waterfalls, Nawada
  {
    id: "kakolat-waterfall",
    name: "Kakolat Waterfalls",
    name_hi: "ककोलत जलप्रपात, नवादा",
    district_id: "nawada",
    district_name: "Nawada",
    district_name_hi: "नवादा",
    category_slug: "waterfalls",
    category: "Lakes & Waterfalls",
    category_hi: "झीलें व जलप्रपात",
    featured: true,
    rating: 4.6,
    reviews_count: 3800,
    image: "images/kakolat.jpg",
    gallery: [
      "images/kakolat.jpg"
    ],
    overview: "Cascading from a height of about 160 feet amidst dense forested hills on the border of Bihar and Jharkhand, Kakolat is Bihar's most iconic natural waterfall. The cold crystal-clear mineral spring waters pool into a natural reservoir revered for its refreshing and therapeutic qualities.",
    overview_hi: "बिहार और झारखंड की सीमा पर घने जंगलों से आच्छादित पहाड़ियों के बीच 160 फीट की ऊंचाई से गिरता ककोलत बिहार का सबसे लोकप्रिय प्राकृतिक जलप्रपात है। इसका निर्मल और शीतल जल एक प्राकृतिक कुंड में एकत्र होता है जो अत्यंत स्फूर्तिदायक है।",
    historical_significance: "Mentioned in the Mahabharata; legend says King Nimi was cursed to turn into a python and dwelt here until liberated by the Pandavas.",
    historical_significance_hi: "महाभारत काल से जुड़ी मान्यता; कथा है कि ऋषि के शाप से राजा निमि सर्प योनि में यहाँ रहे थे और पांडवों के दर्शन से उन्हें मुक्ति मिली।",
    coordinates: { lat: 24.6865, lng: 85.6022 },
    google_maps_url: "https://maps.google.com/?q=24.6865,85.6022",
    visiting_duration: "2 - 4 Hours",
    visiting_duration_hi: "2 - 4 घंटे",
    opening_hours: "08:00 AM - 05:00 PM (Daily)",
    opening_hours_hi: "सुबह 08:00 से शाम 05:00 बजे तक (प्रतिदिन)",
    entry_fee: "₹20 Nominal environmental fee",
    entry_fee_hi: "₹20 सामान्य पर्यावरण शुल्क",
    entry_type: "Paid",
    family_friendly: true,
    accessibility: {
      wheelchair: false,
      notes: "Newly renovated pathways and pedestrian railings lead to the base pool.",
      notes_hi: "पर्यटन विभाग द्वारा नए रास्ते और रेलिंग का निर्माण किया गया है।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-15",
      source: "Bihar Tourism Development Corporation (BSTDC)"
    },
    travel_tips: [
      "Carry extra dry clothes if you plan to bathe in the natural pool.",
      "Modern changing rooms, cafeteria, and lockers are newly inaugurated by Bihar Tourism.",
      "A grand fair takes place here every year during Baisakhi / Chaiti Sankranti."
    ],
    travel_tips_hi: [
      "यदि आप प्राकृतिक कुंड में स्नान करना चाहते हैं तो अतिरिक्त कपड़े साथ रखें।",
      "पर्यटन विभाग द्वारा नए चेंजिंग रूम, कैफेटेरिया और लॉकर की सुविधा उपलब्ध कराई गई है।",
      "बैसाखी और चैती संक्रांति पर यहाँ बहुत बड़ा मेला लगता है।"
    ],
    nearby_attractions: ["Gunawa Ji Jain Temple", "Sekhodeora Ashram", "Rajgir (55 km)", "Bodh Gaya (65 km)"],
    best_season: "September to March",
    best_season_hi: "सितंबर से मार्च"
  },

  // 11. Kesaria Buddha Stupa, East Champaran
  {
    id: "kesaria-stupa",
    name: "Kesaria Buddha Stupa",
    name_hi: "केसरिया बौद्ध स्तूप",
    district_id: "east-champaran",
    district_name: "East Champaran",
    district_name_hi: "पूर्वी चंपारण",
    category_slug: "historical",
    category: "Historical Monuments",
    category_hi: "ऐतिहासिक स्मारक",
    featured: true,
    rating: 4.7,
    reviews_count: 2900,
    image: "images/kesaria.jpg",
    gallery: [
      "images/kesaria.jpg"
    ],
    overview: "Rising majestically to a height of 104 feet with a circumference of nearly 1,400 feet, Kesaria is celebrated as the tallest Buddhist stupa in the world, standing one foot taller than the famous Borobudur temple in Indonesia. It features multiple circular terraces with Buddha shrines in niches.",
    overview_hi: "104 फीट की भव्य ऊंचाई और लगभग 1,400 फीट की परिधि के साथ केसरिया स्तूप दुनिया का सबसे ऊंचा बौद्ध स्तूप माना जाता है, जो इंडोनेशिया के बोरोबुदुर मंदिर से भी 1 फीट ऊंचा है। इसमें सीढ़ीदार चबूतरों पर भगवान बुद्ध की प्रतिमाएं स्थापित हैं।",
    historical_significance: "Marks the sacred spot where Lord Buddha, on his final journey to Kushinagar, bade farewell to the Lichhavis of Vaishali and gifted them his sacred alms bowl (begging bowl).",
    historical_significance_hi: "उस पावन स्थल का प्रतीक जहाँ भगवान बुद्ध ने महापरिनिर्वाण के मार्ग पर वैशाली के लिच्छवियों से अंतिम विदा ली थी और उन्हें अपना पवित्र भिक्षापात्र भेंट किया था।",
    coordinates: { lat: 26.3533, lng: 84.8725 },
    google_maps_url: "https://maps.google.com/?q=26.3533,84.8725",
    visiting_duration: "1 - 2 Hours",
    visiting_duration_hi: "1 - 2 घंटे",
    opening_hours: "06:00 AM - 06:00 PM (Daily)",
    opening_hours_hi: "सुबह 06:00 से शाम 06:00 बजे तक (प्रतिदिन)",
    entry_fee: "₹25 for Indians, ₹300 for Foreign tourists",
    entry_fee_hi: "भारतीयों के लिए ₹25, विदेशी पर्यटकों के लिए ₹300",
    entry_type: "Paid",
    family_friendly: true,
    accessibility: {
      wheelchair: true,
      notes: "Gardens and circumambulation path are wheelchair accessible.",
      notes_hi: "उद्यान और परिक्रमा पथ व्हीलचेयर अनुकूल हैं।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-18",
      source: "Archaeological Survey of India (ASI)"
    },
    travel_tips: [
      "Carry a hat and sun protection as the vast landscaped grounds have open sun exposure.",
      "Combine your visit with Motihari Gandhi Smarak and Vaishali."
    ],
    travel_tips_hi: [
      "धूप से बचाव के लिए टोपी रखें क्योंकि परिसर खुला और विस्तृत है।",
      "मोतिहारी गांधी स्मारक और वैशाली के साथ संयुक्त यात्रा बनाएं।"
    ],
    nearby_attractions: ["Gandhi Sangrahalaya Motihari", "George Orwell Memorial", "Vaishali Relic Stupa (55 km)", "Lauriya Areraj Ashokan Pillar"],
    best_season: "October to March",
    best_season_hi: "अक्टूबर से मार्च"
  },

  // 12. Vikramshila University Ruins, Bhagalpur
  {
    id: "vikramshila-ruins",
    name: "Vikramshila University Ruins",
    name_hi: "विक्रमशिला विश्वविद्यालय खंडहर",
    district_id: "bhagalpur",
    district_name: "Bhagalpur",
    district_name_hi: "भागलपुर",
    category_slug: "historical",
    category: "Historical Monuments",
    category_hi: "ऐतिहासिक स्मारक",
    featured: true,
    rating: 4.6,
    reviews_count: 2400,
    image: "images/vikramshila.jpg",
    gallery: [
      "images/vikramshila.jpg"
    ],
    overview: "Along with Nalanda, Vikramshila was one of the two most important seats of Buddhist learning in India during the Pala Empire. Established at Antichak near Kahalgaon, its centerpiece is a gigantic cruciform central stupa surrounded by 208 monastic cells and landscaped lawns.",
    overview_hi: "नालंदा के साथ विक्रमशिला पाल साम्राज्य के दौरान भारत में बौद्ध शिक्षा का सबसे प्रमुख विश्वविद्यालय था। कहलगांव के निकट अंतीचक में स्थित इसका मुख्य केंद्र एक विशाल क्रूसीफॉर्म महास्तूप है जिसके चारों ओर 208 मठ कक्ष बने हुए हैं।",
    historical_significance: "Founded by Pala emperor Dharmapala in the late 8th century CE. It was the premier world center for Tantric Buddhism (Vajrayana) and birthplace of Atisa Dipankara, who established Tibetan Buddhism.",
    historical_significance_hi: "8वीं सदी में पाल सम्राट धर्मपाल द्वारा स्थापित; वज्रयान बौद्ध तंत्र का विश्व प्रसिद्ध केंद्र और महान विद्वान अतीश दीपांकर की कर्मभूमि जिन्होंने तिब्बत में बौद्ध धर्म की पुनर्स्थापना की।",
    coordinates: { lat: 25.3276, lng: 87.2844 },
    google_maps_url: "https://maps.google.com/?q=25.3276,87.2844",
    visiting_duration: "2 - 3 Hours",
    visiting_duration_hi: "2 - 3 घंटे",
    opening_hours: "09:00 AM - 05:00 PM (Daily)",
    opening_hours_hi: "सुबह 09:00 से शाम 05:00 बजे तक (प्रतिदिन)",
    entry_fee: "₹25 for Indians, ₹300 for Foreigners, Free for children under 15",
    entry_fee_hi: "भारतीयों के लिए ₹25, विदेशियों के लिए ₹300, 15 साल से कम उम्र के बच्चों के लिए निःशुल्क",
    entry_type: "Paid",
    family_friendly: true,
    accessibility: {
      wheelchair: true,
      notes: "Paved stone walkways surround the central stupa.",
      notes_hi: "केंद्रीय स्तूप के चारों ओर पक्के रास्ते बने हैं।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-12",
      source: "Archaeological Survey of India (ASI)"
    },
    travel_tips: [
      "Visit the Vikramshila Site Archaeological Museum to see exquisite Pala bronze sculptures and terracotta plaques.",
      "Accessible from Kahalgaon railway station (13 km) or Bhagalpur city (40 km)."
    ],
    travel_tips_hi: [
      "खुदाई से निकली पाल कालीन कांस्य मूर्तियों और टेराकोटा कलाकृतियों के लिए पास का संग्रहालय अवश्य देखें।",
      "कहलगांव रेलवे स्टेशन से 13 किमी और भागलपुर शहर से 40 किमी दूरी पर स्थित।"
    ],
    nearby_attractions: ["Kahalgaon Bateshwar Sthan & Ganga Rock Sculptures", "Vikramshila Dolphin Sanctuary", "Bhagalpur Silk Markets"],
    best_season: "October to March",
    best_season_hi: "अक्टूबर से मार्च"
  },

  // 13. Vikramshila Gangetic Dolphin Sanctuary, Bhagalpur
  {
    id: "gangetic-dolphin-sanctuary",
    name: "Vikramshila Gangetic Dolphin Sanctuary",
    name_hi: "विक्रमशिला गंगा डॉल्फिन अभयारण्य",
    district_id: "bhagalpur",
    district_name: "Bhagalpur",
    district_name_hi: "भागलपुर",
    category_slug: "nature",
    category: "Nature & Wildlife",
    category_hi: "प्रकृति एवं वन्यजीव",
    featured: true,
    rating: 4.6,
    reviews_count: 2100,
    image: "images/dolphin.jpg",
    gallery: [
      "images/dolphin.jpg"
    ],
    overview: "Spanning 60 kilometers of the sacred Ganges River from Sultanganj to Kahalgaon in Bhagalpur, this is the only protected aquatic sanctuary for India's National Aquatic Animal—the endangered freshwater Gangetic Dolphin (Platanista gangetica, locally called 'Susu').",
    overview_hi: "भागलपुर में सुल्तानगंज से कहलगांव तक गंगा नदी के 60 किलोमीटर के हिस्से में फैला यह भारत के राष्ट्रीय जलीय जीव—दुर्लभ गंगा डॉल्फिन (सॉस) का देश में एकमात्र संरक्षित जलीय अभयारण्य है।",
    historical_significance: "Established in 1991 to protect India's blind freshwater dolphins, gharials, smooth-coated otters, and rich riverine birdlife.",
    historical_significance_hi: "भारत की लुप्तप्राय मीठे पानी की अंधी डॉल्फिन, घड़ियाल और ऊदबिलाव के संरक्षण हेतु 1991 में स्थापित।",
    coordinates: { lat: 25.2687, lng: 86.9746 },
    google_maps_url: "https://maps.google.com/?q=25.2687,86.9746",
    visiting_duration: "2 - 3 Hours",
    visiting_duration_hi: "2 - 3 घंटे",
    opening_hours: "06:00 AM - 05:00 PM (Boat trips subject to river conditions)",
    opening_hours_hi: "सुबह 06:00 से शाम 05:00 (नौकायन नदी की स्थिति पर निर्भर)",
    entry_fee: "Free Entry (Boat hire charges vary ~₹500 - ₹1200)",
    entry_fee_hi: "निःशुल्क प्रवेश (स्थानीय नाव किराया लगभग ₹500 - ₹1200)",
    entry_type: "Free",
    family_friendly: true,
    accessibility: {
      wheelchair: false,
      notes: "Boarding traditional wooden river boats requires stepping down river ghats.",
      notes_hi: "घाट से नाव पर चढ़ने के लिए सीढ़ियां उतरनी पड़ती हैं।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-14",
      source: "Department of Environment, Forest & Climate Change, Bihar"
    },
    travel_tips: [
      "Best dolphin sightings occur in early mornings or late afternoons from Barari Ghat or Kahalgaon.",
      "Bring binoculars and telephoto lenses for capturing dolphin surfacing leaps.",
      "Respect the silence of the river to encourage dolphins to surface."
    ],
    travel_tips_hi: [
      "बरारी घाट या कहलगांव से सुबह जल्दी या शाम के समय डॉल्फिन दिखने की संभावना सबसे अधिक होती है।",
      "डॉल्फिन की छलांग देखने के लिए दूरबीन साथ रखें।",
      "नदी में शांति बनाए रखें ताकि डॉल्फिन नाव के पास आ सकें।"
    ],
    nearby_attractions: ["Ajgaibinath Temple Sultanganj", "Vikramshila Ruins", "Kahalgaon Bateshwar Hills", "Karanagarh Fort"],
    best_season: "October to April",
    best_season_hi: "अक्टूबर से अप्रैल"
  },

  // 14. Madhubani Art Villages (Jitwarpur & Ranti)
  {
    id: "madhubani-art-villages",
    name: "Madhubani Art Villages (Jitwarpur & Ranti)",
    name_hi: "मधुबनी कला ग्राम (जीतवारपुर और रांटी)",
    name_local: "जीतवारपुर एवं रांटी (मिथिला चित्रकला ग्राम)",
    district_id: "madhubani",
    district_name: "Madhubani",
    district_name_hi: "मधुबनी",
    category_slug: "handicrafts",
    category: "Markets & Crafts",
    category_hi: "हस्तशिल्प व बाजार",
    featured: true,
    rating: 4.9,
    reviews_count: 3100,
    image: "images/madhubani.jpg",
    gallery: [
      "images/madhubani.jpg"
    ],
    overview: "Jitwarpur and Ranti are the living cradles of the world-celebrated GI-tagged Madhubani (Mithila) Painting. Walking through these villages is an open-air artistic pilgrimage—almost every household has women masters painting vivid murals of deities, nature, and rituals on mud walls and handmade paper.",
    overview_hi: "जीतवारपुर और रांटी विश्व प्रसिद्ध जीआई-टैग प्राप्त 'मधुबनी (मिथिला) चित्रकला' के जीवंत गांव हैं। इन गांवों में घूमना एक खुली कला दीर्घा में घूमने जैसा है, जहाँ लगभग हर घर में पद्मश्री और राष्ट्रीय पुरस्कार विजेता महिला कलाकार अपनी पारंपरिक कला का सृजन करती हैं।",
    overview_local: "जीतवारपुर आ रांटी विश्वविख्यात जीआई-टैग प्राप्त 'मिथिला चित्रकला'क पावन मायके थिक। एहि गामक घर-घर में माटीक भित्ति आ कागज पर प्राकृतिक रंग सँ जीवंत कला रचल जाइत अछि; बहुते रास पद्मश्री कलाकारक ई पावन माटी थिक।",
    historical_significance: "Centuries-old folk art traditionally passed mother-to-daughter; produced multiple Padma Shri awardees including Jagdamba Devi, Mahasundari Devi, Sita Devi, Godavari Dutta, and Dulari Devi.",
    historical_significance_hi: "सदियों पुरानी परंपरा जो माताओं द्वारा बेटियों को सिखाई जाती रही है; यहाँ से जगदम्बा देवी, महासुंदरी देवी, सीता देवी, गोदावरी दत्ता और दुलारी देवी जैसी कई पद्मश्री कलाकार उभरी हैं।",
    historical_significance_local: "मायक हाथ सँ बेटी केँ मिलल पीढ़ी-दर-पीढ़ीक पावन कला परंपरा; एतय सँ जगदम्बा देवी, महासुंदरी देवी, सीता देवी, गोदावरी दत्ता आ दुलारी देवी जकाँ कतेको पद्मश्री कलाकार देश-दुनिया में मिथिलाक नाम रौशन कएने छथि।",
    what_is_special: "An entire open-air village where living room walls, courtyards, and lanes are painted with authentic Mithila art.",
    what_is_special_hi: "एक पूरा खुला गांव जहाँ हर घर की दीवारें, दालान और गलियां असली मधुबनी पेंटिंग से सजी हुई हैं।",
    what_is_special_local: "पूरा गामक घर-आँगन, दालान आ भित्ति विश्व प्रसिद्ध प्राकृतिक रंगक मिथिला चित्रकला सँ सजल अछि।",
    why_visit: "To meet legendary living folk masters, observe live painting creation, and purchase authentic GI-tagged masterpieces directly.",
    why_visit_hi: "पद्मश्री और राष्ट्रीय पुरस्कार विजेता कलाकारों से सीधे मिलने, कला का लाइव निर्माण देखने और प्रामाणिक पेंटिंग खरीदने के लिए।",
    why_visit_local: "पद्मश्री कलाकार लोकनि सँ प्रत्यक्ष भेट करय, आँखि आगाँ चित्रकला बनैत देखय आ असली पेंटिंग सीधे कलाकार सँ खरीदय लेल।",
    local_food: "Mithila Makhana Kheer, Tilkor Tarua, Dahi Chura, Madhubani Khaja",
    local_food_hi: "मिथिला मखाना खीर, तिलकोर का तरुआ, दही-चूड़ा, मधुबनी का खाजा",
    local_food_local: "मिथिलाक मखान खीर, तिलकोरक तरुआ, दही-चूड़ा आ मधुबनीक खाजा",
    coordinates: { lat: 26.3541, lng: 86.0748 },
    google_maps_url: "https://maps.google.com/?q=26.3541,86.0748",
    visiting_duration: "3 - 5 Hours",
    visiting_duration_hi: "3 - 5 घंटे",
    opening_hours: "09:00 AM - 06:00 PM (Daily)",
    opening_hours_hi: "सुबह 09:00 से शाम 06:00 बजे तक (प्रतिदिन)",
    entry_fee: "Free Entry to villages; artwork purchased directly from artists",
    entry_fee_hi: "गांव में प्रवेश निःशुल्क; सीधे कलाकारों से पेंटिंग खरीद सकते हैं",
    entry_type: "Free",
    family_friendly: true,
    accessibility: {
      wheelchair: true,
      notes: "Paved rural lanes accessible by car, e-rickshaws, and wheelchairs.",
      notes_hi: "गांव की पक्की गलियों में ई-रिक्शा और व्हीलचेयर से जाया जा सकता है।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-18",
      source: "Upendra Maharathi Shilp Anusandhan Sansthan & BSTDC"
    },
    travel_tips: [
      "Buy authentic paintings directly from the artist homes for genuine quality and fair wages.",
      "Ask to see the five distinctive styles: Bharni, Katchni, Tantrik, Godna, and Kohbar.",
      "You can also request a short 1-hour introductory workshop with master artists."
    ],
    travel_tips_hi: [
      "कलाकारों के घर से सीधे प्रामाणिक पेंटिंग खरीदें ताकि उन्हें सही मूल्य मिले।",
      "मधुबनी की पांच शैलियां: भरनी, कचनी, तांत्रिक, गोदना और कोहबर अवश्य देखें।",
      "मास्टर कलाकारों से 1 घंटे की लाइव वर्कशॉप का अनुरोध भी कर सकते हैं।"
    ],
    nearby_attractions: ["Rajnagar Palace Ruins", "Saurath Sabha Sthan", "Kapileshwar Temple", "Darbhanga Raj Palace (35 km)"],
    best_season: "October to March",
    best_season_hi: "अक्टूबर से मार्च"
  },

  // 15. Golghar, Patna
  {
    id: "golghar-patna",
    name: "Golghar",
    name_hi: "गोलघर, पटना",
    district_id: "patna",
    district_name: "Patna",
    district_name_hi: "पटना",
    category_slug: "historical",
    category: "Historical Monuments",
    category_hi: "ऐतिहासिक स्मारक",
    featured: false,
    rating: 4.4,
    reviews_count: 7500,
    image: "images/golghar.jpg",
    gallery: [
      "images/golghar.jpg"
    ],
    overview: "Built in 1786 by Captain John Garstin following the catastrophic Bengal famine of 1770, Golghar is an iconic stupa-shaped pillarless granary standing 29 meters high near Gandhi Maidan. Twin spiral staircases of 145 steps wind around the outside, offering panoramic views of Patna city and the Ganga.",
    overview_hi: "1770 के भीषण अकाल के बाद 1786 में कैप्टन जॉन गार्स्टिन द्वारा निर्मित गोलघर 29 मीटर ऊंचा बिना किसी खंभे का विशाल अन्नागार है। इसके चारों ओर 145 घुमावदार सीढ़ियां बनी हैं, जहाँ से पटना शहर और गंगा नदी का मनोरम विहंगम दृश्य दिखाई देता है।",
    historical_significance: "Architectural wonder of the British era designed without internal pillars; capable of storing 137,000 tonnes of grain.",
    historical_significance_hi: "बिना खंभों के निर्मित ब्रिटिश कालीन वास्तुशिल्प का चमत्कार; 1,37,000 टन अनाज भंडारण की क्षमता।",
    coordinates: { lat: 25.6202, lng: 85.1437 },
    google_maps_url: "https://maps.google.com/?q=25.6202,85.1437",
    visiting_duration: "1 Hour",
    visiting_duration_hi: "1 घंटा",
    opening_hours: "10:00 AM - 05:00 PM (Daily)",
    opening_hours_hi: "सुबह 10:00 से शाम 05:00 बजे तक (प्रतिदिन)",
    entry_fee: "₹15 for adults, Free for children under 5",
    entry_fee_hi: "वयस्कों के लिए ₹15, 5 वर्ष से कम आयु के बच्चों के लिए निःशुल्क",
    entry_type: "Paid",
    family_friendly: true,
    accessibility: {
      wheelchair: false,
      notes: "Park grounds are accessible; spiral stairs to summit are steep and pedestrian-only.",
      notes_hi: "बगीचे में व्हीलचेयर जा सकती है; ऊपर चढ़ने के लिए केवल सीढ़ियां हैं।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-15",
      source: "Archaeological Survey of India & Bihar Tourism"
    },
    travel_tips: [
      "Climb to the top in the evening for a breathtaking breeze and sunset view over the River Ganga.",
      "Enjoy the laser light and sound show in the surrounding landscaped park."
    ],
    travel_tips_hi: [
      "शाम के समय ऊपर चढ़ें ताकि गंगा जी की ठंडी हवा और सूर्यास्त का आनंद ले सकें।",
      "उद्यान में होने वाले लेजर लाइट एंड साउंड शो का आनंद लें।"
    ],
    nearby_attractions: ["Gandhi Maidan", "Patna Planetarium", "Bihar Museum", "Ganga Marine Drive", "Sabhyata Dwar"],
    best_season: "All Year",
    best_season_hi: "वर्ष भर"
  },

  // 16. Vishwa Shanti Stupa, Rajgir
  {
    id: "vishwa-shanti-stupa-rajgir",
    name: "Vishwa Shanti Stupa (World Peace Pagoda)",
    name_hi: "विश्व शांति स्तूप, राजगीर",
    district_id: "nalanda",
    district_name: "Nalanda",
    district_name_hi: "नालंदा",
    category_slug: "religious",
    category: "Religious & Spiritual",
    category_hi: "धार्मिक व आध्यात्मिक",
    featured: true,
    rating: 4.8,
    reviews_count: 8100,
    image: "images/vishwa-shanti-stupa.jpg",
    gallery: [
      "images/vishwa-shanti-stupa.jpg"
    ],
    overview: "Gleaming pure white atop the 400-meter Ratnagiri hill, Vishwa Shanti Stupa is one of the 80 Peace Pagodas constructed worldwide by Japanese Buddhist monk Nichidatsu Fujii. Accessible via a historic single-chair aerial ropeway or trekking steps, it houses four golden statues representing Buddha's birth, enlightenment, teaching, and passing.",
    overview_hi: "400 मीटर ऊंची रत्नागिरी पहाड़ी के शिखर पर स्थित दूधिया सफेद विश्व शांति स्तूप जापानी बौद्ध भिक्षु निचिदात्सु फूजी द्वारा निर्मित दुनिया के 80 शांति स्तूपों में से एक है। यहाँ तक एरियल रोपवे या सीढ़ियों द्वारा पहुंचा जा सकता है। इसमें भगवान बुद्ध की चार स्वर्णिम प्रतिमाएं स्थापित हैं।",
    historical_significance: "Erected in 1969 to commemorate 2,500 years of the teachings of Lord Buddha on Griddhakuta (Vulture Peak) where the Lotus Sutra was delivered.",
    historical_significance_hi: "1969 में भगवान बुद्ध के 2,500वें परिनिर्वाण वर्ष के उपलक्ष्य में निर्मित; यहीं पास में गृद्धकूट पर्वत है जहाँ बुद्ध ने सद्धर्मपुण्डरीक सूत्र का उपदेश दिया था।",
    coordinates: { lat: 25.0044, lng: 85.4419 },
    google_maps_url: "https://maps.google.com/?q=25.0044,85.4419",
    visiting_duration: "2 - 3 Hours",
    visiting_duration_hi: "2 - 3 घंटे",
    opening_hours: "09:00 AM - 05:00 PM (Daily)",
    opening_hours_hi: "सुबह 09:00 से शाम 05:00 बजे तक (प्रतिदिन)",
    entry_fee: "Free Monument Entry; Aerial Ropeway round-trip: ₹100",
    entry_fee_hi: "स्तूप प्रवेश निःशुल्क; एरियल रोपवे दोनों तरफ का टिकट: ₹100",
    entry_type: "Free",
    family_friendly: true,
    accessibility: {
      wheelchair: false,
      notes: "Aerial ropeway provides scenic chairlift access; some steps at summit platform.",
      notes_hi: "रोपवे द्वारा ऊपर जाया जा सकता है; शिखर पर कुछ सीढ़ियां हैं।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-18",
      source: "Rajgir Peace Pagoda Committee & BSTDC"
    },
    travel_tips: [
      "Take the chairlift ropeway up and hike down via Griddhakuta (Vulture Peak) to visit Buddha's meditation caves.",
      "Listen to the serene beating of the Japanese peace drum (Taiko) at the adjoining temple."
    ],
    travel_tips_hi: [
      "रोपवे से ऊपर जाएं और नीचे उतरते समय गृद्धकूट पर्वत पर भगवान बुद्ध की ध्यान गुफाओं के दर्शन करें।",
      "जापानी बौद्ध मंदिर में शांति ड्रम (ताइको) की ध्वनि अवश्य सुनें।"
    ],
    nearby_attractions: ["Griddhakuta Peak", "Venu Vana", "Rajgir Glass Bridge", "Bimbisara Jail", "Brahma Kund Hot Springs"],
    best_season: "October to March",
    best_season_hi: "अक्टूबर से मार्च"
  },

  // 17. Kanwar Lake Bird Sanctuary (Kabartal), Begusarai
  {
    id: "kanwar-lake-bird-sanctuary",
    name: "Kanwar Lake Bird Sanctuary (Kabartal)",
    name_hi: "कांवर झील पक्षी अभयारण्य (काबरताल)",
    district_id: "begusarai",
    district_name: "Begusarai",
    district_name_hi: "बेगूसराय",
    category_slug: "nature",
    category: "Nature & Wildlife",
    category_hi: "प्रकृति एवं वन्यजीव",
    featured: false,
    rating: 4.5,
    reviews_count: 1800,
    image: "images/kanwar.jpg",
    gallery: [
      "images/kanwar.jpg"
    ],
    overview: "Covering 68 sq km, Kabartal (Kanwar Lake) is Asia's largest freshwater oxbow lake and Bihar's first internationally certified Ramsar Wetland Site. In winter, it becomes a mesmerizing haven for over 106 species of migratory birds flying from Siberia, Central Asia, and the Arctic.",
    overview_hi: "68 वर्ग किमी में फैली काबरताल (कांवर झील) एशिया की सबसे बड़ी मीठे पानी की गोखुर झील और बिहार का पहला अंतर्राष्ट्रीय रामसर आर्द्रभूमि स्थल है। सर्दियों में यहाँ साइबेरिया, मध्य एशिया और आर्कटिक से 106 से अधिक प्रजातियों के लाखों प्रवासी पक्षी आते हैं।",
    historical_significance: "Geologically formed by a meandering loop of the ancient Burhi Gandak River. Also home to the ancient Jayamangalagarh temple fortress ruins.",
    historical_significance_hi: "बूढ़ी गंडक नदी द्वारा निर्मित प्राकृतिक गोखुर झील; झील के मध्य स्थित जयमंगलागढ़ का प्राचीन शक्तिपीठ और किला।",
    coordinates: { lat: 25.6186, lng: 86.1364 },
    google_maps_url: "https://maps.google.com/?q=25.6186,86.1364",
    visiting_duration: "3 - 4 Hours",
    visiting_duration_hi: "3 - 4 घंटे",
    opening_hours: "06:00 AM - 05:00 PM (Daily)",
    opening_hours_hi: "सुबह 06:00 से शाम 05:00 बजे तक (प्रतिदिन)",
    entry_fee: "Free Entry (Country boat rides available through local fishermen)",
    entry_fee_hi: "निःशुल्क प्रवेश (मछुआरों द्वारा पारंपरिक नाव की सुविधा उपलब्ध)",
    entry_type: "Free",
    family_friendly: true,
    accessibility: {
      wheelchair: false,
      notes: "Natural wetland bunds and earthen paths.",
      notes_hi: "कच्चे तटबंध और प्राकृतिक पगडंडियाँ हैं।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-15",
      source: "Ramsar Convention & Department of Environment, Bihar"
    },
    travel_tips: [
      "Peak birdwatching season is November through February.",
      "Bring binoculars and high-zoom cameras to observe rare Siberian Cranes, bar-headed geese, and painted storks."
    ],
    travel_tips_hi: [
      "पक्षी दर्शन के लिए सबसे उत्तम समय नवंबर से फरवरी है।",
      "साइबेरियन क्रेन, बार-हेडेड गूज और पेंटेड स्टॉर्क देखने के लिए दूरबीन और कैमरा साथ लाएं।"
    ],
    nearby_attractions: ["Jayamangala Garh Temple", "Simariya Ganga Ghat", "Rashtrakavi Dinkar Smarak"],
    best_season: "November to February",
    best_season_hi: "नवंबर से फरवरी"
  },

  // 18. Barabar Caves, Jehanabad
  {
    id: "barabar-caves",
    name: "Barabar Caves",
    name_hi: "बराबर की गुफाएं",
    district_id: "jehanabad",
    district_name: "Jehanabad",
    district_name_hi: "जहानाबाद",
    category_slug: "historical",
    category: "Historical Monuments",
    category_hi: "ऐतिहासिक स्मारक",
    featured: true,
    rating: 4.7,
    reviews_count: 2600,
    image: "images/barabar.jpg",
    gallery: [
      "images/barabar.jpg"
    ],
    overview: "Carved into colossal monolithic granite boulders during the 3rd century BCE reign of Emperor Ashoka, the Barabar Caves are the oldest surviving rock-cut caves in India. The interiors feature astounding mirror-like granite polish and extraordinary acoustic resonance.",
    overview_hi: "ईसा पूर्व तीसरी शताब्दी में सम्राट अशोक के शासनकाल में विशाल ग्रेनाइट चट्टानों को काटकर बनाई गई बराबर की गुफाएं भारत की सबसे प्राचीन शैलकृत गुफाएं हैं। इनके भीतर की दीवारें दर्पण जैसी चिकनी पॉलिश और अद्भुत ध्वनि प्रतिध्वनि (इको) के लिए प्रसिद्ध हैं।",
    historical_significance: "Dedicated by Ashoka to the ascetic Ajivika sect. Served as the fictional 'Marabar Caves' in E.M. Forster's classic novel *A Passage to India*.",
    historical_significance_hi: "सम्राट अशोक द्वारा आजीवक संप्रदाय के मुनियों को समर्पित; ई.एम. फोर्स्टर के विश्वप्रसिद्ध उपन्यास 'ए पैसेज टू इंडिया' की माराबार गुफाएं इसी पर आधारित हैं।",
    coordinates: { lat: 25.0069, lng: 85.0617 },
    google_maps_url: "https://maps.google.com/?q=25.0069,85.0617",
    visiting_duration: "2 - 3 Hours",
    visiting_duration_hi: "2 - 3 घंटे",
    opening_hours: "06:00 AM - 05:00 PM (Daily)",
    opening_hours_hi: "सुबह 06:00 से शाम 05:00 बजे तक (प्रतिदिन)",
    entry_fee: "₹25 for Indians, ₹300 for Foreigners",
    entry_fee_hi: "भारतीयों के लिए ₹25, विदेशी पर्यटकों के लिए ₹300",
    entry_type: "Paid",
    family_friendly: true,
    accessibility: {
      wheelchair: false,
      notes: "Granite steps carved into the hill slope lead to cave entrances.",
      notes_hi: "पहाड़ी पर पत्थरों को काटकर बनाई गई सीढ़ियां हैं।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-16",
      source: "Archaeological Survey of India (ASI)"
    },
    travel_tips: [
      "Speak or chant gently inside the Lomas Rishi and Sudama caves to experience the magical, minutes-long echo.",
      "Trek up to the ancient Baba Siddhnath Shiva Temple atop Barabar Hill for a breathtaking view."
    ],
    travel_tips_hi: [
      "लोमस ऋषि और सुदामा गुफा के अंदर धीरे से कोई ध्वनि निकालें और अद्भुत प्रतिध्वनि का अनुभव करें।",
      "पहाड़ी की चोटी पर स्थित बाबा सिद्धनाथ मंदिर तक चढ़कर खूबसूरत दृश्य देखें।"
    ],
    nearby_attractions: ["Nagarjuni Caves (2 km)", "Kauva Dol Rock Carvings", "Gaya (32 km)", "Patna (48 km)"],
    best_season: "October to March",
    best_season_hi: "अक्टूबर से मार्च"
  },

  // 19. Pawapuri Jal Mandir, Nalanda
  {
    id: "pawapuri-jal-mandir",
    name: "Pawapuri Jal Mandir",
    name_hi: "पावापुरी जल मंदिर",
    district_id: "nalanda",
    district_name: "Nalanda",
    district_name_hi: "नालंदा",
    category_slug: "religious",
    category: "Religious & Spiritual",
    category_hi: "धार्मिक व आध्यात्मिक",
    featured: true,
    rating: 4.8,
    reviews_count: 5200,
    image: "images/pawapuri.jpg",
    gallery: [
      "images/pawapuri.jpg"
    ],
    overview: "Built in pristine white marble in the center of a lotus-filled water tank spanning 16 acres, Jal Mandir marks the sacred spot where Lord Mahavira, the 24th Tirthankara of Jainism, was cremated after attaining Nirvana in 527 BCE.",
    overview_hi: "कमल के फूलों से आच्छादित 16 एकड़ के विशाल सरोवर के ठीक बीचों-बीच संगमरमर से बना जल मंदिर वह परम पवित्र स्थल है जहाँ 527 ईसा पूर्व में जैन धर्म के 24वें तीर्थंकर भगवान महावीर का निर्वाण और अंतिम संस्कार हुआ था।",
    historical_significance: "Supreme pilgrimage destination for Jains globally; the vast lake was formed when millions of devotees collected ash and soil from Mahavira's funeral pyre.",
    historical_significance_hi: "जैन धर्म का परम पावन तीर्थ; मान्यता है कि भगवान महावीर के अंतिम संस्कार की भस्म व मिट्टी ले जाने से यहाँ विशाल सरोवर बन गया था।",
    coordinates: { lat: 25.0931, lng: 85.5342 },
    google_maps_url: "https://maps.google.com/?q=25.0931,85.5342",
    visiting_duration: "1.5 - 2 Hours",
    visiting_duration_hi: "1.5 - 2 घंटे",
    opening_hours: "06:00 AM - 08:30 PM (Daily)",
    opening_hours_hi: "सुबह 06:00 से रात 08:30 बजे तक (प्रतिदिन)",
    entry_fee: "Free Entry",
    entry_fee_hi: "निःशुल्क प्रवेश",
    entry_type: "Free",
    family_friendly: true,
    accessibility: {
      wheelchair: true,
      notes: "A 600-foot stone bridge connects the lakeshore to the marble temple in the center.",
      notes_hi: "सरोवर के तट से मंदिर तक 600 फीट लंबा पक्का पुल है जो व्हीलचेयर अनुकूल है।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-18",
      source: "Pawapuri Jain Swetambar / Digambar Prabandhak Committee"
    },
    travel_tips: [
      "Evening arti when lamps illuminate the shimmering white marble over the lake is mesmerizing.",
      "Visit Samosharan Mandir and Gaon Mandir nearby in Pawapuri."
    ],
    travel_tips_hi: [
      "शाम की आरती के समय जब पानी में मंदिर का प्रतिबिम्ब जगमगाता है, वह दृश्य अद्भुत होता है।",
      "पावापुरी में ही समवशरण मंदिर और गांव मंदिर के दर्शन भी करें।"
    ],
    nearby_attractions: ["Samosharan Mandir", "Nalanda University Ruins (16 km)", "Rajgir (28 km)", "Silao"],
    best_season: "October to March (Deepavali Mahavira Nirvana Mahotsav)",
    best_season_hi: "अक्टूबर से मार्च (दीपावली पर निर्वाण महोत्सव)"
  },

  // 20. Punaura Dham, Sitamarhi
  {
    id: "punaura-dham-sitamarhi",
    name: "Punaura Dham (Maa Janaki Janmasthali)",
    name_hi: "पुनौरा धाम (माता जानकी जन्मस्थली)",
    district_id: "sitamarhi",
    district_name: "Sitamarhi",
    district_name_hi: "सीतामढ़ी",
    category_slug: "religious",
    category: "Religious & Spiritual",
    category_hi: "धार्मिक व आध्यात्मिक",
    featured: true,
    rating: 4.8,
    reviews_count: 3600,
    image: "images/sitamarhi.jpg",
    gallery: [
      "images/sitamarhi.jpg"
    ],
    overview: "Located 5 km west of Sitamarhi town, Punaura Dham is revered in the Ramayana tradition as the sacred birthplace of Goddess Sita. The holy complex features the Sita Kund pond, Janaki temple, and ancient groves where King Janaka ploughed the field.",
    overview_hi: "सीतामढ़ी से 5 किमी पश्चिम में स्थित पुनौरा धाम रामायण काल से माता जानकी (सीता जी) की पावन प्राकट्य स्थली के रूप में पूजनीय है। यहाँ पवित्र सीता कुंड, जानकी मंदिर और वह भूमि है जहाँ राजा जनक ने हल चलाया था।",
    historical_significance: "Key node of the National Ramayana Circuit. Currently undergoing major pilgrimage infrastructure development by the Ministry of Tourism & Government of Bihar.",
    historical_significance_hi: "राष्ट्रीय रामायण सर्किट का मुख्य केंद्र; माता सीता की प्राकट्य स्थली।",
    coordinates: { lat: 26.6025, lng: 85.4594 },
    google_maps_url: "https://maps.google.com/?q=26.6025,85.4594",
    visiting_duration: "1.5 - 2 Hours",
    visiting_duration_hi: "1.5 - 2 घंटे",
    opening_hours: "05:00 AM - 08:30 PM (Daily)",
    opening_hours_hi: "सुबह 05:00 से रात 08:30 बजे तक (प्रतिदिन)",
    entry_fee: "Free Entry",
    entry_fee_hi: "निःशुल्क प्रवेश",
    entry_type: "Free",
    family_friendly: true,
    accessibility: {
      wheelchair: true,
      notes: "Paved pathways surround the sanctum and Sita Kund.",
      notes_hi: "मंदिर और सीता कुंड के चारों ओर पक्के रास्ते हैं।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-18",
      source: "Bihar State Religious Trust Board & Tourism Dept"
    },
    travel_tips: [
      "Taste the famous Balushahi sweet of Runnisaidpur en route.",
      "Visit during Janaki Navami (Vaishakh Shukla Navami) for vibrant cultural and spiritual festivals."
    ],
    travel_tips_hi: [
      "रास्ते में रुन्नीसैदपुर की प्रसिद्ध बालूशाही का स्वाद अवश्य लें।",
      "जानकी नवमी के पावन पर्व पर यहाँ विशेष धार्मिक उत्सव आयोजित होते हैं।"
    ],
    nearby_attractions: ["Janaki Mandir Sitamarhi town", "Haleshwar Sthan", "Panth Pakar Banyan Tree", "Janakpur Nepal (45 km)"],
    best_season: "October to April (Janaki Navami in May)",
    best_season_hi: "अक्टूबर से अप्रैल (मई में जानकी नवमी)"
  },

  // 21. Mandar Hill, Banka
  {
    id: "mandar-hill",
    name: "Mandar Hill (Mandar Parvat)",
    name_hi: "मंदार पर्वत, बांका",
    district_id: "banka",
    district_name: "Banka",
    district_name_hi: "बांका",
    category_slug: "adventure",
    category: "Adventure & Outdoors",
    category_hi: "रोमांच और ट्रैकिंग",
    featured: false,
    rating: 4.6,
    reviews_count: 2800,
    image: "images/mandar.jpg",
    gallery: [
      "images/mandar.jpg"
    ],
    overview: "Rising 700 feet as a solitary granite monolith in Banka, Mandar Hill is celebrated in Hindu puranas as the churning rod used by Gods and Demons during the cosmic churning of the ocean (Samudra Manthan). Equipped with a modern scenic ropeway, it hosts Jain shrines and Papaharini lake.",
    overview_hi: "बांका में 700 फीट की ऊंचाई पर स्थित मंदार पर्वत हिंदू पुराणों में समुद्र मंथन की मथनी के रूप में विख्यात है। यहाँ अब आधुनिक रोपवे की सुविधा उपलब्ध है। पर्वत की तलहटी में पापहरिणी सरोवर और शिखर पर जैन मंदिर स्थित हैं।",
    historical_significance: "Cosmic Samudra Manthan legends; Nirvan Sthal of 12th Jain Tirthankara Vasupujya; Gupta-era rock carvings.",
    historical_significance_hi: "समुद्र मंथन की पौराणिक मान्यता; 12वें जैन तीर्थंकर भगवान वासुपूज्य की निर्वाण स्थली; गुप्तकालीन शैल मूर्तियां।",
    coordinates: { lat: 24.8398, lng: 87.0264 },
    google_maps_url: "https://maps.google.com/?q=24.8398,87.0264",
    visiting_duration: "3 - 4 Hours",
    visiting_duration_hi: "3 - 4 घंटे",
    opening_hours: "06:00 AM - 05:30 PM (Daily; Ropeway 08:30 AM - 05:00 PM)",
    opening_hours_hi: "सुबह 06:00 से शाम 05:30 बजे तक (रोपवे 08:30 से 05:00)",
    entry_fee: "Free Hill Entry; Ropeway round trip: ₹100",
    entry_fee_hi: "पर्वत प्रवेश निःशुल्क; रोपवे दोनों तरफ का किराया: ₹100",
    entry_type: "Free",
    family_friendly: true,
    accessibility: {
      wheelchair: false,
      notes: "Modern ropeway transports visitors to the summit effortlessly.",
      notes_hi: "आधुनिक केबल कार (रोपवे) द्वारा शिखर तक आसानी से पहुंचा जा सकता है।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-14",
      source: "Banka District Tourism Promotion Council"
    },
    travel_tips: [
      "Take the ropeway up for panoramic views of the green plains and Papaharini lake.",
      "Every Makar Sankranti (mid-January), the massive Bounsi Mela takes place at the foothills."
    ],
    travel_tips_hi: [
      "रोपवे से ऊपर जाते समय पापहरिणी सरोवर का सुंदर विहंगम दृश्य देखें।",
      "हर वर्ष मकर संक्रांति पर तलहटी में प्रसिद्ध बौंसी मेला आयोजित होता है।"
    ],
    nearby_attractions: ["Papaharini Lake", "Jain Temple at Mandar", "Bateshwar Sthan", "Bhagalpur Silk Markets (50 km)"],
    best_season: "October to March",
    best_season_hi: "अक्टूबर से मार्च"
  },

  // 22. Tutla Bhawani Waterfall & Valley, Rohtas
  {
    id: "tutla-bhawani",
    name: "Tutla Bhawani Waterfall & Valley",
    name_hi: "तुतला भवानी जलप्रपात एवं घाटी",
    district_id: "rohtas",
    district_name: "Rohtas",
    district_name_hi: "रोहतास",
    category_slug: "waterfalls",
    category: "Lakes & Waterfalls",
    category_hi: "झीलें व जलप्रपात",
    featured: true,
    rating: 4.8,
    reviews_count: 3900,
    image: "images/tutla-bhawani.jpg",
    gallery: [
      "images/tutla-bhawani.jpg"
    ],
    overview: "Hidden inside a breathtaking gorge of the Kaimur hills, Tutla Bhawani features a sparkling waterfall dropping over 200 feet down a sheer red cliff. Visitors walk across an iconic suspension hanging bridge spanning the river gorge to reach the ancient Maa Tutla Bhawani shrine.",
    overview_hi: "कैमूर पहाड़ियों की मनोहारी संकरी घाटी में स्थित तुतला भवानी 200 फीट की ऊंचाई से लाल चट्टानों से गिरता एक जादुई जलप्रपात है। श्रद्धालु नदी घाटी के ऊपर बने सस्पेंशन हैंगिंग ब्रिज (झूला पुल) से होकर माँ तुतला भवानी के प्राचीन मंदिर तक पहुंचते हैं।",
    historical_significance: "Contains 12th-century CE rock inscriptions of King Pratapadhavala of the Japila Nayaka dynasty.",
    historical_significance_hi: "12वीं सदी के राजा प्रतापदवल देव के प्राचीन शिलालेख यहाँ चट्टान पर अंकित हैं।",
    coordinates: { lat: 24.8761, lng: 83.8427 },
    google_maps_url: "https://maps.google.com/?q=24.8761,83.8427",
    visiting_duration: "2 - 3 Hours",
    visiting_duration_hi: "2 - 3 घंटे",
    opening_hours: "07:00 AM - 05:00 PM (Daily)",
    opening_hours_hi: "सुबह 07:00 से शाम 05:00 बजे तक (प्रतिदिन)",
    entry_fee: "₹20 Eco-tourism entry fee",
    entry_fee_hi: "₹20 ईको-पर्यटन प्रवेश शुल्क",
    entry_type: "Paid",
    family_friendly: true,
    accessibility: {
      wheelchair: false,
      notes: "Walkway across the suspension bridge is safe and equipped with high safety railings.",
      notes_hi: "झूला पुल सुरक्षित रेलिंग से सुसज्जित है।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-15",
      source: "Bihar Forest & Eco-Tourism Board"
    },
    travel_tips: [
      "The waterfall is in full majestic roar during and right after the monsoon (July - November).",
      "Combine with Rohtasgarh Fort and Sher Shah Suri tomb in Sasaram."
    ],
    travel_tips_hi: [
      "मानसून के समय और उसके तुरंत बाद (जुलाई से नवंबर) जलप्रपात का प्रवाह सबसे मनोहारी होता है।",
      "सासाराम में शेरशाह सूरी के मकबरे और रोहतासगढ़ किले के साथ यात्रा करें।"
    ],
    nearby_attractions: ["Dhuan Kund Waterfall", "Manjhar Kund", "Rohtasgarh Fort", "Sher Shah Tomb"],
    best_season: "July to February",
    best_season_hi: "जुलाई से फरवरी"
  },

  // 23. Bihar School of Yoga, Munger
  {
    id: "bihar-school-of-yoga",
    name: "Bihar School of Yoga (Ganga Darshan)",
    name_hi: "बिहार योग विद्यालय (गंगा दर्शन), मुंगेर",
    district_id: "munger",
    district_name: "Munger",
    district_name_hi: "मुंगेर",
    category_slug: "cultural",
    category: "Cultural & Heritage",
    category_hi: "संस्कृति और विरासत",
    featured: false,
    rating: 4.9,
    reviews_count: 3100,
    image: "images/bihar-school-of-yoga.jpg",
    gallery: [
      "images/bihar-school-of-yoga.jpg"
    ],
    overview: "Founded in 1963 by Swami Satyananda Saraswati atop a panoramic hillock overlooking the Ganges, Bihar School of Yoga is considered the world's premier center of classical yogic wisdom and research. It has trained millions of practitioners and researchers from over 100 countries.",
    overview_hi: "गंगा नदी के तट पर एक सुंदर पहाड़ी पर स्वामी सत्यानंद सरस्वती द्वारा 1963 में स्थापित बिहार योग विद्यालय विश्व में पारंपरिक योग शिक्षा और शोध का सर्वोच्च केंद्र माना जाता है। यहाँ 100 से अधिक देशों के योग साधक साधना करने आते हैं।",
    historical_significance: "First yoga university in the world to integrate ancient Vedic yoga traditions with modern scientific and medical validation.",
    historical_significance_hi: "विश्व का पहला योग संस्थान जिसने प्राचीन वैदिक योग परंपराओं को आधुनिक विज्ञान और चिकित्सा शोध के साथ जोड़ा।",
    coordinates: { lat: 25.3789, lng: 86.4718 },
    google_maps_url: "https://maps.google.com/?q=25.3789,86.4718",
    visiting_duration: "2 - 3 Hours (or residential courses)",
    visiting_duration_hi: "2 - 3 घंटे (या आवासीय कोर्स)",
    opening_hours: "09:00 AM - 12:00 PM & 02:00 PM - 05:00 PM (Prior permission required for retreats)",
    opening_hours_hi: "सुबह 09:00 से दोपहर 12:00 और दोपहर 02:00 से शाम 05:00",
    entry_fee: "Free Entry (Donations welcomed for ashram projects)",
    entry_fee_hi: "निःशुल्क प्रवेश (आश्रम सेवा प्रकल्पों हेतु ऐच्छिक दान)",
    entry_type: "Free",
    family_friendly: true,
    accessibility: {
      wheelchair: true,
      notes: "Paved pathways through serene ashram gardens.",
      notes_hi: "शांत आश्रम वाटिकाओं में पक्के रास्ते हैं।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-18",
      source: "Satyananda Yoga Global & BSTDC"
    },
    travel_tips: [
      "Strict silence and discipline are maintained throughout the sacred ashram premises.",
      "Explore the historic Munger Fort and Kastaharni Ghat on the Ganga while in Munger."
    ],
    travel_tips_hi: [
      "आश्रम परिसर में शांति और अनुशासन का पालन अनिवार्य है।",
      "मुंगेर प्रवास के दौरान ऐतिहासिक मुंगेर किला और कष्टहरणी घाट के भी दर्शन करें।"
    ],
    nearby_attractions: ["Munger Fort", "Kastaharni Ghat", "Chandika Sthan Shaktipeeth", "Bhimbandh Sanctuary"],
    best_season: "October to March",
    best_season_hi: "अक्टूबर से मार्च"
  },

  // 24. Ashokan Pillar & Relic Stupa, Vaishali
  {
    id: "vaishali-ashokan-pillar",
    name: "Ashokan Lion Pillar & Relic Stupa",
    name_hi: "अशोक स्तंभ एवं बुद्ध अस्थि स्तूप, वैशाली",
    district_id: "vaishali",
    district_name: "Vaishali",
    district_name_hi: "वैशाली",
    category_slug: "historical",
    category: "Historical Monuments",
    category_hi: "ऐतिहासिक स्मारक",
    featured: true,
    rating: 4.7,
    reviews_count: 5300,
    image: "images/vaishali-pillar.jpg",
    gallery: [
      "images/vaishali-pillar.jpg"
    ],
    overview: "Kolhua in Vaishali is one of the rare places in India where Emperor Ashoka's monolithic polished sandstone pillar stands complete with its majestic single Asiatic lion capital facing north towards Kushinagar. Beside it lies the sacred brick Stupa and Ramkund (Monkey Pond).",
    overview_hi: "वैशाली के कोल्हुआ में स्थित सम्राट अशोक का यह एकाश्म पॉलिशदार बलुआ पत्थर का स्तंभ भारत के उन दुर्लभ स्तंभों में से एक है जिसका सिंह शीर्ष पूरी तरह सुरक्षित है और इसका मुख कुशीनगर की ओर है। इसके पास ही पवित्र ईंटों का स्तूप और रामकुंड स्थित हैं।",
    historical_significance: "Marks the site where Lord Buddha preached his last sermon and announced his approaching Mahaparinirvana; monkeys offered honey to Buddha here.",
    historical_significance_hi: "उस पवित्र स्थल का प्रतीक जहाँ भगवान बुद्ध ने अपना अंतिम उपदेश दिया था और अपने महापरिनिर्वाण की घोषणा की थी; यहाँ वानरों ने बुद्ध को मधु भेंट किया था।",
    coordinates: { lat: 25.9961, lng: 85.1227 },
    google_maps_url: "https://maps.google.com/?q=25.9961,85.1227",
    visiting_duration: "2 - 3 Hours",
    visiting_duration_hi: "2 - 3 घंटे",
    opening_hours: "06:00 AM - 06:00 PM (Daily)",
    opening_hours_hi: "सुबह 06:00 से शाम 06:00 बजे तक (प्रतिदिन)",
    entry_fee: "₹25 for Indians, ₹300 for Foreigners, Free under 15",
    entry_fee_hi: "भारतीयों के लिए ₹25, विदेशियों के लिए ₹300, 15 साल से कम उम्र के बच्चों के लिए निःशुल्क",
    entry_type: "Paid",
    family_friendly: true,
    accessibility: {
      wheelchair: true,
      notes: "Paved pathways with ramps throughout the excavated garden complex.",
      notes_hi: "उद्यान परिसर में पक्के रास्ते और रैंप बने हुए हैं।"
    },
    verification: {
      status: "Verified",
      date: "2026-10-20",
      source: "Archaeological Survey of India (ASI)"
    },
    travel_tips: [
      "Visit the nearby Vaishali Archaeological Museum to see the sacred earthen pot that contained Buddha's holy bone relics.",
      "See the Vishwa Shanti Stupa erected by Japanese Buddhists beside the Coronation Tank (Abhishek Pushkarini)."
    ],
    travel_tips_hi: [
      "वैशाली पुरातत्व संग्रहालय में वह पावन पात्र देखें जिसमें भगवान बुद्ध के पवित्र अस्थि अवशेष प्राप्त हुए थे।",
      "अभिषेक पुष्करिणी के पास जापानी बौद्धों द्वारा निर्मित विश्व शांति स्तूप भी अवश्य देखें।"
    ],
    nearby_attractions: ["Vishwa Shanti Stupa Vaishali", "Abhishek Pushkarini", "Kundalpur (Mahavira Birthplace)", "Archaeological Museum"],
    best_season: "October to March",
    best_season_hi: "अक्टूबर से मार्च"
  },

  // 25. Saurath Sabha Gachhi, Madhubani
  {
    id: "saurath-sabha-gachhi",
    name: "Saurath Sabha Gachhi",
    name_hi: "सौराठ सभा गाछी",
    name_local: "सौराठ सभा गाछी (पंजी प्रबंध स्थल)",
    district_id: "madhubani",
    district_name: "Madhubani",
    district_name_hi: "मधुबनी",
    category_slug: "cultural",
    category: "Cultural & Heritage",
    category_hi: "संस्कृति और विरासत",
    featured: true,
    rating: 4.8,
    reviews_count: 2450,
    image: "images/madhubani.jpg",
    gallery: [
      "images/madhubani.jpg"
    ],
    overview: "Saurath Sabha Gachhi is a legendary 22-acre grove of sacred Peepal trees where, for over 700 years, Maithil Brahmins gather annually. Genealogists (Panjikars) consult centuries-old palm-leaf genealogical records (Panji) to verify lineages before finalizing marriages without dowry.",
    overview_hi: "सौराठ सभा गाछी 22 एकड़ में फैला प्राचीन पीपल वृक्षों का ऐतिहासिक बाग है जहाँ 700 वर्षों से अधिक समय से मैथिल समुदाय के लोग वार्षिक सभा में एकत्रित होते हैं। यहाँ पंजीकार प्राचीन ताड़पत्र वंशावलियों का मिलान कर बिना दहेज के शादियां तय करते हैं।",
    overview_local: "सौराठ सभा गाछी मिथिलाक 700 वर्ष पुरान ऐतिहासिक वैवाहिक सभा स्थल थिक। 22 एकड़ में पसरल पीपलक पावन गाछी में पंजीकार लोकनि ताड़पत्र पर लिखल प्राचीन वंशावली (पंजी) मिला क' बिना दहेजक विवाह तय करैत छथि।",
    historical_significance: "Instituted in the 14th century by King Harisingh Deva of the Karnat dynasty to preserve genealogical purity and eradicate dowry.",
    historical_significance_hi: "14वीं शताब्दी में कर्णाट वंश के राजा हरिसिंह देव द्वारा पंजी प्रथा और सामाजिक विवाह सुधार के लिए इसकी स्थापना की गई थी।",
    historical_significance_local: "14वीं सदी में कर्णाट वंशक प्रतापी राजा हरिसिंह देव द्वारा सामाजिक सुधार आ वंशावली संरक्षण लेल पंजी प्रबंध केर स्थापना कएल गेल छल।",
    what_is_special: "700-year-old open-air matrimonial parliament with unique handwritten palm-leaf genealogies (Panji Prabandh).",
    what_is_special_hi: "700 साल पुरानी खुली वैवाहिक संसद जहाँ ताड़पत्र पर हस्तलिखित प्राचीन वंशावली से विवाह संबंध तय होते हैं।",
    what_is_special_local: "700 वर्ष पुरान खुली वैवाहिक संसद जतय ताड़पत्र पर लिखल प्राचीन वंशावली सँ रक्त-संबंध जाँचि क' संबंध तय होइत अछि।",
    why_visit: "To witness one of humanity's oldest surviving scientific genealogical traditions and peaceful cultural gatherings.",
    why_visit_hi: "मानव इतिहास की सबसे प्राचीन जीवित वंशावली परंपरा और मिथिला की अनूठी सामाजिक विरासत को साक्षात देखने के लिए।",
    why_visit_local: "मानव सभ्यताक सभ सँ पुरान जीवित वंशावली परंपरा आ मिथिलाक गौरवशाली सामाजिक धरोहर केर साक्षात दर्शन लेल।",
    local_food: "Mithila Makhana Kheer, Madhubani Khaja, Tilkor Tarua, Mithila Paan",
    local_food_hi: "मिथिला मखाना खीर, मधुबनी का खाजा, तिलकोर का तरुआ, मिथिला मीठा पान",
    local_food_local: "मिथिलाक मखान खीर, मधुबनीक खाजा, तिलकोरक तरुआ, दही-चूड़ा आ मिथिलाक मीठ पान",
    coordinates: { lat: 26.3982, lng: 86.0421 },
    google_maps_url: "https://maps.google.com/?q=26.3982,86.0421",
    visiting_duration: "1.5 - 2 Hours",
    visiting_duration_hi: "1.5 - 2 घंटे",
    opening_hours: "06:00 AM - 07:00 PM (Daily)",
    opening_hours_hi: "सुबह 06:00 से शाम 07:00 बजे तक (प्रतिदिन)",
    entry_fee: "Free Entry",
    entry_fee_hi: "निःशुल्क प्रवेश",
    entry_type: "Free",
    family_friendly: true,
    accessibility: { wheelchair: true, notes: "Level rural pathways through grove", notes_hi: "परिसर में समतल रास्ते उपलब्ध हैं" },
    verification: { status: "Verified", date: "2026-10-18", source: "Mithila Heritage Trust & BSTDC" },
    travel_tips: ["Visit during Jyeshtha-Ashadh (June-July) to witness the live Saurath Sabha gathering", "Visit the adjacent historic Somnath Mahadev Temple"],
    travel_tips_hi: ["सौराठ सभा का जीवंत रूप देखने के लिए ज्येष्ठ-आषाढ़ (जून-जुलाई) के वार्षिक सभा काल में आएं", "परिसर में स्थित प्राचीन सोमनाथ महादेव मंदिर के दर्शन अवश्य करें"],
    nearby_attractions: ["Somnath Mahadev Temple", "Madhubani Town (6 km)", "Rajnagar Palace (14 km)"],
    best_season: "October to March (or June-July for Annual Sabha)",
    best_season_hi: "अक्टूबर से मार्च (या वार्षिक सभा हेतु जून-जुलाई)"
  },

  // 26. Uchaita Bhagwati Temple, Madhubani
  {
    id: "uchaita-bhagwati",
    name: "Uchaita Bhagwati Sthan (Kalidas Dih)",
    name_hi: "उचैठ भगवती स्थान (कालिदास डीह)",
    name_local: "उचैठ भगवती स्थान (कालिदासक सिद्धपीठ)",
    district_id: "madhubani",
    district_name: "Madhubani",
    district_name_hi: "मधुबनी",
    category_slug: "religious",
    category: "Religious & Spiritual",
    category_hi: "धार्मिक व आध्यात्मिक",
    featured: true,
    rating: 4.8,
    reviews_count: 3200,
    image: "images/mundeshwari.jpg",
    gallery: [
      "images/mundeshwari.jpg"
    ],
    overview: "Located on the serene banks of the sacred Thumne river in Benipatti, Uchaita Bhagwati is celebrated as the holy site where Goddess Durga blessed Mahakavi Kalidasa with unparalleled poetic genius and Sanskrit wisdom.",
    overview_hi: "बेनीपट्टी में पवित्र थुम्हने नदी के किनारे स्थित उचैठ भगवती स्थान वह पावन सिद्धपीठ है जहाँ भगवती दुर्गा ने महाकवि कालिदास की अगाध भक्ति से प्रसन्न होकर उन्हें साक्षात ज्ञान और कवित्व का वरदान दिया था।",
    overview_local: "बेनीपट्टी में थुम्हने नदीक तीर पर स्थित उचैठ भगवती पावन सिद्धपीठ थिक जतय भगवतीक वरदान सँ महामूर्ख कालिदास महान संस्कृत महाकवि बनलाह। एतय कालिदासक प्राचीन डीह आ भगवतीक जागृत मंदिर अछि।",
    historical_significance: "Associated with ancient Sanskrit literature and Mahakavi Kalidasa; holy shrine dedicated to Goddess Chhinnamasta / Durga.",
    historical_significance_hi: "संस्कृत साहित्य के सिरमौर महाकवि कालिदास की ज्ञान स्थली; यहाँ देवी छिन्नमस्तिका / दुर्गा की प्राचीन स्वयंभू मूर्ति पूजित है।",
    historical_significance_local: "महाकवि कालिदासक विद्या प्राप्ति स्थल; देवी छिन्नमस्तिका रूप में भगवतीक स्वयंभू पावन विग्रह सदियों सँ पूजित अछि।",
    what_is_special: "Holy Kalidas Dih on riverbank where students and scholars seek blessings for academic excellence and wisdom.",
    what_is_special_hi: "थुम्हने नदी तट पर स्थित कालिदास डीह जहाँ विद्यार्थी और साहित्यकार विद्या व बुद्धि की प्राप्ति के लिए शीश नवाते हैं।",
    what_is_special_local: "थुम्हने नदीक पावन कछार पर कालिदासक डीह जतय विद्या, बुद्धि आ ज्ञान प्राप्तिक लेल श्रद्धालु माथ नवाबैत छथि।",
    why_visit: "To experience profound spiritual tranquility where ancient India's greatest poet attained literary immortality.",
    why_visit_hi: "उस पवित्र तपोभूमि का दर्शन करने के लिए जहाँ भारत के महानतम महाकवि कालिदास को ज्ञान का प्रकाश मिला।",
    why_visit_local: "ओहि पवित्र तपोभूमिक दर्शन लेल जतय भारतक महानतम कवि कालिदास केँ ज्ञानक आलोक प्राप्त भेल छल।",
    local_food: "Uchaita Peda, Mithila Makhana, Dal Pitha, Dahi Chura",
    local_food_hi: "उचैठ का प्रसिद्ध पेड़ा, मिथिला मखाना, दाल पीठा, दही-चूड़ा",
    local_food_local: "उचैठक प्रसिद्ध पेड़ा, मिथिलाक मखान, दाल पीठा आ मालभोग केलाक संग दही-चूड़ा",
    coordinates: { lat: 26.4678, lng: 85.9189 },
    google_maps_url: "https://maps.google.com/?q=26.4678,85.9189",
    visiting_duration: "1.5 - 2 Hours",
    visiting_duration_hi: "1.5 - 2 घंटे",
    opening_hours: "05:00 AM - 08:30 PM (Daily)",
    opening_hours_hi: "सुबह 05:00 से रात 08:30 बजे तक (प्रतिदिन)",
    entry_fee: "Free Entry",
    entry_fee_hi: "निःशुल्क प्रवेश",
    entry_type: "Free",
    family_friendly: true,
    accessibility: { wheelchair: true, notes: "Ramps available to main temple sanctum", notes_hi: "मंदिर प्रांगण में रैंप सुविधा उपलब्ध है" },
    verification: { status: "Verified", date: "2026-10-18", source: "Bihar State Religious Trust Board" },
    travel_tips: ["Sit by the peaceful Thumne riverbank behind the temple for meditation", "Perform puja for students before major examinations"],
    travel_tips_hi: ["मंदिर के पीछे शांत थुम्हने नदी के घाट पर ध्यान और शांति का अनुभव करें", "विद्यार्थियों के अध्ययन और परीक्षाओं में सफलता हेतु यहाँ विशेष पूजा की जाती है"],
    nearby_attractions: ["Benipatti Market", "Bhavanipur (18 km)", "Madhubani Town (22 km)"],
    best_season: "October to March",
    best_season_hi: "अक्टूबर से मार्च"
  },

  // 27. Rajnagar Palace Complex & Navlakha Palace, Madhubani
  {
    id: "rajnagar-palace-ruins",
    name: "Rajnagar Palace Complex & Navlakha Palace",
    name_hi: "राजनगर राज परिसर एवं नौलखा महल",
    name_local: "राजनगर राज परिसर आ नौलखा महल (दरभंगा राज)",
    district_id: "madhubani",
    district_name: "Madhubani",
    district_name_hi: "मधुबनी",
    category_slug: "historical",
    category: "Historical Monuments",
    category_hi: "ऐतिहासिक स्मारक",
    featured: true,
    rating: 4.7,
    reviews_count: 2890,
    image: "images/rajnagar-palace.jpg",
    gallery: [
      "images/rajnagar-palace.jpg"
    ],
    overview: "Built in the late 19th century by Maharaja Rameshwar Singh of Darbhanga Raj, Rajnagar features the majestic white marble Goddess Kali Temple, Durga Temple, massive elephant stables (Hathighar), and the ruins of Navlakha Palace on the Kamla river.",
    overview_hi: "दरभंगा राज के महाराजा रामेश्वर सिंह द्वारा 19वीं सदी के अंत में निर्मित राजनगर राज परिसर में श्वेत संगमरमर का अलौकिक माँ काली मंदिर, दुर्गा मंदिर, विशाल हाथीघर और कमला नदी के तट पर नौलखा महल के ऐतिहासिक खंडहर स्थित हैं।",
    overview_local: "दरभंगा राजक महाराजा रामेश्वर सिंह द्वारा निर्मित राजनगर परिसर एक स्वप्निल राजसी राजधानी छल। एतय संगमरमरक भव्य माँ काली मंदिर, दुर्गा मंदिर, विशाल हथिघर आ कमला नदीक तट पर नौलखा महलक ऐतिहासिक खंडहर स्थित अछि।",
    historical_significance: "Grand architectural jewel of Darbhanga Raj; withstood the massive 1934 Bihar earthquake whose scars add romantic drama to the regal palace ruins.",
    historical_significance_hi: "दरभंगा राज की स्थापत्य कला का अनुपम नमूना; 1934 के भूकंप के बावजूद इसके संगमरमर के मंदिर और मेहराब आज भी शान से खड़े हैं।",
    historical_significance_local: "दरभंगा राजक वास्तुकलाक अद्भुत नमूना; 1934 क भीषण भूकंपक बादो एकर संगमरमरक काली मंदिर आ भव्य मेहराब अद्यापि सीना तानि क' ठाढ़ अछि।",
    what_is_special: "Exquisite carved white marble Kali temple sitting unharmed amidst palatial royal ruins and picturesque Kamla river.",
    what_is_special_hi: "भव्य राजसी खंडहरों के बीच संगमरमर का अद्वितीय नक्काशीदार माँ काली मंदिर और शांत कमला नदी का किनारा।",
    what_is_special_local: "राजसी महलक खंडहरक बीचे संगमरमरक नक्काशीदार माँ काली मंदिर, पोखरि आ शांत कमला नदीक तट।",
    why_visit: "For photography, history lovers, and marveling at the royal grandeur and temple craftsmanship of the Darbhanga kings.",
    why_visit_hi: "शाही वास्तुकला, फोटोग्राफी और दरभंगा महाराज की भव्य विरासत को करीब से जानने के लिए।",
    why_visit_local: "फोटोग्राफी, इतिहास प्रेम आ दरभंगा महाराजक राजसी ठाठ-बाट एवं मंदिर शिल्पकला देखय लेल।",
    local_food: "Rajnagar Makhana, Balushahi, Belgrami, Sattu Sharbat",
    local_food_hi: "राजनगर का मखाना, बालूशाही, बेलग्रामी, सत्तू शरबत",
    local_food_local: "राजनगरक कुरकुरा मखान, बालूशाही, बेलग्रामी आ ठंडक सत्तू शरबत",
    coordinates: { lat: 26.4172, lng: 86.1364 },
    google_maps_url: "https://maps.google.com/?q=26.4172,86.1364",
    visiting_duration: "2 - 3 Hours",
    visiting_duration_hi: "2 - 3 घंटे",
    opening_hours: "07:00 AM - 06:30 PM (Daily)",
    opening_hours_hi: "सुबह 07:00 से शाम 06:30 बजे तक (प्रतिदिन)",
    entry_fee: "Free Entry (Temple and palace compound)",
    entry_fee_hi: "निःशुल्क प्रवेश",
    entry_type: "Free",
    family_friendly: true,
    accessibility: { wheelchair: true, notes: "Paved compound pathways", notes_hi: "परिसर में पक्के रास्ते हैं" },
    verification: { status: "Verified", date: "2026-10-18", source: "Darbhanga Raj Trust & BSTDC" },
    travel_tips: ["Carry your camera as the palace arches and marble temple make stunning photo backdrops", "Visit around golden hour (4:30 PM - 6:00 PM)"],
    travel_tips_hi: ["फोटोग्राफी के शौकीन कैमरा जरूर साथ रखें; महलों के मेहराब और मंदिर शाम की धूप में बेहद खूबसूरत दिखते हैं", "शाम 4:30 से 6:00 बजे का समय सबसे सुंदर होता है"],
    nearby_attractions: ["Kali Mandir Rajnagar", "Kamla River Ghat", "Saurath (14 km)", "Madhubani Town (13 km)"],
    best_season: "October to March",
    best_season_hi: "अक्टूबर से मार्च"
  },

  // 28. Kapileshwar Mahadev Sthan, Madhubani
  {
    id: "kapileshwar-temple",
    name: "Kapileshwar Mahadev Temple, Rahika",
    name_hi: "कपलेश्वर महादेव स्थान, रहिका (मधुबनी)",
    name_local: "कपलेश्वर महादेव स्थान (महर्षि कपिलक तपोभूमि)",
    district_id: "madhubani",
    district_name: "Madhubani",
    district_name_hi: "मधुबनी",
    category_slug: "religious",
    category: "Religious & Spiritual",
    category_hi: "धार्मिक व आध्यात्मिक",
    featured: false,
    rating: 4.7,
    reviews_count: 2150,
    image: "images/mahabodhi.jpg",
    gallery: [
      "images/mahabodhi.jpg"
    ],
    overview: "Located 9 km from Madhubani in Rahika block, Kapileshwar Sthan is an ancient pilgrimage temple revered for its miraculous Shiva Lingam, believed to have been consecrated by Sage Kapila, the propounder of the Sankhya philosophy.",
    overview_hi: "मधुबनी से 9 किमी दूर रहिका में स्थित कपलेश्वर स्थान एक अति प्राचीन शिव तीर्थ है। मान्यता है कि इस स्वयंभू शिवलिंग की स्थापना सांख्य दर्शन के प्रणेता महर्षि कपिल ने की थी। यहाँ विशाल पवित्र सरोवर और शांत प्रांगण स्थित है।",
    overview_local: "मधुबनी सँ 9 किमी दूर रहिका में स्थित कपलेश्वर महादेव स्थान मिथिलाक परम पूजनीय शिव तीर्थ थिक। मान्यता अछि जे सांख्य दर्शनक प्रणेता महर्षि कपिल एतय शिवलिंगक स्थापना कएने छलाह। साओन आ महाशिवरात्रि पर लाखन श्रद्धालु जल चढ़बैत छथि।",
    historical_significance: "Attributed to Vedic sage Kapila; patronized by Darbhanga royal kings who constructed the present temple structures and holy tank.",
    historical_significance_hi: "वैदिक ऋषि कपिल की तपोस्थली; दरभंगा राजघराने द्वारा इसके वर्तमान मंदिर और विशाल सरोवर का जीर्णोद्धार कराया गया था।",
    historical_significance_local: "महर्षि कपिलक तपोस्थली; दरभंगा महाराज छत्र सिंह द्वारा एह मंदिर आ पावन सरोवरक भव्य निर्माण कराओल गेल छल।",
    what_is_special: "Sacred Shivalingam worshipped since ancient times, sacred pond for holy dips, and grand festive fervor during Shravan and Shivratri.",
    what_is_special_hi: "महर्षि कपिल द्वारा स्थापित पावन शिवलिंग, स्नान हेतु पवित्र सरोवर और सावन में कांवड़ियों का विशाल जनसैलाब।",
    what_is_special_local: "महर्षि कपिल द्वारा स्थापित चमत्कारी शिवलिंग, पावन पोखरि आ साओन में काँवरिया लोकनिक भक्ति भाव।",
    why_visit: "To experience serene Vedic temple spirituality and seek Lord Shiva's divine peace and blessings in Mithila.",
    why_visit_hi: "भगवान भोलेनाथ का जलाभिषेक करने, मानसिक शांति और मिथिला की प्राचीन शैव परंपरा के दर्शन के लिए।",
    why_visit_local: "भोलेनाथक जलाभिषेक, मनक शांति आ मिथिलाक प्राचीन शैव संस्कृतिक अनुभव लेल।",
    local_food: "Rahika Peda, Rabri, Litti Chokha, Sattu Sharbat",
    local_food_hi: "रहिका का पेड़ा, रबड़ी, लिट्टी चोखा, सत्तू शरबत",
    local_food_local: "रहिकाक पेड़ा, रबड़ी, सत्तू शरबत आ गरमा-गरम लिट्टी चोखा",
    coordinates: { lat: 26.3312, lng: 86.0124 },
    google_maps_url: "https://maps.google.com/?q=26.3312,86.0124",
    visiting_duration: "1 - 1.5 Hours",
    visiting_duration_hi: "1 - 1.5 घंटे",
    opening_hours: "05:00 AM - 09:00 PM (Daily)",
    opening_hours_hi: "सुबह 05:00 से रात 09:00 बजे तक (प्रतिदिन)",
    entry_fee: "Free Entry",
    entry_fee_hi: "निःशुल्क प्रवेश",
    entry_type: "Free",
    family_friendly: true,
    accessibility: { wheelchair: true, notes: "Easy access to temple courtyard", notes_hi: "मंदिर प्रांगण तक सुगम पहुंच" },
    verification: { status: "Verified", date: "2026-10-18", source: "Bihar State Religious Trust Board" },
    travel_tips: ["Mondays and Shravan month witness huge crowds; early morning visit is ideal for peaceful darshan", "Holy bath in the pond is considered auspicious"],
    travel_tips_hi: ["सोमवार और सावन मास में भारी भीड़ रहती है; शांत दर्शन के लिए सुबह 6 से 8 बजे के बीच आएं", "मंदिर सरोवर में स्नान को अत्यंत पुण्यकारी माना जाता है"],
    nearby_attractions: ["Madhubani Town (9 km)", "Jitwarpur Art Village (12 km)"],
    best_season: "October to March (or Shravan for devotees)",
    best_season_hi: "अक्टूबर से मार्च (या सावन मास)"
  },

  // 29. Bhavanipur Vidyapati Dham, Madhubani
  {
    id: "bhawanipur-vidyapati-dham",
    name: "Bhavanipur Vidyapati Dham (Ugna Mahadev)",
    name_hi: "भवानीपुर विद्यापति धाम (उगना महादेव)",
    name_local: "भवानीपुर उगना महादेव स्थान (विद्यापतिक पावन धाम)",
    district_id: "madhubani",
    district_name: "Madhubani",
    district_name_hi: "मधुबनी",
    category_slug: "cultural",
    category: "Cultural & Heritage",
    category_hi: "संस्कृति और विरासत",
    featured: false,
    rating: 4.8,
    reviews_count: 1980,
    image: "images/nalanda.jpg",
    gallery: [
      "images/nalanda.jpg"
    ],
    overview: "Bhavanipur is an immortal cultural shrine in Mithila where Lord Shiva, enchanted by the divine poetry and devotion of Mahakavi Vidyapati, incarnated on earth as a humble domestic servant named 'Ugna' to serve the poet.",
    overview_hi: "भवानीपुर मिथिला का वह अमर पावन धाम है जहाँ मैथिल कोकिल महाकवि विद्यापति की अनन्य भक्ति और मधुर पदावलियों से रीझकर स्वयं देवाधिदेव महादेव 'उगना' नामक घरेलू सेवक बनकर उनके घर रहे थे।",
    overview_local: "भवानीपुर मिथिलाक ओहि अमर धाम थिक जतय महाकवि विद्यापतिक अनन्य भक्ति सँ प्रसन्न भ' क' साक्षात भगवान शिव 'उगना' रूप में सेवक बनि क' रहलाह। एतय उगना महादेव मंदिर आ विद्यापतिक स्मृति स्थल स्थित अछि।",
    historical_significance: "14th-century epicenter of Maithili lyrical literature, Shiva bhakti, and the legendary bond between Mahakavi Vidyapati and Lord Shiva.",
    historical_significance_hi: "14वीं सदी के मैथिली साहित्य और शिव-भक्ति का केंद्र; यहाँ स्थित कुआं और शिवलिंग विद्यापति और उगना की अमर गाथा के साक्षी हैं।",
    historical_significance_local: "14वीं सदीक मैथिली साहित्य आ शिव-भक्तिक सर्वोच्च केंद्र; एतय स्थित प्राचीन कूप आ शिवलिंग विद्यापति-उगनाक अमर गाथाक साक्षी अछि।",
    what_is_special: "The historical well (Kuan) from which Ugna (Lord Shiva) drew water to quench Vidyapati's dying thirst, revealing his divine form.",
    what_is_special_hi: "वह ऐतिहासिक कुआं जहाँ उगना (शिव जी) ने अपनी जटा से जल निकालकर प्यास से व्याकुल विद्यापति को पिलाया और अपना वास्तविक स्वरूप प्रकट किया।",
    what_is_special_local: "ओहि ऐतिहासिक कूप (इनार) जतय उगना (भगवान शिव) जटा सँ गंगाजल काढ़ि क' विद्यापतिक प्यास बुझओलनि आ अपन दिव्य रूप देखओलनि।",
    why_visit: "To feel the soul-stirring romance of devotion and poetry where God himself served his human devotee.",
    why_visit_hi: "भक्ति और प्रेम की उस अनुपम पराकाष्ठा को महसूस करने जहाँ भगवान ने स्वयं अपने भक्त की सेवा की थी।",
    why_visit_local: "भक्ति आ प्रेमक ओहि अनुपम पराकाष्ठाक दर्शन लेल जतय ईश्वर स्वयं अपन भक्तक सेवा कएने छलाह।",
    local_food: "Bhavanipur Peda, Makhana Kheer, Dahi Chura, Mithila Paan",
    local_food_hi: "भवानीपुर का पेड़ा, मखाना खीर, दही-चूड़ा, मिथिला का मीठा पान",
    local_food_local: "भवानीपुरक पेड़ा, मखान खीर, दही-चूड़ा आ मिथिलाक प्रसिद्ध मीठ पान",
    coordinates: { lat: 26.2415, lng: 86.1102 },
    google_maps_url: "https://maps.google.com/?q=26.2415,86.1102",
    visiting_duration: "1 - 2 Hours",
    visiting_duration_hi: "1 - 2 घंटे",
    opening_hours: "06:00 AM - 08:00 PM (Daily)",
    opening_hours_hi: "सुबह 06:00 से शाम 08:00 बजे तक (प्रतिदिन)",
    entry_fee: "Free Entry",
    entry_fee_hi: "निःशुल्क प्रवेश",
    entry_type: "Free",
    family_friendly: true,
    accessibility: { wheelchair: true, notes: "Temple courtyard accessible", notes_hi: "मंदिर प्रांगण सुगम है" },
    verification: { status: "Verified", date: "2026-10-18", source: "Mithila Heritage Trust" },
    travel_tips: ["Recite or listen to Vidyapati's Shiva bhajans (Nachari & Maheshvani) at the temple", "Drink the holy sweet water of Ugna's well"],
    travel_tips_hi: ["मंदिर में विद्यापति के प्रसिद्ध शिव भजन (नचारी व महेशवाणी) का श्रवण करें", "उगना के पवित्र कूप का जल अवश्य ग्रहण करें"],
    nearby_attractions: ["Uchaita (18 km)", "Madhubani Town (16 km)", "Darbhanga (22 km)"],
    best_season: "October to March",
    best_season_hi: "अक्टूबर से मार्च"
  }
];

// Helper functions for destinations
function getDestinationById(id) {
  return BIHAR_DESTINATIONS.find(d => d.id === id);
}

function getDestinationsByCategory(categorySlug) {
  if (!categorySlug || categorySlug === 'all') return BIHAR_DESTINATIONS;
  return BIHAR_DESTINATIONS.filter(d => d.category_slug === categorySlug);
}

function getDestinationsByDistrict(districtId) {
  if (!districtId || districtId === 'all') return BIHAR_DESTINATIONS;
  return BIHAR_DESTINATIONS.filter(d => d.district_id === districtId);
}

