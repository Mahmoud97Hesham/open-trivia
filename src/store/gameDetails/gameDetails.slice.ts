import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import {
  IChosenCategory,
  IAnsweredCategory
} from 'interfaces/views/categories';

interface IAnsweredCategoryPayload {
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
    answeredCategories: {},
    chosenCategories: {},
    correctCount: 0,
    incorrectCount: 0,
    skippedCount: 0,
    roundCount: 1,
    timer: 0
  },
  reducers: {
    setCurrentCategory(state, action: PayloadAction<ICurrentCategory>) {
      state.currentCategory = action.payload;
    },
    setChosenCategories(state, action: PayloadAction<string>) {
      (state.chosenCategories as IChosenCategory)[action.payload] = true;
    },
    setAnsweredCategories(
      state,
      action: PayloadAction<IAnsweredCategoryPayload>
    ) {
      (state.answeredCategories as IAnsweredCategory)[
        action.payload.categoryName
      ] = action.payload.counts;
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
    setRoundCount(state, action: PayloadAction<number>) {
      state.roundCount = action.payload;
    },
    setTimer(state, action: PayloadAction<number>) {
      state.timer = action.payload;
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
        answeredCategories: {},
        chosenCategories: {},
        correctCount: 0,
        incorrectCount: 0,
        skippedCount: 0,
        roundCount: 1,
        timer: 0
      };
    }
  }
});

export const {
  setCurrentCategory,
  setChosenCategories,
  setAnsweredCategories,
  setCorrectCount,
  setIncorrectCount,
  setSkippedCount,
  setRoundCount,
  setTimer,
  resetgameDetails,
  resetCurrentCategory
} = gameDetailsSlice.actions;

export default gameDetailsSlice.reducer;
