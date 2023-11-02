import {
  Box,
  Button,
  Grid,
  InputAdornment,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import CustomeTable from "./CustomeTable";
import _ from "lodash";
import Route from "./Route";

const initialData = {
  title: "",
  distance: "",
  minimum_age: "",
  cutoff_time: "",
  route: {},
};

const CategoryForm = ({
  updateformData: updateMarathonFormData,
  categoryList,
}) => {
  const [showCategoryForm, setShowCategoryForm] = useState(false);
  const [categoryFormdata, setCategoryFormdata] = useState(initialData);
  const [showRoutePopup, setShowRoutePopup] = useState(false);
  const updateformData = (key, value) => {
    setCategoryFormdata({ ...categoryFormdata, [key]: value });
  };
  const onDelete = (row) => {
    updateMarathonFormData(
      "categoryList",
      categoryList.filter((item) => !_.isEqual(item, row))
    );
  };

  const resetfields = () => {
    setCategoryFormdata(initialData);
  };
  return (
    <Grid container>
      {showRoutePopup && <Route handleClose={() => setShowRoutePopup(false)} />}
      <Grid
        item
        xs={12}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
      >
        <Typography variant="h5">Categories* </Typography>
        {showCategoryForm ? (
          <Box>
            <Button
              variant="outlined"
              color="error"
              sx={{ marginRight: "1rem" }}
              onClick={() => {
                setShowCategoryForm(false);
                resetfields();
              }}
            >
              Cancel
            </Button>
            <Button variant="outlined">Save</Button>
          </Box>
        ) : (
          <Button variant="outlined" onClick={() => setShowCategoryForm(true)}>
            Add Category
          </Button>
        )}
      </Grid>
      {categoryList.length !== 0 && (
        <Grid item xs={12}>
          <CustomeTable
            bodyList={categoryList}
            header={["Title", "Distance", "Minimum Age"]}
            ignoreList={[""]}
            onDelete={onDelete}
          />
        </Grid>
      )}
      {showCategoryForm ? (
        <>
          <Grid item paddingRight={{ xs: 0, md: "1rem" }} xs={12} md={6}>
            <TextField
              margin="normal"
              size="medium"
              required
              fullWidth
              id="title"
              label="Title"
              name="title"
              value={categoryFormdata.title}
              onChange={(e) => updateformData(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid item paddingLeft={{ xs: 0, md: "1rem" }} xs={12} md={6}>
            <TextField
              margin="normal"
              InputProps={{
                inputProps: {
                  style: { textAlign: "right" },
                },
                endAdornment: (
                  <InputAdornment position="start">km</InputAdornment>
                ),
              }}
              size="medium"
              required
              fullWidth
              type="number"
              id="distance"
              label="Distance"
              name="distance"
              value={categoryFormdata.distance}
              onChange={(e) => updateformData(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid item paddingRight={{ xs: 0, md: "1rem" }} xs={12} md={6}>
            <TextField
              margin="normal"
              size="medium"
              required
              type="number"
              fullWidth
              id="minimum_age"
              label="Minimum Age"
              name="minimum_age"
              value={categoryFormdata.minimum_age}
              onChange={(e) => updateformData(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid item paddingLeft={{ xs: 0, md: "1rem" }} xs={12} md={6}>
            <TextField
              margin="normal"
              size="medium"
              required
              type="number"
              fullWidth
              id="cutoff_time"
              label="Cutoff Time"
              name="cutoff_time"
              InputProps={{
                inputProps: {
                  style: { textAlign: "right" },
                },
                endAdornment: (
                  <InputAdornment position="start">minute</InputAdornment>
                ),
              }}
              value={categoryFormdata.cutoff_time}
              onChange={(e) => updateformData(e.target.name, e.target.value)}
            />
          </Grid>
          <Grid
            item
            xs={12}
            display={"flex"}
            justifyContent={"flex-start"}
            marginTop={"1rem"}
          >
            <Button variant="outlined" onClick={() => setShowRoutePopup(true)}>
              Add Route
            </Button>
          </Grid>
        </>
      ) : null}
    </Grid>
  );
};

export default CategoryForm;
