import { Question } from '@/lib/types';

// ============================================================
// Daily Current Affairs Questions
// Edition: August 15, 2026 — India's 80th Independence Day
// Sources: PIB, The Hindu, Indian Express, The Print, Drishti IAS
// ============================================================

export const dailyCAQuestions: Question[] = [
  // ─── Q1: 80th Independence Day – Theme & Vande Mataram ───────────
  {
    id: 'ca-aug15-2026-01',
    subject: 'current_affairs',
    topic: 'Polity & Governance',
    subTopic: 'Independence Day 2026 – Theme & Vande Mataram 150 Years',
    question: 'With reference to India\'s 80th Independence Day celebrations (August 15, 2026), consider the following statements:\n\n1. The theme for Independence Day 2026 was "Yuva Shakti for Viksit Bharat@2047."\n2. The national song Vande Mataram was performed at the Red Fort during the Independence Day ceremony for the very first time.\n3. Vande Mataram was composed by Bankim Chandra Chattopadhyay and first published in the novel Anandamath.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1, 2 and 3',
      '1 and 3 only'
    ],
    correctAnswer: 2,
    explanation: 'All three statements are correct.\n\nStatement 1 is correct: The celebrations were centred on dual themes: "150 Years of Vande Mataram" and "Yuva Shakti for Viksit Bharat@2047."\n\nStatement 2 is correct: For the first time in the history of Independence Day at the Red Fort, Vande Mataram was rendered during the 2026 ceremony to mark its 150th anniversary (written in 1875 and first publicly sung in 1896).\n\nStatement 3 is correct: Bankim Chandra Chattopadhyay wrote Vande Mataram in 1875; it was published in his 1882 Bengali novel Anandamath and became a rallying anthem during the freedom struggle.',
    bookReference: {
      bookName: 'PIB & The Hindu',
      edition: 'August 15, 2026',
      chapter: 'National Events & Polity: Independence Day 2026',
      pageNumber: 'PIB Release: Independence Day 2026 / thehindu.com',
      keyExcerpt: 'For the first time in its history, Vande Mataram was rendered during the Independence Day ceremony at the Red Fort, marking 150 years of the national song (written 1875, published in Anandamath 1882).'
    },
    eliminationTip: 'The keyword "first time" in statement 2 is verified by multiple government sources (PIB, pmindia.gov.in). All three statements are factual — select "1, 2 and 3".',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['Independence Day 2026', 'Vande Mataram', 'Viksit Bharat', 'Current Affairs']
  },

  // ─── Q2: Kerala renamed to Keralam ───────────────────────────────
  {
    id: 'ca-aug15-2026-02',
    subject: 'current_affairs',
    topic: 'Polity & Parliament',
    subTopic: 'Kerala (Alteration of Name) Bill, 2026',
    question: 'Consider the following statements regarding the Kerala (Alteration of Name) Bill, 2026:\n\n1. The Bill was passed by both Houses of Parliament in August 2026, renaming the state "Keralam."\n2. The change was initiated following a unanimous resolution passed by the Kerala State Assembly in 2024.\n3. Renaming a state in India requires a simple majority in Parliament and the mandatory assent of the concerned State Legislature.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct.\n\nStatement 1 is correct: Lok Sabha passed the bill on August 11, 2026, and Rajya Sabha on August 12, 2026. The bill awaits the President\'s assent.\n\nStatement 2 is correct: The Kerala State Assembly had passed a unanimous resolution in 2024 requesting Parliament to alter the state\'s official name to align with its Malayalam-language name.\n\nStatement 3 is incorrect: Under Article 3 of the Constitution, Parliament can alter the name of a state by a simple majority, but the State Legislature\'s concurrence is NOT mandatory — it is only consulted (referred to) by the President. The Supreme Court has clarified that the State Legislature\'s consent is not a binding precondition.',
    bookReference: {
      bookName: 'Indian Express & PRS India',
      edition: 'August 12, 2026',
      chapter: 'Parliamentary Bills 2026 – State Renaming',
      pageNumber: 'prsindia.org / indianexpress.com',
      keyExcerpt: 'Article 3 of the Constitution empowers Parliament, by law, to alter the names of states. No concurrence of the State Legislature is required — the President only refers the bill to the State Legislature for its views.'
    },
    eliminationTip: 'Statement 3 is the classic UPSC trap — many candidates confuse "reference" to the State Legislature (mandatory) with "consent/concurrence" (NOT mandatory) under Article 3.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['Kerala', 'Keralam', 'Article 3', 'Parliament', 'State Renaming']
  },

  // ─── Q3: Mines & Minerals Amendment Bill 2026 ─────────────────────
  {
    id: 'ca-aug15-2026-03',
    subject: 'current_affairs',
    topic: 'Economy & Federalism',
    subTopic: 'Mines and Minerals (Development and Regulation) Amendment Bill, 2026',
    question: 'Which of the following correctly describes the key provision of the Mines and Minerals (Development and Regulation) Amendment Bill, 2026, passed by Parliament?\n\n(a) It grants states the exclusive right to impose cesses and levies on all minerals extracted within their territory.\n(b) It restricts state governments from imposing new taxes, cesses, or levies on mineral rights without conditions prescribed by the Central government.\n(c) It transfers complete ownership of minor minerals from states to the Centre.\n(d) It abolishes district mineral foundations and replaces them with a National Mineral Board.',
    options: [
      'Only (a)',
      'Only (b)',
      'Both (b) and (c)',
      'Only (d)'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is correct.\n\nThe Mines and Minerals (Development and Regulation) Amendment Bill, 2026 restricts state governments from imposing new taxes, cesses, or levies on mineral rights and mineral-bearing lands unless they comply with conditions or restrictions prescribed by the Central government. The Centre justified this as ensuring competitive mineral pricing, reducing inflation in key sectors, and maintaining fiscal uniformity. States argued this undermines fiscal federalism.\n\nOptions (a), (c), and (d) are incorrect and were not part of the bill.',
    bookReference: {
      bookName: 'PIB & PRS India',
      edition: 'August 2026',
      chapter: 'Mineral Legislation & Fiscal Federalism',
      pageNumber: 'pib.gov.in / prsindia.org',
      keyExcerpt: 'The Amendment restricts State governments from imposing additional taxes, cesses, or levies on mineral rights except under conditions prescribed by the Central government, citing the need for uniform competitive pricing across states.'
    },
    eliminationTip: 'The bill is about RESTRICTING state taxation powers on minerals to avoid price disparities across states. Eliminate option (a) first.',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['Minerals', 'Federalism', 'Parliament', 'Economy', 'MMDR Amendment 2026']
  },

  // ─── Q4: PFBR Kalpakkam – India's 3-Stage Nuclear Programme ───────
  {
    id: 'ca-aug15-2026-04',
    subject: 'current_affairs',
    topic: 'Science & Technology',
    subTopic: 'Prototype Fast Breeder Reactor (PFBR) – India\'s Three-Stage Nuclear Programme',
    question: 'The Prototype Fast Breeder Reactor (PFBR) at Kalpakkam attained first criticality in 2026. With reference to this, consider the following statements:\n\n1. The PFBR at Kalpakkam marks India\'s entry into the second stage of its three-stage nuclear power programme.\n2. The three-stage nuclear programme of India was originally conceived by Dr. Vikram Sarabhai.\n3. The third stage of the nuclear programme is based on the thorium-uranium-233 fuel cycle.\n4. Fast Breeder Reactors generate more fissile material than they consume.\n\nWhich of the statements given above are correct?',
    options: [
      '1, 3 and 4 only',
      '2, 3 and 4 only',
      '1 and 4 only',
      '1, 2, 3 and 4'
    ],
    correctAnswer: 0,
    explanation: 'Statements 1, 3, and 4 are correct; Statement 2 is incorrect.\n\nStatement 1 is correct: The PFBR at Kalpakkam (500 MWe) achieved first criticality in 2026, marking India\'s entry into Stage 2 of its three-stage nuclear programme.\n\nStatement 2 is incorrect: India\'s three-stage nuclear power programme was conceived by Dr. Homi J. Bhabha, NOT Vikram Sarabhai (who was the father of India\'s space programme).\n\nStatement 3 is correct: The third stage uses the thorium-U233 fuel cycle, exploiting India\'s vast thorium reserves (the world\'s second largest).\n\nStatement 4 is correct: Fast Breeder Reactors produce more fissile material (e.g., plutonium-239 from U-238) than they consume — hence the term "breeder."',
    bookReference: {
      bookName: 'PIB (Department of Atomic Energy) & The Print',
      edition: 'April–August 2026',
      chapter: 'Nuclear Energy & Science Technology',
      pageNumber: 'dae.gov.in / theprint.in',
      keyExcerpt: 'PFBR Kalpakkam attained first criticality, entering Stage 2 of the Homi Bhabha-conceived three-stage nuclear programme. Stage 3 will exploit India\'s thorium-U233 cycle.'
    },
    eliminationTip: 'The classic UPSC trap: confusing Dr. Homi Bhabha (nuclear energy pioneer) with Dr. Vikram Sarabhai (space pioneer). Statement 2 is the deliberate distractor.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['PFBR', 'Kalpakkam', 'Nuclear Energy', 'Homi Bhabha', 'Three-Stage Programme', 'Science Technology']
  },

  // ─── Q5: UPI – 10 Year Milestone ──────────────────────────────────
  {
    id: 'ca-aug15-2026-05',
    subject: 'current_affairs',
    topic: 'Economy & Digital Infrastructure',
    subTopic: 'Unified Payments Interface (UPI) – 10-Year Milestone 2026',
    question: 'With reference to the Unified Payments Interface (UPI), consider the following statements:\n\n1. UPI was launched in 2016 by the National Payments Corporation of India (NPCI).\n2. As of 2026, UPI has more than 55 crore registered users and covers over 700 banks.\n3. UPI accounts for approximately 85–86% of all digital retail transactions in India.\n4. The Reserve Bank of India (RBI) directly operates and manages the day-to-day UPI platform.\n\nWhich of the statements given above is/are NOT correct?',
    options: [
      '4 only',
      '1 and 3 only',
      '2 and 4 only',
      '3 and 4 only'
    ],
    correctAnswer: 0,
    explanation: 'Only Statement 4 is incorrect.\n\nStatement 1 is correct: UPI was launched by NPCI (National Payments Corporation of India) in April 2016 under the guidance of RBI.\n\nStatement 2 is correct: As of August 2026, UPI has over 55 crore users and is live across 700+ banks.\n\nStatement 3 is correct: UPI accounts for about 85–86% of all retail digital payment transactions in India by volume.\n\nStatement 4 is incorrect: UPI is operated by NPCI, not directly by RBI. RBI regulates payment systems under the Payment and Settlement Systems Act, 2007, but the operational authority for UPI lies with NPCI (promoted by RBI and Indian Banks\' Association).',
    bookReference: {
      bookName: 'Indian Express & Drishti IAS',
      edition: 'August 2026',
      chapter: 'Digital Economy & Payment Systems',
      pageNumber: 'indianexpress.com / drishtiias.com',
      keyExcerpt: 'UPI completed 10 years in 2026, having evolved from zero to 55+ crore users and 700+ banks, accounting for 85–86% of India\'s digital transaction volume, operated by NPCI under regulatory oversight of RBI.'
    },
    eliminationTip: 'The question asks what is NOT correct. NPCI ≠ RBI — NPCI is the operating umbrella organization; RBI is the central regulatory authority.',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['UPI', 'Digital Payments', 'NPCI', 'RBI', 'Fintech', 'Economy']
  },

  // ─── Q6: India Space Economy 2026 ─────────────────────────────────
  {
    id: 'ca-aug15-2026-06',
    subject: 'current_affairs',
    topic: 'Science & Technology',
    subTopic: 'India\'s Space Economy & Space Startups 2026',
    question: 'Consider the following data points regarding India\'s space sector as of August 2026:\n\n1. India\'s space economy is valued at approximately USD 9 billion.\n2. The number of registered space startups has grown from one in 2014 to around 440 in 2026.\n3. Private investment in the space sector reached over USD 618 million by 2026.\n4. India\'s space economy is projected to grow to USD 40–45 billion over the next decade.\n\nWhich of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 4 only',
      '1, 2 and 4 only',
      '1, 2, 3 and 4'
    ],
    correctAnswer: 3,
    explanation: 'All four statements are correct based on August 2026 PIB and IN-SPACe data.\n\nStatement 1 is correct: India\'s space economy is valued at USD 9 billion as of 2026.\n\nStatement 2 is correct: The number of DPIIT-registered space startups grew from one (2014) to ~440 (2026) — a landmark growth post-IN-SPACe and Space Sector Reforms (2020).\n\nStatement 3 is correct: Private investment in Indian space startups crossed USD 618 million by 2026 (a nearly 6x increase since 2021–22).\n\nStatement 4 is correct: India aims to capture 8–10% of the global space market, translating to USD 40–45 billion by 2035–2040.',
    bookReference: {
      bookName: 'PIB & Drishti IAS',
      edition: 'August 2026',
      chapter: 'Science & Technology: Space Economy',
      pageNumber: 'pib.gov.in / drishtiias.com',
      keyExcerpt: 'India\'s space economy: USD 9 billion; 440 registered space startups; private investment USD 618 mn+; projected USD 40–45 billion with 8–10% global market share target.'
    },
    eliminationTip: 'All four data points are verified from official PIB releases on space sector liberalization and IN-SPACe milestones.',
    difficulty: 'Easy',
    frequency: 3,
    tags: ['Space Economy', 'IN-SPACe', 'Space Startups', 'Science Technology', 'Economy']
  },

  // ─── Q7: Monsoon, Climate Change & Northeast Floods ───────────────
  {
    id: 'ca-aug15-2026-07',
    subject: 'current_affairs',
    topic: 'Environment & Ecology',
    subTopic: 'Northeast India Floods 2026 & Climate Attribution Science',
    question: 'With reference to the extreme monsoon-related events in Assam and Northeast India in 2026, which of the following statements is MOST accurate from a UPSC perspective?\n\n(a) The Intergovernmental Panel on Climate Change (IPCC) directly intervened in the disaster relief operations in Assam.\n(b) International researchers using attribution science linked the increased frequency and intensity of Northeast India floods to human-induced climate change.\n(c) Flash floods and landslides in Northeast India are entirely natural events with no established link to anthropogenic climate change.\n(d) The National Disaster Management Authority (NDMA) issued a report attributing 2026 Assam floods solely to deforestation in the region.',
    options: [
      '(a)',
      '(b)',
      '(c)',
      '(d)'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is correct.\n\nUsing "climate attribution science" — a method that compares the observed climate with modelled scenarios without human greenhouse gas emissions — researchers determined that human-induced climate change significantly increased the probability and intensity of the 2026 Northeast India floods. Heavy monsoon rains caused severe flash floods and landslides across Assam with over 100 reported deaths.\n\nOption (a) is wrong: IPCC is a scientific assessment body, not an operational relief agency.\nOption (c) is wrong: attribution science has established a clear link between anthropogenic warming and intensified precipitation.\nOption (d) is wrong: NDMA did not issue such a unilateral report; deforestation is a contributing factor but not the sole cause.',
    bookReference: {
      bookName: 'Down to Earth & The Hindu',
      edition: 'August 2026',
      chapter: 'Environment: Climate Change & Extreme Events',
      pageNumber: 'downtoearth.org / thehindu.com',
      keyExcerpt: 'International climate scientists employing attribution science concluded that human-induced climate change increased the frequency and severity of extreme monsoon events in Northeast India in 2026.'
    },
    eliminationTip: '"Attribution science" is a critical emerging UPSC concept. IPCC does not carry out field relief operations (eliminate a). Extreme "no link" claims are almost always incorrect in UPSC prelims (eliminate c).',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['Assam Floods', 'Climate Change', 'Attribution Science', 'Northeast India', 'Monsoon', 'Environment']
  },

  // ─── Q8: India Nuclear Energy – 200 GW Target & SHANTI Act ────────
  {
    id: 'ca-aug15-2026-08',
    subject: 'current_affairs',
    topic: 'Energy & Environment',
    subTopic: 'India\'s Nuclear Energy Target – 200 GW & SHANTI Act',
    question: 'Consider the following statements regarding India\'s nuclear energy expansion announced during Independence Day 2026:\n\n1. Prime Minister Modi announced a target of 200 GW of nuclear energy capacity.\n2. The SHANTI Act provides a new legal and regulatory framework for India\'s nuclear expansion.\n3. India currently operates under a three-stage nuclear power programme originally designed to eventually utilise its large reserves of thorium.\n4. India\'s current operational nuclear power capacity is the highest in Asia.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1, 2 and 3 only',
      '2 and 4 only',
      '1 and 4 only',
      '1, 2, 3 and 4'
    ],
    correctAnswer: 0,
    explanation: 'Statements 1, 2, and 3 are correct; Statement 4 is incorrect.\n\nStatement 1 is correct: PM Modi announced a 200 GW nuclear energy target during the 80th Independence Day address.\n\nStatement 2 is correct: The SHANTI Act was passed to provide a comprehensive legal and regulatory framework for rapid nuclear energy expansion, including for private sector participation.\n\nStatement 3 is correct: India\'s three-stage nuclear programme is explicitly designed to leverage its large thorium reserves (Stage 3) — India holds the world\'s second-largest thorium deposits.\n\nStatement 4 is incorrect: China has the highest operational nuclear power capacity in Asia (and is second globally after the US). India\'s nuclear capacity, while growing rapidly, is not the largest in Asia.',
    bookReference: {
      bookName: 'The Print & Financial Express',
      edition: 'August 15, 2026',
      chapter: 'Energy Security & Nuclear Power Policy',
      pageNumber: 'theprint.in / financialexpress.com',
      keyExcerpt: 'PM Modi set a 200 GW nuclear target on Independence Day 2026; the SHANTI Act provides the legal framework; India\'s three-stage programme is designed to ultimately utilise thorium (2nd largest reserves globally).'
    },
    eliminationTip: 'Statement 4 is the trap — China significantly outpaces other Asian nations in operational nuclear reactors. Statements 1, 2, and 3 are all factual policy updates.',
    difficulty: 'Tricky',
    frequency: 4,
    tags: ['Nuclear Energy', 'SHANTI Act', '200 GW', 'Thorium', 'Viksit Bharat', 'Energy']
  },

  // ─── Q9: Nasha Mukt Yuva Abhiyan ──────────────────────────────────
  {
    id: 'ca-aug15-2026-09',
    subject: 'current_affairs',
    topic: 'Social Issues & Governance',
    subTopic: 'Nasha Mukt Yuva for Viksit Bharat Sankalp Abhiyan (2026)',
    question: 'With reference to the "Nasha Mukt Yuva for Viksit Bharat Sankalp Abhiyan," launched in August 2026, which of the following statements are correct?\n\n1. The campaign was launched on August 2, 2026 as a 100-week Jan Bhagidari initiative.\n2. The campaign mandates that each district establish a dedicated de-addiction centre under direct government management.\n3. The initiative aims to mobilise youth, families, NGOs, and spiritual organisations for weekly community activities every Sunday.\n4. It is an intensified component of the larger Nasha Mukt Bharat Abhiyan.\n\nSelect the correct answer using the code below:',
    options: [
      '1 and 3 only',
      '1, 3 and 4 only',
      '2 and 4 only',
      '1, 2, 3 and 4'
    ],
    correctAnswer: 1,
    explanation: 'Statements 1, 3, and 4 are correct; Statement 2 is incorrect.\n\nStatement 1 is correct: The "Nasha Mukt Yuva for Viksit Bharat Sankalp Abhiyan" was launched by PM Modi on August 2, 2026 as a 100-week Jan Bhagidari (people\'s participation) campaign.\n\nStatement 2 is incorrect: The campaign does NOT mandate each district to establish a dedicated de-addiction centre under direct government management. Its primary approach is community-led Jan Bhagidari — engaging youth, NGOs, and families — not mandating new infrastructure.\n\nStatement 3 is correct: Weekly Sunday activities for community awareness are a core feature of the campaign.\n\nStatement 4 is correct: This is an intensified initiative under the broader Nasha Mukt Bharat Abhiyan.',
    bookReference: {
      bookName: 'PIB & India Today',
      edition: 'August 2, 2026',
      chapter: 'Social Policy: Drug-Free India Initiatives',
      pageNumber: 'pmindia.gov.in / indiatoday.in',
      keyExcerpt: 'PM launched the Nasha Mukt Yuva for Viksit Bharat Sankalp Abhiyan on August 2, 2026 — a 100-week Jan Bhagidari campaign with weekly Sunday activities, as part of the Nasha Mukt Bharat Abhiyan.'
    },
    eliminationTip: 'Statement 2 is the distractor — government social campaigns emphasize "Jan Bhagidari" (community action) rather than imposing rigid infrastructure mandates on all districts.',
    difficulty: 'Easy',
    frequency: 2,
    tags: ['Nasha Mukt', 'Drug Free India', 'Jan Bhagidari', 'Social Schemes', 'Governance']
  },

  // ─── Q10: India-China Border & MEA Jaishankar's 5-Point Agenda ────
  {
    id: 'ca-aug15-2026-10',
    subject: 'current_affairs',
    topic: 'International Relations',
    subTopic: 'India\'s Foreign Policy – EAM Jaishankar\'s 5-Point Global Agenda & India-China Relations',
    question: 'With reference to India\'s foreign policy developments in August 2026, consider the following statements:\n\n1. External Affairs Minister S. Jaishankar articulated a five-point global agenda for India focusing on de-risking the global economy and strengthening the Global South.\n2. India\'s Ministry of External Affairs stated that incidents along the disputed India-China border would impact the "state of our larger bilateral ties."\n3. India completed its 19th Foreign Office Consultations with Singapore in early August 2026.\n4. The Indian government has officially recognised the Line of Actual Control (LAC) as the permanent international boundary with China.\n\nWhich of the statements given above is/are NOT correct?',
    options: [
      '4 only',
      '2 and 4 only',
      '3 and 4 only',
      '1 and 4 only'
    ],
    correctAnswer: 0,
    explanation: 'Only Statement 4 is NOT correct.\n\nStatement 1 is correct: EAM Jaishankar articulated India\'s five-point global agenda — de-risking the global economy, diversifying supply chains, strengthening Global South capacity, advancing reformed multilateralism, and promoting convergent technologies.\n\nStatement 2 is correct: MEA spokesperson reiterated in August 2026 that incidents along the India-China disputed border would directly affect the "state of our larger bilateral ties" — a continuation of post-2020 Galwan policy stance.\n\nStatement 3 is correct: India hosted the 19th Foreign Office Consultations with Singapore in early August 2026, covering regional security and economic ties.\n\nStatement 4 is NOT correct: India has NEVER recognised the LAC as a permanent international boundary. The LAC is a de facto ceasefire line, and the final boundary remains unresolved. India maintains that border tranquility is a prerequisite for normal ties.',
    bookReference: {
      bookName: 'MEA (Ministry of External Affairs) Press Releases & Drishti IAS',
      edition: 'August 2026',
      chapter: 'International Relations: India-China & Foreign Policy',
      pageNumber: 'mea.gov.in / drishtiias.com',
      keyExcerpt: 'EAM Jaishankar\'s 5-point agenda: de-risk global economy, diversify supply chains, strengthen Global South, reformed multilateralism, convergent technology. LAC remains a de facto line — NOT a recognised international boundary.'
    },
    eliminationTip: 'Statement 4 is factually and constitutionally incorrect — India treats the LAC as a line of actual control, never as an international border. This makes (4 only) the obvious "not correct" answer.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['Foreign Policy', 'Jaishankar', 'India-China', 'LAC', 'Global South', 'International Relations']
  },

  // ══════════════════════════════════════════════════════════════════
  // EXTENDED EDITORIAL & SPECIAL DOSSIER (SET 2: Q11 – Q20)
  // ══════════════════════════════════════════════════════════════════

  // ─── Q11: World Elephant Day 2026 & Gaj Gaurav Awards ─────────────
  {
    id: 'ca-aug15-2026-11',
    subject: 'current_affairs',
    topic: 'Environment & Ecology',
    subTopic: 'World Elephant Day 2026 – Gaj Gaurav Awards & Regional Action Plan',
    question: 'With reference to World Elephant Day 2026 and elephant conservation in India, consider the following statements:\n\n1. India hosts approximately 60% of the world\'s wild Asian elephant population.\n2. The national celebrations of World Elephant Day 2026 were held in Visakhapatnam, Andhra Pradesh.\n3. The Gaj Gaurav Awards 2026 honored mahouts from Jaldapara National Park, West Bengal, for flood rescue operations.\n4. A new Regional Action Plan for Human-Elephant Conflict Management was launched covering four Southern Indian States.\n\nWhich of the statements given above are correct?',
    options: [
      '1 and 3 only',
      '2 and 4 only',
      '1, 2 and 3 only',
      '1, 2, 3 and 4'
    ],
    correctAnswer: 3,
    explanation: 'All four statements are correct.\n\nStatement 1 is correct: India is home to nearly 60% of the global Asian elephant (Elephas maximus) population across 33 Elephant Reserves and 150 identified corridors.\n\nStatement 2 is correct: World Elephant Day 2026 national celebrations took place on August 13, 2026, in Visakhapatnam, Andhra Pradesh.\n\nStatement 3 is correct: Mahouts from Jaldapara National Park were conferred the prestigious Gaj Gaurav Awards 2026 for safeguarding captive elephants and wild rhinos during flash floods.\n\nStatement 4 is correct: MoEFCC launched a ₹500 crore Regional Action Plan for Human-Elephant Conflict covering Karnataka, Kerala, Tamil Nadu, and Andhra Pradesh.',
    bookReference: {
      bookName: 'Ministry of Environment, Forest and Climate Change (MoEFCC) & PIB',
      edition: 'August 13, 2026',
      chapter: 'Wildlife Conservation: Project Elephant & Gaj Gaurav Awards',
      pageNumber: 'PIB Release: World Elephant Day 2026 / moef.gov.in',
      keyExcerpt: 'India holds ~60% of wild Asian elephants; Gaj Gaurav Awards 2026 presented in Visakhapatnam; ₹500 Cr Regional Action Plan for South India launched.'
    },
    eliminationTip: 'All four statements reflect factual announcements from the August 13, 2026 MoEFCC national event in Visakhapatnam.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['Elephant Day', 'Gaj Gaurav Awards', 'Project Elephant', 'Wildlife Conservation', 'Environment']
  },

  // ─── Q12: SC Ruling on Arrest Safeguards (Vihaan Kumar Case) ──────
  {
    id: 'ca-aug15-2026-12',
    subject: 'current_affairs',
    topic: 'Polity & Constitution',
    subTopic: 'Article 22(1) & Supreme Court Ruling on Mandatory Communication of Grounds of Arrest',
    question: 'In the landmark case Vihaan Kumar v. State of Haryana (2025/2026), the Supreme Court of India ruled on the constitutional safeguards surrounding arrest. With reference to this judgment, consider the following statements:\n\n1. Article 22(1) mandates that the grounds of arrest must be directly and meaningfully communicated to the arrested person.\n2. Merely recording the grounds of arrest in the case diary or remand application satisfies the constitutional mandate of Article 22(1).\n3. An arrest carried out in violation of Article 22(1) renders the arrest and any subsequent remand orders illegal.\n4. Chaining an accused person to a hospital bed was held to be a violation of the right to dignity under Article 21.\n\nWhich of the statements given above are correct?',
    options: [
      '1, 3 and 4 only',
      '1 and 2 only',
      '2, 3 and 4 only',
      '1, 2, 3 and 4'
    ],
    correctAnswer: 0,
    explanation: 'Statements 1, 3, and 4 are correct; Statement 2 is incorrect.\n\nStatement 1 is correct: The Supreme Court held that Article 22(1) requires direct, meaningful communication of grounds of arrest to the arrestee in a language they understand.\n\nStatement 2 is incorrect: The Court categorically held that merely recording reasons in police case diaries, remand papers, or informing relatives does NOT satisfy Article 22(1).\n\nStatement 3 is correct: Non-compliance with Article 22(1) renders the arrest void ab initio and vitiates subsequent remand orders.\n\nStatement 4 is correct: Handcuffing or chaining a patient/accused to a hospital bed violates human dignity under Article 21.',
    bookReference: {
      bookName: 'Supreme Court Observer & The Hindu Law Reports',
      edition: '2025–2026 Jurisprudence',
      chapter: 'Fundamental Rights: Articles 21 & 22 – Arrest Safeguards',
      pageNumber: 'scobserver.in / thehindu.com/news/national',
      keyExcerpt: 'In Vihaan Kumar v. State of Haryana, SC ruled grounds of arrest under Art 22(1) must be directly communicated to the arrestee; recording in case diaries is insufficient.'
    },
    eliminationTip: 'Notice the contradiction between Statement 1 and Statement 2. If Article 22(1) requires direct communication to the person, internal case diary recording cannot satisfy it. Eliminate options with Statement 2.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['Supreme Court', 'Article 22', 'Article 21', 'Fundamental Rights', 'Polity']
  },

  // ─── Q13: NITI Aayog Report – 12 Priority Manufacturing Sectors ───
  {
    id: 'ca-aug15-2026-13',
    subject: 'current_affairs',
    topic: 'Economy & Industrial Policy',
    subTopic: 'NITI Aayog Report on Key Sectors for USD 30 Trillion Economy by 2047',
    question: 'According to the NITI Aayog report "Key Sectors to Position India as a Global Manufacturing Hub" released in August 2026, consider the following statements:\n\n1. It aims to propel India towards becoming a USD 30 trillion economy by 2047.\n2. The report identifies 12 priority sectors, with an in-depth focus on Chemicals, Textiles, Telecom Equipment, and Solar PV manufacturing.\n3. Manufacturing currently contributes over 35% of India\'s Gross Value Added (GVA).\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct; Statement 3 is incorrect.\n\nStatement 1 is correct: The strategic roadmap positions India to achieve a $30 trillion economy by 2047 (Viksit Bharat).\n\nStatement 2 is correct: Out of 62 screened manufacturing segments, NITI Aayog identified 12 champion sectors and provided deep dives into four: Chemicals, Textiles, Telecom & Networking Equipment, and Solar Photovoltaic (PV) manufacturing.\n\nStatement 3 is incorrect: India\'s manufacturing sector currently contributes approximately 17.5% of GVA (far below 35%), which is why the roadmap emphasizes aggressive structural scaling.',
    bookReference: {
      bookName: 'NITI Aayog & PIB',
      edition: 'August 13, 2026',
      chapter: 'Industrial Growth & Manufacturing Hub Roadmap 2047',
      pageNumber: 'niti.gov.in / pib.gov.in',
      keyExcerpt: 'NITI Aayog identified 12 champion sectors (deep dive in Chemicals, Textiles, Telecom, Solar PV) to lift manufacturing GVA from ~17.5% toward Viksit Bharat $30T target.'
    },
    eliminationTip: 'Manufacturing in India has hovered around 15–18% of GDP/GVA for decades. The 35% figure in Statement 3 is a well-known exaggeration trap.',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['NITI Aayog', 'Manufacturing', 'Viksit Bharat', 'Economy', 'Solar PV', 'Textiles']
  },

  // ─── Q14: CAG Audit Report on Green India Mission ─────────────────
  {
    id: 'ca-aug15-2026-14',
    subject: 'current_affairs',
    topic: 'Environment & Governance',
    subTopic: 'CAG Performance Audit of National Mission for a Green India (GIM)',
    question: 'The Comptroller and Auditor General (CAG) of India tabled a performance audit report on the Green India Mission (GIM) in August 2026. What was the central finding of this audit?\n\n(a) The mission exceeded its afforestation targets by 150% across 16 states.\n(b) The mission suffered a shortfall of approximately 98% in achieving its targeted forest cover expansion over a 10-year period.\n(c) The mission successfully met all its carbon sequestration targets but had minor fiscal accounting deficits.\n(d) The mission was transferred from MoEFCC to the Ministry of Rural Development for better grassroots implementation.',
    options: [
      '(a)',
      '(b)',
      '(c)',
      '(d)'
    ],
    correctAnswer: 1,
    explanation: 'Option (b) is correct.\n\nThe CAG performance audit tabled on August 13, 2026, revealed that the Green India Mission (GIM) missed its forest cover targets by ~98% between 2015-16 and 2024-25. Out of a target of 1.4 million hectares, only about 0.034 million hectares were achieved, hampered by budgetary delays, poor state-level coordination, and deficient carbon accounting mechanisms.',
    bookReference: {
      bookName: 'CAG Audit Report & Economic Times',
      edition: 'August 13, 2026',
      chapter: 'Performance Audit on Environmental Programmes: Green India Mission',
      pageNumber: 'cag.gov.in / economictimes.indiatimes.com',
      keyExcerpt: 'CAG audit tabled in Parliament pointed out a 98% shortfall in GIM targets over 10 years, achieving only 0.034 million hectares against a 1.4 million hectare target.'
    },
    eliminationTip: 'CAG performance audits in the news are frequently highlighted for systemic audit gaps and execution shortfalls rather than claiming over-achievement.',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['CAG', 'Green India Mission', 'Afforestation', 'Climate Policy', 'Environment']
  },

  // ─── Q15: Parliamentary Committee on Heritage & AI (393rd Report) ─
  {
    id: 'ca-aug15-2026-15',
    subject: 'current_affairs',
    topic: 'Art & Culture / Science & Tech',
    subTopic: 'Parliamentary Standing Committee 393rd Report – "From Manuscript to Mission" (2026)',
    question: 'With reference to the 393rd Report of the Parliamentary Standing Committee on Transport, Tourism and Culture titled "From Manuscript to Mission: Preserving, Mapping and Sustaining India\'s Cultural Heritage in the Age of AI" (August 2026), consider the following statements:\n\n1. It evaluated the Gyan Bharatam Mission, which targets digitising one crore manuscripts by 2030.\n2. It recommended using multispectral recovery and surface-relief imaging for damaged and palm-leaf manuscripts.\n3. It proposed an "Akshar Mitra" citizen-science platform to enable crowdsourced transcription.\n4. It recommended using federated learning to allow private manuscript repositories to train AI models without relinquishing physical custody.\n\nWhich of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2, 3 and 4 only',
      '1, 3 and 4 only',
      '1, 2, 3 and 4'
    ],
    correctAnswer: 3,
    explanation: 'All four statements are correct.\n\nThe 393rd Report presented on August 12, 2026, made groundbreaking recommendations for preserving India\'s vast manuscript collection:\n1. Review of Gyan Bharatam Mission (1 crore manuscripts by 2030).\n2. Technical capture standards: multispectral imaging for overwritten/burnt folios, surface-relief imaging for palm leaves.\n3. Akshar Mitra platform for citizen and student transcription credits.\n4. Federated learning algorithms so private maths/ashrams can contribute AI training without surrendering manuscript custody.',
    bookReference: {
      bookName: 'Parliament of India (Rajya Sabha Secretariat) & PIB',
      edition: 'August 12, 2026',
      chapter: 'Department-related Parliamentary Standing Committee 393rd Report',
      pageNumber: 'sansad.in/rs / pib.gov.in',
      keyExcerpt: 'Committee recommended Gyan Bharatam Mission acceleration, Akshar Mitra crowdsourcing, multispectral scanning, and federated learning for private manuscript collections.'
    },
    eliminationTip: 'All four proposals are innovative, tech-enabled recommendations from the August 2026 Parliamentary Committee report on culture and AI.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['Gyan Bharatam', 'Manuscripts', 'Artificial Intelligence', 'Culture', 'Parliamentary Report']
  },

  // ─── Q16: WPI vs CPI Inflation Dynamics ───────────────────────────
  {
    id: 'ca-aug15-2026-16',
    subject: 'current_affairs',
    topic: 'Economy',
    subTopic: 'Wholesale Price Index (WPI) vs Consumer Price Index (CPI)',
    question: 'With reference to inflation measurement in India, consider the following statements:\n\n1. The Wholesale Price Index (WPI) is published by the Office of Economic Adviser, Ministry of Commerce and Industry.\n2. The Consumer Price Index (CPI-Combined) is released by the National Statistical Office (NSO), MoSPI.\n3. Manufactured products have the highest weightage in the WPI basket.\n4. The Reserve Bank of India uses WPI as the headline inflation target for monetary policy decisions.\n\nWhich of the statements given above is/are NOT correct?',
    options: [
      '4 only',
      '2 and 4 only',
      '3 and 4 only',
      '1 and 3 only'
    ],
    correctAnswer: 0,
    explanation: 'Only Statement 4 is NOT correct.\n\nStatement 1 is correct: WPI is compiled and released monthly by the Office of the Economic Adviser, Department for Promotion of Industry and Internal Trade (DPIIT), Ministry of Commerce and Industry.\n\nStatement 2 is correct: CPI is compiled and released by the National Statistical Office (NSO), Ministry of Statistics and Programme Implementation (MoSPI).\n\nStatement 3 is correct: Manufactured Products account for the largest share in WPI (~64.23%), followed by Primary Articles (~22.62%) and Fuel & Power (~13.15%).\n\nStatement 4 is incorrect: Following the Urjit Patel Committee recommendations (2014) and the Monetary Policy Framework Agreement, RBI adopted CPI (Combined) — NOT WPI — as the headline anchor for the 4% (+/- 2%) inflation target.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / Economic Survey',
      edition: '2025–2026 Edition',
      chapter: 'Inflation and Price Indices (WPI vs CPI)',
      pageNumber: 'Chapter 7: Prices & Inflation Dynamics',
      keyExcerpt: 'RBI switched from WPI to CPI-Combined as its headline inflation anchor based on the Urjit Patel Committee report. WPI gives highest weight to manufactured products (64.23%).'
    },
    eliminationTip: 'The question asks which is NOT correct. Statement 4 is a foundational macroeconomics fact: RBI targets CPI, not WPI.',
    difficulty: 'Moderate',
    frequency: 5,
    tags: ['Inflation', 'WPI', 'CPI', 'RBI', 'Monetary Policy', 'Economy']
  },

  // ─── Q17: India-Singapore 19th FOC & Strategic Cooperation ────────
  {
    id: 'ca-aug15-2026-17',
    subject: 'current_affairs',
    topic: 'International Relations',
    subTopic: 'India-Singapore Comprehensive Strategic Partnership & Digital Linkages',
    question: 'During the 19th India-Singapore Foreign Office Consultations (August 2026), bilateral cooperation was reviewed across multiple strategic domains. Which of the following is/are key pillars of the India-Singapore bilateral architecture?\n\n1. Real-time cross-border retail payment linkage between UPI and PayNow.\n2. Collaboration on semiconductor ecosystem development and supply chain resilience.\n3. The Comprehensive Economic Cooperation Agreement (CECA).\n4. A mutual defence treaty mandating collective military response in case of external aggression.\n\nSelect the correct answer using the code below:',
    options: [
      '1, 2 and 3 only',
      '1 and 3 only',
      '2 and 4 only',
      '1, 2, 3 and 4'
    ],
    correctAnswer: 0,
    explanation: 'Statements 1, 2, and 3 are correct; Statement 4 is incorrect.\n\nStatement 1 is correct: India\'s UPI and Singapore\'s PayNow established the world\'s first live cross-border fast payment linkage.\n\nStatement 2 is correct: India and Singapore established a dedicated ministerial dialogue on semiconductors and green corridors.\n\nStatement 3 is correct: India and Singapore signed the landmark Comprehensive Economic Cooperation Agreement (CECA) in 2005, India\'s first such comprehensive trade pact.\n\nStatement 4 is incorrect: India and Singapore have close defense ties (SIMBEX, Joint Military Training) but do NOT have a mutual collective defense treaty (such as NATO Article 5). India does not enter into formal military alliances.',
    bookReference: {
      bookName: 'Ministry of External Affairs (MEA) & IDSA Reports',
      edition: 'August 2026',
      chapter: 'Bilateral Relations: India-Singapore & ASEAN',
      pageNumber: 'mea.gov.in / idsa.in',
      keyExcerpt: 'India-Singapore ties encompass CECA, UPI-PayNow linkage, and semiconductor pacts. India maintains strategic autonomy with no mutual defense alliance treaties.'
    },
    eliminationTip: 'India\'s foundational foreign policy principle is strategic autonomy — India does not sign collective military defense treaties with any nation. Statement 4 can be instantly eliminated.',
    difficulty: 'UPSC Standard',
    frequency: 3,
    tags: ['India-Singapore', 'UPI-PayNow', 'CECA', 'Act East', 'International Relations']
  },

  // ─── Q18: India-Lesotho Joint Bilateral Commission & SADC ─────────
  {
    id: 'ca-aug15-2026-18',
    subject: 'current_affairs',
    topic: 'International Relations',
    subTopic: 'India-Lesotho 6th Joint Bilateral Commission & India\'s Africa Engagement',
    question: 'Consider the following geographical and geopolitical statements regarding the Kingdom of Lesotho in the context of the 6th India-Lesotho Joint Bilateral Commission held in August 2026:\n\n1. Lesotho is an enclaved, landlocked country completely surrounded by South Africa.\n2. Lesotho is a member of the Southern African Development Community (SADC).\n3. India has extended concessional Lines of Credit (LoC) to Lesotho for solar energy and vocational training.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are correct.\n\nStatement 1 is correct: Lesotho is one of only three enclaved nation-states in the world (the others being San Marino and Vatican City), entirely encircled by the territory of South Africa.\n\nStatement 2 is correct: Lesotho is a full member state of the 16-nation Southern African Development Community (SADC).\n\nStatement 3 is correct: Under its South-South cooperation and ITEC framework, India has extended concessional Lines of Credit to Lesotho for water supply, solar projects, and youth training centers.',
    bookReference: {
      bookName: 'MEA Annual Report & Oxford World Atlas',
      edition: 'August 2026',
      chapter: 'Geopolitics: Africa & Enclaved States',
      pageNumber: 'mea.gov.in / Joint Commission Briefs',
      keyExcerpt: 'Lesotho is an enclaved SADC country completely surrounded by South Africa. India-Lesotho 6th JBC reviewed LoC solar and developmental projects.'
    },
    eliminationTip: 'Geography-meets-Current-Affairs is a favorite UPSC Prelims question archetype. Lesotho being an enclaved state inside South Africa is standard map-based knowledge.',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['Lesotho', 'Africa', 'SADC', 'South-South Cooperation', 'Geopolitics']
  },

  // ─── Q19: State of Environment Report 2026 – Extreme Weather ──────
  {
    id: 'ca-aug15-2026-19',
    subject: 'current_affairs',
    topic: 'Environment & Disaster Management',
    subTopic: 'State of Environment Report 2026 & Extreme Weather Resilience',
    question: 'The State of Environment Report 2026 highlighted key environmental risks facing India. With reference to this, consider the following statements:\n\n1. India experienced extreme weather events (heatwaves, cloudbursts, severe floods) on nearly 99% of days in 2025.\n2. Heat Action Plans (HAPs) in India are legally binding statutory instruments notified under the Disaster Management Act, 2005.\n3. Climate-resilient urban infrastructure and early warning systems are key components of the National Action Plan on Climate Change (NAPCC).\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 3 only',
      '1 and 2 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statements 1 and 3 are correct; Statement 2 is incorrect.\n\nStatement 1 is correct: The State of Environment Report noted that India experienced extreme weather events on 99% of the days in 2025 across different states.\n\nStatement 2 is incorrect: Heat Action Plans (HAPs) are guidelines and advisory frameworks formulated by states and municipal corporations under NDMA guidance; they are NOT legally binding statutory enactments.\n\nStatement 3 is correct: NAPCC and its National Missions (e.g., National Mission on Sustainable Habitat) prioritize climate-resilient urban infrastructure and multi-hazard early warning systems.',
    bookReference: {
      bookName: 'Down To Earth & Centre for Science and Environment (CSE)',
      edition: 'State of India\'s Environment 2026',
      chapter: 'Climate Change & Extreme Weather Event Frequency',
      pageNumber: 'downtoearth.org.in / CSE Publications',
      keyExcerpt: 'Extreme weather recorded on 99% of days in 2025; HAPs remain advisory guidelines needing legal teeth and dedicated climate financing.'
    },
    eliminationTip: 'Notice the extreme legal claim in Statement 2: HAPs are policy advisories, not statutory Acts passed by Parliament. Eliminate Statement 2.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['Extreme Weather', 'CSE Report', 'Heat Action Plans', 'NAPCC', 'Environment']
  },

  // ─── Q20: Saptadhara Vision & 1 Crore AI Youth Skilling ───────────
  {
    id: 'ca-aug15-2026-20',
    subject: 'current_affairs',
    topic: 'Governance & Human Resource Development',
    subTopic: 'Saptadhara (Seven-Pillar) Vision for Viksit Bharat @2047 & AI Skilling Mission',
    question: 'During the 80th Independence Day address, the Prime Minister outlined the "Saptadhara" (seven-pillar) development framework for Viksit Bharat@2047. Which of the following is a primary human capital initiative announced under this framework?\n\n(a) Launch of a national scheme to impart artificial intelligence (AI) and frontier technology skilling to 1 crore youth.\n(b) Universal compulsory national military service for all graduate students.\n(c) Replacement of all state school curricula with a single central board.\n(d) Abolition of all technical polytechnic diplomas in favor of four-year degrees.',
    options: [
      'Only (a)',
      'Both (a) and (c)',
      'Only (b)',
      'Both (a) and (d)'
    ],
    correctAnswer: 0,
    explanation: 'Option (a) is correct.\n\nUnder the "Yuva Shakti for Viksit Bharat@2047" and Saptadhara framework, the Prime Minister announced an ambitious mission to skill 1 crore Indian youth in Artificial Intelligence (AI), semiconductors, cyber security, and emerging digital technologies to bridge the global talent deficit.\n\nOptions (b), (c), and (d) are fictitious distractor choices contrary to India\'s federal education and defense policies.',
    bookReference: {
      bookName: 'PIB (Prime Minister\'s Office) & DD News',
      edition: 'August 15, 2026',
      chapter: 'National Policy: Independence Day Address 2026',
      pageNumber: 'pmindia.gov.in / pib.gov.in',
      keyExcerpt: 'PM unveiled AI Skilling Mission targeting 1 crore youth under the Saptadhara Viksit Bharat@2047 vision to establish India as the premier global technology talent capital.'
    },
    eliminationTip: 'Frontier AI skilling was the standout human resource announcement of the 2026 Independence Day address. Options (b), (c), and (d) violate constitutional and federal principles.',
    difficulty: 'Easy',
    frequency: 4,
    tags: ['Viksit Bharat', 'Saptadhara', 'AI Skilling', 'Youth', 'Governance']
  }
];


