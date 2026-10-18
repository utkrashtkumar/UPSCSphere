import { Question } from '@/lib/types';
import { pyq2024_gs_1 } from './pyq2024_gs_1';
import { pyq2024_gs_2 } from './pyq2024_gs_2';
import { pyq2024_csat_1 } from './pyq2024_csat_1';
import { pyq2024_csat_2 } from './pyq2024_csat_2';

export const pyq2024: Question[] = [
  ...pyq2024_gs_1,
  ...pyq2024_gs_2,
  ...pyq2024_csat_1,
  ...pyq2024_csat_2,
];
