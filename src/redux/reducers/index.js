// reducers/index.js
import { combineReducers } from 'redux';
import productsReducer from './productsReducer';

const rootReducer = combineReducers({
  products: productsReducer,
  // Add other reducers if needed
});

export default rootReducer;
