// for setting the reviews

export const SET_REVIEW_LOADING = 'SET_REVIEW_LOADING';
export const setReviewLoading = () => ({
    type: SET_REVIEW_LOADING
})
export const SET_REVIEW = 'SET_REVIEW';
export const setReview = reviews => ({
    type: SET_REVIEW,
    reviews
})
export const SET_REVIEW_ERROR = 'SET_REVIEW_ERROR';
export const setReviewError = error => ({
    type: SET_REVIEW_LOADING,
    error
})
export const fetchReviews = () => dispatch => {
    //create a dispatch methods
    dispatch(setReviewLoading);
    fetch('http://localhost:8080/reviews')
    .then(res => {
        return res.json()
    })
    .then(data => {
        dispatch(setReview(data))
    })
    .catch(err => {
        console.log('error');
        console.log(err);
        dispatch(setReviewError(err));
    })
}


export const SET_PRODUCTS_LOADING = 'SET_PRODUCTS_LOADING';
export const setProductsLoading = () => ({
    type: SET_PRODUCTS_LOADING
})
export const SET_PRODUCTS = 'SET_PRODUCTS';
export const setProducts = products => ({
    type: SET_PRODUCTS,
    products
})
export const SET_PRODUCTS_ERROR = 'SET_PRODUCTS_ERROR';
export const setProductsError = error => ({
    type: SET_PRODUCTS_LOADING,
    error
})
export const fetchProducts = () => dispatch => {
    //create a dispatch methods
    dispatch(setProductsLoading);
    fetch('http://localhost:8080/products')
    .then(res => {
        return res.json()
    })
    .then(data => {
        dispatch(setProducts(data))
    })
    .catch(err => {
        console.log('error');
        console.log(err);
        dispatch(setReviewError(err));
    })
}

export const ADD_PRODUCT_LOADING = 'SET_CART_LOADING';
export const addProductLoading = () => ({
    type: ADD_PRODUCT_LOADING
})
export const ADD_PRODUCT = 'ADD_PRODUCT';
export const addProduct = product => ({
    type: ADD_PRODUCT,
    product
})
export const ADD_PRODUCT_ERROR = 'ADD_PRODUCT_ERROR';
export const addProductError = error => ({
    type: ADD_PRODUCT_LOADING,
    error
})
export const addItem = item => dispatch => {
    //create a dispatch methods
    dispatch(addProduct(item));
}

export const CLEAR_CART = 'CLEAR_CART';
export const clearCart = () => ({
    type: CLEAR_CART
})

export const newCart = () => dispatch => {
    dispatch(clearCart());
}
// for creating the users

// export const SET_USER_LOADING = 'SET_USER_LOADING';
// export const setUserLoading = error => ({
//     type: SET_USER_LOADING,
//     error
// })

// export const SET_USER = 'SET_USER';
// export const setUSER = error => ({
//     type: SET_USER,
//     error
// })

// export const SET_USER_ERROR = 'SET_USER';
// export const setUserError = error => ({
//     type: SET_USER,
//     error
// })

// export const fetchUser = () => dispatch => {
//     //create a dispatch methods
//     dispatch(setGamesLoad);
//     fetch('http://localhost:8080/api/users')
//     .then(res => {
//         console.log(res);
//         return res.json()
//     })
//     .then(data => dispatch(setUSER(data)))
//     .catch(err => {
//         console.log('error');
//         console.log(err);
//         dispatch(setGamesError(err));
//     })
// }

// export const SET_LOGIN_LOADING = 'SET_LOGIN_LOADING';
// export const setLoginLoading = error => ({
//     type: SET_LOGIN_LOADING,
//     error
// })
// export const SET_LOGIN = 'SET_LOGIN';
// export const setLogin = error => ({
//     type: SET_REVIEW,
//     error
// })
// export const SET_LOADING_ERROR = 'SET_LOGIN_ERROR';
// export const setLoginError = error => ({
//     type: SET_LOGIN_LOADING,
//     error
// })

// export const fetchLogin = () => dispatch => {
//     //create a dispatch methods
//     dispatch(setGamesLoad);
//     fetch('http://localhost:8080/api/login')
//     .then(res => {
//         console.log(res);
//         return res.json()
//     })
//     .then(data => dispatch(setLogin(data)))
//     .catch(err => {
//         console.log('error');
//         console.log(err);
//         dispatch(setGamesError(err));
//     })
// }