import httpStatus from 'http-status';
import ApiError from '../../../errors/ApiError';
import { User } from '../user/user.model';
import { ILoginUser, ILoginUserResponse } from './auth.interface';
import { Secret } from 'jsonwebtoken';
import config from '../../../config';
import { jwtHelpers } from '../../../helpers/jwtHelpers';

const loginUserService = async (
  loginData: ILoginUser
): Promise<ILoginUserResponse> => {
  const { id, password } = loginData;

  const isUserExist = await User.findOne(
    { id },
    { id: 1, password: 1, needsPasswordChange: 1 }
  ).lean();
  if (!isUserExist) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User does not exist.');
  }

  //instance use.
  const user = new User();
  const isUserExists = await user.isUserExist(id);
  if (!isUserExists) {
    throw new ApiError(httpStatus.NOT_FOUND, 'User is not found.');
  }

  if (
    isUserExist.password &&
    !user.isPasswordMathced(password, isUserExist?.password)
  ) {
    throw new ApiError(httpStatus.UNAUTHORIZED, 'Password is incorrect.');
  }

  //token generating
  const accessToken = jwtHelpers.createToken(
    { id: isUserExist?.id, role: isUserExist.role },
    config.jwt.secret as Secret,
    config.jwt.expires_in as string
  );

  const refreshToken = jwtHelpers.createToken(
    { id: isUserExist?.id, role: isUserExist.role },
    config.jwt.refresh_secret as Secret,
    config.jwt.refresh_expires_in as string
  );

  return {
    accessToken,
    refreshToken,
    needsPasswordChange: isUserExist?.needsPasswordChange,
  };
};

export const AuthService = {
  loginUserService,
};
