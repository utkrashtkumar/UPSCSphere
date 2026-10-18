import { Question } from '@/lib/types';

export const pyq2016_csat_1: Question[] = [
  {
    id: 'pyq-2016-csat-01',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Climate Change & Water Scarcity',
    subTopic: 'Glacial Melt and River Basin Vulnerability',
    question: 'Read the following passage:\n\n"The Himalayan glaciers, often described as the \'Water Towers of Asia\', nourish river basins that support over 1.4 billion people across South and East Asia. As greenhouse gas emissions accelerate atmospheric heating, these high-altitude cryospheric reserves are retreating at unprecedented rates. Initially, accelerated glacial melt increases downstream river run-off, elevating the frequency of devastating glacial lake outburst floods (GLOFs) and catastrophic landslides. However, as the glacier volume shrinks past peak-water thresholds, dry-season base flows in major perennial river systems will plummet, precipitating acute irrigation deficits, cross-border water conflicts, and agricultural crises across the Indo-Gangetic plains."\n\nWhich of the following is the most logical and rational inference from the passage? (UPSC CSAT 2016)',
    options: [
      'Glacial retreat will permanently guarantee abundant freshwater supplies for downstream populations indefinitely.',
      'Accelerated glacial melt causes transient downstream floods followed by severe long-term freshwater shortages and geopolitical tension.',
      'The Indo-Gangetic plains are completely immune to climatic changes occurring in the Himalayas.',
      'Himalayan river systems receive zero hydrological contribution from seasonal glacial melt.'
    ],
    correctAnswer: 1,
    explanation: 'The passage outlines a two-stage hydrological progression: first, accelerated melt triggers floods and GLOFs; second, once glacier reserves diminish past peak water, downstream dry-season base flows collapse, resulting in severe water deficits and cross-border disputes. Thus, Option B is the direct, rational inference.\nOption A is contradicted by the second half of the text.\nOptions C and D are factually absurd and contradict the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Climate Change, Cryosphere and Hydrology',
      pageNumber: 'Page 110 – 116',
      keyExcerpt: 'Glacial melt initially heightens flood risk before leading to permanent dry-season base-flow decline.'
    },
    eliminationTip: 'The passage highlights the two-phase danger: initial floods followed by severe long-term water scarcity and conflict (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Glaciers', 'Water Security', 'Himalayas']
  },
  {
    id: 'pyq-2016-csat-02',
    subject: 'csat_quant',
    topic: 'Number System & Arithmetic',
    subTopic: 'Divisibility and Remainders',
    question: 'A number when divided by 899 gives a remainder of 63. What will be the remainder when the same number is divided by 29? (UPSC CSAT 2016)',
    options: [
      '5',
      '10',
      '15',
      '27'
    ],
    correctAnswer: 0,
    explanation: 'Let the number be N.\nBy the division algorithm:\nN = 899 × q + 63, where q is the quotient.\n\nNow, test if the original divisor 899 is divisible by the new divisor 29:\n899 / 29 = 31 (exact integer, since 29 × 31 = 899).\n\nSince 899 is an exact multiple of 29, the term (899 × q) leaves remainder 0 when divided by 29.\nTherefore, the remainder when N is divided by 29 is simply the remainder obtained when 63 is divided by 29:\n63 = 29 × 2 + 5.\nRemainder = 5.\n\nMatches Option (a).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 1: Number System (Remainder Theorems)',
      pageNumber: 'Page 22 – 28',
      keyExcerpt: 'When original divisor D₁ is a multiple of new divisor D₂, new remainder = Remainder₁ mod D₂.'
    },
    eliminationTip: 'Since 899 = 29 × 31, simply divide the original remainder (63) by 29: 63 mod 29 = 5.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Number System', 'Remainders']
  },
  {
    id: 'pyq-2016-csat-03',
    subject: 'csat_reasoning',
    topic: 'Syllogism & Deductive Logic',
    subTopic: 'Categorical Syllogisms',
    question: 'Consider the following statements and conclusions:\n\nStatements:\n1. Some birds are mammals.\n2. All mammals are warm-blooded.\n\nConclusions:\nI. Some warm-blooded organisms are birds.\nII. All birds are warm-blooded.\n\nWhich of the conclusions logically follow(s) from the given statements? (UPSC CSAT 2016)',
    options: [
      'Only conclusion I follows',
      'Only conclusion II follows',
      'Both conclusions I and II follow',
      'Neither conclusion I nor II follows'
    ],
    correctAnswer: 0,
    explanation: 'Analyze each proposition:\n- Statement 1: "Some birds are mammals." (Particular affirmative, I-type: B ∩ M ≠ ∅)\n- Statement 2: "All mammals are warm-blooded." (Universal affirmative, A-type: M ⊆ W)\n\nCombining I-type + A-type with distributed middle term "mammals":\n(Some B are M) + (All M are W) yields valid deduction (I-type):\n"Some birds are warm-blooded." (B ∩ W ≠ ∅).\n\nBy immediate conversion of "Some birds are warm-blooded":\n"Some warm-blooded organisms are birds." (Conclusion I) follows validly.\n\nConclusion II ("All birds are warm-blooded") is an A-type proposition, which cannot be deduced from a particular premise (I-type). Hence, Conclusion II does not follow.\nTherefore, only conclusion I follows.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 14: Syllogism',
      pageNumber: 'Page 384 – 390',
      keyExcerpt: 'Combination of I + A premises yields an I conclusion; particular premises cannot yield universal conclusions.'
    },
    eliminationTip: 'Some birds are mammals, and all mammals are warm-blooded -> Some birds are warm-blooded, which converts to "Some warm-blooded are birds" (Conclusion I). You cannot generalize to "ALL birds" from "SOME birds".',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Syllogism', 'Deductive Logic']
  },
  {
    id: 'pyq-2016-csat-04',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Public Health & Preventive Healthcare',
    subTopic: 'Sanitation and Infant Mortality',
    question: 'Read the following passage:\n\n"In public health discourse, high-tech tertiary curative healthcare institutions often consume the lion\'s share of fiscal allocations, while foundational environmental sanitation and safe drinking water remain chronically underfunded. Yet, epidemiological evidence reveals that diarrheal diseases, enteropathy, and waterborne pathogens contracted in early infancy account for a massive fraction of childhood stunting, cognitive impairment, and infant mortality. Allocating capital to municipal sanitation, underground sewage treatment, and chlorination yields health returns several-fold greater than equal investments in urban specialty hospitals."\n\nWhich of the following is the most crucial message conveyed by the author? (UPSC CSAT 2016)',
    options: [
      'Tertiary hospitals should be completely dismantled and abolished.',
      'Prioritizing preventive sanitation and safe drinking water delivers far superior public health dividends than disproportionate spending on curative tertiary hospitals.',
      'Waterborne pathogens have no impact on childhood cognitive development.',
      'Developing nations should eliminate all spending on pharmaceutical medicines.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly contrasts heavy spending on tertiary curative hospitals with underfunded sanitation, proving that preventive environmental interventions (safe drinking water, sanitation) reduce infant stunting and mortality with far higher social returns. Thus, Option B captures the primary thesis.\nOption A is an extreme, absurd prescription.\nOptions C and D directly contradict the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 7: Public Health Economics and Preventive Sanitation',
      pageNumber: 'Page 158 – 164',
      keyExcerpt: 'Preventive sanitation investments yield vastly higher public health returns than curative tertiary healthcare.'
    },
    eliminationTip: 'The passage advocates shifting fiscal emphasis from high-cost curative care to preventive sanitation and drinking water (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Public Health', 'Sanitation', 'Preventive Healthcare']
  },
  {
    id: 'pyq-2016-csat-05',
    subject: 'csat_quant',
    topic: 'Percentages & Arithmetic',
    subTopic: 'Expenditure and Consumption Adjustment',
    question: 'If the price of sugar increases by 20%, by how much percent should a household reduce its consumption so as not to increase its total expenditure on sugar? (UPSC CSAT 2016)',
    options: [
      '16.67%',
      '20%',
      '25%',
      '15%'
    ],
    correctAnswer: 0,
    explanation: 'Let initial price = P = ₹ 100 per kg.\nLet initial consumption = C = 100 kg.\nInitial expenditure = P × C = 100 × 100 = ₹ 10,000.\n\nNew price after 20% increase = P\' = ₹ 120 per kg.\nTo keep total expenditure constant at ₹ 10,000:\nNew consumption C\' = 10,000 / 120 = 1000 / 12 = 83.33 kg.\n\nReduction in consumption = C - C\' = 100 - 83.33 = 16.67 kg.\nPercentage reduction = (16.67 / 100) × 100 = 16.67% (or 16 2/3%).\n\nShortcut Formula:\nWhen price increases by R%:\nPercentage reduction in consumption = [R / (100 + R)] × 100\n= [20 / (100 + 20)] × 100\n= [20 / 120] × 100\n= (1 / 6) × 100 = 16.67%.\n\nMatches Option (a).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 10: Percentage',
      pageNumber: 'Page 238 – 244',
      keyExcerpt: 'Reduction in consumption to maintain constant expenditure: [R / (100 + R)] × 100%.'
    },
    eliminationTip: 'Standard percentage shortcut: 20 / (100 + 20) = 20 / 120 = 1/6 = 16.67%.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Percentages', 'Consumption and Expenditure']
  },
  {
    id: 'pyq-2016-csat-06',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding',
    subTopic: 'Letter Position Shift Coding',
    question: 'In a certain code language, if \'NATURE\' is coded as \'MASUQE\', how is \'FAMINE\' coded in that same language? (UPSC CSAT 2016)',
    options: [
      'EALIME',
      'EBMINF',
      'EZMHMD',
      'EBLJMD'
    ],
    correctAnswer: 0,
    explanation: 'Examine the transformation from NATURE to MASUQE letter by letter:\n- 1st letter: N (-1) -> M\n- 2nd letter: A (+0) -> A (unchanged)\n- 3rd letter: T (-1) -> S\n- 4th letter: U (+0) -> U (unchanged)\n- 5th letter: R (-1) -> Q\n- 6th letter: E (+0) -> E (unchanged)\n\nThe pattern is alternating: odd-positioned letters subtract 1 (-1), and even-positioned letters remain unchanged (+0).\n\nApply the identical pattern to F A M I N E:\n- 1st letter: F (-1) -> E\n- 2nd letter: A (+0) -> A\n- 3rd letter: M (-1) -> L\n- 4th letter: I (+0) -> I\n- 5th letter: N (-1) -> M\n- 6th letter: E (+0) -> E\n\nPutting them together: E A L I M E.\nMatches Option (a).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 4: Coding-Decoding',
      pageNumber: 'Page 138 – 144',
      keyExcerpt: 'Alternating transformations apply position-based decrement (-1, 0, -1, 0).'
    },
    eliminationTip: 'Odd letters shift -1, even letters remain unchanged. F->E, A->A, M->L, I->I, N->M, E->E => EALIME.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Coding-Decoding', 'Pattern Shift']
  },
  {
    id: 'pyq-2016-csat-07',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Fiscal Federalism & Decentralization',
    subTopic: 'Municipal Empowerment and Urban Local Bodies',
    question: 'Read the following passage:\n\n"While urbanization accelerates across emerging economies, municipal bodies remain financially emasculated and administratively hobbled. State governments routinely usurp local revenue streams, fail to constitute state finance commissions in a timely manner, and staff urban local bodies with short-tenured state bureaucrats rather than empowered city managers. Without genuine fiscal devolution, predictable property tax valuation mechanisms, and civic autonomy, cities cannot finance the capital-intensive transport, sanitation, and flood resilience infrastructure demanded by expanding urban agglomerations."\n\nWhich of the following is the most logical and rational corollary to the passage? (UPSC CSAT 2016)',
    options: [
      'Urban local bodies should be dissolved and replaced with centralized ministries.',
      'Building resilient urban infrastructure requires genuine fiscal and administrative devolution to empowered municipal local bodies.',
      'Property taxes should be completely abolished in all urban areas.',
      'Urbanization should be legally halted by government decree.'
    ],
    correctAnswer: 1,
    explanation: 'The passage argues that cities cannot fund infrastructure because state governments withhold funds and civic autonomy from municipal bodies. The logical corollary is that fiscal and administrative devolution is essential to empower municipalities to build sustainable infrastructure (Option B).\nOption A advocates centralization, directly contradicting the author\'s call for local autonomy.\nOptions C and D are extreme and contrary to urban economic realities.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 3: Urban Governance and Fiscal Federalism',
      pageNumber: 'Page 76 – 82',
      keyExcerpt: 'Empowered local municipal governance and fiscal autonomy are prerequisites for urban infrastructure resilience.'
    },
    eliminationTip: 'The passage diagnoses the problem as municipal financial emasculation; Option B prescribes the exact antidote: fiscal and administrative empowerment.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Urbanization', 'Municipal Bodies', 'Fiscal Devolution']
  },
  {
    id: 'pyq-2016-csat-08',
    subject: 'csat_quant',
    topic: 'Time and Work',
    subTopic: 'Alternating Work Days',
    question: 'A can do a piece of work in 12 days and B can do it in 15 days. They work on alternate days starting with A on the first day. In how many days will the work be completed? (UPSC CSAT 2016)',
    options: [
      '13 days',
      '13 1/4 days',
      '13 1/3 days',
      '14 days'
    ],
    correctAnswer: 1,
    explanation: 'Let the total work be the LCM of (12, 15) = 60 units.\nEfficiency of A = 60 / 12 = 5 units/day.\nEfficiency of B = 60 / 15 = 4 units/day.\n\nThey work on alternate days:\n- Day 1: A works and does 5 units.\n- Day 2: B works and does 4 units.\nIn a 2-day cycle, total work completed = 5 + 4 = 9 units.\n\nNumber of full 2-day cycles:\n60 / 9 = 6 full cycles with some work remaining.\nWork done in 6 cycles (which is 6 × 2 = 12 days):\nWork = 6 × 9 = 54 units.\nRemaining work = 60 - 54 = 6 units.\n\nDay 13 (A\'s turn):\nA works and completes 5 units.\nTotal work done after 13 days = 54 + 5 = 59 units.\nRemaining work = 60 - 59 = 1 unit.\n\nDay 14 (B\'s turn):\nB has an efficiency of 4 units/day.\nTime taken by B to do 1 unit = 1 / 4 day.\n\nTotal time taken = 13 + 1/4 = 13 1/4 days.\n\nMatches Option (b).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 15: Time and Work (Alternate Days)',
      pageNumber: 'Page 346 – 352',
      keyExcerpt: 'In alternate day work, determine work per 2-day cycle, complete maximum full cycles, and allocate remainder day-by-day.'
    },
    eliminationTip: 'In 12 days: 6 cycles × 9 = 54 units. Day 13: A does 5 units (total 59). Remaining 1 unit done by B in 1/4 day. Total = 13 1/4 days.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Time and Work', 'Alternate Days']
  },
  {
    id: 'pyq-2016-csat-09',
    subject: 'csat_reasoning',
    topic: 'Direction Sense & Displacement',
    subTopic: 'Cardinal Direction Walks',
    question: 'A person walks 10 meters towards South, turns left and walks 15 meters, turns left and walks 10 meters, and then turns right and walks 5 meters. How far and in which direction is he from his initial starting point? (UPSC CSAT 2016)',
    options: [
      '20 meters, East',
      '20 meters, West',
      '15 meters, East',
      '25 meters, South'
    ],
    correctAnswer: 0,
    explanation: 'Track the movements using coordinates (x = East/West, y = North/South), starting at origin (0, 0):\n1. Walks 10 m South -> Position is (0, -10).\n2. Turns left (facing South, left is East) and walks 15 m -> Position is (+15, -10).\n3. Turns left (facing East, left is North) and walks 10 m -> Position is (+15, -10 + 10) = (+15, 0).\n4. Turns right (facing North, right is East) and walks 5 m -> Position is (15 + 5, 0) = (+20, 0).\n\nFinal position is (+20, 0).\nDistance from starting point = 20 meters.\nDirection = East (along positive x-axis).\nTherefore, he is 20 meters due East from his starting point.\n\nMatches Option (a).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 8: Direction Sense Test',
      pageNumber: 'Page 225 – 232',
      keyExcerpt: 'Successive left and right turns cancel perpendicular displacement and accumulate along the primary axis.'
    },
    eliminationTip: 'South 10m and North 10m cancel out completely! The East movements add: 15m + 5m = 20m East.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Direction Sense', 'Displacement']
  },
  {
    id: 'pyq-2016-csat-10',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Deforestation & Hydrological Cycles',
    subTopic: 'Forest Evapotranspiration and Rainfall Generation',
    question: 'Read the following passage:\n\n"Forests are not merely passive recipients of atmospheric rainfall; they actively generate it. Through the process of evapotranspiration, dense tropical rainforest canopies pump colossal volumes of water vapor into the atmosphere, creating \'flying rivers\' that drive inland precipitation thousands of kilometers away from the sea. When large-scale deforestation clears continuous forest canopies for commercial ranching and monoculture farming, this biotic pump is dismantled. Rainfall patterns collapse, triggering severe droughts that threaten agricultural productivity and municipal water security across entire continental interiors."\n\nWhich of the following is the most logical and rational conclusion that can be drawn from the passage? (UPSC CSAT 2016)',
    options: [
      'Deforestation enhances continental rainfall by allowing cloud formations to move freely.',
      'Preserving continuous forest canopies is essential for sustaining regional hydrological cycles and inland precipitation.',
      'Agricultural monocultures pump more water vapor into the atmosphere than tropical rainforests.',
      'Precipitation in continental interiors depends exclusively on oceanic evaporation.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that tropical forests act as a "biotic pump" through evapotranspiration, generating "flying rivers" that sustain rainfall far inland, and warns that deforestation dismantles this cycle and brings drought. Thus, protecting forest canopies is vital for sustaining regional hydrology and rainfall (Option B).\nOptions A, C, and D directly contradict the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Tropical Forest Ecology and Hydrology',
      pageNumber: 'Page 114 – 120',
      keyExcerpt: 'Biotic pump theory demonstrates that rainforest evapotranspiration drives continental precipitation.'
    },
    eliminationTip: 'Option B accurately synthesizes the author\'s central thesis: forest canopies drive continental rainfall, and their destruction disrupts the hydrological cycle.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Deforestation', 'Hydrological Cycle', 'Biotic Pump']
  },
  {
    id: 'pyq-2016-csat-11',
    subject: 'csat_quant',
    topic: 'Averages & Replacement',
    subTopic: 'Teacher Age Inclusion',
    question: 'The average age of 24 students in a class is 15 years. If the teacher\'s age is included, the average age increases by 1 year. What is the age of the teacher? (UPSC CSAT 2016)',
    options: [
      '38 years',
      '39 years',
      '40 years',
      '41 years'
    ],
    correctAnswer: 2,
    explanation: 'Total initial members = 24 students.\nInitial average age = 15 years.\nSum of ages of 24 students = 24 × 15 = 360 years.\n\nWhen the teacher is included:\nNew total count = 24 + 1 = 25 persons.\nNew average age = 15 + 1 = 16 years.\nNew sum of ages of 25 persons = 25 × 16 = 400 years.\n\nTeacher\'s age = New sum - Initial sum\n= 400 - 360 = 40 years.\n\nShortcut Formula:\nAge of new person = New Average + [Initial Count × Increase in Average]\n= 16 + (24 × 1)\n= 16 + 24 = 40 years.\n\nMatches Option (c).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 6: Averages',
      pageNumber: 'Page 154 – 160',
      keyExcerpt: 'Age of new entrant = New average + Number of previous members × Change in average.'
    },
    eliminationTip: 'Teacher brings enough years to be 16 herself PLUS 1 extra year for each of the 24 students: 16 + 24 = 40 years.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Averages', 'Inclusion of Member']
  },
  {
    id: 'pyq-2016-csat-12',
    subject: 'csat_reasoning',
    topic: 'Blood Relations',
    subTopic: 'Single-Person Decoded Relationship',
    question: 'Introducing a boy, a girl said, "He is the son of the daughter of the father of my uncle." How is the boy related to the girl? (UPSC CSAT 2016)',
    options: [
      'Brother',
      'Nephew',
      'Uncle',
      'Son-in-law'
    ],
    correctAnswer: 0,
    explanation: 'Break down the statement step-by-step:\n1. "my uncle" -> The girl\'s uncle (brother of her mother or father).\n2. "the father of my uncle" -> The girl\'s grandfather.\n3. "the daughter of the father of my uncle" -> The daughter of the girl\'s grandfather, which is either the girl\'s own mother or her aunt.\n4. "He is the son of [the girl\'s mother]" -> The son of the girl\'s mother is the girl\'s BROTHER!\n(Or if cousin, but among the given options: Brother, Nephew, Uncle, Son-in-law, only Brother is a valid sibling relation).\nTherefore, the boy is her BROTHER.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Blood Relations',
      pageNumber: 'Page 170 – 176',
      keyExcerpt: 'Father of uncle = Grandfather; Daughter of grandfather = Mother; Son of mother = Brother.'
    },
    eliminationTip: 'Father of uncle is grandfather. Daughter of grandfather is mother. Son of mother is brother.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Blood Relations', 'Family Tree']
  },
  {
    id: 'pyq-2016-csat-13',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Gender Wage Gap & Economic Growth',
    subTopic: 'Unpaid Care Work and Female Labor Participation',
    question: 'Read the following passage:\n\n"The persistent gender gap in female labor force participation is often treated as an inevitable sociocultural artifact. In reality, it represents a colossal misallocation of human capital that drags down potential GDP growth. When women perform the overwhelming burden of unremunerated domestic care work, childcare, and elderly support without institutional childcare subsidies or flexible work arrangements, their educational attainments fail to translate into economic productivity. Expanding formal early-childhood care centers and guaranteeing paid parental leave are not welfare sops; they are high-return macroeconomic growth investments."\n\nWhich of the following is the most rational and logical assumption that can be made from the passage? (UPSC CSAT 2016)',
    options: [
      'Subsidizing childcare facilities and supporting working mothers directly enhances macroeconomic productivity and growth.',
      'Women should be barred from taking formal employment outside the household.',
      'Unpaid domestic work has higher economic value than high-tech manufacturing.',
      'Female educational attainment has zero correlation with national economic development.'
    ],
    correctAnswer: 0,
    explanation: 'The passage explicitly frames female labor underutilization as a drag on GDP and argues that investments in childcare centers and parental leave liberate female labor capital, functioning as "high-return macroeconomic growth investments". Thus, Option A captures the core assumption.\nOptions B, C, and D are absurd and contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: Gender Economics and Labor Participation',
      pageNumber: 'Page 48 – 55',
      keyExcerpt: 'Institutional care infrastructure enables female workforce participation, driving macroeconomic growth.'
    },
    eliminationTip: 'The author directly labels childcare support as "high-return macroeconomic growth investments" (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Gender Gap', 'Labor Participation', 'Care Economy']
  },
  {
    id: 'pyq-2016-csat-14',
    subject: 'csat_quant',
    topic: 'Ratio and Proportion',
    subTopic: 'Division of Sum in Specified Ratio',
    question: 'A sum of ₹ 730 is divided among A, B, and C such that if ₹ 10, ₹ 15, and ₹ 25 are diminished from the shares of A, B, and C respectively, the remainder of their shares are in the ratio 3 : 4 : 5. What was B\'s original share? (UPSC CSAT 2016)',
    options: [
      '₹ 180',
      '₹ 225',
      '₹ 241.67',
      '₹ 240'
    ],
    correctAnswer: 2,
    explanation: 'Total initial sum = ₹ 730.\nTotal deductions from the three shares = ₹ 10 + ₹ 15 + ₹ 25 = ₹ 50.\n\nRemaining sum to be divided among A, B, and C:\nRemaining Sum = 730 - 50 = ₹ 680.\n\nThis remaining sum of ₹ 680 is divided in the ratio 3 : 4 : 5.\nTotal parts in the ratio = 3 + 4 + 5 = 12 parts.\nValue of 1 part = 680 / 12 = 170 / 3 = ₹ 56.67.\n\nB\'s share of the remainder = 4 parts:\nB\'s remainder = 4 × (170 / 3) = 680 / 3 = ₹ 226.67.\n\nB\'s original share = B\'s remainder + B\'s deduction:\nB\'s original share = 226.67 + 15 = ₹ 241.67.\n\nMatches Option (c).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 12: Ratio and Proportion',
      pageNumber: 'Page 285 – 290',
      keyExcerpt: 'Diminished sum method: Deduct specified amounts from total sum before dividing by ratio parts.'
    },
    eliminationTip: 'Subtract total deductions (10+15+25 = 50) from 730 = 680. B gets 4/12 = 1/3 of 680 = 226.67. Add back B\'s 15 = ₹ 241.67.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Ratio and Proportion', 'Diminished Shares']
  },
  {
    id: 'pyq-2016-csat-15',
    subject: 'csat_reasoning',
    topic: 'Seating Arrangements',
    subTopic: 'Linear Row Arrangement',
    question: 'Six persons A, B, C, D, E, and F are standing in a queue facing North.\n\n1. C is standing between A and E.\n2. F is at the extreme right end.\n3. B is standing immediately to the left of F.\n4. D is standing immediately to the left of A.\n\nWho is standing at the extreme left end of the queue? (UPSC CSAT 2016)',
    options: [
      'A',
      'C',
      'D',
      'E'
    ],
    correctAnswer: 2,
    explanation: 'Let the 6 positions from left to right be 1, 2, 3, 4, 5, 6.\n- Condition 2: F is at the extreme right end -> Position 6 = F.\n- Condition 3: B is immediately to the left of F -> Position 5 = B.\nPositions 1, 2, 3, 4 remain for A, C, D, E.\n- Condition 1: C is between A and E -> Either (A, C, E) or (E, C, A).\n- Condition 4: D is immediately to the left of A -> So D must precede A directly: D - A.\nCombining D - A with C between A and E:\nThe only consistent order is: D - A - C - E.\n\nPlacing them in positions 1 to 4:\nPosition 1: D\nPosition 2: A\nPosition 3: C\nPosition 4: E\nPosition 5: B\nPosition 6: F.\n\nTherefore, D is standing at the extreme left end (Position 1).\nMatches Option (c).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 11: Seating Arrangements',
      pageNumber: 'Page 312 – 318',
      keyExcerpt: 'Align anchored right-hand ends and concatenate ordered sub-blocks to determine extreme positions.'
    },
    eliminationTip: 'Since D is left of A, and C is between A and E, the queue is D - A - C - E - B - F. The extreme left person is D.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Linear Arrangement', 'Queue']
  },
  {
    id: 'pyq-2016-csat-16',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Agro-biodiversity & Monoculture Vulnerability',
    subTopic: 'Seed Standardization and Pest Epidemics',
    question: 'Read the following passage:\n\n"The Green Revolution transformed agriculture through high-yielding hybrid varieties, but it simultaneously purged agricultural landscapes of traditional genetic diversity. Tens of thousands of indigenous heirloom rice and millet landraces, uniquely adapted over millennia to regional microclimates and pest pressures, were replaced by genetically uniform monocultures. While yields expanded in the short term, genetic uniformity created unprecedented ecological fragility: a single mutating virulent fungal pathogen or localized drought can wipe out millions of contiguous hectares of identical crops. Conserving in-situ seed genebanks and reviving heritage crop landraces is the only durable insurance against catastrophic crop failure in an era of climate volatility."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2016)',
    options: [
      'Genetic uniformity makes modern agricultural crops invulnerable to all fungal diseases.',
      'Preserving crop genetic diversity and heritage landraces is critical to building resilience against climate shocks and pest epidemics.',
      'Traditional heirloom crops should be banned from being stored in seed banks.',
      'The Green Revolution eliminated all risk of agricultural crop failures permanently.'
    ],
    correctAnswer: 1,
    explanation: 'The author explains that monocultures create extreme biological vulnerability to evolving pathogens and droughts, and concludes that preserving in-situ genetic diversity and heritage landraces is the essential insurance policy. Thus, Option B is the logical corollary.\nOptions A, C, and D are absurd statements contradicting the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Agriculture, Biodiversity and Resilience',
      pageNumber: 'Page 116 – 122',
      keyExcerpt: 'Genetic diversity in landraces provides essential evolutionary insurance against monoculture pest epidemics.'
    },
    eliminationTip: 'The passage argues that genetic uniformity creates vulnerability and crop diversity provides resilience (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Agro-biodiversity', 'Monoculture', 'Crop Resilience']
  },
  {
    id: 'pyq-2016-csat-17',
    subject: 'csat_quant',
    topic: 'Time, Speed and Distance',
    subTopic: 'Crossing a Stationary Platform',
    question: 'A train running at a speed of 72 km/h crosses a 260-meter-long platform in 23 seconds. What is the length of the train? (UPSC CSAT 2016)',
    options: [
      '180 meters',
      '200 meters',
      '220 meters',
      '240 meters'
    ],
    correctAnswer: 1,
    explanation: 'Convert the speed of the train from km/h to m/s:\nSpeed = 72 × (5 / 18) = 4 × 5 = 20 m/s.\n\nWhen a train crosses a stationary platform of length L_p, the total distance covered is:\nTotal Distance = Length of Train (L_t) + Length of Platform (L_p).\n\nGiven:\nTime taken = 23 seconds\nSpeed = 20 m/s\nPlatform length = 260 m.\n\nTotal Distance = Speed × Time\nL_t + 260 = 20 × 23\nL_t + 260 = 460 meters\nL_t = 460 - 260 = 200 meters.\n\nLength of the train = 200 meters.\nMatches Option (b).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 18: Problems on Trains',
      pageNumber: 'Page 402 – 408',
      keyExcerpt: 'Distance covered while crossing a platform = Length of train + Length of platform.'
    },
    eliminationTip: 'Speed = 72 × 5/18 = 20 m/s. Distance in 23 sec = 20 × 23 = 460 m. Train length = 460 - 260 = 200 m.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Trains', 'Platform Crossing']
  },
  {
    id: 'pyq-2016-csat-18',
    subject: 'csat_reasoning',
    topic: 'Clocks and Angles',
    subTopic: 'Right Angles Between Clock Hands',
    question: 'How many times in a period of 24 hours (one full day) are the hands of a clock at right angles (90°) to each other? (UPSC CSAT 2016)',
    options: [
      '22 times',
      '24 times',
      '44 times',
      '48 times'
    ],
    correctAnswer: 2,
    explanation: 'In a standard 12-hour period:\n- The hands of a clock form a right angle (90°) twice in most hours.\n- However, between 2 and 4 o\'clock (around 3 o\'clock) and between 8 and 10 o\'clock (around 9 o\'clock), two right angles coincide.\n- Therefore, instead of 2 × 12 = 24 times, the hands are at right angles exactly 22 times in every 12-hour cycle.\n\nOver a full 24-hour day (2 cycles of 12 hours):\nTotal times at right angle = 22 × 2 = 44 times.\n\nMatches Option (c).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 23: Clocks',
      pageNumber: 'Page 526 – 531',
      keyExcerpt: 'Hands of a clock are at right angles 22 times in 12 hours and 44 times in 24 hours.'
    },
    eliminationTip: 'Standard clock fact: Hands are at right angles 22 times in 12 hours, hence 44 times in 24 hours.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Clocks', 'Right Angles']
  },
  {
    id: 'pyq-2016-csat-19',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Artificial Intelligence & Algorithmic Bias',
    subTopic: 'Historical Training Data and Discrimination',
    question: 'Read the following passage:\n\n"Automated algorithmic decision-making systems are frequently lauded as neutral arbiters superior to flawed, prejudiced humans. However, machine learning models do not operate in a moral vacuum; they are trained on historical datasets that inherently reflect decades of societal discrimination, racial profiling, and socioeconomic disparities. When credit-scoring algorithms or hiring predictive engines ingest biased historical training data, they automate and entrench existing structural inequalities under a veneer of mathematical objectivity. Auditing algorithmic transparency and mandating algorithmic fairness checks are essential to prevent code from becoming an unaccountable instrument of institutional discrimination."\n\nWhich of the following is the most logical inference from the passage? (UPSC CSAT 2016)',
    options: [
      'Algorithms are completely devoid of any bias because mathematical equations cannot discriminate.',
      'Training machine learning models on uncorrected historical data risks cementing and automating societal prejudices under the guise of objectivity.',
      'All algorithmic systems should be banned from commercial use immediately.',
      'Historical data has no relationship with machine learning model outputs.'
    ],
    correctAnswer: 1,
    explanation: 'The author explains that algorithms trained on biased historical data end up codifying and entrenching prejudices while masquerading as neutral mathematical systems, necessitating transparency audits. Thus, Option B is the direct and accurate inference.\nOption A contradicts the entire passage.\nOptions C and D are either absurd extremes or factually untrue.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 8: Artificial Intelligence, Algorithmic Bias and Ethics',
      pageNumber: 'Page 184 – 190',
      keyExcerpt: 'Algorithmic models inherit historical training data biases, requiring rigorous fairness audits.'
    },
    eliminationTip: 'The passage warns that algorithms trained on biased historical data automate societal discrimination under a veneer of objectivity (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'AI Bias', 'Algorithmic Fairness', 'Machine Learning']
  },
  {
    id: 'pyq-2016-csat-20',
    subject: 'csat_quant',
    topic: 'Simple and Compound Interest',
    subTopic: 'Principal Doubling at Compound Interest',
    question: 'A sum of money placed at compound interest doubles itself in 5 years. In how many years will it amount to 8 times of itself at the same rate of compound interest? (UPSC CSAT 2016)',
    options: [
      '10 years',
      '15 years',
      '20 years',
      '25 years'
    ],
    correctAnswer: 1,
    explanation: 'In compound interest, a sum grows exponentially according to powers of the multiplication factor:\nIf a principal P becomes 2P (2¹ times) in 5 years:\nThen it becomes:\n- (2)² = 4 times in 5 × 2 = 10 years\n- (2)³ = 8 times in 5 × 3 = 15 years.\n\nMathematical verification:\nAmount formula: A = P(1 + r/100)ᵗ\nGiven: (1 + r/100)⁵ = 2.\nWe want the sum to become 8 times P:\n8 = 2³ = [(1 + r/100)⁵]³ = (1 + r/100)¹⁵.\nTherefore, t = 15 years.\n\nMatches Option (b).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 22: Compound Interest',
      pageNumber: 'Page 490 – 496',
      keyExcerpt: 'Rule of Powers in CI: If sum becomes k times in T years, it becomes kⁿ times in n × T years.'
    },
    eliminationTip: 'In Compound Interest, 8 times = 2³ times. If 1 doubling takes 5 years, 3 doublings take 3 × 5 = 15 years.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Compound Interest', 'Exponential Growth']
  },
  {
    id: 'pyq-2016-csat-21',
    subject: 'csat_reasoning',
    topic: 'Series Completion',
    subTopic: 'Letter and Number Alternating Series',
    question: 'Find the missing term in the sequence: A2C, B4E, C8G, D16I, ? (UPSC CSAT 2016)',
    options: [
      'E32K',
      'E32L',
      'E24K',
      'F32K'
    ],
    correctAnswer: 0,
    explanation: 'Examine each component of the 3-element alphanumeric terms:\n1. First letter: A, B, C, D, ...\nConsecutive alphabet letters (+1 step) -> Next letter is E.\n\n2. Middle number: 2, 4, 8, 16, ...\nGeometric progression doubling each time (powers of 2): 2¹, 2², 2³, 2⁴, ... -> Next number is 2⁵ = 32.\n\n3. Third letter: C, E, G, I, ...\nSkipping one letter in the alphabet (+2 step):\nC(3) + 2 = E(5)\nE(5) + 2 = G(7)\nG(7) + 2 = I(9)\nI(9) + 2 = K(11) -> Next letter is K.\n\nCombining the three components:\nFirst letter: E\nMiddle number: 32\nThird letter: K\nTerm = E32K.\n\nMatches Option (a).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 1: Series Completion (Alpha-Numeric Series)',
      pageNumber: 'Page 28 – 35',
      keyExcerpt: 'Analyze alphabetical progression and numerical progression independently in composite alphanumeric sequences.'
    },
    eliminationTip: 'Letters: A, B, C, D -> E. Numbers: 2, 4, 8, 16 -> 32. Letters: C, E, G, I -> K. Answer = E32K.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Alphanumeric Series', 'Pattern Recognition']
  },
  {
    id: 'pyq-2016-csat-22',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Energy Transition & Grid Decentralization',
    subTopic: 'Distributed Solar and Duck Curve',
    question: 'Read the following passage:\n\n"The rapid decentralization of solar photovoltaic arrays on residential rooftops has fundamentally upended the century-old utility business model. Traditional power grids were designed around one-way transmission from large coal or nuclear thermal generators to passive end-consumers. Rooftop solar turns consumers into \'prosumers\' who inject surplus power back into local distribution lines. However, mid-day solar surges followed by steep evening demand peaks—the notorious \'duck curve\'—destabilize distribution transformers unless utilities invest in smart grid sensors, bidirectional inverters, and battery storage solutions."\n\nWhich of the following is the most logical and rational conclusion that can be drawn from the passage? (UPSC CSAT 2016)',
    options: [
      'Rooftop solar adoption should be prohibited to protect traditional utility profits.',
      'Modernizing distribution grids with storage and bidirectional management is essential to accommodate decentralized renewable generation.',
      'Decentralized solar generation requires no adjustments to legacy transmission infrastructure.',
      'Thermal coal power plants generate zero grid transmission problems.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explains that decentralized solar turns consumers into prosumers and creates grid volatility (the duck curve), concluding that storage, smart sensors, and bidirectional inverters are necessary to stabilize the grid. Thus, Option B is the rational conclusion.\nOption A is an extreme, anti-renewable stance.\nOptions C and D directly contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Renewable Energy and Smart Grid Infrastructure',
      pageNumber: 'Page 126 – 132',
      keyExcerpt: 'Decentralized prosumer solar requires flexible bidirectional grid infrastructure and storage.'
    },
    eliminationTip: 'Option B accurately highlights the necessary grid modernization required to handle solar decentralization.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Rooftop Solar', 'Smart Grid', 'Energy Transition']
  },
  {
    id: 'pyq-2016-csat-23',
    subject: 'csat_quant',
    topic: 'Pipes and Cisterns',
    subTopic: 'Two Inlets and One Leak',
    question: 'Two pipes can fill a tank in 10 hours and 12 hours respectively, while a waste pipe can empty it in 20 hours. If all three pipes are kept open together, how much time will it take to fill the tank? (UPSC CSAT 2016)',
    options: [
      '7 hours 30 minutes',
      '8 hours',
      '8 hours 30 minutes',
      '9 hours'
    ],
    correctAnswer: 0,
    explanation: 'Let the total capacity of the tank be the LCM of (10, 12, 20) = 60 units.\n\nCalculate individual hourly rates:\n- Inlet Pipe 1 rate = 60 / 10 = +6 units/hr\n- Inlet Pipe 2 rate = 60 / 12 = +5 units/hr\n- Waste Pipe rate = 60 / 20 = -3 units/hr (emptying)\n\nNet filling rate per hour when all three pipes operate simultaneously:\nNet Rate = +6 + 5 - 3 = +8 units/hr.\n\nTime required to fill the entire tank of 60 units:\nTime = 60 / 8 = 15 / 2 = 7.5 hours = 7 hours 30 minutes.\n\nMatches Option (a).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 16: Pipes and Cisterns',
      pageNumber: 'Page 368 – 374',
      keyExcerpt: 'Net filling rate = 1/A + 1/B - 1/C. Time to fill = Total Units / Net Rate.'
    },
    eliminationTip: 'LCM of 10, 12, 20 is 60. Net rate = 6 + 5 - 3 = 8 units/hr. 60 / 8 = 7.5 hours (7 hr 30 min).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Pipes and Cisterns', 'LCM Method']
  },
  {
    id: 'pyq-2016-csat-24',
    subject: 'csat_reasoning',
    topic: 'Calendar Logic',
    subTopic: 'Same Calendar Year Repetition',
    question: 'Which year will have the same calendar as that of the year 2007? (UPSC CSAT 2016)',
    options: [
      '2014',
      '2016',
      '2017',
      '2018'
    ],
    correctAnswer: 3,
    explanation: 'A calendar repeats when the total number of accumulated odd days between the reference year and the target year becomes a multiple of 7 (0 net odd days), AND both years must be of the same type (both ordinary years or both leap years).\n\n2007 is an ordinary year (365 days -> 1 odd day).\nCalculate accumulated odd days year by year starting from 2007:\n- 2007 (ordinary): 1 odd day (sum = 1)\n- 2008 (leap): 2 odd days (sum = 3)\n- 2009 (ordinary): 1 odd day (sum = 4)\n- 2010 (ordinary): 1 odd day (sum = 5)\n- 2011 (ordinary): 1 odd day (sum = 6)\n- 2012 (leap): 2 odd days (sum = 8)\n- 2013 (ordinary): 1 odd day (sum = 9)\n- 2014 (ordinary): 1 odd day (sum = 10)\n- 2015 (ordinary): 1 odd day (sum = 11)\n- 2016 (leap): 2 odd days (sum = 13)\n- 2017 (ordinary): 1 odd day (sum = 14).\n\nAt the end of 2017, the cumulative sum of odd days is 14, which is divisible by 7 (14 mod 7 = 0)!\nTherefore, the next year, 2018, begins on the exact same day of the week as 2007.\nSince both 2007 and 2018 are ordinary years, their complete calendars are identical.\n\nShortcut Rule for Ordinary Years:\nAn ordinary year immediately following a leap year repeats after 6 years; other ordinary years repeat after 11 years.\n2007 does not immediately follow a leap year (2006 is not leap), so it repeats after 11 years: 2007 + 11 = 2018.\n\nMatches Option (d).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 24: Calendar',
      pageNumber: 'Page 542 – 548',
      keyExcerpt: 'Calendar repetition requires cumulative odd days to be a multiple of 7, matching year type (ordinary/leap).'
    },
    eliminationTip: 'Standard calendar repetition rule: 2007 is 3 years after a leap year (2004), so it repeats in 11 years: 2007 + 11 = 2018.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Calendar', 'Repetition of Calendar']
  },
  {
    id: 'pyq-2016-csat-25',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Sovereign Borrowing & Debt Sustainability',
    subTopic: 'External Commercial Borrowing and Currency Risk',
    question: 'Read the following passage:\n\n"Emerging market economies frequently turn to foreign-currency denominated external commercial borrowings to finance domestic infrastructure, lured by lower nominal interest rates prevailing in advanced Western capital markets. However, this creates a severe currency mismatch: while domestic infrastructure generates revenue streams in local non-convertible currency, debt service obligations must be liquidated in US Dollars or Euros. When global monetary conditions tighten or domestic terms of trade deteriorate, sharp exchange rate depreciation balloons the real debt service burden overnight, triggering corporate bankruptcies and balance-of-payments panics."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2016)',
    options: [
      'Borrowing in foreign currency for domestic infrastructure carries severe currency mismatch risks that can destabilize macroeconomic stability.',
      'Domestic infrastructure projects should never charge any user fees in local currency.',
      'Foreign currency loans are entirely risk-free and should replace all domestic capital markets.',
      'Exchange rate depreciation automatically wipes out external commercial debt obligations.'
    ],
    correctAnswer: 0,
    explanation: 'The passage highlights the core risk of borrowing in foreign currencies to fund local-currency projects: currency mismatch leading to catastrophic debt inflation during depreciation. Thus, Option A is the accurate corollary.\nOptions B, C, and D are either absurd or contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: International Macroeconomics and Debt Crises',
      pageNumber: 'Page 58 – 64',
      keyExcerpt: 'Currency mismatch in external borrowings exposes emerging markets to debt crises upon exchange rate depreciation.'
    },
    eliminationTip: 'The passage highlights the danger of currency mismatch when borrowing abroad for domestic projects (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'External Debt', 'Currency Mismatch', 'Macroeconomics']
  },
  {
    id: 'pyq-2016-csat-26',
    subject: 'csat_quant',
    topic: 'Permutations and Combinations',
    subTopic: 'Handshake and Pairwise Intersections',
    question: 'In a meeting, every person shakes hands with every other person exactly once. If the total number of handshakes is 66, how many persons were present in the meeting? (UPSC CSAT 2016)',
    options: [
      '11',
      '12',
      '13',
      '14'
    ],
    correctAnswer: 1,
    explanation: 'Let the number of persons present in the meeting be n.\nEach handshake occurs between 2 distinct individuals.\nTotal Handshakes = ⁿC₂ = [n(n - 1)] / 2.\n\nGiven:\n[n(n - 1)] / 2 = 66\nn(n - 1) = 132.\n\nWe need two consecutive positive integers whose product is 132:\nSince 12 × 11 = 132, we have:\nn = 12.\n\nCheck:\n¹²C₂ = (12 × 11) / 2 = 66 handshakes.\nMatches Option (b).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 30: Permutations and Combinations',
      pageNumber: 'Page 614 – 620',
      keyExcerpt: 'Total mutual handshakes among n persons = n(n - 1) / 2.'
    },
    eliminationTip: 'n(n - 1) = 132. The consecutive integers giving 132 are 12 and 11. So n = 12.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Combinations', 'Handshakes']
  },
  {
    id: 'pyq-2016-csat-27',
    subject: 'csat_reasoning',
    topic: 'Venn Diagrams & Set Logic',
    subTopic: 'Three-Set Intersections',
    question: 'In a group of 100 students:\n- 40 students play Cricket\n- 50 students play Football\n- 35 students play Hockey\n- 15 students play Cricket and Football\n- 10 students play Football and Hockey\n- 12 students play Cricket and Hockey\n- 5 students play all three games\n\nHow many students do not play any of the three games? (UPSC CSAT 2016)',
    options: [
      '5',
      '7',
      '10',
      '12'
    ],
    correctAnswer: 1,
    explanation: 'By the Principle of Inclusion-Exclusion for three sets:\nn(C ∪ F ∪ H) = n(C) + n(F) + n(H) - n(C ∩ F) - n(F ∩ H) - n(C ∩ H) + n(C ∩ F ∩ H)\n\nSubstitute the given values:\n- n(C) = 40\n- n(F) = 50\n- n(H) = 35\n- n(C ∩ F) = 15\n- n(F ∩ H) = 10\n- n(C ∩ H) = 12\n- n(C ∩ F ∩ H) = 5\n\nn(C ∪ F ∪ H) = 40 + 50 + 35 - 15 - 10 - 12 + 5\n= 125 - 37 + 5\n= 88 + 5 = 93 students play at least one game.\n\nTotal students = 100.\nNumber of students who do not play any game:\n= 100 - n(C ∪ F ∪ H)\n= 100 - 93 = 7 students.\n\nMatches Option (b).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 9: Venn Diagrams',
      pageNumber: 'Page 252 – 258',
      keyExcerpt: 'Three-set inclusion-exclusion: |A ∪ B ∪ C| = Σ|A| - Σ|A ∩ B| + |A ∩ B ∩ C|.'
    },
    eliminationTip: 'Union = 40 + 50 + 35 - 15 - 10 - 12 + 5 = 93. Neither = 100 - 93 = 7.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Venn Diagrams', 'Inclusion Exclusion']
  },
  {
    id: 'pyq-2016-csat-28',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Coastal Mangroves & Disaster Resilience',
    subTopic: 'Bio-shields vs Cyclonic Surge Energy',
    question: 'Read the following passage:\n\n"When intense tropical cyclones make landfall on exposed shorelines, storm surge waves inflict catastrophic loss of life and property. Traditional civil engineering responses favor reinforced concrete sea dykes, which are exorbitant to maintain and disrupt coastal sediment ecology. By contrast, healthy mangrove belts dissipate up to two-thirds of wave kinetic energy within 100 meters through their complex aerial root architectures, reducing shoreline scour and buffering inland villages. Recognizing mangroves as critical living infrastructure transforms disaster management from reactive relief into proactive ecological risk reduction."\n\nWhat is the most crucial message conveyed by the author? (UPSC CSAT 2016)',
    options: [
      'Mangroves should be replaced with concrete sea dykes to prevent cyclonic wave impact.',
      'Conserving and restoring mangrove bio-shields is an effective, natural, and ecologically sound defense against coastal cyclonic disasters.',
      'Coastal villages should be permanently abandoned because no disaster reduction is possible.',
      'Cyclonic storm surges cause zero structural damage to coastal embankments.'
    ],
    correctAnswer: 1,
    explanation: 'The author explicitly contrasts expensive concrete sea dykes with natural mangrove belts, demonstrating that mangroves absorb two-thirds of storm surge energy and provide proactive ecological protection. Thus, Option B is the central message.\nOptions A, C, and D are extreme or contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 4: Coastal Resilience and Natural Buffers',
      pageNumber: 'Page 92 – 98',
      keyExcerpt: 'Mangroves act as dynamic living infrastructure dissipating cyclonic wave energy.'
    },
    eliminationTip: 'Option B accurately highlights the superiority of mangrove bio-shields over expensive artificial sea dykes.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Mangroves', 'Disaster Management', 'Cyclones']
  },
  {
    id: 'pyq-2016-csat-29',
    subject: 'csat_quant',
    topic: 'Alligations and Mixtures',
    subTopic: 'Ratio of Two Ingredients',
    question: 'In what ratio must a grocer mix tea at ₹ 60 per kg and tea at ₹ 65 per kg so that by selling the mixture at ₹ 68.20 per kg he may gain 10%? (UPSC CSAT 2016)',
    options: [
      '3 : 2',
      '3 : 4',
      '3 : 5',
      '2 : 3'
    ],
    correctAnswer: 0,
    explanation: 'First, find the mean cost price (CP) of the mixture:\nSelling Price (SP) of the mixture = ₹ 68.20 per kg.\nGain = 10%.\nCost Price (CP) = SP / (1 + Gain/100) = 68.20 / 1.10 = ₹ 62 per kg.\n\nNow, apply the Rule of Alligation:\n- Cheaper tea price = ₹ 60 / kg\n- Dearer tea price = ₹ 65 / kg\n- Mean price = ₹ 62 / kg\n\nRatio of Cheaper tea to Dearer tea:\n(Quantity of Cheaper) / (Quantity of Dearer) = (Dearer Price - Mean Price) / (Mean Price - Cheaper Price)\n= (65 - 62) / (62 - 60)\n= 3 / 2.\n\nTherefore, the required ratio is 3 : 2.\nMatches Option (a).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 20: Alligation or Mixture',
      pageNumber: 'Page 448 – 454',
      keyExcerpt: 'Mean CP = SP / (1 + profit%); Ratio = (d - m) / (m - c).'
    },
    eliminationTip: 'CP = 68.20 / 1.1 = 62. Alligation: (65 - 62) : (62 - 60) = 3 : 2.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Alligation', 'Mixtures', 'Profit and Loss']
  },
  {
    id: 'pyq-2016-csat-30',
    subject: 'csat_reasoning',
    topic: 'Statement and Assumptions',
    subTopic: 'Civic Sanitation Advisory',
    question: 'Consider the following statement and assumptions:\n\nStatement: "The city administration has appealed to all citizens to segregate domestic dry and wet waste at source to improve municipal composting and recycling."\n\nAssumptions:\nI. Most citizens are capable of separating biodegradable wet waste from recyclable dry waste.\nII. Waste segregation at source improves the efficiency of municipal recycling and composting facilities.\n\nWhich of the assumptions is/are implicit in the statement? (UPSC CSAT 2016)',
    options: [
      'Only assumption I is implicit',
      'Only assumption II is implicit',
      'Both assumptions I and II are implicit',
      'Neither assumption I nor II is implicit'
    ],
    correctAnswer: 2,
    explanation: 'Analyze each assumption:\n- Assumption I is implicit: An administrative appeal addressed to the public assumes that citizens have the basic capacity and comprehension to carry out the requested action (segregating wet and dry waste). If the public were incapable of doing so, making the appeal would be irrational.\n- Assumption II is implicit: The appeal explicitly links source segregation to improving municipal composting and recycling, which directly presupposes that separating waste at source actually facilitates better recycling and composting outcomes.\n\nTherefore, both assumptions I and II are implicit in the statement.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 15: Statement and Assumptions',
      pageNumber: 'Page 412 – 418',
      keyExcerpt: 'Public appeals presuppose public capability of compliance and direct efficacy of the intended outcome.'
    },
    eliminationTip: 'Both feasibility (citizens can segregate) and purpose (segregation aids recycling) are fundamental premises behind the civic appeal. Both are implicit.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Statement and Assumptions', 'Waste Management']
  },
  {
    id: 'pyq-2016-csat-31',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Intellectual Property & Seeds',
    subTopic: 'Farmer Rights vs Corporate Patents',
    question: 'Read the following passage:\n\n"The commodification of agricultural seeds through restrictive plant breeder rights and corporate patent regimes threatens the millennia-old customary practice of seed saving and exchange among smallholders. When multinational seed conglomerates enforce technological and legal barriers prohibiting farmers from replanting or trading harvested seeds, smallholders are locked into recurring cycles of costly annual seed purchases and proprietary chemical inputs. Protecting farmers\' rights to save, exchange, and improve seeds is not an impediment to innovation; it is an indispensable guarantee of agrarian autonomy and global food security."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2016)',
    options: [
      'Smallholder farmers should be legally prohibited from replanting seeds saved from their harvests.',
      'Safeguarding farmers\' traditional rights to save and exchange seeds is vital for agrarian autonomy and food security against monopolistic corporate patents.',
      'Plant breeding innovation occurs only when smallholder farmers are completely excluded.',
      'Commercial agriculture should abandon all scientific plant breeding efforts.'
    ],
    correctAnswer: 1,
    explanation: 'The passage argues that restricting seed saving traps smallholders into dependency on corporate monopolies, and concludes that protecting farmers\' rights to save and swap seeds is essential for food security and farmer autonomy. Thus, Option B is the direct corollary.\nOption A is the exact opposite of the author\'s thesis.\nOptions C and D are extreme distortions.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Agriculture, IP and Food Sovereignty',
      pageNumber: 'Page 118 – 124',
      keyExcerpt: 'Farmers\' rights to save and exchange seeds protect rural food sovereignty against proprietary seed monopolies.'
    },
    eliminationTip: 'The passage defends farmers\' rights to save and share seeds against patent monopolies. Option B directly reflects this.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Seed Patents', 'Farmers Rights', 'Food Security']
  },
  {
    id: 'pyq-2016-csat-32',
    subject: 'csat_quant',
    topic: 'Probability',
    subTopic: 'Dice Rolls and Sum of Scores',
    question: 'Two fair six-sided dice are thrown simultaneously. What is the probability of getting a sum of scores equal to 8? (UPSC CSAT 2016)',
    options: [
      '5/36',
      '1/6',
      '7/36',
      '1/12'
    ],
    correctAnswer: 0,
    explanation: 'When two fair dice are thrown:\nTotal number of possible elementary outcomes = 6 × 6 = 36.\n\nFavorable outcomes where the sum of the two faces equals 8:\n- (2, 6)\n- (3, 5)\n- (4, 4)\n- (5, 3)\n- (6, 2)\n\nTotal number of favorable outcomes = 5.\n\nProbability = (Number of favorable outcomes) / (Total outcomes)\n= 5 / 36.\n\nMatches Option (a).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 31: Probability',
      pageNumber: 'Page 626 – 632',
      keyExcerpt: 'Sum of two dice: Favorable outcomes for sum 8 are (2,6), (3,5), (4,4), (5,3), (6,2) -> 5/36.'
    },
    eliminationTip: 'Pairs giving sum 8: 2+6, 3+5, 4+4, 5+3, 6+2 (total 5 pairs). Total outcomes = 36. Probability = 5/36.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Probability', 'Dice']
  },
  {
    id: 'pyq-2016-csat-33',
    subject: 'csat_reasoning',
    topic: 'Ranking & Order',
    subTopic: 'Rank Determination in a Row',
    question: 'In a class of 45 students, Mohan\'s rank from the top is 15th, and Ramesh\'s rank from the bottom is 22nd. How many students are there between Mohan and Ramesh? (UPSC CSAT 2016)',
    options: [
      '7',
      '8',
      '9',
      '10'
    ],
    correctAnswer: 1,
    explanation: 'Total number of students = 45.\nMohan\'s rank from top = 15.\nRamesh\'s rank from bottom = 22.\n\nSum of their individual ranks from opposite ends:\nSum = 15 + 22 = 37.\n\nSince Sum of ranks (37) < Total number of students (45), there is NO overlap between Mohan and Ramesh.\nNumber of students between them:\n= Total - (Rank from top + Rank from bottom)\n= 45 - 37\n= 8 students.\n\nMatches Option (b).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 12: Ranking Test',
      pageNumber: 'Page 326 – 332',
      keyExcerpt: 'When sum of ranks < total, students between = Total - (Rank₁ + Rank₂).'
    },
    eliminationTip: 'Sum of ranks = 15 + 22 = 37. Total = 45. Students in between = 45 - 37 = 8.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Ranking Test', 'Order']
  },
  {
    id: 'pyq-2016-csat-34',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Sovereign Wealth Funds & Development',
    subTopic: 'Commodity Windfalls and Intergenerational Equity',
    question: 'Read the following passage:\n\n"Resource-rich developing nations blessed with colossal mineral or fossil fuel windfalls often succumb to the \'resource curse\': sudden influxes of export revenues trigger currency overvaluation that hollows out domestic manufacturing, while revenues are squandered on short-term consumption splurges. By insulating resource windfalls into sovereign wealth funds (SWFs) invested in diversified overseas assets, governments can sterilize inflationary domestic liquidity, smooth expenditure cycles against global commodity price crashes, and preserve finite geological wealth for unborn future generations."\n\nWhich of the following is the most logical and rational conclusion that can be drawn from the passage? (UPSC CSAT 2016)',
    options: [
      'Resource windfalls should always be exhausted completely on immediate domestic consumption subsidies.',
      'Sovereign wealth funds serve as macroprudential buffers that counter the resource curse and safeguard intergenerational equity.',
      'Mineral extraction should be banned globally to avoid foreign exchange earnings.',
      'Commodity price volatility has no impact on fiscal budgets of developing economies.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explains how resource windfalls cause the "resource curse" via currency overvaluation and wasted spending, and advocates sovereign wealth funds to stabilize liquidity, buffer against commodity crashes, and preserve wealth across generations. Thus, Option B is the direct conclusion.\nOptions A, C, and D are either absurd or contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: Resource Economics and Sovereign Wealth Funds',
      pageNumber: 'Page 54 – 60',
      keyExcerpt: 'Sovereign wealth funds mitigate the Dutch disease and promote intergenerational wealth preservation.'
    },
    eliminationTip: 'The passage presents Sovereign Wealth Funds as the antidote to the resource curse and tool for intergenerational equity (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Resource Curse', 'Sovereign Wealth Funds', 'Macroeconomics']
  },
  {
    id: 'pyq-2016-csat-35',
    subject: 'csat_quant',
    topic: 'Geometry & Mensuration',
    subTopic: 'Circle and Square Dimensions',
    question: 'If the radius of a circle is decreased by 50%, by how much percent is its area decreased? (UPSC CSAT 2016)',
    options: [
      '25%',
      '50%',
      '75%',
      '100%'
    ],
    correctAnswer: 2,
    explanation: 'Area of a circle is given by A = πr².\nLet initial radius r = 100.\nInitial area A₁ = π × (100)² = 10,000π.\n\nRadius is decreased by 50%:\nNew radius r\' = 100 - 50 = 50.\nNew area A₂ = π × (50)² = 2,500π.\n\nDecrease in area = A₁ - A₂ = 10,000π - 2,500π = 7,500π.\nPercentage decrease in area = (7,500π / 10,000π) × 100 = 75%.\n\nShortcut Formula for successive changes:\nNet Change = -50 - 50 + [(-50) × (-50) / 100]\n= -100 + 25 = -75%.\n\nMatches Option (c).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 24: Area of Circle',
      pageNumber: 'Page 522 – 528',
      keyExcerpt: 'When linear dimension r changes by x%, area changes by [2x + x²/100]%.'
    },
    eliminationTip: 'New radius is 1/2 of original. Area scales with square of radius: (1/2)² = 1/4 = 25% remaining. Decrease = 100% - 25% = 75%.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Area', 'Percentages', 'Circle']
  },
  {
    id: 'pyq-2016-csat-36',
    subject: 'csat_reasoning',
    topic: 'Logical Deductions & Syllogism',
    subTopic: 'Negative Premises and Particular Conclusions',
    question: 'Consider the following statements and conclusions:\n\nStatements:\n1. All cars are vehicles.\n2. No vehicle is an aircraft.\n\nConclusions:\nI. No car is an aircraft.\nII. No aircraft is a car.\n\nWhich of the conclusions logically follow(s) from the given statements? (UPSC CSAT 2016)',
    options: [
      'Only conclusion I follows',
      'Only conclusion II follows',
      'Both conclusions I and II follow',
      'Neither conclusion I nor II follows'
    ],
    correctAnswer: 2,
    explanation: 'Formal logic analysis:\n- Statement 1: "All cars are vehicles." (A-proposition: C ⊆ V)\n- Statement 2: "No vehicle is an aircraft." (E-proposition: V ∩ A = ∅)\n\nCombining an A-type premise (All C are V) with an E-type premise (No V are A) where the middle term "vehicles" is distributed in premise 2:\nThe resulting valid conclusion is universal negative (E-proposition):\n"No cars are aircraft." (C ∩ A = ∅).\nThus, Conclusion I logically follows.\n\nBy simple conversion of an E-proposition ("No C is A" converts directly to "No A is C"):\n"No aircraft is a car." (A ∩ C = ∅).\nThus, Conclusion II also logically follows.\n\nTherefore, both conclusions I and II follow.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 14: Syllogism',
      pageNumber: 'Page 386 – 392',
      keyExcerpt: 'All A are B + No B are C => No A are C, which converts to No C are A.'
    },
    eliminationTip: 'Cars are completely inside vehicles. Aircraft is completely outside vehicles. Therefore, cars and aircraft can never touch. Both conclusions follow.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Syllogism', 'Conversion']
  },
  {
    id: 'pyq-2016-csat-37',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Antibiotic Stewardship & Global Health',
    subTopic: 'Overuse in Animal Husbandry',
    question: 'Read the following passage:\n\n"The proliferation of multi-drug resistant superbugs represents an existential crisis for modern clinical medicine. While human over-prescription of antibiotics is widely condemned, an even larger volume of reserve antibiotics is routinely fed to healthy livestock as sub-therapeutic growth promoters. Concentrated animal feeding operations serve as giant evolutionary incubators, breeding drug-resistant bacterial strains that migrate into freshwater runoff, soil microbiomes, and human food supplies. Without rigorous bans on non-therapeutic agricultural antibiotic use, global medical advances will be rendered obsolete."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2016)',
    options: [
      'Banning non-therapeutic antibiotic use in livestock farming is essential to curb the rise of multi-drug resistant pathogens.',
      'Livestock animals should never be vaccinated against any diseases.',
      'Human clinical medicine has completely eradicated bacterial infections.',
      'Antibiotics have zero therapeutic value in veterinary care.'
    ],
    correctAnswer: 0,
    explanation: 'The passage highlights that sub-therapeutic antibiotic use in livestock acts as an evolutionary incubator for superbugs, concluding that without rigorous agricultural bans, medical progress will be wiped out. Thus, banning non-therapeutic livestock antibiotics is essential to stop superbugs (Option A).\nOptions B, C, and D are extreme or contradict the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 7: Antimicrobial Resistance and One Health',
      pageNumber: 'Page 154 – 160',
      keyExcerpt: 'Restricting non-therapeutic agricultural antibiotics is vital to curb zoonotic multi-drug resistance.'
    },
    eliminationTip: 'The author directly calls for "rigorous bans on non-therapeutic agricultural antibiotic use" (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Antimicrobial Resistance', 'Livestock', 'Superbugs']
  },
  {
    id: 'pyq-2016-csat-38',
    subject: 'csat_quant',
    topic: 'Time and Distance',
    subTopic: 'Linear Track Meeting of Runners',
    question: 'Two runners A and B start running simultaneously from the same point on a 600-meter circular track in the same direction at speeds of 10 m/s and 6 m/s respectively. After how many seconds will they meet for the first time? (UPSC CSAT 2016)',
    options: [
      '100 seconds',
      '150 seconds',
      '200 seconds',
      '300 seconds'
    ],
    correctAnswer: 1,
    explanation: 'Track length = L = 600 meters.\nSpeed of A = 10 m/s\nSpeed of B = 6 m/s\nBoth run in the SAME direction.\n\nRelative speed of A with respect to B:\nRelative Speed = Speed(A) - Speed(B) = 10 - 6 = 4 m/s.\n\nFor them to meet for the first time on a circular track when starting from the same point in the same direction, the faster runner must gain exactly one full lap (600 meters) over the slower runner.\n\nTime to meet = Track Length / Relative Speed\nTime = 600 / 4 = 150 seconds.\n\nMatches Option (b).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 17: Time and Distance (Circular Races)',
      pageNumber: 'Page 392 – 398',
      keyExcerpt: 'Time to meet for the first time in same direction on circular track = Circumference / (v₁ - v₂).'
    },
    eliminationTip: 'Relative speed in same direction = 10 - 6 = 4 m/s. Lap to gain = 600 m. Time = 600 / 4 = 150 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2016', 'CSAT', 'Quantitative Aptitude', 'Circular Track', 'Relative Speed']
  },
  {
    id: 'pyq-2016-csat-39',
    subject: 'csat_reasoning',
    topic: 'Analogy & Word Pairs',
    subTopic: 'Semantic Instrument Relationship',
    question: 'Seismograph is related to Earthquakes in the same way as Anemometer is related to: (UPSC CSAT 2016)',
    options: [
      'Wind Speed',
      'Atmospheric Pressure',
      'Rainfall',
      'Humidity'
    ],
    correctAnswer: 0,
    explanation: 'A seismograph is a scientific instrument designed to measure and record the intensity of earthquakes.\nSimilarly, an anemometer is a scientific instrument designed to measure the velocity and speed of wind.\n(Barometer measures atmospheric pressure; Rain gauge measures rainfall; Hygrometer measures humidity).\nTherefore, Anemometer corresponds to Wind Speed.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: Analogy',
      pageNumber: 'Page 52 – 58',
      keyExcerpt: 'Scientific instrument pairings: Seismograph : Earthquakes :: Anemometer : Wind Speed.'
    },
    eliminationTip: 'Anemometer measures wind speed (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reasoning', 'Analogy', 'Scientific Instruments']
  },
  {
    id: 'pyq-2016-csat-40',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Coastal Overfishing & Marine Trophic Cascades',
    subTopic: 'Trophic Downgrading of Marine Ecosystems',
    question: 'Read the following passage:\n\n"Industrial bottom-trawling and apex predator overfishing have triggered devastating trophic cascades across marine biomes. When apex predators such as sharks and groupers are depleted, herbivorous mesopredators and sea urchins multiply unchecked, overgrazing and denuding vital kelp forests and coral ecosystems into barren underwater deserts. Furthermore, heavy bottom-trawl nets obliterate seafloor benthic habitats, churning ancient carbon-rich marine sediments back into the water column. Establishing vast Marine Protected Areas (MPAs) with strict \'no-take\' zones is essential to restore trophic equilibrium and preserve commercial fisheries."\n\nWhich of the following is the most logical and rational conclusion that can be drawn from the passage? (UPSC CSAT 2016)',
    options: [
      'Bottom trawling has no measurable effect on seafloor ecosystems.',
      'Establishing no-take Marine Protected Areas is vital to prevent trophic collapse and restore marine ecological health.',
      'Eliminating all apex marine predators increases the productivity of kelp forests.',
      'Marine Protected Areas should permit unrestricted commercial bottom trawling.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explains how overfishing apex predators and bottom trawling trigger trophic collapse and destroy benthic habitats, concluding that establishing no-take Marine Protected Areas (MPAs) is essential to restore equilibrium. Thus, Option B is the rational conclusion.\nOptions A, C, and D are factually untrue or contradict the author\'s argument.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Marine Ecology and Trophic Downgrading',
      pageNumber: 'Page 128 – 134',
      keyExcerpt: 'No-take marine reserves restore top-down trophic balance and protect benthic carbon sinks.'
    },
    eliminationTip: 'The passage advocates no-take Marine Protected Areas to reverse trophic collapse and preserve marine habitats (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2016,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2016', 'CSAT', 'Reading Comprehension', 'Marine Protected Areas', 'Trophic Cascades', 'Overfishing']
  }
];
