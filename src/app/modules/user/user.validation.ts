import { z } from 'zod'

// req-validation
const createUserZodSchema = z.object({
  body: z.object({
    role: z.string({
      required_error: 'Role is required.',
    }),
    passowrd: z.string().optional(),
  }),
})

export const UserValidation = {
  createUserZodSchema,
}
