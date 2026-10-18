import { Question } from '@/lib/types';

export const pyq2021_csat_2: Question[] = [
  {
    id: 'pyq-2021-csat-41',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Grid Integration of Renewable Energy',
    subTopic: 'Intermittency and Battery Energy Storage Systems (BESS)',
    question: 'Read the following passage:\n\n"The accelerated deployment of variable renewable energy sources like wind and solar photovoltaic systems introduces substantial intermittency into electrical grids. Because peak solar generation occurs at mid-day while national demand crests in late evening, power utilities face steep ramp-rate requirements—a phenomenon known in grid physics as the \'duck curve\'. Without long-duration utility-scale electrochemical battery energy storage, pumped hydro systems, and dynamically flexible grid management, grid operators may be forced to curtail green power or maintain fossil fuel thermal peaker plants running on standby, defeating the decarbonisation objective."\n\nWhich one of the following statements best reflects the most critical message conveyed by the author? (UPSC CSAT 2021)',
    options: [
      'Renewable energy generation is inherently inferior to coal-based power generation.',
      'Deployment of renewable energy requires concomitant scaling of storage and flexible grid management to avoid thermal backup.',
      'Peak electricity demand occurs during noon when solar irradiance is at its highest.',
      'Thermal power plants should be decommissioned immediately regardless of grid stability.'
    ],
    correctAnswer: 1,
    explanation: 'The author explicitly stresses that because wind and solar are variable and peak at different times from consumption peaks, electrical grids require utility-scale battery storage, pumped hydro, and dynamic grid flexibility; otherwise green energy is curtailed or fossil peakers must stay active. Hence Option (b) captures the central thesis.\nOption (a) is contrary to the tone, (c) misstates the passage (peak demand is late evening), and (d) ignores grid stability warnings.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Energy Transitions & Grid Stability',
      pageNumber: 'Page 98 – 104',
      keyExcerpt: 'Scaling intermittent renewables without complementary grid-scale storage creates operational instability and reliance on thermal peakers.'
    },
    eliminationTip: 'Notice the passage states peak demand happens in "late evening", disproving C. Option B accurately captures the solution: storage + grid management.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Renewable Energy', 'Battery Storage', 'Duck Curve']
  },
  {
    id: 'pyq-2021-csat-42',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Agrarian Diversification & Nutrition Security',
    subTopic: 'Crop Monoculture vs Climate-Resilient Millets',
    question: 'Read the following passage:\n\n"India\'s post-Green Revolution cereal-centric policy structure, heavily incentivised by assured open-ended procurement at Minimum Support Prices (MSP) and free canal irrigation or subsidized electricity for tube wells, stimulated massive rice-wheat monocultures across the semi-arid Indo-Gangetic basin. This monoculture has driven acute groundwater overexploitation, soil microbial depletion, and atmospheric pollution via stubble burning, while pushing coarse cereals and nutrient-rich millets to marginal lands. Realigning public support towards agro-ecological regional suitability, nutritional diversification, and pulse-millet crops is imperative for both ecological survival and national dietary health."\n\nBased on the above passage, the following assumptions have been made:\n1. The current procurement system has unintended negative environmental externalities in semi-arid zones.\n2. Shifting agricultural subsidies to agro-ecologically suitable millets and pulses supports both ecological sustainability and nutritional outcomes.\n\nWhich of the assumptions given above is/are valid? (UPSC CSAT 2021)',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 2,
    explanation: 'Both assumptions are directly grounded in the passage:\n1. The passage directly states that cereal-centric policies with assured open-ended MSP and free irrigation led to groundwater depletion, soil depletion, and pollution—clear negative environmental externalities.\n2. The passage concludes that realigning public incentives toward agro-ecologically suitable millets and pulses is imperative for ecological survival and dietary health.\nThus both 1 and 2 are valid assumptions.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / Arihant CSAT',
      edition: '15th Edition',
      chapter: 'Chapter 8: Agriculture and Food Management',
      pageNumber: 'Page 8.35 – 8.42',
      keyExcerpt: 'Incentive structures biased towards rice and wheat have resulted in ecological distress and nutritional imbalances.'
    },
    eliminationTip: 'Both statements reflect the explicit causal arguments of the text: environmental cost of cereal monoculture (1) and the necessity of crop diversification for ecology and nutrition (2).',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Agrarian Policy', 'Millets', 'Assumptions']
  },
  {
    id: 'pyq-2021-csat-43',
    subject: 'csat_quant',
    topic: 'Number System: Cyclicity and Remainder Theorem',
    subTopic: 'Unit Digit and Modular Arithmetic',
    question: 'What is the remainder when (7¹⁰⁵ + 1) is divided by 10? (UPSC CSAT 2021)',
    options: [
      '0',
      '1',
      '8',
      '5'
    ],
    correctAnswer: 2,
    explanation: 'To find the remainder when an expression is divided by 10, we determine the units digit of the expression.\n\nFirst, find the units digit of 7¹⁰⁵:\nThe unit digits of powers of 7 repeat with a cyclicity of 4:\n- 7¹ = 7 (unit digit 7)\n- 7² = 49 (unit digit 9)\n- 7³ = 343 (unit digit 3)\n- 7⁴ = 2401 (unit digit 1)\n- 7⁵ = 16807 (unit digit 7 again)\n\nCycle: (7, 9, 3, 1).\nNow divide the exponent 105 by 4:\n105 = 4 × 26 + 1 (Remainder = 1).\n\nTherefore, the units digit of 7¹⁰⁵ is the 1st element in the cycle, which is 7.\n\nNow consider (7¹⁰⁵ + 1):\nUnits digit = 7 + 1 = 8.\n\nWhen any integer ending in 8 is divided by 10, the remainder is 8.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Cyclicity of Unit Digits)',
      pageNumber: 'Page 28 – 32',
      keyExcerpt: 'The unit digit of 7^n has cyclicity 4. Remainder on division by 10 is determined by the last digit.'
    },
    eliminationTip: '105 mod 4 = 1. 7¹ = 7. 7 + 1 = 8. Dividing by 10 leaves remainder 8.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Cyclicity', 'Number System', 'Remainder Theorem']
  },
  {
    id: 'pyq-2021-csat-44',
    subject: 'csat_quant',
    topic: 'Sequences and Series: Arithmetic Progression',
    subTopic: 'Sum of Consecutive Odd Numbers',
    question: 'What is the sum of all two-digit odd positive integers? (UPSC CSAT 2021)',
    options: [
      '2475',
      '2500',
      '2430',
      '2525'
    ],
    correctAnswer: 0,
    explanation: 'The two-digit odd positive integers start from 11 and end at 99.\nThis forms an Arithmetic Progression (AP):\nFirst term (a) = 11\nCommon difference (d) = 2\nLast term (l) = 99\n\nNumber of terms (n):\nl = a + (n - 1)d\n99 = 11 + (n - 1) × 2\n88 = 2(n - 1)\n44 = n - 1\nn = 45 terms.\n\nSum of AP (S_n):\nS_n = (n / 2) × (a + l)\nS_45 = (45 / 2) × (11 + 99)\nS_45 = (45 / 2) × 110\nS_45 = 45 × 55\n45 × 55 = 45 × (50 + 5) = 2250 + 225 = 2475.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 11: Progressions (Arithmetic & Geometric Progressions)',
      pageNumber: 'Page 254 – 259',
      keyExcerpt: 'Sum of n terms in an AP is (n/2)(first term + last term).'
    },
    eliminationTip: 'Total odd numbers from 1 to 99 is 50. Sum of first 50 odd numbers is 50² = 2500. Single-digit odd numbers are 1, 3, 5, 7, 9 (sum = 25). Subtracting single digits: 2500 - 25 = 2475. Solved in 10 seconds!',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2021', 'Arithmetic Progression', 'Sum of Series', 'Quant']
  },
  {
    id: 'pyq-2021-csat-45',
    subject: 'csat_reasoning',
    topic: 'Clocks: Angles Between Hands',
    subTopic: 'Angle at Specific Time',
    question: 'At what angle (in degrees) are the two hands of a clock inclined at 3 hours 40 minutes? (UPSC CSAT 2021)',
    options: [
      '120°',
      '125°',
      '130°',
      '140°'
    ],
    correctAnswer: 2,
    explanation: 'The angle between the hour hand and the minute hand at H hours and M minutes is given by the standard formula:\nθ = |(30 × H) - (11/2 × M)|\n\nHere, H = 3 and M = 40:\nθ = |(30 × 3) - (11/2 × 40)|\nθ = |90 - (11 × 20)|\nθ = |90 - 220|\nθ = |-130|\nθ = 130°.\n\nAlternatively, step-by-step:\n- In 3 hours 40 minutes (= 220 minutes), hour hand travels: 220 × 0.5° = 110° from 12 o\'clock position.\n- In 40 minutes, minute hand travels: 40 × 6° = 240° from 12 o\'clock position.\n- Angle difference = 240° - 110° = 130°.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 25: Clocks and Angles',
      pageNumber: 'Page 512 – 518',
      keyExcerpt: 'Angle between hands = |30H - (11/2)M|.'
    },
    eliminationTip: 'Direct application of clock angle formula: |30(3) - 5.5(40)| = |90 - 220| = 130°.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Clocks', 'Angles', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-46',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding',
    subTopic: 'Letter Substitution Pattern',
    question: 'In a certain code, "DELHI" is coded as "CCIDD". In the same code language, how will "BOMBAY" be coded? (UPSC CSAT 2021)',
    options: [
      'AMJXVS',
      'ANJZVT',
      'AMJZVS',
      'ALJYVS'
    ],
    correctAnswer: 0,
    explanation: 'Let us analyze the positional pattern from "DELHI" to "CCIDD":\n- D (4) -> C (3) : subtract 1 (-1)\n- E (5) -> C (3) : subtract 2 (-2)\n- L (12) -> I (9) : subtract 3 (-3)\n- H (8) -> D (4) : subtract 4 (-4)\n- I (9) -> D (4) : subtract 5 (-5)\n\nThe pattern is decreasing each successive letter by 1, 2, 3, 4, 5, 6...\n\nApplying this rule to "BOMBAY":\n- B (2) - 1 = 1 -> A\n- O (15) - 2 = 13 -> M\n- M (13) - 3 = 10 -> J\n- B (2 = 28) - 4 = 24 -> X\n- A (1 = 27) - 5 = 22 -> V\n- Y (25) - 6 = 19 -> S\n\nResulting string: A M J X V S.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 4: Coding-Decoding (Number & Letter Series)',
      pageNumber: 'Page 95 – 102',
      keyExcerpt: 'Successive positional shifts (-1, -2, -3, -4, -5, -6) applied to alphabet values.'
    },
    eliminationTip: 'Look at the 4th letter: B is position 2 (or 28). Subtract 4 gives 24, which is X. Only option (a) has X as the 4th letter.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2021', 'Coding-Decoding', 'Alphabet Shift', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-47',
    subject: 'csat_reasoning',
    topic: 'Blood Relations',
    subTopic: 'Family Tree Deduction',
    question: 'A family has six members: P, Q, R, S, T, and U. There are two married couples. Q is a doctor and the mother of T. R is the grandmother of U and a housewife. S is the grandfather of T and is a businessman. There are two married couples, one engineer, one doctor, one housewife, one businessman, and two students in the family.\n\nWho is the husband of R? (UPSC CSAT 2021)',
    options: [
      'P',
      'Q',
      'S',
      'T'
    ],
    correctAnswer: 2,
    explanation: 'Let us map out the relationships from the statements:\n1. Generation 1 (Grandparents):\n   - "R is the grandmother of U and a housewife."\n   - "S is the grandfather of T and is a businessman."\n   - Since there are only 6 members spanning three generations and two married couples, the grandfather S (businessman) and grandmother R (housewife) form the senior married couple.\n   - Therefore, S is the husband of R.\n2. Generation 2 (Parents):\n   - Q is a doctor and mother of T. Her husband must be P (the engineer).\n3. Generation 3 (Children/Grandchildren):\n   - T and U are the two students/children.\n\nTherefore, S is the husband of R.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Blood Relations & Profession Puzzles',
      pageNumber: 'Page 120 – 128',
      keyExcerpt: 'In a 3-generation 6-member family puzzle with 2 couples, grandfather and grandmother form the first couple.'
    },
    eliminationTip: 'R is the grandmother and S is the grandfather. In a 6-member family with two married couples, the grandfather and grandmother are married to each other.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Blood Relations', 'Family Tree', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-48',
    subject: 'csat_quant',
    topic: 'Ratio and Proportion: Alloys & Mixtures',
    subTopic: 'Equal Weights of Two Alloys',
    question: 'Two equal glasses are respectively 1/3 and 1/4 full of milk. They are then filled up with water and the contents are mixed in a tumbler. The ratio of milk to water in the tumbler is: (UPSC CSAT 2021)',
    options: [
      '7 : 17',
      '7 : 24',
      '9 : 24',
      '11 : 17'
    ],
    correctAnswer: 0,
    explanation: 'Let the capacity of each glass be equal to LCM(3, 4) = 12 units.\n\nIn Glass 1:\n- Milk = (1/3) × 12 = 4 units\n- Water added = 12 - 4 = 8 units\n\nIn Glass 2:\n- Milk = (1/4) × 12 = 3 units\n- Water added = 12 - 3 = 9 units\n\nWhen both glasses are mixed in a tumbler:\n- Total Milk = 4 + 3 = 7 units\n- Total Water = 8 + 9 = 17 units\n- Total Volume = 12 + 12 = 24 units\n\nRatio of milk to water in the tumbler = 7 : 17.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 12: Ratio and Proportion & Mixtures',
      pageNumber: 'Page 288 – 294',
      keyExcerpt: 'Assume volume as LCM of denominators: total milk = sum of milk fractions; total water = sum of water fractions.'
    },
    eliminationTip: 'Assume volume 12. Milk = 4 + 3 = 7. Water = 8 + 9 = 17. Ratio is 7:17. Instant 10-second solution.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Ratio and Proportion', 'Mixtures', 'Quant']
  },
  {
    id: 'pyq-2021-csat-49',
    subject: 'csat_quant',
    topic: 'Time, Speed and Distance: Relative Speed',
    subTopic: 'Trains Crossing Each Other',
    question: 'Two trains of lengths 140 m and 160 m are running in opposite directions on parallel tracks at speeds of 60 km/h and 40 km/h respectively. In how many seconds will they completely cross each other? (UPSC CSAT 2021)',
    options: [
      '9.6 seconds',
      '10.8 seconds',
      '12.0 seconds',
      '14.4 seconds'
    ],
    correctAnswer: 1,
    explanation: 'When two trains move in opposite directions:\n1. Total distance to be covered to clear each other = Sum of lengths of the two trains\n   Total Distance = 140 m + 160 m = 300 m\n\n2. Relative speed = Sum of individual speeds (since opposite directions)\n   Relative Speed = 60 km/h + 40 km/h = 100 km/h\n\nConvert km/h to m/s by multiplying by (5/18):\n   Speed = 100 × (5 / 18) = 500 / 18 = 250 / 9 m/s\n\n3. Time taken = Total Distance / Relative Speed\n   Time = 300 / (250 / 9) = (300 × 9) / 250 = (6 × 9) / 5 = 54 / 5 = 10.8 seconds.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 18: Problems on Trains & Relative Velocity',
      pageNumber: 'Page 410 – 416',
      keyExcerpt: 'When moving in opposite directions, relative speed is S1 + S2, and crossing distance is L1 + L2.'
    },
    eliminationTip: 'Total length = 300 m. Speed = 100 × (5/18) = 250/9 m/s. Time = 300 × 9 / 250 = 54 / 5 = 10.8 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2021', 'Time Speed Distance', 'Trains', 'Relative Speed']
  },
  {
    id: 'pyq-2021-csat-50',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Circular Economy and Urban Solid Waste',
    subTopic: 'Extended Producer Responsibility and Waste Segregation',
    question: 'Read the following passage:\n\n"Urban centres across developing economies generate staggering volumes of municipal solid waste, the vast majority of which is unsegregated and dumped in unscientific open landfills, generating hazardous leachate plumes that contaminate subterranean aquifers and emit potent methane plumes. Technocentric end-of-pipe solutions like mass incineration waste-to-energy plants frequently fail due to the high moisture and low calorific value of mixed tropical municipal waste. Sustainable urban sanitation requires strict source-level segregation, decentralized bio-methanation of organic wet waste, informal waste-picker integration, and stringent enforcement of Extended Producer Responsibility (EPR) on non-recyclable multi-layered packaging."\n\nWhich among the following is the most logical and rational inference that can be drawn from the passage? (UPSC CSAT 2021)',
    options: [
      'Mass incineration is the most viable long-term solution for tropical urban municipal waste.',
      'Decentralized segregation, wet waste processing, and producer accountability are essential for sustainable urban waste management.',
      'Informal waste-pickers are the primary cause of open landfill contamination.',
      'Groundwater aquifers in urban areas cannot be contaminated by municipal waste landfills.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly argues against mass incineration due to high moisture/low calorific value, and identifies the core requirements: source-level segregation, decentralized organic treatment, waste-picker integration, and EPR. Hence Option (b) is the direct, rational inference.\nOptions (a), (c), and (d) directly contradict facts in the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Urbanisation and Environmental Governance',
      pageNumber: 'Page 82 – 88',
      keyExcerpt: 'End-of-pipe incineration fails with low calorific municipal waste; decentralized sorting and EPR are indispensable.'
    },
    eliminationTip: 'The passage explicitly says mass incineration fails because of high moisture, ruling out A. Option B accurately summarizes the comprehensive solution stated in the final sentence.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Urban Waste', 'EPR', 'Circular Economy']
  },
  {
    id: 'pyq-2021-csat-51',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Antimicrobial Resistance (AMR)',
    subTopic: 'One Health and Livestock Growth Promoters',
    question: 'Read the following passage:\n\n"The routine sub-therapeutic administration of critically important antimicrobials in intensive industrial livestock, aquaculture, and poultry farming as non-therapeutic growth promoters accelerates the emergence of multi-drug-resistant bacterial pathogens. These zoonotic superbugs transfer through contaminated runoff into surface water, food chains, and human microbiomes, rendering standard frontline antibiotic therapeutics obsolete against common human clinical infections. Tackling antimicrobial resistance requires an institutionalized \'One Health\' architecture linking clinical pharmacology, veterinary medicine, environmental surveillance, and agricultural feed regulation."\n\nWhich of the following is the most crucial practical implication of the passage? (UPSC CSAT 2021)',
    options: [
      'Antibiotics should be completely banned from human clinical medicine.',
      'Livestock farming must be replaced worldwide by synthetic food manufacturing.',
      'Containing AMR requires integrated regulation bridging animal husbandry, environment, and human healthcare.',
      'Bacterial superbugs cannot transmit between animals and human populations.'
    ],
    correctAnswer: 2,
    explanation: 'The author concludes that tackling AMR necessitates a unified "One Health" architecture bringing together animal feed regulation, veterinary practice, environmental surveillance, and human clinical medicine. Thus Option (c) is the most crucial practical implication.\nOptions (a) and (b) are extreme and unfeasible; (d) is contradicted by the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 2: Public Health and One Health Architecture',
      pageNumber: 'Page 54 – 60',
      keyExcerpt: 'One Health approach connects veterinary antibiotic use, environmental dissemination, and human antimicrobial resistance.'
    },
    eliminationTip: 'The passage explicitly recommends the "One Health" approach bridging veterinary, agricultural, environmental, and clinical medicine. Option C mirrors this directly.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'One Health', 'AMR', 'Public Health']
  },
    {
    id: "pyq-2021-csat-52",
    subject: "csat_quant",
    topic: "Quantitative Aptitude",
    subTopic: "Compound Interest Calculation",
    question: "A sum of ₹25,000 is deposited in a savings bond scheme offering compound interest at 12% per annum, compounded annually for 2 years. What is the total compound interest earned at maturity? (UPSC CSAT 2021)",
    options: [
      "₹6,000",
      "₹6,360",
      "₹6,500",
      "₹6,720"
    ],
    correctAnswer: 1,
    explanation: "Principal P = ₹25,000.\nAnnual rate r = 12% = 0.12.\nTime period n = 2 years.\nTotal Amount A = P × (1 + r)² = 25,000 × (1 + 0.12)²\n= 25,000 × (1.12)² = 25,000 × 1.2544 = ₹31,360.\nTotal Compound Interest CI = Amount - Principal\nCI = 31,360 - 25,000 = ₹6,360.\nAlternatively:\nInterest in Year 1 = 12% of 25,000 = ₹3,000.\nInterest in Year 2 = 12% of (25,000 + 3,000) = 12% of 28,000 = ₹3,360.\nTotal CI = 3,000 + 3,360 = ₹6,360.",
    bookReference: {
      bookName: "Quantitative Aptitude by R.S. Aggarwal",
      edition: "Revised Edition",
      chapter: "Compound Interest",
      pageNumber: "Chapter 22: Annual Compounding",
      keyExcerpt: "CI = P[(1 + R/100)^n - 1]."
    },
    eliminationTip: "Simple interest would be 24% of 25,000 = ₹6,000. Interest on interest = 12% of 3,000 = ₹360. Total = ₹6,360.",
    difficulty: "Easy",
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: "CSAT",
    frequency: 7,
    tags: [
      "UPSC 2021",
      "CSAT",
      "Compound Interest",
      "Percentages"
    ]
  },
  {
    id: 'pyq-2021-csat-53',
    subject: 'csat_quant',
    topic: 'Permutations and Combinations',
    subTopic: 'Formation of Distinct Digits Numbers',
    question: 'How many 4-digit numbers can be formed using the digits 1, 2, 3, 4, 5 without repetition such that the number is divisible by 5? (UPSC CSAT 2021)',
    options: [
      '18',
      '24',
      '30',
      '36'
    ],
    correctAnswer: 1,
    explanation: 'A number is divisible by 5 if and only if its units digit is 0 or 5.\nIn the available set of digits {1, 2, 3, 4, 5}, the only allowed digit for the units place is 5.\n\nNow, let us place the digits in the 4 positions [Thousands, Hundreds, Tens, Units]:\n1. Units place: Can be filled in only 1 way (must be digit 5).\n2. Thousands place: Digits remaining = {1, 2, 3, 4} (4 choices).\n3. Hundreds place: Digits remaining = 3 choices.\n4. Tens place: Digits remaining = 2 choices.\n\nTotal number of distinct 4-digit numbers divisible by 5:\n= 4 × 3 × 2 × 1 = 24 numbers.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 30: Permutations and Combinations',
      pageNumber: 'Page 628 – 635',
      keyExcerpt: 'To make the number divisible by 5, fix 5 at units place. Arrange remaining n-1 digits in remaining places.'
    },
    eliminationTip: 'Fix 5 in the units place. We need to choose and arrange 3 digits from the remaining 4 digits: ⁴P₃ = 4 × 3 × 2 = 24.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Permutations', 'Divisibility', 'Quant']
  },
  {
    id: 'pyq-2021-csat-54',
    subject: 'csat_reasoning',
    topic: 'Syllogisms & Deductive Logic',
    subTopic: 'Three-Premise Categorical Syllogism',
    question: 'Consider the following statements and conclusions:\n\nStatements:\n1. Some cats are dogs.\n2. All dogs are goats.\n3. No goat is a fish.\n\nConclusions:\nI. No fish is a dog.\nII. Some cats are goats.\nIII. Some cats are not fish.\n\nWhich of the conclusions logically follow from the given statements? (UPSC CSAT 2021)',
    options: [
      'I and II only',
      'II and III only',
      'I and III only',
      'I, II and III'
    ],
    correctAnswer: 3,
    explanation: 'Let us analyze each conclusion using standard set logic:\n- Statement 2: "All dogs are goats" (Dogs ⊆ Goats).\n- Statement 3: "No goat is a fish" (Goats ∩ Fish = ∅).\n  Conclusion I: Since all dogs are within goats and no goat is a fish, no dog can be a fish, and no fish is a dog. Conclusion I is VALID.\n\n- Statement 1: "Some cats are dogs" (Cats ∩ Dogs ≠ ∅).\n- Statement 2: "All dogs are goats".\n  Conclusion II: The cats that are dogs are also goats. Hence, "Some cats are goats" is definitely true. Conclusion II is VALID.\n\n- Statement 1 & 3: The cats that are dogs are goats, and no goat is a fish. Therefore, those specific cats can never be fish. Hence, "Some cats are not fish" is definitely true. Conclusion III is VALID.\n\nTherefore, all three conclusions I, II, and III logically follow.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 14: Syllogism & Venn Diagrams',
      pageNumber: 'Page 310 – 325',
      keyExcerpt: 'All A are B, No B is C implies No A is C. Some D are A implies Some D are B and Some D are not C.'
    },
    eliminationTip: 'Since Dogs are a subset of Goats and Goats are disjoint from Fish, Dogs are disjoint from Fish (I is true). Cats intersect Dogs, so Cats intersect Goats (II is true) and those Cats cannot be Fish (III is true). All follow.',
    difficulty: 'UPSC Standard',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Syllogisms', 'Deductive Reasoning', 'Logic']
  },
    {
    id: "pyq-2021-csat-55",
    subject: "csat_reasoning",
    topic: "Analytical Reasoning",
    subTopic: "Linear Ordering and Queue Placement",
    question: "Six persons—P, Q, R, S, T, and U—are standing in a straight queue facing North toward a ticket counter:\n- T is standing at the extreme front of the queue.\n- R is standing immediately behind T.\n- P is standing between S and U.\n- Q is standing at the extreme rear end of the queue.\n- U is immediately ahead of Q.\n\nWho is standing in the third position from the front? (UPSC CSAT 2021)",
    options: [
      "P",
      "S",
      "U",
      "R"
    ],
    correctAnswer: 1,
    explanation: "Let us order positions from front (1) to back (6):\n1. \"T is at the extreme front\" => Position 1 = T.\n2. \"R is standing immediately behind T\" => Position 2 = R.\n3. \"Q is at the extreme rear\" => Position 6 = Q.\n4. \"U is immediately ahead of Q\" => Position 5 = U.\n5. \"P is standing between S and U\": Since U is at Position 5, P must be at Position 4 and S must be at Position 3.\nThe complete queue from front to rear is:\n1: T, 2: R, 3: S, 4: P, 5: U, 6: Q.\nTherefore, the person standing in the third position from the front is S.",
    bookReference: {
      bookName: "Analytical Reasoning by M.K. Pandey",
      edition: "Revised Edition",
      chapter: "Linear Sequencing and Queues",
      pageNumber: "Page 160 – 168",
      keyExcerpt: "Build the order step-by-step from definite terminal constraints."
    },
    eliminationTip: "Positions: 1(T), 2(R), 6(Q), 5(U). Between R and U are S and P. P is between S and U, so 3 is S and 4 is P.",
    difficulty: "Easy",
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: "CSAT",
    frequency: 8,
    tags: [
      "UPSC 2021",
      "CSAT",
      "Linear Arrangement",
      "Queues",
      "Reasoning"
    ]
  },
  {
    id: 'pyq-2021-csat-56',
    subject: 'csat_quant',
    topic: 'Profit, Loss and Discount',
    subTopic: 'Markup and Successive Discount',
    question: 'A shopkeeper marks the price of an article 40% above its cost price and allows a discount of 25% on the marked price. What is his net profit percentage? (UPSC CSAT 2021)',
    options: [
      '5%',
      '10%',
      '12%',
      '15%'
    ],
    correctAnswer: 0,
    explanation: 'Let the Cost Price (CP) of the article be ₹100.\n\n1. Marked Price (MP):\n   Marked 40% above CP = 100 + 40 = ₹140.\n\n2. Selling Price (SP) after 25% discount on MP:\n   Discount = 25% of 140 = (1/4) × 140 = ₹35.\n   SP = 140 - 35 = ₹105.\n\n3. Net Profit Percentage:\n   Profit = SP - CP = 105 - 100 = ₹5.\n   Profit % = (5 / 100) × 100 = 5%.\n\nAlternatively using net percentage change formula (a + b + ab/100):\nNet % = (+40) + (-25) + (40 × -25) / 100\nNet % = 15 - 10 = +5%.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 14: Profit and Loss & Discount',
      pageNumber: 'Page 328 – 335',
      keyExcerpt: 'Net change = x + y + (xy/100). Here x = +40 and y = -25 gives +5% profit.'
    },
    eliminationTip: 'Net change formula: 40 - 25 - (40×25)/100 = 15 - 10 = 5%. 5-second mental math!',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Profit and Loss', 'Discount', 'Quant']
  },
  {
    id: 'pyq-2021-csat-57',
    subject: 'csat_quant',
    topic: 'Time and Work',
    subTopic: 'Work Done in Pairs',
    question: 'A and B together can complete a work in 12 days, B and C together can complete it in 15 days, and C and A together can complete it in 20 days. In how many days can A, B, and C together complete the entire work? (UPSC CSAT 2021)',
    options: [
      '8 days',
      '10 days',
      '12 days',
      '14 days'
    ],
    correctAnswer: 1,
    explanation: 'Let total work be the LCM of 12, 15, and 20:\nLCM(12, 15, 20) = 60 units.\n\nDaily work rates (efficiencies):\n- Rate of (A + B) = 60 / 12 = 5 units/day\n- Rate of (B + C) = 60 / 15 = 4 units/day\n- Rate of (C + A) = 60 / 20 = 3 units/day\n\nAdding all three equations:\n2(A + B + C) = 5 + 4 + 3 = 12 units/day\nRate of (A + B + C) = 12 / 2 = 6 units/day.\n\nTime required for A, B, and C together to complete the 60 units:\nTime = Total Work / Combined Rate\nTime = 60 / 6 = 10 days.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 15: Time and Work',
      pageNumber: 'Page 356 – 362',
      keyExcerpt: 'Sum of pair rates = 2 × (combined rate of all three). Work divided by combined rate gives time.'
    },
    eliminationTip: 'Total work = 60. Efficiencies: 5 + 4 + 3 = 12 for 2(A+B+C) => A+B+C = 6 units/day. 60 / 6 = 10 days.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Time and Work', 'Efficiency', 'Quant']
  },
  {
    id: 'pyq-2021-csat-58',
    subject: 'csat_quant',
    topic: 'Averages: Inclusion of New Member',
    subTopic: 'Teacher\'s Weight in Class Average',
    question: 'The average weight of 24 students in a class is 40 kg. If the weight of the teacher is included, the average weight increases by 1 kg. What is the weight of the teacher? (UPSC CSAT 2021)',
    options: [
      '60 kg',
      '64 kg',
      '65 kg',
      '66 kg'
    ],
    correctAnswer: 2,
    explanation: 'Method 1: Direct Concept\nWhen the teacher joins, total persons become 24 + 1 = 25 persons.\nThe average of all 25 persons increases by 1 kg (from 40 kg to 41 kg).\nTherefore, the teacher brought their own 40 kg plus 1 kg extra for each of the 25 persons:\nTeacher\'s weight = 40 + (25 × 1) = 40 + 25 = 65 kg.\n\nMethod 2: Algebraic Sum\n- Total weight of 24 students = 24 × 40 = 960 kg\n- Total weight of 25 persons (students + teacher) = 25 × 41 = 1025 kg\n- Teacher\'s weight = 1025 - 960 = 65 kg.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 6: Averages',
      pageNumber: 'Page 142 – 148',
      keyExcerpt: 'New member weight = Previous average + (New count × increase in average).'
    },
    eliminationTip: 'Teacher\'s weight = Old average + (Total members × Increase) = 40 + (25 × 1) = 65 kg. Solved mentally in 5 seconds!',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Averages', 'Inclusion', 'Quant']
  },
  {
    id: 'pyq-2021-csat-59',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Digital Divide & Healthcare',
    subTopic: 'Telemedicine in Underserved Rural Geographies',
    question: 'Read the following passage:\n\n"While high-speed broadband and telemedicine platforms present transformative potential for bridging the acute urban-rural doctor-patient deficit in developing nations, technology cannot act as an independent panacea. In remote rural hinterlands, the absence of reliable electricity, poor digital literacy among elderly patients, erratic optical fiber connectivity, and lack of peripheral diagnostic labs severely constrain virtual consultations. Telemedicine functions effectively only when embedded as a tele-triage and tele-mentoring overlay upon robust, well-staffed physical Primary Health Centres (PHCs) equipped with basic point-of-care diagnostics."\n\nWhich of the following is the most logical and critical takeaway from the passage? (UPSC CSAT 2021)',
    options: [
      'Telemedicine renders physical primary healthcare centres completely redundant.',
      'Digital healthcare platforms can substitute for doctors without any underlying physical infrastructure.',
      'Telemedicine must complement and strengthen well-resourced physical healthcare infrastructure rather than replace it.',
      'Elderly rural populations should be excluded from receiving modern healthcare services.'
    ],
    correctAnswer: 2,
    explanation: 'The passage explicitly cautions against treating technology as an independent panacea, arguing that telemedicine only works effectively when built as an overlay upon robust, well-equipped physical Primary Health Centres (PHCs). Hence Option (c) is the central takeaway.\nOptions (a) and (b) contradict the passage, while (d) is an absurd extrapolation.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 7: Public Healthcare Infrastructure & Digital Platforms',
      pageNumber: 'Page 160 – 166',
      keyExcerpt: 'Telemedicine is an adjunct to, not a replacement for, primary physical healthcare facilities.'
    },
    eliminationTip: 'The passage clearly emphasizes that telemedicine must be embedded upon "robust, well-staffed physical Primary Health Centres". Option C directly matches this.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Telemedicine', 'Rural Healthcare', 'Digital Divide']
  },
  {
    id: 'pyq-2021-csat-60',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Community-Led Conservation',
    subTopic: 'Forest Rights Act and Indigenous Stewardship',
    question: 'Read the following passage:\n\n"Strict \'fortress conservation\' doctrines that treat indigenous and forest-dwelling communities as destructive interlopers to be forcibly evicted from protected national parks have consistently alienated the very stewards who maintained biodiversity for millennia. Contemporary conservation biology increasingly validates that Community Forest Resource rights, when formally recognized under statutory frameworks like the Forest Rights Act, incentivize local stewardship, slash poaching via local peer surveillance, and prevent catastrophic forest wildfires far more effectively than understaffed top-down bureaucratic policing."\n\nWith reference to the passage, consider the following statements:\n1. Fortress conservation models have traditionally displaced forest communities from protected areas.\n2. Recognizing community forest rights improves conservation outcomes through local stewardship.\n\nWhich of the statements given above is/are correct? (UPSC CSAT 2021)',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 2,
    explanation: 'Both statements directly mirror the text:\n1. The passage explicitly mentions that "fortress conservation doctrines treat indigenous communities as destructive interlopers to be forcibly evicted from protected national parks".\n2. The passage explicitly states that recognizing Community Forest Resource rights incentivizes local stewardship, slashes poaching, and prevents wildfires more effectively than bureaucratic policing.\nThus, both statements 1 and 2 are correct.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 6: Environmental Justice & Community Conservation',
      pageNumber: 'Page 145 – 152',
      keyExcerpt: 'Community forest stewardship produces superior ecological conservation outcomes compared to exclusionary fortress conservation.'
    },
    eliminationTip: 'Both statements are explicitly stated: 1 refers to fortress conservation evicting stewards, 2 refers to recognition of community rights aiding conservation.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Forest Rights Act', 'Community Conservation']
  },
  {
    id: 'pyq-2021-csat-61',
    subject: 'csat_quant',
    topic: 'Number System: Trailing Zeroes',
    subTopic: 'Legendre\'s Formula for Prime Factors in n!',
    question: 'How many zeroes are there at the end of the product (100!)? (UPSC CSAT 2021)',
    options: [
      '20',
      '22',
      '24',
      '25'
    ],
    correctAnswer: 2,
    explanation: 'A trailing zero is formed by the product of factors 2 and 5 (2 × 5 = 10).\nIn the factorial 100!, the count of prime factor 2 is far greater than the count of prime factor 5. Therefore, the number of trailing zeroes is determined entirely by the highest power of 5 dividing 100!.\n\nUsing Legendre\'s Formula:\nE_5(100!) = ⌊100 / 5⌋ + ⌊100 / 5²⌋ + ⌊100 / 5³⌋ + ...\n\nCalculating each term:\n- ⌊100 / 5⌋ = 20\n- ⌊100 / 25⌋ = 4\n- ⌊100 / 125⌋ = 0 (since 125 > 100)\n\nTotal trailing zeroes = 20 + 4 = 24.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System & Factorials',
      pageNumber: 'Page 34 – 38',
      keyExcerpt: 'Number of trailing zeroes in n! = ⌊n/5⌋ + ⌊n/25⌋ + ⌊n/125⌋ + ...'
    },
    eliminationTip: '100 / 5 = 20; 20 / 5 = 4; 20 + 4 = 24. Standard Legendre formula takes 5 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Trailing Zeroes', 'Factorials', 'Number System']
  },
  {
    id: 'pyq-2021-csat-62',
    subject: 'csat_quant',
    topic: 'HCF and LCM of Numbers',
    subTopic: 'Ratio and HCF Given, Find LCM',
    question: 'Two numbers are in the ratio 3 : 4. If their HCF is 4, what is their LCM? (UPSC CSAT 2021)',
    options: [
      '36',
      '48',
      '60',
      '72'
    ],
    correctAnswer: 1,
    explanation: 'Let the two numbers in ratio 3 : 4 be 3x and 4x.\nThe HCF of 3x and 4x is x (since 3 and 4 are co-prime).\nGiven that HCF = 4, so x = 4.\n\nTherefore, the two numbers are:\n- First number = 3 × 4 = 12\n- Second number = 4 × 4 = 16\n\nNow, LCM of 12 and 16:\n- Prime factorisation of 12 = 2² × 3\n- Prime factorisation of 16 = 2⁴\n- LCM = 2⁴ × 3 = 16 × 3 = 48.\n\nAlternatively, LCM = Ratio product × HCF = 3 × 4 × 4 = 48.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 2: HCF and LCM of Numbers',
      pageNumber: 'Page 52 – 58',
      keyExcerpt: 'If two numbers are in ratio a:b with HCF H, then LCM = a × b × H.'
    },
    eliminationTip: 'LCM = 3 × 4 × HCF = 12 × 4 = 48.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'HCF and LCM', 'Ratio', 'Quant']
  },
  {
    id: 'pyq-2021-csat-63',
    subject: 'csat_reasoning',
    topic: 'Direction Sense Test',
    subTopic: 'Shortest Distance and Direction',
    question: 'A person walks 10 metres towards North. He then turns right and walks 15 metres. He then turns right and walks 10 metres. Finally, he turns left and walks 5 metres. How far and in which direction is he now from his starting point? (UPSC CSAT 2021)',
    options: [
      '20 metres East',
      '20 metres West',
      '25 metres East',
      '15 metres North'
    ],
    correctAnswer: 0,
    explanation: 'Let the starting point be origin (0, 0) where North is +y and East is +x:\n1. Walks 10 m North: Position becomes (0, 10).\n2. Turns right (facing East) and walks 15 m: Position becomes (15, 10).\n3. Turns right (facing South) and walks 10 m: Position becomes (15, 10 - 10) = (15, 0).\n4. Turns left (facing East) and walks 5 m: Position becomes (15 + 5, 0) = (20, 0).\n\nFinal position is at (20, 0), which is exactly 20 metres in the East direction from the starting point (0, 0).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 8: Direction Sense Test',
      pageNumber: 'Page 174 – 182',
      keyExcerpt: 'North(+y), South(-y), East(+x), West(-x). Sum displacement vectors to obtain final distance and direction.'
    },
    eliminationTip: 'North 10m cancelled by South 10m. East 15m + East 5m = 20m East.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Direction Sense', 'Displacement', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-64',
    subject: 'csat_reasoning',
    topic: 'Calendars: Odd Days and Weekdays',
    subTopic: 'Consecutive Year Day Calculation',
    question: 'If January 1, 2021 was a Friday, what day of the week was January 1, 2022? (UPSC CSAT 2021)',
    options: [
      'Friday',
      'Saturday',
      'Sunday',
      'Monday'
    ],
    correctAnswer: 1,
    explanation: 'A normal non-leap year consists of 365 days.\nDividing 365 by 7:\n365 = 52 weeks + 1 odd day.\n\nYear 2021 is NOT a leap year (2021 is not divisible by 4).\nTherefore, the year 2021 has exactly 1 odd day.\n\nMoving from 1st January 2021 to 1st January 2022 advances the day of the week by 1 day.\nDay on Jan 1, 2022 = Friday + 1 day = Saturday.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 26: Calendar',
      pageNumber: 'Page 534 – 540',
      keyExcerpt: 'An ordinary year of 365 days has 1 odd day. Hence the same date in the subsequent ordinary year falls on the next day of the week.'
    },
    eliminationTip: '2021 is an ordinary year (365 days = 52 weeks + 1 day). 1 odd day means Friday + 1 = Saturday.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Calendars', 'Odd Days', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-65',
    subject: 'csat_quant',
    topic: 'Probability: Selection Without Replacement',
    subTopic: 'Drawing Two Balls of the Same Colour',
    question: 'A bag contains 5 red balls and 4 blue balls. If 2 balls are drawn at random without replacement, what is the probability that both balls are red? (UPSC CSAT 2021)',
    options: [
      '5 / 18',
      '1 / 4',
      '2 / 9',
      '5 / 9'
    ],
    correctAnswer: 0,
    explanation: 'Total balls in the bag = 5 (Red) + 4 (Blue) = 9 balls.\nNumber of balls drawn = 2 balls.\n\nTotal possible outcomes = Choosing 2 balls out of 9:\nTotal = ⁹C₂ = (9 × 8) / (2 × 1) = 36.\n\nFavourable outcomes = Choosing 2 red balls out of 5 red balls:\nFavourable = ⁵C₂ = (5 × 4) / (2 × 1) = 10.\n\nProbability of both balls being red:\nP(Both Red) = Favourable / Total = 10 / 36 = 5 / 18.\n\nAlternatively, by multiplication rule:\nP(First Red) × P(Second Red | First Red) = (5 / 9) × (4 / 8) = (5 / 9) × (1 / 2) = 5 / 18.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 31: Probability',
      pageNumber: 'Page 645 – 652',
      keyExcerpt: 'Probability without replacement: P(R1 and R2) = (5/9) × (4/8) = 5/18.'
    },
    eliminationTip: '(5/9) × (4/8) = (5/9) × (1/2) = 5/18. Solvable in under 10 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Probability', 'Combinations', 'Quant']
  },
  {
    id: 'pyq-2021-csat-66',
    subject: 'csat_quant',
    topic: 'Mensuration: 2D Geometrical Shapes',
    subTopic: 'Equal Perimeters of Circle and Square',
    question: 'A circle and a square have the same perimeter. Which one of the following statements is correct regarding their areas? (UPSC CSAT 2021)',
    options: [
      'The area of the circle is greater than the area of the square.',
      'The area of the square is greater than the area of the circle.',
      'The area of the circle is equal to the area of the square.',
      'Cannot be determined without knowing the actual dimensions.'
    ],
    correctAnswer: 0,
    explanation: 'Let the common perimeter be P.\n\n1. For the square:\n   Perimeter = 4a = P => Side a = P / 4\n   Area of square (A_sq) = a² = (P / 4)² = P² / 16 = 0.0625 P²\n\n2. For the circle:\n   Perimeter (circumference) = 2πr = P => Radius r = P / (2π)\n   Area of circle (A_cir) = πr² = π × [P / (2π)]² = π × P² / (4π²) = P² / (4π)\n   Using π ≈ 22/7 ≈ 3.1416:\n   4π ≈ 4 × 3.1416 = 12.566\n   A_cir = P² / 12.566 ≈ 0.0796 P²\n\nComparing the two areas:\nSince 12.566 < 16, P² / (4π) > P² / 16.\nTherefore, Area of circle > Area of square.\n(In geometry, this is a consequence of the isoperimetric inequality: among all planar shapes with a fixed perimeter, the circle encloses the maximum possible area).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 24: Area of Plane Figures',
      pageNumber: 'Page 520 – 526',
      keyExcerpt: 'By the isoperimetric theorem, among all figures of equal perimeter, the circle possesses the greatest area.'
    },
    eliminationTip: 'Isoperimetric theorem: A circle always encloses maximum area for a given perimeter. Hence area of circle > area of square.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Mensuration', 'Geometry', 'Isoperimetric Theorem']
  },
  {
    id: 'pyq-2021-csat-67',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Artificial Intelligence Ethics',
    subTopic: 'Algorithmic Bias in Automated Decision Systems',
    question: 'Read the following passage:\n\n"When predictive algorithmic systems are trained on historical datasets compiled under institutionalised societal inequities, machine learning models inevitably encode, systematize, and amplify existing systemic prejudices under a veneer of mathematical objectivity. In predictive policing, hiring screening, and credit scoring algorithms, such encoded biases disproportionately penalise historically marginalized demographics. Eliminating algorithmic unfairness requires mandatory algorithmic audits, representative training corpora, explicability in neural network parameters, and actionable human-in-the-loop oversight before automated systems are deployed in sensitive civic domains."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2021)',
    options: [
      'Algorithms are completely devoid of human bias because they are based entirely on objective mathematics.',
      'Deploying AI in civic domains requires proactive regulatory oversight, audits, and inclusive data to prevent automating historical bias.',
      'All automated digital systems should be permanently prohibited across all public administration.',
      'Training algorithms on historical datasets always produces entirely unbiased outcomes.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that machine learning models trained on historical data reflect historical inequities, and therefore civic deployment requires algorithmic audits, representative data, and human oversight to prevent amplifying systemic biases. Hence Option (b) is the primary logical corollary.\nOptions (a) and (d) are contradicted by the text, and (c) is an unjustified extreme reaction.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 8: Technology Governance & Algorithmic Ethics',
      pageNumber: 'Page 180 – 186',
      keyExcerpt: 'Preventing automated bias requires representative training datasets, algorithmic audits, and human-in-the-loop safeguards.'
    },
    eliminationTip: 'Option B accurately encapsulates the author\'s call for algorithmic audits, representative data, and oversight to counter encoded bias.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Artificial Intelligence', 'Algorithmic Bias']
  },
  {
    id: 'pyq-2021-csat-68',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Water Security & Groundwater Depletion',
    subTopic: 'Demand-Side Water Governance vs Supply Engineering',
    question: 'Read the following passage:\n\n"Traditional water policy in semi-arid developing countries has overwhelmingly favored supply-side civil engineering marvels—constructing massive dams, trans-basin water interlinking channels, and deep-bore submersible pumping infrastructure. However, continually expanding water supply without managing demand triggers Jevons\' paradox: increased availability incentivises water-guzzling cash crops and profligate urban consumption, rapidly draining subterranean aquifers beyond their natural recharge rates. Sustainable water security fundamentally requires demand-side management: volumetric water pricing, micro-irrigation subsidies, and community-managed aquifer recharge."\n\nWhich one of the following statements best reflects the critical message of the passage? (UPSC CSAT 2021)',
    options: [
      'Building massive dams and canal interlinking alone will permanently solve water scarcity.',
      'Groundwater aquifers have unlimited recharge capacity regardless of consumption rates.',
      'Sustainable water security demands shifting policy emphasis from supply-side expansion to demand-side conservation.',
      'Micro-irrigation techniques increase water consumption and exacerbate aquifer depletion.'
    ],
    correctAnswer: 2,
    explanation: 'The passage clearly argues that endless supply-side engineering causes Jevons\' paradox and drains aquifers, concluding that water security fundamentally requires demand-side management (pricing, micro-irrigation, community recharge). Hence Option (c) encapsulates the central message.\nOptions (a), (b), and (d) directly contradict the arguments in the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Water Resources and Environmental Sustainability',
      pageNumber: 'Page 72 – 78',
      keyExcerpt: 'Transitioning from supply-side engineering to demand-side water stewardship is essential to prevent aquifer exhaustion.'
    },
    eliminationTip: 'The author concludes: "Sustainable water security fundamentally requires demand-side management". Option C states this directly.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Water Security', 'Groundwater', 'Jevons Paradox']
  },
  {
    id: 'pyq-2021-csat-69',
    subject: 'csat_reasoning',
    topic: 'Order and Ranking',
    subTopic: 'Total Persons in a Row',
    question: 'In a row of boys facing North, Rahul is 14th from the left end and 19th from the right end. How many boys are there in the row? (UPSC CSAT 2021)',
    options: [
      '31',
      '32',
      '33',
      '34'
    ],
    correctAnswer: 1,
    explanation: 'When the position of the same person is given from both the left end and the right end of a row:\nTotal number of persons = (Position from Left) + (Position from Right) - 1\n\nHere:\n- Position of Rahul from Left = 14\n- Position of Rahul from Right = 19\n\nTotal = 14 + 19 - 1 = 33 - 1 = 32 boys.\n\n(We subtract 1 because Rahul has been counted twice—once from the left and once from the right).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 12: Ranking & Order Test',
      pageNumber: 'Page 265 – 272',
      keyExcerpt: 'Total number in a row = (Rank from Left + Rank from Right) - 1.'
    },
    eliminationTip: '14 + 19 - 1 = 32. Direct formula, 5-second calculation.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Ranking', 'Order Test', 'Reasoning']
  },
    {
    id: "pyq-2021-csat-70",
    subject: "csat_quant",
    topic: "Data Sufficiency",
    subTopic: "Parity and Integer Properties",
    question: "Consider the Question and two Statements given below regarding an integer x:\n\nQuestion: Is x an even integer?\nStatement-1: (x + 3) is an odd integer.\nStatement-2: (3x) is an even integer.\n\nWhich one of the following is correct in respect of the Question and the Statements? (UPSC CSAT 2021)",
    options: [
      "Statement-1 alone is sufficient to answer the Question",
      "Statement-2 alone is sufficient to answer the Question",
      "Both Statement-1 and Statement-2 together are sufficient, but neither alone is sufficient",
      "Each Statement alone is sufficient to answer the Question"
    ],
    correctAnswer: 3,
    explanation: "Let us examine each statement independently:\nStatement-1: \"(x + 3) is an odd integer.\"\nWe know that Odd + Even = Odd.\nSince 3 is an odd integer, for (x + 3) to be odd, x MUST be an even integer (e.g., if x = 2, 2 + 3 = 5 [odd]; if x = 3, 3 + 3 = 6 [even]).\nThus, Statement-1 alone definitively proves that x is an even integer. It is sufficient.\n\nStatement-2: \"(3x) is an even integer.\"\nWe know that Odd × Even = Even, and Odd × Odd = Odd.\nSince 3 is an odd integer, the product 3x can only be even if x is an even integer (since x is given to be an integer).\nThus, Statement-2 alone also definitively proves that x is an even integer. It is sufficient.\n\nSince both statements independently answer the question, each statement alone is sufficient.",
    bookReference: {
      bookName: "Quantitative Aptitude by R.S. Aggarwal / Tata McGraw Hill CSAT Manual",
      edition: "Latest Edition",
      chapter: "Data Sufficiency",
      pageNumber: "Chapter 35: Number Property Tests",
      keyExcerpt: "When either statement independently yields a unique affirmative or negative answer, each is sufficient."
    },
    eliminationTip: "Both (x + odd = odd => x is even) and (odd × x = even => x is even) independently prove x is even. Hence each statement alone is sufficient.",
    difficulty: "Moderate",
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: "CSAT",
    frequency: 9,
    tags: [
      "UPSC 2021",
      "CSAT",
      "Data Sufficiency",
      "Parity",
      "Number Properties"
    ]
  },
  {
    id: 'pyq-2021-csat-71',
    subject: 'csat_quant',
    topic: 'Pipes and Cisterns',
    subTopic: 'Two Filling Pipes and One Emptying Leak',
    question: 'Two pipes A and B can fill a tank in 12 hours and 15 hours respectively. A waste pipe C can empty the full tank in 20 hours. If all three pipes are opened together in an empty tank, how long will it take to fill the tank completely? (UPSC CSAT 2021)',
    options: [
      '8 hours',
      '10 hours',
      '12 hours',
      '15 hours'
    ],
    correctAnswer: 1,
    explanation: 'Let the capacity of the tank be LCM(12, 15, 20) = 60 units.\n\nFlow rates (efficiencies):\n- Pipe A (filling) = +60 / 12 = +5 units/hour\n- Pipe B (filling) = +60 / 15 = +4 units/hour\n- Pipe C (emptying) = -60 / 20 = -3 units/hour\n\nNet rate when all three pipes are open simultaneously:\nNet Rate = (+5) + (+4) + (-3) = 9 - 3 = +6 units/hour.\n\nTime taken to fill the 60 units tank:\nTime = 60 / 6 = 10 hours.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 16: Pipes and Cisterns',
      pageNumber: 'Page 378 – 384',
      keyExcerpt: 'Net filling rate = (Rate A + Rate B) - Rate C. Tank volume / net rate = time to fill.'
    },
    eliminationTip: 'Tank capacity = 60. Net rate = 5 + 4 - 3 = 6 units/hour. Time = 60 / 6 = 10 hours.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Pipes and Cisterns', 'Work Rate', 'Quant']
  },
    {
    id: "pyq-2021-csat-72",
    subject: "csat_quant",
    topic: "Quantitative Aptitude",
    subTopic: "Repeated Dilution and Liquid Replacement",
    question: "A container contains 60 litres of pure alcohol. From this container, 12 litres of alcohol is extracted and replaced with an equal quantity of water. This operation is repeated one more time (total 2 operations). How many litres of pure alcohol remain in the container? (UPSC CSAT 2021)",
    options: [
      "36.4 litres",
      "38.4 litres",
      "40.0 litres",
      "42.2 litres"
    ],
    correctAnswer: 1,
    explanation: "Using the standard formula for repeated replacement of liquids:\nQuantity of pure liquid remaining = Initial Quantity × [1 - (x / C)]^n\nwhere:\n- Initial Quantity C = 60 litres\n- Quantity removed each time x = 12 litres\n- Number of operations n = 2\n\nRemaining alcohol = 60 × [1 - (12 / 60)]²\n= 60 × [1 - 1/5]²\n= 60 × (4/5)²\n= 60 × (16 / 25)\n= (60 / 25) × 16 = 2.4 × 16 = 38.4 litres.\nTherefore, 38.4 litres of pure alcohol remain in the container.",
    bookReference: {
      bookName: "Quantitative Aptitude by R.S. Aggarwal",
      edition: "Revised Edition",
      chapter: "Alligation or Mixture",
      pageNumber: "Chapter 20: Successive Liquid Replacement Formula",
      keyExcerpt: "Remaining pure quantity = C(1 - x/C)^n."
    },
    eliminationTip: "Formula shortcut: 60 × (4/5)² = 60 × 16/25 = 2.4 × 16 = 38.4 litres.",
    difficulty: "Easy",
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: "CSAT",
    frequency: 8,
    tags: [
      "UPSC 2021",
      "CSAT",
      "Mixtures",
      "Replacement Formula",
      "Dilution"
    ]
  },
  {
    id: 'pyq-2021-csat-73',
    subject: 'csat_reasoning',
    topic: 'Cubes and Dice',
    subTopic: 'Painted Cube Cut into Smaller Cubes',
    question: 'A solid cube of side 4 cm is painted green on all six faces. It is then cut into smaller cubes of side 1 cm each. How many small cubes will have NO face painted? (UPSC CSAT 2021)',
    options: [
      '4',
      '8',
      '12',
      '16'
    ],
    correctAnswer: 1,
    explanation: 'When a cube of side n is painted on all sides and cut into unit cubes (here n = 4 cm / 1 cm = 4):\n\nThe distribution of small cubes is:\n1. 3 faces painted (Corner cubes) = 8 (always 8)\n2. 2 faces painted (Edge cubes) = 12 × (n - 2) = 12 × (4 - 2) = 24\n3. 1 face painted (Face-centre cubes) = 6 × (n - 2)² = 6 × (2)² = 24\n4. 0 faces painted (Inner/Core cubes) = (n - 2)³\n\nFor n = 4:\nNumber of cubes with zero painted faces = (4 - 2)³ = 2³ = 8 cubes.\n\nTotal verification: 8 + 24 + 24 + 8 = 64 cubes = 4³. Perfect!',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 27: Cube and Dice',
      pageNumber: 'Page 550 – 558',
      keyExcerpt: 'Number of unpainted cubes in an n × n × n cube = (n - 2)³.'
    },
    eliminationTip: 'Zero painted faces = (n - 2)³. For n = 4, (4 - 2)³ = 2³ = 8.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Cubes and Dice', 'Unpainted Faces', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-74',
    subject: 'csat_reasoning',
    topic: 'Venn Diagrams: Set Overlaps',
    subTopic: 'Students in Subject Overlaps',
    question: 'In a group of 100 students, 60 study Mathematics, 45 study Physics, and 20 study both Mathematics and Physics. How many students study NEITHER Mathematics NOR Physics? (UPSC CSAT 2021)',
    options: [
      '10',
      '15',
      '20',
      '25'
    ],
    correctAnswer: 1,
    explanation: 'Using the principle of inclusion-exclusion for two sets M (Mathematics) and P (Physics):\n\nTotal students n(U) = 100\nn(M) = 60\nn(P) = 45\nn(M ∩ P) = 20\n\nNumber of students studying at least one subject n(M ∪ P):\nn(M ∪ P) = n(M) + n(P) - n(M ∩ P)\nn(M ∪ P) = 60 + 45 - 20 = 105 - 20 = 85 students.\n\nNumber of students studying neither subject:\n= Total students - n(M ∪ P)\n= 100 - 85 = 15 students.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 15: Venn Diagrams',
      pageNumber: 'Page 340 – 346',
      keyExcerpt: 'n(A ∪ B) = n(A) + n(B) - n(A ∩ B). Neither = Total - n(A ∪ B).'
    },
    eliminationTip: 'Union = 60 + 45 - 20 = 85. Neither = 100 - 85 = 15.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Venn Diagrams', 'Inclusion Exclusion', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-75',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Ocean Acidification and Marine Biodiversity',
    subTopic: 'Carbonic Acid and Aragonite Saturation Horizons',
    question: 'Read the following passage:\n\n"As the world\'s oceans absorb approximately twenty-five percent of anthropogenic atmospheric carbon dioxide, oceanic chemistry undergoes profound disruption. Dissolved carbon dioxide reacts with water to generate carbonic acid, driving ocean acidification and stripping marine waters of carbonate ions essential for calcifying organisms. Corals, pteropods, and shellfish experience dissolution of their calcium carbonate shells and skeletons. Because pteropods form the base of polar marine pelagic trophic webs, their decline threatens entire global marine food chains and coastal fisheries dependent on coral reef nurseries."\n\nWhich of the following is the most critical inference from the passage? (UPSC CSAT 2021)',
    options: [
      'Ocean acidification is exclusively confined to tropical coral reefs and spares polar waters.',
      'Atmospheric CO2 emissions jeopardize marine biodiversity and food security by eroding calcifying organisms.',
      'Calcifying marine organisms benefit from increased concentrations of carbonic acid.',
      'Oceanic absorption of carbon dioxide has zero impact on marine ecosystems.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explains how anthropogenic CO2 uptake produces carbonic acid, which reduces carbonate ions needed by calcifying organisms (corals, pteropods, shellfish), thereby threatening marine food webs and fisheries. Hence Option (b) is the direct, critical inference.\nOptions (a), (c), and (d) are factually contradicted by the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Climate Change and Marine Biomes',
      pageNumber: 'Page 112 – 118',
      keyExcerpt: 'Ocean acidification lowers carbonate ion saturation, eroding calcifier shells and disrupting trophic chains.'
    },
    eliminationTip: 'Option B accurately highlights the domino effect: CO2 -> ocean acidification -> loss of calcifying organisms -> threat to food chains.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Ocean Acidification', 'Marine Ecology']
  },
  {
    id: 'pyq-2021-csat-76',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Financial Inclusion and Digital Public Infrastructure',
    subTopic: 'Direct Benefit Transfer (DBT) and Interoperable Payments',
    question: 'Read the following passage:\n\n"The proliferation of open, interoperable Digital Public Infrastructure (DPI)—combining universal biometric digital identity, interoperable real-time payment protocols, and paperless consent-based data sharing—has drastically democratized formal financial services. By slashing customer acquisition and transaction costs to near zero, DPI allows commercial micro-lenders and public agencies to disburse targeted Direct Benefit Transfers (DBT) into no-frills bank accounts, substantially plugging leakage and eliminating middlemen. However, safeguarding user financial privacy, ensuring cybersecurity against identity theft, and providing offline grievance redressal mechanisms remain imperative to sustain public trust."\n\nBased on the passage, consider the following statements:\n1. Digital Public Infrastructure has lowered customer acquisition costs and reduced leakage in public transfer payments.\n2. Sustained public trust in digital financial infrastructure requires addressing cybersecurity and data privacy concerns.\n\nWhich of the statements given above is/are correct? (UPSC CSAT 2021)',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 2,
    explanation: 'Both statements are directly supported by the passage:\n1. The passage explicitly mentions that DPI slashes customer acquisition costs to near zero and plugs leakage in DBT programs.\n2. The passage explicitly highlights that safeguarding user privacy and cybersecurity are imperative to maintain public trust.\nTherefore, both statements 1 and 2 are correct.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 9: Digital Economy and Financial Governance',
      pageNumber: 'Page 205 – 212',
      keyExcerpt: 'DPI reduces leakages and intermediation costs, while requiring robust cybersecurity and data protection frameworks.'
    },
    eliminationTip: 'Both statements correspond directly to the text: Statement 1 matches sentence 2, Statement 2 matches the concluding sentence.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'DPI', 'Financial Inclusion', 'DBT']
  },
  {
    id: 'pyq-2021-csat-77',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility Rules',
    subTopic: 'Divisibility by 99 (9 and 11)',
    question: 'If a 6-digit number 479x3y is divisible by 90, then what is the value of (x + y)? (UPSC CSAT 2021)',
    options: [
      '4',
      '5',
      '6',
      '9'
    ],
    correctAnswer: 0,
    explanation: 'A number is divisible by 90 if and only if it is divisible by both 10 and 9:\n\n1. Divisibility by 10:\n   The units digit must be 0.\n   Therefore, y = 0.\n   The number becomes 479x30.\n\n2. Divisibility by 9:\n   The sum of all digits must be a multiple of 9.\n   Sum of digits = 4 + 7 + 9 + x + 3 + 0 = 23 + x.\n\nSince x is a single decimal digit (0 ≤ x ≤ 9):\n- The nearest multiple of 9 greater than or equal to 23 is 27.\n- 23 + x = 27 => x = 4.\n\nNow, calculate (x + y):\nx + y = 4 + 0 = 4.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System & Divisibility Tests',
      pageNumber: 'Page 18 – 23',
      keyExcerpt: 'Divisibility by 90 requires units digit 0 and sum of digits divisible by 9.'
    },
    eliminationTip: 'Since divisible by 90, last digit y = 0. Sum of digits: 4+7+9+x+3+0 = 23+x = 27 => x = 4. Hence x + y = 4.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Divisibility Rules', 'Number System', 'Quant']
  },
  {
    id: 'pyq-2021-csat-78',
    subject: 'csat_reasoning',
    topic: 'Critical Reasoning: Statement and Assumptions',
    subTopic: 'Validity of Implicit Assumptions',
    question: 'Consider the following Statement and Assumptions:\n\nStatement:\n"The State Government announced a special financial assistance package of ₹10,000 per acre to all small and marginal farmers whose standing crops were devastated by unseasonal hail storms."\n\nAssumptions:\n1. The financial assistance may help the affected farmers to cope with immediate distress and prepare for the next cropping season.\n2. The State Government has sufficient fiscal reserves to disburse this relief package.\n\nWhich of the assumptions is/are implicit in the statement? (UPSC CSAT 2021)',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 2,
    explanation: 'Let us examine both assumptions:\n1. Assumption 1 is implicit because any relief package is designed with the expectation that it will mitigate immediate farmer distress and enable recovery. If the government did not believe the financial package would help, it would not announce it.\n2. Assumption 2 is implicit because when a government publicly announces a budgetary disbursement package, it assumes it has or can mobilize the necessary fiscal funds to execute it.\nTherefore, both assumptions 1 and 2 are implicit.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 18: Statement and Assumptions',
      pageNumber: 'Page 390 – 398',
      keyExcerpt: 'An assumption is implicit if the action would be meaningless or unfeasible without it.'
    },
    eliminationTip: 'When an authority announces financial relief, it assumes the relief will assist the victims (1) and that the funds can be provided (2). Both are implicit.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Critical Reasoning', 'Statement & Assumptions', 'Logic']
  },
  {
    id: 'pyq-2021-csat-79',
    subject: 'csat_quant',
    topic: 'Boats and Streams',
    subTopic: 'Downstream and Upstream Speed Ratio',
    question: 'A man can row 6 km/h in still water. If the speed of the river stream is 2 km/h, it takes him 3 hours to row to a place and row back. How far is the place? (UPSC CSAT 2021)',
    options: [
      '6 km',
      '8 km',
      '9 km',
      '12 km'
    ],
    correctAnswer: 1,
    explanation: 'Given:\n- Speed of the boat in still water (u) = 6 km/h\n- Speed of the stream (v) = 2 km/h\n- Total time taken for round trip = 3 hours\n\nSpeeds:\n- Downstream speed (S_down) = u + v = 6 + 2 = 8 km/h\n- Upstream speed (S_up) = u - v = 6 - 2 = 4 km/h\n\nLet the distance to the place be d km.\nTotal Time = Time downstream + Time upstream\n3 = (d / 8) + (d / 4)\n3 = (d + 2d) / 8\n3 = 3d / 8\n1 = d / 8\nd = 8 km.\n\nVerification:\n- Downstream time = 8 km / 8 km/h = 1 hour\n- Upstream time = 8 km / 4 km/h = 2 hours\n- Total time = 1 + 2 = 3 hours. Exactly matches!',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 19: Boats and Streams',
      pageNumber: 'Page 430 – 436',
      keyExcerpt: 'Downstream speed = u + v; Upstream speed = u - v. Round trip time = d/(u+v) + d/(u-v).'
    },
    eliminationTip: 'Downstream = 8 km/h, Upstream = 4 km/h. d/8 + d/4 = 3 => 3d/8 = 3 => d = 8 km.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Boats and Streams', 'Relative Speed', 'Quant']
  },
  {
    id: 'pyq-2021-csat-80',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Human Capital & Demographic Dividend',
    subTopic: 'Foundational Learning and Skill Formation',
    question: 'Read the following passage:\n\n"A favorable demographic dividend—characterized by a bulging youth demographic and declining dependency ratios—is neither an automatic demographic windfall nor a perpetual economic guarantee. Without quality public investments in early childhood nutrition, universal foundational literacy, cognitive skill development, and vocational apprenticeships, a burgeoning youth cohort risks transitioning into pervasive underemployment, socio-economic alienation, and demographic liability. Demographic windows of opportunity are fleeting; reaping dividends requires transforming human potential into productive, high-value human capital before the demographic transition inevitably pushes society into an aging demographic plateau."\n\nWhich of the following is the most crucial message conveyed by the passage? (UPSC CSAT 2021)',
    options: [
      'Demographic dividend automatically creates economic prosperity without any policy intervention.',
      'Reaping the demographic dividend requires proactive investment in foundational learning, skills, and human capital before the window closes.',
      'Aging societies have higher economic productivity than youthful nations.',
      'Vocational training should replace all formal primary school education.'
    ],
    correctAnswer: 1,
    explanation: 'The author emphatically warns that a demographic dividend is not an automatic guarantee and has a fleeting window of opportunity. To convert this youth population into an asset rather than a liability, societies must aggressively invest in nutrition, foundational learning, and vocational skills. Hence Option (b) captures the most crucial message.\nOptions (a), (c), and (d) are distorted, contradictory, or extreme.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Demography, Human Capital and Economic Growth',
      pageNumber: 'Page 230 – 238',
      keyExcerpt: 'The demographic dividend is time-bound; without foundational human capital investments, it risks turning into a demographic liability.'
    },
    eliminationTip: 'The passage argues that demographic dividend is not automatic and requires immediate investments in education and skills before the window closes. Option B captures this perfectly.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Demographic Dividend', 'Human Capital']
  }
];
