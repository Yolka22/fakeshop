// Product component
import React from "react";
import { Box, Typography } from "@mui/joy";
import {  useNavigate  } from "react-router-dom";

export default function Product({ product }) {
  const navigate = useNavigate();

  const handleClick = () => {
    // Use the Link component for navigation
    // <Link to={`/product/${product.id}`} />;
    
    // Alternatively, use useHistory for programmatic redirect
    navigate(`/product/${product.id}`);
  };

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
        cursor: "pointer", // Add cursor style to indicate it's clickable
      }}
      onClick={handleClick}
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
