import { useMutation } from '@apollo/client';
import React, { useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { ADD_USER } from '../graphql/mutation';
type Inputs = {
  username: String;
  email: String;
  phone_number: String;
};

function RegistrationForm() {
  const {
    register,
    setValue,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm<Inputs>();

  const onSubmit: SubmitHandler<Inputs> = (formData) => {
    registerUser(formData);
  };
  const [addUser] = useMutation(ADD_USER);

  const registerUser = async (userData: Inputs) => {
    const notification = toast.loading('creating user!!');

    try {
      const { data } = await addUser({
        variables: {
          username: userData.username,
          email: userData.email,
          phoneNumber: userData.phone_number,
        },
      });
      toast.success('New Post Created!', {
        id: notification,
      });
      console.log(data);

      setValue('email', '');
      setValue('username', '');
      setValue('phone_number', '');
    } catch (error) {
      toast.error('Oops! Someting went wrong', {
        id: notification,
      });
      console.log('API call error', error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className='bg-white rounded-lg shadow-xl flex flex-col flex-wrap p-6 space-y-4'>
        <div className='flex flex-col items-center'>
          <p className='text-3xl text-primary-100'>Register Now</p>
        </div>

        {/* Username */}
        <div className='form-container'>
          <input
            className='form-field'
            placeholder='Enter username'
            type='text'
            {...register('username', { required: true })}
          />
          {errors.username && (
            <span className='text-sm mt-1 ml-2 text-red-500'>
              This field is required
            </span>
          )}
        </div>

        <div className='form-container'>
          <input
            className='form-field'
            placeholder='Enter e-mail'
            type='text'
            {...register('email', { required: true })}
          />
        </div>

        <div className='form-container'>
          <input
            className='form-field'
            type='text'
            placeholder='Enter phone number'
            {...register('phone_number', { required: true })}
          />
        </div>

        {/* Submit button */}
        <input
          type='submit'
          value='Submit'
          className='bg-accent-pink py-3 rounded-md hover:shadow-lg text-primary-100 text-md font-bold !mt-4'
        />
      </div>
    </form>
  );
}

export default RegistrationForm;
