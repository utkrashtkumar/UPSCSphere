import { Question } from '@/lib/types';
import { pyq2022_gs_1 } from './pyq2022_gs_1';
import { pyq2022_gs_2 } from './pyq2022_gs_2';
import { pyq2022_csat_1 } from './pyq2022_csat_1';
import { pyq2022_csat_2 } from './pyq2022_csat_2';

export const pyq2022: Question[] = [
  ...pyq2022_gs_1,
  ...pyq2022_gs_2,
  ...pyq2022_csat_1,
  ...pyq2022_csat_2,
];
