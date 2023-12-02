import { filtersInitialState } from './initialState';

const { createSlice } = require('@reduxjs/toolkit');

export const filterSlice = createSlice({
  name: 'filter',
  initialState: filtersInitialState,
  reducers: {
    toFilter(state, action) {
      state.filter = action.payload;
    },
  },
});
export const { toFilter } = filterSlice.actions;
export const filterReducer = filterSlice.reducer;
