"use client";
import { Alert, Snackbar } from "@mui/material";
import React from "react";

function SnackbarComponent({ status, isOpen, message, setSnackbarStatus }) {
  return (
    <Snackbar
      color={status}
      open={isOpen}
      autoHideDuration={6000}
      onClose={() => {
        setSnackbarStatus({
          status: "",
          isOpen: false,
          message: "",
        });
      }}
    >
      <Alert
        color={status}
        onClose={() => {
          setSnackbarStatus({
            status: "",
            isOpen: false,
            message: "",
          });
        }}
        severity={status}
        variant="filled"
        sx={{ width: "100%" }}
      >
        {message}
      </Alert>
    </Snackbar>
  );
}

export default SnackbarComponent;
