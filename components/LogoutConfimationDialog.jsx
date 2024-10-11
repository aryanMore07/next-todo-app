import React from "react";
import Button from "@mui/material/Button";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
import useMediaQuery from "@mui/material/useMediaQuery";
import { useTheme } from "@mui/material/styles";
import { useRouter } from "next/navigation";
import { Divider } from "@mui/material";

function LogoutConfimationDialog({ open, setOpen, setUserDetails }) {
  const theme = useTheme();
  const fullScreen = useMediaQuery(theme.breakpoints.down("md"));
  const router = useRouter();

  const handleLogoutBtn = () => {
    localStorage.removeItem("user_details");
    setUserDetails({});
    router.push("/auth");
    setOpen(false);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <Dialog
      fullScreen={fullScreen}
      open={open}
      onClose={handleClose}
      aria-labelledby="responsive-dialog-title"
    >
      <DialogTitle id="responsive-dialog-title">{"Please confirm"}</DialogTitle>
      <Divider />
      <DialogContent>
        <DialogContentText>Are you sure want to logout?</DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button variant="outlined" color="error" onClick={handleClose}>
          No
        </Button>
        <Button
          variant="contained"
          color="success"
          onClick={handleLogoutBtn}
          autoFocus
        >
          Yes, logout
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default LogoutConfimationDialog;
