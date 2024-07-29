import React from 'react';
import { AddressInterface } from '../../interfaces/Contact';
import { findById } from '../../utils/findById';
import { pluralize } from '../../utils/pluralize';
import { useCitties } from '../../hooks/useCitties';
import { useStates } from '../../hooks/useStates';

interface AddressesListProps {
  addresses: AddressInterface[];
}

export const AddressesList = ({ addresses }: AddressesListProps) => {
  const citties = useCitties();
  const states = useStates();
  return (
    <>
      {addresses?.map((address: AddressInterface) => (
        <li key={address.line_1}>
          <strong>{pluralize(addresses.length, 'Address', 'Addresses')}</strong>
          <address>
            {address?.line_1 ?? <span>{address?.line_1}</span>}
            {address?.line_2 ?? <span>{address?.line_2}</span>}
            {address?.city_id ? (
              <span>
                {citties.loading
                  ? 'Loading...'
                  : citties?.data
                    ? findById(citties.data, address.city_id)?.name
                    : '-'}
              </span>
            ) : null}
            {address?.state_id ? (
              <span>
                {states.loading
                  ? 'Loading...'
                  : states?.data
                    ? findById(states.data, address.state_id)?.name
                    : '-'}
              </span>
            ) : null}
            {address?.zip_code ?? <span>{address?.zip_code}</span>}
          </address>
        </li>
      ))}
    </>
  );
};
