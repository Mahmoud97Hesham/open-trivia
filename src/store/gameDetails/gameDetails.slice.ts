import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { IChosenCategory } from 'interfaces/views/categories';

interface IChosenCategoryPayload {
  counts: {
    correctCount: number;
    incorrectCount: number;
    skippedCount: number;
  };
  categoryName: string;
}

interface ICurrentCategory {
  id: number;
  name: string;
}

const gameDetailsSlice = createSlice({
  name: 'gameDetails',
  initialState: {
    currentCategory: {
      id: -1,
      name: ''
    },
    chosenCategories: {},
    correctCount: 0,
    incorrectCount: 0,
    skippedCount: 0
  },
  reducers: {
    setCurrentCategory(state, action: PayloadAction<ICurrentCategory>) {
      state.currentCategory = action.payload;
    },
    setChosenCategories(state, action: PayloadAction<IChosenCategoryPayload>) {
      (state.chosenCategories as IChosenCategory)[action.payload.categoryName] =
        action.payload.counts;
    },
    setCorrectCount(state, action: PayloadAction<number>) {
      state.correctCount = action.payload;
    },
    setIncorrectCount(state, action: PayloadAction<number>) {
      state.incorrectCount = action.payload;
    },
    setSkippedCount(state, action: PayloadAction<number>) {
      state.skippedCount = action.payload;
    },
    resetCurrentCategory(state) {
      return {
        ...state,
        currentCategory: {
          id: -1,
          name: ''
        }
      };
    },
    resetgameDetails() {
      return {
        currentCategory: {
          id: -1,
          name: ''
        },
        chosenCategories: {},
        correctCount: 0,
        incorrectCount: 0,
        skippedCount: 0
      };
    }
  }
});

export const {
  setCurrentCategory,
  setChosenCategories,
  setCorrectCount,
  setIncorrectCount,
  setSkippedCount,
  resetgameDetails,
  resetCurrentCategory
} = gameDetailsSlice.actions;

export default gameDetailsSlice.reducer;
