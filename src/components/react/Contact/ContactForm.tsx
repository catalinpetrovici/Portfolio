import {
  FormikHelpers,
  useFormik,
  ErrorMessage,
  Formik,
  Form,
  Field,
} from 'formik';
import { schema, Input } from './schema';
import { CustomInput, CustomSelect, CustomTextarea } from './CustomInput';
import { AnimatePresence, motion } from 'framer-motion';

const options = [
  {
    title: '',
    value: '',
  },
  {
    title: 'Frontend Developer',
    value: 'Frontend',
  },
  {
    title: 'Backend Developer',
    value: 'Backend',
  },
  {
    title: 'Fullstack Developer',
    value: 'Fullstack',
  },
];

const onSubmit = async (values: Input, actions: FormikHelpers<Input>) => {
  try {
    await new Promise((resolve) =>
      setTimeout(() => {
        resolve('');
      }, 2000)
    );
    await fetch('https://mailthis.to/Catalin%20Petrovici', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(values),
    }).then(() => {
      window.location.href = 'https://mailthis.to/confirm';
    });
  } catch (error) {}

  actions.resetForm();
};

const ContactForm = () => {
  return (
    <Formik
      initialValues={{ name: '', email: '', jobType: '', message: '' }}
      validationSchema={schema}
      onSubmit={onSubmit}
    >
      {({ isSubmitting, values, handleBlur, handleChange }) => (
        <Form
          autoComplete='off'
          className='mt-10 text-[14px] md:text-[16px] leading-[2.5]'
        >
          <CustomInput
            label='Name'
            name='name'
            value={values.name}
            onBlur={handleBlur}
            onChange={handleChange}
            required
            className='w-full max-w-[50rem] border-2 rounded-[1rem] px-6 block bg-transparent border-b-2 border-fontDarkGray4 
            invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
          />
          <CustomInput
            label='Email'
            name='email'
            value={values.email}
            onBlur={handleBlur}
            onChange={handleChange}
            required
            className='w-full max-w-[50rem] border-2 rounded-[1rem] px-6 block bg-transparent border-b-2 border-fontDarkGray4 
            invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
          />
          <CustomSelect
            label='Job Type'
            name='jobType'
            value={values.jobType}
            onBlur={handleBlur}
            onChange={handleChange}
            className='w-full max-w-[50rem] border-2 rounded-[1rem] px-6 py-4 block bg-transparent border-b-2 border-fontDarkGray4
            invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
          >
            {options.map((item) => {
              const { value, title } = item;

              return (
                <option
                  className='bg-bgLight text-fontLight dark:bg-bgDark dark:text-fontDark'
                  key={value}
                  value={value}
                >
                  {title}
                </option>
              );
            })}
          </CustomSelect>
          <CustomTextarea
            label='Message'
            name='message'
            value={values.message}
            onBlur={handleBlur}
            onChange={handleChange}
            className='w-full max-w-[50rem] h-[20rem] px-6 py-4 block bg-transparent border-2 rounded-[1rem] border-fontDarkGray4'
          />
          <button
            disabled={isSubmitting}
            type='submit'
            className={`block px-8 py-2 mt-14 select-none 
              rounded-[1rem] font-bold
              border-2 border-btnLight
              bg-btnLight text-btnFont  
              dark:hover:text-dark hover:bg-transparent
              dark:bg-btnDark 
              dark:border-btnDark `}
          >
            Submit
          </button>
          <AnimatePresence>
            {isSubmitting && (
              <motion.span
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.3 }}
              >
                You will be redirected in 2 seconds! Thank you for submitting
                the form!
              </motion.span>
            )}
          </AnimatePresence>
        </Form>
      )}
    </Formik>
  );
};

export default ContactForm;
