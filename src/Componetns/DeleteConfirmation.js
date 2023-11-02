import { Box, Button, Dialog, Stack, Typography } from "@mui/material";
import React from "react";

const DeleteConfirmation = ({ handleClose, id }) => {
  const submit = () => {
    console.log(id);
  };
  return (
    <Dialog open onClose={handleClose}>
      <Stack alignItems={"center"} padding={"2rem"}>
        <Typography>Are you sure to remove marathon?</Typography>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            marginTop: "1.5rem",
          }}
        >
          <Button onClick={submit} color="error" variant="outlined">
            Confirm
          </Button>
          <Button
            color="primary"
            variant="contained"
            sx={{ marginLeft: "2rem" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
        </Box>
      </Stack>
    </Dialog>
  );
};

export default DeleteConfirmation;
