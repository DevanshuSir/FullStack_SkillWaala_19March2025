import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cartSlice/cartSlice";

export default function ImgMediaCard(props) {
  const { productData } = props;

  const dispatch = useDispatch();

  return (
    <Card sx={{ maxWidth: 300, maxHeight: 500, position: "relative" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={productData.image}
        sx={{ objectFit: "contain", height: "50%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="body1" component="div">
          {productData.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {productData.category}
        </Typography>
        <Typography variant="h5" color="success">
          Price- ${productData.price}
        </Typography>
      </CardContent>
      <CardActions>
        <Box
          sx={{
            position: "absolute",
            bottom: "10px",
            display: "flex",
            gap: "10px",
          }}
        >
          <Button
            size="small"
            variant="contained"
            color="success"
            onClick={() => {
              dispatch(addToCart(productData));
            }}
          >
            Add To Cart
          </Button>
          <Button size="small" variant="contained">
            Learn More
          </Button>
        </Box>
      </CardActions>
    </Card>
  );
}
