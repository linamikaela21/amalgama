import { ROUTES } from '../constants';

export const login = async ({
  email,
  password,
}: {
  email: string;
  password: string;
}) => {
  const response = await fetch(ROUTES.login, {
    method: 'POST',
    body: new URLSearchParams({
      email,
      password,
    }),
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
    },
  });
  const data = await response.json();
  return data;
};
