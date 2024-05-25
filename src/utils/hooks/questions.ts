import { useQuery } from '@tanstack/react-query';
import { getQuestions } from 'api/questions';
import { QUERIES } from 'utils/constants';

export const useQuestions = (
  amount: number,
  difficulty: string,
  category?: number
) => {
  return useQuery({
    queryKey: [QUERIES.LOAD_QUESTIONS],
    queryFn: () => getQuestions(amount, difficulty, category),
    refetchOnWindowFocus: false
  });
};
