import React from "react";
import ChildTwo from "./ChildTwo";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";

import {
  Button,
  Checkbox,
  Fab,
  Avatar,
  Box,
  Typography,
  styled,
} from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Fingerprint from "@mui/icons-material/Fingerprint";

const ChildOne = () => {
  const BoxNew = styled(Box)({
    backgroundColor: "blue",
    width: "100%",
    height: "50px",
    padding: "50px",
    color: "white",
  });

  return (
    <div>
      <BoxNew>Hello class</BoxNew>

      <h1 className="text-5xl">Child_One</h1>
      <ChildTwo />
      <Button
        variant="contained"
        color="error"
        startIcon={<AcUnitIcon />}
        endIcon={<AccountCircleIcon />}
      >
        Text
      </Button>
      <IconButton color="primary">
        <Fingerprint />
      </IconButton>

      <Checkbox color="success" />

      <Fab variant="extended">
        <AcUnitIcon />
        AcUnit
      </Fab>

      <Avatar sx={{ backgroundColor: "brown" }}>H</Avatar>
      <Box sx={{ width: "200px", height: "200px", backgroundColor: "green" }}>
        Hello
      </Box>

      <BoxNew>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptate eius
        vel doloribus quo reprehenderit at cum corporis. Deleniti, voluptate
        magnam!
      </BoxNew>

      <Typography variant="h1">H1 Tag</Typography>
    </div>
  );
};

export default ChildOne;
