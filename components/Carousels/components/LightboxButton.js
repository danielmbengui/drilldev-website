import * as React from "react";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";

const LightboxButton = ({ onClick, title }) => (
  <Box sx={{ mb: 2 }}>
    <Button variant="contained" onClick={onClick}>
      {title}
    </Button>
  </Box>
);

export default LightboxButton;
