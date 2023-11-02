import React, { useState, useEffect } from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import Box from "@mui/material/Box";
import Alert from "@mui/material/Alert";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import TextField from "@mui/material/TextField";
import Input from "@mui/material/Input";
import InputLabel from "@mui/material/InputLabel";
import IconButton from "@mui/material/IconButton";
import { FileUploader } from "react-drag-drop-files";
import CircularProgress from "@mui/material/CircularProgress";
import { green } from "@mui/material/colors";
import Fab from "@mui/material/Fab";
import CheckIcon from "@mui/icons-material/Check";
import SaveIcon from "@mui/icons-material/Save";

const buttonStyle = {
  marginRight: "16px",
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

const addAnotherUserButtonContainer = {
  display: "flex",
  alignItems: "center",
  margin: "20px 0",
};

const projectListHeaderStyle = {
  flex: 1,
  textAlign: "left",
  padding: "8px",
  marginRight: "16px",
};

export default function App() {
  const [open, setOpen] = useState(false);
  const [dropData, setDropData] = useState({
    name: "",
    file: null,
  });

  const [saveData, setSaveData] = useState([]);
  const [showAlert, setShowAlert] = useState(false);

  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const timer = React.useRef(null); // Corrected

  useEffect(() => {
    return () => {
      clearTimeout(timer.current);
    };
  }, []);

  const handleButtonClick = () => {
    if (!loading) {1
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
    setShowAlert(false);
  };

  const handleFileChange = (file) => {
    setDropData({ ...dropData, file });
  };

  const handleNameChange = (e) => {
    setDropData({ ...dropData, name: e.target.value });
  };

  const handleSave = () => {
    if (dropData.name && dropData.file) {
      setSuccess(false);
      setLoading(true);
      timer.current = window.setTimeout(() => {
        setSuccess(true);
        setLoading(false);
        setSaveData([...saveData, { name: dropData.name, file: dropData.file }]);
        setDropData({ name: "", file: null });
        setShowAlert(true);
        setOpen(false);
      }, 2000);
    }
  };

  const handleCancel = () => {
    setDropData({ name: "", file: null });
    setOpen(false);
    setShowAlert(false);
  };

  return (
    <div style={{ margin: "20px", padding: "20px" }}>
      {saveData.length === 0 && (
        <Button
          variant="contained"
          color="primary"
          onClick={handleClickOpen}
          style={buttonStyle}
        >
          Add New User
        </Button>
      )}
      {saveData.length > 0 && (
        <div style={addAnotherUserButtonContainer}>
          <Typography variant="h4" style={projectListHeaderStyle}>
            Project List
          </Typography>
          <Button
            variant="contained"
            color="primary"
            onClick={handleClickOpen}
          >
            Add Another User
          </Button>
        </div>
      )}

      <Dialog open={open} onClose={handleClose}>
        <Box style={dialogStyle}>
          <DialogTitle>Add New User</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please enter your name and select your file.
            </DialogContentText>
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
              Select file:
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
              <IconButton
                color="primary"
                aria-label="upload picture"
                component="span"
              ></IconButton>
            </InputLabel>
          </DialogContent>
          <DialogActions style={dialogActionsStyle}>
            <Button
              onClick={handleCancel}
              color="secondary"
              variant="outlined"
            >
              Cancel
            </Button>
            <Box sx={{ position: "relative" }}>
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
                    color: green[500],
                    position: "absolute",
                    top: -6,
                    left: -6,
                    zIndex: 1,
                  }}
                />
              )}
            </Box>
          </DialogActions>
        </Box>
      </Dialog>
      {showAlert && (
        <Alert severity="success" onClose={() => setShowAlert(false)}>
          Data has been saved successfully!
        </Alert>
      )}
      {saveData.length > 0 && (
        <TableContainer component={Paper}>
          <Table>
            <TableHead>
              <TableRow>
                <TableCell>Name</TableCell>
                <TableCell>File Name</TableCell>
                <TableCell>Status</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {saveData.map((item, index) => (
                <TableRow key={index}>
                  <TableCell>{item.name}</TableCell>
                  <TableCell>{item.file ? item.file.name : ""}</TableCell>
                  <TableCell>In Progress</TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      )}
    </div>
  );
}
