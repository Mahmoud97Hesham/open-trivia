export interface Category {
  id: number;
  name: string;
}

export interface IChosenCategory {
  [key: string]: {
    correctCount: number;
    incorrectCount: number;
    skippedCount: number;
  };
}
