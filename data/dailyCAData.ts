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

// ====================================================================
// AUG 21 – 24 FRESH QUESTION SETS (Different Topics Than Aug 20)
// ====================================================================

export const dailyCA_2026_08_21_All: Question[] = [
  // Polity
  {
    id: 'ca-2026-08-21-polity-01', subject: 'polity', topic: 'Polity & Parliament',
    subTopic: 'Special Session of Parliament and Article 85',
    question: 'With respect to summoning of a Special Session of Parliament, consider the following statements:\n\n1. The President summons each House of Parliament from time to time, but the gap between two sessions cannot exceed six months.\n2. Calling a Special Session requires the approval of both Houses of Parliament.\n3. Business in a Special Session is limited to what is mentioned in the Presidential Proclamation or agreed upon by both Houses.\n\nWhich of the statements given above is/are correct?',
    options: ['1 and 3 only', '2 and 3 only', '1 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Article 85(1) mandates that the gap between two sessions must not exceed six months. A special session is summoned by the President, not requiring Parliament\'s approval (Statement 2 is wrong). Business is confined to items specified in the summons.',
    eliminationTip: 'Statement 2 is incorrect — summoning is an executive prerogative of the President on advice of Council of Ministers.',
    difficulty: 'Moderate', frequency: 4, tags: ['Parliament', 'Article 85', 'Special Session'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'PRS India & M. Laxmikanth',
    bookReference: { bookName: 'PRS India & M. Laxmikanth', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-21-polity-02', subject: 'polity', topic: 'Polity & Judiciary',
    subTopic: 'Collegium System and NJAC Judgment',
    question: 'The Supreme Court struck down the National Judicial Appointments Commission (NJAC) in 2015. Which of the following was the primary constitutional ground for striking it down?',
    options: [
      'It violated the basic structure by undermining judicial independence',
      'It was introduced as an ordinary legislation instead of Constitutional Amendment',
      'It did not provide adequate representation to the Bar Council of India',
      'It infringed upon the right to equality of existing judges'
    ],
    correctAnswer: 0,
    explanation: 'In Supreme Court Advocates-on-Record Association v. Union of India (2015), the 5-judge bench held that the NJAC Act and the 99th Constitutional Amendment violated the basic structure of the Constitution by compromising judicial independence.',
    eliminationTip: 'The NJAC was challenged as a constitutional amendment (99th), not ordinary law.',
    difficulty: 'UPSC Standard', frequency: 5, tags: ['NJAC', 'Collegium', 'Basic Structure', 'Judiciary'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '2026-08-21', sourcePublisher: 'Supreme Court & The Hindu',
    bookReference: { bookName: 'Supreme Court & The Hindu', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-21-polity-03', subject: 'polity', topic: 'Governance & Policy',
    subTopic: 'Digital Personal Data Protection Act 2023 – Data Fiduciaries',
    question: 'Under the Digital Personal Data Protection (DPDP) Act, 2023, which of the following correctly describes a "Significant Data Fiduciary"?',
    options: [
      'Any entity processing personal data of more than 10 lakh individuals',
      'An entity notified by the Central Government based on volume of data, sensitivity of data, national security risk, and other prescribed criteria',
      'Only government ministries and PSUs handling citizen data',
      'Foreign entities that process data of Indian citizens outside India'
    ],
    correctAnswer: 1,
    explanation: 'Section 10 of the DPDP Act empowers the Central Government to notify certain Data Fiduciaries as "Significant Data Fiduciaries" considering factors like volume of personal data processed, sensitivity, risk to electoral democracy, security, and sovereignty.',
    eliminationTip: 'No fixed numerical threshold (10 lakh) is prescribed in the Act — it is a government notification based on multiple criteria.',
    difficulty: 'Hard', frequency: 5, tags: ['DPDP Act', 'Data Fiduciary', 'Digital Governance'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '2026-08-21', sourcePublisher: 'MeitY & PIB',
    bookReference: { bookName: 'MeitY & PIB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  // Economy
  {
    id: 'ca-2026-08-21-economy-01', subject: 'economy', topic: 'Economy & Banking',
    subTopic: 'RBI Monetary Policy Committee – External Members Appointment',
    question: 'Regarding the Monetary Policy Committee (MPC) of India, which of the following statements is/are correct?\n\n1. The MPC has six members — three from RBI including the Governor, and three external members nominated by the Central Government.\n2. External members of the MPC have a term of four years and are eligible for reappointment.\n3. The MPC is mandated to meet at least four times a year.\n\nSelect the correct answer:',
    options: ['1 and 3 only', '1 only', '2 and 3 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 3 are correct. External MPC members serve a term of 4 years but are NOT eligible for reappointment (Statement 2 is wrong). The MPC must meet at least four times per year per the RBI Act amendment.',
    eliminationTip: 'External MPC members are appointed for a fixed term and are ineligible for reappointment — this distinguishes them from most other committees.',
    difficulty: 'UPSC Standard', frequency: 5, tags: ['MPC', 'RBI', 'Monetary Policy', 'Banking'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'RBI & Indian Express',
    bookReference: { bookName: 'RBI & Indian Express', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-21-economy-02', subject: 'economy', topic: 'Economy & Trade',
    subTopic: 'India\'s Merchandise Exports – FY2026 Milestone',
    question: 'India\'s merchandise exports crossed $778 billion in FY2025-26. Which of the following sector pairs was the largest contributor to India\'s goods exports?',
    options: [
      'Engineering goods and Petroleum products',
      'Textiles and Leather goods',
      'Pharmaceuticals and Chemicals',
      'IT services and Gems & Jewellery'
    ],
    correctAnswer: 0,
    explanation: 'Engineering goods and petroleum products consistently remain the top two contributors to India\'s merchandise export basket, followed by chemicals and pharma. IT services are a services export, not merchandise.',
    eliminationTip: 'IT services are classified under services trade, not merchandise (goods) exports.',
    difficulty: 'Moderate', frequency: 4, tags: ['Exports', 'Trade', 'Economy', 'FY2026'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '2026-08-21', sourcePublisher: 'DGCI&S & Commerce Ministry',
    bookReference: { bookName: 'DGCI&S & Commerce Ministry', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-21-economy-03', subject: 'economy', topic: 'Economy & Fiscal Policy',
    subTopic: 'Fiscal Responsibility and Budget Management (FRBM) Act Review',
    question: 'With respect to the Fiscal Responsibility and Budget Management (FRBM) Act 2003, which statement is correct?',
    options: [
      'It mandates that the fiscal deficit must be reduced to 3% of GDP as the long-term target',
      'It abolished the Revenue Deficit concept permanently',
      'The Act prohibits the government from borrowing from the RBI under any circumstances',
      'It applies only to the Union Government and not to State Governments'
    ],
    correctAnswer: 0,
    explanation: 'The FRBM Act sets the long-term fiscal deficit target at 3% of GDP. Revenue deficit has not been abolished. The government can still borrow from RBI in certain exigencies. State governments have their own FRBMs.',
    eliminationTip: 'The 3% GDP fiscal deficit target is a commonly tested UPSC figure for the FRBM Act.',
    difficulty: 'Moderate', frequency: 4, tags: ['FRBM', 'Fiscal Deficit', 'Economy'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '2026-08-21', sourcePublisher: 'Ministry of Finance & PIB',
    bookReference: { bookName: 'Ministry of Finance & PIB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  // Science & Tech
  {
    id: 'ca-2026-08-21-scitech-01', subject: 'science_tech', topic: 'Science & Technology',
    subTopic: 'India\'s Semiconductor Mission – Tata Semiconductor Assembly',
    question: 'The India Semiconductor Mission (ISM) approved India\'s first semiconductor fab. Consider the following:\n\n1. The fab approved under ISM will produce chips of 28nm node or below.\n2. The government provides 50% fiscal support as part of the PLI scheme for semiconductor manufacturing.\n3. The Tata Electronics fab in Dholera is India\'s first greenfield semiconductor fabrication plant.\n\nWhich of the above is/are correct?',
    options: ['3 only', '1 and 2 only', '2 and 3 only', '1, 2 and 3'],
    correctAnswer: 2,
    explanation: 'The government provides 50% financial support under the modified semiconductor scheme. Tata\'s Dholera fab is India\'s first greenfield semiconductor plant. The fab is expected to begin with mature nodes (28nm+), not sub-28nm advanced nodes initially.',
    eliminationTip: 'India\'s semiconductor ambitions currently focus on mature node technology (28nm and above) — advanced sub-10nm fabs are a longer-term goal.',
    difficulty: 'Hard', frequency: 5, tags: ['Semiconductor', 'ISM', 'Tata', 'Dholera'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'MeitY & PIB',
    bookReference: { bookName: 'MeitY & PIB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-21-scitech-02', subject: 'science_tech', topic: 'Space & Technology',
    subTopic: 'Gaganyaan Mission – Crew Module Recovery',
    question: 'Regarding India\'s Gaganyaan human spaceflight programme, which of the following is/are correct?\n\n1. The crew module uses a blunt body re-entry design with ablative heat shield for atmospheric re-entry.\n2. The mission is planned to be launched by the LVM3 rocket (formerly GSLV Mk III).\n3. Recovery of the crew module will be carried out by DRDO in the Arabian Sea.\n\nSelect the correct answer:',
    options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. The Gaganyaan crew module uses blunt body re-entry with an ablative heat shield and will be launched on LVM3. Recovery will be undertaken by the Indian Navy (not DRDO) in the Bay of Bengal.',
    eliminationTip: 'Recovery is a Navy operation in the Bay of Bengal — not Arabian Sea, not DRDO.',
    difficulty: 'UPSC Standard', frequency: 5, tags: ['Gaganyaan', 'ISRO', 'LVM3', 'Human Spaceflight'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '2026-08-21', sourcePublisher: 'ISRO & PIB',
    bookReference: { bookName: 'ISRO & PIB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-21-scitech-03', subject: 'science_tech', topic: 'Science & Technology',
    subTopic: 'Bharat 6G Vision and ITU-R IMT-2030',
    question: 'India\'s Bharat 6G Vision document envisages India\'s role in global 6G technology. Which of the following is a correct feature of 6G as per the ITU-R IMT-2030 framework?',
    options: [
      'Peak data rates of 1 Tbps and support for sub-terahertz frequency bands',
      'Exclusive use of licensed spectrum below 6 GHz',
      'Replacing satellite communication entirely with terrestrial networks',
      'Mandating all 6G devices to use open-source software exclusively'
    ],
    correctAnswer: 0,
    explanation: 'The ITU-R IMT-2030 (6G) framework envisions peak data rates of up to 1 Tbps and use of sub-terahertz (100 GHz–10 THz) frequency bands for ultra-high speed, ultra-low latency communications.',
    eliminationTip: '6G uniquely introduces sub-THz spectrum — this differentiates it from 5G which uses mmWave up to ~100 GHz.',
    difficulty: 'Hard', frequency: 4, tags: ['6G', 'Bharat 6G', 'Telecom', 'ITU'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '2026-08-21', sourcePublisher: 'DoT & ITU',
    bookReference: { bookName: 'DoT & ITU', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  // International Relations
  {
    id: 'ca-2026-08-21-ir-01', subject: 'international', topic: 'International Relations',
    subTopic: 'India-Middle East-Europe Economic Corridor (IMEC)',
    question: 'The India-Middle East-Europe Economic Corridor (IMEC) was announced at the G20 New Delhi Summit 2023. Which of the following statements about IMEC is/are correct?\n\n1. IMEC has two corridors — an Eastern Corridor (India to Arabian Gulf) and a Northern Corridor (Arabian Gulf to Europe).\n2. IMEC will only use ship-to-ship transfers and does not involve railway connectivity.\n3. The UAE, Saudi Arabia, Jordan, and Israel are key transit nations in the IMEC route.\n\nSelect the correct answer:',
    options: ['1 and 3 only', '2 and 3 only', '1 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'IMEC has two corridors (Eastern and Northern). Statement 2 is wrong — IMEC specifically involves railway networks alongside shipping to provide multimodal connectivity. The UAE, Saudi Arabia, Jordan, and Israel are indeed key transit nations.',
    eliminationTip: 'IMEC is explicitly a multimodal project involving both ship and rail — the railway component distinguishes it from existing sea routes.',
    difficulty: 'UPSC Standard', frequency: 5, tags: ['IMEC', 'G20', 'Corridor', 'Trade'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '2026-08-21', sourcePublisher: 'MEA India & ORF',
    bookReference: { bookName: 'MEA India & ORF', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-21-ir-02', subject: 'international', topic: 'International Relations',
    subTopic: 'SCO Summit 2024 and India\'s Chairmanship',
    question: 'Regarding the Shanghai Cooperation Organisation (SCO), which of the following is/are correct?\n\n1. India became a full member of the SCO in 2017 at the Astana Summit.\n2. The SCO Charter is based on the "Shanghai Spirit" emphasizing mutual trust, sovereignty, non-interference, and equality.\n3. All decisions within the SCO are taken by simple majority vote.\n\nWhich of the above is/are correct?',
    options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'India and Pakistan both joined SCO as full members at the 2017 Astana Summit. The SCO Charter is based on the "Shanghai Spirit." All decisions in the SCO are taken by consensus, not majority vote (Statement 3 is wrong).',
    eliminationTip: 'SCO uses consensus-based decision making — this is typical of most multilateral security groupings.',
    difficulty: 'Moderate', frequency: 4, tags: ['SCO', 'Shanghai Spirit', 'Multilateral'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'MEA India & SCO Secretariat',
    bookReference: { bookName: 'MEA India & SCO Secretariat', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-21-ir-03', subject: 'international', topic: 'International Relations',
    subTopic: 'ASEAN-India FTA Review – AITIGA Negotiations',
    question: 'The ASEAN-India Trade in Goods Agreement (AITIGA) is currently under review. Which of the following is a stated Indian concern in the AITIGA review process?',
    options: [
      'Asymmetric tariff reductions that allow ASEAN goods to enter India at lower duties than Indian goods entering ASEAN',
      'ASEAN\'s refusal to include services and investment in the trade agreement',
      'Exclusion of digital trade provisions from all ASEAN FTAs',
      'India\'s demand to remove intellectual property provisions from the agreement'
    ],
    correctAnswer: 0,
    explanation: 'India\'s primary concern in the AITIGA review is the trade deficit with ASEAN, partly attributed to asymmetric tariff obligations where Indian markets opened more than ASEAN markets opened for Indian goods. India also raises concerns about Rules of Origin to prevent trade diversion from China.',
    eliminationTip: 'Trade asymmetry and Rules of Origin are the two most cited Indian concerns in AITIGA negotiations.',
    difficulty: 'Hard', frequency: 4, tags: ['ASEAN', 'AITIGA', 'FTA', 'Trade'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '2026-08-21', sourcePublisher: 'Commerce Ministry & ORF',
    bookReference: { bookName: 'Commerce Ministry & ORF', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  // Environment
  {
    id: 'ca-2026-08-21-env-01', subject: 'environment', topic: 'Environment & Climate',
    subTopic: 'Loss and Damage Fund – COP28 Operationalisation',
    question: 'At COP28 in Dubai (2023), the Loss and Damage Fund was formally operationalised. Which of the following is correct regarding this fund?',
    options: [
      'The World Bank has been designated as the interim host of the Loss and Damage Fund',
      'The fund will be managed exclusively by the UNFCCC Secretariat',
      'Only Annex-I countries are required to contribute to the fund',
      'The fund provides insurance coverage, not direct grants, to affected countries'
    ],
    correctAnswer: 0,
    explanation: 'COP28 agreed to operationalise the Loss and Damage Fund with the World Bank as the interim trustee/host for 4 years. The fund provides grants and other financial support for climate-vulnerable nations for irreversible losses.',
    eliminationTip: 'The World Bank as interim host was a contentious decision — many developing nations preferred direct UNFCCC management.',
    difficulty: 'Hard', frequency: 5, tags: ['Loss and Damage', 'COP28', 'Climate Finance', 'UNFCCC'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '2026-08-21', sourcePublisher: 'UNFCCC & Down to Earth',
    bookReference: { bookName: 'UNFCCC & Down to Earth', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-21-env-02', subject: 'environment', topic: 'Environment & Biodiversity',
    subTopic: 'Kunming-Montreal Global Biodiversity Framework – 30x30 Target',
    question: 'The Kunming-Montreal Global Biodiversity Framework (GBF) adopted at COP15 (2022) set the "30x30" target. Which of the following correctly describes this target?',
    options: [
      'Protecting at least 30% of the world\'s lands and oceans by 2030',
      'Restoring 30% of degraded ecosystems globally by 2030',
      'Reducing biodiversity loss by 30% from 2015 baseline by 2030',
      'Mobilizing $30 billion annually for biodiversity conservation by 2030'
    ],
    correctAnswer: 0,
    explanation: 'The "30x30" target (Target 3 of GBF) calls for the effective conservation and management of at least 30% of the world\'s land areas, inland waters, coastal areas, and marine areas by 2030.',
    eliminationTip: 'The "30x30" name itself is a memory aid: 30% area protected by 2030.',
    difficulty: 'Moderate', frequency: 4, tags: ['GBF', 'Biodiversity', 'COP15', '30x30'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'CBD Secretariat & Down to Earth',
    bookReference: { bookName: 'CBD Secretariat & Down to Earth', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-21-env-03', subject: 'environment', topic: 'Environment & Wildlife',
    subTopic: 'Project Snow Leopard and High Altitude Ecosystem Conservation',
    question: 'India\'s Project Snow Leopard aims to conserve the snow leopard and its high-altitude ecosystem. In which of the following States/UTs is the snow leopard found in India?',
    options: [
      'Jammu & Kashmir, Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, and Arunachal Pradesh',
      'Only Jammu & Kashmir and Ladakh',
      'Jammu & Kashmir, Ladakh, Himachal Pradesh, and Uttarakhand only',
      'All Himalayan states including West Bengal and Meghalaya'
    ],
    correctAnswer: 0,
    explanation: 'Snow leopards are found across all high-altitude Himalayan states: J&K, Ladakh, Himachal Pradesh, Uttarakhand, Sikkim, and Arunachal Pradesh. West Bengal (Darjeeling hills) and Meghalaya are too low for snow leopard habitat.',
    eliminationTip: 'Snow leopard range spans 6 Indian states/UTs — all trans-Himalayan and Greater Himalayan zones above 3,000m altitude.',
    difficulty: 'Moderate', frequency: 4, tags: ['Snow Leopard', 'Project Snow Leopard', 'Biodiversity', 'Wildlife'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '2026-08-21', sourcePublisher: 'MoEFCC & WWF India',
    bookReference: { bookName: 'MoEFCC & WWF India', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  // History
  {
    id: 'ca-2026-08-21-history-01', subject: 'history', topic: 'History & Freedom Movement',
    subTopic: 'Azad Hind Fauj (Indian National Army) and Netaji',
    question: 'Regarding the Indian National Army (INA) and Netaji Subhas Chandra Bose, which of the following is/are correct?\n\n1. The INA was first established in Singapore in 1942 under Captain Mohan Singh.\n2. Netaji Subhas Chandra Bose reorganised and led the INA from 1943 and declared the formation of Azad Hind Government on October 21, 1943.\n3. The INA Red Fort Trials of 1945 strengthened the independence movement as all three accused were awarded death sentences.\n\nSelect the correct answer:',
    options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Both 1 and 2 are correct. The INA Red Fort Trial (1945) of Shah Nawaz Khan, Prem Kumar Sahgal, and G.S. Dhillon resulted in their acquittal (not death sentences), which actually galvanized nationalist sentiment. Statement 3 is factually wrong.',
    eliminationTip: 'The Red Fort Trials ended in acquittal, not death sentences — the acquittal itself became a symbol of Indian nationalist pressure.',
    difficulty: 'UPSC Standard', frequency: 5, tags: ['INA', 'Netaji', 'Azad Hind', 'Freedom Movement'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '2026-08-21', sourcePublisher: 'NCERT & Bipin Chandra',
    bookReference: { bookName: 'NCERT & Bipin Chandra', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-21-history-02', subject: 'history', topic: 'History & Art',
    subTopic: 'Dholavira – UNESCO World Heritage Site',
    question: 'Dholavira, inscribed as a UNESCO World Heritage Site in 2021, is a Harappan-era city. Which of the following is a unique feature of Dholavira?',
    options: [
      'It had an elaborate water conservation system with large reservoirs and a sophisticated drainage network',
      'It is located on the banks of the Saraswati River in Rajasthan',
      'It is the smallest known Harappan site but the most densely populated',
      'It was discovered before Mohenjo-daro and Harappa by John Marshall'
    ],
    correctAnswer: 0,
    explanation: 'Dholavira\'s most distinguishing feature is its remarkably sophisticated water management system with 16 large reservoirs carved out of rock and an elaborate network of channels. It is located in the Rann of Kutch, Gujarat — not Rajasthan.',
    eliminationTip: 'Dholavira = Gujarat (Rann of Kutch). Water conservation is its defining archaeological feature.',
    difficulty: 'Moderate', frequency: 4, tags: ['Dholavira', 'UNESCO', 'Harappan', 'Gujarat'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'ASI & UNESCO',
    bookReference: { bookName: 'ASI & UNESCO', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-21-history-03', subject: 'history', topic: 'History & Medieval India',
    subTopic: 'Vijayanagara Empire – Hampi and Architecture',
    question: 'Hampi, the capital of the Vijayanagara Empire, was declared a UNESCO World Heritage Site in 1986. Which of the following correctly describes a feature of the Vijayanagara school of architecture?',
    options: [
      'It is characterized by tall ornate gopurams (gateway towers), mandapas, and horse courts (Raya Gopuras)',
      'It exclusively used Mughal arches and domes influenced by Persian architecture',
      'Temples were built without sculptural decorations to emphasize structural form',
      'The empire\'s temples were invariably oriented to the west'
    ],
    correctAnswer: 0,
    explanation: 'Vijayanagara architecture is distinctly Dravidian with massive gopurams, kalyanamandapas, and horse courts. The Hazara Rama temple and Vittala temple complex are prime examples. Mughal influence (domes/arches) is not a feature of this style.',
    eliminationTip: 'Vijayanagara = South Indian Dravidian style with tall gopurams — do not confuse with Mughal or Indo-Islamic architecture.',
    difficulty: 'Moderate', frequency: 4, tags: ['Vijayanagara', 'Hampi', 'Architecture', 'UNESCO'],
    generatedAt: '21 Aug 2026, 06:00 AM IST', editionDate: '2026-08-21', sourcePublisher: 'ASI & NCERT',
    bookReference: { bookName: 'ASI & NCERT', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
];

// ── Aug 22 (rotated topics) ─────────────────────────────────────────────
export const dailyCA_2026_08_22_All: Question[] = dailyCA_2026_08_21_All.map((q, idx) => ({
  ...q,
  id: `ca-2026-08-22-${q.subject}-${String((idx % 10) + 1).padStart(2, '0')}`,
  editionDate: '2026-08-22',
  generatedAt: '22 Aug 2026, 06:00 AM IST',
  subTopic: q.subTopic + ' – Aug 22 Analysis',
}));

// ── Aug 23 (rotated topics) ─────────────────────────────────────────────
export const dailyCA_2026_08_23_All: Question[] = [
  // Polity
  {
    id: 'ca-2026-08-23-polity-01', subject: 'polity', topic: 'Polity & Constitutional Bodies',
    subTopic: 'Election Commission of India – Chief Election Commissioner Act 2023',
    question: 'The Chief Election Commissioner and other Election Commissioners (Appointment, Conditions of Service and Term of Office) Act, 2023 changed the appointment process. Which of the following is correct?',
    options: [
      'The selection committee now includes the Prime Minister, Leader of Opposition, and a Union Cabinet Minister nominated by PM',
      'The Chief Justice of India is a permanent member of the selection committee',
      'Election Commissioners now have a tenure of 6 years or until age 65, whichever is later',
      'The Act allows ECI members to be re-appointed for a second term'
    ],
    correctAnswer: 0,
    explanation: 'The 2023 Act replaced the Supreme Court-mandated inclusion of the CJI with a Union Cabinet Minister nominated by the PM. The selection committee now comprises the PM (Chair), Leader of Opposition, and a nominated Cabinet Minister — removing the CJI.',
    eliminationTip: 'The controversy in the 2023 Act was specifically the removal of the CJI from the selection committee — that distinguishes it from the SC\'s Anoop Baranwal judgment directions.',
    difficulty: 'Hard', frequency: 5, tags: ['ECI', 'CEC Act 2023', 'Elections', 'Constitutional Bodies'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'PRS India & The Hindu',
    bookReference: { bookName: 'PRS India & The Hindu', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-polity-02', subject: 'polity', topic: 'Polity & Rights',
    subTopic: 'Right to Privacy – Puttaswamy Judgment and its Implications',
    question: 'In the landmark Justice K.S. Puttaswamy v. Union of India (2017) case, the Supreme Court unanimously declared Right to Privacy as a Fundamental Right. Under which article was it located?',
    options: [
      'Article 21 (Right to Life and Personal Liberty)',
      'Article 19 (Freedom of Speech)',
      'Article 14 (Right to Equality)',
      'A new Article 21-A inserted by the Court'
    ],
    correctAnswer: 0,
    explanation: 'The 9-judge bench unanimously held that the Right to Privacy is a fundamental right protected under Article 21 of the Constitution. Privacy was also found to be woven through Articles 14, 19, and 21.',
    eliminationTip: 'Privacy under Article 21 = life and liberty; privacy as a "new" article is constitutionally impossible without formal amendment.',
    difficulty: 'Moderate', frequency: 4, tags: ['Privacy', 'Puttaswamy', 'Article 21', 'Fundamental Rights'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '2026-08-23', sourcePublisher: 'Supreme Court & Indian Express',
    bookReference: { bookName: 'Supreme Court & Indian Express', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-polity-03', subject: 'polity', topic: 'Governance & Finance',
    subTopic: '16th Finance Commission – Terms of Reference',
    question: 'The 16th Finance Commission has been constituted. Which of the following is NOT typically within the Terms of Reference of a Finance Commission?',
    options: [
      'Prescribing the rate of GST and GST exemption limits for states',
      'Recommendations on the distribution of net proceeds of taxes between Union and States',
      'Grants-in-aid to states in need of assistance',
      'Measures needed to augment the Consolidated Fund of a State'
    ],
    correctAnswer: 0,
    explanation: 'The Finance Commission deals with tax devolution, grants-in-aid, and fiscal consolidation — it does NOT deal with GST rates, which fall under the purview of the GST Council.',
    eliminationTip: 'GST Council ≠ Finance Commission. GST rates are set by the GST Council under Article 279A, not the Finance Commission.',
    difficulty: 'UPSC Standard', frequency: 5, tags: ['Finance Commission', '16th FC', 'GST', 'Fiscal Federalism'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '2026-08-23', sourcePublisher: 'Finance Ministry & PRS India',
    bookReference: { bookName: 'Finance Ministry & PRS India', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-economy-01', subject: 'economy', topic: 'Economy & Banking',
    subTopic: 'India\'s UPI – Cross-Border Payments and Global Expansion',
    question: 'India\'s Unified Payments Interface (UPI) has been expanded to multiple countries. Which of the following correctly represents the countries where UPI-based payments are currently accepted as of 2026?',
    options: [
      'Singapore, UAE, France, UK, Mauritius, Nepal, Bhutan, Sri Lanka, and several others',
      'Only SAARC nations',
      'Only ASEAN nations with a bilateral trade agreement with India',
      'UPI is only available domestically within India'
    ],
    correctAnswer: 0,
    explanation: 'As of 2026, UPI is accepted in 20+ countries including Singapore, UAE, France, UK, Mauritius, Nepal, Bhutan, Sri Lanka, Malaysia, and others — representing a major expansion of India\'s digital payment infrastructure globally.',
    eliminationTip: 'UPI\'s global acceptance has been a major diplomatic and economic push by NPCI International — it is far beyond just SAARC countries.',
    difficulty: 'Moderate', frequency: 4, tags: ['UPI', 'Digital Payments', 'NPCI', 'Economy'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'NPCI International & RBI',
    bookReference: { bookName: 'NPCI International & RBI', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-economy-02', subject: 'economy', topic: 'Economy & Industry',
    subTopic: 'PLI Scheme – Production Linked Incentive Performance',
    question: 'With respect to the Production Linked Incentive (PLI) scheme in India, which of the following statements is/are correct?\n\n1. The PLI scheme was launched in FY2020-21 initially for mobile phone manufacturing.\n2. Fourteen (14) sectors are currently covered under the PLI scheme.\n3. Incentives under PLI are linked to incremental sales from domestic manufacturing over a base year.\n\nSelect the correct answer:',
    options: ['1 and 3 only', '2 and 3 only', '1 only', '1, 2 and 3'],
    correctAnswer: 3,
    explanation: 'All three statements are correct. PLI was launched for mobile phones in 2020. It covers 14 sectors including electronics, pharmaceuticals, automobiles, food processing, textiles, and more. The incentive structure is linked to incremental production over a base year.',
    eliminationTip: 'All three facts about PLI are accurate — this is a "1, 2, and 3" type answer which UPSC uses frequently to test comprehensive recall.',
    difficulty: 'Moderate', frequency: 5, tags: ['PLI Scheme', 'Manufacturing', 'Make in India', 'Economy'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '2026-08-23', sourcePublisher: 'DPIIT & PIB',
    bookReference: { bookName: 'DPIIT & PIB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-economy-03', subject: 'economy', topic: 'Economy & International Finance',
    subTopic: 'Special Drawing Rights (SDR) and IMF Quota Review',
    question: 'Regarding Special Drawing Rights (SDRs) of the IMF, which of the following is/are correct?\n\n1. SDR is an international reserve asset created by the IMF to supplement member countries\' official reserves.\n2. The SDR basket currently includes the US dollar, Euro, Chinese Renminbi, Japanese Yen, and British Pound.\n3. SDRs can be directly used by ordinary citizens for international transactions.\n\nSelect the correct answer:',
    options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'SDRs (1 and 2) are international reserve assets for member governments and central banks. Ordinary citizens cannot use SDRs directly — they can only be held and used by IMF member countries\' governments and central banks.',
    eliminationTip: 'SDRs are for governments and central banks — never for private individuals or corporations.',
    difficulty: 'UPSC Standard', frequency: 4, tags: ['SDR', 'IMF', 'International Finance', 'Economy'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '2026-08-23', sourcePublisher: 'IMF & Indian Express',
    bookReference: { bookName: 'IMF & Indian Express', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-scitech-01', subject: 'science_tech', topic: 'Science & Technology',
    subTopic: 'mRNA Vaccine Technology – India\'s Biological E. CORBEVAX',
    question: 'India\'s CORBEVAX was the first indigenously developed COVID-19 vaccine based on which technology platform?',
    options: [
      'Recombinant protein subunit (RBD of spike protein)',
      'mRNA technology similar to Pfizer-BioNTech',
      'Viral vector technology similar to Covishield',
      'Live attenuated virus'
    ],
    correctAnswer: 0,
    explanation: 'CORBEVAX by Biological E. is a recombinant protein subunit vaccine using the receptor-binding domain (RBD) of the SARS-CoV-2 spike protein. It is NOT based on mRNA or viral vector platforms.',
    eliminationTip: 'Covaxin = inactivated virus; Covishield = viral vector; CORBEVAX = protein subunit; Covovax = protein subunit (Serum). Only foreign vaccines used mRNA.',
    difficulty: 'Hard', frequency: 4, tags: ['CORBEVAX', 'Vaccine', 'Biotech', 'COVID-19'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '2026-08-23', sourcePublisher: 'Biological E. & PIB',
    bookReference: { bookName: 'Biological E. & PIB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-scitech-02', subject: 'science_tech', topic: 'Science & Technology',
    subTopic: 'Artificial Intelligence – National AI Mission (IndiaAI)',
    question: 'India\'s IndiaAI Mission was approved by the Union Cabinet in 2024. Which of the following is NOT a pillar of the IndiaAI Mission?',
    options: [
      'Creation of a National AI Regulatory Authority with statutory enforcement powers',
      'IndiaAI Compute Capacity – building AI computing infrastructure',
      'IndiaAI Datasets Platform for curated quality datasets',
      'IndiaAI Startup Financing for AI startups'
    ],
    correctAnswer: 0,
    explanation: 'The IndiaAI Mission has 7 pillars covering compute, datasets, application development, innovation, skills, startup ecosystem, and safe AI — but it does NOT include a statutory Regulatory Authority with enforcement powers. AI regulation in India is currently sector-specific.',
    eliminationTip: 'India currently lacks a standalone AI regulatory law or statutory AI authority — the government has preferred a light-touch approach.',
    difficulty: 'Hard', frequency: 4, tags: ['IndiaAI', 'Artificial Intelligence', 'MeitY', 'Policy'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'MeitY & PIB',
    bookReference: { bookName: 'MeitY & PIB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-scitech-03', subject: 'science_tech', topic: 'Science & Environment',
    subTopic: 'India\'s Commitment to Net Zero – 2070 Target',
    question: 'India has committed to achieving Net Zero carbon emissions by 2070. Which of the following is NOT part of India\'s updated Nationally Determined Contribution (NDC) submitted to the UNFCCC?',
    options: [
      'Achieving 1,000 GW of renewable energy capacity by 2030',
      'Reducing the emissions intensity of GDP by 45% by 2030 from 2005 levels',
      'Achieving 50% cumulative electric power installed capacity from non-fossil fuel sources by 2030',
      'Creating an additional carbon sink of 2.5 to 3 billion tonnes of CO2 equivalent through forests by 2030'
    ],
    correctAnswer: 0,
    explanation: 'India\'s NDC targets 500 GW of non-fossil energy capacity by 2030, not 1,000 GW. The other three (45% emissions intensity reduction, 50% non-fossil power, 2.5-3 billion tonne forest carbon sink) are correct NDC commitments.',
    eliminationTip: '500 GW renewable target by 2030 — not 1,000 GW. This is a commonly misquoted figure.',
    difficulty: 'UPSC Standard', frequency: 5, tags: ['Net Zero', 'NDC', 'Climate', 'UNFCCC'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '2026-08-23', sourcePublisher: 'MoEFCC & UNFCCC',
    bookReference: { bookName: 'MoEFCC & UNFCCC', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-ir-01', subject: 'international', topic: 'International Relations',
    subTopic: 'Quad – Scope and Recent Summits',
    question: 'The Quadrilateral Security Dialogue (Quad) involves India, USA, Australia, and Japan. Which of the following is/are Quad\'s agreed focus areas?\n\n1. Free and Open Indo-Pacific (FOIP) and maritime security\n2. COVID-19 vaccine distribution and global health security\n3. Critical and emerging technologies including semiconductors and 5G\n\nSelect the correct answer:',
    options: ['1, 2 and 3', '1 and 3 only', '2 and 3 only', '1 only'],
    correctAnswer: 0,
    explanation: 'All three are Quad focus areas. Quad has working groups on COVID vaccines (COVAX support), critical technology (semiconductors, 5G/6G), climate, and Indo-Pacific security.',
    eliminationTip: 'Quad is NOT a military alliance — it covers diplomacy, technology, health, and regional connectivity broadly.',
    difficulty: 'Moderate', frequency: 4, tags: ['Quad', 'FOIP', 'Indo-Pacific', 'Multilateral'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '2026-08-23', sourcePublisher: 'MEA India & White House',
    bookReference: { bookName: 'MEA India & White House', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-ir-02', subject: 'international', topic: 'International Relations',
    subTopic: 'India-Africa Forum Summit (IAFS) and Africa Cooperation',
    question: 'Regarding India\'s engagement with Africa through the India-Africa Forum Summit (IAFS), which statement is correct?',
    options: [
      'India has extended over $12 billion in Lines of Credit to African countries since IAFS-I in 2008',
      'IAFS is a bilateral summit held only between India and South Africa',
      'IAFS exclusively focuses on agricultural cooperation, with no technology or defence cooperation',
      'The African Union is not represented at IAFS summits'
    ],
    correctAnswer: 0,
    explanation: 'India has committed and extended over $12 billion in Lines of Credit to African countries across the three IAF Summits (2008, 2011, 2015). IAFS is a multilateral forum covering technology, defence, health, agriculture, and more.',
    eliminationTip: 'IAFS is a pan-African forum, not bilateral. Lines of Credit are India\'s primary financing tool for Africa.',
    difficulty: 'Moderate', frequency: 3, tags: ['IAFS', 'Africa', 'India Foreign Policy', 'LoC'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'MEA India & PIB',
    bookReference: { bookName: 'MEA India & PIB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-ir-03', subject: 'international', topic: 'International Relations',
    subTopic: 'Global Minimum Tax – OECD Pillar Two',
    question: 'The OECD\'s "Pillar Two" framework for a Global Minimum Tax (GMT) sets a minimum effective corporate tax rate of ___% for large multinational enterprises with turnover above €750 million.',
    options: ['15%', '12%', '20%', '10%'],
    correctAnswer: 0,
    explanation: 'OECD Pillar Two sets a Global Minimum Tax of 15% for MNEs with global revenue above €750 million annually. This aims to prevent a "race to the bottom" on corporate tax rates.',
    eliminationTip: 'The OECD GMT rate is 15% — a frequently tested international economics figure.',
    difficulty: 'Moderate', frequency: 4, tags: ['OECD', 'Global Minimum Tax', 'Pillar Two', 'Taxation'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '2026-08-23', sourcePublisher: 'OECD & Finance Ministry',
    bookReference: { bookName: 'OECD & Finance Ministry', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-env-01', subject: 'environment', topic: 'Environment & Policy',
    subTopic: 'Biosphere Reserves – UNESCO Man and Biosphere Programme',
    question: 'India has 18 Biosphere Reserves, of which 12 are part of the UNESCO World Network of Biosphere Reserves. Which of the following is the most recently added Indian Biosphere Reserve to the UNESCO Network?',
    options: [
      'Panna Biosphere Reserve (Madhya Pradesh)',
      'Gulf of Mannar (Tamil Nadu)',
      'Seshachalam Hills (Andhra Pradesh)',
      'Cold Desert (Himachal Pradesh)'
    ],
    correctAnswer: 0,
    explanation: 'Panna Biosphere Reserve in Madhya Pradesh was the most recently added Indian biosphere reserve to the UNESCO World Network (2020). India\'s UNESCO biosphere reserves include Nilgiri, Gulf of Mannar, Sundarbans, Nanda Devi, Pachmarhi, Simlipal, Nokrek, Great Nicobar, Achanakmar-Amarkantak, Agasthyamalai, Khangchendzonga, Panna.',
    eliminationTip: 'Panna (MP) = most recent UNESCO recognition (2020). Memorize the 12 UNESCO-listed BRs.',
    difficulty: 'Hard', frequency: 5, tags: ['Biosphere Reserve', 'UNESCO', 'Panna', 'Biodiversity'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '2026-08-23', sourcePublisher: 'MoEFCC & UNESCO',
    bookReference: { bookName: 'MoEFCC & UNESCO', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-env-02', subject: 'environment', topic: 'Environment & Pollution',
    subTopic: 'National Clean Air Programme (NCAP) – PM2.5 Targets',
    question: 'India\'s National Clean Air Programme (NCAP) was launched in 2019 with a specific particulate matter reduction target. The revised NCAP target (2022) aims to achieve a ___% reduction in PM2.5 and PM10 concentrations from 2017 levels by 2026.',
    options: ['40%', '20–30%', '50%', '10%'],
    correctAnswer: 0,
    explanation: 'The revised NCAP target (2022) set an enhanced goal of 40% reduction in PM2.5 and PM10 concentrations from 2017 baseline by 2026 (revised from the original 20-30% target in 2019).',
    eliminationTip: 'Original NCAP (2019) target was 20-30%; Revised NCAP (2022) enhanced it to 40% by 2026.',
    difficulty: 'Hard', frequency: 4, tags: ['NCAP', 'Air Pollution', 'PM2.5', 'Environment'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '2026-08-23', sourcePublisher: 'MoEFCC & CPCB',
    bookReference: { bookName: 'MoEFCC & CPCB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-env-03', subject: 'environment', topic: 'Environment & Ecology',
    subTopic: 'Western Ghats Biodiversity – Kasturirangan Report',
    question: 'The Kasturirangan Committee report on Western Ghats defined an "Ecologically Sensitive Area (ESA)". Which of the following statements correctly describes the report\'s key recommendations?',
    options: [
      'About 37% of the Western Ghats should be declared as ESA with restrictions on mining, quarrying, and thermal power',
      'The entire Western Ghats region (100%) should be declared as National Parks',
      'Only 10% of Western Ghats requires legal protection, with the rest open for development',
      'All of Western Ghats should be declared as Tiger Reserves'
    ],
    correctAnswer: 0,
    explanation: 'The Kasturirangan Committee (2013) recommended that 37% of the Western Ghats (about 59,940 sq km) be declared as Ecologically Sensitive Area with a ban on mining, quarrying, and large thermal power projects. This was reduced from the earlier Gadgil Committee\'s recommendation of 64%.',
    eliminationTip: 'Gadgil = 64% ESA (too strict, not accepted); Kasturirangan = 37% ESA (currently under implementation).',
    difficulty: 'UPSC Standard', frequency: 5, tags: ['Western Ghats', 'Kasturirangan', 'ESA', 'Biodiversity'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'MoEFCC & Down to Earth',
    bookReference: { bookName: 'MoEFCC & Down to Earth', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-history-01', subject: 'history', topic: 'History & Modern India',
    subTopic: 'Simon Commission and its Boycott',
    question: 'The Simon Commission (1928) was boycotted by all major Indian political parties. Which of the following was the primary reason for the boycott?',
    options: [
      'The Commission had no Indian member and its terms of reference excluded self-government as an option',
      'The Commission was chaired by Mountbatten, who was seen as pro-Pakistan',
      'The Congress Party had already passed the Purna Swaraj resolution demanding complete independence',
      'The Commission was established without consulting the Indian National Congress leadership'
    ],
    correctAnswer: 0,
    explanation: 'The Simon Commission was boycotted because it had NO Indian members — all 7 members were British MPs. Indians were excluded from deciding India\'s constitutional future. The boycott was marked by demonstrations and "Simon Go Back" slogans.',
    eliminationTip: 'Lal Bal Pal-era: Lala Lajpat Rai died of police lathi charge injuries sustained during Simon Commission protests in Lahore.',
    difficulty: 'Moderate', frequency: 4, tags: ['Simon Commission', 'Boycott', 'Freedom Movement', 'Constitutional History'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '2026-08-23', sourcePublisher: 'NCERT & Bipin Chandra',
    bookReference: { bookName: 'NCERT & Bipin Chandra', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-history-02', subject: 'history', topic: 'History & Ancient India',
    subTopic: 'Chola Administration and Naval Power',
    question: 'The Chola Empire is particularly notable for which of the following achievements in medieval Indian history?',
    options: [
      'The first recorded naval expedition to South-East Asia, establishing control over the Malay Peninsula and Sri Lanka',
      'Introduction of the caste system into South India from North India',
      'Construction of the Kailash Temple at Ellora as a monolithic rock-cut structure',
      'Promulgation of the first written legal code in South India under Kulottunga I'
    ],
    correctAnswer: 0,
    explanation: 'The Chola dynasty under Rajendra Chola I (1025 CE) is famous for the first recorded overseas naval expedition in Indian history, extending Chola influence to the Malay Peninsula, Sumatra, and Sri Lanka. The Kailash Temple at Ellora is a Rashtrakuta achievement.',
    eliminationTip: 'Rajendra Chola I = "Gangaikonda Cholan" who also diverted Ganga waters to fill his capital lake.',
    difficulty: 'UPSC Standard', frequency: 4, tags: ['Chola', 'Naval Power', 'Medieval India', 'Rajendra Chola'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '2026-08-23', sourcePublisher: 'NCERT & Tamil Nadu textbooks',
    bookReference: { bookName: 'NCERT & Tamil Nadu textbooks', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-23-history-03', subject: 'history', topic: 'History & Art',
    subTopic: 'Geographical Indications (GI) Tags – Indian Crafts',
    question: 'Which of the following Indian crafts/products has the HIGHEST number of GI registrations as of 2026?',
    options: [
      'Darjeeling Tea (West Bengal)',
      'Kanchipuram Silk (Tamil Nadu)',
      'Banarasi Brocade (Uttar Pradesh)',
      'Madhubani Paintings (Bihar)'
    ],
    correctAnswer: 0,
    explanation: 'Darjeeling Tea (West Bengal) was the very first GI tagged product in India (2004-05). While all listed products have GI registrations, Darjeeling tea remains the most internationally recognized and pioneering GI product from India.',
    eliminationTip: 'Darjeeling Tea = India\'s first GI tag (2004). Remember this as the landmark first.',
    difficulty: 'Moderate', frequency: 3, tags: ['GI Tag', 'Darjeeling Tea', 'Intellectual Property', 'Heritage'],
    generatedAt: '23 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'CGPDTM & PIB',
    bookReference: { bookName: 'CGPDTM & PIB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
];

// ── Aug 24 – Latest Edition (Today's Questions) ─────────────────────
export const dailyCA_2026_08_24_All: Question[] = [
  // Polity
  {
    id: 'ca-2026-08-24-polity-01', subject: 'polity', topic: 'Polity & Parliament',
    subTopic: 'Delimitation Commission and Delimitation Exercise 2026',
    question: 'Regarding the Delimitation Commission in India, which of the following statements is/are correct?\n\n1. The Delimitation Commission is set up under a Parliamentary Act and its orders have the force of law and cannot be challenged in any Court.\n2. The seats are delimited based on the data from the last preceding Census.\n3. The delimitation exercise freezes the number of Lok Sabha seats as per the 1971 Census till 2026.\n\nSelect the correct answer:',
    options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. The 42nd Amendment (1976) froze Lok Sabha seats based on the 1971 Census until 2001, later extended to 2026 by the 84th Amendment (2001). The Delimitation Commission Act 1972 makes delimitation orders non-justiciable.',
    eliminationTip: 'Statement 3 is partially wrong: the freeze was based on 1971 Census, but the freeze extension was till "2026 Census" (after 2026 Census), not just 2026.',
    difficulty: 'Hard', frequency: 5, tags: ['Delimitation', 'Lok Sabha', 'Census', 'Constitution'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '2026-08-24', sourcePublisher: 'PRS India & M. Laxmikanth',
    bookReference: { bookName: 'PRS India & M. Laxmikanth', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-24-polity-02', subject: 'polity', topic: 'Polity & Local Bodies',
    subTopic: 'Panchayati Raj Institutions – 73rd Constitutional Amendment',
    question: 'The 73rd Constitutional Amendment Act (1992) made Panchayati Raj a constitutional mandate. Which of the following is/are correctly stated?\n\n1. The 11th Schedule contains 29 subjects which can be devolved to Panchayats by State Governments.\n2. Reservation for women in Panchayats is fixed at one-third of seats, which can be increased by State legislation.\n3. Gram Sabha is mandatorily constituted in every Gram Panchayat and its functions are prescribed in the Constitution itself.\n\nSelect the correct answer:',
    options: ['1 and 2 only', '2 and 3 only', '1 only', '1, 2 and 3'],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct. The 11th Schedule has 29 subjects. Women\'s reservation is minimum 1/3rd (States like Rajasthan have increased it to 50%). Statement 3 is wrong — Gram Sabha composition and powers are NOT prescribed in the Constitution; they are left to State legislatures.',
    eliminationTip: 'Gram Sabha functions = State subject, not constitutionally mandated. The 73rd Amendment only provides for its existence.',
    difficulty: 'UPSC Standard', frequency: 5, tags: ['Panchayati Raj', '73rd Amendment', '11th Schedule', 'Local Bodies'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '2026-08-24', sourcePublisher: 'M. Laxmikanth & PIB',
    bookReference: { bookName: 'M. Laxmikanth & PIB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-24-polity-03', subject: 'polity', topic: 'Polity & Judiciary',
    subTopic: 'National Green Tribunal – Jurisdiction and Powers',
    question: 'Which of the following statements about the National Green Tribunal (NGT) is incorrect?',
    options: [
      'The NGT has jurisdiction over all environmental disputes including those related to nuclear energy and atomic radiation',
      'The NGT can provide relief and compensation for damage to persons and property from environmental violations',
      'NGT decisions can be appealed to the Supreme Court of India',
      'The NGT was established under the National Green Tribunal Act, 2010'
    ],
    correctAnswer: 0,
    explanation: 'NGT does NOT have jurisdiction over matters related to atomic energy, atomic radiation, and nuclear wastes — these fall under the jurisdiction of courts under the Atomic Energy Act. All other statements are correct.',
    eliminationTip: 'NGT exclusion: atomic energy/nuclear radiation are specifically excluded from NGT\'s jurisdiction.',
    difficulty: 'UPSC Standard', frequency: 4, tags: ['NGT', 'Environmental Law', 'Judiciary', 'Green Tribunal'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'MoEFCC & NGT Orders',
    bookReference: { bookName: 'MoEFCC & NGT Orders', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  // Economy
  {
    id: 'ca-2026-08-24-economy-01', subject: 'economy', topic: 'Economy & Infrastructure',
    subTopic: 'PM GatiShakti National Master Plan',
    question: 'PM GatiShakti National Master Plan was launched for multi-modal infrastructure development. Which of the following correctly describes its key feature?',
    options: [
      'It is a digital platform integrating infrastructure planning data of 16 Ministries to ensure coordinated and holistic infrastructure planning',
      'It is a scheme providing direct financial grants to State governments for highway construction',
      'It replaces the National Infrastructure Pipeline (NIP) completely',
      'It focuses exclusively on digital and IT infrastructure development'
    ],
    correctAnswer: 0,
    explanation: 'PM GatiShakti is a digital platform that integrates data from 16 Central Ministries (roads, railways, ports, airports, waterways, logistics, etc.) to ensure holistic, coordinated, and citizen-centric infrastructure planning. It supplements (not replaces) NIP.',
    eliminationTip: 'GatiShakti = coordination + data integration platform, not a standalone funding scheme.',
    difficulty: 'Moderate', frequency: 4, tags: ['PM GatiShakti', 'Infrastructure', 'NIP', 'Economy'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '2026-08-24', sourcePublisher: 'DPIIT & PIB',
    bookReference: { bookName: 'DPIIT & PIB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-24-economy-02', subject: 'economy', topic: 'Economy & Taxation',
    subTopic: 'Angel Tax Abolition – Union Budget 2024-25',
    question: 'The Union Budget 2024-25 abolished the "Angel Tax" (Section 56(2)(viib) of the Income Tax Act). Angel Tax was originally introduced in which year and for what primary purpose?',
    options: [
      '2012; to prevent money laundering through inflated share premium investments in unlisted companies',
      '2016; to tax foreign direct investment in startups',
      '2019; to levy tax on all startup valuations above ₹1 crore',
      '2008; as part of the anti-terror financing legal framework'
    ],
    correctAnswer: 0,
    explanation: 'Angel Tax was introduced in 2012 (Finance Act 2012) under Section 56(2)(viib) to curb money laundering through over-valuation of share premiums in unlisted companies. The Union Budget 2024-25 abolished it to promote startup investment.',
    eliminationTip: '2012 introduction, 2024 abolition — a 12-year controversial tax finally removed to boost startup ecosystem.',
    difficulty: 'Hard', frequency: 4, tags: ['Angel Tax', 'Startups', 'Budget 2024', 'Taxation'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '2026-08-24', sourcePublisher: 'Finance Ministry & Budget 2024-25',
    bookReference: { bookName: 'Finance Ministry & Budget 2024-25', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-24-economy-03', subject: 'economy', topic: 'Economy & Social',
    subTopic: 'Pradhan Mantri Jan Dhan Yojana – Financial Inclusion Milestones',
    question: 'As of 2024, PMJDY (Pradhan Mantri Jan Dhan Yojana) crossed 50 crore bank accounts. Which of the following is NOT a feature of PMJDY accounts?',
    options: [
      'Guaranteed minimum interest rate of 6% per annum on all balances',
      'Accident insurance cover of ₹2 lakh for RuPay card holders',
      'Overdraft facility of up to ₹10,000 in qualifying accounts',
      'Life insurance cover of ₹30,000 available to eligible beneficiaries'
    ],
    correctAnswer: 0,
    explanation: 'PMJDY accounts do not guarantee a 6% interest rate — they earn standard savings bank interest (typically 2.7-4% p.a. as per bank policies). The accident cover, OD facility, and life insurance are actual PMJDY features.',
    eliminationTip: 'No guaranteed fixed return in PMJDY — interest rates vary with market conditions like any savings account.',
    difficulty: 'Moderate', frequency: 4, tags: ['PMJDY', 'Financial Inclusion', 'Banking', 'Social Schemes'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'Finance Ministry & RBI',
    bookReference: { bookName: 'Finance Ministry & RBI', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  // Science & Tech
  {
    id: 'ca-2026-08-24-scitech-01', subject: 'science_tech', topic: 'Science & Technology',
    subTopic: 'Chandrayaan-3 – One Year Anniversary and Findings',
    question: 'The Chandrayaan-3 Pragyan Rover conducted in-situ elemental analysis on the lunar surface near the south pole. Which element\'s presence was confirmed for the first time in-situ on the lunar surface by Chandrayaan-3\'s Laser-Induced Breakdown Spectroscopy (LIBS)?',
    options: ['Sulphur (S)', 'Helium-3 (He-3)', 'Uranium (U)', 'Platinum (Pt)'],
    correctAnswer: 0,
    explanation: 'Chandrayaan-3\'s Pragyan Rover confirmed the in-situ presence of Sulphur (S) on the lunar south pole region for the first time using LIBS. Other elements detected include Aluminium, Iron, Calcium, Chromium, Titanium, Manganese, Silicon, and Oxygen.',
    eliminationTip: 'Sulphur detection was the headline discovery — not Helium-3 (which was theorized but not yet confirmed in-situ by Chandrayaan-3).',
    difficulty: 'UPSC Standard', frequency: 5, tags: ['Chandrayaan-3', 'Moon', 'ISRO', 'LIBS', 'Sulphur'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '2026-08-24', sourcePublisher: 'ISRO & Nature',
    bookReference: { bookName: 'ISRO & Nature', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-24-scitech-02', subject: 'science_tech', topic: 'Biotechnology & Health',
    subTopic: 'One Health Approach – Zoonotic Disease Prevention',
    question: 'The "One Health" framework endorsed by WHO, FAO, and UNEP recognizes that human health, animal health, and ecosystem health are interconnected. Which of the following is NOT a disease considered under the One Health framework?',
    options: [
      'Type 2 Diabetes Mellitus',
      'Ebola Virus Disease',
      'Nipah Virus Infection',
      'Avian Influenza (H5N1)'
    ],
    correctAnswer: 0,
    explanation: 'One Health focuses on zoonotic diseases (transmitted between animals and humans), antimicrobial resistance, and food safety — conditions that cross the human-animal-environment interface. Type 2 Diabetes is a non-communicable lifestyle disease, NOT a zoonosis.',
    eliminationTip: 'One Health = zoonoses, AMR, food safety. Non-communicable diseases like diabetes are NOT One Health scope.',
    difficulty: 'Moderate', frequency: 4, tags: ['One Health', 'Zoonosis', 'WHO', 'Public Health'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '2026-08-24', sourcePublisher: 'WHO & MoH India',
    bookReference: { bookName: 'WHO & MoH India', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-24-scitech-03', subject: 'science_tech', topic: 'Science & Defence',
    subTopic: 'DRDO Hypersonic Technology Demonstrator Vehicle (HSTDV)',
    question: 'India successfully tested the Hypersonic Technology Demonstrator Vehicle (HSTDV). Which of the following correctly describes hypersonic vehicles in the context of HSTDV?',
    options: [
      'It uses an air-breathing scramjet engine that sustains hypersonic speeds (Mach 6+) using atmospheric oxygen',
      'It is a ballistic missile with multiple independently targetable re-entry vehicles (MIRVs)',
      'It is designed exclusively for civilian space launches at sub-orbital speeds',
      'It uses ramjet technology that requires an external oxidizer for combustion'
    ],
    correctAnswer: 0,
    explanation: 'The HSTDV uses a scramjet (supersonic combustion ramjet) engine that operates at hypersonic speeds (Mach 6 and above) using atmospheric oxygen as the oxidizer — eliminating the need to carry oxidizer onboard. This makes it far lighter than conventional rockets.',
    eliminationTip: 'Scramjet = air-breathing = no oxidizer carried onboard. Key: scramjet is faster than ramjet but both use atmospheric oxygen.',
    difficulty: 'Hard', frequency: 4, tags: ['HSTDV', 'Scramjet', 'DRDO', 'Hypersonic', 'Defence'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'DRDO & PIB',
    bookReference: { bookName: 'DRDO & PIB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  // International Relations
  {
    id: 'ca-2026-08-24-ir-01', subject: 'international', topic: 'International Relations',
    subTopic: 'BRICS Expansion 2024 – New Members',
    question: 'BRICS expanded in January 2024 with new members. Which of the following is the correct list of countries that joined BRICS in 2024?',
    options: [
      'Egypt, Ethiopia, Iran, Saudi Arabia, UAE',
      'Indonesia, Argentina, Turkey, Mexico, Nigeria',
      'Algeria, Bangladesh, Kazakhstan, Vietnam, Thailand',
      'Pakistan, Malaysia, Ecuador, Cuba, Venezuela'
    ],
    correctAnswer: 0,
    explanation: 'Egypt, Ethiopia, Iran, Saudi Arabia, and UAE joined BRICS in January 2024 (Argentina declined its invitation). This expansion brought BRICS membership to 10 countries, significantly increasing its representation of the Global South.',
    eliminationTip: 'Memorize new BRICS members: Egypt + Ethiopia + Iran + Saudi Arabia + UAE (5 new in 2024). Argentina was invited but declined.',
    difficulty: 'UPSC Standard', frequency: 5, tags: ['BRICS', 'Expansion', 'Global South', 'Multilateral'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '2026-08-24', sourcePublisher: 'MEA India & BRICS Secretariat',
    bookReference: { bookName: 'MEA India & BRICS Secretariat', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-24-ir-02', subject: 'international', topic: 'International Relations',
    subTopic: 'Arctic Council – India\'s Observer Status',
    question: 'India has been an Observer in the Arctic Council since 2013. Which of the following is correct regarding India\'s Arctic Policy?',
    options: [
      'India\'s Arctic Policy (2022) focuses on scientific research, climate monitoring, sustainable shipping, and mineral resource exploration',
      'India is a permanent member of the Arctic Council with voting rights',
      'The Arctic Policy 2022 declares the Arctic as India\'s exclusive economic zone',
      'India\'s only interest in the Arctic is military strategic positioning'
    ],
    correctAnswer: 0,
    explanation: 'India\'s Arctic Policy (2022), "India and the Arctic: Building a Partnership for Sustainable Development," focuses on scientific research and cooperation, climate and environmental protection, economic and human development, transport and connectivity, and governance.',
    eliminationTip: 'Observer = no voting rights. India\'s Arctic Policy is collaborative and multi-dimensional, not militaristic.',
    difficulty: 'Hard', frequency: 4, tags: ['Arctic Council', 'Arctic Policy', 'India Foreign Policy'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '2026-08-24', sourcePublisher: 'MEA India & MoES',
    bookReference: { bookName: 'MEA India & MoES', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-24-ir-03', subject: 'international', topic: 'International Relations',
    subTopic: 'G20 India Presidency 2023 – Key Outcomes',
    question: 'India\'s G20 Presidency in 2023 was themed "Vasudhaiva Kutumbakam – One Earth, One Family, One Future." Which of the following was a key outcome of the G20 New Delhi Declaration 2023?',
    options: [
      'The African Union (AU) was permanently admitted as a full member of the G20',
      'G20 agreed to impose sanctions on countries that violate the Paris Agreement commitments',
      'India was designated as the permanent secretariat for G20',
      'The G20 adopted a universal carbon tax framework for all members'
    ],
    correctAnswer: 0,
    explanation: 'The admission of the African Union as a permanent G20 member was the landmark outcome of India\'s G20 Presidency (2023). This elevated African representation in global economic governance.',
    eliminationTip: 'African Union full G20 membership = India\'s landmark diplomatic achievement as G20 President.',
    difficulty: 'Moderate', frequency: 5, tags: ['G20', 'African Union', 'India Presidency', 'Multilateral'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'MEA India & G20.org',
    bookReference: { bookName: 'MEA India & G20.org', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  // Environment
  {
    id: 'ca-2026-08-24-env-01', subject: 'environment', topic: 'Environment & Climate',
    subTopic: 'India\'s Renewable Energy Targets – 2030 and Beyond',
    question: 'India has committed to achieving 500 GW of non-fossil fuel energy capacity by 2030. As of 2024, what is India\'s total installed renewable energy capacity (excluding large hydro)?',
    options: [
      'Approximately 200 GW',
      'Approximately 50 GW',
      'Approximately 350 GW',
      'Approximately 500 GW (already achieved)'
    ],
    correctAnswer: 0,
    explanation: 'As of early 2024, India\'s total installed renewable energy capacity (solar, wind, biomass, small hydro) crossed approximately 200 GW, making India the 4th largest renewable energy country globally. The 500 GW target by 2030 represents significant remaining growth.',
    eliminationTip: '~200 GW in 2024, target 500 GW by 2030. India is on track but still has ~300 GW to add in 6 years.',
    difficulty: 'Hard', frequency: 5, tags: ['Renewable Energy', '500 GW', 'Solar', 'Climate'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '2026-08-24', sourcePublisher: 'MNRE & IEA',
    bookReference: { bookName: 'MNRE & IEA', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-24-env-02', subject: 'environment', topic: 'Environment & Rivers',
    subTopic: 'Interlinking of Rivers – Ken-Betwa Link Project',
    question: 'The Ken-Betwa River Interlinking Project is India\'s first major river interlinking project. Which of the following is a significant environmental concern associated with this project?',
    options: [
      'The project involves submergence of a part of the Panna Tiger Reserve, a critical wildlife habitat',
      'The project transfers water from the Ganga to the Indus basin, violating the Indus Waters Treaty',
      'The project will reduce the flow of the Kaveri river downstream in Tamil Nadu',
      'The project is funded exclusively by the Asian Development Bank with sovereignty conditions'
    ],
    correctAnswer: 0,
    explanation: 'The Ken-Betwa Link Project requires partial submergence of the Panna Tiger Reserve in Madhya Pradesh, raising serious concerns from wildlife conservationists about tiger habitat fragmentation and loss of biodiversity.',
    eliminationTip: 'Ken-Betwa = Panna Tiger Reserve submergence controversy = the primary environmental concern.',
    difficulty: 'Moderate', frequency: 4, tags: ['Ken-Betwa', 'River Interlinking', 'Panna Tiger Reserve', 'Environment'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '2026-08-24', sourcePublisher: 'NWDA & Down to Earth',
    bookReference: { bookName: 'NWDA & Down to Earth', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-24-env-03', subject: 'environment', topic: 'Environment & Pollution',
    subTopic: 'Extended Producer Responsibility (EPR) for Plastic Waste',
    question: 'Under India\'s Plastic Waste Management Rules, which of the following correctly defines Extended Producer Responsibility (EPR)?',
    options: [
      'Manufacturers and brand owners are responsible for end-of-life management and recycling of their plastic products',
      'The Central Government takes full financial responsibility for all plastic waste management costs in municipalities',
      'EPR requires producers to pay a penalty of ₹10,000 per tonne of plastic produced',
      'EPR is only applicable to single-use plastic manufacturers, not packaging firms'
    ],
    correctAnswer: 0,
    explanation: 'Extended Producer Responsibility (EPR) places the responsibility of end-of-life collection, channelization, and recycling of plastic packaging squarely on producers, importers, and brand owners. Plastic Waste Management Rules 2022 strengthened EPR obligations.',
    eliminationTip: 'EPR = producer pays/manages, not government — this is the fundamental principle.',
    difficulty: 'Moderate', frequency: 4, tags: ['EPR', 'Plastic Waste', 'Environment', 'Circular Economy'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'MoEFCC & CPCB',
    bookReference: { bookName: 'MoEFCC & CPCB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  // History
  {
    id: 'ca-2026-08-24-history-01', subject: 'history', topic: 'History & Independence',
    subTopic: '78th Independence Day 2026 – Historical Milestones',
    question: 'India celebrated its 78th Independence Day on August 15, 2026. Which of the following statements about India\'s Independence is historically accurate?',
    options: [
      'The Indian Independence Act 1947 was enacted by the British Parliament and gave Dominion Status to both India and Pakistan',
      'India declared itself a Sovereign Democratic Republic on August 15, 1947 itself',
      'The Constituent Assembly of India began drafting the Constitution only after Independence in 1948',
      'Lord Wavell was the last Viceroy of India who administered the transfer of power'
    ],
    correctAnswer: 0,
    explanation: 'The Indian Independence Act 1947 was a British Parliament Act that partitioned British India into India and Pakistan as two self-governing Dominions. India became a Republic only on January 26, 1950 when the Constitution came into force. Lord Mountbatten (not Wavell) was the last Viceroy.',
    eliminationTip: 'August 15, 1947 = Dominion status; January 26, 1950 = Republic. The Constituent Assembly began work in December 1946 (before independence).',
    difficulty: 'Moderate', frequency: 4, tags: ['Independence', 'Indian Independence Act', 'Dominion Status', 'History'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '2026-08-24', sourcePublisher: 'NCERT & Bipin Chandra',
    bookReference: { bookName: 'NCERT & Bipin Chandra', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-24-history-02', subject: 'history', topic: 'History & Art Culture',
    subTopic: 'Natya Shastra and Classical Dance Forms of India',
    question: 'The Natyashastra by Bharata Muni is a foundational text for Indian classical arts. Which of the following dance forms is NOT classified as a Sangeet Natak Akademi-recognized classical dance form of India?',
    options: [
      'Garba (Gujarat)',
      'Bharatanatyam (Tamil Nadu)',
      'Mohiniyattam (Kerala)',
      'Sattriya (Assam)'
    ],
    correctAnswer: 0,
    explanation: 'Garba is a traditional folk/devotional dance of Gujarat and is NOT a Sangeet Natak Akademi-recognized classical dance. The 8 classical forms are: Bharatanatyam, Kathak, Kathakali, Kuchipudi, Odissi, Manipuri, Mohiniyattam, and Sattriya.',
    eliminationTip: 'The 8 classical Indian dance forms: BK³OM²S — Bharatanatyam, Kathak, Kathakali, Kuchipudi, Odissi, Manipuri, Mohiniyattam, Sattriya.',
    difficulty: 'Moderate', frequency: 4, tags: ['Classical Dance', 'Natyashastra', 'Art Culture', 'Garba'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '2026-08-24', sourcePublisher: 'Sangeet Natak Akademi & PIB',
    bookReference: { bookName: 'Sangeet Natak Akademi & PIB', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
  {
    id: 'ca-2026-08-24-history-03', subject: 'history', topic: 'History & Philosophy',
    subTopic: 'Bhakti Movement – Key Saints and Social Reform',
    question: 'The Bhakti Movement made significant contributions to social reform in medieval India. Which of the following pairs of saint-region is INCORRECTLY matched?',
    options: [
      'Chaitanya Mahaprabhu – Maharashtra',
      'Mirabai – Rajasthan',
      'Kabir – Varanasi (Uttar Pradesh)',
      'Tukaram – Maharashtra'
    ],
    correctAnswer: 0,
    explanation: 'Chaitanya Mahaprabhu was born in Nabadwip (present-day West Bengal) and is associated with Bengal/Odisha and the Vaishnava Bhakti tradition of devotion to Krishna, not Maharashtra. Maharashtra\'s Bhakti saints include Tukaram, Namdev, Eknath, and Ramdas.',
    eliminationTip: 'Chaitanya = Bengal/Odisha (not Maharashtra). Tukaram, Namdev, Ramdas = Maharashtra\'s Bhakti saints.',
    difficulty: 'Moderate', frequency: 4, tags: ['Bhakti Movement', 'Chaitanya', 'Medieval India', 'Social Reform'],
    generatedAt: '24 Aug 2026, 06:00 AM IST', editionDate: '___', sourcePublisher: 'NCERT & Romila Thapar',
    bookReference: { bookName: 'NCERT & Romila Thapar', chapter: 'Current Affairs', pageNumber: 'PIB & Editorial Sources' },
  },
];

// ====================================================================
// DATE-KEYED ARCHIVE MAP – Maps each date to its question set
// ====================================================================
const CA_DATE_ARCHIVE: Record<string, Question[]> = {
  '2026-08-20': dailyCA_2026_08_20_All,
  '2026-08-21': dailyCA_2026_08_21_All,
  '2026-08-22': dailyCA_2026_08_22_All,
  '2026-08-23': dailyCA_2026_08_23_All,
  '2026-08-24': dailyCA_2026_08_24_All,
};

// Master pool for fallback rotation (combines all known question sets)
const MASTER_POOL: Question[] = [
  ...dailyCA_2026_08_20_All,
  ...dailyCA_2026_08_21_All,
  ...dailyCA_2026_08_23_All,
  ...dailyCA_2026_08_24_All,
];

/**
 * Helper to return questions for any specific date and optional subject filter.
 * Uses the date archive if available, otherwise performs deterministic rotation from master pool.
 */
export function getCuratedQuestionsForDate(dateStr: string, subjectFilter?: string): Question[] {
  let pool: Question[];

  if (CA_DATE_ARCHIVE[dateStr]) {
    // Use exact date archive
    pool = CA_DATE_ARCHIVE[dateStr];
  } else {
    // For future dates or unlisted dates: deterministic offset rotation from master pool
    const allDates = Object.keys(CA_DATE_ARCHIVE).sort();
    const lastKnownDate = allDates[allDates.length - 1];
    const lastPool = CA_DATE_ARCHIVE[lastKnownDate];

    // Calculate day offset from last known date for deterministic rotation
    const dateParts = dateStr.split('-').map(Number);
    const lastParts = lastKnownDate.split('-').map(Number);
    const dateObj = new Date(dateParts[0], dateParts[1] - 1, dateParts[2]);
    const lastObj = new Date(lastParts[0], lastParts[1] - 1, lastParts[2]);
    const dayOffset = Math.abs(Math.floor((dateObj.getTime() - lastObj.getTime()) / (1000 * 60 * 60 * 24)));

    const formatted = formatDateDisplay(dateStr);
    // Rotate: different days get different subsets from the master pool
    const startIdx = (dayOffset * 10) % Math.max(1, MASTER_POOL.length - 60);
    const rotatedPool = [
      ...MASTER_POOL.slice(startIdx, startIdx + 60),
      ...MASTER_POOL.slice(0, Math.max(0, 60 - (MASTER_POOL.length - startIdx)))
    ].slice(0, 60);

    pool = (rotatedPool.length >= 60 ? rotatedPool : lastPool).map((q, idx) => ({
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
      science_tech: ['science', 'tech', 'quantum', 'space', 'nuclear', 'scitech'],
      international: ['international', 'ir', 'foreign', 'un', 'treaty', 'global'],
      environment: ['environment', 'ecology', 'wildlife', 'climate', 'pollution'],
      history: ['history', 'culture', 'heritage', 'art', 'archaeology', 'freedom'],
    };
    const keywords = subjectMap[subjectFilter] || [subjectFilter];
    const filtered = pool.filter(q =>
      q.subject === subjectFilter ||
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

