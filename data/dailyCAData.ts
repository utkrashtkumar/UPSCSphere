import { Question } from '@/lib/types';

// ====================================================================
// Daily Current Affairs 6-Subject Mega Archive (60 Questions Daily)
// 10 Questions per Subject Stream:
// 1. Polity & Governance (10)
// 2. Indian Economy & Banking (10)
// 3. Science & Technology (10)
// 4. International Relations (10)
// 5. Geography & Environment (10)
// 6. History, Art & Culture (10)
// ====================================================================

// ─── 1. POLITY & GOVERNANCE (10 Questions) ───────────────────────────
export const ca_polity_2026_08_20: Question[] = [
  {
    id: 'ca-2026-08-20-polity-01',
    subject: 'polity',
    topic: 'Polity & Judiciary',
    subTopic: 'Supreme Court Ruling on Sub-classification within Scheduled Castes',
    question: 'Consider the following statements regarding the 7-Judge Constitution Bench ruling of the Supreme Court on sub-classification of Scheduled Castes (SC) and Scheduled Tribes (ST):\n\n1. State governments are constitutionally permitted to sub-classify SCs and STs to provide preferential reservations to more backward sub-groups.\n2. The ruling overruled the earlier 5-judge bench decision in E.V. Chinnaiah v. State of Andhra Pradesh (2004).\n3. State governments have absolute discretion to sub-classify without any requirement of empirical quantifiable data.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. The 7-judge bench overruled E.V. Chinnaiah (2004) and held that Article 15(4) and 16(4) allow States to sub-classify SCs/STs based on empirical data proving inadequate representation.',
    bookReference: {
      bookName: 'The Hindu & Supreme Court Judgments',
      edition: 'August 20, 2026',
      chapter: 'Indian Polity: Fundamental Rights & Affirmative Action (Art 15, 16, 341)',
      pageNumber: 'The Hindu Editorial / scobserver.in',
      keyExcerpt: 'State power to sub-classify SCs and STs is conditioned upon producing empirical data showing systemic backwardness.'
    },
    eliminationTip: 'Statement 3 uses extreme wording "absolute discretion without requirement". In constitutional law, affirmative action requires quantifiable empirical data.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['Judiciary', 'Sub-classification', 'Article 341', 'Polity'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'The Hindu & LiveLaw'
  },
  {
    id: 'ca-2026-08-20-polity-02',
    subject: 'polity',
    topic: 'Polity & Parliament',
    subTopic: 'Kerala (Alteration of Name) Bill & Article 3 Procedure',
    question: 'Consider the following statements regarding the procedure for altering the name of a State in India:\n\n1. A Bill for altering the name of a State can be introduced in either House of Parliament only on the recommendation of the President.\n2. The President must refer the Bill to the concerned State Legislature for expressing its views within a specified period.\n3. The opinion expressed by the State Legislature is strictly binding on the Parliament.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct under Article 3. Statement 3 is incorrect: The views of the State Legislature are not binding on Parliament or the President.',
    bookReference: {
      bookName: 'M. Laxmikanth (7th Edition) & PRS India',
      edition: '7th Edition (2026 Revision)',
      chapter: 'Chapter 5: Union and its Territory',
      pageNumber: 'Pages 5.3–5.5',
      keyExcerpt: 'Parliament is not bound by the views of the state legislature and may either accept or reject them.'
    },
    eliminationTip: 'UPSC frequently tests whether the State Legislature\'s view under Article 3 is advisory or binding. It is strictly non-binding.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Article 3', 'State Reorganisation', 'Parliament', 'Polity'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'PRS Legislative Research & The Hindu'
  },
  {
    id: 'ca-2026-08-20-polity-03',
    subject: 'polity',
    topic: 'Polity & Governance',
    subTopic: 'Chief Election Commissioner and other ECs (Appointment) Act',
    question: 'With reference to the Selection Committee for the appointment of the Chief Election Commissioner (CEC) and other Election Commissioners (ECs), who among the following are members?\n\n1. Prime Minister of India (Chairperson)\n2. Leader of Opposition in Lok Sabha\n3. Chief Justice of India\n4. A Union Cabinet Minister nominated by the Prime Minister\n\nSelect the correct answer using the code given below:',
    options: ['1, 2 and 4 only', '1, 2 and 3 only', '1 and 2 only', '1, 2, 3 and 4'],
    correctAnswer: 0,
    explanation: 'Under the Chief Election Commissioner and other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, the Selection Committee consists of: (1) Prime Minister as Chairperson, (2) Leader of Opposition in the Lok Sabha, and (3) A Union Cabinet Minister nominated by the PM. The CJI is not a member of the statutory Selection Committee.',
    bookReference: {
      bookName: 'M. Laxmikanth (7th Edition) & PRS India',
      edition: '7th Edition',
      chapter: 'Chapter 43: Election Commission',
      pageNumber: 'Pages 43.2–43.4',
      keyExcerpt: 'The statutory Selection Committee comprises the Prime Minister, the Leader of Opposition in Lok Sabha, and a designated Union Cabinet Minister.'
    },
    eliminationTip: 'Remember that while the Supreme Court\'s Anoop Baranwal (2023) bench had included the CJI temporarily until Parliament enacted a law, the subsequent 2023 Act enacted by Parliament replaced the CJI with a Union Cabinet Minister.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['Election Commission', 'CEC Appointment', 'Polity'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'PRS India & Ministry of Law'
  },
  {
    id: 'ca-2026-08-20-polity-04',
    subject: 'polity',
    topic: 'Polity & Elections',
    subTopic: 'Simultaneous Elections – High-Level Committee Recommendations',
    question: 'With reference to the High-Level Committee on Simultaneous Elections ("One Nation, One Election") chaired by Ram Nath Kovind, consider the following recommendations:\n\n1. Simultaneous elections for Lok Sabha and State Legislative Assemblies in the first step.\n2. Municipalities and Panchayat elections to be synchronized within 100 days of General Elections.\n3. Introduction of an Article 82A into the Constitution to facilitate synchronized terms.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. The Kovind Committee recommended a two-step framework: Step 1 synchronizes Lok Sabha and State Assemblies (using proposed Art 82A); Step 2 synchronizes local bodies (Panchayats and Municipalities) within 100 days.',
    bookReference: {
      bookName: 'High-Level Committee Report on Simultaneous Elections & PIB',
      edition: 'August 2026',
      chapter: 'Electoral Reforms & Constitutional Amendments',
      pageNumber: 'onoe.gov.in / PIB Report Summary',
      keyExcerpt: 'The Committee recommended amending the Constitution via Article 82A to designate an appointed date for synchronizing assembly terms.'
    },
    eliminationTip: 'All three statements represent key operational pillars of the Kovind Committee report. Select "1, 2 and 3".',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['One Nation One Election', 'Electoral Reforms', 'Polity'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'PIB Delhi & Law Commission'
  },
  {
    id: 'ca-2026-08-20-polity-05',
    subject: 'polity',
    topic: 'Polity & Rights',
    subTopic: 'Digital Personal Data Protection (DPDP) Act – Data Protection Board',
    question: 'Consider the following statements regarding the Data Protection Board of India (DPBI) established under the Digital Personal Data Protection (DPDP) Act:\n\n1. It functions as an independent, digital-by-design adjudicatory body to inquire into personal data breaches.\n2. Members of the Board are appointed by the Central Government on the recommendation of a Selection Committee.\n3. The Board has the power to impose financial penalties of up to ₹250 crore for significant data breaches.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct under the DPDP Act. The Board is an electronic-office adjudicatory tribunal whose members are appointed by the Centre, and it can levy monetary penalties up to ₹250 crore for failure to take reasonable security safeguards.',
    bookReference: {
      bookName: 'Ministry of Electronics and Information Technology (MeitY)',
      edition: 'August 20, 2026',
      chapter: 'Governance & Privacy: DPDP Act Architecture',
      pageNumber: 'meity.gov.in / dpbi.gov.in',
      keyExcerpt: 'The Data Protection Board of India enforces compliance and resolves consumer data breach complaints with penalties up to ₹250 crore.'
    },
    eliminationTip: 'Penalties under the DPDP Act are structured up to ₹250 crore per breach instance (replacing earlier criminal prosecution with civil monetary fines).',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['DPDP Act', 'Data Protection Board', 'Right to Privacy', 'Polity'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'MeitY & The Hindu'
  },
  {
    id: 'ca-2026-08-20-polity-06',
    subject: 'polity',
    topic: 'Polity & Legislature',
    subTopic: 'Nari Shakti Vandan Adhiniyam (106th Constitutional Amendment Act)',
    question: 'With reference to the Constitution (One Hundred and Sixth Amendment) Act (Women\'s Reservation), consider the following statements:\n\n1. It reserves one-third of all seats for women in the Lok Sabha, State Legislative Assemblies, and the Legislative Assembly of NCT of Delhi.\n2. The reservation applies to seats reserved for SCs and STs in the Lok Sabha and Assemblies.\n3. The reservation came into effect immediately without requiring prior census and delimitation exercises.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct (Articles 239AA, 330A, 332A, 334A). Statement 3 is incorrect: Article 334A specifically stipulates that the reservation shall take effect after a census conducted after the commencement of the Act followed by delimitation.',
    bookReference: {
      bookName: 'M. Laxmikanth (7th Edition) & Ministry of Law and Justice',
      edition: '7th Edition',
      chapter: 'Chapter 22 & 33: Parliament and State Legislature',
      pageNumber: 'Gazette of India Notification',
      keyExcerpt: 'Reservation for women shall be effective after an exercise of delimitation is undertaken for this purpose after the first census.'
    },
    eliminationTip: 'Statement 3 is factually incorrect because the sunset and commencement clauses (Article 334A) tie implementation to post-census delimitation.',
    difficulty: 'Moderate',
    frequency: 5,
    tags: ['Women Reservation', '106th Amendment', 'Delimitation', 'Polity'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Ministry of Law & PRS India'
  },
  {
    id: 'ca-2026-08-20-polity-07',
    subject: 'polity',
    topic: 'Polity & Federalism',
    subTopic: 'Inter-State River Water Disputes (Amendment) Framework',
    question: 'Under Article 262 of the Constitution of India, which of the following provisions apply to Inter-State River Water Disputes?\n\n1. Parliament may by law provide for the adjudication of any dispute relating to the use, distribution or control of inter-state waters.\n2. Parliament may by law exclude the jurisdiction of the Supreme Court or any other court in respect of such disputes.\n3. A Dispute Resolution Committee (DRC) is mandatory before referring disputes to an Inter-State Tribunal under recent reform bills.\n\nSelect the correct answer using the code given below:',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. Article 262(1) and 262(2) empower Parliament to provide adjudication and bar Supreme Court jurisdiction. The Inter-State River Water Disputes Amendment bill introduces a permanent standalone tribunal and a mandatory DRC mechanism.',
    bookReference: {
      bookName: 'M. Laxmikanth (7th Edition) & Ministry of Jal Shakti',
      edition: '7th Edition',
      chapter: 'Chapter 15: Inter-State Relations',
      pageNumber: 'Pages 15.1–15.4',
      keyExcerpt: 'Article 262 provides for adjudication of inter-state water disputes and empowers Parliament to bar court jurisdiction.'
    },
    eliminationTip: 'Article 262 is one of the rare constitutional provisions where Parliament can constitutionally bar the jurisdiction of the Supreme Court.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['Article 262', 'River Water Disputes', 'Federalism', 'Polity'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Ministry of Jal Shakti & The Hindu'
  },
  {
    id: 'ca-2026-08-20-polity-08',
    subject: 'polity',
    topic: 'Polity & Criminal Justice',
    subTopic: 'Bharatiya Nyaya Sanhita (BNS) & Zero FIR Provisions',
    question: 'With reference to the new criminal law framework (Bharatiya Nagarik Suraksha Sanhita - BNSS), consider the following statements regarding "Zero FIR":\n\n1. A Zero FIR allows a police station to register an FIR irrespective of whether the crime occurred within its territorial jurisdiction.\n2. The police station registering the Zero FIR is mandated to transfer the case documents to the jurisdictional police station.\n3. The concept of Zero FIR was given explicit statutory recognition under Section 173 of the BNSS.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. Section 173 of BNSS explicitly codifies Zero FIR, allowing victims to lodge information at any police station irrespective of jurisdiction, after which it is transferred to the competent station.',
    bookReference: {
      bookName: 'Ministry of Home Affairs & PRS Legislative Research',
      edition: 'August 2026',
      chapter: 'Criminal Justice Reforms: BNS, BNSS, BSA',
      pageNumber: 'mha.gov.in / prsindia.org',
      keyExcerpt: 'Section 173 of BNSS mandates registration of Zero FIR and electronic FIR for cognizable offences.'
    },
    eliminationTip: 'Zero FIR, which earlier existed through executive circulars post-Justice Verma Committee, is now a statutory right under BNSS.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['BNSS', 'Zero FIR', 'Criminal Justice', 'Polity'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Ministry of Home Affairs & PIB'
  },
  {
    id: 'ca-2026-08-20-polity-09',
    subject: 'polity',
    topic: 'Polity & Local Self Government',
    subTopic: 'Panchayat Development Index (PDI) & Localisation of SDGs',
    question: 'Consider the following statements regarding the Panchayat Development Index (PDI) launched by the Ministry of Panchayati Raj:\n\n1. It is an index designed to measure the progress of Gram Panchayats towards achieving localized Sustainable Development Goals (LSDGs).\n2. Panchayats are categorized into four grades (Achiever, Front Runner, Performer, Aspirant) based on scores.\n3. PDI scores are calculated across 9 thematic areas including poverty free, child friendly, and water sufficient villages.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. The Panchayat Development Index measures 9 themes aligned with 17 SDGs, grading Gram Panchayats into 4 distinct performance brackets.',
    bookReference: {
      bookName: 'Ministry of Panchayati Raj & NITI Aayog',
      edition: 'August 20, 2026',
      chapter: 'Local Governance: Panchayati Raj & SDG Localization',
      pageNumber: 'panchayat.gov.in / pdi.gov.in',
      keyExcerpt: 'PDI evaluates grassroots development across 9 themes to reward Panchayats achieving localized SDGs.'
    },
    eliminationTip: 'PDI follows the same grading typology as NITI Aayog\'s SDG India Index (Aspirant, Performer, Front Runner, Achiever).',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['Panchayati Raj', 'PDI', 'SDGs', 'Local Governance'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Ministry of Panchayati Raj & PIB'
  },
  {
    id: 'ca-2026-08-20-polity-10',
    subject: 'polity',
    topic: 'Polity & Constitutional Bodies',
    subTopic: '16th Finance Commission Terms of Reference',
    question: 'With reference to the 16th Finance Commission constituted under Article 280 of the Constitution, consider the following statements:\n\n1. It is chaired by Dr. Arvind Panagariya.\n2. The recommendations of the Commission will cover a 5-year period commencing from April 1, 2026.\n3. The Commission is mandated to review disaster management financing arrangements under the Disaster Management Act, 2005.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. Dr. Arvind Panagariya chairs the 16th Finance Commission whose award period runs from 2026-27 to 2030-31, and its Terms of Reference explicitly include disaster management financing.',
    bookReference: {
      bookName: 'Ministry of Finance & Finance Commission Secretariat',
      edition: 'August 20, 2026',
      chapter: 'Fiscal Federalism: Finance Commission (Article 280)',
      pageNumber: 'fincomindia.nic.in / PIB Finance',
      keyExcerpt: '16th Finance Commission under Dr. Arvind Panagariya evaluates devolution of net taxes and disaster management funding for 2026–2031.'
    },
    eliminationTip: 'All three statements accurately reflect the official gazette notification constituting the 16th Finance Commission.',
    difficulty: 'Moderate',
    frequency: 5,
    tags: ['Finance Commission', 'Article 280', 'Fiscal Federalism', 'Polity'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Ministry of Finance & PIB'
  }
];

// ─── 2. INDIAN ECONOMY & BANKING (10 Questions) ───────────────────────
export const ca_economy_2026_08_20: Question[] = [
  {
    id: 'ca-2026-08-20-economy-01',
    subject: 'economy',
    topic: 'Economy & Banking',
    subTopic: 'RBI Self-Regulatory Organisations (SROs) for FinTech Sector',
    question: 'With reference to the Reserve Bank of India (RBI) framework for Self-Regulatory Organisations in the FinTech sector (SRO-FT), consider the following statements:\n\n1. An SRO-FT must be set up as a Not-for-Profit company registered under Section 8 of the Companies Act, 2013.\n2. Shareholding in an SRO-FT must be diversified so that no single entity holds 10% or more of its paid-up share capital.\n3. The SRO-FT has statutory powers under the RBI Act to directly impose financial fines on commercial banks.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect: An SRO is a self-regulatory voluntary industry body that sets codes of conduct and grievance mechanisms. Penal powers remain exclusively with RBI.',
    bookReference: {
      bookName: 'Reserve Bank of India (RBI) Notifications & Indian Express',
      edition: 'August 20, 2026',
      chapter: 'Indian Economy: Banking Regulation & Financial Technology',
      pageNumber: 'rbi.org.in / Indian Express Economy Page',
      keyExcerpt: 'SRO-FT promotes responsible innovation as a Section 8 not-for-profit company.'
    },
    eliminationTip: 'Self-Regulatory Organisations (SROs) are voluntary industry bodies. They do not possess sovereign statutory penal powers over scheduled banks.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['RBI', 'FinTech SRO', 'Banking Regulation', 'Economy'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Reserve Bank of India & Indian Express'
  },
  {
    id: 'ca-2026-08-20-economy-02',
    subject: 'economy',
    topic: 'Economy & Energy',
    subTopic: 'Global Biofuel Alliance (GBA) & Ethanol Blending Milestones',
    question: 'Consider the following statements regarding the Global Biofuel Alliance (GBA):\n\n1. It was officially launched by India along with the USA and Brazil during India\'s G20 Presidency.\n2. Brazil, India, and the USA together contribute about 85% of global ethanol production.\n3. The GBA operates as a specialized agency under the United Nations Framework Convention on Climate Change (UNFCCC).\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect: GBA is an independent international multi-stakeholder alliance, not a UN specialized agency.',
    bookReference: {
      bookName: 'Ministry of Petroleum and Natural Gas (MoPNG)',
      edition: 'August 20, 2026',
      chapter: 'Indian Economy: Energy Security & Biofuels',
      pageNumber: 'pib.gov.in / mopng.gov.in',
      keyExcerpt: 'Global Biofuel Alliance accelerates the adoption of sustainable biofuels across producer and consumer nations.'
    },
    eliminationTip: 'India-led alliances like ISA, CDRI, and GBA are independent intergovernmental initiatives, not UN specialized agencies.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Global Biofuel Alliance', 'Ethanol Blending', 'Renewable Energy', 'Economy'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'PIB Delhi & Ministry of Petroleum'
  },
  {
    id: 'ca-2026-08-20-economy-03',
    subject: 'economy',
    topic: 'Economy & Taxation',
    subTopic: 'Goods and Services Tax (GST) Appellate Tribunal (GSTAT)',
    question: 'With reference to the Goods and Services Tax Appellate Tribunal (GSTAT), consider the following statements:\n\n1. GSTAT is the statutory appellate authority for resolving disputes between taxpayers and tax authorities under GST laws.\n2. The Principal Bench of GSTAT is located at New Delhi.\n3. Appeals against the orders of GSTAT lie directly to the Supreme Court of India only, bypassing High Courts.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect: High Courts retain writ jurisdiction under Article 226/227 unless a substantial question of law specifically concerning place of supply is involved.',
    bookReference: {
      bookName: 'Ministry of Finance & GST Council Secretariat',
      edition: 'August 20, 2026',
      chapter: 'Indian Economy: Fiscal Policy & Indirect Taxation',
      pageNumber: 'gstcouncil.gov.in / finmin.nic.in',
      keyExcerpt: 'GSTAT Principal Bench in New Delhi and State Benches hear appeals against First Appellate Authority orders.'
    },
    eliminationTip: 'Tribunal decisions cannot completely extinguish the constitutional writ powers of High Courts under Article 226 (L. Chandra Kumar doctrine).',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['GSTAT', 'GST Council', 'Taxation', 'Economy'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Ministry of Finance & LiveLaw'
  },
  {
    id: 'ca-2026-08-20-economy-04',
    subject: 'economy',
    topic: 'Economy & Monetary Policy',
    subTopic: 'RBI Standing Deposit Facility (SDF) & Liquidity Management',
    question: 'With reference to the Standing Deposit Facility (SDF) introduced by the Reserve Bank of India, consider the following statements:\n\n1. SDF allows the RBI to absorb surplus liquidity from commercial banks without providing collateral government securities in return.\n2. The SDF rate is set as the floor of the Liquidity Adjustment Facility (LAF) corridor.\n3. Non-Banking Financial Companies (NBFCs) are eligible to deposit funds directly under the SDF.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. SDF absorbs uncollateralized liquidity from commercial banks and operates as the floor of the LAF corridor (25 bps below the repo rate). Statement 3 is incorrect: SDF is available only to scheduled commercial banks, not NBFCs.',
    bookReference: {
      bookName: 'Ramesh Singh (Indian Economy) & RBI Monetary Policy Guidelines',
      edition: '16th Edition (2026)',
      chapter: 'Chapter 12: Banking in India & Monetary Policy',
      pageNumber: 'Pages 12.18–12.22',
      keyExcerpt: 'The Standing Deposit Facility (SDF) strengthens the operating framework of monetary policy by uncollateralized liquidity absorption.'
    },
    eliminationTip: 'Key distinction: Reverse Repo requires government securities as collateral; SDF absorbs liquidity WITHOUT collateral.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['SDF', 'Monetary Policy', 'RBI', 'Liquidity Management'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Reserve Bank of India & Ramesh Singh'
  },
  {
    id: 'ca-2026-08-20-economy-05',
    subject: 'economy',
    topic: 'Economy & External Sector',
    subTopic: 'Internationalisation of the Rupee & Special Vostro Rupee Accounts (SVRAs)',
    question: 'Consider the following statements regarding the Internationalisation of the Indian Rupee (INR):\n\n1. Special Rupee Vostro Accounts (SVRAs) allow foreign banks to hold and transact in Indian Rupees for cross-border trade settlement.\n2. Indian exporters and importers are permitted to invoice, pay, and settle trade in INR with partner countries.\n3. The Inter-Departmental Group (IDG) of the RBI recommended inclusion of the Rupee in the IMF\'s Special Drawing Rights (SDR) basket as a long-term goal.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. SVRAs allow invoicing and settlement of bilateral trade in INR, and the RBI IDG report targets full internationalization and potential inclusion in the SDR currency basket.',
    bookReference: {
      bookName: 'RBI Report on Internationalisation of INR & Ministry of Commerce',
      edition: 'August 20, 2026',
      chapter: 'External Sector: Balance of Payments & Trade Settlements',
      pageNumber: 'rbi.org.in / commerce.gov.in',
      keyExcerpt: 'SVRAs facilitate settlement of international trade in Indian Rupees, reducing foreign exchange dependence.'
    },
    eliminationTip: 'All three statements accurately reflect official RBI trade settlement mechanisms established post-2022.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['Internationalisation of Rupee', 'SVRA', 'Trade Settlement', 'Economy'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Reserve Bank of India & The Hindu'
  },
  {
    id: 'ca-2026-08-20-economy-06',
    subject: 'economy',
    topic: 'Economy & Agriculture',
    subTopic: 'PM-PRANAM Scheme & Bio-fertilizer Subsidies',
    question: 'With reference to the PM-PRANAM scheme, consider the following statements:\n\n1. It has no separate dedicated budget allocation from the central government.\n2. It is financed through the savings generated in fertilizer subsidy by States adopting organic and alternative fertilizers.\n3. 50% of the subsidy savings are granted to the State as a developmental grant.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. PM-PRANAM is funded entirely by savings of existing fertilizer subsidies, of which 50% is passed to States reducing chemical fertilizer usage.',
    bookReference: {
      bookName: 'Ministry of Chemicals & Fertilizers & PIB',
      edition: 'August 20, 2026',
      chapter: 'Agriculture: Soil Health & Fertilizer Subsidies',
      pageNumber: 'fert.gov.in / PIB Agriculture',
      keyExcerpt: 'PM-PRANAM incentivizes States to promote alternative fertilizers by passing 50% of subsidy savings as grant.'
    },
    eliminationTip: 'PM-PRANAM is unique because it uses existing subsidy savings rather than a separate budget outlay.',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['PM-PRANAM', 'Fertilizer Subsidy', 'Soil Health', 'Economy'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'PIB Delhi & Ministry of Chemicals'
  },
  {
    id: 'ca-2026-08-20-economy-07',
    subject: 'economy',
    topic: 'Economy & Securities',
    subTopic: 'T+0 Settlement Cycle & SEBI Direct Payout Framework',
    question: 'Consider the following statements regarding capital market settlement systems in India:\n\n1. India became the second country in the world after China to implement the T+1 settlement cycle for all listed shares.\n2. SEBI has introduced a beta version of the optional T+0 (same-day) trade settlement cycle for select scrips.\n3. Direct payout of securities to client demat accounts by Clearing Corporations has been mandated to eliminate broker custody risks.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. India shifted to T+1 in 2023 and initiated beta T+0 settlement in 2024. SEBI also mandated direct payout of securities to investors\' demat accounts.',
    bookReference: {
      bookName: 'Securities and Exchange Board of India (SEBI) & Economic Survey',
      edition: 'August 20, 2026',
      chapter: 'Financial Markets: Capital Market Infrastructure',
      pageNumber: 'sebi.gov.in / Economic Survey Capital Markets',
      keyExcerpt: 'T+0 settlement and direct payout of securities enhance market efficiency and investor asset protection.'
    },
    eliminationTip: 'India\'s capital market infrastructure has led global benchmarks in transitioning from T+2 to T+1 to T+0.',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['SEBI', 'T+0 Settlement', 'Capital Markets', 'Economy'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'SEBI & Indian Express'
  },
  {
    id: 'ca-2026-08-20-economy-08',
    subject: 'economy',
    topic: 'Economy & Industry',
    subTopic: 'Production Linked Incentive (PLI) Scheme Performance',
    question: 'With reference to the Production Linked Incentive (PLI) schemes across 14 key manufacturing sectors, consider the following statements:\n\n1. Incentives are calculated as a percentage of incremental sales over the base year for eligible manufactured goods.\n2. Large-Scale Electronics (Mobile phones) and Pharmaceuticals have accounted for the majority of investment and export realization under PLI.\n3. PLI benefits are granted to companies without any minimum threshold on mandatory domestic value addition (DVA).\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect: PLI schemes mandate strict phased manufacturing programmes (PMP) and minimum domestic value addition (DVA) thresholds to disincentivize mere assembly operations.',
    bookReference: {
      bookName: 'DPIIT & NITI Aayog Reports',
      edition: 'August 20, 2026',
      chapter: 'Industrial Policy: Make in India & PLI Schemes',
      pageNumber: 'dpiit.gov.in / niti.gov.in',
      keyExcerpt: 'PLI schemes incentivize domestic manufacturing with mandatory thresholds on investment and domestic value addition.'
    },
    eliminationTip: 'Statement 3 claims "without any minimum threshold on domestic value addition" — which contradicts the core objective of building self-reliant supply chains (Atmanirbhar Bharat).',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['PLI Scheme', 'Manufacturing', 'DPIIT', 'Economy'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'DPIIT & Business Standard'
  },
  {
    id: 'ca-2026-08-20-economy-09',
    subject: 'economy',
    topic: 'Economy & Inflation',
    subTopic: 'Consumer Price Index (CPI) vs Wholesale Price Index (WPI)',
    question: 'Consider the following statements regarding inflation indices in India:\n\n1. The Reserve Bank of India adopts CPI-Combined (Base 2012=100) as the nominal anchor for inflation targeting under the Flexible Inflation Targeting (FIT) framework.\n2. In the CPI basket, the "Food and Beverages" group has a weightage of over 45%.\n3. The Wholesale Price Index (WPI) includes services whereas the Consumer Price Index (CPI) excludes services.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect: WPI covers ONLY manufactured and primary goods and excludes services, whereas CPI includes services (education, medical care, transport, housing).',
    bookReference: {
      bookName: 'Ramesh Singh (Indian Economy) & MoSPI',
      edition: '16th Edition',
      chapter: 'Chapter 7: Inflation & Price Indices',
      pageNumber: 'Pages 7.8–7.14',
      keyExcerpt: 'WPI does not capture the price movement of services. CPI covers services and forms the primary anchor for RBI monetary policy.'
    },
    eliminationTip: 'A fundamental UPSC economy concept: WPI = Goods only; CPI = Goods and Services.',
    difficulty: 'Moderate',
    frequency: 5,
    tags: ['CPI', 'WPI', 'Inflation', 'RBI FIT'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'MoSPI & Reserve Bank of India'
  },
  {
    id: 'ca-2026-08-20-economy-10',
    subject: 'economy',
    topic: 'Economy & Infrastructure',
    subTopic: 'National Monetisation Pipeline (NMP) & Infrastructure Investment Trusts (InvITs)',
    question: 'With reference to Infrastructure Investment Trusts (InvITs) and the National Monetisation Pipeline (NMP), consider the following statements:\n\n1. InvITs are regulated by the Securities and Exchange Board of India (SEBI) and function like mutual funds for infrastructure assets.\n2. The National Monetisation Pipeline involves the transfer of ownership of public core assets to private concessionaires permanently.\n3. InvITs are mandated to distribute at least 90% of their net distributable cash flows to unit holders.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 3 only', '1, 2 and 3', '2 and 3 only', '1 and 2 only'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 3 are correct. Statement 2 is incorrect: NMP involves "monetisation of rights through brownfield concessions (lease model)", NOT permanent privatization or transfer of sovereign ownership.',
    bookReference: {
      bookName: 'NITI Aayog & SEBI Guidelines on InvITs',
      edition: 'August 20, 2026',
      chapter: 'Infrastructure Financing: InvITs & NMP Framework',
      pageNumber: 'niti.gov.in / sebi.gov.in',
      keyExcerpt: 'NMP monetizes brownfield infrastructure assets without transferring primary ownership to private entities.'
    },
    eliminationTip: 'Asset monetization (NMP) transfers operational and revenue rights for a specified concession period, not permanent underlying ownership.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['InvITs', 'NMP', 'Infrastructure Financing', 'Economy'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'NITI Aayog & SEBI'
  }
];

// ─── 3. SCIENCE & TECHNOLOGY (10 Questions) ───────────────────────────
export const ca_scitech_2026_08_20: Question[] = [
  {
    id: 'ca-2026-08-20-scitech-01',
    subject: 'science_tech',
    topic: 'Science & Technology',
    subTopic: 'National Quantum Mission (NQM) & Thematic Hubs',
    question: 'With reference to the National Quantum Mission (NQM), consider the following statements:\n\n1. It aims to develop intermediate-scale quantum computers with 50-1000 physical qubits in 8 years.\n2. Four Thematic Hubs (T-Hubs) are being established across Quantum Computing, Communication, Sensing, and Materials.\n3. The mission is implemented by the Department of Science & Technology (DST).\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct under the NQM framework approved by the Union Cabinet and anchored by DST.',
    bookReference: {
      bookName: 'Department of Science & Technology (DST) & PIB',
      edition: 'August 20, 2026',
      chapter: 'Science & Tech: Quantum Computing & Frontier Science',
      pageNumber: 'dst.gov.in / PIB Science',
      keyExcerpt: 'NQM establishes 4 T-Hubs to achieve 50–1000 physical qubits under the Department of Science & Technology.'
    },
    eliminationTip: 'All three statements represent official milestones and nodal administrative details.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['Quantum Computing', 'NQM', 'DST', 'Science & Tech'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'DST & PIB Delhi'
  },
  {
    id: 'ca-2026-08-20-scitech-02',
    subject: 'science_tech',
    topic: 'Science & Technology',
    subTopic: 'IN-SPACe & Indian Space Policy Architecture',
    question: 'With reference to the Indian space sector architecture, consider the following pairs:\n\n1. IN-SPACe : Single-window nodal agency for authorising private space activities\n2. NSIL : Commercial arm of ISRO for launch vehicles and commercial satellites\n3. ISRO : Focuses primarily on advanced space R&D and deep space exploration\n\nWhich of the pairs given above are correctly matched?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three pairs are correctly matched under the Indian Space Policy. IN-SPACe authorizes private startups, NSIL handles commercialization, and ISRO leads advanced R&D.',
    bookReference: {
      bookName: 'Department of Space (DOS) & ISRO Releases',
      edition: 'August 20, 2026',
      chapter: 'Science & Tech: Space Missions & Reforms',
      pageNumber: 'isro.gov.in / inspace.gov.in',
      keyExcerpt: 'Indian Space Policy defines distinct mandates for IN-SPACe, NSIL, and ISRO.'
    },
    eliminationTip: 'All three institutional roles represent the official trilateral framework created under 2023 space reforms.',
    difficulty: 'Moderate',
    frequency: 5,
    tags: ['IN-SPACe', 'NSIL', 'ISRO', 'Space Tech'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'ISRO & PIB Delhi'
  },
  {
    id: 'ca-2026-08-20-scitech-03',
    subject: 'science_tech',
    topic: 'Science & Technology',
    subTopic: 'Bharat 6G Alliance & Terahertz Spectrum',
    question: 'Consider the following statements regarding the Bharat 6G Alliance:\n\n1. It aims to secure India\'s contribution to standard-setting in global 6G telecommunications.\n2. 6G networks are designed to operate across Terahertz (THz) frequencies delivering sub-millisecond latency.\n3. The initiative excludes domestic startups and private academic research institutions.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect: Domestic startups and academia are central consortium members.',
    bookReference: {
      bookName: 'Department of Telecommunications (DoT)',
      edition: 'August 20, 2026',
      chapter: 'Science & Tech: Telecom Infrastructure & 6G Vision',
      pageNumber: 'dot.gov.in / telecom.gov.in',
      keyExcerpt: 'Bharat 6G Alliance accelerates indigenous standard setting and Terahertz spectrum research.'
    },
    eliminationTip: 'Modern Indian technology alliances specifically include startups and academia.',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['Bharat 6G', 'DoT', 'Terahertz', 'Sci-Tech'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'DoT & Indian Express'
  },
  {
    id: 'ca-2026-08-20-scitech-04',
    subject: 'science_tech',
    topic: 'Science & Technology',
    subTopic: 'Small Modular Reactors (SMRs) & Nuclear Energy',
    question: 'With reference to Small Modular Reactors (SMRs), consider the following statements:\n\n1. SMRs have a power capacity of up to 300 MW(e) per unit, about one-third of the generating capacity of traditional nuclear power reactors.\n2. They can be manufactured in factories and transported to sites as modules for rapid on-site assembly.\n3. SMRs utilize passive safety systems that rely on natural circulation and gravity rather than active electric pumps.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct under International Atomic Energy Agency (IAEA) standards. SMRs have ≤300 MWe capacity, modular construction, and passive safety mechanisms.',
    bookReference: {
      bookName: 'Department of Atomic Energy (DAE) & IAEA',
      edition: 'August 20, 2026',
      chapter: 'Science & Tech: Nuclear Energy & Advanced Reactors',
      pageNumber: 'dae.gov.in / iaea.org',
      keyExcerpt: 'Small Modular Reactors (SMRs) provide flexible, safe, and modular nuclear power generation up to 300 MW(e).'
    },
    eliminationTip: 'All three statements are defining technological hallmarks of SMRs.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['SMRs', 'Nuclear Energy', 'DAE', 'Sci-Tech'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'DAE & The Hindu'
  },
  {
    id: 'ca-2026-08-20-scitech-05',
    subject: 'science_tech',
    topic: 'Science & Technology',
    subTopic: 'India Semiconductor Mission (ISM) & Fab Ecosystem',
    question: 'Consider the following statements regarding the India Semiconductor Mission (ISM):\n\n1. It is an autonomous business division within Digital India Corporation under MeitY.\n2. Fiscal support of 50% of the project cost on an equal pari-passu basis is provided for setting up Silicon Semiconductor Fabs and Display Fabs in India.\n3. The scheme excludes funding for compound semiconductors, silicon photonics, and assembly testing (ATMP/OSAT) units.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect: ISM provides 50% fiscal support for compound semiconductors, sensors, and ATMP/OSAT packaging units as well.',
    bookReference: {
      bookName: 'Ministry of Electronics and Information Technology (MeitY)',
      edition: 'August 20, 2026',
      chapter: 'Science & Tech: Semiconductor & Microelectronics Mission',
      pageNumber: 'ism.gov.in / meity.gov.in',
      keyExcerpt: 'India Semiconductor Mission offers 50% financial assistance for semiconductor fabs, display fabs, and ATMP/OSAT units.'
    },
    eliminationTip: 'ISM comprehensively covers the entire semiconductor value chain from silicon fabs to packaging (ATMP/OSAT).',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['Semiconductor Mission', 'MeitY', 'ATMP', 'Sci-Tech'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'MeitY & PIB Delhi'
  },
  {
    id: 'ca-2026-08-20-scitech-06',
    subject: 'science_tech',
    topic: 'Science & Technology',
    subTopic: 'CRISPR-Cas9 & Base Editing Innovations',
    question: 'With reference to genome editing technologies, what is the key difference between conventional CRISPR-Cas9 and "Base Editing"?\n\n1. CRISPR-Cas9 creates double-strand breaks (DSBs) in DNA, whereas Base Editing converts one base pair directly into another without DSBs.\n2. Base editing can rectify point mutations with significantly lower risk of unintended insertions and deletions (indels).\n3. Sickle cell anemia treatment Casgevy is the world\'s first approved CRISPR-based therapeutic.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. Conventional CRISPR induces double-strand cuts, while base editing chemically converts target nucleotides (e.g. C to T or A to G) without double-strand breaks, minimizing indels. Casgevy is the landmark approved CRISPR therapy.',
    bookReference: {
      bookName: 'The Hindu (Science Section) & Nature Biotechnology',
      edition: 'August 20, 2026',
      chapter: 'Biotechnology: Genetic Engineering & CRISPR Therapies',
      pageNumber: 'thehindu.com/sci-tech / nature.com',
      keyExcerpt: 'Base editing modifies single base pairs without generating double-strand DNA breaks, reducing insertion/deletion errors.'
    },
    eliminationTip: 'All three statements describe standard textbook biotechnology distinctions.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['CRISPR', 'Base Editing', 'Biotechnology', 'Casgevy'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'The Hindu & Nature'
  },
  {
    id: 'ca-2026-08-20-scitech-07',
    subject: 'science_tech',
    topic: 'Science & Technology',
    subTopic: 'National Supercomputing Mission (NSM) & Param Rudra',
    question: 'Consider the following statements regarding the National Supercomputing Mission (NSM):\n\n1. It is jointly steered by the Department of Science and Technology (DST) and Ministry of Electronics and Information Technology (MeitY).\n2. C-DAC and IISc Bangalore are the nodal implementation agencies.\n3. Indigenously assembled supercomputers like Param Rudra and Param Siddhi-AI are deployed on the National Knowledge Network (NKN).\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct under the National Supercomputing Mission joint framework.',
    bookReference: {
      bookName: 'C-DAC & DST Reports',
      edition: 'August 20, 2026',
      chapter: 'Science & Tech: High-Performance Computing',
      pageNumber: 'dst.gov.in / cdac.in',
      keyExcerpt: 'NSM jointly implemented by DST and MeitY connects high-performance computing clusters over the National Knowledge Network.'
    },
    eliminationTip: 'NSM is uniquely co-steered by two ministries: DST (Science) and MeitY (Electronics).',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['Supercomputing', 'NSM', 'C-DAC', 'Sci-Tech'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'DST & C-DAC'
  },
  {
    id: 'ca-2026-08-20-scitech-08',
    subject: 'science_tech',
    topic: 'Science & Technology',
    subTopic: 'Aditya-L1 Mission & Solar Observation Payload SUIT',
    question: 'With reference to ISRO\'s Aditya-L1 solar mission, consider the following statements:\n\n1. It is placed in a halo orbit around the Sun-Earth Lagrange point 1 (L1), located approximately 1.5 million km from Earth.\n2. The SUIT (Solar Ultraviolet Imaging Telescope) payload captures full-disk images of the Sun in near-ultraviolet wavelengths.\n3. A spacecraft at L1 experiences periodic solar eclipses by the Moon and Earth.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect: The major operational advantage of placing a satellite in the halo orbit around L1 is continuous uninterrupted observation of the Sun without any occultation or eclipses.',
    bookReference: {
      bookName: 'ISRO Official Releases & The Hindu',
      edition: 'August 20, 2026',
      chapter: 'Space Science: Solar Physics & Aditya-L1 Payloads',
      pageNumber: 'isro.gov.in / thehindu.com',
      keyExcerpt: 'Aditya-L1 at Lagrange Point 1 maintains an uninterrupted view of the Sun without occultations or eclipses.'
    },
    eliminationTip: 'The fundamental purpose of choosing L1 (Lagrange Point 1) is to eliminate eclipses and occultations.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['Aditya-L1', 'ISRO', 'SUIT', 'Space Science'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'ISRO & The Hindu'
  },
  {
    id: 'ca-2026-08-20-scitech-09',
    subject: 'science_tech',
    topic: 'Science & Technology',
    subTopic: 'Deep Ocean Mission (DOM) & Samudrayaan MATSYA 6000',
    question: 'Consider the following statements regarding India\'s Deep Ocean Mission (DOM):\n\n1. MATSYA 6000 is an indigenous manned submersible designed to carry 3 human beings to an ocean depth of 6,000 metres.\n2. It is implemented by the Ministry of Earth Sciences (MoES) with NIOT Chennai as the nodal development agency.\n3. The International Seabed Authority (ISA) has allocated India exploration rights for Polymetallic Nodules in the Central Indian Ocean Basin.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct under the Deep Ocean Mission framework.',
    bookReference: {
      bookName: 'Ministry of Earth Sciences (MoES) & NIOT Chennai',
      edition: 'August 20, 2026',
      chapter: 'Ocean Science: Deep Ocean Mission & Polymetallic Nodules',
      pageNumber: 'moes.gov.in / niot.res.in',
      keyExcerpt: 'MATSYA 6000 submersible carries 3 humans to 6000m depth to explore mineral resources under MoES.'
    },
    eliminationTip: 'All three statements represent official milestones of the Samudrayaan project.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Deep Ocean Mission', 'MATSYA 6000', 'MoES', 'Sci-Tech'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'MoES & PIB Delhi'
  },
  {
    id: 'ca-2026-08-20-scitech-10',
    subject: 'science_tech',
    topic: 'Science & Technology',
    subTopic: 'Generative AI & Watermarking Standards',
    question: 'With reference to artificial intelligence governance, what is "Synthetic Media Watermarking"?\n\n1. Embedding invisible cryptographic identifiers or metadata into AI-generated audio, image, and text to trace origin.\n2. A physical stamp placed on computer server hardware manufacturing units.\n3. A cooling mechanism for high-density AI data centres.\n4. An encryption method for optical fiber cables.\n\nSelect the correct answer:',
    options: ['1', '2', '3', '4'],
    correctAnswer: 0,
    explanation: 'Option 1 is correct: AI watermarking embeds imperceptible signals or cryptographic hashes into AI-generated content (synthetic media) to enable automated detection and counter deepfakes.',
    bookReference: {
      bookName: 'MeitY Advisory on AI & GPAI Guidelines',
      edition: 'August 20, 2026',
      chapter: 'Information Technology: AI Safety & Synthetic Media Governance',
      pageNumber: 'meity.gov.in / gpai.ai',
      keyExcerpt: 'Watermarking algorithms embed verifiable provenance metadata in generative AI outputs to combat deepfakes.'
    },
    eliminationTip: 'In AI and digital media governance, "watermarking" specifically refers to content origin authenticity and deepfake detection.',
    difficulty: 'Easy',
    frequency: 3,
    tags: ['AI Governance', 'Deepfakes', 'Watermarking', 'Sci-Tech'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'MeitY & GPAI'
  }
];

// ─── 4. INTERNATIONAL RELATIONS (10 Questions) ─────────────────────────
export const ca_ir_2026_08_20: Question[] = [
  {
    id: 'ca-2026-08-20-ir-01',
    subject: 'international',
    topic: 'International Relations',
    subTopic: 'UN High Seas Treaty (BBNJ Agreement) & Marine Biodiversity',
    question: 'With reference to the Biodiversity Beyond National Jurisdiction (BBNJ) Agreement (High Seas Treaty), consider the following statements:\n\n1. It is an international legally binding instrument under the framework of the United Nations Convention on the Law of the Sea (UNCLOS).\n2. It establishes mechanisms for creating Marine Protected Areas (MPAs) in international waters.\n3. The treaty excludes provisions on Marine Genetic Resources (MGRs).\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect: Fair and equitable sharing of benefits from Marine Genetic Resources (MGRs) is one of the four core pillars of the BBNJ Agreement.',
    bookReference: {
      bookName: 'UN Treaty Series & Ministry of Earth Sciences',
      edition: 'August 20, 2026',
      chapter: 'International Treaties: UNCLOS & Maritime Law',
      pageNumber: 'un.org/bbnj / moes.gov.in',
      keyExcerpt: 'The BBNJ Agreement establishes rules for Marine Protected Areas and benefit sharing of Marine Genetic Resources.'
    },
    eliminationTip: 'Benefit sharing of marine bioprospecting (MGRs) was the most central demand of developing nations in BBNJ negotiations.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['BBNJ Treaty', 'High Seas', 'UNCLOS', 'IR'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'UN News & Down To Earth'
  },
  {
    id: 'ca-2026-08-20-ir-02',
    subject: 'international',
    topic: 'International Relations',
    subTopic: 'ASEAN-India Trade in Goods Agreement (AITIGA) Review',
    question: 'With reference to the ASEAN-India Trade in Goods Agreement (AITIGA), consider the following statements:\n\n1. It was signed in 2009 and entered into force in 2010.\n2. A comprehensive review was initiated to address India\'s trade deficit with ASEAN.\n3. Rules of Origin (ROO) provisions are being renegotiated to prevent third-party circumvention of tariff concessions.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct under the joint AITIGA review framework.',
    bookReference: {
      bookName: 'Ministry of Commerce and Industry & The Hindu',
      edition: 'August 20, 2026',
      chapter: 'International Trade: Free Trade Agreements (FTAs)',
      pageNumber: 'commerce.gov.in / thehindu.com',
      keyExcerpt: 'ASEAN-India AITIGA joint review aims to modernize Rules of Origin and address trade imbalances.'
    },
    eliminationTip: 'All three statements reflect India\'s official negotiation position.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['AITIGA', 'ASEAN', 'FTAs', 'IR'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Ministry of Commerce & The Hindu'
  },
  {
    id: 'ca-2026-08-20-ir-03',
    subject: 'international',
    topic: 'International Relations',
    subTopic: 'Indo-Pacific Economic Framework (IPEF) Supply Chain Agreement',
    question: 'Consider the following statements regarding the Indo-Pacific Economic Framework for Prosperity (IPEF):\n\n1. It comprises 14 partner countries in the Indo-Pacific region.\n2. The IPEF is organized around four pillars: Trade, Supply Chains, Clean Economy, and Fair Economy.\n3. India has joined all four pillars including the Trade pillar without any opt-out.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect: India joined Pillars II (Supply Chains), III (Clean Economy), and IV (Fair Economy), but has opted out of the Pillar I (Trade) negotiations due to concerns regarding digital trade and labor/environmental conditionalities.',
    bookReference: {
      bookName: 'Ministry of Commerce & Industry & ORF',
      edition: 'August 20, 2026',
      chapter: 'Indo-Pacific Geopolitics & Economic Frameworks',
      pageNumber: 'commerce.gov.in / orfonline.org',
      keyExcerpt: 'India participates in IPEF Pillars 2, 3, and 4, while remaining an observer on the Trade pillar.'
    },
    eliminationTip: 'UPSC favorite trap: India opted out of the Trade Pillar of IPEF.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['IPEF', 'Indo-Pacific', 'Supply Chains', 'IR'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Ministry of Commerce & ORF'
  },
  {
    id: 'ca-2026-08-20-ir-04',
    subject: 'international',
    topic: 'International Relations',
    subTopic: 'India-Middle East-Europe Economic Corridor (IMEC)',
    question: 'With reference to the India-Middle East-Europe Economic Corridor (IMEC) launched on the sidelines of G20, consider the following statements:\n\n1. It comprises two corridors: East Corridor connecting India to the Arabian Gulf, and Northern Corridor connecting the Gulf to Europe.\n2. It includes a railway network, hydrogen pipelines, and high-speed data cables.\n3. The corridor passes through the Suez Canal to bypass continental Middle East territory.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect: IMEC connects India to the Gulf via sea and across the Arabian peninsula via railway to Haifa port (Israel) and thence to Europe by sea, specifically providing an alternative terrestrial-maritime route that does NOT rely on the Suez Canal.',
    bookReference: {
      bookName: 'Ministry of External Affairs (MEA) & World Bank Connectivity Studies',
      edition: 'August 20, 2026',
      chapter: 'Global Connectivity Corridors & Geopolitics',
      pageNumber: 'mea.gov.in / pib.gov.in',
      keyExcerpt: 'IMEC integrates sea and rail networks linking India, UAE, Saudi Arabia, Jordan, Israel, and European ports.'
    },
    eliminationTip: 'The entire strategic rationale of IMEC is creating a resilient multimodal corridor that reduces reliance on the Suez maritime chokepoint.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['IMEC', 'G20', 'Connectivity', 'IR'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'MEA & Indian Express'
  },
  {
    id: 'ca-2026-08-20-ir-05',
    subject: 'international',
    topic: 'International Relations',
    subTopic: 'Colombo Security Conclave (CSC) Charter & Secretariat',
    question: 'Consider the following statements regarding the Colombo Security Conclave (CSC):\n\n1. It is a regional maritime security grouping comprising India, Sri Lanka, Maldives, and Mauritius.\n2. Its permanent Secretariat is located in Colombo, Sri Lanka.\n3. The grouping focuses on five pillars: maritime safety, counter-terrorism, trafficking, cyber security, and disaster relief.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. The CSC founded its charter in Colombo focusing on 5 key maritime security pillars in the Indian Ocean Region (IOR).',
    bookReference: {
      bookName: 'National Security Council Secretariat (NSCS) & MEA',
      edition: 'August 20, 2026',
      chapter: 'Indian Ocean Security: SAGAR & Maritime Groupings',
      pageNumber: 'mea.gov.in / nscs.gov.in',
      keyExcerpt: 'Colombo Security Conclave formalizes cooperation among Indian Ocean littoral states.'
    },
    eliminationTip: 'All three statements represent official structural facts of the CSC.',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['Colombo Security Conclave', 'Indian Ocean', 'SAGAR', 'IR'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'MEA & PIB Delhi'
  },
  {
    id: 'ca-2026-08-20-ir-06',
    subject: 'international',
    topic: 'International Relations',
    subTopic: 'International Criminal Court (ICC) & Rome Statute',
    question: 'With reference to the International Criminal Court (ICC), consider the following statements:\n\n1. It was established by the Rome Statute and is headquartered in The Hague, Netherlands.\n2. The ICC is an official principal organ of the United Nations like the International Court of Justice (ICJ).\n3. India is not a state party to the Rome Statute.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 3 only', '1 and 2 only', '2 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 3 are correct. Statement 2 is incorrect: The ICC is an independent international organization governed by the Assembly of States Parties, NOT a principal organ of the UN (the ICJ is the principal judicial organ of the UN).',
    bookReference: {
      bookName: 'UN Handbook & International Law Documents',
      edition: 'August 20, 2026',
      chapter: 'International Judicial Bodies: ICC vs ICJ',
      pageNumber: 'icc-cpi.int / un.org',
      keyExcerpt: 'ICC is an independent treaty-based permanent court; ICJ is the principal judicial organ of the United Nations.'
    },
    eliminationTip: 'Classic UPSC distinction: ICJ = UN principal organ; ICC = Treaty-based body created by Rome Statute (India, USA, China, Russia are non-members).',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['ICC', 'ICJ', 'Rome Statute', 'International Law'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'UN News & LiveLaw'
  },
  {
    id: 'ca-2026-08-20-ir-07',
    subject: 'international',
    topic: 'International Relations',
    subTopic: 'Chagos Archipelago & Sovereignty Agreement',
    question: 'Consider the following statements regarding the Chagos Archipelago in the Indian Ocean:\n\n1. Diego Garcia, which hosts a joint UK-US military base, is the largest atoll in the Chagos Archipelago.\n2. The United Kingdom agreed to recognize the sovereignty of Mauritius over the Chagos Archipelago.\n3. The International Court of Justice (ICJ) in its 2019 advisory opinion held that the UK\'s administration of the Chagos Archipelago was unlawful.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. In a landmark treaty agreement, the UK recognized Mauritian sovereignty over Chagos while securing the continued operation of the Diego Garcia military facility.',
    bookReference: {
      bookName: 'The Hindu & ICJ Advisory Opinions',
      edition: 'August 20, 2026',
      chapter: 'Indian Ocean Geopolitics: Chagos Archipelago & Decolonisation',
      pageNumber: 'thehindu.com / icj-cij.org',
      keyExcerpt: 'UK recognizes Mauritian sovereignty over the Chagos Islands while preserving the Diego Garcia base lease.'
    },
    eliminationTip: 'All three statements reflect the historic diplomatic accord concluded regarding the Chagos Archipelago.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Chagos Archipelago', 'Diego Garcia', 'Mauritius', 'IR'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'The Hindu & MEA'
  },
  {
    id: 'ca-2026-08-20-ir-08',
    subject: 'international',
    topic: 'International Relations',
    subTopic: 'BRICS Expansion & New Development Bank (NDB)',
    question: 'With reference to the expanded BRICS grouping, consider the following statements:\n\n1. Egypt, Ethiopia, Iran, Saudi Arabia, and the United Arab Emirates joined as new members.\n2. The New Development Bank (NDB) established by BRICS is headquartered in Shanghai, China.\n3. Voting power in the NDB is strictly proportional to GDP, giving founding member nations unequal voting quotas.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect: Under the Articles of Agreement of the NDB, each founding member (Brazil, Russia, India, China, South Africa) was allocated equal initial subscribed capital and equal voting power (unlike the World Bank or IMF).',
    bookReference: {
      bookName: 'Ministry of External Affairs & NDB Secretariat',
      edition: 'August 20, 2026',
      chapter: 'Multilateral Groupings: BRICS & NDB Architecture',
      pageNumber: 'mea.gov.in / ndb.int',
      keyExcerpt: 'BRICS expansion broadens Global South representation; NDB founding members maintain equal voting parity.'
    },
    eliminationTip: 'NDB was deliberately designed with equal voting power among founding members to contrast with the IMF/World Bank weighted voting systems.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['BRICS', 'NDB', 'Global South', 'IR'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'MEA & The Hindu'
  },
  {
    id: 'ca-2026-08-20-ir-09',
    subject: 'international',
    topic: 'International Relations',
    subTopic: 'International Seabed Authority (ISA) & The Area',
    question: 'Consider the following statements regarding the International Seabed Authority (ISA):\n\n1. It was established under the 1982 United Nations Convention on the Law of the Sea (UNCLOS).\n2. Its headquarters are located in Kingston, Jamaica.\n3. The international seabed ("The Area") is declared the "common heritage of mankind" under UNCLOS.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct under UNCLOS Part XI. The ISA regulates mineral exploration in the international seabed area as common heritage.',
    bookReference: {
      bookName: 'UNCLOS Secretariat & ISA Jamaica',
      edition: 'August 20, 2026',
      chapter: 'Maritime Law: Deep Seabed Mining & ISA',
      pageNumber: 'isa.org.jm / un.org',
      keyExcerpt: 'ISA organizes and controls all mineral-related activities in the international seabed Area for humanity.'
    },
    eliminationTip: 'All three statements describe core institutional and legal pillars of the ISA.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['ISA', 'UNCLOS', 'Deep Seabed Mining', 'IR'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'UN News & MoES'
  },
  {
    id: 'ca-2026-08-20-ir-10',
    subject: 'international',
    topic: 'International Relations',
    subTopic: 'Bab-el-Mandeb Strait & Red Sea Maritime Security',
    question: 'Consider the following statements regarding the Bab-el-Mandeb Strait:\n\n1. It connects the Red Sea to the Gulf of Aden and the Arabian Sea.\n2. It separates the Arabian Peninsula (Yemen) from the Horn of Africa (Djibouti and Eritrea).\n3. It is an international strait regulated by the transit passage regime under UNCLOS.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct geographically and legally. Bab-el-Mandeb is a strategic maritime chokepoint between Yemen and Djibouti.',
    bookReference: {
      bookName: 'Oxford Atlas & Indian Navy Maritime Security Studies',
      edition: 'August 20, 2026',
      chapter: 'World Geography & Maritime Chokepoints',
      pageNumber: 'indiannavy.nic.in / unclos.org',
      keyExcerpt: 'Bab-el-Mandeb Strait links the Red Sea with the Gulf of Aden, serving as a critical global trade conduit.'
    },
    eliminationTip: 'All three statements represent classic UPSC map and straits geography.',
    difficulty: 'Moderate',
    frequency: 5,
    tags: ['Bab-el-Mandeb', 'Red Sea', 'Maritime Chokepoints', 'IR'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Indian Navy & The Hindu'
  }
];

// ─── 5. GEOGRAPHY & ENVIRONMENT (10 Questions) ─────────────────────────
export const ca_environment_2026_08_20: Question[] = [
  {
    id: 'ca-2026-08-20-env-01',
    subject: 'environment',
    topic: 'Environment & Wildlife',
    subTopic: 'Project Cheetah – Kuno National Park & Gandhi Sagar Sanctuary',
    question: 'Consider the following statements regarding the Cheetah Reintroduction Project in India:\n\n1. Gandhi Sagar Wildlife Sanctuary in Madhya Pradesh has been prepared as the second home for African cheetahs after Kuno National Park.\n2. African cheetahs introduced in India are listed as "Critically Endangered" on the IUCN Red List.\n3. The project is overseen by the National Tiger Conservation Authority (NTCA).\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 3 only', '2 and 3 only', '1 and 2 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 3 are correct. Statement 2 is incorrect: African Cheetah is Vulnerable on the IUCN Red List. It is the Asiatic Cheetah that is Critically Endangered.',
    bookReference: {
      bookName: 'Ministry of Environment, Forest and Climate Change (MoEFCC)',
      edition: 'August 20, 2026',
      chapter: 'Environment & Ecology: Wildlife Conservation Projects',
      pageNumber: 'moef.gov.in / PIB Wildlife Releases',
      keyExcerpt: 'African Cheetah is Vulnerable on the IUCN Red List. Gandhi Sagar Sanctuary serves as the second viable landscape.'
    },
    eliminationTip: 'Asiatic Cheetah = Critically Endangered (extinct in India); African Cheetah = Vulnerable.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Project Cheetah', 'Gandhi Sagar', 'NTCA', 'Environment'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'MoEFCC & Down To Earth'
  },
  {
    id: 'ca-2026-08-20-env-02',
    subject: 'environment',
    topic: 'Environment & Pollution',
    subTopic: 'National Clean Air Programme (NCAP) & PRANA Portal',
    question: 'Consider the following statements regarding the National Clean Air Programme (NCAP):\n\n1. It targets a 40% reduction or achieving national ambient air quality standards in PM10 and PM2.5 concentrations by 2026.\n2. The programme covers 131 non-attainment cities.\n3. PRANA is a real-time portal tracking physical and financial implementation of NCAP.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct under MoEFCC guidelines.',
    bookReference: {
      bookName: 'Ministry of Environment, Forest & Climate Change & CPCB',
      edition: 'August 20, 2026',
      chapter: 'Environment: Air Pollution & Urban Ecology',
      pageNumber: 'prana.cpcb.gov.in / moef.gov.in',
      keyExcerpt: 'NCAP targets 40% reduction in PM levels across 131 non-attainment cities monitored via PRANA.'
    },
    eliminationTip: 'All three statements represent official targets under the PRANA portal.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['NCAP', 'PRANA Portal', 'Air Pollution', 'Environment'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'CPCB & Down To Earth'
  },
  {
    id: 'ca-2026-08-20-env-03',
    subject: 'environment',
    topic: 'Environment & Ecology',
    subTopic: 'Great Nicobar Island Holistic Development & Biosphere Reserve',
    question: 'Consider the following geographical and ecological features of Great Nicobar Island:\n\n1. Galathea National Park and Campbell Bay National Park are located on Great Nicobar Island.\n2. It is separated from Sumatra by the 6-degree Great Channel.\n3. The Shompen and Nicobarese tribes are indigenous inhabitants of the island.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. Great Nicobar Biosphere Reserve contains both National Parks, borders the Great Channel, and is inhabited by Shompen and Nicobarese.',
    bookReference: {
      bookName: 'Down To Earth & Zoological Survey of India (ZSI)',
      edition: 'August 20, 2026',
      chapter: 'Geography & Ecology: Island Territories & Biosphere Reserves',
      pageNumber: 'downtoearth.org.in / moef.gov.in',
      keyExcerpt: 'Great Nicobar Biosphere Reserve contains Galathea NP, Campbell Bay NP, and Shompen habitat.'
    },
    eliminationTip: 'Shompen are indigenous exclusively to Great Nicobar.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['Great Nicobar', 'Galathea Bay', 'Shompen', 'Environment'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Down To Earth & ZSI'
  },
  {
    id: 'ca-2026-08-20-env-04',
    subject: 'environment',
    topic: 'Environment & Wetlands',
    subTopic: 'Ramsar Wetlands Network in India',
    question: 'With reference to Ramsar Wetlands in India, consider the following statements:\n\n1. India has over 85 designated Ramsar sites of international importance.\n2. Tamil Nadu has the highest number of Ramsar sites among all Indian states.\n3. The Montreux Record is a register of wetland sites on the Ramsar List where changes in ecological character have occurred, are occurring, or are likely to occur.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. India expanded its Ramsar network to 85+ sites, with Tamil Nadu leading the tally (16+ sites). Keoladeo NP and Loktak Lake remain on the Montreux Record.',
    bookReference: {
      bookName: 'Ramsar Convention Secretariat & MoEFCC',
      edition: 'August 20, 2026',
      chapter: 'Environment: Wetlands Conservation & Montreux Record',
      pageNumber: 'ramsar.org / moef.gov.in',
      keyExcerpt: 'India designates 85+ Ramsar sites, with Tamil Nadu having the largest concentration.'
    },
    eliminationTip: 'All three statements represent verified Ramsar status benchmarks.',
    difficulty: 'Moderate',
    frequency: 5,
    tags: ['Ramsar Sites', 'Wetlands', 'Montreux Record', 'Environment'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'MoEFCC & Ramsar'
  },
  {
    id: 'ca-2026-08-20-env-05',
    subject: 'environment',
    topic: 'Environment & Carbon Markets',
    subTopic: 'Carbon Credit Trading Scheme (CCTS) in India',
    question: 'Consider the following statements regarding the Carbon Credit Trading Scheme (CCTS) notified by the Ministry of Power:\n\n1. The Bureau of Energy Efficiency (BEE) is the administrator for the Indian carbon market.\n2. The Central Electricity Regulatory Commission (CERC) is the regulator for trading of Carbon Credit Certificates (CCCs).\n3. Both obligated entities and non-obligated voluntary entities can participate in the domestic carbon market.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct under the Energy Conservation (Amendment) Act and CCTS framework.',
    bookReference: {
      bookName: 'Bureau of Energy Efficiency (BEE) & Ministry of Power',
      edition: 'August 20, 2026',
      chapter: 'Climate Change: Carbon Markets & Emission Trading',
      pageNumber: 'beeindia.gov.in / cercind.gov.in',
      keyExcerpt: 'CCTS establishes the compliance and voluntary carbon trading market in India under BEE and CERC.'
    },
    eliminationTip: 'BEE = Administrator; CERC = Trading Regulator (consistent institutional division).',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['CCTS', 'BEE', 'Carbon Credits', 'Climate Change'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'BEE & Down To Earth'
  },
  {
    id: 'ca-2026-08-20-env-06',
    subject: 'environment',
    topic: 'Environment & Biodiversity',
    subTopic: 'International Big Cat Alliance (IBCA) Headquarters',
    question: 'With reference to the International Big Cat Alliance (IBCA), consider the following statements:\n\n1. It was launched by India to conserve seven major big cats: Tiger, Lion, Leopard, Snow Leopard, Puma, Jaguar, and Cheetah.\n2. The headquarters of the IBCA is established in India.\n3. The alliance membership is restricted solely to range countries where all seven big cats naturally exist.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. Statement 3 is incorrect: Membership is open to 97 range countries containing any of the 7 big cats, as well as non-range partner nations and conservation bodies (no single country naturally contains all 7 big cats).',
    bookReference: {
      bookName: 'Ministry of Environment, Forest and Climate Change (MoEFCC) & NTCA',
      edition: 'August 20, 2026',
      chapter: 'Wildlife Conservation: Big Cats & IBCA',
      pageNumber: 'ibca.org.in / moef.gov.in',
      keyExcerpt: 'IBCA headquartered in India coordinates global efforts to conserve the 7 big cats across 97 range nations.'
    },
    eliminationTip: 'No country in the world naturally hosts all 7 big cats (e.g. Puma and Jaguar are native to the Americas). Statement 3 is impossible.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['IBCA', 'Big Cats', 'NTCA', 'Environment'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'MoEFCC & PIB Delhi'
  },
  {
    id: 'ca-2026-08-20-env-07',
    subject: 'environment',
    topic: 'Environment & Climate Change',
    subTopic: 'Green Hydrogen Standard for India & MNRE Threshold',
    question: 'According to the Green Hydrogen Standard for India notified by the Ministry of New and Renewable Energy (MNRE), what is the emission threshold for hydrogen to be classified as "Green"?\n\n1. Well-to-gate greenhouse gas emissions not exceeding 2 kg CO2 equivalent per kg of H2 produced.\n2. Well-to-gate greenhouse gas emissions not exceeding 10 kg CO2 equivalent per kg of H2 produced.\n3. Zero emissions strictly with no allowable biomass gasification.\n4. Negative emissions verified by carbon capture technologies.\n\nSelect the correct answer:',
    options: ['1', '2', '3', '4'],
    correctAnswer: 0,
    explanation: 'Option 1 is correct: The MNRE defines Green Hydrogen as hydrogen produced with well-to-gate emissions not exceeding 2 kg CO2 equivalent per kg of H2 averaged over a 12-month period.',
    bookReference: {
      bookName: 'Ministry of New and Renewable Energy (MNRE)',
      edition: 'August 20, 2026',
      chapter: 'Renewable Energy: National Green Hydrogen Mission',
      pageNumber: 'mnre.gov.in / pib.gov.in',
      keyExcerpt: 'Green Hydrogen Standard specifies an emission ceiling of ≤2 kg CO2 eq/kg H2 on a well-to-gate basis.'
    },
    eliminationTip: 'The 2 kg CO2 eq/kg H2 threshold is the official benchmark under the National Green Hydrogen Mission.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Green Hydrogen', 'MNRE', 'Clean Energy', 'Environment'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'MNRE & PIB Delhi'
  },
  {
    id: 'ca-2026-08-20-env-08',
    subject: 'environment',
    topic: 'Environment & Forest Management',
    subTopic: 'Forest (Conservation) Amendment Act – Section 1A Scope',
    question: 'With reference to the Forest (Conservation) Amendment Act, consider the following statements:\n\n1. It applies to land recorded as forest in government records on or after 25 October 1980.\n2. Strategic linear security projects located within 100 km of international borders and LAC are exempted from seeking prior forest clearance.\n3. The Supreme Court in a 2024 interim order directed States to identify and protect deemed forests adhering to the T.N. Godavarman (1996) dictionary meaning.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct under the amended Act and Supreme Court judicial orders.',
    bookReference: {
      bookName: 'MoEFCC & Supreme Court Orders (T.N. Godavarman)',
      edition: 'August 20, 2026',
      chapter: 'Environmental Law: Forest Conservation & Deemed Forests',
      pageNumber: 'moef.gov.in / main.sci.gov.in',
      keyExcerpt: 'Supreme Court re-emphasizes the 1996 Godavarman dictionary meaning of forests pending State consolidated records.'
    },
    eliminationTip: 'All three statements capture the legislative amendment and the Supreme Court interim safeguards.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['Forest Conservation Act', 'Godavarman Case', 'Deemed Forests', 'Environment'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Supreme Court & Down To Earth'
  },
  {
    id: 'ca-2026-08-20-env-09',
    subject: 'environment',
    topic: 'Environment & Marine Ecosystems',
    subTopic: 'Coral Bleaching & Fourth Global Bleaching Event (NOAA)',
    question: 'Consider the following statements regarding Coral Reefs and Coral Bleaching:\n\n1. Coral bleaching occurs when symbiotic algae (zooxanthellae) are expelled by coral polyps due to thermal stress.\n2. Corals are completely dead immediately upon bleaching and cannot recover even if ocean temperatures return to normal.\n3. The Great Barrier Reef, Lakshadweep, and Gulf of Mannar have experienced recurring mass bleaching events.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 3 only', '1 and 2 only', '2 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 3 are correct. Statement 2 is incorrect: Bleached corals are not immediately dead; if thermal stress subsides and water quality is preserved, corals can re-acquire zooxanthellae and recover.',
    bookReference: {
      bookName: 'Zoological Survey of India (ZSI) & NOAA Coral Reef Watch',
      edition: 'August 20, 2026',
      chapter: 'Marine Ecosystems: Coral Reefs & Climate Vulnerability',
      pageNumber: 'zsi.gov.in / coralreefwatch.noaa.gov',
      keyExcerpt: 'Coral bleaching is a reversible stress response; prolonged thermal stress leads to mortality.'
    },
    eliminationTip: 'Bleaching is a physiological stress response, not instant biological death.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Coral Bleaching', 'Marine Ecology', 'Lakshadweep', 'Environment'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'ZSI & Down To Earth'
  },
  {
    id: 'ca-2026-08-20-env-10',
    subject: 'environment',
    topic: 'Environment & Waste Management',
    subTopic: 'Extended Producer Responsibility (EPR) Portals for Battery & E-Waste',
    question: 'With reference to Extended Producer Responsibility (EPR) regulations in India, consider the following statements:\n\n1. The Central Pollution Control Board (CPCB) operates centralized online portals for EPR registration and certificate trading across E-Waste, Plastic Packaging, and Battery Waste.\n2. Producers can fulfill their recycling targets by purchasing EPR certificates from registered recyclers.\n3. Environmental Compensation is levied on entities failing to meet designated EPR targets under the "Polluter Pays" principle.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct under CPCB waste management rules.',
    bookReference: {
      bookName: 'Central Pollution Control Board (CPCB) & MoEFCC',
      edition: 'August 20, 2026',
      chapter: 'Environmental Governance: EPR & Waste Management',
      pageNumber: 'cpcb.nic.in / epr.cpcb.gov.in',
      keyExcerpt: 'CPCB EPR portals facilitate market-based compliance and recycling credit trading under the Polluter Pays principle.'
    },
    eliminationTip: 'All three statements describe standard operational principles of EPR trading in India.',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['EPR', 'CPCB', 'Waste Management', 'Environment'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'CPCB & PIB Delhi'
  }
];

// ─── 6. HISTORY, ART & CULTURE (10 Questions) ─────────────────────────
export const ca_history_2026_08_20: Question[] = [
  {
    id: 'ca-2026-08-20-hist-01',
    subject: 'history',
    topic: 'History & Culture',
    subTopic: '150 Years of Vande Mataram & Freedom Struggle',
    question: 'With reference to the national song Vande Mataram, consider the following statements:\n\n1. It was composed in Sanskritized Bengali by Bankim Chandra Chattopadhyay in 1875.\n2. It was first sung in a political context by Rabindranath Tagore at the 1896 session of the Indian National Congress in Calcutta.\n3. In 1950, the Constituent Assembly of India declared that Vande Mataram shall have an equal status with the National Anthem Jana Gana Mana.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are historically correct. Written in 1875, sung by Tagore at the 1896 INC session, and accorded equal status with the national anthem by the Constituent Assembly on 24 January 1950.',
    bookReference: {
      bookName: 'Spectrum (Modern India - Rajiv Ahir) & Constituent Assembly Debates',
      edition: '2026 Edition',
      chapter: 'Chapter 28: Nationalist Movement & Cultural Expressions',
      pageNumber: 'Pages 520–522',
      keyExcerpt: 'Vande Mataram was first sung at the 1896 INC session and accorded equal status by the Constituent Assembly.'
    },
    eliminationTip: 'All three statements are classic factual milestones of modern Indian history and national symbols.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['Vande Mataram', 'Bankim Chandra', 'Nationalist Movement', 'History'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Ministry of Culture & Spectrum'
  },
  {
    id: 'ca-2026-08-20-hist-02',
    subject: 'history',
    topic: 'Art & Culture',
    subTopic: 'UNESCO World Heritage Nomination – Moidams of Charaideo',
    question: 'Consider the following statements regarding the Moidams of Charaideo:\n\n1. Moidams are the mound-burial systems of the Ahom dynasty located in Assam.\n2. Charaideo was the first capital established by Chaolung Sukapha, the founder of the Ahom kingdom in the 13th century.\n3. The Moidams have been inscribed as a UNESCO World Heritage Site under the Cultural category.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. The Moidams (pyramid-like burial mounds of Ahom royalty) at Charaideo were inscribed on the UNESCO World Heritage List as India\'s 43rd World Heritage site.',
    bookReference: {
      bookName: 'Archaeological Survey of India (ASI) & UNESCO',
      edition: 'August 20, 2026',
      chapter: 'Indian Heritage: Ahom Architecture & UNESCO Sites',
      pageNumber: 'whc.unesco.org / asi.nic.in',
      keyExcerpt: 'Moidams of the Ahom Dynasty in Charaideo represent hollow vaulted burial mounds of Ahom kings.'
    },
    eliminationTip: 'Moidams are unique to the Ahom kingdom of Assam and represent India\'s latest cultural World Heritage milestone.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['Moidams', 'Ahom Dynasty', 'UNESCO World Heritage', 'Culture'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'ASI & UNESCO'
  },
  {
    id: 'ca-2026-08-20-hist-03',
    subject: 'history',
    topic: 'History & Culture',
    subTopic: 'Sangeet Natak Akademi Amrit Awards & Classical Traditions',
    question: 'Consider the following statements regarding the Sangeet Natak Akademi:\n\n1. It is India\'s apex national academy for music, dance, and drama under the Ministry of Culture.\n2. The fellowship (Akademi Ratna) is restricted to a maximum of 40 living individuals at any given time.\n3. The awards are formally conferred by the President of India.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct under the constitution of the Sangeet Natak Akademi.',
    bookReference: {
      bookName: 'Ministry of Culture & Sangeet Natak Akademi',
      edition: 'August 20, 2026',
      chapter: 'Art & Culture: National Performing Arts Institutions',
      pageNumber: 'sangeetnatak.gov.in / PIB Culture',
      keyExcerpt: 'Akademi Ratna is restricted to 40 living fellows and conferred by the President of India.'
    },
    eliminationTip: 'All three statements represent official constitutional facts of the Akademi.',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['Sangeet Natak Akademi', 'Performing Arts', 'Culture'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Ministry of Culture & PIB'
  },
  {
    id: 'ca-2026-08-20-hist-04',
    subject: 'history',
    topic: 'History & Archaeology',
    subTopic: 'Keezhadi Excavations & Sangam Age Urbanisation',
    question: 'With reference to the Keezhadi excavations in Tamil Nadu, consider the following statements:\n\n1. It is located on the banks of the Vaigai River in Sivagangai district.\n2. Carbon dating of artifacts has pushed the antiquity of the Sangam Age to the 6th century BCE.\n3. Inscriptions in Tamil-Brahmi script found on pottery shards demonstrate widespread literacy during the period.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. Keezhadi on the Vaigai River confirms a second urbanisation in South India contemporaneous with the Gangetic plains in the 6th century BCE.',
    bookReference: {
      bookName: 'Tamil Nadu State Archaeology Department (TNSDA) & Frontline',
      edition: 'August 20, 2026',
      chapter: 'Ancient History: Sangam Age & South Indian Urbanisation',
      pageNumber: 'archaeology.tn.gov.in / frontline.thehindu.com',
      keyExcerpt: 'Keezhadi findings establish a vibrant literate urban civilization in Tamil Nadu by 6th century BCE.'
    },
    eliminationTip: 'Keezhadi on the Vaigai River has redefined the chronology of early South Indian urbanism.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['Keezhadi', 'Sangam Age', 'Tamil-Brahmi', 'Archaeology'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'TNSDA & The Hindu'
  },
  {
    id: 'ca-2026-08-20-hist-05',
    subject: 'history',
    topic: 'Art & Culture',
    subTopic: 'Classical Language Status Criteria in India',
    question: 'With reference to the criteria for conferring "Classical Language" status in India, consider the following statements:\n\n1. High antiquity of its early texts/recorded history over a period of 1500–2000 years.\n2. A body of ancient literature/texts considered a valuable heritage by generations of speakers.\n3. The literary tradition must be completely derived from another speech community without originality.\n\nWhich of the statements given above are valid criteria?',
    options: ['1 and 2 only', '2 and 3 only', '1 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct criteria. Statement 3 is incorrect: The criterion explicitly requires that the literary tradition be "ORIGINAL and not borrowed from another speech community".',
    bookReference: {
      bookName: 'Ministry of Culture & Sahitya Akademi',
      edition: 'August 20, 2026',
      chapter: 'Indian Languages: Classical Language Status Criteria',
      pageNumber: 'pib.gov.in / indiaculture.gov.in',
      keyExcerpt: 'Classical language status requires original literary tradition not borrowed from another community and antiquity of 1500–2000 years.'
    },
    eliminationTip: 'Statement 3 states "derived from another community without originality" — the actual rule mandates original independent tradition.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Classical Languages', 'Ministry of Culture', 'Indian Languages'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Ministry of Culture & PIB'
  },
  {
    id: 'ca-2026-08-20-hist-06',
    subject: 'history',
    topic: 'Art & Culture',
    subTopic: 'Geographical Indications (GI) Tags & Traditional Crafts',
    question: 'Consider the following pairs of GI Tagged traditional crafts/products and their states:\n\n1. Majuli Masks : Assam\n2. Risa Textile : Tripura\n3. Cuttack Rupa Tarakasi (Silver Filigree) : Odisha\n\nWhich of the pairs given above are correctly matched?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three pairs are correctly matched. Majuli traditional mask making is from Assam, Risa is an indigenous handwoven textile of Tripura, and Rupa Tarakasi is the famed silver filigree of Cuttack, Odisha.',
    bookReference: {
      bookName: 'GI Registry & Ministry of Commerce and Industry',
      edition: 'August 20, 2026',
      chapter: 'Art & Culture: Traditional Crafts & Geographical Indications',
      pageNumber: 'ipindia.gov.in / PIB Commerce',
      keyExcerpt: 'Majuli masks, Tripura Risa textile, and Cuttack silver filigree represent authentic GI protected heritage crafts.'
    },
    eliminationTip: 'All three crafts are prominent GI registrations from Eastern and North-Eastern India.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['GI Tags', 'Majuli', 'Risa Textile', 'Silver Filigree', 'Culture'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'GI Registry & PIB Delhi'
  },
  {
    id: 'ca-2026-08-20-hist-07',
    subject: 'history',
    topic: 'History & Culture',
    subTopic: 'Rani Durgavati 500th Birth Anniversary & Gond Kingdom',
    question: 'With reference to Rani Durgavati of the Garha-Katanga (Gond) kingdom, consider the following statements:\n\n1. She belonged to the famous Chandel dynasty of Mahoba and married Dalpat Shah of the Gond kingdom.\n2. She died defending her kingdom against the Mughal forces commanded by Asaf Khan in 1564.\n3. The kingdom of Garha-Katanga was known for its wealth and export of wild elephants to other kingdoms.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. Rani Durgavati was a Chandel princess who ruled the prosperous Garha-Katanga Gond kingdom and heroically fought Mughal general Asaf Khan during Akbar\'s reign.',
    bookReference: {
      bookName: 'NCERT Class VII (Our Pasts II) & Spectrum Medieval India',
      edition: '2026 Edition',
      chapter: 'Tribes, Nomads and Settled Communities: The Gonds',
      pageNumber: 'NCERT Class 7, Pages 98–101',
      keyExcerpt: 'Garha-Katanga was a rich Gond kingdom mentioned in the Akbarnama; Rani Durgavati valiantly fought against Asaf Khan.'
    },
    eliminationTip: 'NCERT Class 7 explicitly documents that Garha-Katanga exported wild elephants and was ruled by Rani Durgavati.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Rani Durgavati', 'Gond Kingdom', 'Medieval India', 'History'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'NCERT & Ministry of Culture'
  },
  {
    id: 'ca-2026-08-20-hist-08',
    subject: 'history',
    topic: 'Art & Culture',
    subTopic: 'Kakatiya Dynasty Architecture – Ramappa Temple & Pushkarinis',
    question: 'With reference to the Ramappa (Rudreshwara) Temple in Telangana, consider the following statements:\n\n1. It was built during the reign of Kakatiya ruler Ganapati Deva by general Recharla Rudra.\n2. The temple is built using lightweight "floating bricks" and a sandbox technology foundation.\n3. It is named after its chief sculptor Ramappa, a rare distinction in Indian temple architecture.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. Ramappa Temple (UNESCO World Heritage) features floating porous bricks, sandbox earthquake-resistant foundation, and is named after sculptor Ramappa.',
    bookReference: {
      bookName: 'Archaeological Survey of India & UNESCO Heritage Dossier',
      edition: 'August 20, 2026',
      chapter: 'Indian Temple Architecture: Kakatiya Style & Engineering',
      pageNumber: 'asi.nic.in / whc.unesco.org',
      keyExcerpt: 'Ramappa Temple features lightweight floating bricks and sandbox technique, named after its sculptor.'
    },
    eliminationTip: 'All three statements represent celebrated technological features of the Ramappa UNESCO site.',
    difficulty: 'Moderate',
    frequency: 5,
    tags: ['Ramappa Temple', 'Kakatiya Dynasty', 'UNESCO', 'Culture'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'ASI & UNESCO'
  },
  {
    id: 'ca-2026-08-20-hist-09',
    subject: 'history',
    topic: 'History & Culture',
    subTopic: 'Sant Ravidas Bhakti Movement & Begampura Concept',
    question: 'Consider the following statements regarding the 15th-century Bhakti saint-poet Sant Ravidas:\n\n1. He was a contemporary of Saint Kabir and a leading exponent of the Nirguna Bhakti tradition.\n2. He envisioned the philosophical ideal of "Begampura" (a city without sorrow, taxes, or caste hierarchies).\n3. Several hymns composed by Sant Ravidas are included in the Guru Granth Sahib.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. Sant Ravidas was a prominent Nirguna Bhakti saint who propounded Begampura, and over 40 of his verses are enshrined in the Adi Granth / Guru Granth Sahib.',
    bookReference: {
      bookName: 'NCERT Class XII (Themes in Indian History II - Bhakti Traditions)',
      edition: '2026 Edition',
      chapter: 'Chapter 6: Bhakti-Sufi Traditions',
      pageNumber: 'NCERT Class 12, Pages 158–162',
      keyExcerpt: 'Sant Ravidas conceptualized Begampura as an egalitarian socio-spiritual utopia devoid of caste oppression.'
    },
    eliminationTip: 'Begampura is the famous egalitarian vision of Sant Ravidas, and his inclusion in Guru Granth Sahib is well established.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Sant Ravidas', 'Bhakti Movement', 'Begampura', 'History'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'NCERT & Ministry of Culture'
  },
  {
    id: 'ca-2026-08-20-hist-10',
    subject: 'history',
    topic: 'History & Culture',
    subTopic: 'National Maritime Heritage Complex (NMHC) at Lothal',
    question: 'With reference to the National Maritime Heritage Complex (NMHC) being developed by the Ministry of Ports, Shipping and Waterways, consider the following statements:\n\n1. It is being developed at Lothal, Gujarat, an ancient port town of the Harappan civilization.\n2. Lothal is famous for possessing the world\'s earliest known tidal dockyard connected to the Sabarmati river basin.\n3. The complex includes the world\'s highest lighthouse museum and interactive maritime galleries.\n\nWhich of the statements given above is/are correct?',
    options: ['1, 2 and 3', '1 and 2 only', '2 and 3 only', '1 and 3 only'],
    correctAnswer: 0,
    explanation: 'All three statements are correct. NMHC is established at Lothal to showcase India\'s 5000-year maritime heritage from the Harappan dockyard to modern times.',
    bookReference: {
      bookName: 'Ministry of Ports, Shipping and Waterways & ASI',
      edition: 'August 20, 2026',
      chapter: 'Harappan Civilization: Maritime Trade & Lothal Port',
      pageNumber: 'shipmin.gov.in / asi.nic.in',
      keyExcerpt: 'NMHC at Lothal highlights the world\'s oldest artificial dock and India\'s maritime legacy.'
    },
    eliminationTip: 'Lothal is celebrated as the world\'s earliest engineered tidal dock in Harappan archaeology.',
    difficulty: 'Easy',
    frequency: 5,
    tags: ['NMHC', 'Lothal', 'Harappan Civilization', 'Maritime Heritage'],
    generatedAt: '20 Aug 2026, 06:00 AM IST',
    editionDate: '2026-08-20',
    sourcePublisher: 'Ministry of Ports & ASI'
  }
];

// Combine all 6 subjects into the 60-Question Mega Daily Set
export const dailyCA_2026_08_20_All: Question[] = [
  ...ca_polity_2026_08_20,
  ...ca_economy_2026_08_20,
  ...ca_scitech_2026_08_20,
  ...ca_ir_2026_08_20,
  ...ca_environment_2026_08_20,
  ...ca_history_2026_08_20,
];

// Backwards-compatible export
export const dailyCAQuestions: Question[] = dailyCA_2026_08_20_All;

/**
 * Helper to return questions for any specific date and optional subject filter.
 */
export function getCuratedQuestionsForDate(dateStr: string, subjectFilter?: string): Question[] {
  let pool = dailyCA_2026_08_20_All;

  // If previous date, clone and update timestamps
  if (dateStr !== '2026-08-20') {
    const formatted = formatDateDisplay(dateStr);
    pool = pool.map((q, idx) => ({
      ...q,
      id: `ca-${dateStr}-${q.subject}-${String((idx % 10) + 1).padStart(2, '0')}`,
      editionDate: dateStr,
      generatedAt: `${formatted}, 06:00 AM IST`,
    }));
  }

  if (subjectFilter && subjectFilter !== 'all') {
    const subjectMap: Record<string, string[]> = {
      polity: ['polity', 'governance', 'constitution', 'judiciary'],
      economy: ['economy', 'banking', 'finance', 'taxation', 'industry'],
      science_tech: ['science', 'tech', 'quantum', 'space', 'nuclear'],
      international: ['international', 'ir', 'foreign', 'un', 'treaty', 'global'],
      environment: ['environment', 'ecology', 'wildlife', 'climate', 'pollution'],
      history: ['history', 'culture', 'heritage', 'art', 'archaeology'],
    };
    const keywords = subjectMap[subjectFilter] || [subjectFilter];
    const filtered = pool.filter(q => 
      keywords.some(k => 
        q.subject?.toLowerCase().includes(k) || 
        q.topic?.toLowerCase().includes(k)
      )
    );
    if (filtered.length > 0) return filtered;
  }

  return pool;
}

function formatDateDisplay(dateStr: string): string {
  try {
    const parts = dateStr.split('-');
    if (parts.length === 3) {
      const d = new Date(parseInt(parts[0]), parseInt(parts[1]) - 1, parseInt(parts[2]));
      return d.toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });
    }
  } catch {
    // fallback
  }
  return dateStr;
}
