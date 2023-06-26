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

router.patch(
  '/update-semester/:id',
  validateRequest(academicSemesterValidation.updateAdemicSemesterZodSchema),
  AcademicSemesterController.updateSemester
);

router.delete(
  '/delete-semester/:id',
  AcademicSemesterController.deleteSemester
);

export const AcademicSemesterRoute = router;
