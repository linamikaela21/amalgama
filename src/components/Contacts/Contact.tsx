import React from 'react';
import { useParams } from 'react-router-dom';
import { contacts } from '../../api/data/contacts';
import { findById } from '../../utils/findById';
import { AddressesList } from './AddressesList';
import { ContactHeader } from '../Contacts/ContactHeader';
import { AuthWapper } from '../shared/AuthWapper';

export const ContactPage = (): JSX.Element => {
  const { id } = useParams();
  const contact = findById(contacts, id ?? '');
  return (
    <AuthWapper>
      <ContactHeader contact={contact} />
      <ul>
        <li>
          <strong>Email:</strong>{' '}
          {contact?.email ? (
            <a href={`mailto:${contact?.email}`}>{contact?.email}</a>
          ) : (
            'No email provided'
          )}
        </li>
        <AddressesList addresses={contact?.addresses} />
      </ul>
    </AuthWapper>
  );
};
