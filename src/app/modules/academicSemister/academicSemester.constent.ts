import {
  IacademicSemesterCode,
  IacademicSemesterMonths,
  IacademicSemesterTitles,
} from './academicSemester.interface';

export const academicSemesterMonths: IacademicSemesterMonths[] = [
  'January',
  'February',
  'March',
  'April',
  'May',
  'June',
  'July',
  'August',
  'September',
  'October',
  'November',
  'December',
];

export const academicSemesterTitles: IacademicSemesterTitles[] = [
  'Autum',
  'Summer',
  'Fall',
];
export const academicSemesterCode: IacademicSemesterCode[] = ['01', '02', '03'];

export const academicSemesterTitleCodeMapper: {
  [key: string]: string;
} = {
  Autum: '01',
  Summer: '02',
  Fall: '03',
};
