// Discover Local Bihar - Travel Guide, Safety & Emergency Helplines

const TRAVEL_GUIDE_DATA = {
  emergency_helplines: [
    {
      service: "National Emergency Unified Helpline",
      service_hi: "राष्ट्रीय एकीकृत आपातकालीन हेल्पलाइन",
      number: "112",
      description: "Police, Fire, and Ambulance all-in-one emergency response across Bihar",
      description_hi: "पुलिस, अग्निशमन और एम्बुलेंस हेतु 24x7 अखिल भारतीय आपातकालीन नंबर",
      category: "police"
    },
    {
      service: "Bihar State Tourism Helpline",
      service_hi: "बिहार राज्य पर्यटन हेल्पलाइन (टोल-फ्री)",
      number: "1800-3456-112",
      description: "Official tourist assistance, destination queries, verified hotel & guide booking",
      description_hi: "आधिकारिक पर्यटन सहायता, स्थल जानकारी व अधिकृत गाइड बुकिंग",
      category: "tourism"
    },
    {
      service: "Medical Emergency Ambulance",
      service_hi: "चिकित्सा आपातकालीन एम्बुलेंस",
      number: "108",
      description: "Free 24x7 Government emergency medical ambulance service",
      description_hi: "निःशुल्क सरकारी आपातकालीन चिकित्सा एम्बुलेंस सेवा",
      category: "medical"
    },
    {
      service: "Women Helpline (Bihar)",
      service_hi: "महिला हेल्पलाइन (बिहार)",
      number: "181 / 1090",
      description: "Dedicated 24x7 helpline for women safety and emergency support",
      description_hi: "महिला सुरक्षा और आपातकालीन सहायता हेतु 24x7 समर्पित नंबर",
      category: "women"
    },
    {
      service: "Railway Passenger Helpline",
      service_hi: "रेलवे यात्री हेल्पलाइन",
      number: "139",
      description: "Security, medical aid, catering, and train inquiry across Indian Railways",
      description_hi: "भारतीय रेल सुरक्षा, चिकित्सा सहायता और ट्रेन पूछताछ सेवा",
      category: "railway"
    },
    {
      service: "Tourist Police Assistance (Patna & Gaya)",
      service_hi: "पर्यटक पुलिस सहायता (पटना एवं गया)",
      number: "+91 612 2225917",
      description: "Specialized tourist police units stationed at key heritage monuments",
      description_hi: "प्रमुख पर्यटन स्थलों पर तैनात विशेष पर्यटक पुलिस दस्ता",
      category: "tourism"
    }
  ],

  seasons: [
    {
      id: "winter",
      name: "Winter (October - March)",
      name_hi: "शीत ऋतु (अक्टूबर - मार्च)",
      badge: "Best Time to Visit",
      badge_hi: "भ्रमण का सर्वोत्तम समय",
      temp: "10°C - 25°C",
      summary: "Pleasant, cool, and crisp days with clear sunny skies. Ideal for exploring ancient ruins, wildlife sanctuaries, waterfalls, and cultural festivals.",
      summary_hi: "सुखद, ठंडा और धूपदार मौसम। ऐतिहासिक खंडहरों, राष्ट्रीय उद्यानों, जलप्रपातों और त्योहारों के भ्रमण हेतु सर्वोत्तम समय।"
    },
    {
      id: "monsoon",
      name: "Monsoon (July - September)",
      name_hi: "वर्षा ऋतु (जुलाई - सितंबर)",
      badge: "Lush & Waterfalls",
      badge_hi: "हरियाली व प्रपात",
      temp: "25°C - 33°C",
      summary: "Brings lush green foliage to Kaimur and Rohtas hills. Waterfalls like Kakolat and Tutla Bhawani are in full roaring glory. Check local rain alerts for riverine areas.",
      summary_hi: "कैमूर और रोहतास की पहाड़ियों में हरी चादर बिछ जाती है। ककोलत और तुतला भवानी जैसे झरने अपने पूरे वेग में होते हैं।"
    },
    {
      id: "summer",
      name: "Summer (April - June)",
      name_hi: "ग्रीष्म ऋतु (अप्रैल - जून)",
      badge: "Indoor & Morning",
      badge_hi: "प्रातःकालीन भ्रमण",
      temp: "28°C - 42°C",
      summary: "Warm to hot conditions with dry winds (Loo). Sightseeing is best planned in early morning hours (6 AM - 10 AM) or air-conditioned museums like Bihar Museum.",
      summary_hi: "मौसम गर्म रहता है। भ्रमण के लिए सुबह (6 से 10 बजे) या वातानुकूलित संग्रहालयों जैसे बिहार संग्रहालय की यात्रा उत्तम है।"
    }
  ],

  transport_guide: [
    {
      mode: "Airways",
      mode_hi: "वायु मार्ग",
      icon: "plane",
      details: "Jay Prakash Narayan Airport, Patna (PAT) connects major Indian cities. Darbhanga Airport (DHY) serves North Bihar with direct flights to Delhi, Mumbai, Bengaluru. Gaya International Airport (GAY) hosts international Buddhist flights during winter.",
      details_hi: "पटना हवाई अड्डा (PAT) देश के सभी प्रमुख शहरों से जुड़ा है। उत्तर बिहार के लिए दरभंगा हवाई अड्डा (DHY) और बौद्ध तीर्थयात्रियों के लिए गया अंतर्राष्ट्रीय हवाई अड्डा (GAY) कार्यरत है।"
    },
    {
      mode: "Railways",
      mode_hi: "रेल मार्ग",
      icon: "train",
      details: "Bihar has one of the densest railway networks in India under East Central Railway. Key terminals include Patna Junction, Rajgir, Gaya, Muzaffarpur, Darbhanga, Bhagalpur, Barauni, and Katihar. Vande Bharat Express connects Patna to Delhi, Ranchi, Howrah, and Varanasi.",
      details_hi: "बिहार में पूर्व मध्य रेल के अंतर्गत सघन रेल नेटवर्क है। पटना जंक्शन, राजगीर, गया, मुजफ्फरपुर, दरभंगा आदि प्रमुख स्टेशन हैं। वंदे भारत एक्सप्रेस से पटना दिल्ली, हावड़ा, रांची और वाराणसी से जुड़ा है।"
    },
    {
      mode: "Roadways & Buses",
      mode_hi: "सड़क मार्ग व बसें",
      icon: "bus",
      details: "Extensive 4-lane National Highways (NH-19 GT Road, NH-27 East-West Corridor, NH-31). Bihar State Road Transport Corporation (BSRTC) runs luxury electric and Volvo AC buses between Patna and all district headquarters.",
      details_hi: "चार लेन वाले राष्ट्रीय राजमार्ग और बिहार राज्य पथ परिवहन निगम (BSRTC) की आधुनिक इलेक्ट्रिक व वोल्वो बसें पटना से सभी 38 जिला मुख्यालयों तक चलती हैं।"
    },
    {
      mode: "Local Commute",
      mode_hi: "स्थानीय आवागमन",
      icon: "car",
      details: "App cabs (Ola, Uber) operate in Patna, Gaya, Muzaffarpur, and Darbhanga. E-rickshaws and auto-rickshaws are available in every town and district. Bike rentals and local tourist taxis are readily bookable.",
      details_hi: "पटना, गया और मुजफ्फरपुर में ओला-उबर उपलब्ध हैं। सभी जिलों में ई-रिक्शा और ऑटो प्रचुर मात्रा में चलते हैं।"
    }
  ],

  dos_and_donts: [
    {
      type: "do",
      text: "Do dress modestly when visiting sacred temples, gurudwaras, stupas, and mosques.",
      text_hi: "धार्मिक स्थलों, मंदिरों, गुरुद्वारों और स्तूपों में मर्यादित वस्त्र पहनें।"
    },
    {
      type: "do",
      text: "Do book certified guides authorized by Archaeological Survey of India (ASI) or BSTDC.",
      text_hi: "पुरातत्व सर्वेक्षण (एएसआई) या पर्यटन विभाग द्वारा अधिकृत गाइड ही लें।"
    },
    {
      type: "do",
      text: "Do stay hydrated with natural coconut water, sattu sharbat, or sealed bottled water.",
      text_hi: "सत्तू का शरबत, नारियल पानी और स्वच्छ जल का नियमित सेवन करें।"
    },
    {
      type: "dont",
      text: "Don't touch or deface ancient sculptures, frescoes, or monument walls.",
      text_hi: "प्राचीन मूर्तियों, भित्तिचित्रों या स्मारकों की दीवारों को न छुएं और न ही उन पर कुछ लिखें।"
    },
    {
      type: "dont",
      text: "Don't carry plastic bags or litter at wildlife sanctuaries and waterfalls.",
      text_hi: "वन्यजीव अभयारण्यों और जलप्रपातों पर प्लास्टिक का कचरा न फैलाएं।"
    },
    {
      type: "dont",
      text: "Don't ignore warning signs regarding deep waters at river ghats or waterfalls.",
      text_hi: "नदी घाटों या जलप्रपातों पर गहरे पानी के चेतावनी संकेतों की अनदेखी न करें।"
    }
  ]
};

