import express from 'express';
import { AcademicFacultyControlller } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validations';
import validateRequest from '../../middlewares/validateRequest';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  AcademicFacultyControlller.createFaculty
);

router.get('/:id', AcademicFacultyControlller.getAllFaculties);

router.patch(
  '/:id',
  validateRequest(AcademicFacultyValidation.updateFacultyZodSchema),
  AcademicFacultyControlller.updateFaculty
);

router.delete('/:id', AcademicFacultyControlller.deleteFaculty);

export const AcademicFacultyRoutes = router;
