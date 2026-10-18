import { Question } from '@/lib/types';
import { pyq2017_gs_1 } from './pyq2017_gs_1';
import { pyq2017_gs_2 } from './pyq2017_gs_2';
import { pyq2017_csat_1 } from './pyq2017_csat_1';
import { pyq2017_csat_2 } from './pyq2017_csat_2';

export const pyq2017: Question[] = [
  ...pyq2017_gs_1,
  ...pyq2017_gs_2,
  ...pyq2017_csat_1,
  ...pyq2017_csat_2,
];
