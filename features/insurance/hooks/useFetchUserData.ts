import { useState } from 'react';
import api from '../../../app/network/api';

type UserResponse = {
  name: string;
  lastName: string;
  birthDay: string;
};

export const useFetchUserData = () => {
  const [loading, setLoading] = useState(false);

  const fetchUserData = async (): Promise<UserResponse | null> => {
    try {
      setLoading(true);
      const response = await api.get<UserResponse>('user.json');
      return response.data;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { fetchUserData, loading };
};
