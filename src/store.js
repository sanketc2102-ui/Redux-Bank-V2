import accountReducer from "./features/accountSlcie/accountSlice";
import customerReducer from "./features/customerSlice/customerSlice";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
