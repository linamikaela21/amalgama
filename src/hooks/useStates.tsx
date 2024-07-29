import { useMemo, useState } from 'react';
import { states } from '../api/data/states';

interface State {
  id: string;
  name: string;
}

export const useStates = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<State[]>([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setTimeout(() => setData(states), 1000);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching states:', error);
    }
  };

  useMemo(() => {
    fetchData();
  }, [data]);

  return { data, loading };
};
