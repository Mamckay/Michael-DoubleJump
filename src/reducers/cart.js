import {
  ADD_PRODUCT_LOADING,
  ADD_PRODUCT,
  ADD_PRODUCT_ERROR,
  CLEAR_CART,
  SET_CART
} from "../actions";

const initialState = {
  items: []
};

const cartReducer = (state = initialState, action) => {
  if (action.type === ADD_PRODUCT_LOADING) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  }
  if (action.type === ADD_PRODUCT) {
    return Object.assign({}, state, {
      items: [...state.items, action.product],
      error: null,
      loading: false
    });
  }
  if (action.type === ADD_PRODUCT_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  if (action.type === CLEAR_CART) {
    return Object.assign({}, state, {
      items: [],
      error: null,
      loading: false
    });
  }
  if (action.type === SET_CART) {
    return Object.assign({}, state, {
      items: action.cart,
      error: null,
      loading: false
    });
  }
  return state;
};

export default cartReducer;
