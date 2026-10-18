import { Question } from '@/lib/types';
import { pyq2023_gs_1 } from './pyq2023_gs_1';
import { pyq2023_gs_2 } from './pyq2023_gs_2';
import { pyq2023_csat_1 } from './pyq2023_csat_1';
import { pyq2023_csat_2 } from './pyq2023_csat_2';

export const pyq2023: Question[] = [
  ...pyq2023_gs_1,
  ...pyq2023_gs_2,
  ...pyq2023_csat_1,
  ...pyq2023_csat_2,
];
