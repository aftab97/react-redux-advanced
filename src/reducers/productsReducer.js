import {
  RECIEVE_PRODUCTS,
  REQUEST_PRODUCTS,
  ERROR_PRODUCTS,
} from "../actions/requestProductsAction";

const initialState = {
  isLoading: false,
  entries: {},
  error: false,
};

export const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PRODUCTS:
      return {
        ...state,
        isLoading: true,
      };
    case RECIEVE_PRODUCTS:
      return {
        isLoading: false,
        entries: action.payload,
        error: false,
      };
    case ERROR_PRODUCTS:
      return {
        isLoading: false,
        error: true,
        reason: action.payload,
      };
    default:
      return state;
  }
};
