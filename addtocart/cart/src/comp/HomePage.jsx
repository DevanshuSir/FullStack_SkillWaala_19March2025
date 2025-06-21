import React, { useEffect, useState } from "react";
import { Box } from "@mui/material";
import ImgMediaCard from "./ImgMediaCard";
import Hero from "./Hero";

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
      <Hero />
      <Box
        sx={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent: "center",
          gap: "15px",
          margin: "30px",
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
