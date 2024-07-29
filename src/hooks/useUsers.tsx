import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '../store/authStore';
import { getUsers } from '../api/getUsers';

export const useUsers = () => {
  const { token } = useAuthStore((state) => state);
  if (!token) throw new Error('No token found');

  return useQuery({
    queryKey: ['users'],
    queryFn: async () => await getUsers(token),
  });
};
