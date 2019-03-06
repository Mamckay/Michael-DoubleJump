import {
  SET_ORDER_HISTORY,
  SET_ORDER_HISTORY_LOADING,
  SET_ORDER_HISTORY_ERROR
} from "../actions";

/*
initial state
*/

const initialState = {
  orderHistory: [],
  loading: false,
  error: null
};

const orderReducer = (state = initialState, action) => {
  if (action.type === SET_ORDER_HISTORY_LOADING) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  }
  if (action.type === SET_ORDER_HISTORY) {
    return Object.assign({}, state, {
      orderHistory: action.orderHistory,
      error: null,
      loading: false
    });
  }
  if (action.type === SET_ORDER_HISTORY_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
};

export default orderReducer;
