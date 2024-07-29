import { Contact } from '../../interfaces/Contact';

export const contacts: Contact[] = [
  {
    id: '1',
    first_name: 'John',
    last_name: 'Doe',
    avatar_url: 'https://i.imgur.com/DTfowdu.jpg',
    company: 'Acme Inc',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    email: 'hola@hola.com',
    phone: {
      area_code: '123',
      number: '4567890',
    },
    addresses: [
      {
        line_1: '123 Main St',
        line_2: 'Apt 1',
        zip_code: '12345',
        city_id: '1',
        state_id: '1',
      },
    ],
  },
  {
    id: '2',
    first_name: 'Jane',
    last_name: 'Smith',
    avatar_url: 'https://i.imgur.com/ABC123.jpg',
    company: 'XYZ Corp',
    details: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
    email: 'hello@hello.com',
    phone: {
      area_code: '987',
      number: '6543210',
    },
    addresses: [
      {
        line_1: '456 Elm St',
        line_2: 'Apt 2',
        zip_code: '54321',
        city_id: '2',
        state_id: '2',
      },
    ],
  },
];
