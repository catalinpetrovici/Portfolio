import { useField, FieldHookConfig } from 'formik';
import { motion, AnimatePresence } from 'framer-motion';

interface OtherProps {
  label: string;
}

const CustomSelect = ({
  children,
  label,
  className,
  ...props
}: OtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <div>
      <div className='flex justify-between w-full max-w-[50rem]'>
        <label htmlFor={props.id || props.name}>{label}</label>{' '}
        <AnimatePresence>
          {meta.touched && meta.error ? (
            <motion.span
              animate={{ opacity: [0, 1] }}
              exit={{ opacity: [1, 0] }}
              transition={{ duration: 0.3 }}
              className='text-red-500 block'
            >
              {meta.error}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>
      <select id={props.id || props.name} {...field} className={className}>
        {children}
      </select>
    </div>
  );
};

const CustomInput = ({
  label,
  className,
  ...props
}: OtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className='flex justify-between w-full max-w-[50rem]'>
        <label htmlFor={props.id || props.name}>{label}</label>{' '}
        <AnimatePresence>
          {meta.touched && meta.error ? (
            <motion.span
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.3 }}
              className='text-red-500 block'
            >
              {meta.error}
            </motion.span>
          ) : null}{' '}
        </AnimatePresence>
      </div>
      <input id={props.id || props.name} className={className} {...field} />
    </>
  );
};

const CustomTextarea = ({
  label,
  className,
  ...props
}: OtherProps & FieldHookConfig<string>) => {
  const [field, meta] = useField(props);
  return (
    <>
      <div className='flex justify-between w-full max-w-[50rem]'>
        <label htmlFor={props.id || props.name}>{label}</label>
        <AnimatePresence>
          {meta.touched && meta.error ? (
            <motion.span
              animate={{ opacity: [0, 1] }}
              exit={{ opacity: [1, 0] }}
              className='text-red-500 block'
            >
              {meta.error}
            </motion.span>
          ) : null}
        </AnimatePresence>
      </div>
      <textarea id={props.id || props.name} className={className} {...field} />
    </>
  );
};

export { CustomInput, CustomSelect, CustomTextarea };
