// reducers/productsReducer.js
import {
  FETCH_PRODUCTS_REQUEST,
  FETCH_PRODUCTS_SUCCESS,
  FETCH_PRODUCTS_FAILURE,
  SET_CATEGORIES,
  SET_CATEGORIES_FAILURE,
} from "../actions/productsActions";

const initialState = {
  products: [],
  products_loading: false,
  products_error: null,

  categories: [],
  categories_error: null,
};

const productsReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_PRODUCTS_REQUEST:
      return {
        ...state,
        products_loading: true,
        products_error: null,
      };
    case FETCH_PRODUCTS_SUCCESS:
      return {
        ...state,
        products_loading: false,
        products: action.payload,
      };
    case FETCH_PRODUCTS_FAILURE:
      return {
        ...state,
        products_loading: false,
        products_error: action.payload,
      };
    case SET_CATEGORIES:
      return {
        ...state,
        categories: action.payload,
      };
    case SET_CATEGORIES_FAILURE:
      return {
        ...state,
        categories_error: action.payload,
      };
    default:
      return state;
  }
};

export default productsReducer;
