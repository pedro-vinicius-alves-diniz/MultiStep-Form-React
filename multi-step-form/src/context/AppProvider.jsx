import { AppContext } from "./AppContext";
import { useReducer } from "react";

const initialState = {
  name: "",
  email: "",
  phone: "",
  plan: "",
  period: "monthly",
  addService: false,
  addStorage: false,
  addProfile: false,
  subtotal: 0,
  total: 0,
};

const appReducer = (state, action) => {
  switch (action.type) {
    case "RESTART":
      return initialState;

    case "UPDATE_NAME":
      return {
        ...state,
        name: action.payload,
      };

    case "UPDATE_EMAIL":
      return {
        ...state,
        email: action.payload,
      };

    case "UPDATE_PHONE":
      return {
        ...state,
        phone: action.payload,
      };

    case "UPDATE_PERIOD":
      console.log(action.payload);
      return {
        ...state,
        period: action.payload,
      };

    case "UPDATE_PLAN":
      return {
        ...state,
        plan: action.payload,
      };

    case "UPDATE_CHECKED_ADD_AND_TOTAL":
      if (action.payload.title === "Online Service") {
        return {
          ...state,
          addService: action.payload.value,
          total: state.total + action.payload.price
        };
      } else if (action.payload.title === "Larger storage") {
        return {
          ...state,
          addStorage: action.payload.value,
          total: state.total + action.payload.price
        };
      } else {
        return {
          ...state,
          addProfile: action.payload.value,
          total: state.total + action.payload.price
        };
      }

    case "UPDATE_UNCHECKED_ADD_AND_TOTAL":
      if (action.payload.title === "Online Service") {
        return {
          ...state,
          addService: action.payload.value,
          total: state.total - action.payload.price
        };
      } else if (action.payload.title === "Larger storage") {
        return {
          ...state,
          addStorage: action.payload.value,
          total: state.total - action.payload.price
        };
      } else {
        return {
          ...state,
          addProfile: action.payload.value,
          total: state.total - action.payload.price
        };
      }

    case "UPDATE_SUBTOTAL_total":
      return {
        ...state,
        subtotal: action.payload,
        total: action.payload
      };

    default:
      console.log("TYPE NOT EXIST");
  }
};

export const AppProvider = ({ children }) => {
  const value = useReducer(appReducer, initialState);

  return <AppContext.Provider value={value}>{children}</AppContext.Provider>;
};
