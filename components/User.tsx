import React from 'react';
type Props = {
  userDetails?: userList;
};
function User({ userDetails }: Props) {
  return <div>{userDetails?.username}</div>;
}

export default User;
