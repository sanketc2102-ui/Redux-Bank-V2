import { combineReducers, createStore } from "redux";

const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

const initialStateCustomer = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

const reducers = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(reducers);

console.log(store.getState());

function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case "account/deposite":
      return { ...state, balance: state.balance + action.payload };
    case "account/withdraw":
      return { ...state, balance: state.balance - action.payload };
    case "account/requestLoan":
      return {
        ...state,
        balance: state.balance + action.payload.amount,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
      };
    case "account/loanPaid":
      return {
        ...state,
        balance: state.balance - state.loan,
        loan: 0,
        loanPurpose: "",
      };
    default:
      return state;
  }
}

function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case "customer/create":
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalId: action.payload.nationalId,
        createdAt: action.payload.createdAt,
      };
    case "customer/updatName":
      return {
        ...state,
        fullName: action.payload,
      };
    default:
      return state;
  }
}

// customer actions
function createCustomer(fullName, nationalId) {
  return {
    type: "customer/create",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

function updateName(name) {
  return {
    type: "customer/updatName",
    payload: name,
  };
}

// Accoutn Action
function deposite(amount) {
  return { type: "account/deposite", payload: amount };
}

function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

function requestLaon(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

store.dispatch(requestLaon(12000, "buy car"));

function loanPaid() {
  return { type: "account/loanPaid" };
}

export default store;
