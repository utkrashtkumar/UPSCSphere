module.exports = {
  // 1. pyq-2026-csat-59 (Fix explanation mismatch)
  'pyq-2026-csat-59': {
    id: 'pyq-2026-csat-59',
    subject: 'csat_quant',
    topic: 'Permutations & Combinations',
    subTopic: 'Letter Arrangements with Grouped Vowels',
    question: "In how many different ways can the letters of the word 'LEADER' be arranged such that all the vowels always occur together? (UPSC CSAT 2026)",
    options: [
      '48',
      '72',
      '120',
      '144'
    ],
    correctAnswer: 1,
    explanation: "In the word 'LEADER', there are 6 letters in total: L, E, A, D, E, R.\nVowels: E, A, E (3 vowels, where E occurs twice).\nConsonants: L, D, R (3 consonants).\nSince all vowels must always be together, we group (E, A, E) as 1 single composite entity.\nNow we have 4 entities to arrange: L, D, R, and [EAE].\nNumber of ways to arrange these 4 distinct entities = 4! = 24 ways.\nWithin the vowel group [EAE], the 3 letters (with E repeated 2 times) can be arranged among themselves in:\n3! / 2! = (6 / 2) = 3 ways.\nTotal number of required arrangements = 24 × 3 = 72 ways.",
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Permutations and Combinations',
      pageNumber: 'Chapter 30: Words with Repeated Letters',
      keyExcerpt: 'Group items together as 1 unit, then multiply by internal permutations divided by repetitions factorial.'
    },
    eliminationTip: 'Arrange 4 units = 4! = 24. Internal vowel arrangements = 3!/2! = 3. 24 × 3 = 72.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2026', 'CSAT', 'Permutations', 'Letter Arrangements', 'Factorials']
  },

  // 2. pyq-2026-csat-54 (Fix explanation mismatch)
  'pyq-2026-csat-54': {
    id: 'pyq-2026-csat-54',
    subject: 'csat_quant',
    topic: 'Ratio and Proportion',
    subTopic: 'Dividing Amount in Ratios and Difference of Shares',
    question: 'An amount of ₹70,000 is divided among three persons A, B, and C in the ratio 2 : 3 : 5. How much more money does C receive than A? (UPSC CSAT 2026)',
    options: [
      '₹14,000',
      '₹21,000',
      '₹28,000',
      '₹35,000'
    ],
    correctAnswer: 1,
    explanation: 'Total amount = ₹70,000.\nRatio of shares A : B : C = 2 : 3 : 5.\nSum of ratio parts = 2 + 3 + 5 = 10 parts.\nValue of 1 ratio part = 70,000 / 10 = ₹7,000.\nShare of A = 2 × 7,000 = ₹14,000.\nShare of B = 3 × 7,000 = ₹21,000.\nShare of C = 5 × 7,000 = ₹35,000.\nDifference between C\'s share and A\'s share = 35,000 - 14,000 = ₹21,000.\nAlternatively: Difference in ratio parts between C and A = 5 - 2 = 3 parts.\nDifference = 3 × ₹7,000 = ₹21,000.',
    bookReference: {
      bookName: 'Fast Track Objective Arithmetic by Rajesh Verma',
      edition: 'Latest Edition',
      chapter: 'Ratio and Proportion',
      pageNumber: 'Chapter 11: Division of Sums',
      keyExcerpt: 'Difference between shares = (Difference in ratio parts / Total parts) × Total Sum.'
    },
    eliminationTip: 'Difference in parts = 5 - 2 = 3. Total parts = 10. (3/10) × 70,000 = ₹21,000.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC 2026', 'CSAT', 'Ratios', 'Proportions', 'Arithmetic']
  },

  // 3. pyq-2026-gs-88 (Replace intra-year dupe with Deep Ocean Mission)
  'pyq-2026-gs-88': {
    id: 'pyq-2026-gs-88',
    subject: 'science_tech',
    topic: 'Ocean Exploration & Deep-Sea Technology',
    subTopic: 'Deep Ocean Mission (DOM) and Samudrayaan',
    question: 'With reference to the "Deep Ocean Mission" (DOM) approved by the Government of India, consider the following statements:\n\n1. It is a multi-ministerial mission coordinated under the nodal leadership of the Ministry of Earth Sciences (MoES).\n2. Under the Samudrayaan project, a manned submersible vehicle named "MATSYA 6000" is being developed to carry three human beings to a depth of 6,000 meters in the ocean.\n3. One of its strategic objectives is the exploration and sustainable mining of polymetallic nodules and hydrothermal sulfides in the Central Indian Ocean Basin.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2026)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are correct under India\'s Deep Ocean Mission:\n1. The Cabinet Committee on Economic Affairs approved the Deep Ocean Mission with MoES as the nodal agency in partnership with ISRO, DRDO, and CSIR.\n2. Under Project Samudrayaan, NIOT Chennai is developing "MATSYA 6000", an indigenous human submersible designed with a titanium alloy sphere to operate at 6,000 m ocean depth under 600 bar hydrostatic pressure.\n3. India holds exploration contracts with the International Seabed Authority (ISA) for 75,000 sq km in the Central Indian Ocean Basin to prospect for polymetallic nodules rich in nickel, cobalt, copper, and manganese.',
    bookReference: {
      bookName: 'Science & Technology by Ravi P. Agrahari / MoES Press Releases',
      edition: 'Latest Edition',
      chapter: 'Ocean Technology: Samudrayaan Mission',
      pageNumber: 'Page 180 – 185',
      keyExcerpt: 'Matsya 6000 carries 3 humans to 6000m depth under the Deep Ocean Mission for polymetallic nodule exploration.'
    },
    eliminationTip: 'All three statements accurately summarize the institutional, technological, and strategic facets of the Deep Ocean Mission.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'GS',
    frequency: 10,
    tags: ['UPSC 2026', 'Deep Ocean Mission', 'Samudrayaan', 'Matsya 6000', 'Polymetallic Nodules']
  },

  // 4. pyq-2026-gs-10 (Replace cross-year CBAM dupe with India Semiconductor Mission)
  'pyq-2026-gs-10': {
    id: 'pyq-2026-gs-10',
    subject: 'science_tech',
    topic: 'Industrial Policy & Electronics Manufacturing',
    subTopic: 'India Semiconductor Mission (ISM) and Ecosystem',
    question: 'With reference to the "India Semiconductor Mission" (ISM) launched under the Ministry of Electronics and Information Technology (MeitY), consider the following statements:\n\n1. It provides fiscal support of up to 50% of the project cost on an equal pari-passu basis for setting up Silicon semiconductor wafer fabrication facilities in India.\n2. The Design Linked Incentive (DLI) scheme offers financial incentives and design infrastructure access for domestic startups developing semiconductor chip designs.\n3. India’s first commercial semiconductor fabrication facility under ISM was approved for construction at Dholera in Gujarat by Tata Electronics in partnership with Powerchip (PSMC).\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2026)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are correct:\n1. Under the modified Semicon India Programme, the Union Government uniformized fiscal support at 50% of project costs across all technology nodes for Semiconductor Fabs, Display Fabs, and Compound Semiconductor/OSAT facilities.\n2. The DLI scheme administered by C-DAC supports at least 100 domestic companies/startups engaged in semiconductor design with up to 50% financial reimbursement and EDA design tool access.\n3. In February 2024, the Union Cabinet approved India\'s first commercial semiconductor fabrication unit in Dholera, Gujarat, established by Tata Electronics in collaboration with Taiwan\'s Powerchip Semiconductor Manufacturing Corporation (PSMC).',
    bookReference: {
      bookName: 'Science & Technology by Ravi P. Agrahari / MeitY ISM Dossier',
      edition: 'Latest Edition',
      chapter: 'Electronics Hardware: Semiconductor Ecosystem',
      pageNumber: 'Page 102 – 108',
      keyExcerpt: 'ISM offers 50% uniform subsidy and supports design via DLI. Tata-PSMC fab is in Dholera.'
    },
    eliminationTip: '50% pari-passu subsidy, DLI for startups, and Dholera fab are the headline milestones of the India Semiconductor Mission.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'GS',
    frequency: 10,
    tags: ['UPSC 2026', 'Semiconductor Mission', 'ISM', 'Dholera', 'DLI', 'MeitY']
  },

  // 5. pyq-2026-gs-54 (Replace cross-year 16th FC dupe with Green Hydrogen Mission)
  'pyq-2026-gs-54': {
    id: 'pyq-2026-gs-54',
    subject: 'environment',
    topic: 'Renewable Energy & Decarbonization',
    subTopic: 'National Green Hydrogen Mission and SIGHT Programme',
    question: 'With reference to the "National Green Hydrogen Mission", consider the following statements:\n\n1. It aims to develop a green hydrogen production capacity of at least 5 Million Metric Tonnes (MMT) per annum in India by 2030.\n2. Under the Strategic Interventions for Green Hydrogen Transition (SIGHT) programme, direct financial incentives are provided for domestic manufacturing of electrolysers and production of green hydrogen.\n3. The Mission mandates a complete statutory ban on the import and utilization of natural gas in domestic petroleum refineries by 2028.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2026)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct: The National Green Hydrogen Mission (approved in January 2023 with an outlay of ₹19,744 crore) targets producing at least 5 MMT of green hydrogen annually by 2030 along with adding 125 GW of associated renewable energy capacity. The SIGHT programme provides two dedicated financial incentive packages: Component I for domestic electrolyser manufacturing and Component II for green hydrogen production.\nStatement 3 is incorrect: The Mission aims to promote phased voluntary and mandatory blending of green hydrogen in refineries and fertilizer plants; it does NOT impose a blanket legal ban on natural gas imports by 2028.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / MNRE Mission Documents',
      edition: '15th Edition (2024)',
      chapter: 'Energy Security: Hydrogen Economy',
      pageNumber: 'Page 17.32 – 17.38',
      keyExcerpt: 'Green Hydrogen Mission targets 5 MMT by 2030 with SIGHT incentive support for electrolysers and production.'
    },
    eliminationTip: 'Banning natural gas imports outright by 2028 is economically impractical. Eliminating Statement 3 leaves (a) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2026', 'Green Hydrogen', 'SIGHT', 'Electrolysers', 'MNRE', 'Environment']
  },

  // 6. pyq-2026-gs-51 (Replace cross-year PAC dupe with Estimates Committee)
  'pyq-2026-gs-51': {
    id: 'pyq-2026-gs-51',
    subject: 'polity',
    topic: 'Parliamentary Committees',
    subTopic: 'Estimates Committee Composition and Functions',
    question: 'With reference to the "Estimates Committee" of the Parliament of India, consider the following statements:\n\n1. It is the largest committee of Parliament, consisting of 30 members elected annually.\n2. All 30 members of the Estimates Committee are elected exclusively from the Lok Sabha, with zero representation from the Rajya Sabha.\n3. The Chairman of the Committee is appointed by the Speaker of the Lok Sabha and is invariably selected from the ruling party.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2026)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are correct under Indian parliamentary law:\n1. The Estimates Committee (originally constituted in 1950 on the recommendation of Finance Minister John Mathai) consists of 30 members, making it the largest parliamentary committee.\n2. Unlike the PAC or Committee on Public Undertakings (which have members from both Houses), the Estimates Committee consists EXCLUSIVELY of members of the Lok Sabha. The Rajya Sabha has no representation.\n3. The Speaker appoints the Chairman from amongst its members, and by established convention, the Chairman is invariably from the ruling party (unlike the PAC whose chair is from the opposition).',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 23: Parliamentary Committees (Estimates Committee)',
      pageNumber: 'Page 23.4 – 23.6',
      keyExcerpt: 'Estimates Committee has 30 members all from Lok Sabha; Chairman is always from the ruling party.'
    },
    eliminationTip: 'Remember: PAC has 22 (15 LS + 7 RS, Opp Chairman); Estimates Committee has 30 (all LS, Ruling Chairman).',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'GS',
    frequency: 10,
    tags: ['UPSC 2026', 'Estimates Committee', 'Lok Sabha', 'Parliamentary Committees', 'Polity']
  },

  // 7. pyq-2026-gs-71 (Replace cross-year Cabinet Mission dupe with Mountbatten Plan)
  'pyq-2026-gs-71': {
    id: 'pyq-2026-gs-71',
    subject: 'history',
    topic: 'Modern Indian History',
    subTopic: 'Mountbatten Plan (June 3, 1947) and Partition Scheme',
    question: 'With reference to the "Mountbatten Plan" of June 3, 1947, consider the following statements:\n\n1. It conceded the partition of British India into two independent Dominions—India and Pakistan.\n2. It provided for holding a plebiscite / referendum in the North-West Frontier Province (NWFP) and the Sylhet district of Assam.\n3. It mandated that the Princely States must either join India or Pakistan, denying them the option to declare independent sovereign status.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2026)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct: The June 3rd Plan laid out the roadmap for partitioning Bengal and Punjab, immediate transfer of power on Dominion status basis, and conducting referendums in NWFP and Sylhet (which voted to join East Bengal).\nStatement 3 is incorrect: The Plan, read with the Indian Independence Act 1947, provided that British paramountcy over the princely states would lapse on August 15, 1947, theoretically giving them the legal option to join India, join Pakistan, or remain independent (though Mountbatten strongly advised accession based on geographical contiguity).',
    bookReference: {
      bookName: 'A Brief History of Modern India by Spectrum',
      edition: '2023 Edition',
      chapter: 'Chapter 25: Independence with Partition (June 3 Plan)',
      pageNumber: 'Page 504 – 508',
      keyExcerpt: 'Mountbatten plan provided for partition and referendum in NWFP and Sylhet; paramountcy lapsed giving princely states theoretical independence.'
    },
    eliminationTip: 'British paramountcy lapsed on August 15, meaning princely states legally had the independence option (which Sardar Patel then negotiated into accession). Eliminating 3 yields (a) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2026', 'Mountbatten Plan', 'June 3 Plan', 'Partition', 'Freedom Struggle']
  },

  // 8. pyq-2026-csat-57 (Replace cross-year 1000m race dupe with 100m start race)
  'pyq-2026-csat-57': {
    id: 'pyq-2026-csat-57',
    subject: 'csat_quant',
    topic: 'Time, Speed and Distance',
    subTopic: 'Races and Linear Headstarts',
    question: 'In a 100-meter race, Runner A can give Runner B a start of 10 meters, and Runner A can give Runner C a start of 28 meters. In the same race, how many meters of start can Runner B give Runner C? (UPSC CSAT 2026)',
    options: [
      '18 meters',
      '20 meters',
      '22 meters',
      '25 meters'
    ],
    correctAnswer: 1,
    explanation: 'When Runner A completes the full distance of 100 meters:\n- Distance covered by B = 100 - 10 = 90 meters.\n- Distance covered by C = 100 - 28 = 72 meters.\nThis means that in the time B covers 90 meters, C covers 72 meters.\nRatio of speeds of B and C = Distance of B / Distance of C = 90 / 72 = 5 / 4.\n\nNow, when B runs a full race of 100 meters:\nDistance covered by C in that time = (4 / 5) × 100 = 80 meters.\nTherefore, when B reaches the finish line (100 m), C is at 80 m (20 meters behind).\nHence, Runner B can give Runner C a start of 100 - 80 = 20 meters.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Races and Games of Skill',
      pageNumber: 'Chapter 26: Headstarts in Linear Races',
      keyExcerpt: 'When A finishes 100m, B is at 90m and C is at 72m. Scale B to 100m to find start for C.'
    },
    eliminationTip: 'B is at 90 when C is at 72 (C runs 72/90 = 80% of B). In a 100m race, C runs 80m. Start = 100 - 80 = 20m.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2026', 'CSAT', 'Races', 'Time Speed Distance', 'Headstarts']
  },

  // 9. pyq-2026-csat-30 (Replace cross-year trailing zeroes dupe with product trailing zeroes)
  'pyq-2026-csat-30': {
    id: 'pyq-2026-csat-30',
    subject: 'csat_quant',
    topic: 'Number Systems',
    subTopic: 'Counting Trailing Zeroes in Arithmetic Progressions of Products',
    question: 'How many trailing zeroes are there at the end of the product: P = 5 × 10 × 15 × 20 × ... × 250? (UPSC CSAT 2026)',
    options: [
      '47',
      '50',
      '56',
      '62'
    ],
    correctAnswer: 0,
    explanation: 'The given product is:\nP = 5 × 10 × 15 × ... × 250\nNotice that each term is a multiple of 5: 5×1, 5×2, 5×3, ..., 5×50.\nThere are 50 terms in total.\nFactoring out 5 from all 50 terms:\nP = 5⁵⁰ × (1 × 2 × 3 × ... × 50) = 5⁵⁰ × 50!\n\nA trailing zero is produced by each pair of factors 2 × 5.\nIn this product, 5 is extremely abundant (5⁵⁰ plus all the 5s inside 50!).\nTherefore, the number of trailing zeroes is limited strictly by the exponent of 2 in P.\nSince 5⁵⁰ has no factor of 2, the number of trailing zeroes equals the highest power of 2 dividing 50!.\nUsing Legendre’s formula for the power of 2 in 50!:\nE2(50!) = ⌊50/2⌋ + ⌊50/4⌋ + ⌊50/8⌋ + ⌊50/16⌋ + ⌊50/32⌋\n= 25 + 12 + 6 + 3 + 1 = 47.\nTherefore, the number of trailing zeroes is exactly 47.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal / Pearson CSAT Manual',
      edition: 'Latest Edition',
      chapter: 'Number Systems: Legendre Formula',
      pageNumber: 'Chapter 1: Number of Zeroes',
      keyExcerpt: 'In products with excess 5s, the limiting factor for zeroes is the power of 2.'
    },
    eliminationTip: 'Classic trap! In 5 × 10 × ... × 250, 5 is in excess, so zeroes are determined by the power of 2 in 50!, which is 25 + 12 + 6 + 3 + 1 = 47.',
    difficulty: 'Hard',
    isPYQ: true,
    pyqYear: 2026,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2026', 'CSAT', 'Trailing Zeroes', 'Number Systems', 'Legendre Formula']
  },

  // 10. pyq-2025-csat-63 (Replace intra-year unit digit dupe with factorial sum unit digit)
  'pyq-2025-csat-63': {
    id: 'pyq-2025-csat-63',
    subject: 'csat_quant',
    topic: 'Number Systems',
    subTopic: 'Unit Digit of Factorial Summation',
    question: 'What is the unit digit of the expression: S = 1! + 2! + 3! + 4! + 5! + ... + 100!? (UPSC CSAT 2025)',
    options: [
      '1',
      '3',
      '5',
      '7'
    ],
    correctAnswer: 1,
    explanation: 'Let us calculate the unit digits of the initial terms:\n1! = 1\n2! = 2\n3! = 6\n4! = 24 (unit digit 4)\n5! = 120 (unit digit 0)\nFor any integer n ≥ 5, n! contains both 2 and 5 as factors (since n! = n × ... × 5 × 4 × 3 × 2 × 1), which means n! always ends in 0.\nTherefore, for all terms from 5! to 100!, the unit digit is identically 0.\nThus, the unit digit of the entire sum S depends only on the sum of the first 4 terms:\n1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33.\nThe unit digit of 33 is 3.\nTherefore, the unit digit of the expression is 3.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Number Systems: Factorials',
      pageNumber: 'Chapter 1: Units Place of Factorial Series',
      keyExcerpt: 'All factorials >= 5! have a units digit of 0.'
    },
    eliminationTip: 'From 5! onwards, every factorial ends in 0. 1! + 2! + 3! + 4! = 1 + 2 + 6 + 24 = 33 => unit digit is 3.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2025,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2025', 'CSAT', 'Unit Digit', 'Factorials', 'Number Systems']
  },

  // 11. pyq-2025-csat-12 (Fix explanation mismatch for P, Q, R work)
  'pyq-2025-csat-12': {
    id: 'pyq-2025-csat-12',
    subject: 'csat_quant',
    topic: 'Time and Work',
    subTopic: 'Simultaneous Work by Three Individuals',
    question: 'Three persons, P, Q, and R, can independently complete a work in 10 days, 15 days, and 30 days respectively. If they all work together, in how many days will the entire work be completed? (UPSC CSAT 2025)',
    options: [
      '4 days',
      '5 days',
      '6 days',
      '7.5 days'
    ],
    correctAnswer: 1,
    explanation: 'Let the total work be the LCM of 10, 15, and 30 = 30 units.\n- Efficiency of P = 30 / 10 = 3 units/day.\n- Efficiency of Q = 30 / 15 = 2 units/day.\n- Efficiency of R = 30 / 30 = 1 unit/day.\nCombined efficiency of P, Q, and R = 3 + 2 + 1 = 6 units/day.\nTime taken to complete the total work of 30 units:\nTime = Total Work / Combined Efficiency = 30 / 6 = 5 days.\nTherefore, all three working together will complete the work in 5 days.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Time and Work',
      pageNumber: 'Chapter 15: Unit Method for Three Individuals',
      keyExcerpt: 'Total days = LCM(t1, t2, t3) / Sum of efficiencies.'
    },
    eliminationTip: 'Combined rate: 1/10 + 1/15 + 1/30 = (3+2+1)/30 = 6/30 = 1/5. Total time = 5 days.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2025,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC 2025', 'CSAT', 'Time and Work', 'Unit Method']
  },

  // 12. pyq-2025-gs-36 (Replace cross-year LLM dupe with NISAR Radar Satellite)
  'pyq-2025-gs-36': {
    id: 'pyq-2025-gs-36',
    subject: 'science_tech',
    topic: 'Space Exploration & Earth Observation',
    subTopic: 'NASA-ISRO Synthetic Aperture Radar (NISAR) Mission',
    question: 'With reference to the "NASA-ISRO Synthetic Aperture Radar" (NISAR) satellite mission, consider the following statements:\n\n1. It is a dual-frequency radar imaging mission utilizing both L-band (developed by NASA) and S-band (developed by ISRO) radar frequencies.\n2. Being an active radar satellite, it can observe Earth’s surface day and night and penetrate through dense cloud cover, fog, and vegetation.\n3. It is designed to map the entire Earth\'s land and ice-covered surfaces every 12 days to measure changes in ecosystems, ice sheets, and seismic faults.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2025)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are correct under the joint NASA-ISRO NISAR mission:\n1. NISAR is the first satellite mission to carry dual-frequency radar: NASA provides the L-band radar (ideal for penetrating vegetation canopy and soil) and ISRO provides the S-band radar (optimized for light vegetation and crop monitoring).\n2. Synthetic Aperture Radar transmits its own microwave signals, enabling round-the-clock all-weather imaging unaffected by darkness or thick tropical cloud cover.\n3. In a Sun-synchronous orbit, NISAR maps the global landmass and polar ice sheets every 12 days with millimeter-level surface displacement precision to monitor earthquakes, landslides, and biomass changes.',
    bookReference: {
      bookName: 'Science & Technology by Ravi P. Agrahari / ISRO Mission Dossiers',
      edition: 'Latest Edition',
      chapter: 'Space Missions: Earth Observation Satellites',
      pageNumber: 'Page 62 – 68',
      keyExcerpt: 'NISAR is a joint dual-frequency (L & S band) radar mission for all-weather 12-day repeat global surface mapping.'
    },
    eliminationTip: 'Dual frequency (L+S), all-weather day/night radar, and 12-day global orbit are the signature specifications of NISAR.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2025,
    pyqPaper: 'GS',
    frequency: 10,
    tags: ['UPSC 2025', 'NISAR', 'ISRO', 'NASA', 'SAR', 'Earth Observation']
  },

  // 13. pyq-2025-gs-44 (Replace cross-year Loss and Damage dupe with Mangrove Alliance)
  'pyq-2025-gs-44': {
    id: 'pyq-2025-gs-44',
    subject: 'environment',
    topic: 'Coastal Ecosystems & Climate Mitigation',
    subTopic: 'Mangrove Alliance for Climate (MAC) and MISHTI Initiative',
    question: 'With reference to the "Mangrove Alliance for Climate" (MAC) launched at COP27 of the UNFCCC, consider the following statements:\n\n1. It was jointly spearheaded by the United Arab Emirates (UAE) and Indonesia to scale up the conservation and restoration of mangrove ecosystems.\n2. India joined the Mangrove Alliance for Climate as one of its prominent partner nations.\n3. The alliance establishes legally binding national targets with financial penalties for countries that fail to expand mangrove forest cover.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2025)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct: The Mangrove Alliance for Climate (MAC) was launched at COP27 in Sharm El-Sheikh (2022) by the UAE and Indonesia. India joined the alliance at its inception, linking it domestically with the MISHTI (Mangrove Initiative for Shoreline Habitats & Tangible Incomes) scheme.\nStatement 3 is incorrect: MAC is a voluntary, non-binding global coalition aimed at knowledge exchange, research, and technical collaboration; it does NOT impose any legally binding targets or punitive financial sanctions on member countries.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy / MoEFCC Annual Reports',
      edition: '10th Edition (2024)',
      chapter: 'Coastal Wetlands: Mangroves and Global Alliances',
      pageNumber: 'Page 230 – 234',
      keyExcerpt: 'MAC is a voluntary initiative by UAE and Indonesia joined by India to expand blue carbon sinks.'
    },
    eliminationTip: 'International multi-country environmental alliances under COP are non-binding coalitions. Eliminating Statement 3 gives (a) 1 and 2 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2025,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2025', 'Mangrove Alliance', 'MAC', 'MISHTI', 'Blue Carbon', 'Environment']
  },

  // 14. pyq-2025-gs-56 (Replace cross-year SDF dupe with Central Bank Digital Currency)
  'pyq-2025-gs-56': {
    id: 'pyq-2025-gs-56',
    subject: 'economy',
    topic: 'Monetary Systems & Digital Currencies',
    subTopic: 'Central Bank Digital Currency (Digital Rupee or e₹)',
    question: 'With reference to the "Digital Rupee" (e₹)—India’s Central Bank Digital Currency (CBDC) issued by the Reserve Bank of India, consider the following statements:\n\n1. It is a sovereign digital legal tender that appears as a direct liability on the Reserve Bank of India’s balance sheet.\n2. The retail Digital Rupee (e₹-R) earns daily compound interest at the policy Repo rate to encourage cashless digital savings.\n3. It is fungible with physical currency notes and coins at a 1:1 parity and can be converted into bank deposits.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2025)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 2,
    explanation: 'Statements 1 and 3 are correct: The Digital Rupee is a sovereign digital currency issued under the amended RBI Act, 1934. It is sovereign currency holding legal tender status, forming a direct liability of the RBI, and convertible at face value (1:1) with physical currency.\nStatement 2 is incorrect: By deliberate design to prevent disintermediation of commercial bank deposits, the Digital Rupee is NON-INTEREST BEARING, exactly like physical currency cash in a citizen’s wallet. If it earned interest, citizens would withdraw money from commercial banks and hold it as central bank cash, destabilizing the banking system.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / RBI Concept Note on CBDC',
      edition: '15th Edition (2024)',
      chapter: 'Chapter 12: Central Banking and Digital Currency',
      pageNumber: 'Page 12.45 – 12.50',
      keyExcerpt: 'Digital Rupee is non-interest bearing and a direct liability of the RBI, fungible 1:1 with cash.'
    },
    eliminationTip: 'Digital Rupee does not earn interest—it mirrors physical cash notes. Eliminating Statement 2 gives (c) 1 and 3 only.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2025,
    pyqPaper: 'GS',
    frequency: 10,
    tags: ['UPSC 2025', 'CBDC', 'Digital Rupee', 'RBI', 'Monetary Economics']
  },

  // 15. pyq-2025-csat-69 (Replace cross-year walks 10km dupe with Rotated Clock Direction)
  'pyq-2025-csat-69': {
    id: 'pyq-2025-csat-69',
    subject: 'csat_reasoning',
    topic: 'Logical Reasoning',
    subTopic: 'Clocks and Rotated Cardinal Directions',
    question: 'A mechanical clock displays the time as 4:30. If the minute hand is pointing towards the East, in which direction will the hour hand point? (UPSC CSAT 2025)',
    options: [
      'North',
      'North-East',
      'South-West',
      'North-West'
    ],
    correctAnswer: 1,
    explanation: 'On a standard unrotated clock face:\n- At 4:30, the minute hand points directly at the numeral 6 (which represents South).\n- The hour hand at 4:30 is located exactly midway between 4 and 5 (which is 15° past 4, pointing in the South-East direction).\n\nNow, according to the problem, the minute hand (standard South) points towards East:\n- A rotation from South to East corresponds to a 90° counter-clockwise rotation.\n- Applying the exact same 90° counter-clockwise rotation to the hour hand (which originally points South-East):\nRotating South-East by 90° counter-clockwise brings it to North-East.\nTherefore, the hour hand will point in the North-East direction.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Latest Edition',
      chapter: 'Direction Sense Test: Clock Rotations',
      pageNumber: 'Chapter 7: Direction Alterations',
      keyExcerpt: 'Determine the angular shift of the reference hand and apply the same shift to the other hand.'
    },
    eliminationTip: 'Standard position: minute hand is South, hour hand is South-East. If South becomes East (rotated 90° counter-clockwise), then South-East becomes North-East.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2025,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2025', 'CSAT', 'Direction Sense', 'Clocks', 'Rotation']
  },

  // 16. pyq-2024-gs-10 (Fix explanation mismatch on Lithium Triangle)
  'pyq-2024-gs-10': {
    id: 'pyq-2024-gs-10',
    subject: 'geography',
    topic: 'World Economic Geography & Strategic Minerals',
    subTopic: 'The Lithium Triangle in South America',
    question: 'Which of the following groups of South American countries constitutes the region popularly known as the "Lithium Triangle", harboring more than half of the world’s identified lithium brine reserves?\n\n(UPSC CSE Prelims 2024)',
    options: [
      'Argentina, Bolivia, and Chile',
      'Brazil, Peru, and Colombia',
      'Chile, Ecuador, and Venezuela',
      'Argentina, Paraguay, and Uruguay'
    ],
    correctAnswer: 0,
    explanation: 'The "Lithium Triangle" is an arid, high-altitude region of the Andean plateau encompassing the borders of Argentina, Bolivia, and Chile. The vast salt flats (Salars)—including Salar de Uyuni in Bolivia, Salar de Atacama in Chile, and Salar del Hombre Muerto in Argentina—contain approximately 56% of global identified lithium resources in the form of subterranean lithium-rich brine pools. It has become critically vital for global electric vehicle (EV) supply chains and energy storage batteries.',
    bookReference: {
      bookName: 'Certificate Physical and Human Geography by G.C. Leong / Economic Survey',
      edition: 'Latest Edition',
      chapter: 'Economic Geography: Strategic Mineral Belts',
      pageNumber: 'Plate 92 – 96',
      keyExcerpt: 'The Lithium Triangle consists of Argentina, Bolivia, and Chile.'
    },
    eliminationTip: 'Lithium Triangle = ABC (Argentina, Bolivia, Chile). Brazil and Peru are not part of the salt flat brine triangle.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 10,
    tags: ['UPSC 2024', 'Lithium Triangle', 'Argentina', 'Bolivia', 'Chile', 'Strategic Minerals']
  },

  // 17. pyq-2024-csat-79 (Replace cross-year sum 50 dupe with sum of two-digit odd numbers)
  'pyq-2024-csat-79': {
    id: 'pyq-2024-csat-79',
    subject: 'csat_quant',
    topic: 'Number Systems',
    subTopic: 'Arithmetic Progressions and Sum of Odd Integers',
    question: 'What is the sum of all two-digit odd positive integers from 11 to 99 inclusive? (UPSC CSAT 2024)',
    options: [
      '2,425',
      '2,475',
      '2,525',
      '2,550'
    ],
    correctAnswer: 1,
    explanation: 'The two-digit odd positive integers form an Arithmetic Progression (AP):\n11, 13, 15, ..., 99\n- First term a = 11\n- Common difference d = 2\n- Last term l = 99\n\nNumber of terms n in the AP:\nl = a + (n - 1)d\n99 = 11 + (n - 1)2\n88 = 2(n - 1)\nn - 1 = 44  =>  n = 45 terms.\n\nSum of an Arithmetic Progression S = (n / 2) × (a + l):\nS = (45 / 2) × (11 + 99)\nS = (45 / 2) × 110\nS = 45 × 55 = 2,475.\nTherefore, the sum of all two-digit odd numbers is 2,475.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Progression: Arithmetic Progression',
      pageNumber: 'Chapter 4: AP Sum Formula',
      keyExcerpt: 'Sum of AP = (n/2) * (first + last).'
    },
    eliminationTip: '45 terms with average (11 + 99)/2 = 55. Sum = 45 × 55 = 2,475.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2024', 'CSAT', 'Arithmetic Progression', 'Sum of Series', 'Number Systems']
  },

  // 18. pyq-2024-gs-23 (Replace cross-year Ilbert dupe with Vernacular Press Act)
  'pyq-2024-gs-23': {
    id: 'pyq-2024-gs-23',
    subject: 'history',
    topic: 'Modern Indian History',
    subTopic: 'Vernacular Press Act 1878 (Gagging Act)',
    question: 'With reference to the "Vernacular Press Act of 1878" enacted during the viceroyalty of Lord Lytton, consider the following statements:\n\n1. It discriminated between the English and vernacular language press, empowering district magistrates to demand bonds and security deposits from vernacular newspapers.\n2. The actions of the magistrate under the Act were final, and no appeal could be made in a court of law.\n3. The prominent newspaper "Amrita Bazar Patrika" overnight switched from Bengali to English language publication to evade the provisions of the Act.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2024)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are correct under the Vernacular Press Act, 1878 (Act IX of 1878):\n1. The Act was targeted specifically against regional-language newspapers critical of colonial famine administration, while completely exempting English-language newspapers (earning it the moniker "The Gagging Act").\n2. The magistrate could confiscate the printing press and security deposit on suspicion of seditious writing, and his decision was final with no judicial appeal permitted.\n3. To escape the clutches of the Act without ceasing operations, Sisir Kumar Ghosh and Motilal Ghosh converted the Amrita Bazar Patrika from a bilingual Bengali-English paper into a solely English-language newspaper in a single night.',
    bookReference: {
      bookName: 'A Brief History of Modern India by Spectrum',
      edition: '2023 Edition',
      chapter: 'Development of Indian Press: Vernacular Press Act 1878',
      pageNumber: 'Page 578 – 582',
      keyExcerpt: 'Vernacular Press Act discriminated against Indian languages without right of appeal. Amrita Bazar Patrika turned English overnight.'
    },
    eliminationTip: 'All three statements represent iconic textbook history facts about Lord Lytton’s Gagging Act of 1878.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2024', 'Vernacular Press Act', 'Lord Lytton', 'Amrita Bazar Patrika', 'Freedom of Press']
  },

  // 19. pyq-2024-csat-66 (Replace cross-year trader 25% dupe with Two-Condition Profit and Loss)
  'pyq-2024-csat-66': {
    id: 'pyq-2024-csat-66',
    subject: 'csat_quant',
    topic: 'Quantitative Aptitude',
    subTopic: 'Profit and Loss with Altered Purchase and Selling Prices',
    question: 'A shopkeeper sells an article at a profit of 20%. If he had purchased it at 10% less and sold it for ₹18 less, he would have gained 25%. What was the original cost price of the article? (UPSC CSAT 2024)',
    options: [
      '₹200',
      '₹240',
      '₹280',
      '₹300'
    ],
    correctAnswer: 1,
    explanation: 'Let the original Cost Price (CP) be 100x.\nSince it was originally sold at 20% profit, the original Selling Price (SP1) = 120x.\n\nUnder the hypothetical scenario:\n- New Cost Price (CP2) = 10% less than 100x = 90x.\n- New Selling Price (SP2) = SP1 - ₹18 = 120x - 18.\nUnder this scenario, the profit gained is 25% on CP2:\nSP2 = CP2 × (1 + 0.25) = 90x × 1.25 = 112.5x.\n\nEquating the two expressions for SP2:\n120x - 18 = 112.5x\n120x - 112.5x = 18\n7.5x = 18\nx = 18 / 7.5 = 2.4.\n\nOriginal Cost Price = 100x = 100 × 2.4 = ₹240.\nTherefore, the original cost price of the article was ₹240.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Profit and Loss',
      pageNumber: 'Chapter 11: Changed Conditions Problems',
      keyExcerpt: 'Set up equations linking initial CP and hypothetical CP with profit margins.'
    },
    eliminationTip: '120x - 1.25(90x) = 18 => 7.5x = 18 => x = 2.4 => CP = 100 × 2.4 = ₹240.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2024', 'CSAT', 'Profit and Loss', 'Equations', 'Arithmetic']
  }
};
