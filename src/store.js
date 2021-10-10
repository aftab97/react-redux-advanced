import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import { peoplesReducer } from "./reducers/peoplesReducer";
import { peopleReducer } from "./reducers/peopleReducer";
import { productsReducer } from "./reducers/productsReducer";

const rootReducer = combineReducers({
  peoples: peoplesReducer,
  people: peopleReducer,
  products: productsReducer,
});

export default createStore(
  rootReducer,
  compose(
    applyMiddleware(thunk),
    window.__REDUX_DEVTOOLS_EXTENSION__
      ? window.__REDUX_DEVTOOLS_EXTENSION__()
      : (f) => f
  )
);
