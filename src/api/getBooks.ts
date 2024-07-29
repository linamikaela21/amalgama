import { ROUTES } from '../constants';

export const getBooks = async (token: string) => {
  const response = await fetch(ROUTES.getBooks, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok)
    throw new Error(`Failed to fetch books: ${response.statusText}`);

  const data = await response.json();
  return data;
};
