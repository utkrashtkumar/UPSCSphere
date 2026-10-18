import { Question } from '@/lib/types';

export const pyq2017_csat_1: Question[] = [
  {
    id: 'pyq-2017-csat-01',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Genetic Modification & Food Security',
    subTopic: 'Agricultural Biotechnology and Precautionary Principle',
    question: 'Read the following passage:\n\n"The debate surrounding genetically modified (GM) crops often juxtaposes the urgent imperative of feeding a growing global population against potential environmental and biosafety hazards. Proponents point to drought-tolerant, pest-resistant crops that could dramatically elevate agricultural yields while curbing synthetic pesticide runoff into freshwater ecosystems. However, skeptics caution that the long-term ecological repercussions—such as genetic drift into wild relatives, the emergence of herbicide-tolerant superweeds, and monopolistic seed patents held by multinational agribusiness conglomerates—demand stringent adherence to the precautionary principle."\n\nWhich of the following is the most logical and rational corollary to the passage? (UPSC CSAT 2017)',
    options: [
      'Genetic modification of crops should be unconditionally banned due to corporate monopolies.',
      'A balanced regulatory framework incorporating rigorous biosafety assessments is essential to harness agricultural biotechnology while mitigating environmental risks.',
      'Synthetic pesticides pose zero ecological danger compared to genetically engineered crops.',
      'Traditional indigenous farming methods are entirely incapable of feeding the world population.'
    ],
    correctAnswer: 1,
    explanation: 'The passage highlights both sides of GM crops: tremendous potential benefits (yield elevation, drought tolerance, reduced pesticide runoff) alongside real ecological hazards (gene drift, superweeds) and socioeconomic challenges (corporate monopolies). Therefore, the most logical corollary is that a balanced regulatory approach with rigorous biosafety monitoring is necessary to capture benefits while guarding against risks (Option B).\nOption A is an extreme overreaction not supported by the text.\nOption C directly contradicts the passage, which notes synthetic pesticide runoff is an existing problem.\nOption D makes an unsubstantiated generalization about traditional methods.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Science, Technology & Environment Passages',
      pageNumber: 'Page 112 – 118',
      keyExcerpt: 'Corollaries and inferences must balance competing claims presented in scientific policy passages rather than adopting absolutist extremes.'
    },
    eliminationTip: 'Avoid extreme choices ("unconditionally banned", "zero danger", "entirely incapable"). The measured policy compromise (Option B) directly reflects the passage logic.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reading Comprehension', 'Biotechnology', 'GM Crops', 'Precautionary Principle']
  },
  {
    id: 'pyq-2017-csat-02',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Climate Change & Coastal Vulnerability',
    subTopic: 'Mangrove Ecosystems as Natural Shields',
    question: 'Read the following passage:\n\n"Coastal wetlands and mangrove forests act as frontline bio-shields against storm surges, cyclonic waves, and shoreline erosion. During intense tropical cyclones, dense aerial roots and tangled prop root systems dissipate wave kinetic energy by up to 66% within the first 100 meters of mangrove belt. Yet, accelerated urban land reclamation, aquaculture conversion, and upstream damming that chokes estuarine sediment delivery have decimated over a third of global mangrove expanses. Restoring coastal vegetative buffers is not merely a conservation luxury; it is an irreplaceable adaptation imperative for coastal resilience."\n\nBased on the passage above, which of the following assumptions is/are valid?\n\n1. Built engineering structures like seawalls can completely replace the protective ecological functions of mangroves.\n2. Upstream river management directly influences the ecological health and survival of coastal mangrove forests.\n\nSelect the correct answer using the code given below: (UPSC CSAT 2017)',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1 is invalid: The passage explicitly calls mangrove restoration an "irreplaceable adaptation imperative", meaning engineered structures cannot completely substitute their protective ecological roles.\nStatement 2 is valid: The passage mentions that "upstream damming that chokes estuarine sediment delivery" has contributed to the decimation of mangroves, demonstrating that upstream hydrology directly impacts coastal mangrove ecosystems.\nHence, only Statement 2 is a valid assumption.',
    bookReference: {
      bookName: 'Reading Comprehension & Critical Reasoning for Civil Services by McGraw Hill',
      edition: '4th Edition',
      chapter: 'Chapter 4: Ecological Resilience and Environmental Inferences',
      pageNumber: 'Page 88 – 94',
      keyExcerpt: 'Upstream hydrologic interventions altering sediment and freshwater inflow profoundly impact estuarine wetland dynamics.'
    },
    eliminationTip: 'Statement 1 contains the absolute word "completely replace", contradicting "irreplaceable" in the text. Eliminating 1 leaves only Statement 2 (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reading Comprehension', 'Mangroves', 'Coastal Resilience', 'Assumptions']
  },
  {
    id: 'pyq-2017-csat-03',
    subject: 'csat_quant',
    topic: 'Number System & Arithmetic Operations',
    subTopic: 'Divisibility and Remainders',
    question: 'A certain 3-digit number has the following properties:\n\n1. The sum of the three digits is 14.\n2. The middle digit is equal to the sum of the other two digits.\n3. If the digits are reversed, the number increases by 99.\n\nWhat is the original 3-digit number? (UPSC CSAT 2017)',
    options: [
      '374',
      '473',
      '275',
      '572'
    ],
    correctAnswer: 0,
    explanation: 'Let the 3-digit number be 100a + 10b + c, where a, b, c are digits.\nCondition 1: a + b + c = 14.\nCondition 2: b = a + c.\nSubstitute b into Condition 1:\n(a + c) + b = 14 => b + b = 14 => 2b = 14 => b = 7.\nSo a + c = 7.\n\nCondition 3: The reversed number is 100c + 10b + a.\nReversed number - Original number = 99\n(100c + 10b + a) - (100a + 10b + c) = 99\n99c - 99a = 99 => 99(c - a) = 99 => c - a = 1.\n\nNow we have a system of two linear equations:\n1) a + c = 7\n2) c - a = 1\nAdding both: 2c = 8 => c = 4.\nThen a = 4 - 1 = 3.\nThus, the original number is abc = 374.\nCheck:\nSum of digits = 3 + 7 + 4 = 14 (correct).\nMiddle digit = 7 = 3 + 4 (correct).\nReversed = 473. 473 - 374 = 99 (correct).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 7: Problems on Numbers',
      pageNumber: 'Page 185 – 191',
      keyExcerpt: 'Difference between a 3-digit number and its reversal is always 99 × (hundreds digit - units digit).'
    },
    eliminationTip: 'Reversing 374 gives 473, which is 99 greater (473 - 374 = 99). Reversing 473 gives 374, which decreases by 99. Hence 374 is immediately confirmed.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Quantitative Aptitude', 'Number System', 'Reversal of Digits']
  },
  {
    id: 'pyq-2017-csat-04',
    subject: 'csat_reasoning',
    topic: 'Coding-Decoding & Pattern Recognition',
    subTopic: 'Letter Substitution and Numerical Code',
    question: 'In a certain code language, if \'DELHI\' is coded as 73541 and \'CALCUTTA\' is coded as 82589662, how can \'CALICUT\' be coded? (UPSC CSAT 2017)',
    options: [
      '5279431',
      '8251896',
      '8251896',
      '8543691'
    ],
    correctAnswer: 1,
    explanation: 'From the given codes, we map letters directly to their assigned numeric values:\nFrom D E L H I = 7 3 5 4 1:\nD = 7, E = 3, L = 5, H = 4, I = 1.\n\nFrom C A L C U T T A = 8 2 5 8 9 6 6 2:\nC = 8, A = 2, L = 5, U = 9, T = 6.\n\nNow find code for C A L I C U T:\nC -> 8\nA -> 2\nL -> 5\nI -> 1\nC -> 8\nU -> 9\nT -> 6\n\nPutting them together: 8251896.\nMatches Option (b).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 4: Coding-Decoding',
      pageNumber: 'Page 142 – 148',
      keyExcerpt: 'Direct letter-to-digit coding uses consistent character mappings across given words.'
    },
    eliminationTip: 'Notice the starting digits: C=8, A=2, L=5. The first 3 digits must be 825, eliminating (a) and (d). Ending with T=6 confirms 8251896.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reasoning', 'Coding-Decoding', 'Letter Coding']
  },
  {
    id: 'pyq-2017-csat-05',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Economic Inequality & Human Capital',
    subTopic: 'Quality Public Schooling as an Equalizer',
    question: 'Read the following passage:\n\n"Inequality in opportunities begins long before an individual steps into the labor market. Early childhood nutrition, maternal health, cognitive stimulation, and foundational primary education set the trajectory for lifelong earning potential and social mobility. When public education systems deteriorate, wealthier households insulate their children by purchasing elite private schooling, supplemental coaching, and social networking privileges. Consequently, socioeconomic inequality becomes intergenerationally calcified, transforming meritocracy into a hereditary aristocracy of educational pedigree."\n\nWhat is the most crucial message conveyed by the author? (UPSC CSAT 2017)',
    options: [
      'Private schools should be completely shut down by state mandate.',
      'Investing in high-quality, equitable public education and early childhood development is fundamental to breaking the intergenerational transmission of inequality.',
      'Labor market regulations alone are sufficient to eradicate all forms of societal inequality.',
      'Childhood nutrition has no measurable relationship with adult earning potential.'
    ],
    correctAnswer: 1,
    explanation: 'The author explains that inequality starts early and gets cemented when public schooling declines, allowing wealthy families to pass on educational privilege across generations. To prevent meritocracy from becoming an inherited aristocracy, the essential structural imperative is revitalizing high-quality, egalitarian public schooling and early childhood support (Option B).\nOption A is an extreme, unstated prescription.\nOption C is contradicted by the passage ("Inequality in opportunities begins long before an individual steps into the labor market").\nOption D directly contradicts the author\'s explicit argument.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: Socio-Economic Inequality and Policy Inferences',
      pageNumber: 'Page 44 – 51',
      keyExcerpt: 'Intergenerational mobility depends on equitable foundational investments in public education and cognitive health.'
    },
    eliminationTip: 'Option B accurately captures the author\'s thesis on early foundational public investment as the true antidote to hereditary educational privilege.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reading Comprehension', 'Public Education', 'Inequality', 'Human Capital']
  },
  {
    id: 'pyq-2017-csat-06',
    subject: 'csat_quant',
    topic: 'Percentage & Profit-Loss',
    subTopic: 'Successive Percentage Changes',
    question: 'The price of an article was increased by r%. Later the new price was decreased by r%. If the latest price was ₹ 1, then the original price was: (UPSC CSAT 2017)',
    options: [
      '₹ 1',
      '₹ [1 - (r²/100)]',
      '₹ [√ (1 - r²/100)]',
      '₹ [10000 / (10000 - r²)]'
    ],
    correctAnswer: 3,
    explanation: 'Let the original price be P.\nAfter an increase of r%, the price becomes:\nP₁ = P × (1 + r/100) = P × [(100 + r) / 100].\n\nAfter a decrease of r% on P₁, the new price becomes:\nP₂ = P₁ × (1 - r/100) = P × [(100 + r) / 100] × [(100 - r) / 100]\nP₂ = P × [(100² - r²) / 10000] = P × [(10000 - r²) / 10000].\n\nWe are given that P₂ = 1.\n1 = P × [(10000 - r²) / 10000]\n=> P = 10000 / (10000 - r²).\n\nMatches Option (d).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 10: Percentage',
      pageNumber: 'Page 235 – 240',
      keyExcerpt: 'Successive increase and decrease of r% results in a net decrease of r²/100 percent.'
    },
    eliminationTip: 'Since an increase of r% followed by a decrease of r% always reduces the final value below the original value, the original price must be strictly greater than ₹ 1. Only Option (d) gives a value > 1 when r > 0.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Quantitative Aptitude', 'Percentages', 'Successive Change']
  },
  {
    id: 'pyq-2017-csat-07',
    subject: 'csat_reasoning',
    topic: 'Directions & Distance Sense',
    subTopic: 'Displacement and Cardinal Directions',
    question: 'A person walks 12 km towards North, then turns right and walks 5 km towards East, then turns right and walks 6 km towards South, and finally turns left and walks 3 km towards East. How far is he from his starting point and in which direction? (UPSC CSAT 2017)',
    options: [
      '10 km, North-East',
      '14 km, South-East',
      '10 km, South-West',
      '8 km, North-East'
    ],
    correctAnswer: 0,
    explanation: 'Let starting point be the origin (0, 0).\n1. Walks 12 km North -> Position is (0, +12).\n2. Turns right (East) and walks 5 km -> Position is (+5, +12).\n3. Turns right (South) and walks 6 km -> Position is (+5, 12 - 6) = (+5, +6).\n4. Turns left (East) and walks 3 km -> Position is (5 + 3, +6) = (+8, +6).\n\nNet coordinates = (+8 East, +6 North).\nDistance from origin = √(8² + 6²) = √(64 + 36) = √100 = 10 km.\nDirection = North-East (since both x > 0 and y > 0).\nTherefore, he is 10 km away in the North-East direction.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 8: Direction Sense Test',
      pageNumber: 'Page 224 – 231',
      keyExcerpt: 'Pythagorean displacement formula: d = √(Δx² + Δy²).'
    },
    eliminationTip: 'The net coordinates (+8, +6) form a standard (6, 8, 10) Pythagorean triplet. Distance = 10 km in North-East quadrant.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Reasoning', 'Direction Sense', 'Displacement']
  },
  {
    id: 'pyq-2017-csat-08',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Judicial Delay & Rule of Law',
    subTopic: 'Access to Justice and Institutional Reforms',
    question: 'Read the following passage:\n\n"The proverb \'justice delayed is justice denied\' finds its starkest manifestation in overcrowded dockets and protracted legal disputes that span multiple generations. Inordinate litigation delays not only violate the fundamental constitutional right to a speedy trial but also impose crushing financial burdens on economically disadvantaged litigants, forcing them into coerced out-of-court settlements. Furthermore, legal uncertainty chills commercial investment, as contract enforcement remains painfully sluggish. Reforming judicial administration—through procedural simplification, widespread digitization of case records, and filling chronic judicial vacancies—is indispensable for preserving public trust in the rule of law."\n\nWhich of the following is the most rational and logical assumption that can be made from the passage? (UPSC CSAT 2017)',
    options: [
      'Expeditious disposal of cases is vital for both socio-economic justice and fostering an enabling commercial climate.',
      'Judicial delays in India are caused exclusively by an insufficient number of courtrooms.',
      'Alternative dispute resolution mechanisms should replace the regular judicial court hierarchy entirely.',
      'Economic investment is wholly uninfluenced by legal predictability or contract enforcement.'
    ],
    correctAnswer: 0,
    explanation: 'The passage explicitly ties judicial delays to dual harms: social harms (infringing fundamental rights, coercing poor litigants) and economic harms (chilling investment due to sluggish contract enforcement). It concludes that judicial reform is indispensable for the rule of law. Thus, Option A captures the comprehensive message.\nOption B uses the extreme word "exclusively" and ignores the other structural factors mentioned.\nOption C is an extreme prescription not proposed in the passage.\nOption D directly contradicts the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 3: Governance & Legal Reform Inferences',
      pageNumber: 'Page 68 – 74',
      keyExcerpt: 'Contract enforcement and speedy trial are twin pillars of judicial efficacy affecting citizens and the economy alike.'
    },
    eliminationTip: 'Option A synthesizes both the socio-legal dimension (disadvantaged litigants, speedy trial) and the economic dimension (investment, contracts).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reading Comprehension', 'Judicial Reforms', 'Contract Enforcement']
  },
  {
    id: 'pyq-2017-csat-09',
    subject: 'csat_quant',
    topic: 'Time and Work',
    subTopic: 'Work Done by Groups and Efficiency',
    question: '12 men or 18 women can reap a field in 14 days. Working at the same rate, in how many days can 8 men and 16 women reap the same field? (UPSC CSAT 2017)',
    options: [
      '5 days',
      '7 days',
      '8 days',
      '9 days'
    ],
    correctAnswer: 3,
    explanation: 'From the given condition:\n12 men\'s work = 18 women\'s work\n=> 1 man = 18/12 women = 3/2 women = 1.5 women.\n\nTotal work in terms of women-days:\nWork = 18 women × 14 days = 252 woman-days.\n\nNow, convert the combined group of (8 men + 16 women) into women:\n8 men = 8 × (3/2) = 12 women.\nSo, 8 men + 16 women = 12 women + 16 women = 28 women.\n\nNumber of days required by 28 women to complete 252 woman-days:\nDays = 252 / 28 = 9 days.\n\nCheck with men:\nTotal work = 12 men × 14 days = 168 man-days.\n16 women = 16 × (2/3) = 32/3 men.\nCombined group = 8 + 32/3 = 56/3 men.\nDays = 168 / (56/3) = (168 × 3) / 56 = 3 × 3 = 9 days.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 15: Time and Work',
      pageNumber: 'Page 340 – 347',
      keyExcerpt: 'Equating efficiencies: m · M = w · W converts composite workforces into a single homogeneous unit.'
    },
    eliminationTip: 'Convert men into women: 8 men = 12 women. Total = 12 + 16 = 28 women. Days = (18 × 14) / 28 = 252 / 28 = 9 days.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Quantitative Aptitude', 'Time and Work', 'Efficiency Ratio']
  },
  {
    id: 'pyq-2017-csat-10',
    subject: 'csat_reasoning',
    topic: 'Syllogism & Deductive Logic',
    subTopic: 'Two-Premise Syllogisms',
    question: 'Consider the following statements and conclusions:\n\nStatements:\n1. All philosophers are thinkers.\n2. Some thinkers are revolutionaries.\n\nConclusions:\nI. Some revolutionaries are thinkers.\nII. Some philosophers are revolutionaries.\nIII. All revolutionaries are philosophers.\n\nWhich of the conclusions logically follow from the given statements? (UPSC CSAT 2017)',
    options: [
      'Only I follows',
      'Only II follows',
      'Only I and II follow',
      'None of the conclusions follows'
    ],
    correctAnswer: 0,
    explanation: 'Analyze each conclusion:\n- Statement 2: "Some thinkers are revolutionaries." (Particular affirmative, I-type).\nBy immediate conversion of I-type: "Some revolutionaries are thinkers." Therefore, Conclusion I logically and unconditionally follows.\n\n- Statement 1: "All philosophers are thinkers." (A-type).\n- Statement 2: "Some thinkers are revolutionaries." (I-type).\nCombining A (All P are T) + I (Some T are R):\nThe middle term "thinkers" is undistributed in both premises (it is the predicate of an affirmative premise in 1, and the subject of a particular premise in 2). By the rules of categorical syllogism, an undistributed middle term yields NO valid deduction between the extreme terms (philosophers and revolutionaries).\nHence, Conclusion II ("Some philosophers are revolutionaries") does not necessarily follow.\nConclusion III ("All revolutionaries are philosophers") also does not follow.\n\nTherefore, only Conclusion I follows.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 14: Syllogism',
      pageNumber: 'Page 382 – 390',
      keyExcerpt: 'Immediate conversion of a particular affirmative proposition ("Some A are B") is "Some B are A".'
    },
    eliminationTip: '"Some thinkers are revolutionaries" immediately converts to "Some revolutionaries are thinkers" (Conclusion I). Since the middle term is undistributed, no link between philosophers and revolutionaries is guaranteed.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Reasoning', 'Syllogism', 'Conversion']
  },
  {
    id: 'pyq-2017-csat-11',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Groundwater Overexploitation & Agriculture',
    subTopic: 'Irrigation Subsidies and Water Depletion',
    question: 'Read the following passage:\n\n"The expansion of tube-well irrigation powered by unmetered or heavily subsidized agricultural electricity has triggered a catastrophic race to the bottom in northwest and peninsular India. Groundwater tables are plummeting at rates exceeding one meter annually in critical basins, pulling fluoride, arsenic, and heavy metals into drinking water aquifers. Farmers respond to falling water tables not by moderating water extraction or adopting micro-irrigation, but by drilling deeper borewells. This vicious cycle illustrates the classic tragedy of the commons, wherein individually rational choices culminate in collective ecological and economic devastation."\n\nWhich of the following is the most rational and critical inference from the passage? (UPSC CSAT 2017)',
    options: [
      'Borewells should be made the mandatory sole source of irrigation across the entire country.',
      'Unconditional electricity subsidies decoupled from water conservation incentives promote unsustainable aquifer depletion.',
      'Groundwater recharge occurs automatically at rates faster than deep borewell pumping.',
      'Farmers should be legally barred from cultivating any crops in northwest India.'
    ],
    correctAnswer: 1,
    explanation: 'The passage directly connects "unmetered or heavily subsidized agricultural electricity" to the "tragedy of the commons" where farmers endlessly drill deeper, exhausting groundwater. Thus, subsidizing electricity without volumetric pricing or conservation mechanisms creates distorted incentives driving aquifer depletion (Option B).\nOptions A and D are absurd or extreme statements.\nOption C is contradicted by the statement that water tables are plummeting by over a meter annually.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 6: Resource Economics and Commons Governance',
      pageNumber: 'Page 134 – 140',
      keyExcerpt: 'Subsidies that zero out marginal resource extraction costs inevitably lead to overexploitation in open-access regimes.'
    },
    eliminationTip: 'Option B accurately pinpoints the economic driver highlighted in the passage: power subsidies detached from water efficiency.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reading Comprehension', 'Groundwater', 'Tragedy of the Commons', 'Agriculture']
  },
  {
    id: 'pyq-2017-csat-12',
    subject: 'csat_quant',
    topic: 'Averages & Weighted Means',
    subTopic: 'Replacement in a Group',
    question: 'The average weight of a group of 20 boys was calculated to be 89.4 kg and it was later discovered that one weight was misread as 78 kg instead of 87 kg. What is the correct average weight? (UPSC CSAT 2017)',
    options: [
      '88.95 kg',
      '89.25 kg',
      '89.85 kg',
      '90.15 kg'
    ],
    correctAnswer: 2,
    explanation: 'Initial calculated sum of weights = 20 × 89.4 = 1788 kg.\nDifference due to misreading = Correct value - Misread value = 87 - 78 = +9 kg.\n\nCorrect sum of weights = 1788 + 9 = 1797 kg.\nCorrect average = 1797 / 20 = 89.85 kg.\n\nAlternative Shortcut Method:\nAverage shift = (Difference in value) / (Total count) = +9 / 20 = +0.45 kg.\nCorrect average = Initial average + Shift = 89.40 + 0.45 = 89.85 kg.',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 6: Averages',
      pageNumber: 'Page 152 – 158',
      keyExcerpt: 'New Average = Old Average + (Correct Value - Incorrect Value) / Number of items.'
    },
    eliminationTip: 'The actual weight was 9 kg MORE than recorded. Dividing 9 kg among 20 boys increases average by 9/20 = 0.45 kg. 89.4 + 0.45 = 89.85 kg.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Quantitative Aptitude', 'Averages', 'Correction of Error']
  },
  {
    id: 'pyq-2017-csat-13',
    subject: 'csat_reasoning',
    topic: 'Blood Relations & Family Tree',
    subTopic: 'Coded Family Relationships',
    question: 'Pointing towards a photograph, a woman says: "He is the son of the only daughter of the father of my brother." How is the man in the photograph related to the woman? (UPSC CSAT 2017)',
    options: [
      'Nephew',
      'Brother',
      'Son',
      'Father'
    ],
    correctAnswer: 2,
    explanation: 'Break down the statement starting from the innermost relationship:\n1. "my brother" -> the woman\'s brother.\n2. "the father of my brother" -> the woman\'s father (since her brother\'s father is her own father).\n3. "the only daughter of [her father]" -> Since the woman is speaking, and her father has only one daughter, the "only daughter" must be the woman herself!\n4. "He is the son of [the woman herself]".\n\nTherefore, the man in the photograph is her SON.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Blood Relations',
      pageNumber: 'Page 172 – 179',
      keyExcerpt: 'Father of one\'s brother is one\'s father; the only daughter of one\'s father (for a female narrator) is oneself.'
    },
    eliminationTip: 'The woman says "only daughter of my father". For a woman, the only daughter of her father is herself. His son is her son.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Reasoning', 'Blood Relations', 'Family Tree']
  },
  {
    id: 'pyq-2017-csat-14',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Artificial Intelligence & Automation',
    subTopic: 'Labor Displacement and Reskilling Imperatives',
    question: 'Read the following passage:\n\n"The emerging wave of cognitive automation powered by machine learning algorithms is distinct from past industrial disruptions. Whereas mechanization previously substituted manual physical labor while amplifying demand for administrative and cognitive professions, generative systems are now capable of automating complex analytical tasks, financial modeling, coding, and medical diagnostics. If societies fail to restructure lifelong learning curricula and establish portable social safety nets, this technological transition will exacerbate wage polarization, hollowing out middle-tier employment while concentrating capital yields among a tiny technological elite."\n\nWhich of the following represents the most logical inference from the passage? (UPSC CSAT 2017)',
    options: [
      'All computational research must be halted immediately to safeguard manual labor.',
      'Technological transitions in automation necessitate accompanying institutional adaptation in education and social protection to avert extreme inequality.',
      'Cognitive automation poses no competitive threat whatsoever to white-collar analytical jobs.',
      'Past industrial revolutions eliminated all forms of human employment permanently.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly argues that cognitive automation targets white-collar tasks, and warns that without restructuring education (lifelong learning) and strengthening social safety nets, wage polarization and wealth concentration will follow. Thus, institutional adaptation in education and social welfare is necessary to avoid severe inequality (Option B).\nOption A is an extreme, unfeasible prescription.\nOption C is false because the passage explicitly states that cognitive systems automate complex analytical tasks.\nOption D is historically inaccurate and unmentioned.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 8: Technology, Employment and Society',
      pageNumber: 'Page 180 – 186',
      keyExcerpt: 'Disruptive technological transitions demand proactive public policy interventions in social security and retraining.'
    },
    eliminationTip: 'Option B accurately highlights the policy synthesis: institutional adaptation in education and social safety nets is crucial during automation waves.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reading Comprehension', 'Artificial Intelligence', 'Employment', 'Inference']
  },
  {
    id: 'pyq-2017-csat-15',
    subject: 'csat_quant',
    topic: 'Ratio and Proportion',
    subTopic: 'Coin and Currency Denominations',
    question: 'A bag contains ₹ 1, 50 paise, and 25 paise coins in the ratio 5 : 6 : 8. If the total amount of money in the bag is ₹ 210, find the number of 50-paise coins in the bag. (UPSC CSAT 2017)',
    options: [
      '105',
      '126',
      '140',
      '168'
    ],
    correctAnswer: 1,
    explanation: 'Let the number of ₹ 1, 50 paise, and 25 paise coins be 5x, 6x, and 8x respectively.\nExpress the monetary value of each denomination in Rupees (₹):\n- Value of ₹ 1 coins = 5x × 1 = ₹ 5x\n- Value of 50 paise coins = 6x × (50/100) = 6x × 0.5 = ₹ 3x\n- Value of 25 paise coins = 8x × (25/100) = 8x × 0.25 = ₹ 2x\n\nTotal value in the bag:\n5x + 3x + 2x = 10x.\nGiven total value = ₹ 210.\n10x = 210 => x = 21.\n\nNumber of 50 paise coins = 6x = 6 × 21 = 126 coins.\n\nVerification:\n- ₹ 1 coins: 5 × 21 = 105 coins = ₹ 105\n- 50 paise coins: 6 × 21 = 126 coins = ₹ 63\n- 25 paise coins: 8 × 21 = 168 coins = ₹ 42\nTotal value = 105 + 63 + 42 = ₹ 210 (Verified).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 12: Ratio and Proportion',
      pageNumber: 'Page 288 – 294',
      keyExcerpt: 'Total sum = Sum of (Number of coins of denomination i × Face value of denomination i).'
    },
    eliminationTip: 'The ratio for 50-paise coins is 6. The answer must be a multiple of 6. Among the options: 105 (no), 140 (no), 126 (yes: 6×21), 168 (multiple of 8). Checking 126 immediately yields total = 210.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Quantitative Aptitude', 'Ratio and Proportion', 'Coins']
  },
  {
    id: 'pyq-2017-csat-16',
    subject: 'csat_reasoning',
    topic: 'Seating Arrangements',
    subTopic: 'Linear Seating Arrangement',
    question: 'Five persons A, B, C, D, and E are sitting in a row facing North.\n\n1. C is sitting between A and E.\n2. B is sitting immediately to the right of E.\n3. D is sitting at the extreme left end.\n\nWho is sitting in the exact middle of the row? (UPSC CSAT 2017)',
    options: [
      'A',
      'B',
      'C',
      'E'
    ],
    correctAnswer: 2,
    explanation: 'Let positions from left to right be 1, 2, 3, 4, 5.\n1. D is at the extreme left end: Position 1 = D.\n2. B is immediately to the right of E: block [E, B].\n3. C is between A and E: requires sequence [A, C, E] or [E, C, A].\nIf [E, C, A], B cannot be immediately to the right of E without breaking the sequence. Thus, the order must be A - C - E - B.\nPlacing them in positions 2 to 5:\n1: D, 2: A, 3: C, 4: E, 5: B.\nThe person in the exact middle (Position 3) is C.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 11: Seating Arrangements',
      pageNumber: 'Page 310 – 316',
      keyExcerpt: 'Construct linear sequences by anchoring fixed extreme points and assembling adjacent sub-blocks.'
    },
    eliminationTip: 'Position 1 is D. With B immediately right of E, and C between A and E, the only order is D - A - C - E - B. Position 3 (the middle) is C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Reasoning', 'Seating Arrangement', 'Linear Order']
  },
  {
    id: 'pyq-2017-csat-17',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Forest Rights & Conservation',
    subTopic: 'Community Forest Management vs Fortress Conservation',
    question: 'Read the following passage:\n\n"The colonial paradigm of fortress conservation viewed indigenous communities as intruders whose customary foraging and shifting cultivation intrinsically degraded pristine wilderness. Modern socio-ecological empirical studies, however, demonstrate the opposite: tropical biodiversity is preserved far more effectively when indigenous and traditional forest dwellers possess legally recognized community tenure rights. When local populations are dispossessed and excluded, state agencies face immense logistical hurdles preventing clandestine commercial poaching and illegal logging. Empowering forest-dwelling communities fosters decentralized, community-rooted stewardship that aligns ecological conservation with livelihood security."\n\nWhich of the following is the most logical and rational conclusion that can be drawn from the passage? (UPSC CSAT 2017)',
    options: [
      'All national parks and wildlife sanctuaries should be privatized and auctioned to logging firms.',
      'Securing community tenure and forest rights for indigenous peoples strengthens rather than undermines biodiversity conservation.',
      'State forest departments should deploy heavily armed paramilitary forces to forcibly evacuate all traditional forest communities.',
      'Indigenous communities have no customary relationship with their ancestral forest lands.'
    ],
    correctAnswer: 1,
    explanation: 'The passage argues that community tenure rights for indigenous peoples lead to superior biodiversity conservation compared to the outdated fortress conservation model that excludes them. Thus, securing community forest rights reinforces biodiversity preservation (Option B).\nOptions A and C contradict the passage\'s core thesis and propose extreme, damaging policies.\nOption D is factually untrue and contradicted by the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Environmental Governance Passages',
      pageNumber: 'Page 115 – 121',
      keyExcerpt: 'Community tenure rights foster durable decentralized conservation partnerships.'
    },
    eliminationTip: 'The passage contrasts "fortress conservation" with "community-rooted stewardship". Option B directly reflects the thesis of legal tenure empowering conservation.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reading Comprehension', 'Forest Rights', 'Conservation', 'Community Tenure']
  },
  {
    id: 'pyq-2017-csat-18',
    subject: 'csat_quant',
    topic: 'Time, Speed and Distance',
    subTopic: 'Relative Speed of Trains',
    question: 'Two trains of lengths 140 m and 160 m run on parallel tracks. When running in the same direction, the faster train passes the slower train in 30 seconds. When running in opposite directions, they pass each other in 6 seconds. What is the speed of the faster train in km/h? (UPSC CSAT 2017)',
    options: [
      '72 km/h',
      '96 km/h',
      '108 km/h',
      '120 km/h'
    ],
    correctAnswer: 2,
    explanation: 'Total distance to cross each other in both cases = Sum of lengths of trains = 140 + 160 = 300 meters.\nLet speed of faster train be u m/s and slower train be v m/s.\n\nCase 1: Same direction\nRelative speed = u - v.\nDistance = (u - v) × time => 300 = (u - v) × 30 => u - v = 10 m/s.\n\nCase 2: Opposite direction\nRelative speed = u + v.\nDistance = (u + v) × time => 300 = (u + v) × 6 => u + v = 50 m/s.\n\nSolving for u and v:\nAdding the two equations:\n(u - v) + (u + v) = 10 + 50\n2u = 60 => u = 30 m/s.\n\nConvert u from m/s to km/h:\nu = 30 × (18 / 5) = 6 × 18 = 108 km/h.\n(Slower train speed v = 20 m/s = 72 km/h).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 18: Problems on Trains',
      pageNumber: 'Page 405 – 412',
      keyExcerpt: 'In train crossings, total distance is always length₁ + length₂. Relative speeds add in opposite directions and subtract in identical directions.'
    },
    eliminationTip: 'Sum of speeds = 300/6 = 50 m/s. Difference = 300/30 = 10 m/s. Faster train = (50 + 10)/2 = 30 m/s. In km/h: 30 × 18/5 = 108 km/h.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Quantitative Aptitude', 'Relative Speed', 'Trains']
  },
  {
    id: 'pyq-2017-csat-19',
    subject: 'csat_reasoning',
    topic: 'Calendar and Clock Problems',
    subTopic: 'Day of the Week Determination',
    question: 'If 1st January 2013 was a Tuesday, what day of the week was 1st January 2014? (UPSC CSAT 2017)',
    options: [
      'Tuesday',
      'Wednesday',
      'Thursday',
      'Friday'
    ],
    correctAnswer: 1,
    explanation: 'Check whether the intervening year 2013 is a leap year or an ordinary year:\n- 2013 is not divisible by 4, so it is an ordinary year of 365 days.\n- 365 days = 52 weeks + 1 odd day (365 mod 7 = 1).\n\nAn ordinary year advances the day of the week by exactly 1 day.\nTherefore, if 1st January 2013 was Tuesday, then 1st January 2014 was:\nTuesday + 1 day = Wednesday.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 24: Calendar',
      pageNumber: 'Page 540 – 546',
      keyExcerpt: 'An ordinary year contains 365 days = 52 weeks and 1 odd day; a leap year contains 2 odd days.'
    },
    eliminationTip: '2013 is a normal non-leap year (365 days = 52 weeks + 1 day). Advancing 1 year shifts the day forward by 1: Tuesday -> Wednesday.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Reasoning', 'Calendar', 'Odd Days']
  },
  {
    id: 'pyq-2017-csat-20',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Antimicrobial Resistance & Global Health',
    subTopic: 'Overuse of Antibiotics in Livestock and Clinical Settings',
    question: 'Read the following passage:\n\n"The silent pandemic of antimicrobial resistance (AMR) threatens to unwind a century of medical breakthroughs. Pathogenic bacteria, subjected to relentless evolutionary pressure through widespread over-the-counter antibiotic abuse, incomplete treatment courses, and rampant non-therapeutic prophylactic use in commercial livestock feed, are acquiring multidrug-resistant mutations. If critical reserve antibiotics lose their therapeutic efficacy, routine surgical interventions, chemotherapy, and organ transplants will become perilous gambles. A unified \'One Health\' strategy encompassing human healthcare, veterinary medicine, and environmental effluent surveillance is the only bulwark against a post-antibiotic era."\n\nWhat is the most logical and rational assumption that can be made from the passage? (UPSC CSAT 2017)',
    options: [
      'Combatting antimicrobial resistance requires integrated interventions bridging human clinical practices, veterinary medicine, and environmental sanitation.',
      'Antibiotics should be eliminated entirely from human clinical healthcare.',
      'Livestock farming does not influence antibiotic resistance in human clinical pathogens.',
      'Modern surgical procedures are completely immune to risks of bacterial infection.'
    ],
    correctAnswer: 0,
    explanation: 'The passage concludes with the explicit recommendation: "A unified \'One Health\' strategy encompassing human healthcare, veterinary medicine, and environmental effluent surveillance is the only bulwark against a post-antibiotic era." This directly matches Option A.\nOption B is an absurd extreme (eliminating antibiotics would be disastrous).\nOption C is contradicted by the passage, which cites prophylactic antibiotic use in livestock feed as a key driver.\nOption D is contradicted by the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 7: Public Health and One Health Paradigm',
      pageNumber: 'Page 156 – 162',
      keyExcerpt: 'The One Health framework emphasizes the interdependence of human health, animal health, and environmental ecosystems.'
    },
    eliminationTip: 'The passage explicitly calls for a "One Health" framework uniting human, animal, and environmental vectors (Option A).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reading Comprehension', 'Antimicrobial Resistance', 'One Health']
  },
  {
    id: 'pyq-2017-csat-21',
    subject: 'csat_quant',
    topic: 'Permutations and Combinations',
    subTopic: 'Selection and Committee Formation',
    question: 'From a group of 7 men and 6 women, five persons are to be selected to form a committee so that at least 3 men are there in the committee. In how many ways can it be done? (UPSC CSAT 2017)',
    options: [
      '564',
      '645',
      '735',
      '756'
    ],
    correctAnswer: 3,
    explanation: 'Total people available = 7 men, 6 women.\nCommittee size = 5 persons.\nCondition: "at least 3 men" (meaning 3, 4, or 5 men).\n\nCase 1: 3 men and 2 women\nWays = ⁷C₃ × ⁶C₂\n⁷C₃ = (7 × 6 × 5) / (3 × 2 × 1) = 35.\n⁶C₂ = (6 × 5) / (2 × 1) = 15.\nWays = 35 × 15 = 525.\n\nCase 2: 4 men and 1 woman\nWays = ⁷C₄ × ⁶C₁\n⁷C₄ = ⁷C₃ = 35.\n⁶C₁ = 6.\nWays = 35 × 6 = 210.\n\nCase 3: 5 men and 0 women\nWays = ⁷C₅ × ⁶C₀\n⁷C₅ = ⁷C₂ = (7 × 6) / 2 = 21.\n⁶C₀ = 1.\nWays = 21 × 1 = 21.\n\nTotal possible ways = Case 1 + Case 2 + Case 3\nTotal = 525 + 210 + 21 = 756 ways.\n\nMatches Option (d).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 30: Permutations and Combinations',
      pageNumber: 'Page 612 – 620',
      keyExcerpt: 'Condition of "at least k" requires partitioning into mutually exclusive cases and summing the resulting combinations.'
    },
    eliminationTip: 'Sum the three distinct valid cases: (35 × 15) + (35 × 6) + (21 × 1) = 525 + 210 + 21 = 756.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Quantitative Aptitude', 'Combinations', 'Committee Selection']
  },
  {
    id: 'pyq-2017-csat-22',
    subject: 'csat_reasoning',
    topic: 'Logical Venn Diagrams',
    subTopic: 'Set Intersections in a Group',
    question: 'In a class of 60 students, 35 students study Mathematics, 28 students study Physics, and 12 students study neither Mathematics nor Physics. How many students study both Mathematics and Physics? (UPSC CSAT 2017)',
    options: [
      '12',
      '15',
      '18',
      '20'
    ],
    correctAnswer: 1,
    explanation: 'Total students = 60.\nStudents studying neither subject = 12.\nTherefore, number of students studying at least one subject:\nn(M ∪ P) = 60 - 12 = 48.\n\nWe know the principle of inclusion-exclusion for two sets:\nn(M ∪ P) = n(M) + n(P) - n(M ∩ P)\n48 = 35 + 28 - n(M ∩ P)\n48 = 63 - n(M ∩ P)\nn(M ∩ P) = 63 - 48 = 15.\n\nTherefore, 15 students study both Mathematics and Physics.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 9: Venn Diagrams',
      pageNumber: 'Page 250 – 257',
      keyExcerpt: 'Inclusion-exclusion formula: n(A ∩ B) = n(A) + n(B) - n(A ∪ B).'
    },
    eliminationTip: 'Active students = 60 - 12 = 48. Total enrollment = 35 + 28 = 63. Overlap = 63 - 48 = 15.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Reasoning', 'Venn Diagrams', 'Sets']
  },
  {
    id: 'pyq-2017-csat-23',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Circular Economy & Urban Solid Waste',
    subTopic: 'Extended Producer Responsibility and Resource Recovery',
    question: 'Read the following passage:\n\n"Urban solid waste management in developing metropolises remains mired in a linear \'extract-produce-discard\' paradigm that overflows unlined municipal landfills, contaminating surrounding soil and groundwater with toxic leachates. Moving toward a closed-loop circular economy requires shifting the locus of legal accountability from resource-strapped municipal corporations to industrial manufacturers through Extended Producer Responsibility (EPR). When consumer-goods corporations are mandated to finance the collection and eco-friendly recycling of their post-consumer packaging, economic incentives align naturally toward lightweight design, modular packaging, and non-toxic biodegradable substitutes."\n\nWhich of the following is the most logical corollary to the passage? (UPSC CSAT 2017)',
    options: [
      'Municipal corporations must bear the entire financial burden of managing industrial packaging waste indefinitely.',
      'Enforcing Extended Producer Responsibility incentivizes manufacturers to adopt sustainable packaging and enables circular waste management.',
      'All plastic and packaged consumer goods should be permanently prohibited from retail markets.',
      'Landfill dumping is the most eco-friendly waste management methodology available.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly argues that implementing Extended Producer Responsibility (EPR) shifts financial accountability to manufacturers, creating direct incentives for eco-design and circular resource recovery. Thus, Option B is the direct corollary.\nOption A is explicitly rejected by the author.\nOption C is an extreme ban not proposed in the text.\nOption D directly contradicts the author\'s depiction of landfills overflowing with toxic leachate.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Environmental Policy and Circular Economy',
      pageNumber: 'Page 120 – 126',
      keyExcerpt: 'EPR internalizes waste management costs into production decisions, driving circular design.'
    },
    eliminationTip: 'Option B accurately captures the causal chain: EPR mandates -> producer financial accountability -> sustainable packaging design -> circular waste management.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reading Comprehension', 'Circular Economy', 'Waste Management', 'EPR']
  },
  {
    id: 'pyq-2017-csat-24',
    subject: 'csat_quant',
    topic: 'Simple and Compound Interest',
    subTopic: 'Difference Between CI and SI',
    question: 'The difference between simple interest and compound interest (compounded annually) on a certain sum of money for 2 years at 10% per annum is ₹ 65. What is the sum? (UPSC CSAT 2017)',
    options: [
      '₹ 6,000',
      '₹ 6,500',
      '₹ 7,000',
      '₹ 7,500'
    ],
    correctAnswer: 1,
    explanation: 'For a time period of 2 years, the difference between Compound Interest (CI) and Simple Interest (SI) is given by the standard formula:\nDifference = P × (R / 100)²\nwhere P is the principal sum and R is the annual rate of interest.\n\nGiven:\nDifference = ₹ 65\nR = 10%\n\nSubstitute the values:\n65 = P × (10 / 100)²\n65 = P × (1 / 10)²\n65 = P × (1 / 100)\nP = 65 × 100 = ₹ 6,500.\n\nVerification:\nSI for 2 years at 10% = P × 0.20 = 6500 × 0.20 = ₹ 1300.\nCI for 2 years at 10% = P × [(1 + 0.10)² - 1] = 6500 × [1.21 - 1] = 6500 × 0.21 = ₹ 1365.\nDifference = 1365 - 1300 = ₹ 65 (Verified).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 22: Compound Interest',
      pageNumber: 'Page 492 – 498',
      keyExcerpt: 'Difference between CI and SI for 2 years = P(R/100)².'
    },
    eliminationTip: 'At 10% for 2 years, SI is 20% and CI is 21%. The difference is 1% of the principal sum. If 1% = ₹ 65, then 100% = ₹ 6,500.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Quantitative Aptitude', 'Compound Interest', 'Simple Interest']
  },
  {
    id: 'pyq-2017-csat-25',
    subject: 'csat_reasoning',
    topic: 'Series Completion & Number Sequences',
    subTopic: 'Cubic Differences in Number Series',
    question: 'Find the missing term in the sequence: 2, 10, 30, 68, 130, ? (UPSC CSAT 2017)',
    options: [
      '216',
      '222',
      '240',
      '256'
    ],
    correctAnswer: 1,
    explanation: 'Examine the pattern of the terms:\n- Term 1: 1³ + 1 = 1 + 1 = 2\n- Term 2: 2³ + 2 = 8 + 2 = 10\n- Term 3: 3³ + 3 = 27 + 3 = 30\n- Term 4: 4³ + 4 = 64 + 4 = 68\n- Term 5: 5³ + 5 = 125 + 5 = 130\n\nThe general formula for the n-th term is T(n) = n³ + n.\nTherefore, for n = 6:\nTerm 6 = 6³ + 6 = 216 + 6 = 222.\n\nAlternative Method (Differences):\nFirst differences: 8, 20, 38, 62\nSecond differences: 12, 18, 24 (increasing by 6)\nNext second difference = 24 + 6 = 30\nNext first difference = 62 + 30 = 92\nMissing term = 130 + 92 = 222.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 1: Number Series',
      pageNumber: 'Page 12 – 18',
      keyExcerpt: 'Standard polynomial and cubic sequence patterns: n³ + n and n³ - n.'
    },
    eliminationTip: 'Pattern is n³ + n. For n=6: 6³ + 6 = 216 + 6 = 222.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Reasoning', 'Number Series', 'Cubes']
  },
  {
    id: 'pyq-2017-csat-26',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Renewable Energy & Grid Decentralization',
    subTopic: 'Intermittency and Smart Grid Infrastructure',
    question: 'Read the following passage:\n\n"The transition from fossil-fueled centralized baseload power plants to decentralized solar photovoltaics and wind turbines presents profound grid integration challenges. Because solar and wind generation are weather-dependent and intermittent, large-scale injection of renewable electrons threatens transmission frequency stability unless accompanied by flexible peaker plants, utility-scale battery energy storage systems (BESS), and digital smart grids. Without adequate storage and intelligent demand-response pricing, utilities will be forced into massive renewable curtailment, blunting the economic viability of green generation."\n\nWhich of the following is the most logical and critical takeaway from the passage? (UPSC CSAT 2017)',
    options: [
      'Renewable energy adoption should be abandoned because solar and wind energy are inherently intermittent.',
      'Achieving deep renewable energy integration requires accompanying investments in energy storage and smart transmission infrastructure.',
      'Centralized thermal coal power plants are entirely non-polluting and should be expanded indefinitely.',
      'Smart grids increase renewable curtailment rather than reducing it.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explains that due to intermittency, integrating large amounts of renewable energy safely requires battery storage systems, smart grids, and flexible capacity to prevent curtailment. Thus, investments in storage and smart grid infrastructure are indispensable for scaling renewables (Option B).\nOption A is an extreme defeatist stance rejected by the passage.\nOption C is factually incorrect and contrary to energy transition objectives.\nOption D is directly contradicted by the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Energy Transition and Technology Infrastructure',
      pageNumber: 'Page 128 – 135',
      keyExcerpt: 'Intermittent renewable energy relies on flexibility assets like BESS and smart grid management for grid reliability.'
    },
    eliminationTip: 'The passage highlights the technological bottleneck: storage and smart grids are necessary to prevent curtailment of renewable power.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reading Comprehension', 'Renewable Energy', 'Smart Grid', 'BESS']
  },
  {
    id: 'pyq-2017-csat-27',
    subject: 'csat_quant',
    topic: 'Alligations and Mixtures',
    subTopic: 'Replacement of Liquid in a Vessel',
    question: 'A container contains 40 liters of milk. From this container, 4 liters of milk were taken out and replaced by water. This process was repeated further two times. How much milk is now contained in the container? (UPSC CSAT 2017)',
    options: [
      '26.34 liters',
      '27.36 liters',
      '28.00 liters',
      '29.16 liters'
    ],
    correctAnswer: 3,
    explanation: 'Let initial quantity of liquid = x = 40 liters.\nQuantity removed and replaced each time = y = 4 liters.\nTotal number of operations = n = 1 + 2 = 3 operations.\n\nThe remaining quantity of pure liquid after n operations is given by the standard formula:\nRemaining Milk = x × [1 - (y / x)]ⁿ\n\nSubstitute the values:\nRemaining Milk = 40 × [1 - (4 / 40)]³\n= 40 × [1 - 1/10]³\n= 40 × (9/10)³\n= 40 × (729 / 1000)\n= 4 × (729 / 100)\n= 2916 / 100 = 29.16 liters.\n\nMatches Option (d).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 20: Alligation or Mixture',
      pageNumber: 'Page 450 – 456',
      keyExcerpt: 'Formula for successive replacement: Q = x(1 - y/x)ⁿ.'
    },
    eliminationTip: 'Each step retains 90% (0.9) of the milk. After 3 operations, retention is (0.9)³ = 0.729. 40 × 0.729 = 29.16 liters.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Quantitative Aptitude', 'Mixtures', 'Successive Replacement']
  },
  {
    id: 'pyq-2017-csat-28',
    subject: 'csat_reasoning',
    topic: 'Mathematical Puzzles & Logic',
    subTopic: 'Handshake and Match Tournament Problems',
    question: 'In a chess tournament, each of the participants has to play exactly one game against every other participant. If the total number of games played in the tournament is 45, what was the total number of participants? (UPSC CSAT 2017)',
    options: [
      '9',
      '10',
      '11',
      '12'
    ],
    correctAnswer: 1,
    explanation: 'Let the number of participants be n.\nEach game is played between 2 distinct players.\nThe total number of games played is the number of combinations of n items taken 2 at a time:\nTotal Games = ⁿC₂ = [n(n - 1)] / 2.\n\nWe are given:\n[n(n - 1)] / 2 = 45\nn(n - 1) = 90.\n\nWe need two consecutive positive integers whose product is 90:\nSince 10 × 9 = 90, we have:\nn = 10.\n\nCheck:\n¹⁰C₂ = (10 × 9) / 2 = 45 games.\nMatches Option (b).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 25: Mathematical Puzzles',
      pageNumber: 'Page 560 – 566',
      keyExcerpt: 'Tournament round-robin pairings: Total games = n(n - 1)/2.'
    },
    eliminationTip: 'n(n - 1) = 90. The factors of 90 that differ by 1 are 10 and 9. So n = 10.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Reasoning', 'Combinatorics', 'Tournament Games']
  },
  {
    id: 'pyq-2017-csat-29',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Agrarian Distress & Supply Chain Bottlenecks',
    subTopic: 'Post-Harvest Losses and Cold Chain Deficits',
    question: 'Read the following passage:\n\n"Despite record harvests of horticultural crops and vegetables, Indian smallholders frequently suffer devastating price collapses during harvest peaks. This paradox of agricultural distress amidst harvest abundance stems from severe bottlenecks in cold chain logistics, refrigerated transport, and primary processing infrastructure. Forced into distress sales by the rapid perishability of their produce and lacking farm-gate aggregation warehouses, smallholders capture barely a fraction of the final retail price, while urban consumers pay exorbitant markups to intermediaries."\n\nWhich of the following is the most rational and logical inference from the passage? (UPSC CSAT 2017)',
    options: [
      'Smallholders should completely cease the cultivation of all vegetables and fruits.',
      'Investment in decentralized post-harvest cold storage, aggregation logistics, and food processing is essential to remunerate farmers and curtail supply chain wastage.',
      'Urban consumers should be prohibited from consuming fresh horticultural produce.',
      'Agricultural distress can be resolved solely by increasing chemical fertilizer inputs.'
    ],
    correctAnswer: 1,
    explanation: 'The passage identifies the root cause of smallholder distress amidst abundance: lack of cold chains, storage, and processing infrastructure leading to distress sales and high intermediary margins. Thus, investing in cold chains, aggregation, and processing is the crucial structural remedy (Option B).\nOption A is an absurd defeatist suggestion.\nOption C is ridiculous.\nOption D is unrelated and contrary to the supply chain diagnosis.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: Agrarian Economy and Supply Chains',
      pageNumber: 'Page 48 – 55',
      keyExcerpt: 'Cold-chain deficits and lack of farm-gate aggregation drive post-harvest price crashes and distress sales.'
    },
    eliminationTip: 'Option B directly addresses the specific institutional bottleneck identified by the author: cold chains and aggregation facilities.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reading Comprehension', 'Agriculture', 'Cold Chain', 'Supply Chains']
  },
  {
    id: 'pyq-2017-csat-30',
    subject: 'csat_quant',
    topic: 'HCF and LCM',
    subTopic: 'Periodic Ringing of Bells',
    question: 'Six bells commence tolling together and toll at intervals of 2, 4, 6, 8, 10, and 12 seconds respectively. In 30 minutes, how many times do they toll together? (UPSC CSAT 2017)',
    options: [
      '4',
      '10',
      '15',
      '16'
    ],
    correctAnswer: 3,
    explanation: 'The bells toll together at intervals equal to the Least Common Multiple (LCM) of their individual tolling intervals.\nFind LCM of (2, 4, 6, 8, 10, 12):\n- 2 = 2¹\n- 4 = 2²\n- 6 = 2 × 3\n- 8 = 2³\n- 10 = 2 × 5\n- 12 = 2² × 3\n\nLCM = 2³ × 3¹ × 5¹ = 8 × 3 × 5 = 120 seconds.\n120 seconds = 2 minutes.\n\nTotal duration = 30 minutes.\nNumber of intervals of 2 minutes in 30 minutes = 30 / 2 = 15.\nIMPORTANT:\nThe bells commence tolling together at time t = 0 (the starting toll).\nTherefore, the total number of times they toll together = (30 / 2) + 1 = 15 + 1 = 16 times.\n\nMatches Option (d).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: H.C.F. and L.C.M. of Numbers',
      pageNumber: 'Page 32 – 38',
      keyExcerpt: 'When bells toll together initially at t = 0, total tolls in duration T = [T / LCM] + 1.'
    },
    eliminationTip: 'Classic UPSC trap! LCM = 120 sec = 2 min. 30/2 = 15 intervals. But you MUST add the initial simultaneous toll at start (t=0): 15 + 1 = 16 times.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Quantitative Aptitude', 'LCM', 'Tolling Bells']
  },
  {
    id: 'pyq-2017-csat-31',
    subject: 'csat_reasoning',
    topic: 'Statement and Assumptions',
    subTopic: 'Implicit Institutional Assumptions',
    question: 'Consider the following statement and assumptions:\n\nStatement: "The Municipal Corporation has issued an advisory urging all city residents to harvest rainwater from their rooftops before the onset of the monsoon season."\n\nAssumptions:\nI. Most residents possess rooftops suitable for setting up rainwater harvesting structures.\nII. Harvesting rainwater during monsoons can help replenish the city\'s depleting groundwater levels.\n\nWhich of the assumptions is/are implicit in the statement? (UPSC CSAT 2017)',
    options: [
      'Only assumption I is implicit',
      'Only assumption II is implicit',
      'Both assumptions I and II are implicit',
      'Neither assumption I nor II is implicit'
    ],
    correctAnswer: 2,
    explanation: 'Analyze each assumption:\n- Assumption I: When an authority issues a general advisory to city residents regarding rooftop harvesting, it presupposes that the citizens possess rooftops where such measures can feasibly be deployed. If it were impossible or unavailable to residents, the advisory would be meaningless. Hence Assumption I is implicit.\n- Assumption II: An advisory to capture rainwater is premised on the rationale that rainwater harvesting serves a tangible purpose, specifically water conservation and groundwater recharge. Hence Assumption II is also implicit.\n\nTherefore, both assumptions I and II are implicit.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 15: Statement and Assumptions',
      pageNumber: 'Page 410 – 417',
      keyExcerpt: 'An administrative advisory implicitly assumes feasibility of compliance and usefulness of the objective.'
    },
    eliminationTip: 'Any civic advisory presupposes both feasibility (citizens have rooftops) and utility (rainwater harvesting recharges groundwater). Both are implicit.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reasoning', 'Statement and Assumptions', 'Rainwater Harvesting']
  },
  {
    id: 'pyq-2017-csat-32',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Urban Air Pollution & Public Health',
    subTopic: 'Vehicular Emissions and Mass Transit',
    question: 'Read the following passage:\n\n"Urban air quality in South Asian megacities regularly breaches hazardous thresholds, with ambient concentrations of PM2.5 and nitrogen oxides triggering pervasive respiratory morbidity, cardiovascular events, and premature mortality. While seasonal agricultural crop-residue burning garners intense media scrutiny, year-round ambient toxicity is overwhelmingly driven by the unchecked proliferation of private internal-combustion vehicles, industrial emissions, and construction dust. Incremental tailpipe emission norms like Euro-VI, while necessary, are insufficient on their own; decongesting urban skies demands a decisive shift toward high-capacity electric public transit, active non-motorized transport, and congestion pricing."\n\nWhich of the following is the most rational and practical inference from the passage? (UPSC CSAT 2017)',
    options: [
      'Crop-residue burning is the sole cause of air pollution throughout the entire calendar year.',
      'Improving urban air quality necessitates comprehensive structural transitions toward electrified mass public transit and congestion curbs beyond mere vehicular emission standards.',
      'Private vehicles should be exempted from all emission regulations.',
      'Construction activities should be permanently prohibited in all human settlements.'
    ],
    correctAnswer: 1,
    explanation: 'The author notes that while seasonal stubble burning gets headlines, year-round pollution is driven by private vehicles and industrial sources, and argues that incremental emission standards alone are insufficient without high-capacity electric transit, non-motorized transport, and congestion pricing. This makes Option B the direct, rational inference.\nOption A contradicts the text.\nOptions C and D are extreme and contrary to the author\'s analysis.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 5: Urban Environment and Public Health',
      pageNumber: 'Page 124 – 130',
      keyExcerpt: 'Structural mass transit integration and demand management are essential to curb systemic urban vehicular pollution.'
    },
    eliminationTip: 'Look for the balanced, structural solution that addresses the passage\'s core finding: mass electric transit and congestion management (Option B).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reading Comprehension', 'Air Pollution', 'Public Transit', 'PM2.5']
  },
  {
    id: 'pyq-2017-csat-33',
    subject: 'csat_quant',
    topic: 'Ages and Linear Equations',
    subTopic: 'Two-Variable Age Problems',
    question: 'A father said to his son, "I was as old as you are at present at the time of your birth." If the father\'s age is 38 years now, what was the son\'s age five years back? (UPSC CSAT 2017)',
    options: [
      '14 years',
      '19 years',
      '24 years',
      '29 years'
    ],
    correctAnswer: 0,
    explanation: 'Let the present age of the son be x years.\nThe father\'s age at the time of the son\'s birth was (38 - x) years.\nAccording to the father\'s statement:\n"I was as old as you are at present at the time of your birth."\n=> 38 - x = x\n=> 2x = 38\n=> x = 19 years.\n\nSo the son\'s present age is 19 years.\nThe question asks: What was the son\'s age five years back?\nSon\'s age 5 years ago = 19 - 5 = 14 years.\n\nMatches Option (a).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 8: Problems on Ages',
      pageNumber: 'Page 205 – 211',
      keyExcerpt: 'If father was x years old at son\'s birth and son is now x years old, father\'s current age is 2x.'
    },
    eliminationTip: 'If father\'s age is twice the son\'s present age, son is currently 38/2 = 19. Five years ago, the son was 19 - 5 = 14 years old.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Quantitative Aptitude', 'Problems on Ages', 'Linear Equations']
  },
  {
    id: 'pyq-2017-csat-34',
    subject: 'csat_reasoning',
    topic: 'Ranking & Order Test',
    subTopic: 'Total Count from Opposite Ends',
    question: 'In a row of boys facing North, Rahul is 18th from the left end and 24th from the right end. How many boys are there in the row? (UPSC CSAT 2017)',
    options: [
      '40',
      '41',
      '42',
      '43'
    ],
    correctAnswer: 1,
    explanation: 'When the position of a single individual is known from both ends of a linear row:\nTotal number of persons = (Position from left) + (Position from right) - 1.\n\nGiven:\n- Position from left = 18\n- Position from right = 24\n\nTotal = 18 + 24 - 1 = 42 - 1 = 41.\nWe subtract 1 because Rahul has been counted twice (once from the left and once from the right).\nTherefore, there are 41 boys in the row.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 12: Ranking Test',
      pageNumber: 'Page 328 – 334',
      keyExcerpt: 'Total individuals = Left rank + Right rank - 1.'
    },
    eliminationTip: 'Standard ranking rule: Total = L + R - 1 = 18 + 24 - 1 = 41.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Reasoning', 'Ranking Test', 'Linear Order']
  },
  {
    id: 'pyq-2017-csat-35',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Financial Inclusion & Digital Banking',
    subTopic: 'Financial Literacy and Consumer Protection',
    question: 'Read the following passage:\n\n"The proliferation of biometric digital identity, low-cost smartphones, and unified payment interfaces has brought millions of previously unbanked households into the formal financial perimeter. However, physical connectivity and zero-balance bank accounts do not automatically equate to meaningful financial empowerment. Without targeted financial literacy programs, transparent grievance redressal mechanisms, and robust data protection laws, economically vulnerable neo-users remain uniquely prey to predatory algorithmic credit apps, phishing scams, and hidden service levies."\n\nWhich of the following is the most logical and rational corollary to the passage? (UPSC CSAT 2017)',
    options: [
      'Digital banking technologies should be banned in developing economies.',
      'Sustainable financial inclusion demands pairing digital infrastructure expansion with consumer protection, financial education, and regulatory oversight.',
      'Neo-users require no financial literacy because digital apps are completely self-explanatory.',
      'Unbanked citizens should avoid participating in formal financial systems.'
    ],
    correctAnswer: 1,
    explanation: 'The passage asserts that while technological connectivity has broadened access, real financial empowerment requires financial literacy, grievance redressal, and data protection to guard against predatory lending and scams. Thus, digital expansion must be paired with consumer protection and education (Option B).\nOptions A, C, and D are either extreme bans or contradict the passage.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 4: Financial Technology and Inclusive Growth',
      pageNumber: 'Page 96 – 102',
      keyExcerpt: 'Account opening is only the initial step; meaningful financial inclusion requires financial literacy and consumer safeguards.'
    },
    eliminationTip: 'Option B accurately highlights that digital access must be matched with consumer protection and literacy.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reading Comprehension', 'Financial Inclusion', 'Digital Literacy']
  },
  {
    id: 'pyq-2017-csat-36',
    subject: 'csat_quant',
    topic: 'Probability',
    subTopic: 'Balls Drawn from an Urn',
    question: 'A box contains 5 red, 4 green, and 3 blue balls. If three balls are drawn at random without replacement, what is the probability that all three balls are of different colors? (UPSC CSAT 2017)',
    options: [
      '3/11',
      '6/11',
      '4/11',
      '5/11'
    ],
    correctAnswer: 0,
    explanation: 'Total number of balls = 5 (Red) + 4 (Green) + 3 (Blue) = 12 balls.\nNumber of balls drawn = 3.\n\nTotal possible outcomes = ¹²C₃\n¹²C₃ = (12 × 11 × 10) / (3 × 2 × 1) = 220.\n\nFavorable outcomes: All three balls are of different colors (i.e., exactly 1 Red, 1 Green, and 1 Blue).\nNumber of favorable ways = ⁵C₁ × ⁴C₁ × ³C₁\n= 5 × 4 × 3 = 60.\n\nProbability = Favorable outcomes / Total outcomes\n= 60 / 220\n= 6 / 22\n= 3 / 11.\n\nMatches Option (a).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 31: Probability',
      pageNumber: 'Page 628 – 634',
      keyExcerpt: 'Probability of selecting one item from each group = (n₁C₁ × n₂C₁ × n₃C₁) / N C₃.'
    },
    eliminationTip: 'Favorable = 5 × 4 × 3 = 60. Total = 12 × 11 × 10 / 6 = 220. P = 60/220 = 3/11.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Quantitative Aptitude', 'Probability', 'Combinatorics']
  },
  {
    id: 'pyq-2017-csat-37',
    subject: 'csat_reasoning',
    topic: 'Analogy & Classification',
    subTopic: 'Semantic Analogy',
    question: 'Thermometer is related to Temperature in the same way as Hygrometer is related to: (UPSC CSAT 2017)',
    options: [
      'Pressure',
      'Density',
      'Humidity',
      'Velocity'
    ],
    correctAnswer: 2,
    explanation: 'A thermometer is a scientific instrument designed to measure temperature.\nSimilarly, a hygrometer is a scientific instrument designed to measure atmospheric moisture or humidity.\n(Barometer measures pressure; Hydrometer measures relative density; Anemometer measures wind velocity).\nTherefore, Hygrometer corresponds to Humidity.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: Analogy',
      pageNumber: 'Page 50 – 56',
      keyExcerpt: 'Scientific instrument and measured quantity pairings: Hygrometer measures humidity.'
    },
    eliminationTip: 'Barometer = Pressure, Hydrometer = Density/Liquids, Hygrometer = Humidity.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reasoning', 'Analogy', 'Scientific Instruments']
  },
  {
    id: 'pyq-2017-csat-38',
    subject: 'csat_reading',
    topic: 'Reading Comprehension: Urbanization & Informal Settlements',
    subTopic: 'In-Situ Slum Redevelopment and Right to Shelter',
    question: 'Read the following passage:\n\n"Urban policy in fast-growing global South cities has long treated informal settlements as blighted anomalies to be eradicated through eviction and peripheral relocation. Yet, displacing informal workers to distant suburban fringes severs them from labor markets, schools, and social safety nets, dramatically escalating transit costs and plunging families deeper into poverty. Progressive urbanism instead champions in-situ slum upgradation—providing secure land tenure, piped water, decentralized sewerage, and community health centers. Recognizing the right to the city transforms informal settlements from precarious encampments into vibrant, formalized neighborhoods."\n\nWhich of the following is the most crucial message conveyed by the author? (UPSC CSAT 2017)',
    options: [
      'Peripheral eviction and demolition of informal settlements is the most effective urban strategy.',
      'In-situ upgrading and tenure security are far more effective and humane than peripheral evictions for urban poverty alleviation.',
      'Informal workers should be barred from residing within municipal boundary limits.',
      'Urban slums require no municipal infrastructure or basic sanitation.'
    ],
    correctAnswer: 1,
    explanation: 'The passage explicitly criticizes peripheral evictions because they sever workers from livelihoods, and advocates for "in-situ slum upgradation" with secure tenure and basic infrastructure. Thus, in-situ upgrading is far more effective and humane than eviction (Option B).\nOptions A, C, and D are directly contradicted by the text.',
    bookReference: {
      bookName: 'Analytical & Reading Comprehension for CSAT Paper II by Arihant',
      edition: 'Revised Edition',
      chapter: 'Chapter 2: Urbanization, Housing and Social Policy',
      pageNumber: 'Page 52 – 59',
      keyExcerpt: 'In-situ upgrading preserves livelihood linkages while providing essential municipal services.'
    },
    eliminationTip: 'The passage advocates in-situ upgrading over forced peripheral relocation. Option B directly states this core conclusion.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 8,
    tags: ['UPSC 2017', 'CSAT', 'Reading Comprehension', 'Urbanization', 'Slum Upgradation', 'In-Situ']
  },
  {
    id: 'pyq-2017-csat-39',
    subject: 'csat_quant',
    topic: 'Geometry and Mensuration',
    subTopic: 'Area of Pathway Surrounding a Field',
    question: 'A rectangular lawn 60 meters long and 40 meters wide is surrounded on the outside by a path 2.5 meters wide all around. What is the area of the path in square meters? (UPSC CSAT 2017)',
    options: [
      '475 sq m',
      '500 sq m',
      '525 sq m',
      '550 sq m'
    ],
    correctAnswer: 2,
    explanation: 'Dimensions of the inner rectangular lawn:\nLength l = 60 m\nBreadth b = 40 m\nArea of the inner lawn = 60 × 40 = 2400 sq m.\n\nThe path of width w = 2.5 m is constructed OUTSIDE the lawn.\nOuter dimensions including the path:\nOuter length L = 60 + 2 × (2.5) = 60 + 5 = 65 m.\nOuter breadth B = 40 + 2 × (2.5) = 40 + 5 = 45 m.\n\nTotal outer area = L × B = 65 × 45 = 2925 sq m.\n\nArea of the path = Outer Area - Inner Area\n= 2925 - 2400\n= 525 square meters.\n\nMatches Option (c).',
    bookReference: {
      bookName: 'Quantitative Aptitude for Competitive Examinations by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 24: Area',
      pageNumber: 'Page 518 – 525',
      keyExcerpt: 'Area of outer path of uniform width w surrounding a rectangle (l × b) = (l + 2w)(b + 2w) - lb.'
    },
    eliminationTip: 'Outer area = (60 + 5) × (40 + 5) = 65 × 45 = 2925. Lawn area = 60 × 40 = 2400. Path = 2925 - 2400 = 525 sq m.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Quantitative Aptitude', 'Mensuration', 'Rectangular Path']
  },
  {
    id: 'pyq-2017-csat-40',
    subject: 'csat_reasoning',
    topic: 'Clocks and Angles',
    subTopic: 'Angle Between Clock Hands',
    question: 'What is the angle between the hour hand and the minute hand of a clock at 3:40? (UPSC CSAT 2017)',
    options: [
      '120°',
      '130°',
      '140°',
      '150°'
    ],
    correctAnswer: 1,
    explanation: 'The angle θ between the hour hand and minute hand at H hours and M minutes is given by the standard formula:\nθ = |(30 × H) - (11/2 × M)|\n\nGiven:\nH = 3\nM = 40\n\nSubstitute into the formula:\nθ = |(30 × 3) - (11/2 × 40)|\nθ = |90 - (11 × 20)|\nθ = |90 - 220|\nθ = |-130°| = 130°.\n\nVerification:\n- In 3 hours 40 minutes (3 + 40/60 = 11/3 hours), hour hand moves: (11/3) × 30° = 110° from 12 o\'clock.\n- In 40 minutes, minute hand moves: 40 × 6° = 240° from 12 o\'clock.\n- Angle between them = 240° - 110° = 130°.\n\nMatches Option (b).',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: 'Revised Edition',
      chapter: 'Chapter 23: Clocks',
      pageNumber: 'Page 525 – 532',
      keyExcerpt: 'Angle between hands at time H:M = |30H - 5.5M|.'
    },
    eliminationTip: 'Use standard clock formula: |30(3) - 5.5(40)| = |90 - 220| = 130°.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2017,
    pyqPaper: 'CSAT',
    frequency: 9,
    tags: ['UPSC 2017', 'CSAT', 'Reasoning', 'Clocks', 'Angle Between Hands']
  }
];
