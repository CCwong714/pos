import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface adminState {
  value: {
    tableNum: Number;
    order: String;
  };
}
const initialState: adminState = {
  value: {
    tableNum: 1,
    order: "food",
  },
};

export const adminSlice = createSlice({
  name: "admin",
  initialState,
  reducers: {
    setValue: (
      state,
      action: PayloadAction<{ tableNum: Number; order: String }>
    ) => {
      state.value = action.payload;
    },
  },
});

export const { setValue } = adminSlice.actions;

export default adminSlice.reducer;
