import { Question } from '@/lib/types';
import { pyq2025_gs_1 } from './pyq2025_gs_1';
import { pyq2025_gs_2 } from './pyq2025_gs_2';
import { pyq2025_csat_1 } from './pyq2025_csat_1';
import { pyq2025_csat_2 } from './pyq2025_csat_2';

export const pyq2025: Question[] = [
  ...pyq2025_gs_1,
  ...pyq2025_gs_2,
  ...pyq2025_csat_1,
  ...pyq2025_csat_2,
];
