import React from 'react';
import { NavBar } from './NavBar';

export const AuthWapper = ({
  children,
}: {
  children: React.ReactNode;
}): JSX.Element => {
  return (
    <main>
      <NavBar />
      {children}
    </main>
  );
};
