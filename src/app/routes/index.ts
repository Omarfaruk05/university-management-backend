import express from 'express';
import { UserRoutes } from '../modules/user/user.route';
import { academicSemesterRoute } from '../modules/academicSemister/academicSemester.route';
const router = express.Router();

const moduleRoutes = [
  {
    path: '/users',
    route: UserRoutes,
  },
  {
    path: '/academic-semesters',
    route: academicSemesterRoute,
  },
];

moduleRoutes.forEach(route => router.use(route.path, route.route));

export default router;
