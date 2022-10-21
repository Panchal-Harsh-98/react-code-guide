import { useQuery } from '@apollo/client';
import React, { useEffect, useState } from 'react';
import User from '../../components/User';
import { GET_USER_LIST } from '../../graphql/query';

function UserList() {
  const { data } = useQuery(GET_USER_LIST);
  console.log(data);

  const userList: userList[] = data?.getUserList;

  return (
    <div className='flex flex-col max-w-5xl mx-auto my-7'>
      {userList?.map((item) => {
        return <User userDetails={item} key={item.id} />;
      })}
    </div>
  );
}

export default UserList;
