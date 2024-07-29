import { useMemo, useState } from 'react';
import { citties } from '../api/data/citties';

interface Citty {
  id: string;
  name: string;
}

export const useCitties = () => {
  const [loading, setLoading] = useState(true);
  const [data, setData] = useState<Citty[]>([]);

  const fetchData = async () => {
    try {
      setLoading(true);
      setTimeout(() => setData(citties), 1000);
      setLoading(false);
    } catch (error) {
      console.error('Error fetching citties:', error);
    }
  };

  useMemo(() => {
    fetchData();
  }, [data]);

  return { data, loading };
};
