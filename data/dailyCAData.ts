import { Question } from '@/lib/types';

export const dailyCAQuestions: Question[] = [
  {
    id: 'ca-2025-01',
    subject: 'current_affairs',
    topic: 'International Relations & Global Groupings',
    subTopic: 'India-Middle East-Europe Economic Corridor (IMEC)',
    question: 'With reference to the "India-Middle East-Europe Economic Corridor (IMEC)", consider the following statements:\n\n1. It was announced on the sidelines of the G20 New Delhi Leaders\' Summit.\n2. It comprises two separate corridors: the East Corridor and the Northern Corridor.\n3. It entirely avoids maritime shipping routes and relies solely on overland high-speed rail.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct: IMEC was unveiled at the G20 New Delhi Summit in Sept 2023. It consists of the East Corridor connecting India to the Arabian Gulf and the Northern Corridor connecting the Gulf to Europe.\nStatement 3 is incorrect: It is a multimodal corridor consisting of ship-to-rail transit networks, hydrogen pipelines, and high-speed data cables, NOT solely overland rail.',
    bookReference: {
      bookName: 'The Hindu & PIB Monthly Compilation / Ministry of External Affairs',
      edition: 'August 2024 / 2025 Updates',
      chapter: 'International Relations & Geopolitics: Connectivity Initiatives',
      pageNumber: 'PIB Release ID: 1956108 / The Hindu World Affairs Page 14',
      keyExcerpt: 'IMEC will consist of two corridors: East Corridor connecting India to the Arabian Gulf and Northern Corridor connecting the Arabian Gulf to Europe, combining ship-to-rail transit network.'
    },
    eliminationTip: 'Notice the extreme word in statement 3 ("entirely avoids maritime routes and relies solely on..."). India cannot connect to the Arabian Gulf or Europe without maritime sea shipping links!',
    difficulty: 'UPSC Standard',
    frequency: 4,
    tags: ['Current Affairs', 'IMEC', 'G20', 'Connectivity']
  },
  {
    id: 'ca-2025-02',
    subject: 'current_affairs',
    topic: 'Economy & Energy Transition',
    subTopic: 'PM Surya Ghar: Muft Bijli Yojana',
    question: 'Consider the following statements regarding the "PM Surya Ghar: Muft Bijli Yojana":\n\n1. It aims to provide up to 300 units of free electricity every month to 1 crore households.\n2. Beneficiaries receive direct capital subsidies deposited into their bank accounts via National Portal.\n3. The scheme is applicable exclusively to commercial and industrial establishments.\n\nWhich of the statements given above is/are correct?',
    options: [
      '1 and 2 only',
      '2 and 3 only',
      '1 and 3 only',
      '1, 2 and 3'
    ],
    correctAnswer: 0,
    explanation: 'Statements 1 and 2 are correct: PM Surya Ghar: Muft Bijli Yojana was approved with an outlay of ₹75,021 crore for installing rooftop solar and providing up to 300 units of free electricity monthly to 1 crore residential households with direct bank subsidies.\nStatement 3 is incorrect: The scheme is specifically targeted at RESIDENTIAL households, not commercial/industrial establishments.',
    bookReference: {
      bookName: 'Yojana & Kurukshetra Monthly / Ministry of New and Renewable Energy (MNRE)',
      edition: '2024-2025 Editions',
      chapter: 'Renewable Energy & Citizen Schemes (Yojana Focus)',
      pageNumber: 'Yojana Oct 2024 Page 22–25',
      keyExcerpt: 'PM Surya Ghar provides up to 300 units of free electricity every month for 1 crore residential households with a collateral-free subsidized loan and direct central capital subsidy.'
    },
    eliminationTip: 'The scheme title contains "Ghar" (Home), pointing directly to residential households, not factories/commercial complexes.',
    difficulty: 'Easy',
    tags: ['Current Affairs', 'Solar Energy', 'Government Schemes', 'PM Surya Ghar']
  }
];
