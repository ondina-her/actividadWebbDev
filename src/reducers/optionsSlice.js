// reducers/optionsSlice.js
import { createSlice } from '@reduxjs/toolkit';

export const optionsSlice = createSlice({
  name: 'options',
  initialState: {
    value: 'tasks'  // Puede ser 'tasks' o 'goals'
  },
  reducers: {
    setOption: (state, action) => {
      state.value = action.payload;
    }
  }
});

export const { setOption } = optionsSlice.actions;
export default optionsSlice.reducer;
