import { createStore, applyMiddleware, compose } from "redux";
import thunk from "redux-thunk";

import rootReducer from "reducers";

const composeEnhancers =
  process.env.NODE_ENV !== "production" &&
  typeof window !== "undefined" &&
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    ? window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
    : compose;


export function configureStore(preloadedState) {
  const store = createStore(
    rootReducer,
    preloadedState, composeEnhancers(applyMiddleware(thunk))
  );
  return store;
}
