import { IAcademicSemister } from './academicSemister.interface';
import { AcademicSemister } from './academicSemisterModel';

const createSemisterService = async (
  payload: IAcademicSemister
): Promise<IAcademicSemister> => {
  const result = await AcademicSemister.create(payload);
  return result;
};

export const AcademicSemesterService = {
  createSemisterService,
};
