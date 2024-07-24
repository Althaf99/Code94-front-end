import { createSlice } from "@reduxjs/toolkit";
import { ROLE } from "../../constents";

export const roleSlice = createSlice({
  name: "roleManager",
  initialState: {
    value: ROLE.USER,
  },
  reducers: {
    setRole: (state, action) => {
      state.value = action.payload;
    },
  },
});

export const { setRole } = roleSlice.actions;

export default roleSlice.reducer;
