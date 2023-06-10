import { Schema, model } from 'mongoose';
import {
  AcademicSemesterModel,
  IacademicSemester,
} from './academicSemester.interface';
import {
  academicSemesterCode,
  academicSemesterMonths,
  academicSemesterTitles,
} from './academicSemester.constent';
import ApiError from '../../../errors/ApiError';
import httpStatus from 'http-status';

const academicSemesterSchema = new Schema<IacademicSemester>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemesterTitles,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemesterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemesterMonths,
    },
  },
  {
    timestamps: true,
  }
);

academicSemesterSchema.pre('save', async function name(next) {
  const isExist = await academicSemester.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(
      httpStatus.CONFLICT,
      'Ihis academic semister is already exist in this year.'
    );
  }
  next();
});

export const academicSemester = model<IacademicSemester, AcademicSemesterModel>(
  'academicSemester',
  academicSemesterSchema
);
