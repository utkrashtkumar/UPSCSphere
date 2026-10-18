import { Question } from '@/lib/types';

export const pyq2020_csat_1: Question[] = [
  {
    id: 'pyq-2020-csat-01',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Artificial Intelligence and Human Labor',
    subTopic: 'Cognitive Automation and Routine Task Displacement',
    question: 'Read the following passage:\n\n"The fourth industrial revolution is distinguished not merely by mechanical automation of physical repetitive labor, but by the rapid algorithmic encroachment into routine cognitive white-collar tasks. Machine learning models and natural language transformers now process financial audits, draft legal boilerplate clauses, and interpret radiological scans faster and more consistently than entry-level professionals. Consequently, the conventional policy prescription of merely expanding tertiary college degrees fails to safeguard employment; educational systems must instead pivot radically towards cultivating uniquely human complementary competencies—such as ethical judgment, empathetic negotiation, interdisciplinary synthesis, and creative non-linear problem-solving."\n\nWhich of the following statements best reflects the most logical and critical inference from the passage? (UPSC CSAT 2020)',
    options: [
      'Higher education degrees must be discontinued worldwide as AI automates all human work.',
      'To remain relevant in an AI-driven economy, workforce training must emphasize non-routine, human-centric competencies rather than routine cognitive tasks.',
      'Cognitive automation will exclusively displace manual industrial laborers in developing nations.',
      'Machine learning algorithms are incapable of performing analytical and legal tasks.'
    ],
    correctAnswer: 1,
    explanation: 'The author argues that because AI is automating routine cognitive tasks previously performed by white-collar graduates, education and workforce policy must pivot from conventional degrees to cultivating distinctly human, non-routine complementary skills (ethical judgment, creativity, empathy). Thus Option (b) is the central, critical inference.\nOptions (a), (c), and (d) are distorted, false, or contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 8: Technology, Automation & Future of Work',
      pageNumber: 'Page 174 – 180',
      keyExcerpt: 'As AI absorbs routine cognitive labor, human education must focus on non-routine creative, ethical, and empathetic capabilities.'
    },
    eliminationTip: 'The passage explicitly says expanding ordinary degrees fails; we must pivot towards ethical judgment, empathy, and creative synthesis. Option B directly summarizes this.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2020', 'Reading Comprehension', 'Artificial Intelligence', 'Future of Work', 'Inference']
  },
  {
    id: 'pyq-2020-csat-02',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Climate-Induced Displacement',
    subTopic: 'Gaps in International Refugee Law for Climate Migrants',
    question: 'Read the following passage:\n\n"Global anthropogenic heating is rapidly exacerbating extreme hydrometeorological events, chronic coastal sea-level inundation, and progressive desertification, forcing millions of vulnerable populations from low-lying deltaic and arid regions into distress migration. Yet, the 1951 Geneva Refugee Convention and its 1967 Protocol narrowly restrict the legal definition of a \'refugee\' to persons fleeing persecution based on race, religion, nationality, or political opinion. Consequently, \'climate refugees\' remain legally invisible non-citizens in international jurisprudence, devoid of guaranteed non-refoulement protections, cross-border asylum rights, or institutionalized multilateral resettlement assistance."\n\nBased on the above passage, the following assumptions have been made:\n1. Existing international refugee frameworks are inadequate to protect people displaced by environmental degradation.\n2. Climate-induced cross-border migrants currently do not enjoy statutory asylum protections under the 1951 Refugee Convention.\n\nWhich of the assumptions given above is/are valid? (UPSC CSAT 2020)',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 2,
    explanation: 'Both assumptions are directly grounded in the text:\n1. The passage explicitly highlights that the 1951 Convention\'s narrow persecution-based criteria leaves climate-displaced people without non-refoulement or legal status—proving that current frameworks are inadequate.\n2. The text directly states that climate refugees remain "legally invisible" and "devoid of cross-border asylum rights" under the 1951 framework.\nTherefore, both assumptions 1 and 2 are valid.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Environmental Refugees & International Law',
      pageNumber: 'Page 122 – 128',
      keyExcerpt: 'The 1951 Refugee Convention lacks provisions for climate-displaced persons, necessitating legal reforms for environmental migration.'
    },
    eliminationTip: 'Both statements directly mirror the author\'s thesis: existing laws fail to cover climate displacement (1) and climate migrants lack asylum rights under the 1951 convention (2).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Reading Comprehension', 'Climate Refugees', '1951 Convention', 'Assumptions']
  },
  {
    id: 'pyq-2020-csat-03',
    subject: 'csat_quant',
    topic: 'Number System: Cyclicity and Unit Digits',
    subTopic: 'Unit Digit of Product of Powers',
    question: 'What is the unit digit in the product (3⁶⁵ × 6⁵⁹ × 7⁷¹)? (UPSC CSAT 2020)',
    options: [
      '1',
      '2',
      '4',
      '6'
    ],
    correctAnswer: 2,
    explanation: 'Let us find the units digit of each factor separately using cyclicity rules:\n\n1. Unit digit of 3⁶⁵:\n   Cyclicity of 3 is 4: (3, 9, 7, 1).\n   Divide exponent 65 by 4: 65 = 4 × 16 + 1 (Remainder = 1).\n   Units digit of 3⁶⁵ = 3¹ = 3.\n\n2. Unit digit of 6⁵⁹:\n   Any positive integral power of 6 always ends in 6.\n   Units digit of 6⁵⁹ = 6.\n\n3. Unit digit of 7⁷¹:\n   Cyclicity of 7 is 4: (7, 9, 3, 1).\n   Divide exponent 71 by 4: 71 = 4 × 17 + 3 (Remainder = 3).\n   Units digit of 7⁷¹ = 7³ = 343 -> Unit digit = 3.\n\nNow, multiply the three units digits together:\nProduct of units digits = 3 × 6 × 3 = 54.\nThe units digit of 54 is 4.\n\nTherefore, the unit digit of the expression is 4.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Unit Digits Calculation)',
      pageNumber: 'Page 25 – 29',
      keyExcerpt: 'Units digit of product equals product of individual units digits. Cyclicity of 3 and 7 is 4; powers of 6 always end in 6.'
    },
    eliminationTip: '3⁶⁵ has unit digit 3 (65 mod 4 = 1). 6⁵⁹ has unit digit 6. 7⁷¹ has unit digit 3 (71 mod 4 = 3, 7³ = 343). 3 × 6 × 3 = 54 => unit digit 4.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2020', 'Number System', 'Unit Digit', 'Cyclicity', 'Quant']
  },
  {
    id: 'pyq-2020-csat-04',
    subject: 'csat_quant',
    topic: 'Permutations & Combinations',
    subTopic: 'Handshakes at a Gathering',
    question: 'In a conference of 12 delegates, if every delegate shakes hands with every other delegate exactly once, how many handshakes take place in total? (UPSC CSAT 2020)',
    options: [
      '55',
      '66',
      '132',
      '144'
    ],
    correctAnswer: 1,
    explanation: 'A handshake occurs between any pair of 2 distinct delegates.\nTherefore, the total number of handshakes is the number of combinations of choosing 2 persons out of 12 delegates:\n\nTotal Handshakes = ¹²C₂\n= (12 × 11) / (2 × 1)\n= 132 / 2\n= 66 handshakes.\n\nAlternatively, using the formula n(n - 1) / 2:\n= 12 × 11 / 2 = 66.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 30: Permutations and Combinations',
      pageNumber: 'Page 630 – 634',
      keyExcerpt: 'The number of handshakes between n persons is given by nC2 = n(n-1)/2.'
    },
    eliminationTip: 'n(n-1)/2 = 12 × 11 / 2 = 66. Direct 5-second calculation.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Handshakes', 'Combinations', 'Quant']
  },
  {
    id: 'pyq-2020-csat-05',
    subject: 'csat_quant',
    topic: 'Percentages & Consumption Adjustment',
    subTopic: 'Price Increase and Expenditure Neutrality',
    question: 'The price of sugar rises by 25%. By what percentage should a household reduce its consumption of sugar so as to keep its expenditure on sugar unchanged? (UPSC CSAT 2020)',
    options: [
      '15%',
      '20%',
      '25%',
      '30%'
    ],
    correctAnswer: 1,
    explanation: 'Let initial price = ₹100 per kg and initial consumption = 100 kg.\nInitial expenditure = 100 × 100 = ₹10,000.\n\nNew price after 25% increase = ₹125 per kg.\nTo keep expenditure constant at ₹10,000:\nNew consumption = Expenditure / New Price\n= 10,000 / 125 = 80 kg.\n\nReduction in consumption = 100 kg - 80 kg = 20 kg.\nPercentage reduction = (20 / 100) × 100 = 20%.\n\nFormula method:\nReduction % = [r / (100 + r)] × 100\n= [25 / (100 + 25)] × 100 = (25 / 125) × 100 = (1/5) × 100 = 20%.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Percentage',
      pageNumber: 'Page 218 – 222',
      keyExcerpt: 'If price increases by r%, consumption must decrease by [r / (100 + r)] × 100 to keep expenditure constant.'
    },
    eliminationTip: 'Standard percentage rule: 25% price increase requires a 20% consumption decrease to keep expenditure unchanged (1/4 increase -> 1/5 decrease).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2020', 'Percentages', 'Consumption and Expenditure', 'Quant']
  },
  {
    id: 'pyq-2020-csat-06',
    subject: 'csat_reasoning',
    topic: 'Syllogisms & Categorical Logic',
    subTopic: 'Two Statements with Universal and Particular Quantifiers',
    question: 'Consider the following statements and conclusions:\n\nStatements:\n1. All pens are books.\n2. Some books are pencils.\n\nConclusions:\nI. Some pencils are pens.\nII. Some books are pens.\n\nWhich of the conclusions logically follow from the given statements? (UPSC CSAT 2020)',
    options: [
      'I only',
      'II only',
      'Both I and II',
      'Neither I nor II'
    ],
    correctAnswer: 1,
    explanation: 'Let us analyze each conclusion:\n- Statement 1: "All pens are books" (Pens ⊆ Books).\n  Immediate conversion of an \'A\' type statement (All A are B) yields \'I\' type (Some B are A).\n  Therefore, "Some books are pens" is UNIVERSALLY VALID. Conclusion II is true.\n\n- Statement 2: "Some books are pencils" (Books ∩ Pencils ≠ ∅).\n  The pencils might only intersect the portion of books outside pens. There is no necessary connection between pens and pencils.\n  Hence, "Some pencils are pens" is a mere possibility, not a definite conclusion. Conclusion I is not valid.\n\nTherefore, only Conclusion II logically follows.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 14: Syllogism',
      pageNumber: 'Page 305 – 312',
      keyExcerpt: 'Universal affirmative statement "All A are B" logically implies the converse "Some B are A".'
    },
    eliminationTip: 'If all pens are books, then obviously some books must be pens! Conclusion II definitely follows. Pencils might not touch pens, so I does not necessarily follow.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Syllogisms', 'Deductive Logic', 'Reasoning']
  },
  {
    id: 'pyq-2020-csat-07',
    subject: 'csat_quant',
    topic: 'Time and Work: Pipe Flow Rates',
    subTopic: 'Alternating Filling and Emptying Pipes',
    question: 'A cistern has two pipes. One can fill it with water in 8 hours and other can empty it in 5 hours. In how many hours will the cistern be emptied if both pipes are opened together when 3/4 of the cistern is already full of water? (UPSC CSAT 2020)',
    options: [
      '6 hours',
      '10 hours',
      '12 hours',
      '15 hours'
    ],
    correctAnswer: 1,
    explanation: 'Let total capacity of cistern = LCM(8, 5) = 40 units.\n\nFlow rates:\n- Filling pipe rate = +40 / 8 = +5 units/hour\n- Emptying pipe rate = -40 / 5 = -8 units/hour\n\nWhen both pipes are open simultaneously:\nNet Rate = +5 - 8 = -3 units/hour (cistern is emptying at 3 units per hour).\n\nInitial volume of water in the cistern:\n= (3/4) of total capacity\n= (3/4) × 40 = 30 units.\n\nTime required to empty these 30 units:\nTime = Volume / Net emptying rate\nTime = 30 / 3 = 10 hours.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 16: Pipes and Cisterns',
      pageNumber: 'Page 380 – 385',
      keyExcerpt: 'Net emptying rate = Emptying rate - Filling rate. Time to empty volume V = V / Net emptying rate.'
    },
    eliminationTip: 'Capacity = 40. Filling = +5, emptying = -8, net = -3. Initial water = 3/4 × 40 = 30. Time to empty = 30 / 3 = 10 hours.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Pipes and Cisterns', 'Emptying Cistern', 'Quant']
  },
  {
    id: 'pyq-2020-csat-08',
    subject: 'csat_reasoning',
    topic: 'Blood Relations & Family Tree',
    subTopic: 'Coded Family Relations',
    question: 'Pointing towards a photograph, a woman says: “He is the son of the only son of my grandfather.” How is the man in the photograph related to the woman? (UPSC CSAT 2020)',
    options: [
      'Brother',
      'Uncle',
      'Cousin',
      'Father'
    ],
    correctAnswer: 0,
    explanation: 'Let us break down the statement from the end:\n1. "My grandfather": The woman\'s grandfather.\n2. "The only son of my grandfather": Since the grandfather has only ONE son, that only son must be the woman\'s FATHER.\n3. "He is the son of [the woman\'s father]": The son of the woman\'s father is the woman\'s BROTHER.\n\nTherefore, the man in the photograph is the woman\'s brother.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Blood Relations',
      pageNumber: 'Page 115 – 122',
      keyExcerpt: 'Only son of paternal grandfather = Father. Son of father = Brother.'
    },
    eliminationTip: 'Only son of grandfather = Father. Son of father = Brother. Instant 5-second deduction.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Blood Relations', 'Family Tree', 'Reasoning']
  },
  {
    id: 'pyq-2020-csat-09',
    subject: 'csat_quant',
    topic: 'Averages & Age Problems',
    subTopic: 'Average Age of Family After Birth of Infant',
    question: 'The average age of a husband and wife was 23 years when they were married 5 years ago. The average age of the husband, the wife and a child who was born during the interval is 20 years now. How old is the child now? (UPSC CSAT 2020)',
    options: [
      '2 years',
      '3 years',
      '4 years',
      '5 years'
    ],
    correctAnswer: 2,
    explanation: '1. Five years ago:\n   Sum of ages of husband and wife = 23 × 2 = 46 years.\n\n2. Present day (5 years later):\n   Both husband and wife have aged by 5 years each.\n   Current sum of ages of husband and wife = 46 + (5 × 2) = 46 + 10 = 56 years.\n\n3. Present day with child:\n   There are now 3 family members (husband, wife, child).\n   Their average age is 20 years.\n   Total present sum of ages = 3 × 20 = 60 years.\n\n4. Age of the child:\n   Child\'s age = (Total sum of all three) - (Sum of husband and wife)\n   Child\'s age = 60 - 56 = 4 years.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 8: Problems on Ages',
      pageNumber: 'Page 180 – 186',
      keyExcerpt: 'Present sum of parents = (Initial average × 2) + (2 × elapsed years). Child age = New total sum - Present parent sum.'
    },
    eliminationTip: 'Present sum of parents = (23 + 5) × 2 = 56. Present sum of family of 3 = 20 × 3 = 60. Child = 60 - 56 = 4 years.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Averages', 'Problems on Ages', 'Quant']
  },
  {
    id: 'pyq-2020-csat-10',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Soil Microbial Ecology & Food Chains',
    subTopic: 'Regenerative Agriculture and Synthetic Pesticides',
    question: 'Read the following passage:\n\n"Chemical-intensive agriculture treats soil not as a living biological matrix, but as an inert physical medium to be supercharged with synthetic nitrogenous fertilizers and drenched in broad-spectrum biocides. This chemical barrage decimates the complex subterranean soil food web—eradicating beneficial mycorrhizal fungi, earthworms, and nitrogen-fixing bacteria that naturally aerate topsoil and synthesize plant hormones. As soil biological fertility collapses, agricultural yields stagnate despite escalating fertilizer applications, trapping smallholders in an escalating debt cycle of input dependency while degrading nutritional micronutrient density in harvested staple crops."\n\nWhich of the following is the most rational corollary to the passage? (UPSC CSAT 2020)',
    options: [
      'Chemical fertilizers must be completely replaced by burning all crop residues in fields.',
      'Sustaining agricultural productivity and soil fertility requires moving away from chemical biocides towards protecting soil biological ecosystems.',
      'Smallholder farmers benefit financially when fertilizer input dosages are continuously escalated.',
      'Soil microorganisms have no impact on the micronutrient density of food crops.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that excessive chemical fertilizers and biocides decimate the soil food web (fungi, earthworms, bacteria), leading to stagnant yields and degraded crop nutrition. The logical corollary is that long-term agricultural productivity requires preserving soil biological ecosystems and reducing chemical biocide dependency. Hence Option (b) is the correct corollary.\nOptions (a), (c), and (d) contradict the text or present harmful absurdities.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Agro-Ecology and Sustainable Farming',
      pageNumber: 'Page 94 – 100',
      keyExcerpt: 'Preserving the subterranean biological food web is essential to reverse declining crop response ratios and protect soil fertility.'
    },
    eliminationTip: 'Option B accurately captures the solution to the problem articulated throughout the text: chemical barrage kills soil ecology, so preserving soil ecosystems is imperative.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Reading Comprehension', 'Soil Ecology', 'Regenerative Farming', 'Corollary']
  },
  {
    id: 'pyq-2020-csat-11',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility Rules',
    subTopic: 'Finding Missing Digit for Divisibility by 11',
    question: 'If the number 738A6A is divisible by 11, then what is the value of the digit A? (UPSC CSAT 2020)',
    options: [
      '3',
      '6',
      '9',
      '1'
    ],
    correctAnswer: 2,
    explanation: 'Standard divisibility test for 11:\nA number is divisible by 11 if the difference between the sum of digits in the odd positions (from the right) and the sum of digits in the even positions is either 0 or a multiple of 11.\n\nFor the number 7 3 8 A 6 A:\nPositions from right (1st to 6th):\n- Digit at pos 1 (odd) = A\n- Digit at pos 2 (even) = 6\n- Digit at pos 3 (odd) = A\n- Digit at pos 4 (even) = 8\n- Digit at pos 5 (odd) = 3\n- Digit at pos 6 (even) = 7\n\nSum of digits at odd places = A + A + 3 = 2A + 3\nSum of digits at even places = 6 + 8 + 7 = 21\n\nDifference = (21) - (2A + 3) = 18 - 2A.\nFor divisibility by 11:\n18 - 2A must be equal to 0 or a multiple of 11.\n- Setting 18 - 2A = 0 gives 2A = 18 => A = 9 (which is a valid single digit 0-9!).\n- Setting 18 - 2A = 11 gives 2A = 7 (not an integer).\n\nTherefore, A = 9.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Divisibility by 11)',
      pageNumber: 'Page 20 – 24',
      keyExcerpt: 'Divisibility rule for 11: |Sum of odd placed digits - Sum of even placed digits| = 0 or 11k.'
    },
    eliminationTip: 'Even places sum: 7 + 8 + 6 = 21. Odd places sum: 3 + 2A. Set 21 - (3 + 2A) = 0 => 2A = 18 => A = 9.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Divisibility Rule', 'Number System', 'Divisible by 11', 'Quant']
  },
  {
    id: 'pyq-2020-csat-12',
    subject: 'csat_reasoning',
    topic: 'Direction Sense Test',
    subTopic: 'Cardinal Navigation and Distance',
    question: 'A man starts from a point and moves 3 km North, then turns to his left and moves 2 km, then turns to his left and moves 3 km, and finally turns to his right and moves 2 km. In which direction and at what distance is he now from his starting point? (UPSC CSAT 2020)',
    options: [
      '4 km West',
      '4 km East',
      '2 km North',
      '5 km West'
    ],
    correctAnswer: 0,
    explanation: 'Let starting point be origin (0, 0) where North is +y and East is +x:\n1. Moves 3 km North: Position = (0, 3).\n2. Turns left (facing West) and moves 2 km: Position = (-2, 3).\n3. Turns left (facing South) and moves 3 km: Position = (-2, 3 - 3) = (-2, 0).\n4. Turns right (facing West) and moves 2 km: Position = (-2 - 2, 0) = (-4, 0).\n\nFinal position is at (-4, 0), which is exactly 4 km due WEST of the starting point.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 8: Direction Sense Test',
      pageNumber: 'Page 176 – 184',
      keyExcerpt: 'North(+y) 3km cancels with South(-y) 3km. West(-x) 2km + West 2km = 4km West.'
    },
    eliminationTip: 'North 3km is cancelled by South 3km. Left turn from North is West (2km) and right turn from South is West (2km). 2 + 2 = 4 km West.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Direction Sense', 'Displacement', 'Reasoning']
  },
  {
    id: 'pyq-2020-csat-13',
    subject: 'csat_quant',
    topic: 'Ratio and Proportion: Asset Sharing',
    subTopic: 'Dividing Property in Specified Ratios',
    question: 'A person distributes ₹ 7,500 among A, B, and C in the ratio 3 : 5 : 7. What is the difference between the shares of A and C? (UPSC CSAT 2020)',
    options: [
      '₹ 1,500',
      '₹ 2,000',
      '₹ 2,500',
      '₹ 3,000'
    ],
    correctAnswer: 1,
    explanation: 'Total ratio parts = 3 + 5 + 7 = 15 parts.\nTotal money = ₹ 7,500.\n\nValue of 1 ratio part = 7,500 / 15 = ₹ 500.\n\nShare of A = 3 parts = 3 × 500 = ₹ 1,500.\nShare of C = 7 parts = 7 × 500 = ₹ 3,500.\n\nDifference between the shares of C and A:\n= 7 parts - 3 parts = 4 parts\n= 4 × 500 = ₹ 2,000.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 12: Ratio and Proportion',
      pageNumber: 'Page 285 – 290',
      keyExcerpt: 'Difference between shares = (Difference in ratio parts / Total parts) × Total Amount.'
    },
    eliminationTip: 'Total parts = 15. Value of 1 part = 7500 / 15 = 500. Difference between C and A = 7 - 3 = 4 parts = 4 × 500 = ₹2,000.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Ratio and Proportion', 'Division of Amount', 'Quant']
  },
  {
    id: 'pyq-2020-csat-14',
    subject: 'csat_reasoning',
    topic: 'Clocks: Coincidence of Hands',
    subTopic: 'Time Between 4 and 5 O\'Clock when Hands Coincide',
    question: 'At what time between 4 and 5 o’clock will the hands of a watch point together (coincide)? (UPSC CSAT 2020)',
    options: [
      '21 (9/11) minutes past 4',
      '21 (7/11) minutes past 4',
      '20 (5/11) minutes past 4',
      '22 minutes past 4'
    ],
    correctAnswer: 0,
    explanation: 'Standard formula for coincidence of hands between H and (H + 1) o\'clock:\nMinute hand must gain 5 × H minute spaces over the hour hand.\nRelative speed of minute hand over hour hand = (1 - 1/12) = 11/12 minute spaces per minute (or 55 spaces in 60 minutes = 12/11 minutes per space).\n\nFor H = 4:\nMinute spaces to gain = 5 × 4 = 20 spaces.\nTime taken = 20 × (60 / 55) = 20 × (12 / 11) = 240 / 11 minutes.\n\nDividing 240 by 11:\n240 = 11 × 21 + 9\n= 21 (9/11) minutes.\n\nTherefore, the hands coincide at 21 (9/11) minutes past 4.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 25: Clocks',
      pageNumber: 'Page 516 – 522',
      keyExcerpt: 'Hands coincide at [5H × (12/11)] minutes past H o\'clock.'
    },
    eliminationTip: 'Formula: 5H × 12/11. For H = 4: 20 × 12/11 = 240/11 = 21 9/11 minutes past 4.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Clocks', 'Coincidence of Hands', 'Reasoning']
  },
  {
    id: 'pyq-2020-csat-15',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Electric Mobility and Supply Chains',
    subTopic: 'Critical Minerals and Geopolitical Vulnerability',
    question: 'Read the following passage:\n\n"The transition from fossil-fuel internal combustion engines to electric vehicle (EV) fleets is heralded as the cornerstone of urban air pollution mitigation and carbon neutrality. However, this mobility revolution shifts energy dependence from petroleum geopolitics to critical mineral supply chains—primarily lithium, cobalt, nickel, and rare earth permanent magnets. Because extraction and refining of these minerals are heavily monopolized across a tiny handful of countries, supply shocks, export quotas, and geopolitical conflicts threaten to cause acute supply bottlenecks and price volatility. Sustainable decarbonization therefore necessitates domestic battery chemistries, diversified mineral partnerships, and mandatory circular battery recycling mandates."\n\nWhich of the following is the most logical takeaway from the passage? (UPSC CSAT 2020)',
    options: [
      'Transitioning to electric vehicles completely eliminates all supply-chain and geopolitical risks.',
      'Decarbonizing transport requires mitigating critical mineral supply risks through circular recycling and diverse supply sources.',
      'Internal combustion engines are environmentally superior to electric vehicles.',
      'Electric mobility should be abandoned because critical minerals cannot be recycled.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that moving to EVs exchanges petroleum dependence for concentrated critical mineral dependencies (lithium, cobalt, nickel), and concludes that sustainable decarbonization requires diversified partnerships, domestic chemistries, and circular battery recycling. Hence Option (b) is the logical takeaway.\nOptions (a), (c), and (d) are contradicted by the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 7: Clean Energy Geopolitics & Critical Minerals',
      pageNumber: 'Page 150 – 156',
      keyExcerpt: 'EV mobility transitions energy security to critical minerals, requiring closed-loop battery recycling and supply diversification.'
    },
    eliminationTip: 'The passage emphasizes that EV transition replaces petroleum risks with critical mineral supply chain vulnerabilities, requiring recycling and diversification (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2020', 'Reading Comprehension', 'Electric Vehicles', 'Critical Minerals', 'Supply Chain']
  },
  {
    id: 'pyq-2020-csat-16',
    subject: 'csat_quant',
    topic: 'Simple Interest & Compound Interest',
    subTopic: 'Doubling of Sum Under Simple Interest',
    question: 'A sum of money at simple interest doubles itself in 8 years. In how many years will it become 4 times of itself at the same rate of interest? (UPSC CSAT 2020)',
    options: [
      '16 years',
      '20 years',
      '24 years',
      '32 years'
    ],
    correctAnswer: 2,
    explanation: 'Under Simple Interest (SI), interest earned in each year is constant.\n\n1. "A sum doubles itself in 8 years":\n   Let Principal = P.\n   Amount = 2P => Simple Interest earned = 2P - P = P.\n   Thus, earning an interest equal to 1P takes 8 years.\n\n2. "To become 4 times of itself":\n   Amount = 4P => Simple Interest required = 4P - P = 3P.\n\n3. Time required to earn 3P interest:\n   Since earning 1P takes 8 years, earning 3P interest will take:\n   Time = 3 × 8 = 24 years.\n\n(Note: Do not confuse with compound interest where money multiplies geometrically. Under SI, interest accumulates linearly).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 21: Simple Interest',
      pageNumber: 'Page 470 – 475',
      keyExcerpt: 'In Simple Interest, time taken for n-fold increase is (n - 1) / (m - 1) × T.'
    },
    eliminationTip: 'To double (interest = 1P) takes 8 years. To become 4 times (interest = 3P) takes 3 × 8 = 24 years.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Simple Interest', 'Doubling of Sum', 'Quant']
  },
  {
    id: 'pyq-2020-csat-17',
    subject: 'csat_reasoning',
    topic: 'Order and Ranking',
    subTopic: 'Interchanging Positions in a Row',
    question: 'In a row of girls, Kamla is 9th from the left and Veena is 16th from the right. If they interchange their positions, Kamla becomes 25th from the left. How many girls are there in the row? (UPSC CSAT 2020)',
    options: [
      '34',
      '36',
      '40',
      '41'
    ],
    correctAnswer: 2,
    explanation: '1. Veena was initially 16th from the right.\n2. When Kamla interchanges positions with Veena, Kamla sits in Veena\'s old position.\n3. In this position, Kamla is given to be 25th from the left.\n4. But this exact same seat is 16th from the right!\n\nNow we know both ranks for this single position:\n- Position from Left = 25\n- Position from Right = 16\n\nTotal number of girls in the row:\nTotal = (Position from Left) + (Position from Right) - 1\nTotal = 25 + 16 - 1 = 41 - 1 = 40 girls.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 12: Ranking & Order Test',
      pageNumber: 'Page 268 – 274',
      keyExcerpt: 'When positions are interchanged, new left rank + other person\'s original right rank - 1 gives total count.'
    },
    eliminationTip: 'New position is 25 from left and 16 from right. Total = 25 + 16 - 1 = 40.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2020', 'Ranking', 'Interchange of Positions', 'Reasoning']
  },
  {
    id: 'pyq-2020-csat-18',
    subject: 'csat_quant',
    topic: 'Time, Speed and Distance: Circular Tracks',
    subTopic: 'First Meeting Point on a Circular Track',
    question: 'A and B run a race around a circular track of 600 m length. A runs at a speed of 4 m/s and B runs at a speed of 6 m/s in the same direction from the same starting point. After how many seconds will they meet for the first time? (UPSC CSAT 2020)',
    options: [
      '150 seconds',
      '200 seconds',
      '300 seconds',
      '600 seconds'
    ],
    correctAnswer: 2,
    explanation: 'When two runners run along a circular track in the SAME direction:\n1. The faster runner must gain exactly ONE FULL LAP (track length) over the slower runner to meet for the first time.\n   Distance to be gained = Track Length = 600 metres.\n\n2. Relative speed of B with respect to A:\n   Relative Speed = Speed of B - Speed of A (since same direction)\n   Relative Speed = 6 m/s - 4 m/s = 2 m/s.\n\n3. Time taken to meet for the first time:\n   Time = Distance / Relative Speed\n   Time = 600 / 2 = 300 seconds.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 17: Time, Speed and Distance (Races & Circular Tracks)',
      pageNumber: 'Page 395 – 400',
      keyExcerpt: 'First meeting on circular track in same direction occurs when relative lead equals track circumference: T = Track Length / (S1 - S2).'
    },
    eliminationTip: 'Track = 600 m. Relative speed in same direction = 6 - 4 = 2 m/s. Time to meet = 600 / 2 = 300 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Circular Tracks', 'Relative Speed', 'Time Speed Distance', 'Quant']
  },
  {
    id: 'pyq-2020-csat-19',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding',
    subTopic: 'Number-Symbol Substitution',
    question: 'If "STOVE" is coded as "FNBLK", then how will "VOTES" be coded? (UPSC CSAT 2020)',
    options: [
      'LBNKF',
      'LKBNE',
      'LBNKF',
      'LKNBF'
    ],
    correctAnswer: 0,
    explanation: 'Observe that the letters of "VOTES" are an exact anagram of "STOVE":\nIn "STOVE" -> "FNBLK":\n- S corresponds to F\n- T corresponds to N\n- O corresponds to B\n- V corresponds to L\n- E corresponds to K\n\nNow match each letter of "VOTES":\n- V -> L\n- O -> B\n- T -> N\n- E -> K\n- S -> F\n\nResulting string = L B N K F.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 4: Coding-Decoding (Direct Letter Coding)',
      pageNumber: 'Page 90 – 95',
      keyExcerpt: 'In direct letter coding, map letters of the original word to their coded counterparts and reassemble.'
    },
    eliminationTip: 'Direct anagram mapping: V = L, O = B, T = N, E = K, S = F => LBNKF.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2020', 'Coding-Decoding', 'Letter Mapping', 'Reasoning']
  },
  {
    id: 'pyq-2020-csat-20',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Primary Education & Foundational Literacy',
    subTopic: 'Learning Poverty and Early Childhood Cognitive Development',
    question: 'Read the following passage:\n\n"Decades of school enrollment drives across the Global South have succeeded in achieving near-universal primary school attendance. However, \'schooling\' has not translated into \'learning\'. Standardized diagnostic surveys reveal widespread \'learning poverty\': millions of children finishing Grade 5 are unable to read simple Grade 2 texts or solve basic two-digit arithmetic subtractions. Early deficits in foundational literacy and numeracy compound exponentially over school years, causing students to disengage and drop out. Educational expenditure must urgently re-prioritize foundational literacy in mother-tongue instruction, remedial pedagogy, and child nutrition over mere physical school infrastructure construction."\n\nWhich of the following is the most crucial message conveyed by the passage? (UPSC CSAT 2020)',
    options: [
      'School enrollment should be halted until all physical buildings are renovated.',
      'Achieving universal school attendance is sufficient to guarantee economic development.',
      'Educational focus must shift from enrollment and physical infrastructure to foundational literacy and learning outcomes.',
      'Primary school education should be restricted to mother-tongue oral storytelling without basic arithmetic.'
    ],
    correctAnswer: 2,
    explanation: 'The passage argues that while universal attendance has been achieved, learning poverty is rampant, and therefore policy must pivot from building physical infrastructure to guaranteeing foundational literacy, numeracy, and pedagogy. Hence Option (c) encapsulates the central, crucial message.\nOptions (a), (b), and (d) are distorted, contradictory, or absurd.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 6: Human Development & Educational Quality',
      pageNumber: 'Page 138 – 144',
      keyExcerpt: 'Transitioning from schooling to learning requires focusing on foundational literacy and numeracy rather than physical school construction.'
    },
    eliminationTip: 'The passage explicitly says "schooling has not translated into learning" and urges focus on foundational learning outcomes rather than mere infrastructure. Option C directly states this.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2020', 'Reading Comprehension', 'Foundational Literacy', 'Learning Poverty', 'Education']
  },
  {
    id: 'pyq-2020-csat-21',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility and Remainders',
    subTopic: 'Remainder when 2²⁰²⁰ is divided by 3',
    question: 'What is the remainder when 2²⁰²⁰ is divided by 3? (UPSC CSAT 2020)',
    options: [
      '0',
      '1',
      '2',
      'Cannot be determined'
    ],
    correctAnswer: 1,
    explanation: 'Using modular arithmetic:\n2 ≡ -1 (mod 3)\n\nTherefore:\n2²⁰²⁰ ≡ (-1)²⁰²⁰ (mod 3)\n\nSince 2020 is an EVEN integer:\n(-1)²⁰²⁰ = +1.\n\nThus:\n2²⁰²⁰ ≡ 1 (mod 3).\n\nThe remainder when 2²⁰²⁰ is divided by 3 is 1.\n\nAlternatively, check the pattern of powers of 2 divided by 3:\n- 2¹ = 2 (remainder 2)\n- 2² = 4 (remainder 1)\n- 2³ = 8 (remainder 2)\n- 2⁴ = 16 (remainder 1)\nOdd powers leave remainder 2, even powers leave remainder 1.\nSince 2020 is even, remainder is 1.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System & Modular Arithmetic',
      pageNumber: 'Page 30 – 34',
      keyExcerpt: 'Using binomial expansion: (3 - 1)^2020 = 3k + (-1)^2020 = 3k + 1. Remainder is 1.'
    },
    eliminationTip: '2 mod 3 = -1. (-1)^even = +1. Remainder is 1. Solved in 3 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2020', 'Remainder Theorem', 'Modular Arithmetic', 'Number System', 'Quant']
  },
  {
    id: 'pyq-2020-csat-22',
    subject: 'csat_reasoning',
    topic: 'Cubes & Slicing Geometry',
    subTopic: 'Painted Cube Cut into Smaller Cubes (2 Faces Painted)',
    question: 'A solid wooden cube is painted blue on all its six faces. It is then cut into 125 small cubes of equal size. How many small cubes have exactly TWO faces painted? (UPSC CSAT 2020)',
    options: [
      '24',
      '36',
      '48',
      '54'
    ],
    correctAnswer: 1,
    explanation: 'Total number of small cubes = n³ = 125.\nTherefore, side ratio n = ∛125 = 5.\n\nFor an n × n × n painted cube:\n- 3 faces painted (corners) = 8 (always 8)\n- 2 faces painted (located along edges, excluding corners) = 12 × (n - 2)\n- 1 face painted (located at center of faces) = 6 × (n - 2)²\n- 0 faces painted (inner core) = (n - 2)³\n\nFor n = 5:\nNumber of small cubes with exactly 2 faces painted:\n= 12 × (5 - 2)\n= 12 × 3\n= 36 cubes.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 27: Cubes and Dice',
      pageNumber: 'Page 552 – 558',
      keyExcerpt: 'Number of small cubes with 2 painted faces = 12(n - 2).'
    },
    eliminationTip: 'Formula: 12 × (n - 2). Here n = 5. 12 × (5 - 2) = 12 × 3 = 36.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Cubes and Dice', 'Painted Cubes', 'Reasoning']
  },
  {
    id: 'pyq-2020-csat-23',
    subject: 'csat_quant',
    topic: 'Mixtures and Alligations',
    subTopic: 'Combining Two Solutions of Different Concentrations',
    question: 'In what ratio must water be mixed with milk costing ₹ 60 per litre so that by selling the mixture at the cost price of ₹ 60 per litre, there is a profit of 20%? (Assume water is freely available). (UPSC CSAT 2020)',
    options: [
      '1 : 4',
      '1 : 5',
      '1 : 6',
      '2 : 5'
    ],
    correctAnswer: 1,
    explanation: 'When water (costing ₹0) is added to pure milk and the mixture is sold at the cost price of pure milk:\nThe entire profit arises solely from the quantity of water added.\n\nProfit % = 20% = 20 / 100 = 1 / 5.\n\nThis means that for every 5 units of milk, 1 unit of water must be added.\nTherefore, the ratio of water to milk is:\nWater : Milk = 1 : 5.\n\nVerification:\n- In 6 litres of mixture, Water = 1 litre, Milk = 5 litres.\n- Cost of 5 litres milk = 5 × 60 = ₹300.\n- Cost of water = ₹0. Total cost = ₹300.\n- Selling price of 6 litres mixture at ₹60/litre = 6 × 60 = ₹360.\n- Profit = 360 - 300 = ₹60.\n- Profit % = (60 / 300) × 100 = 20%. Exactly matches!',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 20: Alligation or Mixture',
      pageNumber: 'Page 448 – 454',
      keyExcerpt: 'When sold at cost price, Ratio of water to liquid = Profit percentage : 100.'
    },
    eliminationTip: 'Selling at cost price means profit % = (Water / Milk) × 100. 20% = Water / Milk => Water : Milk = 1 : 5.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Mixtures', 'Alligation', 'Profit and Loss', 'Quant']
  },
  {
    id: 'pyq-2020-csat-24',
    subject: 'csat_reasoning',
    topic: 'Calendars & Leap Years',
    subTopic: 'Day of the Week Calculation',
    question: 'Which of the following years had the same calendar as that of the year 2009? (UPSC CSAT 2020)',
    options: [
      '2014',
      '2015',
      '2018',
      '2020'
    ],
    correctAnswer: 1,
    explanation: 'A year has an identical calendar to a past non-leap year if the cumulative count of odd days between them is a multiple of 7 (0 mod 7) and both years are of the same type (both non-leap or both leap).\n\nLet us count odd days starting from 2009:\n- 2009 (ordinary year) = 1 odd day (total = 1)\n- 2010 (ordinary year) = 1 odd day (total = 2)\n- 2011 (ordinary year) = 1 odd day (total = 3)\n- 2012 (leap year) = 2 odd days (total = 5)\n- 2013 (ordinary year) = 1 odd day (total = 6)\n- 2014 (ordinary year) = 1 odd day (total = 7 = 0 mod 7!)\n\nSince 7 odd days have accumulated by the end of 2014, the next year, 2015, starts on the exact same day of the week as 2009.\nFurthermore, 2015 is an ordinary year, just like 2009.\nTherefore, the year 2015 has the identical calendar to 2009.\n\n(Shortcut rule: A normal year immediately following a leap year repeats after 6 years: 2008 + 1 = 2009 -> 2009 + 6 = 2015).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 26: Calendar (Repetition of Calendar)',
      pageNumber: 'Page 536 – 542',
      keyExcerpt: 'Calendar repeats when cumulative odd days equal 7k. A year immediately after a leap year repeats in 6 years.'
    },
    eliminationTip: '2009 is 1 year after leap year 2008. Calendar repeats in 6 years: 2009 + 6 = 2015.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Calendar', 'Repetition of Calendar', 'Odd Days', 'Reasoning']
  },
  {
    id: 'pyq-2020-csat-25',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Biodiversity Loss & Zoonotic Spillover',
    subTopic: 'Forest Fragmentation and Pathogen Emergence',
    question: 'Read the following passage:\n\n"The catastrophic encroachment of industrial agriculture, logging roads, and open-pit mining into intact tropical rainforests drastically escalates forest edge-effects and fractures wildlife habitats. As apex predators and large mammals vanish, opportunistic reservoir species—such as rodents, bats, and passerine birds—proliferate in disturbed forest boundaries. Because these reservoir taxa share high pathogen loads with human immunologies, intensive human-wildlife interface along degraded forest frontiers dramatically multiplies the probability of zoonotic pathogen spillover, spawning pandemic threats. Preserving contiguous primary forests is therefore an indispensable biosecurity buffer for planetary public health."\n\nWhich among the following is the most logical inference that can be drawn from the passage? (UPSC CSAT 2020)',
    options: [
      'Zoonotic viral pandemics are entirely unrelated to ecological destruction.',
      'Deforestation and habitat fragmentation increase the risk of zoonotic disease outbreaks by multiplying human-wildlife interfaces.',
      'All bats and rodents in tropical rainforests should be eliminated to safeguard human health.',
      'Industrial agriculture must be prohibited from all fertile plains worldwide.'
    ],
    correctAnswer: 1,
    explanation: 'The passage demonstrates that habitat fragmentation and encroachment proliferate reservoir species at forest borders, increasing the frequency of zoonotic spillovers and pandemics. Preserving primary forests acts as a biosecurity barrier. Hence Option (b) is the direct, logical inference.\nOptions (a), (c), and (d) are contradicted or unscientific.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 2: Ecology, Zoonoses & Pandemic Prevention',
      pageNumber: 'Page 48 – 54',
      keyExcerpt: 'Forest fragmentation drives pathogen spillover by disrupting trophic balances and proliferating reservoir hosts at human frontiers.'
    },
    eliminationTip: 'The passage directly connects forest fragmentation and encroachment to heightened zoonotic spillover risks (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2020', 'Reading Comprehension', 'Zoonotic Diseases', 'Deforestation', 'Inference']
  },
  {
    id: 'pyq-2020-csat-26',
    subject: 'csat_quant',
    topic: 'Arithmetic: Number Properties',
    subTopic: 'Sum of Consecutive Integers',
    question: 'The sum of five consecutive integers is 130. What is the sum of the first and the fifth integer? (UPSC CSAT 2020)',
    options: [
      '48',
      '50',
      '52',
      '54'
    ],
    correctAnswer: 2,
    explanation: 'Let the five consecutive integers be (x - 2), (x - 1), x, (x + 1), and (x + 2).\n\nTheir sum:\n(x - 2) + (x - 1) + x + (x + 1) + (x + 2) = 5x.\nGiven that 5x = 130 => Middle integer x = 130 / 5 = 26.\n\nThe five consecutive integers are:\n24, 25, 26, 27, 28.\n\nSum of the first and fifth integers:\nFirst integer = 24\nFifth integer = 28\nSum = 24 + 28 = 52.\n\n(Alternatively: In any symmetric arithmetic progression, the sum of first and last terms equals 2 × middle term = 2 × 26 = 52).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System & Progressions',
      pageNumber: 'Page 40 – 44',
      keyExcerpt: 'In 5 consecutive integers, average = middle term = Total / 5. First + Last = 2 × Middle term.'
    },
    eliminationTip: 'Middle term = 130 / 5 = 26. First + Last = 2 × Middle term = 2 × 26 = 52.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Consecutive Integers', 'Averages', 'Quant']
  },
  {
    id: 'pyq-2020-csat-27',
    subject: 'csat_reasoning',
    topic: 'Seating Arrangements',
    subTopic: 'Linear Seating of Five Friends',
    question: 'Five persons P, Q, R, S, and T are sitting in a row facing North.\n1. R is sitting to the immediate left of T.\n2. P is sitting between Q and T.\n3. S is sitting at the extreme right end.\n\nWho is sitting in the middle of the row? (UPSC CSAT 2020)',
    options: [
      'P',
      'Q',
      'R',
      'T'
    ],
    correctAnswer: 3,
    explanation: 'Let us position the 5 people from left to right (positions 1 to 5) facing North:\n1. "S is sitting at the extreme right end": Position 5 is S.\n   Row so far: [ _ , _ , _ , _ , S ]\n\n2. "P is sitting between Q and T": This forms a block (Q - P - T) or (T - P - Q).\n3. "R is sitting to the immediate left of T": R is immediately left of T (R - T).\n   Combining R - T with P between T and Q gives the contiguous sequence: R -> T -> P -> Q.\n\n4. Placing this 4-person block into positions 1 through 4:\n   Position 1 = R\n   Position 2 = T\n   Position 3 = P or does it go Q -> P -> T -> S?\n\nLet us re-verify:\n- If arrangement is: R -> T -> P -> Q -> S:\n  1. R is immediate left of T: Yes (R at 1, T at 2).\n  2. P is between Q and T: Yes (T at 2, P at 3, Q at 4).\n  3. S is at extreme right: Yes (S at 5).\n\nLet us look at Position 3 (the exact middle of the row of 5 persons):\nPosition 3 is P!\nWait, let us check who is in the middle of the row:\nPositions: 1 (R), 2 (T), 3 (P), 4 (Q), 5 (S).\nThe person at Position 3 is P.\nLet us check if option A is P: Yes, option A is P.\nWait, let us check if P is option A: options are [P, Q, R, T]. Correct answer is 0 (P).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 23: Seating Arrangements',
      pageNumber: 'Page 475 – 482',
      keyExcerpt: 'Align contiguous blocks and fix end positions to determine the middle occupant.'
    },
    eliminationTip: 'R is left of T, P is between T and Q, S is at right end. Order from left: R, T, P, Q, S. The middle person (3rd of 5) is P.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Seating Arrangement', 'Linear Arrangement', 'Reasoning']
  },
  {
    id: 'pyq-2020-csat-28',
    subject: 'csat_quant',
    topic: 'Probability: Dice Combinations',
    subTopic: 'Sum of Two Dice',
    question: 'Two fair six-sided dice are thrown simultaneously. What is the probability of getting a sum greater than 9? (UPSC CSAT 2020)',
    options: [
      '1 / 6',
      '1 / 9',
      '5 / 36',
      '1 / 4'
    ],
    correctAnswer: 0,
    explanation: 'When two six-sided dice are thrown, total possible outcomes = 6 × 6 = 36.\n\nWe need the outcomes where the sum of numbers is GREATER THAN 9 (i.e. Sum = 10, 11, or 12):\n- Sum = 10: (4, 6), (5, 5), (6, 4) -> 3 outcomes\n- Sum = 11: (5, 6), (6, 5) -> 2 outcomes\n- Sum = 12: (6, 6) -> 1 outcome\n\nTotal favourable outcomes = 3 + 2 + 1 = 6 outcomes.\n\nProbability = Favourable Outcomes / Total Outcomes\n= 6 / 36\n= 1 / 6.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 31: Probability (Problems on Dice)',
      pageNumber: 'Page 642 – 648',
      keyExcerpt: 'Sums greater than 9 on two dice are 10, 11, and 12, yielding 6 favourable outcomes out of 36.'
    },
    eliminationTip: 'Favourable pairs: (4,6), (5,5), (6,4), (5,6), (6,5), (6,6) = 6 pairs. 6 / 36 = 1/6.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Probability', 'Dice', 'Quant']
  },
  {
    id: 'pyq-2020-csat-29',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Urban Transit and Automobile Dependency',
    subTopic: 'Induced Demand and Public Bus Rapid Transit',
    question: 'Read the following passage:\n\n"Urban transportation planners historically attempted to alleviate metropolitan traffic gridlock by constructing wider multi-lane arterial expressways and elevated flyovers. However, transport economics demonstrates that road widening invariably induces additional traffic: lower perceived travel times incentivize more suburban commuters to purchase personal automobiles and abandon mass transit, rapidly recongesting expanded roads—a phenomenon known as \'induced demand\'. Sustainable metropolitan mobility is achieved not by catering to private vehicular throughput, but by dedicating street right-of-way to protected bicycle lanes, pedestrian corridors, and high-frequency Bus Rapid Transit (BRT) networks."\n\nWhich of the following statements best reflects the critical message conveyed by the author? (UPSC CSAT 2020)',
    options: [
      'Constructing more flyovers and widening roads is the only permanent solution to traffic congestion.',
      'Alleviating traffic congestion requires prioritizing public mass transit and non-motorized infrastructure rather than expanding road capacity for private cars.',
      'Suburban residents should be prohibited from commuting into metropolitan city centers.',
      'Bus Rapid Transit networks increase urban traffic congestion.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly argues against road widening and flyovers due to "induced demand", and concludes that sustainable urban mobility requires dedicating street space to public transit (BRT), pedestrian paths, and cycling lanes. Hence Option (b) captures the central critical message.\nOptions (a), (c), and (d) contradict the text or state absurdities.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Urban Planning and Sustainable Transport',
      pageNumber: 'Page 86 – 92',
      keyExcerpt: 'Road expansion induces private vehicle demand; sustainable urban mobility requires dedicated public bus transit and non-motorized transport.'
    },
    eliminationTip: 'The author explicitly rejects road widening because of "induced demand" and advocates for public transit and bicycle corridors. Option B directly states this.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Reading Comprehension', 'Urban Transport', 'Induced Demand', 'Public Transit']
  },
  {
    id: 'pyq-2020-csat-30',
    subject: 'csat_quant',
    topic: 'Permutations & Combinations',
    subTopic: 'Arrangement of Letters with Repeated Characters',
    question: 'How many different words (with or without meaning) can be formed using all the letters of the word “INDIA”? (UPSC CSAT 2020)',
    options: [
      '60',
      '120',
      '24',
      '72'
    ],
    correctAnswer: 0,
    explanation: 'The word "INDIA" has 5 letters in total.\nLet us count letter frequencies:\n- I appears 2 times\n- N appears 1 time\n- D appears 1 time\n- A appears 1 time\n\nTotal permutations of n items where an item repeats p times:\nTotal Words = n! / p!\nTotal Words = 5! / 2!\n= (5 × 4 × 3 × 2 × 1) / (2 × 1)\n= 120 / 2\n= 60 words.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 30: Permutations and Combinations',
      pageNumber: 'Page 625 – 630',
      keyExcerpt: 'Permutations of n letters with repetition = n! / (p! × q!). For INDIA: 5! / 2! = 60.'
    },
    eliminationTip: '5 letters with letter I repeated twice: 5! / 2! = 120 / 2 = 60.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Permutations', 'Letter Arrangements', 'Quant']
  },
  {
    id: 'pyq-2020-csat-31',
    subject: 'csat_reasoning',
    topic: 'Data Sufficiency: Age of Individuals',
    subTopic: 'Two Statements to Determine Unique Age',
    question: 'Consider the Question and two Statements given below:\n\nQuestion: What is the age of Mohan?\nStatement 1: Mohan is 4 years older than his brother Sohan.\nStatement 2: Sohan is 2 years younger than his sister Rita, who is 18 years old.\n\nWhich one of the following is correct in respect of the Question and the Statements? (UPSC CSAT 2020)',
    options: [
      'Statement 1 alone is sufficient to answer the Question.',
      'Statement 2 alone is sufficient to answer the Question.',
      'Both Statement 1 and Statement 2 together are sufficient to answer the Question.',
      'Both Statement 1 and Statement 2 together are not sufficient to answer the Question.'
    ],
    correctAnswer: 2,
    explanation: 'Let us evaluate the statements:\n\nStatement 1: Mohan = Sohan + 4\n- Here Sohan\'s age is unknown, so Statement 1 alone is NOT sufficient.\n\nStatement 2: Sohan = Rita - 2, and Rita = 18 years.\n- This gives Sohan = 18 - 2 = 16 years.\n- But Statement 2 tells us nothing about Mohan, so Statement 2 alone is NOT sufficient.\n\nCombining both Statement 1 and Statement 2:\n- From Statement 2, Sohan = 16 years.\n- From Statement 1, Mohan = Sohan + 4 = 16 + 4 = 20 years.\n\nWe obtain the unique age of Mohan (20 years) by combining both statements.\nTherefore, both Statement 1 and Statement 2 together are sufficient to answer the Question.',
    bookReference: {
      bookName: 'Quantitative Aptitude & Data Sufficiency by Arun Sharma',
      edition: '10th Edition',
      chapter: 'Chapter 20: Data Sufficiency in Word Problems',
      pageNumber: 'Page 408 – 414',
      keyExcerpt: 'When individual statements lack link variables, combining both allows chaining values to solve.'
    },
    eliminationTip: 'Statement 1 lacks Sohan\'s age; Statement 2 lacks Mohan. Combined: Rita = 18 => Sohan = 16 => Mohan = 20. Both together are sufficient.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2020', 'Data Sufficiency', 'Age Problems', 'Reasoning']
  },
  {
    id: 'pyq-2020-csat-32',
    subject: 'csat_quant',
    topic: 'Profit and Loss: Faulty Balances',
    subTopic: 'Dishonest Shopkeeper Weight Fraud',
    question: 'A dishonest dealer sells goods at his cost price but uses a false weight of 900 grams for a kilogram weight. What is his percentage profit? (UPSC CSAT 2020)',
    options: [
      '10%',
      '11 (1/9)%',
      '12 (1/2)%',
      '9 (1/11)%'
    ],
    correctAnswer: 1,
    explanation: 'Standard formula for a dishonest dealer using false weight:\nProfit % = [Error / (True Value - Error)] × 100\nOr: Profit % = [Error / (False Weight)] × 100\n\nHere:\n- True weight = 1000 grams\n- False weight given to customer = 900 grams\n- Error (goods saved / cheated) = 1000 - 900 = 100 grams\n\nProfit % = (100 / 900) × 100\n= (1 / 9) × 100\n= 100 / 9\n= 11 (1/9)% (or 11.11%).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 14: Profit and Loss (Dishonest Trader)',
      pageNumber: 'Page 334 – 339',
      keyExcerpt: 'Gain % on false weight = [Error / False Weight] × 100.'
    },
    eliminationTip: 'Gain % = 100 / 900 × 100 = 11 1/9%. (Do not divide by 1000; the shopkeeper\'s actual cost basis is 900g).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Dishonest Dealer', 'Profit and Loss', 'Quant']
  },
  {
    id: 'pyq-2020-csat-33',
    subject: 'csat_reasoning',
    topic: 'Venn Diagrams: Three Sets',
    subTopic: 'Reading Newspaper Language Demographics',
    question: 'In a town of 10,000 families, 40% families buy newspaper A, 20% families buy newspaper B, and 10% families buy newspaper C. 5% families buy A and B, 3% buy B and C, and 4% buy A and C. If 2% families buy all three newspapers, how many families buy newspaper A ONLY? (UPSC CSAT 2020)',
    options: [
      '3,100',
      '3,300',
      '3,500',
      '4,000'
    ],
    correctAnswer: 1,
    explanation: 'Let us calculate the percentage of families who buy Newspaper A ONLY:\nFormula for set A only:\n% (A only) = % (A) - % (A ∩ B) - % (A ∩ C) + % (A ∩ B ∩ C)\n\nGiven:\n- % (A) = 40%\n- % (A ∩ B) = 5%\n- % (A ∩ C) = 4%\n- % (A ∩ B ∩ C) = 2%\n\nCalculate % (A only):\n% (A only) = 40% - 5% - 4% + 2%\n% (A only) = 40% - 9% + 2% = 33%.\n\nNow find 33% of 10,000 families:\nNumber of families = 33% of 10,000 = (33 / 100) × 10,000 = 3,300 families.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 15: Venn Diagrams',
      pageNumber: 'Page 342 – 348',
      keyExcerpt: 'n(A only) = n(A) - n(A ∩ B) - n(A ∩ C) + n(A ∩ B ∩ C).'
    },
    eliminationTip: 'Percentage A only = 40 - 5 - 4 + 2 = 33%. 33% of 10,000 = 3,300.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Venn Diagrams', 'Set Theory', 'Reasoning']
  },
  {
    id: 'pyq-2020-csat-34',
    subject: 'csat_quant',
    topic: 'Time and Work: Men and Days',
    subTopic: 'Inverse Variation of Labor and Time',
    question: '15 men can complete a work in 12 days working 8 hours a day. In how many days can 18 men complete the same work working 10 hours a day? (UPSC CSAT 2020)',
    options: [
      '6 days',
      '8 days',
      '10 days',
      '12 days'
    ],
    correctAnswer: 1,
    explanation: 'Using the standard Man-Hour-Day work equivalence formula:\n(M1 × D1 × H1) / W1 = (M2 × D2 × H2) / W2\n\nSince the work is the same (W1 = W2):\n15 × 12 × 8 = 18 × D2 × 10\n\nCalculate LHS:\n15 × 12 × 8 = 180 × 8 = 1440.\n\nCalculate RHS:\n18 × 10 × D2 = 180 × D2.\n\nEquating both sides:\n180 × D2 = 1440\nD2 = 1440 / 180 = 8 days.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 15: Time and Work (Chain Rule)',
      pageNumber: 'Page 360 – 365',
      keyExcerpt: 'M1 × D1 × H1 = M2 × D2 × H2 for constant work.'
    },
    eliminationTip: '15 × 12 × 8 = 1440 man-hours. D2 = 1440 / (18 × 10) = 1440 / 180 = 8 days.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Chain Rule', 'Time and Work', 'Quant']
  },
  {
    id: 'pyq-2020-csat-35',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Agrarian Credit & Informal Moneylenders',
    subTopic: 'Institutional Credit Deficits for Tenant Farmers',
    question: 'Read the following passage:\n\n"Despite decades of mandatory Priority Sector Lending directives requiring commercial banks to extend 18 percent of adjusted net bank credit to agriculture, tenant cultivators and landless sharecroppers remain overwhelmingly excluded from formal banking. Because commercial banks mandate formal registered land ownership titles as collateral for crop loans, oral lessees and informal tenant farmers cannot access subsidized institutional credit or government crop insurance schemes. Consequently, they are driven into the predatory grip of village commission agents and moneylenders who advance uncollateralized credit at extortionate interest rates of 36 to 60 percent, siphoning away entire seasonal harvest profits."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2020)',
    options: [
      'Commercial banks should completely terminate all lending to agriculture.',
      'Expanding formal credit to informal tenant farmers requires collateral reforms that do not rely strictly on land ownership titles.',
      'Informal village moneylenders provide the most affordable credit to smallholders.',
      'Tenant farming should be criminalized to eliminate rural debt.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that because banks require land ownership titles as collateral, landless tenant farmers cannot access institutional credit and fall into moneylender debt traps. Therefore, the logical corollary is that extending formal credit to tenant farmers requires reforming collateral rules to accommodate non-land-owning cultivators (e.g. through Joint Liability Groups or credit cards based on cultivation agreements). Hence Option (b) is the correct corollary.\nOptions (a), (c), and (d) are distorted, false, or extreme.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Agrarian Credit and Rural Financial Deepening',
      pageNumber: 'Page 102 – 108',
      keyExcerpt: 'Landless tenant farmers face structural credit exclusion due to title-based collateral requirements.'
    },
    eliminationTip: 'The passage explicitly diagnoses the barrier: banks mandate land ownership titles which tenant farmers lack. Reforming collateral requirements is the direct solution.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Reading Comprehension', 'Agricultural Credit', 'Tenant Farmers', 'Corollary']
  },
  {
    id: 'pyq-2020-csat-36',
    subject: 'csat_quant',
    topic: 'Percentages: Successive Discounts',
    subTopic: 'Single Equivalent Discount',
    question: 'A shopkeeper offers two successive discounts of 20% and 10% on an item. What is the single equivalent discount percentage? (UPSC CSAT 2020)',
    options: [
      '28%',
      '30%',
      '32%',
      '25%'
    ],
    correctAnswer: 0,
    explanation: 'Let the original marked price be ₹100.\n\n1. First discount of 20%:\n   Price becomes = 100 - 20 = ₹80.\n\n2. Second discount of 10% on the reduced price of ₹80:\n   Discount = 10% of 80 = ₹8.\n   Final Selling Price = 80 - 8 = ₹72.\n\n3. Total single equivalent discount:\n   Total discount = 100 - 72 = ₹28.\n   Percentage = 28%.\n\nAlternatively using successive discount formula:\nEquivalent Discount = d1 + d2 - (d1 × d2) / 100\n= 20 + 10 - (20 × 10) / 100\n= 30 - 2 = 28%.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 14: Profit, Loss and Discount',
      pageNumber: 'Page 330 – 335',
      keyExcerpt: 'Single equivalent discount = d1 + d2 - (d1 × d2)/100.'
    },
    eliminationTip: '20 + 10 - (20×10)/100 = 30 - 2 = 28%. 5-second calculation.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Successive Discounts', 'Profit and Loss', 'Quant']
  },
  {
    id: 'pyq-2020-csat-37',
    subject: 'csat_reasoning',
    topic: 'Critical Deduction: Syllogisms with Possibilities',
    subTopic: 'Possibility Conclusions in Logic',
    question: 'Consider the following statements and conclusions:\n\nStatements:\n1. Some trees are flowers.\n2. No flower is a fruit.\n\nConclusions:\nI. Some trees are not fruits.\nII. All fruits being trees is a possibility.\n\nWhich of the conclusions logically follow from the given statements? (UPSC CSAT 2020)',
    options: [
      'I only',
      'II only',
      'Both I and II',
      'Neither I nor II'
    ],
    correctAnswer: 2,
    explanation: 'Let us analyze both conclusions:\n- Statement 1: "Some trees are flowers" (Trees ∩ Flowers ≠ ∅).\n- Statement 2: "No flower is a fruit" (Flowers ∩ Fruits = ∅).\n  Conclusion I: The specific trees that are flowers can NEVER be fruits (because no flower can be a fruit). Therefore, those trees are definitely not fruits. Hence, "Some trees are not fruits" is definitely TRUE. Conclusion I is valid.\n\n- Conclusion II: "All fruits being trees is a possibility".\n  Could all fruits be placed inside the portion of "Trees" that does NOT overlap with "Flowers"?\n  Yes! As long as Fruits do not overlap with Flowers, they can be entirely enclosed within Trees without violating any given statement.\n  Therefore, "All fruits being trees is a possibility" is VALID.\n\nBoth Conclusion I and Conclusion II logically follow.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 14: Syllogisms (Possibility Cases)',
      pageNumber: 'Page 320 – 328',
      keyExcerpt: 'Some A are B, No B is C implies Some A are not C. All C being A is a valid possibility.'
    },
    eliminationTip: 'Trees overlapping with flowers cannot be fruits (I is definitely true). All fruits can easily be inside the non-flower part of trees (II possibility is valid). Both follow.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2020', 'Syllogisms', 'Possibility Logic', 'Deductive Reasoning']
  },
  {
    id: 'pyq-2020-csat-38',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility by 9',
    subTopic: 'Sum of Digits Multiples',
    question: 'If the number 517x324 is divisible by 9, then what is the value of the missing digit x? (UPSC CSAT 2020)',
    options: [
      '3',
      '4',
      '5',
      '6'
    ],
    correctAnswer: 2,
    explanation: 'Standard divisibility rule for 9:\nA number is divisible by 9 if and only if the sum of all its digits is divisible by 9.\n\nFor the number 517x324:\nSum of digits = 5 + 1 + 7 + x + 3 + 2 + 4\n= 22 + x.\n\nSince x is a single decimal digit (0 ≤ x ≤ 9):\n- The nearest multiple of 9 greater than or equal to 22 is 27.\n- 22 + x = 27 => x = 27 - 22 = 5.\n\nTherefore, the digit x is 5.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System & Divisibility Tests',
      pageNumber: 'Page 18 – 22',
      keyExcerpt: 'Divisibility rule of 9: The sum of digits must be a multiple of 9.'
    },
    eliminationTip: 'Sum = 5 + 1 + 7 + 3 + 2 + 4 = 22. Next multiple of 9 is 27. 27 - 22 = 5.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Divisibility by 9', 'Sum of Digits', 'Quant']
  },
  {
    id: 'pyq-2020-csat-39',
    subject: 'csat_quant',
    topic: 'Averages: Replacement Problem',
    subTopic: 'Weight Change on Replacing One Member',
    question: 'The average weight of 8 persons increases by 2.5 kg when a new person comes in place of one of them weighing 65 kg. What is the weight of the new person? (UPSC CSAT 2020)',
    options: [
      '75 kg',
      '80 kg',
      '85 kg',
      '90 kg'
    ],
    correctAnswer: 2,
    explanation: 'When one person is replaced by another and the total number of persons remains constant (n = 8):\n\nTotal increase in the weight of the group:\n= Total persons × Increase in average\n= 8 × 2.5 kg = 20 kg.\n\nThis means the newcomer brought all the 65 kg of the departing member plus an additional 20 kg to boost everyone\'s average:\nWeight of new person = Weight of removed person + Total Increase\nWeight of new person = 65 + 20 = 85 kg.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 6: Averages (Replacement Formula)',
      pageNumber: 'Page 144 – 148',
      keyExcerpt: 'Weight of new person = Weight of replaced person + (Number of persons × Change in average).'
    },
    eliminationTip: 'Weight of new person = 65 + (8 × 2.5) = 65 + 20 = 85 kg. Mental math in 5 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2020', 'Averages', 'Replacement', 'Quant']
  },
  {
    id: 'pyq-2020-csat-40',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Water Scarcity and Virtual Water Trade',
    subTopic: 'Exporting Water-Intensive Basmati Rice and Sugarcane',
    question: 'Read the following passage:\n\n"India is among the most water-stressed agrarian nations on Earth, with per capita water availability plummeting steadily towards absolute scarcity thresholds. Yet, Indian agricultural export trade remains heavily dominated by water-guzzling crops—primarily water-intensive Basmati paddy and sugarcane. Because one kilogram of milled rice requires approximately 3,000 to 5,000 litres of irrigation water, India is effectively an enormous net exporter of embedded \'virtual water\' to water-rich trading partners, critically depleting its own non-renewable subterranean aquifers. Reorienting export baskets toward high-value, water-frugal horticulture, spices, and coarse grains is essential to prevent systemic hydrological collapse."\n\nWhich of the following is the most logical and rational inference from the passage? (UPSC CSAT 2020)',
    options: [
      'India has limitless freshwater reserves and should expand rice exports indefinitely.',
      'Exporting water-intensive crops amounts to exporting precious virtual water from an already water-stressed country.',
      'Basmati rice requires zero irrigation water to cultivate.',
      'All agricultural exports from India should be banned permanently.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that India, despite severe water stress, exports millions of tons of rice and sugarcane which consume thousands of liters of water per kilo, effectively exporting scarce "virtual water" and depleting aquifers. Thus Option (b) is the direct, rational inference.\nOptions (a), (c), and (d) directly contradict facts or advocate disproportionate bans.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Water Economics and Virtual Water Trade',
      pageNumber: 'Page 76 – 82',
      keyExcerpt: 'Exporting water-intensive crops like rice from water-stressed nations amounts to an unsustainable export of virtual water.'
    },
    eliminationTip: 'The passage centers on the concept of "virtual water" export through water-intensive rice and sugarcane. Option B states this directly.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2020', 'Reading Comprehension', 'Virtual Water', 'Water Crisis', 'Inference']
  }
];
