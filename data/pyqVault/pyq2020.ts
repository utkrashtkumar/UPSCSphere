import { Question } from '@/lib/types';
import { pyq2020_gs_1 } from './pyq2020_gs_1';
import { pyq2020_gs_2 } from './pyq2020_gs_2';
import { pyq2020_csat_1 } from './pyq2020_csat_1';
import { pyq2020_csat_2 } from './pyq2020_csat_2';

export const pyq2020: Question[] = [
  ...pyq2020_gs_1,
  ...pyq2020_gs_2,
  ...pyq2020_csat_1,
  ...pyq2020_csat_2,
];
