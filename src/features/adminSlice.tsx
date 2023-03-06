import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface adminState {
  value: {
    tableNum: Number;
    order: Array<Number | String | Object>;
  };
}
const initialState: adminState = {
  value: {
    tableNum: 0,
    order: [],
  },
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setValue: (
      state,
      action: PayloadAction<{
        tableNum: Number;
        order: Array<Number | String | Object>;
      }>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = adminSlice.actions;

export default adminSlice.reducer;
