import { PayloadAction, createSlice } from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    name: ''
  },
  reducers: {
    setUserName(state, action: PayloadAction<string>) {
      state.name = action.payload;
    },
    resetUserName(state) {
      state.name = '';
    }
  }
});

export const { setUserName, resetUserName } = userSlice.actions;

export default userSlice.reducer;
