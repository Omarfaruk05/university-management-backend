import express from 'express';
import { academicSemesterValidation } from './academicSemester.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemester.controller';
const router = express.Router();

router.post(
  '/create-semester',
  validateRequest(academicSemesterValidation.createacademicSemesterZodSchema),
  AcademicSemesterController.createSemester
);
router.get('/get-semesters', AcademicSemesterController.getAllSemesters);
router.get('/get-semester/:id', AcademicSemesterController.getSingleSemesters);

export const academicSemesterRoute = router;
