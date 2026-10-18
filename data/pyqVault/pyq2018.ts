import { Question } from '@/lib/types';
import { pyq2018_gs_1 } from './pyq2018_gs_1';
import { pyq2018_gs_2 } from './pyq2018_gs_2';
import { pyq2018_csat_1 } from './pyq2018_csat_1';
import { pyq2018_csat_2 } from './pyq2018_csat_2';

export const pyq2018: Question[] = [
  ...pyq2018_gs_1,
  ...pyq2018_gs_2,
  ...pyq2018_csat_1,
  ...pyq2018_csat_2,
];
