import React from 'react';
import { useUsers } from '../hooks/useUsers';
import { AuthWapper } from '../components/shared/AuthWapper';
import { User } from '../interfaces/User';

export const UsersPage = (): JSX.Element => {
  const { data, isLoading } = useUsers();
  return (
    <AuthWapper>
      <h1>Users 👥</h1>
      {isLoading ? <span>Loading..</span> : null}
      <div>
        {data?.map((user: User) => (
          <div key={user.nickname}>
            <span>{user.nickname}</span>
            <span>{user.email}</span>
          </div>
        ))}
      </div>
    </AuthWapper>
  );
};
