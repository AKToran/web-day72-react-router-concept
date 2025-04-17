import React from 'react';
import { Link } from 'react-router';

const User = ({user}) => {
  return (
    <div className='border-2 p-2 m-2'>
      <h2>{user.name}</h2>
      <Link to={`/users/${user.id}`}>Details</Link>
    </div>
  );
};

export default User;