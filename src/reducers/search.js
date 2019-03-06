import { SET_SEARCH } from "../actions";

const initialState = {
  searchTerm: ""
};

const searchReducer = (state = initialState, action) => {
  if (action.type === SET_SEARCH) {
    return Object.assign({}, state, {
      searchTerm: action.searchTerm
    });
  }
  return state;
};

export default searchReducer;
