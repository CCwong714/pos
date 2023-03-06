import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

type table = {
  tableNum: Number;
  order: Array<Number | String | Object>;
};

export interface adminState {
  table1: table;
  table2: table;
  table3: table;
  table4: table;
  table5: table;
  table6: table;
  table7: table;
  table8: table;
  table9: table;
  table10: table;
  table11: table;
  table12: table;
}
const initialState: adminState = {
  table1: {
    tableNum: 1,
    order: [],
  },
  table2: {
    tableNum: 2,
    order: [],
  },
  table3: {
    tableNum: 3,
    order: [],
  },
  table4: {
    tableNum: 4,
    order: [],
  },
  table5: {
    tableNum: 5,
    order: [],
  },
  table6: {
    tableNum: 6,
    order: [],
  },
  table7: {
    tableNum: 7,
    order: [],
  },
  table8: {
    tableNum: 8,
    order: [],
  },
  table9: {
    tableNum: 9,
    order: [],
  },
  table10: {
    tableNum: 10,
    order: [],
  },
  table11: {
    tableNum: 11,
    order: [],
  },
  table12: {
    tableNum: 12,
    order: [],
  },
};

export const tableSlice = createSlice({
  name: "table",
  initialState,
  reducers: {
    setTable1: (state, action: PayloadAction<Object>) => {
      state.table1.order.push(action.payload);
    },
    setTable2: (state, action: PayloadAction<Object>) => {
      state.table2.order.push(action.payload);
    },
    setTable3: (state, action: PayloadAction<Object>) => {
      state.table3.order.push(action.payload);
    },
    setTable4: (state, action: PayloadAction<Object>) => {
      state.table4.order.push(action.payload);
    },
    setTable5: (state, action: PayloadAction<Object>) => {
      state.table5.order.push(action.payload);
    },
    setTable6: (state, action: PayloadAction<Object>) => {
      state.table6.order.push(action.payload);
    },
    setTable7: (state, action: PayloadAction<Object>) => {
      state.table7.order.push(action.payload);
    },
    setTable8: (state, action: PayloadAction<Object>) => {
      state.table8.order.push(action.payload);
    },
    setTable9: (state, action: PayloadAction<Object>) => {
      state.table9.order.push(action.payload);
    },
    setTable10: (state, action: PayloadAction<Object>) => {
      state.table10.order.push(action.payload);
    },
    setTable11: (state, action: PayloadAction<Object>) => {
      state.table11.order.push(action.payload);
    },
    setTable12: (state, action: PayloadAction<Object>) => {
      state.table12.order.push(action.payload);
    },
  },
});

export const {
  setTable1,
  setTable2,
  setTable3,
  setTable4,
  setTable5,
  setTable6,
  setTable7,
  setTable8,
  setTable9,
  setTable10,
  setTable11,
  setTable12,
} = tableSlice.actions;

export default tableSlice.reducer;
