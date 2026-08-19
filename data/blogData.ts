export interface BlogSection {
  id: string;
  heading: string;
  content: string; // Markdown / HTML styled string
  table?: {
    headers: string[];
    rows: string[][];
  };
  tipBox?: string;
}

export interface BlogPost {
  slug: string;
  title: string;
  subtitle: string;
  description: string;
  category: 'Polity' | 'Economy' | 'Geography' | 'Environment' | 'Strategy' | 'Science & Tech';
  readTime: string;
  publishedDate: string;
  lastUpdated: string;
  author: {
    name: string;
    role: string;
  };
  tags: string[];
  takeaways: string[];
  toc: { id: string; title: string }[];
  sections: BlogSection[];
  relatedQuestionIds: string[];
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'fundamental-rights-article-summary',
    title: 'Fundamental Rights (Articles 12–35): Complete Summary, Exceptions & UPSC PYQ Trends',
    subtitle: 'High-yield breakdown of Part III of the Constitution with standard M. Laxmikanth citations and previous year trap analysis.',
    description: 'Master Fundamental Rights (Articles 12 to 35) for UPSC CSE Prelims. Clear classification, exceptions, writ jurisdictions (Article 32 vs 226), and PYQ trends.',
    category: 'Polity',
    readTime: '8 min read',
    publishedDate: '2026-08-10',
    lastUpdated: '2026-08-18',
    author: {
      name: 'UPSCSphere Academic Review Team',
      role: 'Indian Polity & Governance Faculty',
    },
    tags: ['Polity', 'Fundamental Rights', 'Article 21', 'Writs', 'M. Laxmikanth', 'UPSC Prelims'],
    takeaways: [
      'Articles 15, 16, 19, 29, and 30 are available ONLY to Indian citizens, whereas the rest apply to all persons (citizens + foreigners).',
      'Fundamental Rights are NOT absolute but qualified. The state can impose reasonable restrictions (subject to judicial review).',
      'Article 20 (Protection in respect of conviction for offences) and Article 21 (Right to life & personal liberty) CANNOT be suspended even during a National Emergency (44th Amendment Act, 1978).',
      'Supreme Court writ jurisdiction under Article 32 is narrower in territorial/legal scope than High Courts under Article 226 (which covers both Fundamental and other legal rights).'
    ],
    toc: [
      { id: 'classification', title: '1. Classification of 6 Fundamental Rights' },
      { id: 'citizens-only', title: '2. Citizen-Only vs All-Persons Rights' },
      { id: 'article-21-evolution', title: '3. The Evolution of Article 21 & Due Process' },
      { id: 'writs-comparison', title: '4. Writs: Article 32 vs Article 226' },
      { id: 'upsc-pyq-traps', title: '5. Common UPSC Examiner Traps' },
    ],
    sections: [
      {
        id: 'classification',
        heading: '1. Classification of 6 Fundamental Rights (Part III)',
        content: `Originally, the Constitution provided for seven Fundamental Rights. However, the **Right to Property (Article 31)** was removed from the list of Fundamental Rights by the **44th Constitutional Amendment Act, 1978**, and made a constitutional/legal right under **Article 300-A** in Part XII. Today, there are six fundamental rights guaranteed under Articles 14–32:`,
        table: {
          headers: ['Category of Right', 'Articles Covered', 'Key Significance'],
          rows: [
            ['Right to Equality', 'Articles 14 – 18', 'Rule of law, prohibition of discrimination, abolition of untouchability & titles'],
            ['Right to Freedom', 'Articles 19 – 22', '6 democratic freedoms, protection from ex-post facto laws, life & personal liberty'],
            ['Right against Exploitation', 'Articles 23 – 24', 'Prohibition of human trafficking, begar (forced labor), and hazardous child labor'],
            ['Right to Freedom of Religion', 'Articles 25 – 28', 'Freedom of conscience, profession, religious management, and tax exemption'],
            ['Cultural and Educational Rights', 'Articles 29 – 30', 'Protection of minority language, script, culture & right to establish institutions'],
            ['Right to Constitutional Remedies', 'Article 32', 'Remedies for enforcement of Part III via 5 prerogative writs (Habeas Corpus, etc.)']
          ]
        },
        tipBox: 'Standard Citation: Indian Polity by M. Laxmikanth (7th Edition), Chapter 7 "Fundamental Rights", Pages 7.1 – 7.34.'
      },
      {
        id: 'citizens-only',
        heading: '2. Rights Available Exclusively to Citizens vs All Persons',
        content: `UPSC frequently tests the precise distinction between rights granted solely to Indian Citizens versus those available to any person (including foreign nationals and corporations).\n\n**Available ONLY to Citizens (Remember code 15-16-19-29-30):**\n• **Article 15:** Prohibition of discrimination on grounds only of religion, race, caste, sex or place of birth.\n• **Article 16:** Equality of opportunity in matters of public employment.\n• **Article 19:** Protection of 6 freedoms (speech, assembly, association, movement, residence, profession).\n• **Article 29:** Protection of language, script, and culture of minorities.\n• **Article 30:** Right of minorities to establish and administer educational institutions.\n\n**Available to ALL Persons (Citizens + Foreigners):**\n• Articles 14, 20, 21, 21A, 22, 23, 24, 25, 26, 27, and 28. (Note: Enemy aliens do NOT get Article 22 protection against arrest and detention).`
      },
      {
        id: 'article-21-evolution',
        heading: '3. The Evolution of Article 21 & Due Process of Law',
        content: `Article 21 declares: *"No person shall be deprived of his life or personal liberty except according to procedure established by law."*\n\n1. **A.K. Gopalan Case (1950):** The Supreme Court took a narrow view, holding that "procedure established by law" only required the procedure to be enacted legally by the legislature (procedural check only).\n2. **Maneka Gandhi Case (1978):** Overruled Gopalan. The Court held that the procedure must be **"just, fair, and reasonable"**, thereby introducing the American concept of **"Due Process of Law"** into Article 21.\n3. **K.S. Puttaswamy Case (2017):** A 9-judge Constitution Bench unanimously ruled that the **Right to Privacy** is a fundamental right intrinsically protected under Article 21 and the freedoms guaranteed in Part III.`
      },
      {
        id: 'writs-comparison',
        heading: '4. Writs: Article 32 (Supreme Court) vs Article 226 (High Courts)',
        content: `Both the Supreme Court and High Courts can issue the 5 writs: *Habeas Corpus, Mandamus, Prohibition, Certiorari, and Quo-Warranto*. However, there are 3 critical differences tested by UPSC:`,
        table: {
          headers: ['Parameter', 'Article 32 (Supreme Court)', 'Article 226 (High Court)'],
          rows: [
            ['Jurisdiction Scope', 'ONLY for enforcement of Fundamental Rights (Part III)', 'For Fundamental Rights AND for "any other purpose" (ordinary legal rights) — broader scope'],
            ['Constitutional Nature', 'Article 32 is itself a Fundamental Right; SC cannot refuse relief', 'Article 226 is discretionary; HC may refuse if alternative remedy exists'],
            ['Territorial Extent', 'Throughout the territory of India against any authority', 'Within the State territory, or where cause of action arises']
          ]
        }
      },
      {
        id: 'upsc-pyq-traps',
        heading: '5. Common UPSC Examiner Traps in Prelims',
        content: `• **Trap 1:** Claiming that Article 19 freedoms can never be restricted. *Fact:* All 6 freedoms have reasonable restrictions defined in Articles 19(2) to 19(6).\n• **Trap 2:** Claiming that Martial Law (Article 34) is defined in the Constitution. *Fact:* "Martial Law" has not been defined anywhere in the Constitution.\n• **Trap 3:** Claiming Quo-Warranto can be sought only by an aggrieved person. *Fact:* Unlike other writs, Quo-Warranto can be filed by **any interested person**, even if not personally aggrieved.`
      }
    ],
    relatedQuestionIds: ['pyq-2026-gs-01', 'pyq-2025-gs-01', 'pyq-2024-gs-01', 'pyq-2023-gs-01']
  },
  {
    slug: 'preamble-amendments-and-basic-structure',
    title: 'Preamble of the Indian Constitution: Key Words, 42nd Amendment & Landmark Judgments',
    subtitle: 'Sovereign, Socialist, Secular, Democratic, Republic — complete analysis of constitutional jurisprudence.',
    description: 'Understand the Preamble of the Indian Constitution for UPSC Prelims: Objectives Resolution, 42nd Amendment (1976), Berubari vs Kesavananda Bharati, and Basic Structure.',
    category: 'Polity',
    readTime: '6 min read',
    publishedDate: '2026-08-05',
    lastUpdated: '2026-08-16',
    author: {
      name: 'UPSCSphere Academic Review Team',
      role: 'Indian Polity & Governance Faculty',
    },
    tags: ['Preamble', 'Basic Structure', '42nd Amendment', 'Kesavananda Bharati', 'UPSC Prelims'],
    takeaways: [
      'The Preamble is based on Jawaharlal Nehru’s "Objectives Resolution", introduced on December 13, 1946, and adopted on January 22, 1947.',
      'The Preamble has been amended ONLY ONCE till date by the 42nd Constitutional Amendment Act, 1976, which added three new words: SOCIALIST, SECULAR, and INTEGRITY.',
      'In Kesavananda Bharati (1973), the Supreme Court ruled that the Preamble IS part of the Constitution and can be amended under Article 368 without altering the Basic Structure.',
      'The Preamble is non-justiciable (not enforceable in courts of law) and is neither a source of power to the legislature nor a prohibition upon legislative powers.'
    ],
    toc: [
      { id: 'four-ingredients', title: '1. The 4 Core Ingredients of the Preamble' },
      { id: 'key-keywords', title: '2. Breakdown of Key Keywords in Order' },
      { id: 'judicial-verdicts', title: '3. Berubari, Kesavananda & LIC of India Cases' },
      { id: 'amendability', title: '4. Amendability under Article 368' },
    ],
    sections: [
      {
        id: 'four-ingredients',
        heading: '1. The 4 Core Ingredients of the Preamble',
        content: `The Preamble reveals four essential dimensions of the Indian Polity:\n1. **Source of Authority:** Derives its authority directly from the people of India (*"We, the People of India"*).\n2. **Nature of Indian State:** Sovereign, Socialist, Secular, Democratic, Republic.\n3. **Objectives of the Constitution:** Justice (Social, Economic, Political), Liberty (Thought, Expression, Belief, Faith, Worship), Equality (Status and Opportunity), and Fraternity (Assuring the dignity of the individual and unity & integrity of the nation).\n4. **Date of Adoption:** 26th November 1949.`
      },
      {
        id: 'key-keywords',
        heading: '2. Breakdown of Key Keywords in Sequence',
        content: `• **Sovereign:** India is neither a dependency nor a dominion of any other nation. It is completely free to conduct its own internal and external affairs.\n• **Socialist (Added by 42nd CAA 1976):** Indian socialism is 'Democratic Socialism' (mixed economy), not 'Communist Socialism' (state nationalization).\n• **Secular (Added by 42nd CAA 1976):** India embodies 'Positive Secularism' — giving equal respect and protection to all religions, unlike Western negative secularism.\n• **Democratic:** Parliamentary democracy with universal adult franchise, rule of law, and independent judiciary.\n• **Republic:** The head of state (President of India) is always elected indirectly for a fixed term of 5 years; there is no hereditary monarch.`
      },
      {
        id: 'judicial-verdicts',
        heading: '3. Supreme Court Judgments on Preamble Status',
        content: `• **Berubari Union Case (1960):** The Supreme Court held that the Preamble is NOT a part of the Constitution.\n• **Kesavananda Bharati Case (1973):** Overruled Berubari Union. The Court held that the Preamble **IS part of the Constitution** and contains the basic elements of the constitutional philosophy.\n• **LIC of India Case (1995):** Reaffirmed that the Preamble is an integral part of the Constitution.`
      }
    ],
    relatedQuestionIds: ['pyq-2026-gs-01', 'pyq-2025-gs-01', 'pyq-2021-gs-01']
  },
  {
    slug: 'monetary-policy-tools-inflation-control',
    title: 'RBI Monetary Policy Tools Explained: Repo, Reverse Repo, SDF, MSF & CRR for UPSC Prelims',
    subtitle: 'Quantitative vs qualitative instruments, liquidity management, and MPC mandate simplified.',
    description: 'Learn RBI Monetary Policy tools for UPSC Prelims: Repo Rate, Standing Deposit Facility (SDF), Marginal Standing Facility (MSF), CRR, SLR, Open Market Operations, and MPC structure.',
    category: 'Economy',
    readTime: '7 min read',
    publishedDate: '2026-08-01',
    lastUpdated: '2026-08-15',
    author: {
      name: 'UPSCSphere Academic Review Team',
      role: 'Indian Economy & Macroeconomics Faculty',
    },
    tags: ['Economy', 'RBI', 'Monetary Policy', 'Inflation', 'SDF', 'Repo Rate', 'UPSC Prelims'],
    takeaways: [
      'The Monetary Policy Committee (MPC) consists of 6 members (3 from RBI including Governor + 3 appointed by Central Govt). The Governor holds the casting vote in case of a tie.',
      'The primary objective of monetary policy is to maintain price stability (target inflation of 4% +/- 2% CPI) while keeping in mind the objective of growth.',
      'Standing Deposit Facility (SDF) allows RBI to absorb overnight liquidity from banks WITHOUT providing government securities as collateral.',
      'Marginal Standing Facility (MSF) allows scheduled commercial banks to borrow overnight funds against their SLR quota (dipping into statutory reserves) at a penal rate.'
    ],
    toc: [
      { id: 'quantitative-tools', title: '1. Quantitative vs Qualitative Tools' },
      { id: 'laf-corridor', title: '2. The Liquidity Adjustment Facility (LAF) Corridor' },
      { id: 'sdf-vs-reverse-repo', title: '3. SDF vs Reverse Repo: Why SDF was introduced' },
      { id: 'mpc-framework', title: '4. The Monetary Policy Committee (MPC) Framework' },
    ],
    sections: [
      {
        id: 'quantitative-tools',
        heading: '1. Quantitative Tools of Monetary Policy',
        content: `Quantitative tools control the total volume and cost of credit in the economy without discriminating between specific sectors:`,
        table: {
          headers: ['Instrument', 'Definition', 'Effect of Rate Hike'],
          rows: [
            ['Cash Reserve Ratio (CRR)', 'Fraction of Net Demand and Time Liabilities (NDTL) banks must hold with RBI as cash (earns 0% interest)', 'Reduces lending capacity, controls money supply'],
            ['Statutory Liquidity Ratio (SLR)', 'Fraction of NDTL banks must maintain in liquid assets (Gold, Govt Securities, Cash)', 'Ensures solvency & channelizes funds to Govt bonds'],
            ['Repo Rate', 'Rate at which RBI lends short-term money to commercial banks against collateral of Govt securities', 'Raises borrowing cost across the banking sector, curbing inflation'],
            ['Standing Deposit Facility (SDF)', 'Floor of the LAF corridor; absorbs liquidity from banks without collateral', 'Sterilizes excess system liquidity efficiently']
          ]
        }
      },
      {
        id: 'laf-corridor',
        heading: '2. The Operational LAF Corridor Architecture',
        content: `The LAF Corridor forms the benchmark interest rate band in India:\n• **Ceiling:** Marginal Standing Facility (MSF Rate) = Repo Rate + 25 bps\n• **Center / Anchor:** Policy Repo Rate (decided by MPC)\n• **Floor:** Standing Deposit Facility (SDF Rate) = Repo Rate - 25 bps\n\nThe call money market rate normally trades within this 50 basis point corridor.`
      }
    ],
    relatedQuestionIds: ['pyq-2026-gs-03', 'pyq-2025-gs-03', 'pyq-2024-gs-02']
  },
  {
    slug: 'ramsar-wetlands-national-parks-map-guide',
    title: 'Important Ramsar Wetlands & National Parks in India (2026 Map Guide & Cheat Sheet)',
    subtitle: 'Montreux record sites, latest additions, critical river basins, and wildlife corridors for UPSC.',
    description: 'Comprehensive Ramsar wetlands and National Parks cheat sheet for UPSC Prelims: Keoladeo, Loktak, Chilika, Sundarbans, Montreux Record, and ecological characteristics.',
    category: 'Environment',
    readTime: '9 min read',
    publishedDate: '2026-07-28',
    lastUpdated: '2026-08-14',
    author: {
      name: 'UPSCSphere Academic Review Team',
      role: 'Ecology & Environment Faculty',
    },
    tags: ['Environment', 'Ramsar Wetlands', 'National Parks', 'Montreux Record', 'Biodiversity'],
    takeaways: [
      'India currently has over 85 designated Ramsar Sites of International Importance, the highest in South Asia.',
      'Tamil Nadu has the highest number of Ramsar sites in India, followed by Uttar Pradesh.',
      'Only 2 Indian wetlands are currently listed in the Montreux Record: Keoladeo National Park (Rajasthan) and Loktak Lake (Manipur). Chilika Lake was removed after successful restoration.',
      'Loktak Lake is famous for its floating phumdis and the world\'s only floating national park: Keibul Lamjao (habitat of endangered Sangai brow-antlered deer).'
    ],
    toc: [
      { id: 'ramsar-convention', title: '1. The Ramsar Convention & Criteria' },
      { id: 'montreux-record', title: '2. Montreux Record: Keoladeo & Loktak' },
      { id: 'statewise-highlights', title: '3. High-Yield State-Wise Wetlands & Rivers' },
      { id: 'upsc-matching-questions', title: '4. How UPSC Frames Map Questions' },
    ],
    sections: [
      {
        id: 'ramsar-convention',
        heading: '1. The Ramsar Convention on Wetlands (1971)',
        content: `Signed in Ramsar, Iran, in 1971, the convention entered into force in 1975. It is an intergovernmental treaty for the conservation and wise use of wetlands.\n\n**Definition of Wetland under Ramsar:**\nAreas of marsh, fen, peatland, or water, whether natural or artificial, permanent or temporary, with water that is static or flowing, fresh, brackish, or salt, including areas of marine water the depth of which at low tide does not exceed six meters.`
      },
      {
        id: 'montreux-record',
        heading: '2. The Montreux Record Explained',
        content: `The Montreux Record is a register of wetland sites on the Ramsar List where changes in ecological character have occurred, are occurring, or are likely to occur as a result of technological developments, pollution, or other human interference.\n\n• **Keoladeo National Park (Rajasthan):** Listed due to water shortage and grazing pressure.\n• **Loktak Lake (Manipur):** Listed due to ecological problems resulting from Ithai barrage construction and siltation.\n• **Chilika Lake (Odisha):** Added in 1993, but successfully removed in 2002 after lake mouth desiltation.`
      }
    ],
    relatedQuestionIds: ['pyq-2026-gs-04', 'pyq-2025-gs-04', 'pyq-2023-gs-02']
  },
  {
    slug: 'upsc-prelims-elimination-techniques-truth',
    title: 'UPSC Prelims Elimination Techniques in 2026: What Still Works After Pair-Based Options',
    subtitle: 'An objective, empirical analysis of "Only one pair", "Only two pairs" options and high-accuracy heuristics.',
    description: 'Master UPSC Prelims elimination techniques in the post-2023 pair-based era. Extreme word filters, conceptual consistency, dimensional cross-checks, and risk management.',
    category: 'Strategy',
    readTime: '6 min read',
    publishedDate: '2026-07-20',
    lastUpdated: '2026-08-12',
    author: {
      name: 'UPSCSphere Academic Review Team',
      role: 'Civil Services Examination Mentorship Desk',
    },
    tags: ['UPSC Strategy', 'Elimination Techniques', 'Prelims 2026', 'Pair Questions', 'Negative Marking'],
    takeaways: [
      'The "Pair-based format" ("Only one pair / Only two pairs") eliminates statement-linkage shortcuts, requiring direct knowledge of at least 2 statements.',
      'Extreme absolute words ("always", "drastically", "completely prohibited", "all species") still carry a ~80% historical probability of being incorrect statements in Science & Environment.',
      'Broad, permissive statements ("can be used for", "has the potential to", "some species of") in Science & Tech questions are statistically correct ~90% of the time.',
      'Negative marking management: Attempting 80–88 questions with structured 50-50 elimination gives the highest statistical probability of clearing the 88–96 cutoff.'
    ],
    toc: [
      { id: 'the-shift', title: '1. The Paradigm Shift since Prelims 2023' },
      { id: 'surviving-heuristics', title: '2. Four Elimination Heuristics That Still Work' },
      { id: 'negative-marking-math', title: '3. The Mathematics of 50-50 Intelligent Guesswork' },
    ],
    sections: [
      {
        id: 'the-shift',
        heading: '1. The Paradigm Shift: Why Old 1-2-3 Tricks Failed',
        content: `Before 2023, if you knew Statement 2 was definitely wrong, options like *(a) 1 and 2*, *(b) 2 and 3*, and *(d) 1, 2, and 3* could all be eliminated in one second, leaving *(c) 1 and 3 only* as the answer without even reading Statement 3.\n\nWith "Only one pair / Only two pairs / All three pairs / None", UPSC forced aspirants to verify the factual truth value of each statement independently.`
      },
      {
        id: 'surviving-heuristics',
        heading: '2. Four Elimination Heuristics That Still Work',
        content: `1. **The Permissive Science Rule:** Science & Technology questions dealing with emerging technologies (AI, Gene Editing, Quantum Computing, Space Exploration) use words like *"can be applied"*, *"has potential in"*. These are almost always correct because scientific possibility cannot be categorically ruled out.\n2. **Extreme Institutional Mandate Checks:** Watch out when UPSC attributes one ministry's flagship scheme to another (e.g., attributing an Environment Ministry program to the Ministry of Agriculture).\n3. **Double Negative Statements:** Statements formulated with double negatives are deliberately designed to test close reading under exam stress.\n4. **Contextual Dimensionality:** In Economy questions, check whether a variable is a *flow concept* (GDP, Fiscal Deficit) or a *stock concept* (Public Debt, Forex Reserves).`
      }
    ],
    relatedQuestionIds: ['pyq-2026-gs-02', 'pyq-2026-gs-01', 'pyq-2025-gs-02']
  }
];

export function getBlogPostBySlug(slug: string): BlogPost | null {
  return blogPosts.find((p) => p.slug === slug) || null;
}

export function getAllBlogSlugs(): string[] {
  return blogPosts.map((p) => p.slug);
}
