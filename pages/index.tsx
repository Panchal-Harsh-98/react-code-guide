import { Button, Divider, Form } from 'element-ui';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';
import RegistrationForm from '../components/RegistrationForm';
import UserList from './userList/UserList';

const Home: NextPage = () => {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3,
  ];
  return (
    <div className='flex flex-col max-w-md mx-auto my-7'>
      <Head>
        <title>React-code-guide</title>
        <link rel='icon' href='/favicon.ico' />
      </Head>
      <div className='flex flex-col items-center my-3'>
        <p className='text-3xl text-accent-100'>Register</p>
      </div>
      <div className={`bg-primary-200 rounded-lg shadow-xl `}>
        <RegistrationForm />
      </div>
      <Link href={`/userList/UserList`}>
        <button className='bg-primary-200 rounded-lg  shadow-md hover:shadow-2xl my-5 h-10 text-white'>
          View users
        </button>
      </Link>
    </div>
  );
};

export default Home;
