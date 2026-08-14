import { Question } from '@/lib/types';

// ─────────────────────────────────────────────────────────────────────────────
//  UPSC PRELIMS QUESTION BANK
//  All options follow the EXACT format used in UPSC Prelims 2019–2024 papers.
//
//  Pattern Types (mirrors real UPSC OMR papers):
//  TYPE-A  Statement-based (3 stmts): "1 and 2 only" / "2 and 3 only" / "1 and 3 only" / "1, 2 and 3"
//  TYPE-B  Statement-based (2 stmts): "1 only" / "2 only" / "Both 1 and 2" / "Neither 1 nor 2"
//  TYPE-C  Direct 4-option best answer
//  TYPE-D  Pair/list matching: "A-1, B-2" etc.
// ─────────────────────────────────────────────────────────────────────────────

export const standardQuestions: Question[] = [

  // ═══════════════════════════════════════════════
  //  INDIAN POLITY & GOVERNANCE
  // ═══════════════════════════════════════════════

  // [TYPE-A] — 3 statements
  {
    id: 'pol-001',
    subject: 'polity',
    topic: 'Preamble & Basic Structure',
    subTopic: 'Constitutional Philosophy',
    question: 'With reference to the Preamble of the Constitution of India, consider the following statements:\n\n1. It is non-justiciable in a court of law.\n2. It can be amended under Article 368 of the Constitution.\n3. It was enacted by the Constituent Assembly before the rest of the Constitution was enacted.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: The Preamble is non-justiciable (not enforceable in courts).\nStatement 2 is correct: Kesavananda Bharati case (1973) held the Preamble can be amended under Article 368, subject to Basic Structure doctrine. It was amended once by the 42nd Amendment (1976).\nStatement 3 is incorrect: The Preamble was adopted AFTER the Constitution was enacted — it summarises the document, so it must come last.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 4: Preamble of the Constitution',
      pageNumber: 'Page 4.1 – 4.7',
      keyExcerpt: 'The Preamble was enacted after the rest of the Constitution. It is non-justiciable and can be amended under Article 368.'
    },
    eliminationTip: 'Statement 3 is clearly false — you cannot summarise a document before writing it. Eliminate all options containing 3. Only Option (a) remains.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'GS',
    tags: ['Polity', 'Preamble', 'Kesavananda Bharati', 'Article 368']
  },

  // [TYPE-C] — Direct single best answer
  {
    id: 'pol-002',
    subject: 'polity',
    topic: 'Fundamental Rights & Writs',
    subTopic: 'Article 21 & Privacy',
    question: 'In India, the "Right to be Forgotten" as part of the Right to Privacy derives from which Constitutional provision, as declared by the Supreme Court?',
    options: [
      'Article 14 — Right to Equality before law',
      'Article 19(1)(a) — Freedom of Speech and Expression',
      'Article 21 — Protection of Life and Personal Liberty',
      'Article 32 — Right to Constitutional Remedies'
    ],
    correctAnswer: 2,
    explanation: 'In K.S. Puttaswamy v. Union of India (2017), a nine-judge Constitution Bench unanimously held that the Right to Privacy is a fundamental right emanating from Article 21. The Right to be Forgotten — a component of informational privacy — is therefore protected under Article 21.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 7: Fundamental Rights',
      pageNumber: 'Page 7.22 – 7.26',
      keyExcerpt: 'K.S. Puttaswamy case (2017): Right to Privacy is a fundamental right under Article 21.'
    },
    eliminationTip: 'Any modern rights (right to sleep, clean environment, privacy, marry freely) are extensions of Article 21\'s "life and personal liberty". Article 14 = equality; Article 19 = six freedoms; Article 32 = remedy. Article 21 must be the answer.',
    difficulty: 'Moderate',
    frequency: 6,
    tags: ['Polity', 'Article 21', 'Puttaswamy', 'Privacy']
  },

  // [TYPE-B] — 2 statements
  {
    id: 'pol-003',
    subject: 'polity',
    topic: 'Parliament & Legislation',
    subTopic: 'Money Bills vs Financial Bills',
    question: 'Consider the following statements regarding a Money Bill under the Indian Constitution:\n\n1. A Money Bill can be introduced only in the Lok Sabha and only on the recommendation of the President.\n2. If the Speaker of Lok Sabha declares a Bill to be a Money Bill, the decision of the Speaker is final and cannot be questioned in any court.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 2,
    explanation: 'Statement 1 is correct: Under Article 110 read with Article 109, a Money Bill is introduced only in Lok Sabha and only on President\'s recommendation.\nStatement 2 is correct: Article 110(3) states that if any question arises whether a bill is a Money Bill, the decision of the Speaker of Lok Sabha thereon shall be FINAL. Courts cannot intervene on this classification.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 22: Parliament',
      pageNumber: 'Page 22.18 – 22.21',
      keyExcerpt: 'Article 110(3): If any question arises whether a Bill is a Money Bill or not, the decision of the Speaker of Lok Sabha thereon shall be final.'
    },
    eliminationTip: 'Both statements are textbook-correct facts about Money Bills. The Speaker\'s decision on Money Bill classification is unquestionable (Article 110(3)). Answer: (c) Both 1 and 2.',
    difficulty: 'Easy',
    frequency: 8,
    tags: ['Polity', 'Money Bill', 'Article 110', 'Speaker']
  },

  // [TYPE-A] — 3 statements
  {
    id: 'pol-004',
    subject: 'polity',
    topic: 'Judiciary',
    subTopic: 'Writs Comparison',
    question: 'With reference to the writs issued by constitutional courts in India, consider the following statements:\n\n1. The writ of Quo-Warranto can be sought by any interested person, even if he/she is not a personally aggrieved party.\n2. The writ of Mandamus cannot be issued against a private individual or private body.\n3. The writ of Prohibition can be issued against both judicial and executive authorities.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: Quo-Warranto is a public interest writ — anyone can challenge illegal usurpation of a public office (locus standi is relaxed).\nStatement 2 is correct: Mandamus directs performance of a public duty and cannot be issued against a private individual or body.\nStatement 3 is incorrect: Prohibition is issued only against JUDICIAL and QUASI-JUDICIAL authorities to prevent them from exceeding jurisdiction. It is NOT issued against executive authorities.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 7: Fundamental Rights (Writs)',
      pageNumber: 'Page 7.33 – 7.35',
      keyExcerpt: 'Writ of Prohibition can be issued only against judicial and quasi-judicial authorities, not administrative/executive bodies.'
    },
    eliminationTip: 'Statement 3 says "executive authorities" — Prohibition only works on judicial/quasi-judicial bodies. Eliminating statement 3 from all options leaves only (a).',
    difficulty: 'UPSC Standard',
    frequency: 5,
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'GS',
    tags: ['Polity', 'Writs', 'Article 32', 'Quo-Warranto', 'Prohibition']
  },

  // [TYPE-A]
  {
    id: 'pol-005',
    subject: 'polity',
    topic: 'Constitutional Amendments',
    subTopic: '42nd & 44th Amendment',
    question: 'Which of the following changes were brought about by the 44th Constitutional Amendment Act, 1978?\n\n1. The word "Armed Rebellion" was substituted for "Internal Disturbance" in Article 352.\n2. The Right to Property was removed from Part III and made a legal right under Article 300A.\n3. The President was empowered to require the Cabinet to reconsider its advice at least once.\n\nWhich of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three statements correctly describe provisions of the 44th Amendment (1978) — enacted to undo Emergency-era excesses of the 42nd Amendment (1976):\n1. "Internal Disturbance" → "Armed Rebellion" in Article 352 to prevent misuse for mere law & order situations.\n2. Right to Property removed from Fundamental Rights (Article 19(1)(f) & 31 deleted); now a statutory right under Article 300A.\n3. President empowered to send back Cabinet advice once; bound on re-sent advice.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 38: Constitutional Amendments',
      pageNumber: 'Page 38.12 – 38.14',
      keyExcerpt: 'The 44th Amendment (1978) reversed major changes made by the 42nd Amendment and strengthened democratic safeguards.'
    },
    eliminationTip: 'The 44th Amendment is a "restoration" amendment post-Emergency — all three changes are its well-documented provisions. Answer: (d) all three.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['Polity', '44th Amendment', 'Emergency', 'Right to Property', 'Article 352']
  },

  // [TYPE-A]
  {
    id: 'pol-006',
    subject: 'polity',
    topic: 'Emergency Provisions',
    subTopic: 'National Emergency — Article 352',
    question: 'Consider the following statements regarding the proclamation of National Emergency under Article 352 of the Constitution of India:\n\n1. It can be proclaimed by the President only on the written advice of the Union Cabinet.\n2. During a National Emergency, Fundamental Rights under Article 19 are automatically suspended.\n3. A resolution for its continuation must be passed by each House of Parliament every six months.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 2 only',
      '1 and 3 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three are correct:\n1. After the 44th Amendment, Presidential proclamation requires WRITTEN advice of the CABINET (not just PM) — to prevent unilateral misuse.\n2. Under Article 358, when emergency is on grounds of war or external aggression, Article 19 freedoms are automatically suspended for the duration.\n3. After initial approval (within 1 month by both Houses with special majority), continuance must be approved every 6 MONTHS by both Houses.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 16: Emergency Provisions',
      pageNumber: 'Page 16.3 – 16.10',
      keyExcerpt: 'A proclamation of National Emergency must be approved by both Houses within one month, and thereafter every six months by special majority.'
    },
    eliminationTip: 'All three are correct textbook facts about Article 352. Every six months → Statement 3 (NOT every year). All correct = (d).',
    difficulty: 'UPSC Standard',
    frequency: 6,
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'GS',
    tags: ['Polity', 'Article 352', 'National Emergency', '44th Amendment']
  },

  // [TYPE-C] — Direct best answer
  {
    id: 'pol-007',
    subject: 'polity',
    topic: 'Constitutional Bodies',
    subTopic: 'Election Commission of India',
    question: 'Which of the following statements correctly describes the unique protection available to the Chief Election Commissioner (CEC) but NOT available to other Election Commissioners?',
    options: [
      'The CEC can be appointed only by the Parliament.',
      'The CEC can be removed only through a process similar to that used for removing a Supreme Court judge.',
      'The CEC has the power to make binding rules for conduct of elections without executive approval.',
      'The CEC can declare a no-confidence motion against any State Election Commission.'
    ],
    correctAnswer: 1,
    explanation: 'Article 324(5): The CEC cannot be removed from office except by a process similar to that of removing a Supreme Court judge (i.e., by an address by both Houses of Parliament passed by special majority on grounds of misbehaviour or incapacity). Other Election Commissioners can be removed on the recommendation of the CEC. This asymmetry in removal procedures is the key constitutional protection for the CEC.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 40: Election Commission',
      pageNumber: 'Page 40.2 – 40.5',
      keyExcerpt: 'Article 324(5): The CEC shall not be removed from office except by the same procedure as a judge of the Supreme Court.'
    },
    eliminationTip: 'The CEC\'s unique protection is the removal procedure — same as SC judge. Options (a), (c), (d) describe powers the CEC does not actually have. Only (b) is constitutionally correct.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Polity', 'Election Commission', 'CEC', 'Article 324']
  },

  // [TYPE-A]
  {
    id: 'pol-008',
    subject: 'polity',
    topic: 'Governor & State Executive',
    subTopic: 'Pardoning Powers — President vs Governor',
    question: 'With reference to the pardoning powers under the Constitution of India, consider the following statements:\n\n1. The President can grant pardon in cases where the punishment or sentence is by a Court Martial.\n2. The Governor can grant pardon in cases of death sentence awarded for an offence against a State law.\n3. Unlike the Governor, the President can pardon in cases where the sentence is one of death.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 only',
      '1 and 3 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: President\'s power under Article 72 extends to pardoning in cases tried by Court Martial — Governors have NO such power.\nStatement 2 is incorrect: The Governor CANNOT pardon death sentences awarded even under State laws — only the President can pardon death sentences under Article 72.\nStatement 3 is incorrect: Both the President (Article 72) and the Governor (Article 161) can grant pardons; but the Governor\'s power is limited (no death, no court martial). Statement 3 wrongly implies Governor cannot pardon at all.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 17: President / Chapter 29: Governor',
      pageNumber: 'Page 17.9, 29.7 – 29.9',
      keyExcerpt: 'The Governor cannot pardon a sentence of death. The President alone can pardon in cases of court martial sentences.'
    },
    eliminationTip: 'The Governor cannot touch death sentences or court martial cases. Statement 2 (Governor can pardon death) is FALSE. Statement 3 says "unlike the Governor" — incorrect because both have pardoning power. Only Statement 1 is true. Answer: (a).',
    difficulty: 'UPSC Standard',
    frequency: 5,
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    tags: ['Polity', 'Pardoning Power', 'Governor', 'President', 'Article 72', 'Article 161']
  },

  // [TYPE-A]
  {
    id: 'pol-009',
    subject: 'polity',
    topic: 'Panchayati Raj',
    subTopic: '73rd Constitutional Amendment',
    question: 'Which of the following provisions of the 73rd Constitutional Amendment Act, 1992 are COMPULSORY for all States to implement?\n\n1. Reservation of seats for Scheduled Castes and Scheduled Tribes in proportion to their population.\n2. Reservation of not less than one-third seats for women in Panchayati Raj institutions.\n3. Establishment of a District Planning Committee in each district.\n4. Establishment of a State Finance Commission every five years.',
    options: [
      '1, 2 and 4 only',
      '1 and 2 only',
      '2, 3 and 4 only',
      '1, 2, 3 and 4'
    ],
    correctAnswer: 0,
    explanation: 'The 73rd Amendment has two parts: Compulsory (binding on all States) and Voluntary (discretionary).\nCOMPULSORY: SC/ST reservation (proportional), Women\'s 1/3rd reservation, Gram Sabha, State Finance Commission, State Election Commission.\nVOLUNTARY (Discretionary): District Planning Committee (DPC) is listed in 74th Amendment under Article 243ZD — but is discretionary, not compulsory under the 73rd Amendment.\nHence 1, 2, and 4 are compulsory; 3 (DPC) is NOT.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 37: Panchayati Raj',
      pageNumber: 'Page 37.5 – 37.9',
      keyExcerpt: 'The compulsory provisions include the constitution of Gram Sabhas, reservation for SC/ST and women, and establishment of State Finance Commission and State Election Commission.'
    },
    eliminationTip: 'DPC (District Planning Committee) is discretionary — not every state has set it up. Eliminate statement 3 → only Options (a) and (b) survive. Since SFC (statement 4) IS compulsory, answer is (a).',
    difficulty: 'UPSC Standard',
    frequency: 7,
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'GS',
    tags: ['Polity', '73rd Amendment', 'Panchayati Raj', 'Local Government']
  },

  // [TYPE-C]
  {
    id: 'pol-010',
    subject: 'polity',
    topic: 'Inter-State Relations',
    subTopic: 'Interstate Water Disputes',
    question: 'Under Article 262 of the Constitution of India, Parliament may by law exclude the jurisdiction of the Supreme Court in respect of disputes relating to:',
    options: [
      'Inter-State tax disputes between State governments',
      'Waters of inter-State rivers or river valleys',
      'Territorial boundaries between Indian States',
      'Bilateral trade agreements between States'
    ],
    correctAnswer: 1,
    explanation: 'Article 262 specifically empowers Parliament to provide for adjudication of disputes relating to waters of inter-State rivers and river valleys. Crucially, Parliament may also, under Article 262(2), BAR the jurisdiction of the Supreme Court over such matters — the only instance in the Constitution where Parliament can exclude SC jurisdiction. The Inter-State Water Disputes Act 1956 was enacted under Article 262.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 14: Centre-State Relations',
      pageNumber: 'Page 14.16 – 14.18',
      keyExcerpt: 'Article 262 is the only provision under which Parliament can bar the original jurisdiction of the Supreme Court.'
    },
    eliminationTip: 'Article 262 is uniquely about WATER disputes. Options (a), (c), (d) are not covered by 262. The unique fact tested is that SC jurisdiction can be excluded only for inter-state river water disputes.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Polity', 'Article 262', 'Inter-State Water', 'River Tribunal']
  },

  // [TYPE-B] — 2 statements
  {
    id: 'pol-011',
    subject: 'polity',
    topic: 'Fundamental Rights',
    subTopic: 'Article 32 vs Article 226',
    question: 'Consider the following statements regarding writ jurisdiction of the courts in India:\n\n1. Under Article 32, the Supreme Court can issue writs only for enforcement of Fundamental Rights; whereas under Article 226, High Courts can issue writs for enforcement of Fundamental Rights as well as for any other purpose.\n2. The right to move the Supreme Court under Article 32 is itself a Fundamental Right, and therefore the Supreme Court cannot refuse to exercise its Article 32 jurisdiction.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 2,
    explanation: 'Both statements are correct:\n1. SC under Article 32 → only for Fundamental Rights. HC under Article 226 → for FRs AND any other legal right (wider scope).\n2. Article 32 is itself a FR (Part III). Therefore, the SC CANNOT refuse to exercise it when a FR is violated. HC writ jurisdiction under Article 226 is discretionary.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 32: High Courts / Chapter 7: Article 32',
      pageNumber: 'Page 7.36, 32.9 – 32.11',
      keyExcerpt: 'Article 226 gives wider power to High Courts — they can issue writs for purposes other than enforcement of Fundamental Rights.'
    },
    eliminationTip: 'Memory rule: HC 226 = WIDER (any legal right); SC 32 = NARROWER but GUARANTEED. Both statements are correct → (c) Both 1 and 2.',
    difficulty: 'Moderate',
    frequency: 6,
    tags: ['Polity', 'Article 32', 'Article 226', 'Writs', 'High Court']
  },

  // [TYPE-C]
  {
    id: 'pol-012',
    subject: 'polity',
    topic: 'Lok Sabha & Rajya Sabha',
    subTopic: 'Exclusive Powers of Rajya Sabha',
    question: 'The Rajya Sabha enjoys two exclusive constitutional powers not shared with the Lok Sabha. Which of the following correctly identifies BOTH of these powers?',
    options: [
      'Initiating Constitutional Amendment Bills and approving the Union Budget',
      'Passing a resolution under Article 249 to legislate on a State List subject AND passing a resolution under Article 312 to create a new All India Service',
      'Approving declaration of National Emergency AND removing the President from office',
      'Rejecting a Money Bill AND passing no-confidence motion against the Council of Ministers'
    ],
    correctAnswer: 1,
    explanation: 'The Rajya Sabha\'s two EXCLUSIVE special powers:\n1. Article 249: By a 2/3rd special majority, RS can authorise Parliament to legislate on a State List subject for national interest (resolution valid for 1 year, renewable).\n2. Article 312: By a 2/3rd special majority, RS can declare that it is necessary in national interest to create a new All India Service.\nAll other listed actions involve BOTH Houses. Only Option (b) captures both exclusive RS powers correctly.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 22: Parliament — Special Powers of Rajya Sabha',
      pageNumber: 'Page 22.9 – 22.11',
      keyExcerpt: 'Rajya Sabha has two exclusive powers: Article 249 (legislate on State List) and Article 312 (create All India Services). These powers are not possessed by the Lok Sabha.'
    },
    eliminationTip: 'Only two powers are exclusive to RS: Art 249 + Art 312. Option (b) is the only one that pairs BOTH these correctly. All other options mix in powers that belong to both Houses.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['Polity', 'Rajya Sabha', 'Article 249', 'Article 312', 'All India Services']
  },

  // [TYPE-B]
  {
    id: 'pol-013',
    subject: 'polity',
    topic: 'Constitutional Bodies',
    subTopic: 'CAG — Comptroller and Auditor General',
    question: 'Consider the following statements about the Comptroller and Auditor General (CAG) of India:\n\n1. The CAG is appointed by the President and submits his audit reports to the President (for Union) and respective Governors (for States).\n2. The CAG can be removed from office by the President on his/her own discretion, if the President is satisfied about the CAG\'s incapacity.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: CAG (Article 148) is appointed by President. Reports are laid before Parliament/State Legislatures through President/Governors respectively.\nStatement 2 is incorrect: CAG can be removed ONLY through an address of BOTH Houses of Parliament passed by special majority — exactly like removal of a Supreme Court judge. The President CANNOT remove the CAG unilaterally.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 49: CAG of India',
      pageNumber: 'Page 49.2 – 49.5',
      keyExcerpt: 'CAG can be removed only through Parliamentary impeachment — not by Presidential order alone.'
    },
    eliminationTip: 'Statement 2 says "President\'s own discretion" — always wrong for removal of constitutional offices. CAG = same removal procedure as SC judge = parliamentary address. Only Statement 1 is correct → (a).',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Polity', 'CAG', 'Article 148', 'Constitutional Bodies']
  },

  // [TYPE-D] — Matching/Pairs
  {
    id: 'pol-014',
    subject: 'polity',
    topic: 'Schedules of the Constitution',
    subTopic: 'Schedule–Subject Matching',
    question: 'With reference to the Schedules of the Indian Constitution, consider the following pairs:\n\nSchedule — Subject Matter\n\n1. Second Schedule — Salaries and emoluments of constitutional functionaries\n2. Fifth Schedule — Administration of Scheduled Areas in Assam, Meghalaya, Tripura and Mizoram\n3. Ninth Schedule — Acts placed beyond judicial review relating to land reforms\n4. Tenth Schedule — Provisions regarding disqualification on grounds of defection\n\nHow many of the above pairs are correctly matched?',
    options: [
      'Only one pair',
      'Only two pairs',
      'Only three pairs',
      'All four pairs'
    ],
    correctAnswer: 2,
    explanation: 'Pair 1: CORRECT — 2nd Schedule deals with emoluments of President, VP, Governors, Speaker, SC/HC judges, CAG.\nPair 2: INCORRECT — The FIFTH Schedule covers Scheduled Areas in states OTHER THAN Assam, Meghalaya, Tripura and Mizoram. Those four NE states are covered by the SIXTH Schedule.\nPair 3: CORRECT — 9th Schedule contains land reform Acts placed beyond judicial review (added by 1st Amendment 1951).\nPair 4: CORRECT — 10th Schedule (added by 52nd Amendment, 1985) contains Anti-Defection provisions.\nThree pairs (1, 3, 4) are correct.',
    bookReference: {
      bookName: 'Indian Polity by M. Laxmikanth',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 2: Making of the Constitution (Schedules)',
      pageNumber: 'Page 2.11 – 2.14',
      keyExcerpt: 'Fifth Schedule → Scheduled Areas (excluding NE states). Sixth Schedule → NE tribal areas (Assam, Meghalaya, Tripura, Mizoram).'
    },
    eliminationTip: '5th vs 6th Schedule is the classic UPSC trap. Fifth = rest of India; Sixth = those 4 NE states. Pair 2 is wrong. Three pairs correct → (c) Only three pairs.',
    difficulty: 'UPSC Standard',
    frequency: 6,
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'GS',
    tags: ['Polity', 'Schedules', 'Constitution', 'Fifth Schedule', 'Sixth Schedule', 'Tenth Schedule']
  },

  // ═══════════════════════════════════════════════
  //  HISTORY — Ancient, Medieval, Modern, Freedom Struggle
  // ═══════════════════════════════════════════════

  // [TYPE-C]
  {
    id: 'hist-001',
    subject: 'history',
    topic: 'Governor Generals & British Policies',
    subTopic: 'Subsidiary Alliance System',
    question: 'Which of the following was NOT a condition of the Subsidiary Alliance introduced by Lord Wellesley?',
    options: [
      'The Indian ruler had to maintain a British Resident at his court.',
      'The Indian ruler could not employ any European in his service without the approval of the British.',
      'The Indian ruler had to surrender his entire internal civil administration to the East India Company.',
      'The Indian ruler could not enter into any alliance with other powers without British approval.'
    ],
    correctAnswer: 2,
    explanation: 'Under the Subsidiary Alliance, the British guaranteed non-interference in the INTERNAL AFFAIRS of the protected state — this was its stated premise. The king surrendered only external relations (foreign policy) and defence; internal governance formally remained with the Indian ruler. Surrendering the entire internal administration describes something closer to Direct Annexation or the Doctrine of Lapse — not the Subsidiary Alliance.',
    bookReference: {
      bookName: 'A Brief History of Modern India by Rajiv Ahir (Spectrum)',
      edition: '2023 Edition',
      chapter: 'Chapter 5: Expansion and Consolidation of British Power',
      pageNumber: 'Page 112 – 115',
      keyExcerpt: 'Under Subsidiary Alliance, the British undertook not to interfere in the internal affairs of the allied state — though this was rarely kept in practice.'
    },
    eliminationTip: 'Option (c) describes total takeover — annexation, not protectorate. Subsidiary Alliance = keep crown but surrender foreign policy and pay for British troops. Option (c) is NOT a condition.',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['History', 'Wellesley', 'Subsidiary Alliance', 'British India']
  },

  // [TYPE-A]
  {
    id: 'hist-002',
    subject: 'history',
    topic: 'Freedom Struggle — National Movements',
    subTopic: 'Cabinet Mission Plan 1946',
    question: 'With reference to the Cabinet Mission Plan, 1946, consider the following statements:\n\n1. It proposed an undivided India with a three-tier federal structure.\n2. It rejected the Muslim League\'s demand for a separate sovereign Pakistan.\n3. It grouped provincial assemblies into Sections A, B, and C on the basis of religious majority.\n\nWhich of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three are correct:\n1. Cabinet Mission Plan proposed Indian Union handling Foreign Affairs, Defence, Communications — with Provinces/Groups retaining all other subjects (three-tier: Union, Group, Province).\n2. The Mission explicitly REJECTED the demand for a sovereign Pakistan, arguing it would not solve minority problems.\n3. Provinces grouped into: Section A (Hindu-majority — CP, UP, Bihar, Orissa, Bombay, Madras), Section B (NW Muslim-majority — Punjab, NWFP, Sindh), Section C (NE Muslim-majority — Bengal, Assam).',
    bookReference: {
      bookName: 'A Brief History of Modern India by Rajiv Ahir (Spectrum)',
      edition: '2023 Edition',
      chapter: 'Chapter 26: Post-War National Scenario',
      pageNumber: 'Page 508 – 512',
      keyExcerpt: 'The Cabinet Mission rejected a full-fledged Pakistan. It proposed a Union of India dealing with three subjects — Foreign Affairs, Defence, and Communications.'
    },
    eliminationTip: 'Cabinet Mission ≠ Partition. It rejected Pakistan. Mountbatten Plan accepted partition. All three statements are correct → (d) 1, 2 and 3.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'GS',
    tags: ['History', 'Cabinet Mission', '1946', 'Partition', 'Sectioning']
  },

  // [TYPE-A]
  {
    id: 'hist-003',
    subject: 'history',
    topic: 'Ancient India',
    subTopic: 'Mauryan Administration & Ashoka',
    question: 'Consider the following statements about the Edicts of Ashoka:\n\n1. They were deciphered by James Prinsep in 1837 using the Brahmi script key.\n2. The Kandahar Edict (found in modern Afghanistan) is bilingual — inscribed in Greek and Aramaic.\n3. The Pillar Edicts are mostly found in the southern parts of the Mauryan Empire.\n\nWhich of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: James Prinsep (1837) deciphered the Brahmi script, unlocking the meaning of Ashokan inscriptions.\nStatement 2 is correct: The Kandahar Bilingual Edict (in Afghanistan) uses Greek and Aramaic — reflecting Ashoka\'s outreach to Hellenistic populations in the northwest.\nStatement 3 is incorrect: Pillar Edicts are mostly found in the NORTHERN plains — Lauriya-Nandangarh, Lauriya-Araraj (Bihar), Delhi-Meerut, Delhi-Topra, Allahabad Pillar. They are NOT in southern India.',
    bookReference: {
      bookName: 'Ancient India by R.S. Sharma (NCERT)',
      edition: 'NCERT 2021',
      chapter: 'Chapter 9: The Maurya Empire',
      pageNumber: 'NCERT Page 142 – 149',
      keyExcerpt: 'Ashokan pillar inscriptions are found mostly in the Gangetic plains. The Kandahar edict, written in Greek and Aramaic, is a unique bilingual inscription.'
    },
    eliminationTip: 'Pillar Edicts → Northern plains (Delhi, Bihar). Statement 3 says "southern parts" — that\'s Rock Edicts. Eliminate statement 3. Answer: (a) 1 and 2 only.',
    difficulty: 'Moderate',
    frequency: 5,
    tags: ['History', 'Ancient India', 'Ashoka', 'Edicts', 'Maurya']
  },

  // [TYPE-D] — Pair matching
  {
    id: 'hist-004',
    subject: 'history',
    topic: 'Medieval India — Sufi & Bhakti Movements',
    subTopic: 'Silsilahs and their Founders',
    question: 'Consider the following pairs:\n\nSufi Silsilah — Prominent figure in India\n\n1. Chishti — Moinuddin Chishti (Ajmer)\n2. Suhrawardi — Bahauddin Zakariya (Multan)\n3. Naqshbandi — Sheikh Ahmad Sirhindi (Sirhind)\n4. Qadiri — Muhammad Ghaus (Gwalior)\n\nHow many of the above pairs are correctly matched?',
    options: [
      'Only one pair',
      'Only two pairs',
      'Only three pairs',
      'All four pairs'
    ],
    correctAnswer: 3,
    explanation: 'All four are correctly matched:\n1. Moinuddin Chishti founded the Chishti silsilah in India at Ajmer. Most influential order — Nizamuddin Auliya and Amir Khusrau were key disciples.\n2. Bahauddin Zakariya (1182–1262) established the Suhrawardi order at Multan. Unlike Chishtis, they accepted state patronage.\n3. Sheikh Ahmad Sirhindi ("Mujaddid Alf-i-Sani") represented Naqshbandi silsilah — opposed Din-i-Ilahi and Akbar\'s religious syncretism.\n4. Muhammad Ghaus was a Qadiri saint associated with Gwalior — Guru of Tansen (the legendary musician at Akbar\'s court).',
    bookReference: {
      bookName: 'Medieval India by Satish Chandra (NCERT)',
      edition: 'NCERT 2022',
      chapter: 'Chapter 6: Bhakti-Sufi Traditions',
      pageNumber: 'NCERT Page 142 – 154',
      keyExcerpt: 'The Chishti saints avoided royal patronage; the Suhrawardis accepted it. Naqshbandis were politically active and orthodox.'
    },
    eliminationTip: 'All four Sufi silsilah–founder pairs are standard textbook facts. Answer: (d) All four pairs.',
    difficulty: 'Moderate',
    frequency: 5,
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'GS',
    tags: ['History', 'Medieval', 'Sufi', 'Chishti', 'Naqshbandi', 'Suhrawardi']
  },

  // [TYPE-A]
  {
    id: 'hist-005',
    subject: 'history',
    topic: 'Indian National Movement',
    subTopic: 'Gandhi\'s Early Satyagrahas',
    question: 'Consider the following events associated with Gandhian movements in India:\n\n1. Champaran Satyagraha (1917) — against the Tinkathia system of compulsory indigo cultivation.\n2. Kheda Satyagraha (1918) — against the colonial land revenue demand during a famine year.\n3. Ahmedabad Mill Strike (1918) — against withdrawal of the plague bonus by mill owners; Gandhi\'s first hunger strike.\n\nWhich of the above descriptions are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three are correctly described:\n1. Champaran (1917): Gandhi\'s FIRST satyagraha in India. Against the Tinkathia system (farmers forced to cultivate 3/20th of land with indigo for planters at fixed rates).\n2. Kheda (1918): Revenue collection demanded despite crop failure; peasants asked for remission. Gandhi led the movement — a success after British concession.\n3. Ahmedabad (1918): Gandhi mediating between Ambalal Sarabhai (mill owner) and workers over plague bonus withdrawal. Gandhi observed his FIRST hunger strike (anshan) here.',
    bookReference: {
      bookName: 'A Brief History of Modern India by Rajiv Ahir (Spectrum)',
      edition: '2023 Edition',
      chapter: 'Chapter 17: Emergence of Gandhi',
      pageNumber: 'Page 302 – 311',
      keyExcerpt: 'Champaran 1917 = Gandhi\'s first satyagraha. Ahmedabad 1918 = Gandhi\'s first fast (hunger strike) in India.'
    },
    eliminationTip: 'All three descriptions are precise textbook facts. Answer: (d) 1, 2 and 3.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['History', 'Gandhi', 'Champaran', 'Kheda', 'Ahmedabad', 'Satyagraha']
  },

  // [TYPE-A]
  {
    id: 'hist-006',
    subject: 'history',
    topic: 'Art & Architecture',
    subTopic: 'Nagara vs Dravida Temple Architecture',
    question: 'With reference to temple architecture in India, consider the following statements:\n\n1. In the Nagara style, the Shikhara over the garbhagriha is curvilinear in shape and tapers gradually to the top.\n2. In the Dravida style, the Gopuram is the main entrance tower and is usually taller than the Vimana above the sanctum.\n3. The Brihadisvara Temple at Thanjavur and the Shore Temple at Mahabalipuram are examples of the Nagara style.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 only',
      '1 and 2 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1 is correct: Nagara style Shikhara is curvilinear (beehive-shaped / Rekha Deul type) — examples: Lingaraja Temple (Bhubaneswar), Khajuraho, Modhera Sun Temple.\nStatement 2 is correct: In later Dravida style (e.g., Meenakshi Temple, Madurai), the Gopuram (gateway tower) grew taller than the Vimana (sanctum tower) — a characteristic of South Indian temple design evolution.\nStatement 3 is incorrect: Brihadisvara (Thanjavur) and Shore Temple (Mahabalipuram) are DRAVIDA style (Chola/Pallava heritage, Tamil Nadu) — NOT Nagara.',
    bookReference: {
      bookName: 'An Introduction to Indian Art (NCERT Class XI) / Nitin Singhania Art & Culture',
      edition: 'NCERT 2023 / 5th Ed 2023',
      chapter: 'Chapter 3: Temple Architecture',
      pageNumber: 'NCERT Page 32 – 39',
      keyExcerpt: 'Nagara = curvilinear shikhara. Dravida = pyramidal vimana + prominent gopuram. Tamil Nadu temples (Brihadisvara, Shore Temple) are Dravida style.'
    },
    eliminationTip: 'Brihadisvara and Shore Temple are in Tamil Nadu = DRAVIDA, not Nagara. Statement 3 is FALSE. Options with 3 (c, d) are eliminated. Between (a) and (b): Statement 2 about gopuram height is also correct. Answer: (b) 1 and 2 only.',
    difficulty: 'Moderate',
    frequency: 6,
    isPYQ: true,
    pyqYear: 2019,
    pyqPaper: 'GS',
    tags: ['History', 'Art', 'Nagara', 'Dravida', 'Temple Architecture']
  },

  // [TYPE-A]
  {
    id: 'hist-007',
    subject: 'history',
    topic: 'Ancient India — Buddhism',
    subTopic: 'Buddhist Councils',
    question: 'Consider the following pairs about the Buddhist Councils:\n\nBuddhist Council — Location — Key Outcome\n\n1. First Council (483 BCE) — Rajagriha — Compilation of Vinaya Pitaka and Sutta Pitaka\n2. Second Council (383 BCE) — Vaishali — First major schism into Sthaviravada and Mahasanghika\n3. Third Council (250 BCE) — Pataliputra — Under Ashoka\'s patronage; Abhidhamma Pitaka compiled\n\nWhich of the above pairs are correctly matched?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three pairs are correctly matched:\n1. First Council (Saptaparni Cave, Rajagriha): Presided by Mahakassapa; Ajatashatru patron. Vinaya and Sutta Pitakas were compiled.\n2. Second Council (Vaishali): Dispute over 10 points of monastic rules. Led to first schism — Sthaviravada (Orthodox) vs Mahasanghika (liberal, forerunner of Mahayana).\n3. Third Council (Pataliputra): Under Moggaliputta Tissa; Ashoka patron. Abhidhamma Pitaka (third basket) compiled; missionaries sent abroad.',
    bookReference: {
      bookName: 'Ancient India by R.S. Sharma (NCERT)',
      edition: 'NCERT 2021',
      chapter: 'Chapter 6: Rise of Buddhism and Jainism',
      pageNumber: 'NCERT Page 87 – 92',
      keyExcerpt: 'The Second Buddhist Council at Vaishali led to the first schism in Buddhism. Third Council at Pataliputra completed the Tripitaka (three baskets).'
    },
    eliminationTip: 'All three are standard textbook facts about Buddhist Councils. Cross-verify each pair: all correct. Answer: (d) 1, 2 and 3.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['History', 'Buddhism', 'Buddhist Councils', 'Ancient India', 'Ashoka']
  },

  // [TYPE-A]
  {
    id: 'hist-008',
    subject: 'history',
    topic: 'Freedom Struggle',
    subTopic: 'Rowlatt Act 1919',
    question: 'The Rowlatt Act of 1919 was opposed vehemently by Indian leaders. Which of the following correctly describe the features of the Rowlatt Act?\n\n1. It authorised detention of political suspects without trial for up to two years.\n2. It provided for trial of seditious offences without a jury in special courts.\n3. It made permanent the wartime emergency powers initially introduced by the Defence of India Act, 1915.\n\nWhich of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '1 and 3 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three features of the Rowlatt Act 1919 are correct:\n1. Detention without trial: Suspects could be detained for up to 2 years without being produced before a court.\n2. No-jury courts: Special Rowlatt Courts could try sedition cases without jury or normal legal procedures (no appeal, sometimes no lawyer).\n3. Permanent peacetime extension: The wartime Defense of India Act 1915 powers were made permanent under the Rowlatt Act. Gandhi called it the "Black Act" (Kala Kanoon).',
    bookReference: {
      bookName: 'A Brief History of Modern India by Rajiv Ahir (Spectrum)',
      edition: '2023 Edition',
      chapter: 'Chapter 18: Rowlatt Act & Jallianwala Bagh',
      pageNumber: 'Page 315 – 320',
      keyExcerpt: 'Gandhi dubbed the Rowlatt Act "the Black Act." The Act provoked nationwide hartals on April 6, 1919 and led to the tragic Jallianwala Bagh massacre on April 13.'
    },
    eliminationTip: 'All three features are in standard references. The Rowlatt Act gave the government sweeping powers: detain, try without jury, permanent wartime laws. Answer: (d) 1, 2 and 3.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['History', 'Rowlatt Act', 'Gandhi', 'Jallianwala Bagh', '1919']
  },

  // ═══════════════════════════════════════════════
  //  ART & CULTURE
  // ═══════════════════════════════════════════════

  // [TYPE-D] — Matching
  {
    id: 'art-001',
    subject: 'history',
    topic: 'Art & Culture',
    subTopic: 'Classical Dance Forms',
    question: 'Consider the following pairs of classical dance forms and their states of origin:\n\n1. Sattriya — Assam\n2. Mohiniyattam — Kerala\n3. Kuchipudi — Andhra Pradesh\n4. Manipuri — Manipur\n\nHow many of the above pairs are correctly matched?',
    options: [
      'Only one pair',
      'Only two pairs',
      'Only three pairs',
      'All four pairs'
    ],
    correctAnswer: 3,
    explanation: 'All four pairs are correctly matched. India\'s 8 classical dance forms (Sangeet Natak Akademi-recognised):\n1. Sattriya — Assam: Introduced by Vaishnavite saint Srimanta Sankardeva in the 15th century; performed in Vaishnava monasteries (Sattras).\n2. Mohiniyattam — Kerala: Graceful solo female dance depicting the feminine Mohini avatar of Vishnu.\n3. Kuchipudi — Andhra Pradesh: Named after Kuchipudi village in Krishna district; involves Bhama Kalapam narrative.\n4. Manipuri — Manipur: Known for lyrical circular movements; depicts Radha-Krishna Ras Leela.',
    bookReference: {
      bookName: 'Indian Art & Culture by Nitin Singhania',
      edition: '5th Edition (2023)',
      chapter: 'Chapter 5: Classical Dance Forms of India',
      pageNumber: 'Page 52 – 68',
      keyExcerpt: '8 classical dances: Bharatanatyam (TN), Kathak (UP/Rajasthan), Kuchipudi (AP), Kathakali (Kerala), Mohiniyattam (Kerala), Manipuri (Manipur), Odissi (Odisha), Sattriya (Assam).'
    },
    eliminationTip: 'All four state-dance pairs are standard textbook facts. The often-missed one is Sattriya (Assam). Answer: (d) All four pairs.',
    difficulty: 'Easy',
    frequency: 6,
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    tags: ['Art & Culture', 'Classical Dance', 'Sattriya', 'Mohiniyattam', 'Kuchipudi', 'Manipuri']
  },

  // [TYPE-A]
  {
    id: 'art-002',
    subject: 'history',
    topic: 'Art & Culture',
    subTopic: 'Miniature Painting Schools',
    question: 'Consider the following statements about miniature painting traditions of India:\n\n1. The Mughal school of painting was a synthesis of Persian-Safavid and Indian (Rajput) painting traditions.\n2. Madhubani (Mithila) painting is associated with the Mithila region of Bihar and is traditionally practised by women.\n3. Pattachitra paintings of Odisha are primarily associated with the Jagannath cult of Puri.',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three are correct:\n1. Mughal painting flourished under Akbar — a deliberate blend of Persian naturalistic conventions (shading, landscape) and Indian Rajput bold colours and Hindu themes.\n2. Madhubani/Mithila art from Bihar\'s Madhubani district — traditionally practised by women on walls and floors during ceremonies. GI-tagged.\n3. Pattachitra (cloth painting) from Odisha — strongly linked to Puri\'s Jagannath temple tradition, depicting Radha-Krishna and Dashavatara themes. Made with natural colours.',
    bookReference: {
      bookName: 'Indian Art & Culture by Nitin Singhania',
      edition: '5th Edition (2023)',
      chapter: 'Chapter 4: Painting Schools of India',
      pageNumber: 'Page 40 – 50',
      keyExcerpt: 'Mughal painting = Persian + Indian synthesis. Madhubani = GI-tagged Bihar art. Pattachitra = Jagannath tradition of Odisha.'
    },
    eliminationTip: 'All three painting-tradition facts are correct. Answer: (d) 1, 2 and 3.',
    difficulty: 'Moderate',
    frequency: 5,
    tags: ['Art & Culture', 'Paintings', 'Madhubani', 'Mughal', 'Pattachitra', 'Odisha']
  },

  // [TYPE-D] — How many correct
  {
    id: 'art-003',
    subject: 'history',
    topic: 'Art & Culture',
    subTopic: 'UNESCO Heritage Sites Classification',
    question: 'Consider the following pairs of UNESCO World Heritage Sites in India and their classification:\n\n1. Ellora Caves (Maharashtra) — Cultural Heritage Site\n2. Sundarbans National Park (West Bengal) — Natural Heritage Site\n3. Rani ki Vav (Patan, Gujarat) — Cultural Heritage Site\n4. Great Himalayan National Park (Himachal Pradesh) — Natural Heritage Site\n\nHow many of the above pairs are correctly matched?',
    options: [
      'Only one pair',
      'Only two pairs',
      'Only three pairs',
      'All four pairs'
    ],
    correctAnswer: 3,
    explanation: 'All four pairs are correctly matched:\n1. Ellora Caves = Cultural (rock-cut Buddhist, Hindu, Jain temples, 5th–11th century CE).\n2. Sundarbans National Park = Natural (mangrove biodiversity, Royal Bengal Tiger).\n3. Rani ki Vav = Cultural (11th-century stepwell, Solanki dynasty; shown on ₹100 note).\n4. Great Himalayan National Park = Natural (2014; freshwater catchment, biodiversity).',
    bookReference: {
      bookName: 'Indian Art & Culture by Nitin Singhania / UNESCO WHC List 2024',
      edition: '5th Edition (2023)',
      chapter: 'Chapter 11: UNESCO World Heritage Sites in India',
      pageNumber: 'Page 148 – 162',
      keyExcerpt: 'India has 34 Cultural, 7 Natural, and 1 Mixed UNESCO WHC sites as of 2024. National parks are categorised as Natural; manmade monuments as Cultural.'
    },
    eliminationTip: 'National Parks = Natural heritage. Manmade monuments = Cultural. All four classifications are correct. Answer: (d) All four pairs.',
    difficulty: 'Moderate',
    frequency: 6,
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'GS',
    tags: ['Art & Culture', 'UNESCO', 'Heritage Sites', 'Ellora', 'Sundarbans', 'Rani ki Vav']
  },

  // [TYPE-B]
  {
    id: 'art-004',
    subject: 'history',
    topic: 'Art & Culture',
    subTopic: 'Hindustani Classical Music',
    question: 'Consider the following statements about the Hindustani classical music tradition:\n\n1. Hindustani music is characterised by greater improvisation within the Raga framework, compared to Carnatic music which is more composition-based.\n2. The influence of Persian and Central Asian musical traditions on Hindustani music makes it distinct from the Carnatic tradition of South India.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 2,
    explanation: 'Both statements are correct:\n1. Hindustani music places greater emphasis on improvisation (alap, jod, jhala, bandish) within a raga. Carnatic music is primarily composition-based (kriti, varnam, tillana) with less improvisation.\n2. Hindustani music absorbed Persian (Sufi music, ghazal, khayal) and Central Asian (tabla, sitar evolution) influences due to Mughal and Sultanate patronage. Carnatic music remained more purely South Indian-classical.',
    bookReference: {
      bookName: 'Indian Art & Culture by Nitin Singhania',
      edition: '5th Edition (2023)',
      chapter: 'Chapter 6: Music Traditions of India',
      pageNumber: 'Page 72 – 82',
      keyExcerpt: 'Hindustani and Carnatic music diverged significantly due to the Persian/Mughal influence on the north. Tansen of Gwalior is the most celebrated musician of the Mughal era.'
    },
    eliminationTip: 'Both statements describe key differences between Hindustani and Carnatic music — both are textbook-correct. Answer: (c) Both 1 and 2.',
    difficulty: 'Easy',
    frequency: 4,
    tags: ['Art & Culture', 'Music', 'Hindustani', 'Carnatic', 'Tansen', 'Raga']
  },

  // ═══════════════════════════════════════════════
  //  INDIAN ECONOMY
  // ═══════════════════════════════════════════════

  // [TYPE-A]
  {
    id: 'eco-001',
    subject: 'economy',
    topic: 'Monetary Policy & Banking',
    subTopic: 'RBI Tools & Liquidity Management',
    question: 'If the Reserve Bank of India (RBI) adopts an "expansionary" monetary policy stance, which of the following actions would it NOT undertake?\n\n1. Reducing the Statutory Liquidity Ratio (SLR)\n2. Increasing the Marginal Standing Facility (MSF) rate\n3. Reducing the Repo Rate\n\nSelect the correct answer using the code given below:',
    options: [
      '1 and 3 only',
      '2 only',
      '1 and 2 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Expansionary monetary policy = more credit, lower rates, more liquidity.\nAction 1 (Reduce SLR): WOULD DO — reducing SLR frees more funds for lending = expansionary.\nAction 2 (Increase MSF rate): Would NOT do — increasing MSF makes emergency overnight borrowing costlier for banks = contractionary/tightening measure.\nAction 3 (Reduce Repo Rate): WOULD DO — cutting repo rate reduces borrowing cost for banks = expansionary.\nOnly Action 2 is NOT taken during expansionary policy.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh',
      edition: '15th Edition (2023)',
      chapter: 'Chapter 12: Banking in India — Monetary Policy Tools',
      pageNumber: 'Page 12.14 – 12.19',
      keyExcerpt: 'Expansionary monetary policy lowers policy rates and reserve ratios. Increasing MSF is a tightening (contractionary) measure.'
    },
    eliminationTip: 'The question asks what RBI would NOT do. Expansionary = cut rates/ratios. Increasing MSF = tightening. Only statement 2 is the wrong action. Answer: (b) 2 only.',
    difficulty: 'UPSC Standard',
    frequency: 7,
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'GS',
    tags: ['Economy', 'Monetary Policy', 'Repo Rate', 'MSF', 'RBI']
  },

  // [TYPE-A]
  {
    id: 'eco-002',
    subject: 'economy',
    topic: 'External Sector & Forex',
    subTopic: 'Balance of Payments',
    question: 'Which of the following items are recorded under the "Capital Account" of India\'s Balance of Payments (BoP)?\n\n1. Foreign Direct Investment (FDI)\n2. Remittances sent by Indian workers abroad to their families\n3. External Commercial Borrowings (ECBs)\n4. Foreign Portfolio Investment (FPI)\n\nSelect the correct answer using the code given below:',
    options: [
      '1, 2 and 3 only',
      '1, 3 and 4 only',
      '2, 3 and 4 only',
      '1, 2, 3 and 4'
    ],
    correctAnswer: 1,
    explanation: 'Capital Account records cross-border transactions that change financial assets or liabilities:\n1. FDI — Capital Account ✓\n3. ECBs — Capital Account ✓ (debt creating capital flows)\n4. FPI — Capital Account ✓ (portfolio investment)\n\nItem 2 (Remittances) is recorded under the CURRENT ACCOUNT under "Secondary Income" (formerly called unrequited transfers). Remittances are current transfers, not asset/liability-changing flows.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / NCERT Class XII Macroeconomics',
      edition: '15th Edition (2023)',
      chapter: 'Chapter 15: External Sector',
      pageNumber: 'Page 15.6 – 15.9',
      keyExcerpt: 'Remittances (workers\' transfers) are recorded in the Current Account under secondary income. Capital Account records changes in assets and liabilities (FDI, FPI, ECB).'
    },
    eliminationTip: 'Remittances are CURRENT income for the receiving family — NOT a capital/asset transaction. Remove item 2 → Options with 2 (a, c, d) are eliminated. Answer: (b) 1, 3 and 4 only.',
    difficulty: 'Moderate',
    frequency: 6,
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'GS',
    tags: ['Economy', 'BoP', 'Capital Account', 'Remittances', 'FDI', 'FPI']
  },

  // [TYPE-A]
  {
    id: 'eco-003',
    subject: 'economy',
    topic: 'Union Budget & Fiscal Policy',
    subTopic: 'Deficit Concepts',
    question: 'Consider the following statements about fiscal deficit concepts in India:\n\n1. Revenue Deficit is the excess of Revenue Expenditure over Revenue Receipts.\n2. Fiscal Deficit equals Total Expenditure minus Revenue Receipts.\n3. Primary Deficit equals Fiscal Deficit minus Net Interest Payments.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 3 only',
      '1 and 2 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: Revenue Deficit = Revenue Expenditure – Revenue Receipts (government borrows to meet day-to-day expenses).\nStatement 2 is INCORRECT: Fiscal Deficit = Total Expenditure – (Revenue Receipts + Non-Debt Capital Receipts). The correct formula excludes debt-creating capital receipts (borrowings) from the income side. Option 2 misses the "non-debt capital receipts" component.\nStatement 3 is correct: Primary Deficit = Fiscal Deficit – Net Interest Payments. It isolates the "fresh" borrowing need from the burden of past debt.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh',
      edition: '15th Edition (2023)',
      chapter: 'Chapter 2: Union Budget — Deficit Concepts',
      pageNumber: 'Page 2.18 – 2.23',
      keyExcerpt: 'Fiscal Deficit = Total Expenditure – (Revenue Receipts + Non-debt Capital Receipts). Primary Deficit = Fiscal Deficit – Interest Payments.'
    },
    eliminationTip: 'Statement 2\'s formula is the most common trap in UPSC Economy questions. The correct formula subtracts BOTH revenue AND non-debt capital receipts, not just revenue. Statement 2 is false → Answer: (a) 1 and 3 only.',
    difficulty: 'UPSC Standard',
    frequency: 8,
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    tags: ['Economy', 'Budget', 'Fiscal Deficit', 'Revenue Deficit', 'Primary Deficit']
  },

  // [TYPE-C]
  {
    id: 'eco-004',
    subject: 'economy',
    topic: 'Agriculture & Rural Economy',
    subTopic: 'MSP & CACP',
    question: 'The Minimum Support Price (MSP) for agricultural commodities in India is recommended by which of the following bodies?',
    options: [
      'Commission for Agricultural Costs and Prices (CACP)',
      'National Bank for Agriculture and Rural Development (NABARD)',
      'State Agricultural Marketing Boards (SAMBs)',
      'NITI Aayog\'s Agriculture and Allied Sectors Division'
    ],
    correctAnswer: 0,
    explanation: 'The Commission for Agricultural Costs and Prices (CACP), established in 1965 (formerly Agricultural Prices Commission), recommends MSPs for 22 mandated crops to the Government of India. CACP uses three cost concepts:\n— A2: Only paid-out costs (seeds, fertilizers, etc.)\n— A2+FL: Paid-out costs + imputed family labour\n— C2: Comprehensive cost (A2+FL + land rent + capital interest)\nSince 2018, MSP must be at least 1.5× the C2 cost.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / Economic Survey 2022-23',
      edition: '15th Edition (2023)',
      chapter: 'Chapter 18: Agriculture in India',
      pageNumber: 'Page 18.7 – 18.11',
      keyExcerpt: 'CACP recommends MSPs for 22 crops considering A2+FL and C2 costs. The government is not legally bound to follow CACP recommendations.'
    },
    eliminationTip: 'CACP = Commission for Agricultural COSTS and PRICES — its very name signals its role. NABARD is a development bank, not a price recommender. Only Option (a) is correct.',
    difficulty: 'Easy',
    frequency: 5,
    tags: ['Economy', 'MSP', 'CACP', 'Agriculture', 'Food Security']
  },

  // [TYPE-A]
  {
    id: 'eco-005',
    subject: 'economy',
    topic: 'International Trade & Organizations',
    subTopic: 'WTO Basics',
    question: 'With reference to the World Trade Organization (WTO), consider the following statements:\n\n1. WTO replaced the General Agreement on Tariffs and Trade (GATT) in January 1995.\n2. The Doha Development Agenda launched in 2001 remains inconclusive owing to disagreements on agricultural subsidies.\n3. Unlike GATT, the WTO\'s dispute settlement mechanism can authorize legally binding trade sanctions against non-complying nations.\n\nWhich of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three are correct:\n1. WTO came into force on January 1, 1995, as the successor to GATT (1947).\n2. The Doha Development Round (2001) remains stalled — India and developing nations push for agricultural subsidy reform by rich nations; developed nations resist.\n3. WTO\'s Dispute Settlement Body (DSB) is its landmark strength over GATT — it can authorize cross-retaliation (trade sanctions) against non-complying members. GATT had no such binding enforcement.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / NCERT Class XII Macroeconomics',
      edition: '15th Edition (2023)',
      chapter: 'Chapter 16: WTO & International Trade',
      pageNumber: 'Page 16.3 – 16.8',
      keyExcerpt: 'WTO\'s Dispute Settlement Body is legally binding and can authorise sanctions — WTO\'s most significant improvement over GATT\'s non-binding dispute resolution.'
    },
    eliminationTip: 'All three WTO facts are standard. DSB\'s legally binding nature (Statement 3) is often doubted — but it IS correct and is WTO\'s signature feature. Answer: (d) 1, 2 and 3.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Economy', 'WTO', 'GATT', 'Doha Round', 'Trade']
  },

  // [TYPE-B]
  {
    id: 'eco-006',
    subject: 'economy',
    topic: 'Labour & Employment',
    subTopic: 'Gig Economy & New Labour Codes',
    question: 'Consider the following statements regarding the Gig Economy and labour regulations in India:\n\n1. The Code on Social Security, 2020 is the first Indian legislation to formally recognise "gig workers" and "platform workers" as distinct categories eligible for social security benefits.\n2. The e-SHRAM portal was specifically designed for registration of gig and platform workers to bring them under social security coverage.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: The Code on Social Security, 2020 first formally recognises gig workers (task-based, not employment-based) and platform workers (through digital platforms like Ola, Swiggy, Urban Company) as separate categories deserving social security.\nStatement 2 is incorrect: The e-SHRAM portal (launched 2021) was designed for ALL unorganised sector workers broadly — farm and non-farm workers — to create a National Database of Unorganised Workers (NDUW). It is NOT specifically for gig workers, though gig workers can register on it.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / Economic Survey 2022-23',
      edition: '15th Edition (2023)',
      chapter: 'Chapter 20: Labour Markets & Employment',
      pageNumber: 'Page 20.14 – 20.17',
      keyExcerpt: 'e-SHRAM portal covers all unorganised workers (230 million+). The Code on Social Security 2020 is the first law to use the terms "gig worker" and "platform worker".'
    },
    eliminationTip: 'e-SHRAM = ALL unorganised workers; NOT specifically gig workers. Statement 2 narrows its scope incorrectly. Only Statement 1 is correct → (a) 1 only.',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['Economy', 'Gig Economy', 'e-SHRAM', 'Social Security Code', 'Labour']
  },

  // [TYPE-D] — Matching regulators
  {
    id: 'eco-007',
    subject: 'economy',
    topic: 'Indian Financial System',
    subTopic: 'Financial Sector Regulators',
    question: 'Consider the following pairs:\n\nRegulatory Body — Primary Mandate\n\n1. SEBI — Regulates securities markets, mutual funds, and credit rating agencies\n2. IRDAI — Regulates life and non-life insurance companies and reinsurers\n3. PFRDA — Regulates the National Pension System and Atal Pension Yojana\n4. IBBI — Regulates insolvency professionals and oversees the Insolvency and Bankruptcy Code\n\nHow many of the above pairs are correctly matched?',
    options: [
      'Only two pairs',
      'Only three pairs',
      'All four pairs',
      'Only one pair'
    ],
    correctAnswer: 2,
    explanation: 'All four pairs are correctly matched:\n1. SEBI (est. 1992): Regulates stock exchanges, mutual funds, FPIs, credit rating agencies, listed companies.\n2. IRDAI: Regulates all insurance companies (life, non-life, reinsurance), including foreign reinsurance branches.\n3. PFRDA: Regulates NPS for Central/State government employees, private sector employees, and Atal Pension Yojana for unorganised workers.\n4. IBBI (Insolvency and Bankruptcy Board of India, est. 2016): Regulates insolvency professionals, insolvency professional agencies, and information utilities under the IBC 2016.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh',
      edition: '15th Edition (2023)',
      chapter: 'Chapter 13: Financial Sector Regulation',
      pageNumber: 'Page 13.9 – 13.16',
      keyExcerpt: 'SEBI, IRDAI, PFRDA, and IBBI are four key sector-specific financial regulators. RBI is the apex monetary regulator.'
    },
    eliminationTip: 'IBBI is the newcomer (2016) often overlooked. All four regulators are correctly paired with standard mandates. Answer: (c) All four pairs.',
    difficulty: 'Easy',
    frequency: 5,
    tags: ['Economy', 'SEBI', 'IRDAI', 'PFRDA', 'IBBI', 'Financial Regulators']
  },

  // [TYPE-A]
  {
    id: 'eco-008',
    subject: 'economy',
    topic: 'Poverty & Social Development',
    subTopic: 'Poverty Measurement',
    question: 'Consider the following statements regarding poverty measurement in India:\n\n1. The Tendulkar Committee (2009) used the Modified Mixed Reference Period (MMRP) methodology.\n2. The Rangarajan Committee (2014) recommended a poverty line higher than the Tendulkar poverty line.\n3. India\'s Multidimensional Poverty Index (MPI) considers deprivations across health, education, and standard of living.\n\nWhich of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three are correct:\n1. Tendulkar Committee used MMRP (Modified Mixed Reference Period) — 7-day recall for food/perishables; 30-day recall for non-food. This replaced Uniform Reference Period.\n2. Rangarajan (2014) set higher poverty lines (₹972/month rural; ₹1407/month urban) vs Tendulkar (₹816/month rural; ₹1000/month urban), resulting in a higher estimated poverty ratio.\n3. MPI (Alkire-Foster method by OPHI/UNDP): 3 dimensions — Health (nutrition, mortality), Education (schooling, attendance), Standard of Living (10 indicators: cooking fuel, sanitation, drinking water, electricity, housing, assets).',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / NITI Aayog MPI Report 2023',
      edition: '15th Edition (2023)',
      chapter: 'Chapter 22: Poverty in India',
      pageNumber: 'Page 22.5 – 22.12',
      keyExcerpt: 'Rangarajan Committee (2014) set a higher poverty line than Tendulkar (2009). MPI covers 3 dimensions with 12 indicators under the Alkire-Foster framework.'
    },
    eliminationTip: 'All three poverty measurement facts are textbook-standard. Rangarajan > Tendulkar line (Statement 2 often doubted — but it IS higher). Answer: (d) 1, 2 and 3.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    tags: ['Economy', 'Poverty', 'Tendulkar', 'Rangarajan', 'MPI']
  },

  // [TYPE-A]
  {
    id: 'eco-009',
    subject: 'economy',
    topic: 'Financial Inclusion',
    subTopic: 'Pradhan Mantri Jan Dhan Yojana',
    question: 'Consider the following statements about the Pradhan Mantri Jan Dhan Yojana (PMJDY):\n\n1. PMJDY was launched on 28 August 2014 with the objective of universal financial access.\n2. Account holders under PMJDY are eligible for an overdraft facility of up to ₹10,000.\n3. The RuPay debit card issued under PMJDY provides accidental insurance cover of ₹2 lakh for new accounts opened after August 28, 2018.\n\nWhich of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three are correct:\n1. PMJDY launched August 28, 2014 — opened 18 crore accounts on Day 1 (Guinness World Record).\n2. Overdraft (OD) limit increased from ₹5,000 to ₹10,000 in 2018 for accounts with satisfactory 6-month operation history.\n3. RuPay card: ₹1 lakh accidental insurance for accounts before Aug 28, 2018; ₹2 lakh for new accounts after that date.',
    bookReference: {
      bookName: 'Indian Economy by Ramesh Singh / PMJDY Official Data 2023',
      edition: '15th Edition (2023)',
      chapter: 'Chapter 13: Financial Inclusion',
      pageNumber: 'Page 13.18 – 13.22',
      keyExcerpt: 'PMJDY features: Zero-balance accounts, RuPay card with ₹2 lakh accidental insurance (new accounts), ₹10,000 OD facility, Business Correspondents network.'
    },
    eliminationTip: 'All three PMJDY facts are correct and standard. The ₹2 lakh insurance distinction (post Aug 2018) is a key UPSC detail. Answer: (d) 1, 2 and 3.',
    difficulty: 'Moderate',
    frequency: 5,
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'GS',
    tags: ['Economy', 'PMJDY', 'Financial Inclusion', 'Jan Dhan', 'RuPay']
  },

  // ═══════════════════════════════════════════════
  //  GEOGRAPHY
  // ═══════════════════════════════════════════════

  // [TYPE-A]
  {
    id: 'geo-001',
    subject: 'geography',
    topic: 'Climatology & Indian Monsoon',
    subTopic: 'Western Disturbances & Jet Streams',
    question: 'With reference to "Western Disturbances" in India, consider the following statements:\n\n1. They originate as extra-tropical cyclones over the Mediterranean Sea and adjacent regions.\n2. They are transported to the Indian subcontinent by the Subtropical Westerly Jet Stream.\n3. They are the primary cause of summer rainfall in north-western India and benefit Kharif crops.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: Western Disturbances are extra-tropical cyclonic systems originating over the Mediterranean, Caspian, and Black Sea regions.\nStatement 2 is correct: They travel eastward across Iran and Afghanistan into north-western India steered by the Subtropical Westerly Jet Stream (at ~25–30°N).\nStatement 3 is incorrect: Western Disturbances cause WINTER rainfall (December–February) in north-western India — critically important for RABI crops (Wheat, Mustard), NOT Kharif crops (which grow in the monsoon/summer season).',
    bookReference: {
      bookName: 'India: Physical Environment (NCERT Class XI)',
      edition: 'NCERT 2023',
      chapter: 'Chapter 4: Climate — Winter Season Mechanism',
      pageNumber: 'Page 34 – 37',
      keyExcerpt: 'Western disturbances enter India from the west during winter months. They are of immense importance for rabi crops, especially wheat.'
    },
    eliminationTip: 'Kharif = monsoon/summer crops (Rice, Cotton, Groundnut). Rabi = winter crops (Wheat, Mustard, Gram). Western Disturbances → winter rain → Rabi. Statement 3 says Kharif — FALSE. Answer: (a) 1 and 2 only.',
    difficulty: 'UPSC Standard',
    frequency: 5,
    isPYQ: true,
    pyqYear: 2020,
    pyqPaper: 'GS',
    tags: ['Geography', 'Western Disturbances', 'Westerly Jet', 'Rabi Crops', 'Monsoon']
  },

  // [TYPE-A]
  {
    id: 'geo-002',
    subject: 'geography',
    topic: 'Indian Rivers & Water Bodies',
    subTopic: 'Peninsular River Systems',
    question: 'Consider the following statements about the peninsular rivers of India:\n\n1. River Godavari originates in the Brahmagiri hills near Trimbakeshwar in Maharashtra.\n2. River Cauvery originates in Karnataka and flows eastward to drain into the Bay of Bengal.\n3. River Narmada originates from the Amarkantak plateau and flows westward to drain into the Arabian Sea.',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three are correct:\n1. Godavari (Dakshin Ganga) originates at Brahmagiri hills, Trimbakeshwar, Nashik, Maharashtra. It flows eastward into Bay of Bengal.\n2. Cauvery originates at Talakaveri, Coorg (Kodagu), Karnataka. Flows eastward through Tamil Nadu and drains into Bay of Bengal near Poompuhar.\n3. Narmada originates at Amarkantak (Madhya Pradesh). It is one of only two major peninsular rivers flowing WESTWARD (along a rift valley) into the Gulf of Khambhat (Arabian Sea). The other is Tapti.',
    bookReference: {
      bookName: 'India: Physical Environment (NCERT Class XI)',
      edition: 'NCERT 2023',
      chapter: 'Chapter 3: Drainage System of India',
      pageNumber: 'NCERT Page 28 – 32',
      keyExcerpt: 'Narmada and Tapti are the two major west-flowing peninsular rivers. They flow through rift valleys. Godavari, Krishna, Cauvery, Mahanadi flow eastward.'
    },
    eliminationTip: 'All three river-origin facts are standard NCERT content. Godavari = Trimbakeshwar, Cauvery = Coorg/Talakaveri, Narmada = Amarkantak (west-flowing). All correct → (d) 1, 2 and 3.',
    difficulty: 'Moderate',
    frequency: 5,
    tags: ['Geography', 'Rivers', 'Godavari', 'Cauvery', 'Narmada', 'Peninsular']
  },

  // [TYPE-A]
  {
    id: 'geo-003',
    subject: 'geography',
    topic: 'Physical Geography',
    subTopic: 'Ocean Currents & Coastal Climates',
    question: 'Consider the following statements about the effect of ocean currents on coastal climates:\n\n1. Cold ocean currents flowing along western coasts of continents in tropical latitudes cause aridity and coastal deserts.\n2. Warm ocean currents make western coasts of high-latitude continents warmer and wetter.\n3. The Peru (Humboldt) Current is a warm current that flows along the western coast of South America.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: Cold currents (Benguela, Canary, California, Peru/Humboldt) flow along the western coasts in the tropics, cooling the air above and preventing precipitation → coastal deserts (Atacama, Namib, Sonoran).\nStatement 2 is correct: Warm currents (North Atlantic Drift, Norwegian Current) warm the western coasts of higher latitudes → Western Europe gets mild, wet winters despite high latitude.\nStatement 3 is INCORRECT: The Peru/Humboldt Current is a COLD current — it flows northward along the western coast of South America and is responsible for the Atacama Desert (world\'s driest).',
    bookReference: {
      bookName: 'Physical Geography by G.C. Leong / Certificate Physical Geography',
      edition: '2023 Edition',
      chapter: 'Chapter 7: Ocean Currents',
      pageNumber: 'G.C. Leong Page 178 – 184',
      keyExcerpt: 'The Peru (Humboldt) Current is a cold current that flows northward along the western coast of South America, causing the extreme aridity of the Atacama Desert.'
    },
    eliminationTip: 'The Peru/Humboldt Current is COLD — this is a standard geography fact. Statement 3 says "warm" — FALSE. Eliminate options with statement 3 (b, c, d). Answer: (a) 1 and 2 only.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    tags: ['Geography', 'Ocean Currents', 'Peru Current', 'Coastal Climate', 'Desert']
  },

  // [TYPE-A]
  {
    id: 'geo-004',
    subject: 'geography',
    topic: 'Indian Geography — Soils',
    subTopic: 'Black Cotton Soil (Regur)',
    question: 'Consider the following statements about Black Cotton Soil (also known as Regur) found in India:\n\n1. It is formed from the weathering of Deccan Trap basaltic lava rocks.\n2. It is rich in calcium carbonate, magnesium carbonate, and potash but deficient in nitrogen and organic matter.\n3. It is best suited for growing rice and jute owing to its high water retention capacity.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 only',
      '1 and 2 only',
      '2 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 1,
    explanation: 'Statement 1 is correct: Regur soil forms from weathering of Deccan Trap basaltic lava — hence concentrated in Maharashtra, Madhya Pradesh, Gujarat, Andhra Pradesh, and Karnataka.\nStatement 2 is correct: Rich in CaCO₃, MgCO₃, potash, and aluminium; poor in nitrogen, phosphorus, and humus. Montmorillonite clay gives it high water retention and self-ploughing character (swells when wet, cracks when dry).\nStatement 3 is INCORRECT: Black soil is ideal for COTTON (hence "Black Cotton Soil") — also grown: soybean, jowar, sunflower, linseed. Rice needs alluvial/laterite soils; jute needs alluvial/humid soils. Not black soil.',
    bookReference: {
      bookName: 'India: Physical Environment (NCERT Class XI)',
      edition: 'NCERT 2023',
      chapter: 'Chapter 6: Soils of India',
      pageNumber: 'NCERT Page 76 – 80',
      keyExcerpt: 'Black soils are rich in calcium carbonate, magnesium, potash and lime. They have high moisture retaining capacity. They are ideal for growing cotton.'
    },
    eliminationTip: 'Black Soil → Black COTTON Soil → ideal for Cotton, NOT rice or jute. Statement 3 is false. Eliminate options with 3. Options (a) and (b) remain; since Statement 2 is also correct → Answer: (b) 1 and 2 only.',
    difficulty: 'Moderate',
    frequency: 6,
    tags: ['Geography', 'Black Soil', 'Regur', 'Deccan', 'Soil Science']
  },

  // [TYPE-D] — How many correct pairs
  {
    id: 'geo-005',
    subject: 'geography',
    topic: 'Economic Geography — Minerals',
    subTopic: 'State-Mineral Associations',
    question: 'Consider the following pairs:\n\nState — Significant Mineral Resource\n\n1. Jharkhand — Uranium (Jaduguda mines) and Copper (Singhbhum)\n2. Rajasthan — Rock Phosphate (Jhamarkotra) and Gypsum (Nagaur/Bikaner)\n3. Andhra Pradesh — Barytes (Mangampet, Kadapa)\n4. Karnataka — Gold (Kolar Gold Fields)\n\nHow many of the above pairs are correctly matched?',
    options: [
      'Only two pairs',
      'Only three pairs',
      'All four pairs',
      'Only one pair'
    ],
    correctAnswer: 2,
    explanation: 'All four are correctly matched:\n1. Jharkhand: Jaduguda (Singhbhum East) = India\'s first and largest uranium mine. Singhbhum = significant copper belt.\n2. Rajasthan: Jhamarkotra (Udaipur) = India\'s largest Rock Phosphate deposit. Nagaur/Bikaner = largest Gypsum reserves.\n3. Andhra Pradesh: Mangampet (Kadapa) = world\'s largest barytes (barium sulphate) deposit. India is a leading barytes exporter.\n4. Karnataka: Kolar Gold Fields (KGF), Robertsonpet = historically one of the world\'s deepest gold mines (operational 1880–2001).',
    bookReference: {
      bookName: 'India: Physical Environment (NCERT Class XI) / Majid Husain',
      edition: 'NCERT 2023',
      chapter: 'Chapter 7: Natural Resources — Minerals',
      pageNumber: 'NCERT Page 88 – 97',
      keyExcerpt: 'Jharkhand dominates in copper; Rajasthan in phosphate and gypsum; AP leads in barytes production; KGF (Karnataka) was once among the world\'s deepest gold mines.'
    },
    eliminationTip: 'KGF (Kolar Gold Fields) Karnataka is famous — confirms pair 4. All four mineral-state associations are well-known UPSC geography facts. Answer: (c) All four pairs.',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['Geography', 'Minerals', 'Jharkhand', 'Rajasthan', 'Andhra Pradesh', 'Karnataka', 'KGF']
  },

  // ═══════════════════════════════════════════════
  //  ENVIRONMENT & ECOLOGY
  // ═══════════════════════════════════════════════

  // [TYPE-C]
  {
    id: 'env-001',
    subject: 'environment',
    topic: 'Biodiversity & Conservation',
    subTopic: 'Protected Area Network — National Parks vs Sanctuaries',
    question: 'Which of the following activities is strictly prohibited inside a "National Park" under the Wildlife (Protection) Act, 1972 but may be permitted with conditions inside a "Wildlife Sanctuary"?',
    options: [
      'Scientific research and ecological monitoring by government agencies',
      'Grazing of livestock by local communities',
      'Patrolling by forest guards and anti-poaching operations',
      'Ecotourism and trekking in designated buffer areas'
    ],
    correctAnswer: 1,
    explanation: 'Under the Wildlife (Protection) Act 1972, National Parks have absolute inviolate protection — no grazing, no private rights, no forest produce collection. Section 35 bars ALL human activities inside a National Park, and all private rights must be extinguished before notification.\n\nIn a Wildlife Sanctuary (Section 26), limited grazing of livestock may be permitted by the Chief Wildlife Warden if it does not interfere with wildlife. This is the key legal distinction.\n\nScientific research, anti-poaching, and designated tourism zones may exist in both, but livestock grazing is the classic differentiator tested in UPSC.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy',
      edition: '9th Edition (2023)',
      chapter: 'Chapter 15: Protected Area Network',
      pageNumber: 'Page 178 – 181',
      keyExcerpt: 'In a National Park, no grazing shall be permitted; all private rights are extinguished. In a Wildlife Sanctuary, limited grazing may be allowed by the Chief Wildlife Warden.'
    },
    eliminationTip: 'The classic NP vs Sanctuary distinction: GRAZING is the one activity allowed in Sanctuary but NEVER in National Park. This is the most frequently tested PA Network fact in UPSC. Answer: (b).',
    difficulty: 'Moderate',
    frequency: 5,
    isPYQ: true,
    pyqYear: 2019,
    pyqPaper: 'GS',
    tags: ['Environment', 'National Parks', 'Wildlife Sanctuary', 'WPA 1972', 'PA Network']
  },

  // [TYPE-C]
  {
    id: 'env-002',
    subject: 'environment',
    topic: 'Pollution & Global Conventions',
    subTopic: 'Environmental Treaties — Matching',
    question: 'The "Minamata Convention" is a global environmental treaty specifically aimed at protecting human health and the environment from the adverse effects of:',
    options: [
      'Persistent Organic Pollutants (POPs) such as DDT and PCBs',
      'Mercury and mercury compounds',
      'Ozone-depleting substances including CFCs and HFCs',
      'Hazardous chemical wastes crossing international boundaries'
    ],
    correctAnswer: 1,
    explanation: 'The Minamata Convention on Mercury (adopted 2013, entered into force 2017) is named after Minamata Bay in Japan where industrial mercury poisoning by the Chisso Corporation (1950s–1970s) caused severe neurological disease ("Minamata disease") among thousands. It regulates mercury mining, trade, use in products/processes, and disposal. India ratified it in 2017.\n\nMemory: Stockholm = POPs; Montreal = Ozone; Minamata = Mercury; Basel = Hazardous Waste.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy',
      edition: '9th Edition (2023)',
      chapter: 'Chapter 21: Environmental Conventions & Treaties',
      pageNumber: 'Page 284 – 287',
      keyExcerpt: 'Minamata Convention on Mercury entered into force August 2017. It is named after the Japanese city where mercury poisoning caused mass neurological damage.'
    },
    eliminationTip: 'Mnemonic: SMBK = Stockholm(POPs), Minamata(Mercury), Basel(Hazardous waste), Kyoto/Paris(Climate). Montreal = Ozone. Minamata = MERCURY. Answer: (b).',
    difficulty: 'Easy',
    frequency: 4,
    tags: ['Environment', 'Minamata', 'Mercury', 'Environmental Conventions']
  },

  // [TYPE-A]
  {
    id: 'env-003',
    subject: 'environment',
    topic: 'Climate Change & Agreements',
    subTopic: 'India\'s Paris Agreement NDC',
    question: 'With reference to India\'s Updated Nationally Determined Contribution (NDC) submitted to UNFCCC in 2022, consider the following targets:\n\n1. Reduce the Emissions Intensity of GDP by 45% by 2030 relative to 2005 levels.\n2. Achieve about 50% cumulative electric power installed capacity from non-fossil fuel-based energy resources by 2030.\n3. Create an additional carbon sink of 2.5 to 3 billion tonnes of CO₂ equivalent through additional forest and tree cover by 2030.\n\nWhich of the above targets are included in India\'s Updated NDC?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'India\'s Updated NDC (submitted August 2022, significant enhancement from original 2015 NDC) includes all three targets:\n1. Emissions intensity of GDP: Reduced from original 33-35% target → 45% reduction by 2030 (vs 2005 baseline).\n2. Non-fossil power capacity: Increased from original 40% target → 50% cumulative installed capacity from non-fossil sources by 2030.\n3. Carbon sink: 2.5–3 billion tonnes CO₂ equivalent through additional forest and tree cover — unchanged from original commitment.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy / India\'s Updated NDC (MoEFCC 2022)',
      edition: '9th Edition (2023)',
      chapter: 'Chapter 22: Climate Change & India\'s Commitments',
      pageNumber: 'Page 296 – 302',
      keyExcerpt: 'India\'s updated NDC 2022: 45% emissions intensity reduction, 50% non-fossil power, 2.5-3 Gt CO₂ forest carbon sink by 2030.'
    },
    eliminationTip: 'All three NDC targets are official government commitments — memorise as 45-50-2.5/3 (intensity, non-fossil%, forest sink). Answer: (d) 1, 2 and 3.',
    difficulty: 'UPSC Standard',
    frequency: 7,
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'GS',
    tags: ['Environment', 'Paris Agreement', 'NDC', 'Climate Change', 'India NDC']
  },

  // [TYPE-D] — How many correct
  {
    id: 'env-004',
    subject: 'environment',
    topic: 'Biodiversity',
    subTopic: 'Biosphere Reserves — State Matching',
    question: 'Consider the following pairs of Biosphere Reserves and their states:\n\n1. Agasthyamala Biosphere Reserve — Kerala and Tamil Nadu\n2. Cold Desert Biosphere Reserve — Himachal Pradesh\n3. Seshachalam Biosphere Reserve — Andhra Pradesh\n4. Great Nicobar Biosphere Reserve — Andaman and Nicobar Islands\n\nHow many of the above pairs are correctly matched?',
    options: [
      'Only two pairs',
      'Only three pairs',
      'All four pairs',
      'Only one pair'
    ],
    correctAnswer: 2,
    explanation: 'All four are correctly matched:\n1. Agasthyamala BR: Spans Kerala and Tamil Nadu (Western Ghats) — UNESCO World Network BR since 2016.\n2. Cold Desert BR: Lahaul-Spiti valley, Himachal Pradesh — UNESCO designated.\n3. Seshachalam BR: Nallamala/Seshachalam Hills, YSR Kadapa district, Andhra Pradesh — home to the endangered red sanders tree.\n4. Great Nicobar BR: Great Nicobar Island, Andaman & Nicobar Islands — UNESCO designated; one of the most ecologically sensitive areas.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy',
      edition: '9th Edition (2023)',
      chapter: 'Chapter 16: Protected Areas & Biosphere Reserves',
      pageNumber: 'Page 185 – 190',
      keyExcerpt: 'India has 18 Biosphere Reserves; 12 are in UNESCO\'s World Network. Agasthyamala (UNESCO 2016) and Seshachalam (home to red sanders) are frequently tested.'
    },
    eliminationTip: 'All four BR-state pairs are correctly matched and frequently tested in UPSC. Answer: (c) All four pairs.',
    difficulty: 'Moderate',
    frequency: 5,
    tags: ['Environment', 'Biosphere Reserves', 'UNESCO', 'Biodiversity', 'Protected Areas']
  },

  // [TYPE-B]
  {
    id: 'env-005',
    subject: 'environment',
    topic: 'Environmental Laws',
    subTopic: 'Eco-Sensitive Zones',
    question: 'Consider the following statements about Eco-Sensitive Zones (ESZs) declared around Protected Areas in India:\n\n1. Eco-Sensitive Zones act as "shock absorbers" by regulating development activities in the areas surrounding National Parks and Wildlife Sanctuaries.\n2. Commercial mining activities are permitted inside Eco-Sensitive Zones subject to prior clearance from the Ministry of Environment, Forest and Climate Change.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 0,
    explanation: 'Statement 1 is correct: ESZs (declared under Section 3 of the Environment Protection Act 1986) around Protected Areas serve as transitional zones — "shock absorbers" buffering the PA from disruptive activities in surrounding areas.\nStatement 2 is INCORRECT: Commercial mining is categorically PROHIBITED in ESZs — not merely regulated with clearance. Mining is listed as a prohibited activity in the MoEFCC ESZ guidelines.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy / MoEFCC ESZ Guidelines',
      edition: '9th Edition (2023)',
      chapter: 'Chapter 15: Conservation Laws & Eco-Sensitive Zones',
      pageNumber: 'Page 183 – 186',
      keyExcerpt: 'Activities prohibited in ESZs include: commercial mining, saw mills, establishment of industries causing pollution. Regulated activities include: hydroelectric projects, hotels/resorts.'
    },
    eliminationTip: 'Mining is PROHIBITED (not conditionally permitted) in ESZs. Statement 2 is false. Only Statement 1 is correct → Answer: (a) 1 only.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Environment', 'Eco-Sensitive Zones', 'Protected Areas', 'Buffer Zone', 'ESA']
  },

  // [TYPE-B]
  {
    id: 'env-006',
    subject: 'environment',
    topic: 'Renewable Energy',
    subTopic: 'Solar Energy — ISA & Bhadla',
    question: 'Consider the following statements regarding renewable energy in India:\n\n1. Bhadla Solar Park in Rajasthan is among the world\'s largest solar parks with an installed capacity of over 2,700 MW.\n2. The International Solar Alliance (ISA) was launched jointly by India and France at COP21 in Paris (2015), and its headquarters is located in Gurugram, India.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 2,
    explanation: 'Both statements are correct:\n1. Bhadla Solar Park (Jodhpur district, Rajasthan): Approximately 2,700+ MW installed capacity, making it one of the world\'s largest solar parks.\n2. ISA was co-launched by PM Modi and French President Hollande on November 30, 2015 at COP21, Paris. ISA Secretariat (permanent HQ) is at the National Institute of Solar Energy (NISE) campus, Gurugram, India. It became a treaty-based international organisation in 2017.',
    bookReference: {
      bookName: 'Environment by Shankar IAS Academy / Economic Survey 2022-23',
      edition: '9th Edition (2023)',
      chapter: 'Chapter 23: Renewable Energy in India',
      pageNumber: 'Page 307 – 313',
      keyExcerpt: 'ISA launched at COP21 (2015) by India and France. ISA HQ is in Gurugram. Bhadla Solar Park (Rajasthan) is one of the world\'s largest solar installations.'
    },
    eliminationTip: 'Both facts are well-established. ISA = India+France at Paris COP21; HQ Gurugram. Bhadla = world\'s largest solar parks. Answer: (c) Both 1 and 2.',
    difficulty: 'Moderate',
    frequency: 5,
    isPYQ: true,
    pyqYear: 2022,
    pyqPaper: 'GS',
    tags: ['Environment', 'Solar Energy', 'ISA', 'Renewable Energy', 'Bhadla', 'COP21']
  },

  // ═══════════════════════════════════════════════
  //  SCIENCE & TECHNOLOGY
  // ═══════════════════════════════════════════════

  // [TYPE-C]
  {
    id: 'sci-001',
    subject: 'science_tech',
    topic: 'Biotechnology & Genetics',
    subTopic: 'CRISPR-Cas9 Gene Editing',
    question: 'The term "Cas9 protein" is frequently mentioned in the news in the context of which one of the following?',
    options: [
      'A molecular scissor used in the CRISPR-based targeted gene editing technology',
      'A biosensor used in rapid point-of-care detection of viral infections',
      'A marker protein in transgenic golden rice enriched with Vitamin A',
      'A synthetic enzyme used in manufacturing fully biodegradable bioplastics'
    ],
    correctAnswer: 0,
    explanation: 'Cas9 (CRISPR-associated protein 9) is an RNA-guided DNA endonuclease enzyme — popularly called "molecular scissors" — that cuts specific DNA sequences at precise locations directed by a guide RNA (gRNA). It is the core component of the CRISPR-Cas9 gene editing system. Jennifer Doudna and Emmanuelle Charpentier won the Nobel Prize in Chemistry 2020 for developing this system.',
    bookReference: {
      bookName: 'Science & Technology by Ravi P. Agrahari / NCERT Class XII Biology',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 8: Biotechnology and Its Applications',
      pageNumber: 'Page 8.12 – 8.16',
      keyExcerpt: 'CRISPR-Cas9 uses the Cas9 protein as a molecular scissor guided by a synthetic gRNA to cut specific DNA sequences — revolutionising gene editing.'
    },
    eliminationTip: 'CRISPR-Cas9 = gene editing = molecular scissors. This connection is universally known. Options (b), (c), (d) describe unrelated technologies. Answer: (a).',
    difficulty: 'Easy',
    frequency: 4,
    isPYQ: true,
    pyqYear: 2019,
    pyqPaper: 'GS',
    tags: ['Science & Tech', 'CRISPR', 'Cas9', 'Gene Editing', 'Nobel 2020']
  },

  // [TYPE-A]
  {
    id: 'sci-002',
    subject: 'science_tech',
    topic: 'Space Technology',
    subTopic: 'ISRO Missions 2023',
    question: 'Consider the following ISRO missions and their primary objectives:\n\n1. Chandrayaan-3 (2023) — Achieved India\'s first soft landing on the lunar surface near the south polar region.\n2. Aditya-L1 (2023) — India\'s first solar observatory mission; placed in halo orbit around the Sun-Earth Lagrange Point 1 (L1).\n3. NISAR — A joint mission between NASA and ISRO using both L-band (NASA) and S-band (ISRO) synthetic aperture radar for Earth observation.\n\nWhich of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three are correct:\n1. Chandrayaan-3: Vikram lander soft-landed on August 23, 2023, near the lunar south pole (Manzinus region, ~69°S) — India became the 4th nation to achieve a soft lunar landing and the FIRST to land near the south pole.\n2. Aditya-L1: Launched September 2, 2023; achieved halo orbit at L1 point ~1.5 million km from Earth on January 6, 2024. Carries 7 payloads to study the Sun\'s corona, solar wind, and magnetic field.\n3. NISAR (NASA-ISRO Synthetic Aperture Radar): Joint mission with L-band (NASA) and S-band (ISRO) — will observe ice sheets, vegetation, natural disasters, and Earth\'s crust deformation.',
    bookReference: {
      bookName: 'Science & Technology by Ravi P. Agrahari / ISRO Annual Report 2023-24',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 14: Space Technology & ISRO Missions',
      pageNumber: 'Page 14.8 – 14.15',
      keyExcerpt: 'Chandrayaan-3 made India the first country to land near the lunar south pole. Aditya-L1 is India\'s first dedicated solar science observatory at L1 point.'
    },
    eliminationTip: 'All three 2023 ISRO milestones are factually correct and extensively covered in current affairs. Answer: (d) 1, 2 and 3.',
    difficulty: 'Easy',
    frequency: 6,
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    tags: ['Science & Tech', 'ISRO', 'Chandrayaan-3', 'Aditya-L1', 'NISAR', 'Space']
  },

  // [TYPE-D] — Pair matching
  {
    id: 'sci-003',
    subject: 'science_tech',
    topic: 'Defence Technology',
    subTopic: 'Indian Missiles — Category Matching',
    question: 'Consider the following pairs:\n\nMissile — Category\n\n1. BrahMos — Supersonic cruise missile (jointly developed with Russia)\n2. Agni-V — Surface-to-surface Intercontinental Ballistic Missile (range >5,000 km)\n3. Akash — Surface-to-air missile (SAM) system\n4. Prithvi — Surface-to-surface short-range ballistic missile (IGMDP)\n\nHow many of the above pairs are correctly matched?',
    options: [
      'Only two pairs',
      'Only three pairs',
      'All four pairs',
      'Only one pair'
    ],
    correctAnswer: 2,
    explanation: 'All four pairs are correctly matched:\n1. BrahMos: Mach 2.8-3 supersonic cruise missile; joint venture of DRDO (India) and NPO Mashinostroyeniya (Russia). Named after Brahmaputra + Moskva rivers.\n2. Agni-V: ICBM-class with range 5,000–8,000+ km; tests in Multiple Independently targetable Reentry Vehicle (MIRV) configuration.\n3. Akash: Short/medium-range SAM developed by DRDO under IGMDP; deployed by IAF and Army; exported to Philippines.\n4. Prithvi: First missile under IGMDP; SRBM range 150–500 km; Army/Air Force variants.',
    bookReference: {
      bookName: 'Science & Technology by Ravi P. Agrahari',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 13: Defence Technology & Missiles',
      pageNumber: 'Page 13.3 – 13.9',
      keyExcerpt: 'IGMDP (1983) developed five missiles: Prithvi, Agni, Akash, Nag, and Trishul. BrahMos is a separate joint venture with Russia.'
    },
    eliminationTip: 'All four missile-category pairs are standard UPSC defence facts. BrahMos=supersonic cruise; Agni-V=ICBM; Akash=SAM; Prithvi=SRBM. Answer: (c) All four pairs.',
    difficulty: 'Easy',
    frequency: 5,
    tags: ['Science & Tech', 'Defence', 'BrahMos', 'Agni-V', 'Akash', 'Missiles', 'DRDO', 'IGMDP']
  },

  // [TYPE-B]
  {
    id: 'sci-004',
    subject: 'science_tech',
    topic: 'Artificial Intelligence & Emerging Tech',
    subTopic: 'AI in India',
    question: 'Consider the following statements about Artificial Intelligence (AI) initiatives in India:\n\n1. NITI Aayog released a National Strategy for Artificial Intelligence titled "#AIForAll" in 2018, identifying healthcare, agriculture, education, smart cities, and smart mobility as five focus sectors.\n2. The PARAM Siddhi-AI supercomputer, one of India\'s most powerful AI-capable HPC systems, was deployed at C-DAC (Centre for Development of Advanced Computing) under the National Supercomputing Mission.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 only',
      '2 only',
      'Both 1 and 2',
      'Neither 1 nor 2'
    ],
    correctAnswer: 2,
    explanation: 'Both statements are correct:\n1. NITI Aayog\'s National Strategy for AI (#AIForAll, June 2018): Identified 5 sectors where AI can have maximum social impact — Healthcare, Agriculture, Education, Smart Cities/Infrastructure, and Smart Mobility/Transportation.\n2. PARAM Siddhi-AI: 5.267 petaflops AI-capable HPC system deployed at C-DAC Pune under the National Supercomputing Mission (NSM). Ranked 62nd in TOP500 (November 2020).',
    bookReference: {
      bookName: 'Science & Technology by Ravi P. Agrahari / NITI Aayog AI Report',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 11: Artificial Intelligence & Digital Technologies',
      pageNumber: 'Page 11.5 – 11.12',
      keyExcerpt: 'NITI Aayog\'s #AIForAll (2018) = 5 priority sectors. PARAM Siddhi-AI at C-DAC = India\'s flagship AI-ready HPC under National Supercomputing Mission.'
    },
    eliminationTip: 'Both AI-India facts are correct: NITI Aayog → #AIForAll (2018); PARAM Siddhi → C-DAC Pune. Answer: (c) Both 1 and 2.',
    difficulty: 'Moderate',
    frequency: 3,
    tags: ['Science & Tech', 'AI', 'PARAM Siddhi', 'NITI Aayog', 'Supercomputer', '#AIForAll']
  },

  // [TYPE-A]
  {
    id: 'sci-005',
    subject: 'science_tech',
    topic: 'Health & Biotechnology',
    subTopic: 'mRNA Vaccine Technology',
    question: 'With reference to mRNA vaccines (such as the Pfizer-BioNTech and Moderna COVID-19 vaccines), consider the following statements:\n\n1. mRNA vaccines introduce a segment of messenger RNA that instructs human cells to produce a viral protein, triggering an immune response without using the actual virus.\n2. The mRNA in these vaccines can enter the cell nucleus and integrate into human DNA, potentially altering the human genome.\n3. Unlike traditional inactivated or live-attenuated vaccines, mRNA vaccines do not contain any form of the actual pathogen.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 3 only',
      '2 and 3 only',
      '1 and 2 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statements 1 and 3 are correct:\n1. mRNA vaccines work by delivering synthetic mRNA encoding a viral antigen (e.g., SARS-CoV-2 spike protein) into cells. Ribosomes translate the mRNA to produce the protein, which the immune system then learns to recognise and fight.\n3. No live, dead, or attenuated pathogen is present — only the genetic instructions for one protein.\n\nStatement 2 is INCORRECT (a common myth): mRNA CANNOT enter the cell nucleus. It is translated in the cytoplasm and rapidly degraded (within hours-days). It lacks the reverse transcriptase enzyme needed to convert RNA to DNA. It cannot alter the human genome.',
    bookReference: {
      bookName: 'Science & Technology by Ravi P. Agrahari / NCERT Class XII Biology',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 8: Biotechnology & Immunology',
      pageNumber: 'Page 8.9 – 8.14',
      keyExcerpt: 'mRNA vaccines cannot enter the nucleus or alter DNA. They are degraded in the cytoplasm within a short period after protein synthesis is complete.'
    },
    eliminationTip: 'Statement 2 is the anti-mRNA vaccine myth directly tested by UPSC. mRNA = cytoplasm only; CANNOT enter nucleus; CANNOT alter DNA. Eliminate options with statement 2 (b, c, d). Answer: (a) 1 and 3 only.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Science & Tech', 'mRNA Vaccine', 'COVID-19', 'Biotechnology', 'Immunology']
  },

  // [TYPE-A]
  {
    id: 'sci-006',
    subject: 'science_tech',
    topic: 'Nuclear Technology',
    subTopic: 'India\'s Three-Stage Nuclear Program',
    question: 'Consider the following statements about India\'s Three-Stage Nuclear Power Programme:\n\n1. Stage I uses Pressurised Heavy Water Reactors (PHWRs) fuelled by natural uranium to generate plutonium as a by-product.\n2. Stage II uses Fast Breeder Reactors (FBRs) that use the plutonium produced in Stage I, and breed more fuel (Uranium-233 from Thorium-232).\n3. Stage III exploits India\'s vast thorium reserves by using thorium-uranium (U-233) as the primary fuel in Advanced Heavy Water Reactors (AHWRs).\n\nWhich of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three correctly describe the three stages:\n1. Stage I: PHWRs use natural uranium (U-238 fuel; U-235 fission); by-product = Plutonium-239.\n2. Stage II: FBRs use Pu-239 + depleted uranium; they breed more Pu-239 AND convert Thorium-232 to Uranium-233 (for Stage III). The PFBR at Kalpakkam uses liquid sodium as coolant.\n3. Stage III: AHWRs use U-233 (bred from Th-232 in Stage II) as primary fuel. This stage exploits India\'s large thorium deposits (largest in world, ~25% of global reserves) to achieve long-term energy independence.',
    bookReference: {
      bookName: 'Science & Technology by Ravi P. Agrahari',
      edition: '7th Edition (2023)',
      chapter: 'Chapter 12: Nuclear Technology',
      pageNumber: 'Page 12.4 – 12.11',
      keyExcerpt: 'India\'s three-stage program (Homi Bhabha): PHWR (natural U) → FBR (Plutonium + Thorium) → AHWR (U-233 from Thorium). Goal: thorium-based self-sufficiency.'
    },
    eliminationTip: 'All three stages are correctly described — standard science & tech fact for UPSC. The key unique fact: India has world\'s largest thorium reserves; Stage III exploits this. Answer: (d) 1, 2 and 3.',
    difficulty: 'Moderate',
    frequency: 5,
    isPYQ: true,
    pyqYear: 2021,
    pyqPaper: 'GS',
    tags: ['Science & Tech', 'Nuclear Energy', 'Three-Stage Program', 'Thorium', 'PFBR']
  },

  // ═══════════════════════════════════════════════
  //  CURRENT AFFAIRS
  // ═══════════════════════════════════════════════

  // [TYPE-A]
  {
    id: 'ca-001',
    subject: 'current_affairs',
    topic: 'International Organizations',
    subTopic: 'SCO — Shanghai Cooperation Organisation',
    question: 'Consider the following statements about the Shanghai Cooperation Organisation (SCO):\n\n1. India and Pakistan were admitted as full members of the SCO at the Astana Summit in 2017.\n2. The SCO\'s Regional Anti-Terrorist Structure (RATS) is permanently headquartered in Tashkent, Uzbekistan.\n3. The SCO Secretariat is located in Beijing, China.\n\nWhich of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three are correct:\n1. India and Pakistan both became full SCO members at the Astana (Kazakhstan) Summit in June 2017 — expanding the bloc from 6 to 8 full members.\n2. RATS (Regional Anti-Terrorist Structure): Permanent executive body headquartered in Tashkent, Uzbekistan — coordinates counter-terrorism, separatism, and extremism efforts.\n3. SCO Secretariat: Established in 2004, permanently located in Beijing, China.',
    bookReference: {
      bookName: 'Drishti IAS / Vision IAS Monthly Current Affairs 2023',
      edition: '2023',
      chapter: 'International Organisations',
      pageNumber: 'Vision IAS July 2023, Page 48',
      keyExcerpt: 'SCO founded 2001 (successor to Shanghai Five). India + Pakistan joined 2017. RATS: Tashkent. Secretariat: Beijing.'
    },
    eliminationTip: 'All three SCO facts are standard and widely covered. India+Pakistan (2017 Astana), RATS Tashkent, Secretariat Beijing. All correct → (d) 1, 2 and 3.',
    difficulty: 'Moderate',
    frequency: 4,
    tags: ['Current Affairs', 'SCO', 'International Organizations', 'RATS', 'India Foreign Policy']
  },

  // [TYPE-A]
  {
    id: 'ca-002',
    subject: 'current_affairs',
    topic: 'Government Schemes',
    subTopic: 'Flagship Welfare Schemes',
    question: 'Consider the following government schemes and their objectives:\n\n1. PM POSHAN (formerly Mid-Day Meal Scheme) — Providing hot cooked meals to government school children (Classes I–VIII) to improve nutrition and school enrolment.\n2. AMRUT 2.0 — Ensuring universal water supply connections to all urban households and sewerage connections in 500 cities.\n3. SVAMITVA Scheme — Providing property rights documentation to residents of inhabited rural (abadi) areas using drone mapping technology.\n\nWhich of the above pairs are correctly described?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three are correctly described:\n1. PM POSHAN (renamed from Mid-Day Meal Scheme in September 2021): Provides hot cooked meals to children in government and government-aided schools (Classes I–VIII). Aims to improve nutrition, reduce hunger, and boost attendance.\n2. AMRUT 2.0 (Atal Mission for Rejuvenation and Urban Transformation 2.0, launched 2021): Targets universal water tap connections to all urban households and sewerage/septage management in 500 cities.\n3. SVAMITVA (Survey of Villages Abadi and Mapping with Improvised Technology in Village Areas, 2020): Uses drone-based mapping to demarcate inhabited rural land and issue property cards (\'Adhikar Patra\') — first legal documentation for millions of rural residents.',
    bookReference: {
      bookName: 'Drishti IAS Schemes Compendium / Indian Economy by Ramesh Singh',
      edition: '2023',
      chapter: 'Government Schemes & Flagship Programs',
      pageNumber: 'Drishti IAS Schemes 2023, Page 34-39',
      keyExcerpt: 'SVAMITVA uses drone technology for rural property mapping — first time rural abadi residents receive formal property rights documentation.'
    },
    eliminationTip: 'All three scheme descriptions are accurate. SVAMITVA = drones + rural property rights; AMRUT 2.0 = urban water/sewerage; PM POSHAN = Mid-Day Meal renamed. Answer: (d) 1, 2 and 3.',
    difficulty: 'Easy',
    frequency: 6,
    isPYQ: true,
    pyqYear: 2023,
    pyqPaper: 'GS',
    tags: ['Current Affairs', 'Government Schemes', 'PM POSHAN', 'AMRUT', 'SVAMITVA']
  },

  // [TYPE-A]
  {
    id: 'ca-003',
    subject: 'current_affairs',
    topic: 'G20 & India\'s Global Role',
    subTopic: 'G20 New Delhi Summit 2023',
    question: 'Consider the following outcomes of the G20 New Delhi Leaders\' Summit held under India\'s Presidency (2023):\n\n1. The African Union was admitted as a permanent member of the G20.\n2. The New Delhi Leaders\' Declaration was adopted by all G20 members by consensus.\n3. The Global Biofuels Alliance (GBA) was launched at the Summit with India, USA, and Brazil as founding members.\n\nWhich of the statements given above are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 3,
    explanation: 'All three are correct outcomes of India\'s G20 New Delhi Summit (September 9-10, 2023):\n1. African Union (AU): Admitted as G20\'s 21st permanent member — historic diplomatic achievement for Africa, strongly pushed by India.\n2. New Delhi Declaration: Adopted by CONSENSUS — a major diplomatic success for India amid geopolitical divisions over Ukraine language. Leaders\' Declaration avoided the word "war" using agreed language.\n3. Global Biofuels Alliance (GBA): Formally launched at the Summit. Founding members: India, USA, Brazil + 12 other countries/international organisations. Aims to promote sustainable biofuels globally.',
    bookReference: {
      bookName: 'Vision IAS Current Affairs / Drishti IAS (September–October 2023)',
      edition: '2023',
      chapter: 'India\'s G20 Presidency — New Delhi Summit',
      pageNumber: 'Vision IAS Current Affairs October 2023, Page 3-8',
      keyExcerpt: 'G20 New Delhi Summit 2023: African Union membership, New Delhi Declaration by consensus, and launch of Global Biofuels Alliance.'
    },
    eliminationTip: 'All three G20 2023 outcomes are landmark achievements of India\'s G20 presidency — widely covered in all CA sources. Answer: (d) 1, 2 and 3.',
    difficulty: 'Easy',
    frequency: 8,
    isPYQ: true,
    pyqYear: 2024,
    pyqPaper: 'GS',
    tags: ['Current Affairs', 'G20', 'India G20 Presidency', 'African Union', 'Global Biofuels Alliance']
  },

  // ═══════════════════════════════════════════════
  //  CSAT — PAPER 2
  // ═══════════════════════════════════════════════

  // [TYPE-C] — CSAT direct calculation
  {
    id: 'csat-001',
    subject: 'csat_quant',
    topic: 'Number System & Remainder Theorem',
    subTopic: 'Unit Digit Cyclicity',
    question: 'What is the remainder when (7⁹⁵ − 3⁵⁸) is divided by 10?',
    options: [
      '0',
      '4',
      '6',
      '8'
    ],
    correctAnswer: 1,
    explanation: 'Remainder when divided by 10 = unit digit of the expression.\n\n7 has cyclicity 4: 7¹=7, 7²=9, 7³=3, 7⁴=1, 7⁵=7... → 95 = 4×23 + 3 → unit digit of 7⁹⁵ = unit digit of 7³ = 3\n\n3 has cyclicity 4: 3¹=3, 3²=9, 3³=7, 3⁴=1... → 58 = 4×14 + 2 → unit digit of 3⁵⁸ = unit digit of 3² = 9\n\nUnit digit of (7⁹⁵ − 3⁵⁸) = 3 − 9. Since 3 < 9, borrow: (13 − 9) = 4.\n\nRemainder = 4.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: 'Revised 2023',
      chapter: 'Chapter 1: Numbers — Unit Digit Cyclicity',
      pageNumber: 'Page 18 – 22',
      keyExcerpt: 'Cyclicity of 7 and 2 = 4; cyclicity of 3 and 7 = 4; cyclicity of 4 and 6 = 2; cyclicity of 5 and 0 = 1.'
    },
    eliminationTip: 'Step 1: Find cyclicities (7→4, 3→4). Step 2: Find power position (95 mod 4 = 3; 58 mod 4 = 2). Step 3: Unit digits (7³→3, 3²→9). Step 4: 3−9 = borrow 10 → 13−9 = 4. Answer: (b) 4.',
    difficulty: 'Moderate',
    tags: ['CSAT', 'Number System', 'Cyclicity', 'Unit Digit', 'Remainder']
  },

  // [TYPE-C] — Trains
  {
    id: 'csat-002',
    subject: 'csat_quant',
    topic: 'Time, Speed & Distance — Trains',
    subTopic: 'Relative Speed — Opposite Direction',
    question: 'Train A is 200 m long and travels at 60 km/h. Train B is 300 m long and travels in the OPPOSITE direction at 90 km/h. How many seconds will they take to completely cross each other?',
    options: [
      '10 seconds',
      '12 seconds',
      '15 seconds',
      '20 seconds'
    ],
    correctAnswer: 1,
    explanation: 'Opposite directions → Relative Speed = 60 + 90 = 150 km/h\n\nConvert: 150 km/h = 150 × (5/18) = 125/3 m/s\n\nTotal distance to cross = Length of A + Length of B = 200 + 300 = 500 m\n\nTime = Distance / Speed = 500 ÷ (125/3) = 500 × 3/125 = 1500/125 = 12 seconds.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: 'Revised 2023',
      chapter: 'Chapter 18: Time, Speed & Distance — Trains',
      pageNumber: 'Page 338 – 345',
      keyExcerpt: 'Opposite direction crossing: Time = (L₁ + L₂) ÷ (S₁ + S₂). Convert km/h to m/s by multiplying by 5/18.'
    },
    eliminationTip: 'Opposite = ADD speeds. 60+90=150 km/h = 150×5/18 = 125/3 m/s. 500 ÷ (125/3) = 12 sec. Answer: (b) 12 seconds.',
    difficulty: 'Moderate',
    tags: ['CSAT', 'Trains', 'Speed Distance', 'Relative Speed', 'Time']
  },

  // [TYPE-C] — Direction sense
  {
    id: 'csat-003',
    subject: 'csat_reasoning',
    topic: 'Direction Sense & Navigation',
    subTopic: 'Final Position & Displacement',
    question: 'Priya starts from her home and walks 4 km East, then turns right and walks 3 km, then turns right again and walks 4 km, and finally turns left and walks 2 km. What is the shortest straight-line distance between Priya\'s final position and her home?',
    options: [
      '3 km',
      '4 km',
      '5 km',
      '6 km'
    ],
    correctAnswer: 2,
    explanation: 'Map the path on a coordinate system (home = origin):\n1. Walks 4 km East → reaches (4, 0)\n2. Turns Right (now facing South), walks 3 km → (4, −3)\n3. Turns Right (now facing West), walks 4 km → (0, −3)\n4. Turns Left (now facing South), walks 2 km → (0, −5)\n\nFinal position: (0, −5) = directly 5 km South of home.\nShortest distance = 5 km.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2023',
      chapter: 'Chapter 25: Direction Sense Test',
      pageNumber: 'Page 514 – 519',
      keyExcerpt: 'Always draw the path step-by-step. Right turn from East = South. Final displacement = straight-line distance from start to end point.'
    },
    eliminationTip: 'Draw: E(4,0)→S(4,−3)→W(0,−3)→S(0,−5). Final = 5 km south of start. Straight-line distance = 5 km. Answer: (c) 5 km.',
    difficulty: 'Moderate',
    tags: ['CSAT', 'Direction Sense', 'Navigation', 'Displacement']
  },

  // [TYPE-C] — Syllogism
  {
    id: 'csat-004',
    subject: 'csat_reasoning',
    topic: 'Logical Deductions & Syllogism',
    subTopic: 'Statements and Conclusions',
    question: 'Consider the following statements:\n\nStatements:\n1. All IAS officers are hardworking.\n2. Some hardworking persons are creative thinkers.\n\nConclusions:\nI. Some IAS officers are creative thinkers.\nII. Some creative thinkers are hardworking.\n\nWhich of the conclusions logically follow(s) from the given statements?',
    options: [
      'Only Conclusion I follows',
      'Only Conclusion II follows',
      'Both Conclusion I and II follow',
      'Neither Conclusion I nor Conclusion II follows'
    ],
    correctAnswer: 1,
    explanation: 'Statement 2 (I-type: Some hardworking are creative) → by conversion → "Some creative thinkers are hardworking" — Conclusion II is VALID (direct conversion of an I-type proposition).\n\nConclusion I: IAS officers are a subset of Hardworking. Creative overlaps with Hardworking somewhere, but that overlap may or may not include IAS officers. The middle term "hardworking" is undistributed in both premises (A+I type = possible, not definite). Conclusion I is a possibility, not a definite conclusion.\n\nTherefore, only Conclusion II definitely follows.',
    bookReference: {
      bookName: 'A Modern Approach to Verbal & Non-Verbal Reasoning by R.S. Aggarwal',
      edition: '2023',
      chapter: 'Chapter 14: Syllogisms',
      pageNumber: 'Page 412 – 418',
      keyExcerpt: 'An I-type proposition (Some A are B) can be directly converted to "Some B are A" — this is always valid. A+I type cannot give a definite universal conclusion.'
    },
    eliminationTip: 'Venn diagram: IAS circle ⊆ Hardworking circle. Creative circle overlaps somewhere with Hardworking. Creative may or may not touch IAS. So Conclusion I is uncertain. But Creative and Hardworking definitely overlap (given) → Conclusion II is certain. Answer: (b) Only Conclusion II.',
    difficulty: 'Moderate',
    tags: ['CSAT', 'Syllogism', 'Logical Reasoning', 'Venn Diagrams']
  },

  // [TYPE-C] — Percentage
  {
    id: 'csat-005',
    subject: 'csat_quant',
    topic: 'Percentage & Successive Changes',
    subTopic: 'Multiplier Method',
    question: 'A shopkeeper marks his goods at 40% above the cost price and offers a discount of 20% on the marked price. What is his profit percentage?',
    options: [
      '10%',
      '12%',
      '14%',
      '16%'
    ],
    correctAnswer: 1,
    explanation: 'Let Cost Price = ₹100\nMarked Price = ₹100 + 40% = ₹140\nDiscount = 20% on ₹140 = ₹28\nSelling Price = ₹140 − ₹28 = ₹112\nProfit = ₹112 − ₹100 = ₹12\nProfit% = (12/100) × 100 = 12%\n\nUsing formula: Profit% = (1 + markup/100) × (1 − discount/100) − 1 = 1.40 × 0.80 − 1 = 1.12 − 1 = 12%.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: 'Revised 2023',
      chapter: 'Chapter 11: Profit, Loss and Discount',
      pageNumber: 'Page 238 – 248',
      keyExcerpt: 'Net effect = (1 + markup%) × (1 − discount%). If > 1, it\'s profit; if < 1, it\'s loss. Profit% = (Net factor − 1) × 100.'
    },
    eliminationTip: 'CP = 100, MP = 140, SP = 140×0.80 = 112. Profit = 12 on CP 100 = 12%. Quick formula: 1.40 × 0.80 = 1.12 = 12% profit. Answer: (b) 12%.',
    difficulty: 'Easy',
    tags: ['CSAT', 'Profit Loss', 'Percentage', 'Discount', 'Marked Price']
  },

  // [TYPE-C] — Data Interpretation
  {
    id: 'csat-006',
    subject: 'csat_quant',
    topic: 'Data Interpretation',
    subTopic: 'Percentage Calculation from Given Data',
    question: 'In a class of 120 students, 40% scored Grade A, 25% scored Grade B, 20% scored Grade C, and the remaining scored Grade D. How many more students scored Grade A than Grade C?',
    options: [
      '18',
      '20',
      '24',
      '28'
    ],
    correctAnswer: 2,
    explanation: 'Total students = 120\nGrade A = 40% of 120 = 48 students\nGrade B = 25% of 120 = 30 students\nGrade C = 20% of 120 = 24 students\nGrade D = (100 − 40 − 25 − 20)% = 15% of 120 = 18 students\n\nDifference = Grade A − Grade C = 48 − 24 = 24 students.',
    bookReference: {
      bookName: 'Quantitative Aptitude by R.S. Aggarwal',
      edition: 'Revised 2023',
      chapter: 'Chapter 29: Data Interpretation',
      pageNumber: 'Page 582 – 590',
      keyExcerpt: 'For DI percentage problems: Find actual count = (percentage × total)/100. Then compare.'
    },
    eliminationTip: '40% of 120 = 48; 20% of 120 = 24. Difference = 48 − 24 = 24. Straightforward calculation. Answer: (c) 24.',
    difficulty: 'Easy',
    tags: ['CSAT', 'Data Interpretation', 'Percentage', 'Calculation']
  },

  // [TYPE-C] — Reading Comprehension
  {
    id: 'csat-007',
    subject: 'csat_reading',
    topic: 'Reading Comprehension',
    subTopic: 'Main Inference from Passage',
    question: 'Read the following passage carefully and answer the question that follows:\n\n"The increase in global temperatures is primarily driven by greenhouse gas emissions from human activities. However, some scientists note that natural climate variability — including solar cycles and volcanic eruptions — also plays a contributing role. Despite this ongoing academic debate, the overwhelming scientific consensus firmly establishes human-caused emissions as the dominant and overriding driver of the current warming trend."\n\nWhich of the following is the most accurate inference that can be drawn from this passage?',
    options: [
      'Natural factors alone are responsible for the current phase of global warming.',
      'There is no scientific consensus on the causes of climate change, making policy interventions premature.',
      'Human activities are the dominant cause of current global warming, though natural factors also have a secondary contributing role.',
      'Solar cycles and volcanic eruptions are more significant contributors to climate change than greenhouse gases.'
    ],
    correctAnswer: 2,
    explanation: 'The passage makes two key points:\n(i) Human-caused emissions are the PRIMARY driver (dominant and overriding).\n(ii) Natural variability (solar, volcanic) also plays a CONTRIBUTING role — secondary, not primary.\n\nOption (c) captures BOTH these nuances accurately.\n\nOption (a) says "natural factors ALONE" — contradicts the passage.\nOption (b) says "no scientific consensus" — the passage explicitly states there IS an "overwhelming consensus".\nOption (d) inverts the primacy — passage says humans dominate, not solar/volcanic.',
    bookReference: {
      bookName: 'CSAT Paper 2 Comprehensive Guide by Arihant / RC Strategy',
      edition: '2023',
      chapter: 'Chapter 4: Reading Comprehension — Inference Questions',
      pageNumber: 'Page 78 – 84',
      keyExcerpt: 'The most accurate inference must be fully supported by the passage without adding extra assumptions or distorting the main argument.'
    },
    eliminationTip: 'Options (a), (b), and (d) directly CONTRADICT the passage. Only (c) faithfully captures the passage\'s balanced message: humans = dominant; natural = secondary. Answer: (c).',
    difficulty: 'Easy',
    tags: ['CSAT', 'Reading Comprehension', 'Inference', 'Climate Change']
  }
];
