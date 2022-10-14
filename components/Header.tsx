import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className='sticky top-0 z-50 shadow-sm p-3 flex items-center bg-primary-200'>
      <Link href={`/`}>
        <button className='bg-primary-100 py-1 px-4 h-10 text-sm mx-5 text-white rounded-lg hover:shadow-lg'>
          Register user
        </button>
      </Link>

      <Link href={`/userList/UserList`}>
        <button className='bg-primary-100 py-1 px-4 h-10 text-sm mx-1 text-white rounded-lg hover:shadow-lg'>
          View Users
        </button>
      </Link>
    </div>
  );
}

export default Header;
