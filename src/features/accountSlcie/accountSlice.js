const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: "",
};

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

export function deposite(amount, currency) {
  if (currency === "INR") return { type: "account/deposite", payload: amount };

  return async function (dispatch, getState) {
    const res = await fetch(
      `https://api.frankfurter.dev/v1/latest?amount=${amount}&from=${currency}&to=INR`,
    );

    const { rates } = await res.json();

    dispatch({ type: "account/deposite", payload: rates.INR });
  };
}

export function withdraw(amount) {
  return { type: "account/withdraw", payload: amount };
}

export function requestLaon(amount, purpose) {
  return { type: "account/requestLoan", payload: { amount, purpose } };
}

export function loanPaid() {
  return { type: "account/loanPaid" };
}

export default accountReducer;
