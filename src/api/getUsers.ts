import { ROUTES } from '../constants';

export const getUsers = async (token: string) => {
  const response = await fetch(ROUTES.getUsers, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

  if (!response.ok)
    throw new Error(`Failed to fetch users: ${response.statusText}`);

  const data = await response.json();
  return data;
};
