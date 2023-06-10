import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import {
  academicSemesterSearchableFields,
  academicSemesterTitleCodeMapper,
} from './academicSemester.constent';
import {
  IAcademicSemesterFilters,
  IacademicSemester,
} from './academicSemester.interface';
import { AcademicSemester } from './academicSemesterModel';
import { IPaginationOptions } from '../../../interfaces/pagination.interface';
import { IGenericResponse } from '../../../interfaces/common';
import { paginationHelpers } from '../../../helpers/paginationHelper';
import { SortOrder } from 'mongoose';

const createSemesterService = async (
  payload: IacademicSemester
): Promise<IacademicSemester> => {
  if (academicSemesterTitleCodeMapper[payload.title] !== payload.code) {
    throw new ApiError(httpStatus.BAD_REQUEST, 'Invalid Semister Code');
  }
  const result = await AcademicSemester.create(payload);
  return result;
};

const getAllSemestersService = async (
  filters: IAcademicSemesterFilters,
  paginationOptions: IPaginationOptions
): Promise<IGenericResponse<IacademicSemester[]>> => {
  const { searchTerm, ...filtersData } = filters;

  const andConditions = [];
  if (searchTerm) {
    andConditions.push({
      $or: academicSemesterSearchableFields.map(field => ({
        [field]: {
          $regex: searchTerm,
          $options: 'i',
        },
      })),
    });
  }
  if (Object.keys(filtersData).length) {
    andConditions.push({
      $and: Object.entries(filtersData).map(([field, value]) => ({
        [field]: value,
      })),
    });
  }

  const { page, limit, skip, sortBy, sortOrder } =
    paginationHelpers.calculatePagination(paginationOptions);

  const sortConditions: { [key: string]: SortOrder } = {};
  if (sortBy && sortOrder) {
    sortConditions[sortBy] = sortOrder;
  }

  const whereConditions =
    andConditions.length > 0 ? { $and: andConditions } : {};

  const total = await AcademicSemester.countDocuments();
  const result = await AcademicSemester.find(whereConditions)
    .sort(sortConditions)
    .skip(skip)
    .limit(limit);
  return {
    meta: {
      page,
      limit,
      total,
    },
    data: result,
  };
};

const getSingleSemesterService = async (
  id: string
): Promise<IacademicSemester | null> => {
  const result = await AcademicSemester.findById(id);
  return result;
};
export const AcademicSemesterService = {
  createSemesterService,
  getAllSemestersService,
  getSingleSemesterService,
};
