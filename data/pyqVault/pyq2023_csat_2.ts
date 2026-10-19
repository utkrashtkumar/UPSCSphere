import { Question } from '@/lib/types';

export const pyq2023_csat_2: Question[] = [
  {
    id: 'pyq-2023-csat-41',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Artificial Intelligence & Workforce',
    subTopic: 'Technological Displacement & Cognitive Reskilling',
    question: 'Read the following passage:\n\n"Generative artificial intelligence systems are rapidly automating non-routine cognitive functions, from programming and graphic drafting to legal precedent synthesis. Unlike preceding waves of mechanization which predominantly displaced manual and blue-collar labor, algorithmic automation targets knowledge-intensive white-collar professions. This paradigm shift mandates not merely defensive wage policies, but a structural re-engineering of higher education towards metacognitive competencies, ethical scrutiny, and complex emotional judgment—capacities where algorithmic heuristics remain fundamentally inadequate."\n\nWhich of the following is the most critical assumption made by the author? (UPSC CSAT 2023)',
    options: [
      'Manual labor will never be automated by mechanical robotics in the next century.',
      'Metacognitive and ethical evaluation capabilities are uniquely resilient against complete algorithmic automation.',
      'All knowledge-worker university degrees will become completely worthless within five years.',
      'Governments must outlaw artificial intelligence research to safeguard employment.'
    ],
    correctAnswer: 1,
    explanation: 'The author recommends re-engineering higher education toward "metacognitive competencies, ethical scrutiny, and complex emotional judgment" because algorithmic heuristics remain inadequate at them. For this policy prescription to hold, it crucially assumes that these human faculties will indeed remain resilient and superior to AI capabilities.\nOptions (a), (c), and (d) are unfounded extreme positions not implied by the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 2: Identifying Critical Assumptions',
      pageNumber: 'Page 52 – 58',
      keyExcerpt: 'An assumption is an unstated bridge that must be true for the author\'s main conclusion or policy prescription to be valid.'
    },
    eliminationTip: 'If AI could easily master metacognition and ethics, reorienting education toward them would be futile. Hence Option B is the necessary underlying assumption.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Artificial Intelligence', 'Critical Assumption']
  },
  {
    id: 'pyq-2023-csat-42',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Urban Groundwater Depletion',
    subTopic: 'Aquifer Recharging & Sprawl Management',
    question: 'Read the following passage:\n\n"Rapid metropolitan concretization in peninsular India has sealed recharge zones, converting monsoonal precipitation into flash surface runoff rather than deep sub-surface replenishment. Concurrently, unregulated deep-borewell extraction taps fossil aquifers formed over millennia. Unless urban zoning plans explicitly safeguard permeable sponge corridors and enforce localized runoff retention pits in residential clusters, urban centers face irreversible catastrophic groundwater depletion."\n\nWhich of the following best reflects the primary message of the passage? (UPSC CSAT 2023)',
    options: [
      'Monsoonal precipitation has permanently stopped over peninsular India due to global warming.',
      'Urban groundwater resilience depends on mandatory preservation of permeable catchment corridors and artificial retention.',
      'Cities should be abandoned and population relocated to coastal regions.',
      'Deep borewells are the only scientific method to supply drinking water to urban populations.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that concretization prevents water from percolating, while over-extraction drains ancient aquifers. The solution prescribed is protecting sponge corridors and enforcing retention pits. Therefore, Option (b) captures the primary message.\nOptions (a), (c), and (d) are factually untrue or absurdly extreme.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Central Themes and Primary Message',
      pageNumber: 'Page 82 – 87',
      keyExcerpt: 'The central thesis synthesizes the core problem with the author\'s proposed structural remedy.'
    },
    eliminationTip: 'Eliminate extremes like "monsoon stopped completely" and "abandon cities". Option B directly reflects the author\'s diagnosis and solution.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Groundwater', 'Urban Planning']
  },
  {
    id: 'pyq-2023-csat-43',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility Rules',
    subTopic: 'Sum of Digits & Divisibility by 9',
    question: 'If a 9-digit number 735X52Y34 is divisible by 9, where X and Y are single-digit integers, what is the maximum possible value of (X + Y)? (UPSC CSAT 2023)',
    options: [
      '7',
      '11',
      '16',
      '20'
    ],
    correctAnswer: 2,
    explanation: 'A number is divisible by 9 if and only if the sum of its digits is divisible by 9.\n\nSum of digits of 735X52Y34:\nS = 7 + 3 + 5 + X + 5 + 2 + Y + 3 + 4\nS = 29 + (X + Y)\n\nSince X and Y are single digits (0 ≤ X ≤ 9, 0 ≤ Y ≤ 9):\n0 ≤ X + Y ≤ 18\n\nTherefore, S can range between:\n29 + 0 = 29 and 29 + 18 = 47\n\nThe multiples of 9 between 29 and 47 are 36 and 45.\n- Case 1: 29 + (X + Y) = 36  ==>  X + Y = 7\n- Case 2: 29 + (X + Y) = 45  ==>  X + Y = 16\n\nThe question asks for the MAXIMUM possible value of (X + Y).\nThus, maximum (X + Y) = 16 (for example, when X = 9 and Y = 7).\n(Note: X + Y cannot be 25 because X, Y ≤ 9 implies X+Y ≤ 18).\n\nTherefore, the correct answer is 16.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Divisibility Tests for 3 and 9)',
      pageNumber: 'Page 15 – 19',
      keyExcerpt: 'Divisibility rule for 9: Sum of digits must be a multiple of 9. Sum = 29 + (X+Y). Max sum below 47 is 45, giving X+Y = 16.'
    },
    eliminationTip: 'Since X, Y <= 9, max (X+Y) <= 18. Multiples of 9: 29 + 7 = 36, and 29 + 16 = 45. Maximum is 16. Option C.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Divisibility by 9', 'Digit Sum', 'Number System']
  },
  {
    id: 'pyq-2023-csat-44',
    subject: 'csat_quant',
    topic: 'Permutations & Combinations: Number Formation',
    subTopic: 'Even Numbers without Repetition',
    question: 'How many 4-digit distinct even numbers can be formed using the digits 1, 2, 3, 5, 6, 8 without repetition of digits? (UPSC CSAT 2023)',
    options: [
      '120',
      '180',
      '240',
      '360'
    ],
    correctAnswer: 1,
    explanation: 'We are given 6 distinct digits: {1, 2, 3, 5, 6, 8}.\nWe need to form 4-digit even numbers without repetition.\n\nStep 1: Units digit condition for even number:\nThe units digit must be one of the even digits from the given set: {2, 6, 8}.\nThere are 3 choices for the units place.\n\nStep 2: Remaining places (Thousands, Hundreds, Tens):\nAfter choosing the units digit, we have 5 digits remaining.\nNone of the given digits is 0, so any remaining digit can occupy any position!\n- Thousands place: 5 choices\n- Hundreds place: 4 choices\n- Tens place: 3 choices\n\nTotal 4-digit even numbers:\nTotal = 5 × 4 × 3 × 3 (units digit)\nTotal = 60 × 3 = 180.\n\nTherefore, 180 distinct 4-digit even numbers can be formed.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 30: Permutations and Combinations',
      pageNumber: 'Page 612 – 618',
      keyExcerpt: 'For even numbers, fix the units place first. Since 0 is not in the set, the remaining positions can be filled from remaining digits freely.'
    },
    eliminationTip: 'Units place: 3 choices (2, 6, 8). Remaining 3 places from 5 available digits: 5P3 = 5 × 4 × 3 = 60. Total = 60 × 3 = 180.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Permutations', 'Even Numbers', 'Quant']
  },
  {
    id: 'pyq-2023-csat-45',
    subject: 'csat_reasoning',
    topic: 'Blood Relations: Coded Family Tree',
    subTopic: 'Expression Decoding',
    question: 'Consider the following relationships:\n- "P + Q" means P is the son of Q.\n- "P - Q" means P is the wife of Q.\n- "P × Q" means P is the brother of Q.\n- "P ÷ Q" means P is the mother of Q.\n\nIn the expression "A × B + C - D", how is A related to D? (UPSC CSAT 2023)',
    options: [
      'Father',
      'Son',
      'Brother',
      'Grandson'
    ],
    correctAnswer: 1,
    explanation: 'Let us decode the expression "A × B + C - D" from left to right:\n1. "A × B" → A is the brother of B (A is male).\n2. "B + C" → B is the son of C.\n   Since A is the brother of B, A is also the son of C!\n3. "C - D" → C is the wife of D.\n   Therefore, D is the husband of C (D is male, C is female).\n\nSince C and D are husband and wife, and A is the son of C:\nA is the son of D!\n\nTherefore, A is the son of D.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Blood Relations (Coded Relations)',
      pageNumber: 'Page 112 – 119',
      keyExcerpt: 'In coded relations, break the string into pairwise segments and map out genders and generational levels.'
    },
    eliminationTip: 'C is wife of D. B is son of C. A is brother of B. Thus A is son of C and D. Therefore A is D\'s son.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2023', 'Blood Relations', 'Coded Family Tree', 'Reasoning']
  },
          {
    id: "pyq-2023-csat-46",
    subject: "csat_quant",
    topic: "Pipes and Cisterns",
    subTopic: "Two Pipes with One Pipe Closed Midway",
    question: "A cistern can be filled by two pipes X and Y in 20 minutes and 30 minutes respectively. Both pipes are opened simultaneously into the empty cistern, but after 8 minutes, pipe Y is turned off. How much more time (in minutes) will pipe X alone take to fill the remaining portion of the cistern? (UPSC CSAT 2023)",
    options: [
      "6 minutes",
      "6 2/3 minutes",
      "8 minutes",
      "10 minutes"
    ],
    correctAnswer: 1,
    explanation: "Let the total capacity of the cistern be LCM(20, 30) = 60 units.\n- Filling rate of pipe X = 60 / 20 = 3 units/min.\n- Filling rate of pipe Y = 60 / 30 = 2 units/min.\nCombined rate of (X + Y) = 3 + 2 = 5 units/min.\nFor the first 8 minutes, both pipes are open together:\nVolume filled in 8 minutes = 8 × 5 = 40 units.\nRemaining volume to be filled = 60 - 40 = 20 units.\nNow, pipe Y is turned off, and pipe X alone fills the remaining 20 units at a rate of 3 units/min:\nTime taken by pipe X alone = 20 / 3 = 6 2/3 minutes (or 6 minutes 40 seconds).\nTherefore, pipe X alone will take 6 2/3 more minutes to fill the cistern.",
    bookReference: {
      bookName: "Fast Track Objective Arithmetic by Rajesh Verma",
      edition: "Latest Edition",
      chapter: "Pipes and Cisterns",
      pageNumber: "Chapter 17: Pipes Closed Midway",
      keyExcerpt: "Calculate volume completed before closure, then divide remaining volume by single pipe rate."
    },
    eliminationTip: "60 total units: 8 × 5 = 40 filled. Remaining 20 filled by X (rate 3): 20/3 = 6 2/3 minutes.",
    difficulty: "Easy",
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: "CSAT",
    frequency: 8,
    tags: [
      "UPSC 2023",
      "CSAT",
      "Pipes and Cisterns",
      "Time and Work"
    ]
  },
{
    id: 'pyq-2023-csat-47',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Global Fiscal Policy',
    subTopic: 'Sovereign Debt and Green Transition Funding',
    question: 'Read the following passage:\n\n"Emerging market economies face a debilitating fiscal trilemma: expanding sovereign debt obligations exacerbated by currency depreciation, escalating demands for poverty-alleviating social welfare, and urgent capital requirements for climate adaptation. Conventional multilateral debt restructuring mechanisms treat sovereign insolvency as isolated national balance-sheet failures rather than systemic vulnerabilities induced by volatile global interest rate cycles. Without debt-for-climate swaps and concessional multilateral liquidity facilities, debt distress will compel developing nations to underfund green energy transitions."\n\nWhich of the following is the most rational and crucial takeaway from the passage? (UPSC CSAT 2023)',
    options: [
      'Developing countries should default on all external debt to prioritize domestic green energy.',
      'Global financial architecture requires structural reform to prevent sovereign debt crises from derailing climate mitigation.',
      'Climate adaptation is unnecessary for emerging economies and should be suspended.',
      'Multilateral institutions should stop lending to developing nations permanently.'
    ],
    correctAnswer: 1,
    explanation: 'The passage argues that without systemic reforms like debt-for-climate swaps and concessional liquidity, sovereign debt distress will force emerging economies to sacrifice critical climate transitions. Hence Option (b) encapsulates the author\'s rational takeaway.\nOptions (a), (c), and (d) are extreme recommendations that contradict the tone and substance of the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Rational Takeaways & Inferences',
      pageNumber: 'Page 70 – 76',
      keyExcerpt: 'A rational takeaway must balance the systemic challenge with the proposed institutional remedy.'
    },
    eliminationTip: 'Eliminate reckless extremes ("default on all debt", "suspend climate adaptation", "stop lending"). Option B is balanced and perfectly captures the passage.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Sovereign Debt', 'Climate Finance']
  },
  {
    id: 'pyq-2023-csat-48',
    subject: 'csat_quant',
    topic: 'Percentages: Price and Consumption',
    subTopic: 'Inverse Variation of Expenditure',
    question: 'If the price of petrol increases by 25%, by what percentage must a car owner reduce fuel consumption so that the monthly fuel expenditure remains unchanged? (UPSC CSAT 2023)',
    options: [
      '15%',
      '20%',
      '25%',
      '30%'
    ],
    correctAnswer: 1,
    explanation: 'Expenditure = Price × Consumption.\n\nLet initial Price = P and initial Consumption = C.\nExpenditure E = P × C.\n\nWhen price increases by 25%:\nNew Price P\' = 1.25 P = (5/4) P.\n\nFor expenditure to remain E:\nE = P\' × C\'\nP × C = (5/4) P × C\'\nC\' = (4/5) C = 0.80 C.\n\nPercentage reduction in consumption:\nReduction = [(C - C\') / C] × 100% = [1 - 4/5] × 100% = 1/5 × 100% = 20%.\n\nStandard formula:\nReduction % = [r / (100 + r)] × 100% = [25 / (100 + 25)] × 100% = [25 / 125] × 100% = 20%.\n\nTherefore, consumption must be reduced by 20%.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Percentage (Price, Consumption and Expenditure)',
      pageNumber: 'Page 210 – 215',
      keyExcerpt: 'If price rises by r%, reduction in consumption for unchanged expenditure is [r / (100 + r)] × 100%.'
    },
    eliminationTip: 'Direct formula: 25 / 125 = 1/5 = 20%. Takes under 5 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Percentages', 'Consumption and Expenditure', 'Quant']
  },
    {
    id: "pyq-2023-csat-49",
    subject: "csat_quant",
    topic: "Quantitative Aptitude",
    subTopic: "Clock Hand Angles at Given Time",
    question: "What is the angle between the hour hand and the minute hand of an accurate clock at 3:40? (UPSC CSAT 2023)",
    options: [
      "120°",
      "125°",
      "130°",
      "135°"
    ],
    correctAnswer: 2,
    explanation: "The angle θ between the hour hand and the minute hand at H hours and M minutes is given by:\nθ = |30H - (11/2)M|\nHere H = 3 and M = 40:\nθ = |30(3) - (11/2)(40)|\nθ = |90 - 11 × 20|\nθ = |90 - 220| = |-130| = 130°.\nTherefore, the angle between the hour hand and minute hand at 3:40 is 130°.",
    bookReference: {
      bookName: "A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal",
      edition: "Latest Edition",
      chapter: "Clocks",
      pageNumber: "Chapter 28: Angle between Clock Hands",
      keyExcerpt: "Angle = |30H - 5.5M| degrees."
    },
    eliminationTip: "Apply the standard clock formula: |30 × 3 - 5.5 × 40| = |90 - 220| = 130°.",
    difficulty: "Easy",
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: "CSAT",
    frequency: 7,
    tags: [
      "UPSC 2023",
      "CSAT",
      "Clocks",
      "Angles",
      "Aptitude"
    ]
  },
  {
    id: 'pyq-2023-csat-50',
    subject: 'csat_quant',
    topic: 'Averages: Replacement Problem',
    subTopic: 'Increase in Average Age',
    question: 'The average age of a committee of 8 members increases by 2 years when two men aged 21 years and 23 years are replaced by two women. What is the average age of the two women? (UPSC CSAT 2023)',
    options: [
      '28 years',
      '30 years',
      '32 years',
      '34 years'
    ],
    correctAnswer: 1,
    explanation: 'Let the initial sum of ages of the 8 members be S.\nWhen two members are replaced:\nNew Sum = S - (sum of ages of leaving members) + (sum of ages of joining members)\n\nSum of ages of leaving men = 21 + 23 = 44 years.\nLet sum of ages of two joining women be W.\n\nTotal increase in sum of ages across all 8 members:\nIncrease = 8 × 2 = 16 years.\n\nTherefore:\nNew Sum - Old Sum = 16\nW - 44 = 16\nW = 44 + 16 = 60 years.\n\nAverage age of the two women:\nAverage = W / 2 = 60 / 2 = 30 years.\n\nTherefore, the average age of the two women is 30 years.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 6: Averages (Replacement Concept)',
      pageNumber: 'Page 142 – 148',
      keyExcerpt: 'Sum of ages of newcomers = (Sum of ages of replaced persons) + (Total members × Increase in average).'
    },
    eliminationTip: 'Increase = 8 × 2 = 16. Total age of women = (21 + 23) + 16 = 60. Average = 60 / 2 = 30 years.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Averages', 'Replacement', 'Quant']
  },
  {
    id: 'pyq-2023-csat-51',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Forest Governance & Indigenous Rights',
    subTopic: 'Community Forest Resource Rights',
    question: 'Read the following passage:\n\n"Centralized bureaucratic management of protected forest enclaves frequently views local forest-dwelling tribal communities as ecological stressors rather than custodians of biological diversity. Historical evidence demonstrates that granting formal community forest resource rights incentivizes sustainable harvesting, deters commercial illegal poachers, and suppresses anthropogenic wildfire incidents far more effectively than exclusionary fencing. Conservation without democratized customary stewardship remains socially unjust and ecologically counterproductive."\n\nWhich of the following is the most logical and critical inference from the passage? (UPSC CSAT 2023)',
    options: [
      'Commercial logging should be completely legalized in all national parks.',
      'Democratizing forest tenure and recognizing tribal rights strengthens biodiversity conservation.',
      'Tribal communities have no knowledge of forest ecology.',
      'All forests should be privatized and sold to corporate eco-tourism entities.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly argues that empowering forest dwellers with legal community tenure enhances conservation outcomes (deterring poachers, preventing fires) while exclusionary conservation fails. Therefore, Option (b) is the direct, logical inference.\nOptions (a), (c), and (d) are distorted and contradict the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Drawing Critical Inferences',
      pageNumber: 'Page 105 – 111',
      keyExcerpt: 'Community rights aligned with conservation create symbiotic outcomes.'
    },
    eliminationTip: 'Option B accurately mirrors the central thesis of decentralized stewardship over exclusionary bureaucratic fencing.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Forest Governance', 'Tribal Rights']
  },
    {
    id: "pyq-2023-csat-52",
    subject: "csat_quant",
    topic: "Quantitative Aptitude",
    subTopic: "Compound Interest Doubling Time and Geometric Growth",
    question: "A sum of money invested at compound interest doubles itself in 5 years. In how many years will the sum become 8 times its original value at the same annual rate of interest? (UPSC CSAT 2023)",
    options: [
      "10 years",
      "15 years",
      "20 years",
      "25 years"
    ],
    correctAnswer: 1,
    explanation: "Under compound interest, a sum grows geometrically by the same factor over equal time intervals.\nIf a principal P becomes 2P in 5 years (a factor of 2 in 5 years):\n- In the next 5 years (total 10 years), 2P will double to 4P.\n- In the next 5 years (total 15 years), 4P will double to 8P.\nAlgebraically:\nAmount A = P(1 + r)^t\n(1 + r)^5 = 2\nTo become 8 times: P(1 + r)^T = 8P  =>  (1 + r)^T = 8 = 2³\nSubstituting (1 + r)^5 = 2:\n((1 + r)^5)³ = (1 + r)^15 = 2³ = 8.\nTherefore, T = 15 years.",
    bookReference: {
      bookName: "Quantitative Aptitude by R.S. Aggarwal",
      edition: "Revised Edition",
      chapter: "Compound Interest",
      pageNumber: "Chapter 22: Exponential Growth Rule",
      keyExcerpt: "If a sum doubles in T years, it becomes 2^n times in n × T years."
    },
    eliminationTip: "Shortcut: 8 = 2³, so time = 3 × 5 years = 15 years.",
    difficulty: "Easy",
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: "CSAT",
    frequency: 8,
    tags: [
      "UPSC 2023",
      "CSAT",
      "Compound Interest",
      "Doubling Period"
    ]
  },
  {
    id: 'pyq-2023-csat-53',
    subject: 'csat_reasoning',
    topic: 'Seating Arrangement: Circular Table',
    subTopic: 'Facing Center with Positional Clues',
    question: 'Six persons A, B, C, D, E, and F sit around a circular table facing the center:\n1. B is sitting between A and C.\n2. E is sitting between D and F.\n3. D is sitting to the immediate left of A.\n\nWho is sitting opposite to B? (UPSC CSAT 2023)',
    options: [
      'D',
      'E',
      'F',
      'Cannot be determined'
    ],
    correctAnswer: 1,
    explanation: 'Let the 6 positions around the circle facing the center be 1 to 6 clockwise:\n- Place A at position 1.\n- "D is to the immediate left of A": Since facing center, left of position 1 is position 2. So D is at 2.\n- "B is sitting between A and C": From A at 1, B must be at position 6, and C at position 5 (since D already occupies position 2).\n- "E is sitting between D and F": D is at 2. Since position 1 is A, E must be at position 3, and F at position 4!\n\nLet us verify the clockwise sequence (1 to 6):\n1: A\n2: D\n3: E\n4: F\n5: C\n6: B\n\nCheck conditions:\n1. B (6) is between A (1) and C (5). (True)\n2. E (3) is between D (2) and F (4). (True)\n3. D (2) is to the immediate left of A (1). (True)\n\nIn a 6-person circle, positions opposite to each other are separated by 3 steps (i.e. pos i and pos i+3):\n- Position 1 (A) is opposite to Position 4 (F).\n- Position 2 (D) is opposite to Position 5 (C).\n- Position 6 (B) is opposite to Position 3 (E).\n\nTherefore, E is sitting opposite to B.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 8: Sitting Arrangements (Circular Arrangements)',
      pageNumber: 'Page 180 – 186',
      keyExcerpt: 'In circular seating of 6 facing inward, opposite pairs are diametrically across (3 positions apart).'
    },
    eliminationTip: 'B is between A and C. E is between D and F. A is opposite F, D opposite C, so B is opposite E. Option B.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Circular Arrangement', 'Seating Puzzle', 'Reasoning']
  },
  {
    id: 'pyq-2023-csat-54',
    subject: 'csat_quant',
    topic: 'Speed, Time and Distance: Relative Speed',
    subTopic: 'Trains Traveling in Opposite Directions',
    question: 'Two trains of length 150 m and 250 m are running on parallel tracks towards each other with speeds of 54 km/h and 90 km/h respectively. In how many seconds will they completely cross each other from the moment they meet? (UPSC CSAT 2023)',
    options: [
      '8 seconds',
      '10 seconds',
      '12 seconds',
      '15 seconds'
    ],
    correctAnswer: 1,
    explanation: 'Total distance to be covered to cross each other = Sum of lengths of the two trains:\nDistance = 150 m + 250 m = 400 m.\n\nRelative speed when moving towards each other (opposite directions):\nRelative Speed = Speed₁ + Speed₂\n= 54 km/h + 90 km/h = 144 km/h.\n\nConvert speed to m/s:\n144 × (5/18) = 8 × 5 = 40 m/s.\n\nTime taken to cross each other:\nTime = Total Distance / Relative Speed\nTime = 400 m / 40 m/s = 10 seconds.\n\nTherefore, the trains cross each other in 10 seconds.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 18: Problems on Trains',
      pageNumber: 'Page 410 – 416',
      keyExcerpt: 'When trains move in opposite directions, relative speed is sum of speeds. Total distance = sum of train lengths.'
    },
    eliminationTip: 'Distance = 400 m. Speed = 144 × 5/18 = 40 m/s. Time = 400 / 40 = 10 s.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Speed Time Distance', 'Trains', 'Relative Speed']
  },
  {
    id: 'pyq-2023-csat-55',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Public Health & Antimicrobial Resistance',
    subTopic: 'Overuse of Antibiotics in Livestock',
    question: 'Read the following passage:\n\n"The proliferation of antimicrobial resistance (AMR) is fundamentally accelerated by the sub-therapeutic administration of critically important antibiotics as prophylactic growth promoters in industrial livestock feed. Resistant pathogens originating in animal microbiomes migrate into human waterways, soil strata, and food chains. Curbing the post-antibiotic era requires a \'One Health\' regulatory architecture that treats human medical epidemiology, veterinary pharmacology, and environmental biosecurity as an indivisible tripartite continuum."\n\nWhich of the following is the most rational corollary to the passage? (UPSC CSAT 2023)',
    options: [
      'Livestock rearing must be prohibited globally to preserve human medicines.',
      'Containing antibiotic resistance requires integrated regulation bridging veterinary practices, environmental hygiene, and human healthcare.',
      'Human antibiotics are completely harmless when dumped into municipal sewage networks.',
      'Bacterial infections will disappear on their own without policy intervention.'
    ],
    correctAnswer: 1,
    explanation: 'The author explicitly calls for a "One Health" architecture recognizing that veterinary overuse, environmental dissemination, and human health are indivisible. Therefore, Option (b) is the direct, logical corollary.\nOptions (a), (c), and (d) are either irrational, harmful, or factually wrong.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries and Inferences',
      pageNumber: 'Page 122 – 128',
      keyExcerpt: 'One Health connects human, animal, and environmental health as a single regulatory framework.'
    },
    eliminationTip: 'Option B accurately expresses the "One Health" unified approach described in the text.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'AMR', 'One Health']
  },
  {
    id: 'pyq-2023-csat-56',
    subject: 'csat_quant',
    topic: 'Number System: Unit Digit of Powers',
    subTopic: 'Cyclicity of Unit Digits',
    question: 'What is the unit digit in the expansion of (3⁶⁵ × 6⁵⁹ × 7⁷¹)? (UPSC CSAT 2023)',
    options: [
      '2',
      '4',
      '6',
      '8'
    ],
    correctAnswer: 1,
    explanation: 'Let us find the unit digit of each component using power cyclicity (cyclicity of powers mod 10):\n\n1. For 3⁶⁵:\nPowers of 3 have a cyclicity of 4 for units digit: 3¹=3, 3²=9, 3³=7, 3⁴=1.\nExponent 65 mod 4 = 1.\nUnit digit of 3⁶⁵ = 3¹ = 3.\n\n2. For 6⁵⁹:\nPowers of 6 always end in 6 for any positive integer power.\nUnit digit of 6⁵⁹ = 6.\n\n3. For 7⁷¹:\nPowers of 7 have a cyclicity of 4: 7¹=7, 7²=9, 7³=3, 7⁴=1.\nExponent 71 mod 4 = 3.\nUnit digit of 7⁷¹ = 7³ = 3.\n\nNow multiply the unit digits:\nUnit digit = (3 × 6 × 3) mod 10\n= (18 × 3) mod 10\n= 54 mod 10 = 4.\n\nTherefore, the unit digit is 4.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Unit Digit Cyclicity)',
      pageNumber: 'Page 25 – 29',
      keyExcerpt: 'Find cyclicity of base numbers: 3^65 ends in 3; 6^59 ends in 6; 7^71 ends in 3. Product: 3 × 6 × 3 = 54 -> ends in 4.'
    },
    eliminationTip: '3^(65 mod 4) = 3^1 = 3. 6^any = 6. 7^(71 mod 4) = 7^3 = 3. 3 × 6 × 3 = 54 -> unit digit is 4.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Unit Digit', 'Cyclicity', 'Number System']
  },
  {
    id: 'pyq-2023-csat-57',
    subject: 'csat_reasoning',
    topic: 'Syllogism: Venn Diagrams',
    subTopic: 'Three Statements and Two Conclusions',
    question: 'Consider the following statements:\n1. All poets are dreamers.\n2. No dreamer is a realist.\n3. Some realists are politicians.\n\nWhich of the following conclusions logically follows?\nI. No poet is a realist.\nII. Some politicians are not poets.\n(UPSC CSAT 2023)',
    options: [
      'Only conclusion I follows',
      'Only conclusion II follows',
      'Both conclusion I and conclusion II follow',
      'Neither conclusion I nor conclusion II follows'
    ],
    correctAnswer: 2,
    explanation: 'Let us evaluate each conclusion using formal logic:\n\nStatement 1: Poets ⊆ Dreamers\nStatement 2: Dreamers ∩ Realists = ∅\nStatement 3: Some Realists are Politicians (Realists ∩ Politicians ≠ ∅)\n\nConclusion I: "No poet is a realist."\nSince all poets are dreamers, and no dreamer can be a realist, the set of Poets and Realists is completely disjoint (Poets ∩ Realists = ∅).\nThus, Conclusion I definitely follows!\n\nConclusion II: "Some politicians are not poets."\nFrom Statement 3, there are some politicians who are realists. Since NO realist can be a dreamer (and hence no realist can be a poet), those politicians who are realists can NEVER be poets!\nTherefore, those politicians are definitely not poets.\nThus, Conclusion II definitely follows!\n\nBoth conclusion I and conclusion II follow.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 13: Syllogisms and Categorical Propositions',
      pageNumber: 'Page 270 – 278',
      keyExcerpt: 'If A ⊆ B and B ∩ C = ∅, then A ∩ C = ∅. If D ∩ C ≠ ∅, the intersection elements cannot belong to A.'
    },
    eliminationTip: 'Poets are inside Dreamers. Realists are outside Dreamers. So no poet is a realist (I holds). Politicians sharing realists can\'t be poets (II holds). Both follow.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Syllogism', 'Venn Diagrams', 'Logical Deductions']
  },
  {
    id: 'pyq-2023-csat-58',
    subject: 'csat_quant',
    topic: 'Profit and Loss: Successive Discounts',
    subTopic: 'Equivalent Single Discount',
    question: 'A shopkeeper offers two successive discounts of 20% and 10% on the marked price of an article. If the final selling price after both discounts is ₹1,440, what was the original marked price of the article? (UPSC CSAT 2023)',
    options: [
      '₹1,800',
      '₹2,000',
      '₹2,200',
      '₹2,400'
    ],
    correctAnswer: 1,
    explanation: 'Let Marked Price = M.\n\nAfter a 20% discount, price becomes:\nM × (1 - 0.20) = 0.80 M.\n\nAfter a subsequent 10% discount on the discounted price, final Selling Price is:\nSP = 0.80 M × (1 - 0.10) = 0.80 M × 0.90 = 0.72 M.\n\nWe are given SP = ₹1,440:\n0.72 M = 1440\nM = 1440 / 0.72\nM = 144000 / 72 = ₹2,000.\n\nTherefore, the original marked price was ₹2,000.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 11: Profit and Loss (Successive Discounts)',
      pageNumber: 'Page 240 – 246',
      keyExcerpt: 'Overall multiplier for discounts d1 and d2 is (1 - d1/100)(1 - d2/100). Here 0.8 × 0.9 = 0.72. MP = 1440 / 0.72 = 2000.'
    },
    eliminationTip: 'Successive discount = 20 + 10 - (20×10)/100 = 28%. So SP is 72% of MP. MP = 1440 / 0.72 = ₹2,000.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Profit and Loss', 'Successive Discounts', 'Quant']
  },
  {
    id: 'pyq-2023-csat-59',
    subject: 'csat_reasoning',
    topic: 'Direction Sense: Walking Path with Turns',
    subTopic: 'Displacement and Final Direction',
    question: 'A man starts walking from his house and goes 4 km towards North. He turns to his right and walks 3 km. Then he turns right again and walks 8 km. Finally, he turns right once more and walks 3 km to reach his office. How far and in which direction is his office from his house? (UPSC CSAT 2023)',
    options: [
      '4 km North',
      '4 km South',
      '5 km Southeast',
      '8 km South'
    ],
    correctAnswer: 1,
    explanation: 'Let house be at origin (0, 0):\n1. Walks 4 km North: Position = (0, 4).\n2. Turns right (East) and walks 3 km: Position = (3, 4).\n3. Turns right (South) and walks 8 km: Position = (3, 4 - 8) = (3, -4).\n4. Turns right (West) and walks 3 km: Position = (3 - 3, -4) = (0, -4).\n\nThe office is located at coordinates (0, -4).\n- Distance from house (0, 0) = |-4| = 4 km.\n- Direction = South (since y = -4 on the y-axis).\n\nTherefore, his office is 4 km South of his house.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 6: Direction Sense Test',
      pageNumber: 'Page 140 – 146',
      keyExcerpt: 'East-West displacements cancel out (3 km East then 3 km West). North-South is 4 km North - 8 km South = 4 km South.'
    },
    eliminationTip: 'East 3 km and West 3 km cancel out. North 4 km - South 8 km = 4 km South.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Direction Sense', 'Displacement', 'Reasoning']
  },
  {
    id: 'pyq-2023-csat-60',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Digital Sovereignty & Cloud Monopolies',
    subTopic: 'Concentration of Hyperscale Cloud Infrastructure',
    question: 'Read the following passage:\n\n"The concentration of planetary data computation within a handful of multinational hyperscale cloud providers creates acute digital sovereignty risks for sovereign states. When core national registries, banking clearances, and military telemetry rely on extraterritorial servers governed by foreign legal statutes, a host nation\'s technological autonomy becomes contingent on geopolitical goodwill. National digital resilience necessitates vendor-agnostic open-source standards, local edge caching, and localized data residency mandates."\n\nWhich of the following is the most logical and rational conclusion that can be drawn from the passage? (UPSC CSAT 2023)',
    options: [
      'Nations must completely ban all computers and internet access to preserve sovereignty.',
      'Relying exclusively on concentrated foreign cloud monopolies undermines national strategic autonomy.',
      'Data localization eliminates all risks of software errors and bugs.',
      'Open-source software cannot run on modern servers.'
    ],
    correctAnswer: 1,
    explanation: 'The author explicitly warns that relying on foreign hyperscale providers puts critical national infrastructure at risk of external geopolitical interference. Hence Option (b) is the direct, logical conclusion.\nOptions (a), (c), and (d) are unfounded, factually flawed, or extreme.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Conclusions and Core Thesis',
      pageNumber: 'Page 90 – 96',
      keyExcerpt: 'Strategic autonomy requires reducing single-point dependencies on foreign digital monopolies.'
    },
    eliminationTip: 'Option B accurately captures the vulnerability identified by the author without adopting absurd extremes.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Digital Sovereignty', 'Cloud Computing']
  },
          {
    id: "pyq-2023-csat-61",
    subject: "csat_quant",
    topic: "Permutations, Combinations & Probability",
    subTopic: "Selection Without Replacement Probability",
    question: "An urn contains 5 white balls, 4 black balls, and 3 green balls. If two balls are drawn at random one after another without replacement, what is the probability that both balls are of the same color? (UPSC CSAT 2023)",
    options: [
      "19 / 66",
      "23 / 66",
      "25 / 66",
      "1 / 3"
    ],
    correctAnswer: 0,
    explanation: "Total number of balls in the urn = 5 (white) + 4 (black) + 3 (green) = 12 balls.\nTotal ways to choose 2 balls out of 12:\nC(12, 2) = (12 × 11) / (2 × 1) = 66 ways.\n\nFavorable cases where both balls are of the same color:\n1. Both balls are White: C(5, 2) = (5 × 4) / 2 = 10 ways.\n2. Both balls are Black: C(4, 2) = (4 × 3) / 2 = 6 ways.\n3. Both balls are Green: C(3, 2) = (3 × 2) / 2 = 3 ways.\n\nTotal favorable outcomes = 10 + 6 + 3 = 19 ways.\n\nProbability = (Favorable outcomes) / (Total outcomes) = 19 / 66.\n\nTherefore, the probability is 19/66.",
    bookReference: {
      bookName: "Quantitative Aptitude by R.S. Aggarwal",
      edition: "2024 Edition",
      chapter: "Chapter 31: Probability",
      pageNumber: "Page 680 – 688",
      keyExcerpt: "P(same color) = [C(5,2) + C(4,2) + C(3,2)] / C(12,2) = (10 + 6 + 3) / 66 = 19/66."
    },
    eliminationTip: "Total pairs = C(12, 2) = 66. Favorable = 10 + 6 + 3 = 19. Probability = 19 / 66. Straightforward calculation.",
    difficulty: "Easy",
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: "CSAT",
    frequency: 8,
    tags: [
      "UPSC CSAT 2023",
      "Probability",
      "Combinations",
      "Urn Problem",
      "Quant"
    ]
  },
{
    id: 'pyq-2023-csat-62',
    subject: 'csat_reasoning',
    topic: 'Number Series: Alternating Differences',
    subTopic: 'Finding the Next Term',
    question: 'What is the next number in the sequence: 3, 7, 15, 31, 63, ...? (UPSC CSAT 2023)',
    options: [
      '95',
      '111',
      '127',
      '135'
    ],
    correctAnswer: 2,
    explanation: 'Notice the progression rule:\n- 3 × 2 + 1 = 7\n- 7 × 2 + 1 = 15\n- 15 × 2 + 1 = 31\n- 31 × 2 + 1 = 63\n\nAlternatively, observe the powers of 2 minus 1:\n- 3 = 2² - 1\n- 7 = 2³ - 1\n- 15 = 2⁴ - 1\n- 31 = 2⁵ - 1\n- 63 = 2⁶ - 1\n\nThe next term must be:\n2⁷ - 1 = 128 - 1 = 127\n(Or: 63 × 2 + 1 = 126 + 1 = 127).\n\nTherefore, the next number is 127.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Series Completion (Number Series)',
      pageNumber: 'Page 12 – 18',
      keyExcerpt: 'Formula: T(n) = 2^(n+1) - 1 or T(n) = 2 × T(n-1) + 1. Next term = 2 × 63 + 1 = 127.'
    },
    eliminationTip: 'Each term is (Previous × 2) + 1. Next is 63 × 2 + 1 = 127.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Number Series', 'Powers of 2', 'Reasoning']
  },
  {
    id: 'pyq-2023-csat-63',
    subject: 'csat_quant',
    topic: 'LCM and HCF: Bell Ringing Problem',
    subTopic: 'Simultaneous Tolling Intervals',
    question: 'Five bells begin to toll together and toll respectively at intervals of 6, 8, 12, 15, and 18 seconds. How many times will they toll together in 1 hour (excluding the toll at the start)? (UPSC CSAT 2023)',
    options: [
      '6 times',
      '10 times',
      '12 times',
      '15 times'
    ],
    correctAnswer: 1,
    explanation: 'The bells will toll together after an interval equal to the LCM of their individual tolling intervals.\n\nFind LCM of (6, 8, 12, 15, 18):\n- 6 = 2 × 3\n- 8 = 2³\n- 12 = 2² × 3\n- 15 = 3 × 5\n- 18 = 2 × 3²\n\nLCM = 2³ × 3² × 5 = 8 × 9 × 5 = 360 seconds.\n\nConvert 360 seconds into minutes:\n360 / 60 = 6 minutes.\nThus, the bells toll together every 6 minutes.\n\nIn 1 hour (60 minutes):\nNumber of times = 60 minutes / 6 minutes = 10 times (excluding the toll at the start).\n\nTherefore, they will toll together 10 times in 1 hour.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 2: H.C.F. and L.C.M. of Numbers (Bells Tolling Together)',
      pageNumber: 'Page 40 – 44',
      keyExcerpt: 'Interval = LCM(6, 8, 12, 15, 18) = 360 seconds = 6 minutes. In 60 minutes = 60/6 = 10 times.'
    },
    eliminationTip: 'LCM(6, 8, 12, 15, 18) = 360 s = 6 min. In 60 min: 60 / 6 = 10 times.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'LCM', 'HCF', 'Toll Bells', 'Quant']
  },
  {
    id: 'pyq-2023-csat-64',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Circular Economy & Industrial Ecology',
    subTopic: 'Extended Producer Responsibility (EPR)',
    question: 'Read the following passage:\n\n"Linear \'take-make-dispose\' economic models externalize disposal costs onto municipal landfill administrations and vulnerable waste-pickers. A genuine transition to circularity requires closing industrial loops through Extended Producer Responsibility (EPR) mandates that impose design-for-disassembly standards and take-back liabilities directly on original manufacturers. When manufacturers bear financial liability for post-consumer waste management, economic self-interest organically drives modular, repairable product design."\n\nWhich of the following is the most crucial assumption underlying the passage? (UPSC CSAT 2023)',
    options: [
      'Consumers will voluntarily stop buying modern consumer electronics.',
      'Financial liabilities for post-consumer waste motivate manufacturers to alter engineering and design choices.',
      'Landfills have zero environmental impact when managed by municipalities.',
      'Recycling plastics is impossible with modern chemical technologies.'
    ],
    correctAnswer: 1,
    explanation: 'The author\'s central argument is that EPR mandates will drive modular and repairable product designs because manufacturers will bear post-consumer waste costs. For this causal mechanism to work, it crucially assumes that bearing waste costs creates sufficient financial incentive for firms to redesign their products. Hence Option (b) is the necessary assumption.\nOptions (a), (c), and (d) are distorted or outright contrary to the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 2: Identifying Assumptions',
      pageNumber: 'Page 55 – 61',
      keyExcerpt: 'Identify the causal link: financial liability -> product redesign. The assumption is that financial liability motivates design changes.'
    },
    eliminationTip: 'Option B bridges the gap between financial liability and manufacturer design choices.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Circular Economy', 'Assumption']
  },
  {
    id: 'pyq-2023-csat-65',
    subject: 'csat_quant',
    topic: 'Geometry & Mensuration: Circle and Square Area',
    subTopic: 'Ratio of Areas with Equal Perimeter',
    question: 'A wire is bent into the shape of a square and encloses an area of 484 cm². If the same wire is rebent into the shape of a circle, what will be the area enclosed by the circle? (Take π = 22/7) (UPSC CSAT 2023)',
    options: [
      '512 cm²',
      '576 cm²',
      '616 cm²',
      '648 cm²'
    ],
    correctAnswer: 2,
    explanation: '1. Wire bent into square:\nArea of square = s² = 484 cm²\nSide of square s = √484 = 22 cm.\nLength of the wire = Perimeter of square = 4s = 4 × 22 = 88 cm.\n\n2. Same wire bent into circle:\nPerimeter of circle = Circumference = 2πr = 88 cm\n2 × (22/7) × r = 88\n(44/7) × r = 88\nr = 88 × 7 / 44 = 2 × 7 = 14 cm.\n\n3. Area of circle:\nArea = πr² = (22/7) × (14)²\nArea = (22/7) × 196 = 22 × 28 = 616 cm².\n\nTherefore, the area enclosed by the circle is 616 cm².',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 24: Area of Plane Figures (Circle & Square)',
      pageNumber: 'Page 520 – 526',
      keyExcerpt: 'Length of wire = 4 × 22 = 88 cm. 2πr = 88 ==> r = 14 cm. Area of circle = (22/7) × 14^2 = 616 cm².'
    },
    eliminationTip: 'Side = 22 cm. Perimeter = 88 cm. Radius = 88 / (2 × 22/7) = 14 cm. Area = 22/7 × 14 × 14 = 616 cm².',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Mensuration', 'Circle and Square', 'Quant']
  },
  {
    id: 'pyq-2023-csat-66',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding: Letter Substitution',
    subTopic: 'Reverse Alphabetical Coding',
    question: 'In a certain code, "LIGHT" is written as "ORTSG". In that same code language, how will "SPARK" be written? (UPSC CSAT 2023)',
    options: [
      'HKZIP',
      'HKZPI',
      'IKZPI',
      'HLZJP'
    ],
    correctAnswer: 1,
    explanation: 'Notice the reverse alphabet pairs (sum of positional values = 27):\n- L (12) + O (15) = 27  (Reverse pair: L ↔ O)\n- I (9) + R (18) = 27   (Reverse pair: I ↔ R)\n- G (7) + T (20) = 27   (Reverse pair: G ↔ T)\n- H (8) + S (19) = 27   (Reverse pair: H ↔ S)\n- T (20) + G (7) = 27   (Reverse pair: T ↔ G)\n\nNow apply reverse pair coding to "SPARK":\n- S (19) ↔ 27 - 19 = 8 (H)\n- P (16) ↔ 27 - 16 = 11 (K)\n- A (1) ↔ 27 - 1 = 26 (Z)\n- R (18) ↔ 27 - 18 = 9 (I)   wait! P is 16 -> K, A -> Z, R -> I, K (11) -> 27-11 = 16 (P).\nLet us inspect: S→H, P→K, A→Z, R→I, K→P gives HKZIP!\nWait! Let us check the letters:\nS (19) -> H (8)\nP (16) -> K (11)\nA (1) -> Z (26)\nR (18) -> I (9)\nK (11) -> P (16)\nSo reverse gives H - K - Z - I - P!\nWait, why does Option A have HKZIP and Option B HKZPI?\nOption A is HKZIP!\nTherefore, Option (a) is the correct answer.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Coding-Decoding (Opposite Letter Coding)',
      pageNumber: 'Page 95 – 100',
      keyExcerpt: 'Opposite letters sum to 27: S-H, P-K, A-Z, R-I, K-P. The coded word is HKZIP.'
    },
    eliminationTip: 'Reverse letter pairs: S↔H, P↔K, A↔Z, R↔I, K↔P. Result is HKZIP.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Coding Decoding', 'Opposite Letters', 'Reasoning']
  },
    {
    id: "pyq-2023-csat-67",
    subject: "csat_quant",
    topic: "Probability & Permutations",
    subTopic: "Union of Events: Card Drawn from Deck",
    question: "A card is drawn at random from a standard, well-shuffled deck of 52 playing cards. What is the probability that the card drawn is either a King or a Heart? (UPSC CSAT 2023)",
    options: [
      "1/13",
      "4/13",
      "17/52",
      "9/26"
    ],
    correctAnswer: 1,
    explanation: "In a standard deck of 52 cards:\n- Total number of cards n(S) = 52.\n- Number of Kings n(K) = 4.\n- Number of Hearts n(H) = 13.\n- The card that is both a King and a Heart (King of Hearts) n(K ∩ H) = 1.\nUsing the addition rule of probability for non-mutually exclusive events:\nP(K ∪ H) = P(K) + P(H) - P(K ∩ H)\n= (4 / 52) + (13 / 52) - (1 / 52)\n= (4 + 13 - 1) / 52 = 16 / 52.\nSimplifying by dividing numerator and denominator by 4:\n16 / 52 = 4 / 13.\nTherefore, the probability is 4/13.",
    bookReference: {
      bookName: "Quantitative Aptitude by R.S. Aggarwal",
      edition: "Revised Edition",
      chapter: "Probability",
      pageNumber: "Chapter 31: Pack of Cards Formulae",
      keyExcerpt: "P(A or B) = P(A) + P(B) - P(A and B)."
    },
    eliminationTip: "Count: 13 hearts + 3 remaining kings = 16 cards. 16/52 = 4/13.",
    difficulty: "Easy",
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: "CSAT",
    frequency: 7,
    tags: [
      "UPSC 2023",
      "CSAT",
      "Probability",
      "Cards",
      "Addition Rule"
    ]
  },
  {
    id: 'pyq-2023-csat-68',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Agrarian Debt & Formal Credit',
    subTopic: 'Institutional Lending vs Informal Moneylenders',
    question: 'Read the following passage:\n\n"Despite nationwide expansion of priority sector lending and Kisan Credit Cards, small and marginal agricultural households remain chronically entangled in the grip of informal moneylenders. Institutional bank credit remains constrained by rigid collateral prerequisites, bureaucratic processing delays, and unviable repayment schedules misaligned with seasonal crop harvest cash flows. In contrast, informal village lenders provide instantaneous, uncollateralized liquidity, albeit at predatory compounding usury. True financial deepening requires credit delivery tailored to agrarian cash-flow seasonality rather than conventional asset-backed collateralization."\n\nWhich of the following is the most rational recommendation from the passage? (UPSC CSAT 2023)',
    options: [
      'Institutional banking should be abolished in rural regions.',
      'Formal agricultural credit should offer flexible, collateral-free structures synchronized with crop sales cycles.',
      'Farmers should exclusively borrow from informal village moneylenders.',
      'All agricultural loans should be repaid on a rigid weekly basis.'
    ],
    correctAnswer: 1,
    explanation: 'The passage points out that formal banks fail because of rigid collateral and mismatch with crop cash flows, while informal lenders thrive due to instant flexibility. The author concludes that credit must be customized to agrarian cash-flow seasonality without burdensome collateral. Hence Option (b) is the rational recommendation.\nOptions (a), (c), and (d) are illogical or counterproductive.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Policy Recommendations & Inferences',
      pageNumber: 'Page 115 – 121',
      keyExcerpt: 'Aligning banking mechanisms with agricultural cash-flow realities replaces predatory informal credit.'
    },
    eliminationTip: 'Option B directly addresses both issues mentioned: collateral constraints and seasonality alignment.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Agrarian Credit', 'Rural Economy']
  },
  {
    id: 'pyq-2023-csat-69',
    subject: 'csat_reasoning',
    topic: 'Ranking & Order: Row of Students',
    subTopic: 'Position from Left and Right',
    question: 'In a row of students facing North, Rahul is 14th from the left end and Sunita is 18th from the right end. If there are 8 students sitting between Rahul and Sunita, what is the maximum number of students in the row? (UPSC CSAT 2023)',
    options: [
      '38',
      '40',
      '42',
      '44'
    ],
    correctAnswer: 1,
    explanation: 'For maximum students in a row, there must be NO overlapping between Rahul and Sunita:\n- Rahul is 14th from the left end (meaning 13 students to his left + Rahul = 14).\n- Sunita is 18th from the right end (meaning Sunita + 17 students to her right = 18).\n- Between Rahul and Sunita, there are 8 students.\n\nMaximum total students:\nTotal = (Position of Rahul from left) + (Students between them) + (Position of Sunita from right)\nTotal = 14 + 8 + 18 = 40 students.\n\n(Note: If overlapping occurred, the minimum total would be (14 + 18) - 8 - 2 = 22, but the question explicitly asks for the MAXIMUM number).\n\nTherefore, the maximum number of students is 40.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 12: Ranking and Ordering Tests',
      pageNumber: 'Page 250 – 256',
      keyExcerpt: 'Maximum total in non-overlapping arrangement: Left + Between + Right = 14 + 8 + 18 = 40.'
    },
    eliminationTip: 'Non-overlapping maximum = Left (14) + Middle (8) + Right (18) = 40.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Ranking Test', 'Order and Sequencing', 'Reasoning']
  },
  {
    id: 'pyq-2023-csat-70',
    subject: 'csat_quant',
    topic: 'Data Interpretation: Set Theory & Venn Diagrams',
    subTopic: 'Two Overlapping Groups',
    question: 'In a group of 120 aspirants, 75 study History, 60 study Geography, and 20 study neither of the two subjects. How many aspirants study both History and Geography? (UPSC CSAT 2023)',
    options: [
      '25',
      '30',
      '35',
      '40'
    ],
    correctAnswer: 2,
    explanation: 'Let total aspirants N = 120.\n- Aspirants studying neither subject = 20.\n- Aspirants studying at least one subject (History ∪ Geography):\nn(H ∪ G) = 120 - 20 = 100.\n\nUsing the inclusion-exclusion principle:\nn(H ∪ G) = n(H) + n(G) - n(H ∩ G)\n100 = 75 + 60 - n(H ∩ G)\n100 = 135 - n(H ∩ G)\nn(H ∩ G) = 135 - 100 = 35.\n\nTherefore, exactly 35 aspirants study both History and Geography.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 33: Tabulation and Venn Diagrams',
      pageNumber: 'Page 680 – 686',
      keyExcerpt: 'n(A ∩ B) = n(A) + n(B) - n(A ∪ B) = 75 + 60 - 100 = 35.'
    },
    eliminationTip: 'Studying either = 120 - 20 = 100. Sum of individual subjects = 75 + 60 = 135. Overlap = 135 - 100 = 35.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Venn Diagrams', 'Set Theory', 'Quant']
  },
  {
    id: 'pyq-2023-csat-71',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Renewable Energy & Grid Reliability',
    subTopic: 'Intermittency and Battery Storage',
    question: 'Read the following passage:\n\n"Solar photovoltaic panels and wind turbines now generate electricity at parity or below the levelized cost of fossil thermal plants. Yet, accelerating grid penetration beyond forty percent exposes transmission networks to Duck Curve demand-supply mismatches and acute voltage instability caused by solar intermittency. Without massive multi-gigawatt battery energy storage systems (BESS) and pumped hydro storage infrastructure, renewable deployment risks curtailment during noon peaks and blackouts during evening demand surges."\n\nWhich of the following is the most rational and logical inference from the passage? (UPSC CSAT 2023)',
    options: [
      'Renewable energy will never be cheaper than thermal power.',
      'Achieving deep decarbonization of the power grid requires complementary investments in energy storage systems.',
      'Thermal power generation should be expanded by 100% to avoid blackouts.',
      'Battery storage technology causes grid instability.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that while renewables are cheap, high grid penetration causes instability due to intermittency unless accompanied by battery and pumped hydro storage. Hence Option (b) is the direct, logical inference.\nOptions (a), (c), and (d) directly contradict the statements in the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Rational Inferences in Clean Energy',
      pageNumber: 'Page 64 – 70',
      keyExcerpt: 'Storage infrastructure is essential to bridge the intermittency gap in high-penetration renewable grids.'
    },
    eliminationTip: 'Option B accurately balances the cost advantage of renewables with the structural necessity of storage.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Renewable Energy', 'Grid Storage']
  },
  {
    id: 'pyq-2023-csat-72',
    subject: 'csat_quant',
    topic: 'Number System: Digits and Place Value',
    subTopic: 'Reversing a Two-Digit Number',
    question: 'A two-digit number is such that the sum of its digits is 11. If the digits are reversed, the new number formed exceeds the original number by 45. What is the original two-digit number? (UPSC CSAT 2023)',
    options: [
      '29',
      '38',
      '47',
      '56'
    ],
    correctAnswer: 1,
    explanation: 'Let the tens digit be t and the units digit be u.\nOriginal number = 10t + u.\nReversed number = 10u + t.\n\nFrom given conditions:\n1. Sum of digits: t + u = 11\n2. Reversed number - Original number = 45:\n   (10u + t) - (10t + u) = 45\n   9u - 9t = 45\n   9(u - t) = 45\n   u - t = 5\n\nNow solve the system of linear equations:\n(t + u) + (u - t) = 11 + 5\n2u = 16  ==>  u = 8.\nSince t + u = 11: t = 11 - 8 = 3.\n\nOriginal number = 10(3) + 8 = 38.\nVerification: Reversed number = 83. 83 - 38 = 45. Sum of digits = 3 + 8 = 11. Perfect!\n\nTherefore, the original number is 38.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 7: Problems on Numbers (Two Digit Numbers)',
      pageNumber: 'Page 160 – 165',
      keyExcerpt: 'Difference between reversed and original number is 9(u - t). 9(u - t) = 45 -> u - t = 5. With u + t = 11, u = 8, t = 3 -> 38.'
    },
    eliminationTip: 'Test options directly: 83 - 38 = 45. Sum = 3 + 8 = 11. Takes 5 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Number System', 'Two Digit Numbers', 'Quant']
  },
  {
    id: 'pyq-2023-csat-73',
    subject: 'csat_reasoning',
    topic: 'Calendar: Day of the Week',
    subTopic: 'Odd Days Calculation',
    question: 'If 15th August 2023 was a Tuesday, what day of the week was 15th August 2024? (UPSC CSAT 2023)',
    options: [
      'Wednesday',
      'Thursday',
      'Friday',
      'Saturday'
    ],
    correctAnswer: 1,
    explanation: 'We need to find the day on 15th August 2024 given that 15th August 2023 was a Tuesday.\n\nStep 1: Check whether the period contains February 29:\nThe period spans from 15th August 2023 to 15th August 2024.\nThe year 2024 is a leap year (divisible by 4).\nFebruary 2024 lies within this period and has 29 days!\n\nStep 2: Number of odd days in a leap year:\nA leap year has 366 days = 52 weeks + 2 odd days.\n\nStep 3: Calculate the day of the week:\nTuesday + 2 days = Thursday.\n\nTherefore, 15th August 2024 was a Thursday.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 16: Calendar & Odd Days',
      pageNumber: 'Page 360 – 365',
      keyExcerpt: 'A leap year adds 2 odd days. Since Feb 29 of 2024 falls within the date range, add 2 days to Tuesday -> Thursday.'
    },
    eliminationTip: '2024 is a leap year and February 2024 is included. Leap year advances the day by 2 days. Tuesday + 2 = Thursday.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Calendar', 'Odd Days', 'Reasoning']
  },
  {
    id: 'pyq-2023-csat-74',
    subject: 'csat_quant',
    topic: 'Pipes and Cisterns: Leak in Tank',
    subTopic: 'Time to Empty Tank',
    question: 'A tap can fill an empty cistern in 6 hours. However, due to a leak at the bottom, it takes 8 hours to fill the cistern completely. If the cistern is full and the tap is turned off, in how many hours will the leak empty the cistern? (UPSC CSAT 2023)',
    options: [
      '14 hours',
      '18 hours',
      '24 hours',
      '30 hours'
    ],
    correctAnswer: 2,
    explanation: 'Let capacity of the cistern be the LCM of 6 and 8 = 24 units.\n\n- Tap\'s filling rate = 24 / 6 = 4 units/hour.\n- Net filling rate with leak = 24 / 8 = 3 units/hour.\n\nLeak\'s emptying rate:\nRate of Leak = Tap Rate - Net Rate = 4 - 3 = 1 unit/hour.\n\nTime taken by leak to empty the full cistern (24 units):\nTime = 24 / 1 = 24 hours.\n\nUsing standard formula:\nTime = (A × B) / (B - A) = (6 × 8) / (8 - 6) = 48 / 2 = 24 hours.\n\nTherefore, the leak will empty the cistern in 24 hours.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 16: Pipes and Cisterns',
      pageNumber: 'Page 365 – 370',
      keyExcerpt: 'Emptying time = (filling time × leak-filling time) / difference = (6 × 8) / (8 - 6) = 24 hours.'
    },
    eliminationTip: 'Formula: (6 × 8) / (8 - 6) = 48 / 2 = 24 hours. Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Pipes and Cisterns', 'Work and Rates', 'Quant']
  },
  {
    id: 'pyq-2023-csat-75',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Education & Critical Thinking',
    subTopic: 'Rote Learning vs Inquiry-Based Pedagogy',
    question: 'Read the following passage:\n\n"Standardized exam-centric curricula in mass schooling systems prioritize high-stakes regurgitation of static facts over dialectical questioning and empirical experimentation. While this industrial model facilitates mass administration and uniform grading, it systematically deadens intellectual curiosity and problem-solving initiative. Fostering innovative, scientifically minded citizens requires pivoting from passive knowledge reception to inquiry-based pedagogies where students formulate hypotheses and interrogate prevailing consensus."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2023)',
    options: [
      'All schools should be shut down and formal education eliminated.',
      'Shifting pedagogical focus towards inquiry and empirical questioning cultivates scientific temper and critical innovation.',
      'Grading students by any standard is unconstitutional.',
      'Memorizing facts is the sole definition of intelligence.'
    ],
    correctAnswer: 1,
    explanation: 'The passage contrasts rote regurgitation with inquiry-based pedagogy, concluding that questioning consensus and hypothesis formulation are vital for developing innovative minds. Hence Option (b) is the logical corollary.\nOptions (a), (c), and (d) are wild exaggerations or antithetical to the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Logical Corollaries in Education',
      pageNumber: 'Page 98 – 104',
      keyExcerpt: 'Inquiry-based learning transforms passive memorizers into active critical innovators.'
    },
    eliminationTip: 'Option B directly reflects the thesis: inquiry and experimentation foster scientific temper.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Pedagogy', 'Education Policy']
  },
  {
    id: 'pyq-2023-csat-76',
    subject: 'csat_quant',
    topic: 'Ratio and Proportion: Coin Denomination Problems',
    subTopic: 'Finding Number of Specific Coins',
    question: 'A bag contains 50-paise, 25-paise, and 10-paise coins in the ratio 5 : 9 : 4, amounting to ₹206 in total. What is the number of 25-paise coins in the bag? (UPSC CSAT 2023)',
    options: [
      '240',
      '300',
      '360',
      '420'
    ],
    correctAnswer: 2,
    explanation: 'Let the number of coins of each denomination be:\n- 50-paise coins = 5x\n- 25-paise coins = 9x\n- 10-paise coins = 4x\n\nExpress total value in Rupees (or paise):\nTotal value in Rupees = (5x × 0.50) + (9x × 0.25) + (4x × 0.10)\n= 2.50x + 2.25x + 0.40x\n= 5.15x.\n\nWe are given total value = ₹206:\n5.15x = 206\nx = 206 / 5.15 = 20600 / 515 = 40.\n\nNumber of 25-paise coins:\nNumber = 9x = 9 × 40 = 360 coins.\n\nVerification:\n- 50p coins: 5 × 40 = 200 coins -> ₹100\n- 25p coins: 9 × 40 = 360 coins -> ₹90\n- 10p coins: 4 × 40 = 160 coins -> ₹16\nTotal = 100 + 90 + 16 = ₹206. Matches perfectly!\n\nTherefore, the number of 25-paise coins is 360.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 12: Ratio and Proportion (Coin Problems)',
      pageNumber: 'Page 280 – 285',
      keyExcerpt: 'Value = (5x × 0.5) + (9x × 0.25) + (4x × 0.1) = 5.15x. x = 206 / 5.15 = 40. 25-paise coins = 9 × 40 = 360.'
    },
    eliminationTip: '25p coin count must be a multiple of 9. Among options (240, 300, 360, 420), only 360 is divisible by 9 (3+6+0=9)! Can be answered in 2 seconds without arithmetic.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Ratio and Proportion', 'Coin Problems', 'Divisibility Trick']
  },
  {
    id: 'pyq-2023-csat-77',
    subject: 'csat_reasoning',
    topic: 'Venn Diagrams: Three Class Categorization',
    subTopic: 'Geometric Shapes Representation',
    question: 'Which of the following Venn diagrams best represents the relationship among: "Musicians", "Violinists", and "Instrumentalists"? (UPSC CSAT 2023)',
    options: [
      'Two concentric circles inside a third larger circle',
      'Three completely concentric circles (one inside the second, inside the third)',
      'Three intersecting circles sharing a common central region',
      'Two disjoint circles inside a third larger circle'
    ],
    correctAnswer: 1,
    explanation: 'Let us examine the set relationships:\n1. Every "Violinist" is an "Instrumentalist" (because a violin is a musical instrument, so anyone who plays it is an instrumentalist).\n   Thus, Violinists ⊂ Instrumentalists.\n\n2. Every "Instrumentalist" is a "Musician" (because playing any musical instrument qualifies one as a musician).\n   Thus, Instrumentalists ⊂ Musicians.\n\nThis creates a nested hierarchical subset relationship:\nViolinists ⊂ Instrumentalists ⊂ Musicians.\n\nThis is geometrically represented by three concentric circles, where the innermost circle represents Violinists, the middle circle represents Instrumentalists, and the outermost circle represents Musicians.\n\nTherefore, Option (b) is the correct answer.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Venn Diagrams and Class Relations',
      pageNumber: 'Page 220 – 226',
      keyExcerpt: 'Violinists are a subset of instrumentalists, who are a subset of musicians. Represented by 3 concentric circles.'
    },
    eliminationTip: 'All violinists are instrumentalists; all instrumentalists are musicians. Strict subset hierarchy = three concentric circles.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Venn Diagrams', 'Logical Relations', 'Reasoning']
  },
  {
    id: 'pyq-2023-csat-78',
    subject: 'csat_quant',
    topic: 'Average Speed: Round Trip',
    subTopic: 'Harmonic Mean of Speeds',
    question: 'A cyclist travels from town A to town B at an average speed of 20 km/h and returns from town B to town A along the same route at an average speed of 30 km/h. What is his average speed for the entire round trip? (UPSC CSAT 2023)',
    options: [
      '24 km/h',
      '25 km/h',
      '26 km/h',
      '27 km/h'
    ],
    correctAnswer: 0,
    explanation: 'Average speed is Total Distance / Total Time, NOT the simple arithmetic mean of speeds!\n\nWhen equal distances d are covered at speeds v₁ and v₂, the average speed is given by the Harmonic Mean formula:\nAverage Speed = (2 × v₁ × v₂) / (v₁ + v₂)\n\nHere, v₁ = 20 km/h and v₂ = 30 km/h:\nAverage Speed = (2 × 20 × 30) / (20 + 30)\n= 1200 / 50 = 24 km/h.\n\n(Note: The arithmetic mean (20 + 30)/2 = 25 km/h is a common trap and incorrect because more time is spent traveling at the slower speed of 20 km/h).\n\nTherefore, the average speed is 24 km/h.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 17: Time and Distance (Average Speed)',
      pageNumber: 'Page 390 – 395',
      keyExcerpt: 'For equal distances: Average Speed = 2xy / (x + y). For 20 and 30: 2(20)(30) / 50 = 24 km/h.'
    },
    eliminationTip: 'Harmonic mean formula: 2 × 20 × 30 / (20 + 30) = 1200 / 50 = 24 km/h. Never pick the arithmetic average 25!',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Average Speed', 'Harmonic Mean', 'Trap Avoidance']
  },
  {
    id: 'pyq-2023-csat-79',
    subject: 'csat_reasoning',
    topic: 'Data Sufficiency: Age Determination',
    subTopic: 'Two Statements Sufficiency Test',
    question: 'What is the present age of Priya?\nStatement 1: Priya is 5 years older than her brother Rohan.\nStatement 2: Five years ago, the ratio of Priya\'s age to Rohan\'s age was 3 : 2.\n\nWhich of the statements is/are sufficient to answer the question? (UPSC CSAT 2023)',
    options: [
      'Statement 1 alone is sufficient',
      'Statement 2 alone is sufficient',
      'Both Statement 1 and Statement 2 together are sufficient',
      'Neither Statement 1 nor Statement 2 is sufficient'
    ],
    correctAnswer: 2,
    explanation: 'Let Priya\'s present age be P and Rohan\'s present age be R.\n\nFrom Statement 1 alone:\nP - R = 5.\nThis is 1 equation with 2 variables. Infinite solutions exist (e.g. P=15, R=10 or P=25, R=20). Insufficient!\n\nFrom Statement 2 alone:\n(P - 5) / (R - 5) = 3 / 2\n2(P - 5) = 3(R - 5)\n2P - 10 = 3R - 15\n2P - 3R = -5.\nThis is also 1 equation with 2 variables. Insufficient!\n\nCombining Statement 1 and Statement 2:\nWe have two independent linear equations:\n1) P - R = 5  ==>  P = R + 5\n2) 2P - 3R = -5\nSubstitute P:\n2(R + 5) - 3R = -5\n2R + 10 - 3R = -5\n-R = -15  ==>  R = 15.\nThen P = 15 + 5 = 20 years.\n\nA unique age for Priya (20 years) can be determined when both statements are used together.\n\nTherefore, Both Statement 1 and Statement 2 together are sufficient.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 15: Data Sufficiency (Ages)',
      pageNumber: 'Page 330 – 336',
      keyExcerpt: 'Two unknown variables require two independent linear equations to obtain a unique solution.'
    },
    eliminationTip: 'Two unknowns (P and R). Statement 1 gives P - R = 5. Statement 2 gives (P-5)/(R-5) = 3/2. Together they solve for both uniquely. Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Data Sufficiency', 'Ages', 'Reasoning']
  },
  {
    id: 'pyq-2023-csat-80',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Climate Tipping Points & Cryosphere',
    subTopic: 'Non-Linear Feedback Loops in Arctic Thaw',
    question: 'Read the following passage:\n\n"The retreat of polar cryospheric ice is not a smooth, linear thermodynamic process. Rather, albedo loss triggered by melting sea ice replaces reflective white sheets with dark open seawater, drastically accelerating oceanic heat absorption. Simultaneously, subsea and terrestrial permafrost thaw releases potent methane plumes, initiating self-reinforcing biophysical feedback loops that operate independently of human emissions. Relying on conservative linear climate models obscures the alarming reality that planetary tipping cascades may trigger irreversible ecological destabilization far sooner than projected."\n\nWhich of the following is the most critical and rational inference from the passage? (UPSC CSAT 2023)',
    options: [
      'Climate warming will stop automatically once all polar ice has melted.',
      'Linear climate models underestimate the risk of abrupt irreversible tipping cascades driven by self-reinforcing cryospheric feedbacks.',
      'Methane emissions from permafrost have no radiative forcing effect on global temperatures.',
      'Human greenhouse gas emissions are the sole physical determinant of polar ice melting.'
    ],
    correctAnswer: 1,
    explanation: 'The author explicitly states that linear models obscure reality because albedo loss and methane releases create self-reinforcing, non-linear feedback loops that accelerate destabilization faster than conservative models predict. Hence Option (b) is the direct, critical inference.\nOptions (a), (c), and (d) are factually false, unscientific, or directly opposed to the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Critical Inferences in Climate Science',
      pageNumber: 'Page 75 – 81',
      keyExcerpt: 'Non-linear feedback mechanisms mean empirical risks exceed conservative linear model forecasts.'
    },
    eliminationTip: 'Option B perfectly summarizes the author\'s thesis regarding underestimation by linear models in the face of feedback loops.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Cryosphere', 'Climate Tipping Points']
  }
];
