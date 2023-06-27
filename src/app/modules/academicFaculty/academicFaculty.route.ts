import express from 'express';
import { AcademicFacultyControlller } from './academicFaculty.controller';
import { AcademicFacultyValidation } from './academicFaculty.validations';
import validateRequest from '../../middlewares/validateRequest';
import { ENUM_ROLE } from '../../../enums/user';
import auth from '../../middlewares/auth';

const router = express.Router();

router.post(
  '/create-faculty',
  validateRequest(AcademicFacultyValidation.createFacultyZodSchema),
  auth(ENUM_ROLE.SUPPER_ADIMT, ENUM_ROLE.ADMIN),
  AcademicFacultyControlller.createFaculty
);

router.get(
  '/',
  auth(
    ENUM_ROLE.SUPPER_ADIMT,
    ENUM_ROLE.ADMIN,
    ENUM_ROLE.FACULTY,
    ENUM_ROLE.STUDENT
  ),
  AcademicFacultyControlller.getAllFaculties
);

router.get(
  '/:id',
  auth(
    ENUM_ROLE.SUPPER_ADIMT,
    ENUM_ROLE.ADMIN,
    ENUM_ROLE.FACULTY,
    ENUM_ROLE.STUDENT
  ),
  AcademicFacultyControlller.getSingleFaculty
);

router.patch(
  '/:id',
  auth(ENUM_ROLE.SUPPER_ADIMT, ENUM_ROLE.ADMIN, ENUM_ROLE.FACULTY),
  validateRequest(AcademicFacultyValidation.updateFacultyZodSchema),
  AcademicFacultyControlller.updateFaculty
);

router.delete(
  '/:id',
  auth(ENUM_ROLE.SUPPER_ADIMT, ENUM_ROLE.ADMIN),
  AcademicFacultyControlller.deleteFaculty
);

export const AcademicFacultyRoutes = router;
