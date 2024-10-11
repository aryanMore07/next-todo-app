import {
  Avatar,
  Box,
  Grid2,
  IconButton,
  Modal,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";
import CloseIcon from "@mui/icons-material/Close";

const Container = styled(Box)(({ theme }) => ({
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  maxWidth: "710px",
  width: "90%",
  padding: theme.spacing(4),
  backgroundColor: "#fff",
  borderRadius: "8px",
  boxSizing: "border-box",
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(3),
  backgroundColor: "#eee",
}));

const Label = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  lineHeight: "24px",
  fontWeight: 600,
}));

const Output = styled(Box)(({ theme }) => ({
  backgroundColor: "#fff",
  width: "100%",
  padding: theme.spacing(1),
  borderRadius: "4px",
}));

const IconButtonComponent = styled(IconButton)(({ theme }) => ({
  position: "absolute",
  top: "8px",
  right: "8px",
}));

function UserDetailsModel({ open, setOpen, userDetails }) {
  const handleClose = () => setOpen(false);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ "& :focus-visible": { outline: "none" } }}
    >
      <Container>
        <IconButtonComponent onClick={handleClose}>
          <CloseIcon />
        </IconButtonComponent>
        <Stack alignItems="center">
          <Avatar
            sx={{ width: "70px", height: "70px" }}
            alt={userDetails.name}
            src={userDetails.imgFile}
          />
        </Stack>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
            <Stack>
              <Label>Name:</Label>
              <Output>{userDetails.name}</Output>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
            <Stack>
              <Label>Email:</Label>
              <Output>{userDetails.email}</Output>
            </Stack>
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
            <Stack>
              <Label>Gender:</Label>
              <Output>{userDetails.gender}</Output>
            </Stack>
          </Grid2>
        </Grid2>
      </Container>
    </Modal>
  );
}

export default UserDetailsModel;
