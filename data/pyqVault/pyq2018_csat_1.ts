import { Question } from '@/lib/types';

export const pyq2018_csat_1: Question[] = [
  {
    id: 'pyq-2018-csat-01',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Autonomous Weapons & International Law',
    subTopic: 'Lethal Autonomous Weapons Systems (LAWS) and Human-in-the-Loop',
    question: 'Read the following passage:\n\n"The rapid militarization of artificial intelligence and computer vision has accelerated the development of Lethal Autonomous Weapons Systems (LAWS)—battlefield drones and robotic combat platforms capable of identifying, tracking, and engaging targets without human intervention. By removing human moral agency, ethical hesitation, and empathy from the kill-chain, autonomous weaponry risks lowering the threshold for armed conflict. Furthermore, because machine learning algorithms rely on probabilistic predictive patterns, they are inherently incapable of applying the foundational principles of international humanitarian law: distinguishing combatants from surrendered soldiers, evaluating civilian proportionality, and establishing accountability for war crimes."\n\nWhich of the following is the most logical and rational inference from the passage? (UPSC CSAT 2018)',
    options: [
      'Autonomous weapons systems adhere to international humanitarian law better than human soldiers.',
      'Deploying lethal autonomous weapons without human oversight threatens ethical norms, lowers conflict barriers, and subverts international legal accountability.',
      'Military research into artificial intelligence should be completely prohibited across all civilian computer laboratories.',
      'Computer vision algorithms possess superior moral empathy compared to human military commanders.'
    ],
    correctAnswer: 1,
    explanation: 'The passage argues that removing human oversight from lethal weapons lowers barriers to conflict, erodes ethical constraints, and makes it impossible to comply with international humanitarian principles of distinction and accountability. Hence Option (b) is the direct, rational inference.\nOptions (a) and (d) directly contradict the author\'s claims.\nOption (c) recommends an extreme, sweeping ban on all civilian AI research, which is nowhere suggested in the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 8: Artificial Intelligence and Ethics of Warfare',
      pageNumber: 'Page 178 – 184',
      keyExcerpt: 'Autonomous weapons lack human moral agency and cannot fulfill international humanitarian legal requirements of proportionality and accountability.'
    },
    eliminationTip: 'The passage highlights the triple hazard of autonomous weapons: lowering war thresholds, lacking moral agency, and failing legal accountability (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Autonomous Weapons', 'Artificial Intelligence', 'Ethics']
  },
  {
    id: 'pyq-2018-csat-02',
    subject: 'csat_quant',
    topic: 'Number System: Divisors and Factors',
    subTopic: 'Total Number of Factors of a Composite Number',
    question: 'How many total factors (divisors), including 1 and the number itself, does the number 360 have? (UPSC CSAT 2018)',
    options: [
      '18',
      '20',
      '24',
      '30'
    ],
    correctAnswer: 2,
    explanation: '1. First, find the prime factorization of 360:\n   360 = 36 × 10\n   360 = (2² × 3²) × (2 × 5)\n   360 = 2³ × 3² × 5¹.\n\n2. Standard formula for the total number of divisors of a number N = p₁ᵃ × p₂ᵇ × p₃ᶜ (where p₁, p₂, p₃ are prime numbers):\n   Total Divisors = (a + 1) × (b + 1) × (c + 1)\n\n3. Here:\n   - Exponent of 2 is a = 3\n   - Exponent of 3 is b = 2\n   - Exponent of 5 is c = 1\n\n4. Calculate total factors:\n   Total Factors = (3 + 1) × (2 + 1) × (1 + 1)\n   Total Factors = 4 × 3 × 2 = 24.\n\nTherefore, 360 has exactly 24 factors.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Factors and Multiples)',
      pageNumber: 'Page 18 – 24',
      keyExcerpt: 'Number of factors of N = p^a × q^b × r^c is (a + 1)(b + 1)(c + 1). For 360 = 2³ × 3² × 5¹, factors = 4 × 3 × 2 = 24.'
    },
    eliminationTip: 'Prime factorization: 360 = 2³ × 3² × 5¹. Number of factors = (3+1)(2+1)(1+1) = 4 × 3 × 2 = 24.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Number of Factors', 'Prime Factorization', 'Number System', 'Quant']
  },
  {
    id: 'pyq-2018-csat-03',
    subject: 'csat_reasoning',
    topic: 'Blood Relations: Coded Relations',
    subTopic: 'Deductions from Family Relationship Symbols',
    question: 'Consider the following relationship codes:\n- "P + Q" means P is the mother of Q\n- "P - Q" means P is the brother of Q\n- "P × Q" means P is the father of Q\n- "P ÷ Q" means P is the sister of Q\n\nWhich of the following expressions shows that "A is the uncle of B"? (UPSC CSAT 2018)',
    options: [
      'A - M × B',
      'A + M ÷ B',
      'A × M - B',
      'A ÷ M × B'
    ],
    correctAnswer: 0,
    explanation: 'To show that "A is the uncle of B", A must be MALE, and A must be the brother of B\'s father or mother.\n\nLet us test Option A: "A - M × B":\n1. "A - M" means A is the BROTHER of M (A is male).\n2. "M × B" means M is the FATHER of B.\n3. Therefore, A is the brother of B\'s father M.\n4. The brother of one\'s father is an UNCLE (paternal uncle).\n\nThus, "A - M × B" establishes definitively that A is the uncle of B.\n\nLet us check other options:\n- Option B: A + M means A is mother (female, cannot be uncle).\n- Option C: A × M means A is father of M; M - B means M is brother of B. Thus A is father of B (not uncle).\n- Option D: A ÷ M means A is sister (female, would be aunt, not uncle).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Blood Relations (Coded Relations)',
      pageNumber: 'Page 128 – 136',
      keyExcerpt: 'In coded relations, first determine gender of the target relative. "A - M" makes A a male brother of parent M, proving uncle relationship.'
    },
    eliminationTip: 'Uncle must be male: In B, A is mother (female); in D, A is sister (female). In C, A is father. Only A - M × B makes A the brother of father M (uncle).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Blood Relations', 'Coded Relations', 'Family Tree', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-04',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Rural Indebtedness & Credit',
    subTopic: 'Informal Moneylenders vs Institutional Agricultural Credit',
    question: 'Read the following passage:\n\n"Despite the widespread geographic branch expansion of Regional Rural Banks and Primary Agricultural Credit Societies, informal village moneylenders continue to supply nearly forty percent of agricultural operating credit in rainfed semi-arid districts. The persistence of usurious informal moneylending is rooted in procedural design: formal commercial bank credit requires land title documentation, collateral hypothecation, and bureaucratic paperwork that effectively disenfranchises landless sharecroppers, oral lessees, and women cultivators. Moneylenders, conversely, demand zero documentation, disburse cash instantly at midnight, and accept crop mortgages, albeit at extortionate annual interest rates exceeding sixty percent that trap tenant farmers in inter-generational debt peonage."\n\nWhich among the following is the most logical and rational assumption that can be made from the passage? (UPSC CSAT 2018)',
    options: [
      'Informal moneylenders are socially motivated philanthropists providing free services.',
      'Rigid collateral and documentation requirements in institutional banking perpetuate the dependence of marginalized cultivators on usurious informal credit.',
      'Tenant farmers prefer paying high interest rates because formal bank loans carry no interest.',
      'Land title records in rural India are completely flawless and up to date.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that commercial banks require land titles and collateral that landless tenant farmers lack, leaving them with no alternative but to rely on usurious informal moneylenders. Hence Option (b) captures this structural causal mechanism directly.\nOptions (a), (c), and (d) are factually absurd and contradicted by the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Rural Economics and Financial Intermediation',
      pageNumber: 'Page 105 – 111',
      keyExcerpt: 'Inflexible collateral requirements in institutional banking exclude tenant farmers, driving them to informal moneylenders.'
    },
    eliminationTip: 'The passage clearly explains how lack of land documents and rigid bank rules force landless farmers to go to moneylenders (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Rural Credit', 'Informal Moneylenders', 'Agricultural Economics']
  },
  {
    id: 'pyq-2018-csat-05',
    subject: 'csat_quant',
    topic: 'Percentages: Successive Percentage Change',
    subTopic: 'Net Percentage Change when Quantity Increases then Decreases by Same Percentage',
    question: 'The population of a town increased by 10% during the first year and then decreased by 10% during the second year. If the current population at the end of the second year is 99,000, what was the initial population of the town? (UPSC CSAT 2018)',
    options: [
      '99,000',
      '100,000',
      '101,000',
      '110,000'
    ],
    correctAnswer: 1,
    explanation: '1. Let the initial population of the town be P.\n\n2. In the first year, population increases by 10%:\n   Population after 1st year = P × (1 + 10 / 100) = 1.10 P.\n\n3. In the second year, population decreases by 10% on the new amount:\n   Population after 2nd year = (1.10 P) × (1 - 10 / 100) = 1.10 P × 0.90 = 0.99 P.\n\n(Notice that an increase of x% followed by a decrease of x% always results in a net decrease of x²/100% = 10²/100% = 1% net decrease, meaning 99% of original).\n\n4. We are given that population at the end of second year is 99,000:\n   0.99 P = 99,000\n   P = 99,000 / 0.99\n   P = 99,000 / (99 / 100)\n   P = 1,000 × 100 = 100,000.\n\nTherefore, the initial population was 100,000.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Percentage',
      pageNumber: 'Page 215 – 222',
      keyExcerpt: 'Successive increase of x% and decrease of x% results in net change of -x²/100%. P × 0.99 = 99,000 => P = 100,000.'
    },
    eliminationTip: '+10% then -10% gives a net 1% drop (0.99 of initial). If 99% is 99,000, then 100% is 100,000.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Percentages', 'Successive Change', 'Population', 'Quant']
  },
  {
    id: 'pyq-2018-csat-06',
    subject: 'csat_reasoning',
    topic: 'Syllogism: Categorical Logic',
    subTopic: 'Universal Negative and Universal Affirmative Syllogism',
    question: 'Consider the following statements and conclusions:\n\nStatements:\n1. No cat is a dog.\n2. All dogs are animals.\n\nConclusions:\nI. Some animals are not cats.\nII. No cat is an animal.\n\nWhich of the conclusions logically follow from the given statements? (UPSC CSAT 2018)',
    options: [
      'Only Conclusion I follows',
      'Only Conclusion II follows',
      'Both Conclusion I and II follow',
      'Neither Conclusion I nor II follows'
    ],
    correctAnswer: 0,
    explanation: 'Let us analyze using Venn diagrams and standard categorical logic rules:\n1. Statement 1: "No cat is a dog" (E-type proposition): The set of Cats and the set of Dogs are completely disjoint (Cats ∩ Dogs = ∅).\n2. Statement 2: "All dogs are animals" (A-type proposition): The entire set of Dogs is enclosed inside the set of Animals (Dogs ⊆ Animals).\n\nEvaluating Conclusion I: "Some animals are not cats":\n- Consider the animals that are Dogs. We know Dogs are animals.\n- But Statement 1 says no dog can be a cat.\n- Therefore, those specific animals that are Dogs CANNOT be cats.\n- Hence, there are definitely some animals (the dogs) that are NOT cats.\n- Conclusion I logically and necessarily follows!\n\nEvaluating Conclusion II: "No cat is an animal":\n- There is no restriction preventing Cats from being Animals outside the Dog sub-region.\n- In fact, cats could easily be inside the set of Animals (as long as they do not overlap with Dogs).\n- Thus, Conclusion II does NOT follow.\n\nTherefore, ONLY Conclusion I follows.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 14: Syllogism',
      pageNumber: 'Page 345 – 352',
      keyExcerpt: 'All dogs are animals, and no dog is a cat. Therefore, those animals which are dogs cannot be cats (Some animals are not cats).'
    },
    eliminationTip: 'Dogs are animals, and no dog is a cat. So those animals (the dogs) are not cats. Conclusion I is airtight. Conclusion II is false because cats are animals.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Syllogism', 'Venn Diagrams', 'Deductive Logic', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-07',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Aquatic Ecology & Pharmaceutical Residues',
    subTopic: 'Wastewater Effluents and Antibiotic Contamination',
    question: 'Read the following passage:\n\n"Municipal sewage treatment plants and bulk drug manufacturing clusters discharge massive volumes of active pharmaceutical ingredients, especially broad-spectrum fluoroquinolones and macrolide antibiotics, directly into surface riverine ecosystems. In ambient aquatic environments, these persistent antibiotic residues do not merely exert chronic toxicity on sensitive macroinvertebrates; they transform natural microbial biofilm communities into hot-spots of horizontal gene transfer. Bacterial populations exposed to sub-inhibitory pharmaceutical concentrations rapidly exchange plasmid-borne resistance genes, spawning multi-drug resistant superbugs that contaminate downstream agricultural irrigation canals and municipal drinking water intakes."\n\nWhich of the following is the most crucial message conveyed by the passage? (UPSC CSAT 2018)',
    options: [
      'Pharmaceutical effluents in rivers pose serious public health and ecological risks by accelerating the proliferation of drug-resistant pathogens.',
      'Surface riverine ecosystems can naturally decompose all chemical antibiotic residues within a few hours.',
      'Agricultural irrigation canals are completely insulated from surface water pollution.',
      'Municipal sewage treatment plants are capable of eliminating all active drug molecules.'
    ],
    correctAnswer: 0,
    explanation: 'The passage highlights that antibiotic discharge into rivers fosters horizontal gene transfer and creates multi-drug resistant superbugs that endanger downstream drinking water and farming. Hence Option (a) conveys the central crucial message.\nOptions (b), (c), and (d) are factually contradicted by the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 7: Environmental Pollution and Public Health',
      pageNumber: 'Page 152 – 158',
      keyExcerpt: 'Pharmaceutical residues in wastewater turn aquatic biofilms into incubators for drug-resistant superbugs.'
    },
    eliminationTip: 'The passage warns that antibiotic residues in rivers spawn drug-resistant superbugs that poison drinking water and irrigation (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Pharmaceutical Pollution', 'Superbugs', 'Water Pollution']
  },
  {
    id: 'pyq-2018-csat-08',
    subject: 'csat_quant',
    topic: 'Time, Speed and Distance: Average Speed',
    subTopic: 'Harmonic Mean of Speeds for Equal Distances',
    question: 'A motorist travels from town A to town B at an average speed of 60 km/h and returns from town B to town A along the same route at an average speed of 40 km/h. What is his average speed for the entire round trip journey? (UPSC CSAT 2018)',
    options: [
      '48 km/h',
      '50 km/h',
      '52 km/h',
      '54 km/h'
    ],
    correctAnswer: 0,
    explanation: '1. Standard formula for average speed when covering equal distances at two different speeds x and y:\n   Average Speed = (Total Distance) / (Total Time) = 2xy / (x + y)\n\n2. Given:\n   - Speed going forward x = 60 km/h\n   - Speed returning y = 40 km/h\n\n3. Calculate Average Speed:\n   Average Speed = 2 × 60 × 40 / (60 + 40)\n   Average Speed = 4,800 / 100 = 48 km/h.\n\n(A common pitfall is taking the arithmetic mean (60 + 40) / 2 = 50 km/h, which is incorrect because the motorist spends more time traveling at the slower speed of 40 km/h, skewing the weighted average speed downward toward 40).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 17: Time and Distance (Average Speed Formula)',
      pageNumber: 'Page 392 – 398',
      keyExcerpt: 'When distances are equal, Average Speed is the harmonic mean: 2xy / (x + y). For 60 and 40, Avg Speed = 2(60)(40)/100 = 48 km/h.'
    },
    eliminationTip: 'Never take the arithmetic mean (50). The harmonic mean formula 2xy/(x+y) = 2(60)(40)/100 = 48 km/h is the universal formula for round trips.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Average Speed', 'Harmonic Mean', 'Speed Time Distance', 'Quant']
  },
  {
    id: 'pyq-2018-csat-09',
    subject: 'csat_reasoning',
    topic: 'Direction Sense Test: Angles and Turning',
    subTopic: 'Combining Linear Steps and Angular Deviations',
    question: 'A man is facing East. He turns 100° in the clockwise direction and then 145° in the anticlockwise direction. Which direction is he facing now? (UPSC CSAT 2018)',
    options: [
      'East',
      'North-East',
      'North',
      'South-West'
    ],
    correctAnswer: 1,
    explanation: 'Let initial direction be East (0° or standard baseline):\n1. Calculate net angular rotation:\n   - Clockwise rotation = -100°\n   - Anticlockwise rotation = +145°\n   - Net rotation = 145° - 100° = +45° in the ANTICLOCKWISE direction.\n\n2. Starting from EAST and rotating 45° anticlockwise (towards North):\n   - East + 45° counterclockwise = NORTH-EAST.\n\nTherefore, the man is now facing North-East.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 7: Direction Sense Test',
      pageNumber: 'Page 162 – 168',
      keyExcerpt: 'Net angular rotation = Anticlockwise - Clockwise = 145° - 100° = 45° anticlockwise. East + 45° anticlockwise = North-East.'
    },
    eliminationTip: 'Net angle = 145° anticlockwise - 100° clockwise = 45° anticlockwise. Turning 45° left from East points to North-East.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Direction Sense', 'Angular Turning', 'North-East', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-10',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Energy Transition & Grid Stability',
    subTopic: 'Intermittent Renewables and Grid Balancing Reserves',
    question: 'Read the following passage:\n\n"Integrating high shares of variable solar photovoltaic and wind power into national electrical transmission grids poses intricate engineering challenges. Because solar radiance and wind velocities fluctuate unpredictably across diurnal and seasonal cycles, rapid changes in renewable generation can cause severe frequency deviations and grid instability. In the absence of massive grid-scale battery storage, pumped hydroelectric reserves, and flexible fast-ramping natural gas peaker plants, grid operators are frequently forced to curtail clean green power generation during peak sunlight hours to prevent grid collapse."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2018)',
    options: [
      'Renewable energy integration requires investments in energy storage and grid flexibility to prevent power curtailment and maintain reliability.',
      'Transmission grids should be entirely disconnected from all solar and wind energy farms.',
      'Solar panels generate maximum electricity during midnight hours.',
      'Grid frequency never changes regardless of power supply fluctuations.'
    ],
    correctAnswer: 0,
    explanation: 'The passage highlights that the intermittency of solar and wind energy threatens grid stability, causing clean energy curtailment unless flexible peaking plants and battery/pumped-storage reserves are deployed. Hence Option (a) is the direct, logical corollary.\nOptions (b), (c), and (d) are absurd or contradictory.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Energy Transitions and Transmission Infrastructure',
      pageNumber: 'Page 132 – 138',
      keyExcerpt: 'Grid integration of intermittent renewables necessitates battery storage and flexible balancing reserves to avert curtailment.'
    },
    eliminationTip: 'The passage argues that storage and flexible peaking reserves are vital to manage renewable intermittency (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Renewable Energy', 'Grid Stability', 'Battery Storage']
  },
  {
    id: 'pyq-2018-csat-11',
    subject: 'csat_quant',
    topic: 'Profit and Loss: Equal Selling Prices',
    subTopic: 'One Sold at a Gain of x% and Other at a Loss of x%',
    question: 'A merchant sells two wristwatches for ₹ 1,980 each. On one he gains 10% and on the other he loses 10%. In the whole transaction, did the merchant make a profit or a loss, and by what percentage? (UPSC CSAT 2018)',
    options: [
      'No profit, no loss',
      'Loss of 1%',
      'Gain of 1%',
      'Loss of 2%'
    ],
    correctAnswer: 1,
    explanation: '1. Standard mathematical theorem:\n   When two items are sold at the SAME Selling Price (SP), and one is sold at a gain of x% while the other is sold at a loss of x%, the overall transaction ALWAYS results in a NET LOSS.\n   The loss percentage is given by:\n   Loss % = (x / 10)² = x² / 100 %\n\n2. Here x = 10%:\n   Loss % = 10² / 100 % = 100 / 100 % = 1% Loss.\n\n3. Full step-by-step verification:\n   - Watch 1 (10% Gain): SP = 1,980 => CP₁ = 1,980 / 1.10 = ₹ 1,800.\n   - Watch 2 (10% Loss): SP = 1,980 => CP₂ = 1,980 / 0.90 = ₹ 2,200.\n   - Total Cost Price = CP₁ + CP₂ = 1,800 + 2,200 = ₹ 4,000.\n   - Total Selling Price = 1,980 + 1,980 = ₹ 3,960.\n   - Net Loss = 4,000 - 3,960 = ₹ 40.\n   - Loss Percentage = (40 / 4,000) × 100 = 1% Loss.\n\nTherefore, the merchant incurs a net loss of 1%.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 14: Profit, Loss and Discount',
      pageNumber: 'Page 335 – 340',
      keyExcerpt: 'When SP of two items is identical, and profit% = loss% = x%, there is always an overall loss of (x/10)%. For x = 10, loss is 1%.'
    },
    eliminationTip: 'Classic theorem: Equal SP with +x% and -x% always produces a loss of (x/10)². For x = 10: 10²/100 = 1% loss.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Profit and Loss', 'Equal Selling Price', 'Net Loss Theorem', 'Quant']
  },
  {
    id: 'pyq-2018-csat-12',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding: Letter Transformation',
    subTopic: 'Direct Positional Mapping and Shifting',
    question: 'In a certain code language, if "MADRAS" is written as "NBESBT", how will "BOMBAY" be written in that same code language? (UPSC CSAT 2018)',
    options: [
      'CPNCBX',
      'CPNCBZ',
      'CPOCBZ',
      'CQOCBZ'
    ],
    correctAnswer: 1,
    explanation: 'Examine the pattern between MADRAS and NBESBT by looking at each letter:\n- M + 1 = N\n- A + 1 = B\n- D + 1 = E\n- R + 1 = S\n- A + 1 = B\n- S + 1 = T\n\nEach letter is shifted forward by exactly +1 position in the English alphabetical order.\n\nNow apply the +1 shift to "BOMBAY":\n- B + 1 = C\n- O + 1 = P\n- M + 1 = N\n- B + 1 = C\n- A + 1 = B\n- Y + 1 = Z\n\nResulting string = C P N C B Z.\n\nMatches Option (b).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 4: Coding-Decoding',
      pageNumber: 'Page 90 – 96',
      keyExcerpt: 'Each letter is substituted by its immediate succeeding letter in the alphabetical order (+1 shift).'
    },
    eliminationTip: 'Every letter moves forward by +1: B->C, O->P, M->N, B->C, A->B, Y->Z = CPNCBZ.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Coding Decoding', 'Letter Shift', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-13',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Natural Capital & Ecosystem Accounting',
    subTopic: 'Gross Domestic Product (GDP) vs Environmental Depletion',
    question: 'Read the following passage:\n\n"Standard Gross Domestic Product (GDP) accounting metrics measure economic performance by tallying the market value of finished goods and services, but they treat the irreversible liquidation of natural capital—such as ancient old-growth forests, pristine wetlands, and fossil groundwater—as positive income rather than asset depreciation. Clear-cutting a biodiverse watershed records immediate timber revenue and boosts quarterly GDP growth, while entirely ignoring the catastrophic long-term economic costs of topsoil erosion, devastating downstream floods, and lost carbon sequestration. Sustainable macroeconomics requires integrating natural capital accounting into national balance sheets to measure true inclusive wealth."\n\nWhich of the following is the most logical and rational inference from the passage? (UPSC CSAT 2018)',
    options: [
      'Traditional GDP accounting provides a complete and flawless metric of sustainable human well-being.',
      'Conventional GDP accounting incentivizes environmental destruction by failing to account for the depreciation of natural capital.',
      'Clear-cutting ancient forests creates infinite economic wealth without any ecological side-effects.',
      'Wetlands and groundwater possess zero economic value.'
    ],
    correctAnswer: 1,
    explanation: 'The author explains that GDP records resource depletion as positive income without counting natural capital loss, leading to unsustainable environmental destruction. Hence Option (b) is the direct, rational inference.\nOptions (a), (c), and (d) directly contradict the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Ecological Economics and National Accounting',
      pageNumber: 'Page 94 – 100',
      keyExcerpt: 'GDP metrics neglect natural capital depreciation, creating perverse incentives that encourage resource depletion.'
    },
    eliminationTip: 'The passage critiques traditional GDP for treating resource destruction as income and urges natural capital accounting (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'GDP', 'Natural Capital Accounting', 'Ecological Economics']
  },
  {
    id: 'pyq-2018-csat-14',
    subject: 'csat_quant',
    topic: 'Ratio and Proportion: Fractional Sharing',
    subTopic: 'Converting Fractional Ratios into Integer Ratios',
    question: 'A sum of ₹ 2,600 is divided among A, B and C in the ratio 1/2 : 1/3 : 1/4. What is the share of B? (UPSC CSAT 2018)',
    options: [
      '₹ 600',
      '₹ 800',
      '₹ 1,000',
      '₹ 1,200'
    ],
    correctAnswer: 1,
    explanation: '1. The given ratio is fractional: (1 / 2) : (1 / 3) : (1 / 4).\n   To convert into an integer ratio, multiply each fraction by the LCM of denominators (2, 3, 4):\n   LCM(2, 3, 4) = 12.\n\n2. Multiply each term by 12:\n   - A\'s share = 12 × (1 / 2) = 6 parts\n   - B\'s share = 12 × (1 / 3) = 4 parts\n   - C\'s share = 12 × (1 / 4) = 3 parts\n\n   Therefore, Ratio A : B : C = 6 : 4 : 3.\n\n3. Total number of ratio parts = 6 + 4 + 3 = 13 parts.\n   Total sum to be divided = ₹ 2,600.\n   Value of 1 part = 2,600 / 13 = ₹ 200.\n\n4. Share of B = 4 parts = 4 × 200 = ₹ 800.\n\n(A\'s share = 6 × 200 = ₹1,200; C\'s share = 3 × 200 = ₹600; Total = 1,200 + 800 + 600 = ₹2,600).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 12: Ratio and Proportion',
      pageNumber: 'Page 288 – 294',
      keyExcerpt: 'Multiply fractional ratio 1/2 : 1/3 : 1/4 by LCM 12 to get integer ratio 6 : 4 : 3. Sum of parts = 13. B = 4/13 × 2600 = ₹800.'
    },
    eliminationTip: 'LCM(2, 3, 4) = 12. Ratio = 6 : 4 : 3. Total parts = 13. B\'s share = (4 / 13) × 2,600 = 4 × 200 = ₹800.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Fractional Ratios', 'Ratio and Proportion', 'Division of Sum', 'Quant']
  },
  {
    id: 'pyq-2018-csat-15',
    subject: 'csat_reasoning',
    topic: 'Linear Seating Arrangement',
    subTopic: 'Five Persons in a Row Facing North',
    question: 'Five colleagues A, B, C, D and E are sitting in a row facing North.\n- C is sitting exactly in the middle of the row.\n- A is sitting at one of the extreme ends.\n- B is sitting to the immediate right of C.\n- D is sitting between A and C.\n\nWho is sitting at the other extreme end? (UPSC CSAT 2018)',
    options: [
      'B',
      'D',
      'E',
      'Cannot be determined'
    ],
    correctAnswer: 2,
    explanation: 'Let the 5 positions from left to right be: [1, 2, 3, 4, 5] (all facing North):\n1. "C is sitting exactly in the middle":\n   Middle position of 5 is Position 3. So C is at Position 3.\n   Row: [_, _, C, _, _]\n\n2. "B is sitting to the immediate right of C":\n   Facing North, immediate right of Pos 3 is Position 4. So B is at Position 4.\n   Row: [_, _, C, B, _]\n\n3. "D is sitting between A and C":\n   Since C is at Pos 3, D must be at Position 2 and A must be at Position 1 (one of the extreme ends).\n   Row: [A, D, C, B, _]\n\n4. Now, only Position 5 is vacant, and only colleague E remains.\n   Row: [A, D, C, B, E]\n\nTherefore, E is sitting at the other extreme end (Position 5).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 24: Seating Arrangement (Linear Arrangement)',
      pageNumber: 'Page 505 – 512',
      keyExcerpt: 'Position C in the center (3). B is at (4). D is at (2) and A is at (1). Thus E is at the right extreme end (5).'
    },
    eliminationTip: 'Row layout: [A - D - C - B - E]. C is middle, B is right of C, D is between A and C. E is left for the other end.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Linear Seating Arrangement', 'North Facing', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-16',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Global Vaccine Inequity & Intellectual Property',
    subTopic: 'TRIPS Patents and Global South Access',
    question: 'Read the following passage:\n\n"During global pandemic emergencies, strict enforcement of intellectual property patents under the WTO\'s TRIPS agreement creates an artificial scarcity of life-saving vaccines and antivirals. While pharmaceutical corporations in wealthy nations enjoy state-subsidized research grants and monopoly pricing protections, developing nations in the Global South face protracted vaccine apartheid. Allowing low- and middle-income countries to invoke TRIPS flexibilities, such as compulsory licensing and temporary patent waivers, does not stifle long-term scientific innovation; rather, it decentralizes manufacturing capacity and prevents viral mutations from circulating uncontrolled across unvaccinated populations."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2018)',
    options: [
      'Intellectual property patent protections must be intensified during global pandemics to maximize corporate earnings.',
      'Facilitating patent flexibilities and technology transfer during health emergencies enhances global health security without compromising long-term innovation.',
      'Vaccine production should be strictly monopolized by a single corporation in one country.',
      'Viral mutations only occur in countries that have achieved 100% vaccination rates.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly argues that granting patent waivers and compulsory licenses decentralizes manufacturing and prevents dangerous viral mutations without stifling innovation. Hence Option (b) is the direct, logical corollary.\nOptions (a), (c), and (d) are contradicted by the text or absurd.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 9: Global Health Governance and Intellectual Property',
      pageNumber: 'Page 190 – 196',
      keyExcerpt: 'TRIPS flexibilities and patent waivers during pandemics expand decentralized manufacturing to combat viral mutation risks.'
    },
    eliminationTip: 'The author shows that patent flexibilities allow decentralized production and stop viral spread without harming innovation (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'TRIPS Agreement', 'Vaccine Equity', 'Global Health']
  },
    {
    id: "pyq-2018-csat-17",
    subject: "csat_quant",
    topic: "Quantitative Aptitude",
    subTopic: "Time and Work: Joint and Individual Work Rates",
    question: "A and B working together can complete a project in 8 days. If A working alone can complete the same project in 12 days, in how many days can B working alone complete the project? (UPSC CSAT 2018)",
    options: [
      "16 days",
      "20 days",
      "24 days",
      "28 days"
    ],
    correctAnswer: 2,
    explanation: "Let the total work be the LCM of 8 and 12 = 24 units.\nCombined work efficiency of (A + B) = 24 / 8 = 3 units/day.\nIndividual work efficiency of A = 24 / 12 = 2 units/day.\nTherefore, the work efficiency of B = (A + B) - A = 3 - 2 = 1 unit/day.\nTime taken by B alone to complete the total work of 24 units:\nTime = Total work / Efficiency of B = 24 / 1 = 24 days.\nAlternatively, using the fraction method:\n1/B = 1/8 - 1/12 = (3 - 2) / 24 = 1 / 24 => B = 24 days.",
    bookReference: {
      bookName: "Quantitative Aptitude by R.S. Aggarwal",
      edition: "Revised Edition",
      chapter: "Time and Work",
      pageNumber: "Chapter 15: Individual Efficiency Formula",
      keyExcerpt: "1/B = 1/(A+B) - 1/A."
    },
    eliminationTip: "Unit method: Total = 24 units. A+B do 3 units/day, A does 2 units/day. B does 1 unit/day => 24 days.",
    difficulty: "Easy",
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: "CSAT",
    frequency: 7,
    tags: [
      "UPSC 2018",
      "CSAT",
      "Time and Work",
      "Unit Method"
    ]
  },
  {
    id: 'pyq-2018-csat-18',
    subject: 'csat_reasoning',
    topic: 'Order and Ranking: Interchanging Positions',
    subTopic: 'Shift in Position to Determine Total Number in Row',
    question: 'In a row of boys, Deepak is 7th from the left and Madhu is 12th from the right. If they interchange their positions, Deepak becomes 22nd from the left. How many total boys are there in the row? (UPSC CSAT 2018)',
    options: [
      '31',
      '33',
      '34',
      '35'
    ],
    correctAnswer: 1,
    explanation: '1. Before interchange:\n   - Deepak is 7th from the left.\n   - Madhu is 12th from the right.\n\n2. When they interchange positions:\n   - Deepak occupies Madhu\'s original position.\n   - From the problem statement, Deepak\'s new position is 22nd from the left.\n\n3. Notice that this specific seat (Madhu\'s original seat) is now known from both ends:\n   - It is 22nd from the left (Deepak\'s new rank).\n   - It is 12th from the right (Madhu\'s original rank).\n\n4. Standard formula for total persons in a row:\n   Total = (Rank from Left) + (Rank from Right) - 1\n   Total = 22 + 12 - 1\n   Total = 34 - 1 = 33 boys.\n\nTherefore, there are 33 boys in the row.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 12: Ranking and Ordering Test',
      pageNumber: 'Page 282 – 288',
      keyExcerpt: 'After interchanging, Deepak occupies Madhu\'s position. Total = Deepak\'s new left rank + Madhu\'s old right rank - 1 = 22 + 12 - 1 = 33.'
    },
    eliminationTip: 'Madhu\'s original seat is 12th from right and 22nd from left. Total = 22 + 12 - 1 = 33.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Order and Ranking', 'Interchange of Positions', 'Row Strength', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-19',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Atmospheric Chemistry & Urban Air',
    subTopic: 'Secondary PM2.5 Aerosol Formation from Ammonia and Precursors',
    question: 'Read the following passage:\n\n"Urban air pollution mitigation has traditionally targeted primary emissions from automobile exhaust pipes and coal combustion stacks. However, atmospheric chemical monitoring reveals that over half of fine particulate matter (PM2.5) in megacities consists of secondary inorganic aerosols formed through chemical reactions in the atmosphere. Gaseous ammonia emitted from agricultural urea fertilization and untreated livestock waste reacts with sulfur dioxide and nitrogen oxides in the presence of sunlight and atmospheric humidity to form microscopic ammonium nitrate and ammonium sulfate crystals. Controlling urban smog therefore necessitates regulating regional agricultural ammonia emissions alongside urban traffic controls."\n\nWhich of the following is the most logical and rational inference from the passage? (UPSC CSAT 2018)',
    options: [
      'Urban air quality can be fully restored solely by addressing city vehicular tailpipe emissions.',
      'Tackling urban particulate pollution requires an airshed approach that addresses regional agricultural precursor emissions alongside urban industrial sources.',
      'Gaseous ammonia is a completely harmless atmospheric compound.',
      'Secondary PM2.5 aerosols are larger than coarse sand grains and cannot enter human lungs.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that over half of PM2.5 is secondary aerosols formed by reactions involving agricultural ammonia and industrial gases, concluding that urban pollution requires regulating regional agriculture as well as urban traffic. Hence Option (b) captures this regional airshed approach.\nOptions (a), (c), and (d) directly contradict the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Environmental Pollution and Airshed Management',
      pageNumber: 'Page 122 – 128',
      keyExcerpt: 'Secondary particulate formation requires a broad airshed governance model spanning rural agricultural ammonia and urban fossil fuels.'
    },
    eliminationTip: 'The passage shows that urban PM2.5 comes partly from rural/agricultural ammonia, so urban solutions must tackle regional precursor emissions (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'PM2.5', 'Air Pollution', 'Secondary Aerosols', 'Airshed Management']
  },
  {
    id: 'pyq-2018-csat-20',
    subject: 'csat_quant',
    topic: 'Simple Interest: Multiplier Property',
    subTopic: 'Sum Doubling and Multiplying Over Time',
    question: 'A sum of money doubles itself in 5 years at simple interest. In how many years will it become 8 times of itself at the same rate of simple interest? (UPSC CSAT 2018)',
    options: [
      '20 years',
      '25 years',
      '35 years',
      '40 years'
    ],
    correctAnswer: 2,
    explanation: '1. Let the principal sum be P.\n   - When the sum doubles in 5 years, the Amount A = 2P.\n   - Simple Interest earned (SI) = A - P = 2P - P = P.\n   - So, P interest is earned in 5 years.\n\n2. Rate of interest r:\n   SI = (P × r × t) / 100\n   P = (P × r × 5) / 100 => 5r = 100 => r = 20% per annum.\n\n3. Now we want the sum to become 8 times of itself:\n   - New Amount A = 8P\n   - Simple Interest needed = A - P = 8P - P = 7P.\n\n4. Since P interest is earned every 5 years:\n   Time required to earn 7P interest = 7 × 5 = 35 years.\n\n(A common trap is assuming compound interest where doubling takes 5, 4x takes 10, 8x takes 15 years. Under SIMPLE interest, each interest increment of P takes 5 years; so 7P interest takes 7 × 5 = 35 years).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 21: Simple Interest',
      pageNumber: 'Page 465 – 472',
      keyExcerpt: 'In simple interest, (n₁ - 1)/t₁ = (n₂ - 1)/t₂. Here (2 - 1)/5 = (8 - 1)/t₂ => 1/5 = 7/t₂ => t₂ = 35 years.'
    },
    eliminationTip: 'Direct formula for SI: (n₁ - 1)/t₁ = (n₂ - 1)/t₂ => (2 - 1)/5 = (8 - 1)/t => 1/5 = 7/t => t = 35 years.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Simple Interest', 'Sum Doubling', 'Multiplier Formula', 'Quant']
  },
  {
    id: 'pyq-2018-csat-21',
    subject: 'csat_reasoning',
    topic: 'Calendars: Leap Year Properties',
    subTopic: 'First and Last Day of a Leap Year',
    question: 'If the 1st of January of a leap year was a Sunday, what day of the week was the 31st of December of that same year? (UPSC CSAT 2018)',
    options: [
      'Sunday',
      'Monday',
      'Tuesday',
      'Saturday'
    ],
    correctAnswer: 1,
    explanation: '1. A leap year contains 366 days.\n2. The number of days between 1st January and 31st December of the same year (excluding 1st January and including 31st December) is:\n   Number of elapsed days = 366 - 1 = 365 days.\n\n3. Divide 365 by 7 to determine odd days:\n   365 = 52 weeks + 1 odd day.\n\n4. Therefore, the day on 31st December is 1 day ahead of the day on 1st January:\n   Day = Sunday + 1 day = MONDAY.\n\n(Key rule: In an ordinary non-leap year of 365 days, 31st December falls on the SAME day of the week as 1st January. In a LEAP year of 366 days, 31st December falls on the NEXT day following 1st January).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 26: Calendar',
      pageNumber: 'Page 536 – 542',
      keyExcerpt: 'In a leap year, the year ends on the day next to that on which it began. If 1 Jan is Sunday, 31 Dec is Monday.'
    },
    eliminationTip: 'In a leap year, 31st Dec is always 1 day ahead of 1st Jan (due to 29th Feb). Sunday + 1 = Monday.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Calendar', 'Leap Year', 'Odd Days', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-22',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Gender and the Digital Divide',
    subTopic: 'Smartphone Ownership and Economic Mobility in Women',
    question: 'Read the following passage:\n\n"The proliferation of low-cost mobile internet services has revolutionized financial transactions and agricultural information dissemination across developing economies. Yet the gender digital divide remains acute: women in rural areas are thirty-three percent less likely than men to own a smartphone and nearly sixty percent less likely to access mobile internet. Deep-seated patriarchal socio-cultural norms frequently restrict female ownership of personal digital devices under the patriarchal pretext of moral policing. By cutting women off from digital financial services, government welfare direct benefit transfers, and remote digital entrepreneurship, this technological exclusion entrenches female economic dependency."\n\nWhich among the following is the most logical and rational inference from the passage? (UPSC CSAT 2018)',
    options: [
      'Digital technology expansion automatically and completely resolves gender inequality without policy interventions.',
      'Closing the gender digital divide requires confronting socio-cultural barriers to ensure equitable female access to economic and digital opportunities.',
      'Women in rural areas have zero interest in using internet technologies.',
      'Mobile phones should be banned across rural villages to maintain social traditions.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that patriarchal norms restrict women\'s access to smartphones and the internet, undermining their financial autonomy and economic mobility. Hence Option (b) is the direct, rational inference.\nOptions (a), (c), and (d) are contradicted by the text or absurd.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 6: Gender, Technology and Social Transformation',
      pageNumber: 'Page 142 – 148',
      keyExcerpt: 'Overcoming the gender digital divide requires tackling patriarchal norms to unlock economic opportunities for rural women.'
    },
    eliminationTip: 'The passage argues that cultural barriers restrict female smartphone access and harm economic autonomy; closing this divide is essential (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Gender Digital Divide', 'Financial Inclusion', 'Women Empowerment']
  },
  {
    id: 'pyq-2018-csat-23',
    subject: 'csat_quant',
    topic: 'Mixtures and Alligations: Combining Vessels',
    subTopic: 'Equal Quantities of Two Mixtures Poured Together',
    question: 'Two equal-sized vessels are filled with mixtures of milk and water. In the first vessel, the ratio of milk to water is 3 : 2, and in the second vessel, the ratio of milk to water is 4 : 1. If the contents of both vessels are poured into a larger container, what will be the ratio of milk to water in the resulting mixture? (UPSC CSAT 2018)',
    options: [
      '7 : 3',
      '7 : 5',
      '5 : 2',
      '11 : 4'
    ],
    correctAnswer: 0,
    explanation: '1. Let the capacity of each vessel be V litres (both are equal-sized).\n\n2. In Vessel 1 (Ratio 3 : 2, total parts = 5):\n   - Quantity of Milk = (3 / 5) V\n   - Quantity of Water = (2 / 5) V\n\n3. In Vessel 2 (Ratio 4 : 1, total parts = 5):\n   - Quantity of Milk = (4 / 5) V\n   - Quantity of Water = (1 / 5) V\n\n4. When poured into the larger container:\n   - Total Milk = (3 / 5) V + (4 / 5) V = (7 / 5) V\n   - Total Water = (2 / 5) V + (1 / 5) V = (3 / 5) V\n\n5. Ratio of Milk to Water in the new mixture:\n   Ratio = [(7 / 5) V] : [(3 / 5) V] = 7 : 3.\n\nTherefore, the resulting ratio of milk to water is 7 : 3.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 20: Alligation or Mixture',
      pageNumber: 'Page 440 – 446',
      keyExcerpt: 'When equal volumes are combined: Total Milk = 3/5 + 4/5 = 7/5. Total Water = 2/5 + 1/5 = 3/5. Ratio = 7 : 3.'
    },
    eliminationTip: 'Since both vessels have 5 parts in total: Milk = 3 + 4 = 7; Water = 2 + 1 = 3. Ratio is directly 7 : 3.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Mixtures', 'Ratios', 'Two Vessels', 'Quant']
  },
  {
    id: 'pyq-2018-csat-24',
    subject: 'csat_reasoning',
    topic: 'Cubes and Dice: Net of a Dice',
    subTopic: 'Identifying Opposite Faces on an Unfolded Cube',
    question: 'When a standard cubic die is unfolded into a flat cross-shaped net, alternate faces in the same row or column are opposite to each other. If in a flat strip of 4 vertical squares the faces are numbered from top to bottom as 1, 2, 3, and 4, and the two lateral wing faces attached to square 2 are 5 (on the left) and 6 (on the right), which face is opposite to face 2? (UPSC CSAT 2018)',
    options: [
      '3',
      '4',
      '5',
      '6'
    ],
    correctAnswer: 1,
    explanation: 'Standard geometric rule for folding an unfolded cube net:\n1. In any continuous straight strip (row or column), ALTERNATE FACES (separated by exactly one face) fold up to become OPPOSITE FACES.\n2. In the vertical strip of 4 squares: [1, 2, 3, 4]:\n   - Face 1 and Face 3 are alternate faces => Face 1 is opposite Face 3.\n   - Face 2 and Face 4 are alternate faces => Face 2 is opposite Face 4.\n3. The two lateral wings attached on opposite sides fold up to face each other:\n   - Face 5 and Face 6 are opposite to each other.\n\nTherefore, the face opposite to Face 2 is Face 4.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 27: Cubes and Dice (Unfolded Cube Nets)',
      pageNumber: 'Page 552 – 558',
      keyExcerpt: 'In a linear net of squares, alternate faces fold into opposite faces: 1 is opposite 3, 2 is opposite 4, and 5 is opposite 6.'
    },
    eliminationTip: 'In any straight strip of 4 faces, alternate faces are opposite: 1 is opposite 3, and 2 is opposite 4.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Cubes and Dice', 'Unfolded Net', 'Opposite Faces', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-25',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Soil Health & Organic Carbon',
    subTopic: 'Chemical NPK Fertilizers vs Soil Microbiome Depletion',
    question: 'Read the following passage:\n\n"The relentless pursuit of cereal crop yields through heavy application of subsidized synthetic nitrogen, phosphorus, and potassium (NPK) chemical fertilizers without replenishing farmyard manure or organic crop residues has depleted soil organic carbon (SOC) levels across the Indo-Gangetic plains to catastrophic lows of under 0.3 percent. Organic carbon serves as the primary biological substrate that nourishes beneficial soil mycorrhizae and bacteria, maintains soil aggregate porosity, and enables moisture retention. In its absence, chemically saturated soils harden into compacted, biologically dead crusts, demanding increasingly expensive doses of fertilizer to produce diminishing marginal yields."\n\nWhich of the following is the most crucial message conveyed by the passage? (UPSC CSAT 2018)',
    options: [
      'Chemical NPK fertilizers should be applied in exponentially increasing quantities every season.',
      'Restoring soil organic carbon through organic matter replenishment is essential to revitalize soil biological health and ensure agricultural sustainability.',
      'Soil organic carbon has no influence on moisture retention or crop yields.',
      'Compacted soil crusts produce the highest agricultural productivity.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explains that excessive chemical fertilizers without organic matter deplete soil organic carbon, turning soils into biologically dead crusts with declining yields, highlighting the necessity of replenishing organic carbon. Hence Option (b) captures the crucial message.\nOptions (a), (c), and (d) are contradicted by the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Agriculture, Soil Health and Ecological Fertility',
      pageNumber: 'Page 126 – 132',
      keyExcerpt: 'Depletion of soil organic carbon damages microbial life and soil structure; replenishing organic matter is vital for sustainable farming.'
    },
    eliminationTip: 'The author shows that chemical fertilizers have depleted soil carbon and damaged soil biology, making organic matter restoration essential (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Soil Organic Carbon', 'NPK Fertilizers', 'Sustainable Agriculture']
  },
  {
    id: 'pyq-2018-csat-26',
    subject: 'csat_quant',
    topic: 'Mensuration: 2D Geometry',
    subTopic: 'Area of Square Constructed on Diagonal of Another Square',
    question: 'A square is drawn with its side equal to the diagonal of an original square. What is the ratio of the area of the original square to the area of the new square? (UPSC CSAT 2018)',
    options: [
      '1 : 2',
      '1 : 4',
      '1 : √2',
      '2 : 1'
    ],
    correctAnswer: 0,
    explanation: '1. Let the side of the original square be a.\n   - Area of the original square A₁ = a².\n\n2. By the Pythagorean theorem, the length of the diagonal (d) of the original square is:\n   d = √(a² + a²) = √(2a²) = a√2.\n\n3. The new square is constructed with its side equal to this diagonal d:\n   - Side of the new square s = a√2.\n   - Area of the new square A₂ = s² = (a√2)² = 2a².\n\n4. Ratio of the area of the original square to the new square:\n   Ratio = A₁ : A₂ = a² : 2a² = 1 : 2.\n\nTherefore, the ratio of their areas is 1 : 2.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 24: Area of Plane Figures (Squares and Diagonals)',
      pageNumber: 'Page 515 – 522',
      keyExcerpt: 'Diagonal of square of side a is a√2. Area of square on diagonal is (a√2)² = 2a². Ratio = a² : 2a² = 1 : 2.'
    },
    eliminationTip: 'Diagonal d = a√2. Area of square on diagonal = d² = 2a². Ratio = a² / 2a² = 1/2 (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Mensuration', 'Square Diagonal', 'Area Ratio', 'Quant']
  },
  {
    id: 'pyq-2018-csat-27',
    subject: 'csat_reasoning',
    topic: 'Number Series: Pattern Completion',
    subTopic: 'Increasing Multiplicative and Additive Patterns',
    question: 'What is the next number in the following sequence?\n\n3, 8, 18, 38, 78, ? (UPSC CSAT 2018)',
    options: [
      '148',
      '156',
      '158',
      '168'
    ],
    correctAnswer: 2,
    explanation: 'Examine the pattern linking consecutive terms in the series:\nMethod 1 (Multiplication and addition):\n- 3 × 2 + 2 = 6 + 2 = 8\n- 8 × 2 + 2 = 16 + 2 = 18\n- 18 × 2 + 2 = 36 + 2 = 38\n- 38 × 2 + 2 = 76 + 2 = 78\n\nThe rule is: Next Term = (Current Term × 2) + 2.\nTherefore, the missing number = 78 × 2 + 2 = 156 + 2 = 158.\n\nMethod 2 (Differences between consecutive terms):\n- 8 - 3 = 5\n- 18 - 8 = 10\n- 38 - 18 = 20\n- 78 - 38 = 40\n\nThe differences double each time: 5, 10, 20, 40...\nThe next difference must be 40 × 2 = 80.\nMissing term = 78 + 80 = 158.\n\nBoth methods uniquely give 158.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 1: Series Completion',
      pageNumber: 'Page 20 – 26',
      keyExcerpt: 'Differences double: +5, +10, +20, +40, +80. Alternatively, multiply by 2 and add 2. 78 + 80 = 158.'
    },
    eliminationTip: 'Differences double: 5, 10, 20, 40, so the next difference is 80. 78 + 80 = 158.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Number Series', 'Pattern Completion', 'Doubling Differences', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-28',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Digital Democracy & Echo Chambers',
    subTopic: 'Algorithmic Content Curation and Political Polarization',
    question: 'Read the following passage:\n\n"The business architecture of social media networks is engineered to maximize user engagement metrics, which algorithmic systems achieve by prioritizing sensationalized, inflammatory, and hyper-partisan content over nuanced deliberative debate. Users are sequestered inside algorithmic echo chambers and epistemic filter bubbles where their existing prejudices are continuously confirmed and amplified, while contrarian factual evidence is systematically filtered out. This polarization fragments the shared factual consensus necessary for democratic compromise, replacing rational civic discourse with existential political tribalism."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2018)',
    options: [
      'Social media algorithms foster thoughtful consensus and mutual understanding across diverse political groups.',
      'Algorithmic content curation that maximizes engagement threatens democratic stability by intensifying political polarization and destroying common factual grounds.',
      'All internet social networking platforms should be abolished permanently.',
      'Echo chambers enhance democratic governance by eliminating opposing political views.'
    ],
    correctAnswer: 1,
    explanation: 'The passage argues that social media algorithms maximize engagement through inflammatory content and filter bubbles, eroding shared factual reality and fueling toxic political tribalism. Hence Option (b) is the direct, logical corollary.\nOptions (a), (c), and (d) are contradicted by the text or absurd.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Media, Technology and Democratic Deliberation',
      pageNumber: 'Page 114 – 120',
      keyExcerpt: 'Algorithmic engagement optimization fuels echo chambers and political polarization, undermining democratic debate.'
    },
    eliminationTip: 'The passage highlights how algorithms prioritizing outrage polarize society and subvert democratic compromise (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Social Media Algorithms', 'Polarization', 'Echo Chambers', 'Democracy']
  },
  {
    id: 'pyq-2018-csat-29',
    subject: 'csat_quant',
    topic: 'Permutations and Combinations',
    subTopic: 'Forming a Committee with Gender Constraints',
    question: 'A committee of 3 members is to be selected from a group of 4 men and 3 women. In how many different ways can this committee be formed if it must include at least one woman? (UPSC CSAT 2018)',
    options: [
      '18',
      '31',
      '35',
      '42'
    ],
    correctAnswer: 1,
    explanation: '1. Total number of available persons = 4 Men + 3 Women = 7 persons.\n   Total ways to select any 3 persons from 7 without any constraint:\n   Total ways = 7C3 = (7 × 6 × 5) / (3 × 2 × 1) = 35 ways.\n\n2. We require the committee to contain AT LEAST ONE WOMAN.\n   The complementary (unfavourable) case is selecting a committee with ZERO WOMEN (i.e. ALL 3 MEMBERS ARE MEN):\n   - Ways to choose 3 men from 4 men = 4C3 = 4 ways.\n\n3. Number of favourable ways (at least one woman):\n   Favourable ways = Total ways - Ways with zero women\n   Favourable ways = 35 - 4 = 31 ways.\n\n(Alternative verification by cases:\n- 1 woman & 2 men: 3C1 × 4C2 = 3 × 6 = 18\n- 2 women & 1 man: 3C2 × 4C1 = 3 × 4 = 12\n- 3 women & 0 men: 3C3 × 4C0 = 1 × 1 = 1\nTotal = 18 + 12 + 1 = 31 ways).\n\nTherefore, 31 different committees can be formed.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 30: Permutations and Combinations',
      pageNumber: 'Page 618 – 625',
      keyExcerpt: 'Complementary combination method: Total ways (7C3 = 35) minus all-men committees (4C3 = 4) = 31 ways.'
    },
    eliminationTip: 'Total committees = 7C3 = 35. Committees with NO women (all 3 men) = 4C3 = 4. At least one woman = 35 - 4 = 31.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Combinations', 'Committee Selection', 'At Least One', 'Quant']
  },
  {
    id: 'pyq-2018-csat-30',
    subject: 'csat_reasoning',
    topic: 'Venn Diagrams: Inclusion-Exclusion Principle',
    subTopic: 'Three Overlapping Subjects',
    question: 'In a college batch of 100 students:\n- 50 students study Physics\n- 40 students study Chemistry\n- 30 students study Mathematics\n- 15 study both Physics and Chemistry\n- 12 study both Physics and Mathematics\n- 10 study both Chemistry and Mathematics\n- 5 students study all three subjects.\n\nHow many students study NONE of these three subjects? (UPSC CSAT 2018)',
    options: [
      '10',
      '12',
      '15',
      '18'
    ],
    correctAnswer: 1,
    explanation: '1. Standard Principle of Inclusion-Exclusion for three sets A, B, and C:\n   n(A ∪ B ∪ C) = n(A) + n(B) + n(C) - n(A ∩ B) - n(A ∩ C) - n(B ∩ C) + n(A ∩ B ∩ C)\n\n2. Given values:\n   - n(P) = 50\n   - n(C) = 40\n   - n(M) = 30\n   - n(P ∩ C) = 15\n   - n(P ∩ M) = 12\n   - n(C ∩ M) = 10\n   - n(P ∩ C ∩ M) = 5\n\n3. Calculate students studying at least one subject:\n   n(P ∪ C ∪ M) = (50 + 40 + 30) - (15 + 12 + 10) + 5\n   n(P ∪ C ∪ M) = 120 - 37 + 5\n   n(P ∪ C ∪ M) = 83 + 5 = 88 students.\n\n4. Students studying NONE of the three subjects:\n   None = Total students - n(P ∪ C ∪ M)\n   None = 100 - 88 = 12 students.\n\nTherefore, exactly 12 students study none of the three subjects.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 9: Venn Diagrams',
      pageNumber: 'Page 210 – 218',
      keyExcerpt: 'Inclusion-exclusion formula: n(A ∪ B ∪ C) = 50 + 40 + 30 - 15 - 12 - 10 + 5 = 88. None = 100 - 88 = 12.'
    },
    eliminationTip: 'Union = 120 - 37 + 5 = 88. Total = 100. None = 100 - 88 = 12.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Venn Diagrams', 'Inclusion Exclusion', 'Set Theory', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-31',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Marine Conservation & Ghost Gear',
    subTopic: 'Abandoned Nylon Fishing Nets in Deep Pelagic Ecosystems',
    question: 'Read the following passage:\n\n"Abandoned, lost, or discarded commercial fishing gear—colloquially termed \'ghost gear\'—constitutes over ten percent of all marine plastic waste by volume and nearly seventy percent of all macro-plastics floating in offshore oceanic gyres. Manufactured from high-tensile, non-biodegradable synthetic polymers like nylon and polypropylene, these colossal driftnets and crab traps continue to silently snare, mutilate, and drown marine turtles, cetaceans, and pelagic sharks for decades. Furthermore, as bottom trawling nets drag across deep-water seamounts, they pulverize ancient cold-water coral reefs, destroying fragile deep-sea spawning habitats that require millennia to regenerate."\n\nWhich among the following is the most logical and rational inference from the passage? (UPSC CSAT 2018)',
    options: [
      'Ghost fishing gear rapidly biodegrades in seawater within a few weeks without harming marine life.',
      'Abandoned synthetic fishing gear poses prolonged and catastrophic threats to marine fauna and deep-sea benthic habitats.',
      'Commercial fishing nets are made entirely of natural cotton and silk fibres.',
      'Deep-water coral reefs grow rapidly and completely regenerate within a few months.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explains that non-biodegradable synthetic ghost nets snare marine turtles and mammals for decades while destroying slow-growing deep coral reefs. Hence Option (b) is the direct, rational inference.\nOptions (a), (c), and (d) are factually contradicted by the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Marine Conservation and Plastic Pollution',
      pageNumber: 'Page 120 – 126',
      keyExcerpt: 'Synthetic ghost gear persists for decades, continuously snaring marine wildlife and pulverizing fragile benthic coral habitats.'
    },
    eliminationTip: 'The passage highlights that non-biodegradable ghost gear continuously drowns marine life and destroys ancient cold-water coral habitats (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Ghost Gear', 'Marine Plastics', 'Coral Reefs']
  },
  {
    id: 'pyq-2018-csat-32',
    subject: 'csat_quant',
    topic: 'Averages: Age Problems',
    subTopic: 'Average Age of a Family After Birth of a Child',
    question: 'Three years ago, the average age of a family of 5 members was 17 years. A baby having been born in the family, the average age of the family is the same today. What is the present age of the baby? (UPSC CSAT 2018)',
    options: [
      '1 year',
      '2 years',
      '3 years',
      '4 years'
    ],
    correctAnswer: 1,
    explanation: '1. Three years ago, the average age of 5 members was 17 years:\n   Total age of 5 members 3 years ago = 5 × 17 = 85 years.\n\n2. Over the last 3 years, each of the 5 original members has grown 3 years older:\n   Total age of the 5 original members TODAY = 85 + (5 × 3) = 85 + 15 = 100 years.\n\n3. Today, a baby has been born, so the family now has 6 members (5 original + 1 baby).\n   The problem states that the average age of the family today is THE SAME (i.e. 17 years):\n   Total age of all 6 members today = 6 × 17 = 102 years.\n\n4. Present age of the baby:\n   Age of baby = (Total age of 6 members today) - (Total age of 5 original members today)\n   Age of baby = 102 - 100 = 2 years.\n\nTherefore, the present age of the baby is 2 years.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 6: Problems on Averages',
      pageNumber: 'Page 145 – 152',
      keyExcerpt: 'Present sum of 5 members = 85 + 15 = 100. Present sum of 6 members = 6 × 17 = 102. Baby\'s age = 102 - 100 = 2 years.'
    },
    eliminationTip: '5 members grew by 3 years each (+15 years) to reach 100 years. New family of 6 averages 17 = 102 years. Baby = 102 - 100 = 2 years.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Averages', 'Age Problems', 'Family Average', 'Quant']
  },
  {
    id: 'pyq-2018-csat-33',
    subject: 'csat_reasoning',
    topic: 'Clocks: Coinciding of Hands',
    subTopic: 'Number of Times Clock Hands Coincide in 24 Hours',
    question: 'How many times do the hands of a clock coincide (overlap) with each other in a complete day (24 hours)? (UPSC CSAT 2018)',
    options: [
      '20 times',
      '22 times',
      '24 times',
      '44 times'
    ],
    correctAnswer: 1,
    explanation: '1. In every 1 hour, the minute hand and the hour hand coincide once, EXCEPT between 11 o\'clock and 1 o\'clock:\n   - Between 11:00 and 1:00 (a 2-hour span), the two hands coincide only ONCE, exactly at 12:00.\n\n2. Consequently, in a 12-hour period:\n   Number of coincidences = 12 - 1 = 11 times.\n\n3. In a full day of 24 hours (which consists of two 12-hour cycles):\n   Total coincidences = 11 × 2 = 22 times.\n\n(Similarly, the hands are opposite each other (180°) 22 times a day, and at right angles (90°) 44 times a day).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 25: Clocks',
      pageNumber: 'Page 528 – 534',
      keyExcerpt: 'The hands of a clock coincide 11 times in every 12 hours (missing the 11–1 overlap except at 12:00). In 24 hours, they coincide 22 times.'
    },
    eliminationTip: 'Classic clock theorem: Hands coincide 11 times in 12 hours, hence 22 times in 24 hours (never 24).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Clocks', 'Coinciding Hands', '24 Hours', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-34',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Fiscal Deficits & Public Debt',
    subTopic: 'Debt-to-GDP Ratio and Capital vs Revenue Expenditure',
    question: 'Read the following passage:\n\n"Public borrowing by sovereign governments is not inherently detrimental to macroeconomic health; its economic impact depends fundamentally on whether borrowed capital is channeled into productive capital asset formation or dissipated into unviable recurrent revenue subsidies. Borrowing to finance high-multiplier infrastructure—such as high-speed electrified railway freight corridors, port dredging, and national fiber-optic backbones—crowds in private corporate investment, lowers logistical friction, and accelerates long-term economic growth, generating expanded future tax revenues to service the debt comfortably. Conversely, borrowing to finance unproductive administrative consumption and un-targeted subsidies expands debt-servicing burdens without augmenting productive capacity."\n\nWhich of the following is the most logical and rational assumption that can be made from the passage? (UPSC CSAT 2018)',
    options: [
      'All public borrowing leads inevitably to sovereign default and hyperinflation.',
      'The economic sustainability of public debt depends on whether borrowings fund growth-enhancing capital assets rather than unproductive recurrent consumption.',
      'Sovereign governments should never build railway freight corridors or national broadband networks.',
      'Private companies always invest in infrastructure without any need for public sector involvement.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly contrasts borrowing for capital infrastructure (which spurs growth and tax revenue) with borrowing for recurrent consumption subsidies (which creates debt burdens), concluding that the quality of expenditure dictates fiscal sustainability. Hence Option (b) is the logical assumption.\nOptions (a), (c), and (d) directly contradict the text or make absurd claims.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Public Finance and Macroeconomic Governance',
      pageNumber: 'Page 90 – 96',
      keyExcerpt: 'Debt sustainability is determined by the productive quality of public expenditure—capital creation vs revenue consumption.'
    },
    eliminationTip: 'The passage explicitly shows that borrowing for productive infrastructure is sustainable, whereas borrowing for consumption creates burdens (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Public Debt', 'Capital Expenditure', 'Fiscal Deficit', 'Macroeconomics']
  },
  {
    id: 'pyq-2018-csat-35',
    subject: 'csat_quant',
    topic: 'Pipes and Cisterns: Tank with Leak',
    subTopic: 'Inlet Pipe and Bottom Leakage Calculation',
    question: 'A tap can fill an empty cistern in 6 hours. Because of a leak in the bottom of the cistern, it now takes 8 hours to fill it. If the cistern is full, in how many hours will the leak alone empty it? (UPSC CSAT 2018)',
    options: [
      '14 hours',
      '18 hours',
      '20 hours',
      '24 hours'
    ],
    correctAnswer: 3,
    explanation: '1. Filling rate of the tap alone:\n   Tap rate = + 1 / 6 of cistern per hour.\n\n2. Net filling rate of tap and leak operating together:\n   Net rate = + 1 / 8 of cistern per hour.\n\n3. Let the emptying rate of the leak alone be L per hour:\n   Tap Rate - Leak Rate = Net Rate\n   (1 / 6) - L = 1 / 8\n   L = (1 / 6) - (1 / 8)\n\n4. Find the common denominator of 6 and 8:\n   LCM(6, 8) = 24.\n   L = (4 / 24) - (3 / 24) = 1 / 24 of cistern per hour.\n\n5. Since the leak empties 1/24 of the cistern in 1 hour, it will empty the full cistern in:\n   Time = 1 / (1 / 24) = 24 hours.\n\nTherefore, the leak alone will empty the full cistern in 24 hours.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 16: Pipes and Cisterns',
      pageNumber: 'Page 382 – 388',
      keyExcerpt: 'Leak rate = (1/6) - (1/8) = (4 - 3)/24 = 1/24. Time to empty full cistern = 24 hours.'
    },
    eliminationTip: 'Direct formula: xy / (y - x) = (6 × 8) / (8 - 6) = 48 / 2 = 24 hours.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Pipes and Cisterns', 'Leak in Tank', 'Emptying Time', 'Quant']
  },
    {
    id: "pyq-2018-csat-36",
    subject: "csat_reasoning",
    topic: "Critical Reasoning",
    subTopic: "Statement and Assumptions: Rural Energy & Agriculture",
    question: "Consider the following statement and assumptions:\n\nStatement: \"The government announced a scheme to install solar-powered agricultural pumps across rural farming belts to provide assured daytime irrigation to farmers.\"\n\nAssumptions:\nI. Farmers in these rural areas currently face hardship in irrigating crops due to erratic and night-time electric grid supply.\nII. Solar radiation is adequately available during daytime hours to power water pumps effectively during cropping seasons.\n\nWhich of the assumptions is/are implicit in the statement? (UPSC CSAT 2018)",
    options: [
      "Only assumption I is implicit",
      "Only assumption II is implicit",
      "Both assumption I and II are implicit",
      "Neither assumption I nor II is implicit"
    ],
    correctAnswer: 2,
    explanation: "Both assumptions are implicit:\n- Assumption I is implicit: Proposing solar pumps specifically to ensure \"daytime irrigation\" addresses an existing deficit—farmers currently receive erratic power, often at night, causing distress.\n- Assumption II is implicit: Launching solar agricultural pumps relies on the fundamental technological presupposition that sufficient sunlight is available during daylight hours to operate the pumps.\nTherefore, both assumption I and assumption II are implicit in the statement.",
    bookReference: {
      bookName: "Analytical Reasoning by M.K. Pandey",
      edition: "Revised Edition",
      chapter: "Statement and Assumptions",
      pageNumber: "Page 80 – 86",
      keyExcerpt: "A policy announcement assumes the feasibility of the technical input and the existence of the problem being solved."
    },
    eliminationTip: "Providing solar pumps for daytime irrigation assumes an electricity problem (I) and daylight feasibility (II). Both are implicit.",
    difficulty: "Easy",
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: "CSAT",
    frequency: 8,
    tags: [
      "UPSC 2018",
      "CSAT",
      "Statement and Assumptions",
      "Solar Energy",
      "Reasoning"
    ]
  },
  {
    id: 'pyq-2018-csat-37',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Self-Help Groups (SHGs) & Financial Agency',
    subTopic: 'Microcredit and Intra-Household Decision-Making',
    question: 'Read the following passage:\n\n"Empirical assessments of women\'s Self-Help Group (SHG) microfinance networks demonstrate that access to microcredit alone does not guarantee structural women\'s empowerment. When microloans are disbursed without concurrent capacity building in market linkage, financial literacy, and asset ownership, male relatives frequently appropriate borrowed funds for patriarchal consumption while women remain legally liable for loan repayment. True financial agency emerges only when microcredit is accompanied by collective federated bargaining power, independent bank account ownership, and ownership of productive agricultural and land assets."\n\nWhich of the following is the most logical and rational inference from the passage? (UPSC CSAT 2018)',
    options: [
      'Microcredit disbursement on its own is sufficient to eliminate all gender inequities.',
      'Meaningful female empowerment requires complementing microcredit with financial literacy, asset ownership, and collective agency to prevent male appropriation.',
      'Self-help groups should be completely disbanded across rural India.',
      'Women are biologically incapable of managing microenterprise finances.'
    ],
    correctAnswer: 1,
    explanation: 'The passage argues that microcredit alone can lead to debt liability without agency if funds are co-opted by male kin; hence credit must be paired with asset ownership, financial skills, and collective bargaining to achieve real empowerment. Hence Option (b) captures this balanced inference.\nOptions (a), (c), and (d) are contradicted by the passage or absurd.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 6: Microfinance, Gender Agency and Rural Development',
      pageNumber: 'Page 146 – 152',
      keyExcerpt: 'Microcredit without financial literacy and asset titles can trap women in debt liability without empowerment.'
    },
    eliminationTip: 'The passage highlights that credit alone is not enough—it must be accompanied by asset ownership and collective bargaining (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Self-Help Groups', 'SHG', 'Microfinance', 'Women Empowerment']
  },
  {
    id: 'pyq-2018-csat-38',
    subject: 'csat_quant',
    topic: 'Number System: Cyclicity and Remainders',
    subTopic: 'Units Digit and Modular Arithmetic',
    question: 'What is the remainder when 2³¹ is divided by 5? (UPSC CSAT 2018)',
    options: [
      '1',
      '2',
      '3',
      '4'
    ],
    correctAnswer: 2,
    explanation: '1. We need to find: 2³¹ mod 5.\n\n2. Method 1 (Fermat\'s Little Theorem / Euler\'s Totient):\n   - Since 5 is a prime number and gcd(2, 5) = 1:\n   - By Fermat\'s Little Theorem: 2⁴ ≡ 1 (mod 5).\n   - (Check: 2⁴ = 16 = 3 × 5 + 1 ≡ 1 mod 5).\n\n3. Express the exponent 31 in terms of multiples of 4:\n   31 = 4 × 7 + 3.\n\n4. Therefore:\n   2³¹ = 2⁴*⁷⁺³ = (2⁴)⁷ × 2³\n   2³¹ ≡ (1)⁷ × 2³ (mod 5)\n   2³¹ ≡ 1 × 8 (mod 5)\n   2³¹ ≡ 8 mod 5 = 3.\n\nMethod 2 (Cyclicity of units digits of powers of 2):\n- 2¹ = 2 (mod 5 = 2)\n- 2² = 4 (mod 5 = 4)\n- 2³ = 8 (mod 5 = 3)\n- 2⁴ = 16 (mod 5 = 1)\n\nCycle repeats every 4 powers. Exponent 31 has remainder 3 when divided by 4 (31 = 4 × 7 + 3).\nThus, the 3rd term in the cycle is 2³ = 8 ≡ 3 (mod 5).\n\nTherefore, the remainder is 3.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Remainders and Fermat\'s Theorem)',
      pageNumber: 'Page 28 – 34',
      keyExcerpt: '2⁴ ≡ 1 mod 5. 2³¹ = (2⁴)⁷ × 2³ ≡ 1 × 8 ≡ 3 mod 5.'
    },
    eliminationTip: '2⁴ = 16 ends in 6, which leaves remainder 1 when divided by 5. 2³¹ = (2⁴)⁷ × 2³ = (1)⁷ × 8 = 8. When 8 is divided by 5, remainder is 3.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Remainders', 'Fermat\'s Little Theorem', 'Cyclicity', 'Number System', 'Quant']
  },
  {
    id: 'pyq-2018-csat-39',
    subject: 'csat_reasoning',
    topic: 'Logic Puzzle: Ordering and Ranking',
    subTopic: 'Race Finish Order Deductions',
    question: 'Four runners P, Q, R and S competed in a 100-metre race.\n- R finished ahead of P.\n- Q finished ahead of S.\n- S finished ahead of R.\n\nWho finished in the second position? (UPSC CSAT 2018)',
    options: [
      'P',
      'Q',
      'R',
      'S'
    ],
    correctAnswer: 3,
    explanation: 'Let us translate the clues into inequality relations representing race finish positions (where 1st is fastest):\n1. "R finished ahead of P":\n   R > P\n\n2. "Q finished ahead of S":\n   Q > S\n\n3. "S finished ahead of R":\n   S > R\n\n4. Combining all three inequalities into a single ordered chain:\n   Q > S > R > P\n\nFinishing order:\n- 1st place: Q (Winner)\n- 2nd place: S\n- 3rd place: R\n- 4th place: P\n\nTherefore, S finished in the SECOND position.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 18: Logic and Sequence Puzzles',
      pageNumber: 'Page 405 – 410',
      keyExcerpt: 'Chain the pairwise inequalities: Q > S > R > P. Second position is S.'
    },
    eliminationTip: 'Inequality chain: Q > S > R > P. The runner in second position is S.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Race Order', 'Ordering Puzzle', 'Inequalities', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-40',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Judicial Delays & Alternative Dispute Resolution',
    subTopic: 'Institutional Arbitration and Commercial Contract Enforcement',
    question: 'Read the following passage:\n\n"India\'s ranking in global ease of doing business indices has historically been constrained by the protracted delays in commercial contract enforcement. With over four crore cases pending across the tiered judicial hierarchy, routine civil breach of contract disputes take up to a decade to reach final appellate resolution. Decongesting courts and unlocking frozen commercial capital requires establishing robust, credible domestic institutional arbitration and commercial mediation mechanisms modeled on international hubs like Singapore and London, supported by statutory timelines and minimal judicial interference in arbitral awards."\n\nWhich of the following is the most logical and rational inference from the passage? (UPSC CSAT 2018)',
    options: [
      'Commercial contract enforcement in Indian courts is currently the fastest in the world.',
      'Promoting institutional arbitration and mediation with minimal judicial interference is vital to expedite commercial disputes and improve the economic investment climate.',
      'All commercial arbitration centres should be placed under the day-to-day administrative control of municipal magistrates.',
      'Civil contract disputes have zero impact on economic investment decisions.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that multi-year court delays harm contract enforcement and freeze capital, concluding that developing credible institutional arbitration and mediation with minimal court interference is essential. Hence Option (b) is the direct, rational inference.\nOptions (a), (c), and (d) are factually contradicted by the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Legal Governance and Commercial Contract Enforcement',
      pageNumber: 'Page 110 – 116',
      keyExcerpt: 'Strengthening institutional arbitration and minimizing judicial interference is essential to overcome court delays in contract enforcement.'
    },
    eliminationTip: 'The passage advocates institutional arbitration and mediation with minimal court interference to solve court backlog in contract disputes (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Judicial Delays', 'Arbitration', 'Contract Enforcement', 'Ease of Doing Business']
  }
];
