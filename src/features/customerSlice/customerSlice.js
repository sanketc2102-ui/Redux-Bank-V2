const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

function customerReducer(state = initialState, action) {
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
export function createCustomer(fullName, nationalId) {
  return {
    type: "customer/create",
    payload: { fullName, nationalId, createdAt: new Date().toISOString() },
  };
}

export function updateName(name) {
  return {
    type: "customer/updatName",
    payload: name,
  };
}

export default customerReducer;
