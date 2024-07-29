import React from 'react';
import { Contacts } from '../components/Contacts/Contacts';
import { contacts } from '../api/data/contacts';
import { AuthWapper } from '../components/shared/AuthWapper';

export const HomePage = (): JSX.Element => {
  return (
    <AuthWapper>
      <Contacts contacts={contacts} />
    </AuthWapper>
  );
};
