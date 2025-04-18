import React from 'react';
import { useLoaderData, useNavigate } from 'react-router';

const UserDetails = () => {
  const user = useLoaderData();
  const navigate = useNavigate();
  return (
    <div className='border-2 mx-20'>
      <h1>user details</h1>
      <h1>{user.name}</h1>
      <p>{user.email}</p>
      <p>{user.website}</p>
      <button onClick={()=>{
        navigate(-1)
      }}>Go Back</button>
    </div>
  );
};

export default UserDetails;