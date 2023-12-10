import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import {
  basketCountReducer,
} from "./reducers";

const reducers = combineReducers({
  basketCountReducer,
});

export const Store = createStore(reducers, applyMiddleware(thunk));
