import * as React from "react";
import { CircularProgress, Typography } from "@mui/material";
import Box from "@mui/material/Box";

export default function Loading() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <CircularProgress />
      <Typography>Loading</Typography>
    </Box>
  );
}
