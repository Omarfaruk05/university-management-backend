import { Schema, model } from 'mongoose';
import {
  IManagementDepartment,
  IManagementDepartmentModel,
} from './managementDepartment.interface';

const managementDepartmentSchema = new Schema<
  IManagementDepartment,
  IManagementDepartmentModel
>(
  {
    title: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    toJSON: {
      virtuals: true,
    },
  }
);

export const ManagementDepartment = model<
  IManagementDepartment,
  IManagementDepartmentModel
>('ManagementDepartment', managementDepartmentSchema);
