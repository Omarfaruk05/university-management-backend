import { Model } from 'mongoose';

export type IAcademicSemisterMonths =
  | 'January'
  | 'February'
  | 'March'
  | 'April'
  | 'May'
  | 'June'
  | 'July'
  | 'August'
  | 'September'
  | 'October'
  | 'November'
  | 'December';

export type IAcademicSemisterTitles = 'Autum' | 'Fall' | 'Summer';

export type IAcademicSemisterCode = '01' | '02' | '03';

export type IAcademicSemister = {
  title: IAcademicSemisterTitles;
  year: number;
  code: IAcademicSemisterCode;
  startMonth: IAcademicSemisterMonths;
  endMonth: IAcademicSemisterMonths;
};

export type AcademicSemesterModel = Model<IAcademicSemister>;
