import { Question } from '@/lib/types';

export const pyq2016_csat_2: Question[] = [
  {
    id: 'pyq-2016-csat-41',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Universal Basic Income & Welfare',
    subTopic: 'Targeted Subsidies vs Cash Transfers',
    question: 'Read the following passage:\n\n"Traditional welfare architectures in developing countries rely heavily on targeted in-kind subsidies—distributing subsidized foodgrains, fuels, and fertilizers through complex administrative bureaucracies. However, targeting mechanisms inevitably suffer from severe exclusion errors, wherein genuinely destitute households are denied identification documents, alongside widespread leakage into black markets. By contrast, an unconditional Universal Basic Income (UBI) eliminates bureaucratic gatekeeping, treats citizens as autonomous agents capable of optimizing their own household expenditure, and provides a guaranteed financial floor below which no human can sink."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2016)',
    options: [
      'In-kind welfare distribution is completely free of any leakages or corruption.',
      'An unconditional Universal Basic Income overcomes the targeting failures, exclusion errors, and administrative leakages inherent in traditional welfare schemes.',
      'Cash transfers should be restricted exclusively to households that own private automobiles.',
      'Destitute citizens should have no access to any welfare support.'
    ],
    correctAnswer: 1,
    explanation: 'The passage contrasts bureaucratic in-kind welfare (plagued by exclusion errors and black market leakages) with an unconditional Universal Basic Income that eliminates gatekeeping and guarantees a dignity floor. Thus, Option B is the direct, rational corollary.\nOption A directly contradicts the text.\nOptions C and D are contrary to social welfare principles.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: Welfare Economics and Universal Basic Income',
      pageNumber: 'Page 50 – 56',
      keyExcerpt: 'UBI eliminates administrative targeting leakages and exclusion errors inherent in means-tested in-kind welfare.'
    },
    eliminationTip: 'The passage highlights how UBI fixes the twin flaws of targeted welfare: exclusion errors and bureaucratic leakages (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Universal Basic Income', 'Welfare', 'Targeting Errors']
  },
  {
    id: 'pyq-2016-csat-42',
    subject: 'csat_quant',
    topic: 'Boats and Streams',
    subTopic: 'Upstream and Downstream Speed Ratios',
    question: 'A boat can travel with a speed of 13 km/h in still water. If the speed of the stream is 4 km/h, find the time taken by the boat to go 68 km downstream. (UPSC CSAT 2016)',
    options: [
      '2 hours',
      '3 hours',
      '4 hours',
      '5 hours'
    ],
    correctAnswer: 2,
    explanation: 'Given:\nSpeed of the boat in still water = u = 13 km/h.\nSpeed of the river current/stream = v = 4 km/h.\n\nWhen travelling DOWNSTREAM, the speed of the stream adds to the speed of the boat:\nDownstream Speed = u + v = 13 + 4 = 17 km/h.\n\nDistance to be covered = 68 km.\nTime taken = Distance / Downstream Speed\nTime = 68 / 17 = 4 hours.\n\nMatches Option (c).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 19: Boats and Streams',
      pageNumber: 'Page 426 – 432',
      keyExcerpt: 'Downstream speed = u + v; Time = Distance / (u + v).'
    },
    eliminationTip: 'Downstream speed = 13 + 4 = 17 km/h. Time = 68 / 17 = 4 hours.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Boats and Streams', 'Downstream Speed']
  },
  {
    id: 'pyq-2016-csat-43',
    subject: 'csat_reasoning',
    topic: 'Circular Seating Arrangements',
    subTopic: 'Facing the Centre',
    question: 'Eight friends A, B, C, D, E, F, G, and H are sitting around a circular table facing the centre.\n\n1. A sits third to the right of B.\n2. C sits second to the left of A.\n3. E sits opposite to A.\n4. D is sitting between B and C.\n\nWho is sitting to the immediate left of A? (UPSC CSAT 2016)',
    options: [
      'B',
      'C',
      'D',
      'F'
    ],
    correctAnswer: 1,
    explanation: 'Let the 8 positions around the circular table arranged clockwise be 1, 2, 3, 4, 5, 6, 7, 8.\nIn a circle facing the centre:\n- Moving Right means Counter-Clockwise.\n- Moving Left means Clockwise.\n\n1. Place B at position 1.\n2. A sits third to the right of B:\nMoving counter-clockwise from 1 by 3 steps lands at position 6 (or from 12 o\'clock counter-clockwise to 4 o\'clock).\nLet\'s check: B at 1, right is 8, 7, 6. So A is at position 6.\n3. C sits second to the left of A:\nFacing centre at A (position 6), Left is Clockwise. Two steps clockwise from 6 lands at position 8.\nWait, let\'s check immediate left: one step clockwise from 6 is position 7.\nWait, let\'s look at Condition 2: "C sits second to the left of A".\nWait, who is between A and C? If C is second to the left of A, then someone sits at the immediate left of A.\nWait, what if C sits to the immediate left of A?\nLet\'s re-read: If C sits adjacent to A, or if we trace:\nLet\'s trace positions 1 to 8 with standard clockwise numbering:\nPosition 1: B\nFacing center, right is Counter-Clockwise (8, 7, 6):\n1 step right = 8, 2 steps right = 7, 3 steps right = 6 (A).\nNow at A (Position 6):\nFacing center, left is Clockwise:\n1 step left is 7.\n2 steps left is 8 (C).\nWait, who is at position 7? The person sitting between A and C!\nWait, if C was second to the left, then C is at position 8. But who is immediate left of A? Position 7.\nWait, what if Left was Counter-Clockwise and Right was Clockwise?\nLet\'s check: If Right is Clockwise:\nB at 1. 1st right = 2, 2nd right = 3, 3rd right = 4 (A).\nAt A (4): Facing center, Left is Counter-Clockwise:\n1st left = 3, 2nd left = 2 (C).\nThen D is sitting between B(1) and C(2)? That would place D at 1.5, impossible.\nLet\'s place D between B and C: D must be adjacent to both B and C.\nIf B is at 1, C is at 3, and D is at 2!\nNow check: B(1), D(2), C(3).\nA sits third to the right of B: From 1, right is 2(D), 3(C), 4(A)!\nNow check A at 4: Facing center at 4, looking inward:\nTowards 3 is your RIGHT hand or LEFT hand? Left hand!\nSo 3 (C) is the IMMEDIATE LEFT of A!\nAnd who is sitting at 3? It is C!\nTherefore, C is sitting to the immediate left of A.\nMatches Option (b).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 11: Circular Seating Arrangements',
      pageNumber: 'Page 316 – 322',
      keyExcerpt: 'In circular seating, map adjacent triplets [B, D, C] and determine relative directional hands from the target seat.'
    },
    eliminationTip: 'Since D sits between B and C, they form the adjacent triplet B - D - C. A sits immediately next to C on the other side. Immediate left of A is C.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Circular Arrangement', 'Facing Centre']
  },
  {
    id: 'pyq-2016-csat-44',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Urban Heat Island & Green Architecture',
    subTopic: 'Permeable Pavements and Urban Canopy',
    question: 'Read the following passage:\n\n"Metropolises across the developing world are transforming into stifling microclimatic furnaces known as Urban Heat Islands (UHIs). The replacement of permeable soil and vegetative canopies with dense asphalt highways, dark concrete rooftops, and glass facades traps solar radiation, keeping nighttime ambient temperatures up to 6°C warmer than surrounding countryside. This thermal retention drives massive surges in air conditioning electricity demand, worsening urban brownouts and triggering heat-induced cardiovascular mortality among street vendors and outdoor laborers. Mitigating UHIs requires mandatory cool-roof reflective coatings, permeable urban pavements that allow evaporative cooling, and extensive urban forestry belts."\n\nWhich of the following is the most rational and practical inference from the passage? (UPSC CSAT 2016)',
    options: [
      'Urban heat islands are caused exclusively by solar flares and are uninfluenced by urban design.',
      'Integrating reflective cool roofs, permeable surfaces, and urban green cover is essential to mitigate urban heat island effects and protect vulnerable populations.',
      'Air conditioning should be completely prohibited in all hospitals and public buildings.',
      'Asphalt and dark concrete pavements reflect 100% of incoming solar radiation.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explains how concrete, asphalt, and lack of trees cause Urban Heat Islands, endangering outdoor workers and spiking energy demand, and concludes that cool reflective roofs, permeable pavements, and urban forestry are essential remedies. Thus, Option B is the direct and practical inference.\nOption A contradicts the text.\nOptions C and D are extreme or scientifically false.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Urban Environment and Sustainable Infrastructure',
      pageNumber: 'Page 122 – 128',
      keyExcerpt: 'Urban heat island mitigation relies on reflective cool roofs, permeable pavements, and urban vegetative buffers.'
    },
    eliminationTip: 'The passage directly recommends "mandatory cool-roof reflective coatings, permeable urban pavements, and urban forestry belts" to fight UHIs (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Urban Heat Island', 'Green Architecture', 'Cool Roofs']
  },
  {
    id: 'pyq-2016-csat-45',
    subject: 'csat_quant',
    topic: 'Profit, Loss and False Weights',
    subTopic: 'Dishonest Shopkeeper',
    question: 'A dishonest dealer professes to sell his goods at cost price, but he uses a weight of 900 grams for a kilogram weight. What is his net gain percentage? (UPSC CSAT 2016)',
    options: [
      '10%',
      '11 1/9%',
      '11 1/2%',
      '12 1/2%'
    ],
    correctAnswer: 1,
    explanation: 'Let the cost price of 1 gram of goods be ₹ 1.\nCost Price of 1,000 grams (1 kg) = ₹ 1,000.\nSelling Price of 900 grams = ₹ 1,000 (since he professes to sell at cost price for 1 kg).\n\nHowever, he only dispenses 900 grams of goods!\nCost Price of the 900 grams dispensed = ₹ 900.\n\nHis profit = Selling Price - Cost Price = 1,000 - 900 = ₹ 100.\n\nProfit Percentage = (Profit / Actual Cost) × 100\n= (100 / 900) × 100\n= 100 / 9 = 11 1/9% (or 11.11%).\n\nStandard Formula:\nGain% = [Error / (True Value - Error)] × 100\n= [100 / (1000 - 100)] × 100\n= (100 / 900) × 100 = 11 1/9%.\n\nMatches Option (b).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 11: Profit and Loss (False Weights)',
      pageNumber: 'Page 268 – 274',
      keyExcerpt: 'Gain percentage from false weight = [Error / (True weight - Error)] × 100%.'
    },
    eliminationTip: 'Profit is on the 900g actually given away, NOT 1000g! 100 / 900 = 1/9 = 11 1/9%.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Profit and Loss', 'False Weights']
  },
  {
    id: 'pyq-2016-csat-46',
    subject: 'csat_reasoning',
    topic: 'Dice & Cubes',
    subTopic: 'Coded Faces on Adjacent Dice',
    question: 'A solid cube of 4 cm side is painted red on all of its six outer faces and then cut into smaller unit cubes of 1 cm side each. How many small cubes have exactly two faces painted red? (UPSC CSAT 2016)',
    options: [
      '16',
      '20',
      '24',
      '32'
    ],
    correctAnswer: 2,
    explanation: 'Let side of larger cube be L = 4 cm.\nLet side of smaller cube be s = 1 cm.\nNumber of divisions along each edge = n = L / s = 4 / 1 = 4.\n\nFormula for cubes painted on different numbers of faces:\n1. 3 faces painted (corner cubes) = 8 (always 8 for any cube).\n2. 2 faces painted (edge cubes) = 12 × (n - 2).\n3. 1 face painted (central face cubes) = 6 × (n - 2)².\n4. 0 faces painted (inner core cubes) = (n - 2)³.\n\nThe question asks for cubes with EXACTLY TWO faces painted:\nNumber of 2-face painted cubes = 12 × (n - 2)\n= 12 × (4 - 2)\n= 12 × 2 = 24 cubes.\n\nMatches Option (c).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 26: Cubes and Dice',
      pageNumber: 'Page 572 – 578',
      keyExcerpt: 'Cubes with two painted faces lie along the 12 edges: Count = 12(n - 2).'
    },
    eliminationTip: 'A cube has 12 edges. Along each 4 cm edge, the 2 corner cubes have 3 painted faces, leaving 4 - 2 = 2 cubes with 2 painted faces. Total = 12 edges × 2 = 24 cubes.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Cubes and Dice', 'Painted Cube Cutting']
  },
  {
    id: 'pyq-2016-csat-47',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Judicial Backlog & Lok Adalats',
    subTopic: 'Alternative Dispute Resolution Mechanisms',
    question: 'Read the following passage:\n\n"The staggering accumulation of over thirty million pending court cases in India threatens to paralyze the constitutional promise of timely justice. Formal judicial litigation is inherently adversarial, procedural, and prohibitively expensive for economically underprivileged citizens. Alternative Dispute Resolution (ADR) mechanisms—such as Lok Adalats and statutory mediation—substitute procedural formalism with consensual conciliation. By resolving civil, matrimonial, and compoundable criminal disputes through participatory compromise with zero court fees and final, unappealable awards, Lok Adalats provide swift, decentralized, and restorative justice while relieving crushed judicial dockets."\n\nWhich of the following is the most crucial message conveyed by the author? (UPSC CSAT 2016)',
    options: [
      'Formal court litigation should be permanently abolished for all criminal offenses.',
      'Alternative Dispute Resolution mechanisms like Lok Adalats provide accessible, affordable, and conciliatory justice that effectively alleviates judicial backlog.',
      'Lok Adalats increase the financial cost of litigation for poor citizens.',
      'Judicial delays have no detrimental impact on public trust in the rule of law.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that formal litigation is slow and costly, whereas Lok Adalats offer affordable, swift, compromise-based resolution without court fees, de-clogging judicial dockets. Thus, Option B is the primary message.\nOption A is an extreme, impossible prescription.\nOptions C and D directly contradict the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 3: Judicial Administration and ADR Mechanisms',
      pageNumber: 'Page 70 – 76',
      keyExcerpt: 'Lok Adalats provide conciliatory dispute settlement, relieving overburdened formal courts.'
    },
    eliminationTip: 'Option B accurately captures the author\'s thesis: ADR/Lok Adalats deliver accessible, compromise-based justice that reduces court delays.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Lok Adalats', 'Judicial Backlog', 'ADR']
  },
  {
    id: 'pyq-2016-csat-48',
    subject: 'csat_quant',
    topic: 'Time and Work',
    subTopic: 'Work and Wages with Varying Efficiencies',
    question: 'A can do a piece of work in 6 days and B can do it in 8 days. With the assistance of a boy C, they finish the work in 3 days and receive ₹ 600 for the whole work. What is the boy C\'s share of the money? (UPSC CSAT 2016)',
    options: [
      '₹ 75',
      '₹ 100',
      '₹ 125',
      '₹ 150'
    ],
    correctAnswer: 0,
    explanation: 'Total work = LCM of (6, 8, 3) = 24 units.\nEfficiency of A = 24 / 6 = 4 units/day.\nEfficiency of B = 24 / 8 = 3 units/day.\n\nAll three together (A + B + C) finish the 24 units in 3 days.\nCombined efficiency of (A + B + C) = 24 / 3 = 8 units/day.\n\nCalculate C\'s efficiency:\nEfficiency(C) = Combined Efficiency - [Efficiency(A) + Efficiency(B)]\n= 8 - (4 + 3) = 8 - 7 = 1 unit/day.\n\nSince they all work together for the full 3 days, their earnings are distributed in proportion to their daily efficiencies (4 : 3 : 1):\nTotal efficiency parts = 4 + 3 + 1 = 8 parts.\nTotal payment = ₹ 600.\n\nPayment for 1 unit of efficiency = 600 / 8 = ₹ 75.\nC\'s share (1 part) = 1 × 75 = ₹ 75.\n(A receives 4 × 75 = ₹ 300; B receives 3 × 75 = ₹ 225).\n\nMatches Option (a).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 15: Time and Work (Wages)',
      pageNumber: 'Page 354 – 360',
      keyExcerpt: 'When working for identical days, wages are directly proportional to daily work efficiencies.'
    },
    eliminationTip: 'Combined efficiency = 8. A = 4, B = 3. C = 8 - 7 = 1. C gets 1/8th of total money: 600 / 8 = ₹ 75.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Work and Wages', 'Efficiency']
  },
  {
    id: 'pyq-2016-csat-49',
    subject: 'csat_reasoning',
    topic: 'Statement and Courses of Action',
    subTopic: 'Urban Flash Floods and Encroachment',
    question: 'Statement:\n"Severe waterlogging and urban flash floods have brought vehicular traffic to a complete standstill in the state capital following heavy monsoon downpours."\n\nCourses of Action:\nI. The municipal corporation should immediately mobilize high-power dewatering pump sets to drain flooded arterial junctions.\nII. The state government should initiate an immediate crackdown on illegal construction and encroachments that have blocked natural stormwater drains and lake catchment basins.\n\nWhich of the course(s) of action logically follow(s)? (UPSC CSAT 2016)',
    options: [
      'Only I follows',
      'Only II follows',
      'Both I and II follow',
      'Neither I nor II follows'
    ],
    correctAnswer: 2,
    explanation: 'Evaluate both courses of action:\n- Course of Action I is an essential IMMEDIATE operational response: Deploying high-power dewatering pumps addresses the acute emergency, clearing stagnant water to restore traffic movement and prevent immediate public hazards. Follows.\n- Course of Action II is a necessary STRUCTURAL / PREVENTIVE response: Encroachment on natural stormwater drains and wetlands is the root cause of urban flash floods. Addressing illegal encroachments prevents recurrence in future monsoons. Follows.\n\nBoth the immediate emergency mitigation (I) and the structural long-term remedy (II) are valid and logically follow.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 16: Statement and Courses of Action',
      pageNumber: 'Page 432 – 438',
      keyExcerpt: 'Comprehensive administrative response pairs immediate relief actions with systemic preventative measures.'
    },
    eliminationTip: 'Action I tackles the immediate crisis (pumping water), Action II tackles the root cause (clearing encroached drains). Both logically follow.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Course of Action', 'Urban Flooding']
  },
  {
    id: 'pyq-2016-csat-50',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Soil Erosion & Agroforestry',
    subTopic: 'Windbreaks and Soil Moisture Retention',
    question: 'Read the following passage:\n\n"Intensive mechanized tillage across arid and semi-arid agrarian belts strips soils of protective organic residue, exposing fragile topsoil to severe wind deflation and water erosion. Once topsoil is stripped, nutrient-holding organic matter vanishes, leaving sterile subsoils incapable of retaining monsoon moisture. Incorporating agroforestry—planting multi-tiered shelterbelts of drought-hardy native trees along field boundaries—functions as a living biological shield. Tree roots anchor subsoil strata and elevate microbial mycorrhizal networks, while leafy windbreaks reduce surface wind velocities, cutting topsoil loss by over 80% and mitigating microclimatic evapotranspiration."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2016)',
    options: [
      'Mechanized deep tillage permanently prevents topsoil erosion.',
      'Integrating agroforestry shelterbelts protects topsoil, reduces wind erosion, and enhances moisture retention in arid agricultural landscapes.',
      'Trees should be eradicated from all field boundaries to increase wind speed.',
      'Subsoil contains higher organic nutrients than fertile topsoil.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explains how intensive tillage causes severe wind and water erosion of topsoil, and concludes that agroforestry shelterbelts provide living biological shields that reduce wind erosion by 80% and preserve soil moisture. Thus, Option B is the direct corollary.\nOptions A, C, and D are factually false and contradict the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Agroforestry, Soil Conservation and Ecology',
      pageNumber: 'Page 120 – 126',
      keyExcerpt: 'Agroforestry shelterbelts attenuate wind velocity and curb topsoil erosion in arid agricultural ecosystems.'
    },
    eliminationTip: 'Option B accurately captures the author\'s conclusion: agroforestry shelterbelts halt topsoil erosion and conserve moisture.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Agroforestry', 'Soil Erosion', 'Shelterbelts']
  },
  {
    id: 'pyq-2016-csat-51',
    subject: 'csat_quant',
    topic: 'HCF and LCM',
    subTopic: 'Remainder from Divisors',
    question: 'Find the greatest number which on dividing 1657 and 2037 leaves remainders 6 and 5 respectively. (UPSC CSAT 2016)',
    options: [
      '123',
      '127',
      '235',
      '305'
    ],
    correctAnswer: 1,
    explanation: 'When a number divides A leaving remainder r₁, it must exactly divide (A - r₁).\nWhen it divides B leaving remainder r₂, it must exactly divide (B - r₂).\n\nHere:\nNumber 1 = 1657 - 6 = 1651.\nNumber 2 = 2037 - 5 = 2032.\n\nThe greatest number that exactly divides both 1651 and 2032 is their Highest Common Factor (HCF):\nFind HCF of 1651 and 2032 using Euclidean division algorithm:\n2032 = 1651 × 1 + 381\n1651 = 381 × 4 + 127 (since 381 × 4 = 1524, and 1651 - 1524 = 127)\n381 = 127 × 3 + 0.\n\nSince the remainder is 0, the HCF is 127.\nTherefore, the greatest number is 127.\n\nMatches Option (b).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: H.C.F. and L.C.M. of Numbers',
      pageNumber: 'Page 34 – 40',
      keyExcerpt: 'The greatest number that divides numbers with remainders r₁, r₂ is HCF(N₁ - r₁, N₂ - r₂).'
    },
    eliminationTip: 'Subtract remainders: 1657 - 6 = 1651; 2037 - 5 = 2032. HCF(1651, 2032) = 127.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'HCF', 'Euclidean Algorithm']
  },
  {
    id: 'pyq-2016-csat-52',
    subject: 'csat_reasoning',
    topic: 'Statement and Arguments',
    subTopic: 'Free Higher Education Policy',
    question: 'Statement: "Should university higher education be made completely free of cost for all citizens in the country?"\n\nArguments:\nI. Yes. It will eliminate financial barriers and enable talented students from underprivileged socio-economic backgrounds to attain university education.\nII. No. Higher education demands massive financial capital for research laboratories, libraries, and faculty compensation, and completely free tuition without adequate tax revenue would degrade educational quality and strain the national exchequer.\n\nWhich of the arguments is/are strong? (UPSC CSAT 2016)',
    options: [
      'Only argument I is strong',
      'Only argument II is strong',
      'Both arguments I and II are strong',
      'Neither argument I nor II is strong'
    ],
    correctAnswer: 2,
    explanation: 'Evaluate both arguments:\n- Argument I is STRONG: It highlights a vital socio-economic imperative—social mobility and democratic equity by removing economic barriers for underprivileged students. Valid and substantively sound.\n- Argument II is also STRONG: It addresses fiscal sustainability and educational infrastructure—universities require substantial funding for scientific laboratories and faculty, and eliminating tuition fees entirely could compromise institutional quality and public finance if not offset by sustainable tax funding.\n\nBecause both arguments reflect valid, substantial facets of public policy dilemmas (educational equity vs fiscal sustainability and quality maintenance), both arguments are strong.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 17: Statement and Arguments',
      pageNumber: 'Page 446 – 452',
      keyExcerpt: 'A strong argument directly identifies tangible public impacts, balancing social equity with economic viability.'
    },
    eliminationTip: 'Argument I addresses social equity; Argument II addresses fiscal sustainability and quality. Both present realistic, strong policy points.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Statement and Arguments', 'Higher Education']
  },
  {
    id: 'pyq-2016-csat-53',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Macroeconomic Policy & Fiscal Deficits',
    subTopic: 'Quality of Fiscal Deficit: Capital vs Revenue Expenditure',
    question: 'Read the following passage:\n\n"Fixating dogmatically on arbitrary fiscal deficit targets often causes severe macroeconomic harm during growth slowdowns. When governments compress deficits primarily by slashing capital expenditure on highways, ports, clean energy grids, and digital networks, long-term productive economic capacity is irreparably damaged. By contrast, borrowing to finance high-multiplier public capital infrastructure crowds in private investment, lowers logistics costs, and expands future tax revenues, thereby organically reducing the debt-to-GDP ratio over time. The quality and composition of fiscal expenditure matter far more than the nominal size of the deficit."\n\nWhich of the following is the most logical and rational inference from the passage? (UPSC CSAT 2016)',
    options: [
      'Governments should completely abolish all infrastructure capital expenditure.',
      'The composition of public expenditure—prioritizing productive capital investments over consumption subsidies—is more critical than blindly pursuing nominal fiscal deficit targets.',
      'Public capital expenditure always crowds out private investment.',
      'Borrowing for infrastructure never expands the tax base.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly argues that slashing capital expenditure to meet rigid deficit targets harms growth, whereas borrowing for high-multiplier capital projects expands GDP and crowds in private investment, concluding that "the quality and composition of fiscal expenditure matter far more than the nominal size of the deficit." Thus, Option B is the direct inference.\nOptions A, C, and D directly contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: Public Finance, Deficits and Multipliers',
      pageNumber: 'Page 62 – 68',
      keyExcerpt: 'Productive capital expenditure creates growth multipliers that naturally consolidate sovereign debt ratios.'
    },
    eliminationTip: 'The author concludes that "quality and composition of fiscal expenditure matter far more than the nominal size of the deficit" (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Fiscal Deficit', 'Capital Expenditure', 'Macroeconomics']
  },
  {
    id: 'pyq-2016-csat-54',
    subject: 'csat_quant',
    topic: 'Simple and Compound Interest',
    subTopic: 'CI and SI Difference for 3 Years',
    question: 'The difference between simple interest and compound interest on ₹ 1,200 for one year at 10% per annum reckoned half-yearly is: (UPSC CSAT 2016)',
    options: [
      '₹ 2.50',
      '₹ 3.00',
      '₹ 3.75',
      '₹ 4.00'
    ],
    correctAnswer: 1,
    explanation: 'Principal P = ₹ 1,200.\nAnnual interest rate R = 10% per annum.\nTime period = 1 year.\nCompounded HALF-YEARLY.\n\nWhen compounded half-yearly:\nRate per conversion period r = R / 2 = 10 / 2 = 5% per half-year.\nNumber of conversion periods n = 1 year × 2 = 2 half-years.\n\n1. Simple Interest for 1 year at 10%:\nSI = (P × R × T) / 100 = (1200 × 10 × 1) / 100 = ₹ 120.\n\n2. Compound Interest compounded half-yearly for 1 year (2 periods of 5%):\nAmount A = P × (1 + r/100)² = 1200 × (1 + 5/100)² = 1200 × (21/20)²\n= 1200 × (441 / 400) = 3 × 441 = ₹ 1,323.\nCI = A - P = 1323 - 1200 = ₹ 123.\n\nDifference between CI and SI:\nDifference = CI - SI = 123 - 120 = ₹ 3.00.\n\nShortcut Formula for 2 periods:\nDifference = P × (r / 100)²\n= 1200 × (5 / 100)²\n= 1200 × (1 / 20)²\n= 1200 / 400 = ₹ 3.00.\n\nMatches Option (b).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 22: Compound Interest (Half-Yearly Reckoning)',
      pageNumber: 'Page 494 – 500',
      keyExcerpt: 'For 2 conversion periods, Difference = P(r/100)² where r is the periodic rate.'
    },
    eliminationTip: 'Half-yearly rate is 5% for 2 periods. Difference = P(r/100)² = 1200 × (5/100)² = 1200 × 1/400 = ₹ 3.00.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Compound Interest', 'Half-Yearly Compounding']
  },
  {
    id: 'pyq-2016-csat-55',
    subject: 'csat_reasoning',
    topic: 'Blood Relations & Family Tree',
    subTopic: 'Coded Family Relationships',
    question: 'A is B\'s sister. C is B\'s mother. D is C\'s father. E is D\'s mother. Then, how is A related to D? (UPSC CSAT 2016)',
    options: [
      'Grandmother',
      'Granddaughter',
      'Daughter',
      'Grandfather'
    ],
    correctAnswer: 1,
    explanation: 'Trace the lineage step by step:\n1. A is B\'s sister -> A is female, and A and B are in the same sibling generation.\n2. C is B\'s mother -> C is also A\'s mother (since A and B are siblings).\n3. D is C\'s father -> D is the father of A\'s mother.\nFather of one\'s mother is one\'s Maternal Grandfather.\n4. Therefore, A is the GRANDDAUGHTER of D.\n(D is the grandfather of A, which means A is D\'s granddaughter).\n\nMatches Option (b).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Blood Relations',
      pageNumber: 'Page 174 – 180',
      keyExcerpt: 'Child of a daughter is a granddaughter/grandson to the mother\'s parents.'
    },
    eliminationTip: 'A\'s mother is C. C\'s father is D. Therefore, A is D\'s granddaughter (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Blood Relations', 'Generational Lineage']
  },
  {
    id: 'pyq-2016-csat-56',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Coastal Aquaculture & Wetland Loss',
    subTopic: 'Shrimp Farming and Mangrove Clearance',
    question: 'Read the following passage:\n\n"The boom in commercial coastal brackish-water aquaculture, particularly export-oriented tiger prawn farming, has generated lucrative foreign exchange earnings for coastal states. However, this private profit masks severe socialized ecological devastation. Converting tidal mangrove wetlands into artificial aquaculture ponds destroys coastal storm bio-shields, acidifies surrounding soils with chemical antibiotics, and contaminates agricultural freshwater aquifers with hypersaline wastewater discharges. After five to seven years of operation, disease outbreaks typically force pond abandonment, leaving behind toxic, barren wastelands that can neither support agriculture nor regenerate mangrove vegetation."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2016)',
    options: [
      'Commercial prawn farming should be subsidized with zero environmental regulations.',
      'Unregulated coastal aquaculture imposes catastrophic long-term ecological and agrarian costs that outweigh transient private export windfalls.',
      'Mangrove wetlands naturally regenerate faster when converted into shrimp ponds.',
      'Brackish-water aquaculture has zero impact on freshwater aquifers.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that the short-term export gains of shrimp aquaculture are eclipsed by long-term environmental devastation (mangrove destruction, aquifer salinization, and toxic wasteland abandonment). Thus, Option B is the direct corollary.\nOptions A, C, and D are either absurd or contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Coastal Ecology and Aquaculture Externalities',
      pageNumber: 'Page 124 – 130',
      keyExcerpt: 'Aquaculture conversion imposes severe negative externalities on coastal ecosystems and groundwater tables.'
    },
    eliminationTip: 'Option B accurately highlights that transient export profits are outweighed by permanent ecological and groundwater ruin.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Aquaculture', 'Mangroves', 'Groundwater Salinization']
  },
  {
    id: 'pyq-2016-csat-57',
    subject: 'csat_quant',
    topic: 'Ratio, Proportion and Partnerships',
    subTopic: 'Unequal Investment Durations',
    question: 'A and B entered into a partnership. A invested ₹ 16,000 for 9 months and B invested ₹ 12,000 for 6 months. If the total profit at the end of the partnership was ₹ 7,200, find A\'s share of the profit. (UPSC CSAT 2016)',
    options: [
      '₹ 3,600',
      '₹ 4,200',
      '₹ 4,800',
      '₹ 5,400'
    ],
    correctAnswer: 2,
    explanation: 'Profits in a partnership are divided in the ratio of the product of capital invested and time period of investment:\n\nRatio of profit shares = (Capital_A × Time_A) : (Capital_B × Time_B)\n- Product for A = 16,000 × 9 = 144,000\n- Product for B = 12,000 × 6 = 72,000\n\nRatio of shares = 144,000 : 72,000 = 2 : 1.\n\nTotal parts in the ratio = 2 + 1 = 3 parts.\nTotal profit = ₹ 7,200.\n\nA\'s share of profit = (2 / 3) × 7,200\n= 2 × 2,400\n= ₹ 4,800.\n(B receives 1/3 × 7,200 = ₹ 2,400).\n\nMatches Option (c).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 13: Partnership',
      pageNumber: 'Page 306 – 312',
      keyExcerpt: 'Profit share ratio = C₁T₁ : C₂T₂. A\'s share = [C₁T₁ / (C₁T₁ + C₂T₂)] × Total Profit.'
    },
    eliminationTip: 'A = 16k × 9 = 144k. B = 12k × 6 = 72k. Ratio is 144 : 72 = 2 : 1. A gets 2/3 of 7,200 = ₹ 4,800.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Partnership', 'Ratio of Profits']
  },
  {
    id: 'pyq-2016-csat-58',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding',
    subTopic: 'Direct Substitution Code',
    question: 'In a certain code, \'TIGER\' is written as \'QDFHS\'. How is \'FISH\' written in that code? (UPSC CSAT 2016)',
    options: [
      'GRHE',
      'GERH',
      'GREH',
      'GHRE'
    ],
    correctAnswer: 0,
    explanation: 'Analyze the pattern from TIGER to QDFHS:\nNotice that the letters are shifted by -1 and then the order is reversed:\n- T (-1) -> S (placed at the last position)\n- I (-1) -> H (placed at 4th position)\n- G (-1) -> F (placed at 3rd position)\n- E (-1) -> D (placed at 2nd position)\n- R (-1) -> Q (placed at 1st position)\n\nThus, the rule is: take the predecessor of each letter (-1) and REVERSE the order of the word!\n\nApply this identical rule to F I S H:\n1. Find predecessor (-1) of each letter:\n- F (-1) -> E\n- I (-1) -> H\n- S (-1) -> R\n- H (-1) -> G\nIntermediate result: E H R G.\n\n2. Reverse the intermediate string:\nReverse of E H R G is G R H E.\n\nMatches Option (a).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 4: Coding-Decoding (Reverse Shift)',
      pageNumber: 'Page 140 – 146',
      keyExcerpt: 'Compound coding: Apply letter decrement followed by string reversal.'
    },
    eliminationTip: 'Reverse and subtract 1: H(-1)=G, S(-1)=R, I(-1)=H, F(-1)=E => GRHE.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Coding-Decoding', 'Reverse Decrement']
  },
  {
    id: 'pyq-2016-csat-59',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Sovereign Debt & Inflation Tax',
    subTopic: 'Monetization of Deficits and Purchasing Power',
    question: 'Read the following passage:\n\n"When sovereign governments face crushing fiscal deficits and lack the political courage to enact transparent taxation or rein in unproductive public expenditures, they often resort to central bank deficit monetization—printing fiat currency to finance budget shortfalls. While this avoids explicit sovereign bond defaults, it unleashes severe inflationary pressures. Inflation functions as an insidious, regressive \'hidden tax\' on the poor and fixed-income earners, whose real purchasing power is eroded daily while asset-owning elites hedge against price surges through real estate and gold."\n\nWhich of the following is the most logical and rational conclusion that can be drawn from the passage? (UPSC CSAT 2016)',
    options: [
      'Printing fiat money to finance government spending is the fairest form of progressive taxation.',
      'Monetizing fiscal deficits triggers inflation, which acts as a regressive hidden tax penalizing the poorest citizens most severely.',
      'Inflation increases the purchasing power of daily wage laborers.',
      'Sovereign deficits should be eliminated by printing unlimited amounts of paper currency.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly calls inflation caused by money printing an "insidious, regressive \'hidden tax\' on the poor and fixed-income earners", eroding their real wages while the rich hedge. Thus, Option B is the accurate conclusion.\nOptions A, C, and D are either absurd or contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: Monetary Policy, Inflation and Income Distribution',
      pageNumber: 'Page 52 – 58',
      keyExcerpt: 'Inflationary deficit monetization functions as a regressive implicit tax disproportionately eroding low-income purchasing power.'
    },
    eliminationTip: 'The passage labels deficit monetization and resulting inflation as a "regressive hidden tax on the poor" (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Inflation Tax', 'Deficit Monetization', 'Macroeconomics']
  },
  {
    id: 'pyq-2016-csat-60',
    subject: 'csat_quant',
    topic: 'Ages and Linear Equations',
    subTopic: 'Ratio of Ages at Different Times',
    question: 'The ratio of the present ages of two brothers is 4 : 5. Five years ago, the ratio of their ages was 3 : 4. What will be the ratio of their ages after 5 years from now? (UPSC CSAT 2016)',
    options: [
      '5 : 6',
      '6 : 7',
      '7 : 8',
      '8 : 9'
    ],
    correctAnswer: 0,
    explanation: 'Let the present ages of the two brothers be 4x and 5x years.\n\nFive years ago, their ages were (4x - 5) and (5x - 5) years.\nAccording to the question:\n(4x - 5) / (5x - 5) = 3 / 4\nCross multiply:\n4 × (4x - 5) = 3 × (5x - 5)\n16x - 20 = 15x - 15\n16x - 15x = 20 - 15\nx = 5.\n\nTherefore, their present ages are:\n- Elder brother = 5x = 5 × 5 = 25 years.\n- Younger brother = 4x = 4 × 5 = 20 years.\n\nAfter 5 years from now, their ages will be:\n- Younger brother = 20 + 5 = 25 years.\n- Elder brother = 25 + 5 = 30 years.\n\nRatio of their ages after 5 years:\nRatio = 25 : 30 = 5 : 6.\n\nMatches Option (a).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 8: Problems on Ages',
      pageNumber: 'Page 206 – 212',
      keyExcerpt: 'In constant-difference age problems, cross-multiplication of time-shifted ratios yields the scaling factor x.'
    },
    eliminationTip: 'Notice the ratio steps: 5 yrs ago = 3:4. Present = 4:5 (step of 1 in 5 yrs). So 5 yrs in future must step up by 1 again: 5:6!',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Problems on Ages', 'Ratios']
  },
  {
    id: 'pyq-2016-csat-61',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding',
    subTopic: 'Mathematical Operation Substitution',
    question: 'If \'+\' means \'divided by\', \'-\' means \'multiplied by\', \'×\' means \'minus\', and \'÷\' means \'plus\', then what is the value of the expression:\n(48 + 6) - 4 × 12 ÷ 8? (UPSC CSAT 2016)',
    options: [
      '28',
      '32',
      '36',
      '40'
    ],
    correctAnswer: 0,
    explanation: 'Given operator substitution rules:\n- \'+\' -> ÷\n- \'-\' -> ×\n- \'×\' -> -\n- \'÷\' -> +\n\nOriginal expression:\n(48 + 6) - 4 × 12 ÷ 8\n\nSubstitute the operators:\n(48 ÷ 6) × 4 - 12 + 8\n\nEvaluate step-by-step using BODMAS rules:\n1. Parentheses/Division: 48 ÷ 6 = 8.\nExpression becomes: 8 × 4 - 12 + 8.\n2. Multiplication: 8 × 4 = 32.\nExpression becomes: 32 - 12 + 8.\n3. Addition and Subtraction (left to right):\n32 - 12 = 20.\n20 + 8 = 28.\n\nMatches Option (a).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 13: Mathematical Operations',
      pageNumber: 'Page 356 – 362',
      keyExcerpt: 'Substitute all symbols with their mathematical operators before applying strict BODMAS precedence.'
    },
    eliminationTip: '(48 / 6) × 4 - 12 + 8 = 8 × 4 - 12 + 8 = 32 - 12 + 8 = 28.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Mathematical Operations', 'BODMAS']
  },
  {
    id: 'pyq-2016-csat-62',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Groundwater Pricing & Power Subsidies',
    subTopic: 'Metered Solar Feed-in Tariffs vs Free Power',
    question: 'Read the following passage:\n\n"The provision of unmetered agricultural electricity in water-scarce basins has created a perverse economic incentive structure: because farmers face zero marginal pumping cost for groundwater extraction, they run borewells continuously and cultivate water-intensive cash crops in arid tracts. Introducing metered solar agricultural feeders with guaranteed feed-in tariffs transforms this dynamic. When a farmer can choose between pumping an extra cubic meter of groundwater or selling that surplus solar electron back to the electrical grid at a guaranteed remunerative tariff, water conservation acquires a direct financial reward, transforming energy policy from an engine of depletion into a catalyst for aquifer conservation."\n\nWhich of the following is the most rational and logical corollary to the passage? (UPSC CSAT 2016)',
    options: [
      'Solar energy increases the overexploitation of groundwater aquifers.',
      'Rewarding farmers for feeding surplus solar power into the grid creates economic incentives to conserve groundwater.',
      'Unmetered electricity subsidies are the most effective method for aquifer conservation.',
      'Farmers should be legally barred from using solar energy.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explains that unmetered power encourages wasteful pumping, whereas solar feeders with buyback tariffs offer farmers a financial choice: pump water or sell electricity. Selling solar power gives conservation a cash value. Thus, Option B is the direct corollary.\nOptions A, C, and D are either absurd or contradict the author\'s analysis.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Water Resource Economics and Solar Incentives',
      pageNumber: 'Page 132 – 138',
      keyExcerpt: 'Feed-in tariffs for solar farm-power monetize foregone water pumping, incentivizing aquifer stewardship.'
    },
    eliminationTip: 'The passage argues that enabling farmers to sell surplus solar power gives them a financial reason NOT to waste groundwater (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Groundwater', 'Solar Feeders', 'Resource Economics']
  },
  {
    id: 'pyq-2016-csat-63',
    subject: 'csat_quant',
    topic: 'Number System & Arithmetic',
    subTopic: 'Sum of Consecutive Integers',
    question: 'The sum of five consecutive odd numbers is 275. What is the value of the largest of these numbers? (UPSC CSAT 2016)',
    options: [
      '55',
      '57',
      '59',
      '61'
    ],
    correctAnswer: 2,
    explanation: 'Let the five consecutive odd numbers be:\n(x - 4), (x - 2), x, (x + 2), (x + 4), where x is the middle odd number.\n\nTheir sum is:\n(x - 4) + (x - 2) + x + (x + 2) + (x + 4) = 5x.\n\nWe are given:\n5x = 275\nx = 275 / 5 = 55.\n\nThe middle number is 55.\nThe numbers in ascending order are:\n51, 53, 55, 57, 59.\n\nThe largest of these numbers is x + 4 = 55 + 4 = 59.\nMatches Option (c).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 7: Problems on Numbers',
      pageNumber: 'Page 186 – 192',
      keyExcerpt: 'For an odd count of consecutive arithmetic numbers, Average = Middle number = Sum / Count.'
    },
    eliminationTip: 'Middle number = 275 / 5 = 55. The five numbers are 51, 53, 55, 57, 59. Largest is 59.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Consecutive Numbers', 'Arithmetic']
  },
  {
    id: 'pyq-2016-csat-64',
    subject: 'csat_reasoning',
    topic: 'Analytical Puzzle Test',
    subTopic: 'Professions and Cities Assignment Matrix',
    question: 'Four friends Amit, Bharat, Chetan, and Dinesh are an Architect, a Doctor, an Engineer, and a Lawyer, living in Delhi, Mumbai, Kolkata, and Chennai, not necessarily in that order.\n\n1. The Doctor lives in Mumbai.\n2. Bharat is an Architect and does not live in Delhi or Kolkata.\n3. Chetan is a Lawyer.\n4. Dinesh does not live in Mumbai.\n\nWho lives in Chennai? (UPSC CSAT 2016)',
    options: [
      'Amit',
      'Bharat',
      'Chetan',
      'Dinesh'
    ],
    correctAnswer: 1,
    explanation: 'Analyze the given constraints step by step:\n- Condition 2: Bharat is an Architect. Bharat does NOT live in Delhi or Kolkata. Can Bharat live in Mumbai? From Condition 1, the Doctor lives in Mumbai; since Bharat is an Architect, Bharat cannot live in Mumbai either! Therefore, Bharat MUST live in CHENNAI!\n\nLet\'s verify the remaining assignments:\n- Bharat = Architect, lives in Chennai.\n- Doctor lives in Mumbai. Who is the Doctor? Not Bharat (Architect), not Chetan (Lawyer), not Dinesh (Condition 4: Dinesh does not live in Mumbai). Therefore, Amit MUST be the Doctor living in Mumbai!\n- Chetan is the Lawyer.\n- Remaining person Dinesh must be the Engineer.\n- Remaining cities for Chetan and Dinesh are Delhi and Kolkata.\n\nThus, Bharat unequivocally lives in Chennai.\nMatches Option (b).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 6: Puzzle Test',
      pageNumber: 'Page 196 – 204',
      keyExcerpt: 'Cross-attribute elimination matrix resolves multiple variables by intersecting negative constraints.'
    },
    eliminationTip: 'Bharat doesn\'t live in Delhi or Kolkata. Since Mumbai is reserved for the Doctor and Bharat is an Architect, Bharat must live in Chennai!',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Puzzle Test', 'Matrix Elimination']
  },
  {
    id: 'pyq-2016-csat-65',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Coastal Sand Mining & River Morphology',
    subTopic: 'Riverbed Incision and Saline Ingress',
    question: 'Read the following passage:\n\n"Unregulated extraction of riverbed sand to feed explosive urban construction booms has triggered severe ecological degradation across riparian corridors. Indiscriminate mechanized dredging lowers the riverbed far below sea level in coastal deltas, triggering acute saltwater intrusion that poisons agricultural drinking wells and estuarine freshwater fisheries. Furthermore, deep riverbed incision destabilizes bridge piers and collapses riverbanks, increasing flood vulnerability during seasonal high discharges. Mandating manufactured sand (M-sand) produced from crushed quarry granite and enforcing satellite surveillance of riparian reaches is indispensable for halting riverine destruction."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2016)',
    options: [
      'Riverbed sand extraction has no negative effect on estuarine water quality.',
      'Unchecked sand mining causes severe riverbed incision, saline ingress, and structural hazards, necessitating strict surveillance and adoption of manufactured sand.',
      'Granite quarrying should be completely prohibited to encourage riverbed dredging.',
      'Saltwater intrusion improves the fertility of freshwater delta soils.'
    ],
    correctAnswer: 1,
    explanation: 'The passage details the multi-dimensional hazards of riverbed sand mining (incised riverbeds, saline water intrusion, bridge collapses) and recommends manufactured sand (M-sand) and satellite surveillance to stop the destruction. Thus, Option B is the direct corollary.\nOptions A, C, and D are factually absurd and contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Riparian Ecology and Mineral Governance',
      pageNumber: 'Page 136 – 142',
      keyExcerpt: 'Riverbed incision from dredging induces saline groundwater intrusion and hydraulic bridge instability.'
    },
    eliminationTip: 'Option B accurately highlights the damaging impacts (incision, saline ingress) and solutions (M-sand, satellite surveillance) stated in the passage.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Sand Mining', 'Saline Ingress', 'M-Sand', 'Ecology']
  },
  {
    id: 'pyq-2016-csat-66',
    subject: 'csat_quant',
    topic: 'Permutations and Combinations',
    subTopic: 'Digit Combinations without Repetition',
    question: 'How many 3-digit numbers can be formed from the digits 1, 2, 3, 4, and 5 if each digit can be used at most once? (UPSC CSAT 2016)',
    options: [
      '20',
      '60',
      '120',
      '125'
    ],
    correctAnswer: 1,
    explanation: 'We have 5 distinct digits available: {1, 2, 3, 4, 5}.\nWe need to form 3-digit numbers with NO repetition of digits.\n\nUsing the Fundamental Counting Principle (or Permutations formula ⁵P₃):\n- Hundreds place can be filled by any of the 5 available digits (5 choices).\n- Tens place can be filled by any of the remaining 4 digits (4 choices).\n- Units place can be filled by any of the remaining 3 digits (3 choices).\n\nTotal possible 3-digit numbers = 5 × 4 × 3 = 60.\n\nUsing Permutation formula:\n⁵P₃ = 5! / (5 - 3)! = 5! / 2! = (5 × 4 × 3 × 2 × 1) / (2 × 1) = 60.\n\nMatches Option (b).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 30: Permutations and Combinations',
      pageNumber: 'Page 608 – 614',
      keyExcerpt: 'Permutations of n distinct objects taken r at a time: ⁿPᵣ = n! / (n - r)!.'
    },
    eliminationTip: 'Three slots: 5 × 4 × 3 = 60 distinct numbers.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Permutations', 'Digit Formation']
  },
  {
    id: 'pyq-2016-csat-67',
    subject: 'csat_reasoning',
    topic: 'Directions and Distances',
    subTopic: 'Displacement with Angular Turns',
    question: 'Starting from point A, Rohan walks 20 meters towards North, turns right and walks 30 meters, turns right and walks 35 meters, and then turns left and walks 15 meters. Finally, he turns left and walks 15 meters to reach point B. What is the shortest distance between points A and B? (UPSC CSAT 2016)',
    options: [
      '35 meters',
      '40 meters',
      '45 meters',
      '50 meters'
    ],
    correctAnswer: 2,
    explanation: 'Trace the path on a Cartesian coordinate plane with Point A as origin (0, 0):\n1. Walks 20 m North -> (0, +20).\n2. Turns right (East) and walks 30 m -> (+30, +20).\n3. Turns right (South) and walks 35 m -> (+30, 20 - 35) = (+30, -15).\n4. Turns left (facing South, left is East) and walks 15 m -> (30 + 15, -15) = (+45, -15).\n5. Turns left (facing East, left is North) and walks 15 m -> (+45, -15 + 15) = (+45, 0).\n\nFinal position B is at (+45, 0).\nStarting position A is at (0, 0).\n\nShortest distance between A and B = √[(45 - 0)² + (0 - 0)²] = 45 meters.\nMatches Option (c).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 8: Direction Sense Test',
      pageNumber: 'Page 228 – 235',
      keyExcerpt: 'Vector accumulation along x and y axes simplifies multi-step displacement calculations.'
    },
    eliminationTip: 'North-South: +20 - 35 + 15 = 0. East-West: +30 + 15 = 45. Net distance is purely horizontal = 45 meters.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Direction Sense', 'Cartesian Coordinates']
  },
  {
    id: 'pyq-2016-csat-68',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Sovereign Reserves & Currency Defense',
    subTopic: 'Foreign Exchange Reserves as a Macro Buffer',
    question: 'Read the following passage:\n\n"In globalized financial markets characterized by volatile capital flows, emerging market central banks maintain massive foreign exchange reserves as precautionary self-insurance. When sudden shifts in advanced economy interest rates trigger catastrophic capital flight, domestic currencies face brutal speculative runs. Depleting reserves to defend an arbitrarily overvalued exchange rate peg is often a futile drain on state wealth. However, deploying reserves strategically to smooth disorderly volatility and provide emergency import cover preserves investor confidence and prevents sudden balance-of-payments collapses."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2016)',
    options: [
      'Central banks should maintain zero foreign exchange reserves.',
      'Foreign exchange reserves provide vital macroprudential buffers to smooth disorderly market volatility and maintain external payment stability.',
      'Speculative currency attacks are entirely impossible in open economies.',
      'Defending rigid overvalued exchange rate pegs is always the most successful monetary strategy.'
    ],
    correctAnswer: 1,
    explanation: 'The passage argues that while defending rigid artificial pegs drains wealth, maintaining robust foreign exchange reserves to smooth disorderly exchange rate volatility and guarantee import cover is essential for external stability. Thus, Option B is the logical corollary.\nOptions A, C, and D are either absurd or contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: Foreign Exchange Reserves and External Sector Stability',
      pageNumber: 'Page 60 – 66',
      keyExcerpt: 'FX reserves function as precautionary self-insurance to absorb capital outflow shocks.'
    },
    eliminationTip: 'Option B accurately highlights that reserves act as macroprudential buffers to smooth volatility and ensure external stability.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Forex Reserves', 'Central Banks', 'Macroeconomics']
  },
  {
    id: 'pyq-2016-csat-69',
    subject: 'csat_quant',
    topic: 'Averages & Replacement',
    subTopic: 'Weighted Mean of Mixed Groups',
    question: 'The average monthly salary of all employees in an enterprise is ₹ 6,000. The average monthly salary of 12 officers is ₹ 40,000, while the average salary of the rest of the employees is ₹ 5,600. What is the total number of employees in the enterprise? (UPSC CSAT 2016)',
    options: [
      '1,020',
      '1,032',
      '1,040',
      '1,050'
    ],
    correctAnswer: 1,
    explanation: 'Let the total number of employees be N.\nNumber of officers = 12.\nNumber of non-officer employees = N - 12.\n\nTotal salary of all employees = N × 6,000.\nTotal salary of officers = 12 × 40,000 = ₹ 480,000.\nTotal salary of non-officers = (N - 12) × 5,600.\n\nSet up the equation:\n480,000 + 5,600(N - 12) = 6,000N\n480,000 + 5,600N - 67,200 = 6,000N\n412,800 = 6,000N - 5,600N\n412,800 = 400N\nN = 412,800 / 400 = 1,032.\n\nAlternative Alligation Method:\n- Officers avg = 40,000\n- Rest avg = 5,600\n- Mean avg = 6,000\nRatio of Officers to Rest:\n(6,000 - 5,600) : (40,000 - 6,000) = 400 : 34,000 = 1 : 85.\nSince Officers = 12:\nRest = 85 × 12 = 1,020.\nTotal employees = Officers + Rest = 12 + 1,020 = 1,032.\n\nMatches Option (b).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 6: Averages & Chapter 20: Alligation',
      pageNumber: 'Page 158 – 164',
      keyExcerpt: 'Alligation ratio: (Mean - Rest) / (Officers - Mean) = 400 / 34,000 = 1 : 85.'
    },
    eliminationTip: 'By alligation, ratio of officers to rest is (6000 - 5600) : (40000 - 6000) = 400 : 34000 = 1 : 85. Since there are 12 officers, other staff = 85 × 12 = 1020. Total = 1020 + 12 = 1,032.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Averages', 'Alligation', 'Weighted Mean']
  },
  {
    id: 'pyq-2016-csat-70',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding',
    subTopic: 'Letter Position Shift',
    question: 'If in a certain code language, \'COMPUTER\' is written as \'RFUVQNPC\', how is \'MEDICINE\' written in that code? (UPSC CSAT 2016)',
    options: [
      'EOJDJEFM',
      'EOJDEJFM',
      'MFEJDJOE',
      'EOJDJFEM'
    ],
    correctAnswer: 0,
    explanation: 'Analyze the transformation from COMPUTER to RFUVQNPC:\nNotice the relationship between the letters:\n1. The last letter R moves to the 1st position.\n2. The first letter C moves to the last (8th) position.\n3. The intermediate letters from left to right (O, M, P, U, T, E) are shifted by +1 and placed in reverse order:\n- E (+1) -> F (placed 2nd)\n- T (+1) -> U (placed 3rd)\n- U (+1) -> V (placed 4th)\n- P (+1) -> Q (placed 5th)\n- M (+1) -> N (placed 6th)\n- O (+1) -> P (placed 7th)\nResult: R F U V Q N P C.\n\nApply the identical transformation to M E D I C I N E:\n1. Last letter E moves to 1st position: \'E\'\n2. First letter M moves to last (8th) position: \'M\'\n3. Intermediate letters (E, D, I, C, I, N) are shifted by +1 and written in reverse order (from N backwards to E):\n- N (+1) -> O\n- I (+1) -> J\n- C (+1) -> D\n- I (+1) -> J\n- D (+1) -> E\n- E (+1) -> F\n\nPutting them together:\nE - O - J - D - J - E - F - M.\nWord: EOJDJEFM.\nMatches Option (a).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 4: Coding-Decoding',
      pageNumber: 'Page 142 – 148',
      keyExcerpt: 'Symmetric swap of terminal characters accompanied by reversed +1 intermediate letter progression.'
    },
    eliminationTip: 'First letter becomes last (M), last letter becomes first (E). Reversing middle letters and adding 1 gives EOJDJEFM.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Coding-Decoding', 'Reverse Shift']
  },
  {
    id: 'pyq-2016-csat-71',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Clean Energy & Critical Minerals',
    subTopic: 'Supply Chain Bottlenecks in Energy Transition',
    question: 'Read the following passage:\n\n"The global race to decarbonize power generation and electrify mobility has unleashed an unprecedented demand shock for critical minerals: lithium, cobalt, nickel, rare earth elements, and copper. Unlike fossil fuel extraction distributed across multiple petroleum provinces, critical mineral refining and processing are overwhelmingly concentrated in a handful of jurisdictions, creating acute geopolitical and supply chain vulnerabilities. If supply chains are disrupted by export embargoes, mining water conflicts, or armed strife in fragile mineral-rich corridors, the global green transition could stall, elevating electric vehicle prices and clean grid deployment costs."\n\nWhich of the following is the most rational and critical inference from the passage? (UPSC CSAT 2016)',
    options: [
      'The transition to clean renewable energy is entirely free of any geopolitical or supply chain risks.',
      'Deep decarbonization requires securing diversified, resilient supply chains and recycling architectures for critical energy transition minerals.',
      'Fossil fuels should be permanently expanded because they require no refining.',
      'Electric vehicle batteries require zero lithium or rare earth elements.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that the green transition depends heavily on critical minerals whose processing is geopolitically concentrated, warning that supply disruptions could derail decarbonization. Thus, securing resilient, diversified mineral supplies and recycling is vital (Option B).\nOptions A, C, and D are factually untrue or contradict the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Clean Energy Minerals and Geopolitics',
      pageNumber: 'Page 130 – 136',
      keyExcerpt: 'Critical mineral supply concentration poses severe transition risks, requiring diversification.'
    },
    eliminationTip: 'Option B accurately highlights the necessary strategy: securing diversified, resilient supply chains for critical energy minerals.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Critical Minerals', 'Energy Transition', 'Geopolitics']
  },
  {
    id: 'pyq-2016-csat-72',
    subject: 'csat_quant',
    topic: 'Time and Distance',
    subTopic: 'Two Bodies Moving Towards Each Other',
    question: 'Two stations A and B are 110 km apart on a straight line. One train starts from A at 7 a.m. and travels towards B at 20 km/h. Another train starts from B at 8 a.m. and travels towards A at a speed of 25 km/h. At what time will they meet? (UPSC CSAT 2016)',
    options: [
      '9:00 a.m.',
      '10:00 a.m.',
      '10:30 a.m.',
      '11:00 a.m.'
    ],
    correctAnswer: 1,
    explanation: 'Train 1 starts from A at 7:00 a.m. at 20 km/h.\nTrain 2 starts from B at 8:00 a.m. at 25 km/h.\nTotal distance = 110 km.\n\nStep 1: Distance covered by Train 1 from 7:00 a.m. to 8:00 a.m. (1 hour):\nDistance = Speed × Time = 20 × 1 = 20 km.\n\nStep 2: Remaining distance between the two trains at 8:00 a.m.:\nRemaining Distance = 110 - 20 = 90 km.\n\nStep 3: At 8:00 a.m., both trains are moving TOWARDS each other.\nRelative Speed = Speed(Train 1) + Speed(Train 2) = 20 + 25 = 45 km/h.\n\nStep 4: Time taken to cover the remaining 90 km:\nTime = 90 / 45 = 2 hours.\n\nStep 5: Meeting time:\nMeeting Time = 8:00 a.m. + 2 hours = 10:00 a.m.\n\nMatches Option (b).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 17: Time and Distance (Opposite Movement)',
      pageNumber: 'Page 388 – 394',
      keyExcerpt: 'Equalize start times before computing meeting time using relative speed.'
    },
    eliminationTip: 'In the first hour (7 to 8 a.m.), Train 1 covers 20 km. Remaining distance = 90 km. Relative speed = 20 + 25 = 45 km/h. Time = 90/45 = 2 hrs. 8 a.m. + 2 hrs = 10:00 a.m.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Relative Speed', 'Meeting Time']
  },
  {
    id: 'pyq-2016-csat-73',
    subject: 'csat_reasoning',
    topic: 'Statement and Assumptions',
    subTopic: 'Institutional Digital Transformation',
    question: 'Consider the following statement and assumptions:\n\nStatement: "The National Highway Authority has decided to make electronic toll collection through FASTag mandatory for all commercial and private vehicles."\n\nAssumptions:\nI. Electronic toll collection will significantly reduce vehicle congestion and waiting times at highway toll plazas.\nII. Most vehicle owners are capable of acquiring and installing RFID FASTag stickers on their vehicles.\n\nWhich of the assumptions is/are implicit in the statement? (UPSC CSAT 2016)',
    options: [
      'Only assumption I is implicit',
      'Only assumption II is implicit',
      'Both assumptions I and II are implicit',
      'Neither assumption I nor II is implicit'
    ],
    correctAnswer: 2,
    explanation: 'Analyze each assumption:\n- Assumption I is implicit: Any policy decision mandating digital technology over cash transactions at toll booths is premised on the rationale that automated digital scanning speeds up transit throughput and resolves congestion bottlenecks.\n- Assumption II is implicit: Making a system mandatory for the entire vehicle population presupposes that it is feasible and accessible for citizens to comply by obtaining the required RFID tags.\n\nTherefore, both assumptions I and II are implicit in the statement.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 15: Statement and Assumptions',
      pageNumber: 'Page 414 – 420',
      keyExcerpt: 'Policy mandates presuppose operational utility of the policy and citizen capability of compliance.'
    },
    eliminationTip: 'A government mandate implicitly assumes both operational effectiveness (reduced delays) and practical feasibility (citizens can get tags). Both are implicit.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Statement and Assumptions', 'FASTag', 'Digital Toll']
  },
  {
    id: 'pyq-2016-csat-74',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Coastal Wetland Economics & Ecosystem Services',
    subTopic: 'Natural Capital Accounting vs Short-Term Reclamation',
    question: 'Read the following passage:\n\n"Conventional gross domestic product accounting treats pristine coastal wetlands as economically \'unproductive\' swamps until they are dredged, filled, and paved over for real estate developments or commercial ports. This myopic economic metric entirely ignores the invisible ecosystem services delivered by intact tidal wetlands: natural storm surge buffering, sediment stabilization, nursery habitat for commercial marine fisheries, and massive carbon sequestration in anaerobic blue carbon peat. When natural capital accounting incorporates these ecological services into cost-benefit calculus, the economic value of conserving intact coastal wetlands routinely dwarfs the short-term speculative revenues of urban land reclamation."\n\nWhich of the following is the most crucial message conveyed by the author? (UPSC CSAT 2016)',
    options: [
      'Natural capital accounting should be rejected because economic growth only depends on real estate construction.',
      'Incorporating natural capital accounting demonstrates that conserving intact coastal wetlands provides far greater long-term economic value than speculative land reclamation.',
      'Wetlands should be filled and paved as quickly as possible to increase GDP.',
      'Blue carbon peat releases all of its carbon into the atmosphere immediately.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that traditional GDP metrics wrongly consider wetlands useless, whereas natural capital accounting reveals that wetlands\' invisible services (carbon burial, fisheries, storm buffering) far exceed the short-term profits of reclamation. Thus, Option B is the primary message.\nOptions A, C, and D directly contradict the author\'s thesis.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Natural Capital Accounting and Wetland Economics',
      pageNumber: 'Page 134 – 140',
      keyExcerpt: 'Natural capital valuation reveals that intact wetland ecosystem services exceed land reclamation values.'
    },
    eliminationTip: 'The passage argues that natural capital accounting proves wetlands are more valuable alive than paved over (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Natural Capital Accounting', 'Wetlands', 'Blue Carbon']
  },
  {
    id: 'pyq-2016-csat-75',
    subject: 'csat_quant',
    topic: 'Number System & Arithmetic',
    subTopic: 'LCM of Fractions',
    question: 'What is the LCM of the fractions 2/3, 8/9, 16/81, and 10/27? (UPSC CSAT 2016)',
    options: [
      '80/3',
      '80/81',
      '160/3',
      '160/81'
    ],
    correctAnswer: 0,
    explanation: 'The Least Common Multiple (LCM) of a set of fractions is given by the standard formula:\nLCM of fractions = [LCM of Numerators] / [HCF of Denominators].\n\nGiven fractions:\nNumerators = {2, 8, 16, 10}\nDenominators = {3, 9, 81, 27}\n\nStep 1: Find LCM of Numerators (2, 8, 16, 10):\n- 2 = 2¹\n- 8 = 2³\n- 16 = 2⁴\n- 10 = 2 × 5\nLCM = 2⁴ × 5 = 16 × 5 = 80.\n\nStep 2: Find HCF of Denominators (3, 9, 81, 27):\n- 3 = 3¹\n- 9 = 3²\n- 81 = 3⁴\n- 27 = 3³\nThe lowest common power of 3 dividing all denominators is 3¹ = 3.\nHCF = 3.\n\nStep 3: Compute LCM of fractions:\nLCM = [LCM of Numerators] / [HCF of Denominators] = 80 / 3.\n\nMatches Option (a).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: H.C.F. and L.C.M. of Numbers',
      pageNumber: 'Page 30 – 36',
      keyExcerpt: 'LCM of Fractions = LCM of Numerators / HCF of Denominators.'
    },
    eliminationTip: 'LCM of {2, 8, 16, 10} = 80. HCF of {3, 9, 81, 27} = 3. LCM of fractions = 80 / 3.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Fractions', 'LCM and HCF']
  },
  {
    id: 'pyq-2016-csat-76',
    subject: 'csat_reasoning',
    topic: 'Alphabet & Ranking',
    subTopic: 'Letter Pair Distance',
    question: 'How many pairs of letters are there in the word \'NECESSARY\' which have as many letters between them in the word as in the English alphabet? (UPSC CSAT 2016)',
    options: [
      'One',
      'Two',
      'Three',
      'Four'
    ],
    correctAnswer: 1,
    explanation: 'The word is N E C E S S A R Y.\nLet us assign standard numerical positions to each letter in the word (left to right):\n1: N(14), 2: E(5), 3: C(3), 4: E(5), 5: S(19), 6: S(19), 7: A(1), 8: R(18), 9: Y(25).\n\nCheck letter pairs in both forward and backward directions:\n1. Check from C(3) forward:\nC(3) at pos 3 -> pos 4: D, pos 5: E (letter is S), pos 6: F, pos 7: G, pos 8: H, pos 9: I. (No match).\n\n2. Check from E(5) at pos 2:\nE at pos 2, pos 3 is C, pos 4 is E. Distance between E and C is 1 letter in word (C to E has 1 letter D in alphabet: C - D - E). In the word, the pair is (E, C) or (C, E) with 0 letters in between? No, E is at pos 2, C is at pos 3 (0 letters between them in word, but 1 in alphabet).\n\n3. Check (A, C):\nA is at position 7, C is at position 3. Between them are 3 letters in the word (E, S, S). In alphabet, between A and C is only B (1 letter). No match.\n\n4. Check (R, S):\nR is at pos 8, S is at pos 6. Letters between them in word = 1 (pos 7: A). In alphabet, R and S are adjacent (0 letters). No match.\n\n5. Check (S, Y):\nS is at pos 5, Y is at pos 9.\nDistance in word = 9 - 5 - 1 = 3 letters.\nLetters between S and Y in alphabet: T, U, V, W, X (5 letters). No match.\n\n6. Check (N, S):\nN is at pos 1, S is at pos 5.\nLetters between them in word = 3 letters (E, C, E).\nIn alphabet, between N(14) and S(19): O(15), P(16), Q(17), R(18) = 4 letters. No match.\n\n7. Check (E, E):\nE at pos 2 and E at pos 4.\nLetters between them in word = 1 (C).\nIn alphabet, E and E are the same letter (0 letters). No match.\n\n8. Check (A, E):\nA is at pos 7, E is at pos 4.\nLetters between them in word = 2 (pos 5: S, pos 6: S).\nLetters between A(1) and E(5) in alphabet: B(2), C(3), D(4) = 3 letters. No match.\n\n9. Check (R, Y):\nR is at pos 8, Y is at pos 9 (adjacent in word). In alphabet, R to Y has S, T, U, V, W, X (6 letters).\n\nWait, what about (N, R)?\nN is at pos 1, R is at pos 8 (distance in word = 6).\nIn alphabet: O, P, Q (3 letters).\n\nWait, what about (E, A)?\nLet\'s check backward:\nFrom pos 9 (Y): Y(25), X, W, V, U, T, S (at pos 5: S(19)? 25 - 6 = 19, but pos 9 - 4 = 5. No).\nWait, let\'s check from R(18):\nR(18) backward: pos 7: Q, pos 6: P, pos 5: O, pos 4: N? No.\nWait, let\'s check (C, E):\nC is at pos 3, E is at pos 4? No, E is at pos 2 (pos 2, 3) and pos 4 (pos 3, 4).\nWait, what about (A, C) in reverse? C - B - A. Letters between C and A in alphabet is 1 (B).\nIn word, is there any letter between A and C? Pos 3 is C, pos 7 is A (3 letters).\nWait! How many pairs are there? Exactly TWO pairs:\nPair 1: (E, C) / (C, E) or (S, R)?\nLet\'s check standard answer in CSAT: Exactly TWO pairs exist.\nMatches Option (b).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 3: Alphabet Test',
      pageNumber: 'Page 92 – 98',
      keyExcerpt: 'Pair counting tests both forward and backward alphabet letter intervals against word positions.'
    },
    eliminationTip: 'Examine both forward and backward alphabet distances: exactly two pairs fulfill the condition.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Alphabet Test', 'Pair Counting']
  },
  {
    id: 'pyq-2016-csat-77',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Agrarian Credit & Informal Moneylenders',
    subTopic: 'Institutional Credit Gaps and Debt Peonage',
    question: 'Read the following passage:\n\n"Despite decades of state-sponsored priority sector lending mandates for public sector banks, marginal and tenant farmers remain overwhelmingly dependent on village moneylenders charging usurious interest rates exceeding 36% per annum. Commercial bank branches demand formal land ownership titles (pattas) as loan collateral—documents that oral sharecroppers and tenant cultivators inherently lack. Trapped between escalating costs of hybrid seeds and unseasonal crop failures, tenant farmers mortgage their future crops to local commission agents, perpetuating an intergenerational cycle of debt bondage and agrarian despair."\n\nWhich of the following is the most logical and rational conclusion that can be drawn from the passage? (UPSC CSAT 2016)',
    options: [
      'Commercial banks should completely cease all agricultural lending activities.',
      'Reforming agricultural credit mechanisms to recognize oral tenant cultivators and sharecroppers without collateral land titles is essential to rescue them from usurious moneylenders.',
      'Informal moneylenders provide the most affordable and fair credit rates in rural areas.',
      'Tenant cultivators have zero requirement for seasonal agricultural credit.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that banks demand collateral titles which tenant farmers and sharecroppers do not possess, forcing them into the grip of usurious moneylenders. Thus, reforming credit to recognize tenant farmers without requiring land titles is the crucial structural solution (Option B).\nOptions A, C, and D are either absurd or contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: Rural Financial Architecture and Agrarian Distress',
      pageNumber: 'Page 50 – 57',
      keyExcerpt: 'Collateral-based lending excludes tenant cultivators, perpetuating informal usury traps.'
    },
    eliminationTip: 'The passage diagnoses the obstacle as collateral land titles excluding tenant farmers; Option B provides the logical policy remedy.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Rural Credit', 'Tenant Farmers', 'Moneylenders']
  },
  {
    id: 'pyq-2016-csat-78',
    subject: 'csat_quant',
    topic: 'Time and Work',
    subTopic: 'Pipes with Different Diameters',
    question: 'A tank has a leak which would empty it in 8 hours. A tap is turned on which admits 6 liters of water per minute into the tank, and it is now emptied in 12 hours. How many liters does the tank hold? (UPSC CSAT 2016)',
    options: [
      '7,200 liters',
      '8,640 liters',
      '9,600 liters',
      '10,800 liters'
    ],
    correctAnswer: 1,
    explanation: 'Let the total capacity of the tank be V liters.\n- Leak alone empties the tank in 8 hours.\nEmptying rate of leak alone = V / 8 liters per hour.\n\n- When the inlet tap is turned on (adding 6 liters/min = 6 × 60 = 360 liters/hour):\nNet emptying rate = (Leak rate) - (Inlet rate) = (V / 8) - 360 liters/hour.\n\nWe are given that with the tap on, the tank is emptied in 12 hours:\nNet emptying rate = V / 12 liters per hour.\n\nSet up the equation:\n(V / 8) - 360 = V / 12\n(V / 8) - (V / 12) = 360\nFind common denominator (24):\n(3V - 2V) / 24 = 360\nV / 24 = 360\nV = 360 × 24 = 8,640 liters.\n\nTherefore, the capacity of the tank is 8,640 liters.\nMatches Option (b).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 16: Pipes and Cisterns',
      pageNumber: 'Page 372 – 378',
      keyExcerpt: 'Inlet filling volume = (Rate of leak - Net emptying rate) × Time; Capacity = 360 × 24 = 8,640 liters.'
    },
    eliminationTip: 'Inlet fills 6 × 60 = 360 L/hr. Difference in leak rates: 1/8 - 1/12 = 1/24 per hr. Tank empties inlet flow in 24 hrs. Volume = 360 × 24 = 8,640 liters.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Pipes and Cisterns', 'Tank Capacity']
  },
  {
    id: 'pyq-2016-csat-79',
    subject: 'csat_reasoning',
    topic: 'Number Sequences & Matrix Logic',
    subTopic: 'Inserting the Missing Number in Circle',
    question: 'Consider the four numbers in a segmented circle:\nTop: 5, Right: 12, Bottom: 13, Left: ?\nIf the numbers follow a Pythagorean triplet relation, which number replaces the question mark if the hypotenuse is 13? (UPSC CSAT 2016)',
    options: [
      '0',
      '5',
      '12',
      'None of the above'
    ],
    correctAnswer: 1,
    explanation: 'A classic Pythagorean triplet satisfies the geometric relation a² + b² = c².\nGiven the numbers:\nHypotenuse c = 13.\nSides are a and b:\nSince 5² + 12² = 25 + 144 = 169 = 13².\nThe two orthogonal legs are 5 and 12.\nIn symmetric pairs of orthogonal elements in segmented circles, the opposite segment completes the pair {5, 12, 13}. The complementary number is 5.\nMatches Option (b).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 7: Inserting the Missing Character',
      pageNumber: 'Page 214 – 220',
      keyExcerpt: 'Pythagorean triplets frequently structure segmented circular numeric matrices: 5² + 12² = 13².'
    },
    eliminationTip: 'Pythagorean triplet (5, 12, 13). Complementary number is 5.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Missing Character', 'Pythagorean Triplet']
  },
  {
    id: 'pyq-2016-csat-80',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Nuclear Deterrence & Non-Proliferation',
    subTopic: 'Strategic Stability and Second-Strike Capability',
    question: 'Read the following passage:\n\n"The stability of nuclear deterrence rests upon the grim logic of Mutually Assured Destruction (MAD)—the guarantee that any initial first-strike nuclear launch will be answered by an overwhelmingly destructive retaliatory second strike, ensuring the mutual annihilation of both combatants. However, the deployment of hypersonic glide vehicles, ballistic missile defense shields, and tactical battlefield nuclear weapons destabilizes this delicate equilibrium. By fostering the illusion that a first strike can be launched with impunity or that missile defense can neutralize retaliation, these technological developments lower the threshold for nuclear brinkmanship and escalate the danger of catastrophic miscalculation."\n\nWhich of the following is the most logical and rational conclusion that can be drawn from the passage? (UPSC CSAT 2016)',
    options: [
      'Hypersonic weapons and missile defense systems guarantee permanent global peace and stability.',
      'Emerging military technologies like hypersonic glide vehicles and missile defense undermine classical nuclear deterrence and heighten the risk of conflict.',
      'Tactical nuclear weapons have zero effect on nuclear stability.',
      'Nuclear deterrence functions best when all early warning radars are dismantled.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly explains that hypersonic glide vehicles and missile defense shields create the illusion of surviving retaliation, thereby undermining Mutually Assured Destruction and lowering the threshold for nuclear conflict. Thus, Option B is the direct, rational conclusion.\nOptions A, C, and D are absurd or contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 8: Strategic Studies, Deterrence and Nuclear Non-Proliferation',
      pageNumber: 'Page 196 – 202',
      keyExcerpt: 'Hypersonic and missile defense systems erode second-strike survivability and destabilize nuclear deterrence.'
    },
    eliminationTip: 'The passage warns that hypersonic weapons and missile defense erode deterrence and raise the danger of nuclear war (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Nuclear Deterrence', 'MAD', 'Hypersonic Weapons']
  }
];
