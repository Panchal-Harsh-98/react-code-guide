import { Divider } from 'element-ui';
import type { NextPage } from 'next';
import Head from 'next/head';
import Image from 'next/image';

const Home: NextPage = () => {
  const array = [
    1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 0, 1, 2, 3,
  ];
  return (
    <div className='max-w-5xl mx-auto my-7 bg-red-300'>
      <div className='flex flex-row flex-wrap'>
        {array.map((num) => (
          <div className=' w-{200px} h-40 flex flex-row justify-center items-center'>
            <p className='bg-purple-500'>{num}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
