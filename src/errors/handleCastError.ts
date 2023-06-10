import { IGenericErrorMessage } from '../interfaces/error';
import mongoose from 'mongoose';

const handleCastError = (error: mongoose.Error.CastError) => {
  console.log(error);
  const errors: IGenericErrorMessage[] = [
    {
      path: error.path,
      message: 'Invalide Error',
    },
  ];
  const statusCode = 400;
  return {
    statusCode,
    message: 'Cast Error',
    errorMessages: errors,
  };
};

export default handleCastError;
