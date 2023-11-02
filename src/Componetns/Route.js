import { Button, Dialog, Grid, TextField, Typography } from "@mui/material";
import React, { useState } from "react";
const intialState = {
  start_point: [],
  end_point: [],
  points: [],
  loops: "",
  title: "",
};
const Route = ({ handleClose }) => {
  const [fields, setFields] = useState(intialState);
  const updateformData = (key, value) => {
    setFields({ ...fields, [key]: value });
  };
  return (
    <Dialog
      open
      onClose={handleClose}
      PaperProps={{ sx: { height: "80vh", minWidth: "80vw" } }}
    >
      <Grid container padding={"1rem"}>
        <Grid item xs={12} display={"flex"} justifyContent={"flex-start"}>
          <Typography variant="h5">Route</Typography>
        </Grid>
        <Grid item xs={12} md={8}></Grid>

        <Grid item xs={12} md={4}>
          <Grid container>
            <Grid item paddingRight={{ xs: 0, md: "1rem" }} xs={12}>
              <TextField
                margin="normal"
                size="medium"
                required
                fullWidth
                id="title"
                label="Title"
                name="title"
                value={fields.points}
                onChange={(e) => updateformData(e.target.name, e.target.value)}
              />
            </Grid>
            <Grid item paddingRight={{ xs: 0, md: "1rem" }} xs={12}>
              <TextField
                margin="normal"
                size="medium"
                required
                fullWidth
                id="start_point"
                label="Start Point"
                name="start_point"
                value={fields.start_point}
                onChange={(e) => updateformData(e.target.name, e.target.value)}
              />
            </Grid>{" "}
            <Grid item paddingRight={{ xs: 0, md: "1rem" }} xs={12}>
              <TextField
                margin="normal"
                size="medium"
                required
                fullWidth
                id="end_point"
                label="End Point"
                name="end_point"
                value={fields.end_point}
                onChange={(e) => updateformData(e.target.name, e.target.value)}
              />
            </Grid>{" "}
            <Grid item paddingRight={{ xs: 0, md: "1rem" }} xs={12}>
              <TextField
                margin="normal"
                size="medium"
                required
                fullWidth
                id="points"
                label="Points"
                name="points"
                value={fields.points}
                onChange={(e) => updateformData(e.target.name, e.target.value)}
              />
            </Grid>{" "}
            <Grid item paddingRight={{ xs: 0, md: "1rem" }} xs={12}>
              <TextField
                margin="normal"
                size="medium"
                required
                fullWidth
                id="loops"
                label="Loops"
                name="loops"
                value={fields.points}
                onChange={(e) => updateformData(e.target.name, e.target.value)}
              />
            </Grid>{" "}
          </Grid>
        </Grid>
        <Grid
          item
          xs={12}
          display={"flex"}
          justifyContent={"flex-end"}
          position={"absolute"}
          bottom={20}
          right={10}
        >
          <Button
            variant="outlined"
            color="error"
            sx={{ marginRight: "1rem" }}
            onClick={handleClose}
          >
            Cancel
          </Button>
          <Button variant="outlined">Save</Button>
        </Grid>
      </Grid>
    </Dialog>
  );
};

export default Route;
