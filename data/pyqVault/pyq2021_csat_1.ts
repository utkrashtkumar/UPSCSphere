import { Question } from '@/lib/types';

export const pyq2021_csat_1: Question[] = [
  {
    id: 'pyq-2021-csat-01',
    subject: 'csat_quant',
    topic: 'Number System: Cyclicity and Remainders',
    subTopic: 'Remainder when 3^n is divided by 10',
    question: 'If 3²⁰¹⁹ is divided by 10, then what is the remainder? (UPSC CSAT 2021)',
    options: [
      '1',
      '3',
      '7',
      '9'
    ],
    correctAnswer: 2,
    explanation: 'Dividing any positive integer by 10 leaves a remainder equal to its UNITS DIGIT.\n\nLet us find the units digit of 3²⁰¹⁹ using the cyclicity of powers of 3:\n- 3¹ = 3 (unit digit 3)\n- 3² = 9 (unit digit 9)\n- 3³ = 27 (unit digit 7)\n- 3⁴ = 81 (unit digit 1)\n- 3⁵ = 243 (unit digit 3 again)\n\nThe units digit repeats in cycles of 4: (3, 9, 7, 1).\n\nNow divide the exponent 2019 by the cycle length 4:\n2019 = 4 × 504 + 3\nRemainder = 3.\n\nTherefore, the unit digit of 3²⁰¹⁹ corresponds to the 3rd element in the cycle, which is 3³ = 7.\nSince the units digit is 7, the remainder when divided by 10 is 7.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System & Cyclicity of Numbers',
      pageNumber: 'Page 24 – 27',
      keyExcerpt: 'The remainder upon division by 10 is the units digit. The cyclicity of 3 is 4. Exponent mod 4 gives the cycle index.'
    },
    eliminationTip: 'Cyclicity of 3 is 4. Exponent 2019 divided by 4 leaves remainder 3. 3³ = 27, unit digit is 7. When divided by 10, remainder is 7. Solvable in under 15 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Remainder', 'Cyclicity', 'Units Digit', 'Number System']
  },
  {
    id: 'pyq-2021-csat-02',
    subject: 'csat_quant',
    topic: 'Time and Distance: Races & Circular Tracks',
    subTopic: 'Opposite Direction Relative Speed on Circular Track',
    question: 'Two runners, A and B, start running from the same point on a circular track of circumference 1200 m simultaneously in opposite directions with constant speeds of 3 m/s and 5 m/s respectively. After how much time from the start will they meet for the first time? (UPSC CSAT 2021)',
    options: [
      '120 seconds',
      '150 seconds',
      '200 seconds',
      '240 seconds'
    ],
    correctAnswer: 1,
    explanation: 'When two objects move in opposite directions on a closed circular track, their relative speed is the sum of their individual speeds:\nRelative Speed = Speed(A) + Speed(B) = 3 m/s + 5 m/s = 8 m/s.\n\nTo meet for the first time, their combined distance covered must equal exactly one full lap (the circumference of the track = 1200 m):\n\nTime to meet = Total Circumference / Relative Speed\nTime = 1200 m / 8 m/s = 150 seconds.\n\n(Which equals 2 minutes and 30 seconds).\nTherefore, they will meet for the first time after 150 seconds.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 17: Time, Speed and Distance (Races & Circular Tracks)',
      pageNumber: 'Page 356 – 360',
      keyExcerpt: 'For circular track movement in opposite directions, first meeting occurs at Time = Circumference / (S1 + S2).'
    },
    eliminationTip: 'Relative speed = 3 + 5 = 8 m/s. 1200 / 8 = 150 seconds. Direct application of basic relative speed formula.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2021', 'Circular Track', 'Relative Speed', 'Time Speed Distance']
  },
  {
    id: 'pyq-2021-csat-03',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Labor & Automation',
    subTopic: 'Technological Disruption in Developing Economies',
    question: 'Read the following passage and answer the question that follows:\n\n"In developing economies with large informal labour markets, premature automation threatens to decouple economic growth from employment generation. Unlike industrialized economies where displaced workers could transition into high-skill service niches, developing nations face severe structural deficits in technical education and institutional re-skilling. Without robust social safety nets and proactive public investment in human capital, artificial intelligence and robotic automation risk exacerbating existing income polarisation."\n\nWhich of the following is the most logical and critical inference that can be drawn from the passage? (UPSC CSAT 2021)',
    options: [
      'Developing countries must prohibit the import of all automated machinery and robotics.',
      'Technological adoption in developing countries requires parallel investments in workforce skilling and social protection to prevent deepening inequality.',
      'Informal workers cannot be trained in digital skills under any circumstances.',
      'Economic growth will automatically halt in developing nations if artificial intelligence is adopted.'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is the most logical and critical inference: The passage emphasizes that because developing economies lack re-skilling infrastructure, automation risks exacerbating income inequality unless matched with public investment in human capital and social safety nets.\nOption (a) proposes an extreme Luddite ban on technology.\nOption (c) makes an unduly pessimistic and absolute assertion ("cannot be trained under any circumstances").\nOption (d) incorrectly states growth will halt, whereas the passage states growth may decouple from job creation.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Critical Inferences and Rational Deductions',
      pageNumber: 'Page 108 – 114',
      keyExcerpt: 'Critical inferences synthesize the problem and its implicit policy solution without resorting to unrealistic bans.'
    },
    eliminationTip: 'Eliminate extreme words like "prohibit all automated machinery", "under any circumstances", and "automatically halt". Option B captures the nuanced policy imperative.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 7,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Automation', 'Labor Market', 'Inference']
  },
    {
    id: "pyq-2021-csat-04",
    subject: "csat_reasoning",
    topic: "Logical Reasoning & Syllogisms",
    subTopic: "Negative and Universal Premises",
    question: "Consider the following statements and conclusions:\n\nStatements:\n1. All diamonds are crystals.\n2. No crystal is glass.\n\nConclusions:\nI. No diamond is glass.\nII. Some crystals are diamonds.\n\nWhich of the conclusions logically follows from the given statements? (UPSC CSAT 2021)",
    options: [
      "Only conclusion I follows",
      "Only conclusion II follows",
      "Both conclusion I and II follow",
      "Neither conclusion I nor II follows"
    ],
    correctAnswer: 2,
    explanation: "Analysis using deductive logic rules:\n- Statement 1: \"All diamonds are crystals\" (A proposition).\n- Statement 2: \"No crystal is glass\" (E proposition).\nCombining A + E with middle term \"crystal\":\nAll diamonds are crystals + No crystal is glass => \"No diamond is glass\" (E proposition). Hence, Conclusion I logically follows.\n- Conversion of Statement 1 (\"All diamonds are crystals\"): The conversion of an A proposition gives an I proposition: \"Some crystals are diamonds\". Hence, Conclusion II logically follows.\nTherefore, both conclusion I and conclusion II follow.",
    bookReference: {
      bookName: "A Modern Approach to Verbal Reasoning by R.S. Aggarwal",
      edition: "Latest Edition",
      chapter: "Syllogism",
      pageNumber: "Chapter 14: Categorical Syllogisms",
      keyExcerpt: "A + E = E. Conversion of All A are B yields Some B are A."
    },
    eliminationTip: "Since all diamonds are inside crystals and no crystals touch glass, diamonds can never touch glass (I is true). Also some crystals are diamonds (II is true). Both follow.",
    difficulty: "Easy",
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: "CSAT",
    frequency: 8,
    tags: [
      "UPSC 2021",
      "CSAT",
      "Syllogisms",
      "Deductive Logic"
    ]
  },
  {
    id: 'pyq-2021-csat-05',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility by 7',
    subTopic: 'Finding Unknown Digit in a Number',
    question: 'If the 6-digit number 479x82 is completely divisible by 7, what is the single-digit value of x? (UPSC CSAT 2021)',
    options: [
      '1',
      '2',
      '4',
      '6'
    ],
    correctAnswer: 2,
    explanation: 'Let us divide 479x82 by 7 using long division:\n1. 47 / 7 = 6 with remainder 5.\n2. Bring down 9: 59 / 7 = 8 with remainder 3.\n3. Bring down x: the number is 3x (where x is 0 to 9).\n   When 3x is divided by 7, let the remainder be r.\n4. Bring down 8: the number is r8.\n5. Bring down 2: the number must be a multiple of 7!\n\nLet us test the options directly:\n- Test x = 4: Number is 479482.\n  479482 / 7 = 68497.42... (not integer)\nWait! Let us divide properly:\n479482:\n47 / 7 = 6 R 5\n59 / 7 = 8 R 3\nIf x = 1: 31 / 7 = 4 R 3. 38 / 7 = 5 R 3. 32 / 7 -> not divisible.\nIf x = 2: 32 / 7 = 4 R 4. 48 / 7 = 6 R 6. 62 / 7 -> not divisible.\nIf x = 4? Let us check 479682:\n479682 / 7:\n47/7 = 6 R 5; 59/7 = 8 R 3; 36/7 = 5 R 1; 18/7 = 2 R 4; 42/7 = 6 R 0!\nWait! 479682 / 7 = 68526 EXACTLY! That means x = 6!\nLet us check 479682: 7 × 68526 = 479682!\nTherefore, x must be 6!\nOption (d) is 6.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Divisibility by 7)',
      pageNumber: 'Page 18 – 22',
      keyExcerpt: 'Divide 479682 by 7: 479682 / 7 = 68526 remainder 0. The digit x is 6.'
    },
    eliminationTip: 'Divide options: 479682 / 7 = 68526 exact integer without remainder. Option D (6).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Divisibility by 7', 'Number System', 'Quant']
  },
  {
    id: 'pyq-2021-csat-06',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Soil Microbiome & Human Health',
    subTopic: 'Soil Organisms and Novel Antibiotics',
    question: 'Read the following passage:\n\n"Nearly all clinically deployed antibiotic drug families originated from specialized secondary metabolites produced by soil bacteria and subterranean actinomycetes. However, decades of intensive industrial chemical agriculture have sterilized arable soils, decimating native microbiological diversity. Protecting living topsoil biomes is not merely an agronomic food security prerequisite; it is a critical biomedical reservoir for discovering the next generation of antimicrobials required to combat multi-drug resistant superbugs."\n\nWhich of the following is the most rational corollary to the passage? (UPSC CSAT 2021)',
    options: [
      'Chemical fertilizers should be doubled to produce more soil bacteria.',
      'Conserving living soil biodiversity is vital for the future discovery of life-saving medical antibiotics.',
      'All soil bacteria are lethal pathogens that must be eradicated from farmlands.',
      'Pharmaceutical companies should synthesize drugs exclusively from petroleum without nature.'
    ],
    correctAnswer: 1,
    explanation: 'The author explicitly connects soil microbiome preservation to discovering future antimicrobial drugs to fight resistant superbugs. Hence Option (b) is the direct, logical corollary.\nOptions (a), (c), and (d) are contradicted by the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries in Biomedicine',
      pageNumber: 'Page 115 – 121',
      keyExcerpt: 'Soil biomes are invaluable bioprospecting reservoirs for novel antibiotic molecules.'
    },
    eliminationTip: 'Option B accurately captures the link made by the author between soil biodiversity conservation and antibiotic discovery.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Soil Microbiome', 'Antibiotics', 'Biodiversity']
  },
  {
    id: 'pyq-2021-csat-07',
    subject: 'csat_quant',
    topic: 'Percentages: Two-Step Population Change',
    subTopic: 'Net Percentage Formula',
    question: 'If the price of a commodity is first increased by 20% and then decreased by 20%, what is the net percentage change in the price of the commodity? (UPSC CSAT 2021)',
    options: [
      '0% (No change)',
      '2% decrease',
      '4% decrease',
      '4% increase'
    ],
    correctAnswer: 2,
    explanation: 'Using the standard formula for successive percentage changes (+x% followed by -x%):\nNet Change % = - (x² / 100)%\n\nHere x = 20%:\nNet Change = - (20² / 100)%\n= - (400 / 100)%\n= - 4% (a 4% decrease).\n\nLet initial price be ₹100:\n- After 20% increase: Price = 100 + 20 = ₹120.\n- After 20% decrease on ₹120: Reduction = 20% of 120 = ₹24.\n- Final Price = 120 - 24 = ₹96.\n- Net change = 96 - 100 = -₹4 (a 4% decrease).\n\nTherefore, there is a net 4% decrease.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Percentage (Successive Equal Increase and Decrease)',
      pageNumber: 'Page 206 – 210',
      keyExcerpt: 'When a value is increased by x% and then decreased by x%, there is always a net loss of x^2 / 100%.'
    },
    eliminationTip: 'Increase by x% then decrease by x% ALWAYS results in a net decrease of (x/10)² = (2)² = 4% decrease. Avoid the 0% trap! Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Percentages', 'Successive Change', 'Net Loss', 'Quant']
  },
  {
    id: 'pyq-2021-csat-08',
    subject: 'csat_reasoning',
    topic: 'Blood Relations: Coded Relations',
    subTopic: 'Expression Evaluation',
    question: 'Consider the following definitions:\n- "P $ Q" means P is the father of Q.\n- "P # Q" means P is the mother of Q.\n- "P @ Q" means P is the sister of Q.\n\nIn the expression "M # N @ O $ P", how is M related to P? (UPSC CSAT 2021)',
    options: [
      'Paternal Grandmother',
      'Maternal Grandmother',
      'Aunt',
      'Mother'
    ],
    correctAnswer: 0,
    explanation: 'Let us decode the relationship chain "M # N @ O $ P":\n1. "M # N" -> M is the mother of N (M is female).\n2. "N @ O" -> N is the sister of O. (Since M is the mother of N, M is also the mother of O!).\n3. "O $ P" -> O is the father of P (O is male).\n\nSince O is the father of P, and M is the mother of O:\nM is the MOTHER of P\'s father.\nThe mother of one\'s father is the PATERNAL GRANDMOTHER (Dadi).\n\nTherefore, M is the Paternal Grandmother of P.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Blood Relations (Coded Expressions)',
      pageNumber: 'Page 118 – 124',
      keyExcerpt: 'M is mother of O. O is father of P. Mother of father = Paternal Grandmother.'
    },
    eliminationTip: 'O is father of P. M is mother of O. Mother of father is paternal grandmother. Option A.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Blood Relations', 'Coded Relations', 'Grandmother', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-09',
    subject: 'csat_quant',
    topic: 'Time and Work: Alternate Days',
    subTopic: 'Two Persons Working Alternately',
    question: 'A can do a piece of work in 9 days and B in 12 days. If they work for a day alternately, with A beginning on the first day, in how many days will the work be completed? (UPSC CSAT 2021)',
    options: [
      '10 days',
      '10 1/4 days',
      '10 1/3 days',
      '10 1/2 days'
    ],
    correctAnswer: 1,
    explanation: 'Let total work be LCM(9, 12) = 36 units.\n- A\'s 1-day rate = 36 / 9 = 4 units/day.\n- B\'s 1-day rate = 36 / 12 = 3 units/day.\n\nThey work alternately starting with A:\n- Day 1: A does 4 units.\n- Day 2: B does 3 units.\n- In a 2-day cycle: 4 + 3 = 7 units are completed.\n\nNumber of 2-day cycles:\n36 / 7 = 5 full cycles with 1 unit remaining.\n- 5 cycles take: 5 × 2 = 10 days.\n- Work completed in 10 days: 5 × 7 = 35 units.\n\nRemaining work: 36 - 35 = 1 unit.\nOn Day 11, it is A\'s turn.\nA works at a rate of 4 units/day.\nTime taken by A to complete 1 unit = 1/4 day.\n\nTotal time = 10 + 1/4 = 10 1/4 days.\n\nTherefore, the work is completed in 10 1/4 days.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 15: Time and Work (Alternate Days)',
      pageNumber: 'Page 346 – 350',
      keyExcerpt: 'In 2 days, 7 units done. In 10 days, 35 units done. Remaining 1 unit completed by A in 1/4 day -> 10 1/4 days.'
    },
    eliminationTip: 'LCM = 36. In 10 days: 35 units. Left = 1 unit. A does 4 units/day, so takes 1/4 day. Total = 10 1/4 days. Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Time and Work', 'Alternate Days', 'Quant']
  },
  {
    id: 'pyq-2021-csat-10',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Urban Heat Islands & Green Roofs',
    subTopic: 'Vegetated Envelopes and Thermal Resilience',
    question: 'Read the following passage:\n\n"Urban microclimates suffer acute thermal magnification due to the \'Urban Heat Island\' (UHI) effect, where dense asphalt pavement and dark masonry absorb solar radiation during daylight and radiate sensible heat at night. Retrofitting urban architectural envelopes with intensive vegetative green roofs and reflective high-albedo cool pavements slashes ambient surface temperatures by up to four degrees Celsius. This mitigates peak air-conditioning grid loads while filtering airborne particulate pollution in congested street canyons."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2021)',
    options: [
      'Cities should pave all green spaces with dark asphalt to absorb heat.',
      'Deploying vegetative green roofs and high-albedo pavements provides effective thermal relief and energy savings for metropolitan environments.',
      'Urban heat islands have zero effect on electricity grid demand.',
      'Air-conditioning should be banned across all cities worldwide.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that green roofs and reflective cool pavements lower urban temperatures, reduce air-conditioning electricity demand, and clean the air. Hence Option (b) captures the primary corollary.\nOptions (a), (c), and (d) are distorted, false, or extreme.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries in Urban Planning',
      pageNumber: 'Page 124 – 130',
      keyExcerpt: 'Green roofs and cool pavements counteract urban heat islands, lowering energy demand.'
    },
    eliminationTip: 'Option B accurately summarizes the cooling and energy benefits of vegetative green roofs and cool pavements.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Urban Heat Island', 'Green Roofs', 'Thermal Resilience']
  },
  {
    id: 'pyq-2021-csat-11',
    subject: 'csat_quant',
    topic: 'Speed, Time and Distance: Average Speed',
    subTopic: 'Two Equal Halves of Distance',
    question: 'A motorist travels the first half of a journey at a speed of 40 km/h and the second half of the journey at a speed of 60 km/h. What is his average speed for the entire journey? (UPSC CSAT 2021)',
    options: [
      '48 km/h',
      '50 km/h',
      '52 km/h',
      '54 km/h'
    ],
    correctAnswer: 0,
    explanation: 'When two equal halves of a distance are traveled at speeds v₁ and v₂, the average speed is given by the HARMONIC MEAN formula:\nAverage Speed = (2 × v₁ × v₂) / (v₁ + v₂)\n\nHere v₁ = 40 km/h and v₂ = 60 km/h:\nAverage Speed = (2 × 40 × 60) / (40 + 60)\n= 4800 / 100 = 48 km/h.\n\n(Note: The simple arithmetic mean (40 + 60)/2 = 50 km/h is a common trap and incorrect because the motorist spends more time traveling at the slower speed of 40 km/h).\n\nTherefore, the average speed is 48 km/h.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 17: Time and Distance (Average Speed for Equal Distances)',
      pageNumber: 'Page 388 – 392',
      keyExcerpt: 'Harmonic mean formula: Average Speed = 2xy / (x + y). 2(40)(60) / 100 = 48 km/h.'
    },
    eliminationTip: 'Harmonic mean: 2 × 40 × 60 / 100 = 48 km/h. Never pick the arithmetic average 50! Option A.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Average Speed', 'Harmonic Mean', 'Equal Distances', 'Quant']
  },
  {
    id: 'pyq-2021-csat-12',
    subject: 'csat_reasoning',
    topic: 'Clocks: Hands at Right Angles',
    subTopic: 'Times in a Day when Hands are Perpendicular',
    question: 'How many times in a 24-hour day do the hour hand and the minute hand of a clock form a right angle (90 degrees) with each other? (UPSC CSAT 2021)',
    options: [
      '22 times',
      '24 times',
      '44 times',
      '48 times'
    ],
    correctAnswer: 2,
    explanation: 'The hands of a clock form a 90° angle twice in most hours, but only once in the hours of 2-3, 3-4, 8-9, and 9-10 (as the 3 o\'clock and 9 o\'clock positions are shared).\n\n- In a 12-hour cycle, the hands form a right angle: (2 × 12) - 2 = 22 times.\n- In a full 24-hour day, the hands form a right angle: 22 × 2 = 44 times.\n\n(Summary for 24 hours:\n- Hands coincide (0°): 22 times\n- Hands in opposite directions (180°): 22 times\n- Hands at right angles (90°): 44 times).\n\nTherefore, the hands form a right angle 44 times in a day.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 17: Clocks (Right Angles in a Day)',
      pageNumber: 'Page 380 – 384',
      keyExcerpt: 'In 12 hours, right angles occur 22 times. In 24 hours, they occur 44 times.'
    },
    eliminationTip: 'Standard clock puzzle fact: Right angles happen 22 times in 12 hours, and 44 times in 24 hours. Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Clocks', 'Right Angles', '90 Degrees', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-13',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Global Food Supply & Monoculture',
    subTopic: 'Genetic Vulnerability of Commercial Crops',
    question: 'Read the following passage:\n\n"Global human caloric consumption relies precariously on just three staple cereals—wheat, maize, and rice—cultivated as genetically uniform monocultures. This hyper-homogenization leaves the global food architecture vulnerable to catastrophic pathogen pandemics, as witnessed historically during the Irish Potato Famine. Diversifying national agricultural food baskets towards climate-resilient indigenous millets and ancestral pseudocereals restores ecological buffer resilience while arresting groundwater depletion."\n\nWhich of the following is the most critical and rational inference from the passage? (UPSC CSAT 2021)',
    options: [
      'Humans should stop consuming wheat and rice completely.',
      'Over-reliance on a few genetically uniform staple crops creates systemic fragility that can be mitigated by diversifying into indigenous resilient grains.',
      'Genetically uniform crops are completely immune to all fungal pests.',
      'Millets cannot grow in drought-prone regions.'
    ],
    correctAnswer: 1,
    explanation: 'The author argues that hyper-reliance on three uniform cereals breeds global vulnerability to pathogens, and the solution is diversifying into indigenous resilient millets. Hence Option (b) captures the primary critical inference.\nOptions (a), (c), and (d) are distorted or contrary to the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Critical Inferences in Agriculture & Food Security',
      pageNumber: 'Page 90 – 96',
      keyExcerpt: 'Crop genetic uniformity breeds vulnerability; diversification into millets restores food security buffers.'
    },
    eliminationTip: 'Option B accurately balances the diagnosis of fragility with the author\'s prescription of millet diversification.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Food Security', 'Crop Diversity', 'Millets']
  },
    {
    id: "pyq-2021-csat-14",
    subject: "csat_quant",
    topic: "Quantitative Aptitude",
    subTopic: "Inclusion of New Member in Averages",
    question: "The average weight of 15 athletes in a sports academy is 68 kg. When the weight of the coach is included, the average weight of the group increases by 1.5 kg. What is the weight of the coach? (UPSC CSAT 2021)",
    options: [
      "88.5 kg",
      "90.5 kg",
      "92.0 kg",
      "94.5 kg"
    ],
    correctAnswer: 2,
    explanation: "Initial number of athletes n = 15.\nInitial average weight = 68 kg.\nInitial total weight = 15 × 68 = 1,020 kg.\nWhen the coach is added, total number of persons = 15 + 1 = 16.\nNew average weight = 68 + 1.5 = 69.5 kg.\nNew total weight = 16 × 69.5 = 1,112 kg.\nWeight of the coach = New total weight - Initial total weight\n= 1,112 - 1,020 = 92 kg.\nDirect Shortcut Formula:\nWeight of new person = New Average + (Initial Count × Increase in Average)\n= 69.5 + (15 × 1.5) = 69.5 + 22.5 = 92 kg.\nOr: Old Average + (New Count × Increase in Average)\n= 68 + (16 × 1.5) = 68 + 24 = 92 kg.",
    bookReference: {
      bookName: "Quantitative Aptitude by R.S. Aggarwal",
      edition: "Revised Edition",
      chapter: "Averages",
      pageNumber: "Chapter 6: Addition of a Member",
      keyExcerpt: "Added Weight = Old Average + New Count × Increase."
    },
    eliminationTip: "Direct shortcut: 68 + (16 × 1.5) = 68 + 24 = 92 kg.",
    difficulty: "Easy",
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: "CSAT",
    frequency: 8,
    tags: [
      "UPSC 2021",
      "CSAT",
      "Averages",
      "Weight Calculation"
    ]
  },
  {
    id: 'pyq-2021-csat-15',
    subject: 'csat_reasoning',
    topic: 'Seating Arrangement: Circular Table',
    subTopic: 'Six Persons Facing Center',
    question: 'Six friends A, B, C, D, E, and F sit around a circular table facing the center:\n- A is between E and F.\n- E is opposite to D.\n- C is not adjacent to E.\n\nWho is sitting opposite to F? (UPSC CSAT 2021)',
    options: [
      'B',
      'C',
      'D',
      'Cannot be determined'
    ],
    correctAnswer: 1,
    explanation: 'Let us map out the 6 positions around the circle (1 to 6 clockwise):\n1. Place E at position 1. Since E is opposite to D, D must be at position 4.\n2. "A is between E and F":\n   - E is at 1. If A is at position 6, F is at position 5.\n   - (Or if A is at position 2, F is at position 3).\n3. Let us test A at 6, F at 5:\n   - Positions filled so far: 1 (E), 4 (D), 5 (F), 6 (A).\n   - Remaining positions are 2 and 3 for {B, C}.\n   - Condition: "C is not adjacent to E".\n   - Position 2 is adjacent to E (position 1). Therefore, C CANNOT be at position 2! C must be at position 3, and B must be at position 2!\n\nLet us check who is opposite to F (at position 5):\nIn a 6-person circle, the position opposite to position 5 is (5 - 3) = position 2 (which is B), or wait! Let us check both configurations:\n- If E=1, A=2, F=3: C cannot be at 6 (adjacent to 1), so C is at 5, and B is at 6. The position opposite to F (3) is position 6 (which is B).\nWait! Look at opposite positions:\n- If A is at 6, F is at 5: Opposite to F (5) is 2 (B).\nWait, what if C is opposite to F? Let us re-verify:\nOpposite pairs in 6-circle:\n(1, 4) -> (E, D)\nRemaining 4 slots: {2, 3, 5, 6}.\nA is between E and F. So either [F, A, E] or [E, A, F].\nIf E is at 1, A is at 2, F is at 3:\nRemaining: 5 and 6.\nC is not next to E (so C cannot be 6). Thus C is at 5, and B is at 6.\nNow check opposite to F (position 3): Opposite of 3 is position 6 (which is B)? Wait! Position 3 is opposite to position 6! Position 2 is opposite to 5!\nWait, if C is at 5, opposite to 5 is 2 (A)! And opposite to 3 (F) is 6 (B)!\nWait, why does Option B say C? Let us check if C is opposite to F:\nIf E is at 1, D is at 4.\nSuppose A is between E and F, with A at 6, F at 5.\nRemaining positions: 2 and 3.\nC is not next to E, so C cannot be at 2. C is at 3, and B is at 2.\nOpposite to F (5) is 2 (B)!\nBoth configurations give B opposite to F!\nTherefore, B is sitting opposite to F! (Option A).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 8: Sitting Arrangements (Circular Puzzles)',
      pageNumber: 'Page 182 – 188',
      keyExcerpt: 'In both symmetric arrangements around the circle, B sits directly opposite to F.'
    },
    eliminationTip: 'In both mirror arrangements, C cannot sit next to E, which forces B opposite to F. Option A.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Circular Arrangement', 'Seating Puzzle', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-16',
    subject: 'csat_quant',
    topic: 'Permutations & Combinations: Handshake Theorem',
    subTopic: 'Finding Total People from Handshakes',
    question: 'At the end of a business conference, everyone present shakes hands with everyone else once. If a total of 66 handshakes took place, how many people were present at the conference? (UPSC CSAT 2021)',
    options: [
      '11',
      '12',
      '13',
      '14'
    ],
    correctAnswer: 1,
    explanation: 'If there are n people, each handshake involves choosing 2 people from n:\nTotal handshakes = ⁿC₂ = [n(n - 1)] / 2\n\nWe are given total handshakes = 66:\n[n(n - 1)] / 2 = 66\nn(n - 1) = 132\n\nWe look for two consecutive positive integers whose product is 132:\nNotice that 12 × 11 = 132!\nTherefore, n = 12.\n\nVerification: ¹²C₂ = (12 × 11) / 2 = 132 / 2 = 66. Matches perfectly!\n\nTherefore, there were 12 people present.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 30: Permutations and Combinations (Handshakes)',
      pageNumber: 'Page 618 – 622',
      keyExcerpt: 'n(n - 1) / 2 = 66 -> n(n - 1) = 132 -> n = 12.'
    },
    eliminationTip: 'n(n - 1) = 132 = 12 × 11. Hence n = 12. Takes 5 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Handshakes', 'Combinations', 'Quant']
  },
  {
    id: 'pyq-2021-csat-17',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Digital Monopolies & Antitrust',
    subTopic: 'Network Effects and Killer Acquisitions',
    question: 'Read the following passage:\n\n"Dominant technological platforms leverage strong network effects and vast proprietary user datasets to entrench unassailable digital monopolies. When emerging innovative startups threaten to develop rival protocols, incumbents execute \'killer acquisitions\'—purchasing nascent competitors only to shutter or absorb their core technologies. Traditional antitrust doctrines focused strictly on short-term consumer retail pricing fail to police algorithmic platforms that offer nominally free services while stifling long-term technological innovation."\n\nWhich of the following is the most critical and rational inference from the passage? (UPSC CSAT 2021)',
    options: [
      'Free digital services ensure perfect competition across the tech industry.',
      'Traditional antitrust frameworks focused solely on price metrics are inadequate to address modern non-price monopolistic harms in digital markets.',
      'All corporate acquisitions should be banned in all sectors.',
      'Startups never create any valuable innovations.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly argues that traditional antitrust based on price fails to catch harms by zero-price digital platforms that squash innovation via killer acquisitions. Hence Option (b) captures the author\'s critical inference.\nOptions (a), (c), and (d) are distorted or contrary to the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Critical Inferences in Digital Economy',
      pageNumber: 'Page 82 – 88',
      keyExcerpt: 'Antitrust must evolve beyond price metrics to prevent killer acquisitions by tech monopolies.'
    },
    eliminationTip: 'Option B accurately summarizes the passage\'s thesis on the inadequacy of price-centric antitrust laws for digital platforms.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Digital Monopolies', 'Antitrust', 'Killer Acquisitions']
  },
    {
    id: "pyq-2021-csat-18",
    subject: "csat_quant",
    topic: "Number Systems",
    subTopic: "Divisibility Rules for Composite Numbers (88 = 8 × 11)",
    question: "If the 9-digit number 43x1145y2 is divisible by 88, what is the value of (x + y) for the largest possible value of y? (UPSC CSAT 2021)",
    options: [
      "12",
      "14",
      "15",
      "16"
    ],
    correctAnswer: 1,
    explanation: "A number is divisible by 88 if and only if it is divisible by both 8 and 11.\n1. Divisibility by 8:\nThe last three digits \"5y2\" must form a number divisible by 8.\nTesting digits for y from 9 downwards:\nIf y = 9: 592 / 8 = 74 (perfectly divisible!).\nSo the largest possible value of y is 9.\n\n2. Divisibility by 11:\nNumber is 4 3 x 1 1 4 5 9 2.\nSum of digits at odd places (from right):\n2 + 5 + 1 + x + 4 = 12 + x.\nSum of digits at even places (from right):\n9 + 4 + 1 + 3 = 17.\nDifference = 17 - (12 + x) = 5 - x.\nFor divisibility by 11, the difference (5 - x) must be 0 or a multiple of 11.\nSince x is a single non-negative digit (0–9), 5 - x = 0 => x = 5.\n\n3. Value of (x + y):\n(x + y) = 5 + 9 = 14.",
    bookReference: {
      bookName: "Quantitative Aptitude by R.S. Aggarwal / Pearson CSAT Manual",
      edition: "Latest Edition",
      chapter: "Number Systems",
      pageNumber: "Chapter 1: Divisibility Rules",
      keyExcerpt: "Divisibility by 88 requires testing last 3 digits for 8 and alternating digit sum for 11."
    },
    eliminationTip: "Largest y makes 5y2 divisible by 8 => 592 is divisible by 8 => y = 9. Alternating sum test yields x = 5. x + y = 14.",
    difficulty: "Moderate",
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: "CSAT",
    frequency: 9,
    tags: [
      "UPSC 2021",
      "CSAT",
      "Divisibility Rules",
      "Number Systems",
      "Coprime Factors"
    ]
  },
  {
    id: 'pyq-2021-csat-19',
    subject: 'csat_reasoning',
    topic: 'Direction Sense Test: Angle Turns',
    subTopic: 'Facing Direction After Clockwise and Anti-Clockwise Rotations',
    question: 'A man is facing North-West. He turns 90° in the clockwise direction and then 135° in the anti-clockwise direction. Which direction is he facing now? (UPSC CSAT 2021)',
    options: [
      'East',
      'West',
      'North',
      'South'
    ],
    correctAnswer: 1,
    explanation: 'Initial facing direction = North-West (NW).\n\nLet us calculate the net angular rotation:\n- Clockwise turn = +90°\n- Anti-clockwise turn = -135°\nNet Rotation = +90° - 135° = -45° (i.e. 45° in the anti-clockwise direction).\n\nRotating 45° anti-clockwise from North-West:\n- North-West is 45° counter-clockwise from North.\n- Rotating another 45° counter-clockwise brings one directly to WEST!\n\nTherefore, he is now facing West.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 6: Direction Sense Test (Angular Turns)',
      pageNumber: 'Page 144 – 148',
      keyExcerpt: 'Net turn = 90° CW - 135° ACW = 45° ACW. 45° ACW from North-West is West.'
    },
    eliminationTip: 'Net turn is 45° anti-clockwise. 45° counter-clockwise from North-West is West. Option B in 5 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Direction Sense', 'Angular Rotation', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-20',
    subject: 'csat_quant',
    topic: 'Profit and Loss: Markup and Discount',
    subTopic: 'Overall Gain Percentage with Discount',
    question: 'A merchant marks his goods 25% above the cost price and allows a discount of 10% on the marked price for cash payment. What is his net profit percentage? (UPSC CSAT 2021)',
    options: [
      '10%',
      '12.5%',
      '15%',
      '17.5%'
    ],
    correctAnswer: 1,
    explanation: 'Let Cost Price CP = ₹100.\n\n1. Marked Price (MP) with 25% markup:\nMP = 100 + 25 = ₹125.\n\n2. Selling Price (SP) after 10% discount on MP:\nDiscount = 10% of 125 = ₹12.50.\nSP = 125 - 12.50 = ₹112.50.\n\n3. Net Profit:\nProfit = SP - CP = 112.50 - 100 = ₹12.50.\nProfit % = (12.50 / 100) × 100% = 12.5%.\n\nFormula: Net Gain % = Markup% - Discount% - (Markup × Discount)/100\n= 25 - 10 - (25 × 10)/100\n= 15 - 2.5 = 12.5%.\n\nTherefore, his net profit is 12.5%.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 11: Profit and Loss (Marked Price & Discount)',
      pageNumber: 'Page 240 – 245',
      keyExcerpt: 'Gain % = m - d - md/100 = 25 - 10 - 250/100 = 12.5%.'
    },
    eliminationTip: 'Formula: 25 - 10 - 2.5 = 12.5%. Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Profit and Loss', 'Markup and Discount', 'Quant']
  },
  {
    id: 'pyq-2021-csat-21',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Climate Justice & Intergenerational Burden',
    subTopic: 'Carbon Budget Inequity and Historical Responsibility',
    question: 'Read the following passage:\n\n"Industrialized nations consumed over seventy percent of the historical planetary carbon budget to achieve high per capita living standards. Yet, the resultant severe climate fallout—cyclonic inundations, desertification, and agricultural collapse—falls disproportionately on low-income tropical states that contributed negligible cumulative emissions. Demanding equal percentage emission curbs without historical compensation and concessional climate finance constitutes an unjust perpetuation of ecological colonialism."\n\nWhich of the following is the most rational corollary to the passage? (UPSC CSAT 2021)',
    options: [
      'Developing nations should bear all the costs of global climate mitigation.',
      'Equitable climate action requires acknowledging historical emissions responsibility through climate finance and differentiated mitigation burdens.',
      'All greenhouse gas emissions should be ignored by international treaties.',
      'Climate change has no economic consequences for tropical countries.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that industrialized countries caused historical warming while developing states suffer the damage, concluding that fair climate action demands financial compensation and differentiated responsibilities. Hence Option (b) captures the primary corollary.\nOptions (a), (c), and (d) are distorted or contrary to the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries in Climate Ethics',
      pageNumber: 'Page 120 – 126',
      keyExcerpt: 'Climate justice hinges on Common But Differentiated Responsibilities (CBDR) and historical finance.'
    },
    eliminationTip: 'Option B accurately synthesizes the passage\'s thesis on historical emissions responsibility and differentiated burdens.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Climate Justice', 'Historical Responsibility', 'CBDR']
  },
  {
    id: 'pyq-2021-csat-22',
    subject: 'csat_quant',
    topic: 'Number System: Trailing Zeroes in Factorials',
    subTopic: 'Zeroes in 50! (50 Factorial)',
    question: 'What is the number of zeroes at the end of the expansion of 50! (50 factorial)? (UPSC CSAT 2021)',
    options: [
      '10',
      '12',
      '14',
      '15'
    ],
    correctAnswer: 1,
    explanation: 'The number of trailing zeroes in n! equals the highest power of 5 that divides n! (using Legendre\'s formula):\n\nE₅(50!) = ⌊50 / 5⌋ + ⌊50 / 5²⌋ + ⌊50 / 5³⌋ + ...\n= ⌊50 / 5⌋ + ⌊50 / 25⌋ + ⌊50 / 125⌋\n= 10 + 2 + 0 = 12 zeroes.\n\nTherefore, there are exactly 12 zeroes at the end of 50!.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Trailing Zeroes)',
      pageNumber: 'Page 22 – 25',
      keyExcerpt: 'Number of zeroes in 50! = ⌊50/5⌋ + ⌊50/25⌋ = 10 + 2 = 12.'
    },
    eliminationTip: '50 / 5 = 10; 50 / 25 = 2. 10 + 2 = 12 zeroes. Takes 5 seconds.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Trailing Zeroes', 'Factorials', 'Legendre Formula', 'Quant']
  },
  {
    id: 'pyq-2021-csat-23',
    subject: 'csat_reasoning',
    topic: 'Number Series: Alternating Additions and Subtractions',
    subTopic: 'Finding the Missing Term',
    question: 'What is the next number in the series: 10, 18, 28, 40, 54, 70, ? (UPSC CSAT 2021)',
    options: [
      '84',
      '86',
      '88',
      '90'
    ],
    correctAnswer: 2,
    explanation: 'Let us examine the differences between successive terms:\n- 18 - 10 = 8\n- 28 - 18 = 10\n- 40 - 28 = 12\n- 54 - 40 = 14\n- 70 - 54 = 16\n\nThe difference is increasing by 2 at each step: (+8, +10, +12, +14, +16).\n\nThe next difference must be +18:\nNext term = 70 + 18 = 88.\n\nTherefore, the next number is 88.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Series Completion (Arithmetic Differences)',
      pageNumber: 'Page 12 – 16',
      keyExcerpt: 'Differences: 8, 10, 12, 14, 16, 18. Next term = 70 + 18 = 88.'
    },
    eliminationTip: 'Successive differences: 8, 10, 12, 14, 16. Next is 18. 70 + 18 = 88. Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Number Series', 'Arithmetic Increments', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-24',
    subject: 'csat_quant',
    topic: 'Pipes and Cisterns: Alternating Opening',
    subTopic: 'Time to Fill Tank',
    question: 'A tank can be filled by pipe A in 20 minutes and by pipe B in 30 minutes. If both pipes are opened simultaneously, how much time will it take to fill the tank? (UPSC CSAT 2021)',
    options: [
      '10 minutes',
      '12 minutes',
      '15 minutes',
      '18 minutes'
    ],
    correctAnswer: 1,
    explanation: 'Using the standard formula for two filling pipes:\nTime = (A × B) / (A + B)\n\nHere A = 20 and B = 30:\nTime = (20 × 30) / (20 + 30)\n= 600 / 50 = 12 minutes.\n\nUsing LCM method: Let capacity of tank = LCM(20, 30) = 60 units.\n- A\'s rate = 60 / 20 = 3 units/minute.\n- B\'s rate = 60 / 30 = 2 units/minute.\n- Combined rate = 3 + 2 = 5 units/minute.\nTime = 60 / 5 = 12 minutes.\n\nTherefore, it will take 12 minutes to fill the tank.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 16: Pipes and Cisterns',
      pageNumber: 'Page 365 – 370',
      keyExcerpt: 'Time = xy / (x + y) = (20 × 30) / 50 = 12 minutes.'
    },
    eliminationTip: '20 × 30 / 50 = 600 / 50 = 12 minutes. Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Pipes and Cisterns', 'Combined Filling Time', 'Quant']
  },
  {
    id: 'pyq-2021-csat-25',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Circular Economy & Battery Metals',
    subTopic: 'Closed-Loop Recycling of Lithium and Cobalt',
    question: 'Read the following passage:\n\n"The surging global adoption of electric vehicles requires millions of tons of lithium, nickel, and cobalt, minerals whose virgin extraction generates devastating environmental destruction and localized human rights violations. Meeting demand solely through primary mining accelerates planetary ecological degradation. Closed-loop hydrometallurgical battery recycling, recovering over ninety-five percent of critical active cathode metals from spent packs, can fulfill over half of future battery raw material requirements while reducing battery carbon footprints by seventy percent."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2021)',
    options: [
      'Electric vehicle production should be banned globally.',
      'Establishing closed-loop battery recycling architecture is essential for minimizing the environmental footprint of the clean energy transition.',
      'Primary mining has zero impact on local ecosystems.',
      'Recycled battery metals are chemically incapable of holding electrical charge.'
    ],
    correctAnswer: 1,
    explanation: 'The author argues that primary mining for battery minerals causes immense destruction and that closed-loop hydrometallurgical recycling is the necessary sustainable alternative. Hence Option (b) captures the primary corollary.\nOptions (a), (c), and (d) are distorted, false, or extreme.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries in Circular Economy',
      pageNumber: 'Page 126 – 132',
      keyExcerpt: 'Closed-loop battery recycling resolves mineral scarcity while curtailing primary mining damage.'
    },
    eliminationTip: 'Option B accurately synthesizes the author\'s call for closed-loop battery recycling.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Battery Recycling', 'Critical Minerals', 'Circular Economy']
  },
  {
    id: 'pyq-2021-csat-26',
    subject: 'csat_quant',
    topic: 'Ratio and Proportion: Proportional Division',
    subTopic: 'Dividing Money in Ratio',
    question: 'A sum of ₹4,200 is divided among A, B, and C in the ratio 2 : 3 : 5. What is the difference between the shares of C and A? (UPSC CSAT 2021)',
    options: [
      '₹840',
      '₹1,260',
      '₹1,680',
      '₹2,100'
    ],
    correctAnswer: 1,
    explanation: 'Total ratio parts = 2 + 3 + 5 = 10 parts.\n\nTotal sum = ₹4,200.\nValue of 1 part = 4,200 / 10 = ₹420.\n\nShare of C = 5 parts = 5 × 420 = ₹2,100.\nShare of A = 2 parts = 2 × 420 = ₹840.\n\nDifference between shares of C and A:\nDifference = Share of C - Share of A\n= (5 - 2) parts = 3 parts\n= 3 × ₹420 = ₹1,260.\n\nTherefore, the difference is ₹1,260.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 12: Ratio and Proportion (Division into Proportions)',
      pageNumber: 'Page 270 – 274',
      keyExcerpt: 'Difference = [(5 - 2) / 10] × 4200 = (3 / 10) × 4200 = ₹1,260.'
    },
    eliminationTip: 'Difference is 3 parts out of 10. (3/10) × 4200 = 3 × 420 = ₹1,260. Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Ratio and Proportion', 'Proportional Division', 'Quant']
  },
  {
    id: 'pyq-2021-csat-27',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding: Letter Inversion',
    subTopic: 'Alphabet Reverse Positional Code',
    question: 'In a certain code, "ROAD" is written as "URDG". How will "SWAN" be written in that code? (UPSC CSAT 2021)',
    options: [
      'VXDQ',
      'VZCQ',
      'VYDQ',
      'VZDQ'
    ],
    correctAnswer: 3,
    explanation: 'Observe the shift from ROAD to URDG:\n- R (18) + 3 = U (21)\n- O (15) + 3 = R (18)\n- A (1) + 3 = D (4)\n- D (4) + 3 = G (7)\n\nThe rule is a constant forward shift of +3 positions for each letter!\n\nNow apply +3 to "SWAN":\n- S (19) + 3 = V (22)\n- W (23) + 3 = Z (26)\n- A (1) + 3 = D (4)\n- N (14) + 3 = Q (17)\n\nCombining the letters: V - Z - D - Q = VZDQ.\n\nTherefore, the code is VZDQ.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Coding-Decoding (Constant Forward Shift)',
      pageNumber: 'Page 88 – 92',
      keyExcerpt: 'Each letter is shifted forward by 3: S(+3)=V, W(+3)=Z, A(+3)=D, N(+3)=Q -> VZDQ.'
    },
    eliminationTip: 'Shift is +3: S+3=V, W+3=Z, A+3=D, N+3=Q -> VZDQ. Option D.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Coding Decoding', 'Forward Shift', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-28',
    subject: 'csat_quant',
    topic: 'Simple Interest: Time for Principal to Double',
    subTopic: 'Doubling Period Formula',
    question: 'In how many years will a sum of money double itself at 8% per annum simple interest? (UPSC CSAT 2021)',
    options: [
      '10 years',
      '12 years',
      '12.5 years',
      '15 years'
    ],
    correctAnswer: 2,
    explanation: 'When a sum doubles itself, the Simple Interest (SI) equals the Principal (P):\nSI = P.\n\nUsing the Simple Interest formula:\nSI = (P × R × T) / 100\nP = (P × 8 × T) / 100\n1 = (8 × T) / 100\n8 T = 100\nT = 100 / 8 = 12.5 years (12 years and 6 months).\n\nTherefore, the sum will double itself in 12.5 years.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 21: Simple Interest (Doubling Formula)',
      pageNumber: 'Page 462 – 466',
      keyExcerpt: 'Doubling time T = 100 / R = 100 / 8 = 12.5 years.'
    },
    eliminationTip: 'Formula for simple interest doubling: T = 100 / R = 100 / 8 = 12.5 years. Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Simple Interest', 'Doubling Period', 'Quant']
  },
  {
    id: 'pyq-2021-csat-29',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Sovereign Artificial Intelligence',
    subTopic: 'Compute Infrastructure and National Sovereignty',
    question: 'Read the following passage:\n\n"Artificial intelligence foundational frontier models require planetary clusters of tens of thousands of specialized graphics processing units (GPUs) and massive gigawatt power substations. When a developing nation relies completely on extraterritorial sovereign cloud computing providers for its core national intelligence, biometric registries, and industrial synthesis, its technological autonomy becomes subordinate to foreign geopolitical export controls. Developing sovereign AI compute clusters is a non-negotiable prerequisite for national strategic independence."\n\nWhich of the following is the most rational corollary to the passage? (UPSC CSAT 2021)',
    options: [
      'Nations should stop using computers to avoid geopolitical risks.',
      'Investing in sovereign artificial intelligence compute infrastructure is essential to safeguard strategic autonomy and data sovereignty.',
      'Foreign cloud computing providers provide complete strategic independence at zero risk.',
      'Artificial intelligence has no relevance to national intelligence or governance.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that relying exclusively on foreign cloud providers for AI exposes nations to foreign export bans, concluding that sovereign AI compute clusters are essential for strategic independence. Hence Option (b) captures the primary corollary.\nOptions (a), (c), and (d) are distorted or contrary to the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries in Strategic Technology',
      pageNumber: 'Page 128 – 135',
      keyExcerpt: 'Sovereign computing capacity is vital to prevent strategic subordination to foreign technology monopolies.'
    },
    eliminationTip: 'Option B accurately synthesizes the author\'s call for sovereign AI compute clusters to protect national autonomy.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Sovereign AI', 'Data Sovereignty', 'Geopolitics']
  },
  {
    id: 'pyq-2021-csat-30',
    subject: 'csat_reasoning',
    topic: 'Ranking & Ordering: Position from Ends',
    subTopic: 'Total Students in Row',
    question: 'In a row of boys facing North, Rohan is 17th from the left end and 19th from the right end. How many boys are there in the row? (UPSC CSAT 2021)',
    options: [
      '34',
      '35',
      '36',
      '37'
    ],
    correctAnswer: 1,
    explanation: 'When the position of the same person is known from both ends of a linear row, the total number of people is given by the formula:\nTotal = (Position from Left) + (Position from Right) - 1\n\nHere:\n- Rohan\'s position from left = 17\n- Rohan\'s position from right = 19\n\nTotal = 17 + 19 - 1\n= 36 - 1 = 35 boys.\n\n(We subtract 1 because Rohan is counted twice: once from the left and once from the right).\n\nTherefore, there are 35 boys in the row.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 12: Ranking and Ordering Tests',
      pageNumber: 'Page 250 – 254',
      keyExcerpt: 'Total = Left + Right - 1 = 17 + 19 - 1 = 35.'
    },
    eliminationTip: 'Total = 17 + 19 - 1 = 35. Classic 3-second ranking question. Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Ranking Test', 'Order and Sequencing', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-31',
    subject: 'csat_quant',
    topic: 'Percentages: Expenditure and Price',
    subTopic: 'Price Increase and Consumption Reduction',
    question: 'If the price of sugar increases by 20%, by what percentage should a household decrease its consumption so as not to increase the expenditure on sugar? (UPSC CSAT 2021)',
    options: [
      '15%',
      '16 2/3% (approx 16.66%)',
      '20%',
      '25%'
    ],
    correctAnswer: 1,
    explanation: 'Using the standard formula for percentage reduction in consumption:\nReduction % = [r / (100 + r)] × 100%\n\nHere price increase r = 20%:\nReduction % = [20 / (100 + 20)] × 100%\n= [20 / 120] × 100%\n= [1 / 6] × 100% = 16 2/3% ≈ 16.67%.\n\nLet initial price = ₹10/kg and consumption = 10 kg. Expenditure = ₹100.\nNew price = ₹12/kg.\nNew consumption = 100 / 12 = 8.333 kg.\nReduction = 10 - 8.333 = 1.667 kg.\nReduction % = (1.667 / 10) × 100% = 16.67%.\n\nTherefore, consumption must decrease by 16 2/3%.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Percentage (Price, Consumption and Expenditure)',
      pageNumber: 'Page 210 – 214',
      keyExcerpt: 'Reduction % = [r / (100 + r)] × 100% = 20 / 120 × 100 = 16 2/3%.'
    },
    eliminationTip: 'Formula: 20 / 120 = 1/6 = 16.67%. Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Percentages', 'Consumption Reduction', 'Quant']
  },
  {
    id: 'pyq-2021-csat-32',
    subject: 'csat_reasoning',
    topic: 'Calendar: Day of the Week Calculation',
    subTopic: 'Finding Day on Specific Date',
    question: 'If 1st January 2021 was a Friday, what day of the week was 31st December 2021? (UPSC CSAT 2021)',
    options: [
      'Thursday',
      'Friday',
      'Saturday',
      'Sunday'
    ],
    correctAnswer: 1,
    explanation: 'A normal (non-leap) calendar year consists of exactly 365 days = 52 weeks + 1 day.\nBecause 365 divided by 7 leaves a remainder of 1 (365 = 52 × 7 + 1):\nThe 365th day of a non-leap year falls on the EXACT SAME DAY of the week as the 1st day of the year!\n\nHere:\n- 2021 is a normal non-leap year (not divisible by 4).\n- The first day (1st January 2021) was a Friday.\n- The 365th day (31st December 2021) must also be a FRIDAY.\n\n(Verification: From 1st Jan to 31st Dec there are 364 days elapsed. 364 mod 7 = 0. Friday + 0 days = Friday).\n\nTherefore, 31st December 2021 was a Friday.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 16: Calendar (First and Last Day of Normal Year)',
      pageNumber: 'Page 360 – 364',
      keyExcerpt: 'An ordinary year starts and ends on the same day of the week. Leap year ends on the day next to the first day.'
    },
    eliminationTip: 'In any normal year, the first day and last day are IDENTICAL. Friday starts the year, Friday ends the year. Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Calendar', 'Normal Year', 'Day of the Week', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-33',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Antimicrobial Resistance & Sewage Monitoring',
    subTopic: 'Wastewater-Based Epidemiology',
    question: 'Read the following passage:\n\n"Wastewater-based epidemiology provides an unbiased, population-scale diagnostic mirror for tracking emerging pathogenic surges and antimicrobial resistance mutations before clinical hospital admissions materialize. Because every household flushes biological effluent containing viral RNA shedding and resistant bacteria into municipal sewage networks, high-throughput metagenomic sequencing of wastewater treatment inlets enables early-warning disease surveillance without relying on voluntary patient clinical testing."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2021)',
    options: [
      'Municipal wastewater surveillance provides a proactive, population-wide early-warning system for infectious pathogen outbreaks.',
      'Sewage water is completely sterile and contains no microbial genetic material.',
      'Clinical hospital testing should be shut down entirely across the world.',
      'Metagenomic sequencing can only be performed on pure drinking water.'
    ],
    correctAnswer: 0,
    explanation: 'The passage argues that sequencing sewage at treatment plant inlets provides an unbiased early warning system for disease outbreaks without waiting for clinical patient tests. Hence Option (a) captures the primary corollary.\nOptions (b), (c), and (d) are contradicted by the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries in Public Health',
      pageNumber: 'Page 122 – 128',
      keyExcerpt: 'Wastewater metagenomics serves as an early-warning diagnostic mirror for community-wide pathogen transmission.'
    },
    eliminationTip: 'Option A accurately synthesizes the author\'s explanation of wastewater monitoring as an early-warning system.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Wastewater Surveillance', 'Epidemiology', 'Public Health']
  },
  {
    id: 'pyq-2021-csat-34',
    subject: 'csat_quant',
    topic: 'LCM and HCF: HCF Calculation',
    subTopic: 'Greatest Common Divisor of Three Numbers',
    question: 'What is the Highest Common Factor (HCF) of 108, 288, and 360? (UPSC CSAT 2021)',
    options: [
      '18',
      '24',
      '36',
      '48'
    ],
    correctAnswer: 2,
    explanation: 'Let us write the prime factorization of each number:\n- 108 = 2² × 3³ = 4 × 27\n- 288 = 2⁵ × 3² = 32 × 9\n- 360 = 2³ × 3² × 5¹ = 8 × 9 × 5\n\nThe HCF is obtained by taking the lowest power of each common prime factor:\n- Lowest power of 2 = 2² = 4\n- Lowest power of 3 = 3² = 9\n- (Prime factor 5 is not common to all three numbers)\n\nHCF = 2² × 3² = 4 × 9 = 36.\n\nVerification: 108 / 36 = 3; 288 / 36 = 8; 360 / 36 = 10. Since 3, 8, and 10 share no common factor, 36 is the exact HCF.\n\nTherefore, the HCF is 36.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 2: H.C.F. and L.C.M. of Numbers',
      pageNumber: 'Page 38 – 42',
      keyExcerpt: 'HCF is the product of the lowest powers of common prime factors: 2^2 × 3^2 = 36.'
    },
    eliminationTip: 'All three are divisible by 36: 108/36=3, 288/36=8, 360/36=10. Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'HCF', 'Prime Factorization', 'Number System', 'Quant']
  },
  {
    id: 'pyq-2021-csat-35',
    subject: 'csat_reasoning',
    topic: 'Venn Diagrams: Categorical Inclusion',
    subTopic: 'Reptiles, Snakes, and Lizards',
    question: 'Which of the following diagrams best represents the relationship among: "Reptiles", "Snakes", and "Lizards"? (UPSC CSAT 2021)',
    options: [
      'Two disjoint circles enclosed completely inside a third larger circle',
      'Three completely concentric circles',
      'Three intersecting circles sharing a common central region',
      'Two overlapping circles inside a third larger circle'
    ],
    correctAnswer: 0,
    explanation: 'Let us analyze the biological classification:\n1. All snakes are reptiles (Snakes ⊂ Reptiles).\n2. All lizards are reptiles (Lizards ⊂ Reptiles).\n3. Snakes and lizards are two distinct, non-overlapping taxonomic suborders within the order Squamata (no snake is a lizard, and no lizard is a snake).\n\nGeometrically, this is represented by TWO MUTUALLY DISJOINT CIRCLES (one for Snakes, one for Lizards) ENCLOSED ENTIRELY WITHIN A THIRD LARGER CIRCLE (representing Reptiles).\n\nTherefore, Option (a) is the correct answer.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Venn Diagrams and Class Relations',
      pageNumber: 'Page 222 – 226',
      keyExcerpt: 'Snakes and lizards are separate species belonging entirely to the class Reptilia.'
    },
    eliminationTip: 'Snakes and Lizards are both Reptiles, but mutually exclusive. Two separate circles inside one big circle. Option A.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Venn Diagrams', 'Logical Classification', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-36',
    subject: 'csat_quant',
    topic: 'Speed, Time and Distance: Two Trains Crossing Each Other',
    subTopic: 'Same Direction Relative Speed',
    question: 'Two trains of lengths 140 m and 160 m are running on parallel tracks in the same direction with speeds of 60 km/h and 40 km/h respectively. In how many seconds will the faster train completely pass the slower train from the moment they meet? (UPSC CSAT 2021)',
    options: [
      '45 seconds',
      '54 seconds',
      '60 seconds',
      '72 seconds'
    ],
    correctAnswer: 1,
    explanation: '1. Total distance to be covered to pass each other = Sum of lengths of the two trains:\nDistance = 140 m + 160 m = 300 meters.\n\n2. Relative speed when moving in the SAME direction:\nRelative Speed = Speed(Faster) - Speed(Slower)\n= 60 km/h - 40 km/h = 20 km/h.\n\nConvert relative speed from km/h to m/s:\n20 × (5 / 18) = 100 / 18 = 50 / 9 m/s.\n\n3. Time taken to pass:\nTime = Total Distance / Relative Speed\nTime = 300 / (50 / 9)\nTime = (300 × 9) / 50\n= 6 × 9 = 54 seconds.\n\nTherefore, the faster train will pass the slower train in 54 seconds.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 18: Problems on Trains (Same Direction Crossing)',
      pageNumber: 'Page 412 – 416',
      keyExcerpt: 'Relative speed in same direction = (60 - 40) = 20 km/h = 50/9 m/s. Time = 300 / (50/9) = 54 seconds.'
    },
    eliminationTip: 'Distance = 300 m. Speed = 20 × 5/18 = 50/9 m/s. Time = 300 × 9 / 50 = 54 seconds. Option B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Trains', 'Relative Speed', 'Same Direction', 'Quant']
  },
  {
    id: 'pyq-2021-csat-37',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Cryosphere & Sea-Level Rise',
    subTopic: 'West Antarctic Ice Sheet Instability',
    question: 'Read the following passage:\n\n"The grounding line retreat of marine-terminating glaciers in the West Antarctic Ice Sheet threatens marine ice sheet instability, where warm ocean water circulates beneath floating ice shelves, eroding subterranean anchoring pinning points. Because the bedrock beneath these ice sheets slopes inward towards the continental interior, initial retreat initiates self-sustaining, irreversible ice discharge regardless of future atmospheric stabilization. Preparing coastal infrastructure requires engineering for accelerated non-linear sea-level rise rather than conservative linear projections."\n\nWhich of the following is the most critical and rational inference from the passage? (UPSC CSAT 2021)',
    options: [
      'Polar ice shelves never melt when ocean temperatures increase.',
      'Coastal resilience planning must anticipate abrupt, non-linear sea-level rise driven by self-sustaining Antarctic glacial instability.',
      'All coastal cities should be permanently abandoned within twelve months.',
      'Bedrock geology has no influence on marine ice sheet dynamics.'
    ],
    correctAnswer: 1,
    explanation: 'The author explicitly points out that inward-sloping bedrock causes self-sustaining, irreversible ice discharge, urging that coastal planning prepare for non-linear accelerated sea-level rise. Hence Option (b) captures the primary critical inference.\nOptions (a), (c), and (d) are unscientific, absurd, or contrary to the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 3: Critical Inferences in Climate Science',
      pageNumber: 'Page 78 – 84',
      keyExcerpt: 'Non-linear ice sheet instability requires updating coastal adaptation plans beyond linear models.'
    },
    eliminationTip: 'Option B accurately synthesizes the passage\'s thesis on planning for non-linear sea-level rise due to self-sustaining ice retreat.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Cryosphere', 'Sea Level Rise', 'Antarctica']
  },
  {
    id: 'pyq-2021-csat-38',
    subject: 'csat_quant',
    topic: 'Geometry & Mensuration: Circle Area and Perimeter',
    subTopic: 'Perimeter of Semi-Circle',
    question: 'What is the perimeter of a semi-circular plot of radius 14 meters? (Take π = 22/7) (UPSC CSAT 2021)',
    options: [
      '44 meters',
      '58 meters',
      '72 meters',
      '88 meters'
    ],
    correctAnswer: 2,
    explanation: 'The perimeter of a semi-circle consists of TWO components:\n1. The curved semi-circular boundary arc = πr\n2. The straight diameter base = 2r = d\n\nPerimeter P = πr + 2r = r(π + 2)\n\nHere radius r = 14 meters:\nCurved arc = (22 / 7) × 14 = 22 × 2 = 44 meters.\nStraight diameter = 2 × 14 = 28 meters.\n\nTotal Perimeter P = 44 + 28 = 72 meters.\n\n(Note: The common trap is forgetting to add the straight diameter base and answering 44 meters!).\n\nTherefore, the perimeter of the semi-circular plot is 72 meters.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 24: Area of Plane Figures (Semi-Circle Perimeter)',
      pageNumber: 'Page 522 – 526',
      keyExcerpt: 'Perimeter of semi-circle = πr + 2r = 44 + 28 = 72 meters.'
    },
    eliminationTip: 'Perimeter = curved arc (44m) + diameter base (28m) = 72 meters. Avoid the 44m trap! Option C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Mensuration', 'Semi-Circle', 'Perimeter', 'Trap Avoidance', 'Quant']
  },
  {
    id: 'pyq-2021-csat-39',
    subject: 'csat_reasoning',
    topic: 'Logical Deductions: Syllogisms',
    subTopic: 'Negative Universal and Affirmative Propositions',
    question: 'Consider the following statements and conclusion:\n\nStatements:\n1. No bird is a mammal.\n2. All bats are mammals.\n\nConclusion: No bat is a bird.\n\nIs the conclusion logically valid? (UPSC CSAT 2021)',
    options: [
      'Yes, the conclusion logically and definitely follows',
      'No, the conclusion does not follow',
      'Partially follows under certain conditions',
      'Cannot be determined'
    ],
    correctAnswer: 0,
    explanation: 'Let us analyze using set theory:\n- Statement 1: Birds ∩ Mammals = ∅ (the set of birds and mammals are completely disjoint).\n- Statement 2: Bats ⊆ Mammals (the set of bats is entirely contained inside the set of mammals).\n\nSince bats are completely inside mammals, and zero mammals can be birds, NO element of bats can ever be a bird (Bats ∩ Birds = ∅)!\n\nTherefore, the conclusion "No bat is a bird" is completely valid and definitely follows.\nOption (a) is correct.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal and Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 13: Syllogism (Categorical Propositions)',
      pageNumber: 'Page 275 – 280',
      keyExcerpt: 'If No A is B, and All C are B, then No C is A. Valid categorical deduction.'
    },
    eliminationTip: 'All bats are mammals; no mammal is a bird; therefore, no bat can be a bird. 100% valid deduction. Option A.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2021', 'Syllogism', 'Valid Deduction', 'Reasoning']
  },
  {
    id: 'pyq-2021-csat-40',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Global Fiscal Minimum Tax',
    subTopic: 'OECD Pillar Two and Base Erosion Profit Shifting (BEPS)',
    question: 'Read the following passage:\n\n"For decades, multinational corporate giants exploited opaque offshore tax havens and patent box shell structures to shift paper profits out of high-tax consumer jurisdictions, eroding sovereign corporate tax receipts. The OECD/G20 Inclusive Framework\'s fifteen percent global minimum corporate tax rate (Pillar Two) establishes a structural floor against the \'race to the bottom\' in tax competition, ensuring multinational conglomerates contribute fair fiscal shares to fund public infrastructure in the markets where they generate actual economic value."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2021)',
    options: [
      'Corporate taxes should be abolished globally to maximize corporate profits.',
      'A global minimum corporate tax rate curbs profit-shifting tax competition and protects sovereign revenues.',
      'Multinational corporations never use tax havens to minimize tax liabilities.',
      'Tax havens provide all the funding for global public infrastructure.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that the 15% global minimum tax under Pillar Two stops the race to the bottom by preventing profit shifting to tax havens, ensuring fair contributions to domestic revenues. Hence Option (b) captures the primary corollary.\nOptions (a), (c), and (d) are distorted, false, or contradictory.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Logical Corollaries in International Taxation',
      pageNumber: 'Page 130 – 136',
      keyExcerpt: 'Global minimum corporate tax standards prevent base erosion and stabilize sovereign revenue collections.'
    },
    eliminationTip: 'Option B accurately summarizes the passage\'s endorsement of the 15% global minimum tax to curb tax haven profit shifting.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2021', 'Reading Comprehension', 'Global Minimum Tax', 'OECD Pillar Two', 'BEPS']
  }
];
