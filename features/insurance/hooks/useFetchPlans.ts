import { useState } from 'react';
import api from '../../../app/network/api';
import { Plan } from '../types/Plan';

export const useFetchPlans = () => {
  const [plans, setPlans] = useState<Plan[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchPlans = async (userAge: number, isForOther: boolean): Promise<Plan[] | null> => {
    try {
      setLoading(true);
      const response = await api.get<{ list: Plan[] }>('plans.json');

      const filtered = response.data.list.filter((plan) => userAge <= plan.age);

      const adjusted = filtered.map((plan) => ({
        ...plan,
        price: isForOther ? Number((plan.price * 0.95).toFixed(2)) : plan.price,
      }));

      setPlans(adjusted);
      return adjusted;
    } catch (error) {
      console.error('Error fetching plans:', error);
      return null;
    } finally {
      setLoading(false);
    }
  };

  return { fetchPlans, plans, loading };
};
