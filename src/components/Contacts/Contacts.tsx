import React from 'react';
import { Contact } from '../../interfaces/Contact';
import { truncate } from '../../utils/truncate';
import { Link } from 'react-router-dom';
import { AddressesList } from './AddressesList';
import { ContactHeader } from '../Contacts/ContactHeader';
interface ContactsPageProps {
  contacts: Contact[];
}

export const Contacts = ({ contacts }: ContactsPageProps): JSX.Element => {
  return (
    <>
      <h1>Contacts 👥</h1>
      <div>
        {!contacts?.length ? (
          <h1>There are not contacts to show</h1>
        ) : (
          contacts.map((contact: Contact) => (
            <div key={contact.id}>
              <Link
                style={{
                  display: 'block',
                  marginBottom: '1rem',
                  color: 'blue',
                  textDecoration: 'underline',
                }}
                to={`/contacts/${contact.id}`}
              >
                Go to details
              </Link>
              <ContactHeader contact={contact} />
              {contact?.details ?? <p>{truncate(contact?.details, 100)}</p>}
              <ul>
                <li>
                  <strong>Email:</strong>{' '}
                  {contact?.email ? (
                    <a href={`mailto:${contact?.email}`}>{contact?.email}</a>
                  ) : (
                    'No email provided'
                  )}
                </li>
                <li>
                  <strong>Phone:</strong>{' '}
                  {contact?.phone.area_code || contact?.phone.number ? (
                    <a
                      href={`tel:+1${contact?.phone.area_code}${contact?.phone.number}`}
                    >
                      {contact?.phone.area_code} {contact?.phone.number}
                    </a>
                  ) : (
                    'No phone provided'
                  )}
                </li>
                <AddressesList addresses={contact?.addresses} />
              </ul>
            </div>
          ))
        )}
      </div>
    </>
  );
};
