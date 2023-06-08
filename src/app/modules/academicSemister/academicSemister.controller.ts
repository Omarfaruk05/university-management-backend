import { RequestHandler } from 'express';
import { AcademicSemesterService } from './academicSemister.service';

const createSemister: RequestHandler = async (req, res, next) => {
  try {
    const { ...academicSemisterData } = req.body;
    const result = await AcademicSemesterService.createSemisterService(
      academicSemisterData
    );
    res.status(200).json({
      success: true,
      message: 'Academic semister is created successfully!',
      data: result,
    });
  } catch (err) {
    next(err);
  }
};

export const AcademicSemesterController = {
  createSemister,
};
