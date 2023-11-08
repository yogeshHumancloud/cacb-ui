import {
  Box,
  Button,
  CircularProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Fab,
  IconButton,
  Input,
  InputLabel,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import React, { useEffect, useState } from "react";
import { FileUploader } from "react-drag-drop-files";
import SaveIcon from "@mui/icons-material/Save";
import CheckIcon from "@mui/icons-material/Check";
import MDBox from "components/MDBox";
import MDTypography from "components/MDTypography";
import MDButton from "components/MDButton";
import axios from "axios";
import { baseUrl } from "utils/constants";
import { apiV1 } from "utils/constants";

const AddFile = ({ saveData, setSaveData, open, setOpen, onSuccessPost, intilaScreen = false }) => {
  const [dropData, setDropData] = useState({
    name: "",
    file: null,
  });

  const [showAlert, setShowAlert] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = React.useRef(null); // Corrected
  const buttonStyle = {
    marginRight: "16px",
    zIndex: 0,
  };

  const addAnotherUserButtonContainer = {
    display: "flex",
    alignItems: "center",
    margin: "20px 0",
  };
  const dialogStyle = {
    height: "500px",
    width: "500px",
    padding: "40px",
    margin: "0 auto",
  };

  const dialogActionsStyle = {
    display: "flex",
    justifyContent: "space-between",
    margin: "20px 0",
  };

  const projectListHeaderStyle = {
    flex: 1,
    textAlign: "left",
    padding: "8px",
    marginRight: "16px",
  };

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
      }, 2000);
    }
  };

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleFileChange = (file) => {
    setDropData({ ...dropData, file });
  };

  const handleNameChange = (e) => {
    setDropData({ ...dropData, name: e.target.value });
  };

  const handleSave = async () => {
    if (dropData.name && dropData.file) {
      setSuccess(false);
      setLoading(true);
      const headers = {
        Authorization: `Bearer ${sessionStorage.getItem("token")}`,
        "Content-Type": "application/json",
      };
      const res = await axios.post(
        baseUrl + apiV1 + "/project",
        { name: dropData.name, file_name: dropData.file.name },
        { headers }
      );
      if (res.status === 201) {
        const formdata = new FormData();
        formdata.append("file", dropData.file);
        const fileUpload = await axios.put(res.data.presignedURL, formdata);
        if (fileUpload.status === 200) {
          onSuccessPost();
          setSuccess(true);
          setLoading(false);
          handleClose();
        }
      }
    }
  };

  const handleCancel = () => {
    setDropData({ name: "", file: null });
    setOpen(false);
    setShowAlert(false);
  };
  return intilaScreen ? (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "flex-start",
        alignItems: "center",
        height: "70vh",
      }}
    >
      <Typography variant="h3">Welcome to 15CACB</Typography>
      <Typography variant="h5">Click on Add button to add to Create New Project</Typography>
      <MDBox mt={4} mb={1}>
        <MDButton
          onClick={() => {
            setOpen(true);
          }}
          variant="gradient"
          color="info"
        >
          Add
        </MDButton>
      </MDBox>

      <Dialog open={open} onClose={handleClose}>
        <Box style={dialogStyle}>
          <DialogTitle>Add New Project</DialogTitle>
          <DialogContent>
            <DialogContentText>Please enter your name and select your file.</DialogContentText>
            <TextField
              autoFocus
              margin="dense"
              id="name"
              label="Enter Name"
              type="text"
              fullWidth
              value={dropData.name}
              onChange={handleNameChange}
            />
            <InputLabel
              htmlFor="avatar"
              style={{
                display: "flex",
                flexDirection: "column",
                marginTop: "1.5rem",
              }}
            >
              <Box marginBottom={"1rem"}>Select file:</Box>
              <Input
                accept="image/*"
                id="avatar"
                type="file"
                style={{ display: "none" }}
                onChange={(e) => handleFileChange(e.target.files[0])}
              />
              <FileUploader
                handleChange={(file) => handleFileChange(file)}
                name="avatar"
                types={["xlsx", "xlsm", "csv"]}
              />
            </InputLabel>
          </DialogContent>
          <DialogActions style={dialogActionsStyle}>
            <MDBox mt={4} mb={1}>
              <MDButton onClick={handleCancel} variant="gradient" color="error">
                Cancel
              </MDButton>
            </MDBox>
            <Box>
              <Fab
                aria-label="save"
                color="primary"
                sx={buttonStyle}
                onClick={handleSave}
                disabled={loading}
              >
                {success ? <CheckIcon /> : <SaveIcon />}
              </Fab>
              {loading && (
                <CircularProgress
                  size={68}
                  sx={{
                    color: "green[500]",
                    position: "absolute", // Add absolute positioning to the CircularProgress
                    top: "40%", // Position it in the middle vertically
                    left: "40%", // Position it in the middle horizontally
                    transform: "translate(-50%, -50%)", // Center it perfectly
                    zIndex: 2, // Set a higher z-index to make it overlap
                  }}
                />
              )}
            </Box>
          </DialogActions>
        </Box>
      </Dialog>
    </Box>
  ) : (
    <Dialog open={open} onClose={handleClose}>
      <Box style={dialogStyle}>
        <DialogTitle>Add New Project</DialogTitle>
        <DialogContent>
          <DialogContentText>Please enter your name and select your file.</DialogContentText>
          <TextField
            autoFocus
            margin="dense"
            id="name"
            label="Enter Name"
            type="text"
            fullWidth
            value={dropData.name}
            onChange={handleNameChange}
          />
          <InputLabel
            htmlFor="avatar"
            style={{
              display: "flex",
              flexDirection: "column",
              marginTop: "1.5rem",
            }}
          >
            <Box marginBottom={"1rem"}>Select file:</Box>
            <Input
              accept="image/*"
              id="avatar"
              type="file"
              style={{ display: "none" }}
              onChange={(e) => handleFileChange(e.target.files[0])}
            />
            <FileUploader
              handleChange={(file) => handleFileChange(file)}
              name="avatar"
              types={["xlsx", "xlsm", "csv"]}
            />
          </InputLabel>
        </DialogContent>
        <DialogActions style={dialogActionsStyle}>
          <MDBox mt={4} mb={1}>
            <MDButton onClick={handleCancel} variant="gradient" color="error">
              Cancel
            </MDButton>
          </MDBox>
          <Box>
            <Fab
              aria-label="save"
              color="primary"
              sx={buttonStyle}
              onClick={handleSave}
              disabled={loading}
            >
              {success ? <CheckIcon /> : <SaveIcon />}
            </Fab>
            {loading && (
              <CircularProgress
                size={68}
                sx={{
                  color: "green[500]",
                  position: "absolute", // Add absolute positioning to the CircularProgress
                  top: "40%", // Position it in the middle vertically
                  left: "40%", // Position it in the middle horizontally
                  transform: "translate(-50%, -50%)", // Center it perfectly
                  zIndex: 2, // Set a higher z-index to make it overlap
                }}
              />
            )}
          </Box>
        </DialogActions>
      </Box>
    </Dialog>
  );
};

export default AddFile;
