import { useQuery } from '@tanstack/react-query';
import { useAuthStore } from '../store/authStore';
import { getBooks } from '../api/getBooks';

export const useBooks = () => {
  const { token } = useAuthStore((state) => state);
  if (!token) throw new Error('No token found');

  return useQuery({
    queryKey: ['books'],
    queryFn: async () => await getBooks(token),
  });
};
