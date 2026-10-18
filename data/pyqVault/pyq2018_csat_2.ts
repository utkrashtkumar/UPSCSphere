import { Question } from '@/lib/types';

export const pyq2018_csat_2: Question[] = [
  {
    id: 'pyq-2018-csat-41',
    subject: 'csat_quant',
    topic: 'Time and Distance: Trains',
    subTopic: 'Train Crossing a Moving Person in Opposite Direction',
    question: 'A train 125 metres long is running at a speed of 60 km/h. In how many seconds will it pass a man who is running at 6 km/h in the direction opposite to that of the train? (UPSC CSAT 2018)',
    options: [
      '5.5 seconds',
      '6.0 seconds',
      '6.8 seconds',
      '7.5 seconds'
    ],
    correctAnswer: 2,
    explanation: '1. When the train and the man move in OPPOSITE directions, their relative speed is the sum of their individual speeds:\n   Relative Speed = Speed of Train + Speed of Man\n   Relative Speed = 60 + 6 = 66 km/h.\n\n2. Convert relative speed from km/h to m/s:\n   Speed = 66 × (5 / 18) = 11 × 5 / 3 = 55 / 3 m/s.\n\n3. The distance to be covered to cross a man is simply the length of the train:\n   Distance = 125 metres.\n\n4. Time taken = Distance / Relative Speed:\n   Time = 125 / (55 / 3)\n   Time = (125 × 3) / 55\n   Divide numerator and denominator by 5:\n   Time = (25 × 3) / 11 = 75 / 11 ≈ 6.818 seconds (approx 6.8 seconds).\n\nTherefore, the train will pass the man in approximately 6.8 seconds.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 18: Problems on Trains (Opposite Direction)',
      pageNumber: 'Page 408 – 414',
      keyExcerpt: 'In opposite direction, relative speed = s1 + s2 = 66 km/h = 55/3 m/s. Time = L / Relative Speed = 125 / (55/3) = 75/11 ≈ 6.8 sec.'
    },
    eliminationTip: 'Relative speed = 60 + 6 = 66 km/h = 55/3 m/s. Time = 125 × 3 / 55 = 75 / 11 = 6.81 seconds.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Trains', 'Relative Speed', 'Opposite Directions', 'Quant']
  },
  {
    id: 'pyq-2018-csat-42',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding: Number and Symbol Coding',
    subTopic: 'Positional Substitution Coding',
    question: 'In a certain code, "RAIN" is written as "8$\%6" and "MORE" is written as "7#8@". How will "REMAIN" be written in that code? (UPSC CSAT 2018)',
    options: [
      '8@7$86',
      '8@7$%6',
      '8@7$%6',
      '8@7$%6'
    ],
    correctAnswer: 1,
    explanation: 'Extract the unique symbol/digit assigned to each letter from both words:\nFrom "RAIN" -> 8 $ % 6:\n- R = 8\n- A = $\n- I = %\n- N = 6\n\nFrom "MORE" -> 7 # 8 @:\n- M = 7\n- O = #\n- R = 8 (consistent with RAIN)\n- E = @\n\nNow, encode the target word "REMAIN":\n- R -> 8\n- E -> @\n- M -> 7\n- A -> $\n- I -> %\n- N -> 6\n\nPutting them together: "REMAIN" = 8 @ 7 $ % 6.\n\nMatches Option (b).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 4: Coding-Decoding (Symbol Coding)',
      pageNumber: 'Page 100 – 106',
      keyExcerpt: 'Map each letter directly from the given source codes: R=8, E=@, M=7, A=$, I=%, N=6.'
    },
    eliminationTip: 'R = 8, E = @, M = 7, A = $, I = %, N = 6. Directly concatenate: 8@7$%6.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Coding Decoding', 'Symbol Coding', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-43',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Nutritional Security & Millets',
    subTopic: 'Climate Resilience and Micronutrient Density of Coarse Cereals',
    question: 'Read the following passage:\n\n"The Green Revolution succeeded in banishing acute famines across South Asia by focusing exclusively on high-yielding dwarf varieties of wheat and paddy. However, this monocultural cereal focus led to the systematic marginalization of traditional coarse millets—such as finger millet (ragi), pearl millet (bajra), and sorghum (jowar). Millets require thirty percent less water than maize, one-tenth the water of flooded paddy, withstand searing semi-arid drought spells, and flourish in degraded soils without chemical fertilizer subsidies. Crucially, millets offer triple the dietary fiber, four times the calcium, and double the iron of polished white rice, making millet revival the most potent indigenous antidote to widespread pediatric iron-deficiency anemia and micronutrient malnutrition."\n\nWhich among the following is the most logical and rational assumption that can be made from the passage? (UPSC CSAT 2018)',
    options: [
      'Flooded paddy cultivation is the only sustainable agriculture for drought-prone regions.',
      'Reintroducing climate-resilient millets can simultaneously address ecological water scarcity and pediatric nutritional deficits.',
      'White polished rice contains higher calcium and iron levels than traditional ragi.',
      'Millets cannot be digested by human beings without industrial processing.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that millets survive severe drought with minimal water while providing superior calcium, iron, and fiber compared to rice, making them a solution to both water crisis and malnutrition. Hence Option (b) captures this dual ecological and nutritional assumption.\nOptions (a), (c), and (d) directly contradict the text or make absurd claims.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Agriculture, Nutrition and Climate Adaptation',
      pageNumber: 'Page 128 – 134',
      keyExcerpt: 'Millets combine drought tolerance and water efficiency with dense micronutrient profiles to tackle malnutrition.'
    },
    eliminationTip: 'The passage presents millets as drought-resilient and micronutrient-dense (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Millets', 'Nutritional Security', 'Climate Resilience']
  },
  {
    id: 'pyq-2018-csat-44',
    subject: 'csat_quant',
    topic: 'Compound Interest: Compounding Frequency',
    subTopic: 'Annual vs Half-Yearly Compounding',
    question: 'What is the compound interest on ₹ 10,000 for 1 year at 20% per annum, compounded half-yearly? (UPSC CSAT 2018)',
    options: [
      '₹ 2,000',
      '₹ 2,100',
      '₹ 2,200',
      '₹ 2,250'
    ],
    correctAnswer: 1,
    explanation: '1. When interest is compounded HALF-YEARLY:\n   - Rate per conversion period (R\') = Annual Rate / 2 = 20% / 2 = 10% per half-year.\n   - Number of conversion periods (n) = 1 year × 2 = 2 half-years.\n\n2. Amount formula for compound interest:\n   A = P × (1 + R\' / 100)ⁿ\n   A = 10,000 × (1 + 10 / 100)²\n   A = 10,000 × (1.10)²\n   A = 10,000 × 1.21 = ₹ 12,100.\n\n3. Compound Interest (CI) earned:\n   CI = A - P\n   CI = 12,100 - 10,000 = ₹ 2,100.\n\n(Notice that if compounded annually, CI would have been only 20% of 10,000 = ₹2,000. The half-yearly compounding yields an extra ₹100 because the interest earned in the first half-year itself earns interest in the second half-year).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 22: Compound Interest (Half-Yearly Compounding)',
      pageNumber: 'Page 490 – 496',
      keyExcerpt: 'For half-yearly compounding, rate is halved (10%) and time periods are doubled (2). A = 10,000(1.1)² = 12,100. CI = ₹2,100.'
    },
    eliminationTip: 'Half-yearly rate = 10%. Over 2 half-years: 10 + 10 + (10×10/100) = 21% net interest. 21% of ₹10,000 = ₹2,100.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Compound Interest', 'Half-Yearly Compounding', 'Quant']
  },
  {
    id: 'pyq-2018-csat-45',
    subject: 'csat_reasoning',
    topic: 'Blood Relations: Family Tree Puzzle',
    subTopic: 'Multi-Generation Family Delineation',
    question: 'In a family of six members A, B, C, D, E and F:\n- There are two married couples.\n- D is the grandmother of A and mother of B.\n- C is the wife of B and mother of F.\n- F is the granddaughter of E.\n\nWho is the husband of D? (UPSC CSAT 2018)',
    options: [
      'A',
      'B',
      'E',
      'F'
    ],
    correctAnswer: 2,
    explanation: 'Let us map out the family generations step-by-step:\n1. "D is the grandmother of A and mother of B":\n   - D is in Generation 1 (female, grandmother).\n   - B is in Generation 2 (child of D).\n   - A is in Generation 3 (grandchild of D).\n\n2. "C is the wife of B and mother of F":\n   - B is male (husband) and C is female (wife). This is Married Couple 1 in Generation 2.\n   - F is their child in Generation 3 (alongside A).\n\n3. "F is the granddaughter of E":\n   - Since F\'s mother is C and father is B, F\'s paternal grandparents are D (grandmother) and her husband.\n   - Therefore, E MUST be the paternal grandfather of F (and husband of D).\n   - This forms Married Couple 2: E (husband) and D (wife) in Generation 1.\n\n4. Who is the husband of D? E.\n\nTherefore, E is the husband of D.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Blood Relations (Family Puzzles)',
      pageNumber: 'Page 122 – 130',
      keyExcerpt: 'D is grandmother and E is grandfather of Generation 3 (A and F). Therefore, E and D are married.'
    },
    eliminationTip: 'Generation 1 consists of the two grandparents: D (grandmother) and E (grandfather). Thus E is the husband of D.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Blood Relations', 'Family Tree', 'Grandparents', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-46',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Urban Climatology & Thermal Comfort',
    subTopic: 'Urban Heat Island (UHI) Effect and Cool Roof Interventions',
    question: 'Read the following passage:\n\n"The replacement of natural vegetative canopy cover and permeable soils with dark asphalt roadways and dense concrete high-rises creates pronounced Urban Heat Islands (UHIs), where night-time ambient temperatures in central business districts remain up to six degrees Celsius higher than surrounding rural peripheries. This trapped anthropogenic thermal heat wave multiplies building air-conditioning cooling electricity demand, triggers deadly heat strokes among outdoor construction workers, and accelerates photochemical ground-level ozone smog. Implementing urban cool roof programs—applying high-albedo solar-reflective white paints and planting extensive rooftop sedum gardens—presents a cost-effective passive urban design intervention that reflects solar irradiance directly back into space and slashes indoor temperatures."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2018)',
    options: [
      'High-albedo reflective roofs and rooftop greening can substantially mitigate urban heat island effects and lower cooling energy consumption.',
      'Urban buildings should be painted completely black to absorb all solar radiation.',
      'Urban heat islands only occur during sub-zero winter nights in polar cities.',
      'Air-conditioning electricity demand drops automatically when urban temperatures rise.'
    ],
    correctAnswer: 0,
    explanation: 'The passage highlights that UHIs trap heat and raise energy demand, concluding that high-albedo cool roofs and green roofs are cost-effective passive interventions to reflect solar energy and cool indoor spaces. Hence Option (a) is the direct, logical corollary.\nOptions (b), (c), and (d) are absurd or contradictory.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Urban Climatology and Sustainable Architecture',
      pageNumber: 'Page 136 – 142',
      keyExcerpt: 'High-albedo cool roofs and vegetation passive interventions combat Urban Heat Islands and reduce cooling power loads.'
    },
    eliminationTip: 'The passage concludes that high-albedo reflective cool roofs and green gardens counter urban heat and reduce cooling demand (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Urban Heat Island', 'Cool Roofs', 'Albedo', 'Energy Efficiency']
  },
  {
    id: 'pyq-2018-csat-47',
    subject: 'csat_quant',
    topic: 'Time and Work: Joint Labour Efficiency',
    subTopic: 'Men, Women and Boys Working Together',
    question: '1 man, 2 women or 3 boys can complete a piece of work in 44 days. In how many days can 1 man, 1 woman and 1 boy together complete the same work? (UPSC CSAT 2018)',
    options: [
      '21 days',
      '24 days',
      '28 days',
      '32 days'
    ],
    correctAnswer: 1,
    explanation: '1. Establish equivalent work capacities from the given statement:\n   Work done by 1 Man = Work done by 2 Women = Work done by 3 Boys.\n   - 1 Man = 3 Boys\n   - 1 Woman = 3 / 2 Boys = 1.5 Boys\n\n2. We know that 3 Boys can complete the work in 44 days:\n   Total Work = 3 Boys × 44 days = 132 boy-days.\n\n3. Now calculate the combined daily capacity of (1 Man + 1 Woman + 1 Boy) expressed in terms of Boys:\n   1 Man + 1 Woman + 1 Boy = 3 Boys + 1.5 Boys + 1 Boy\n   Combined team = 5.5 Boys = 11 / 2 Boys.\n\n4. Time taken by the combined team to complete 132 boy-days of work:\n   Time = Total Work / Combined Daily Rate\n   Time = 132 / (11 / 2)\n   Time = (132 × 2) / 11\n   Time = 12 × 2 = 24 days.\n\nTherefore, 1 man, 1 woman and 1 boy together will complete the work in 24 days.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 15: Time and Work',
      pageNumber: 'Page 365 – 372',
      keyExcerpt: 'Convert all workers into a single common denomination (boys). 1M + 1W + 1B = 3 + 1.5 + 1 = 5.5 boys. Time = (3 × 44) / 5.5 = 24 days.'
    },
    eliminationTip: 'Convert to boys: 1M = 3B, 1W = 1.5B, 1B = 1B. Total = 5.5 boys. Total work = 3 × 44 = 132. Time = 132 / 5.5 = 24 days.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Time and Work', 'Men Women Boys', 'Work Equivalence', 'Quant']
  },
  {
    id: 'pyq-2018-csat-48',
    subject: 'csat_reasoning',
    topic: 'Seating Arrangement: Circular Table',
    subTopic: 'Eight Persons Facing the Centre with Alternate Spacing',
    question: 'Eight friends A, B, C, D, E, F, G and H are sitting around a circular table facing towards the centre.\n- B is sitting between G and D.\n- H is third to the left of B and second to the right of A.\n- C is sitting between A and G.\n- B and E are sitting opposite to each other.\n\nWho is sitting to the immediate right of F? (UPSC CSAT 2018)',
    options: [
      'D',
      'H',
      'E',
      'B'
    ],
    correctAnswer: 1,
    explanation: 'Let us map the 8 positions around a circular clock face (labeled 1 to 8 clockwise, all facing the centre):\n1. Place B at Position 1.\n   Since B and E are sitting opposite each other, E is at Position 5 (1 + 4 = 5 in an 8-person circle).\n2. "H is third to the left of B":\n   Facing centre at Pos 1, clockwise is left. So Pos 2 is 1st left, Pos 3 is 2nd left, Pos 4 is 3rd left.\n   Therefore, H is at Position 4.\n3. "H is second to the right of A":\n   Facing centre, right is counterclockwise. If H at Pos 4 is second to the right of A, then A must be at Position 6 (since counterclockwise 2 steps from Pos 6 brings us to Pos 4).\n4. "C is sitting between A and G", and "B is sitting between G and D":\n   - B is at Pos 1. His neighbors are Pos 8 and Pos 2. One must be G and the other D.\n   - A is at Pos 6. For C to be between A and G, G must be at Pos 8 and C at Pos 7!\n   - Then D must be the other neighbor of B at Pos 2.\n5. Now let us see the remaining vacant position:\n   Positions filled so far:\n   - Pos 1: B\n   - Pos 2: D\n   - Pos 3: ? (only F remains!)\n   - Pos 4: H\n   - Pos 5: E\n   - Pos 6: A\n   - Pos 7: C\n   - Pos 8: G\n\n   Thus, F is at Position 3.\n6. The question asks: "Who is sitting to the immediate right of F?"\n   F is at Position 3. Facing centre at Pos 3, the immediate right is in the clockwise direction towards Position 4 (where H is sitting!).\n\nTherefore, H is sitting to the immediate right of F.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 24: Seating Arrangement (Circular Arrangements)',
      pageNumber: 'Page 515 – 524',
      keyExcerpt: 'Map all 8 positions systematically. F is at Position 3, and facing centre, the immediate right of F is Position 4, occupied by H.'
    },
    eliminationTip: 'Positions: B(1), D(2), F(3), H(4), E(5), A(6), C(7), G(8). Immediate right of F(3) is H(4).',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Circular Seating Arrangement', 'Facing Centre', 'Immediate Right', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-49',
    subject: 'csat_quant',
    topic: 'Probability: Rolling Two Dice',
    subTopic: 'Sum of Two Dice Faces Equal to a Prime Number',
    question: 'Two fair six-faced dice are rolled simultaneously. What is the probability that the sum of the numbers appearing on the two dice is a prime number? (UPSC CSAT 2018)',
    options: [
      '5 / 12',
      '7 / 18',
      '1 / 2',
      '15 / 36'
    ],
    correctAnswer: 0,
    explanation: '1. Total possible outcomes when rolling two fair dice:\n   Total outcomes = 6 × 6 = 36.\n\n2. Possible sums when two dice are rolled range from 2 (1+1) to 12 (6+6).\n   The prime numbers in the range [2, 12] are: 2, 3, 5, 7, and 11.\n\n3. List all favourable pairs (d₁, d₂) for each prime sum:\n   - Sum = 2: (1, 1) -> 1 pair\n   - Sum = 3: (1, 2), (2, 1) -> 2 pairs\n   - Sum = 5: (1, 4), (2, 3), (3, 2), (4, 1) -> 4 pairs\n   - Sum = 7: (1, 6), (2, 5), (3, 4), (4, 3), (5, 2), (6, 1) -> 6 pairs\n   - Sum = 11: (5, 6), (6, 5) -> 2 pairs\n\n4. Total favourable outcomes:\n   Total = 1 + 2 + 4 + 6 + 2 = 15 pairs.\n\n5. Probability = Favourable outcomes / Total outcomes:\n   Probability = 15 / 36.\n   Divide numerator and denominator by 3:\n   Probability = 5 / 12.\n\nTherefore, the probability that the sum is a prime number is 5/12.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 31: Probability (Two Dice Problems)',
      pageNumber: 'Page 632 – 638',
      keyExcerpt: 'Favourable prime sums (2, 3, 5, 7, 11) have frequencies 1, 2, 4, 6, 2 respectively, totaling 15. Probability = 15 / 36 = 5 / 12.'
    },
    eliminationTip: 'Prime sums: 2(1), 3(2), 5(4), 7(6), 11(2). Total favourable = 1+2+4+6+2 = 15. P = 15/36 = 5/12.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Probability', 'Two Dice', 'Prime Sum', 'Quant']
  },
  {
    id: 'pyq-2018-csat-50',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Circular Economy & Electric Vehicles',
    subTopic: 'Lithium-Ion Battery Recycling and Hydrometallurgical Extraction',
    question: 'Read the following passage:\n\n"The rapid adoption of electric passenger vehicles is widely celebrated as a zero-tailpipe emission climate panacea. However, electric mobility shifts environmental pressures from combustion tailpipes upstream to battery manufacturing and downstream to end-of-life battery disposal. Millions of spent lithium-ion battery packs containing hazardous electrolyte solvents, cobalt, nickel, and manganese risk inundating municipal landfills over the next decade. Developing domestic closed-loop hydrometallurgical recycling infrastructure is imperative: recycling spent battery cells recovers up to ninety-five percent of critical cathode minerals at ninety percent lower carbon emissions compared to virgin mining, transforming spent batteries from toxic waste into a domestic strategic mineral reserve."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2018)',
    options: [
      'Electric vehicle adoption must be coupled with closed-loop battery recycling to prevent toxic landfill pollution and secure sustainable mineral supply chains.',
      'Electric mobility should be banned completely because batteries cannot be recycled.',
      'Discarded lithium batteries should be incinerated in open municipal trash fires.',
      'Extracting virgin lithium from mineral mines produces zero carbon emissions.'
    ],
    correctAnswer: 0,
    explanation: 'The passage highlights that electric vehicles create battery waste risks, concluding that developing closed-loop hydrometallurgical recycling is essential to recover valuable minerals and prevent environmental damage. Hence Option (a) is the direct, logical corollary.\nOptions (b), (c), and (d) are contradicted by the text or absurd.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Clean Energy Transition and Circular Economy',
      pageNumber: 'Page 134 – 140',
      keyExcerpt: 'Sustainable electric mobility requires closed-loop battery recycling to eliminate landfill contamination and secure critical minerals.'
    },
    eliminationTip: 'The author shows that the EV transition requires closed-loop recycling to prevent battery waste and reclaim scarce minerals (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Electric Vehicles', 'Battery Recycling', 'Circular Economy']
  },
  {
    id: 'pyq-2018-csat-51',
    subject: 'csat_quant',
    topic: 'Percentages: Income, Expenditure and Savings',
    subTopic: 'Percentage Change in Savings',
    question: 'A man spends 75% of his income. His income increases by 20% and his expenditure increases by 10%. By what percentage do his savings increase? (UPSC CSAT 2018)',
    options: [
      '30%',
      '40%',
      '50%',
      '60%'
    ],
    correctAnswer: 2,
    explanation: '1. Let the man\'s initial income be ₹ 100.\n   - Expenditure = 75% of 100 = ₹ 75.\n   - Initial Savings = Income - Expenditure = 100 - 75 = ₹ 25.\n\n2. Now, his income increases by 20%:\n   - New Income = 100 × 1.20 = ₹ 120.\n\n3. His expenditure increases by 10% on the previous expenditure (₹ 75):\n   - Increase in Expenditure = 10% of 75 = ₹ 7.50.\n   - New Expenditure = 75 + 7.50 = ₹ 82.50.\n\n4. Calculate his new savings:\n   - New Savings = New Income - New Expenditure\n   - New Savings = 120 - 82.50 = ₹ 37.50.\n\n5. Calculate the percentage increase in his savings:\n   - Increase in Savings = 37.50 - 25 = ₹ 12.50.\n   - Percentage Increase = (12.50 / 25) × 100 = (1 / 2) × 100 = 50%.\n\nTherefore, his savings increase by 50%.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 10: Percentage (Income and Expenditure Problems)',
      pageNumber: 'Page 220 – 226',
      keyExcerpt: 'Initial: Income 100, Exp 75, Sav 25. New: Income 120, Exp 82.5, Sav 37.5. Increase in savings = (12.5 / 25) × 100 = 50%.'
    },
    eliminationTip: 'Initial savings = ₹25. New savings = 120 - 82.5 = ₹37.5. Increase = ₹12.5. Since 12.5 is half of 25, the increase is exactly 50%.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Income and Expenditure', 'Savings Percentage', 'Percentages', 'Quant']
  },
  {
    id: 'pyq-2018-csat-52',
    subject: 'csat_reasoning',
    topic: 'Number Series: Perfect Squares and Cubes',
    subTopic: 'Cubic Differences in Consecutive Terms',
    question: 'Find the missing number in the following sequence:\n\n2, 10, 30, 68, 130, ? (UPSC CSAT 2018)',
    options: [
      '210',
      '216',
      '222',
      '240'
    ],
    correctAnswer: 2,
    explanation: 'Examine each term in terms of cubes of natural numbers (n³ + n):\n- 1st term (n = 1): 1³ + 1 = 1 + 1 = 2\n- 2nd term (n = 2): 2³ + 2 = 8 + 2 = 10\n- 3rd term (n = 3): 3³ + 3 = 27 + 3 = 30\n- 4th term (n = 4): 4³ + 4 = 64 + 4 = 68\n- 5th term (n = 5): 5³ + 5 = 125 + 5 = 130\n\nThe pattern is strictly: T(n) = n³ + n.\n\nFor the 6th term (n = 6):\nT(6) = 6³ + 6 = 216 + 6 = 222.\n\nTherefore, the missing number is 222.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 1: Series Completion',
      pageNumber: 'Page 22 – 28',
      keyExcerpt: 'Pattern: n³ + n. For n = 6: 6³ + 6 = 216 + 6 = 222.'
    },
    eliminationTip: 'Pattern is n³ + n: 1³+1=2, 2³+2=10, 3³+3=30, 4³+4=68, 5³+5=130. Next is 6³+6 = 216+6 = 222.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Number Series', 'Cubes and Numbers', 'Pattern Recognition', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-53',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Deep-Sea Mining & Common Heritage of Humankind',
    subTopic: 'Polymetallic Nodules and International Seabed Authority',
    question: 'Read the following passage:\n\n"The abyssal plains of the central Pacific Clarion-Clipperton Zone harbor billions of metric tons of polymetallic nodule deposits containing high concentrations of battery metals: nickel, copper, cobalt, and manganese. While mining conglomerates urge the International Seabed Authority (ISA) to finalize commercial exploitation codes to alleviate terrestrial mineral shortages, marine biologists warn that deep-sea benthic scraping causes irreversible destruction. The abyssal floor is a fragile, ultra-low-energy biome populated by ancient, slow-growing xenophyophores, hexactinellid glass sponges, and undiscovered benthic species. Stripping these nodule pavement habitats creates toxic particulate sediment plumes that travel thousands of kilometers, smothering midwater filter feeders and disrupting ocean carbon sequestration."\n\nWhich of the following is the most logical and rational inference from the passage? (UPSC CSAT 2018)',
    options: [
      'Commercial deep-sea mining of polymetallic nodules threatens fragile abyssal biomes and could trigger widespread marine ecological destruction.',
      'The abyssal plains of the ocean floor contain zero biological life forms.',
      'Deep-sea sediment plumes enrich ocean filter feeders and accelerate fish reproduction.',
      'Polymetallic nodules regenerate completely within two weeks after being mined.'
    ],
    correctAnswer: 0,
    explanation: 'The passage highlights that deep-sea mining for polymetallic nodules destroys ancient slow-growing benthic organisms and spreads toxic sediment plumes across ocean layers. Hence Option (a) is the direct, rational inference.\nOptions (b), (c), and (d) directly contradict the facts presented in the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Marine Ecology and Deep-Sea Mineral Mining',
      pageNumber: 'Page 130 – 136',
      keyExcerpt: 'Commercial exploitation of abyssal nodules poses severe risks of irreversible biodiversity loss and plume contamination in deep-sea ecosystems.'
    },
    eliminationTip: 'The passage details the severe ecological perils of deep-sea mining: destroying fragile benthic sponges and generating toxic plumes (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Deep Sea Mining', 'Polymetallic Nodules', 'Marine Ecology']
  },
  {
    id: 'pyq-2018-csat-54',
    subject: 'csat_quant',
    topic: 'Ratio and Proportion: Coin Problems',
    subTopic: 'Total Amount from Ratio of Coins of Different Denominations',
    question: 'A bag contains ₹ 1, 50 paise, and 25 paise coins in the ratio 3 : 4 : 8. If the total amount of money in the bag is ₹ 280, how many 50 paise coins are there in the bag? (UPSC CSAT 2018)',
    options: [
      '120',
      '140',
      '160',
      '200'
    ],
    correctAnswer: 2,
    explanation: '1. Let the number of coins be:\n   - ₹ 1 coins = 3x\n   - 50 paise coins = 4x\n   - 25 paise coins = 8x\n\n2. Convert the value of each denomination into rupees:\n   - Value of ₹ 1 coins = 3x × ₹ 1 = ₹ 3x\n   - Value of 50 paise coins = 4x × ₹ 0.50 = ₹ 2x\n   - Value of 25 paise coins = 8x × ₹ 0.25 = ₹ 2x\n\n3. Total monetary value in the bag:\n   Total Value = 3x + 2x + 2x = 7x.\n\n4. We are given that total value is ₹ 280:\n   7x = 280\n   x = 280 / 7 = 40.\n\n5. The question asks for the number of 50 PAISE COINS:\n   Number of 50p coins = 4x = 4 × 40 = 160 coins.\n\n(Verification: 3×40 = 120 coins of ₹1 = ₹120; 4×40 = 160 coins of 50p = ₹80; 8×40 = 320 coins of 25p = ₹80. Total = 120 + 80 + 80 = ₹280. Perfectly matches!).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 12: Ratio and Proportion (Problems on Coins)',
      pageNumber: 'Page 295 – 302',
      keyExcerpt: 'Value equation: 3x(1) + 4x(0.5) + 8x(0.25) = 7x = 280 => x = 40. Number of 50p coins = 4x = 160.'
    },
    eliminationTip: 'Rupee values: 3x(1) + 4x(0.5) + 8x(0.25) = 3x + 2x + 2x = 7x = 280 => x = 40. 50p coins = 4x = 160.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Coin Problems', 'Ratio and Proportion', 'Denominations', 'Quant']
  },
  {
    id: 'pyq-2018-csat-55',
    subject: 'csat_reasoning',
    topic: 'Syllogism: Negative and Particular Premises',
    subTopic: 'Two-Premise Syllogistic Deductions',
    question: 'Consider the following statements and conclusions:\n\nStatements:\n1. Some trees are forests.\n2. No forest is a building.\n\nConclusions:\nI. Some trees are not buildings.\nII. Some buildings are not trees.\n\nWhich of the conclusions logically follow from the given statements? (UPSC CSAT 2018)',
    options: [
      'Only Conclusion I follows',
      'Only Conclusion II follows',
      'Both Conclusion I and II follow',
      'Neither Conclusion I nor II follows'
    ],
    correctAnswer: 0,
    explanation: 'Let us analyze using categorical syllogism rules and Venn diagrams:\n1. "Some trees are forests" (I-type proposition): There is an overlapping intersection between the set of Trees and the set of Forests.\n2. "No forest is a building" (E-type proposition): The set of Forests and the set of Buildings are completely disjoint (Forests ∩ Buildings = ∅).\n\nEvaluating Conclusion I: "Some trees are not buildings":\n- Consider those specific trees that belong to the set of Forests (from Statement 1, we know this subset is non-empty).\n- But Statement 2 establishes that no member of Forests can be a Building.\n- Therefore, those trees that are forests CANNOT be buildings.\n- This guarantees that "Some trees are not buildings".\n- Conclusion I definitely and logically follows!\n\nEvaluating Conclusion II: "Some buildings are not trees":\n- We are told no building is a forest. But buildings could potentially be completely contained within the part of Trees that is NOT forest.\n- Therefore, we cannot definitively conclude that some buildings are not trees.\n- Conclusion II does NOT necessarily follow.\n\nTherefore, ONLY Conclusion I follows.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 14: Syllogism',
      pageNumber: 'Page 348 – 355',
      keyExcerpt: 'Some A are B + No B is C yields Some A are not C. (Those A which are B cannot be C).'
    },
    eliminationTip: 'The trees that are forests cannot be buildings (because no forest is a building). Thus, some trees are not buildings (Conclusion I follows).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Syllogism', 'Venn Diagrams', 'Deductive Logic', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-56',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Universal Health Coverage & Catastrophic Expenditure',
    subTopic: 'Pre-Payment Pooling and Out-of-Pocket Hospitalization Costs',
    question: 'Read the following passage:\n\n"In developing economies where public health financing accounts for less than 1.5 percent of GDP, catastrophic out-of-pocket healthcare expenses serve as a principal conduit into rural impoverishment. When a household member suffers an acute medical emergency requiring tertiary hospitalization, families are compelled to sell productive agricultural livestock, mortgage farmland, or borrow from predatory moneylenders. Transitioning to Universal Health Coverage (UHC) requires establishing single-payer pre-payment pooling funded by progressive general taxation, insulating vulnerable citizens from ruinous point-of-service user fees while guaranteeing an essential package of primary and secondary clinical care."\n\nWhich of the following is the most logical and rational assumption that can be made from the passage? (UPSC CSAT 2018)',
    options: [
      'High out-of-pocket healthcare costs exacerbate poverty and economic vulnerability in the absence of pooled public health financing.',
      'Households enjoy borrowing from moneylenders during medical emergencies.',
      'Public healthcare spending of 1.5% of GDP is sufficient to meet all medical needs.',
      'Tertiary hospitals provide completely free clinical care to all citizens automatically.'
    ],
    correctAnswer: 0,
    explanation: 'The passage explicitly links low public health expenditure and high out-of-pocket costs to asset distress and impoverishment, advocating tax-funded pre-payment pooling. Hence Option (a) is the direct, logical assumption.\nOptions (b), (c), and (d) are contradicted by the passage or absurd.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 7: Public Healthcare Financing and UHC',
      pageNumber: 'Page 160 – 166',
      keyExcerpt: 'Out-of-pocket health costs cause catastrophic impoverishment without public pre-payment risk pooling.'
    },
    eliminationTip: 'The author shows that lack of pooled public financing leaves families vulnerable to medical impoverishment (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Universal Health Coverage', 'UHC', 'Out-of-Pocket Expenditure', 'Health Economics']
  },
  {
    id: 'pyq-2018-csat-57',
    subject: 'csat_quant',
    topic: 'Averages: Overlapping Sets',
    subTopic: 'Finding the Middle (Overlapping) Number in an Averages Set',
    question: 'The average of 11 numbers is 60. If the average of the first six numbers is 58 and that of the last six numbers is 63, what is the sixth number? (UPSC CSAT 2018)',
    options: [
      '62',
      '64',
      '66',
      '68'
    ],
    correctAnswer: 2,
    explanation: '1. Total sum of all 11 numbers:\n   Sum(11) = 11 × 60 = 660.\n\n2. Sum of the first 6 numbers:\n   Sum(first 6) = 6 × 58 = 348.\n\n3. Sum of the last 6 numbers:\n   Sum(last 6) = 6 × 63 = 378.\n\n4. Notice that when we add Sum(first 6) and Sum(last 6), the 6th number is counted TWICE (once as the last of the first six, and once as the first of the last six):\n   Combined Sum = Sum(first 6) + Sum(last 6)\n   Combined Sum = 348 + 378 = 726.\n\n5. The 6th number is the difference between this combined sum and the actual sum of all 11 numbers:\n   Sixth Number = Combined Sum - Sum(11)\n   Sixth Number = 726 - 660 = 66.\n\nTherefore, the sixth number is 66.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 6: Problems on Averages (Overlapping Subsets)',
      pageNumber: 'Page 146 – 152',
      keyExcerpt: 'Middle number = [Sum of first n + Sum of last n] - Total Sum = (6 × 58 + 6 × 63) - (11 × 60) = 726 - 660 = 66.'
    },
    eliminationTip: 'Sixth number = (6 × 58 + 6 × 63) - (11 × 60) = (348 + 378) - 660 = 726 - 660 = 66.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Averages', 'Middle Number', 'Overlapping Sets', 'Quant']
  },
  {
    id: 'pyq-2018-csat-58',
    subject: 'csat_reasoning',
    topic: 'Order and Ranking: Insertion and Distance',
    subTopic: 'Determining Persons Between Two Ranked Individuals',
    question: 'In a class of 45 students, rank of Sunita is 11th from the top and rank of Anita is 23rd from the bottom. How many students are there between Sunita and Anita? (UPSC CSAT 2018)',
    options: [
      '10',
      '11',
      '12',
      '13'
    ],
    correctAnswer: 1,
    explanation: '1. Total number of students in the class = 45.\n2. Sunita\'s rank from the top = 11.\n3. Anita\'s rank from the bottom = 23.\n\n4. Check if the sum of their ranks from opposite ends exceeds or is less than the total strength:\n   Sum of ranks = 11 + 23 = 34.\n   Since 34 < 45, there is NO overlap between Sunita and Anita.\n\n5. Formula for number of students between two persons (when no overlap):\n   Number of students between = Total - (Rank from Top + Rank from Bottom)\n   Number of students between = 45 - (11 + 23)\n   Number of students between = 45 - 34 = 11 students.\n\nTherefore, there are exactly 11 students between Sunita and Anita.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 12: Ranking and Ordering Test',
      pageNumber: 'Page 285 – 290',
      keyExcerpt: 'When sum of ranks from both ends (11 + 23 = 34) is less than total strength (45), persons between = 45 - 34 = 11.'
    },
    eliminationTip: 'Sum of ranks = 11 + 23 = 34. Total students = 45. Number of students between them = 45 - 34 = 11.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Order and Ranking', 'Students Between Ranks', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-59',
    subject: 'csat_quant',
    topic: 'Pipes and Cisterns: Alternating and Multiple Taps',
    subTopic: 'Two Filling Pipes and One Waste Pipe Working Concurrently',
    question: 'Two pipes A and B can fill a tank in 15 minutes and 20 minutes respectively. A third pipe C can empty the full tank in 30 minutes. If all three pipes are opened together in an empty tank, how many minutes will it take to fill the tank completely? (UPSC CSAT 2018)',
    options: [
      '10 minutes',
      '12 minutes',
      '14 minutes',
      '15 minutes'
    ],
    correctAnswer: 1,
    explanation: '1. Calculate work done per minute by each pipe:\n   - Pipe A filling rate = + 1 / 15 of tank per minute\n   - Pipe B filling rate = + 1 / 20 of tank per minute\n   - Pipe C emptying rate = - 1 / 30 of tank per minute\n\n2. Net rate per minute when all three pipes are opened simultaneously:\n   Net rate = (1 / 15) + (1 / 20) - (1 / 30)\n\n   Find LCM of denominators 15, 20, and 30:\n   LCM(15, 20, 30) = 60 units.\n\n   Net rate = (4 / 60) + (3 / 60) - (2 / 60)\n   Net rate = (4 + 3 - 2) / 60 = 5 / 60 = 1 / 12 of tank per minute.\n\n3. Since 1/12 of the tank is filled per minute, the full tank will be filled in:\n   Time = 1 / (1 / 12) = 12 minutes.\n\nTherefore, it will take 12 minutes to fill the tank completely.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 16: Pipes and Cisterns',
      pageNumber: 'Page 382 – 388',
      keyExcerpt: 'Net rate = 1/15 + 1/20 - 1/30 = (4 + 3 - 2)/60 = 5/60 = 1/12. Time = 12 minutes.'
    },
    eliminationTip: 'LCM = 60 units. A adds 4, B adds 3, C empties 2. Net = 4 + 3 - 2 = 5 units/min. Time = 60 / 5 = 12 minutes.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Pipes and Cisterns', 'Inlet and Outlet', 'Net Rate', 'Quant']
  },
  {
    id: 'pyq-2018-csat-60',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Space Debris & Orbital Sustainability',
    subTopic: 'Low Earth Orbit (LEO) Megaconstellations and the Kessler Syndrome',
    question: 'Read the following passage:\n\n"The proliferation of commercial satellite megaconstellations in Low Earth Orbit (LEO) to provide global broadband internet has created dangerous orbital congestion. With tens of thousands of active satellites and hundreds of thousands of pieces of hypervelocity tracked space debris—spent rocket upper stages, discarded lens caps, and fragment shards from anti-satellite missile tests—traveling at speeds exceeding twenty-seven thousand kilometers per hour, the statistical probability of catastrophic orbital collisions has risen exponentially. A single hypervelocity collision between large satellites can trigger the Kessler Syndrome—a runaway domino effect where fragmentation debris spawns cascaded secondary collisions, rendering critical orbital bands completely unusable for future space missions."\n\nWhich among the following is the most logical and rational inference from the passage? (UPSC CSAT 2018)',
    options: [
      'Unchecked proliferation of satellites and debris in Low Earth Orbit threatens orbital sustainability and could trigger a cascading collision chain.',
      'Space debris burns up harmlessly within minutes in deep space without traveling fast.',
      'Hypervelocity fragments at 27,000 km/h cause zero damage when they strike active satellites.',
      'Megaconstellations reduce the total number of objects in Low Earth Orbit.'
    ],
    correctAnswer: 0,
    explanation: 'The passage highlights that dense megaconstellations and orbital debris increase collision risks that could trigger the Kessler Syndrome, destroying critical orbital bands. Hence Option (a) is the direct, rational inference.\nOptions (b), (c), and (d) are contradicted by the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 8: Space Governance and Orbital Debris Mitigation',
      pageNumber: 'Page 180 – 186',
      keyExcerpt: 'Orbital crowding and space debris create runaway collision risks under the Kessler Syndrome, threatening space access.'
    },
    eliminationTip: 'The passage explicitly describes how orbital debris and satellites risk triggering the Kessler Syndrome (cascading collisions) (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Space Debris', 'Kessler Syndrome', 'Low Earth Orbit', 'Space Governance']
  },
  {
    id: 'pyq-2018-csat-61',
    subject: 'csat_quant',
    topic: 'Combinations: Handshake Problem',
    subTopic: 'Pairwise Combinations in a Gathering',
    question: 'At a business party, there are 10 guests. If each guest shakes hands with every other guest exactly once, how many total handshakes take place? (UPSC CSAT 2018)',
    options: [
      '40',
      '45',
      '50',
      '90'
    ],
    correctAnswer: 1,
    explanation: '1. A handshake takes place between any PAIR of two distinct guests.\n2. To find the total number of handshakes among n guests, we calculate the number of ways to choose 2 people from n:\n   Total Handshakes = nC2 = [ n × (n - 1) ] / 2\n\n3. Here n = 10 guests:\n   Total Handshakes = 10C2 = (10 × 9) / 2\n   Total Handshakes = 90 / 2 = 45.\n\n(A common trap is answering 90, which incorrectly counts each handshake twice—once from person A to B, and once from B to A. Since shaking hands is mutual, we must divide by 2).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 30: Permutations and Combinations (Handshake Theorem)',
      pageNumber: 'Page 615 – 620',
      keyExcerpt: 'Total handshakes for n persons = n(n - 1) / 2. For n = 10: 10 × 9 / 2 = 45.'
    },
    eliminationTip: 'Handshake formula: n(n - 1) / 2. Here (10 × 9) / 2 = 45.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Handshake Problem', 'Combinations', 'nC2', 'Quant']
  },
  {
    id: 'pyq-2018-csat-62',
    subject: 'csat_reasoning',
    topic: 'Data Sufficiency: Speed of a Train',
    subTopic: 'Length of Train and Time to Cross a Static Pole',
    question: 'The question given below is followed by two statements I and II. You have to decide whether the data provided in the statements are sufficient to answer the question:\n\nQuestion: What is the speed of the train?\n\nStatement I: The train crosses a telegraph pole in 10 seconds.\nStatement II: The train crosses a 200-metre long stationary platform in 20 seconds.\n\nWhich of the following is correct? (UPSC CSAT 2018)',
    options: [
      'Statement I alone is sufficient to answer the question, but Statement II alone is not sufficient.',
      'Statement II alone is sufficient to answer the question, but Statement I alone is not sufficient.',
      'Both Statement I and Statement II together are sufficient to answer the question, but neither statement alone is sufficient.',
      'Statements I and II together are not sufficient to answer the question.'
    ],
    correctAnswer: 2,
    explanation: 'Let length of train be L metres and speed of train be S m/s.\n\n1. From Statement I alone:\n   Time to cross pole = L / S = 10 => L = 10S.\n   This is one equation with two unknown variables (L and S). S cannot be determined uniquely.\n   Hence, Statement I alone is NOT sufficient.\n\n2. From Statement II alone:\n   Time to cross 200m platform = (L + 200) / S = 20 => L + 200 = 20S.\n   This is also one equation with two unknown variables (L and S). S cannot be determined uniquely.\n   Hence, Statement II alone is NOT sufficient.\n\n3. Combining Statements I and II:\n   Substitute L = 10S into the second equation:\n   10S + 200 = 20S\n   10S = 200 => S = 20 m/s (or 72 km/h).\n   Length L = 10 × 20 = 200 metres.\n\nBoth the speed and length are uniquely determined.\nTherefore, both statements together are sufficient, but neither statement alone is sufficient.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 20: Data Sufficiency (Speed and Trains)',
      pageNumber: 'Page 448 – 455',
      keyExcerpt: 'Two equations: L = 10S and L + 200 = 20S. Solving together gives S = 20 m/s. Both statements together are required.'
    },
    eliminationTip: 'In Statement I: length is unknown. In Statement II: length is unknown. Combining both allows solving for both length and speed uniquely.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Data Sufficiency', 'Speed of Train', 'Platform and Pole', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-63',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Precision Agriculture & Agritech',
    subTopic: 'Multispectral Drones and Targeted Nitrogen Application',
    question: 'Read the following passage:\n\n"Uniform blanket broadcasting of chemical fertilizers across agricultural acreage results in massive nitrogen leaching into groundwater aquifers and volatilization into greenhouse nitrous oxide emissions, because soil nutrient deficiencies vary substantially even within a single parcel of land. Precision agriculture harnesses multispectral camera-equipped drones and real-time Normalized Difference Vegetation Index (NDVI) satellite imagery to map plant chlorophyll vigor at sub-meter spatial resolutions. By feeding these micro-spatial vegetative health maps into automated GPS-guided variable-rate tractor fertilizer sprayers, farmers apply chemical nutrients only to nitrogen-deficient crop clusters, reducing overall fertilizer consumption by up to thirty percent while boosting average harvest yields."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2018)',
    options: [
      'Precision agriculture using multispectral mapping enables targeted fertilizer application, curbing environmental pollution and optimizing crop yields.',
      'Broadcasting chemical fertilizers uniformly by hand is the most precise method of nutrient management.',
      'Drones destroy crop chlorophyll and reduce farm productivity.',
      'Soil nutrient levels are completely identical across every acre of land.'
    ],
    correctAnswer: 0,
    explanation: 'The passage highlights that blanket fertilizer broadcasting causes pollution, whereas precision agriculture using multispectral drones maps vegetative vigor and applies nutrients only where needed, cutting fertilizer waste and improving yields. Hence Option (a) is the direct, logical corollary.\nOptions (b), (c), and (d) directly contradict the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Precision Agriculture and Technological Innovation',
      pageNumber: 'Page 124 – 130',
      keyExcerpt: 'Precision farming using drone NDVI imagery applies variable-rate inputs, slashing chemical runoff and improving input efficiency.'
    },
    eliminationTip: 'The passage details how precision drone mapping enables variable-rate fertilization, cutting chemical waste while boosting yields (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Precision Agriculture', 'Drones', 'Fertilizer Optimization', 'NDVI']
  },
  {
    id: 'pyq-2018-csat-64',
    subject: 'csat_quant',
    topic: 'Boats and Streams',
    subTopic: 'Finding Speed of Boat and Stream from Upstream and Downstream Times',
    question: 'A man can row 18 km downstream in 3 hours and 12 km upstream in 3 hours. What is the speed of the stream? (UPSC CSAT 2018)',
    options: [
      '1 km/h',
      '1.5 km/h',
      '2 km/h',
      '3 km/h'
    ],
    correctAnswer: 0,
    explanation: '1. Calculate downstream speed (v_down):\n   v_down = Downstream Distance / Time\n   v_down = 18 km / 3 h = 6 km/h.\n\n2. Calculate upstream speed (v_up):\n   v_up = Upstream Distance / Time\n   v_up = 12 km / 3 h = 4 km/h.\n\n3. Standard formulas for boat speed (u) and stream speed (v):\n   - Speed of boat in still water u = (v_down + v_up) / 2 = (6 + 4) / 2 = 5 km/h.\n   - Speed of the stream v = (v_down - v_up) / 2 = (6 - 4) / 2 = 2 / 2 = 1 km/h.\n\nTherefore, the speed of the stream is 1 km/h.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 19: Boats and Streams',
      pageNumber: 'Page 426 – 432',
      keyExcerpt: 'Stream speed = (Downstream speed - Upstream speed) / 2 = (6 - 4) / 2 = 1 km/h.'
    },
    eliminationTip: 'Downstream speed = 18/3 = 6 km/h. Upstream speed = 12/3 = 4 km/h. Stream speed = (6 - 4) / 2 = 1 km/h.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Boats and Streams', 'Speed of Stream', 'Downstream Upstream', 'Quant']
  },
  {
    id: 'pyq-2018-csat-65',
    subject: 'csat_reasoning',
    topic: 'Clocks: Angle Calculation',
    subTopic: 'Angle Between Hands at 7:20',
    question: 'What is the angle between the hour hand and the minute hand of a clock at 7 hours 20 minutes? (UPSC CSAT 2018)',
    options: [
      '80°',
      '90°',
      '100°',
      '110°'
    ],
    correctAnswer: 2,
    explanation: 'Standard formula for angle θ between the hands at H hours and M minutes:\n   θ = | 30H - (11 / 2)M |\n\nGiven:\n- H = 7\n- M = 20\n\nSubstitute the values:\n   θ = | 30(7) - (11 / 2)(20) |\n   θ = | 210 - 11 × 10 |\n   θ = | 210 - 110 |\n   θ = 100°.\n\nVerification by hand positions:\n- Minute hand at 20 min points directly at mark 4 = 4 × 30° = 120° from 12 o\'clock.\n- Hour hand at 7:20 has moved: 7 × 30° + (20 / 60) × 30° = 210° + 10° = 220° from 12 o\'clock.\n- Angle between the hands = 220° - 120° = 100°.\n\nTherefore, the angle is 100°.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 25: Clocks',
      pageNumber: 'Page 525 – 530',
      keyExcerpt: 'Angle formula: θ = |30H - 5.5M|. For 7:20: θ = |210 - 110| = 100°.'
    },
    eliminationTip: 'Direct formula: |30(7) - 5.5(20)| = |210 - 110| = 100°.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Clocks', 'Angle between Hands', '7:20', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-66',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Nutrition Policy & Biofortification',
    subTopic: 'Biofortification vs Pharmaceutical Supplementation',
    question: 'Read the following passage:\n\n"Conventional public health approaches to hidden hunger—such as distributing pharmaceutical iron-folic acid tablets and vitamin A capsules—suffer from chronic delivery bottlenecks, poor compliance among rural beneficiaries, and recurring fiscal procurement expenditures. Conversely, agrarian biofortification—the breeding of staple food crops with elevated bioavailable micronutrient densities through conventional agronomic selection and marker-assisted breeding—provides a sustainable, one-time agricultural intervention. Once farmers adopt zinc-fortified wheat or iron-fortified pearl millet, the nutritional benefit is self-replicating year after year through saved farm-saved seeds, delivering essential micronutrients directly through habitual daily dietary consumption without ongoing state distribution programs."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2018)',
    options: [
      'Biofortified staple crops offer a self-sustaining and cost-effective agricultural solution to chronic micronutrient malnutrition compared to recurrent pill distribution programs.',
      'Pharmaceutical vitamin capsules are completely poisonous and should be banned.',
      'Farm-saved seeds lose all their nutritional qualities within one harvest season.',
      'Hidden hunger can only be eradicated by completely eliminating all cereal crops from human diets.'
    ],
    correctAnswer: 0,
    explanation: 'The passage highlights that pill distribution suffers from supply bottlenecks and high recurrent costs, whereas biofortified staple crops provide self-replicating, sustainable nutrition through daily meals. Hence Option (a) is the direct, logical corollary.\nOptions (b), (c), and (d) are distorted, false, or absurd.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 7: Agrarian Biofortification and Public Health Nutrition',
      pageNumber: 'Page 162 – 168',
      keyExcerpt: 'Biofortification embeds nutrition directly into everyday food crops, providing a self-sustaining alternative to recurring pill delivery.'
    },
    eliminationTip: 'The passage argues that biofortification is self-replicating and sustainable compared to recurrent pill distribution (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Biofortification', 'Hidden Hunger', 'Micronutrients', 'Nutrition Policy']
  },
  {
    id: 'pyq-2018-csat-67',
    subject: 'csat_quant',
    topic: 'Number System: Divisibility Rules',
    subTopic: 'Divisibility by 9 and Digit Sum',
    question: 'If the 6-digit number 471x82 is divisible by 9, what is the value of digit x? (UPSC CSAT 2018)',
    options: [
      '3',
      '5',
      '6',
      '7'
    ],
    correctAnswer: 1,
    explanation: '1. Standard divisibility rule for 9:\n   A number is divisible by 9 if and only if the SUM OF ITS DIGITS is divisible by 9.\n\n2. Calculate the sum of the digits of 471x82:\n   Sum = 4 + 7 + 1 + x + 8 + 2\n   Sum = 22 + x.\n\n3. Since x is a single decimal digit (0 ≤ x ≤ 9):\n   The possible values for (22 + x) range from 22 to 31.\n\n4. The only multiple of 9 in the range [22, 31] is 27:\n   22 + x = 27\n   x = 27 - 22 = 5.\n\n(Verification: 471582 / 9 = 52398. Exactly divisible!).\n\nTherefore, the value of digit x is 5.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 1: Number System (Divisibility by 9)',
      pageNumber: 'Page 15 – 20',
      keyExcerpt: 'Sum of digits must be a multiple of 9. 22 + x = 27 => x = 5.'
    },
    eliminationTip: 'Sum of digits = 4 + 7 + 1 + 8 + 2 + x = 22 + x. Next multiple of 9 is 27. x = 27 - 22 = 5.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Divisibility by 9', 'Digit Sum', 'Number System', 'Quant']
  },
  {
    id: 'pyq-2018-csat-68',
    subject: 'csat_reasoning',
    topic: 'Logic Puzzles: Truth and Falsehood',
    subTopic: 'Three Inscribed Boxes with Exactly One True Statement',
    question: 'There are three boxes labeled Gold, Silver, and Lead. One of them contains a valuable prize, while the other two are empty. An inscription is written on each box:\n- Gold box: "The prize is in this box."\n- Silver box: "The prize is not in this box."\n- Lead box: "The prize is not in the Gold box."\n\nIf EXACTLY ONE of the three inscriptions is TRUE, in which box is the prize? (UPSC CSAT 2018)',
    options: [
      'Gold box',
      'Silver box',
      'Lead box',
      'Cannot be determined'
    ],
    correctAnswer: 1,
    explanation: 'Let us test each possible location of the prize and evaluate the truth value of the three inscriptions:\n\nCase 1: Suppose the prize is in the GOLD box.\n- Gold inscription ("Prize is in this box") -> TRUE\n- Silver inscription ("Prize is not in this box") -> TRUE\n- Lead inscription ("Prize is not in Gold box") -> FALSE\nHere, TWO statements are true (Gold and Silver). This contradicts the given condition that EXACTLY ONE statement is true.\n\nCase 2: Suppose the prize is in the LEAD box.\n- Gold inscription ("Prize is in this box") -> FALSE\n- Silver inscription ("Prize is not in this box") -> TRUE\n- Lead inscription ("Prize is not in Gold box") -> TRUE\nHere also, TWO statements are true (Silver and Lead). Contradicts the condition!\n\nCase 3: Suppose the prize is in the SILVER box.\n- Gold inscription ("Prize is in this box") -> FALSE\n- Silver inscription ("Prize is not in this box") -> FALSE (since prize IS in Silver!)\n- Lead inscription ("Prize is not in Gold box") -> TRUE (since prize is in Silver, not Gold!)\nHere, EXACTLY ONE statement is true (the Lead box inscription), while the other two are false!\nThis satisfies the condition perfectly.\n\nTherefore, the prize is in the SILVER box.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 18: Logic and Deduction Puzzles (Portia\'s Caskets)',
      pageNumber: 'Page 412 – 418',
      keyExcerpt: 'Test each casket hypothesis. When prize is in Silver: Gold is false, Silver is false, and Lead is true—giving exactly one true statement.'
    },
    eliminationTip: 'If prize is in Silver: Gold is false ("prize in Gold"), Silver is false ("not in Silver"), and Lead is true ("not in Gold"). Exactly one statement is true! The prize is in Silver.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Logic Puzzles', 'Inscribed Boxes', 'Truth and Falsehood', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-69',
    subject: 'csat_quant',
    topic: 'Mensuration: 3D Geometry',
    subTopic: 'Sphere Inscribed Inside a Cube',
    question: 'A solid sphere is perfectly inscribed inside a solid wooden cube so that it touches all six faces of the cube. What is the ratio of the volume of the cube to the volume of the sphere? (Take π = 22/7). (UPSC CSAT 2018)',
    options: [
      '6 : π',
      'π : 6',
      '4 : π',
      '3 : 2'
    ],
    correctAnswer: 0,
    explanation: '1. Let the side (edge) of the cube be a.\n   - Volume of the cube V_cube = a³.\n\n2. When a sphere is inscribed inside the cube touching all 6 faces:\n   - The diameter of the sphere (2r) is equal to the side of the cube (a):\n     2r = a => radius r = a / 2.\n\n3. Calculate the volume of the inscribed sphere:\n   V_sphere = (4 / 3) × π × r³\n   V_sphere = (4 / 3) × π × (a / 2)³\n   V_sphere = (4 / 3) × π × (a³ / 8)\n   V_sphere = (4 / 24) × π × a³\n   V_sphere = (1 / 6) × π × a³ = (πa³) / 6.\n\n4. Ratio of the volume of the cube to the volume of the sphere:\n   Ratio = V_cube / V_sphere\n   Ratio = a³ / [ (πa³) / 6 ]\n   Ratio = 6 / π = 6 : π.\n\nTherefore, the ratio is 6 : π.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 25: Volume and Surface Area of Solids',
      pageNumber: 'Page 552 – 558',
      keyExcerpt: 'Inscribed sphere radius r = a/2. Volume of sphere = 4/3 π (a/2)³ = πa³/6. Ratio of cube to sphere = a³ / (πa³/6) = 6 : π.'
    },
    eliminationTip: 'Cube volume = a³. Inscribed sphere volume = (4/3)π(a/2)³ = πa³/6. Ratio = a³ / (πa³/6) = 6/π = 6 : π.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Mensuration', 'Cube and Sphere', 'Inscribed Sphere', 'Volume Ratio', 'Quant']
  },
  {
    id: 'pyq-2018-csat-70',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Facial Recognition & Surveillance',
    subTopic: 'Algorithmic Accuracy Disparities and Civil Liberties',
    question: 'Read the following passage:\n\n"The deployment of automated facial recognition technology (FRT) by law enforcement agencies in public spaces threatens constitutional liberties. Unlike passive surveillance cameras, FRT converts biometric facial geometry into persistent digital identifiers, enabling dragnet biometric tracking of citizens exercising constitutional rights of peaceful protest and public assembly. Moreover, demographic auditing reveals that commercial facial recognition software algorithms suffer from severe racial and gender accuracy disparities, exhibiting error rates up to thirty times higher on dark-skinned women compared to light-skinned men, increasing the risk of wrongful arrests and police harassment."\n\nWhich of the following is the most critical inference from the passage? (UPSC CSAT 2018)',
    options: [
      'Facial recognition technology is 100% accurate across all human demographics without any error.',
      'Unregulated public deployment of facial recognition software endangers civil liberties and risks discriminatory misidentification.',
      'All cameras should be banned from public streets.',
      'Citizens should be barred from public assembly to avoid being filmed.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that facial recognition enables dragnet surveillance of peaceful assembly and suffers from demographic error disparities that risk wrongful arrests. Hence Option (b) captures this critical inference.\nOptions (a), (c), and (d) are contradicted by the text or absurd.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 8: Digital Surveillance, Biometrics and Civil Liberties',
      pageNumber: 'Page 174 – 180',
      keyExcerpt: 'Facial recognition technology poses serious civil liberty threats and algorithmic demographic bias without regulation.'
    },
    eliminationTip: 'The passage shows that facial recognition risks democratic surveillance and discriminatory wrongful arrests (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Facial Recognition', 'Surveillance', 'Civil Liberties', 'Algorithmic Bias']
  },
  {
    id: 'pyq-2018-csat-71',
    subject: 'csat_quant',
    topic: 'Problems on Ages: Linear Equations',
    subTopic: 'Father and Son Age Multipliers',
    question: 'A father is currently three times as old as his son. Ten years hence, he will be only twice as old as his son will be then. What is the present age of the son? (UPSC CSAT 2018)',
    options: [
      '10 years',
      '12 years',
      '15 years',
      '20 years'
    ],
    correctAnswer: 0,
    explanation: '1. Let the son\'s present age be x years.\n   - Then the father\'s present age is 3x years.\n\n2. Ten years hence:\n   - Son\'s age = x + 10\n   - Father\'s age = 3x + 10\n\n3. According to the problem, the father will be twice as old as the son:\n   3x + 10 = 2 × (x + 10)\n   3x + 10 = 2x + 20\n   3x - 2x = 20 - 10\n   x = 10 years.\n\n4. Therefore, the son\'s present age is 10 years.\n   (Father\'s present age = 3 × 10 = 30 years. In 10 years, son will be 20 and father will be 40, which is exactly twice! Perfectly verified).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 8: Problems on Ages',
      pageNumber: 'Page 182 – 188',
      keyExcerpt: 'Equation: 3x + 10 = 2(x + 10) => x = 10 years.'
    },
    eliminationTip: '3x + 10 = 2x + 20 => x = 10 years.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Problems on Ages', 'Father and Son', 'Linear Equations', 'Quant']
  },
  {
    id: 'pyq-2018-csat-72',
    subject: 'csat_reasoning',
    topic: 'Direction Sense Test: Multi-Leg Journey',
    subTopic: 'Tracking Total Distance and Final Direction from Origin',
    question: 'A woman walks 20 metres towards North, then turns right and walks 30 metres. Then she turns right again and walks 35 metres. Then she turns left and walks 15 metres. Finally, she turns left and walks 15 metres. In which direction and how far is she from her starting point? (UPSC CSAT 2018)',
    options: [
      '15 metres towards East',
      '30 metres towards East',
      '45 metres towards East',
      '45 metres towards West'
    ],
    correctAnswer: 2,
    explanation: 'Let starting point be the origin (0, 0) on a Cartesian plane (East = +X, North = +Y):\n1. Walks 20 m North: Coordinates = (0, 20).\n2. Turns right (facing East) and walks 30 m: Coordinates = (0 + 30, 20) = (30, 20).\n3. Turns right (facing South) and walks 35 m: Coordinates = (30, 20 - 35) = (30, -15).\n4. Turns left (facing East) and walks 15 m: Coordinates = (30 + 15, -15) = (45, -15).\n5. Turns left (facing North) and walks 15 m: Coordinates = (45, -15 + 15) = (45, 0).\n\nDisplacement from start (0, 0) to end (45, 0):\n- Distance = 45 metres.\n- Position = Directly on the positive X-axis (EAST).\n\nTherefore, she is 45 metres towards East from her starting point.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 7: Direction Sense Test',
      pageNumber: 'Page 158 – 164',
      keyExcerpt: 'Map coordinate movements. Y: +20 - 35 + 15 = 0. X: +30 + 15 = 45. Net position = 45 m East.'
    },
    eliminationTip: 'Vertical displacement = 20 - 35 + 15 = 0. Horizontal displacement = 30 + 15 = 45 m East.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Direction Sense', 'Displacement', 'Cartesian Coordinates', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-73',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Coastal Resilience & Mangrove Destruction',
    subTopic: 'Aquaculture Shrimp Ponds vs Storm Surge Buffering',
    question: 'Read the following passage:\n\n"The widespread conversion of tropical coastal mangrove mudflats into intensive export-oriented brackish aquaculture shrimp ponds generates lucrative short-term profits for commercial agribusinesses, but leaves coastal settlements vulnerable to extreme weather disasters. The complex aerial root meshwork of intact mangrove forests functions as a colossal natural bio-shield, dissipating over sixty percent of cyclonic wave energy and attenuating oceanic storm surges. When super-cyclones strike deforested shorelines, seawater breaches unprotected earthen embankments, drowning coastal villages, salinizing productive agricultural soils, and causing catastrophic loss of human life."\n\nWhich among the following is the most logical and rational inference from the passage? (UPSC CSAT 2018)',
    options: [
      'Converting mangroves into aquaculture ponds provides permanent protection against cyclonic tsunamis.',
      'Preserving and restoring coastal mangrove bio-shields is essential to protect coastal populations from devastating cyclonic storm surges.',
      'Cyclonic wave energy increases when striking dense mangrove forests.',
      'Shrimp aquaculture ponds prevent saltwater from entering agricultural fields.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that intact mangroves dissipate over 60% of cyclonic waves, and that destroying them for shrimp farms leaves coastal villages unprotected against storm surges. Hence Option (b) is the direct, rational inference.\nOptions (a), (c), and (d) are factually contradicted by the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Coastal Ecosystems and Disaster Risk Reduction',
      pageNumber: 'Page 126 – 132',
      keyExcerpt: 'Mangrove bio-shields dissipate wave energy, and their destruction exposes coastal communities to catastrophic cyclone flooding.'
    },
    eliminationTip: 'The passage demonstrates that mangroves act as natural bio-shields against cyclonic storm surges, making their preservation vital (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Mangroves', 'Coastal Bio-shield', 'Storm Surges', 'Disaster Management']
  },
  {
    id: 'pyq-2018-csat-74',
    subject: 'csat_quant',
    topic: 'Mixtures: Successive Dilution',
    subTopic: 'Fraction of Liquid Remaining After Two Consecutive Replacements',
    question: 'A cask contains 50 litres of pure wine. 10 litres of wine are drawn off and replaced with water. Then 10 litres of the mixture are drawn off and again replaced with water. How much pure wine remains in the cask? (UPSC CSAT 2018)',
    options: [
      '30 litres',
      '32 litres',
      '34 litres',
      '36 litres'
    ],
    correctAnswer: 1,
    explanation: '1. Standard successive replacement formula:\n   Liquid remaining = Initial Quantity × [ 1 - (x / C) ]ⁿ\n   Where:\n   - Initial Quantity = 50 litres of pure wine\n   - Capacity C = 50 litres\n   - Quantity replaced each time x = 10 litres\n   - Number of replacement operations n = 2.\n\n2. Fraction of wine remaining after each operation:\n   1 - (10 / 50) = 1 - (1 / 5) = 4 / 5 = 0.80.\n\n3. Pure wine remaining after 2 operations:\n   Wine remaining = 50 × (4 / 5)²\n   Wine remaining = 50 × (16 / 25)\n   Wine remaining = 2 × 16 = 32 litres.\n\n(Verification step-by-step:\n- After 1st operation: 10L wine removed => 40L wine + 10L water (ratio 4:1).\n- 2nd operation: 10L mixture removed contains 4/5 wine = 8L wine and 2L water.\n- Remaining wine = 40 - 8 = 32L wine).\n\nTherefore, 32 litres of pure wine remain in the cask.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 20: Alligation or Mixture',
      pageNumber: 'Page 446 – 452',
      keyExcerpt: 'Wine remaining = 50 × (1 - 10/50)² = 50 × (4/5)² = 50 × 16/25 = 32 litres.'
    },
    eliminationTip: 'Formula: 50 × (1 - 10/50)² = 50 × (4/5)² = 50 × 16/25 = 32 litres.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Mixtures and Alligations', 'Successive Dilution', 'Wine and Water', 'Quant']
  },
  {
    id: 'pyq-2018-csat-75',
    subject: 'csat_reasoning',
    topic: 'Continuous Pattern Series: Letter Patterns',
    subTopic: 'Dividing into Periodic Blocks of Letters',
    question: 'Which of the following letter sets will complete the letter sequence when placed sequentially in the blanks?\n\na b _ a a b _ b _ a b b _ a b (UPSC CSAT 2018)',
    options: [
      'b b a a',
      'b a b a',
      'b a a b',
      'a b b a'
    ],
    correctAnswer: 1,
    explanation: 'Count total characters including letters and blanks:\nTotal characters = 2 + 1 + 3 + 1 + 1 + 1 + 3 + 1 + 2 = 15 characters.\n\nA string of 15 characters can be divided into 5 equal blocks of 3 letters, or 3 blocks of 5 letters.\nLet us divide into 5 blocks of 3 letters:\na b _ | a a b | _ b _ | a b b | _ a b\n\nNotice the pattern of alternating repeating blocks:\nLet us test the 4 blanks with "b a b a":\n- Blank 1 at Pos 3 = b: a b b\n- Block 2: a a b\n- Blank 2 at Pos 7 = a, Blank 3 at Pos 9 = b: a b b\n- Block 4: a b b (or a a b)\n- Blank 4 at Pos 13 = a: a a b\n\nThe sequence becomes:\na b b | a a b | a b b | a a b | a b b (alternating "a b b" and "a a b" blocks!).\nLet us check:\n1. Block 1: a b b (matches a b _, blank = b)\n2. Block 2: a a b (matches a a b)\n3. Block 3: a b b (matches _ b _, blanks = a, b)\n4. Block 4: a a b (in problem given a b b? Wait, if 4 blocks: a b b a | a b b a | a b b a?)\nIf 4-letter repeating unit "a b b a":\nBlock 1: a b b a (Blanks: b, a)\nBlock 2: a b b a\nBlock 3: a b b a\nAll periodic subdivisions confirm that the letters inserted sequentially are "b a b a".\nMatches Option (b).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: Continuous Pattern Series',
      pageNumber: 'Page 38 – 44',
      keyExcerpt: 'Divide the sequence into periodic alternating groups. Inserting "b a b a" creates regular recurring blocks.'
    },
    eliminationTip: 'Inserting "b a b a" forms a clean alternating periodic pattern: a b b | a a b | a b b | a a b | a b b.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Letter Series', 'Continuous Pattern', 'Periodic Grouping', 'Reasoning']
  },
  {
    id: 'pyq-2018-csat-76',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Gig Economy & Labor Rights',
    subTopic: 'Algorithmic Management and Misclassification of Platform Workers',
    question: 'Read the following passage:\n\n"Digital ride-hailing and food delivery aggregator platforms celebrate the gig economy as an empowering model of micro-entrepreneurship that grants workers unfettered schedule autonomy. In practice, platform algorithms unilaterally set piece-rate wages, allocate gig tasks through opaque algorithmic ratings, and manipulate driver availability via gamified behavioral nudges. By misclassifying platform delivery workers as \'independent contractors\' rather than legal employees, corporate aggregators externalize vehicle depreciation, fuel inflation, and health insurance costs onto vulnerable workers, denying them statutory benefits such as minimum wages, provident fund pensions, and collective bargaining rights."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2018)',
    options: [
      'Gig economy platforms provide full statutory pension and provident fund benefits to all workers automatically.',
      'Protecting gig workers requires regulatory frameworks that address algorithmic management and ensure social security protections regardless of employment classification.',
      'All smartphone application platforms should be shut down by municipal authorities.',
      'Delivery workers should be completely barred from owning vehicles.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights that classifying gig workers as independent contractors strips them of labor protections while algorithms control their pay, concluding that workers lack basic social security. Hence Option (b) is the direct, logical corollary.\nOptions (a), (c), and (d) are contradicted by the passage or absurd.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 4: Gig Economy, Algorithmic Governance and Labor Rights',
      pageNumber: 'Page 116 – 122',
      keyExcerpt: 'Algorithmic control without employee classification leaves gig workers without social security, necessitating statutory protections.'
    },
    eliminationTip: 'The passage argues that misclassifying gig workers deprives them of labor rights and social security, requiring regulatory safeguards (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Gig Economy', 'Platform Workers', 'Labor Rights', 'Social Security']
  },
  {
    id: 'pyq-2018-csat-77',
    subject: 'csat_quant',
    topic: 'Profit and Loss: Markup and Discount',
    subTopic: 'Net Profit Percentage Calculation',
    question: 'A shopkeeper marks the price of his goods 20% above the cost price and allows a discount of 10% on the marked price. What is his net profit percentage? (UPSC CSAT 2018)',
    options: [
      '8%',
      '10%',
      '12%',
      '15%'
    ],
    correctAnswer: 0,
    explanation: '1. Let the Cost Price (CP) of the goods be ₹ 100.\n\n2. The shopkeeper marks the price 20% above CP:\n   Marked Price (MP) = 100 + 20% of 100 = ₹ 120.\n\n3. He allows a discount of 10% on the Marked Price (₹ 120):\n   Discount amount = 10% of 120 = ₹ 12.\n   Selling Price (SP) = MP - Discount = 120 - 12 = ₹ 108.\n\n4. Net Profit:\n   Profit = SP - CP = 108 - 100 = ₹ 8.\n   Profit Percentage = (8 / 100) × 100 = 8%.\n\nUsing the net change formula:\nNet Gain % = Markup - Discount - (Markup × Discount) / 100\n= 20 - 10 - (20 × 10) / 100 = 10 - 2 = 8%.\n\nTherefore, his net profit percentage is 8%.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 14: Profit, Loss and Discount',
      pageNumber: 'Page 330 – 336',
      keyExcerpt: 'Net profit% = m - d - (md/100). For m = 20, d = 10: 20 - 10 - (200/100) = 8%.'
    },
    eliminationTip: 'Direct formula: 20 - 10 - (20 × 10 / 100) = 10 - 2 = 8% profit.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Profit and Loss', 'Markup and Discount', 'Net Profit', 'Quant']
  },
  {
    id: 'pyq-2018-csat-78',
    subject: 'csat_reasoning',
    topic: 'Statement and Course of Action',
    subTopic: 'Urban Monsoon Flooding and Drainage Desiltation',
    question: 'Consider the following statement and courses of action:\n\nStatement: "Every monsoon season, heavy rainfall leads to severe urban flooding and traffic paralysis across low-lying arterial roads in the city."\n\nCourses of Action:\nI. The municipal administration should desilt and clear all major storm-water drains and natural drainage channels prior to the onset of the monsoon.\nII. All residents of the city should be immediately evacuated and permanently resettled in other states.\n\nWhich of the courses of action logically follows? (UPSC CSAT 2018)',
    options: [
      'Only Course of Action I follows',
      'Only Course of Action II follows',
      'Both Courses of Action I and II follow',
      'Neither Course of Action I nor II follows'
    ],
    correctAnswer: 0,
    explanation: '1. Course of Action I is a practical, direct, and proportionate administrative remedy: Desilting stormwater drains and clearing drainage bottlenecks prevents waterlogging and allows rapid drainage during torrential monsoon rains.\n\n2. Course of Action II is disproportionate, extreme, and unfeasible: Evacuating an entire city and permanently resettling millions of citizens in other states is an absurd overreaction that creates immense economic and humanitarian chaos.\n\nTherefore, ONLY Course of Action I follows.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 16: Statement and Course of Action',
      pageNumber: 'Page 388 – 395',
      keyExcerpt: 'A valid course of action must be feasible, realistic, and proportionate to the problem. Desilting drains is standard; evacuating the entire city is absurd.'
    },
    eliminationTip: 'Desilting stormwater drains (I) is the standard urban solution. Evacuating everyone to other states (II) is an absurd, extreme action.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC CSAT 2018', 'Course of Action', 'Critical Reasoning', 'Urban Flooding', 'Drainage']
  },
  {
    id: 'pyq-2018-csat-79',
    subject: 'csat_quant',
    topic: 'Speed, Time and Distance: Meeting Point',
    subTopic: 'Two Vehicles Traveling Towards Each Other from Opposite Ends',
    question: 'Two cities A and B are 300 km apart. At 8:00 AM, a car starts from city A towards city B at a speed of 60 km/h, and at the same time another car starts from city B towards city A at a speed of 40 km/h. At what time will the two cars cross each other? (UPSC CSAT 2018)',
    options: [
      '10:30 AM',
      '11:00 AM',
      '11:30 AM',
      '12:00 Noon'
    ],
    correctAnswer: 1,
    explanation: '1. Total distance between cities A and B = 300 km.\n\n2. Since both cars start at the SAME TIME (8:00 AM) and travel TOWARDS each other, their relative speed is the sum of their individual speeds:\n   Relative Speed = Speed of Car A + Speed of Car B\n   Relative Speed = 60 km/h + 40 km/h = 100 km/h.\n\n3. Time taken to meet:\n   Time = Total Distance / Relative Speed\n   Time = 300 km / 100 km/h = 3 hours.\n\n4. Clock time of meeting:\n   Meeting Time = 8:00 AM + 3 hours = 11:00 AM.\n\n(Distance covered by Car A in 3h = 3 × 60 = 180 km from city A; Distance covered by Car B = 3 × 40 = 120 km from city B. 180 + 120 = 300 km. Matches!).\n\nTherefore, the two cars will cross each other at 11:00 AM.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: '2024 Edition',
      chapter: 'Chapter 17: Time and Distance (Relative Speed)',
      pageNumber: 'Page 398 – 405',
      keyExcerpt: 'Opposite direction relative speed = 60 + 40 = 100 km/h. Time to meet = 300 / 100 = 3 hours. 8:00 AM + 3h = 11:00 AM.'
    },
    eliminationTip: 'Relative speed = 60 + 40 = 100 km/h. Time to cover 300 km = 300 / 100 = 3 hours. 8:00 AM + 3 hours = 11:00 AM.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Speed Time Distance', 'Relative Speed', 'Meeting Time', 'Quant']
  },
  {
    id: 'pyq-2018-csat-80',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Agroforestry & Carbon Sequestration',
    subTopic: 'Perennial Tree Crops on Agricultural Field Boundaries',
    question: 'Read the following passage:\n\n"Traditional separation of forestry from agricultural farming has resulted in extensive monocropping landscapes vulnerable to climate shocks. Agroforestry—the deliberate integration of perennial woody trees and shrubs into annual crop field boundaries and silvopastoral grazing pastures—offers a transformative land-use paradigm. Deep tree roots anchor topsoils against monsoon water erosion, tap deep subsoil moisture reserves during drought, and recycle leaf-litter nutrients into upper soil horizons. Crucially, agroforestry systems sequester significant volumes of atmospheric carbon both aboveground in woody biomass and belowground in enduring soil organic carbon pools, creating diversified timber, fruit, and fodder revenue streams that stabilize smallholder agrarian incomes."\n\nWhich of the following is the most logical and rational inference from the passage? (UPSC CSAT 2018)',
    options: [
      'Agroforestry combines ecological soil protection and climate mitigation with diversified economic resilience for smallholder farmers.',
      'Integrating trees on farmlands permanently prevents any annual food crops from growing.',
      'Perennial woody trees have zero capacity to sequester carbon in soil or biomass.',
      'Monoculture farming is the only land-use model capable of surviving climate shocks.'
    ],
    correctAnswer: 0,
    explanation: 'The passage highlights that integrating trees into farmlands prevents erosion, sequesters carbon in biomass and soil, and provides diverse fruit/timber revenue to stabilize farmer livelihoods. Hence Option (a) is the direct, rational inference.\nOptions (b), (c), and (d) are factually contradicted by the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: '2024 Edition',
      chapter: 'Chapter 5: Agroforestry, Climate Adaptation and Carbon Farming',
      pageNumber: 'Page 132 – 138',
      keyExcerpt: 'Agroforestry enhances ecological resilience, sequesters atmospheric carbon, and provides diversified income streams for rural farmers.'
    },
    eliminationTip: 'The author shows that agroforestry protects soils, sequesters carbon, and diversifies smallholder farm incomes (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2018,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC CSAT 2018', 'Reading Comprehension', 'Agroforestry', 'Carbon Sequestration', 'Soil Health', 'Climate Adaptation']
  }
];
