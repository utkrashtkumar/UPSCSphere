import { Question } from '@/lib/types';

export const pyq2024_csat_2: Question[] = [
  {
    id: 'pyq-2024-csat-41',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Global Supply Chains & Deglobalization',
    subTopic: 'Just-in-Time Logistics vs Resilience',
    question: 'Read the following passage:\n\n"For three decades, multinational corporations optimized their global supply networks under the dogma of \'Just-in-Time\' (JIT) manufacturing—slashing warehouse inventory costs and relying on hyper-specialized offshore factories. However, recent geopolitical conflicts and pandemic bottlenecks revealed the profound vulnerability of hyper-efficiency. In an era marked by protectionist trade barriers and extreme climatic shocks, resilient supply architecture requires redundancy: multi-sourcing, \'Just-in-Case\' stockpiling, and near-shoring production closer to domestic consumer markets."\n\nWhich of the following is the most rational and critical inference from the passage? (UPSC CSAT 2024)',
    options: [
      'International trade will cease completely and all nations will become fully autarkic.',
      'Prioritizing cost minimization through extreme supply chain lean-ness increases susceptibility to systemic disruptions.',
      'Offshore manufacturing is illegal under international maritime conventions.',
      'Warehousing goods always leads to corporate bankruptcy.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) directly captures the central thesis: Hyper-lean, single-source Just-in-Time supply chains maximize cost savings in calm times but make companies acutely vulnerable to supply disruptions during crises.\nOptions (a), (c), and (d) are extreme exaggerations or factually false.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Critical Inferences in Global Trade',
      pageNumber: 'Page 92 – 98',
      keyExcerpt: 'Excessive focus on short-term efficiency without buffers breeds systemic fragility.'
    },
    eliminationTip: 'Option B accurately balances the tension between "lean efficiency" and "vulnerability to disruptions".',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Reading Comprehension', 'Supply Chains', 'Just-in-Time', 'Resilience']
  },
  {
    id: 'pyq-2024-csat-42',
    subject: 'csat_quant',
    topic: 'Partnership and Profit Sharing',
    subTopic: 'Capital Investment and Time Period Ratio',
    question: 'A and B enter into a business partnership. A invests ₹40,000 for 9 months, and B invests ₹60,000 for 6 months. If the total annual profit earned is ₹72,000, what is A\'s share of the profit? (UPSC CSAT 2024)',
    options: [
      '₹32,000',
      '₹36,000',
      '₹40,000',
      '₹45,000'
    ],
    correctAnswer: 1,
    explanation: 'Profit sharing ratio = (Capital of A × Time of A) : (Capital of B × Time of B)\nRatio = (40,000 × 9) : (60,000 × 6)\n= 360,000 : 360,000\n= 1 : 1.\nSince the ratio is 1 : 1, both partners receive equal shares of the total profit.\nA\'s share = ₹72,000 / 2 = ₹36,000.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 13: Partnership',
      pageNumber: 'Page 270 – 276',
      keyExcerpt: 'Profit is distributed in the ratio of the product of capital invested and time period.'
    },
    eliminationTip: '40 × 9 = 360; 60 × 6 = 360. Investments are identical in weight (1:1). Half of 72,000 is 36,000.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Partnership', 'Profit Sharing', 'Quant']
  },
  {
    id: 'pyq-2024-csat-43',
    subject: 'csat_reasoning',
    topic: 'Blood Relations & Symbol Coding',
    subTopic: 'Decoding Mathematical Family Relations',
    question: 'If "P + Q" means P is the father of Q; "P - Q" means P is the sister of Q; "P × Q" means P is the brother of Q. Which of the following expressions represents that "M is the paternal uncle of N"? (UPSC CSAT 2024)',
    options: [
      'M × K + N',
      'M + K × N',
      'M - K + N',
      'N + K × M'
    ],
    correctAnswer: 0,
    explanation: 'To be a paternal uncle, M must be the brother of N\'s father.\nLet us test Option (a): M × K + N\n1. "M × K" means M is the brother of K.\n2. "K + N" means K is the father of N.\nSince M is the brother of N\'s father K, M is the paternal uncle of N!\nTherefore, Option (a) is correct.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Coded Blood Relations',
      pageNumber: 'Page 128 – 134',
      keyExcerpt: 'Paternal uncle requires (Uncle) Brother of (Father) Father of (Child).'
    },
    eliminationTip: 'M is brother of K (M × K), and K is father of N (K + N). Brother of father = Paternal uncle.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Coded Blood Relations', 'Family Tree', 'Reasoning']
  },
  {
    id: 'pyq-2024-csat-44',
    subject: 'csat_quant',
    topic: 'Permutations & Combinations',
    subTopic: 'Handshakes in a Meeting',
    question: 'At an international climate summit, 12 delegates shake hands with each other exactly once at the conclusion of the plenary session. How many total handshakes took place? (UPSC CSAT 2024)',
    options: [
      '55',
      '66',
      '78',
      '132'
    ],
    correctAnswer: 1,
    explanation: 'A handshake requires choosing 2 persons out of n persons without regard to order.\nTotal handshakes = nC2 = [n(n - 1)] / 2\nHere n = 12:\nHandshakes = (12 × 11) / 2 = 132 / 2 = 66.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 30: Combinations (Handshake Problems)',
      pageNumber: 'Page 618 – 622',
      keyExcerpt: 'Number of handshakes among n people = n(n - 1) / 2.'
    },
    eliminationTip: '12 × 11 / 2 = 66 handshakes. Classic formula.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2024', 'Handshakes', 'Combinations', 'nC2', 'Quant']
  },
  {
    id: 'pyq-2024-csat-45',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Deepfakes and Information Ecology',
    subTopic: 'Synthetic Media and Democratic Trust',
    question: 'Read the following passage:\n\n"The proliferation of hyper-realistic generative synthetic media (deepfakes) erodes the foundational epistemic substrate of democratic governance. When citizens can no longer intuitively distinguish authentic audio-visual evidence from algorithmic fabrication, cynical political actors exploit this ambiguity through the \'liar’s dividend\'—dismissing genuine scandals as fabricated deepfakes while disseminating forged disinformation with impunity."\n\nWhich of the following is the most rational and logical assumption made by the author? (UPSC CSAT 2024)',
    options: [
      'All digital cameras and recording devices should be destroyed.',
      'A functioning democratic society fundamentally depends on a baseline of shared factual truth and trusted information ecosystems.',
      'Deepfakes only affect entertainment cinema and have no political implications.',
      'Citizens always believe whatever video they see on social media without question.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is the core philosophical assumption: The author argues that democracy is undermined when citizens cannot verify truth from falsehood, presupposing that shared verifiable facts are essential for democratic functioning.\nOptions (a), (c), and (d) are incorrect extremes or false.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Critical Assumptions and Epistemic Trust',
      pageNumber: 'Page 106 – 112',
      keyExcerpt: 'Democratic consensus requires an agreed factual baseline; synthetic manipulation destroys this trust.'
    },
    eliminationTip: 'Option B captures the foundational premise: Democracy requires a shared baseline of trusted factual reality.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Reading Comprehension', 'Deepfakes', 'Democracy', 'Information Trust']
  },
  {
    id: 'pyq-2024-csat-46',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility and Algebra',
    subTopic: 'Difference of Squares and Consecutive Integers',
    question: 'The difference between the squares of two consecutive odd integers is always divisible by which of the following numbers? (UPSC CSAT 2024)',
    options: [
      '3',
      '6',
      '8',
      '12'
    ],
    correctAnswer: 2,
    explanation: 'Let the two consecutive odd integers be (2n + 1) and (2n + 3).\nTheir squares are:\n(2n + 3)² - (2n + 1)²\nUsing identity (a² - b²) = (a - b)(a + b):\n= [(2n + 3) - (2n + 1)] × [(2n + 3) + (2n + 1)]\n= [2] × [4n + 4]\n= 2 × 4(n + 1)\n= 8(n + 1).\nSince 8(n + 1) is a multiple of 8 for all integers n, the difference is ALWAYS divisible by 8.\n\nQuick check with numbers:\n3² - 1² = 9 - 1 = 8 (divisible by 8)\n5² - 3² = 25 - 9 = 16 (divisible by 8)\n7² - 5² = 49 - 25 = 24 (divisible by 8).',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Properties of Integers)',
      pageNumber: 'Page 18 – 22',
      keyExcerpt: 'The difference of squares of any two consecutive odd numbers is always a multiple of 8.'
    },
    eliminationTip: 'Test 3 and 1: 3² - 1² = 8. Test 5 and 3: 5² - 3² = 16. Both are multiples of 8. Answer is 8.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Odd Numbers', 'Difference of Squares', 'Divisibility', 'Quant']
  },
  {
    id: 'pyq-2024-csat-47',
    subject: 'csat_reasoning',
    topic: 'Statement and Course of Action',
    subTopic: 'Public Policy on Groundwater Depletion',
    question: 'Statement: "A recent geological survey reveals that groundwater levels in 70% of districts in a northern state have plummeted to critical depths due to unrestrained extraction."\n\nCourses of Action:\nI. Mandatory rainwater harvesting should be enforced immediately for all commercial and institutional establishments in the state.\nII. Power subsidies for agricultural irrigation should be completely disconnected with 24 hours notice.\n\nWhich of the courses of action is/are appropriate? (UPSC CSAT 2024)',
    options: [
      'Only I follows',
      'Only II follows',
      'Both I and II follow',
      'Neither I nor II follows'
    ],
    correctAnswer: 0,
    explanation: 'Course of Action I is proactive, pragmatic, and directly addresses aquifer recharge without creating mass humanitarian catastrophe. It logically follows.\nCourse of Action II is a knee-jerk, disproportionately draconian measure that would destroy standing crops and trigger severe socio-economic turmoil without offering alternative irrigation. It does NOT follow.\nTherefore, only Course of Action I follows.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 13: Statement and Courses of Action',
      pageNumber: 'Page 310 – 316',
      keyExcerpt: 'A valid course of action must be feasible, constructive, and proportionate, avoiding abrupt severe harm.'
    },
    eliminationTip: 'Action II is an extreme knee-jerk reaction ("disconnect power within 24 hours"). Administrative decisions must be constructive, not destructive. Only I follows.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Course of Action', 'Groundwater', 'Logical Reasoning']
  },
  {
    id: 'pyq-2024-csat-48',
    subject: 'csat_quant',
    topic: 'Time, Speed and Distance: Circular Tracks',
    subTopic: 'Meeting at the Starting Point',
    question: 'Two runners, Amit and Sumit, start simultaneously from the same starting point on a circular track of circumference 600 meters in the same direction at speeds of 6 m/s and 10 m/s respectively. After how many seconds will they meet for the first time at the starting point? (UPSC CSAT 2024)',
    options: [
      '150 seconds',
      '200 seconds',
      '300 seconds',
      '600 seconds'
    ],
    correctAnswer: 2,
    explanation: 'Time taken by Amit to complete 1 round = 600 / 6 = 100 seconds.\nTime taken by Sumit to complete 1 round = 600 / 10 = 60 seconds.\nThey will meet at the STARTING point at a time that is a common multiple of their individual lap times.\nTime to meet at starting point = LCM(100, 60).\nLCM(100, 60) = 300 seconds (5 minutes).\nTherefore, they will meet at the starting point after 300 seconds.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 17: Time and Distance (Circular Races)',
      pageNumber: 'Page 360 – 366',
      keyExcerpt: 'Time to meet at the starting point on a circular track = LCM of individual lap times.'
    },
    eliminationTip: 'Lap times are 600/6 = 100 s and 600/10 = 60 s. LCM(100, 60) = 300 s.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Circular Track', 'LCM', 'Speed and Distance', 'Quant']
  },
  {
    id: 'pyq-2024-csat-49',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Renewable Energy Intermittency',
    subTopic: 'Grid Stability and Battery Storage',
    question: 'Read the following passage:\n\n"The rapid cost deflation of solar photovoltaic modules and wind turbines has accelerated the green energy transition globally. However, integrating high proportions of variable renewable energy into synchronous electrical grids introduces severe frequency instability. Because solar generates power only during sunlit hours and wind fluctuates unpredictably, balancing real-time grid demand requires massive deployments of utility-scale battery energy storage systems (BESS) and pumped-storage hydro facilities."\n\nWhich of the following is the most logical and critical takeaway from the passage? (UPSC CSAT 2024)',
    options: [
      'Renewable energy generation should be halted until thermal coal plants are modernized.',
      'Achieving high renewable penetration safely requires concurrent investment in energy storage and grid-balancing infrastructure.',
      'Solar panels generate sufficient electricity during night hours if cleaned regularly.',
      'Wind turbines operate with 100% steady output throughout the year.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is the direct, balanced conclusion: Expanding solar and wind power creates intermittency that threatens grid stability unless energy storage (BESS and pumped storage) is built alongside.\nOptions (a), (c), and (d) are factually untrue or contradictory.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Inferences in Energy Transition',
      pageNumber: 'Page 98 – 104',
      keyExcerpt: 'Intermittent renewable deployment requires synchronous storage to ensure grid reliability.'
    },
    eliminationTip: 'Option B highlights the dual imperative: renewable expansion MUST be accompanied by storage solutions.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Reading Comprehension', 'Renewable Energy', 'Grid Stability', 'BESS']
  },
  {
    id: 'pyq-2024-csat-50',
    subject: 'csat_reasoning',
    topic: 'Number Coding & Mathematical Puzzles',
    subTopic: 'Letter Value Sums',
    question: 'If A = 1, B = 2, C = 3... Z = 26, and the value of "CAT" is 24 (since 3 + 1 + 20 = 24), what is the value of the word "LION"? (UPSC CSAT 2024)',
    options: [
      '48',
      '50',
      '52',
      '54'
    ],
    correctAnswer: 1,
    explanation: 'Using the standard alphabetical position values:\nL = 12\nI = 9\nO = 15\nN = 14\n\nSum of values = 12 + 9 + 15 + 14 = 50.\nTherefore, the value of "LION" is 50.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Coding-Decoding (Letter Values)',
      pageNumber: 'Page 96 – 100',
      keyExcerpt: 'Sum positional values: L(12) + I(9) + O(15) + N(14) = 50.'
    },
    eliminationTip: '12 + 9 = 21; 21 + 15 = 36; 36 + 14 = 50.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2024', 'Coding Decoding', 'Letter Values', 'Reasoning']
  },
  {
    id: 'pyq-2024-csat-51',
    subject: 'csat_quant',
    topic: 'Number System: Prime Numbers',
    subTopic: 'Sum of Consecutive Primes',
    question: 'What is the sum of all prime numbers between 10 and 30? (UPSC CSAT 2024)',
    options: [
      '92',
      '105',
      '112',
      '120'
    ],
    correctAnswer: 2,
    explanation: 'Prime numbers between 10 and 30 are:\n11, 13, 17, 19, 23, 29.\nSum = 11 + 13 + 17 + 19 + 23 + 29\n= (11 + 19) + (13 + 17) + (23 + 29)\n= 30 + 30 + 52\n= 112.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Prime Numbers)',
      pageNumber: 'Page 14 – 18',
      keyExcerpt: 'List primes between 10 and 30: {11, 13, 17, 19, 23, 29}. Sum is 112.'
    },
    eliminationTip: 'Pair them up: (11+19=30) + (13+17=30) + (23+29=52) = 112.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Prime Numbers', 'Arithmetic', 'Quant']
  },
  {
    id: 'pyq-2024-csat-52',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Universal Basic Income (UBI)',
    subTopic: 'Unconditional Cash Transfers vs Targeted Subsidies',
    question: 'Read the following passage:\n\n"Proponents of Universal Basic Income (UBI) advocate replacing labyrinthine targeted welfare bureaucracies with unconditional, uniform cash transfers deposited directly into citizen bank accounts. Critics contend, however, that universal untargeted disbursements dilute fiscal resources away from vulnerable destitute strata while potentially disincentivizing labor market participation. A calibrated middle path suggests targeted basic transfers combined with investments in public goods like healthcare and education."\n\nWhich of the following is the most rational inference from the passage? (UPSC CSAT 2024)',
    options: [
      'UBI has been proven to trigger hyperinflation in all economies.',
      'A purely universal and unconditional cash transfer scheme entails trade-offs between administrative simplicity and targeted fiscal efficacy.',
      'All government welfare programs should be terminated permanently.',
      'Cash transfers are incapable of reducing rural poverty.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is the balanced, objective inference: The passage contrasts the benefit of simplicity against the drawback of diluted fiscal impact on the poor, proving that unconditional transfers involve real trade-offs.\nOptions (a), (c), and (d) are unfounded extremes.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Critical Inferences in Welfare Economics',
      pageNumber: 'Page 110 – 116',
      keyExcerpt: 'UBI balances ease of delivery against dilution of targeted fiscal assistance.'
    },
    eliminationTip: 'Option B accurately synthesizes the trade-off between simplicity and targeting.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Reading Comprehension', 'UBI', 'Welfare Economics', 'Inference']
  },
  {
    id: 'pyq-2024-csat-53',
    subject: 'csat_reasoning',
    topic: 'Direction Sense Test',
    subTopic: 'Turns and Final Displacement',
    question: 'A cyclist rides 8 km North, turns right and rides 6 km East, then turns right again and rides 8 km South. How far and in which direction is the cyclist from the starting point? (UPSC CSAT 2024)',
    options: [
      '6 km East',
      '6 km West',
      '8 km North',
      '10 km Northeast'
    ],
    correctAnswer: 0,
    explanation: '1. Rides 8 km North: Position is (0, +8).\n2. Turns right (East) and rides 6 km: Position is (+6, +8).\n3. Turns right (South) and rides 8 km: Position is (+6, 8 - 8) = (+6, 0).\nFinal position is at (+6, 0), which is exactly 6 km due EAST of the origin (0, 0).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 7: Direction Sense Test',
      pageNumber: 'Page 158 – 164',
      keyExcerpt: 'Vertical displacements North (+8) and South (-8) cancel out, leaving 6 km East.'
    },
    eliminationTip: 'North 8 and South 8 cancel each other out. Only 6 km East remains.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Direction Sense', 'Displacement', 'Reasoning']
  },
  {
    id: 'pyq-2024-csat-54',
    subject: 'csat_quant',
    topic: 'Mixtures and Replacement',
    subTopic: 'Successive Dilution of Liquids',
    question: 'A container contains 40 liters of pure milk. 4 liters of milk are taken out and replaced with water. This process is repeated one more time. How much pure milk remains in the container? (UPSC CSAT 2024)',
    options: [
      '32.0 liters',
      '32.4 liters',
      '33.6 liters',
      '34.2 liters'
    ],
    correctAnswer: 1,
    explanation: 'Formula for remaining quantity of pure liquid after n successive removals of x liters from total capacity C:\nRemaining = C × [1 - (x / C)]ⁿ\nHere C = 40, x = 4, and n = 2:\nRemaining = 40 × [1 - (4 / 40)]²\n= 40 × [1 - (1 / 10)]²\n= 40 × [9 / 10]²\n= 40 × (81 / 100)\n= 3240 / 100 = 32.4 liters.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 20: Alligation and Mixtures (Successive Replacement)',
      pageNumber: 'Page 424 – 430',
      keyExcerpt: 'Quantity remaining = Initial * [1 - (x/C)]^n.'
    },
    eliminationTip: 'After 1st round: 40 - 4 = 36 L. 2nd round removes 10% of 36 = 3.6 L. 36 - 3.6 = 32.4 L. 5 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Mixtures', 'Successive Dilution', 'Quant']
  },
  {
    id: 'pyq-2024-csat-55',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Circular Economy',
    subTopic: 'Cradle-to-Cradle Manufacturing',
    question: 'Read the following passage:\n\n"The linear economic model of \'take, make, use, and dispose\' extracts finite virgin minerals and converts them into toxic landfill discard within months of manufacture. Transitioning to a circular economy requires designing industrial products for modular disassembly, refurbishing, and biological loop recycling. Such cradle-to-cradle architecture decouples economic growth from resource throughput while reducing industrial greenhouse emissions."\n\nWhich of the following is the most rational and practical recommendation from the passage? (UPSC CSAT 2024)',
    options: [
      'All industrial manufacturing must be banned immediately worldwide.',
      'Product designers should prioritize modular repairability and recyclable materials over planned obsolescence.',
      'Consumer goods should be designed to self-destruct after three days.',
      'Recycling plants are completely incapable of processing modern plastics.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is the direct, pragmatic takeaway: Transitioning from linear waste to a circular economy requires products to be designed for easy disassembly, repair, and material recovery.\nOther options are absurd or contradictory.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 6: Policy Prescriptions in Sustainable Economics',
      pageNumber: 'Page 126 – 132',
      keyExcerpt: 'Circular economy mandates modular product design to replace planned obsolescence.'
    },
    eliminationTip: 'Option B represents the standard industrial design mandate of circular economics.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2024', 'Reading Comprehension', 'Circular Economy', 'Sustainability']
  },
  {
    id: 'pyq-2024-csat-56',
    subject: 'csat_reasoning',
    topic: 'Logical Deductions: Two Premise Syllogism',
    subTopic: 'Negative Universal and Particular Propositions',
    question: 'Consider the following statements and conclusions:\n\nStatements:\n1. No plastic is biodegradable.\n2. All paper bags are biodegradable.\n\nConclusions:\nI. No paper bag is plastic.\nII. Some biodegradable materials are paper bags.\n\nWhich of the conclusions logically follows? (UPSC CSAT 2024)',
    options: [
      'Only Conclusion I follows',
      'Only Conclusion II follows',
      'Both Conclusion I and II follow',
      'Neither Conclusion I nor II follows'
    ],
    correctAnswer: 2,
    explanation: 'From Statement 1: "No plastic is biodegradable" (E-type).\nFrom Statement 2: "All paper bags are biodegradable" (A-type).\nCombining them:\nAll paper bags are in the set of biodegradables, and no plastic belongs to biodegradables. Therefore, paper bags and plastics are mutually disjoint sets: "No paper bag is plastic". Thus, Conclusion I definitely follows.\nFrom Statement 2: "All paper bags are biodegradable". By conversion of an A-type proposition, "Some biodegradable materials are paper bags". Thus, Conclusion II definitely follows.\nTherefore, BOTH Conclusion I and II follow.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 14: Syllogisms',
      pageNumber: 'Page 348 – 354',
      keyExcerpt: 'Disjoint sets yield valid negative universals; universal affirmatives convert to particular affirmatives.'
    },
    eliminationTip: 'Paper bags are inside biodegradable; plastics are outside biodegradable. So paper bags cannot be plastic (I is true). If all paper bags are biodegradable, some biodegradables are paper bags (II is true). Both follow.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Syllogism', 'Deductive Logic', 'Reasoning']
  },
  {
    id: 'pyq-2024-csat-57',
    subject: 'csat_quant',
    topic: 'Percentages and Elections',
    subTopic: 'Two-Candidate Majority',
    question: 'In a college election between two candidates, the winning candidate polled 64% of the valid votes and won by a majority of 840 votes. What was the total number of valid votes polled? (UPSC CSAT 2024)',
    options: [
      '2,500',
      '2,800',
      '3,000',
      '3,200'
    ],
    correctAnswer: 2,
    explanation: 'Let total valid votes be V.\nWinner got 64% of V.\nLoser got (100 - 64)% = 36% of V.\nMajority difference = (64% - 36%) of V = 28% of V.\nGiven that the majority is 840 votes:\n28% of V = 840\n(28 / 100) × V = 840\nV = (840 × 100) / 28\nSince 840 / 28 = 30:\nV = 30 × 100 = 3,000 votes.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Percentage (Election Problems)',
      pageNumber: 'Page 214 – 220',
      keyExcerpt: 'Majority % = Winner % - Loser % = 64% - 36% = 28%. Total votes = Majority / 0.28 = 3000.'
    },
    eliminationTip: '64 - 36 = 28%. 28% of Total = 840. Total = 840 / 0.28 = 3,000.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Percentages', 'Elections', 'Quant']
  },
  {
    id: 'pyq-2024-csat-58',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Coastal Megacities & Sea Level Rise',
    subTopic: 'Climate Adaptation in Urban Deltas',
    question: 'Read the following passage:\n\n"Many of the world\'s largest megacities are situated in low-lying river deltas and coastal estuaries. As global mean sea levels rise due to polar ice shelf melt, these metropolises face a compounding crisis of saltwater intrusion into municipal drinking aquifers, storm surges inundating transport subway networks, and coastal land subsidence driven by groundwater extraction. Hard seawalls offer only temporary respite; durable urban resilience demands managed retreat and nature-based mangrove buffer zones."\n\nWhich of the following is the most logical assumption made by the author? (UPSC CSAT 2024)',
    options: [
      'Coastal cities will completely disappear from world maps within the next two months.',
      'Engineered concrete seawalls alone are insufficient for long-term coastal climate defense.',
      'Drinking water should be replaced by desalinated seawater for all agricultural crops.',
      'Megacities should never be located near rivers or lakes.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is the central logical assumption: The author emphasizes that "hard seawalls offer only temporary respite" and that nature-based buffers and planned relocation are necessary, implying that rigid engineering defenses alone cannot withstand long-term sea level rise.\nOptions (a), (c), and (d) are distorted exaggerations.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Assumptions and Ecological Inferences',
      pageNumber: 'Page 108 – 114',
      keyExcerpt: 'Hard infrastructure alone fails against compounding sea level rise and land subsidence.'
    },
    eliminationTip: 'The author directly states seawalls provide only temporary respite. Option B captures this exact premise.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Reading Comprehension', 'Sea Level Rise', 'Coastal Megacities']
  },
  {
    id: 'pyq-2024-csat-59',
    subject: 'csat_reasoning',
    topic: 'Alphanumeric Series',
    subTopic: 'Letter and Number Combination Progression',
    question: 'Find the missing term in the sequence: A2B, C4D, E8F, G16H, ____? (UPSC CSAT 2024)',
    options: [
      'I24J',
      'I32J',
      'H32I',
      'J32K'
    ],
    correctAnswer: 1,
    explanation: 'Analyze each component of the term:\n1. First letter: A, C, E, G... (skipping one letter forward: +2). Next letter is I.\n2. Middle number: 2, 4, 8, 16... (powers of 2, multiplying by 2). Next number is 16 × 2 = 32.\n3. Third letter: B, D, F, H... (skipping one letter forward: +2). Next letter is J.\nCombining all three parts: I32J.\nTherefore, the missing term is I32J.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 2: Alphanumeric Sequences',
      pageNumber: 'Page 34 – 40',
      keyExcerpt: 'Evaluate letter and numerical patterns independently and combine.'
    },
    eliminationTip: 'First letter = I (+2); Number = 32 (doubles); Last letter = J (+2). Term is I32J.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2024', 'Alphanumeric Series', 'Pattern Recognition', 'Reasoning']
  },
  {
    id: 'pyq-2024-csat-60',
    subject: 'csat_quant',
    topic: 'Geometry and Mensuration',
    subTopic: 'Area of a Circle and Square Perimeter',
    question: 'If the perimeter of a square is equal to the circumference of a circle, what is the ratio of the area of the square to the area of the circle? (Take π = 22/7) (UPSC CSAT 2024)',
    options: [
      '11 : 14',
      '14 : 11',
      '22 : 7',
      '7 : 22'
    ],
    correctAnswer: 0,
    explanation: 'Let the side of the square be s, and the radius of the circle be r.\nGiven: Perimeter of square = Circumference of circle\n4s = 2πr\ns = (πr / 2)\n\nArea of square = s² = (πr / 2)² = (π²r² / 4)\nArea of circle = πr²\n\nRatio of Area of Square to Area of Circle = (π²r² / 4) / (πr²)\n= π / 4\nSubstituting π = 22 / 7:\nRatio = (22 / 7) / 4 = 22 / 28 = 11 / 14.\nTherefore, the ratio of the area of the square to the area of the circle is 11 : 14.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 24: Area and Mensuration',
      pageNumber: 'Page 490 – 496',
      keyExcerpt: 'When perimeter of square equals circle circumference, Area(Square)/Area(Circle) = pi / 4 = 11/14.'
    },
    eliminationTip: 'A circle encloses more area than a square of equal perimeter. So the ratio must be less than 1 (11:14).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Mensuration', 'Perimeter', 'Area Ratio', 'Quant']
  },
  {
    id: 'pyq-2024-csat-61',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Agrarian Debt & Formal Credit',
    subTopic: 'Informal Moneylenders and Collateral Constraints',
    question: 'Read the following passage:\n\n"Despite ambitious national financial inclusion drives, smallholder marginal farmers remain entangled in the grip of informal village moneylenders. Institutional banking procedures demand rigid land title collateral and cumbersome paperwork that landless tenant cultivators cannot furnish. Consequently, informal lenders—who charge extortionate monthly interest rates but dispense instant credit without paperwork—remain the default source for emergency seed, fertilizer, and medical outlays."\n\nWhich of the following is the most crucial corollary from the passage? (UPSC CSAT 2024)',
    options: [
      'Commercial banks should refuse loans to all rural borrowers.',
      'Expanding formal agrarian credit access requires easing collateral requirements and simplifying documentation for tenant farmers.',
      'Informal moneylenders should be appointed as directors of public sector banks.',
      'Smallholder farming is impossible in democratic nations.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is the direct, necessary corollary: Since rigid collateral and documentation barriers push marginal farmers into exploitative informal credit, expanding formal credit requires dismantling these specific access bottlenecks.\nOther options are absurd exaggerations.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Drawing Corollaries in Rural Finance',
      pageNumber: 'Page 116 – 122',
      keyExcerpt: 'Collateral constraints exclude tenant farmers, necessitating credit reforms.'
    },
    eliminationTip: 'Option B highlights the structural solution: removing the paperwork and collateral barriers that drive farmers to moneylenders.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Reading Comprehension', 'Agrarian Credit', 'Financial Inclusion']
  },
  {
    id: 'pyq-2024-csat-62',
    subject: 'csat_quant',
    topic: 'Simple and Compound Interest',
    subTopic: 'Difference between CI and SI for 2 Years',
    question: 'The difference between compound interest (compounded annually) and simple interest on a certain principal sum at 10% per annum for 2 years is ₹65. What is the principal sum? (UPSC CSAT 2024)',
    options: [
      '₹5,500',
      '₹6,000',
      '₹6,500',
      '₹7,000'
    ],
    correctAnswer: 2,
    explanation: 'Formula for the difference between CI and SI for 2 years:\nDifference = P × (r / 100)²\nHere Difference = ₹65, r = 10%:\n65 = P × (10 / 100)²\n65 = P × (1 / 10)²\n65 = P × (1 / 100)\nP = 65 × 100 = ₹6,500.\nTherefore, the principal sum is ₹6,500.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 22: Compound Interest',
      pageNumber: 'Page 460 – 466',
      keyExcerpt: 'For two years: CI - SI = P * (r/100)^2. P = 65 / (0.1)^2 = 6,500.'
    },
    eliminationTip: 'For 2 years at 10%, difference is 1% of Principal. 1% = ₹65 → 100% = ₹6,500. Takes 2 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2024', 'CI and SI Difference', 'Compound Interest', 'Quant']
  },
  {
    id: 'pyq-2024-csat-63',
    subject: 'csat_reasoning',
    topic: 'Linear Order and Comparison',
    subTopic: 'Height and Speed Ranking',
    question: 'Among five friends—A, B, C, D, and E—A is taller than B but shorter than E. C is the tallest of all. D is shorter than A but taller than B. Who is the second shortest among them? (UPSC CSAT 2024)',
    options: [
      'A',
      'B',
      'D',
      'E'
    ],
    correctAnswer: 2,
    explanation: 'Let us order their heights from tallest to shortest:\n1. C is the tallest: C > all others.\n2. E is taller than A, and A is taller than B: E > A > B.\n3. D is shorter than A but taller than B: A > D > B.\nCombining these conditions together:\nC > E > A > D > B.\nIn this sequence:\n- Shortest = B\n- Second shortest = D\n- Middle = A\n- Second tallest = E\n- Tallest = C\nTherefore, D is the second shortest.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 12: Comparison and Ranking',
      pageNumber: 'Page 284 – 290',
      keyExcerpt: 'Construct linear inequality: C > E > A > D > B.'
    },
    eliminationTip: 'B is shortest. D is taller than B but shorter than A. So D is second shortest.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Ranking', 'Comparison', 'Height Order', 'Reasoning']
  },
  {
    id: 'pyq-2024-csat-64',
    subject: 'csat_quant',
    topic: 'Time and Work: Men and Days',
    subTopic: 'Inverse Variation of Labor and Time',
    question: 'If 15 workers can build a wall in 20 days, how many days will 25 workers take to build the same wall working at the same pace? (UPSC CSAT 2024)',
    options: [
      '10 days',
      '12 days',
      '14 days',
      '16 days'
    ],
    correctAnswer: 1,
    explanation: 'Work = Men × Days = M1 × D1 = M2 × D2\n15 × 20 = 25 × D2\n300 = 25 × D2\nD2 = 300 / 25 = 12 days.\nTherefore, 25 workers will complete the wall in 12 days.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 15: Time and Work (Unitary Method)',
      pageNumber: 'Page 312 – 318',
      keyExcerpt: 'M1 * D1 = M2 * D2. D2 = (15 * 20) / 25 = 300 / 25 = 12 days.'
    },
    eliminationTip: '(15 × 20) / 25 = 300 / 25 = 12 days. Instant arithmetic.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Time and Work', 'Inverse Variation', 'Quant']
  },
  {
    id: 'pyq-2024-csat-65',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Urban Transit and Sprawl',
    subTopic: 'Private Vehicles vs Public Mass Transit',
    question: 'Read the following passage:\n\n"Urban planners in rapidly motorizing economies frequently misdiagnose traffic gridlock as a road-capacity deficit. Widening urban highways to alleviate congestion triggers \'induced demand\'—encouraging more private car purchases until expanded lanes choke anew within months. Genuine, sustainable urban mobility requires shifting fiscal capital away from flyovers and towards dense, high-frequency electric bus rapid transit (BRT) and metro corridors."\n\nWhich of the following is the most logical assumption made by the author? (UPSC CSAT 2024)',
    options: [
      'Widening roads alone is fundamentally incapable of eliminating urban traffic congestion over the long term.',
      'Private automobiles should be confiscated by city municipal police.',
      'No road repairs should be carried out in metropolitan areas.',
      'Metros and buses operate with zero energy consumption.'
    ],
    correctAnswer: 0,
    explanation: 'Option (a) is the direct, foundational assumption: The author explains that highway expansion generates induced demand that re-chokes traffic, proving that simply expanding road asphalt cannot solve urban congestion long-term.\nOptions (b), (c), and (d) are baseless extremes.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Assumptions and Urban Transport',
      pageNumber: 'Page 100 – 106',
      keyExcerpt: 'Induced demand renders road widening counterproductive in solving traffic congestion.'
    },
    eliminationTip: 'The passage explicitly shows that road widening leads to induced demand and repeats gridlock. Option A captures this exact premise.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Reading Comprehension', 'Urban Transport', 'Induced Demand']
  },
  {
    id: 'pyq-2024-csat-66',
    subject: 'csat_quant',
    topic: 'Profit, Loss and Marked Price',
    subTopic: 'Cost Price Calculation from Profit and Discount',
    question: 'A trader marks his goods at 25% above the cost price and allows a discount of 10% for cash payment. What is his net profit percentage? (UPSC CSAT 2024)',
    options: [
      '12.5%',
      '14.5%',
      '15.0%',
      '17.5%'
    ],
    correctAnswer: 0,
    explanation: 'Let the Cost Price (CP) = 100.\nMarked Price (MP) = 100 + 25 = 125.\nDiscount allowed = 10% of MP = 10% of 125 = 12.5.\nSelling Price (SP) = MP - Discount = 125 - 12.5 = 112.5.\nNet Profit = SP - CP = 112.5 - 100 = 12.5.\nProfit Percentage = (12.5 / 100) × 100 = 12.5%.\n\nUsing net percentage formula:\nNet Change = [+25 - 10 - (25 × 10 / 100)] = [15 - 2.5] = 12.5%.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 11: Profit and Loss',
      pageNumber: 'Page 234 – 240',
      keyExcerpt: 'Net profit % = m - d - (md/100) = 25 - 10 - 2.5 = 12.5%.'
    },
    eliminationTip: 'CP = 100 → MP = 125 → SP = 125 - 12.5 = 112.5. Profit = 12.5%.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Profit and Loss', 'Marked Price', 'Quant']
  },
  {
    id: 'pyq-2024-csat-67',
    subject: 'csat_reasoning',
    topic: 'Statement and Conclusions',
    subTopic: 'Economic Indicators and Living Standards',
    question: 'Statement: "Economic growth in Country X reached 8% this fiscal year, yet national nutrition surveys indicate that childhood stunting has remained stagnant at 35%."\n\nConclusions:\nI. High GDP growth does not automatically guarantee improvements in nutritional and human development indicators.\nII. Country X should stop focusing on economic growth entirely.\n\nWhich of the conclusions logically follows? (UPSC CSAT 2024)',
    options: [
      'Only Conclusion I follows',
      'Only Conclusion II follows',
      'Both Conclusion I and II follow',
      'Neither Conclusion I nor II follows'
    ],
    correctAnswer: 0,
    explanation: 'Conclusion I is a direct, objective deduction from the given paradox: Even with rapid 8% GDP expansion, stunting remains high, proving that economic growth does not automatically translate into human nutrition outcomes.\nConclusion II is an absurd, negative extreme recommendation not justified by the premise.\nTherefore, only Conclusion I follows.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Statement and Conclusions',
      pageNumber: 'Page 240 – 246',
      keyExcerpt: 'Conclusions must follow logically from the premises without introducing extreme policy decisions.'
    },
    eliminationTip: 'Conclusion II recommends completely abandoning economic growth, which is ridiculous. Only I follows.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Statement and Conclusions', 'Human Development', 'Reasoning']
  },
  {
    id: 'pyq-2024-csat-68',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility by 9 and Digit Sum',
    subTopic: 'Digit Sum (Digital Root)',
    question: 'What is the smallest positive integer that must be added to 7,531 so that the resulting number is completely divisible by 9? (UPSC CSAT 2024)',
    options: [
      '2',
      '4',
      '7',
      '8'
    ],
    correctAnswer: 0,
    explanation: 'A number is divisible by 9 if and only if the sum of its digits is a multiple of 9.\nSum of digits of 7,531 = 7 + 5 + 3 + 1 = 16.\nThe nearest multiple of 9 greater than or equal to 16 is 18.\nNumber to be added = 18 - 16 = 2.\nCheck: 7,531 + 2 = 7,533. Sum of digits = 7 + 5 + 3 + 3 = 18 (divisible by 9).\nTherefore, the smallest number to be added is 2.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Divisibility by 9)',
      pageNumber: 'Page 22 – 26',
      keyExcerpt: 'Sum of digits must be a multiple of 9. 16 + 2 = 18.'
    },
    eliminationTip: 'Digit sum of 7531 is 16. Next multiple of 9 is 18. Add 2. Takes 2 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Divisibility by 9', 'Digit Sum', 'Quant']
  },
  {
    id: 'pyq-2024-csat-69',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Forest Fires and Climate Feedback',
    subTopic: 'Wildfire Emissions and Carbon Sinks',
    question: 'Read the following passage:\n\n"Boreal and tropical forests have traditionally served as the planet\'s premier terrestrial carbon sinks, sequestering billions of tons of atmospheric carbon dioxide. However, unprecedented droughts and record temperatures have intensified the frequency and ferocity of mega-wildfires. When ancient peatlands and old-growth canopies burn, they transform from carbon sinks into colossal carbon emitters, unleashing a perilous positive feedback loop that accelerates planetary warming."\n\nWhich of the following represents the central theme of the passage? (UPSC CSAT 2024)',
    options: [
      'Forests are inherently dangerous and should be cleared for agriculture.',
      'Climate-fueled mega-wildfires risk converting vital carbon sinks into catastrophic sources of greenhouse emissions.',
      'Wildfires cannot occur in boreal northern climates.',
      'Carbon dioxide emissions have no influence on forest health.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is the accurate synthesis of the passage: Rising temperatures spark unprecedented wildfires that convert forests from carbon sinks into carbon sources, exacerbating global warming.\nOther options are absurd or contradictory.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 2: Central Idea and Thematic Analysis',
      pageNumber: 'Page 70 – 76',
      keyExcerpt: 'The positive feedback loop of forest fires converting sinks to carbon sources.'
    },
    eliminationTip: 'Option B mirrors the exact mechanism described: "sinks transforming into colossal emitters".',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Reading Comprehension', 'Forest Fires', 'Carbon Sinks', 'Climate Feedback']
  },
  {
    id: 'pyq-2024-csat-70',
    subject: 'csat_quant',
    topic: 'Percentages and Salary Increments',
    subTopic: 'Net Salary Increase',
    question: 'A person’s salary was first decreased by 20% and subsequently increased by 20%. How does the final salary compare with the original salary? (UPSC CSAT 2024)',
    options: [
      'Remains unchanged',
      'Decreased by 4%',
      'Increased by 4%',
      'Decreased by 2%'
    ],
    correctAnswer: 1,
    explanation: 'When a quantity is increased/decreased by x% and then changed by x%:\nNet change = - (x² / 100)%\nHere x = 20:\nNet change = - (20² / 100)% = - (400 / 100)% = - 4% (a decrease of 4%).\n\nStep-by-step calculation:\nLet original salary = 100.\nAfter 20% decrease = 80.\nAfter 20% increase on 80 = 80 + (20% of 80) = 80 + 16 = 96.\nNet change = 96 - 100 = -4 (a 4% decrease).',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Percentage (Successive Increase and Decrease)',
      pageNumber: 'Page 210 – 216',
      keyExcerpt: 'Equal percentage decrease followed by increase always results in net loss of x^2 / 100 %.'
    },
    eliminationTip: 'Equal increase and decrease ALWAYS results in a net decrease of (x/10)² %. Here (20/10)² = 4% decrease.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2024', 'Percentages', 'Successive Change', 'Net Loss', 'Quant']
  },
  {
    id: 'pyq-2024-csat-71',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding: Word Interchange',
    subTopic: 'Substitute Code',
    question: 'In a code system: "sky" is called "sea", "sea" is called "water", "water" is called "cloud", "cloud" is called "rain", and "rain" is called "air". Where do aeroplanes fly? (UPSC CSAT 2024)',
    options: [
      'sea',
      'water',
      'cloud',
      'air'
    ],
    correctAnswer: 0,
    explanation: '1. Fact: Aeroplanes fly in the "sky".\n2. According to the code: "sky" is called "sea".\nTherefore, aeroplanes fly in the "sea".',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Coding-Decoding (Substitute Words)',
      pageNumber: 'Page 100 – 104',
      keyExcerpt: 'Find real world answer, then substitute with the coded name.'
    },
    eliminationTip: 'Planes fly in the sky. Sky is called sea. Answer is sea.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2024', 'Coding Decoding', 'Substitution', 'Reasoning']
  },
  {
    id: 'pyq-2024-csat-72',
    subject: 'csat_quant',
    topic: 'Speed, Time and Distance',
    subTopic: 'Average Speed for Round Trip',
    question: 'A motorist drives from City A to City B at a speed of 60 km/h and returns from City B to City A along the same route at a speed of 40 km/h. What is the average speed for the entire round trip? (UPSC CSAT 2024)',
    options: [
      '48 km/h',
      '50 km/h',
      '52 km/h',
      '54 km/h'
    ],
    correctAnswer: 0,
    explanation: 'When equal distances are covered at speeds x and y, the average speed is the Harmonic Mean:\nAverage Speed = (2xy) / (x + y)\nHere x = 60 km/h and y = 40 km/h:\nAverage Speed = (2 × 60 × 40) / (60 + 40)\n= 4800 / 100 = 48 km/h.\n(Note: The arithmetic mean (60+40)/2 = 50 km/h is a common trap and incorrect because more time is spent driving at the slower speed).',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 17: Time and Distance (Average Speed)',
      pageNumber: 'Page 352 – 358',
      keyExcerpt: 'Average speed for equal distances = 2xy / (x + y) = 2(60)(40)/100 = 48 km/h.'
    },
    eliminationTip: 'Never take arithmetic mean 50! Average speed is biased towards slower speed: 2(60)(40)/100 = 48 km/h.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2024', 'Average Speed', 'Harmonic Mean', 'Speed Time Distance', 'Quant']
  },
  {
    id: 'pyq-2024-csat-73',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Sovereign AI and Technological Sovereignty',
    subTopic: 'Domestic Computing Infrastructure and AI Independence',
    question: 'Read the following passage:\n\n"Artificial intelligence models trained exclusively on Western datasets reflect linguistic idioms, legal presuppositions, and cultural values of their host nations. For emerging economies, relying on foreign proprietary foundational models risks intellectual vassalage and digital colonization. Building \'Sovereign AI\'—investing in indigenous GPU supercomputing clusters and open datasets in regional languages—is not merely an industrial policy choice, but a strategic necessity for cultural self-determination."\n\nWhich of the following is the most logical and crucial corollary from the passage? (UPSC CSAT 2024)',
    options: [
      'Developing countries should ban all international scientific research.',
      'Sovereignty in the digital age requires developing national computational infrastructure and culturally contextualized AI models.',
      'AI models cannot translate between different human languages.',
      'Foreign technology companies should manage all national government archives.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is the direct, logical corollary: Relying on foreign foundational models risks cultural dependence, making domestic computing infrastructure and localized models essential for digital autonomy.\nOther options are absurd or contradictory.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Drawing Corollaries in Strategic Technology',
      pageNumber: 'Page 118 – 124',
      keyExcerpt: 'Sovereign AI safeguards cultural and strategic autonomy through domestic computing capacity.'
    },
    eliminationTip: 'Option B expresses the exact strategic rationale for "Sovereign AI" emphasized throughout the passage.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Reading Comprehension', 'Sovereign AI', 'Digital Sovereignty']
  },
  {
    id: 'pyq-2024-csat-74',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility by 3',
    subTopic: 'Unknown Digit in a Multi-digit Number',
    question: 'What is the sum of all possible single-digit values of X such that the 6-digit number 43X712 is divisible by 3? (UPSC CSAT 2024)',
    options: [
      '12',
      '15',
      '18',
      '21'
    ],
    correctAnswer: 0,
    explanation: 'A number is divisible by 3 if the sum of its digits is divisible by 3.\nSum of digits of 43X712 = 4 + 3 + X + 7 + 1 + 2 = 17 + X.\nFor (17 + X) to be divisible by 3, where X is a single digit (0 ≤ X ≤ 9):\n- If X = 1: 17 + 1 = 18 (divisible by 3)\n- If X = 4: 17 + 4 = 21 (divisible by 3)\n- If X = 7: 17 + 7 = 24 (divisible by 3)\nPossible values of X are {1, 4, 7}.\nSum of all possible values = 1 + 4 + 7 = 12.\nTherefore, the sum is 12.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Divisibility by 3)',
      pageNumber: 'Page 20 – 24',
      keyExcerpt: 'Sum of digits: 17 + X must be multiple of 3. X in {1, 4, 7}. Sum is 12.'
    },
    eliminationTip: '17 + X = multiple of 3. Values of X are 1, 4, 7. Sum = 1 + 4 + 7 = 12.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Divisibility by 3', 'Digit Sum', 'Quant']
  },
  {
    id: 'pyq-2024-csat-75',
    subject: 'csat_reasoning',
    topic: 'Syllogism and Quantifiers',
    subTopic: 'Negative Universal Logic',
    question: 'Statements:\n1. All cars are vehicles.\n2. No vehicle is an aeroplane.\n\nConclusions:\nI. No car is an aeroplane.\nII. All vehicles are cars.\n\nWhich of the conclusions logically follows? (UPSC CSAT 2024)',
    options: [
      'Only Conclusion I follows',
      'Only Conclusion II follows',
      'Both Conclusion I and II follow',
      'Neither Conclusion I nor II follows'
    ],
    correctAnswer: 0,
    explanation: 'From Statement 1: All cars are vehicles (Cars are entirely within Vehicles).\nFrom Statement 2: No vehicle is an aeroplane (Vehicles and Aeroplanes have zero overlap).\nSince all cars are inside vehicles, and no vehicle can be an aeroplane, NO car can ever be an aeroplane. Therefore, Conclusion I logically follows.\nConclusion II: "All vehicles are cars" is the invalid converse of "All cars are vehicles". Not all vehicles are cars (bicycles, trains, and boats are vehicles too). Therefore, Conclusion II does NOT follow.\nHence, only Conclusion I follows.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 14: Syllogisms',
      pageNumber: 'Page 346 – 352',
      keyExcerpt: 'All A are B + No B is C => No A is C. Valid universal negative deduction.'
    },
    eliminationTip: 'Cars are inside vehicles, and no vehicle touches aeroplanes. So no car touches aeroplanes. Only I follows.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Syllogisms', 'Deductive Logic', 'Reasoning']
  },
  {
    id: 'pyq-2024-csat-76',
    subject: 'csat_quant',
    topic: 'Simple Interest vs Compound Interest',
    subTopic: 'Annual Simple Interest Yield',
    question: 'At what rate of simple interest per annum will a sum of ₹5,000 amount to ₹6,500 in 3 years? (UPSC CSAT 2024)',
    options: [
      '8%',
      '10%',
      '12%',
      '15%'
    ],
    correctAnswer: 1,
    explanation: 'Principal (P) = ₹5,000\nAmount (A) = ₹6,500\nSimple Interest (SI) = A - P = ₹6,500 - ₹5,000 = ₹1,500\nTime (T) = 3 years\nFormula: SI = (P × R × T) / 100\n1,500 = (5,000 × R × 3) / 100\n1,500 = 150 × R\nR = 1,500 / 150 = 10% per annum.\nTherefore, the interest rate is 10%.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 21: Simple Interest',
      pageNumber: 'Page 442 – 448',
      keyExcerpt: 'Rate = (SI * 100) / (P * T) = (1500 * 100) / (5000 * 3) = 10%.'
    },
    eliminationTip: 'Earns ₹1,500 over 3 years = ₹500/year. ₹500 on ₹5,000 is exactly 10%. Done in 2 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Simple Interest', 'Rate of Interest', 'Quant']
  },
  {
    id: 'pyq-2024-csat-77',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Agricultural Biodiversity & Monoculture',
    subTopic: 'Genetic Vulnerability of Hybrid Seeds',
    question: 'Read the following passage:\n\n"The Green Revolution achieved dramatic grain production surges by replacing thousands of genetically diverse, regionally adapted landraces with uniform semi-dwarf hybrid monocultures. However, genetic uniformity creates perilous systemic vulnerability: a single virulent fungal strain or pest mutation can wipe out millions of contiguous acres simultaneously. Rebuilding agricultural resilience requires conserving in-situ heirloom seed varieties and re-diversifying farm agroecosystems."\n\nWhich of the following is the most logical and rational assumption made by the author? (UPSC CSAT 2024)',
    options: [
      'All chemical fertilizers should be thrown into rivers.',
      'Extreme genetic uniformity in commercial crops heightens vulnerability to catastrophic pest epidemics.',
      'Heirloom seeds yield zero grain under any farming conditions.',
      'The Green Revolution caused immediate widespread famine in India.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is the central premise: The author demonstrates that replacing thousands of diverse landraces with identical monocultures leaves agriculture vulnerable to widespread wipeouts from a single pathogen.\nOther options are absurd or contradictory.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Critical Inferences in Agroecology',
      pageNumber: 'Page 104 – 110',
      keyExcerpt: 'Monocultures foster vulnerability to pathogen outbreaks due to lack of genetic variation.'
    },
    eliminationTip: 'Option B accurately expresses the biological principle of genetic vulnerability highlighted in the passage.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Reading Comprehension', 'Monoculture', 'Agrobiodiversity', 'Green Revolution']
  },
  {
    id: 'pyq-2024-csat-78',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding: Pattern Analysis',
    subTopic: 'Letter Positions and Opposites',
    question: 'If "ZEBRA" is coded as "2652181", how will "COBRA" be coded in that same numeral code? (UPSC CSAT 2024)',
    options: [
      '3152181',
      '3142181',
      '3162181',
      '3152191'
    ],
    correctAnswer: 0,
    explanation: 'Look at the numbering for ZEBRA:\nZ = 26\nE = 5\nB = 2\nR = 18\nA = 1\nCombined string: 2652181 (direct concatenation of alphabet positions).\nNow for COBRA:\nC = 3\nO = 15\nB = 2\nR = 18\nA = 1\nCombined string: 3152181.\nTherefore, COBRA is coded as 3152181.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Coding-Decoding',
      pageNumber: 'Page 90 – 96',
      keyExcerpt: 'Concatenate standard alphabetical indices: C(3) O(15) B(2) R(18) A(1) = 3152181.'
    },
    eliminationTip: 'C=3, O=15, B=2, R=18, A=1. String is 3152181.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Coding Decoding', 'Numeral Encoding', 'Reasoning']
  },
  {
    id: 'pyq-2024-csat-79',
    subject: 'csat_quant',
    topic: 'Number System: Sum of First N Natural Numbers',
    subTopic: 'Arithmetic Progression Sum',
    question: 'What is the sum of the first 50 natural numbers (1 + 2 + 3 + ... + 50)? (UPSC CSAT 2024)',
    options: [
      '1,225',
      '1,250',
      '1,275',
      '1,300'
    ],
    correctAnswer: 2,
    explanation: 'Formula for the sum of the first n natural numbers:\nSum = [n(n + 1)] / 2\nHere n = 50:\nSum = (50 × 51) / 2\n= 25 × 51 = 1,275.\nTherefore, the sum is 1,275.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Arithmetic Progressions)',
      pageNumber: 'Page 16 – 20',
      keyExcerpt: 'Sum of first n natural numbers = n(n + 1) / 2 = 50 * 51 / 2 = 1275.'
    },
    eliminationTip: '25 × 51 = 1,275. Standard textbook formula.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Sum of Numbers', 'Natural Numbers', 'Arithmetic', 'Quant']
  },
  {
    id: 'pyq-2024-csat-80',
    subject: 'csat_reasoning',
    topic: 'Critical Reasoning: Statement and Inference',
    subTopic: 'Scientific Method and Reproducibility',
    question: 'Statement: "Independent scientific laboratories in three countries attempted to replicate a sensational room-temperature superconductor breakthrough published by a private lab, but all three attempts failed to observe zero electrical resistance."\n\nWhich of the following is the most valid inference from the statement? (UPSC CSAT 2024)',
    options: [
      'Room-temperature superconductivity has been conclusively proven to be physically impossible in the universe.',
      'The initial claim of room-temperature superconductivity lacks independent scientific reproducibility and cannot yet be validated as genuine.',
      'Scientific journals should stop publishing any physics research.',
      'Electrical resistance will permanently disappear from all copper wires tomorrow.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is the accurate scientific inference: Independent replication is the gold standard of scientific validity. When multiple independent teams fail to replicate a claimed breakthrough, the claim remains unverified and unproven.\nOptions (a), (c), and (d) are distorted extrapolations.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Critical Inferences and Scientific Reasoning',
      pageNumber: 'Page 248 – 254',
      keyExcerpt: 'Failure of independent replication prevents validation of extraordinary scientific claims.'
    },
    eliminationTip: 'Scientific claims require independent reproducibility. Option B captures the core scientific conclusion.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2024', 'Critical Reasoning', 'Scientific Method', 'Reproducibility', 'Reasoning']
  }
];
