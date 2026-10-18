import { Question } from '@/lib/types';

export const pyq2020_gs_1: Question[] = [
  {
    id: 'pyq-2020-gs-01',
    subject: 'economy',
    topic: 'Money Supply & Banking Liquidity',
    subTopic: 'Aggregate Broad Money (M3) Components',
    question: 'If you withdraw ₹ 1,00,000 in cash from your Demand Deposit account at your bank, the immediate effect on aggregate money supply in the economy will be: (UPSC CSE Prelims 2020)',
    options: [
      'To reduce it by ₹ 1,00,000',
      'To increase it by ₹ 1,00,000',
      'To increase it by more than ₹ 1,00,000',
      'To leave it unchanged'
    ],
    correctAnswer: 3,
    explanation: 'Aggregate Broad Money (M3) in an economy is defined as:\nM3 = Currency with the Public (C) + Demand Deposits with Banks (DD) + Time Deposits with Banks (TD) + Other Deposits with RBI.\n\nWhen an individual withdraws ₹ 1,00,000 in cash from their bank demand deposit account:\n1. Demand Deposits (DD) decrease by ₹ 1,00,000.\n2. Currency with the public (C) increases by ₹ 1,00,000.\n\nSince both Currency with the public and Demand Deposits are equal constituent components of M3, the net immediate change is (+1,00,000 - 1,00,000) = 0. Therefore, the immediate aggregate money supply remains UNCHANGED.',
    bookReference: {
      bookName: 'Macroeconomics (NCERT Class XII) / Indian Economy by Ramesh Singh',
      edition: 'NCERT 2023 / 15th Edition',
      chapter: 'Chapter 3: Money and Banking (NCERT XII)',
      pageNumber: 'Page 38 – 42',
      keyExcerpt: 'M3 = Currency held by public + Demand deposits + Time deposits. A shift of funds between cash and deposits does not alter total M3 immediately.'
    },
    eliminationTip: 'Money supply simply shifted from your bank passbook (demand deposit) into your physical pocket (cash with public). Both are components of M1/M3. Total aggregate money did not evaporate or multiply.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Money Supply', 'M3', 'Banking', 'Demand Deposits']
  },
  {
    id: 'pyq-2020-gs-02',
    subject: 'polity',
    topic: 'System of Government',
    subTopic: 'Essence of Parliamentary Democracy',
    question: 'A Parliamentary System of Government is one in which: (UPSC CSE Prelims 2020)',
    options: [
      'All political parties in the Parliament are represented in the Government',
      'The Government is responsible to the Parliament and can be removed by it',
      'The Government is elected by the people and can be removed by them',
      'The Government is chosen by the Parliament but cannot be removed by it before completion of a fixed term'
    ],
    correctAnswer: 1,
    explanation: 'The defining and non-negotiable hallmark of a Parliamentary Executive (Westminster model) is collective ministerial responsibility to the popular house of the legislature.\nUnder Article 75(3) of the Indian Constitution, the Council of Ministers is collectively responsible to the Lok Sabha. The government stays in office only so long as it enjoys the confidence of the majority in Parliament, and can be removed through a Motion of No-Confidence.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 12: Parliamentary System',
      pageNumber: 'Page 12.1 – 12.3',
      keyExcerpt: 'Collective responsibility is the bedrock principle of parliamentary government. The ministers are collectively responsible to the Parliament, specifically to the Lok Sabha.'
    },
    eliminationTip: 'In a Presidential system (Option D), executive has a fixed term. Parliamentary system is defined by collective responsibility to Parliament and removal by no-confidence.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Parliamentary System', 'Collective Responsibility', 'Article 75']
  },
  {
    id: 'pyq-2020-gs-03',
    subject: 'polity',
    topic: 'Constitutional Status of Preamble',
    subTopic: 'Legal Effect and Judicial Interpretation',
    question: 'The Preamble to the Constitution of India is: (UPSC CSE Prelims 2020)',
    options: [
      'A part of the Constitution; but has no legal effect',
      'Not a part of the Constitution and has no legal effect either',
      'A part of the Constitution and has the same legal effect as any other part',
      'A part of the Constitution, but has no legal effect independently of other parts'
    ],
    correctAnswer: 3,
    explanation: 'In the historic Kesavananda Bharati case (1973), the Supreme Court ruled that:\n1. The Preamble is an integral PART of the Constitution of India.\n2. However, the Preamble is non-justiciable and non-enforceable in a court of law on its own. It is neither a source of power to the legislature nor a prohibition upon the powers of legislature.\n3. Therefore, while it is part of the Constitution, it has NO independent legal effect on its own unless read along with substantive provisions (like Articles 14, 19, 21, or Directive Principles).',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 4: Preamble of the Constitution',
      pageNumber: 'Page 4.5 – 4.7',
      keyExcerpt: 'The Preamble is a part of the Constitution (Kesavananda Bharati, 1973). However, it is non-justiciable, that is, its provisions are not enforceable in courts of law independently.'
    },
    eliminationTip: 'Is it part of the Constitution? Yes (eliminates B). Does it have independent enforceable legal effect on its own like an Article? No. Hence, it has no legal effect independently of other parts.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Preamble', 'Kesavananda Bharati', 'Justiciability']
  },
  {
    id: 'pyq-2020-gs-04',
    subject: 'economy',
    topic: 'International Monetary Fund (IMF)',
    subTopic: 'Reserve Tranche (Gold Tranche)',
    question: '“Gold Tranche” (Reserve Tranche) refers to: (UPSC CSE Prelims 2020)',
    options: [
      'A loan system of the World Bank',
      'One of the operations of a Central Bank',
      'A credit system granted by WTO to its members',
      'A credit system granted by IMF to its members'
    ],
    correctAnswer: 3,
    explanation: 'A Reserve Tranche (historically termed "Gold Tranche") is a portion of the quota allocated to each member country of the International Monetary Fund (IMF) that can be accessed without service fees or economic policy conditionality.\nMember nations pay a portion of their quota in reserve assets (originally gold and foreign exchange), which they can draw upon automatically during balance-of-payments emergencies without standard IMF loan conditions.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh',
      edition: '15th Edition',
      chapter: 'Chapter 15: International Economic Organisations',
      pageNumber: 'Page 15.6 – 15.9',
      keyExcerpt: 'Reserve Tranche Position (RTP) is the primary unconditionally accessible liquidity bracket of a member nation in the International Monetary Fund.'
    },
    eliminationTip: 'Reserve Tranche Position (RTP) is famously counted as one of India\'s official Foreign Exchange Reserves (alongside Forex, Gold, and SDRs) managed with the IMF.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'IMF', 'Reserve Tranche', 'Gold Tranche', 'Forex']
  },
  {
    id: 'pyq-2020-gs-05',
    subject: 'polity',
    topic: 'Directive Principles of State Policy (Part IV)',
    subTopic: 'Enforceability vs Fundamental Nature in Governance',
    question: 'With reference to the provisions contained in Part IV of the Constitution of India, which of the following statements is/are correct?\n1. They shall be enforceable by courts.\n2. They shall not be enforceable by any court.\n3. The principles laid down in this part are to influence the making of laws by the State.\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 only',
      '2 only',
      '1 and 3 only',
      '2 and 3 only'
    ],
    correctAnswer: 3,
    explanation: 'Article 37 of the Constitution of India explicitly governs Part IV (Directive Principles of State Policy):\n1. "The provisions contained in this Part shall NOT be enforceable by any court..." -> Statement 1 is incorrect, Statement 2 is correct.\n2. "...but the principles therein laid down are nevertheless FUNDAMENTAL in the governance of the country and it shall be the duty of the State to apply these principles in making laws." -> Statement 3 is correct.\nTherefore, statements 2 and 3 are correct.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 8: Directive Principles of State Policy',
      pageNumber: 'Page 8.1 – 8.3',
      keyExcerpt: 'Article 37 states that DPSPs shall not be enforceable by any court, but are fundamental in the governance of the country and it shall be the duty of the State to apply these principles in making laws.'
    },
    eliminationTip: 'Statements 1 and 2 are mutually contradictory. DPSPs are non-justiciable (Statement 2 is true, Statement 1 is false). Eliminates options A and C.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'DPSP', 'Article 37', 'Part IV', 'Fundamental in Governance']
  },
  {
    id: 'pyq-2020-gs-06',
    subject: 'polity',
    topic: 'Parliamentary Procedures & Powers',
    subTopic: 'Equal Powers of Rajya Sabha with Lok Sabha',
    question: 'Rajya Sabha has equal powers with Lok Sabha in: (UPSC CSE Prelims 2020)',
    options: [
      'The matter of creating new All India Services',
      'Amending the Constitution',
      'The removal of the government',
      'Making cut motions'
    ],
    correctAnswer: 1,
    explanation: 'Let us analyze the constitutional powers of Rajya Sabha vs Lok Sabha:\n- Option (a): Creation of new All India Services under Article 312 is an EXCLUSIVE power of the Rajya Sabha (initiated only by a 2/3rd majority resolution in RS).\n- Option (b): In amending the Constitution under Article 368, both Houses have EQUAL powers. A constitutional amendment bill must be passed by each House separately by a special majority; there is no provision for a joint sitting in case of deadlock.\n- Option (c): Removal of the government (No-Confidence Motion) can be moved and passed ONLY in the Lok Sabha (Article 75(3)).\n- Option (d): Cut motions and Money Bills can be introduced and voted upon ONLY in the Lok Sabha.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 22: Parliament (Position of Rajya Sabha)',
      pageNumber: 'Page 22.36 – 22.38',
      keyExcerpt: 'Rajya Sabha has equal status with Lok Sabha in introduction and passage of Constitutional Amendment Bills (Article 368).'
    },
    eliminationTip: 'A Constitutional Amendment Bill (Article 368) requires approval of both Houses separately with no joint sitting possible. Thus both houses have equal power.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Rajya Sabha', 'Lok Sabha', 'Article 368', 'Equal Powers']
  },
  {
    id: 'pyq-2020-gs-07',
    subject: 'polity',
    topic: 'Schemes & Public Expenditure',
    subTopic: 'Members of Parliament Local Area Development Scheme (MPLADS)',
    question: 'With reference to the funds under Members of Parliament Local Area Development Scheme (MPLADS), which of the following statements are correct?\n1. MPLADS funds must be used to create durable assets like physical infrastructure for health, education, etc.\n2. A specified portion of each MP’s fund must benefit SC/ST populations.\n3. MPLADS funds are sanctioned on yearly basis and the unused funds cannot be carried forward to the next year.\n4. The district authority must inspect at least 10% of all works under implementation every year.\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '3 and 4 only',
      '1, 2 and 3 only',
      '1, 2 and 4 only'
    ],
    correctAnswer: 3,
    explanation: 'Let us examine each statement under the MPLADS Guidelines issued by MoSPI:\n- Statement 1 is correct: MPLADS funds are meant for creating durable community assets (drinking water, primary education, public health, sanitation, roads).\n- Statement 2 is correct: MPs must recommend works costing at least 15% of MPLADS entitlement for areas inhabited by SC population and 7.5% for areas inhabited by ST population.\n- Statement 3 is incorrect: Funds released to the District Authority under MPLADS are NON-LAPSABLE. Unutilized funds of a year are carried forward to subsequent years.\n- Statement 4 is correct: The District Authority is responsible for overall coordination and must inspect at least 10% of the works under implementation every year.\n\nSince statement 3 is incorrect, options B and C are eliminated, leaving (d) 1, 2 and 4.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 22: Parliament (MPLADS Scheme Box)',
      pageNumber: 'Page 22.42 – 22.44',
      keyExcerpt: 'MPLADS funds are non-lapsable. Funds released in a particular year can be carried forward to subsequent years.'
    },
    eliminationTip: 'MPLADS funds are famously "non-lapsable". Once you eliminate Statement 3 (which claims unused funds cannot be carried forward), options B and C are instantly eliminated, leaving D.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'MPLADS', 'Non-Lapsable Funds', 'District Authority', 'SC/ST Funds']
  },
  {
    id: 'pyq-2020-gs-08',
    subject: 'polity',
    topic: 'Fundamental Rights & Constitutional Philosophy',
    subTopic: 'Constitutional Meaning of Liberty',
    question: 'In the context of India, which one of the following is the characteristic appropriate for citizen\'s liberty? (UPSC CSE Prelims 2020)',
    options: [
      'Protection against the tyranny of political rulers',
      'Absence of restraint',
      'Opportunity to do whatever one likes',
      'Opportunity to develop oneself fully'
    ],
    correctAnswer: 3,
    explanation: 'In political philosophy and constitutional jurisprudence:\n- Negative liberty means the absence of external obstacles or restraints.\n- Positive liberty means the capacity and opportunity to act upon one\'s fundamental human potential—the opportunity for full personal development.\n\nIn the Indian constitutional framework, the Supreme Court and standard textbooks emphasize that Liberty is not license to do whatever one likes (which would infringe upon others\' rights), nor mere absence of restraint, but the provision of conditions and opportunities that allow every individual to develop oneself fully.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth / Political Theory (NCERT Class XI)',
      edition: '7th Edition / NCERT 2023',
      chapter: 'Chapter 2: Liberty (NCERT XI Political Theory)',
      pageNumber: 'Page 18 – 24',
      keyExcerpt: 'Liberty means providing conditions for human flourishing—the opportunity to develop oneself fully, subject to reasonable restraints.'
    },
    eliminationTip: 'Liberty does not mean license to do whatever one pleases (eliminates C). While absence of restraint is a negative definition (B), positive liberty in modern constitutional democracies is the opportunity to develop one\'s potential fully.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Liberty', 'Preamble', 'Political Theory', 'NCERT']
  },
  {
    id: 'pyq-2020-gs-09',
    subject: 'polity',
    topic: 'Constitutional Law & Legal Identity',
    subTopic: 'Aadhaar Judgment (Puttaswamy 2018)',
    question: 'Consider the following statements:\n1. Aadhaar metadata cannot be stored for more than three months.\n2. State cannot enter into any contract with private corporations for sharing of Aadhaar data.\n3. Aadhaar is mandatory for obtaining insurance products.\n4. Aadhaar is mandatory for getting benefits funded out of the Consolidated Fund of India.\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2020)',
    options: [
      '1 and 4 only',
      '2 and 4 only',
      '3 only',
      '1, 2 and 3 only'
    ],
    correctAnswer: 1,
    explanation: 'In Justice K.S. Puttaswamy (Retd.) v. Union of India (2018 Aadhaar Judgment):\n- Statement 1 is incorrect: The Supreme Court struck down Regulation 27(1) which allowed archiving metadata for 5 years, and directed that authentication metadata cannot be stored beyond 6 MONTHS (not 3 months).\n- Statement 2 is correct: The Supreme Court struck down Section 57 of the Aadhaar Act to the extent that it permitted private corporate entities to seek Aadhaar data through contracts.\n- Statement 3 is incorrect: IRDAI clarified following the judgment that Aadhaar is NOT mandatory for purchasing insurance policies.\n- Statement 4 is correct: Section 7 of the Aadhaar Act was upheld; Aadhaar can be made mandatory for welfare subsidies and benefits funded out of the Consolidated Fund of India.\n\nThus, statements 2 and 4 are correct.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 7: Fundamental Rights (Right to Privacy & Aadhaar Ruling)',
      pageNumber: 'Page 7.24 – 7.26',
      keyExcerpt: 'SC struck down Section 57 prohibiting private corporate contracts for Aadhaar data, while upholding Section 7 for benefits funded by Consolidated Fund of India.'
    },
    eliminationTip: 'Can private companies like telecom or insurance force you to provide Aadhaar? No, SC struck that down! So statement 3 is clearly false (eliminates C and D). Metadata storage was capped at 6 months, not 3 months (eliminates 1). Result: B.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Aadhaar', 'Puttaswamy', 'Consolidated Fund of India', 'Section 57']
  },
  {
    id: 'pyq-2020-gs-10',
    subject: 'history',
    topic: 'Jainism and Buddhism',
    subTopic: 'Sthanakvasi Sect of Jainism',
    question: 'With reference to the religious history of India, consider the following statements:\n1. Sthanakvasi belongs to Buddhism.\n2. Lokottaravadin sect was an offshoot of Mahasanghika sect of Buddhism.\n3. The deification of Buddha by Mahasanghikas fostered the Mahayana Buddhism.\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Let us evaluate each statement:\n- Statement 1 is incorrect: Sthanakvasi is a sect of Svetambara JAINISM (founded around 1653 CE by Merchant Lavaji), not Buddhism. Sthanakvasis do not believe in idol worship and perform religious rituals in dedicated halls called \'Sthanaks\'.\n- Statement 2 is correct: The Lokottaravada school was one of the sub-sects that emerged from the Mahasanghikas after the Second Buddhist Council.\n- Statement 3 is correct: The Mahasanghikas regarded the Buddha not merely as a mortal teacher but as a supramundane (lokottara) being, a theological innovation that directly fostered the devotional and deified Bodhisattva doctrines of Mahayana Buddhism.\n\nSince statement 1 is false, options A and D are eliminated. Statements 2 and 3 are correct.',
    bookReference: {
      bookName: 'Ancient India (NCERT Class XI) by R.S. Sharma / A History of Ancient and Early Medieval India by Upinder Singh',
      edition: '2023 Edition',
      chapter: 'Chapter 12: Spread of Buddhism and Jain Sects',
      pageNumber: 'Page 134 – 140',
      keyExcerpt: 'Sthanakvasi is a reformist sect of Svetambara Jainism that opposes image worship. Mahasanghikas elevated the Buddha to supramundane status.'
    },
    eliminationTip: 'Sthanakvasi is an iconic sect of Jainism (Svetambara non-idolatrous). Knowing statement 1 is false instantly knocks out options A and D. Statements 2 and 3 are standard Buddhist school history.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Sthanakvasi', 'Jainism', 'Buddhism', 'Mahasanghika', 'Lokottaravada']
  },
  {
    id: 'pyq-2020-gs-11',
    subject: 'history',
    topic: 'Ancient India: Epigraphy & Mauryan Empire',
    subTopic: 'Ashokan Inscriptions and Relief Portrait (Ranyo Asoka)',
    question: 'Who among the following rulers advised his subjects through this inscription?\n\n“Whosoever praises his religious sect or blames other sects out of extreme devotion to his own sect, with the view of glorifying his own sect, he rather injures his own sect very severely.” (UPSC CSE Prelims 2020)',
    options: [
      'Ashoka',
      'Samudragupta',
      'Harshavardhana',
      'Krishnadeva Raya'
    ],
    correctAnswer: 0,
    explanation: 'This famous declaration on religious tolerance and mutual respect is inscribed in Major Rock Edict XII of the Mauryan Emperor ASHOKA.\nIn Major Rock Edict XII, Ashoka declares that concord (samavaya) is supreme: one should not extol one\'s own sect or disparage another\'s without reason, because overzealous disparagement of others\' faiths damages one\'s own sect severely.',
    bookReference: {
      bookName: 'An Introduction to the Study of Indian History by D.D. Kosambi / NCERT Class XII Themes in Indian History Part I',
      edition: 'NCERT 2023',
      chapter: 'Theme 2: Kings, Farmers and Towns (Inscriptions of Ashoka)',
      pageNumber: 'Page 34 – 38',
      keyExcerpt: 'Ashoka\'s Major Rock Edict XII preaches religious harmony and warns that disparaging other sects injures one\'s own sect.'
    },
    eliminationTip: 'Religious tolerance, "Dhamma", and public welfare edicts on stone rocks across the subcontinent are the hallmark of Mauryan Emperor Ashoka.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Ashoka', 'Rock Edict XII', 'Dhamma', 'Religious Harmony']
  },
  {
    id: 'pyq-2020-gs-12',
    subject: 'history',
    topic: 'Modern Indian History: British Colonial Economy',
    subTopic: 'Collapse of Indian Indigo Cultivation in the 20th Century',
    question: 'Indigo cultivation in India declined by the beginning of the 20th century because of: (UPSC CSE Prelims 2020)',
    options: [
      'peasant resistance to the oppressive conduct of planters',
      'its unprofitability in the world market because of new inventions',
      'national leaders’ opposition to the cultivation of indigo',
      'Government control over the production of indigo'
    ],
    correctAnswer: 1,
    explanation: 'By the late 19th century, German chemical laboratories (specifically Adolf von Baeyer and BASF) developed and synthesized synthetic chemical indigo dyes.\nSynthetic indigo could be produced at a fraction of the cost and in consistent quality compared to natural plant-extracted indigo. This collapse in international market demand rendered natural indigo cultivation completely unprofitable in the global market by the beginning of the 20th century.',
    bookReference: {
      bookName: 'India\'s Struggle for Independence by Bipan Chandra / NCERT Class VIII Our Pasts III',
      edition: 'Revised Edition',
      chapter: 'Chapter 14: The Champaran Satyagraha',
      pageNumber: 'Page 176 – 179',
      keyExcerpt: 'The discovery of synthetic dyes in Germany at the close of the 19th century dealt a death blow to natural indigo export, rendering cultivation unremunerative.'
    },
    eliminationTip: 'German chemical innovation invented synthetic blue dye in late 19th century, crashing global prices of natural indigo and making it unprofitable.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Indigo Cultivation', 'Synthetic Dye', 'Bipan Chandra', 'Economic History']
  },
  {
    id: 'pyq-2020-gs-13',
    subject: 'history',
    topic: 'Modern Indian History: Colonial Administrative Institutions',
    subTopic: 'Establishment of Fort William College at Calcutta',
    question: 'Wellesley established the Fort William College at Calcutta because: (UPSC CSE Prelims 2020)',
    options: [
      'he was asked by the Board of Directors at London to do so',
      'he wanted to revive interest in oriental learning in India',
      'he wanted to provide William Carey and his associates with employment',
      'he wanted to train British civilians for administrative purposes in India'
    ],
    correctAnswer: 3,
    explanation: 'Lord Wellesley (Governor-General of Bengal, 1798–1805) founded Fort William College at Calcutta in 1800 to educate and train young British civil servants recruited for the East India Company in Indian languages, customs, laws, and governance before sending them into the districts.',
    bookReference: {
      bookName: 'A Brief History of Modern India by Rajiv Ahir (Spectrum)',
      edition: '2024 Edition',
      chapter: 'Chapter 26: Development of Civil Services in India',
      pageNumber: 'Page 524 – 526',
      keyExcerpt: 'In 1800, Wellesley set up Fort William College for training of civil servants in Indian languages and customs.'
    },
    eliminationTip: 'Wellesley founded Fort William College specifically to instruct British covenanted civil servants in Indian languages and administration.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Fort William College', 'Wellesley', 'Civil Services', 'Colonial Administration']
  },
  {
    id: 'pyq-2020-gs-14',
    subject: 'history',
    topic: 'Social Reform Movements: Anti-Caste Consciousness',
    subTopic: 'Gopal Baba Walangkar and Vital-Vidhvansak',
    question: 'With reference to the history of India, “Ulgulan” or the Great Tumult is the description of which of the following events? (UPSC CSE Prelims 2020)',
    options: [
      'The Revolt of 1857',
      'The Mappila Rebellion of 1921',
      'The Indigo Revolt of 1859-60',
      'Birsa Munda’s Revolt of 1899-1900'
    ],
    correctAnswer: 3,
    explanation: 'The famous tribal uprising led by Birsa Munda in the Chotanagpur region (south of Ranchi) during 1899–1900 is historically termed the "Ulgulan" (meaning the Great Tumult).\nThe uprising was directed against the erosion of traditional tribal land systems (Khuntkatti joint landholding) by British colonial revenue policies, Christian missionaries, and dikus (non-tribal moneylenders and contractors).',
    bookReference: {
      bookName: 'India\'s Struggle for Independence by Bipan Chandra / NCERT Class VIII Our Pasts III',
      edition: 'Revised Edition',
      chapter: 'Chapter 3: Tribal and Peasant Movements',
      pageNumber: 'Page 48 – 52',
      keyExcerpt: 'The movement of the Mundas led by Birsa Munda (1899-1900) was known as the Ulgulan (the Great Tumult).'
    },
    eliminationTip: 'Birsa Munda and Munda rebellion in Chotanagpur are inextricably synonymous with the term "Ulgulan" (Great Tumult).',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Ulgulan', 'Birsa Munda', 'Tribal Revolt', 'Chotanagpur']
  },
  {
    id: 'pyq-2020-gs-15',
    subject: 'history',
    topic: 'Modern Indian History: Socio-Religious Reform & Women\'s Rights',
    subTopic: 'The Rakhmabai Case of 1884',
    question: 'A historic case that sparked intense public debate in colonial India, the ‘Rakhmabai Case of 1884’ revolved around:\n1. Age of consent\n2. Restitution of conjugal rights\n3. Women’s right to education\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'The Rakhmabai Case (Dadaji Bhikaji v. Rukhmabai, 1884–1888):\n- Rukhmabai was married as a child bride of eleven to Dadaji Bhikaji. She refused to live with him upon reaching adulthood.\n- Dadaji filed a suit for \'Restitution of Conjugal Rights\' (Statement 2 is correct).\n- The case created a nationwide legal sensation and culminated in the enactment of the Age of Consent Act, 1891, raising the age of consent from 10 to 12 years (Statement 1 is correct).\n- The trial did not center around statutory right to formal education (Statement 3 is not an issue of the legal case).\nTherefore, statements 1 and 2 are correct.',
    bookReference: {
      bookName: 'A Brief History of Modern India by Rajiv Ahir (Spectrum)',
      edition: '2024 Edition',
      chapter: 'Chapter 9: Socio-Religious Reform Movements',
      pageNumber: 'Page 224 – 226',
      keyExcerpt: 'The Rakhmabai trial brought the restitution of conjugal rights and child marriage to national debate, catalyzing the Age of Consent Act 1891.'
    },
    eliminationTip: 'Rukhmabai was sued for restitution of conjugal rights for refusing to consummate child marriage; this directly spurred the Age of Consent Act 1891. Statements 1 and 2.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Rakhmabai Case', 'Restitution of Conjugal Rights', 'Age of Consent Act']
  },
  {
    id: 'pyq-2020-gs-16',
    subject: 'history',
    topic: 'Ancient India: Archaeological Sites',
    subTopic: 'Harappan Water Reservoirs & Port Town',
    question: 'Which one of the following ancient towns is well-known for its elaborate system of water harvesting and management by building a series of dams and channelizing water into connected reservoirs? (UPSC CSE Prelims 2020/2021)',
    options: [
      'Dholavira',
      'Kalibangan',
      'Rakhigarhi',
      'Ropar'
    ],
    correctAnswer: 0,
    explanation: 'Dholavira, situated in the Khadir Bet island in the Great Rann of Kutch (Gujarat), is celebrated for its extraordinary hydraulic engineering and water management system.\nArchaeologists excavated a magnificent system of stone-cut dams built across seasonal streams (Manhar and Mansar) and an interconnected network of 16 massive cascading stone reservoirs lining the city ramparts to store freshwater in a hyper-arid saline landscape.',
    bookReference: {
      bookName: 'Themes in Indian History Part I (NCERT Class XII)',
      edition: 'NCERT 2023',
      chapter: 'Theme 1: Bricks, Beads and Bones (The Harappan Civilisation)',
      pageNumber: 'Page 8 – 11',
      keyExcerpt: 'Water reservoirs found at Dholavira may have been used to store water for agriculture and urban sustenance.'
    },
    eliminationTip: 'Dholavira in Kutch is globally renowned for its stone water reservoirs and sophisticated water harvesting.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Dholavira', 'Water Reservoirs', 'Harappan Civilization', 'Archaeology']
  },
  {
    id: 'pyq-2020-gs-17',
    subject: 'history',
    topic: 'Medieval India: Financial Instruments',
    subTopic: 'Nature and Function of Hundi',
    question: 'With reference to the history of India, the term "Hundi" referred to: (UPSC CSE Prelims 2020)',
    options: [
      'A post-settlement tax levied on merchants',
      'A diary kept by Mughal court chroniclers',
      'A bill of exchange',
      'An order issued by the king to his feudatories'
    ],
    correctAnswer: 2,
    explanation: 'In medieval and early modern Indian commercial history, a Hundi was an indigenous financial instrument functioning as a Bill of Exchange or promissory credit note.\nMerchants could deposit cash with a Sarraf (banker/money-changer) in one commercial city (e.g., Surat or Agra) and receive a Hundi, which could be redeemed for cash or transferred to pay debts in distant cities without the physical risk of transporting bullion across hazardous trade routes.',
    bookReference: {
      bookName: 'Themes in Indian History Part II (NCERT Class XII)',
      edition: 'NCERT 2023',
      chapter: 'Theme 7: An Imperial Capital: Vijayanagara & Trade',
      pageNumber: 'Page 128 – 132',
      keyExcerpt: 'Hundi is a bill of exchange payable after a period of time, widely used by merchant bankers (sarrafs).'
    },
    eliminationTip: 'Hundi is the quintessential traditional Indian banking bill of exchange / credit draft.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Hundi', 'Bill of Exchange', 'Medieval Commerce', 'Sarraf']
  },
  {
    id: 'pyq-2020-gs-18',
    subject: 'history',
    topic: 'Modern Indian History: Anti-Caste Publications',
    subTopic: 'Gopal Baba Walangkar and Vital-Vidhvansak',
    question: 'Who among the following started the first monthly journal, “Vital-Vidhvansak”, to highlight the plight of the untouchables? (UPSC CSE Prelims 2020)',
    options: [
      'Gopal Baba Walangkar',
      'Jyotirao Phule',
      'Mohandas Karamchand Gandhi',
      'Bhimrao Ramji Ambedkar'
    ],
    correctAnswer: 0,
    explanation: 'Gopal Baba Walangkar (also known as Gopal Krishna) was a pioneering social reformer from Maharashtra and an early champion of Dalit emancipation.\nIn 1888, he started the monthly journal "Vital-Vidhvansak" (Destroyer of Brahmanical / Pollution Taboos) to address the systemic social oppression of depressed classes and untouchable communities.',
    bookReference: {
      bookName: 'A Brief History of Modern India by Rajiv Ahir (Spectrum)',
      edition: '2024 Edition',
      chapter: 'Chapter 9: Socio-Religious Reform Movements',
      pageNumber: 'Page 230 – 232',
      keyExcerpt: 'Gopal Baba Walangkar started the publication of Vital-Vidhvansak in 1888 to articulate the grievances of the Mahars.'
    },
    eliminationTip: 'Phule started Satyashodhak Samaj and wrote Gulamgiri; Ambedkar founded Mooknayak and Bahishkrit Bharat. Vital-Vidhvansak was started by Gopal Baba Walangkar.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Gopal Baba Walangkar', 'Vital-Vidhvansak', 'Dalit Reform']
  },
  {
    id: 'pyq-2020-gs-19',
    subject: 'history',
    topic: 'Modern Indian History: Nationalist Movements',
    subTopic: 'Gandhi-Irwin Pact Provisions (1931)',
    question: 'With reference to the Gandhi-Irwin Pact, which of the following were agreed to by the British Government?\n1. Release of all political prisoners not convicted of violence.\n2. Right to make salt for domestic consumption along coastal areas.\n3. Return of confiscated lands not yet sold to third parties.\n4. Public inquiry into police excesses during the Civil Disobedience Movement.\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '1, 2 and 3 only',
      '3 and 4 only',
      '1, 2, 3 and 4'
    ],
    correctAnswer: 1,
    explanation: 'The Gandhi-Irwin Pact was signed on March 5, 1931:\n- Agreed points by Viceroy Irwin:\n  1. Immediate release of all political prisoners not convicted of violence (Statement 1 is correct).\n  2. Right to make salt in coastal villages for domestic consumption, not for sale (Statement 2 is correct).\n  3. Return of confiscated lands that had not yet been sold to third parties (Statement 3 is correct).\n  4. Remission of all fines not yet collected.\n- Rejected points by Irwin:\n  - Gandhi\'s demand for a public inquiry into police excesses was FLATLY REJECTED by Irwin (Statement 4 is incorrect).\n  - Commutation of death sentences of Bhagat Singh, Sukhdev, and Rajguru was also rejected.\n\nSince statement 4 is incorrect, option D is eliminated. Statements 1, 2, and 3 are correct.',
    bookReference: {
      bookName: 'India\'s Struggle for Independence by Bipan Chandra',
      edition: 'Revised Edition',
      chapter: 'Chapter 22: Civil Disobedience Movement',
      pageNumber: 'Page 282 – 286',
      keyExcerpt: 'Irwin refused two of Gandhi’s demands: a public inquiry into police excesses and the commutation of death sentences of Bhagat Singh and his comrades.'
    },
    eliminationTip: 'Did the British agree to an inquiry into their own police brutality? Absolutely not! Irwin outright refused any public inquiry into police excesses. Eliminating 4 leaves B.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Gandhi-Irwin Pact', 'Civil Disobedience', 'Police Excesses', 'Bipan Chandra']
  },
  {
    id: 'pyq-2020-gs-20',
    subject: 'history',
    topic: 'Modern Indian History: Colonial Labour Legislation',
    subTopic: 'Trade Disputes Act of 1929',
    question: 'The Trade Disputes Act of 1929 provided for: (UPSC CSE Prelims 2020)',
    options: [
      'The participation of workers in the management of industries',
      'Arbitrary powers to the management to quell industrial strikes',
      'An intervention by the British court in the event of a trade dispute',
      'A system of tribunals and a ban on strikes in public utility services'
    ],
    correctAnswer: 3,
    explanation: 'The Trade Disputes Act of 1929 was enacted by the British colonial administration:\n1. It set up a formal system of Courts of Inquiry and Boards of Conciliation for settling industrial disputes.\n2. Crucially, it made strikes without prior one-month notice in public utility services (railways, postal, water, electricity) ILLEGAL and a punishable criminal offence.\n3. It also prohibited general strikes having any political objective beyond the furtherance of a specific trade dispute.',
    bookReference: {
      bookName: 'A Brief History of Modern India by Rajiv Ahir (Spectrum)',
      edition: '2024 Edition',
      chapter: 'Chapter 28: Working Class Movement',
      pageNumber: 'Page 570 – 573',
      keyExcerpt: 'Trade Disputes Act 1929 established tribunals for conciliation and banned lightning strikes in public utility services.'
    },
    eliminationTip: 'Bhagat Singh and Batukeshwar Dutt threw bombs in the Central Legislative Assembly in 1929 specifically to protest the Trade Disputes Bill and Public Safety Bill which banned strikes in public utilities.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Trade Disputes Act 1929', 'Public Utilities', 'Labour Law', 'Strikes']
  },
  {
    id: 'pyq-2020-gs-21',
    subject: 'economy',
    topic: 'Monetary Policy & Central Banking',
    subTopic: 'Expansionary Monetary Policy Measures',
    question: 'If the RBI decides to adopt an expansionary monetary policy, which of the following would it NOT do?\n1. Cut and optimize the Statutory Liquidity Ratio (SLR)\n2. Increase the Marginal Standing Facility (MSF) rate\n3. Cut the Bank Rate and Repo Rate\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '2 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'An expansionary monetary policy (easy money policy) aims to inject liquidity and stimulate economic credit expansion:\n- Action 1: Cutting SLR releases bank funds into commercial lending. The RBI WOULD do this.\n- Action 2: Increasing the Marginal Standing Facility (MSF) rate raises borrowing costs for banks, restricting credit and liquidity (which is a contractionary measure). Therefore, the RBI would NOT increase the MSF rate.\n- Action 3: Cutting Bank Rate and Repo Rate lowers the cost of borrowing for commercial banks, encouraging borrowing and investment. The RBI WOULD do this.\n\nSince the question asks what RBI would NOT do, only statement 2 is the correct answer.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / Macroeconomics NCERT XII',
      edition: '15th Edition',
      chapter: 'Chapter 12: Banking in India (Monetary Policy Tools)',
      pageNumber: 'Page 12.14 – 12.18',
      keyExcerpt: 'In an expansionary stance, policy interest rates (Repo, MSF, Bank rate) and reserve requirements (CRR, SLR) are lowered to enhance market liquidity.'
    },
    eliminationTip: 'Read carefully: "which would it NOT do". Expansionary policy cuts interest rates. Increasing MSF rate is contractionary, so RBI will NOT do statement 2.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Expansionary Monetary Policy', 'MSF Rate', 'Repo Rate', 'SLR', 'RBI']
  },
  {
    id: 'pyq-2020-gs-22',
    subject: 'economy',
    topic: 'Macroeconomics & Corporate Debt',
    subTopic: 'Interest Coverage Ratio',
    question: 'What is the importance of the term “Interest Coverage Ratio” of a firm in India?\n1. It helps in understanding the present risk of a firm that a bank is going to give a loan to.\n2. It helps in evaluating the emerging risk of a firm.\n3. The higher a borrowing firm’s level of Interest Coverage Ratio, the worse is its ability to service its debt.\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Interest Coverage Ratio (ICR) is defined as:\nICR = Earnings Before Interest and Taxes (EBIT) / Interest Expenses.\n- Statement 1 is correct: Banks use ICR to assess the current credit risk and debt-servicing ability of a borrower before extending loans.\n- Statement 2 is correct: Tracking trends in ICR over consecutive quarters reveals emerging insolvency and financial distress risks.\n- Statement 3 is incorrect: The HIGHER the Interest Coverage Ratio, the MORE comfortably the firm can service its interest obligations from its operating profits (better ability, not worse).\n\nSince statement 3 is incorrect, options B, C, and D are eliminated.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / Economic Survey',
      edition: '15th Edition',
      chapter: 'Chapter 11: Corporate Debt and Financial Intermediation',
      pageNumber: 'Page 11.22 – 11.26',
      keyExcerpt: 'Interest coverage ratio measures the ability of a firm to meet interest expenses. An ICR above 2 or 3 is considered financially healthy; an ICR below 1 indicates insolvency distress.'
    },
    eliminationTip: 'If your earnings cover your interest 10 times over (high ICR), you are safe, not worse off! Statement 3 is obviously inverted, eliminating B, C, and D.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Interest Coverage Ratio', 'Corporate Debt', 'Banking Risk', 'Economy']
  },
  {
    id: 'pyq-2020-gs-23',
    subject: 'economy',
    topic: 'Financial Sector: Debt Securities',
    subTopic: 'Non-Financial Debt Components',
    question: 'Which of the following include(s) “Non-Financial Debt”?\n1. Housing loans owed by households\n2. Amounts outstanding on credit cards\n3. Treasury bills issued by the government\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 only',
      '1 and 2 only',
      '3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'In macroeconomic accounting:\n- Financial Debt refers to debt instruments issued by financial intermediaries (commercial banks, NBFCs, investment funds) to fund their lending operations.\n- Non-Financial Debt refers to all debt owed by non-financial economic agents: households, non-financial corporate enterprises, and the general government.\n\nEvaluating the three statements:\n1. Housing loans owed by households -> Borrowed by non-financial household sector (Included).\n2. Credit card dues -> Consumer unsecured debt owed by households (Included).\n3. Treasury bills issued by the government -> Sovereign debt issued by the central government (Included).\nAll three are core components of non-financial debt.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / Macroeconomics NCERT XII',
      edition: '15th Edition',
      chapter: 'Chapter 10: Public Finance & Fiscal Debt',
      pageNumber: 'Page 10.18 – 10.22',
      keyExcerpt: 'Non-financial debt includes all credit instruments held by government, non-financial corporations, and households.'
    },
    eliminationTip: 'None of the entities in 1, 2, or 3 are financial institutions (they are households and government). Thus all debt contracted by them is non-financial debt.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Non-Financial Debt', 'Treasury Bills', 'Household Debt', 'Macroeconomics']
  },
  {
    id: 'pyq-2020-gs-24',
    subject: 'economy',
    topic: 'Foreign Investment & Capital Flows',
    subTopic: 'Foreign Direct Investment (FDI) vs Portfolio Investment',
    question: 'With reference to Foreign Direct Investment in India, which one of the following is considered its major characteristic? (UPSC CSE Prelims 2020)',
    options: [
      'It is the investment through capital instruments essentially in a listed company.',
      'It is largely non-debt creating capital flow.',
      'It is the investment which involves debt-servicing.',
      'It is the investment made by foreign institutional investors in government securities.'
    ],
    correctAnswer: 1,
    explanation: 'Foreign Direct Investment (FDI) represents non-debt equity inflows:\n1. Unlike commercial loans or external debt, FDI does not impose fixed debt-servicing obligations (interest or principal amortization schedules) on the host nation.\n2. Foreign investors share commercial equity risk and returns in physical productive assets.\n3. Option (a) describes FPI/portfolio investment (FDI can be in unlisted entities).\n4. Option (c) is false because FDI is non-debt creating.\n5. Option (d) describes FPI investment in sovereign bonds.\nTherefore, Option (b) is the primary economic characteristic of FDI.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh',
      edition: '15th Edition',
      chapter: 'Chapter 16: External Sector and Balance of Payments',
      pageNumber: 'Page 16.12 – 16.16',
      keyExcerpt: 'FDI is considered the safest form of foreign capital inflow because it is non-debt creating and represents long-term equity investment.'
    },
    eliminationTip: 'FDI is celebrated in economic policy specifically because it brings equity capital without creating external sovereign or corporate debt burdens.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'FDI', 'Non-Debt Capital Flow', 'External Sector', 'Balance of Payments']
  },
  {
    id: 'pyq-2020-gs-25',
    subject: 'economy',
    topic: 'Agricultural Credit & Financial Inclusion',
    subTopic: 'Kisan Credit Card (KCC) Scheme Permissible Purposes',
    question: 'Under the Kisan Credit Card (KCC) scheme, short-term credit support is given to farmers for which of the following purposes?\n1. Working capital for maintenance of farm assets\n2. Purchase of combine harvesters, tractors and mini trucks\n3. Consumption requirements of farm households\n4. Post-harvest expenses\n5. Construction of family house and setting up of village cold storage facility\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1, 2 and 5 only',
      '1, 3 and 4 only',
      '2, 3, 4 and 5 only',
      '1, 2, 3, 4 and 5'
    ],
    correctAnswer: 1,
    explanation: 'According to the official RBI and NABARD Kisan Credit Card (KCC) guidelines, short-term credit limits under KCC cover:\n1. Working capital for maintenance of farm assets and activities allied to agriculture (Statement 1: Included).\n2. Post-harvest expenses (Statement 4: Included).\n3. Consumption requirements of farm households up to a prescribed limit (Statement 3: Included).\n4. Short-term crop production loan requirements.\n\nOn the other hand:\n- Purchasing tractors, combine harvesters, mini trucks, construction of family houses, or establishing commercial cold storages require long-term term-loans/capital finance, not the basic short-term credit component of KCC.\nTherefore, statements 1, 3, and 4 are correct.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh',
      edition: '15th Edition',
      chapter: 'Chapter 8: Agriculture and Food Management (Rural Credit)',
      pageNumber: 'Page 8.28 – 8.32',
      keyExcerpt: 'KCC short-term credit limits meet crop production, post-harvest expenses, farm asset maintenance, and household consumption needs.'
    },
    eliminationTip: 'Can short-term crop loans under KCC buy combine harvesters, tractors, mini trucks or build houses (points 2 & 5)? No! Those require long-term capital loans. Eliminating 2 and 5 leaves B.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Kisan Credit Card', 'KCC', 'NABARD', 'Agricultural Credit']
  },
  {
    id: 'pyq-2020-gs-26',
    subject: 'economy',
    topic: 'Inflation Indices & Price Statistics',
    subTopic: 'Consumer Price Index (CPI) vs Wholesale Price Index (WPI)',
    question: 'With reference to the Indian economy, consider the following statements:\n1. The weightage of food in Consumer Price Index (CPI) is higher than that in Wholesale Price Index (WPI).\n2. The WPI does not capture changes in the prices of services, which CPI does.\n3. Reserve Bank of India has now adopted WPI as its key measure of inflation to decide on policy rates.\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '2 only',
      '3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Let us examine each statement:\n- Statement 1 is correct: Food and beverages constitute 45.86% in the CPI (Combined) basket, whereas in WPI, food articles and food products have a much lower weightage of around 24.38%.\n- Statement 2 is correct: WPI measures inflation only at the wholesale level of tangible manufactured and primary commodities. It DOES NOT include services. CPI includes both goods and services (education, medical care, housing, transport).\n- Statement 3 is incorrect: Under the Urjit Patel Committee recommendations (2014), the RBI officially abandoned WPI and adopted the CPI-Combined (headline inflation) as the sole anchor for the flexible inflation targeting framework (4% ± 2%).\n\nSince statement 3 is incorrect, options C and D are eliminated. Statements 1 and 2 are correct.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / Macroeconomics NCERT XII',
      edition: '15th Edition',
      chapter: 'Chapter 7: Inflation and Business Cycles',
      pageNumber: 'Page 7.8 – 7.14',
      keyExcerpt: 'RBI transitioned to CPI-Combined for policy rate determination. WPI does not cover services and assigns a lower weight to food.'
    },
    eliminationTip: 'Does RBI use WPI for its repo rate decisions? No, RBI famously shifted to CPI headline inflation in 2014! Eliminating statement 3 leaves A.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'CPI', 'WPI', 'Inflation', 'RBI Inflation Targeting']
  },
  {
    id: 'pyq-2020-gs-27',
    subject: 'economy',
    topic: 'International Trade Agreements',
    subTopic: 'Trade-Related Investment Measures (TRIMs)',
    question: 'With reference to the Trade-Related Investment Measures (TRIMs), which of the following statements is/are correct?\n1. Quantitative restrictions on imports by foreign investors are prohibited.\n2. They apply to investment measures related to trade in both goods and services.\n3. They are not concerned with the regulation of foreign investment.\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '2 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 2,
    explanation: 'Under the WTO Agreement on Trade-Related Investment Measures (TRIMs):\n- Statement 1 is correct: TRIMs prohibits trade-distorting investment measures, such as Local Content Requirements (requiring a firm to buy domestic inputs) and Quantitative Trade Balancing/Import Restrictions (capping imports to a proportion of exports).\n- Statement 2 is incorrect: Article 1 of TRIMs explicitly states that TRIMs applies ONLY to investment measures related to trade in GOODS. Trade in services is governed by the General Agreement on Trade in Services (GATS), not TRIMs.\n- Statement 3 is correct: TRIMs does not regulate foreign investment entry per se (it is not a multilateral investment code); it only concerns itself with trade-distorting discriminatory conditions attached to investments.\n\nSince statement 2 is incorrect, options A, B, and D are eliminated, leaving (c) 1 and 3.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh',
      edition: '15th Edition',
      chapter: 'Chapter 15: International Economic Organisations (WTO Agreements)',
      pageNumber: 'Page 15.18 – 15.22',
      keyExcerpt: 'TRIMs applies only to trade in goods, not services. It prohibits local content requirements and quantitative trade balancing.'
    },
    eliminationTip: 'TRIMs applies strictly to GOODS; services are governed by GATS! Eliminating statement 2 instantly leaves C.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'TRIMs', 'WTO', 'Quantitative Restrictions', 'Trade in Goods']
  },
  {
    id: 'pyq-2020-gs-28',
    subject: 'international',
    topic: 'Multilateral Groupings & Global Governance',
    subTopic: 'Members of the Group of Twenty (G20)',
    question: 'In which one of the following groups are all four countries members of G20? (UPSC CSE Prelims 2020)',
    options: [
      'Argentina, Mexico, South Africa and Turkey',
      'Australia, Canada, Malaysia and New Zealand',
      'Brazil, Iran, Saudi Arabia and Vietnam',
      'Indonesia, Japan, Singapore and South Korea'
    ],
    correctAnswer: 0,
    explanation: 'The G20 consists of 19 sovereign countries, the European Union, and the African Union.\nThe 19 member countries are:\nArgentina, Australia, Brazil, Canada, China, France, Germany, India, Indonesia, Italy, Japan, Republic of Korea, Mexico, Russia, Saudi Arabia, South Africa, Turkey, United Kingdom, and United States.\n\nLet us evaluate the options:\n- Option (a): Argentina, Mexico, South Africa, and Turkey — ALL four are official members of G20.\n- Option (b): Malaysia and New Zealand are NOT members of G20.\n- Option (c): Iran and Vietnam are NOT members of G20.\n- Option (d): Singapore is an invited guest, NOT a permanent member of G20.',
    bookReference: {
      bookName: 'International Relations by Pavneet Singh / Current Affairs Compendiums',
      edition: '3rd Edition',
      chapter: 'Chapter 6: Multilateral Economic Forums (G20)',
      pageNumber: 'Page 142 – 148',
      keyExcerpt: 'G20 member nations: Argentina, Australia, Brazil, Canada, China, France, Germany, India, Indonesia, Italy, Japan, South Korea, Mexico, Russia, Saudi Arabia, South Africa, Turkey, UK, USA.'
    },
    eliminationTip: 'Notice non-members: New Zealand (B), Vietnam/Iran (C), Singapore (D). Only Option A has exclusively full G20 members.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'G20', 'Multilateralism', 'International Groupings']
  },
  {
    id: 'pyq-2020-gs-29',
    subject: 'economy',
    topic: 'Financial Markets & Investment Vehicles',
    subTopic: 'Infrastructure Investment Trusts (InvITs)',
    question: 'With reference to the Infrastructure Investment Trusts (InvITs), which of the following statements is/are correct?\n1. They are regulated by the Reserve Bank of India.\n2. The dividend income distributed by InvITs to unit holders is totally exempt from income tax in the hands of unit holders without any conditions.\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 3,
    explanation: 'Let us examine both statements:\n- Statement 1 is incorrect: InvITs (and REITs) are collective investment vehicles in securities and infrastructure assets, and are regulated by the SECURITIES AND EXCHANGE BOARD OF INDIA (SEBI) under SEBI (Infrastructure Investment Trusts) Regulations, 2014, not by the RBI.\n- Statement 2 is incorrect: Dividend distribution by InvITs is NOT "totally exempt without any conditions". Tax exemption in the hands of unit holders depends on whether the underlying Special Purpose Vehicle (SPV) opted for the concessional corporate tax regime under Section 115BAA of the Income Tax Act.\nTherefore, neither statement 1 nor 2 is correct.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh',
      edition: '15th Edition',
      chapter: 'Chapter 14: Security Market in India (InvITs and REITs)',
      pageNumber: 'Page 14.18 – 14.22',
      keyExcerpt: 'InvITs are regulated by SEBI under the SEBI (InvITs) Regulations, 2014. Tax pass-through treatment is conditional.'
    },
    eliminationTip: 'InvITs and REITs trade on stock exchanges—they are regulated by SEBI, not RBI (Statement 1 is false). Absolute words like "totally exempt without any conditions" in tax law are almost universally false.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'InvITs', 'SEBI', 'Financial Markets', 'Taxation']
  },
  {
    id: 'pyq-2020-gs-30',
    subject: 'environment',
    topic: 'Wildlife Protection & Conservation Geography',
    subTopic: 'Critical Tiger Habitats (CTH) in India',
    question: 'Which of the following Protected Areas is well-known for the largest area under "Critical Tiger Habitat"? (UPSC CSE Prelims 2020)',
    options: [
      'Corbett',
      'Ranthambore',
      'Nagarjunsagar-Srisailam',
      'Sundarbans'
    ],
    correctAnswer: 2,
    explanation: 'Under Section 38V of the Wildlife (Protection) Act, 1972, state governments notify "Critical Tiger Habitats" (core areas of tiger reserves).\n- Nagarjunsagar-Srisailam Tiger Reserve (located in the Nallamala hills spanning Andhra Pradesh and Telangana) has the LARGEST core / Critical Tiger Habitat area in India, covering over 3,728 sq km.\n- Corbett core is approx 821 sq km, Sundarbans core is approx 1,699 sq km, and Ranthambore core is approx 1,113 sq km.\nTherefore, Nagarjunsagar-Srisailam has the largest area under Critical Tiger Habitat.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy',
      edition: '10th Edition',
      chapter: 'Chapter 16: Tiger Conservation in India',
      pageNumber: 'Page 196 – 201',
      keyExcerpt: 'Nagarjunsagar-Srisailam Tiger Reserve is the largest tiger reserve and has the largest Critical Tiger Habitat in India.'
    },
    eliminationTip: 'Nagarjunsagar-Srisailam is famously known as the geographically largest tiger reserve core in India.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Critical Tiger Habitat', 'Nagarjunsagar Srisailam', 'Project Tiger', 'Environment']
  },
  {
    id: 'pyq-2020-gs-31',
    subject: 'environment',
    topic: 'Thermal Power Plants & Air Pollution',
    subTopic: 'Coal Ash and Flue Gas Emissions',
    question: 'With reference to the coal ash produced from thermal power plants, which of the following statements is/are correct?\n1. Coal ash contains arsenic, lead and mercury.\n2. Coal-fired power plants release sulphur dioxide and oxides of nitrogen into the environment.\n3. High ash content is observed in Indian coal.\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements are factually correct:\n- Statement 1 is correct: Fly ash and bottom ash produced during pulverized coal combustion contain toxic heavy trace metals, including arsenic, lead, mercury, chromium, and cadmium.\n- Statement 2 is correct: Coal thermal power plants combust sulfur- and nitrogen-bearing coal, releasing sulfur dioxide (SO2) and nitrogen oxides (NOx), leading to acid rain and particulate smog.\n- Statement 3 is correct: Indian domestic Gondwana coal is characterized by exceptionally high ash content (typically 30% to 45% or even higher) and low calorific value compared to imported bituminous coal (ash content ~10-15%).\n\nTherefore, statements 1, 2, and 3 are all correct.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy / NCERT Class XII Chemistry',
      edition: '10th Edition',
      chapter: 'Chapter 5: Air Pollution and Thermal Power Emissions',
      pageNumber: 'Page 68 – 72',
      keyExcerpt: 'Indian coal has high ash content (35-45%). Coal ash contains toxic heavy metals like arsenic, lead, and mercury.'
    },
    eliminationTip: 'Indian coal is notorious for having very high ash content (up to 40-45%). Coal combustion emits SO2/NOx and heavy trace metals. All three statements are universally acknowledged facts.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Coal Ash', 'Fly Ash', 'Air Pollution', 'Indian Coal', 'Environment']
  },
  {
    id: 'pyq-2020-gs-32',
    subject: 'environment',
    topic: 'Agricultural Biotechnology & Soil Health',
    subTopic: 'Use of Biochar in Farming',
    question: 'What is the use of biochar in farming?\n1. Biochar can be used as a part of the growing medium in vertical farming.\n2. When biochar is a part of the growing medium, it promotes the growth of nitrogen-fixing microorganisms.\n3. When biochar is a part of the growing medium, it enables the growing medium to retain water for longer periods.\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '2 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'Biochar is a porous carbon-rich charcoal produced by the pyrolysis of biomass under low-oxygen conditions:\n- Statement 1 is correct: Biochar provides a lightweight, sterile, nutrient-binding substrate that is increasingly incorporated into vertical farming and soil-less hydroponic/aeroponic growing media.\n- Statement 2 is correct: Its high porosity and surface area provide micro-habitats and shelter that nurture beneficial soil bacteria, including free-living and symbiotic nitrogen-fixing microorganisms (e.g., Rhizobium, Azotobacter).\n- Statement 3 is correct: Due to its internal capillary structure and high specific surface area, biochar dramatically boosts soil water retention capacity and reduces nutrient leaching.\n\nTherefore, all three statements are correct.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy',
      edition: '10th Edition',
      chapter: 'Chapter 24: Climate Change Mitigation & Carbon Sequestration',
      pageNumber: 'Page 302 – 306',
      keyExcerpt: 'Biochar improves soil water retention, microbial colonization including nitrogen-fixing bacteria, and acts as a long-term recalcitrant carbon sink.'
    },
    eliminationTip: 'Biochar is a porous carbon material. Porosity increases water retention (3) and provides surface area for microbial colonization (2), and can be added to vertical farming substrate (1). All 3 are beneficial.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Biochar', 'Soil Health', 'Carbon Sequestration', 'Vertical Farming']
  },
  {
    id: 'pyq-2020-gs-33',
    subject: 'international',
    topic: 'Maritime Conventions & Polar Regions',
    subTopic: 'International Code for Ships Operating in Polar Waters (Polar Code)',
    question: 'What is the importance of the “Polar Code”? (UPSC CSE Prelims 2020)',
    options: [
      'It is the international code of safety for ships operating in polar waters.',
      'It is the common agreement of the countries around the North Pole regarding the territory of the Arctic region.',
      'It is a flag of convenience regulation for scientific exploration ships in the Antarctic.',
      'It is a trade pact on polar mineral exploitation among Arctic Council countries.'
    ],
    correctAnswer: 0,
    explanation: 'The International Code for Ships Operating in Polar Waters (the "Polar Code") was adopted by the International Maritime Organization (IMO) and entered into force in 2017.\nIt is a mandatory international regulatory regime governing maritime safety, ship design, construction, equipment, operations, search and rescue, and marine environmental protection for commercial and passenger vessels operating in the harsh ice-covered waters of the Arctic and Antarctic oceans.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy / Current Affairs',
      edition: '10th Edition',
      chapter: 'Chapter 28: International Maritime Conventions & IMO',
      pageNumber: 'Page 340 – 344',
      keyExcerpt: 'The Polar Code is the mandatory IMO regulatory framework ensuring safety and pollution prevention for ships in polar waters.'
    },
    eliminationTip: 'IMO formulated the Polar Code specifically as an international safety and environmental code for ships navigating polar waters.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Polar Code', 'IMO', 'Arctic', 'Antarctic', 'Maritime Safety']
  },
  {
    id: 'pyq-2020-gs-34',
    subject: 'environment',
    topic: 'Sustainable Agriculture Practices',
    subTopic: 'Zero Tillage (Conservation Agriculture) Advantages',
    question: 'With reference to the "Zero Tillage" in agriculture, which of the following statements are correct?\n1. Sowing of wheat is possible without burning the residue of previous crop.\n2. Without the need for nursery of rice seedlings, direct planting of paddy seeds in the wet soil is possible.\n3. Carbon sequestration in the soil is possible.\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'Zero tillage (no-till farming) is a cornerstone of Conservation Agriculture:\n- Statement 1 is correct: Modern tractor-drawn machinery like the Happy Seeder drills wheat seeds directly into soil covered with standing and loose rice paddy stubble without requiring burning.\n- Statement 2 is correct: Zero tillage enables Direct Seeded Rice (DSR), where pre-germinated paddy seeds are sown directly into field soil without the conventional labor- and water-intensive nursery transplantation into puddled fields.\n- Statement 3 is correct: By avoiding soil plowing and physical turnover, soil organic carbon is not oxidized or exposed to the atmosphere, fostering long-term microbial carbon sequestration.\n\nTherefore, all three statements are correct.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy / NCERT Class XII Biology',
      edition: '10th Edition',
      chapter: 'Chapter 23: Agriculture & Climate Resilient Practices',
      pageNumber: 'Page 285 – 290',
      keyExcerpt: 'Zero tillage conserves soil moisture, prevents stubble burning via Happy Seeders, facilitates Direct Seeded Rice, and enhances soil carbon sequestration.'
    },
    eliminationTip: 'Zero tillage prevents stubble burning (Happy Seeder), allows direct seeded rice, and retains soil carbon. All 3 are celebrated agro-ecological benefits.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Zero Tillage', 'Conservation Agriculture', 'Carbon Sequestration', 'Happy Seeder']
  },
  {
    id: 'pyq-2020-gs-35',
    subject: 'environment',
    topic: 'National Parks & Wildlife Sanctuaries',
    subTopic: 'Desert National Park (Rajasthan)',
    question: 'With reference to India’s Desert National Park, which of the following statements are correct?\n1. It is spread over two districts.\n2. There is no human habitation inside the Park.\n3. It is one of the natural habitats of Great Indian Bustard.\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 2,
    explanation: 'Let us examine each statement regarding Desert National Park:\n- Statement 1 is correct: Desert National Park spans across two districts of Rajasthan: Jaisalmer (approx. 1900 sq km) and Barmer (approx. 1262 sq km).\n- Statement 2 is incorrect: Unlike conventional national parks, Desert National Park contains dozens of traditional human settlements (villages and dhanis) inhabited by Bishnois, pastoralists, and desert communities who live within the park boundaries.\n- Statement 3 is correct: Desert National Park is the prime stronghold and critical breeding sanctuary for the critically endangered Great Indian Bustard (Godawan).\n\nSince statement 2 is incorrect, options A, B, and D are eliminated, leaving (c) 1 and 3.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy',
      edition: '10th Edition',
      chapter: 'Chapter 15: Protected Area Network (Rajasthan)',
      pageNumber: 'Page 182 – 186',
      keyExcerpt: 'Desert National Park spreads across Jaisalmer and Barmer. It contains human settlements inside and is home to the Great Indian Bustard.'
    },
    eliminationTip: 'Desert National Park is known for having numerous villages and human habitations inside its vast boundary (Statement 2 is false). Eliminating 2 instantly leaves C.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Desert National Park', 'Great Indian Bustard', 'Jaisalmer', 'Barmer']
  },
  {
    id: 'pyq-2020-gs-36',
    subject: 'geography',
    topic: 'Physical Geography of India: Glaciers & Mountains',
    subTopic: 'Location of Siachen Glacier',
    question: 'Siachen Glacier is situated to the: (UPSC CSE Prelims 2020)',
    options: [
      'East of Aksai Chin',
      'East of Leh',
      'North of Gilgit',
      'North of Nubra Valley'
    ],
    correctAnswer: 3,
    explanation: 'The Siachen Glacier is located in the eastern Karakoram range in Ladakh:\n1. The Nubra River originates from the snout of the Siachen Glacier and flows southward through the Nubra Valley before joining the Shyok River.\n2. Therefore, the Siachen Glacier lies directly to the NORTH OF NUBRA VALLEY.\n3. Regarding the other options: Aksai Chin lies to the east of Siachen (so Siachen is west of Aksai Chin, not east); Leh lies far south; Gilgit lies to the west of Siachen.\nTherefore, Option (d) is geographically accurate.',
    bookReference: {
      bookName: 'India: Physical Environment (NCERT Class XI)',
      edition: 'NCERT 2023',
      chapter: 'Chapter 2: Structure and Physiography (The Karakoram Range)',
      pageNumber: 'Page 14 – 18',
      keyExcerpt: 'The Nubra river originates from the Siachen glacier. Siachen glacier is located north of the Nubra valley.'
    },
    eliminationTip: 'The Nubra River flows south out of Siachen\'s snout. Therefore, Siachen Glacier is directly North of the Nubra Valley.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Siachen Glacier', 'Nubra Valley', 'Karakoram', 'Geography']
  },
  {
    id: 'pyq-2020-gs-37',
    subject: 'geography',
    topic: 'Geomorphology & River Landforms of India',
    subTopic: 'Gandikota Canyon (Grand Canyon of India)',
    question: 'The Gandikota canyon of South India was created by which one of the following rivers? (UPSC CSE Prelims 2020)',
    options: [
      'Cauvery',
      'Manjira',
      'Pennar',
      'Tungabhadra'
    ],
    correctAnswer: 2,
    explanation: 'The breathtaking Gandikota Canyon (famously celebrated as the "Grand Canyon of India") is carved through the rugged Erramala quartzite hills by the PENNAR River in the Kadapa (YSR) district of Andhra Pradesh.\nThe gorge forms a spectacular gorge with near-vertical cliffs plunging into the Pennar riverbed adjacent to the historic Gandikota Fort.',
    bookReference: {
      bookName: 'India: Physical Environment (NCERT Class XI)',
      edition: 'NCERT 2023',
      chapter: 'Chapter 3: Drainage System (Peninsular Rivers)',
      pageNumber: 'Page 28 – 32',
      keyExcerpt: 'The Pennar river cuts a deep gorge through the Erramala hills forming the famous Gandikota canyon.'
    },
    eliminationTip: 'Gandikota fort and gorge are iconic tourist landmarks in Andhra Pradesh carved by the Pennar river.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Gandikota Canyon', 'Pennar River', 'Geomorphology', 'Andhra Pradesh']
  },
  {
    id: 'pyq-2020-gs-38',
    subject: 'geography',
    topic: 'Mountain Peaks and Ranges of India',
    subTopic: 'Matching Himalayan Peaks with Mountain Regions',
    question: 'Consider the following pairs:\nPeak — Mountains\n1. Namcha Barwa — Garhwal Himalaya\n2. Nanda Devi — Kumaon Himalaya\n3. Nokrek — Sikkim Himalaya\n\nWhich of the pairs given above is/are correctly matched? (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2',
      '2 only',
      '1 and 3',
      '3 only'
    ],
    correctAnswer: 1,
    explanation: 'Let us analyze each pair:\n- Pair 1 is incorrectly matched: Namcha Barwa (7,782 m) is the easternmost anchor peak of the Great Himalayas, situated across the bend of the Tsangpo-Brahmaputra in Arunachal Pradesh / Tibet border, NOT in Garhwal.\n- Pair 2 is correctly matched: Nanda Devi (7,816 m) is situated in the Chamoli district of Uttarakhand in the Garhwal/Kumaon Himalayan division.\n- Pair 3 is incorrectly matched: Nokrek Peak (1,412 m) is the highest peak of the Garo Hills in Meghalaya, NOT in Sikkim Himalaya.\n\nTherefore, only pair 2 is correctly matched.',
    bookReference: {
      bookName: 'India: Physical Environment (NCERT Class XI)',
      edition: 'NCERT 2023',
      chapter: 'Chapter 2: Structure and Physiography (The Himalayas)',
      pageNumber: 'Page 12 – 16',
      keyExcerpt: 'Nanda Devi is in Kumaon/Garhwal. Namcha Barwa marks the eastern terminus in Arunachal/Tibet. Nokrek is in Garo hills (Meghalaya).'
    },
    eliminationTip: 'Nokrek is the highest point of the Garo Hills in Meghalaya (Pair 3 wrong). Namcha Barwa is at the eastern Great Bend of Brahmaputra in Arunachal/Tibet (Pair 1 wrong). Only pair 2 is correct.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Himalayan Peaks', 'Nanda Devi', 'Namcha Barwa', 'Nokrek', 'Geography']
  },
  {
    id: 'pyq-2020-gs-39',
    subject: 'science_tech',
    topic: 'Biotechnology & Genetic Engineering',
    subTopic: 'CRISPR-Cas9 Gene Editing Mechanism',
    question: 'What is Cas9 protein that is often mentioned in news? (UPSC CSE Prelims 2020/2019)',
    options: [
      'A molecular scissors used in targeted gene editing',
      'A biosensor used in the accurate detection of pathogens in patients',
      'A gene that makes plants pest-resistant',
      'A substance used in developing biodegradable plastics'
    ],
    correctAnswer: 0,
    explanation: 'Cas9 (CRISPR-associated protein 9) is an RNA-guided endonuclease enzyme that functions as "molecular scissors".\nGuided by a synthetic single guide RNA (sgRNA), Cas9 introduces precise double-stranded breaks at specific targeted genomic DNA sequences, allowing geneticists to silence, insert, or repair genes with unprecedented precision (work rewarded with the 2020 Nobel Prize in Chemistry to Jennifer Doudna and Emmanuelle Charpentier).',
    bookReference: {
      bookName: 'Science and Technology by Ravi P. Agrahari / NCERT Class XII Biology',
      edition: '7th Edition',
      chapter: 'Chapter 11: Biotechnology: Principles and Processes',
      pageNumber: 'Page 11.8 – 11.14',
      keyExcerpt: 'Cas9 is a bacterial endonuclease protein used as molecular scissors to cut target DNA strands in CRISPR gene editing.'
    },
    eliminationTip: 'CRISPR-Cas9 is universally described in science journalism as "molecular scissors" for gene editing.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'CRISPR Cas9', 'Gene Editing', 'Molecular Scissors', 'Biotechnology']
  },
  {
    id: 'pyq-2020-gs-40',
    subject: 'science_tech',
    topic: 'Optical Communications & Wireless Networking',
    subTopic: 'Visible Light Communication (VLC) / Li-Fi Characteristics',
    question: 'With reference to “Visible Light Communication (VLC)” technology, which of the following statements are correct?\n1. VLC uses electromagnetic spectrum wavelengths 375 to 780 nm.\n2. VLC is known as long-range optical wireless communication.\n3. VLC can transmit large amounts of data faster than Bluetooth.\n4. VLC has no electromagnetic interference.\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1, 2 and 3 only',
      '1, 2 and 4 only',
      '1, 3 and 4 only',
      '2, 3 and 4 only'
    ],
    correctAnswer: 2,
    explanation: 'Let us analyze Visible Light Communication (VLC / Li-Fi):\n- Statement 1 is correct: VLC utilizes the visible spectrum band of the electromagnetic spectrum, typically wavelengths ranging from approximately 375 nm to 780 nm.\n- Statement 2 is incorrect: VLC is a SHORT-RANGE optical wireless communication technology (confined to line-of-sight distances within a room, typically a few metres), because visible light cannot penetrate opaque walls or travel long distances.\n- Statement 3 is correct: By rapidly modulating LED light waves, VLC transmits data at multi-gigabit speeds, vastly faster than standard Bluetooth (which maxes out at a few Mbps).\n- Statement 4 is correct: Because VLC uses light waves rather than radio frequencies, it generates no radio-frequency electromagnetic interference, making it ideal for operating rooms, aircraft cabins, and petrol chemical plants.\n\nSince statement 2 is incorrect, options A, B, and D are eliminated, leaving (c) 1, 3 and 4.',
    bookReference: {
      bookName: 'Science and Technology by Ravi P. Agrahari',
      edition: '7th Edition',
      chapter: 'Chapter 4: Telecommunication & Wireless Technologies (Li-Fi)',
      pageNumber: 'Page 4.18 – 4.22',
      keyExcerpt: 'VLC operates in visible spectrum (380-780 nm). It is short-range line-of-sight, free from RF electromagnetic interference, and offers high data rates.'
    },
    eliminationTip: 'Can light shine through walls over long distances like radio waves? No! Light is blocked by walls, so VLC is short-range line-of-sight. Eliminating statement 2 instantly leaves C.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Visible Light Communication', 'VLC', 'Li-Fi', 'Wireless Communication']
  },
  {
    id: 'pyq-2020-gs-41',
    subject: 'science_tech',
    topic: 'Emerging Information Technologies',
    subTopic: 'Blockchain Technology and Distributed Ledgers',
    question: 'With reference to "Blockchain Technology", consider the following statements:\n1. It is a public ledger that everyone can inspect, but which no single user controls.\n2. The structure and design of blockchain is such that all the data in it are about cryptocurrency only.\n3. Applications that depend on basic features of blockchain can be developed without anybody’s permission.\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2020)',
    options: [
      '1 only',
      '1 and 2 only',
      '2 only',
      '1 and 3 only'
    ],
    correctAnswer: 3,
    explanation: 'Let us examine each statement:\n- Statement 1 is correct: A public permissionless blockchain is a decentralized distributed ledger where transactions are visible to all nodes, verified cryptographically by consensus, and not owned or controlled by any central authority.\n- Statement 2 is incorrect: Blockchain is a general-purpose underlying architecture. It is applied to land title registries, supply chain tracking, health record management, digital voting, and smart contracts—NOT solely to cryptocurrencies.\n- Statement 3 is correct: On public permissionless blockchains (like Ethereum), smart contracts and decentralized applications (DApps) can be developed and deployed by anyone permissionlessly without seeking approvals from a central clearinghouse.\n\nSince statement 2 is incorrect, options B and C are eliminated, leaving (d) 1 and 3.',
    bookReference: {
      bookName: 'Science and Technology by Ravi P. Agrahari',
      edition: '7th Edition',
      chapter: 'Chapter 5: Information Technology (Blockchain & Web3)',
      pageNumber: 'Page 5.25 – 5.30',
      keyExcerpt: 'Blockchain is a distributed ledger technology with applications extending far beyond cryptocurrencies to land records, voting, and supply chain provenance.'
    },
    eliminationTip: 'Is blockchain data "about cryptocurrency only"? Obviously false! Extreme word "only" rules out statement 2. Eliminating 2 leaves D.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Blockchain', 'Distributed Ledger', 'Cryptocurrency', 'Smart Contracts']
  },
  {
    id: 'pyq-2020-gs-42',
    subject: 'science_tech',
    topic: 'Reproductive Biotechnology & Genetics',
    subTopic: 'Pronuclear Transfer (Mitochondrial Replacement Therapy)',
    question: 'In the context of recent advances in human genetics, “Pronuclear Transfer” is used for: (UPSC CSE Prelims 2020)',
    options: [
      'Fertilization of egg in vitro by the donor sperm',
      'Genetic modification of sperm producing cells',
      'Development of stem cells into functional embryos',
      'Prevention of mitochondrial diseases in offspring'
    ],
    correctAnswer: 3,
    explanation: 'Pronuclear Transfer (PNT) is an advanced assisted reproductive technology (Mitochondrial Replacement Therapy / Three-parent baby technique):\n1. It is designed to prevent mothers affected by fatal inherited mitochondrial DNA mutations from transmitting incurable neurometabolic and cardiac disorders to their children.\n2. The pronuclei (nuclear DNA) of both parents are removed from the patient\'s fertilized embryo and transferred into an enucleated donor embryo carrying healthy mitochondrial DNA.\n3. The resulting offspring inherits nuclear genes from biological parents and healthy mitochondria from the donor.',
    bookReference: {
      bookName: 'Science and Technology by Ravi P. Agrahari',
      edition: '7th Edition',
      chapter: 'Chapter 11: Biotechnology & Assisted Reproductive Technologies',
      pageNumber: 'Page 11.24 – 11.28',
      keyExcerpt: 'Pronuclear transfer is a mitochondrial replacement therapy used to prevent transmission of harmful maternal mitochondrial DNA mutations to offspring.'
    },
    eliminationTip: 'Pronuclear transfer is the standard medical procedure for "mitochondrial replacement therapy" to avoid maternal mitochondrial genetic disorders.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Pronuclear Transfer', 'Mitochondrial Replacement Therapy', 'Genetics']
  },
  {
    id: 'pyq-2020-gs-43',
    subject: 'science_tech',
    topic: 'Nanotechnology & Advanced Materials',
    subTopic: 'Applications of Carbon Nanotubes (CNTs)',
    question: 'With reference to carbon nanotubes, consider the following statements:\n1. They can be used as carriers of drugs and antigens in the human body.\n2. They can be made into artificial blood capillaries for an injured part of human body.\n3. They can be used in biochemical sensors.\n4. Carbon nanotubes are biodegradable.\n\nWhich of the statements given above are correct? (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '2, 3 and 4 only',
      '1, 3 and 4 only',
      '1, 2, 3 and 4'
    ],
    correctAnswer: 3,
    explanation: 'All four statements are scientifically established:\n- Statement 1 is correct: Functionalized carbon nanotubes (CNTs) can cross cell membranes through endocytosis and act as targeted nanoscale carriers delivering chemotherapeutic drugs and antigens directly into tumor cells.\n- Statement 2 is correct: Owing to their exceptional tensile strength, biocompatibility, and tubular geometry, CNTs are fabricated into tubular scaffolds and artificial blood capillaries/vessel grafts in tissue engineering.\n- Statement 3 is correct: CNTs exhibit high electrical conductivity sensitive to minute surface binding, making them outstanding transducer elements in electrochemical and biochemical sensors (e.g. glucose and DNA detection).\n- Statement 4 is correct: Functionalized carbon nanotubes can be enzymatically degraded in vivo by plant enzymes (horseradish peroxidase) and human immune enzymes (myeloperoxidase in neutrophils and macrophages). Therefore, functionalized CNTs are biodegradable.\n\nAll statements 1, 2, 3, and 4 are correct.',
    bookReference: {
      bookName: 'Science and Technology by Ravi P. Agrahari',
      edition: '7th Edition',
      chapter: 'Chapter 7: Nanotechnology Applications',
      pageNumber: 'Page 7.12 – 7.18',
      keyExcerpt: 'Carbon nanotubes are used for targeted drug delivery, tissue scaffold microcapillaries, biosensors, and can undergo enzymatic biodegradation.'
    },
    eliminationTip: 'Nanotubes are versatile biomaterials used in drug delivery, biosensors, and scaffolds. Studies proved functionalized nanotubes are biodegradable via human myeloperoxidase enzymes. All 4 statements are correct.',
    difficulty: 'Moderate',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Carbon Nanotubes', 'Nanotechnology', 'Drug Delivery', 'Biodegradable']
  },
  {
    id: 'pyq-2020-gs-44',
    subject: 'science_tech',
    topic: 'Artificial Intelligence & Machine Learning',
    subTopic: 'Contemporary Practical AI Applications',
    question: 'With the present state of development, Artificial Intelligence can effectively do which of the following?\n1. Bring down electricity consumption in industrial units\n2. Create meaningful short stories and songs\n3. Disease diagnosis\n4. Text-to-Speech conversion\n5. Wireless transmission of electrical energy\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1, 2, 3 and 4 only',
      '1, 3 and 4 only',
      '2, 4 and 5 only',
      '1, 2, 3, 4 and 5'
    ],
    correctAnswer: 0,
    explanation: 'Let us examine each statement:\n- Point 1: Deep learning algorithms (e.g., Google DeepMind AI) optimized cooling and reduced datacenter/industrial electricity consumption by over 30-40%.\n- Point 2: Generative language models (LLMs) compose short stories, poems, and musical lyrics.\n- Point 3: Computer vision convolutional neural networks diagnose diabetic retinopathy, skin melanoma, and chest X-rays with clinical accuracy.\n- Point 4: Neural text-to-speech (TTS) engines synthesize natural human speech.\n- Point 5: Wireless power transmission is an electromagnetic induction / microwave resonance physical engineering process, NOT an AI function.\n\nTherefore, statements 1, 2, 3, and 4 are correct.',
    bookReference: {
      bookName: 'Science and Technology by Ravi P. Agrahari',
      edition: '7th Edition',
      chapter: 'Chapter 6: Artificial Intelligence & Robotics',
      pageNumber: 'Page 6.8 – 6.14',
      keyExcerpt: 'AI optimizes energy consumption, generates text and music, analyzes medical diagnostics, and synthesizes speech. Wireless energy transmission is an electromagnetic hardware process.'
    },
    eliminationTip: 'Wireless power transmission relies on magnetic resonance/induction physics (Nikola Tesla / microwave beaming), not software artificial intelligence algorithms! Eliminating 5 leaves A.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Artificial Intelligence', 'Machine Learning', 'Energy Optimization', 'TTS']
  },
  {
    id: 'pyq-2020-gs-45',
    subject: 'environment',
    topic: 'Ecology & Animal Behavior',
    subTopic: 'Indian Flying Fox & Bat Roosting Ecology',
    question: 'With reference to the Indian Flying Fox, which of the following statements is/are correct?\n1. It is a frugivorous bat species.\n2. It roosts in large colonies in exposed tree canopies.\n3. It is a vital seed disperser and pollinator of tropical forest trees.\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements regarding the Indian Flying Fox (Pteropus giganteus / Pteropus medius) are correct:\n- Statement 1 is correct: The Indian flying fox is one of the largest bat species in the world and is strictly frugivorous (fruit-eating) and nectarivorous.\n- Statement 2 is correct: Unlike microbats that roost in dark caves, flying foxes roost gregariously in large noisy camps in tall, exposed tree canopies (often near water bodies or roadsides).\n- Statement 3 is correct: By ingesting fleshy fruits and flying long distances, flying foxes act as keystone ecological pollinators and seed dispersers for dozens of tropical commercial and forest canopy tree species (including neem, mahua, and wild figs).\n\nTherefore, statements 1, 2, and 3 are all correct.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy',
      edition: '10th Edition',
      chapter: 'Chapter 14: Animal Diversity of India (Mammals)',
      pageNumber: 'Page 168 – 172',
      keyExcerpt: 'The Indian Flying Fox is a fruit bat roosting openly in large trees that provides critical seed dispersal and pollination services in forest ecosystems.'
    },
    eliminationTip: 'Flying foxes eat fruits (frugivorous), hang on open trees in huge colonies, and drop seeds across forests (seed dispersers). All 3 are accurate ecological traits.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 8,
    tags: ['UPSC 2020', 'Indian Flying Fox', 'Fruit Bat', 'Pollination', 'Biodiversity']
  },
  {
    id: 'pyq-2020-gs-46',
    subject: 'environment',
    topic: 'Biodiversity & Wildlife Conservation',
    subTopic: 'Plant and Animal Adaptations to Arid Environments',
    question: 'Which of the following are the most likely places to find the musk deer in its natural habitat?\n1. Askot Wildlife Sanctuary\n2. Gangotri National Park\n3. Kishanpur Wildlife Sanctuary\n4. Manas National Park\n\nSelect the correct answer using the code given below: (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '3 and 4 only',
      '1 and 4 only'
    ],
    correctAnswer: 0,
    explanation: 'The Himalayan Musk Deer (Moschus chrysogaster / Moschus leucogaster) is an alpine ungulate inhabiting high-altitude subalpine birch, pine, and rhododendron scrub forests above 2,500 m in the Himalayas:\n- 1. Askot Wildlife Sanctuary: Located in Pithoragarh, Uttarakhand, established specifically for the conservation of the musk deer (commonly called Askot Musk Deer Sanctuary).\n- 2. Gangotri National Park: Located in Uttarkashi, Uttarakhand, spans high alpine Himalayan terrain and is home to the musk deer, snow leopard, and blue sheep.\n- 3. Kishanpur Wildlife Sanctuary: Located in the Terai plains of Lakhimpur Kheri (Dudhwa Tiger Reserve, Uttar Pradesh), which is a swampy alluvial grassland, not alpine habitat.\n- 4. Manas National Park: Located in the sub-Himalayan foothills and alluvial plains of Assam (home to one-horned rhino, pygmy hog, wild water buffalo), not alpine musk deer habitat.\n\nTherefore, only 1 and 2 are natural alpine habitats for musk deer.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy',
      edition: '10th Edition',
      chapter: 'Chapter 15: Protected Area Network (Uttarakhand)',
      pageNumber: 'Page 180 – 184',
      keyExcerpt: 'Musk deer is found in high Himalayan alpine scrub: Askot Sanctuary in Pithoragarh and Gangotri National Park in Uttarkashi.'
    },
    eliminationTip: 'Musk deer is a high-altitude Himalayan species. Kishanpur is in UP Terai plains (swamp deer) and Manas is in Assam floodplains. Eliminating 3 and 4 leaves A.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Musk Deer', 'Askot', 'Gangotri', 'Protected Areas', 'Biodiversity']
  },
  {
    id: 'pyq-2020-gs-47',
    subject: 'history',
    topic: 'Ancient India: Archaeological Discoveries & Stupa Sites',
    subTopic: 'Kanaganahalli and Inscribed Portrait of Emperor Ashoka',
    question: 'With reference to the cultural history of India, which one of the following stupa sites is famous for a relief sculpture portrait inscribed with the name of “Ranyo Asoka” (King Ashoka)? (UPSC CSE Prelims 2020/2019)',
    options: [
      'Kanganahalli',
      'Sanchi',
      'Shahbazgarhi',
      'Sohgaura'
    ],
    correctAnswer: 0,
    explanation: 'Excavations by the Archaeological Survey of India (ASI) at the Mahastupa of KANAGANAHALLI (near Sannati on the Bhima river in Kalaburagi/Gulbarga district, Karnataka) unearthed a magnificent limestone slab showing a sculpted relief portrait of Emperor Ashoka surrounded by his queens and attendants, bearing an inscription in Brahmi script reading "Ranyo Asoka" (King Ashoka).\nThis is the ONLY known surviving inscribed sculpted portrait of the Mauryan Emperor Ashoka discovered anywhere in the world.',
    bookReference: {
      bookName: 'A History of Ancient and Early Medieval India by Upinder Singh',
      edition: '2023 Edition',
      chapter: 'Chapter 7: The Maurya Empire and Ashokan Art',
      pageNumber: 'Page 360 – 364',
      keyExcerpt: 'The relief slab showing King Ashoka accompanied by his queens with the inscription "Ranyo Asoka" was excavated at Kanaganahalli (Sannati, Karnataka).'
    },
    eliminationTip: 'Kanaganahalli in Karnataka is globally renowned among archaeologists as the unique stupa site bearing the inscribed stone relief portrait of "Ranyo Asoka".',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Kanaganahalli', 'Ranyo Asoka', 'Ashokan Portrait', 'Archaeology']
  },
  {
    id: 'pyq-2020-gs-48',
    subject: 'history',
    topic: 'Ancient India: Social and Religious Terms',
    subTopic: 'Parivrajaka, Shramana and Upasaka Meanings',
    question: 'With reference to the cultural history of India, consider the following pairs:\n1. Parivrajaka — Renunciant and Wanderer\n2. Shramana — Priest with a high status\n3. Upasaka — Lay worshipper of Buddhism\n\nWhich of the pairs given above are correctly matched? (UPSC CSE Prelims 2020)',
    options: [
      '1 and 2 only',
      '1 and 3 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Let us analyze each pair:\n- Pair 1 is correctly matched: A Parivrajaka is a wandering ascetic or renunciant who has renounced household life to seek spiritual liberation.\n- Pair 2 is incorrectly matched: A Shramana was an ascetic seeker who renounced worldly life, rejected the authority of the Vedas, and repudiated orthodox Brahmanical priestly rituals (e.g. Buddhist monks, Jaina munis, Ajivikas). They were explicitly NON-PRIESTLY ascetics, not "priests with high status".\n- Pair 3 is correctly matched: An Upasaka (female: Upasika) is a lay devotee of the Buddha who follows the moral precepts in household life without taking monastic vows.\n\nTherefore, pairs 1 and 3 are correctly matched.',
    bookReference: {
      bookName: 'Themes in Indian History Part I (NCERT Class XII)',
      edition: 'NCERT 2023',
      chapter: 'Theme 4: Thinkers, Beliefs and Buildings (Buddhism & Jainism)',
      pageNumber: 'Page 86 – 92',
      keyExcerpt: 'Shramanas were wandering ascetics who questioned the authority of Vedic priests. Upasakas were lay followers of the Sangha.'
    },
    eliminationTip: 'The Shramana tradition famously opposed the Vedic priests and Brahmin supremacy! Calling a Shramana a "priest with high status" is absurdly wrong. Eliminating pair 2 leaves B.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Shramana', 'Parivrajaka', 'Upasaka', 'Ancient History']
  },
  {
    id: 'pyq-2020-gs-49',
    subject: 'polity',
    topic: 'Constitutional History & National Celebrations',
    subTopic: 'Constitution Day (26th November)',
    question: 'With reference to the Constitution Day in India, consider the following statements:\n1. The Constitution Day is celebrated on 26th November every year to promote constitutional values among citizens.\n2. On 26th November 1949, the Constituent Assembly of India set up a Drafting Committee under the Chairmanship of Dr. B.R. Ambedkar to prepare a Draft Constitution.\n\nWhich of the statements given above is/are correct? (UPSC CSE Prelims 2020)',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 0,
    explanation: 'Let us examine both statements:\n- Statement 1 is correct: The Government of India decided in 2015 (the 125th birth anniversary year of Dr. B.R. Ambedkar) to observe 26th November every year as Constitution Day (Samvidhan Diwas) to foster constitutional values and honour the adoption of the Constitution.\n- Statement 2 is incorrect: The Drafting Committee was set up on AUGUST 29, 1947 (shortly after independence), not on 26th November 1949. On 26th November 1949, the Constituent Assembly ADOPTED and enacted the Constitution of India after completing all three readings.\n\nTherefore, only statement 1 is correct.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 2: Making of the Constitution',
      pageNumber: 'Page 2.3 – 2.6',
      keyExcerpt: 'Drafting Committee was set up on 29 August 1947. On 26 November 1949, the Constitution was adopted by the Constituent Assembly.'
    },
    eliminationTip: 'The Drafting Committee was appointed way back in August 1947 right after independence! On 26th November 1949, the finished Constitution was adopted. Statement 2 is chronologically absurd.',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Constitution Day', '26 November 1949', 'Drafting Committee', 'Dr Ambedkar']
  },
  {
    id: 'pyq-2020-gs-50',
    subject: 'polity',
    topic: 'Separation of Powers & Constitutional Principles',
    subTopic: 'Separation of Judiciary from Executive (Article 50)',
    question: 'In India, separation of judiciary from the executive is enjoined by: (UPSC CSE Prelims 2020)',
    options: [
      'The Preamble of the Constitution',
      'A Directive Principle of State Policy',
      'The Seventh Schedule',
      'The conventional practice'
    ],
    correctAnswer: 1,
    explanation: 'Article 50 in Part IV of the Constitution of India explicitly mandates:\n"Separation of judiciary from executive — The State shall take steps to separate the judiciary from the executive in the public services of the State."\nBecause Article 50 belongs to Part IV (Articles 36 to 51), separation of the judiciary from the executive is enjoined by a DIRECTIVE PRINCIPLE OF STATE POLICY.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition',
      chapter: 'Chapter 8: Directive Principles of State Policy',
      pageNumber: 'Page 8.2 – 8.4',
      keyExcerpt: 'Article 50 directs the State to separate the judiciary from the executive in the public services of the State.'
    },
    eliminationTip: 'Article 50 is one of the most frequently tested DPSPs in UPSC prelims: "Separation of judiciary from executive".',
    difficulty: 'Easy',
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    frequency: 9,
    tags: ['UPSC 2020', 'Article 50', 'Separation of Powers', 'DPSP', 'Judiciary and Executive']
  }
];
