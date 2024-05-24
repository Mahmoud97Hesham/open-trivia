import { API } from 'api';
import { Category } from 'interfaces/views/categories';

export const getCategories = async () => {
  return new Promise<Category[]>((resolve, reject) => {
    API.get('/api_category.php')
      .then((res: { data: any }) => {
        resolve(res.data.trivia_categories);
      })
      .catch((e: any) => {
        reject(e);
      });
  });
};
