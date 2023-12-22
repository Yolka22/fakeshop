//Shop component
import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchProductsRequest,
  fetchProductsSuccess,
  fetchProductsFailure,
  setCategories,
  setCategoriesFailure,
} from "./redux/actions/productsActions";

import { Drawer, Button, List, ListItem, ListItemButton, Box } from "@mui/joy";

import Category from "./modules/UI/shop components/category/Category";
import ProductDetails from "./modules/UI/shop components/product details/ProductDetails";

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

  const [openDrawer, setOpenDrawer] = React.useState(false);

  const handleDrawerOpen = () => {
    setOpenDrawer(true);
  };

  const handleDrawerClose = () => {
    setOpenDrawer(false);
  };

  const [currentPathname, setPath] = useState(window.location.pathname);
  const [shouldRenderButton, setButton] = useState(
    !currentPathname.includes("/product/")
  );

  return (
    <Router>
      <Box>
        {/* Conditionally render the button based on the route */}
        {shouldRenderButton && (
          <Button
            sx={{ position: "fixed", left: "10%", width: "80%", zIndex: 100 }}
            color="neutral"
            onClick={handleDrawerOpen}
          >
            Open Categories
          </Button>
        )}

        {/* Drawer component */}
        <Drawer open={openDrawer} onClose={handleDrawerClose}>
          <List>
            {categories.map((category) => (
              <ListItem key={category}>
                <ListItemButton
                  component={Link}
                  to={`/${category}`}
                  onClick={handleDrawerClose}
                >
                  {category}
                </ListItemButton>
              </ListItem>
            ))}
          </List>
        </Drawer>

        <Routes>
          {categories.map((category) => (
            <Route
              key={category}
              path={`/${category}`}
              element={<Category categoryName={category} />}
            />
          ))}
          <Route path="/product/:id" element={<ProductDetails />} />
          <Route path="/" element={<Category categoryName={categories[0]} />} />
        </Routes>
      </Box>
    </Router>
  );
}
