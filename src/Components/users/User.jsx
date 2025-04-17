import React from 'react';

const User = ({user}) => {
  return (
    <div className='border-2 p-2 m-2'>
      <h2>{user.name}</h2>
    </div>
  );
};

export default User;