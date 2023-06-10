import express from 'express';
import { academicSemesterValidation } from './academicSemester.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(academicSemesterValidation.createacademicSemesterZodSchema),
  AcademicSemesterController.createSemister
);

export const academicSemesterRoute = router;
