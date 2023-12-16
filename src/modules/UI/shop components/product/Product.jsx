import { Box, Typography } from "@mui/joy";
import React from "react";

export default function Product({ product }) {
  return (
    <Box
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        flexDirection: "column",
        textAlign: "center",
        border: "2px solid black",
        margin: "20px",
        padding: "10px",
        borderRadius: "5px",
      }}
    >
      <Typography>{product.title}</Typography>
      <img
        style={{
          maxWidth: "200px",
          marginTop: "10px",
          maxHeight: "200px",
          width: "100%",
          height: "auto",

        }}
        src={product.image}
        alt={product.title}
      />
    </Box>
  );
}
