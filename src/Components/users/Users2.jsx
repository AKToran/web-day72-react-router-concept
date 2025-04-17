import React, { use } from 'react';

const Users2 = ({usersPromise}) => {
  const users = use(usersPromise);
  return (
    <div>
      <h1>{users[0].name}</h1>
    </div>
  );
};

export default Users2;