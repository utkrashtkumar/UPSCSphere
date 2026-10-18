import { Question } from '@/lib/types';
import { pyq2021_gs_1 } from './pyq2021_gs_1';
import { pyq2021_gs_2 } from './pyq2021_gs_2';
import { pyq2021_csat_1 } from './pyq2021_csat_1';
import { pyq2021_csat_2 } from './pyq2021_csat_2';

export const pyq2021: Question[] = [
  ...pyq2021_gs_1,
  ...pyq2021_gs_2,
  ...pyq2021_csat_1,
  ...pyq2021_csat_2,
];
