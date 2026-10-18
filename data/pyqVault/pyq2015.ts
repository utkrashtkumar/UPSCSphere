import { Question } from '@/lib/types';
import { pyq2015_gs_1 } from './pyq2015_gs_1';
import { pyq2015_gs_2 } from './pyq2015_gs_2';
import { pyq2015_csat_1 } from './pyq2015_csat_1';
import { pyq2015_csat_2 } from './pyq2015_csat_2';

export const pyq2015: Question[] = [
  ...pyq2015_gs_1,
  ...pyq2015_gs_2,
  ...pyq2015_csat_1,
  ...pyq2015_csat_2,
];
