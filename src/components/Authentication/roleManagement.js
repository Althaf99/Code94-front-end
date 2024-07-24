import { createSlice } from "@reduxjs/toolkit";
import { ROLE } from "../../constents";

export const roleSlice = createSlice({
  name: "roleManager",
  initialState: {
    value: ROLE.USER,
    userId: "",
  },
  reducers: {
    setRole: (state, action) => {
      state.value = action.payload;
    },
    setUserId: (state, action) => {
      state.userId = action.payload;
    },
  },
});

export const { setRole, setUserId } = roleSlice.actions;

export default roleSlice.reducer;
