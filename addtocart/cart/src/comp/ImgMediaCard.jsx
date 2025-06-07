import * as React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

export default function ImgMediaCard(props) {
  const { productData } = props;

  console.log(productData);

  return (
    <Card sx={{ maxWidth: 300, height: "50vh", position: "relative" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        image={productData.image}
        sx={{ objectFit: "contain", height: "40%" }}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {productData.title}
        </Typography>
        <Typography variant="body2" sx={{ color: "text.secondary" }}>
          {productData.category}
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
          <Button size="small" variant="contained" color="success">
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
