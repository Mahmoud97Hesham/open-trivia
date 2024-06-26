export { theme } from './theme';

export const ROUNDS_NO = 3;
export const QUESTIONS_NO = 3;

export enum difficulty {
  EASY = 'easy',
  MEDIUM = 'medium',
  HARD = 'hard'
}

export const QUERIES = Object.freeze({
  LOAD_CATEGORIES: 'LOAD_CATEGORIES',
  LOAD_QUESTIONS: 'LOAD_QUESTIONS'
});

export const timerValues = {
  [difficulty.EASY]: 90,
  [difficulty.MEDIUM]: 60,
  [difficulty.HARD]: 30
};
