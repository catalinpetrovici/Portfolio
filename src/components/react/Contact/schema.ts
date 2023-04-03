import { object, InferType, string } from 'yup';

export const schema = object().shape({
  name: string()
    .min(3, 'Name must be at least 3 characters')
    .required('This field is required'),
  email: string()
    .email('Please enter a valid email')
    .required('This field is required'),
  jobType: string()
    .oneOf(['Frontend', 'Backend', 'Fullstack'])
    .required('This field is required'),
  message: string().optional(),
});

export type Input = InferType<typeof schema>;
