import React from 'react';
import { Link, useNavigate } from 'react-router';

const User = ({user}) => {

  const navigate = useNavigate();
  const handleNavigate = (userId) => {
    console.log(userId);
    navigate(`/users/${userId}`);
  }

  return (
    <div className='border-2 p-2 m-2'>
      <h2>{user.name}</h2>
      <Link to={`/users/${user.id}`}><button>Details</button></Link>
      <button onClick={() => handleNavigate(user.id)}>onClick</button>
    </div>
  );
};

export default User;