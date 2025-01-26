import { createContext, useEffect, useReducer } from "react";
import { produce } from "immer";

export const GlobalContext = createContext();

const initialState = {
  products: [],
  totalPrice: 0,
  totalQuantity: 0,
};

const changeState = (state, action) => {
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        products: [...state.products, action.payload],
      };
    case "UPDATE_QUANTITY": {
      return {
        ...state,
        products: action.payload,
      };
    }
    case "REMOVE_PRODUCT":
      return {
        ...state,
        products: state.products.filter(
          (product) => product.id !== action.payload
        ),
      };
    case "CALCULATE_TOTAL":
      return {
        ...state,
        totalPrice: action.payload.totalPrice,
        totalQuantity: action.payload.totalQuantity,
      };
    default:
      return state;
  }
};

export function GlobalContextProvider({ children }) {
  const [state, dispatch] = useReducer(changeState, initialState);

  const calculateTotal = () => {
    const totalPrice = state.products.reduce((acc, product) => {
      return acc + product.price * product.quantity;
    }, 0);
    const totalQuantity = state.products.reduce((acc, product) => {
      return acc + product.quantity;
    }, 0);

    dispatch({
      type: "CALCULATE_TOTAL",
      payload: { totalPrice, totalQuantity },
    });
  };

  const addToCart = (product) => {
    const isProductInCart = state.products.find(
      (item) => item.id === product.id
    );

    if (isProductInCart) {
      const products = produce(state.products, (draft) => {
        const item = draft.find((item) => item.id === product.id);
        item.quantity += 1;
      });

      dispatch({
        type: "UPDATE_QUANTITY",
        payload: products,
      });
    } else {
      dispatch({
        type: "ADD_TO_CART",
        payload: product,
      });
    }
  };

  useEffect(() => {
    calculateTotal();
  }, [state.products]);

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(state));
  }, [state]);

  return (
    <GlobalContext.Provider value={{ ...state, dispatch, addToCart }}>
      {children}
    </GlobalContext.Provider>
  );
}
