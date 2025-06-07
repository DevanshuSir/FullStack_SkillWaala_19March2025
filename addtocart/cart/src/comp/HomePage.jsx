import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ImgMediaCard from "./ImgMediaCard";

const HomePage = () => {
  const [product, setProduct] = useState([]);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/")
      .then((res) => {
        return res.json();
      })
      .then((result) => {
        console.log(result);
        setProduct(result);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);

  return (
    <div>
      <h1>HomPage</h1>
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
        }}
      >
        {product.map((value) => (
          <ImgMediaCard productData={value} />
        ))}
      </Box>
    </div>
  );
};

export default HomePage;
