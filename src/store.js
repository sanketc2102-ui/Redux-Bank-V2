import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accountSlcie/accountSlice";
import customerReducer from "./features/customerSlice/customerSlice";

const reducers = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(reducers);

export default store;
