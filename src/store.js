import {createStore, applyMiddleware, combineReducers} from 'redux';
import thunk from 'redux-thunk';
import reviewReducer from './reducers/reviews'
import productReducer from './reducers/products';
import authReducer from './reducers/auth';
import cartReducer from './reducers/cart';
import searchReducer from './reducers/search';
import orderReducer from './reducers/orders';
import { reducer as formReducer } from 'redux-form';

const store = createStore( combineReducers({
    store: productReducer,
    reviews: reviewReducer,
    session: authReducer,
    cart: cartReducer,
    search: searchReducer,
    orders: orderReducer,
    form: formReducer
}), applyMiddleware(thunk));

export default store;