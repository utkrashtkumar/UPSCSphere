import { Question } from '@/lib/types';
import { pyq2026_gs_1 } from './pyq2026_gs_1';
import { pyq2026_gs_2 } from './pyq2026_gs_2';
import { pyq2026_csat_1 } from './pyq2026_csat_1';
import { pyq2026_csat_2 } from './pyq2026_csat_2';

export const pyq2026: Question[] = [
  ...pyq2026_gs_1,
  ...pyq2026_gs_2,
  ...pyq2026_csat_1,
  ...pyq2026_csat_2,
];
