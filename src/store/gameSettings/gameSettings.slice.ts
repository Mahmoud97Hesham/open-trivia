import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { QUESTIONS_NO, ROUNDS_NO, difficulty } from 'utils/constants';

const gameSettingsSlice = createSlice({
  name: 'gameSettings',
  initialState: {
    roundsNo: ROUNDS_NO,
    questionsNo: QUESTIONS_NO,
    difficulty: ''
  },
  reducers: {
    setRoundsNo(state, action: PayloadAction<number>) {
      state.roundsNo = action.payload;
    },
    setQuestionsNo(state, action: PayloadAction<number>) {
      state.questionsNo = action.payload;
    },
    setDifficulty(state, action: PayloadAction<difficulty>) {
      state.difficulty = action.payload;
    },
    resetGameSettings() {
      return {
        roundsNo: ROUNDS_NO,
        questionsNo: QUESTIONS_NO,
        difficulty: ''
      };
    }
  }
});

export const { setRoundsNo, setQuestionsNo, setDifficulty, resetGameSettings } =
  gameSettingsSlice.actions;

export default gameSettingsSlice.reducer;
