import React from 'react';
import { useLoaderData } from 'react-router';

const UserDetails = () => {
  const user = useLoaderData();
  return (
    <div className='border-2 mx-20'>
      <h1>user details</h1>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
    </div>
  );
};

export default UserDetails;