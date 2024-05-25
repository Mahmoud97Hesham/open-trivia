export interface Category {
  id: number;
  name: string;
}
export interface IAnsweredCategory {
  [key: string]: {
    correctCount: number;
    incorrectCount: number;
    skippedCount: number;
  };
}
export interface IChosenCategory {
  [key: string]: boolean;
}
