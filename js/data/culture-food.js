// Discover Local Bihar - Culture, Food, Art & Festivals Dataset

const BIHAR_FOOD = [
  {
    id: "litti-chokha",
    name: "Litti Chokha",
    name_hi: "लिट्टी चोखा",
    origin: "Statewide / Bhojpur & Magadh roots",
    origin_hi: "समग्र बिहार / भोजपुर व मगध",
    category: "Main Course",
    category_hi: "मुख्य भोजन",
    gi_status: "Traditional Culinary Heritage",
    gi_status_hi: "पारंपरिक पाक विरासत",
    description: "The soul of Bihari cuisine. Whole wheat dough balls stuffed with roasted gram flour (sattu) spiced with carom seeds, kalonji, green chilies, mustard oil, and herbs, traditionally baked over cow dung embers or charcoal, dipped generously in pure desi ghee, and served with smoky roasted eggplant, potato and tomato chokha.",
    description_hi: "बिहार का सबसे लोकप्रिय पारंपरिक व्यंजन। अजवाइन, मंगरैल, हरी मिर्च, सरसों तेल और मसालों से युक्त सत्तू भरी गेहूं के आटे की गोलियां, जो उपलों पर सेंकी जाती हैं, शुद्ध देसी घी में डुबोई जाती हैं और बैंगन-टमाटर-आलू के भुने हुए चोखे के साथ परोसी जाती हैं।",
    best_places: ["Patna (Maurya Lok, Digha Marine Drive)", "Bhojpur", "Gaya", "Sasaram"],
    best_places_hi: ["पटना (मौर्या लोक, मरीन ड्राइव)", "भोजपुर", "गया", "सासाराम"],
    image: "images/litti-chokha.jpg",
    tags: ["Vegetarian", "High Protein", "Iconic"]
  },
  {
    id: "silao-khaja",
    name: "Silao Khaja",
    name_hi: "सिलाव का खाजा",
    origin: "Silao, Nalanda",
    origin_hi: "सिलाव, नालंदा",
    category: "Sweet & Savory",
    category_hi: "पारंपरिक मिष्ठान",
    gi_status: "GI Tag Certified (Geographical Indication)",
    gi_status_hi: "जीआई टैग प्रमाणित",
    description: "A legendary 52-layered crispy delicacy with a history tracing back to the Buddhist era. Prepared from wheat flour, ghee, and pure spring water of Rajgir hills, deep-fried to crisp perfection and dipped lightly in warm sugar syrup. It received India's prestigious GI Tag in 2018.",
    description_hi: "बौद्ध काल से चली आ रही 52 परतों वाली कुरकुरी प्रसिद्ध मिठाई। राजगीर की पहाड़ियों के मीठे पानी, मैदा और शुद्ध घी से तैयार की जाने वाली यह अद्भुत मिठाई 2018 में भारत सरकार से जीआई टैग प्राप्त कर चुकी है।",
    best_places: ["Silao village (between Rajgir & Nalanda)", "Rajgir sweets street", "Patna"],
    best_places_hi: ["सिलाव (राजगीर व नालंदा के मध्य)", "राजगीर", "पटना"],
    image: "images/khaja.jpg",
    tags: ["GI Tagged", "Heritage", "Must Try"]
  },
  {
    id: "thekua",
    name: "Thekua / Khajuria",
    name_hi: "ठेकुआ / खजुरिया",
    origin: "Statewide / Chhath Puja Sacred Mahaprasad",
    origin_hi: "समग्र बिहार / छठ महापर्व का पावन प्रसाद",
    category: "Festive Sweet",
    category_hi: "त्योहारी मिष्ठान",
    gi_status: "Sacred Cultural Offering",
    gi_status_hi: "पवित्र सांस्कृतिक प्रसाद",
    description: "The supreme festive offering of Bihar during Chhath Puja. Hand-pressed into ornate wooden molds (Sancha) made of whole wheat flour, natural jaggery (gud) or sugarcane juice, green cardamom, fennel seeds, and grated dry coconut, then slowly fried in pure cow ghee to golden brown crispness.",
    description_hi: "छठ पूजा का सबसे पवित्र महाप्रसाद। गेहूं का आटा, शुद्ध गुड़, हरी इलायची, सौंफ और सूखे मेवे मिलाकर लकड़ी के सुंदर सांचों पर हाथ से दबाकर तैयार किया जाता है और शुद्ध गाय के घी में धीमी आंच पर तला जाता है।",
    best_places: ["Homemade during Chhath Puja", "Traditional Sweet Marts across Patna, Gaya, Muzaffarpur"],
    best_places_hi: ["छठ महापर्व के अवसर पर घर-घर", "पटना, गया, मुजफ्फरपुर के मिष्ठान भंडार"],
    image: "images/thekua.jpg",
    tags: ["Sacred", "Jaggery", "Festive"]
  },
  {
    id: "bihari-sattu",
    name: "Sattu Sharbat & Delicacies",
    name_hi: "सत्तू का शरबत और व्यंजन",
    origin: "Statewide",
    origin_hi: "समग्र बिहार",
    category: "Beverage & Superfood",
    category_hi: "पेय एवं सुपरफूड",
    gi_status: "Traditional Superfood",
    gi_status_hi: "पारंपरिक स्वास्थ्यवर्धक",
    description: "Roasted Bengal gram ground into a fine nutritional powerhouse flour. Enjoyed as a refreshing savory drink churned with chilled water, roasted cumin, black salt, fresh mint, green chili, and lemon juice; or as a sweet energizing cooler with crushed jaggery.",
    description_hi: "भुने हुए चने को पीसकर तैयार किया गया अत्यधिक पौष्टिक पारंपरिक आहार। इसे ठंडे पानी, भुना जीरा, काला नमक, पुदीना, हरी मिर्च और नींबू के साथ नमकीन शरबत के रूप में या गुड़ के साथ मीठे शरबत के रूप में पिया जाता है।",
    best_places: ["Every street corner in Bihar", "Ganga Path Patna", "Railway Stations"],
    best_places_hi: ["बिहार के हर नुक्कड़ पर", "गंगा पथ पटना", "रेलवे स्टेशन"],
    image: "images/sattu.jpg",
    tags: ["Healthy", "Gluten-Free", "Refreshing"]
  },
  {
    id: "mithila-makhana",
    name: "Mithila Makhana (Fox Nuts)",
    name_hi: "मिथिला मखाना (कमलगट्टा)",
    origin: "Mithila Region (Darbhanga, Madhubani)",
    origin_hi: "मिथिला क्षेत्र (दरभंगा, मधुबनी)",
    category: "Delicacy & Dessert",
    category_hi: "व्यंजन व मिष्ठान",
    gi_status: "GI Tag Certified (Geographical Indication)",
    gi_status_hi: "जीआई टैग प्रमाणित",
    description: "Bihar produces over 85% of the world's Gorgon nut / fox nuts (Makhana) from the sacred freshwater ponds of Mithila. Served as royal Makhana Kheer cooked in thickened milk with saffron, or spiced roasted crunchy snack.",
    description_hi: "विश्व के 85% से अधिक मखाने का उत्पादन मिथिला के पवित्र सरोवरों में होता है जिसे जीआई टैग प्राप्त है। इसकी स्वादिष्ट केसर युक्त मखाना खीर और रोस्टेड क्रंची नमकीन अत्यंत लोकप्रिय हैं।",
    best_places: ["Darbhanga", "Madhubani", "Patna"],
    best_places_hi: ["दरभंगा", "मधुबनी", "पटना"],
    image: "images/makhana.jpg",
    tags: ["GI Tagged", "Superfood", "Royal"]
  },
  {
    id: "shahi-litchi",
    name: "Shahi Litchi of Muzaffarpur",
    name_hi: "मुजफ्फरपुर की शाही लीची",
    origin: "Muzaffarpur",
    origin_hi: "मुजफ्फरपुर",
    category: "Fresh Seasonal Fruit",
    category_hi: "ताजा मौसमी फल",
    gi_status: "GI Tag Certified (Geographical Indication)",
    gi_status_hi: "जीआई टैग प्रमाणित",
    description: "Celebrated globally for its sweet aromatic pulp, rose aroma, and small seed size, Shahi Litchi of Muzaffarpur holds a coveted GI tag. Freshly harvested in May and June, it is celebrated as the queen of summer fruits.",
    description_hi: "अपने अत्यंत रसीले, सुगंधित गूदे और छोटे बीज के लिए दुनिया भर में मशहूर मुजफ्फरपुर की शाही लीची जीआई टैग प्रमाणित है। मई-जून में इसका स्वाद स्वर्गिक होता है।",
    best_places: ["Muzaffarpur Orchards", "Local Fruit Mandis in May-June"],
    best_places_hi: ["मुजफ्फरपुर के लीची बागान", "मई-जून में फल मंडियां"],
    image: "images/shahi-litchi.jpg",
    tags: ["GI Tagged", "Summer", "Fruit"]
  },
  {
    id: "champaran-meat",
    name: "Champaran Ahuna Handi Mutton",
    name_hi: "चंपारण अहूना हांडी मटन",
    origin: "Bettiah & Motihari (Champaran)",
    origin_hi: "बेतिया व मोतिहारी (चंपारण)",
    category: "Non-Vegetarian Specialty",
    category_hi: "पारंपरिक मांसाहारी व्यंजन",
    gi_status: "Iconic Regional Heritage",
    gi_status_hi: "प्रसिद्ध क्षेत्रीय व्यंजन",
    description: "Slow-cooked to perfection in sealed earthen clay pots (Handi) over low wood-charcoal embers. Marinated in mustard oil, whole garlic bulbs, and hand-pounded spices, with no water added—cooking entirely in its natural juices and clay aroma.",
    description_hi: "मिट्टी की हांडी को आटे से सील कर धीमी कोयले की आंच पर पकाया जाने वाला विश्व विख्यात व्यंजन। इसमें साबुत लहसुन की गांठें, शुद्ध सरसों का तेल और खड़े मसाले डाले जाते हैं और बिना पानी मिलाए यह धीमी आंच पर पकता है।",
    best_places: ["Motihari", "Bettiah", "Patna (Old Champaran Meat House)"],
    best_places_hi: ["मोतिहारी", "बेतिया", "पटना"],
    image: "images/champaran-meat.jpg",
    tags: ["Earthen Clay", "Spiced", "Signature"]
  },
  {
    id: "gaya-tilkut",
    name: "Gaya Tilkut & Anarsa",
    name_hi: "गया का तिलकुट और अनरसा",
    origin: "Gaya (Ramna Road)",
    origin_hi: "गया (रमना रोड)",
    category: "Winter Sweet",
    category_hi: "शीतकालीन मिष्ठान",
    gi_status: "Heritage Winter Delicacy",
    gi_status_hi: "पारंपरिक शीतकालीन मिठाई",
    description: "A signature winter specialty of Gaya crafted by pounding roasted white sesame seeds with boiled jaggery or sugar into feather-light crispy layers. Melt-in-the-mouth crispiness paired with Anarsa (rice flour and khoya sweet).",
    description_hi: "गया का विश्व प्रसिद्ध शीतकालीन व्यंजन जो भुने तिल और गुड़ या चीनी को कूटकर एकदम कुरकुरा बनाया जाता है। मुंह में घुल जाने वाला तिलकुट और अनरसा मकर संक्रांति पर विशेष रूप से खाया जाता है।",
    best_places: ["Ramna Road & Tekari Road Gaya", "Patna"],
    best_places_hi: ["रमना रोड और टिकारी रोड, गया", "पटना"],
    image: "images/tilkut.jpg",
    tags: ["Winter", "Sesame", "Crisp"]
  }
];

const BIHAR_ARTS_CRAFTS = [
  {
    id: "madhubani-painting",
    name: "Madhubani (Mithila) Art",
    name_hi: "मधुबनी (मिथिला) चित्रकला",
    region: "Mithila (Madhubani, Darbhanga)",
    region_hi: "मिथिला (मधुबनी, दरभंगा)",
    type: "Folk Painting (GI Tagged)",
    type_hi: "लोक चित्रकला (जीआई टैग)",
    description: "Characterized by intricate line drawings, geometrical patterns, natural vegetable and mineral colors, and absence of empty spaces. Depicts Hindu deities, nature, weddings, and fertility symbols.",
    description_hi: "बारीक रेखांकन, ज्यामितीय आकृतियों और प्राकृतिक रंगों (फूलों, पत्तियों व खनिजों से निर्मित) से सजी चित्रकला। इसमें देवी-देवताओं, प्रकृति, विवाह और लोक जीवन का मनोहारी चित्रण होता है।",
    image: "images/madhubani.jpg"
  },
  {
    id: "manjusha-art",
    name: "Manjusha Art (Angika Art)",
    name_hi: "मंजूषा कला (अंगिका कला)",
    region: "Anga Region (Bhagalpur)",
    region_hi: "अंग क्षेत्र (भागलपुर)",
    type: "Scroll Painting",
    type_hi: "स्क्रॉल चित्रकला",
    description: "One of India's earliest sequential narrative arts, Manjusha art portrays the folklore of Bihula and Bishahari (snake deities) using primarily three distinctive colors: Pink, Green, and Yellow.",
    description_hi: "भारत की प्राचीन कथा-चित्रण कलाओं में से एक, जो सती बिहुला और मनसा देवी (विषहरी) की अमर लोकगाथा पर आधारित है। इसमें मुख्य रूप से गुलाबी, हरा और पीला रंग प्रयुक्त होता है।",
    image: "images/manjusha-art.jpg"
  },
  {
    id: "tikuli-art",
    name: "Tikuli Art",
    name_hi: "टिकुली कला",
    region: "Patna",
    region_hi: "पटना",
    type: "Lacquered Enamel Craft",
    type_hi: "लाह व एनामेल हस्तशिल्प",
    description: "An 800-year-old craft of Patna originally made from melted glass bindis (tikulis) adorned with pure gold leaf. Today rendered on treated wooden boards depicting Krishna leela and royal ceremonies.",
    description_hi: "पटना का लगभग 800 वर्ष पुराना दुर्लभ हस्तशिल्प जो कांच और सोने के वर्क वाली टिकुलियों से आरंभ हुआ था। आज यह लकड़ी के तख्तों पर खूबसूरत लोक छवियों के रूप में रचा जाता है।",
    image: "images/tikuli-art.jpg"
  },
  {
    id: "sikki-grass-craft",
    name: "Sikki Golden Grass Craft",
    name_hi: "सिक्की ग्रास क्राफ्ट (सुनहरी घास)",
    region: "North Bihar & Mithila",
    region_hi: "उत्तर बिहार एवं मिथिला",
    type: "Eco-Friendly Basketry & Sculptures",
    type_hi: "पर्यावरण अनुकूल टोकरी व शिल्प",
    description: "Wild golden grass (Sikki) harvested from riverbanks is woven by women artisans into breathtaking containers, boxes (Pauti), toys, and decorative idols.",
    description_hi: "नदियों के किनारे उगने वाली प्राकृतिक सुनहरी सिक्की घास से ग्रामीण महिलाओं द्वारा बुनी जाने वाली अत्यंत कलात्मक टोकरियां, डिब्बे (पौती) और कलाकृतियां।",
    image: "images/sikki-craft.jpg"
  },
  {
    id: "bhagalpuri-tussar-silk",
    name: "Bhagalpuri Tussar Silk",
    name_hi: "भागलपुरी टसर सिल्क",
    region: "Bhagalpur (The Silk City)",
    region_hi: "भागलपुर (सिल्क सिटी)",
    type: "Textile Weaving (GI Tagged)",
    type_hi: "रेशमी वस्त्र बुनाई (जीआई टैग)",
    description: "Celebrated for its unique golden-brown natural sheen, breathable texture, and handloom craftsmanship nurtured by weaver families over hundreds of years.",
    description_hi: "अपनी प्राकृतिक सुनहरी चमक, आरामदायक बनावट और सदियों पुराने हथकरघा बुनकरों के हुनर के लिए विख्यात भागलपुरी सिल्क दुनिया भर में प्रसिद्ध है।",
    image: "images/bhagalpur-silk.jpg"
  }
];

const BIHAR_FESTIVALS = [
  {
    id: "chhath-puja",
    name: "Chhath Mahaparv",
    name_hi: "छठ महापर्व",
    month: "Kartik (Oct / Nov) & Chaitra (March / April)",
    month_hi: "कार्तिक (अक्टूबर/नवंबर) एवं चैत्र (मार्च/अप्रैल)",
    significance: "The supreme solar festival of Bihar dedicated to Surya Dev and Chhathi Maiya, celebrated with unbroken fasting for 36 hours and offering Arghya at sunset and sunrise in waist-deep water.",
    significance_hi: "भगवान सूर्य और छठी मइया को समर्पित बिहार का सबसे बड़ा और पवित्रतम महापर्व। इसमें 36 घंटे का निर्जला व्रत रखा जाता है और अस्ताचलगामी व उदीयमान सूर्य को अर्घ्य दिया जाता है।",
    image: "images/chhath-puja.jpg"
  },
  {
    id: "sonepur-fair",
    name: "Sonepur Cattle Fair",
    name_hi: "सोनपुर मेला",
    month: "Kartik Purnima (November - December)",
    month_hi: "कार्तिक पूर्णिमा (नवंबर - दिसंबर)",
    significance: "Asia's largest ancient cultural, livestock, and trading fair held at the confluence of Ganga and Gandak rivers. Traces roots back to Emperor Chandragupta Maurya.",
    significance_hi: "गंगा और गंडक नदी के संगम पर आयोजित होने वाला एशिया का सबसे बड़ा पशु व सांस्कृतिक मेला, जिसका इतिहास सम्राट चंद्रगुप्त मौर्य के काल से जुड़ा है।",
    image: "images/sonepur-fair.jpg"
  },
  {
    id: "rajgir-mahotsav",
    name: "Rajgir Mahotsav",
    name_hi: "राजगीर महोत्सव",
    month: "Late November / December",
    month_hi: "नवंबर के अंत या दिसंबर में",
    significance: "Grand carnival of classical dance, vocal concerts, traditional theater, wrestling, and crafts amidst the scenic background of ancient Rajgir hills.",
    significance_hi: "राजगीर की ऐतिहासिक पहाड़ियों की पृष्ठभूमि में आयोजित होने वाला शास्त्रीय संगीत, नृत्य, नाटक, खेल और हस्तशिल्प का भव्य राज्य उत्सव।",
    image: "images/rajgir-mahotsav.jpg"
  },
  {
    id: "pitrapaksha-mela",
    name: "Pitrapaksha Mela, Gaya",
    name_hi: "पितृपक्ष मेला, गया",
    month: "Ashwin (September - October)",
    month_hi: "आश्विन कृष्ण पक्ष (सितंबर - अक्टूबर)",
    significance: "Millions of devotees congregate along the sacred Falgu river and Vishnupad temple to perform Pind Daan rituals for the salvation of their ancestors.",
    significance_hi: "लाखों श्रद्धालु अपने पूर्वजों की आत्मा की शांति और मोक्ष के लिए पवित्र फल्गु नदी के तट और विष्णुपद मंदिर में पिंडदान व तर्पण करते हैं।",
    image: "images/pitrapaksha-mela.jpg"
  },
  {
    id: "sama-chakeba",
    name: "Sama Chakeba",
    name_hi: "सामा चकेवा",
    month: "Kartik Shukla Saptami to Kartik Purnima (November)",
    month_hi: "कार्तिक शुक्ल सप्तमी से पूर्णिमा (नवंबर)",
    significance: "A heartwarming Mithila festival celebrating the divine bond between brother and sister with colorful clay figurines, folk songs, and nocturnal rituals.",
    significance_hi: "मिथिला का पारंपरिक लोकपर्व जो भाई-बहन के पवित्र प्रेम और स्नेह को दर्शाता है। इसमें मिट्टी की सुंदर मूर्तियां बनाई जाती हैं और पारंपरिक लोकगीत गाए जाते हैं।",
    image: "images/sama-chakeba.jpg"
  }
];

// ==========================================================
// 4. WORLD'S FIRST FROM BIHAR (PRD Cultural Dimension)
// ==========================================================
const BIHAR_WORLDS_FIRST = [
  {
    id: "first-republic",
    title: "World's First Republic (Birthplace of Democracy)",
    title_hi: "विश्व का प्रथम गणतंत्र (लोकतंत्र की जन्मभूमि)",
    place: "Vaishali (Licchavi Republic)",
    place_hi: "वैशाली (लिच्छवि गणराज्य)",
    era: "6th Century BCE",
    era_hi: "छठी शताब्दी ईसा पूर्व",
    icon: "🗳️",
    badge: "Origin of Democracy",
    badge_hi: "लोकतंत्र की आदिभूमि",
    description: "Centuries before ancient Athens, the Licchavis of Vaishali instituted the world's first democratic assembly (Sansthagara) where elected representatives deliberated state matters and voted through voting sticks (Salakas).",
    description_hi: "प्राचीन एथेंस से सदियों पूर्व, वैशाली के लिच्छवियों ने विश्व की पहली लोकतांत्रिक सभा (संस्थागार) की स्थापना की जहाँ निर्वाचित प्रतिनिधि मतदान शलाकाओं द्वारा निर्णय लेते थे।",
    quote: "Lord Buddha said of Vaishali: 'As long as they meet in harmony and deliberate in unity, they can never be conquered.'"
  },
  {
    id: "first-university",
    title: "World's First Residential University",
    title_hi: "विश्व का प्रथम अंतरराष्ट्रीय आवासीय विश्वविद्यालय",
    place: "Nalanda Mahavihara",
    place_hi: "नालंदा महाविहार",
    era: "5th to 12th Century CE",
    era_hi: "5वीं से 12वीं शताब्दी ईस्वी",
    icon: "🏛️",
    badge: "Cradle of Higher Learning",
    badge_hi: "वैश्विक ज्ञान केंद्र",
    description: "Nalanda housed 10,000 students and 2,000 scholars from China, Korea, Japan, Persia, and Tibet studying Astronomy, Mathematics, Philosophy, Logic, and Medicine with 100% free tuition, food, and lodging.",
    description_hi: "नालंदा में चीन, कोरिया, जापान, फारस और तिब्बत से आए 10,000 छात्रों को 2,000 विद्वान प्राध्यापक खगोल, गणित, दर्शन और आयुर्वेद की निःशुल्क शिक्षा, आवास और भोजन प्रदान करते थे।",
    quote: "Its 9-story library 'Dharmaganja' held over 9 million hand-copied manuscripts."
  },
  {
    id: "invention-of-zero",
    title: "Invention of Zero (0) & Decimal System",
    title_hi: "शून्य (0) एवं दशमलव प्रणाली की खोज",
    place: "Taregna / Pataliputra",
    place_hi: "तरेगना / पाटलिपुत्र",
    era: "476–550 CE (Gupta Empire)",
    era_hi: "476–550 ईस्वी (गुप्त साम्राज्य)",
    icon: "🔢",
    badge: "Foundation of Modern Science",
    badge_hi: "आधुनिक विज्ञान की नींव",
    description: "Astronomer and mathematician Aryabhata introduced Zero as both a numeral and concept, computed Pi to 4 decimal places (3.1416), and accurately proved the Earth rotates on its own axis.",
    description_hi: "महान गणितज्ञ व खगोलशास्त्री आर्यभट्ट ने शून्य को संख्या व सिद्धांत के रूप में प्रस्तुत किया, पाई (π) का मान 3.1416 निकाला और सिद्ध किया कि पृथ्वी अपनी धुरी पर घूमती है।",
    quote: "Taregna (meaning 'counting stars') in Bihar was Aryabhata's astronomical observatory."
  },
  {
    id: "ahimsa-truth",
    title: "Birthplace of Ahimsa (Universal Compassion)",
    title_hi: "अहिंसा और सत्य की वैश्विक जन्मभूमि",
    place: "Bodh Gaya & Kundalpur (Vaishali)",
    place_hi: "बोधगया एवं कुंडलपुर (वैशाली)",
    era: "6th Century BCE",
    era_hi: "छठी शताब्दी ईसा पूर्व",
    icon: "🕊️",
    badge: "Universal Compassion",
    badge_hi: "करुणा व अहिंसा",
    description: "Both Lord Buddha (Bodh Gaya) and Lord Mahavira (Vaishali) pioneered the philosophy of Non-Violence (Ahimsa), Compassion (Karuna), and Universal Peace, transforming civilizational thought across the globe.",
    description_hi: "भगवान बुद्ध (बोधगया) और भगवान महावीर (वैशाली) ने 'अहिंसा परमो धर्मः' और विश्व बंधुत्व की अमर अवधारणा दी, जिसने संपूर्ण मानव सभ्यता को शांति की नई दिशा दी।",
    quote: "Emperor Ashoka adopted Buddhism in Bihar, renouncing warfare and spreading peace across Asia."
  },
  {
    id: "national-emblem",
    title: "Source of India's National Emblem & Flag Wheel",
    title_hi: "भारत का राष्ट्रीय प्रतीक एवं तिरंगे का धर्मचक्र",
    place: "Maurya Empire (Pataliputra / Sarnath)",
    place_hi: "मौर्य साम्राज्य (पाटलिपुत्र / लौरिया नंदनगढ़)",
    era: "3rd Century BCE",
    era_hi: "तीसरी शताब्दी ईसा पूर्व",
    icon: "🦁",
    badge: "Sovereign Heritage",
    badge_hi: "राष्ट्र गौरव",
    description: "The 4 Asiatic Lions with the Ashoka Chakra adopted as the National Emblem of India, and the 24-spoked wheel at the center of the Indian Tricolor flag originate from Emperor Ashoka's pillars.",
    description_hi: "भारत के तिरंगे के केंद्र में स्थित 24 तीलियों वाला 'अशोक चक्र' और भारत का राष्ट्रीय प्रतीक (चार सिंहों का स्तम्भ शीर्ष) मौर्य सम्राट अशोक की अमर देन हैं।",
    quote: "Satyameva Jayate (Truth Alone Triumphs) crowns this sovereign insignia."
  },
  {
    id: "first-yoga-university",
    title: "World's First Yoga University",
    title_hi: "विश्व का प्रथम योग विश्वविद्यालय",
    place: "Bihar Yoga Bharati, Munger",
    place_hi: "बिहार योग विद्यालय (गंगा दर्शन, मुंगेर)",
    era: "1963 / 1994 CE",
    era_hi: "1963 / 1994 ईस्वी",
    icon: "🧘",
    badge: "Ancient Science of Wellbeing",
    badge_hi: "योग विज्ञान पीठ",
    description: "Founded by Swami Satyananda Saraswati along the sacred Ganga in Munger, Bihar Yoga Bharati is the world's first university dedicated wholly to Yogic studies and scientific synthesis.",
    description_hi: "स्वामी सत्यानंद सरस्वती द्वारा मुंगेर में स्थापित बिहार योग भारती विश्व का पहला विश्वविद्यालय है जो योग विज्ञान, दर्शन और अनुसंधान को समर्पित है।",
    quote: "Munger has trained over 100,000 yoga teachers and students from more than 80 countries."
  },
  {
    id: "oldest-temple",
    title: "World's Oldest Functional Hindu Temple",
    title_hi: "विश्व का सबसे प्राचीन सक्रिय हिंदू मंदिर",
    place: "Mundeshwari Devi Temple, Kaimur",
    place_hi: "मुंडेश्वरी देवी मंदिर, कैमूर",
    era: "108 CE (1,918+ Years Active)",
    era_hi: "108 ईस्वी (1900+ वर्षों से निरंतर पूजित)",
    icon: "🕉️",
    badge: "Living Vedic Antiquity",
    badge_hi: "जीवंत वैदिक धरोहर",
    description: "Confirmed by the Archaeological Survey of India (ASI) with inscriptions dating back to 108 CE, the octagonal stone temple of Mundeshwari has had unbroken daily Vedic rituals for nearly two millennia.",
    description_hi: "भारतीय पुरातत्व सर्वेक्षण (ASI) के अनुसार 108 ईस्वी का यह अष्टकोणीय पाषाण मंदिर लगभग दो हजार वर्षों से निरंतर पूजा-अर्चना का दुनिया का सबसे प्राचीन सक्रिय धाम है।",
    quote: "Famous for its unique non-violent goat offering ritual (Ahimsa Bali) where the animal is revived unharmed."
  },
  {
    id: "first-rupee",
    title: "Pioneer of Modern Currency 'Rupiya' & GT Road",
    title_hi: "आधुनिक मुद्रा 'रुपया' एवं ग्रैंड ट्रंक रोड के प्रणेता",
    place: "Sasaram (Sher Shah Suri Empire)",
    place_hi: "सासाराम (शेरशाह सूरी साम्राज्य)",
    era: "1540–1545 CE",
    era_hi: "1540–1545 ईस्वी",
    icon: "🪙",
    badge: "Economic & Infrastructure Pioneer",
    badge_hi: "आर्थिक व बुनियादी ढांचा क्रांति",
    description: "Sultan Sher Shah Suri of Sasaram introduced the 178-grain silver coin named 'Rupiya' (the ancestor of modern Rupee) and built the 2,500 km Grand Trunk Road from Chittagong to Kabul with postal checkpoints (Dak Chowkis).",
    description_hi: "सासाराम के शेरशाह सूरी ने 178 ग्रेन चांदी का 'रुपया' सिक्का जारी किया (जो आज भारत की आधिकारिक मुद्रा है) और 2,500 किमी लंबी ऐतिहासिक ग्रैंड ट्रंक रोड का निर्माण कराया।",
    quote: "His administrative and revenue reforms laid the bedrock for the Mughal and British empires."
  }
];

// ==========================================================
// 5. LEGENDS & ICONS OF BIHAR (PRD Cultural Dimension)
// ==========================================================
const BIHAR_LEGENDS_ICONS = [
  {
    id: "ashoka",
    name: "Emperor Ashoka the Great",
    name_hi: "चक्रवर्ती सम्राट अशोक महान",
    title: "The Great Buddhist Emperor of India",
    title_hi: "भारत के महानतम चक्रवर्ती सम्राट",
    era: "304–232 BCE • Maurya Empire",
    era_hi: "304–232 ईसा पूर्व • मौर्य साम्राज्य",
    icon: "👑",
    achievements: "Ruled almost the entire Indian subcontinent from Pataliputra (Patna). Following the Kalinga War, renounced violence, propagated the moral code of Dhamma, and sent peace emissaries across Sri Lanka, Greece, and Southeast Asia.",
    achievements_hi: "पाटलिपुत्र से पूरे भारतीय उपमहाद्वीप पर शासन किया। कलिंग युद्ध के बाद हिंसा का त्याग कर धम्म का मार्ग अपनाया और श्रीलंका, यूनान व एशिया में शांति का संदेश भेजा।",
    legacy: "His lion capital and wheel of righteousness stand eternal on India's National Flag and Emblem."
  },
  {
    id: "chanakya",
    name: "Acharya Chanakya (Kautilya)",
    name_hi: "आचार्य चाणक्य (कौटिल्य / विष्णुगुप्त)",
    title: "Master Strategist & Political Philosopher",
    title_hi: "महान अर्थशास्त्री व राजनीतिज्ञ",
    era: "375–283 BCE • Pataliputra",
    era_hi: "375–283 ईसा पूर्व • पाटलिपुत्र",
    icon: "📜",
    achievements: "Unified India under Chandragupta Maurya to defeat the Nanda dynasty and Greek Seleucid forces. Authored the timeless masterwork 'Arthashastra' (treatise on economics and statecraft) and 'Chanakya Niti'.",
    achievements_hi: "चंद्रगुप्त मौर्य के साथ मिलकर अखंड भारत का निर्माण किया। राजनीति और अर्थशास्त्र के विश्वप्रसिद्ध ग्रंथ 'अर्थशास्त्र' और 'चाणक्य नीति' की रचना की।",
    legacy: "Regarded globally as the pioneer of political science and modern strategic doctrine."
  },
  {
    id: "aryabhata",
    name: "Aryabhata",
    name_hi: "आर्यभट्ट",
    title: "Father of Indian Mathematics & Astronomy",
    title_hi: "भारतीय गणित व खगोल विज्ञान के जनक",
    era: "476–550 CE • Kusumapura (Patna)",
    era_hi: "476–550 ईस्वी • कुसुमपुर (पटना)",
    icon: "🔭",
    achievements: "Authored 'Aryabhatiya' at age 23. Formulated zero, solved quadratic equations, accurately deduced solar and lunar eclipses, and computed the Earth's circumference within 0.2% accuracy.",
    achievements_hi: "मात्र 23 वर्ष की आयु में 'आर्यभटीय' ग्रंथ रचा। शून्य की संकल्पना दी, सूर्य-चंद्र ग्रहण का वैज्ञानिक कारण बताया और पृथ्वी की परिधि की सटीक गणना की।",
    legacy: "India's first satellite launched into space in 1975 was named 'Aryabhata' in his honor."
  },
  {
    id: "buddha",
    name: "Gautama Buddha",
    name_hi: "भगवान गौतम बुद्ध",
    title: "The Awakened One & Founder of Buddhism",
    title_hi: "तथागत बुद्ध • बौद्ध धर्म के प्रवर्तक",
    era: "c. 563–483 BCE",
    era_hi: "छठी शताब्दी ईसा पूर्व",
    icon: "☸️",
    achievements: "Attained Supreme Enlightenment beneath the sacred Bodhi Tree in Bodh Gaya after 6 years of intense meditation. Preached the Four Noble Truths and the Noble Eightfold Path across Rajgir, Vaishali, and Nalanda.",
    achievements_hi: "बोधगया में बोधिवृक्ष के नीचे परम ज्ञान (बोधि) प्राप्त किया। राजगीर, वैशाली और नालंदा में चार आर्य सत्य और अष्टांगिक मार्ग का उपदेश देकर मानवता का उद्धार किया।",
    legacy: "His teachings of Compassion (Karuna), Mindfulness, and Middle Path inspire billions worldwide."
  },
  {
    id: "mahavira",
    name: "Bhagwan Mahavira",
    name_hi: "भगवान महावीर स्वामी",
    title: "24th Tirthankara of Jainism",
    title_hi: "जैन धर्म के 24वें तीर्थंकर",
    era: "599–527 BCE • Kundalpur (Vaishali)",
    era_hi: "599–527 ईसा पूर्व • वैशाली",
    icon: "✨",
    achievements: "Born into royalty in Vaishali, renounced wealth at 30, attained Kevala Jnana (omniscience), and codified the supreme principles of Ahimsa (Non-violence), Satya (Truth), and Anekantavada (Many-sided reality). Attained Moksha at Pawapuri.",
    achievements_hi: "वैशाली में जन्म, 30 वर्ष की आयु में राजपाट त्यागकर कठोर तप किया। अहिंसा, अपरिग्रह और अनेकांतवाद का अमर दर्शन दिया। पावापुरी के जलमंदिर में मोक्ष प्राप्त किया।",
    legacy: "The eternal symbol of absolute non-violence, self-restraint, and environmental harmony."
  },
  {
    id: "guru-gobind-singh",
    name: "Guru Gobind Singh Ji",
    name_hi: "दशमेश पिता गुरु गोबिंद सिंह जी",
    title: "Tenth Sikh Guru & Spiritual Warrior",
    title_hi: "सिखों के दसवें गुरु व खालसा के संस्थापक",
    era: "1666–1708 CE • Patna Sahib",
    era_hi: "1666–1708 ईस्वी • तख्त श्री पटना साहिब",
    icon: "⚔️",
    achievements: "Born in Patna (Takht Sri Patna Sahib), founded the Khalsa Panth in 1699, stood fearlessly against tyranny, and enshrined the eternal spiritual guidance into Guru Granth Sahib.",
    achievements_hi: "पटना की पावन धरती पर जन्म लिया। 1699 में खालसा पंथ की स्थापना की, अत्याचार के विरुद्ध धर्मयुद्ध लड़ा और 'सवा लाख से एक लड़ाऊं' का अमर संकल्प दिया।",
    legacy: "Celebrated worldwide for supreme sacrifice, valor, poetry, and universal equality."
  },
  {
    id: "rajendra-prasad",
    name: "Dr. Rajendra Prasad",
    name_hi: "देशरत्न डॉ. राजेन्द्र प्रसाद",
    title: "First President of the Republic of India",
    title_hi: "स्वतंत्र भारत के प्रथम राष्ट्रपति",
    era: "1884–1963 CE • Ziradei (Siwan)",
    era_hi: "1884–1963 ईस्वी • जीरादेई (सीवान)",
    icon: "🇮🇳",
    achievements: "Brilliant scholar with legendary memory, prominent freedom fighter alongside Mahatma Gandhi in the Champaran Satyagraha, President of the Constituent Assembly that framed India's Constitution, and served as President for 12 years (1950–1962).",
    achievements_hi: "जीरादेई, सीवान में जन्म। चंपारण सत्याग्रह में गांधीजी के प्रमुख सहयोगी, संविधान सभा के अध्यक्ष जिन्होंने भारतीय संविधान का निर्माण कराया और 12 वर्षों तक देश के प्रथम राष्ट्रपति रहे।",
    legacy: "Conferred the Bharat Ratna in 1962; remembered for saintly simplicity and intellectual brilliance."
  },
  {
    id: "bismillah-khan",
    name: "Ustad Bismillah Khan",
    name_hi: "भारत रत्न उस्ताद बिस्मिल्लाह खान",
    title: "Shehnai Maestro & Cultural Icon",
    title_hi: "शहनाई सम्राट व संगीत शिरोमणि",
    era: "1916–2006 CE • Dumraon (Buxar)",
    era_hi: "1916–2006 ईस्वी • डुमरांव (बक्सर)",
    icon: "🎶",
    achievements: "Elevated the humble folk Shehnai to international concert stages. Played live from the Red Fort on August 15, 1947, during India's Independence. Recipient of Bharat Ratna, Padma Vibhushan, Padma Bhushan, and Padma Shri.",
    achievements_hi: "डुमरांव (बक्सर) में जन्म। शहनाई को लोक वाद्यों से उठाकर विश्व मंच पर प्रतिष्ठित किया। 15 अगस्त 1947 को स्वतंत्रता के पावन अवसर पर लाल किले से शहनाई वादन किया।",
    legacy: "The embodiment of India's composite secular heritage and soul-stirring classical music."
  },
  {
    id: "dinkar",
    name: "Ramdhari Singh 'Dinkar'",
    name_hi: "राष्ट्रकवि रामधारी सिंह 'दिनकर'",
    title: "National Poet of India & Literary Titan",
    title_hi: "राष्ट्रकवि • ओज और पौरुष के अमर कवि",
    era: "1908–1974 CE • Simariya (Begusarai)",
    era_hi: "1908–1974 ईस्वी • सिमरिया (बेगूसराय)",
    icon: "✍️",
    achievements: "Penned roaring nationalist poetry that ignited the Indian freedom movement. Authored legendary epics 'Rashmirathi', 'Kurukshetra', 'Urvashi' (Jnanpith Award), and the historic cultural treatise 'Sanskriti ke Char Adhyay'.",
    achievements_hi: "सिमरिया (बेगूसराय) में जन्म। 'रश्मिरथी', 'कुरुक्षेत्र' और 'उर्वशी' (ज्ञानपीठ पुरस्कार) जैसे अमर ग्रंथों के रचयिता। 'सिंहासन खाली करो कि जनता आती है' जैसी ओजस्वी पंक्तियों से देश को जगाया।",
    legacy: "Revered as Rashtrakavi whose verses symbolize moral courage, righteousness, and Indian civilizational pride."
  },
  {
    id: "dashrath-manjhi",
    name: "Dashrath Manjhi (Mountain Man)",
    name_hi: "माउंटेन मैन दशरथ मांझी",
    title: "The Man Who Conquered a Mountain",
    title_hi: "पहाड़ का सीना चीरने वाले कर्मयोगी",
    era: "1929–2007 CE • Gehlaur (Gaya)",
    era_hi: "1929–2007 ईस्वी • गहलौर (गया)",
    icon: "⛏️",
    achievements: "Armed solely with a hammer and chisel, spent 22 years (1960–1982) single-handedly carving a 360-foot-long, 30-foot-wide path through the rugged Gehlaur Hills to reduce travel distance from 55 km to just 15 km for his village.",
    achievements_hi: "गहलौर (गया) के निवासी। केवल छेनी और हथौड़े से 22 वर्षों तक अकेले मेहनत करके कठोर पहाड़ को काटकर 360 फीट लंबा रास्ता बना दिया और गांव से अस्पताल की दूरी 55 किमी से घटाकर 15 किमी कर दी।",
    legacy: "His immortal words 'जब तक तोड़ेंगे नहीं, तब तक छोड़ेंगे नहीं' remain the global benchmark for human perseverance."
  }
];

// Export datasets globally for browser runtime
if (typeof window !== 'undefined') {
  window.BIHAR_FOOD = BIHAR_FOOD;
  window.BIHAR_ARTS_CRAFTS = BIHAR_ARTS_CRAFTS;
  window.BIHAR_FESTIVALS = BIHAR_FESTIVALS;
  window.BIHAR_WORLDS_FIRST = BIHAR_WORLDS_FIRST;
  window.BIHAR_LEGENDS_ICONS = BIHAR_LEGENDS_ICONS;
}


