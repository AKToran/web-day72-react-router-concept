import React from 'react';
import { useLoaderData } from 'react-router';
import User from './User';

const Users = () => {
  const users = useLoaderData();

  return (
    <div className='mx-20'>
      <h1>This is users page.</h1>
      <div>
        {
          users?.map(user => <User key={user.id} user={user}></User>)
        }
      </div>
    </div>
  );
};

export default Users;