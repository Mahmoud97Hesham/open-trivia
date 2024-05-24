import { useQuery } from '@tanstack/react-query';
import { getCategories } from 'api/categories';
import { QUERIES } from 'utils/constants';

export const useCategories = () => {
  return useQuery({
    queryKey: [QUERIES.LOAD_CATEGORIES],
    queryFn: () => getCategories()
  });
};
