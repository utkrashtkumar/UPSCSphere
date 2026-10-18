import { Question } from '@/lib/types';
import { pyq2019_gs_1 } from './pyq2019_gs_1';
import { pyq2019_gs_2 } from './pyq2019_gs_2';
import { pyq2019_csat_1 } from './pyq2019_csat_1';
import { pyq2019_csat_2 } from './pyq2019_csat_2';

export const pyq2019: Question[] = [
  ...pyq2019_gs_1,
  ...pyq2019_gs_2,
  ...pyq2019_csat_1,
  ...pyq2019_csat_2,
];
