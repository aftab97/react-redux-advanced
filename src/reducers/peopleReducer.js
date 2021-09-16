import {
  RECEIVE_PEOPLE,
  REQUEST_PEOPLE,
  ERROR_PEOPLE,
} from "../actions/requestPeopleAction";

const initialState = {
  isLoading: false,
  entries: {},
  error: false,
};

export const peopleReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST_PEOPLE:
      return {
        ...state,
        isLoading: true,
      };
    case RECEIVE_PEOPLE:
      return {
        isLoading: false,
        entries: action.payload,
        error: false,
      };
    case ERROR_PEOPLE:
      return {
        isLoading: false,
        error: true,
      };
    default:
      return state;
  }
};
