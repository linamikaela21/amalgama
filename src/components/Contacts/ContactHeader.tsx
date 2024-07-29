import React from 'react';
import { Contact } from '../../interfaces/Contact';

export const ContactHeader = ({ contact }: { contact: Contact }) => {
  return (
    <>
      {contact?.avatar_url ? (
        <img src={contact.avatar_url} alt="Avatar" />
      ) : null}
      {contact && (contact.first_name || contact.last_name) ? (
        <h3>
          {contact.first_name} {contact.last_name}
        </h3>
      ) : null}
      {contact?.company ?? <h4>{contact?.company}</h4>}
    </>
  );
};
