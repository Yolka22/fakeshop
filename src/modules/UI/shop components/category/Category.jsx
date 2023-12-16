// Пример Category компонента
import React from "react";
import { useSelector } from "react-redux";
import Product from "../product/Product";
import { Box } from "@mui/system";
import { Typography } from "@mui/joy";

export default function Category({ categoryName }) {
  // Используем useSelector для доступа к состоянию продуктов
  const products = useSelector((state) => state.products.products);

  // Фильтруем продукты по categoryName
  const filteredProducts = products.filter(
    (product) => product.category === categoryName
  );

  return (
    <Box>
      <Typography level="h2" textAlign="center">{categoryName}</Typography>
      <Box
        sx={{ display: "grid", gridTemplateColumns: "repeat(2, 1fr)", gap: 2 }}
      >
        {filteredProducts.map((product) => (
          <Product key={product.id} product={product} />
        ))}
      </Box>
    </Box>
  );
}
