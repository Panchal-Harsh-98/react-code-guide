import React from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
type Inputs = {
  example: String;
  password: String;
  email: String;
  phone_number: String;
};
function RegistrationForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();
  const onSubmit: SubmitHandler<Inputs> = (data) => {};

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='flex flex-col flex-wrap p-4 space-y-2'>
        {/* Username */}
        <div className='form-container'>
          <p className='text-sm pb-1 mx-1 text-white'>Username</p>
          <input
            className=' p-2 rounded flex-1 '
            type='text'
            {...register('example', { required: true })}
          />
          {errors.example && <span>This field is required</span>}
        </div>

        <div className='form-container'>
          <p className='text-sm pb-1 mx-1 text-white'>Password</p>
          <input
            className=' p-2 rounded flex-1 placeholder:italic'
            type='password'
            {...register('password', { required: true })}
          />
        </div>

        <div className='form-container'>
          <p className='text-sm pb-1 mx-1 text-white'>Email</p>
          <input
            className=' p-2 rounded flex-1 placeholder:italic'
            type='password'
            {...register('email', { required: true })}
          />
        </div>

        <div className='form-container'>
          <p className='text-sm pb-1 mx-1 text-white'>Phone No.</p>
          <input
            className=' p-2 rounded flex-1 placeholder:italic'
            type='password'
            {...register('phone_number', { required: true })}
          />
        </div>

        {/* Submit button */}
        <input
          type='submit'
          value='Submit'
          className='bg-primary-100 h-10 rounded-md hover:shadow-lg shadow-accent-100 text-white !mt-6'
        />
      </div>
    </form>
  );
}

export default RegistrationForm;
