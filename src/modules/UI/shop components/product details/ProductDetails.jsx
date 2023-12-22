// ProductDetails component
import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Box, Button, Typography } from "@mui/joy";

export default function ProductDetails() {
  const { id } = useParams();
  const [product, setProduct] = useState(null);
  const navigate = useNavigate();
  useEffect(() => {
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => res.json())
      .then((json) => setProduct(json));
  }, [id]);

  if (!product) {
    return <div>Loading...</div>;
  }

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
        padding: "60px",
        borderRadius: "5px",
      }}
      
    >

      <Button onClick={()=>{navigate(-1)}}>Go Back</Button>
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
      <Typography>{product.description}</Typography>
      {/* Add other product details as needed */}
    </Box>
  );
}
