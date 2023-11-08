import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { setAlert } from "reduxToolkit/alert/alertSlice";
import MDAlert from "./MDAlert";
import MDSnackbar from "./MDSnackbar";

const AlertProvider = ({ children }) => {
  const dispatch = useDispatch();
  const [openAlert, setOpenAlert] = useState(false);
  const { message, color } = useSelector((state) => state.alert);
  const alertContent = (message) => (
    <MDTypography variant="body2" color="white">
      {message}
    </MDTypography>
  );
  useEffect(() => {
    console.log(message);
    if (message) {
      setOpenAlert(true);
    }
  }, [message]);
  const handleClose = () => {
    setOpenAlert(false);
    setTimeout(() => {
      dispatch(setAlert({ message: "", color: "error" }));
    }, 500);
  };

  return (
    <>
      <MDSnackbar
        color={color}
        icon="notifications"
        title={message}
        open={openAlert}
        onClose={handleClose}
        close={handleClose}
        autoHideDuration={3000}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      />
      {children}
    </>
  );
};

export default AlertProvider;
