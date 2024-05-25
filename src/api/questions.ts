import { API } from 'api';
import { Question } from 'interfaces/views/questions';

export const getQuestions = async (
  amount: number,
  difficulty: string,
  category?: number
) => {
  return new Promise<Question[]>((resolve, reject) => {
    API.get('/api.php', {
      params: {
        amount,
        category,
        difficulty
      }
    })
      .then((res: { data: any }) => {
        resolve(res.data.results);
      })
      .catch((e: any) => {
        reject(e);
      });
  });
};
