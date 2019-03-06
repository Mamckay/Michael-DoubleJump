/*
import actions
*/

import { SET_REVIEW_LOADING, SET_REVIEW, SET_REVIEW_ERROR } from "../actions";

/*
initial state
*/

const initialState = {
  reviews: [],
  loading: false,
  error: null
};

const reviewReducer = (state = initialState, action) => {
  if (action.type === SET_REVIEW_LOADING) {
    return Object.assign({}, state, {
      loading: true,
      error: null
    });
  }
  if (action.type === SET_REVIEW) {
    return Object.assign({}, state, {
      reviews: action.reviews,
      error: null,
      loading: false
    });
  }
  if (action.type === SET_REVIEW_ERROR) {
    return Object.assign({}, state, {
      error: action.error,
      loading: false
    });
  }
  return state;
};

export default reviewReducer;
