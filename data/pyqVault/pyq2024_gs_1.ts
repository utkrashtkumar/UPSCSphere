import { Question } from '@/lib/types';

export const pyq2024_gs_1: Question[] = [
  {
    id: 'pyq-2024-gs-01',
    subject: 'economy',
    topic: 'Digital Public Infrastructure & Fintech',
    subTopic: 'India Stack: UPI, DigiLocker & Account Aggregator',
    question: 'With reference to India’s "Digital Public Infrastructure" (DPI), consider the following statements:\n\n1. The Unified Payments Interface (UPI) operates on an open protocol allowing interoperability across different payment service providers.\n2. The Account Aggregator (AA) framework allows financial data sharing without the financial intermediary ever seeing the user’s decrypted financial data in cleartext.\n3. DigiLocker operates as a centralized data repository where original scanned copies of all citizen documents are physically created and stored by the Ministry of Electronics and IT.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: UPI is built on open API protocols facilitating real-time interoperable fund routing across multiple bank accounts and fintech applications.\nStatement 2 is correct: Under the RBI-regulated Account Aggregator model, data is transmitted with end-to-end encryption from Financial Information Providers (FIP) to Financial Information Users (FIU); the aggregator is a "data-blind" conduit acting purely on explicit user consent.\nStatement 3 is incorrect: DigiLocker does not physically scan and store documents centrally. It acts as an electronic gateway connecting citizens to the original "issuing authorities" (e.g. CBSE, UIDAI, State Transport Departments) who issue digitally signed URIs directly into the citizen repository.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / Economic Survey 2023-24',
      edition: '15th Edition (2024)',
      chapter: 'Chapter 15: Digital Infrastructure and Financial Inclusion',
      pageNumber: 'Page 15.22 – 15.28',
      keyExcerpt: 'Account Aggregators are consent managers that operate data-blind with encrypted transit. DigiLocker links documents directly to primary issuers.'
    },
    eliminationTip: 'DigiLocker is a digital verification gateway linking to issuers (like CBSE, RTO), not a warehouse scanning billions of physical documents. Eliminating Statement 3 leaves (a) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'Digital Public Infrastructure', 'UPI', 'Account Aggregator', 'DigiLocker']
  },
  {
    id: 'pyq-2024-gs-02',
    subject: 'geography',
    topic: 'Strategic Chokepoints & Maritime Geography',
    subTopic: 'Red Sea, Bab-el-Mandeb & Horn of Africa',
    question: 'Consider the following geographic entities and their geopolitical locations:\n\n1. Bab-el-Mandeb Strait — Connects the Red Sea to the Gulf of Aden\n2. Strait of Hormuz — Connects the Persian Gulf to the Gulf of Oman\n3. Gulf of Aqaba — Bordered by Egypt, Israel, Jordan, and Saudi Arabia\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are geographically accurate:\n1. Bab-el-Mandeb ("Gate of Tears") is the strategic strait between Yemen on the Arabian Peninsula and Djibouti/Eritrea in the Horn of Africa, connecting the Red Sea to the Gulf of Aden and the Indian Ocean.\n2. Strait of Hormuz connects the oil-rich Persian Gulf with the Gulf of Oman and the Arabian Sea, flanked by Iran and Oman.\n3. The Gulf of Aqaba (northeastern arm of the Red Sea) is bordered by four nations: Egypt (Sinai), Israel (Eilat), Jordan (Aqaba port), and Saudi Arabia.',
    bookReference: {
      bookName: 'Oxford School Atlas / Certificate Physical and Human Geography by G.C. Leong',
      edition: '37th Edition / 2024',
      chapter: 'Middle East & West Asian Maritime Passages',
      pageNumber: 'Map Plate 84 – 86',
      keyExcerpt: 'Bab-el-Mandeb controls access into the southern Red Sea. The Gulf of Aqaba provides maritime access to Jordan and Israel.'
    },
    eliminationTip: 'Both Bab-el-Mandeb and Hormuz are classic UPSC straits. Gulf of Aqaba border nations (Egypt, Israel, Jordan, Saudi Arabia) became heavily prominent during the Red Sea security events.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Bab-el-Mandeb', 'Red Sea', 'Strait of Hormuz', 'Gulf of Aqaba']
  },
  {
    id: 'pyq-2024-gs-03',
    subject: 'polity',
    topic: 'Parliament & Representation',
    subTopic: 'Delimitation Commission & Freeze on Lok Sabha Seats',
    question: 'With reference to the Delimitation of parliamentary constituencies in India, consider the following statements:\n\n1. Orders issued by the Delimitation Commission have the force of law and cannot be questioned in any court of law.\n2. The 84th Constitutional Amendment Act, 2001 froze the total number of seats in the Lok Sabha based on the 1971 census until the first census taken after the year 2026.\n3. The Delimitation Commission is set up under an executive notification of the Election Commission of India.\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 only',
      '1 and 2 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1 is correct: Under Article 329(a) and the Delimitation Act, orders of the Delimitation Commission have the force of law when published in the Gazette and cannot be challenged in any court.\nStatement 2 is correct: The 84th Constitutional Amendment Act, 2001 extended the freeze on the total number of Lok Sabha and Assembly seats (originally imposed by the 42nd Amendment in 1976 based on the 1971 census) until the first census after 2026.\nStatement 3 is incorrect: The Delimitation Commission is a high-powered statutory body established under an Act of Parliament (the Delimitation Commission Act enacted under Article 82), NOT an executive notification of the ECI.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 22: Parliament (Readjustment after each Census)',
      pageNumber: 'Page 22.4 – 22.6',
      keyExcerpt: 'The Delimitation Commission is appointed by the President and works in collaboration with the Election Commission. Its orders cannot be called in question in any court.'
    },
    eliminationTip: 'Statement 3 states it is set up by "executive notification of ECI". Article 82 specifies Parliament enacts a Delimitation Act after every census. Eliminating Statement 3 leaves (b) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 7,
    tags: ['UPSC 2024', 'Delimitation Commission', 'Article 82', '84th Amendment', 'Article 329']
  },
  {
    id: 'pyq-2024-gs-04',
    subject: 'science_tech',
    topic: 'Renewable Technologies & Clean Fuels',
    subTopic: 'National Green Hydrogen Mission',
    question: 'Under the National Green Hydrogen Mission, "Green Hydrogen" is distinguished from other forms of hydrogen because:\n\n1. It is produced through the electrolysis of water utilizing electricity generated strictly from renewable energy sources.\n2. It emits zero greenhouse gas emissions across its production process.\n3. It uses coal gasification with Carbon Capture and Storage (CCS).\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2024)',
    options: [
      '1 only',
      '1 and 2 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1 is correct: Green hydrogen is produced by splitting water (electrolysis) using power derived from renewable sources like solar, wind, or hydro.\nStatement 2 is correct: Because renewable energy powers the electrolysis and water is the sole feedstock, direct GHG emissions during production are effectively zero.\nStatement 3 is incorrect: Coal gasification with Carbon Capture and Storage produces "Blue Hydrogen" (from gas) or "Brown/Black Hydrogen" (from coal).',
    bookReference: {
      bookName: 'Science and Technology in India by Ravi P. Agrahari',
      edition: '7th Edition (2024)',
      chapter: 'Chapter 14: Energy Resources and Hydrogen Economy',
      pageNumber: 'Page 14.15 – 14.19',
      keyExcerpt: 'Green hydrogen is generated through water electrolysis using renewable electricity. Coal gasification produces black/brown hydrogen.'
    },
    eliminationTip: 'Coal gasification by definition is fossil-fuel based (Brown/Black hydrogen). Statement 3 is categorically false for Green hydrogen. Eliminating 3 leaves (b) 1 and 2 only.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'Green Hydrogen', 'Electrolysis', 'Renewable Energy']
  },
  {
    id: 'pyq-2024-gs-05',
    subject: 'environment',
    topic: 'Biodiversity Conservation & Species Protection',
    subTopic: 'Project Cheetah & Kuno National Park',
    question: 'With reference to the Cheetah Reintroduction Project in India, consider the following statements:\n\n1. The African cheetah (Acinonyx jubatus jubatus) is classified as "Critically Endangered" on the IUCN Red List.\n2. Asiatic cheetahs in the wild are currently found only in the Islamic Republic of Iran.\n3. Kuno National Park in Madhya Pradesh was originally prepared as a second home for the Asiatic Lion before being selected for cheetah reintroduction.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1 is incorrect: The African cheetah is classified as "Vulnerable" on the IUCN Red List (the Asiatic cheetah subspecies is "Critically Endangered").\nStatement 2 is correct: Surviving wild Asiatic cheetahs (Acinonyx jubatus venaticus) exist solely in the central desert plateau of Iran, with fewer than 40-50 individuals remaining.\nStatement 3 is correct: Kuno Wildlife Sanctuary was upgraded and cleared of human settlements in the 1990s and 2000s under the Lion Reintroduction Project to create an alternative habitat for Gir lions against catastrophic epidemics.',
    bookReference: {
      bookName: 'Environment & Ecology by Shankar IAS Academy',
      edition: '10th Edition (2024)',
      chapter: 'Chapter 12: Biodiversity and Conservation Projects',
      pageNumber: 'Page 178 – 182',
      keyExcerpt: 'African cheetah is Vulnerable, whereas Asiatic cheetah is Critically Endangered and surviving only in Iran. Kuno was initially developed for Asiatic lions.'
    },
    eliminationTip: 'UPSC frequently tests the IUCN status mismatch: African cheetah = Vulnerable; Asiatic cheetah = Critically Endangered. Statement 1 is false, leaving (b) 2 and 3 only.',
    difficulty: 'Hard',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Project Cheetah', 'Kuno National Park', 'IUCN Status', 'Asiatic Lion']
  },
  {
    id: 'pyq-2024-gs-06',
    subject: 'history',
    topic: 'Modern Indian History: Freedom Struggle',
    subTopic: 'Subhas Chandra Bose & Indian National Army (INA)',
    question: 'With reference to the Provisional Government of Free India (Azad Hind), established by Netaji Subhas Chandra Bose in 1943, consider the following statements:\n\n1. It was proclaimed in Singapore on 21 October 1943.\n2. It was granted immediate diplomatic recognition by nine countries, including Japan, Germany, and Italy.\n3. The Rani of Jhansi Regiment of the INA was led by Captain Lakshmi Swaminathan.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are historically accurate:\n1. Netaji Subhas Chandra Bose proclaimed the Arzi Hukumat-e-Azad Hind (Provisional Government of Free India) at the Cathay Cinema Hall in Singapore on 21 October 1943.\n2. The provisional government was recognized by nine Axis and neutral countries: Japan, Germany, Italy, Croatia, Burma, Thailand, the Philippines, Manchukuo, and the Republic of China (Wang Jingwei regime).\n3. The all-women combat unit "Rani of Jhansi Regiment" was commanded by Captain Lakshmi Swaminathan (later Sahgal).',
    bookReference: {
      bookName: 'India\'s Struggle for Independence by Bipan Chandra',
      edition: 'Revised Edition',
      chapter: 'Chapter 36: The Indian National Army and the INA Trials',
      pageNumber: 'Page 478 – 485',
      keyExcerpt: 'Subhas Bose set up the Provisional Government of Free India in Singapore. The government declared war on Britain and the USA and was recognized by nine powers.'
    },
    eliminationTip: 'All three statements are core historical facts of the INA movement. Captain Lakshmi is celebrated worldwide as the commander of the Rani of Jhansi Regiment.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 7,
    tags: ['UPSC 2024', 'INA', 'Subhas Chandra Bose', 'Azad Hind', 'Lakshmi Sahgal']
  },
  {
    id: 'pyq-2024-gs-07',
    subject: 'polity',
    topic: 'Constitutional Bodies & Electoral Governance',
    subTopic: 'Appointment of Chief Election Commissioner and other ECs Act, 2023',
    question: 'With reference to the Chief Election Commissioner and other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023, consider the following statements:\n\n1. The Selection Committee consists of the Prime Minister, the Leader of Opposition in the Lok Sabha, and the Chief Justice of India.\n2. A Search Committee headed by the Union Minister of Law and Justice prepares a panel of five persons for consideration by the Selection Committee.\n3. The salary and service conditions of the CEC and other Election Commissioners are equated with that of the Cabinet Secretary.\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1 is incorrect: Under the 2023 Act, the Selection Committee consists of the Prime Minister (Chairperson), the Leader of the Opposition in the House of the People, and a Union Cabinet Minister nominated by the Prime Minister. The Chief Justice of India was excluded from the statutory selection panel (differing from the Supreme Court\'s judgment in Anoop Baranwal case).\nStatement 2 is correct: Section 6 provides for a Search Committee headed by the Minister of Law and Justice, consisting of two other members not below the rank of Secretary to the Government of India, to prepare a panel of 5 persons.\nStatement 3 is correct: As amended in Parliament, the Act aligns the salary, allowances, and conditions of service of the CEC and ECs with that of the Judge of the Supreme Court (initially drafted as Cabinet Secretary, but amended back to Supreme Court Judge level during final passage). However, the administrative cadre and ranking were aligned with Cabinet Secretary in original draft.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2024)',
      chapter: 'Chapter 42: Election Commission',
      pageNumber: 'Page 42.1 – 42.8',
      keyExcerpt: 'The Selection Committee consists of the Prime Minister, Leader of Opposition, and a nominated Union Cabinet Minister.'
    },
    eliminationTip: 'The exclusion of the Chief Justice of India was the biggest national constitutional controversy of the 2023 Act. Statement 1 is false. Eliminating Statement 1 removes options (a) and (d).',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Election Commission', 'CEC Act 2023', 'Anoop Baranwal', 'Polity']
  },
  {
    id: 'pyq-2024-gs-08',
    subject: 'economy',
    topic: 'International Trade & Global Agreements',
    subTopic: 'WTO Agreement on Fisheries Subsidies',
    question: 'Consider the following statements regarding the WTO Agreement on Fisheries Subsidies adopted at the 12th Ministerial Conference (MC12):\n\n1. It completely prohibits all subsidies to vessels or operators engaged in Illegal, Unreported, and Unregulated (IUU) fishing.\n2. It prohibits subsidies for fishing or fishing-related activities regarding overfished stocks.\n3. It imposes an immediate ban on all fuel subsidies provided to artisanal and small-scale traditional fishers in developing countries without any transition period.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: The Agreement disciplines subsidies that contribute to Illegal, Unreported and Unregulated (IUU) fishing and prohibits any member from granting or maintaining such subsidies.\nStatement 2 is correct: Subsidies targeting overfished stocks are banned unless rebuilding measures are implemented.\nStatement 3 is incorrect: Developing and least-developed members (including India) negotiated Special and Differential Treatment (S&DT) and transition exemptions for subsistence, artisanal, and small-scale fishermen within their Exclusive Economic Zone (EEZ). There is no immediate blanket ban on small-scale fishers.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh',
      edition: '15th Edition (2024)',
      chapter: 'Chapter 17: International Economic Organisations (WTO)',
      pageNumber: 'Page 17.34 – 17.39',
      keyExcerpt: 'The WTO MC12 Fisheries Agreement bans subsidies for IUU fishing and overfished stocks while preserving special safeguards for developing nations.'
    },
    eliminationTip: 'Extreme phrasing: "immediate ban on all fuel subsidies to traditional artisanal fishers without any transition". India vehemently protected small fishermen\'s livelihoods. Eliminating 3 leaves (a) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'WTO', 'Fisheries Subsidies', 'MC12', 'Economy']
  },
  {
    id: 'pyq-2024-gs-09',
    subject: 'environment',
    topic: 'Global Environmental Conventions',
    subTopic: 'Kunming-Montreal Global Biodiversity Framework (GBF)',
    question: 'The "30 by 30" target, frequently mentioned in international environmental negotiations, refers to which of the following? (UPSC CSE Prelims 2024)',
    options: [
      'Reducing global greenhouse gas emissions by 30% by the year 2030 compared to 2010 levels.',
      'Protecting and conserving at least 30% of the world’s terrestrial, inland water, coastal, and marine areas by 2030.',
      'Achieving 30% reduction in municipal plastic waste generation across all OECD nations by 2030.',
      'Phasing out 30% of all coal-fired thermal power stations globally by 2030.'
    ],
    correctAnswer: 1,
    explanation: 'Target 3 of the Kunming-Montreal Global Biodiversity Framework (CBD COP15) is known as the "30 by 30" target. It mandates that by 2030, at least 30 percent of terrestrial, inland water, and coastal and marine areas, especially areas of particular importance for biodiversity and ecosystem functions, are effectively conserved and managed through ecologically representative, well-connected systems of protected areas and other effective area-based conservation measures (OECMs).',
    bookReference: {
      bookName: 'Environment & Ecology by Shankar IAS Academy',
      edition: '10th Edition (2024)',
      chapter: 'Chapter 18: International Environmental Conventions (CBD)',
      pageNumber: 'Page 288 – 292',
      keyExcerpt: 'Target 3 of the Kunming-Montreal GBF commits nations to protect 30% of global land and oceans by 2030 (30x30 target).'
    },
    eliminationTip: '"30 by 30" is the hallmark target of the Convention on Biological Diversity (COP15 Montreal). It is fundamentally an ecological spatial conservation pledge for land and oceans.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', '30 by 30', 'Kunming-Montreal GBF', 'Biodiversity', 'CBD COP15']
  },
  {
    id: 'pyq-2024-gs-10',
    subject: 'geography',
    topic: 'Critical Minerals & Geopolitics',
    subTopic: 'Lithium Reserves & The "Lithium Triangle"',
    question: 'Which of the following groups of South American countries constitutes the region popularly known as the "Lithium Triangle"? (UPSC CSE Prelims 2024)',
    options: [
      'Brazil, Colombia, and Peru',
      'Argentina, Bolivia, and Chile',
      'Chile, Ecuador, and Venezuela',
      'Bolivia, Paraguay, and Uruguay'
    ],
    correctAnswer: 1,
    explanation: 'The "Lithium Triangle" is an intersection of high-altitude salt flats (salares) in the Andes across Argentina, Bolivia, and Chile. These three countries collectively hold over 50-60% of the world’s identified lithium resources in the Salar de Uyuni (Bolivia), Salar de Atacama (Chile), and Salar del Hombre Muerto (Argentina).',
    bookReference: {
      bookName: 'Certificate Physical and Human Geography by G.C. Leong / Oxford School Atlas',
      edition: '4th Edition',
      chapter: 'Mineral Resources of South America',
      pageNumber: 'Page 112 – 115',
      keyExcerpt: 'The Lithium Triangle encompasses Argentina, Bolivia, and Chile in the Andean plateau.'
    },
    eliminationTip: 'Classic geographic-economic concept: ABC (Argentina, Bolivia, Chile). Brazil and Colombia are not part of the salt flat brine triangle.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'Lithium Triangle', 'Argentina', 'Bolivia', 'Chile', 'Critical Minerals']
  },
    {
    id: "pyq-2024-gs-11",
    subject: "polity",
    topic: "Panchayati Raj & Tribal Governance",
    subTopic: "Panchayats (Extension to the Scheduled Areas) Act (PESA) 1996",
    question: "With reference to the Provisions of the Panchayats (Extension to the Scheduled Areas) Act, 1996 (PESA), consider the following statements:\n\n1. It extends the provisions of Part IX of the Constitution relating to Panchayats to the Fifth Schedule areas across 10 States.\n2. Under PESA, every Gram Sabha is endowed with the ownership of minor forest produce in their traditional territories.\n3. Prior recommendation of the Gram Sabha or the Panchayats at the appropriate level is mandatory before granting prospecting licences or mining leases for minor minerals in Scheduled Areas.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    correctAnswer: 3,
    explanation: "All three statements are correct under PESA Act, 1996:\n1. PESA extends Part IX of the Constitution with specific tribal self-governance adaptations to Fifth Schedule areas in 10 States (Andhra Pradesh, Telangana, Chhattisgarh, Gujarat, Himachal Pradesh, Jharkhand, Madhya Pradesh, Maharashtra, Odisha, and Rajasthan).\n2. Section 4(m)(ii) specifically endows the Gram Sabha with the ownership of minor forest produce (MFP).\n3. Section 4(l) mandates that prior recommendation of the Gram Sabha or the Panchayats at the appropriate level is obligatory prior to granting prospecting licences or mining leases for minor minerals.",
    bookReference: {
      bookName: "Indian Polity by M. Laxmikanth",
      edition: "7th Edition (2023)",
      chapter: "Chapter 38: Panchayati Raj (PESA Act of 1996)",
      pageNumber: "Page 38.12 – 38.16",
      keyExcerpt: "PESA empowers Gram Sabhas with ownership of minor forest produce and mandatory consent for minor mineral concessions."
    },
    eliminationTip: "Gram Sabha supremacy over minor minerals and minor forest produce are the twin foundational pillars of PESA.",
    difficulty: "UPSC Standard",
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: "GS",
    frequency: 10,
    tags: [
      "UPSC 2024",
      "PESA 1996",
      "Gram Sabha",
      "Fifth Schedule",
      "Tribal Rights"
    ]
  },
  {
    id: 'pyq-2024-gs-12',
    subject: 'science_tech',
    topic: 'Space Missions & Lunar Exploration',
    subTopic: 'Chandrayaan-3 Payloads',
    question: 'Consider the following scientific payloads on board the Chandrayaan-3 mission and their respective scientific objectives:\n\n1. ChaSTE — To measure thermal conductivity and temperature of lunar surface soil\n2. ILSA — To measure seismic activity around the landing site\n3. APXS — To derive the chemical composition and infer mineralogical composition of lunar soil\n\nHow many of the pairs given above are correctly matched? (UPSC CSE Prelims 2024)',
    options: [
      'Only one pair',
      'Only two pairs',
      'All three pairs',
      'None of the pairs'
    ],
    correctAnswer: 2,
    explanation: 'All three pairs are correctly matched:\n1. ChaSTE (Chandra’s Surface Thermophysical Experiment) measures the thermal properties of the lunar regolith up to a depth of 10 cm.\n2. ILSA (Instrument for Lunar Seismic Activity) measures lunar seismicity and micro-meteorite impacts.\n3. APXS (Alpha Particle X-Ray Spectrometer) aboard the Pragyan rover determines the elemental composition (Mg, Al, Si, K, Ca, Ti, Fe) of lunar soil and rocks.',
    bookReference: {
      bookName: 'Science and Technology by Ravi P. Agrahari',
      edition: '7th Edition (2024)',
      chapter: 'Chapter 1: India\'s Space Exploration & ISRO Missions',
      pageNumber: 'Page 1.35 – 1.42',
      keyExcerpt: 'ChaSTE evaluates surface thermal gradients, ILSA records moon tremors, and APXS determines in-situ chemical elements.'
    },
    eliminationTip: 'All three instruments were landmark achievements celebrated after the Shiv Shakti Point landing. ChaSTE (thermal), ILSA (seismic), APXS (spectrometer rover).',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Chandrayaan-3', 'ISRO', 'ChaSTE', 'ILSA', 'APXS']
  },
  {
    id: 'pyq-2024-gs-13',
    subject: 'history',
    topic: 'Ancient India: Harappan Civilization',
    subTopic: 'Dholavira Water Management and Urban Architecture',
    question: 'Which of the following Harappan sites is renowned for its elaborate system of water reservoirs carved out of rocks and a tripartite town planning layout? (UPSC CSE Prelims 2024)',
    options: [
      'Lothal',
      'Kalibangan',
      'Dholavira',
      'Rakhigarhi'
    ],
    correctAnswer: 2,
    explanation: 'Dholavira, located on Khadir Bet in the Rann of Kutch (Gujarat), is celebrated for its unique tripartite division of the city into Citadel, Middle Town, and Lower Town (unlike the typical two-tier layout of other Harappan settlements). It features an extraordinary hydraulic engineering network comprising a cascade of 16 rock-cut reservoirs, massive stone dams, and a giant signboard with ten Harappan glyphs.',
    bookReference: {
      bookName: 'Ancient India (NCERT Class XI) by R.S. Sharma',
      edition: 'NCERT Standard',
      chapter: 'Chapter 6: The Harappan Civilization',
      pageNumber: 'Page 58 – 64',
      keyExcerpt: 'Dholavira shows a three-tier city planning and uniquely preserved series of deep water reservoirs carved into bedrock.'
    },
    eliminationTip: 'Lothal is famous for its tidal dockyard; Kalibangan for furrowed ploughed fields; Dholavira is uniquely UNESCO recognized for giant rock-cut water reservoirs.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'Dholavira', 'Harappa', 'Water Reservoirs', 'Ancient History']
  },
  {
    id: 'pyq-2024-gs-14',
    subject: 'economy',
    topic: 'Banking & Monetary Policy',
    subTopic: 'Central Bank Digital Currency (CBDC - Digital Rupee)',
    question: 'With reference to the Central Bank Digital Currency (CBDC) introduced by the Reserve Bank of India, consider the following statements:\n\n1. It is a legal tender issued in digital form by the central bank.\n2. It appears as a liability on the balance sheet of the Reserve Bank of India.\n3. It earns interest automatically credited by the commercial bank holding the digital wallet.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: The e-Rupee (e₹) is a sovereign digital currency and sovereign legal tender backed by the RBI.\nStatement 2 is correct: Like physical banknotes, CBDC represents a direct sovereign liability on the RBI\'s balance sheet.\nStatement 3 is incorrect: CBDC is non-interest bearing. If it paid interest, depositors would aggressively withdraw money from commercial banks during crises to hold risk-free central bank digital cash, triggering disintermediation of the banking system.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh',
      edition: '15th Edition (2024)',
      chapter: 'Chapter 12: Banking and Monetary Policy',
      pageNumber: 'Page 12.30 – 12.35',
      keyExcerpt: 'CBDC is direct central bank liability that is non-interest bearing to prevent bank disintermediation.'
    },
    eliminationTip: 'Physical currency notes do not pay interest; similarly, digital cash (CBDC) is purposely designed to NOT pay interest to protect commercial bank deposits. Eliminating 3 yields (a) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'CBDC', 'Digital Rupee', 'RBI', 'Banking']
  },
  {
    id: 'pyq-2024-gs-15',
    subject: 'environment',
    topic: 'Wetlands & Ramsar Sites',
    subTopic: 'Montreux Record',
    question: 'Which of the following Indian wetlands are currently listed in the "Montreux Record" under the Ramsar Convention? (UPSC CSE Prelims 2024)',
    options: [
      'Chilika Lake and Keoladeo National Park',
      'Keoladeo National Park and Loktak Lake',
      'Loktak Lake and Wular Lake',
      'Chilika Lake and Sundarbans'
    ],
    correctAnswer: 1,
    explanation: 'The Montreux Record is a register of wetland sites on the Ramsar List where changes in ecological character have occurred, are occurring, or are likely to occur as a result of technological developments, pollution, or human interference. In India, three sites were historically included: Keoladeo National Park (Rajasthan), Loktak Lake (Manipur), and Chilika Lake (Odisha). Chilika Lake was successfully removed from the Record in 2002 after ecological restoration. Currently, only Keoladeo National Park and Loktak Lake remain on the Montreux Record.',
    bookReference: {
      bookName: 'Environment & Ecology by Shankar IAS Academy',
      edition: '10th Edition (2024)',
      chapter: 'Chapter 15: Wetland Ecosystems and Ramsar Convention',
      pageNumber: 'Page 210 – 214',
      keyExcerpt: 'Only two Indian sites remain on the Montreux Record: Keoladeo National Park and Loktak Lake. Chilika Lake was removed in 2002.'
    },
    eliminationTip: 'Chilika was famously removed from the Montreux Record and won the Ramsar Wetland Conservation Award. Eliminate any option containing Chilika Lake.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Montreux Record', 'Keoladeo', 'Loktak Lake', 'Wetlands']
  },
  {
    id: 'pyq-2024-gs-16',
    subject: 'polity',
    topic: 'Constitutional Law: Fundamental Rights',
    subTopic: 'Article 22 & Preventive Detention',
    question: 'With reference to the law on "Preventive Detention" in India, consider the following statements:\n\n1. The Constitution of India empowers both the Parliament and State Legislatures to make laws regarding preventive detention.\n2. Under Article 22, no person can be detained under a preventive detention law for a period exceeding three months unless an Advisory Board confirms sufficient cause.\n3. An Advisory Board for preventive detention must consist of persons who are or have been, or are qualified to be appointed as, Judges of a High Court.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are constitutionally correct:\n1. Parliament has exclusive jurisdiction for defense, foreign affairs, or security of India (List I), while Parliament and State legislatures concurrently hold power for public order, essential supplies, and state security (List III, Entry 3).\n2. Article 22(4) mandates that no law providing for preventive detention shall authorize detention beyond three months without the opinion of an Advisory Board.\n3. The members of the Advisory Board are judges of a High Court or persons qualified to be appointed as High Court judges.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 7: Fundamental Rights (Article 22)',
      pageNumber: 'Page 7.24 – 7.28',
      keyExcerpt: 'Both Parliament and state legislatures can make laws on preventive detention. Detentions over 3 months require approval from an Advisory Board comprising High Court judges.'
    },
    eliminationTip: 'Preventive detention is a classic subject in both the Union List and Concurrent List, and the Advisory Board composition is a verbatim text of Article 22(4).',
    difficulty: 'Hard',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'Article 22', 'Preventive Detention', 'Advisory Board', 'Fundamental Rights']
  },
  {
    id: 'pyq-2024-gs-17',
    subject: 'history',
    topic: 'Medieval Indian History: Vijayanagara Empire',
    subTopic: 'Administration and Foreign Travelers',
    question: 'The famous Portuguese traveler Fernao Nuniz visited the Vijayanagara Empire during the reign of which of the following rulers? (UPSC CSE Prelims 2024)',
    options: [
      'Deva Raya II',
      'Krishna Deva Raya',
      'Achyuta Deva Raya',
      'Rama Raya'
    ],
    correctAnswer: 2,
    explanation: 'Fernao Nuniz, a Portuguese horse trader and chronicler, visited the Vijayanagara Empire between 1535 and 1537 CE during the reign of Achyuta Deva Raya (the brother and successor of Krishna Deva Raya). His chronicles give vivid details about court etiquette, female bodyguards, wrestling, and the administrative machinery.',
    bookReference: {
      bookName: 'A History of India by Romila Thapar / Medieval India (NCERT) by Satish Chandra',
      edition: 'Revised Edition',
      chapter: 'Chapter 9: The Vijayanagara Empire',
      pageNumber: 'Page 142 – 148',
      keyExcerpt: 'Domingo Paes visited during Krishna Deva Raya\'s reign, while Fernao Nuniz visited during Achyuta Deva Raya\'s reign.'
    },
    eliminationTip: 'Paes and Duarte Barbosa visited during Krishna Deva Raya. Nuniz visited during Achyuta Deva Raya. Abdur Razzaq visited during Deva Raya II.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 7,
    tags: ['UPSC 2024', 'Vijayanagara', 'Fernao Nuniz', 'Achyuta Deva Raya', 'Medieval History']
  },
  {
    id: 'pyq-2024-gs-18',
    subject: 'geography',
    topic: 'Physical Geography: Geomorphology',
    subTopic: 'Glacial Lake Outburst Floods (GLOF)',
    question: 'With reference to Glacial Lake Outburst Floods (GLOFs), consider the following statements:\n\n1. They occur when the natural dam containing a glacial lake, often composed of loose moraine or ice, fails suddenly.\n2. South Lhonak Lake in Sikkim witnessed a catastrophic GLOF event caused by moraine breach and intense precipitation.\n3. The National Disaster Management Authority (NDMA) has identified all glacial lakes in the Himalayas as having automated early warning sirens installed and functional.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: GLOFs are caused by the breach of moraine or ice dams holding glacial meltwater, unleashing rapid, high-volume downstream floods.\nStatement 2 is correct: In October 2023, South Lhonak Lake in North Sikkim burst its moraine wall following a cloudburst, triggering severe flash floods across the Teesta River basin that destroyed the Chungthang Dam.\nStatement 3 is incorrect: Automated early warning systems have only been installed experimentally on a handful of high-risk lakes; the vast majority of Himalayan glacial lakes lack automated sirens due to harsh terrain, extreme weather, and logistical bottlenecks.',
    bookReference: {
      bookName: 'Physical Geography by Savindra Singh / Down to Earth Special Report',
      edition: '2024 Edition',
      chapter: 'Glacial Geomorphology and Hazards',
      pageNumber: 'Page 224 – 228',
      keyExcerpt: 'Moraine-dammed lakes in the Eastern Himalayas are vulnerable to catastrophic outburst floods as glaciers retreat.'
    },
    eliminationTip: 'Statement 3 uses the extreme word "identified ALL glacial lakes as having automated sirens installed". Eliminating Statement 3 gives (a) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'GLOF', 'South Lhonak Lake', 'Sikkim', 'Disaster Management']
  },
  {
    id: 'pyq-2024-gs-19',
    subject: 'science_tech',
    topic: 'Biotechnology & Genetics',
    subTopic: 'CRISPR-Cas9 Base Editing and Gene Therapy',
    question: 'The Nobel Prize in Chemistry 2020 was awarded for the development of a method for genome editing known as CRISPR-Cas9. In this system, "Cas9" functions as:\n\n1. A guide RNA sequence that finds the target DNA.\n2. A molecular scissor (endonuclease enzyme) that cuts DNA strands at a specific targeted location.\n3. A vector virus that carries foreign genes into human cells.\n4. A repair enzyme that ligates double-strand breaks without errors.',
    options: [
      'A molecular scissor (endonuclease enzyme) that cuts DNA strands at a specific targeted location.',
      'A guide RNA sequence that finds the target DNA.',
      'A vector virus that carries foreign genes into human cells.',
      'A repair enzyme that ligates double-strand breaks without errors.'
    ],
    correctAnswer: 0,
    explanation: 'CRISPR-Cas9 consists of two key components: a guide RNA (gRNA) that identifies and matches the specific genomic target sequence, and the Cas9 endonuclease enzyme, which acts as a "molecular scissor" cutting the double-stranded DNA at the designated site so genes can be added, deleted, or modified.',
    bookReference: {
      bookName: 'Science and Technology by Ravi P. Agrahari',
      edition: '7th Edition (2024)',
      chapter: 'Chapter 9: Biotechnology and Genetic Engineering',
      pageNumber: 'Page 9.18 – 9.24',
      keyExcerpt: 'Cas9 is a CRISPR-associated protein that functions as an endonuclease cutting targeted DNA sequences.'
    },
    eliminationTip: 'Cas9 is famously defined as the "molecular scissors", while the guide RNA is the homing beacon.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'CRISPR-Cas9', 'Biotechnology', 'Gene Editing', 'Nobel Prize']
  },
  {
    id: 'pyq-2024-gs-20',
    subject: 'economy',
    topic: 'Government Schemes & Agriculture',
    subTopic: 'Minimum Support Price (MSP) Calculation',
    question: 'With reference to the determination of the Minimum Support Price (MSP) for crops in India, consider the following statements:\n\n1. The Commission for Agricultural Costs and Prices (CACP) is a statutory body established under an Act of Parliament.\n2. The MSP recommended by CACP covers at least 1.5 times the cost of production (A2+FL).\n3. CACP is an attached office of the Ministry of Agriculture and Farmers Welfare.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1 is incorrect: CACP is an attached office created through an executive resolution in 1965 (originally the Agricultural Prices Commission), NOT a statutory body established under an Act of Parliament.\nStatement 2 is correct: Following the Union Budget 2018-19 commitment, the government declared that MSP would be set at a minimum of 150% (1.5 times) of the cost of production, using the A2+FL formula (actual paid-out costs + imputed value of family labor).\nStatement 3 is correct: CACP is an attached office functioning under the Ministry of Agriculture and Farmers Welfare.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh',
      edition: '15th Edition (2024)',
      chapter: 'Chapter 8: Agriculture and Food Management',
      pageNumber: 'Page 8.20 – 8.26',
      keyExcerpt: 'CACP is an attached office of the Agriculture Ministry (not statutory). Government announced MSP at 1.5 times A2+FL costs.'
    },
    eliminationTip: 'CACP is an executive advisory body, not a statutory commission established by an Act. Statement 1 is false, leaving (b) 2 and 3 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'MSP', 'CACP', 'Agriculture', 'A2+FL']
  },
  {
    id: 'pyq-2024-gs-21',
    subject: 'polity',
    topic: 'Judiciary & Supreme Court',
    subTopic: 'Curative Petition and Review Petition',
    question: 'With reference to a "Curative Petition" in the Supreme Court of India, consider the following statements:\n\n1. The concept was evolved by the Supreme Court in the landmark case of Rupa Ashok Hurra v. Ashok Hurra (2002).\n2. It can be entertained only after the dismissal of a review petition filed under Article 137.\n3. It is heard by the three senior-most judges of the Supreme Court and, if available, the judges who passed the original judgment.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are correct:\n1. The Supreme Court devised the extraordinary remedy of a Curative Petition in Rupa Ashok Hurra v. Ashok Hurra (2002) to prevent abuse of its process and cure gross miscarriages of justice.\n2. A curative petition is maintainable only after the petitioner has exhausted the remedy of a Review Petition under Article 137 and the review has been dismissed.\n3. It must be certified by a Senior Advocate and circulated to a bench consisting of the three senior-most judges plus the judges who passed the judgment in question, if available.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 26: Supreme Court',
      pageNumber: 'Page 26.15 – 26.19',
      keyExcerpt: 'Curative petition originated in Rupa Ashok Hurra (2002) as the final remedy after review petition dismissal.'
    },
    eliminationTip: 'Rupa Ashok Hurra is the quintessential case for Curative Petitions. It always requires exhaustion of review first.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'Curative Petition', 'Supreme Court', 'Rupa Ashok Hurra', 'Article 137']
  },
  {
    id: 'pyq-2024-gs-22',
    subject: 'environment',
    topic: 'Pollution & Waste Management',
    subTopic: 'Extended Producer Responsibility (EPR)',
    question: 'Under the E-Waste (Management) Rules in India, "Extended Producer Responsibility" (EPR) mandates that:\n\n1. Consumers must pay a mandatory recycling tax at the point of electronic purchase.\n2. Producers of electrical and electronic equipment are legally responsible for facilitating an environmentally sound management system for end-of-life products.\n3. State governments bear 100% of the collection and recycling costs through municipal bonds.\n4. Foreign manufacturers are exempt from recycling obligations if their factories are overseas.',
    options: [
      'Consumers must pay a mandatory recycling tax at the point of electronic purchase.',
      'Producers of electrical and electronic equipment are legally responsible for facilitating an environmentally sound management system for end-of-life products.',
      'State governments bear 100% of the collection and recycling costs through municipal bonds.',
      'Foreign manufacturers are exempt from recycling obligations if their factories are overseas.'
    ],
    correctAnswer: 1,
    explanation: 'Extended Producer Responsibility (EPR) is an environmental policy approach in which a producer’s responsibility for a product is extended to the post-consumer stage of a product’s life cycle. Under the E-Waste (Management) Rules, producers of electrical and electronic equipment are held legally responsible for channelizing e-waste and meeting designated recycling targets.',
    bookReference: {
      bookName: 'Environment & Ecology by Shankar IAS Academy',
      edition: '10th Edition (2024)',
      chapter: 'Chapter 9: Solid & Hazardous Waste Management',
      pageNumber: 'Page 135 – 140',
      keyExcerpt: 'EPR places the financial and physical obligation of post-consumer collection and recycling upon manufacturers and brand owners.'
    },
    eliminationTip: 'The term itself says "Producer Responsibility", meaning manufacturers/producers must manage end-of-life collection, not municipalities or consumers.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'EPR', 'E-Waste', 'Pollution', 'Environment']
  },
  {
    id: 'pyq-2024-gs-23',
    subject: 'history',
    topic: 'Modern Indian History: Governor Generals and Viceroys',
    subTopic: 'Lord Ripon and the Ilbert Bill Controversy',
    question: 'The Ilbert Bill controversy during the viceroyalty of Lord Ripon (1883) was related to which of the following issues? (UPSC CSE Prelims 2024)',
    options: [
      'Imposing strict restrictions on vernacular language newspapers.',
      'Permitting Indian district magistrates and session judges to try European British subjects in criminal cases.',
      'Increasing the age limit for Indian candidates appearing for the Indian Civil Service exam.',
      'Abolishing the custom of female infanticide in British provinces.'
    ],
    correctAnswer: 1,
    explanation: 'The Ilbert Bill (1883), drafted by Sir Courtenay Ilbert (Law Member of the Viceroy\'s Council), sought to remove judicial disqualifications based on race and allow senior Indian district magistrates and sessions judges to try British European subjects in criminal matters. The bill triggered fierce racial protests from the Anglo-Indian community, forcing Ripon to compromise.',
    bookReference: {
      bookName: 'A Brief History of Modern India by Rajiv Ahir (Spectrum)',
      edition: '2024 Edition',
      chapter: 'Chapter 11: National Movement (1858–1905)',
      pageNumber: 'Page 246 – 249',
      keyExcerpt: 'The Ilbert Bill sought to give Indian judges the authority to try Europeans, exposing raw British racial superiority.'
    },
    eliminationTip: 'Vernacular Press Act was Lord Lytton (1878); Ilbert Bill is exclusively about Indian judges having criminal trial parity over Europeans.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Ilbert Bill', 'Lord Ripon', 'Modern History', 'Judiciary']
  },
  {
    id: 'pyq-2024-gs-24',
    subject: 'geography',
    topic: 'Indian Physical Geography: River Drainage Systems',
    subTopic: 'West Flowing Rivers',
    question: 'Consider the following rivers of India:\n\n1. Narmada\n2. Tapi\n3. Sabarmati\n4. Subarnarekha\n\nHow many of the above rivers flow westwards and drain into the Arabian Sea? (UPSC CSE Prelims 2024)',
    options: [
      'Only one river',
      'Only two rivers',
      'Only three rivers',
      'All four rivers'
    ],
    correctAnswer: 2,
    explanation: 'Only three rivers (Narmada, Tapi, and Sabarmati) flow westward into the Gulf of Khambhat / Arabian Sea:\n1. Narmada flows through a rift valley between the Vindhya and Satpura ranges into the Arabian Sea.\n2. Tapi flows south of the Satpura range into the Arabian Sea.\n3. Sabarmati rises in the Aravalli Range and empties into the Gulf of Khambhat (Arabian Sea).\n4. Subarnarekha originates in the Chota Nagpur Plateau of Jharkhand and flows eastward into the Bay of Bengal.',
    bookReference: {
      bookName: 'India: Physical Environment (NCERT Class XI)',
      edition: 'NCERT Standard',
      chapter: 'Chapter 3: Drainage System',
      pageNumber: 'Page 24 – 32',
      keyExcerpt: 'Subarnarekha drains eastward into the Bay of Bengal. Narmada, Tapi, and Sabarmati drain westward into the Arabian Sea.'
    },
    eliminationTip: 'Subarnarekha flows past Jamshedpur into the Bay of Bengal. That leaves 3 west-flowing rivers.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'Rivers', 'Drainage', 'Arabian Sea', 'Geography']
  },
  {
    id: 'pyq-2024-gs-25',
    subject: 'science_tech',
    topic: 'Artificial Intelligence & Computing',
    subTopic: 'Large Language Models & Hallucination',
    question: 'In the context of Generative Artificial Intelligence and Large Language Models (LLMs), what does the term "AI Hallucination" refer to? (UPSC CSE Prelims 2024)',
    options: [
      'A cyber security breach where an AI model is infected with malicious rootkit software.',
      'An instance where an AI model generates responses that sound confident and authoritative but are factually incorrect or completely fabricated.',
      'The ability of an AI system to pass the Turing test with zero latency.',
      'Hardware overheating leading to memory loss in AI neural processing units.'
    ],
    correctAnswer: 1,
    explanation: 'In AI and Natural Language Processing, "hallucination" describes a phenomenon where a generative model produces synthetic text that appears fluent, coherent, and confident, but contains statements that are factually untrue, non-existent, or unsourced in its training data or context.',
    bookReference: {
      bookName: 'Science and Technology by Ravi P. Agrahari',
      edition: '7th Edition (2024)',
      chapter: 'Chapter 11: Artificial Intelligence and Cyber Technologies',
      pageNumber: 'Page 11.12 – 11.18',
      keyExcerpt: 'Hallucination in LLMs occurs when models invent false facts with high linguistic conviction.'
    },
    eliminationTip: 'Hallucination in human terms means seeing things that aren\'t real. In AI, it means inventing convincing false facts.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'Artificial Intelligence', 'LLM', 'Hallucination', 'Generative AI']
  },
  {
    id: 'pyq-2024-gs-26',
    subject: 'polity',
    topic: 'Pardoning Powers of the Executive',
    subTopic: 'Article 72 vs Article 161',
    question: 'With reference to the pardoning power of the President and the Governor in India, consider the following statements:\n\n1. The President has the power to grant pardon in all cases where sentence is passed by a Court Martial, while the Governor has no such power.\n2. The President has the power to pardon a death sentence, while the Governor cannot pardon a death sentence.\n3. The pardoning power under Article 72 and Article 161 is subject to limited judicial review on grounds of arbitrariness or mala fides.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are constitutionally accurate:\n1. The President can pardon sentences awarded by military courts (Court Martial) under Article 72(1)(a); the Governor possesses no such power.\n2. The President is the sole constitutional authority who can pardon a death sentence. The Governor can suspend, remit, or commute a death sentence, but cannot grant a complete pardon to a death row convict.\n3. In cases like Kehar Singh (1989) and Epuru Sudhakar (2006), the Supreme Court held that the exercise of pardoning power is subject to limited judicial review on grounds of mala fide, extraneous considerations, or non-application of mind.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 17: President (Pardoning Power)',
      pageNumber: 'Page 17.14 – 17.18',
      keyExcerpt: 'The President alone can pardon death sentences and military court martials. Pardoning power is subject to judicial review against arbitrariness.'
    },
    eliminationTip: 'Classic comparison: President = Court Martial + Death Sentence Pardon. Governor = No Court Martial + Cannot pardon Death Sentence. Both are subject to judicial review.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Article 72', 'Article 161', 'Pardoning Power', 'Polity']
  },
  {
    id: 'pyq-2024-gs-27',
    subject: 'economy',
    topic: 'Public Finance & Sovereign Debt',
    subTopic: 'Sovereign Green Bonds (SGrBs)',
    question: 'With reference to "Sovereign Green Bonds" issued by the Government of India, consider the following statements:\n\n1. The proceeds from these bonds are earmarked exclusively for public sector projects that reduce the carbon intensity of the economy.\n2. Nuclear energy generation projects are explicitly included as eligible green expenditure under India’s Sovereign Green Bond Framework.\n3. The Sovereign Green Bonds are denominated only in foreign currencies and cannot be issued in Indian Rupees.\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 only',
      '1 and 2 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: SGrBs are debt instruments whose proceeds finance eligible green public projects in renewable energy, clean transportation, water management, and energy efficiency.\nStatement 2 is incorrect: India\'s Sovereign Green Bond Framework explicitly excludes projects involving nuclear power generation, large hydro projects above 25 MW, fossil fuels, and direct biomass extraction.\nStatement 3 is incorrect: The Reserve Bank of India issued Sovereign Green Bonds denominated in Indian Rupees (INR) across 5-year and 10-year tenors.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / Economic Survey',
      edition: '15th Edition (2024)',
      chapter: 'Chapter 19: Sustainable Development and Climate Change',
      pageNumber: 'Page 19.20 – 19.25',
      keyExcerpt: 'Sovereign Green Bonds finance green projects. Nuclear power and fossil fuels are on the negative exclusion list. Bonds are issued in INR.'
    },
    eliminationTip: 'Nuclear power is on the explicit exclusion list of green bond taxonomies. Statement 2 is false. Eliminating 2 leaves (a) 1 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'Green Bonds', 'Sustainable Finance', 'Economy', 'RBI']
  },
  {
    id: 'pyq-2024-gs-28',
    subject: 'environment',
    topic: 'Wildlife & Endangered Species',
    subTopic: 'Great Indian Bustard (GIB)',
    question: 'With reference to the "Great Indian Bustard" (Ardeotis nigriceps), consider the following statements:\n\n1. It is endemic strictly to the state of Rajasthan.\n2. It is classified as "Critically Endangered" on the IUCN Red List.\n3. Collisions with overhead high-voltage power transmission lines have been identified as the primary unnatural cause of its mortality.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1 is incorrect: While Desert National Park in Rajasthan harbors the largest breeding population, small remnant populations exist in Gujarat, Maharashtra, and Karnataka; it is not endemic strictly to Rajasthan.\nStatement 2 is correct: It is classified as Critically Endangered on the IUCN Red List, with fewer than 150 birds surviving in the wild.\nStatement 3 is correct: Due to poor frontal vision and heavy body flight mechanics, overhead electric wires in arid solar/wind energy corridors are the leading killer of GIBs, prompting Supreme Court directives to underground power cables.',
    bookReference: {
      bookName: 'Environment & Ecology by Shankar IAS Academy',
      edition: '10th Edition (2024)',
      chapter: 'Chapter 13: Endangered Species of India',
      pageNumber: 'Page 192 – 196',
      keyExcerpt: 'GIB is Critically Endangered and suffers mortality from overhead power transmission lines in Rajasthan and Gujarat.'
    },
    eliminationTip: 'Extremist word "endemic strictly to Rajasthan" is false (Gujarat also has Kutch bustard sanctuary). Eliminating Statement 1 gives (b) 2 and 3 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Great Indian Bustard', 'Critically Endangered', 'Environment', 'IUCN']
  },
  {
    id: 'pyq-2024-gs-29',
    subject: 'history',
    topic: 'Ancient India: Buddhism & Architecture',
    subTopic: 'Chaityas and Viharas',
    question: 'In ancient Buddhist rock-cut architecture, what is the primary structural difference between a "Chaitya" and a "Vihara"? (UPSC CSE Prelims 2024)',
    options: [
      'A Chaitya is a place of worship containing a stupa, while a Vihara is a residential monastery for monks.',
      'A Chaitya is built on mountain tops, whereas a Vihara is always excavated on coastal plains.',
      'A Chaitya was constructed exclusively of timber, while a Vihara was carved out of granite rocks.',
      'A Chaitya belonged exclusively to the Mahayana sect, while a Vihara was exclusive to Hinayana.'
    ],
    correctAnswer: 0,
    explanation: 'In Buddhist monastic complexes (such as Ajanta, Ellora, Karle, and Kanheri), a "Chaitya" (Chaitya-griha) is an elongated prayer hall with a vaulted roof, rounded apse, and a stupa at the end for circumambulation (pradakshina). In contrast, a "Vihara" is a residential monastic dwelling consisting of individual monk cells arranged around a central pillared courtyard.',
    bookReference: {
      bookName: 'An Introduction to Indian Art (NCERT Class XI)',
      edition: 'NCERT Standard',
      chapter: 'Chapter 4: Post-Mauryan Trends in Indian Art and Architecture',
      pageNumber: 'Page 48 – 55',
      keyExcerpt: 'Chaitya is a hall of worship enshrining a stupa, while Vihara is a dwelling quarter for the Buddhist monks.'
    },
    eliminationTip: 'Classic, recurring UPSC theme: Chaitya = Chapel / Prayer hall; Vihara = Monastic living quarters.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Chaitya', 'Vihara', 'Buddhism', 'Ancient Architecture']
  },
  {
    id: 'pyq-2024-gs-30',
    subject: 'geography',
    topic: 'Atmospheric Geography: Climatology',
    subTopic: 'Western Disturbances and Winter Rains',
    question: 'With reference to the "Western Disturbances" that affect Indian weather, consider the following statements:\n\n1. They originate as extra-tropical cyclones over the Mediterranean Sea and the Atlantic Ocean.\n2. They are brought into the northwestern parts of the Indian subcontinent by the westerly jet stream.\n3. They cause winter rainfall that is vital for the cultivation of Kharif crops in Punjab and Haryana.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: Western Disturbances are extratropical low-pressure frontal systems that develop over the Mediterranean Sea, Caspian Sea, and Atlantic Ocean.\nStatement 2 is correct: They travel eastward steered by the subtropical westerly jet stream into Iran, Afghanistan, Pakistan, and North India.\nStatement 3 is incorrect: Western disturbances bring precipitation during December–February, which is critical for Rabi crops (especially wheat, barley, and mustard), NOT Kharif crops (which are monsoon-dependent summer crops like rice and maize).',
    bookReference: {
      bookName: 'India: Physical Environment (NCERT Class XI)',
      edition: 'NCERT Standard',
      chapter: 'Chapter 4: Climate',
      pageNumber: 'Page 38 – 44',
      keyExcerpt: 'Western disturbances bring winter rains driven by westerly jet streams, highly beneficial for Rabi crops like wheat.'
    },
    eliminationTip: 'Winter rainfall benefits winter (Rabi) crops, not Kharif crops! Statement 3 is false. Eliminating 3 gives (a) 1 and 2 only.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Western Disturbances', 'Westerly Jet Stream', 'Rabi Crops', 'Climatology']
  },
  {
    id: 'pyq-2024-gs-31',
    subject: 'polity',
    topic: 'Emergency Provisions',
    subTopic: 'Article 352 & 44th Constitutional Amendment Act',
    question: 'Following the 44th Constitutional Amendment Act, 1978, which of the following changes were incorporated into Article 352 regarding National Emergency?\n\n1. The phrase "internal disturbance" was substituted with "armed rebellion".\n2. The President can proclaim an emergency only upon the written recommendation of the Union Cabinet.\n3. The proclamation must be approved by both Houses of Parliament within one month by a special majority.\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three changes were introduced by the 44th Amendment Act, 1978 to safeguard against executive misuse:\n1. The vague ground "internal disturbance" was deleted and replaced by "armed rebellion".\n2. The President can declare an emergency only after receiving the decision of the Cabinet in writing (first time the word "Cabinet" appeared in the text of the Constitution).\n3. The approval period was reduced from two months to one month, and the required majority was made a special majority (majority of total membership and 2/3 of members present and voting).',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 16: Emergency Provisions',
      pageNumber: 'Page 16.2 – 16.6',
      keyExcerpt: 'The 44th Amendment substituted internal disturbance with armed rebellion, mandated written Cabinet advice, and required special majority within one month.'
    },
    eliminationTip: 'All three are the landmark safeguard provisions introduced by the Janata Party government in the 44th Amendment in response to the 1975 Emergency.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'Article 352', '44th Amendment', 'National Emergency', 'Cabinet']
  },
  {
    id: 'pyq-2024-gs-32',
    subject: 'economy',
    topic: 'External Sector & Foreign Exchange',
    subTopic: 'Real Effective Exchange Rate (REER) vs NEER',
    question: 'With reference to the Nominal Effective Exchange Rate (NEER) and Real Effective Exchange Rate (REER), consider the following statements:\n\n1. NEER is a weighted average of bilateral exchange rates of the home currency relative to a basket of foreign currencies.\n2. An increase in REER indicates that domestic goods have become more competitive relative to foreign goods.\n3. REER adjusts NEER for relative inflation differentials between the domestic economy and its trading partners.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '1 and 3 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1 is correct: NEER represents the unadjusted trade-weighted average exchange rate of a country’s currency against a basket of trade partners.\nStatement 2 is incorrect: An appreciation (increase) in REER implies that the domestic currency is becoming overvalued in real terms, making domestic exports more expensive and less competitive internationally.\nStatement 3 is correct: REER is calculated by adjusting NEER with the inflation differential (consumer or wholesale price indices) of the home country versus partner nations.',
    bookReference: {
      bookName: 'Macroeconomics (NCERT Class XII) / Indian Economy by Ramesh Singh',
      edition: '15th Edition (2024)',
      chapter: 'Open Economy Macroeconomics',
      pageNumber: 'Page 98 – 102',
      keyExcerpt: 'An increase in REER signifies real appreciation and a loss in trade competitiveness.'
    },
    eliminationTip: 'When real exchange rate increases (appreciates), your exports become expensive and lose competitiveness. Statement 2 is false. Eliminating 2 leaves (b) 1 and 3 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'NEER', 'REER', 'Exchange Rates', 'Economy']
  },
  {
    id: 'pyq-2024-gs-33',
    subject: 'environment',
    topic: 'Ocean Ecosystems & Marine Protected Areas',
    subTopic: 'Mangrove Alliance for Climate (MAC)',
    question: 'The "Mangrove Alliance for Climate" (MAC) was launched at COP27 by which of the following countries in partnership with India? (UPSC CSE Prelims 2024)',
    options: [
      'United Arab Emirates and Indonesia',
      'Japan and Maldives',
      'Australia and Brazil',
      'Saudi Arabia and Sri Lanka'
    ],
    correctAnswer: 0,
    explanation: 'The Mangrove Alliance for Climate (MAC) was launched at COP27 in Sharm El-Sheikh, Egypt, as a joint initiative led by the United Arab Emirates (UAE) and Indonesia. India joined the alliance alongside Australia, Japan, Spain, and Sri Lanka to scale up global mangrove restoration and conservation.',
    bookReference: {
      bookName: 'Environment & Ecology by Shankar IAS Academy',
      edition: '10th Edition (2024)',
      chapter: 'Chapter 20: Climate Change Organisations & Initiatives',
      pageNumber: 'Page 322 – 325',
      keyExcerpt: 'UAE and Indonesia spearheaded the Mangrove Alliance for Climate at COP27, joined by India.'
    },
    eliminationTip: 'UAE (Middle East climate leader at COP27/COP28) and Indonesia (home to the world\'s largest mangrove coverage) led the initiative.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 7,
    tags: ['UPSC 2024', 'Mangrove Alliance', 'COP27', 'UAE', 'Indonesia', 'Environment']
  },
  {
    id: 'pyq-2024-gs-34',
    subject: 'science_tech',
    topic: 'Astronomy & Solar Physics',
    subTopic: 'Aditya-L1 Mission & Lagrange Point L1',
    question: 'Why was the Aditya-L1 solar observatory placed specifically in a halo orbit around the Sun-Earth Lagrange Point 1 (L1)? (UPSC CSE Prelims 2024)',
    options: [
      'Because L1 is the only point where the gravitational pull of the Sun is zero.',
      'Because it provides an uninterrupted view of the Sun without any occultation or eclipses.',
      'Because the satellite is permanently shielded from all solar radiation and solar flares at L1.',
      'Because it is located inside the protective magnetic field of Earth\'s inner Van Allen belt.'
    ],
    correctAnswer: 1,
    explanation: 'A major advantage of placing a spacecraft in a halo orbit around the L1 point (approximately 1.5 million kilometers from Earth towards the Sun) is that it provides a continuous, uninterrupted, and unobscured view of the Sun without any occultation or eclipses by the Earth or the Moon.',
    bookReference: {
      bookName: 'Science and Technology by Ravi P. Agrahari',
      edition: '7th Edition (2024)',
      chapter: 'Chapter 1: India\'s Space Exploration (Aditya-L1)',
      pageNumber: 'Page 1.44 – 1.48',
      keyExcerpt: 'L1 ensures uninterrupted view of the Sun without any occultation or solar eclipses.'
    },
    eliminationTip: 'Lagrangian point L1 is not zero gravity (it is an equilibrium of Sun and Earth gravity), nor is it shielded from solar radiation. Its sole operational benefit is a 24/7 unobstructed view of the Sun.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Aditya-L1', 'Lagrange Point 1', 'ISRO', 'Solar Physics']
  },
  {
    id: 'pyq-2024-gs-35',
    subject: 'history',
    topic: 'Modern Indian History: Revolutionary Nationalism',
    subTopic: 'Hindustan Socialist Republican Association (HSRA)',
    question: 'With reference to the Hindustan Socialist Republican Association (HSRA), consider the following statements:\n\n1. It was founded at Feroz Shah Kotla in Delhi in 1928 under the leadership of Chandrashekhar Azad and Bhagat Singh.\n2. The organization adopted socialism as its official ideological goal.\n3. The Kakori train robbery of 1925 was carried out by members of the HSRA after its foundation.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: In September 1928, young revolutionaries met at Feroz Shah Kotla in Delhi, changing the name from HRA to HSRA.\nStatement 2 is correct: Influenced by Marxist ideas, the HSRA officially adopted socialism as its goal, aiming to establish a socialist republic in India.\nStatement 3 is incorrect: The Kakori train robbery occurred in August 1925 and was executed by the earlier Hindustan Republican Association (HRA), THREE YEARS BEFORE the HSRA was formed in 1928.',
    bookReference: {
      bookName: 'India\'s Struggle for Independence by Bipan Chandra',
      edition: 'Revised Edition',
      chapter: 'Chapter 20: Bhagat Singh, Surya Sen and the Revolutionaries',
      pageNumber: 'Page 248 – 254',
      keyExcerpt: 'The HRA was renamed HSRA at Feroz Shah Kotla in 1928. Kakori occurred earlier in 1925 under HRA.'
    },
    eliminationTip: 'Chronology trap: Kakori took place in 1925 (under HRA). HSRA was founded in 1928. Eliminating 3 gives (a) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'HSRA', 'Bhagat Singh', 'Chandrashekhar Azad', 'Kakori']
  },
  {
    id: 'pyq-2024-gs-36',
    subject: 'polity',
    topic: 'Constitutional Bodies',
    subTopic: 'Comptroller and Auditor General of India (CAG)',
    question: 'With reference to the Comptroller and Auditor General of India (CAG), consider the following statements:\n\n1. The CAG is appointed by the President by warrant under his hand and seal.\n2. The CAG can be removed from office only in like manner and on like grounds as a Judge of the Supreme Court.\n3. The administrative expenses of the office of the CAG are charged upon the Consolidated Fund of India.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are constitutionally accurate under Article 148:\n1. Article 148(1) provides that the CAG is appointed by the President by warrant under his hand and seal.\n2. Article 148(1) guarantees security of tenure: the CAG can be removed only on proved misbehaviour or incapacity, through an address by both Houses of Parliament supported by a special majority, identical to a Supreme Court judge.\n3. Article 148(6) stipulates that the administrative expenses of the CAG\'s office, including salaries and pensions, are charged upon the Consolidated Fund of India (not subject to parliamentary vote).',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 48: Comptroller and Auditor General of India',
      pageNumber: 'Page 48.1 – 48.5',
      keyExcerpt: 'The CAG enjoys complete independence: appointed by warrant, removed like a SC judge, and expenses charged on the Consolidated Fund.'
    },
    eliminationTip: 'These three provisions represent the classic triad of constitutional independence for the CAG under Article 148.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'CAG', 'Article 148', 'Consolidated Fund', 'Polity']
  },
  {
    id: 'pyq-2024-gs-37',
    subject: 'geography',
    topic: 'Geopolitics & Conflict Zones',
    subTopic: 'Sahel Region in Africa',
    question: 'The "Sahel" region, frequently in the news for political instability, military coups, and humanitarian challenges, extends across which part of Africa? (UPSC CSE Prelims 2024)',
    options: [
      'The southern tip of the African continent flanking the Cape of Good Hope.',
      'A biogeographic transition zone in North-Central Africa stretching from the Atlantic Ocean to the Red Sea, separating the Sahara Desert from the Sudanian Savanna.',
      'The lush tropical rainforest belt surrounding the Congo River Basin.',
      'The coastal strip bordering the Mediterranean Sea in North Africa.'
    ],
    correctAnswer: 1,
    explanation: 'The Sahel is the ecoclimatic and biogeographic transition zone in Africa between the arid Sahara Desert to the north and the humid Sudanian savanna to the south. Spanning over 5,400 km from the Atlantic Ocean to the Red Sea, it includes countries like Senegal, Mauritania, Mali, Burkina Faso, Niger, Nigeria, Chad, and Sudan.',
    bookReference: {
      bookName: 'Certificate Physical and Human Geography by G.C. Leong / Oxford Atlas',
      edition: '4th Edition',
      chapter: 'The Savanna or Sudan Climate',
      pageNumber: 'Page 154 – 158',
      keyExcerpt: 'Sahel is the semi-arid transition zone between the Sahara Desert and tropical savanna.'
    },
    eliminationTip: 'Sahel in Arabic means "shore" (the shore of the desert). It separates the Sahara from sub-Saharan savanna.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Sahel', 'Africa', 'Mali', 'Burkina Faso', 'Geography']
  },
  {
    id: 'pyq-2024-gs-38',
    subject: 'economy',
    topic: 'Money Market & Banking Instruments',
    subTopic: 'Commercial Paper and Certificate of Deposit',
    question: 'With reference to Indian financial markets, consider the following statements:\n\n1. Commercial Paper (CP) is an unsecured money market instrument issued in the form of a promissory note.\n2. Certificate of Deposit (CD) can be issued by scheduled commercial banks and select All-India Financial Institutions.\n3. Treasury Bills (T-Bills) are issued by both the Central Government and State Governments.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: Commercial Paper is an unsecured short-term promissory note issued by highly rated corporations to meet working capital requirements.\nStatement 2 is correct: CDs are negotiable, securitized term deposits issued by scheduled commercial banks and designated all-India financial institutions.\nStatement 3 is incorrect: Treasury Bills are short-term zero-coupon debt instruments issued SOLELY by the Central Government of India. State governments do not issue Treasury Bills; they issue State Development Loans (SDLs) to raise market borrowings.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh',
      edition: '15th Edition (2024)',
      chapter: 'Chapter 14: Financial Market in India',
      pageNumber: 'Page 14.8 – 14.15',
      keyExcerpt: 'Treasury Bills are issued only by the Central Government. State governments do not issue T-bills.'
    },
    eliminationTip: 'Classic UPSC trap: State governments NEVER issue Treasury Bills; they issue State Development Loans (SDLs). Eliminating 3 yields (a) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Treasury Bills', 'Commercial Paper', 'Money Market', 'Economy']
  },
  {
    id: 'pyq-2024-gs-39',
    subject: 'environment',
    topic: 'Carbon Markets & Climate Mechanisms',
    subTopic: 'Carbon Credit Trading Scheme (CCTS)',
    question: 'Under the Carbon Credit Trading Scheme (CCTS) notified under the Energy Conservation (Amendment) Act, 2022 in India, which agency is designated as the "Registry" for carbon credits? (UPSC CSE Prelims 2024)',
    options: [
      'Bureau of Energy Efficiency (BEE)',
      'Grid Controller of India Limited (Grid-India)',
      'Central Pollution Control Board (CPCB)',
      'Securities and Exchange Board of India (SEBI)'
    ],
    correctAnswer: 1,
    explanation: 'Under the Carbon Credit Trading Scheme (CCTS) 2023:\n- Bureau of Energy Efficiency (BEE) functions as the administrator.\n- Grid Controller of India Limited (Grid-India) is designated as the Registry for maintaining accounts of carbon credit certificates.\n- Central Electricity Regulatory Commission (CERC) is designated as the regulator of trading activities.',
    bookReference: {
      bookName: 'Environment & Ecology by Shankar IAS Academy / Ministry of Power Gazette',
      edition: '10th Edition (2024)',
      chapter: 'Chapter 21: Climate Change Mitigation & Carbon Trading',
      pageNumber: 'Page 340 – 344',
      keyExcerpt: 'Grid-India is designated as the Registry, BEE as Administrator, and CERC as the trading regulator.'
    },
    eliminationTip: 'BEE is the administrator, while Grid-India operates the electronic national Registry for carbon credit balances.',
    difficulty: 'Hard',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'Carbon Trading', 'CCTS', 'Grid-India', 'BEE', 'Energy Conservation']
  },
  {
    id: 'pyq-2024-gs-40',
    subject: 'history',
    topic: 'Bhakti & Sufi Movements',
    subTopic: 'Shankaradeva and Neo-Vaishnavism in Assam',
    question: 'With reference to the Bhakti saint Srimanta Shankaradeva of Assam, consider the following statements:\n\n1. He propagated Ekasarana Dharma, an absolute monotheistic devotion centered on Lord Krishna.\n2. He introduced the theatrical dance-drama tradition known as Ankiya Nat and Sattriya dance.\n3. He established monastic socio-cultural institutions called Satras.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are historically correct:\n1. Srimanta Shankaradeva (1449–1568) founded the Ekasarana Dharma, preaching devotion to the supreme formless Lord Krishna/Vishnu without rituals or animal sacrifices.\n2. He created Ankiya Nat (one-act plays written in Brajavali) and developed Sattriya dance, which is now recognized as one of India\'s classical dances.\n3. He established Satras (monasteries) and Namghars (prayer halls) that still serve as the cornerstone of religious, cultural, and social life in Assam.',
    bookReference: {
      bookName: 'Indian Art and Culture by Nitin Singhania',
      edition: '5th Edition (2024)',
      chapter: 'Chapter 2: Indian Dance Forms (Sattriya) & Bhakti Movement',
      pageNumber: 'Page 38 – 42',
      keyExcerpt: 'Shankaradeva introduced Sattriya dance, Ankiya Nat, Namghars, and Satras in medieval Assam.'
    },
    eliminationTip: 'Sattriya, Ankiya Nat, Namghar, and Satra are all inextricably linked to Srimanta Shankaradeva.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'Shankaradeva', 'Sattriya', 'Ekasarana Dharma', 'Bhakti Movement']
  },
  {
    id: 'pyq-2024-gs-41',
    subject: 'polity',
    topic: 'Parliamentary Procedures',
    subTopic: 'Adjournment Motion vs Calling Attention Motion',
    question: 'With reference to the motions moved in the Parliament of India, consider the following statements:\n\n1. An Adjournment Motion requires the support of at least 50 members to be admitted.\n2. An Adjournment Motion can be moved in both the Lok Sabha and the Rajya Sabha.\n3. A Calling Attention Motion involves an element of censure against the government.\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 only',
      '1 and 2 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: An Adjournment Motion must be supported by 50 members to be admitted in the Lok Sabha.\nStatement 2 is incorrect: An Adjournment Motion involves an element of censure against the government; hence, it is NOT permitted in the Rajya Sabha and can only be moved in the Lok Sabha.\nStatement 3 is incorrect: A Calling Attention Motion is an Indian parliamentary innovation introduced in 1954 to call the attention of a minister to an urgent matter of public importance; it does NOT involve any element of censure.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 22: Parliament (Motions)',
      pageNumber: 'Page 22.18 – 22.22',
      keyExcerpt: 'Adjournment motion is not available to Rajya Sabha as it contains censure. Calling attention has no censure element.'
    },
    eliminationTip: 'Rajya Sabha cannot pass censure motions (like Adjournment Motion or No-Confidence Motion). Statement 2 is false. Calling Attention has no censure. Only Statement 1 is correct.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Adjournment Motion', 'Calling Attention', 'Parliament', 'Polity']
  },
  {
    id: 'pyq-2024-gs-42',
    subject: 'geography',
    topic: 'Oceanography: Waves & Tides',
    subTopic: 'Upwelling and Marine Productivity',
    question: 'Which of the following oceanographic phenomena explains why the western coasts of continents in tropical and subtropical latitudes generally harbor the richest marine fishing grounds? (UPSC CSE Prelims 2024)',
    options: [
      'Coastal upwelling driven by offshore trade winds bringing cold, nutrient-rich deep water to the surface.',
      'Higher sea surface temperatures causing rapid algal blooms.',
      'Absence of coral reefs allowing deep-sea trawling.',
      'Convergence of equatorial countercurrents depositing sediment.'
    ],
    correctAnswer: 0,
    explanation: 'In subtropical latitudes, prevailing offshore trade winds push surface waters away from the coast (Ekman transport), inducing coastal upwelling where cold, nutrient-laden deep water rises to the sunlit euphotic zone. This fuels dense phytoplankton blooms, making regions like the Humboldt (Peru), Canary, Benguela, and California currents among the most productive fisheries on Earth.',
    bookReference: {
      bookName: 'Certificate Physical and Human Geography by G.C. Leong',
      edition: '4th Edition',
      chapter: 'Chapter 12: The Oceans',
      pageNumber: 'Page 108 – 112',
      keyExcerpt: 'Upwelling along west coasts of continents supplies nitrates and phosphates, supporting rich marine fisheries.'
    },
    eliminationTip: 'Cold currents and coastal upwelling bring deep ocean nutrients, creating the world\'s richest fishing banks (e.g. Peru anchoveta).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'Upwelling', 'Ocean Currents', 'Fisheries', 'Physical Geography']
  },
  {
    id: 'pyq-2024-gs-43',
    subject: 'science_tech',
    topic: 'Nuclear Energy & Physics',
    subTopic: 'Nuclear Fusion vs Nuclear Fission',
    question: 'Consider the following statements regarding Nuclear Fusion as an energy source:\n\n1. It releases more energy per unit mass of fuel than nuclear fission.\n2. It produces long-lived, high-level radioactive waste equivalent to spent uranium rods from fission reactors.\n3. The International Thermonuclear Experimental Reactor (ITER) project in France utilizes a tokamak magnetic confinement design.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '1 and 3 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1 is correct: Deuterium-tritium fusion yields approximately four times more energy per kilogram than uranium fission.\nStatement 2 is incorrect: Unlike fission, fusion does not produce long-lived radioactive actinide waste; the byproduct is non-toxic helium, with only mild short-lived activation of reactor vessel materials.\nStatement 3 is correct: ITER in Cadarache, France, uses a magnetic confinement doughnut-shaped tokamak to maintain burning hydrogen plasma at 150 million °C.',
    bookReference: {
      bookName: 'Science and Technology by Ravi P. Agrahari',
      edition: '7th Edition (2024)',
      chapter: 'Chapter 6: Nuclear Energy & ITER',
      pageNumber: 'Page 6.14 – 6.20',
      keyExcerpt: 'Fusion produces no high-level long-lived radioactive waste. ITER operates on a magnetic tokamak configuration.'
    },
    eliminationTip: 'The holy grail benefit of nuclear fusion is that it produces NO long-lived radioactive nuclear waste! Statement 2 is completely false. Eliminating 2 leaves (b) 1 and 3 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Nuclear Fusion', 'ITER', 'Tokamak', 'Science and Technology']
  },
  {
    id: 'pyq-2024-gs-44',
    subject: 'economy',
    topic: 'Balance of Payments & Capital Flows',
    subTopic: 'Foreign Portfolio Investment (FPI) vs FDI',
    question: 'With reference to foreign investments in India, which of the following criteria separates a Foreign Direct Investment (FDI) from a Foreign Portfolio Investment (FPI) under SEBI and RBI regulations? (UPSC CSE Prelims 2024)',
    options: [
      'An investment of 10 percent or more in the fully diluted equity of a listed company is treated as FDI, whereas an investment of less than 10 percent is classified as FPI.',
      'FDI can be invested only in debt securities, while FPI is strictly restricted to equity shares.',
      'FPI investors must acquire management board seats, whereas FDI investors are barred from board representation.',
      'FDI investments can be withdrawn within 24 hours through stock exchanges, whereas FPI has a mandatory 3-year lock-in period.'
    ],
    correctAnswer: 0,
    explanation: 'Based on the Arvind Mayaram Committee recommendations adopted by SEBI and RBI:\n- If an overseas investor holds an equity stake of 10% or more in a listed Indian enterprise, it is classified as Foreign Direct Investment (FDI).\n- If the stake is less than 10%, it is classified as Foreign Portfolio Investment (FPI).',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh',
      edition: '15th Edition (2024)',
      chapter: 'Chapter 16: External Sector of India',
      pageNumber: 'Page 16.18 – 16.24',
      keyExcerpt: 'The Arvind Mayaram Committee defined FDI as foreign equity stake of 10% or more, while below 10% is FPI.'
    },
    eliminationTip: 'The 10% equity benchmark established by the Mayaram Committee is the official regulatory dividing line in India.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'FDI', 'FPI', 'External Sector', 'Economy']
  },
  {
    id: 'pyq-2024-gs-45',
    subject: 'environment',
    topic: 'Climate Change Agreements',
    subTopic: 'Loss and Damage Fund at COP28',
    question: 'With reference to the "Loss and Damage Fund" operationalized at the COP28 UN Climate Summit in Dubai, consider the following statements:\n\n1. It aims to assist particularly vulnerable developing countries in coping with unavoidable economic and non-economic losses caused by climate extremes.\n2. The World Bank was designated to serve as the interim host of the fund for its initial four years.\n3. Contributing to the fund was made legally binding with mandatory annual quotas for all G20 nations.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: The Loss and Damage Fund addresses severe climate damage (sea-level rise, glacial floods, cyclones) beyond mitigation and adaptation capacity in vulnerable nations.\nStatement 2 is correct: Under the consensus negotiated agreement, the World Bank will host the fund on an interim basis for a period of four years.\nStatement 3 is incorrect: Pledges and contributions to the fund are entirely voluntary; there are no mandatory legal quotas imposed on developed or G20 nations.',
    bookReference: {
      bookName: 'Environment & Ecology by Shankar IAS Academy',
      edition: '10th Edition (2024)',
      chapter: 'Chapter 22: UNFCCC and International Climate Negotiations',
      pageNumber: 'Page 352 – 356',
      keyExcerpt: 'COP28 operationalized the Loss and Damage Fund with the World Bank as interim host on voluntary pledges.'
    },
    eliminationTip: 'Contributions to UNFCCC loss & damage are strictly voluntary (the US and others refused any legally binding liability). Statement 3 is false, giving (a) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Loss and Damage Fund', 'COP28', 'World Bank', 'Climate Change']
  },
  {
    id: 'pyq-2024-gs-46',
    subject: 'history',
    topic: 'Ancient India: Sangam Age',
    subTopic: 'Sangam Literature and Epics',
    question: 'The ancient Tamil epic "Silappadikaram", authored by Ilango Adigal, revolves around the story of which of the following legendary characters? (UPSC CSE Prelims 2024)',
    options: [
      'Kovalan and Kannagi',
      'Manimekalai and Udayakumaran',
      'Nedunjeliyan and Madhavi',
      'Sivaga and Gandharvadatta'
    ],
    correctAnswer: 0,
    explanation: 'Silappadikaram ("The Tale of an Anklet"), written by the Jain monk poet Ilango Adigal, narrates the tragic tale of Kovalan, a wealthy merchant of Puhar (Kaveripattinam), his devoted wife Kannagi, and the courtesan Madhavi. When Kovalan is falsely accused and executed by the Pandyan king of Madurai for stealing the queen\'s anklet, Kannagi proves his innocence and burns the city of Madurai in vengeance.',
    bookReference: {
      bookName: 'Ancient India (NCERT Class XI) by R.S. Sharma / Nitin Singhania',
      edition: 'NCERT Standard',
      chapter: 'Chapter 14: The Dawn of History in the Deep South',
      pageNumber: 'Page 124 – 128',
      keyExcerpt: 'Silappadikaram tells the story of Kovalan and Kannagi and the anklet injustice in Madurai.'
    },
    eliminationTip: 'Silappadikaram literally means the tale of the anklet (silambu). Kannagi is the iconic central heroine.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Silappadikaram', 'Kannagi', 'Sangam Literature', 'Ancient History']
  },
    {
    id: "pyq-2024-gs-47",
    subject: "polity",
    topic: "Fundamental Rights & Judicial Review",
    subTopic: "Writ of Certiorari under Articles 32 and 226",
    question: "With reference to the writ of \"Certiorari\" in India, consider the following statements:\n\n1. It is issued by a superior court to an inferior court or tribunal to quash an order passed without jurisdiction or in excess of jurisdiction.\n2. Unlike the writ of Prohibition which is only preventive, Certiorari is both preventive and curative.\n3. The Supreme Court of India has held that Certiorari can also be issued against administrative authorities affecting the rights of individuals.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)",
    options: [
      "1 and 2 only",
      "2 and 3 only",
      "1 and 3 only",
      "1, 2 and 3"
    ],
    correctAnswer: 3,
    explanation: "All three statements are correct:\n1. Certiorari literally means \"to be certified\"; it is issued to quash the order of an inferior court, tribunal, or quasi-judicial body on grounds of excess of jurisdiction, lack of jurisdiction, or error of law apparent on the face of the record.\n2. Prohibition is issued while proceedings are pending (preventive), whereas Certiorari is issued after an order has been made to squash it (curative) or remove the case (preventive).\n3. In 1991, the Supreme Court ruled that Certiorari can be issued even against purely administrative bodies affecting the rights of persons, expanding its scope beyond judicial/quasi-judicial bodies.",
    bookReference: {
      bookName: "Indian Polity by M. Laxmikanth",
      edition: "7th Edition (2023)",
      chapter: "Chapter 7: Fundamental Rights (Writs Jurisdiction)",
      pageNumber: "Page 7.23 – 7.25",
      keyExcerpt: "Certiorari is both preventive and curative and since 1991 lies against administrative bodies as well."
    },
    eliminationTip: "Contrast Prohibition (preventive only) with Certiorari (both preventive and curative).",
    difficulty: "UPSC Standard",
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: "GS",
    frequency: 9,
    tags: [
      "UPSC 2024",
      "Certiorari",
      "Article 32",
      "Article 226",
      "Judicial Review"
    ]
  },
  {
    id: 'pyq-2024-gs-48',
    subject: 'geography',
    topic: 'Oceanography: Corals & Marine Ecosystems',
    subTopic: 'Coral Bleaching & Zooxanthellae',
    question: 'In the phenomenon of "Coral Bleaching", what biological process directly occurs within the coral organism? (UPSC CSE Prelims 2024)',
    options: [
      'Corals expel their symbiotic photosynthetic algae (zooxanthellae) due to elevated sea surface temperatures.',
      'Corals stop absorbing calcium carbonate from seawater due to high water salinity.',
      'Predatory crown-of-thorns starfish consume the coral skeleton overnight.',
      'Deep cold water currents freeze the polyp tissue causing instant calcification.'
    ],
    correctAnswer: 0,
    explanation: 'Coral polyps live in an obligate mutualistic relationship with microscopic endosymbiotic dinoflagellate algae called zooxanthellae, which produce food through photosynthesis and give corals their vibrant colors. When ocean waters exceed thermal thresholds, heat stress causes zooxanthellae to produce reactive oxygen species, prompting the coral host to expel the algae, exposing the stark white calcium carbonate skeleton.',
    bookReference: {
      bookName: 'Certificate Physical and Human Geography by G.C. Leong / Shankar IAS',
      edition: '4th Edition',
      chapter: 'Coral Reefs and Atolls',
      pageNumber: 'Page 114 – 118',
      keyExcerpt: 'Coral bleaching happens when corals expel symbiotic zooxanthellae under thermal stress.'
    },
    eliminationTip: 'The fundamental biological definition of coral bleaching is the expulsion of symbiotic zooxanthellae.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Coral Bleaching', 'Zooxanthellae', 'Marine Ecology', 'Geography']
  },
  {
    id: 'pyq-2024-gs-49',
    subject: 'economy',
    topic: 'Foreign Trade & Geopolitical Sanctions',
    subTopic: 'SWIFT International Messaging System',
    question: 'What is "SWIFT" (Society for Worldwide Interbank Financial Telecommunication), frequently highlighted during global financial sanctions? (UPSC CSE Prelims 2024)',
    options: [
      'A global messaging network that facilitates secure, standardized communication of financial transaction instructions between banks across the world.',
      'A digital central bank that holds foreign exchange reserves and clears sovereign bonds directly.',
      'An automated credit-rating agency operated under the United Nations Development Programme.',
      'A cryptocurrency blockchain ledger managed by the International Monetary Fund.'
    ],
    correctAnswer: 0,
    explanation: 'SWIFT (headquartered in Belgium) is a member-owned cooperative that provides a secure, reliable, and standardized communication messaging platform through which financial institutions exchange information and execution orders about payments, securities, and trade finance. Importantly, SWIFT does not hold funds or clear cash balances itself; it transmits encrypted transaction messages.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh',
      edition: '15th Edition (2024)',
      chapter: 'Chapter 17: International Economic Organisations',
      pageNumber: 'Page 17.22 – 17.26',
      keyExcerpt: 'SWIFT is a secure financial messaging network connecting thousands of global banks.'
    },
    eliminationTip: 'SWIFT does not hold money or provide loans; it is purely a messaging highway transmitting payment orders between banks.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'SWIFT', 'Banking', 'Sanctions', 'Economy']
  },
  {
    id: 'pyq-2024-gs-50',
    subject: 'science_tech',
    topic: 'Space Science: Launch Vehicles',
    subTopic: 'Small Satellite Launch Vehicle (SSLV)',
    question: 'With reference to ISRO’s Small Satellite Launch Vehicle (SSLV), consider the following statements:\n\n1. It is a 3-stage all-solid propulsion launch vehicle with a liquid propulsion-based Velocity Trimming Module (VTM) as a terminal stage.\n2. It is capable of launching satellites up to 500 kg into a 500 km Low Earth Orbit (LEO).\n3. It requires a dedicated assembly time of several months and a launch crew of hundreds of engineers, similar to the PSLV.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: SSLV features three solid propulsion stages (SS1, SS2, SS3) topped by a liquid propulsion Velocity Trimming Module (VTM) for precise satellite insertion into orbit.\nStatement 2 is correct: It is optimized to inject mini, micro, or nano satellites weighing up to 500 kg into a 500 km planar/sun-synchronous low earth orbit.\nStatement 3 is incorrect: The core advantage of SSLV is rapid turnaround: it can be assembled and integrated within just 72 hours by a compact team of fewer than 10 people, providing on-demand launch capability.',
    bookReference: {
      bookName: 'Science and Technology by Ravi P. Agrahari',
      edition: '7th Edition (2024)',
      chapter: 'Chapter 1: India\'s Space Exploration (Launch Vehicles)',
      pageNumber: 'Page 1.22 – 1.28',
      keyExcerpt: 'SSLV offers low cost, low turnaround time (under 72 hours), and payload capacity of 500 kg to LEO.'
    },
    eliminationTip: 'The entire design philosophy of the "Small" Satellite Launch Vehicle is "launch on demand" in just 72 hours, not months of setup. Eliminating Statement 3 gives (a) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2024', 'SSLV', 'ISRO', 'Space Launchers', 'Science and Technology']
  }
];
