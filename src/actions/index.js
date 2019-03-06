// for setting the reviews
import { API_BASE_URL } from "../config";

export const SET_REVIEW_LOADING = "SET_REVIEW_LOADING";
export const setReviewLoading = () => ({
  type: SET_REVIEW_LOADING
});
export const SET_REVIEW = "SET_REVIEW";
export const setReview = reviews => ({
  type: SET_REVIEW,
  reviews
});
export const SET_REVIEW_ERROR = "SET_REVIEW_ERROR";
export const setReviewError = error => ({
  type: SET_REVIEW_LOADING,
  error
});
export const fetchReviews = () => dispatch => {
  //create a dispatch methods
  dispatch(setReviewLoading);
  fetch(`${API_BASE_URL}/reviews`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch(setReview(data));
    })
    .catch(err => {
      dispatch(setReviewError(err));
    });
};

export const SET_PRODUCTS_LOADING = "SET_PRODUCTS_LOADING";
export const setProductsLoading = () => ({
  type: SET_PRODUCTS_LOADING
});
export const SET_PRODUCTS = "SET_PRODUCTS";
export const setProducts = products => ({
  type: SET_PRODUCTS,
  products
});
export const SET_PRODUCTS_ERROR = "SET_PRODUCTS_ERROR";
export const setProductsError = error => ({
  type: SET_PRODUCTS_LOADING,
  error
});
export const fetchProducts = () => dispatch => {
  //create a dispatch methods
  dispatch(setProductsLoading);
  fetch(`${API_BASE_URL}/products`)
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch(setProducts(data));
    })
    .catch(err => {
      dispatch(setReviewError(err));
    });
};

export const ADD_PRODUCT_LOADING = "SET_CART_LOADING";
export const addProductLoading = () => ({
  type: ADD_PRODUCT_LOADING
});
export const ADD_PRODUCT = "ADD_PRODUCT";
export const addProduct = product => ({
  type: ADD_PRODUCT,
  product
});
export const ADD_PRODUCT_ERROR = "ADD_PRODUCT_ERROR";
export const addProductError = error => ({
  type: ADD_PRODUCT_LOADING,
  error
});
export const addItem = item => (dispatch, getState) => {
  //create a dispatch methods
  const loggedIn = getState().session.currentUser !== null;
  const authToken = getState().session.authToken;
  dispatch(addProduct(item));
  if (loggedIn) {
    fetch(`${API_BASE_URL}/users/cart`, {
      method: "PUT",
      headers: {
        // Provide our auth token as credentials
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({ cart: getState().cart.items })
    });
  }
};

export const CLEAR_CART = "CLEAR_CART";
export const clearCart = () => ({
  type: CLEAR_CART
});

export const SET_CART_LOADING = "SET_CART_LOADING";
export const setCartLoading = () => ({
  type: SET_CART_LOADING
});

export const SET_CART = "SET_CART";
export const setCart = cart => ({
  type: SET_CART,
  cart
});
export const SET_CART_ERROR = "SET_CART_ERROR";
export const setCartError = error => ({
  type: SET_CART_ERROR,
  error
});

export const fetchCart = () => (dispatch, getState) => {
  const loggedIn = getState().session.currentUser !== null;
  const authToken = getState().session.authToken;
  if (loggedIn) {
    fetch(`${API_BASE_URL}/users/cart`, {
      method: "GET",
      headers: {
        // Provide our auth token as credentials
        Authorization: `Bearer ${authToken}`
      }
    })
      .then(res => {
        return res.json();
      })
      .then(data => {
        dispatch(setCart(data.cart));
      })
      .catch(err => {
        dispatch(setCartError(err));
      });
  } else {
  }
};

export const clearAll = () => (dispatch, getState) => {
  //create a dispatch methods
  const loggedIn = getState().session.currentUser !== null;
  const authToken = getState().session.authToken;
  dispatch(clearCart());
  if (loggedIn) {
    fetch(`${API_BASE_URL}/users/cart`, {
      method: "PUT",
      headers: {
        // Provide our auth token as credentials
        "Content-Type": "application/json",
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({ cart: getState().cart.items })
    });
  }
};

// search stuff

export const SET_SEARCH = "SET_SEARCH";
export const setSearch = searchTerm => ({
  type: SET_SEARCH,
  searchTerm
});

export const setSearchTerm = searchTerm => (dispatch, getState) => {
  dispatch(setSearch(searchTerm));
};

//order history
export const SET_ORDER_HISTORY_LOADING = "SET_ORDER_HISTORY_LOADING";
export const setOrderHistoryLoading = () => ({
  type: SET_ORDER_HISTORY_LOADING
});
export const SET_ORDER_HISTORY = "SET_ORDER_HISTORY";
export const setOrderHistory = orderHistory => ({
  type: SET_ORDER_HISTORY,
  orderHistory
});
export const SET_ORDER_HISTORY_ERROR = "SET_ORDER_HISTORY_ERROR";
export const setOrderHistoryError = error => ({
  type: SET_ORDER_HISTORY_ERROR,
  error
});

export const fetchOrderHistory = () => (dispatch, getState) => {
  const authToken = getState().session.authToken;
  dispatch(setOrderHistoryLoading());
  fetch(`${API_BASE_URL}/orders`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${authToken}`
    }
  })
    .then(res => {
      return res.json();
    })
    .then(data => {
      dispatch(setOrderHistory(data));
    })
    .catch(err => {
      dispatch(setOrderHistoryError(err));
    });
};

export const SET_ORDER = "SET_ORDER";
export const setOrder = order => ({
  type: SET_ORDER,
  order
});

export const setNewOrder = () => (dispatch, getState) => {
  if (getState().session.currentUser !== null) {
    const authToken = getState().session.authToken;
    const address = getState().session.currentUser.address;
    fetch(`${API_BASE_URL}/orders`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${authToken}`,
        "Content-Type": "application/json"
      },
      body: JSON.stringify({ items: getState().cart.items, address: address })
    });
  } else {
    //anon orders
    //     fetch(`${API_BASE_URL}/orders/anon`, {
    //     method: 'POST',
    //     headers: {
    //         "Content-Type": "application/json"
    //     },
    //     body: JSON.stringify({items: getState().cart.items})
    // })
  }
};
