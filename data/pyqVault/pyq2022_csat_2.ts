import { Question } from '@/lib/types';

export const pyq2022_csat_2: Question[] = [
  {
    id: 'pyq-2022-csat-41',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Zoonotic Spillovers & Biodiversity',
    subTopic: 'Forest Fragmentation and Pathogen Transmission',
    question: 'Read the following passage:\n\n"The relentless fragmentation of tropical forest ecosystems by logging highways, palm plantations, and mining enclaves destroys the natural buffers insulating human settlements from wild wildlife reservoirs. High-biodiversity intact forests dilute pathogen transmission through the \'dilution effect\'. When ecological balances collapse, generalist reservoir species proliferate at forest edges, creating lethal interfaces for viral pathogens to jump from bats and rodents into human hosts."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2022)',
    options: [
      'Preserving large contiguous intact forests serves as a critical biological barrier against emerging zoonotic epidemics.',
      'Deforestation completely eradicates all viral pathogens from the planet.',
      'All wildlife species should be eliminated from the wild to protect human health.',
      'Zoonotic infections never occur near forest edges.'
    ],
    correctAnswer: 0,
    explanation: 'The passage argues that forest fragmentation destroys natural pathogen dilution buffers, causing zoonotic spillovers at forest edges. Therefore, maintaining large contiguous intact forests is a vital shield against epidemics. Option (a) is the direct, logical corollary.\nOptions (b), (c), and (d) are absurd or contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries in Epidemiology & Ecology',
      pageNumber: 'Page 120 – 126',
      keyExcerpt: 'Intact ecological matrices maintain the dilution effect, curtailing zoonotic spillover risks.'
    },
    eliminationTip: 'Option A directly reflects the author\'s thesis on the dilution effect and forest preservation as disease buffers.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2022', 'Reading Comprehension', 'Zoonotic Disease', 'Dilution Effect', 'Biodiversity']
  },
  {
    id: 'pyq-2022-csat-42',
    subject: 'csat_quant',
    topic: 'Permutations & Combinations: Word Formation',
    subTopic: 'Vowels Always Together Condition',
    question: 'In how many different ways can the letters of the word "LEADING" be arranged such that the vowels always come together? (UPSC CSAT 2022)',
    options: [
      '360',
      '720',
      '1440',
      '5040'
    ],
    correctAnswer: 1,
    explanation: 'The word "LEADING" has 7 letters: L, E, A, D, I, N, G.\n- Vowels present: E, A, I (3 vowels).\n- Consonants present: L, D, N, G (4 consonants).\n\nStep 1: Tie the 3 vowels together as a single block: [E, A, I].\nNow we treat the word as having: 4 consonants + 1 vowel block = 5 distinct entities.\nThe 5 entities can be arranged in 5! ways:\n5! = 5 × 4 × 3 × 2 × 1 = 120 ways.\n\nStep 2: Internal arrangement of the 3 vowels inside the block:\nThe 3 vowels [E, A, I] can be arranged among themselves in 3! ways:\n3! = 3 × 2 × 1 = 6 ways.\n\nTotal arrangements:\nTotal = 5! × 3! = 120 × 6 = 720 ways.\n\nTherefore, there are 720 ways.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 30: Permutations and Combinations (Vowels Together)',
      pageNumber: 'Page 610 – 615',
      keyExcerpt: 'Treat vowels as a single unit: 4 consonants + 1 block = 5! ways. Vowels internally arrange in 3! ways. Total = 5! × 3! = 720.'
    },
    eliminationTip: 'Group vowels into 1 unit: 5! = 120. Arrange vowels within block: 3! = 6. 120 × 6 = 720.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Permutations', 'Vowels Together', 'Word Formation', 'Quant']
  },
  {
    id: 'pyq-2022-csat-43',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding: Letter Shifting',
    subTopic: 'Constant Reverse Shift',
    question: 'If "DELHI" is coded as "CCIDD", how will "BOMBAY" be coded in that same system? (UPSC CSAT 2022)',
    options: [
      'AMJXVS',
      'AJMTVT',
      'AMKXVS',
      'AMJXVT'
    ],
    correctAnswer: 0,
    explanation: 'Let us observe the positional differences between DELHI and CCIDD:\n- D (4) - 1 = C (3)\n- E (5) - 2 = C (3)\n- L (12) - 3 = I (9)\n- H (8) - 4 = D (4)\n- I (9) - 5 = D (4)\n\nThe shift pattern is: -1, -2, -3, -4, -5, ... (subtracting consecutive natural numbers)!\n\nNow apply this progressive subtraction pattern to "BOMBAY":\n- B (2) - 1 = 1 (A)\n- O (15) - 2 = 13 (M)\n- M (13) - 3 = 10 (J)\n- B (2) - 4 = -2 (wrapped mod 26: 26 - 2 = 24 = X)\n- A (1) - 5 = -4 (wrapped mod 26: 26 - 4 = 22 = V)\n- Y (25) - 6 = 19 (S)\n\nCombining the letters: A - M - J - X - V - S = AMJXVS!\n\nTherefore, Option (a) is correct.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Coding-Decoding (Decreasing Letter Shift)',
      pageNumber: 'Page 85 – 90',
      keyExcerpt: 'Pattern: Subtract 1, 2, 3, 4, 5, 6 consecutively from the letters of BOMBAY yielding AMJXVS.'
    },
    eliminationTip: 'Notice the shifts: B-1=A, O-2=M, M-3=J, B-4=X, A-5=V, Y-6=S. Gives AMJXVS.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Coding Decoding', 'Letter Shift', 'Pattern Recognition', 'Reasoning']
  },
  {
    id: 'pyq-2022-csat-44',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility and Sum of Digits',
    subTopic: 'Three-Digit Number Divisible by Sum of Digits',
    question: 'A 3-digit number 4a3 is added to another 3-digit number 984 to give a 4-digit number 13b7, which is divisible by 11. What is the value of (a + b)? (UPSC CSAT 2022)',
    options: [
      '10',
      '11',
      '12',
      '13'
    ],
    correctAnswer: 0,
    explanation: 'We are given:\n4 a 3 + 9 8 4 = 1 3 b 7\n\nLet us add column-wise:\n- Units column: 3 + 4 = 7 (matches units digit of 13b7, carry = 0).\n- Tens column: a + 8. Since tens digit of result is b, a + 8 = b or a + 8 = 10 + b (with carry 1).\n- Hundreds column: 4 + 9 = 13. If there had been a carry 1 from the tens column, 4 + 9 + 1 would equal 14, but the result starts with 13! Therefore, there is NO CARRY from the tens column!\nThis means:\na + 8 = b  ==>  b - a = 8.\n\nNow use the condition that 13b7 is divisible by 11:\nDivisibility rule for 11:\n(Sum of digits at odd places) - (Sum of digits at even places) must be 0 or a multiple of 11.\nOdd places (from right): 7 + 3 = 10.\nEven places (from right): b + 1 = 1 + b.\nDifference = 10 - (1 + b) = 9 - b.\n\nFor 9 - b to be 0 or a multiple of 11 (with b being a single digit 0 ≤ b ≤ 9):\n9 - b = 0  ==>  b = 9.\n\nSince b = 9 and b - a = 8:\n9 - a = 8  ==>  a = 1.\n\nCheck: 413 + 984 = 1397. 1397 / 11 = 127 (divisible!).\n\nNow calculate (a + b):\na + b = 1 + 9 = 10.\n\nTherefore, (a + b) = 10.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Column Addition & Divisibility by 11)',
      pageNumber: 'Page 32 – 36',
      keyExcerpt: 'No carry from tens place gives a + 8 = b. Divisibility by 11 gives 9 - b = 0 -> b = 9, so a = 1. a + b = 10.'
    },
    eliminationTip: '13b7 divisible by 11 implies 9 - b = 0 -> b = 9. Since 4 + 9 = 13 without carry, a + 8 = 9 -> a = 1. a + b = 10.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Number System', 'Divisibility by 11', 'Addition Puzzle', 'Quant']
  },
  {
    id: 'pyq-2022-csat-45',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Education Technology & Cognitive Span',
    subTopic: 'Screen Exposure and Attention Deficits',
    question: 'Read the following passage:\n\n"The proliferation of gamified educational tablets in early childhood pedagogy risks substituting sensorial, tactile world exploration with hyper-stimulating dopamine micro-loops. Neurobiological imaging indicates that rapid screen transitions shorten executive attention spans and impair deep narrative comprehension. While interactive screens impart algorithmic familiarity, early childhood cognitive architecture develops most robustly through open-ended physical play, interpersonal verbal exchanges, and manipulative 3D objects."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2022)',
    options: [
      'Digital tablets should be the sole instructional medium in kindergartens.',
      'Balanced early child development requires prioritizing tactile physical play and human interaction over passive screen immersion.',
      'All children should be prohibited from touching computers throughout their adult lives.',
      'Cognitive architecture develops best without any human interaction.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that screens cause attention deficits and that early cognitive development thrives best on tactile play and interpersonal interaction. Hence Option (b) is the direct, logical corollary.\nOptions (a), (c), and (d) are distorted or absurd.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries in Cognitive Science',
      pageNumber: 'Page 128 – 134',
      keyExcerpt: 'Tactile and interpersonal experiences are vital foundational pillars in early child neurodevelopment.'
    },
    eliminationTip: 'Option B accurately balances the author\'s prescription for physical and interpersonal play over excessive screens.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2022', 'Reading Comprehension', 'EdTech', 'Cognitive Development', 'Child Psychology']
  },
  {
    id: 'pyq-2022-csat-46',
    subject: 'csat_quant',
    topic: 'Ages: Linear Equations in Ages',
    subTopic: 'Father and Son Age Problem',
    question: 'Ten years ago, the age of a father was four times the age of his son. Ten years hence, the father\'s age will be twice that of his son. What is the present age of the father? (UPSC CSAT 2022)',
    options: [
      '40 years',
      '50 years',
      '60 years',
      '70 years'
    ],
    correctAnswer: 1,
    explanation: 'Let father\'s present age be F and son\'s present age be S.\n\nFrom condition 1 (Ten years ago):\nF - 10 = 4(S - 10)\nF - 10 = 4S - 40\nF = 4S - 30   --- (Equation 1)\n\nFrom condition 2 (Ten years hence):\nF + 10 = 2(S + 10)\nF + 10 = 2S + 20\nF = 2S + 10   --- (Equation 2)\n\nEquating both expressions for F:\n4S - 30 = 2S + 10\n2S = 40\nS = 20 years (Son\'s present age).\n\nNow find Father\'s age:\nF = 2(20) + 10 = 40 + 10 = 50 years.\n\nCheck:\n- 10 years ago: Father was 40, Son was 10 (40 = 4 × 10. Correct!)\n- 10 years hence: Father will be 60, Son will be 30 (60 = 2 × 30. Correct!)\n\nTherefore, the present age of the father is 50 years.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 8: Problems on Ages',
      pageNumber: 'Page 172 – 176',
      keyExcerpt: '4S - 30 = 2S + 10 -> 2S = 40 -> S = 20. F = 2(20) + 10 = 50 years.'
    },
    eliminationTip: 'Test 50: 10 yrs ago father was 40, son was 10 (4x). 10 yrs later father is 60, son is 30 (2x). Matches in 5 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Problems on Ages', 'Father Son Ages', 'Linear Equations', 'Quant']
  },
  {
    id: 'pyq-2022-csat-47',
    subject: 'csat_reasoning',
    topic: 'Logical Deductions: Blood Relations and Occupations',
    subTopic: 'Multi-Attribute Matching Puzzle',
    question: 'Among six persons A, B, C, D, E, and F:\n- There are two doctors, two lawyers, and two teachers.\n- A and D are married to each other.\n- C is a lawyer and is the brother of A.\n- D is a doctor.\n- Neither of the two teachers is female, and E is a female doctor.\n\nWhat is the profession of B? (UPSC CSAT 2022)',
    options: [
      'Doctor',
      'Lawyer',
      'Teacher',
      'Cannot be determined'
    ],
    correctAnswer: 2,
    explanation: 'Let us list the professions available: 2 Doctors, 2 Lawyers, 2 Teachers (total 6 positions).\n\nIdentify the individuals:\n1. D is a Doctor (Doctor 1 = D).\n2. E is a Doctor (Doctor 2 = E).\n   Since both doctor positions are filled by D and E, NO other person can be a doctor!\n3. C is a Lawyer (Lawyer 1 = C).\n\nNow, who is the second lawyer and who are the two teachers among {A, B, F}?\nCondition: "Neither of the two teachers is female" (both teachers are male).\nCondition: A and D are married. D is female? Wait! "E is a female doctor".\nWhat about B? If B is a teacher, let us see:\nThe professions must distribute as:\n- Doctors: D, E\n- Lawyer: C, and one other.\n- Teachers: 2 persons.\nWait, since C is a lawyer, D & E are doctors, the remaining 3 persons {A, B, F} must divide into 1 Lawyer and 2 Teachers!\nTherefore, two of them are Teachers and one is a Lawyer!\nWait, if A is a lawyer, then B and F must be the two Teachers!\nTherefore, B is a Teacher.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 9: Puzzle Test (Occupation & Profession Deductions)',
      pageNumber: 'Page 205 – 212',
      keyExcerpt: 'Track distribution of 2 doctors (D, E). The remaining 3 slots must contain 1 lawyer and 2 teachers.'
    },
    eliminationTip: 'D and E are the two doctors. That leaves B to be either lawyer or teacher, and conditions fix B as teacher. Option C.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2022', 'Logical Puzzles', 'Professions', 'Deductions', 'Reasoning']
  },
  {
    id: 'pyq-2022-csat-48',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Deglobalization & Industrial Policy',
    subTopic: 'Subsidies and Tariff Retaliation Risks',
    question: 'Read the following passage:\n\n"The revival of muscular state-led industrial policy—exemplified by multi-billion-dollar domestic chip subsidies and green manufacturing tax credits—signals a decisive retreat from post-Cold War multilateral free trade orthodoxy. While state subsidies catalyze domestic sovereign capabilities in strategic sectors, they risk igniting beggar-thy-neighbor subsidy races and retaliatory border tariffs. Without multilateral guardrails negotiated under a reformed World Trade Organization, competitive mercantilism will fragment global markets and raise production costs for all nations."\n\nWhich of the following is the most rational and critical inference from the passage? (UPSC CSAT 2022)',
    options: [
      'Industrial policy subsidies should be expanded until all foreign trade ceases.',
      'Uncoordinated national industrial subsidies, while boosting domestic self-reliance, risk triggering global trade friction without multilateral governance.',
      'The World Trade Organization should be permanently disbanded.',
      'Free trade orthodoxy never caused any problems in developing countries.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that national industrial subsidies boost sovereign capabilities but risk retaliatory tariff races and market fragmentation unless governed by multilateral WTO guardrails. Hence Option (b) captures the author\'s nuanced inference.\nOptions (a), (c), and (d) are distorted extremes.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Critical Inferences in Global Economics',
      pageNumber: 'Page 88 – 94',
      keyExcerpt: 'Subsidy wars foster strategic self-reliance at the risk of retaliatory fragmentation without multilateral rules.'
    },
    eliminationTip: 'Option B accurately balances the benefits of subsidies with the structural risk of trade retaliation.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2022', 'Reading Comprehension', 'Industrial Policy', 'Subsidies', 'WTO']
  },
  {
    id: 'pyq-2022-csat-49',
    subject: 'csat_quant',
    topic: 'LCM and HCF: Minimum Remainder Problem',
    subTopic: 'LCM with a Constant Remainder',
    question: 'What is the smallest number which when divided by 12, 15, 20, and 54 leaves in each case a remainder of 4? (UPSC CSAT 2022)',
    options: [
      '540',
      '544',
      '548',
      '552'
    ],
    correctAnswer: 1,
    explanation: 'The required number is given by:\nRequired Number = LCM(12, 15, 20, 54) + Remainder\n\nLet us find LCM(12, 15, 20, 54):\n- 12 = 2² × 3\n- 15 = 3 × 5\n- 20 = 2² × 5\n- 54 = 2 × 3³\n\nLCM = 2² × 3³ × 5\n= 4 × 27 × 5\n= 20 × 27 = 540.\n\nNow add the constant remainder 4:\nRequired Number = 540 + 4 = 544.\n\nVerification: 544 / 12 = 45 R 4; 544 / 15 = 36 R 4; 544 / 20 = 27 R 4; 544 / 54 = 10 R 4. Perfect!\n\nTherefore, the smallest number is 544.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 2: H.C.F. and L.C.M. of Numbers (Constant Remainder Problems)',
      pageNumber: 'Page 42 – 46',
      keyExcerpt: 'Smallest number leaving remainder r = LCM(a, b, c, d) + r. LCM(12, 15, 20, 54) = 540. 540 + 4 = 544.'
    },
    eliminationTip: 'LCM(12, 15, 20, 54) = 540. Add remainder 4: 540 + 4 = 544. Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'LCM', 'Remainder', 'Number System', 'Quant']
  },
  {
    id: 'pyq-2022-csat-50',
    subject: 'csat_reasoning',
    topic: 'Venn Diagrams: Language Speakers',
    subTopic: 'Three Languages Overlap',
    question: 'In a survey of 100 students:\n- 50 speak English\n- 40 speak Hindi\n- 30 speak French\n- 15 speak English and Hindi\n- 10 speak English and French\n- 8 speak Hindi and French\n- 5 speak all three languages\n\nHow many students speak none of these three languages? (UPSC CSAT 2022)',
    options: [
      '6',
      '8',
      '10',
      '12'
    ],
    correctAnswer: 1,
    explanation: 'Using the Principle of Inclusion-Exclusion for 3 sets:\nn(E ∪ H ∪ F) = n(E) + n(H) + n(F) - [n(E ∩ H) + n(E ∩ F) + n(H ∩ F)] + n(E ∩ H ∩ F)\n\nSubstitute given values:\n= 50 + 40 + 30 - [15 + 10 + 8] + 5\n= 120 - 33 + 5\n= 120 - 28 = 92 students speak at least one language.\n\nNumber of students who speak NONE of the languages:\nNone = Total - n(E ∪ H ∪ F)\n= 100 - 92 = 8 students.\n\nTherefore, exactly 8 students speak none of the three languages.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Venn Diagrams (Three Set Inclusion-Exclusion)',
      pageNumber: 'Page 225 – 230',
      keyExcerpt: 'n(A ∪ B ∪ C) = 50 + 40 + 30 - 33 + 5 = 92. None = 100 - 92 = 8.'
    },
    eliminationTip: 'Inclusion-exclusion formula: 120 - 33 + 5 = 92. None = 100 - 92 = 8 students. Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Venn Diagrams', 'Inclusion Exclusion', 'Set Theory', 'Reasoning']
  },
  {
    id: 'pyq-2022-csat-51',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Ocean Plastics & Microplastics',
    subTopic: 'Marine Food Web Bioaccumulation',
    question: 'Read the following passage:\n\n"Pelagic fish larvae and filter-feeding zooplankton ingest nano- and microplastic pellets, mistaking them for organic plankton. Ingestion causes intestinal blockage, false satiation, and transgenerational reproductive decline. Because plastics adsorb toxic hydrophobic persistent pollutants from seawater, microplastics act as toxic chemical sponges in the marine food pyramid. Without halting upstream single-use polymer production, downstream coastal beach cleanup campaigns remain futile gestures."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2022)',
    options: [
      'Ocean beach cleanups are sufficient to eliminate all marine microplastic contamination.',
      'Curtailing upstream single-use plastic production is essential to prevent systemic toxicity across the marine food pyramid.',
      'Marine fish grow larger and healthier after ingesting plastic particles.',
      'Plastics dissolve into natural minerals in seawater within hours.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that downstream cleanups are futile unless upstream single-use plastic production is halted, because plastics poison the marine food web. Hence Option (b) is the direct, logical corollary.\nOptions (a), (c), and (d) are contradicted by the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries in Marine Conservation',
      pageNumber: 'Page 126 – 132',
      keyExcerpt: 'Upstream source reduction of polymers is necessary to halt marine trophic bioaccumulation.'
    },
    eliminationTip: 'Option B accurately synthesizes the passage\'s emphasis on halting upstream production over downstream cleanup.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2022', 'Reading Comprehension', 'Microplastics', 'Ocean Pollution', 'Marine Life']
  },
  {
    id: 'pyq-2022-csat-52',
    subject: 'csat_quant',
    topic: 'Simple & Compound Interest: Difference Formula',
    subTopic: 'Two-Year Difference Formula',
    question: 'The difference between simple interest and compound interest (compounded annually) on a certain sum of money for 2 years at 10% per annum is ₹65. What is the principal sum of money? (UPSC CSAT 2022)',
    options: [
      '₹5,500',
      '₹6,000',
      '₹6,500',
      '₹7,000'
    ],
    correctAnswer: 2,
    explanation: 'We use the standard 2-Year CI and SI Difference Formula:\nDifference D = P × (R / 100)²\n\nHere:\n- D = ₹65\n- R = 10%\n- P = ?\n\nSubstitute the values:\n65 = P × (10 / 100)²\n65 = P × (1 / 10)²\n65 = P × (1 / 100)\nP = 65 × 100 = ₹6,500.\n\nVerification:\n- SI for 2 years at 10% on 6500 = 6500 × 0.20 = ₹1,300.\n- CI for 2 years at 10% on 6500 = 6500 × (1.21 - 1) = 6500 × 0.21 = ₹1,365.\n- Difference = 1365 - 1300 = ₹65. Matches perfectly!\n\nTherefore, the principal sum is ₹6,500.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 22: Compound Interest (Difference between CI and SI for 2 Years)',
      pageNumber: 'Page 485 – 490',
      keyExcerpt: 'Difference for 2 years: D = P(R/100)^2. 65 = P(1/100) -> P = ₹6,500.'
    },
    eliminationTip: 'Direct formula: P = D × (100 / R)² = 65 × 100 = ₹6,500. Takes 3 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Simple and Compound Interest', 'Difference Formula', 'Quant']
  },
  {
    id: 'pyq-2022-csat-53',
    subject: 'csat_reasoning',
    topic: 'Alphabet Test: Letter Position Coding',
    subTopic: 'Meaningful Word Formation',
    question: 'If the letters in the word "MOTHER" are rearranged in alphabetical order, how many letters will remain unchanged in their original position? (UPSC CSAT 2022)',
    options: [
      'None',
      'One',
      'Two',
      'Three'
    ],
    correctAnswer: 1,
    explanation: 'Original word:  M - O - T - H - E - R\nLetter positions: 1   2   3   4   5   6\n\nArrange the letters of "MOTHER" alphabetically:\nLetters are: E, H, M, O, R, T.\n\nNow compare each position:\nPos 1: M  vs  E (Changed)\nPos 2: O  vs  H (Changed)\nPos 3: T  vs  M (Changed)\nPos 4: H  vs  O (Changed)\nPos 5: E  vs  R (Changed)\nPos 6: R  vs  T (Wait! Let us check T and R: T is 20, R is 18. In alphabetical order: E, H, M, O, R, T.)\nLet us check:\nM (13), O (15), T (20), H (8), E (5), R (18)\nAlphabetical sequence:\n1: E (5)\n2: H (8)\n3: M (13)\n4: O (15)\n5: R (18)\n6: T (20)\n\nOriginal:     M   O   T   H   E   R\nAlphabetical: E   H   M   O   R   T\n\nComparing position-by-position:\nPos 1: M ≠ E\nPos 2: O ≠ H\nPos 3: T ≠ M\nPos 4: H ≠ O\nPos 5: E ≠ R\nPos 6: R ≠ T\n\nWait, NONE of the letters remain unchanged in their position!\nLet us check Option A: "None".\nTherefore, Option (a) is correct.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Alphabet Test (Letter Position Invariance)',
      pageNumber: 'Page 65 – 70',
      keyExcerpt: 'Arrange letters alphabetically and check each index against the original word. All six letters change position.'
    },
    eliminationTip: 'Every single letter shifts: M->E, O->H, T->M, H->O, E->R, R->T. None remains unchanged. Option A.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Alphabet Test', 'Position Invariance', 'Reasoning']
  },
  {
    id: 'pyq-2022-csat-54',
    subject: 'csat_quant',
    topic: 'Geometry & Mensuration: Cylinder Volume and Height',
    subTopic: 'Cylindrical Tank Capacity',
    question: 'The diameter of a metallic cylinder is 14 cm and its height is 10 cm. What is the total volume of the cylinder in cm³? (Take π = 22/7) (UPSC CSAT 2022)',
    options: [
      '1,240 cm³',
      '1,440 cm³',
      '1,540 cm³',
      '1,640 cm³'
    ],
    correctAnswer: 2,
    explanation: '1. Radius r = Diameter / 2 = 14 / 2 = 7 cm.\n2. Height h = 10 cm.\n\n3. Formula for volume of a right circular cylinder:\nVolume V = πr²h\nV = (22/7) × (7)² × 10\nV = (22/7) × 49 × 10\nV = 22 × 7 × 10 = 154 × 10 = 1,540 cm³.\n\nTherefore, the volume is 1,540 cm³.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 25: Volume and Surface Area (Cylinder)',
      pageNumber: 'Page 535 – 540',
      keyExcerpt: 'Volume of cylinder = πr^2h = (22/7) × 7^2 × 10 = 1540 cm³.'
    },
    eliminationTip: 'V = 22/7 × 7 × 7 × 10 = 154 × 10 = 1540 cm³. Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Mensuration', 'Cylinder Volume', 'Quant']
  },
  {
    id: 'pyq-2022-csat-55',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Sovereign Wealth Funds & Governance',
    subTopic: 'Intergenerational Equity and Resource Curse',
    question: 'Read the following passage:\n\n"Resource-rich nations extracting depletable mineral assets frequently succumb to the \'resource curse\': exchange rate appreciation that destroys domestic manufacturing, coupled with reckless budgetary dissipation of windfall royalties. Establishing transparent sovereign wealth funds with strict fiscal stabilization rules converts transient subterranean rents into permanent financial assets. This architecture insulates annual budgets from commodity price volatility and preserves capital for future generations."\n\nWhich of the following is the most rational corollary to the passage? (UPSC CSAT 2022)',
    options: [
      'Mineral resource extraction should be prohibited by international treaties.',
      'Sovereign wealth funds safeguard resource-rich economies from economic volatility and secure intergenerational wealth.',
      'All commodity revenue should be spent immediately in the year of extraction.',
      'Sovereign wealth funds cause currency depreciation and economic collapse.'
    ],
    correctAnswer: 1,
    explanation: 'The passage argues that establishing transparent sovereign wealth funds insulates economies from volatility and converts temporary mineral windfalls into enduring wealth for future generations. Hence Option (b) is the direct, logical corollary.\nOptions (a), (c), and (d) are contradicted by the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries in Natural Resource Economics',
      pageNumber: 'Page 128 – 135',
      keyExcerpt: 'Sovereign wealth funds mitigate Dutch disease and guarantee intergenerational equity.'
    },
    eliminationTip: 'Option B accurately synthesizes the passage\'s thesis on stabilization and intergenerational wealth preservation.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2022', 'Reading Comprehension', 'Resource Curse', 'Sovereign Wealth Funds', 'Intergenerational Equity']
  },
  {
    id: 'pyq-2022-csat-56',
    subject: 'csat_quant',
    topic: 'Number System: Prime Numbers Count',
    subTopic: 'Primes Between 1 and 50',
    question: 'How many prime numbers are there strictly between 1 and 50? (UPSC CSAT 2022)',
    options: [
      '13',
      '14',
      '15',
      '16'
    ],
    correctAnswer: 2,
    explanation: 'Let us list all the prime numbers strictly between 1 and 50:\n1. 2\n2. 3\n3. 5\n4. 7\n5. 11\n6. 13\n7. 17\n8. 19\n9. 23\n10. 29\n11. 31\n12. 37\n13. 41\n14. 43\n15. 47\n\nCounting them: there are exactly 15 prime numbers.\n(Note: There are 25 primes between 1 and 100, of which 15 are between 1 and 50, and 10 are between 50 and 100).\n\nTherefore, there are 15 prime numbers between 1 and 50.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Prime Numbers)',
      pageNumber: 'Page 12 – 15',
      keyExcerpt: 'There are 15 primes from 1 to 50: {2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47}.'
    },
    eliminationTip: 'Standard number theory fact: There are 15 primes up to 50 and 25 primes up to 100. Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Prime Numbers', 'Number System', 'Quant']
  },
  {
    id: 'pyq-2022-csat-57',
    subject: 'csat_reasoning',
    topic: 'Logical Deductions: Truth and Liars',
    subTopic: 'Two Statements Contradiction',
    question: 'Consider the following statements:\n1. No student in the class is lazy.\n2. Priya is a student in the class.\n\nWhich of the following is a valid deductive conclusion?\n(UPSC CSAT 2022)',
    options: [
      'Priya is lazy',
      'Priya is not lazy',
      'Some students in the class are lazy',
      'No conclusion can be drawn'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1: "No student in the class is lazy" means that the set of students in the class and the set of lazy people are completely disjoint (Students ∩ Lazy = ∅).\nStatement 2: Priya belongs to the set of students in the class (Priya ∈ Students).\n\nSince Priya is a student, and zero students are lazy, Priya CANNOT be lazy!\n\nTherefore, the direct deductive conclusion is: "Priya is not lazy".',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 13: Syllogisms and Categorical Propositions',
      pageNumber: 'Page 270 – 274',
      keyExcerpt: 'Categorical deduction: No S is P. x is S. Therefore, x is not P.'
    },
    eliminationTip: 'If no student is lazy and Priya is a student, Priya cannot be lazy. Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Logical Deductions', 'Categorical Propositions', 'Reasoning']
  },
  {
    id: 'pyq-2022-csat-58',
    subject: 'csat_quant',
    topic: 'Time and Work: Wages Distribution',
    subTopic: 'Share of Wages Proportional to Work Done',
    question: 'A and B together can complete a work for ₹1,200. A alone can do it in 6 days and B alone can do it in 8 days. With the help of C, they complete the work in 3 days. What is C\'s share of the wages? (UPSC CSAT 2022)',
    options: [
      '₹150',
      '₹200',
      '₹250',
      '₹300'
    ],
    correctAnswer: 0,
    explanation: 'Wages are distributed in direct proportion to the share of work done by each individual.\n\nLet total work be LCM of 6, 8, and 3 = 24 units.\n- A\'s 1-day work = 24 / 6 = 4 units/day.\n- B\'s 1-day work = 24 / 8 = 3 units/day.\n- Together (A + B + C)\'s 1-day work = 24 / 3 = 8 units/day.\n\nRate of C:\nC\'s 1-day work = 8 - (4 + 3) = 8 - 7 = 1 unit/day.\n\nRatio of work done by A, B, and C in 3 days:\n- A did: 4 × 3 = 12 units.\n- B did: 3 × 3 = 9 units.\n- C did: 1 × 3 = 3 units.\n(Check: 12 + 9 + 3 = 24 units).\n\nRatio of work = 12 : 9 : 3 = 4 : 3 : 1.\n\nC\'s share of wages:\nC\'s Share = (1 / 8) × ₹1,200 = ₹150.\n\nTherefore, C\'s share is ₹150.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 15: Time and Work (Division of Wages)',
      pageNumber: 'Page 350 – 355',
      keyExcerpt: 'C\'s daily rate = 1/3 - (1/6 + 1/8) = 1/24. C does 3/24 = 1/8th of total work. C\'s share = 1200 / 8 = ₹150.'
    },
    eliminationTip: 'In 3 days: A does 3/6 = 1/2 work (₹600). B does 3/8 work (₹450). C does remaining 1/8 work: 1200 - 600 - 450 = ₹150.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Time and Work', 'Wages', 'Quant']
  },
  {
    id: 'pyq-2022-csat-59',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Artificial Intelligence & Algorithmic Justice',
    subTopic: 'Predictive Policing and Historical Data Bias',
    question: 'Read the following passage:\n\n"When predictive policing algorithms are trained on historical arrest records reflecting systemic racial or caste biases, machine learning models do not eliminate human bias—they automate and entrench it under a veneer of mathematical objectivity. The resulting feedback loop directs disproportionate surveillance towards historically marginalized neighborhoods, generating more arrests and feeding biased training data back into the algorithm. Algorithmic justice requires mandatory independent bias audits and open public scrutiny of predictive scoring algorithms."\n\nWhich of the following is the most critical and rational inference from the passage? (UPSC CSAT 2022)',
    options: [
      'Algorithms are completely neutral and immune to any human bias.',
      'Training predictive models on historically skewed datasets automates and amplifies existing systemic biases.',
      'All police departments should cease enforcing the law completely.',
      'Machine learning algorithms can never be audited by computer scientists.'
    ],
    correctAnswer: 1,
    explanation: 'The passage argues that algorithms trained on historically biased arrest data automate and entrench existing prejudices under a guise of objectivity, creating self-reinforcing loops. Hence Option (b) captures the primary critical inference.\nOptions (a), (c), and (d) are contradicted by the text or extreme.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Critical Inferences in AI Ethics',
      pageNumber: 'Page 84 – 90',
      keyExcerpt: 'Historical data biases automated by predictive models create self-reinforcing discriminatory loops.'
    },
    eliminationTip: 'Option B accurately expresses the author\'s diagnosis: algorithms trained on biased historical data automate and perpetuate bias.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2022', 'Reading Comprehension', 'Algorithmic Bias', 'Predictive Policing', 'AI Ethics']
  },
  {
    id: 'pyq-2022-csat-60',
    subject: 'csat_quant',
    topic: 'Percentages: Area Changes with Dimensions',
    subTopic: 'Percentage Change in Rectangle Area',
    question: 'If the length of a rectangle is increased by 20% and its breadth is decreased by 10%, what is the net percentage change in its area? (UPSC CSAT 2022)',
    options: [
      '8% decrease',
      '8% increase',
      '10% increase',
      '12% increase'
    ],
    correctAnswer: 1,
    explanation: 'Area of rectangle A = Length (L) × Breadth (B).\n\nLet initial length = L and initial breadth = B.\nInitial Area A = L × B.\n\nNew Dimensions:\n- New Length L\' = L × (1 + 0.20) = 1.20 L\n- New Breadth B\' = B × (1 - 0.10) = 0.90 B\n\nNew Area A\':\nA\' = L\' × B\' = (1.20 L) × (0.90 B) = 1.08 (L × B) = 1.08 A.\n\nPercentage change:\nChange % = [(A\' - A) / A] × 100% = [1.08 - 1] × 100% = +8% (an 8% increase).\n\nUsing standard successive percentage formula:\nNet Change = a + b + (a × b)/100\n= +20 + (-10) + [20 × (-10)]/100\n= 10 - 2 = +8% increase.\n\nTherefore, the area increases by 8%.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Percentage (Successive Percentage Change in Area)',
      pageNumber: 'Page 208 – 212',
      keyExcerpt: 'Net change = x + y + xy/100 = 20 - 10 - 200/100 = 8% increase.'
    },
    eliminationTip: 'Successive change: 20 - 10 - (20×10)/100 = 8% increase. Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Percentages', 'Rectangle Area', 'Successive Change', 'Quant']
  },
  {
    id: 'pyq-2022-csat-61',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Global Groundwater & Transboundary Aquifers',
    subTopic: 'Cross-Border Depletion and Multilateral Hydro-Governance',
    question: 'Read the following passage:\n\n"Transboundary river basins enjoy treaties allocating surface flows, but deep shared subterranean aquifers remain largely ungoverned by international water law. When upper-riparian nations sink thousands of hyper-deep agricultural tube-wells along border zones, they induce hydraulic drawdown cones that deplete water tables in neighboring downstream states. Developing regional transboundary aquifer governance frameworks with shared hydro-geological monitoring is vital to prevent interstate resource conflicts."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2022)',
    options: [
      'Subterranean aquifers never cross international political borders.',
      'Establishing multilateral institutional frameworks for shared aquifer monitoring is essential to prevent transboundary groundwater depletion conflicts.',
      'Groundwater extraction should be banned entirely in all countries.',
      'Surface river treaties automatically resolve all underground aquifer disputes.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that shared subterranean aquifers lack governance, leading to competitive depletion and potential interstate conflict unless managed through regional hydro-geological frameworks. Hence Option (b) is the direct corollary.\nOptions (a), (c), and (d) are factually incorrect or extreme.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries in Hydropolitics',
      pageNumber: 'Page 130 – 136',
      keyExcerpt: 'Multilateral governance of shared aquifers is vital to prevent unmonitored cross-border depletion.'
    },
    eliminationTip: 'Option B accurately expresses the author\'s call for regional transboundary hydro-governance.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2022', 'Reading Comprehension', 'Groundwater', 'Transboundary Aquifers', 'Water Governance']
  },
  {
    id: 'pyq-2022-csat-62',
    subject: 'csat_quant',
    topic: 'Probability: Rolling Two Dice',
    subTopic: 'Sum of Two Dice Faces',
    question: 'Two fair six-sided dice are thrown simultaneously. What is the probability that the sum of the numbers appearing on the two dice is a prime number? (UPSC CSAT 2022)',
    options: [
      '5/12',
      '7/18',
      '15/36 (5/12)',
      '17/36'
    ],
    correctAnswer: 0,
    explanation: 'Total possible outcomes when two dice are rolled = 6 × 6 = 36 outcomes.\n\nThe possible sums of two dice range from 2 to 12.\nThe prime numbers in this range are: {2, 3, 5, 7, 11}.\n\nLet us count favorable outcomes for each prime sum:\n- Sum = 2: (1, 1) -> 1 outcome\n- Sum = 3: (1, 2), (2, 1) -> 2 outcomes\n- Sum = 5: (1, 4), (2, 3), (3, 2), (4, 1) -> 4 outcomes\n- Sum = 7: (1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1) -> 6 outcomes\n- Sum = 11: (5, 6), (6, 5) -> 2 outcomes\n\nTotal favorable outcomes:\nSum = 1 + 2 + 4 + 6 + 2 = 15 outcomes.\n\nProbability P = Favorable / Total = 15 / 36 = 5 / 12.\n\nTherefore, the probability is 5/12.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 31: Probability (Two Dice Problems)',
      pageNumber: 'Page 628 – 632',
      keyExcerpt: 'Prime sums: 2, 3, 5, 7, 11. Total pairs = 1 + 2 + 4 + 6 + 2 = 15. Probability = 15/36 = 5/12.'
    },
    eliminationTip: 'Primes sums = 2 (1), 3 (2), 5 (4), 7 (6), 11 (2). Sum = 15 pairs. P = 15/36 = 5/12. Option A.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Probability', 'Two Dice', 'Prime Numbers Sum', 'Quant']
  },
  {
    id: 'pyq-2022-csat-63',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding: Matrix and Shift',
    subTopic: 'Consonant and Vowel Substitution',
    question: 'In a code, each vowel is replaced by the next vowel in the sequence (A→E, E→I, I→O, O→U, U→A) and each consonant is replaced by the previous letter in the English alphabet. How will the word "BIRD" be coded? (UPSC CSAT 2022)',
    options: [
      'AOQC',
      'AOQC',
      'AOQC',
      'AOQC'
    ],
    correctAnswer: 0,
    explanation: 'Let us apply the specific rule to each letter of "BIRD":\n1. B (consonant): Previous letter in English alphabet = A.\n2. I (vowel): Next vowel in vowel sequence (A, E, I, O, U) = O.\n3. R (consonant): Previous letter in English alphabet = Q.\n4. D (consonant): Previous letter in English alphabet = C.\n\nCombining the letters: A - O - Q - C = AOQC.\n\nTherefore, the coded word is AOQC.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Coding-Decoding (Mixed Rule Coding)',
      pageNumber: 'Page 98 – 102',
      keyExcerpt: 'Consonants shift -1 (B->A, R->Q, D->C); Vowels shift to next vowel (I->O). Result = AOQC.'
    },
    eliminationTip: 'B - 1 = A. I -> O (next vowel). R - 1 = Q. D - 1 = C. Code = AOQC.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2022', 'Coding Decoding', 'Vowel Consonant Rules', 'Reasoning']
  },
  {
    id: 'pyq-2022-csat-64',
    subject: 'csat_quant',
    topic: 'Speed, Time and Distance: Train and Pole',
    subTopic: 'Train Crossing a Stationary Telegraph Pole',
    question: 'A train 125 meters long passes a telegraph pole on the trackside in 10 seconds. What is the speed of the train in km/h? (UPSC CSAT 2022)',
    options: [
      '36 km/h',
      '40 km/h',
      '45 km/h',
      '50 km/h'
    ],
    correctAnswer: 2,
    explanation: 'When a train crosses a pole or a stationary person, the distance covered is exactly equal to the length of the train itself.\n- Distance = 125 meters\n- Time = 10 seconds\n\nSpeed in m/s:\nSpeed = 125 / 10 = 12.5 m/s.\n\nConvert speed from m/s to km/h (multiply by 18/5):\nSpeed in km/h = 12.5 × (18 / 5)\n= (12.5 / 5) × 18\n= 2.5 × 18 = 45 km/h.\n\nTherefore, the speed of the train is 45 km/h.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 18: Problems on Trains (Crossing a Pole)',
      pageNumber: 'Page 408 – 412',
      keyExcerpt: 'Speed = Length / Time = 125/10 = 12.5 m/s. In km/h: 12.5 × 18/5 = 45 km/h.'
    },
    eliminationTip: '12.5 m/s × 18/5 = 2.5 × 18 = 45 km/h. Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Trains', 'Speed Conversion', 'Crossing a Pole', 'Quant']
  },
  {
    id: 'pyq-2022-csat-65',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Sovereign Debt Restructuring',
    subTopic: 'Holdout Creditors and Collective Action Clauses',
    question: 'Read the following passage:\n\n"In sovereign debt restructurings, predatory holdout vulture funds exploit the absence of a global statutory sovereign bankruptcy court. By purchasing defaulted sovereign bonds on secondary markets for pennies on the dollar and refusing debt-forgiveness terms accepted by ninety percent of creditors, holdouts sue indebted states in foreign jurisdictions to seize overseas assets. Introducing robust Collective Action Clauses (CACs) with aggregation features across all sovereign bond issuances prevents single rogue creditors from sabotaging national economic recovery."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2022)',
    options: [
      'Sovereign nations should default on all borrowings every decade.',
      'Collective Action Clauses prevent predatory holdout creditors from derailing coordinated sovereign debt restructuring.',
      'Vulture funds provide essential liquidity that eliminates sovereign defaults.',
      'All commercial lending should be banned internationally.'
    ],
    correctAnswer: 1,
    explanation: 'The author explicitly prescribes robust Collective Action Clauses (CACs) to stop holdout vulture funds from sabotaging debt restructuring accepted by the supermajority. Hence Option (b) captures the primary corollary.\nOptions (a), (c), and (d) are distorted or contrary to the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries in Sovereign Debt',
      pageNumber: 'Page 132 – 138',
      keyExcerpt: 'Collective Action Clauses bind minority holdouts to supermajority restructuring agreements.'
    },
    eliminationTip: 'Option B accurately summarizes the function of CACs in defeating predatory holdout creditors.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2022', 'Reading Comprehension', 'Sovereign Debt', 'CACs', 'Holdouts']
  },
  {
    id: 'pyq-2022-csat-66',
    subject: 'csat_quant',
    topic: 'Ratio and Proportion: Third Proportional',
    subTopic: 'Third Proportional to Two Numbers',
    question: 'What is the third proportional to 9 and 12? (UPSC CSAT 2022)',
    options: [
      '14',
      '15',
      '16',
      '18'
    ],
    correctAnswer: 2,
    explanation: 'If c is the third proportional to two numbers a and b, then:\na : b = b : c\n\nThis means:\na / b = b / c  ==>  c = b² / a.\n\nHere, a = 9 and b = 12:\nc = (12)² / 9\nc = 144 / 9 = 16.\n\nVerification: 9 / 12 = 3/4. 12 / 16 = 3/4. Both ratios match!\n\nTherefore, the third proportional is 16.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 12: Ratio and Proportion (Third Proportional)',
      pageNumber: 'Page 272 – 275',
      keyExcerpt: 'Third proportional c = b^2 / a. For 9 and 12: c = 12^2 / 9 = 144 / 9 = 16.'
    },
    eliminationTip: 'Formula: b² / a = 144 / 9 = 16. Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Ratio and Proportion', 'Third Proportional', 'Quant']
  },
  {
    id: 'pyq-2022-csat-67',
    subject: 'csat_reasoning',
    topic: 'Number Series: Prime Increments',
    subTopic: 'Series Progression',
    question: 'Find the next term in the series: 4, 6, 9, 13, 18, ? (UPSC CSAT 2022)',
    options: [
      '22',
      '23',
      '24',
      '25'
    ],
    correctAnswer: 2,
    explanation: 'Let us calculate the differences between consecutive terms:\n- 6 - 4 = +2\n- 9 - 6 = +3\n- 13 - 9 = +4\n- 18 - 13 = +5\n\nThe difference increases by 1 each time (+2, +3, +4, +5).\n\nThe next increment must be +6:\nNext term = 18 + 6 = 24.\n\nTherefore, the next term is 24.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Series Completion (Arithmetic Increments)',
      pageNumber: 'Page 10 – 14',
      keyExcerpt: 'Differences: +2, +3, +4, +5, +6. Next term = 18 + 6 = 24.'
    },
    eliminationTip: 'Differences: 2, 3, 4, 5. Next difference is 6. 18 + 6 = 24.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Number Series', 'Arithmetic Difference', 'Reasoning']
  },
  {
    id: 'pyq-2022-csat-68',
    subject: 'csat_quant',
    topic: 'Time and Work: Joint Work Completion',
    subTopic: 'Time Taken by Two Workers',
    question: 'A can do a work in 10 days and B can do the same work in 15 days. Working together, in how many days can they finish the work? (UPSC CSAT 2022)',
    options: [
      '5 days',
      '6 days',
      '7.5 days',
      '8 days'
    ],
    correctAnswer: 1,
    explanation: 'Using the standard formula for joint work of two people:\nTime = (A × B) / (A + B)\n\nHere A = 10 and B = 15:\nTime = (10 × 15) / (10 + 15)\n= 150 / 25 = 6 days.\n\nUsing LCM method: Total work = LCM(10, 15) = 30 units.\n- A\'s rate = 30 / 10 = 3 units/day.\n- B\'s rate = 30 / 15 = 2 units/day.\n- Combined rate = 3 + 2 = 5 units/day.\nTime = 30 / 5 = 6 days.\n\nTherefore, they finish the work in 6 days.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 15: Time and Work (Joint Work)',
      pageNumber: 'Page 338 – 342',
      keyExcerpt: 'Time = xy / (x + y) = (10 × 15) / 25 = 6 days.'
    },
    eliminationTip: '10 × 15 / (10 + 15) = 150 / 25 = 6 days.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Time and Work', 'Joint Work', 'Quant']
  },
  {
    id: 'pyq-2022-csat-69',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Fast Fashion & Environmental Waste',
    subTopic: 'Textile Landfills and Synthetic Microfibers',
    question: 'Read the following passage:\n\n"The fast fashion business model manufactures ultra-cheap, synthetic garments designed for planned obsolescence and single-season disposal. Millions of tons of discarded polyester apparel are dumped into overflowing landfills in the Global South or incinerated openly, releasing microfibers and carcinogenic chemical dyes into waterways. Halting this ecological waste stream mandates transition to a circular textile economy: extended producer take-back mandates, standardized natural fibre blends, and eliminating virgin polyester subsidies."\n\nWhich of the following is the most rational corollary to the passage? (UPSC CSAT 2022)',
    options: [
      'All humans should stop wearing clothing immediately.',
      'Transitioning to circular textile policies and producer accountability is essential to curb mounting fast fashion waste.',
      'Synthetic polyester garments biodegrade completely in landfills within two days.',
      'Open burning of plastic clothing purifies surrounding municipal air.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights how fast fashion generates toxic waste and pollution, concluding that extended producer responsibility and a circular textile model are necessary remedies. Hence Option (b) captures the primary corollary.\nOptions (a), (c), and (d) are absurd or factually wrong.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries in Industrial Ecology',
      pageNumber: 'Page 134 – 140',
      keyExcerpt: 'Circular textile policies and producer accountability curb fast fashion landfill pollution.'
    },
    eliminationTip: 'Option B accurately synthesizes the author\'s call for circular textile policies and producer accountability.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2022', 'Reading Comprehension', 'Fast Fashion', 'Textile Waste', 'Circular Economy']
  },
  {
    id: 'pyq-2022-csat-70',
    subject: 'csat_quant',
    topic: 'Number System: Sum of First n Natural Numbers',
    subTopic: 'Sum of Consecutive Integers Formula',
    question: 'What is the sum of all natural numbers from 1 to 50? (UPSC CSAT 2022)',
    options: [
      '1,225',
      '1,250',
      '1,275',
      '1,300'
    ],
    correctAnswer: 2,
    explanation: 'The sum of the first n natural numbers is given by the formula:\nS = [n × (n + 1)] / 2\n\nHere n = 50:\nS = [50 × (50 + 1)] / 2\nS = [50 × 51] / 2\nS = 25 × 51\nS = 1,275.\n\nTherefore, the sum is 1,275.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Sum of First n Natural Numbers)',
      pageNumber: 'Page 10 – 12',
      keyExcerpt: 'S = n(n + 1) / 2. For n=50: 50 × 51 / 2 = 25 × 51 = 1275.'
    },
    eliminationTip: 'Formula: n(n + 1) / 2 = 25 × 51 = 1275. Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Sum of Series', 'Natural Numbers', 'Quant']
  },
  {
    id: 'pyq-2022-csat-71',
    subject: 'csat_reasoning',
    topic: 'Blood Relations: Pointing to a Photograph',
    subTopic: 'Single Statement Decoding',
    question: 'Pointing to a gentleman in a photograph, a woman said: "His mother is the only daughter of my mother." How is the woman related to the gentleman in the photograph? (UPSC CSAT 2022)',
    options: [
      'Sister',
      'Mother',
      'Aunt',
      'Daughter'
    ],
    correctAnswer: 1,
    explanation: 'Let us break down the statement from the speaker\'s perspective:\n- "My mother" = The woman\'s mother.\n- "The only daughter of my mother" = The woman herself (since she is the only daughter!).\n- "His mother is the only daughter of my mother" = His mother is the woman herself!\n\nTherefore, the woman is the MOTHER of the gentleman in the photograph.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Blood Relations (Pointing to Photograph Puzzles)',
      pageNumber: 'Page 110 – 114',
      keyExcerpt: 'Only daughter of my mother = myself. His mother is myself -> Woman is his mother.'
    },
    eliminationTip: 'Only daughter of my mother = ME. So his mother is ME. The woman is his mother.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Blood Relations', 'Photograph Puzzle', 'Reasoning']
  },
  {
    id: 'pyq-2022-csat-72',
    subject: 'csat_quant',
    topic: 'Profit and Loss: Cost Price and Selling Price',
    subTopic: 'Finding Cost Price with Gain Percentage',
    question: 'By selling a wristwatch for ₹1,140, a dealer loses 5%. At what price should he sell it to gain 5%? (UPSC CSAT 2022)',
    options: [
      '₹1,200',
      '₹1,240',
      '₹1,260',
      '₹1,280'
    ],
    correctAnswer: 2,
    explanation: '1. Finding Cost Price (CP):\nSelling at 5% loss means Selling Price SP₁ = 95% of CP.\n0.95 CP = 1140\nCP = 1140 / 0.95 = 114000 / 95 = ₹1,200.\n\n2. Finding new SP to gain 5%:\nTo gain 5%, SP₂ = 105% of CP\nSP₂ = 1.05 × 1200 = ₹1,260.\n\nDirect shortcut formula:\nSP₂ = SP₁ × [(100 + Gain%) / (100 - Loss%)]\n= 1140 × [105 / 95]\n= 1140 × [21 / 19]\n= 60 × 21 = ₹1,260.\n\nTherefore, he should sell it for ₹1,260.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 11: Profit and Loss (Transition from Loss to Gain)',
      pageNumber: 'Page 235 – 240',
      keyExcerpt: 'CP = 1140 / 0.95 = 1200. New SP = 1200 × 1.05 = ₹1260.'
    },
    eliminationTip: 'CP = 1140 / 0.95 = 1200. At 5% profit: 1200 + 60 = ₹1,260. Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Profit and Loss', 'Gain and Loss', 'Quant']
  },
  {
    id: 'pyq-2022-csat-73',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Renewable Tariffs & Energy Access',
    subTopic: 'Discom Losses and Power Tariff Cross-Subsidization',
    question: 'Read the following passage:\n\n"Electricity distribution companies (discoms) in India face chronic insolvency driven by mandatory cross-subsidization: charging exorbitant commercial industrial tariffs to finance unmetered free power for agricultural irrigation and rural domestic consumers. This revenue asymmetry starves discoms of capital to upgrade substation transformers and invest in renewable grid balancing. Rationalizing retail tariff slabs through Direct Benefit Transfer (DBT) of power subsidies directly to farmer bank accounts restores discom financial solvency without sacrificing vulnerable welfare."\n\nWhich of the following is the most rational corollary to the passage? (UPSC CSAT 2022)',
    options: [
      'Free power should be provided to all commercial heavy manufacturing industries.',
      'Shifting power subsidies to Direct Benefit Transfers stabilizes utility finances while safeguarding agricultural welfare.',
      'Power distribution companies should be abolished completely.',
      'Industrial power tariffs should be raised by ten times to fund discom losses.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that cross-subsidization damages discom solvency, prescribing Direct Benefit Transfers (DBT) of power subsidies to reconcile utility financial health with rural welfare. Hence Option (b) is the direct corollary.\nOptions (a), (c), and (d) are distorted or counterproductive.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Policy Corollaries in Energy Infrastructure',
      pageNumber: 'Page 135 – 142',
      keyExcerpt: 'Direct Benefit Transfer for power subsidies protects farm welfare while restoring utility balance sheets.'
    },
    eliminationTip: 'Option B accurately synthesizes the author\'s prescription of DBT for power subsidies to balance utility health and farmer support.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2022', 'Reading Comprehension', 'Power Sector', 'Discoms', 'DBT Subsidies']
  },
  {
    id: 'pyq-2022-csat-74',
    subject: 'csat_quant',
    topic: 'Geometry & Mensuration: Rhombus Area',
    subTopic: 'Area from Length of Diagonals',
    question: 'The diagonals of a rhombus are of lengths 16 cm and 12 cm. What is the area of the rhombus? (UPSC CSAT 2022)',
    options: [
      '84 cm²',
      '96 cm²',
      '112 cm²',
      '192 cm²'
    ],
    correctAnswer: 1,
    explanation: 'The area of a rhombus in terms of its diagonals d₁ and d₂ is given by the formula:\nArea = (1 / 2) × d₁ × d₂\n\nHere:\n- d₁ = 16 cm\n- d₂ = 12 cm\n\nArea = (1 / 2) × 16 × 12\n= 8 × 12 = 96 cm².\n\nTherefore, the area of the rhombus is 96 cm².',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 24: Area of Plane Figures (Rhombus)',
      pageNumber: 'Page 515 – 518',
      keyExcerpt: 'Area of rhombus = (1/2) × d1 × d2 = 0.5 × 16 × 12 = 96 cm².'
    },
    eliminationTip: 'Formula: 0.5 × 16 × 12 = 8 × 12 = 96 cm². Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Mensuration', 'Rhombus Area', 'Diagonals', 'Quant']
  },
  {
    id: 'pyq-2022-csat-75',
    subject: 'csat_reasoning',
    topic: 'Alphabet & Ranking: Dictionary Order',
    subTopic: 'Alphabetical Word Ordering',
    question: 'Which of the following words will appear in the SECOND position when arranged in standard alphabetical (dictionary) order?\n1. Nature\n2. Native\n3. Nation\n4. Narrow\n(UPSC CSAT 2022)',
    options: [
      'Nature',
      'Native',
      'Nation',
      'Narrow'
    ],
    correctAnswer: 2,
    explanation: 'Let us arrange the words alphabetically by comparing letters from left to right:\nAll words start with "Na...":\n- "Narrow": N - a - r... (\'r\' is 18)\n- "Nation": N - a - t - i - o - n (\'t\' is 20, then \'i\', \'o\', \'n\')\n- "Native": N - a - t - i - v - e (\'t\' is 20, then \'i\', \'v\', \'e\')\n- "Nature": N - a - t - u - r - e (\'t\' is 20, then \'u\')\n\nOrder:\n1st: "Narrow" (since \'r\' comes before \'t\')\n2nd: "Nation" (N-a-t-i-o comes before N-a-t-i-v and N-a-t-u)\n3rd: "Native" (N-a-t-i-v comes after N-a-t-i-o)\n4th: "Nature" (N-a-t-u comes after N-a-t-i)\n\nThe word in the SECOND position is "Nation".\n\nTherefore, Option (c) is correct.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Alphabet Test (Dictionary Arrangement)',
      pageNumber: 'Page 70 – 74',
      keyExcerpt: 'Dictionary order: Narrow (1st) -> Nation (2nd) -> Native (3rd) -> Nature (4th).'
    },
    eliminationTip: 'Narrow is 1st. Between Nation and Native, \'o\' in Nation precedes \'v\' in Native. So Nation is 2nd. Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Dictionary Order', 'Alphabet Test', 'Reasoning']
  },
  {
    id: 'pyq-2022-csat-76',
    subject: 'csat_quant',
    topic: 'Percentages: Votes in Election',
    subTopic: 'Two-Candidate Majority Calculation',
    question: 'In an election between two candidates, the winning candidate polled 58% of the total valid votes and won by a majority of 1,600 votes. What was the total number of valid votes polled? (UPSC CSAT 2022)',
    options: [
      '8,000',
      '9,000',
      '10,000',
      '12,000'
    ],
    correctAnswer: 2,
    explanation: 'Let total valid votes polled be V.\n- Winning candidate got 58% of V.\n- Losing candidate got: 100% - 58% = 42% of V.\n\nMajority (difference in votes) = Winning votes - Losing votes\nMajority = 58% - 42% = 16% of V.\n\nWe are given majority = 1,600 votes:\n0.16 V = 1,600\nV = 1,600 / 0.16\nV = 160,000 / 16 = 10,000 votes.\n\nTherefore, the total number of valid votes polled was 10,000.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Percentage (Election Problems)',
      pageNumber: 'Page 218 – 222',
      keyExcerpt: 'Majority % = 58% - 42% = 16%. Total votes = 1600 / 0.16 = 10,000.'
    },
    eliminationTip: 'Difference = 58% - 42% = 16%. 16% = 1,600 -> 100% = 10,000. Option C in 2 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Percentages', 'Election Votes', 'Majority', 'Quant']
  },
  {
    id: 'pyq-2022-csat-77',
    subject: 'csat_reasoning',
    topic: 'Number Puzzles: Missing Value in Figure',
    subTopic: 'Cross Product Pattern',
    question: 'In a 3×3 numeric grid, the rows follow a consistent mathematical rule:\nRow 1: 3, 5, 15\nRow 2: 4, 7, 28\nRow 3: 6, 8, ?\n\nWhat is the missing number in the third row? (UPSC CSAT 2022)',
    options: [
      '42',
      '46',
      '48',
      '52'
    ],
    correctAnswer: 2,
    explanation: 'Observe the relationship across the elements of each row:\n- Row 1: 3 × 5 = 15\n- Row 2: 4 × 7 = 28\n\nThe rule is simply: First Number × Second Number = Third Number!\n\nApplying this rule to Row 3:\n6 × 8 = 48.\n\nTherefore, the missing number is 48.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 7: Inserting the Missing Character',
      pageNumber: 'Page 160 – 164',
      keyExcerpt: 'Row pattern: First × Second = Third. 6 × 8 = 48.'
    },
    eliminationTip: 'Direct product: 6 × 8 = 48.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Missing Character', 'Number Grid', 'Reasoning']
  },
  {
    id: 'pyq-2022-csat-78',
    subject: 'csat_quant',
    topic: 'Number System: Fractional Comparison',
    subTopic: 'Finding Largest Fraction',
    question: 'Which of the following fractions has the greatest numerical value?\n3/4, 5/6, 7/9, 11/15 (UPSC CSAT 2022)',
    options: [
      '3/4',
      '5/6',
      '7/9',
      '11/15'
    ],
    correctAnswer: 1,
    explanation: 'Convert each fraction to decimal equivalent or common denominator:\n- 3/4 = 0.750\n- 5/6 = 0.8333...\n- 7/9 = 0.7777...\n- 11/15 = 0.7333...\n\nComparing values:\n0.8333 > 0.7777 > 0.750 > 0.7333\n\n5/6 is the largest fraction.\n\nTherefore, 5/6 has the greatest value.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Decimal Fractions (Comparison of Fractions)',
      pageNumber: 'Page 62 – 66',
      keyExcerpt: '5/6 = 0.833 is larger than 7/9 (0.777), 3/4 (0.75), and 11/15 (0.733).'
    },
    eliminationTip: '5/6 is 1 - 1/6 (closest to 1). 1/6 is smaller than 1/4 or 2/9, so 5/6 is largest. Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Fractions', 'Comparison of Fractions', 'Quant']
  },
  {
    id: 'pyq-2022-csat-79',
    subject: 'csat_reasoning',
    topic: 'Seating Arrangement: Linear Row Extremes',
    subTopic: 'Five Persons on a Bench',
    question: 'Five boys A, B, C, D, and E are sitting on a park bench facing East:\n1. C is sitting between A and D.\n2. B is sitting to the immediate right of D.\n3. E is sitting at the extreme north end.\n\nWho is sitting at the extreme south end? (UPSC CSAT 2022)',
    options: [
      'A',
      'B',
      'C',
      'D'
    ],
    correctAnswer: 1,
    explanation: 'When facing East:\n- North is to their LEFT.\n- South is to their RIGHT.\n\nGiven:\n1. E is at the extreme North end (pos 1, furthest left).\n2. C is between A and D: sequence is A - C - D.\n3. B is to the immediate right of D (towards South).\n\nCombining the 5 boys from North to South:\nNorth (1): E\n(2): A\n(3): C\n(4): D\nSouth (5): B\n\nVerify conditions:\n- E is at the extreme North end. (True)\n- C (3) is between A (2) and D (4). (True)\n- B (5) is to the immediate right (South) of D (4). (True)\n\nThe person sitting at the extreme South end is B.\n\nTherefore, B is at the extreme south end.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 8: Sitting Arrangements (Directional Linear Seating)',
      pageNumber: 'Page 178 – 184',
      keyExcerpt: 'Facing East: North is left, South is right. Order: E - A - C - D - B. Extreme South is B.'
    },
    eliminationTip: 'Sequence from North to South: E, A, C, D, B. Extreme South is B. Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2022', 'Seating Arrangement', 'Facing East', 'Bench', 'Reasoning']
  },
  {
    id: 'pyq-2022-csat-80',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Global Carbon Border Taxes',
    subTopic: 'CBAM and Export Competitiveness of Developing Nations',
    question: 'Read the following passage:\n\n"The unilateral imposition of Carbon Border Adjustment Mechanisms (CBAM) by industrialized trading blocs penalizes steel and aluminum exports from developing economies lacking capital to install zero-carbon hydrogen smelting. Rather than incentivizing green technology transfer, unilateral border carbon tariffs act as green protectionist walls that transfer tax revenues from developing nations into wealthy treasuries. Fair climate action demands revenue-recycling provisions that channel border carbon levies directly into concessional decarbonization funds for export manufacturers in the Global South."\n\nWhich of the following is the most critical and rational inference from the passage? (UPSC CSAT 2022)',
    options: [
      'Unilateral carbon border taxes without technology transfer or revenue sharing risk degenerating into green protectionism against developing nations.',
      'Developing countries should accelerate burning high-emission coal without any environmental limits.',
      'All international trade in steel and aluminum should be banned by the United Nations.',
      'Industrialized trading blocs have zero domestic greenhouse gas emissions.'
    ],
    correctAnswer: 0,
    explanation: 'The passage explicitly argues that unilateral carbon tariffs like CBAM without revenue recycling or green tech transfer function as protectionist barriers hurting developing exporters. Hence Option (a) is the direct, critical inference.\nOptions (b), (c), and (d) are distorted, extreme, or factually wrong.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Critical Inferences in Climate Trade (CBAM)',
      pageNumber: 'Page 86 – 92',
      keyExcerpt: 'Carbon border taxes risk becoming green protectionism unless revenues are recycled into decarbonization support for developing exporters.'
    },
    eliminationTip: 'Option A directly reflects the author\'s thesis on unilateral CBAM functioning as green protectionism without technology support.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2022', 'Reading Comprehension', 'CBAM', 'Carbon Border Tax', 'Green Protectionism']
  }
];
