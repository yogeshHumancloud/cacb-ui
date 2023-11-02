import { Button, Divider, Grid, TextField, Typography } from "@mui/material";
import React, { useCallback, useState } from "react";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import dayjs from "dayjs";
import { useNavigate } from "react-router";
import CategoryForm from "./CategoryForm";
import DragDrop from "./Drop";
import { useDropzone } from "react-dropzone";
import CloudUploadIcon from "@mui/icons-material/CloudUpload";

// import BibForm from "./BibForm.js";
const intialState = {
  title: "",
  location: "",
  description: "",
  categoryList: [],
  point_location: "",
  date: null,
  cutoff_time: "",
};

const MarathonEntryForm = ({ handleClose, isEdit = false }) => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState(intialState);
  const [date, setDate] = useState(null);
  const [bibDoc, setBibDoc] = useState(null);
  const closeForm = () => {
    navigate("/dashboard");
  };
  const updateformData = (key, value) => {
    setFormData({ ...formData, [key]: value });
  };

  const onDrop = useCallback((acceptedFiles) => {
    setBibDoc(acceptedFiles[0]);
  }, []);
  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });
  return (
    <Grid container sx={{ paddingY: "5%", paddingX: "10%" }}>
      <Grid
        item
        xs={12}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"flex-start"}
        paddingX={"1rem"}
      >
        <Typography variant="h5">Marthon {isEdit ? `Edit` : "Add"}</Typography>
      </Grid>
      <Grid item xs={12} md={6} paddingX={"1rem"}>
        <TextField
          margin="normal"
          size="medium"
          required
          fullWidth
          id="title"
          label="Title"
          name="title"
          value={formData.title}
          onChange={(e) => updateformData(e.target.name, e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6} paddingX={"1rem"}>
        <TextField
          margin="normal"
          size="medium"
          required
          fullWidth
          id="location"
          label="Location"
          name="location"
          value={formData.location}
          onChange={(e) => updateformData(e.target.name, e.target.value)}
        />
      </Grid>{" "}
      <Grid item xs={12} paddingX={"1rem"}>
        <TextField
          margin="normal"
          size="medium"
          required
          multiline
          rows={4}
          fullWidth
          id="description"
          label="Description"
          name="description"
          value={formData.description}
          onChange={(e) => updateformData(e.target.name, e.target.value)}
        />
      </Grid>{" "}
      <Grid item xs={12} md={6} paddingX={"1rem"} paddingTop={"1rem"}>
        <LocalizationProvider dateAdapter={AdapterDayjs}>
          <DatePicker
            sx={{ width: "100%" }}
            label="Date*"
            minDate={dayjs()}
            format="DD MMM YYYY"
            value={formData.date}
            onChange={(newValue) => updateformData("date", newValue)}
          />
        </LocalizationProvider>
      </Grid>{" "}
      <Grid item xs={12} md={6} paddingX={"1rem"}>
        <TextField
          margin="normal"
          size="medium"
          required
          fullWidth
          id="point_location"
          label="Point Location"
          name="point_location"
          value={formData.point_location}
          onChange={(e) => updateformData(e.target.name, e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6} paddingX={"1rem"}>
        <TextField
          margin="normal"
          size="medium"
          required
          fullWidth
          id="cutoff_time"
          label="Cutoff Time"
          name="cutoff_time"
          value={formData.cutoff_time}
          onChange={(e) => updateformData(e.target.name, e.target.value)}
        />
      </Grid>
      <Grid item xs={12} md={6} padding={"1rem"}>
        <DragDrop />
      </Grid>
      <Divider />
      <Grid
        item
        xs={12}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"1rem"}
      >
        <CategoryForm
          updateformData={updateformData}
          categoryList={formData.categoryList}
        />
      </Grid>
      <Grid
        item
        xs={12}
        display={"flex"}
        flexDirection={"row"}
        alignItems={"center"}
        justifyContent={"space-between"}
        padding={"1rem"}
        sx={{
          height: "20vh",
        }}
      >
        <div
          {...getRootProps()}
          style={{
            border: "1px solid #E9ECF0",
            height: "100%",
            width: "100%",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <input id="uploadDoc" {...getInputProps()} />
          {isDragActive ? (
            <p>Drop the files here ...</p>
          ) : (
            <div style={{ textAlign: "center" }}>
              <p>Drag 'n' drop some files here, or click to select files</p>
              <CloudUploadIcon sx={{ color: "#1976d2" }} />
            </div>
          )}
        </div>
      </Grid>
      <Grid
        item
        xs={12}
        padding={"1rem"}
        sx={{ display: "flex", justifyContent: "flex-end" }}
      >
        <Button
          sx={{ marginRight: "1rem" }}
          color="error"
          variant="outlined"
          onClick={closeForm}
        >
          Cancel
        </Button>
        <Button
          onClick={() => console.log(formData, "==========")}
          color="primary"
          variant="outlined"
        >
          Submit
        </Button>
      </Grid>
    </Grid>
  );
};

export default MarathonEntryForm;
