import { createContext, useReducer } from "react";

export const GlobalContext = createContext();

const initialState = {
  porducts: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const changeState = (state, action) => {
  switch (action.type) {
    case "ADD_PRODUCT":
      return {
        ...state,
        porducts: [...state.porducts, action.payload],
      };
    case "REMOVE_PRODUCT":
      return {
        ...state,
        porducts: state.porducts.filter(
          (product) => product.id !== action.payload
        ),
      };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, initialState);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch }}>
      {children}
    </GlobalContext.Provider>
  );
}
