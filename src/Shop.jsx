// Ваш Shop компонент
import React, { useEffect } from "react";
import Category from "./modules/UI/shop components/category/Category"; // Предположим, что у вас есть компонент для отображения категорий

// Import necessary components from react-router-dom
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  setCategories,
  setCategoriesFailure,
} from "./redux/actions/productsActions";
export default function Shop() {
  const fetchProducts = () => {
    return (dispatch) => {
      dispatch(fetchProductsRequest());

      fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((json) => dispatch(fetchProductsSuccess(json)))
        .catch((error) => dispatch(fetchProductsFailure(error)));
    };
  };

  const fetchCategories = () => {
    return (dispatch) => {
      dispatch(fetchProductsRequest());

      fetch("https://fakestoreapi.com/products/categories")
        .then((res) => res.json())
        .then((json) => dispatch(setCategories(json)))
        .catch((error) => dispatch(setCategoriesFailure(error)));
    };
  };

  // Use useDispatch to dispatch the action
  const dispatch = useDispatch();

  // Call fetchProducts when your component mounts
  useEffect(() => {
    dispatch(fetchProducts());
    dispatch(fetchCategories());
  }, []);

  // Use useSelector to access the products state
  const products = useSelector((state) => state.products.products);
  const products_loading = useSelector((state) => state.products.loading);
  const products_error = useSelector((state) => state.products.error);

  // Use useSelector to access the products state
  const categories = useSelector((state) => state.products.categories);
  const categories_error = useSelector((state) => state.products.loading);

  console.log(categories);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            {categories.map((category) => {
              return (
                <li>
                  <Link to={`${category}`}>{category}</Link>
                </li>
              );
            })}
          </ul>
        </nav>

        <Routes>
          {categories.map((category) => {
            return (
              <Route
                path={`/${category}`}
                element={<Category categoryName={category} />}
              />
            );
          })}
          <Route path="/" element={<div>Добро пожаловать в магазин</div>} />
        </Routes>
      </div>
    </Router>
  );
}
