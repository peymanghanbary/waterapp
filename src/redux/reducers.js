import {
  BASKET_COUNT_NUMBER,
} from "./actions";

const initialState = {
  basketCount: 0,
};

export function basketCountReducer(state = initialState, action) {
  switch (action.type) {
    case BASKET_COUNT_NUMBER:
      return { ...state, basketCount: action.payload };
    default:
      return state;
  }
}
