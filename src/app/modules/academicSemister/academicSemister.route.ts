import express from 'express';
import { AcademicSemisterValidation } from './academicSemister.validation';
import validateRequest from '../../middlewares/validateRequest';
import { AcademicSemesterController } from './academicSemister.controller';
const router = express.Router();

router.post(
  '/create-semister',
  validateRequest(AcademicSemisterValidation.createAcademicSemisterZodSchema),
  AcademicSemesterController.createSemister
);

export const AcademicSemisterRoute = router;
