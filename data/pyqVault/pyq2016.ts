import { Question } from '@/lib/types';
import { pyq2016_gs_1 } from './pyq2016_gs_1';
import { pyq2016_gs_2 } from './pyq2016_gs_2';
import { pyq2016_csat_1 } from './pyq2016_csat_1';
import { pyq2016_csat_2 } from './pyq2016_csat_2';

export const pyq2016: Question[] = [
  ...pyq2016_gs_1,
  ...pyq2016_gs_2,
  ...pyq2016_csat_1,
  ...pyq2016_csat_2,
];
