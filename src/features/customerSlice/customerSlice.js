import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  fullName: "",
  nationalId: "",
  createdAt: "",
};

/* function customerReducer(state = initialState, action) {
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
} */

const customerSlice = createSlice({
  name: "customer",
  initialState,
  reducers: {
    create: {
      prepare(fullName, nationalId) {
        return {
          payload: {
            fullName,
            nationalId,
            createdAt: new Date().toISOString(),
          },
        };
      },

      reducer(state, action) {
        state.fullName = action.payload.fullName;
        state.nationalId = action.payload.nationalId;
        state.createdAt = action.payload.createdAt;
      },
    },

    updateName(state, action) {
      state.fullName = action.payload;
    },
  },
});

// customer actions
/* export function createCustomer(fullName, nationalId) {
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
} */

export const { create: createCustomer, updateName } = customerSlice.actions;

export default customerSlice.reducer;
