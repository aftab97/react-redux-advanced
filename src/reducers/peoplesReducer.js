import {
  RECEIVE_PEOPLES,
  REQUEST_PEOPLES,
  ERROR_PEOPLES,
} from "../actions/requestPeoplesAction";

const initialState = {
  isLoading: false,
  entries: {},
  error: false,
};

export const peoplesReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PEOPLES:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_PEOPLES:
      return {
        isLoading: false,
        entries: action.payload,
        error: false,
      };
    case ERROR_PEOPLES:
      return {
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
