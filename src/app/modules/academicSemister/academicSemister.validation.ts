import { z } from 'zod';
import {
  academicSemisterCode,
  academicSemisterMonths,
  academicSemisterTitles,
} from './academicSemister.constent';

const createAcademicSemisterZodSchema = z.object({
  body: z.object({
    title: z.enum([...academicSemisterTitles] as [string, ...string[]], {
      required_error: 'Title is required.',
    }),
    year: z.number({
      required_error: 'Year is required',
    }),
    code: z.enum([...academicSemisterCode] as [string, ...string[]]),
    startMonth: z.enum([...academicSemisterMonths] as [string, ...string[]], {
      required_error: 'Start month is required',
    }),
    endMonth: z.enum([...academicSemisterMonths] as [string, ...string[]], {
      required_error: 'End month is required',
    }),
  }),
});

export const AcademicSemisterValidation = {
  createAcademicSemisterZodSchema,
};
