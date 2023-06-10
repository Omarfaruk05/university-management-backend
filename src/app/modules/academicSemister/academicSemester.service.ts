import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { academicSemesterTitleCodeMapper } from './academicSemester.constent';
import { IacademicSemester } from './academicSemester.interface';
import { academicSemester } from './academicSemesterModel';

const createSemisterService = async (
  payload: IacademicSemester
): Promise<IacademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semister Code');
  }
  const result = await academicSemester.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createSemisterService,
};
