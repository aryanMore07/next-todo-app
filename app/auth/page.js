"use client";
import LoginComponent from "@/components/LoginComponent";
import RegisterComponent from "@/components/RegisterComponent";
import SnackbarComponent from "@/components/SnackbarComponent";
import React, { useState } from "react";

function Page() {
  const [snackbarStatus, setSnackbarStatus] = useState({
    status: "",
    isOpen: false,
    message: "",
  });
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <SnackbarComponent
        status={snackbarStatus.status}
        isOpen={snackbarStatus.isOpen}
        message={snackbarStatus.message}
        setSnackbarStatus={setSnackbarStatus}
      />
      {!isOpen ? (
        <LoginComponent
          setOpen={setIsOpen}
          setSnackbarStatus={setSnackbarStatus}
        />
      ) : (
        <RegisterComponent
          setOpen={setIsOpen}
          setSnackbarStatus={setSnackbarStatus}
        />
      )}
    </>
  );
}

export default Page;
