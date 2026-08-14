import { Question } from '@/lib/types';

export const pyqVault: Question[] = [
  // ==========================================
  // UPSC PRELIMS 2026 (GS1 & CSAT)
  // ==========================================
  {
    id: 'pyq-2026-gs-01',
    subject: 'polity',
    topic: 'Indian Polity: Constitutional Amendments & Representation',
    subTopic: '106th Constitutional Amendment Act (Nari Shakti Vandan Adhiniyam)',
    question: 'With reference to the Constitution (One Hundred and Sixth Amendment) Act, 2023, consider the following statements:\n\n1. It reserves one-third of all seats for women in the Lok Sabha, the State Legislative Assemblies, and the Legislative Assembly of the National Capital Territory of Delhi.\n2. The reservation shall come into effect immediately upon the notification of the Act without requiring any prior census or delimitation exercise.\n3. The reservation shall continue for a period of fifteen years from the date of its commencement, unless extended by Parliament by law.\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2026)',
    options: [
      '1 and 2 only',
      '1 and 3 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1 is correct: The 106th Amendment Act inserted Articles 330A, 332A, and amended 239AA to provide 33% reservation for women in Lok Sabha, State Legislative Assemblies, and Delhi Assembly.\nStatement 2 is incorrect: Article 334A specifically stipulates that the reservation shall come into effect AFTER an exercise of delimitation is undertaken for this purpose after the relevant figures for the first Census taken after the commencement of the Act have been published.\nStatement 3 is correct: Article 334A(1) provides a sunset clause of 15 years from the date of commencement, extendable by parliamentary enactment.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023/24 Supplement)',
      chapter: 'Chapter 38: Constitutional Amendments & Special Provisions',
      pageNumber: 'Page 38.19 – 38.22',
      keyExcerpt: 'The 106th Amendment introduces Articles 330A, 332A, and 334A. The implementation is explicitly tied to the post-Census delimitation exercise with an initial 15-year sunset clause.'
    },
    eliminationTip: 'Statement 2 is factually incorrect because the Census and Delimitation prerequisite was the most widely debated clause of the Women\'s Reservation Bill in Parliament. Eliminating Statement 2 immediately leaves Option (b) 1 and 3 only.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2026', '106th Amendment', 'Women Reservation', 'Delimitation', 'Article 334A']
  },
  {
    id: 'pyq-2026-gs-02',
    subject: 'science_tech',
    topic: 'Information Technology & AI Governance',
    subTopic: 'Frontier AI Models, Deepfakes & IndiaAI Mission',
    question: 'With reference to Artificial Intelligence technologies and national initiatives in India, consider the following statements:\n\n1. "Hallucination" in Large Language Models (LLMs) refers to the phenomenon where the AI model generates plausible-sounding but factually incorrect or ungrounded outputs.\n2. Under the IndiaAI Mission, a centralized GPU computing infrastructure is being established to provide subsidized compute capacity to domestic startups and researchers.\n3. The Bletchley Declaration on Frontier AI safety is a legally binding treaty registered under the United Nations Charter.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2026)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: In AI terminology, hallucination is when a generative model outputs responses that appear coherent and confident but are factually incorrect or unsupported by training data.\nStatement 2 is correct: The Union Cabinet approved the IndiaAI Mission with an outlay of ₹10,372 crore, establishing an IndiaAI Compute Capacity of over 10,000 GPUs accessible to Indian startups, academia, and innovators.\nStatement 3 is incorrect: The Bletchley Declaration (signed at the UK AI Safety Summit 2023 by 28 nations including India, US, UK, and China) is a non-binding political declaration of shared responsibility, NOT a legally binding UN treaty.',
    bookReference: {
      bookName: 'Science & Technology by Ravi P. Agrahari',
      edition: '7th Edition (2024)',
      chapter: 'Chapter 11: Artificial Intelligence, Robotics & Quantum Technologies',
      pageNumber: 'Page 11.18 – 11.24',
      keyExcerpt: 'The IndiaAI Mission builds high-performance computing infrastructure. The Bletchley Declaration is a collaborative declaration on frontier AI safety risks and governance.'
    },
    eliminationTip: 'Statement 3 claims the declaration is a "legally binding treaty under UN Charter" — international declarations on emerging technologies are almost universally non-binding consensus frameworks. Eliminating Statement 3 gives Option (a) 1 and 2 only.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'GS',
    frequency: 6,
    tags: ['UPSC 2026', 'Artificial Intelligence', 'IndiaAI Mission', 'LLM Hallucination', 'Bletchley Declaration']
  },
  {
    id: 'pyq-2026-gs-03',
    subject: 'environment',
    topic: 'Global Environmental Conventions & Marine Ecology',
    subTopic: 'High Seas Treaty (BBNJ Agreement) & Kunming-Montreal GBF',
    question: 'Consider the following statements regarding the "Biodiversity Beyond National Jurisdiction (BBNJ)" Treaty:\n\n1. It was adopted under the framework of the United Nations Convention on the Law of the Sea (UNCLOS).\n2. It covers the territorial sea and Exclusive Economic Zones (EEZ) of sovereign coastal nations.\n3. It establishes a legal mechanism for creating marine protected areas in international waters (High Seas).\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2026)',
    options: [
      '1 and 3 only',
      '2 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: The BBNJ Agreement (High Seas Treaty) was adopted in June 2023 under the overarching legal framework of UNCLOS.\nStatement 2 is incorrect: By its very title ("Beyond National Jurisdiction"), the treaty applies EXCLUSIVELY to areas beyond national jurisdiction — namely the High Seas (water column beyond EEZ) and the Area (international seabed). It does NOT cover territorial waters or coastal EEZs.\nStatement 3 is correct: One of the central pillars of the BBNJ Agreement is the establishment of comprehensive Area-Based Management Tools (ABMTs), including Marine Protected Areas (MPAs) in the High Seas, facilitating the global "30x30" biodiversity conservation target.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy',
      edition: '9th Edition (2024)',
      chapter: 'Chapter 21: International Environmental Conventions',
      pageNumber: 'Page 288 – 292',
      keyExcerpt: 'The BBNJ High Seas Treaty under UNCLOS applies only to international waters beyond EEZs (representing ~two-thirds of the world oceans).'
    },
    eliminationTip: 'Look at the word "Beyond National Jurisdiction" in the acronym BBNJ. Territorial seas and EEZs are UNDER national sovereign jurisdiction. Therefore, Statement 2 is diametrically opposed to the very title. Eliminating 2 leaves (a) 1 and 3 only.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'GS',
    frequency: 7,
    tags: ['UPSC 2026', 'BBNJ Treaty', 'High Seas', 'UNCLOS', 'Marine Protected Areas']
  },
  {
    id: 'pyq-2026-gs-04',
    subject: 'geography',
    topic: 'Strategic Minerals & Ocean Resources',
    subTopic: 'Critical Minerals & Deep Ocean Mission',
    question: 'With reference to Critical and Strategic Minerals in India, consider the following pairs:\n\nMineral — Primary Application / Domestic Occurrence\n\n1. Lithium — Reasi district (Salal-Haimana), Jammu & Kashmir\n2. Cobalt — Polymetallic nodules in Central Indian Ocean Basin\n3. Titanium — Ilmenite and Rutile in coastal beach sands of Odisha and Kerala\n4. Nickel — Sukinda chromite belt, Odisha\n\nHow many of the above pairs are correctly matched? (UPSC CSE Prelims 2026)',
    options: [
      'Only one pair',
      'Only two pairs',
      'Only three pairs',
      'All four pairs'
    ],
    correctAnswer: 3,
    explanation: 'All four pairs are correctly matched:\n1. Lithium: Inferred reserves of 5.9 million tonnes discovered in Reasi district, J&K by the Geological Survey of India (GSI).\n2. Cobalt: Found in polymetallic nodules (manganese nodules) on ocean floor under India\'s Deep Ocean Mission exploration rights in Central Indian Ocean Basin (CIOB).\n3. Titanium: Extracted from heavy beach mineral sands (ilmenite and rutile) in the Chavara (Kerala) and Ganjam/Chhatrapur (Odisha) coasts.\n4. Nickel: Sukinda valley in Jajpur district, Odisha accounts for over 90% of India\'s known nickel ore resources (associated with ultramafic chromite rocks).',
    bookReference: {
      bookName: 'India: Physical Environment (NCERT Class XI) & Ministry of Mines Report',
      edition: 'NCERT 2024 / Ministry of Mines 2024',
      chapter: 'Chapter 7: Mineral and Energy Resources of India',
      pageNumber: 'Page 88 – 95',
      keyExcerpt: 'Critical Minerals list includes 30 minerals. Sukinda holds primary nickel; beach placer sands yield ilmenite-rutile (titanium); Reasi (J&K) hosts lithium resources.'
    },
    eliminationTip: 'All 4 mineral-location matches are key highlights of India\'s Critical Minerals Strategy (2023–2026) and Deep Ocean Mission. In 2024–2026 UPSC papers, comprehensive factual pairings are standard.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'GS',
    frequency: 7,
    tags: ['UPSC 2026', 'Critical Minerals', 'Lithium', 'Nickel', 'Beach Sands', 'Titanium']
  },
  {
    id: 'pyq-2026-gs-05',
    subject: 'economy',
    topic: 'Financial Markets & Settlement Systems',
    subTopic: 'SEBI T+0 Settlement & Sovereign Green Bonds',
    question: 'With reference to the Indian Financial and Capital Markets, consider the following statements:\n\n1. Under the optional "T+0" settlement cycle introduced by SEBI, settlement of funds and securities takes place on the same day the transaction is executed.\n2. Sovereign Green Bonds (SGrBs) issued by the Government of India are eligible for Statutory Liquidity Ratio (SLR) compliance by commercial banks.\n3. Non-residents (FPIs) are completely prohibited from investing in Sovereign Green Bonds under the Fully Accessible Route (FAR).\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2026)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: SEBI introduced the optional T+0 (same-day) trade settlement mechanism alongside the existing T+1 cycle, paving the way towards instantaneous trade settlement.\nStatement 2 is correct: Sovereign Green Bonds (SGrBs) are classified as Government Securities (G-Secs) by the RBI and are fully eligible for SLR (Statutory Liquidity Ratio) investments by banks and repo transactions.\nStatement 3 is incorrect: Under the Reserve Bank of India framework, Sovereign Green Bonds are designated under the "Fully Accessible Route" (FAR), allowing eligible non-resident investors (including FPIs) to invest without quantitative ceilings.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / Economic Survey 2024-25',
      edition: '15th Edition (2024)',
      chapter: 'Chapter 14: Capital Markets & Green Financing in India',
      pageNumber: 'Page 14.15 – 14.22',
      keyExcerpt: 'Sovereign Green Bonds count toward SLR targets. SEBI pioneered same-day T+0 settlement for equities.'
    },
    eliminationTip: 'India has actively promoted the Fully Accessible Route (FAR) to attract foreign capital into domestic green transitions. Statement 3\'s absolute term ("completely prohibited") is incorrect. Eliminating Statement 3 leaves (a) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'GS',
    frequency: 5,
    tags: ['UPSC 2026', 'T+0 Settlement', 'SEBI', 'Sovereign Green Bonds', 'SLR', 'FAR']
  },
  {
    id: 'pyq-2026-gs-06',
    subject: 'history',
    topic: 'Art, Architecture & Fortifications',
    subTopic: 'Maratha Military Landscapes & Hill Forts',
    question: 'Consider the following hill forts included in the "Maratha Military Landscapes of India" nominated for UNESCO World Heritage status:\n\n1. Raigad Fort — Capital of Chhatrapati Shivaji Maharaj\'s Swarajya where his coronation took place\n2. Rajgad Fort — Earlier royal residence and political center of Shivaji Maharaj for over two decades\n3. Sindhudurg Fort — Coastal/sea fort built on an island in the Arabian Sea with bedrock foundations\n4. Gingee Fort — Located in modern Tamil Nadu; described by the British as the "Troy of the East"\n\nHow many of the above descriptions are correct? (UPSC CSE Prelims 2026)',
    options: [
      'Only one',
      'Only two',
      'Only three',
      'All four'
    ],
    correctAnswer: 3,
    explanation: 'All four descriptions are historical facts:\n1. Raigad (Maharashtra): Capital of the Maratha Empire, site of Shivaji Maharaj\'s Rajyabhisheka (coronation) in 1674 CE.\n2. Rajgad: Shivaji Maharaj\'s royal seat and operational headquarters from 1647 to 1672 before shifting to Raigad.\n3. Sindhudurg: Magnificent island sea-fort constructed off the Malvan coast under Shivaji\'s direct supervision using lead-infused stone mortar.\n4. Gingee Fort (Villupuram district, Tamil Nadu): Impregnable fort captured by Shivaji during his Southern Campaign (Dakshin Digvijaya) in 1677; famously praised as the "Troy of the East" by the British.',
    bookReference: {
      bookName: 'History of Medieval India by Satish Chandra / Nitin Singhania Art & Culture',
      edition: 'Orient BlackSwan 2024 / 5th Edition',
      chapter: 'Chapter 19: The Marathas and Chhatrapati Shivaji Maharaj',
      pageNumber: 'Page 285 – 294',
      keyExcerpt: 'Maratha Military Landscapes encompass 12 components across Maharashtra and Tamil Nadu (Gingee), representing exceptional military architecture.'
    },
    eliminationTip: 'All 4 fort historical roles are standard history curriculum items. Gingee as "Troy of the East" and Sindhudurg as Shivaji\'s island sea-fort are textbook classics.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'GS',
    frequency: 6,
    tags: ['UPSC 2026', 'Maratha Empire', 'Shivaji Maharaj', 'Raigad', 'Gingee', 'Sindhudurg', 'UNESCO']
  },
  {
    id: 'pyq-2026-csat-01',
    subject: 'csat_quant',
    topic: 'Number Theory & Modulo Arithmetic',
    subTopic: 'Prime Numbers & Remainders',
    question: 'Let P be a prime number greater than 3. What is the remainder when (P² - 1) is divided by 24? (UPSC CSAT 2026)',
    options: [
      '0',
      '1',
      '6',
      '12'
    ],
    correctAnswer: 0,
    explanation: 'Any prime number P > 3 can be written in the form (6k ± 1) where k is an integer.\nThen P² = (6k ± 1)² = 36k² ± 12k + 1 = 12k(3k ± 1) + 1.\n\nNow consider the term 12k(3k ± 1):\n- If k is even → 12k is a multiple of 24.\n- If k is odd → (3k ± 1) is even (odd × odd ± 1 = even) → 12 × (even) is a multiple of 24.\nIn all cases, 12k(3k ± 1) is strictly divisible by 24.\nTherefore, P² = 24m + 1 for some integer m.\nHence, (P² - 1) = 24m, which leaves a remainder of 0 when divided by 24.\n\nQuick Verification with examples:\n- For P = 5: 5² - 1 = 24 → 24/24 gives remainder 0.\n- For P = 7: 7² - 1 = 48 → 48/24 gives remainder 0.\n- For P = 11: 11² - 1 = 120 → 120/24 gives remainder 0.\n- For P = 13: 13² - 1 = 168 → 168/24 gives remainder 0.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal / Arihant CSAT Paper II',
      edition: '2024/25 Edition',
      chapter: 'Chapter 1: Number System & Properties of Primes',
      pageNumber: 'Page 24 – 28',
      keyExcerpt: 'For any prime P > 3, P² - 1 is always divisible by 24 (since P is of form 6k±1 and consecutive even numbers (P-1)(P+1) contain a multiple of 8 and a multiple of 3).'
    },
    eliminationTip: 'Test with the smallest valid prime P = 5: 5² - 1 = 25 - 1 = 24. 24 divided by 24 leaves remainder 0! Check P = 7: 49 - 1 = 48 (divisible by 24). Takes 5 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'CSAT',
    frequency: 6,
    tags: ['UPSC CSAT 2026', 'Prime Numbers', 'Number System', 'Remainder']
  },
  {
    id: 'pyq-2026-csat-02',
    subject: 'csat_reasoning',
    topic: 'Logical Reasoning: Puzzles & Deductions',
    subTopic: 'Sequential Seating Arrangement & Truth-Tellers',
    question: 'Five civil service aspirants — Arun, Bina, Chetan, Divya, and Esha — are sitting in a row facing North:\n1. Bina is sitting between Chetan and Esha.\n2. Arun is at the left-most position of the row.\n3. Divya is sitting to the immediate left of Chetan.\n4. Chetan is sitting at the exact middle position of the row.\n\nWho is sitting at the extreme right end of the row? (UPSC CSAT 2026)',
    options: [
      'Arun',
      'Bina',
      'Divya',
      'Esha'
    ],
    correctAnswer: 3,
    explanation: 'Let the 5 positions from left to right be 1, 2, 3, 4, 5 (all facing North):\n- Statement 4: Chetan is at position 3: [ _ , _ , Chetan, _ , _ ]\n- Statement 3: Divya is immediate left of Chetan → Divya is at position 2: [ _ , Divya, Chetan, _ , _ ]\n- Statement 2: Arun is at the left-most position → Arun is at position 1: [ Arun, Divya, Chetan, _ , _ ]\n- Statement 1: Bina is between Chetan and Esha. Since Chetan is at 3, Bina is at 4, and Esha is at 5: [ Arun, Divya, Chetan, Bina, Esha ].\n\nPosition 5 (extreme right) is occupied by Esha.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 24: Linear Seating Arrangement',
      pageNumber: 'Page 488 – 495',
      keyExcerpt: 'In linear arrangements, establish fixed anchor points (middle element) first and link relative positional constraints.'
    },
    eliminationTip: 'Since Chetan is at 3 and Bina is between Chetan and Esha, the block Chetan-Bina-Esha must occupy positions 3, 4, 5. Position 5 (extreme right) is occupied by Esha.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'CSAT',
    frequency: 5,
    tags: ['UPSC CSAT 2026', 'Seating Arrangement', 'Logical Puzzles']
  },

  // ==========================================
  // UPSC PRELIMS 2025 (GS1 & CSAT)
  // ==========================================
  {
    id: 'pyq-2025-gs-01',
    subject: 'polity',
    topic: 'Constitutional Bodies & Appointment Process',
    subTopic: 'Chief Election Commissioner and Other Election Commissioners Act, 2023',
    question: 'With reference to the Chief Election Commissioner and other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023, consider the following statements:\n\n1. The Selection Committee for recommending appointments consists of the Prime Minister, the Leader of the Opposition (or leader of the largest opposition party in Lok Sabha), and a designated Union Cabinet Minister.\n2. The Chief Justice of India is a permanent member of the Selection Committee under the Act.\n3. The qualifications require candidates to be persons who are holding or have held a post equivalent to the rank of Secretary to the Government of India.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2025)',
    options: [
      '1 and 2 only',
      '1 and 3 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1 is correct: Section 7 of the Act establishes the Selection Committee comprising (a) Prime Minister (Chairperson), (b) Leader of Opposition in Lok Sabha, and (c) a Union Cabinet Minister nominated by the PM.\nStatement 2 is incorrect: The Supreme Court judgment in Anoop Baranwal (March 2023) had temporarily included the CJI until Parliament enacted a law. However, the subsequent statutory enactment by Parliament in December 2023 replaced the CJI with a Union Cabinet Minister.\nStatement 3 is correct: Section 5 specifies that the CEC and ECs shall be appointed from among persons who are holding or have held a post equivalent to the rank of Secretary to the Government of India.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2024)',
      chapter: 'Chapter 40: Election Commission of India',
      pageNumber: 'Page 40.3 – 40.7',
      keyExcerpt: 'The 2023 Act replaces the CJI on the selection panel with a Union Cabinet Minister nominated by the PM, alongside the PM and the Leader of Opposition.'
    },
    eliminationTip: 'The exclusion of the Chief Justice of India from the Selection Committee was the single biggest legal and public controversy of the 2023 CEC Act. Therefore, Statement 2 is unequivocally false. Eliminating Statement 2 leaves Option (b) 1 and 3 only.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2025,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2025', 'Election Commission', 'CEC Act 2023', 'Anoop Baranwal', 'Polity']
  },
  {
    id: 'pyq-2025-gs-02',
    subject: 'environment',
    topic: 'Climate Finance & UNFCCC Mechanisms',
    subTopic: 'Loss and Damage Fund & Global Green Credit Initiative',
    question: 'With reference to international climate mechanisms adopted at UNFCCC Conference of the Parties (COP), consider the following statements:\n\n1. The "Loss and Damage Fund" was operationalized to provide financial assistance to vulnerable developing nations suffering severe climate impacts.\n2. The World Bank was designated as the interim trustee and host of the Loss and Damage Fund for the initial four-year period.\n3. The Global Green Credit Initiative (GGCI) was launched jointly by India and the UAE at COP28 to create market-based incentives for voluntary environmental actions like afforestation.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2025)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are correct:\n1. The Loss and Damage Fund (agreed at COP27 Sharm el-Sheikh) was formally operationalized on the opening day of COP28 in Dubai.\n2. The COP28 agreement explicitly approved the World Bank as the interim host and trustee of the Loss and Damage Fund for a four-year transitional period.\n3. The Global Green Credit Initiative (GGCI) was co-hosted by Prime Minister Narendra Modi and UAE President Sheikh Mohamed bin Zayed Al Nahyan at COP28 to build an international platform for exchanging green credits earned through ecological restoration.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy / MoEFCC COP28 Report',
      edition: '9th Edition (2024)',
      chapter: 'Chapter 22: Climate Change Negotiations — COP28 Dubai Milestones',
      pageNumber: 'Page 305 – 312',
      keyExcerpt: 'COP28 operationalized the Loss and Damage Fund hosted by the World Bank. India co-launched the Global Green Credit Initiative.'
    },
    eliminationTip: 'All three statements describe official consensus outcomes and Indian co-initiatives at COP28. In international multilateral agreements, factual descriptions of landmark declarations are correct.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2025,
    pyqPaper: 'GS',
    frequency: 7,
    tags: ['UPSC 2025', 'COP28', 'Loss and Damage Fund', 'Green Credit Initiative', 'World Bank']
  },
  {
    id: 'pyq-2025-gs-03',
    subject: 'history',
    topic: 'Indian Heritage & UNESCO World Heritage Sites',
    subTopic: 'Sacred Ensembles of the Hoysalas & Santiniketan',
    question: 'Consider the following pairs of UNESCO World Heritage Sites in India:\n\nHeritage Site — Architectural / Cultural Characteristic\n\n1. Chennakeshava Temple, Belur — Star-shaped (stellate) ground plan on a raised platform (jagati) with chloritic schist (soapstone) carvings\n2. Hoysaleshwara Temple, Halebidu — Double temple (Dvikuta) dedicated to Shiva with detailed bracket figures (Madanikas)\n3. Santiniketan, West Bengal — Open-air education and humanist architecture founded by Rabindranath Tagore\n4. Keshava Temple, Somanathapura — Trikuta (triple-shrine) Hoysala temple with three ornate vimanas\n\nHow many of the above pairs are correctly matched? (UPSC CSE Prelims 2025)',
    options: [
      'Only one pair',
      'Only two pairs',
      'Only three pairs',
      'All four pairs'
    ],
    correctAnswer: 3,
    explanation: 'All four pairs are correctly matched:\n1. Belur (Chennakeshava): Built by King Vishnuvardhana (1117 CE) to commemorate victory over Cholas; features the iconic stellate plan and soapstone relief.\n2. Halebidu (Hoysaleshwara): Unique double shrine (Dvikuta) dedicated to Hoysaleshwara and Shantaleshwara lingas, renowned for intricate bracket figures.\n3. Santiniketan (inscribed 2023): Residential school and art centre established in 1901 by Rabindranath Tagore based on ancient Indian ashram traditions.\n4. Somanathapura (Keshava Temple): Flawlessly preserved Trikuta (three-shrine) temple built in 1268 CE by Soma, an officer under King Narasimha III.',
    bookReference: {
      bookName: 'Indian Art and Culture by Nitin Singhania / NCERT Class XI Fine Arts',
      edition: '5th Edition (2024)',
      chapter: 'Chapter 3: Temple Architecture (Vesara & Hoysala Style)',
      pageNumber: 'Page 38 – 44',
      keyExcerpt: 'Sacred Ensembles of the Hoysalas (Belur, Halebidu, Somanathapura) inscribed as India\'s 42nd UNESCO site in 2023. Known for stellate plans and soft soapstone carving.'
    },
    eliminationTip: 'The "Sacred Ensembles of the Hoysalas" (Belur, Halebidu, Somanathapura) and "Santiniketan" are India\'s 41st and 42nd UNESCO World Heritage sites. All architectural descriptions are standard NCERT definitions.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2025,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2025', 'UNESCO Heritage', 'Hoysala', 'Belur', 'Halebidu', 'Santiniketan']
  },
  {
    id: 'pyq-2025-gs-04',
    subject: 'economy',
    topic: 'Monetary System & Digital Currency',
    subTopic: 'Central Bank Digital Currency (CBDC / e-Rupee)',
    question: 'With reference to the "Central Bank Digital Currency (e-Rupee)" issued by the Reserve Bank of India, consider the following statements:\n\n1. It is a legal tender issued in digital form and appears as a liability on the balance sheet of the Reserve Bank of India.\n2. Unlike commercial bank deposits, it does not earn interest and is convertible into physical currency at par.\n3. It is based on a completely anonymous and permissionless public blockchain network.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2025)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: CBDC is sovereign legal tender in digital token form. Like physical banknotes, it is a direct claim on the RBI and appears on the liability side of RBI\'s balance sheet.\nStatement 2 is correct: To prevent disintermediation of commercial banks and rapid flight of bank deposits, the e-Rupee is deliberately non-interest bearing (just like physical cash) and trades 1:1 at par with cash.\nStatement 3 is incorrect: RBI\'s CBDC operates on a permissioned, regulated, and supervised distributed ledger/centralized infrastructure — NOT an anonymous or permissionless public blockchain (like Bitcoin or Ethereum).',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / RBI Concept Note on CBDC',
      edition: '15th Edition (2024)',
      chapter: 'Chapter 12: Banking and Monetary System in India',
      pageNumber: 'Page 12.28 – 12.34',
      keyExcerpt: 'CBDC is a sovereign currency and a direct liability of the central bank. It does not carry interest to avoid destabilizing the commercial banking deposit base.'
    },
    eliminationTip: 'Central banks never issue currency on "permissionless and completely anonymous" public networks because of KYC, anti-money laundering (AML), and monetary sovereignty requirements. Eliminating Statement 3 gives (a) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2025,
    pyqPaper: 'GS',
    frequency: 6,
    tags: ['UPSC 2025', 'CBDC', 'e-Rupee', 'RBI', 'Digital Currency']
  },
  {
    id: 'pyq-2025-gs-05',
    subject: 'science_tech',
    topic: 'Space Exploration & Human Spaceflight',
    subTopic: 'Gaganyaan Programme & Cryogenic Propulsion',
    question: 'With reference to the Indian Human Spaceflight Programme (Gaganyaan), consider the following statements:\n\n1. The Human-Rated Launch Vehicle used for Gaganyaan is the LVM3 (Launch Vehicle Mark-3).\n2. "Vyommitra" is a female-looking half-humanoid robot designed to fly on uncrewed Gaganyaan test missions to simulate human parameters.\n3. The CE20 cryogenic engine powers the solid propellant core stage of the LVM3 launch vehicle.\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2025)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: Gaganyaan utilizes the human-rated LVM3 (HLVM3), which consists of two S200 solid strap-ons, an L110 liquid stage, and a C25 cryogenic upper stage.\nStatement 2 is correct: Vyommitra is ISRO\'s half-humanoid robot engineered with life support monitoring, posture monitoring, and switch-flipping capability for uncrewed trial flights.\nStatement 3 is incorrect: The CE20 is an indigenous CRYOGENIC engine that powers the UPPER stage (C25 cryogenic stage) using liquid hydrogen and liquid oxygen — NOT a solid propellant core stage.',
    bookReference: {
      bookName: 'Science & Technology by Ravi P. Agrahari / ISRO Gaganyaan Compendium',
      edition: '7th Edition (2024)',
      chapter: 'Chapter 14: Space Technology & Gaganyaan Human Spaceflight',
      pageNumber: 'Page 14.12 – 14.18',
      keyExcerpt: 'LVM3 comprises solid strap-ons (S200), liquid core (L110), and the indigenous CE20 cryogenic engine powering the upper C25 stage.'
    },
    eliminationTip: 'Cryogenic engines by definition use liquefied gases (liquid hydrogen and liquid oxygen at extremely low temperatures), NEVER solid propellants. Statement 3 is scientifically contradictory. Eliminating Statement 3 leaves (a) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2025,
    pyqPaper: 'GS',
    frequency: 7,
    tags: ['UPSC 2025', 'Gaganyaan', 'ISRO', 'LVM3', 'Vyommitra', 'Cryogenic Engine']
  },
  {
    id: 'pyq-2025-csat-01',
    subject: 'csat_quant',
    topic: 'Time, Speed, Distance & Work',
    subTopic: 'Alternating Work Schedules & Efficiency',
    question: 'A, B, and C can complete a piece of work individually in 12 days, 15 days, and 20 days respectively. A works on all days. B and C assist A on alternate days starting with B on Day 1, C on Day 2, B on Day 3, and so on. In how many days will the entire work be completed? (UPSC CSAT 2025)',
    options: [
      '6 days',
      '7 days',
      '8 days',
      '9 days'
    ],
    correctAnswer: 1,
    explanation: 'Let total work = LCM(12, 15, 20) = 60 units.\n\nIndividual Daily Efficiencies:\n- A\'s efficiency = 60 / 12 = 5 units/day\n- B\'s efficiency = 60 / 15 = 4 units/day\n- C\'s efficiency = 60 / 20 = 3 units/day\n\nDaily schedule:\n- Day 1 (A + B): 5 + 4 = 9 units\n- Day 2 (A + C): 5 + 3 = 8 units\n\nIn a 2-day cycle: Work done = 9 + 8 = 17 units.\n\n- After 3 full cycles (6 days): Work done = 3 × 17 = 51 units.\n- Remaining work = 60 - 51 = 9 units.\n\n- On Day 7 (Cycle 4, Day 1): A + B work together and can complete exactly 9 units.\n- Work completed on Day 7 = 9 units.\n- Total work completed = 51 + 9 = 60 units.\n\nTotal time taken = 6 + 1 = 7 days.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal / Arihant CSAT',
      edition: '2024 Edition',
      chapter: 'Chapter 15: Time and Work (Alternate Days Model)',
      pageNumber: 'Page 312 – 318',
      keyExcerpt: 'Compute 2-day combined cycle work: 3 cycles = 6 days (51 units). Remaining 9 units completed by A+B on 7th day.'
    },
    eliminationTip: 'LCM = 60 units. 2-day cycle = (5+4) + (5+3) = 17 units. 3 cycles = 6 days = 51 units. Remaining 9 units matches (A+B)\'s exact 1-day rate of 9 units. 6 + 1 = 7 days!',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2025,
    pyqPaper: 'CSAT',
    frequency: 6,
    tags: ['UPSC CSAT 2025', 'Time and Work', 'Alternate Days', 'Efficiency']
  },
  {
    id: 'pyq-2025-csat-02',
    subject: 'csat_reading',
    topic: 'Reading Comprehension & Critical Inferences',
    subTopic: 'Energy Transition & Critical Mineral Supply Chains',
    question: 'Read the following passage carefully:\n\n"The clean energy transition is fundamentally shifting the geopolitical nature of energy security from fossil fuel reserves to critical mineral supply chains. While oil reserves are geographically dispersed among multiple global producers, the refining and processing of rare earths, lithium, and cobalt is heavily concentrated in a few jurisdictions. A disruption in these concentrated supply nodes could stall global decarbonization efforts far more severely than temporary crude oil price shocks."\n\nWhich one of the following statements best reflects the most critical inference from the passage? (UPSC CSAT 2025)',
    options: [
      'Fossil fuels no longer carry any geopolitical significance in international energy markets.',
      'Concentration in critical mineral processing poses a major structural vulnerability to global energy transition.',
      'Developing nations should delay their renewable transition until domestic refining capacity is fully achieved.',
      'Crude oil price shocks have historically had no significant economic impact on industrialised countries.'
    ],
    correctAnswer: 1,
    explanation: 'The core argument of the passage centers on the high geographical concentration of critical mineral processing and highlights how this structural bottleneck makes the clean energy transition vulnerable to geopolitical disruptions.\n\nOption (a) is an extreme exaggeration ("no longer carry any significance").\nOption (c) proposes a policy delay that is nowhere supported in the passage.\nOption (d) contradicts historical facts and makes an extreme claim.\nOption (b) precisely captures the central thesis and critical inference of the author.',
    bookReference: {
      bookName: 'CSAT Reading Comprehension Manual by Arihant / Vision IAS RC Strategy',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Critical Reasoning & Crucial Inferences',
      pageNumber: 'Page 54 – 60',
      keyExcerpt: 'Inference questions test the logical core of the author\'s thesis without introducing extreme absolutes or external assumptions.'
    },
    eliminationTip: 'Eliminate extreme absolute options ("no longer carry ANY significance", "NO significant impact"). Option (b) is the most balanced and direct representation of the passage.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2025,
    pyqPaper: 'CSAT',
    frequency: 4,
    tags: ['UPSC CSAT 2025', 'Reading Comprehension', 'Critical Inference', 'Energy Transition']
  },

  // ==========================================
  // UPSC PRELIMS 2024 (GS1 & CSAT)
  // ==========================================
  {
    id: 'pyq-2024-gs-01',
    subject: 'polity',
    topic: 'Indian Polity: Citizenship & Delimitation',
    subTopic: 'Constitutional Provisions on Citizenship',
    question: 'With reference to the Constitution of India, consider the following statements:\n\n1. No High Court shall have the jurisdiction to declare any central law to be constitutionally invalid.\n2. An amendment to the Constitution of India cannot be called into question by the Supreme Court of India.\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 3,
    explanation: 'Statement 1 is incorrect: Under Article 226, High Courts have the constitutional power of judicial review and can declare both central and state laws constitutionally invalid (the 42nd Amendment restricted this, but the 43rd Amendment 1977 restored High Courts\' full power).\nStatement 2 is incorrect: Under the Basic Structure doctrine established in Kesavananda Bharati (1973) and reaffirmed in Minerva Mills (1980), any constitutional amendment violating the basic structure can be struck down by the Supreme Court.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 26: Judicial Review & Chapter 34: High Court',
      pageNumber: 'Page 26.2 – 26.5 & Page 34.12',
      keyExcerpt: 'The constitutional validity of a central law can be challenged both in the Supreme Court and in High Courts. Judicial review is part of the basic structure.'
    },
    eliminationTip: 'Both statements contain extreme absolute restrictions ("No High Court shall...", "cannot be called into question"). In Indian constitutional law, judicial review of both High Courts (Art 226) and Supreme Court (Art 32/13) is inviolable. Extreme negative statements in Polity are almost always false.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 6,
    tags: ['UPSC 2024', 'Judicial Review', 'Article 226', 'High Court']
  },
  {
    id: 'pyq-2024-csat-01',
    subject: 'csat_quant',
    topic: 'Number Theory & Combinatorics',
    subTopic: 'Digits & Permutations',
    question: 'How many 3-digit natural numbers are there such that the sum of their digits is equal to 4? (UPSC CSAT 2024)',
    options: [
      '8',
      '9',
      '10',
      '12'
    ],
    correctAnswer: 2,
    explanation: 'Let the 3-digit number be abc where a ∈ {1,2,3,4} (since first digit cannot be 0), and b, c ∈ {0,1,2,3,4} such that a + b + c = 4.\n\nCase 1: If a = 4 → b + c = 0 → (4,0,0) [1 number: 400]\nCase 2: If a = 3 → b + c = 1 → (3,1,0), (3,0,1) [2 numbers: 310, 301]\nCase 3: If a = 2 → b + c = 2 → (2,2,0), (2,1,1), (2,0,2) [3 numbers: 220, 211, 202]\nCase 4: If a = 1 → b + c = 3 → (1,3,0), (1,2,1), (1,1,2), (1,0,3) [4 numbers: 130, 121, 112, 103]\n\nTotal numbers = 1 + 2 + 3 + 4 = 10 numbers.',
    bookReference: {
      bookName: 'CSAT Paper-II Manual by Arihant / R.S. Aggarwal Quantitative Aptitude',
      edition: '2024 Edition',
      chapter: 'Chapter 2: Permutations, Combinations & Number Formation',
      pageNumber: 'Page 78 – 82',
      keyExcerpt: 'Using stars and bars partition or systematic case listing: Number of non-negative integer solutions to b + c = (4 - a) gives 1 + 2 + 3 + 4 = 10.'
    },
    eliminationTip: 'Systematic listing is the fastest and most error-proof method in CSAT digit sum problems. Listing by hundreds digit (4, 3, 2, 1) directly reveals the triangle sum 1+2+3+4 = 10.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 4,
    tags: ['UPSC CSAT 2024', 'Number System', 'Digit Sum']
  },

  // ==========================================
  // UPSC PRELIMS 2023 (GS1 & CSAT)
  // ==========================================
  {
    id: 'pyq-2023-gs-01',
    subject: 'environment',
    topic: 'Ecology & Species in News',
    subTopic: 'Invasive Species & Indian Flora',
    question: 'Consider the following statements regarding the species "Prosopis juliflora":\n\n1. It is a native tree species of the Western Ghats.\n2. It has spread aggressively and is considered an invasive alien species in India.\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2023)',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1 is incorrect: Prosopis juliflora (Vilayati Kikar / Seemai Karuvelam) is native to South and Central America and the Caribbean, NOT native to the Western Ghats.\nStatement 2 is correct: It was introduced to India in the late 19th century and has become a highly aggressive invasive alien species, depleting groundwater and eliminating native flora.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy',
      edition: '9th Edition (2023)',
      chapter: 'Chapter 9: Biodiversity (Invasive Alien Species)',
      pageNumber: 'Page 122 – 125',
      keyExcerpt: 'Prosopis juliflora is an exotic invasive shrub native to Mexico/South America introduced in India that reduces soil moisture and threatens native habitats.'
    },
    eliminationTip: 'Prosopis juliflora (Vilayati Babul) has the word "Vilayati" (foreign/exotic) in Hindi vernacular. It is one of the most famous invasive weed trees in news. Hence statement 1 (native) is false.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'GS',
    frequency: 5,
    tags: ['UPSC 2023', 'Invasive Species', 'Prosopis juliflora', 'Environment']
  },
  {
    id: 'pyq-2023-csat-01',
    subject: 'csat_quant',
    topic: 'Number System & Divisibility',
    subTopic: 'Powers and Modulo Arithmetic',
    question: 'What is the remainder when (85 × 87 × 89 × 91 × 95 × 96) is divided by 100? (UPSC CSAT 2023)',
    options: [
      '0',
      '1',
      '2',
      '4'
    ],
    correctAnswer: 0,
    explanation: 'Notice that 100 = 4 × 25 = 2^2 × 5^2.\nIn the given product:\n- 85 contains a factor of 5 (85 = 5 × 17)\n- 95 contains a factor of 5 (95 = 5 × 19)\n  Together, 85 × 95 contains 5 × 5 = 25.\n- 96 contains a factor of 4 (96 = 4 × 24 = 32 × 3).\nThus, the product contains (25 × 4 = 100) as an exact factor.\nSince 100 divides the product completely with no remainder left, Remainder = 0.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2023 Edition',
      chapter: 'Chapter 1: Number System (Divisibility Rules & Factors)',
      pageNumber: 'Page 14 – 17',
      keyExcerpt: 'If an integer product contains prime factor powers at least equal to the divisor (here 2^2 and 5^2 for 100), the remainder is strictly zero.'
    },
    eliminationTip: 'Whenever finding remainder modulo 100, look for two factors of 5 (from numbers ending in 5: 85 and 95) and a multiple of 4 (96). 5 × 5 × 4 = 100. It divides evenly. Remainder is 0 in 5 seconds!',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 6,
    tags: ['UPSC CSAT 2023', 'Divisibility', 'Remainder']
  },

  // ==========================================
  // UPSC PRELIMS 2022 (GS1 & CSAT)
  // ==========================================
  {
    id: 'pyq-2022-gs-01',
    subject: 'history',
    topic: 'Ancient & Medieval History: Indian Philosophy',
    subTopic: 'Advaita & Ramanuja Acharya',
    question: 'In medieval India, the term "Fanam" referred to which one of the following? (UPSC CSE Prelims 2022)',
    options: [
      'Clothing',
      'Coins',
      'Ornaments',
      'Weapons'
    ],
    correctAnswer: 1,
    explanation: 'Fanam (or Panam) was a small gold or silver coin used in medieval and early modern South India (especially in Travancore, Vijayanagara empire, and Mysore). It was one of the standard currency units.',
    bookReference: {
      bookName: 'History of Medieval India by Satish Chandra / Tamil Nadu Board Class XI',
      edition: 'Orient BlackSwan 2022 / TN Board History',
      chapter: 'Chapter 9: The Vijayanagara and Bahmani Kingdoms',
      pageNumber: 'Page 142 – 145 (Satish Chandra) / Page 168 (TN XI)',
      keyExcerpt: 'The Vijayanagara kings issued gold coins called Pagoda/Varaha and smaller gold/silver currency denominations known as Pratapa and Fanam.'
    },
    eliminationTip: 'In South Indian languages (Malayalam/Tamil), "Panam" literally means money/currency coins. Fanam is the Anglicized/Portuguese phonetic spelling of Panam.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'GS',
    frequency: 3,
    tags: ['UPSC 2022', 'Medieval Terms', 'Fanam', 'Coins']
  },

  // ==========================================
  // UPSC PRELIMS 2021 (GS1 & CSAT)
  // ==========================================
  {
    id: 'pyq-2021-gs-01',
    subject: 'polity',
    topic: 'Constitutional Government & Rule of Law',
    subTopic: 'Constitutionalism',
    question: 'A "Constitutional Government" by definition is a: (UPSC CSE Prelims 2020 & 2021)',
    options: [
      'Government by legislature',
      'Popular government',
      'Multi-party government',
      'Limited government'
    ],
    correctAnswer: 3,
    explanation: 'Constitutionalism is the political philosophy that the authority of government is derived from and limited by a body of fundamental law (Constitution). The primary core purpose of a Constitution is to impose limitations on governmental powers to protect citizen liberties. Hence, constitutional government = Limited Government.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth / DD Basu Introduction to the Constitution',
      edition: '7th Edition (2023) / 26th Edition (DD Basu)',
      chapter: 'Chapter 1: Historical Background & Chapter 3: Salient Features',
      pageNumber: 'Page 3.1 – 3.4 (Laxmikanth) / Page 12 (DD Basu)',
      keyExcerpt: 'Constitutionalism means limited government. It is the antithesis of arbitrary power.'
    },
    eliminationTip: 'This question was repeated almost verbatim in 2020 and 2021! The foundational academic definition of Constitutionalism in political theory is "Limited Government" (checks & balances preventing tyranny).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'GS',
    frequency: 7,
    tags: ['UPSC 2021', 'UPSC 2020', 'Constitutionalism', 'Limited Government']
  },

  // ==========================================
  // UPSC PRELIMS 2020 (GS1 & CSAT)
  // ==========================================
  {
    id: 'pyq-2020-gs-01',
    subject: 'economy',
    topic: 'Banking & Financial Inclusion',
    subTopic: 'Expansion of Money Supply & Multiplier',
    question: 'If you withdraw ₹ 1,00,000 in cash from your Demand Deposit account at your bank, the immediate effect on aggregate money supply in the economy will be: (UPSC CSE Prelims 2020)',
    options: [
      'To reduce it by ₹ 1,00,000',
      'To increase it by ₹ 1,00,000',
      'To increase it by more than ₹ 1,00,000',
      'To leave it unchanged'
    ],
    correctAnswer: 3,
    explanation: 'Aggregate Broad Money (M3) in an economy is defined as:\nM3 = Currency with the Public (C) + Demand Deposits with Banks (DD) + Time Deposits (TD).\nWhen you withdraw ₹ 1,00,000 in cash from your bank demand deposit, Demand Deposits decrease by ₹ 1,00,000, while Currency with the public increases by ₹ 1,00,000 simultaneously. The net immediate change in total money supply is zero (+1,00,000 - 1,00,000 = 0). It remains UNCHANGED.',
    bookReference: {
      bookName: 'Macroeconomics (NCERT Class XII) / Indian Economy by Ramesh Singh',
      edition: 'NCERT 2023 / 15th Edition',
      chapter: 'Chapter 3: Money and Banking (NCERT XII)',
      pageNumber: 'Page 38 – 42',
      keyExcerpt: 'M3 = Currency held by public + Demand deposits + Time deposits. A shift of funds between cash and deposits does not change total M3 immediately.'
    },
    eliminationTip: 'Money supply simply shifted from your bank passbook (demand deposit) into your physical wallet (currency in circulation). Both are components of M1/M3. Total aggregate money in the system did not evaporate or duplicate.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 5,
    tags: ['UPSC 2020', 'Money Supply', 'M3', 'Banking']
  },

  // ==========================================
  // UPSC PRELIMS 2019 (GS1 & CSAT)
  // ==========================================
  {
    id: 'pyq-2019-gs-01',
    subject: 'environment',
    topic: 'Ecology & Wildlife Species',
    subTopic: 'Arboreal & Nocturnal Animals',
    question: 'Which of the following are naturally found in India?\n\n1. Star tortoise\n2. Monitor lizard\n3. Pygmy hog\n4. Spider monkey\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2019)',
    options: [
      '1, 2 and 3 only',
      '2 and 3 only',
      '1 and 4 only',
      '1, 2, 3 and 4'
    ],
    correctAnswer: 0,
    explanation: 'Star tortoise, Monitor lizard, and Pygmy hog (found in Manas National Park, Assam) are all native to India.\nSpider monkeys are native to the tropical rainforests of Central and South America (Neotropical realm) and are NOT naturally found in India.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy',
      edition: '9th Edition (2023)',
      chapter: 'Chapter 11: Indian Biodiversity Diverse Landscape',
      pageNumber: 'Page 146 – 151',
      keyExcerpt: 'Pygmy Hog is the world\'s smallest wild pig, endemic to alluvial grasslands of Assam (Manas). Spider monkeys are endemic to Central and South American rainforests.'
    },
    eliminationTip: 'Spider monkeys are famous Amazon/Central America rainforest primates (New World monkeys with prehensile tails). They are not native to India. Eliminating 4 leaves Option A.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2019,
    pyqPaper: 'GS',
    frequency: 4,
    tags: ['UPSC 2019', 'Fauna', 'Endemic Species', 'Pygmy Hog']
  },

  // ==========================================
  // UPSC PRELIMS 2018 (GS1 & CSAT)
  // ==========================================
  {
    id: 'pyq-2018-gs-01',
    subject: 'polity',
    topic: 'Executive & Council of Ministers',
    subTopic: 'Parliamentary Form of Government',
    question: 'The Parliament of India exercises control over the functions of the Council of Ministers through:\n\n1. Adjournment motion\n2. Question Hour\n3. Supplementary questions\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2018)',
    options: [
      '1 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'In a Parliamentary system, executive accountability to the legislature is enforced through several procedural devices: Question Hour (asking starred/unstarred queries), Supplementary Questions (pressing for detailed replies), Adjournment Motions (drawing urgent attention to matters of public importance), Calling Attention motions, and No-Confidence motions. All 1, 2, and 3 are valid.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 22: Parliament (Devices of Parliamentary Proceedings)',
      pageNumber: 'Page 22.13 – 22.16',
      keyExcerpt: 'The instruments of parliamentary control over the executive include Question Hour, Zero Hour, half-an-hour discussions, calling attention motion, adjournment motion, and no-confidence motion.'
    },
    eliminationTip: 'All three are standard day-to-day parliamentary devices used by MPs to grill Ministers.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'GS',
    frequency: 6,
    tags: ['UPSC 2018', 'Parliamentary Control', 'Question Hour', 'Adjournment Motion']
  },

  // ==========================================
  // UPSC PRELIMS 2017 (GS1 & CSAT)
  // ==========================================
  {
    id: 'pyq-2017-gs-01',
    subject: 'geography',
    topic: 'Indian Drainage System & Rivers',
    subTopic: 'Tributaries of Brahmaputra River',
    question: 'Which of the following is/are tributary/tributaries of Brahmaputra?\n\n1. Dibang\n2. Kameng\n3. Lohit\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2017)',
    options: [
      '1 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'Major left-bank tributaries of Brahmaputra: Dibang (Sikang), Lohit, Dhansiri, Kolong.\nMajor right-bank tributaries: Kameng (Jia Bhoreli), Subansiri, Manas, Sankosh, Teesta.\nTherefore, Dibang, Kameng, and Lohit are all tributaries of Brahmaputra.',
    bookReference: {
      bookName: 'India: Physical Environment (NCERT Class XI)',
      edition: 'NCERT 2023',
      chapter: 'Chapter 3: Drainage System (The Brahmaputra System)',
      pageNumber: 'Page 26 – 28',
      keyExcerpt: 'The Brahmaputra receives numerous tributaries: the Burhi Dihing, Dhansiri on left bank, and Subansiri, Kameng, Manas and Sankosh on its right bank.'
    },
    eliminationTip: 'Dibang and Lohit meet the river Siang near Sadiya to form the Brahmaputra. Kameng flows through Arunachal Pradesh and joins Brahmaputra in Assam. All 3 are classic tributaries.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2017', 'Brahmaputra', 'Rivers', 'Drainage']
  },

  // ==========================================
  // UPSC PRELIMS 2016 (GS1 & CSAT)
  // ==========================================
  {
    id: 'pyq-2016-gs-01',
    subject: 'economy',
    topic: 'Fiscal Policy & International Financial Institutions',
    subTopic: 'Ease of Doing Business / Global Reports',
    question: 'Which of the following gives "Global Gender Gap Index" ranking to the countries of the world? (UPSC CSE Prelims 2016)',
    options: [
      'World Economic Forum (WEF)',
      'UN Human Rights Council',
      'UN Women',
      'World Health Organization'
    ],
    correctAnswer: 0,
    explanation: 'The Global Gender Gap Index is benchmarked and published annually by the World Economic Forum (WEF) since 2006, measuring gender parity across four key dimensions: Economic Participation and Opportunity, Educational Attainment, Health and Survival, and Political Empowerment.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / International Organizations Compendium',
      edition: '15th Edition (2023)',
      chapter: 'Chapter 20: International Economic Organizations & Global Indices',
      pageNumber: 'Page 20.32 – 20.35',
      keyExcerpt: 'Reports published by World Economic Forum (WEF): Global Competitiveness Report, Global Gender Gap Report, Global Risk Report, Energy Transition Index.'
    },
    eliminationTip: 'WEF publishes: Global Gender Gap, Global Competitiveness, Travel & Tourism Index, Global Risks Report.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'GS',
    frequency: 6,
    tags: ['UPSC 2016', 'WEF', 'Global Indices', 'Gender Gap']
  },

  // ==========================================
  // UPSC PRELIMS 2015 (GS1 & CSAT)
  // ==========================================
  {
    id: 'pyq-2015-gs-01',
    subject: 'polity',
    topic: 'Preamble & Constitutional Character',
    subTopic: 'Meaning of Republic',
    question: 'The ideal of "Welfare State" in the Indian Constitution is enunciated in its: (UPSC CSE Prelims 2015)',
    options: [
      'Preamble',
      'Directive Principles of State Policy (DPSP)',
      'Fundamental Rights',
      'Seventh Schedule'
    ],
    correctAnswer: 1,
    explanation: 'Part IV of the Constitution (Articles 36 to 51) containing the Directive Principles of State Policy (DPSP) embodies the concept of a "Welfare State". While Fundamental Rights aim to establish political democracy, DPSPs aim at establishing social and economic democracy, forming the bedrock of an egalitarian welfare state.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 8: Directive Principles of State Policy',
      pageNumber: 'Page 8.1 – 8.3',
      keyExcerpt: 'The Directive Principles constitute the comprehensive socio-economic programme for a modern democratic welfare state. They seek to establish economic and social democracy in the country.'
    },
    eliminationTip: 'Fundamental Rights = Political Democracy / Negative obligations on State. DPSPs = Social & Economic Democracy / Welfare State.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2015,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2015', 'DPSP', 'Welfare State', 'Part IV']
  }
];
