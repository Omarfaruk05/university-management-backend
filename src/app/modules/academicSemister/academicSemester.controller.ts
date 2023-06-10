import { NextFunction, Request, Response } from 'express';
import { AcademicSemesterService } from './academicSemester.service';
import catchAsync from '../../../shared/catchAsync';
import sendResponse from '../../../shared/sendResponse';
import httpStatus from 'http-status';
import { IacademicSemester } from './academicSemester.interface';
import pick from '../../../shared/pick';
import { paginationFields } from '../../constants/paginationConstants';
import { academicSemesterFilterableFields } from './academicSemester.constent';
const createSemester = catchAsync(
  async (req: Request, res: Response, next: NextFunction) => {
    const { ...academicSemesterData } = req.body;
    const result = await AcademicSemesterService.createSemesterService(
      academicSemesterData
    );

    sendResponse<IacademicSemester>(res, {
      statusCode: httpStatus.OK,
      success: true,
      message: 'Aademic semester created successfully!',
      data: result,
    });
    next();
  }
);
const getAllSemesters = catchAsync(async (req: Request, res: Response) => {
  const filters = pick(req.query, academicSemesterFilterableFields);
  const paginationOptions = pick(req.query, paginationFields);

  const result = await AcademicSemesterService.getAllSemestersService(
    filters,
    paginationOptions
  );

  sendResponse<IacademicSemester[]>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester retrieved successfully.',
    meta: result.meta,
    data: result.data,
  });
});

const getSingleSemesters = catchAsync(async (req: Request, res: Response) => {
  const id = req.params.id;
  const result = await AcademicSemesterService.getSingleSemesterService(id);

  sendResponse<IacademicSemester>(res, {
    statusCode: httpStatus.OK,
    success: true,
    message: 'Semester received successfully!',
    data: result,
  });
});
export const AcademicSemesterController = {
  createSemester,
  getAllSemesters,
  getSingleSemesters,
};
