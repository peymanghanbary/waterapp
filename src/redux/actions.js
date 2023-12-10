export const BASKET_COUNT_NUMBER = "BASKET_COUNT_NUMBER";

export const setBasketCount = (count) => (dispatch) => {
  dispatch({
    type: BASKET_COUNT_NUMBER,
    payload: count,
  });
};