import { useState, useRef } from 'preact/hooks';

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

export default function Counter() {
  const emailRef = useRef<HTMLInputElement>(null);
  const nameRef = useRef<HTMLInputElement>(null);

  return (
    <form
      className='mt-10 text-[16px] leading-[2.5]'
      action='https://mailthis.to/Catalin%20Petrovici'
      method='POST'
      encType='multipart/form-data'
    >
      <div className=''>
        <LabelInput
          classInput='
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
          placeholder=''
          typeLabel='text'
          idLabel='name'
          name='name'
          textLabel='Your name'
          refLabel={nameRef}
          invalidMessage='Please provide a valid name'
        />
      </div>
      <div className=''>
        <LabelInput
          classInput='bg-transparent 
          shadow-sm
          focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500
          invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
          placeholder=''
          typeLabel='email'
          idLabel='email'
          name='email'
          textLabel='Your email'
          refLabel={emailRef}
          invalidMessage='Please provide a valid email'
        />
      </div>
      <div className='block'>
        <label
          className={`after:content-['*'] after:ml-0.5 after:text-red-400`}
          for='select'
        >
          Looking for a
        </label>
        <select
          className='w-full max-w-[50rem] border-2 rounded-[1rem] px-6 py-4 block bg-transparent border-b-2 border-fontDarkGray4
          invalid:text-pink-600 focus:invalid:border-pink-500 focus:invalid:ring-pink-500'
          name='lookingForA'
          id='select'
          required
        >
          {options.map((item) => {
            const { value, title } = item;

            return (
              <option
                className='bg-bgLight text-fontLight dark:bg-bgDark dark:text-fontDark'
                value={value}
              >
                {title}
              </option>
            );
          })}
        </select>
      </div>
      <div>
        <label htmlFor='message'>Message</label>
        <textarea
          className='w-full max-w-[50rem] h-[20rem] px-6 py-4 block bg-transparent border-2 rounded-[1rem] border-fontDarkGray4'
          id='message'
          name='message'
          placeholder='Write something..'
        ></textarea>
      </div>
      <button
        className='block px-8 py-2 mt-14
          rounded-[1rem] font-bold
          border-2 border-btnLight
          bg-btnLight text-btnFont 
          hover:bg-transparent dark:bg-btnDark 
          dark:border-btnDark dark:hover:text-dark'
      >
        Sent Message
      </button>
    </form>
  );
}

type typeLabel = 'text' | 'email' | 'password' | 'number' | 'tel';

const LabelInput = ({
  classInput,
  refLabel,
  textLabel,
  idLabel,
  typeLabel,
  placeholder,
  minLength,
  invalidMessage,
  name,
}: LayoutProps) => {
  return (
    <div>
      <label
        className={`after:content-['*'] after:ml-0.5 after:text-red-400`}
        htmlFor={idLabel}
      >
        {textLabel}
      </label>
      <input
        className={`w-full max-w-[50rem]  px-8
        peer
        block bg-transparent 
        border-2 rounded-[1rem] border-fontDarkGray4 ${classInput}`}
        ref={refLabel}
        type={typeLabel}
        placeholder={placeholder}
        autoComplete='on'
        id={idLabel}
        name={name}
        required={true}
        minLength={minLength}
      />
      {/* <p class='mt-2 invisible peer-focus:peer-invalid:visible text-pink-600 text-sm'>
        {invalidMessage}
      </p> */}
    </div>
  );
};

interface LayoutProps {
  classInput?: string;
  refLabel: preact.RefObject<HTMLInputElement>;
  placeholder: string;
  textLabel: string;
  idLabel: string;
  typeLabel: typeLabel;
  minLength?: number;
  invalidMessage?: string;
  name?: string;
}
