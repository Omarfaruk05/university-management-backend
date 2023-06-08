import { Schema, model } from 'mongoose';
import {
  AcademicSemesterModel,
  IAcademicSemister,
} from './academicSemister.interface';
import {
  academicSemisterCode,
  academicSemisterMonths,
  academicSemisterTitles,
} from './academicSemister.constent';
import ApiError from '../../../errors/ApiError';
import status from 'http-status';

const academicSemisterSchema = new Schema<IAcademicSemister>(
  {
    title: {
      type: String,
      required: true,
      enum: academicSemisterTitles,
    },
    year: {
      type: Number,
      required: true,
    },
    code: {
      type: String,
      required: true,
      enum: academicSemisterCode,
    },
    startMonth: {
      type: String,
      required: true,
      enum: academicSemisterMonths,
    },
    endMonth: {
      type: String,
      required: true,
      enum: academicSemisterMonths,
    },
  },
  {
    timestamps: true,
  }
);

academicSemisterSchema.pre('save', async function name(next) {
  const isExist = await AcademicSemister.findOne({
    title: this.title,
    year: this.year,
  });
  if (isExist) {
    throw new ApiError(
      status.CONFLICT,
      'Ihis academic semister is already exist in this year.'
    );
  }
  next();
});

export const AcademicSemister = model<IAcademicSemister, AcademicSemesterModel>(
  'AcademicSemister',
  academicSemisterSchema
);
