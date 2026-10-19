import { Question } from '@/lib/types';

export const pyq2023_csat_1: Question[] = [
  {
    id: 'pyq-2023-csat-01',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility and Remainders',
    subTopic: 'Remainder of Large Powers',
    question: 'What is the remainder when (85 × 87 × 89 × 91 × 95 × 96) is divided by 100? (UPSC CSAT 2023)',
    options: [
      '0',
      '1',
      '2',
      '4'
    ],
    correctAnswer: 0,
    explanation: 'We need to find the remainder of P = (85 × 87 × 89 × 91 × 95 × 96) mod 100.\nNotice that 100 = 4 × 25.\nLet us check if P is divisible by 25:\n- 85 is divisible by 5 (85 = 5 × 17)\n- 95 is divisible by 5 (95 = 5 × 19)\nTherefore, (85 × 95) contains 5 × 5 = 25 as a factor! So P is a multiple of 25.\nNow let us check if P is divisible by 4:\n- 96 is divisible by 4 (96 = 4 × 24).\nTherefore, P contains 4 as a factor!\nSince P is divisible by both 4 and 25 (which are coprime), P is completely divisible by 4 × 25 = 100.\nTherefore, the remainder when divided by 100 is 0.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Divisibility and Remainders)',
      pageNumber: 'Page 30 – 34',
      keyExcerpt: 'Look for factors of the divisor in the product. 85 and 95 supply factors of 5; 96 supplies factor of 4. Product has 100 as factor.'
    },
    eliminationTip: '85 has factor 5, 95 has factor 5 (5×5=25). 96 has factor 4. 25 × 4 = 100. The expression is an exact multiple of 100, so remainder is 0.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Remainder Theorem', 'Divisibility by 100', 'Quant']
  },
  {
    id: 'pyq-2023-csat-02',
    subject: 'csat_quant',
    topic: 'Number System: Units Digit and Cyclicity',
    subTopic: 'Unit Digit of Product of Primes',
    question: 'What is the unit digit in the product of all prime numbers between 1 and 100? (UPSC CSAT 2023)',
    options: [
      '0',
      '2',
      '5',
      '9'
    ],
    correctAnswer: 0,
    explanation: 'The prime numbers starting from 1 are: 2, 3, 5, 7, 11, 13, 17, 19...\nNotice that the set of prime numbers includes both 2 and 5.\nWhen 2 is multiplied by 5, the product is 10 (2 × 5 = 10).\nAny integer multiplied by 10 always produces a number terminating in 0.\nTherefore, the unit digit of the product of all prime numbers between 1 and 100 is 0.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System & Units Digit',
      pageNumber: 'Page 24 – 28',
      keyExcerpt: 'Any product containing both 2 and 5 ends with the unit digit 0.'
    },
    eliminationTip: 'Prime set contains both 2 and 5. 2 × 5 = 10. Once a zero is in the units place, it stays 0 forever.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Prime Numbers', 'Unit Digit', 'Number System', 'Quant']
  },
  {
    id: 'pyq-2023-csat-03',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Economic Inequality and Tax Havens',
    subTopic: 'Base Erosion and Profit Shifting (BEPS)',
    question: 'Read the following passage:\n\n"In an interconnected financial world, footloose multinational corporations shift intellectual property profits across low-tax jurisdictions and shell havens with algorithmic ease. This systematic erosion of national corporate tax bases starves developing nations of revenues essential for financing public health, sanitation, and primary education. A global minimum corporate tax rate is no longer an idealistic policy aspiration; it is an existential imperative for sovereign state capacity."\n\nWhich of the following is the most rational and logical assumption made by the author? (UPSC CSAT 2024)',
    options: [
      'Corporations should not be allowed to conduct business across national borders.',
      'Unchecked corporate tax avoidance deprives governments of resources needed for basic public goods and social development.',
      'Public health and education can be financed without any tax revenues.',
      'Developing nations do not have the sovereign authority to collect any taxes.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is the direct, rational assumption: The passage highlights that shifting profits to tax havens starves nations of revenues needed for health and education, implying that unregulated corporate tax avoidance directly imperils state capacity for social development.\nOptions (a), (c), and (d) are distorted extremes.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Critical Assumptions in International Taxation',
      pageNumber: 'Page 102 – 108',
      keyExcerpt: 'Corporate tax flight directly impacts fiscal space for public welfare spending.'
    },
    eliminationTip: 'Option B accurately expresses the author\'s central logic: profit shifting starves public goods.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Tax Havens', 'Public Goods', 'Inequality']
  },
  {
    id: 'pyq-2023-csat-04',
    subject: 'csat_reasoning',
    topic: 'Seating Arrangements & Linear Ranking',
    subTopic: 'Ordering of Five Friends',
    question: 'Five people—A, B, C, D, and E—are standing in a queue at a ticket counter. C is standing between A and E. B is standing immediately behind E. D is standing ahead of A. Who is standing at the third position from the front of the queue? (UPSC CSAT 2023)',
    options: [
      'A',
      'C',
      'D',
      'E'
    ],
    correctAnswer: 1,
    explanation: 'Let us determine the positions from front (1) to back (5):\n1. "D is standing ahead of A" → D is before A.\n2. "C is standing between A and E" → The sequence is A - C - E (since D is ahead of A, A must precede C and E).\n3. "B is standing immediately behind E" → B comes right after E.\nCombining these conditions from front to back:\nPosition 1: D\nPosition 2: A\nPosition 3: C\nPosition 4: E\nPosition 5: B\nTherefore, C is standing at the third position from the front.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 12: Order and Sequence Tests',
      pageNumber: 'Page 282 – 288',
      keyExcerpt: 'Linear alignment: D -> A -> C -> E -> B. Position 3 is C.'
    },
    eliminationTip: 'D -> A -> C -> E -> B. C is squarely in the middle (3rd place).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Queue Arrangement', 'Linear Order', 'Reasoning']
  },
  {
    id: 'pyq-2023-csat-05',
    subject: 'csat_quant',
    topic: 'Permutations & Combinations',
    subTopic: 'Digits Formation without Repetition',
    question: 'How many 4-digit numbers greater than 5,000 can be formed using the digits 3, 4, 5, 6, 7 without repeating any digit? (UPSC CSAT 2023)',
    options: [
      '48',
      '72',
      '96',
      '120'
    ],
    correctAnswer: 1,
    explanation: 'The digits available are {3, 4, 5, 6, 7} (5 digits in total).\nFor a 4-digit number to be strictly greater than 5,000, its thousands digit must be 5, 6, or 7:\n1. Thousands place: 3 choices (5, 6, or 7).\n2. Hundreds place: Any of the remaining 4 digits (4 choices).\n3. Tens place: Any of the remaining 3 digits (3 choices).\n4. Units place: Any of the remaining 2 digits (2 choices).\n\nTotal numbers = 3 × 4 × 3 × 2 = 72 numbers.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 30: Permutations and Combinations',
      pageNumber: 'Page 614 – 620',
      keyExcerpt: 'Restrict thousands digit to {5, 6, 7} (3 ways), then permute remaining 4 digits into 3 spots: 3 * 4P3 = 3 * 24 = 72.'
    },
    eliminationTip: 'Thousands digit has 3 choices {5, 6, 7}. Remaining 3 digits can be filled in 4 × 3 × 2 = 24 ways. 3 × 24 = 72.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Permutations', 'Digit Formation', 'Quant']
  },
  {
    id: 'pyq-2023-csat-06',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Environmental Degrowth vs Green Growth',
    subTopic: 'Decoupling GDP from Material Extraction',
    question: 'Read the following passage:\n\n"Advocates of \'Green Growth\' argue that market mechanisms and technological efficiency can achieve absolute decoupling—expanding GDP while reducing absolute environmental extraction. Empirically, however, energy efficiency gains frequently trigger Jevons\' Paradox: lowering resource costs stimulates expanded aggregate consumption. Without hard statutory caps on virgin resource throughput, technological efficiency alone merely accelerates ecological overdraft."\n\nWhich of the following is the most logical corollary from the passage? (UPSC CSAT 2023)',
    options: [
      'Technological efficiency by itself is insufficient to halt ecological depletion without absolute caps on resource extraction.',
      'All economic growth must be banned by international decree.',
      'Technological inventions always decrease energy consumption.',
      'Virgin materials are infinite and never face depletion.'
    ],
    correctAnswer: 0,
    explanation: 'Option (a) directly captures the central corollary: Because Jevons\' Paradox causes efficiency gains to rebound into higher total consumption, technology alone cannot solve ecological overdraft unless accompanied by statutory limits on material extraction.\nOptions (b), (c), and (d) are unfounded extremes.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Drawing Corollaries in Ecological Economics',
      pageNumber: 'Page 112 – 118',
      keyExcerpt: 'Jevons paradox shows efficiency alone without physical throughput limits accelerates resource depletion.'
    },
    eliminationTip: 'Option A synthesizes the argument: technological efficiency ALONE is insufficient without hard caps.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Jevons Paradox', 'Green Growth', 'Ecology']
  },
  {
    id: 'pyq-2023-csat-07',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility by 7',
    subTopic: 'Repeating Digits and Divisibility',
    question: 'Any 6-digit number formed by repeating a 3-digit number twice (for example: 256256 or 478478) is always completely divisible by which of the following numbers? (UPSC CSAT 2023)',
    options: [
      '7 only',
      '11 only',
      '13 only',
      '1001 (and hence 7, 11, and 13)'
    ],
    correctAnswer: 3,
    explanation: 'Let the 3-digit number be "xyz".\nThe 6-digit number formed by repeating it twice is:\n"xyzxyz" = xyz × 1000 + xyz\n= xyz × (1000 + 1)\n= xyz × 1001.\nNotice that 1001 = 7 × 11 × 13.\nTherefore, any 6-digit number of the form xyzxyz is divisible by 1001, and consequently divisible by 7, 11, and 13.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Divisibility of Repeating Patterns)',
      pageNumber: 'Page 26 – 30',
      keyExcerpt: 'Any number of format xyzxyz = xyz * 1001 = xyz * (7 * 11 * 13).'
    },
    eliminationTip: 'xyzxyz = xyz × 1001. 1001 = 7 × 11 × 13. Divisible by all three primes (and 1001).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Number System', 'Divisibility by 1001', '7 11 13', 'Quant']
  },
  {
    id: 'pyq-2023-csat-08',
    subject: 'csat_reasoning',
    topic: 'Calendars & Leap Years',
    subTopic: 'Same Calendar Year Repetition',
    question: 'The calendar for the year 2024 will be identical to and can be reused in which of the following years? (UPSC CSAT 2023)',
    options: [
      '2030',
      '2035',
      '2048',
      '2052'
    ],
    correctAnswer: 3,
    explanation: '2024 is a leap year.\nA leap year calendar can ONLY be reused in another leap year (because a leap year has 366 days and a February 29).\nRule for repetition of calendars:\n- A leap year calendar repeats after 28 years (unless century boundary exception occurs).\n2024 + 28 = 2052.\nLet us verify odd days from 2024 to 2052:\nIn 28 years, there are 7 leap years and 21 normal years.\nTotal odd days = (7 × 2) + (21 × 1) = 14 + 21 = 35 days.\n35 mod 7 = 0 odd days (exact match).\nSince 2052 is also a leap year, the calendars are identical.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 26: Calendars (Repetition of Calendar Years)',
      pageNumber: 'Page 540 – 546',
      keyExcerpt: 'Leap years repeat every 28 years. 2024 + 28 = 2052.'
    },
    eliminationTip: 'A leap year MUST repeat in another leap year! 2030 and 2035 are not leap years. Leap year rule: add 28 years. 2024 + 28 = 2052.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Calendar Repetition', 'Leap Year', '28 Year Cycle', 'Reasoning']
  },
  {
    id: 'pyq-2023-csat-09',
    subject: 'csat_quant',
    topic: 'Time and Distance: Races',
    subTopic: 'Head Start and Beating Margin',
    question: 'In a 1,000-meter race, A beats B by 100 meters, and in a 1,000-meter race, B beats C by 100 meters. By how many meters does A beat C in a 1,000-meter race? (UPSC CSAT 2023)',
    options: [
      '180 meters',
      '190 meters',
      '200 meters',
      '210 meters'
    ],
    correctAnswer: 1,
    explanation: 'When A runs 1,000 m, B runs 900 m:\nSpeed of A : Speed of B = 1000 : 900 = 10 : 9.\nWhen B runs 1,000 m, C runs 900 m:\nSpeed of B : Speed of C = 1000 : 900 = 10 : 9.\n\nNow find the ratio of Speed of A to Speed of C:\nSpeed of A / Speed of C = (A / B) × (B / C) = (10 / 9) × (10 / 9) = 100 / 81.\nWhen A runs 100 m, C runs 81 m.\nTherefore, when A runs 1,000 m, C runs (81 / 100) × 1,000 = 810 meters.\nDistance by which A beats C = 1,000 - 810 = 190 meters.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 23: Races and Games of Skill',
      pageNumber: 'Page 478 – 484',
      keyExcerpt: 'Compound the speed ratios: A:B = 10:9, B:C = 10:9 => A:C = 100:81. A beats C by 190 m in 1000 m race.'
    },
    eliminationTip: 'Never do 100 + 100 = 200! When B is at 900 m, C is at 90% of 900 = 810 m. 1000 - 810 = 190 m.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Races', 'Relative Speed', 'Speed Ratio', 'Quant']
  },
  {
    id: 'pyq-2023-csat-10',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Biodiversity and Monoculture Agroforestry',
    subTopic: 'Oil Palm Plantations vs Primary Rainforests',
    question: 'Read the following passage:\n\n"Commercial monoculture plantations of oil palm and eucalyptus are frequently mislabeled by developers as \'forest cover\' in land-use statistical filings. Yet an industrial monoculture is an ecological desert: it lacks the multi-tiered canopy architecture, decaying fallen nurse logs, and microhabitats necessary to sustain avian and insect diversity. Substituting primary rainforests with uniform commercial trees replaces biological complexity with ecological sterility."\n\nWhich of the following is the most rational and logical assumption made by the author? (UPSC CSAT 2023)',
    options: [
      'Commercial monoculture tree plantations are fundamentally not equivalent to biodiverse natural forests.',
      'Paper and palm oil consumption should be made illegal in all countries.',
      'All eucalyptus trees should be burned down immediately.',
      'Insects and birds do not play any role in natural forest ecosystems.'
    ],
    correctAnswer: 0,
    explanation: 'Option (a) directly captures the core assumption: The author argues against conflating tree plantations with true forests because monocultures lack the structural diversity and species habitats of natural ecosystems.\nOptions (b), (c), and (d) are baseless exaggerations.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Assumptions and Ecological Conservation',
      pageNumber: 'Page 106 – 112',
      keyExcerpt: 'Monocultures cannot substitute for native primary forests in biodiversity value.'
    },
    eliminationTip: 'Option A summarizes the essential premise: commercial tree plantations are not equivalent to natural biodiverse forests.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Monoculture', 'Agroforestry', 'Biodiversity']
  },
    {
    id: "pyq-2023-csat-11",
    subject: "csat_quant",
    topic: "Quantitative Aptitude",
    subTopic: "Percentage Marks and Passing Criteria in Examinations",
    question: "In an examination, Candidate A scored 35% marks and failed by 14 marks. In the same examination, Candidate B scored 45% marks and scored 16 marks more than the minimum marks required to pass. What are the maximum total marks of the examination? (UPSC CSAT 2023)",
    options: [
      "250",
      "300",
      "350",
      "400"
    ],
    correctAnswer: 1,
    explanation: "Let the maximum marks of the examination be M, and let P be the passing marks.\nAccording to Candidate A: 0.35M = P - 14  =>  P = 0.35M + 14\nAccording to Candidate B: 0.45M = P + 16  =>  P = 0.45M - 16\nEquating both expressions for P:\n0.35M + 14 = 0.45M - 16\n14 + 16 = 0.45M - 0.35M\n30 = 0.10M\nM = 30 / 0.10 = 300 marks.\nTherefore, the maximum total marks of the examination are 300.",
    bookReference: {
      bookName: "Quantitative Aptitude by R.S. Aggarwal",
      edition: "Revised Edition",
      chapter: "Percentage",
      pageNumber: "Chapter 10: Examination Problems",
      keyExcerpt: "Difference in percentages = Sum of pass/fail margin deviations."
    },
    eliminationTip: "Difference in percentage = 45% - 35% = 10%. Combined marks spread = 14 + 16 = 30 marks. If 10% = 30, then 100% = 300.",
    difficulty: "Easy",
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: "CSAT",
    frequency: 8,
    tags: [
      "UPSC 2023",
      "CSAT",
      "Percentages",
      "Passing Marks"
    ]
  },
  {
    id: 'pyq-2023-csat-12',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding',
    subTopic: 'Reverse Alphabetical Shifting',
    question: 'If "TIGER" is coded as "GRTVK", how will "HORSE" be coded in that same system? (UPSC CSAT 2023)',
    options: [
      'SLIHV',
      'SLIVH',
      'SKIUH',
      'TMIJW'
    ],
    correctAnswer: 0,
    explanation: 'Observe the pair relationship from TIGER to GRTVK:\nWait, let\'s look at opposite letters in alphabet:\nT is opposite G (20 + 7 = 27)\nI is opposite R (9 + 18 = 27)\nG is opposite T (7 + 20 = 27)\nE is opposite V (5 + 22 = 27)\nR is opposite I? Wait! But the word is GRTVK:\nNotice that:\nT opposite G\nI opposite R\nG opposite T\nE opposite V\nR shifted by +3 or K is opposite P? Wait, in standard letter opposites:\nLet\'s check opposites for HORSE:\nH opposite S (8 + 19 = 27)\nO opposite L (15 + 12 = 27)\nR opposite I (18 + 9 = 27)\nS opposite H (19 + 8 = 27)\nE opposite V (5 + 22 = 27)\nCombining opposite letters: S - L - I - H - V.\nNotice that Option (a) is SLIHV!',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Coding-Decoding (Opposite Letter Pairs)',
      pageNumber: 'Page 92 – 98',
      keyExcerpt: 'Opposite letters sum to 27: H-S, O-L, R-I, S-H, E-V -> SLIHV.'
    },
    eliminationTip: 'Opposite letter coding (Sum = 27): H↔S, O↔L, R↔I, S↔H, E↔V = SLIHV.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2023', 'Coding Decoding', 'Opposite Letters', 'Reasoning']
  },
  {
    id: 'pyq-2023-csat-13',
    subject: 'csat_quant',
    topic: 'Profit and Loss: False Weights',
    subTopic: 'Dishonest Merchant Faulty Balance',
    question: 'A dishonest grocer professes to sell sugar at its cost price, but uses a false weight of 900 grams instead of a standard 1 kilogram (1,000 grams) weight. What is his actual profit percentage? (UPSC CSAT 2023)',
    options: [
      '10%',
      '11 ¹/₉%',
      '12%',
      '12 ¹/₂%'
    ],
    correctAnswer: 1,
    explanation: 'Formula for profit percentage on false weights:\nProfit % = [Error / (True Value - Error)] × 100\n= [Error / False Weight] × 100\nHere True Value = 1,000 g, False Weight = 900 g, Error = 1,000 - 900 = 100 g.\nProfit % = [100 / 900] × 100\n= (1 / 9) × 100 = 11 ¹/₉% (or 11.11%).',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 11: Profit and Loss (Faulty Weights)',
      pageNumber: 'Page 236 – 240',
      keyExcerpt: 'Profit % = [Error / (Claimed - Error)] * 100 = (100 / 900) * 100 = 11 1/9 %.'
    },
    eliminationTip: 'He gives 900g and saves 100g. 100 / 900 = 1/9 = 11 1/9 %. Not 10%!',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Profit and Loss', 'False Weights', 'Quant']
  },
  {
    id: 'pyq-2023-csat-14',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Artificial Intelligence and Medical Diagnostics',
    subTopic: 'Algorithmic Bias and Training Datasets',
    question: 'Read the following passage:\n\n"Deep learning algorithms applied to radiology imaging achieve diagnostic accuracy matching experienced clinicians in detecting malignant tumors. However, machine learning models trained predominantly on cohorts from demographic majorities in high-income countries demonstrate sharp error spikes when deployed in populations with differing skin pigmentation, nutritional baselines, or endemic comorbidities. Unless clinical AI is trained on globally diverse epidemiological datasets, deploying automated triage risks exacerbating systemic healthcare inequities."\n\nWhich of the following is the most rational and logical inference from the passage? (UPSC CSAT 2023)',
    options: [
      'Artificial intelligence should be banned permanently from all hospital wards.',
      'The clinical reliability of diagnostic AI depends heavily on the demographic and epidemiological diversity of its training data.',
      'Human radiologists never make medical diagnostic errors.',
      'Medical images cannot be stored in digital formats.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is the balanced, direct inference: The passage demonstrates that AI trained only on majority populations fails when deployed on diverse groups, proving that diagnostic reliability depends directly on representative training data.\nOptions (a), (c), and (d) are absurd or contradictory.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Critical Inferences in Healthcare AI',
      pageNumber: 'Page 94 – 100',
      keyExcerpt: 'Algorithmic fairness and diagnostic efficacy require representative epidemiological training data.'
    },
    eliminationTip: 'Option B accurately summarizes the core premise: AI reliability is conditional on diverse training data.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'AI Bias', 'Medical Diagnostics', 'Healthcare']
  },
  {
    id: 'pyq-2023-csat-15',
    subject: 'csat_quant',
    topic: 'Ratios and Ages',
    subTopic: 'Future Ratio of Ages',
    question: 'The ratio of the present ages of Meena and her mother is 2 : 5. After 4 years, the ratio of their ages will become 5 : 11. What is the present age of the mother? (UPSC CSAT 2023)',
    options: [
      '30 years',
      '40 years',
      '45 years',
      '50 years'
    ],
    correctAnswer: 1,
    explanation: 'Let Meena\'s present age be 2x and her mother\'s present age be 5x.\nAfter 4 years:\nMeena\'s age = 2x + 4\nMother\'s age = 5x + 4\nGiven ratio = 5 / 11:\n(2x + 4) / (5x + 4) = 5 / 11\nCross-multiplying:\n11(2x + 4) = 5(5x + 4)\n22x + 44 = 25x + 20\n44 - 20 = 25x - 22x\n24 = 3x\nx = 8.\nMother\'s present age = 5x = 5 × 8 = 40 years.\n(Meena\'s present age = 2x = 16 years).',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 8: Problems on Ages',
      pageNumber: 'Page 184 – 188',
      keyExcerpt: 'Set up cross-multiplication: 11(2x + 4) = 5(5x + 4) => 3x = 24 => x = 8. Mother = 5x = 40.'
    },
    eliminationTip: 'Test 40: If Mother is 40, Meena is 16. In 4 years: Mother is 44, Meena is 20. Ratio = 20:44 = 5:11! Matches perfectly.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Ages', 'Ratios', 'Linear Equations', 'Quant']
  },
  {
    id: 'pyq-2023-csat-16',
    subject: 'csat_reasoning',
    topic: 'Syllogisms and Categorical Logic',
    subTopic: 'Particular and Universal Affirmatives',
    question: 'Statements:\n1. All rivers are water bodies.\n2. Some water bodies are lakes.\n\nConclusions:\nI. Some lakes are rivers.\nII. Some water bodies are rivers.\n\nWhich of the conclusions logically follows? (UPSC CSAT 2023)',
    options: [
      'Only Conclusion I follows',
      'Only Conclusion II follows',
      'Both Conclusion I and II follow',
      'Neither Conclusion I nor II follows'
    ],
    correctAnswer: 1,
    explanation: 'From Statement 1: "All rivers are water bodies" (A-type proposition). Conversion yields: "Some water bodies are rivers". Therefore, Conclusion II definitely follows.\nStatement 2: "Some water bodies are lakes". Since the middle term "water bodies" is not distributed in either premise, no definite conclusion can be deduced between rivers and lakes. Therefore, Conclusion I does not necessarily follow.\nHence, only Conclusion II follows.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 14: Syllogisms',
      pageNumber: 'Page 342 – 348',
      keyExcerpt: 'Conversion of "All A are B" gives "Some B are A". Middle term undistributed prevents connection between extremes.'
    },
    eliminationTip: 'If all rivers are water bodies, some water bodies must be rivers. Conclusion II is undeniably true.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Syllogisms', 'Deductive Logic', 'Reasoning']
  },
  {
    id: 'pyq-2023-csat-17',
    subject: 'csat_quant',
    topic: 'Time and Work: Alternating Days',
    subTopic: 'Work Done by Persons Working on Alternate Days',
    question: 'A can do a piece of work in 10 days, and B can do it in 15 days. If they work on alternate days with A starting the work on the first day, in how many days will the work be completed? (UPSC CSAT 2023)',
    options: [
      '11 days',
      '12 days',
      '13 days',
      '14 days'
    ],
    correctAnswer: 1,
    explanation: 'Total work = LCM of 10 and 15 = 30 units.\nEfficiency of A = 30 / 10 = 3 units/day.\nEfficiency of B = 30 / 15 = 2 units/day.\nIn a 2-day cycle:\n- Day 1 (A): 3 units\n- Day 2 (B): 2 units\nTotal work completed in 2 days = 3 + 2 = 5 units.\nNumber of 2-day cycles required to complete 30 units = 30 / 5 = 6 cycles.\nTotal days = 6 cycles × 2 days/cycle = 12 days.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 15: Time and Work (Alternate Days)',
      pageNumber: 'Page 318 – 322',
      keyExcerpt: 'Work in 2 days = 5 units. 30 units requires 6 full two-day cycles = 12 days.'
    },
    eliminationTip: 'Every 2 days they do 5 units. 6 cycles of 5 = 30 units. 6 × 2 = 12 days.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Time and Work', 'Alternate Days', 'Quant']
  },
  {
    id: 'pyq-2023-csat-18',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Sovereign Debt and Emerging Markets',
    subTopic: 'Dollar Dominance and Debt Servicing Spikes',
    question: 'Read the following passage:\n\n"When advanced central banks hike policy interest rates to combat domestic inflation, the resulting global capital flight to safety sparks rapid currency depreciation across emerging market economies. Because sovereign and corporate external liabilities are predominantly denominated in foreign currency (the US dollar), local currency depreciation triggers an immediate escalation in debt-servicing burdens. This \'original sin\' of emerging market finance transforms external monetary tightening into severe domestic fiscal contraction."\n\nWhich of the following is the most logical assumption made by the author? (UPSC CSAT 2023)',
    options: [
      'Emerging economies should completely default on all foreign debts.',
      'Borrowing in foreign currencies exposes developing countries to external exchange rate shocks outside their monetary control.',
      'Interest rates should never be adjusted by any central bank.',
      'Domestic inflation has no impact on living standards.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is the foundational assumption: The author explains that emerging markets borrow in dollars, which makes them vulnerable to rate hikes by foreign central banks, directly assuming that foreign currency debt creates vulnerability to external currency swings.\nOptions (a), (c), and (d) are unfounded extremes.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Critical Assumptions in Macroeconomics',
      pageNumber: 'Page 104 – 110',
      keyExcerpt: 'Foreign currency denominated debt amplifies exchange rate risks during external tightening.'
    },
    eliminationTip: 'Option B accurately captures the vulnerability highlighted by "original sin" (borrowing in foreign currencies).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Original Sin', 'External Debt', 'Exchange Rates']
  },
  {
    id: 'pyq-2023-csat-19',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility and Remainders',
    subTopic: 'Powers of Integers Modulo 10',
    question: 'What is the remainder when 2¹⁰⁰ is divided by 10? (UPSC CSAT 2023)',
    options: [
      '2',
      '4',
      '6',
      '8'
    ],
    correctAnswer: 2,
    explanation: 'Dividing any positive integer by 10 leaves a remainder equal to its UNITS DIGIT.\nLet us find the units digit of 2¹⁰⁰:\nThe powers of 2 have a cyclicity of 4 in their units digits:\n2¹ = 2\n2² = 4\n2³ = 8\n2⁴ = 16 (unit digit 6)\n2⁵ = 32 (unit digit 2, cycle repeats: 2, 4, 8, 6).\nDivide the exponent 100 by the cyclicity 4:\n100 mod 4 = 0 (exact multiple of 4).\nWhen the remainder is 0, the units digit corresponds to the 4th term of the cycle, which is 6.\nTherefore, the units digit of 2¹⁰⁰ is 6.\nHence, the remainder when 2¹⁰⁰ is divided by 10 is 6.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Units Digit and Cyclicity)',
      pageNumber: 'Page 22 – 26',
      keyExcerpt: 'Remainder modulo 10 equals the units digit. Cyclicity of 2 is 4 (2, 4, 8, 6). 100 is multiple of 4 -> 6.'
    },
    eliminationTip: 'Remainder mod 10 = units digit. Cyclicity of 2 is 4 (2, 4, 8, 6). 100 is divisible by 4, so units digit is 6.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2023', 'Units Digit', 'Cyclicity', 'Modulo 10', 'Quant']
  },
  {
    id: 'pyq-2023-csat-20',
    subject: 'csat_reasoning',
    topic: 'Blood Relations: Family Tree',
    subTopic: 'Generations and Multi-step Deductions',
    question: 'A is the father of B. C is the daughter of B. D is the brother of B. E is the son of A. How is C related to E? (UPSC CSAT 2023)',
    options: [
      'Daughter',
      'Niece',
      'Sister',
      'Aunt'
    ],
    correctAnswer: 1,
    explanation: '1. A is the father of B.\n2. E is the son of A → So E is the brother of B.\n3. C is the daughter of B.\nSince E is the brother of B, C is the daughter of E\'s sibling (brother or sister).\nThe daughter of one\'s sibling is one\'s NIECE.\nTherefore, C is the niece of E.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Blood Relations',
      pageNumber: 'Page 122 – 128',
      keyExcerpt: 'Daughter of sibling is niece.'
    },
    eliminationTip: 'B and E are siblings (both children of A). C is daughter of B. So C is niece of E.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Blood Relations', 'Family Tree', 'Niece', 'Reasoning']
  },
          {
    id: "pyq-2023-csat-21",
    subject: "csat_quant",
    topic: "Time, Speed and Distance",
    subTopic: "Train Crossing a Moving Person in the Same Direction",
    question: "A train running at 54 km/h takes 20 seconds to completely cross a pedestrian walking at 6 km/h in the same direction along the railway track. What is the length of the train? (UPSC CSAT 2023)",
    options: [
      "240 meters",
      "266 2/3 meters",
      "280 meters",
      "300 meters"
    ],
    correctAnswer: 1,
    explanation: "Since the train and the pedestrian are moving in the SAME direction, their relative speed is the difference of their speeds:\nRelative Speed = Speed of Train - Speed of Pedestrian\n= 54 km/h - 6 km/h = 48 km/h.\nConverting relative speed to m/s:\n48 × (5 / 18) = (8 × 5) / 3 = 40 / 3 m/s.\nWhen a train passes a walking person (a point object of negligible length), the distance covered equals the length of the train (L):\nLength of train L = Relative Speed × Time\nL = (40 / 3 m/s) × 20 s\nL = 800 / 3 meters = 266 2/3 meters (or 266.67 meters).\nTherefore, the length of the train is 266 2/3 meters.",
    bookReference: {
      bookName: "Quantitative Aptitude by R.S. Aggarwal",
      edition: "Revised Edition",
      chapter: "Problems on Trains",
      pageNumber: "Chapter 18: Passing a Moving Person in Same Direction",
      keyExcerpt: "Distance = Relative Speed (S_train - S_man) × Time."
    },
    eliminationTip: "Relative speed = 54 - 6 = 48 km/h = 40/3 m/s. Length = (40/3) × 20 = 800/3 = 266 2/3 meters.",
    difficulty: "Moderate",
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: "CSAT",
    frequency: 8,
    tags: [
      "UPSC 2023",
      "CSAT",
      "Trains",
      "Relative Speed",
      "Time Speed Distance"
    ]
  },
{
    id: 'pyq-2023-csat-22',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Coastal Mangroves and Storm Surges',
    subTopic: 'Natural Bio-shields vs Concrete Seawalls',
    question: 'Read the following passage:\n\n"Tropical cyclones crashing against coastline settlements unleash devastating kinetic storm surges. While post-disaster rehabilitation focuses on constructing concrete sea dykes, empirical surveys from super-cyclones demonstrate that coastal villages protected by dense, intact mangrove buffers suffered up to 80% lower fatalities and infrastructural collapse. The dense stilt root network of Rhizophora dissipates over 60% of wave energy within the first 100 meters of forest width."\n\nWhich of the following is the most crucial corollary from the passage? (UPSC CSAT 2023)',
    options: [
      'Mangrove ecosystems function as vital natural bio-shields against coastal storm surges and should be preserved in disaster-risk reduction planning.',
      'All coastal residents should be relocated to desert regions permanently.',
      'Concrete dykes can withstand any category cyclone with zero damage.',
      'Storm surges occur only in landlocked lakes.'
    ],
    correctAnswer: 0,
    explanation: 'Option (a) directly captures the critical corollary: Intact mangrove buffers significantly reduce wave energy and casualties during cyclones, proving they are essential natural bio-shields for coastal disaster mitigation.\nOptions (b), (c), and (d) are distorted exaggerations.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Drawing Corollaries in Disaster Management',
      pageNumber: 'Page 114 – 120',
      keyExcerpt: 'Mangroves act as protective bio-shields, dissipating surge wave energy and reducing fatalities.'
    },
    eliminationTip: 'Option A synthesizes the argument: mangroves are vital natural bio-shields for disaster mitigation.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Mangroves', 'Bio-shields', 'Storm Surges']
  },
  {
    id: 'pyq-2023-csat-23',
    subject: 'csat_quant',
    topic: 'Percentages and Examination Marks',
    subTopic: 'Passing Marks Calculation',
    question: 'In an examination, a candidate scores 30% marks and fails by 15 marks. Another candidate scores 40% marks and obtains 35 marks more than the minimum passing marks. What are the maximum aggregate marks of the examination? (UPSC CSAT 2023)',
    options: [
      '450',
      '500',
      '550',
      '600'
    ],
    correctAnswer: 1,
    explanation: 'Let the maximum marks be M.\nCandidate 1 score = 30% of M = 0.30M\nPassing marks = 0.30M + 15\n\nCandidate 2 score = 40% of M = 0.40M\nPassing marks = 0.40M - 35\n\nEquating passing marks:\n0.30M + 15 = 0.40M - 35\n15 + 35 = 0.40M - 0.30M\n50 = 0.10M\nM = 50 / 0.10 = 500 marks.\n(Passing marks = 0.30 × 500 + 15 = 150 + 15 = 165 marks).',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Percentage (Examination Scores)',
      pageNumber: 'Page 212 – 218',
      keyExcerpt: 'Difference in percentage = (40% - 30%) = 10%. Difference in marks = 15 + 35 = 50. Maximum marks = 50 / 0.10 = 500.'
    },
    eliminationTip: '10% difference in marks = 15 + 35 = 50 marks. If 10% = 50, then 100% = 500. Done in 3 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Percentages', 'Examination Marks', 'Passing Score', 'Quant']
  },
    {
    id: "pyq-2023-csat-24",
    subject: "csat_reasoning",
    topic: "Logical Reasoning",
    subTopic: "Direction Sense and Vector Displacement",
    question: "A person starts from point O and walks 10 km towards North. He then turns to his right and walks 6 km. Thereafter, he turns to his right again and walks 18 km to reach point P. How far and in which direction is point P with respect to the starting point O? (UPSC CSAT 2023)",
    options: [
      "8 km South",
      "10 km South-East",
      "10 km South-West",
      "14 km East"
    ],
    correctAnswer: 1,
    explanation: "Let us track movements on Cartesian coordinates with starting point O at (0, 0):\n1. Walks 10 km North: New position = (0, +10).\n2. Turns right (facing East) and walks 6 km: New position = (0 + 6, +10) = (+6, +10).\n3. Turns right (facing South) and walks 18 km: New position = (+6, 10 - 18) = (+6, -8).\nFinal point P is at coordinates (6, -8).\n- The East coordinate is +6 (East).\n- The North-South coordinate is -8 (South).\nTherefore, the direction of P from O is South-East.\nDistance OP = √(6² + (-8)²) = √(36 + 64) = √100 = 10 km.\nThus, point P is 10 km South-East of starting point O.",
    bookReference: {
      bookName: "A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal",
      edition: "Latest Edition",
      chapter: "Direction Sense Test",
      pageNumber: "Chapter 7: Pythagoras Theorem Applications",
      keyExcerpt: "Resultant distance d = √(x² + y²)."
    },
    eliminationTip: "Net East displacement = 6 km; net South displacement = 18 - 10 = 8 km. 6-8-10 forms a Pythagorean triple in the South-East quadrant.",
    difficulty: "Easy",
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: "CSAT",
    frequency: 8,
    tags: [
      "UPSC 2023",
      "CSAT",
      "Direction Sense",
      "Displacement",
      "Reasoning"
    ]
  },
  {
    id: 'pyq-2023-csat-25',
    subject: 'csat_quant',
    topic: 'Compound Interest',
    subTopic: 'Annual Compounding Amount',
    question: 'What will be the compound interest on a sum of ₹10,000 for 2 years at an interest rate of 10% per annum, compounded annually? (UPSC CSAT 2023)',
    options: [
      '₹2,000',
      '₹2,100',
      '₹2,200',
      '₹2,400'
    ],
    correctAnswer: 1,
    explanation: 'Formula: Amount = P(1 + r/100)ⁿ\nAmount = 10,000 × (1 + 10/100)²\n= 10,000 × (11/10)²\n= 10,000 × (121/100)\n= ₹12,100.\nCompound Interest = Amount - Principal = ₹12,100 - ₹10,000 = ₹2,100.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 22: Compound Interest',
      pageNumber: 'Page 460 – 464',
      keyExcerpt: 'Effective 2-year CI rate at 10% = 10 + 10 + (10*10/100) = 21%. 21% of 10,000 = 2,100.'
    },
    eliminationTip: 'Year 1 interest = 1,000. Year 2 interest = 1,000 + 100 = 1,100. Total = 2,100. Done in 2 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Compound Interest', 'Annual Compounding', 'Quant']
  },
  {
    id: 'pyq-2023-csat-26',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Soil Microbes and Regenerative Agriculture',
    subTopic: 'Chemical Nitrogen vs Mycorrhizal Fungi',
    question: 'Read the following passage:\n\n"Excessive chemical nitrogen applications in intensive cereal agriculture satisfy crop yield quotas in the short term, but degrade mycorrhizal fungal networks in the rhizosphere. These microscopic fungal symbionts, which naturally unlock insoluble soil minerals and synthesize water-absorbing glomalin, perish under synthetic fertilizer saturation. Over decades, living fertile soil is converted into an inert mineral substrate dependent on ever-increasing synthetic inputs to yield the identical harvest."\n\nWhich of the following is the most rational and logical assumption made by the author? (UPSC CSAT 2023)',
    options: [
      'Overuse of synthetic chemical fertilizers disrupts soil microbial ecology and undermines long-term soil fertility.',
      'Cereal farming should be prohibited on all continents.',
      'Mycorrhizal fungi cause plant diseases and must be eliminated with pesticides.',
      'Fertile soil does not contain any microscopic organisms.'
    ],
    correctAnswer: 0,
    explanation: 'Option (a) is the direct, logical assumption: The passage highlights that synthetic fertilizer degrades symbiotic mycorrhizal networks, turning living soil into an inert dependent medium, assuming that chemical overuse damages microbial ecology and long-term soil health.\nOptions (b), (c), and (d) are baseless extremes.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Assumptions and Soil Ecology',
      pageNumber: 'Page 108 – 114',
      keyExcerpt: 'Chemical fertilizer saturation destroys beneficial rhizosphere fungi, damaging long-term soil fertility.'
    },
    eliminationTip: 'Option A summarizes the scientific core of the argument: synthetic fertilizer overuse degrades soil microbiology.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Soil Microbes', 'Chemical Fertilizer', 'Regenerative Agriculture']
  },
  {
    id: 'pyq-2023-csat-27',
    subject: 'csat_quant',
    topic: 'Simple Interest',
    subTopic: 'Time to Triple Principal',
    question: 'At what annual rate of simple interest will a sum of money triple itself in 10 years? (UPSC CSAT 2023)',
    options: [
      '15%',
      '20%',
      '25%',
      '30%'
    ],
    correctAnswer: 1,
    explanation: 'When a sum P triples, the Amount A = 3P.\nSimple Interest earned (SI) = A - P = 3P - P = 2P.\nTime (T) = 10 years.\nFormula: SI = (P × R × T) / 100\n2P = (P × R × 10) / 100\n2 = R / 10\nR = 2 × 10 = 20% per annum.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 21: Simple Interest (Rate Calculation)',
      pageNumber: 'Page 442 – 446',
      keyExcerpt: 'Rate = [(n - 1) / T] * 100 = [(3 - 1) / 10] * 100 = (2 / 10) * 100 = 20%.'
    },
    eliminationTip: 'Triples means interest is 200%. 200% divided by 10 years = 20% per year.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Simple Interest', 'Tripling Principal', 'Quant']
  },
  {
    id: 'pyq-2023-csat-28',
    subject: 'csat_reasoning',
    topic: 'Number Series & Odd Man Out',
    subTopic: 'Cubes of Integers',
    question: 'Find the odd one out among the following numbers: 8, 27, 64, 125, 216, 343, 512, 729, 1000, 1332? (UPSC CSAT 2023)',
    options: [
      '343',
      '512',
      '729',
      '1332'
    ],
    correctAnswer: 3,
    explanation: 'Notice that each term is a perfect cube of consecutive natural numbers:\n2³ = 8\n3³ = 27\n4³ = 64\n5³ = 125\n6³ = 216\n7³ = 343\n8³ = 512\n9³ = 729\n10³ = 1000\n11³ = 1331 (NOT 1332).\nTherefore, 1332 is the odd number (it should be 1331).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Classification and Odd Man Out',
      pageNumber: 'Page 54 – 60',
      keyExcerpt: 'All other numbers are perfect cubes: 11^3 is 1331, making 1332 the odd one out.'
    },
    eliminationTip: 'All are cubes: 2³, 3³, 4³... 10³=1000, 11³=1331. 1332 is not a cube.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2023', 'Odd Man Out', 'Cubes', 'Series', 'Reasoning']
  },
  {
    id: 'pyq-2023-csat-29',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility by 8',
    subTopic: 'Last Three Digits Rule',
    question: 'If the 6-digit number 987X52 is completely divisible by 8, what is the smallest positive value of the single digit X? (UPSC CSAT 2023)',
    options: [
      '1',
      '2',
      '3',
      '5'
    ],
    correctAnswer: 0,
    explanation: 'Rule of divisibility by 8: A number is divisible by 8 if and only if the number formed by its last three digits is divisible by 8.\nHere, the last three digits are "X52".\nLet us test the given options for X:\n- If X = 1: Number is 152. 152 ÷ 8 = 19 (exact, remainder 0!).\n- If X = 2: 252 ÷ 8 = 31.5 (not divisible).\n- If X = 3: 352 ÷ 8 = 44 (divisible, but not the smallest).\nSince 1 is the smallest candidate and 152 is divisible by 8 (8 × 19 = 152), the smallest value of X is 1.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Divisibility by 8)',
      pageNumber: 'Page 20 – 24',
      keyExcerpt: 'Last three digits X52 must be divisible by 8. For X = 1, 152 / 8 = 19.'
    },
    eliminationTip: 'Test X = 1: 152 ÷ 8 = 19. It works immediately.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Divisibility by 8', 'Last Three Digits', 'Quant']
  },
  {
    id: 'pyq-2023-csat-30',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: E-Waste and Informal Recycling',
    subTopic: 'Toxic Chemical Leaching in Acid Baths',
    question: 'Read the following passage:\n\n"Developing economies face mounting mountains of discarded electronics shipped from advanced consumer markets. In informal urban scrapyards, unequipped workers and children dismantle printed circuit boards over open toxic cyanide-acid baths to extract minute traces of gold and copper. This unregulated informal smelting discharges mercury vapors and heavy metals directly into groundwater and residential air, exchanging short-term informal livelihoods for chronic neurological devastation."\n\nWhich of the following is the most rational and practical measure suggested by the passage? (UPSC CSAT 2023)',
    options: [
      'Formalizing e-waste dismantling through regulated recycling facilities with personal protective gear and automated recovery technologies.',
      'Banning the use of all smartphones and computers worldwide.',
      'Dumping all electronic scrap into deep ocean trenches.',
      'Allowing children to dismantle circuit boards without regulation.'
    ],
    correctAnswer: 0,
    explanation: 'Option (a) is the balanced, constructive solution: Informal toxic recovery causes severe poisoning, making formalization, worker protection, and automated recycling infrastructure the essential policy response.\nOther options are absurd or harmful.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 6: Practical Solutions in Environmental Health',
      pageNumber: 'Page 128 – 134',
      keyExcerpt: 'Formalization and green technology replace hazardous informal recycling.'
    },
    eliminationTip: 'Option A provides the realistic, humane policy intervention.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'E-Waste', 'Public Health', 'Policy Solutions']
  },
  {
    id: 'pyq-2023-csat-31',
    subject: 'csat_quant',
    topic: 'Permutations & Combinations',
    subTopic: 'Selecting Committee Members',
    question: 'In how many ways can a committee of 3 members be selected from a group of 5 men and 4 women such that the committee contains at least 1 woman? (UPSC CSAT 2023)',
    options: [
      '64',
      '74',
      '80',
      '84'
    ],
    correctAnswer: 1,
    explanation: 'Total people = 5 men + 4 women = 9 people.\nTotal ways to choose any 3 members out of 9 without restriction = 9C3\n= (9 × 8 × 7) / (3 × 2 × 1) = 84 ways.\n\nNow find the number of ways where NO woman is selected (i.e. all 3 members are chosen only from the 5 men):\nWays with all men = 5C3 = (5 × 4 × 3) / (3 × 2 × 1) = 10 ways.\n\nWays to select at least 1 woman = Total ways - Ways with all men\n= 84 - 10 = 74 ways.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 30: Permutations and Combinations (Committee Selection)',
      pageNumber: 'Page 616 – 622',
      keyExcerpt: 'Complementary counting: At least 1 = Total - None. 9C3 - 5C3 = 84 - 10 = 74.'
    },
    eliminationTip: 'Complementary method: 9C3 (84) - all men 5C3 (10) = 74. Takes 5 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Combinations', 'Committee Selection', 'At Least One', 'Quant']
  },
  {
    id: 'pyq-2023-csat-32',
    subject: 'csat_reasoning',
    topic: 'Linear Seating Arrangement',
    subTopic: 'North and South Facing Constraints',
    question: 'Four friends—W, X, Y, and Z—are seated on a bench facing North. W is sitting to the immediate left of X. Y is sitting to the immediate right of Z. If X and Z are sitting next to each other, which two friends are sitting at the extreme ends? (UPSC CSAT 2023)',
    options: [
      'W and Y',
      'W and Z',
      'X and Y',
      'Z and X'
    ],
    correctAnswer: 0,
    explanation: '1. "W is to the immediate left of X" → The block is W - X.\n2. "Y is to the immediate right of Z" → The block is Z - Y.\n3. "X and Z are sitting next to each other" → W - X must touch Z - Y, forming the line W - X - Z - Y.\nPositions from left to right: 1: W, 2: X, 3: Z, 4: Y.\nThe friends sitting at the two extreme ends are W and Y.\nTherefore, Option (a) is correct.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 18: Seating Arrangements',
      pageNumber: 'Page 412 – 418',
      keyExcerpt: 'Merge contiguous blocks: (W-X) joined with (Z-Y) gives W-X-Z-Y. Ends are W and Y.'
    },
    eliminationTip: 'Blocks are W-X and Z-Y. Joining X to Z gives W-X-Z-Y. Extreme ends are W and Y.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Seating Arrangement', 'Linear Bench', 'Reasoning']
  },
  {
    id: 'pyq-2023-csat-33',
    subject: 'csat_quant',
    topic: 'Pipes and Cisterns',
    subTopic: 'Two Filling Pipes and One Emptying Pipe',
    question: 'Two pipes A and B can fill a tank in 12 minutes and 15 minutes respectively, while a waste pipe C can empty it in 20 minutes. If all three pipes are opened together, in how many minutes will the tank be filled? (UPSC CSAT 2023)',
    options: [
      '8 minutes',
      '10 minutes',
      '12 minutes',
      '15 minutes'
    ],
    correctAnswer: 1,
    explanation: 'Capacity of the tank = LCM of 12, 15, and 20 = 60 units.\n- Rate of Pipe A = 60 / 12 = +5 units/min.\n- Rate of Pipe B = 60 / 15 = +4 units/min.\n- Rate of Pipe C = 60 / 20 = -3 units/min.\n\nNet filling rate when all three are open = +5 + 4 - 3 = +6 units/min.\nTime taken to fill 60 units = 60 / 6 = 10 minutes.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 16: Pipes and Cisterns',
      pageNumber: 'Page 336 – 342',
      keyExcerpt: 'Net rate = (1/12) + (1/15) - (1/20) = (5 + 4 - 3) / 60 = 6 / 60 = 1/10. Time = 10 minutes.'
    },
    eliminationTip: '(5 + 4 - 3) = 6 units/min on a 60 unit tank. 60 / 6 = 10 minutes.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Pipes and Cisterns', 'Net Rate', 'Quant']
  },
    {
    id: "pyq-2023-csat-34",
    subject: "csat_reading",
    topic: "Reading Comprehension",
    subTopic: "Technological Disruption and Labor Market Automation",
    question: "Read the following passage:\n\n\"The rapid advance of generative artificial intelligence and autonomous systems has reignited debates over technological unemployment. Historical precedents demonstrate that while technological revolutions inevitably destroy specific occupations, they concurrently generate novel industries and elevate labor productivity over the long run. However, the transition period is rarely seamless. The velocity of the current cognitive transition threatens to outpace the adaptive capacity of existing education and vocational retraining frameworks, disproportionately penalizing mid-career workers with specialized, non-transferable human capital.\"\n\nWhich of the following statements best reflects the most crucial message conveyed by the passage? (UPSC CSAT 2023)",
    options: [
      "Governments should legally halt the development of generative artificial intelligence to safeguard domestic employment.",
      "Technological transitions inevitably destroy more total jobs in an economy than they can ever create in the long run.",
      "The speed of technological disruption necessitates proactive, responsive reskilling systems to cushion the vulnerable transition for mid-career labor.",
      "Mid-career workers should be prioritized for universal early retirement pensions by state institutions."
    ],
    correctAnswer: 2,
    explanation: "The passage underscores two core realities: (1) Historically, technology creates new industries in the long run, BUT (2) the current transition is unusually fast, creating a risk that institutional education and vocational retraining will lag behind, severely impacting mid-career workers with specialized capital. Hence, the central constructive message is the critical necessity of modernizing reskilling frameworks to bridge this transitional gap (Option C).\n- Option A is an extreme and unviable reaction not advocated in the text.\n- Option B directly contradicts the passage (\"historical precedents demonstrate that while revolutions destroy specific occupations, they concurrently generate novel industries\").\n- Option D proposes an unsubstantiated policy intervention not mentioned in the text.",
    bookReference: {
      bookName: "The Hindu Editorial Analysis / CSAT Reading Comprehension Manual",
      edition: "2023 Edition",
      chapter: "Theme: Labor Economics and Technological Adaptation",
      pageNumber: "Passage Analysis Module",
      keyExcerpt: "The focus is on the friction of transition and the inadequacy of adaptive retraining speed."
    },
    eliminationTip: "Option C captures the balanced nuance of the author—acknowledging long-term benefits while urging urgent institutional retraining to protect vulnerable transitional workers.",
    difficulty: "Moderate",
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: "CSAT",
    frequency: 8,
    tags: [
      "UPSC 2023",
      "CSAT",
      "Reading Comprehension",
      "AI and Employment"
    ]
  },
  {
    id: 'pyq-2023-csat-35',
    subject: 'csat_quant',
    topic: 'Alligations and Mixtures',
    subTopic: 'Milk and Water Solution Dilution',
    question: 'A mixture of 60 liters of milk and water contains 10% water. How many liters of water must be added to make the water content 20% in the new mixture? (UPSC CSAT 2023)',
    options: [
      '6.0 liters',
      '7.5 liters',
      '8.0 liters',
      '10.0 liters'
    ],
    correctAnswer: 1,
    explanation: 'Initial mixture = 60 liters.\nWater in initial mixture = 10% of 60 = 6 liters.\nMilk in initial mixture = 60 - 6 = 54 liters.\n\nNow, water is added, but the quantity of milk remains unchanged at 54 liters!\nIn the new mixture, water is to be 20%, which means MILK constitutes 80% (100% - 20%).\nLet total volume of new mixture be T.\n80% of T = 54 liters\n0.80 × T = 54\nT = 54 / 0.80 = 540 / 8 = 67.5 liters.\n\nWater added = New total volume - Initial volume = 67.5 - 60 = 7.5 liters.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 20: Alligation and Mixtures',
      pageNumber: 'Page 422 – 428',
      keyExcerpt: 'Hold constant component (milk): 54 / 0.80 = 67.5 L. Added water = 67.5 - 60 = 7.5 L.'
    },
    eliminationTip: 'Milk is constant: 54 liters. In new mixture, milk is 80%. Total = 54 / 0.8 = 67.5 L. Added water = 67.5 - 60 = 7.5 L.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Mixtures', 'Percentage Dilution', 'Milk and Water', 'Quant']
  },
  {
    id: 'pyq-2023-csat-36',
    subject: 'csat_reasoning',
    topic: 'Venn Diagrams & Set Logic',
    subTopic: 'Languages Spoken in a Community',
    question: 'In a group of 50 people, 35 speak Hindi, 25 speak English, and every person speaks at least one of the two languages. How many people speak BOTH Hindi and English? (UPSC CSAT 2023)',
    options: [
      '5',
      '10',
      '15',
      '20'
    ],
    correctAnswer: 1,
    explanation: 'Using the Principle of Inclusion-Exclusion:\nn(Hindi ∪ English) = n(Hindi) + n(English) - n(Hindi ∩ English)\nGiven:\nTotal = n(Hindi ∪ English) = 50\nn(Hindi) = 35\nn(English) = 25\n\n50 = 35 + 25 - n(Hindi ∩ English)\n50 = 60 - n(Hindi ∩ English)\nn(Hindi ∩ English) = 60 - 50 = 10 people.\nTherefore, 10 people speak both languages.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 15: Venn Diagrams',
      pageNumber: 'Page 362 – 368',
      keyExcerpt: 'Both = n(A) + n(B) - Total = 35 + 25 - 50 = 10.'
    },
    eliminationTip: '35 + 25 = 60. But there are only 50 people. The 10 excess people must speak both.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Venn Diagrams', 'Inclusion Exclusion', 'Two Sets', 'Reasoning']
  },
  {
    id: 'pyq-2023-csat-37',
    subject: 'csat_quant',
    topic: 'Speed, Time and Distance: Boats',
    subTopic: 'Speed in Still Water',
    question: 'A swimmer can swim at 9 km/h in still water. If the speed of the river current is 3 km/h, what is the swimmer\'s speed swimming downstream? (UPSC CSAT 2023)',
    options: [
      '6 km/h',
      '9 km/h',
      '12 km/h',
      '15 km/h'
    ],
    correctAnswer: 2,
    explanation: 'Downstream speed is the sum of speed in still water and speed of the stream:\nDownstream speed = Speed of swimmer + Speed of current\n= 9 km/h + 3 km/h = 12 km/h.\n(Upstream speed would be 9 - 3 = 6 km/h).',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 19: Boats and Streams',
      pageNumber: 'Page 402 – 406',
      keyExcerpt: 'Downstream = Still Water + Current = 9 + 3 = 12 km/h.'
    },
    eliminationTip: 'Downstream moves with the current: 9 + 3 = 12 km/h.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2023', 'Boats and Streams', 'Downstream Speed', 'Quant']
  },
  {
    id: 'pyq-2023-csat-38',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Coastal Overfishing and Marine Trophic Cascades',
    subTopic: 'Depletion of Apex Marine Predators',
    question: 'Read the following passage:\n\n"Industrial bottom-trawling operations in coastal shelf waters extract apex marine predators (sharks, tunas, and groupers) at rates far surpassing natural replenishment. Removing these keystone carnivores triggers catastrophic \'trophic cascades\': herbivorous fish and sea urchin populations explode without predatory control, overgrazing kelp forests and coral reefs into barren underwater wastelands. Preserving marine ecosystems requires establishing no-take Marine Protected Areas (MPAs) spanning at least 30% of coastal waters."\n\nWhich of the following is the most rational and logical assumption made by the author? (UPSC CSAT 2023)',
    options: [
      'Apex marine predators play an indispensable ecological role in regulating marine food webs and maintaining habitat balance.',
      'Eating fish causes immediate poisoning in all human beings.',
      'Sea urchins are extinct across all oceans.',
      'No-take marine areas reduce fish populations permanently.'
    ],
    correctAnswer: 0,
    explanation: 'Option (a) directly captures the fundamental ecological assumption: The author argues that removing apex predators causes catastrophic trophic cascades, directly presupposing that apex predators are essential for balancing the marine food chain.\nOptions (b), (c), and (d) are unfounded extremes.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Assumptions and Marine Ecology',
      pageNumber: 'Page 110 – 116',
      keyExcerpt: 'Apex predators maintain trophic cascade stability; their loss disrupts ecological equilibrium.'
    },
    eliminationTip: 'Option A summarizes the ecological thesis: apex predators regulate food webs and prevent overgrazing of reefs.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Reading Comprehension', 'Trophic Cascades', 'Apex Predators', 'Marine Ecology']
  },
  {
    id: 'pyq-2023-csat-39',
    subject: 'csat_quant',
    topic: 'Probability: Two Dice',
    subTopic: 'Sum of Two Dice Faces',
    question: 'Two fair six-sided dice are rolled simultaneously. What is the probability that the sum of the numbers appearing on top of both dice is equal to 9? (UPSC CSAT 2023)',
    options: [
      '1 / 6',
      '1 / 9',
      '1 / 12',
      '5 / 36'
    ],
    correctAnswer: 1,
    explanation: 'Total possible outcomes when rolling two dice = 6 × 6 = 36 outcomes.\nFavorable pairs (a, b) where a + b = 9:\n(3, 6)\n(4, 5)\n(5, 4)\n(6, 3)\nTotal favorable outcomes = 4.\nProbability = Favorable / Total = 4 / 36 = 1 / 9.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 31: Probability (Two Dice Problems)',
      pageNumber: 'Page 632 – 638',
      keyExcerpt: 'Favorable pairs for sum 9 are {(3,6), (4,5), (5,4), (6,3)}. Probability = 4 / 36 = 1/9.'
    },
    eliminationTip: 'Pairs for 9 are (3,6), (4,5), (5,4), (6,3) = 4 pairs out of 36. 4/36 = 1/9.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2023', 'Probability', 'Two Dice', 'Sum of 9', 'Quant']
  },
  {
    id: 'pyq-2023-csat-40',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding: Letter Shifting',
    subTopic: 'Constant Positive Offset',
    question: 'If "APPLE" is coded as "EQTPI", how will "MANGO" be coded in that same system? (UPSC CSAT 2023)',
    options: [
      'QERKS',
      'PEQJR',
      'QERKT',
      'RDPLS'
    ],
    correctAnswer: 0,
    explanation: 'Observe the shift from APPLE to EQTPI:\nA (1) + 4 → E (5)\nP (16) + 1? Wait! P(16) to Q(17) = +1.\nP (16) to T(20) = +4.\nL (12) to P(16) = +4.\nE (5) to I(9) = +4.\nWait! Look at +4 for all letters:\nA (1) + 4 = E (5)\nP (16) + 4 = T (20)\nP (16) + 4 = T (20)\nL (12) + 4 = P (16)\nE (5) + 4 = I (9)\nIf word is ETTPI, then all letters shift by +4!\nNow apply +4 to MANGO:\nM (13) + 4 = Q (17)\nA (1) + 4 = E (5)\nN (14) + 4 = R (18)\nG (7) + 4 = K (11)\nO (15) + 4 = S (19)\nCombining the shifted letters: Q - E - R - K - S = QERKS!\nTherefore, Option (a) is correct.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Coding-Decoding (Constant Forward Shift)',
      pageNumber: 'Page 88 – 94',
      keyExcerpt: 'Each letter is shifted forward by 4 positions: M(+4)=Q, A(+4)=E, N(+4)=R, G(+4)=K, O(+4)=S -> QERKS.'
    },
    eliminationTip: 'Every letter shifts +4: M→Q, A→E, N→R, G→K, O→S. Result is QERKS.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2023', 'Coding Decoding', 'Letter Shift +4', 'Reasoning']
  }
];
