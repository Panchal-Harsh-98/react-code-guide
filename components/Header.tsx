import Link from 'next/link';
import React from 'react';

function Header() {
  return (
    <div className='sticky top-0 z-50 shadow-sm p-3 flex items-center bg-primary-200'>
      <Link href={`/`}>
        <button className='button-header'>Register user</button>
      </Link>

      <Link href={`/userList/UserList`}>
        <button className='button-header'>View Users</button>
      </Link>
    </div>
  );
}

export default Header;
