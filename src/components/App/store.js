import { configureStore } from "@reduxjs/toolkit";

import roleReducer from "../Authentication/roleManagement";
export default configureStore({
  reducer: {
    roleManager: roleReducer,
  },
});
