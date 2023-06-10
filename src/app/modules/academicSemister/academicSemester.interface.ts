import { Model } from 'mongoose';

export type IacademicSemesterMonths =
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

export type IacademicSemesterTitles = 'Autum' | 'Fall' | 'Summer';

export type IacademicSemesterCode = '01' | '02' | '03';

export type IacademicSemester = {
  title: IacademicSemesterTitles;
  year: string;
  code: IacademicSemesterCode;
  startMonth: IacademicSemesterMonths;
  endMonth: IacademicSemesterMonths;
};

export type AcademicSemesterModel = Model<IacademicSemester>;

export type IAcademicSemesterFilters = {
  searchTerm: string;
};
