import { combineReducers, createStore } from "redux";
import accountReducer from "./features/accountSlcie/accountSlice";
import customerReducer from "./features/customerSlice/customerSlice";
import { applyMiddleware } from "redux";
import { thunk } from "redux-thunk";

const reducers = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(reducers, applyMiddleware(thunk));

export default store;
