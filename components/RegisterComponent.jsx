import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  Grid2,
  Radio,
  RadioGroup,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import { MuiFileInput } from "mui-file-input";
import { v4 as uuid } from "uuid";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 55px)",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  maxWidth: "540px",
  width: "90%",
  height: "100%",
  margin: "auto",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  lineHeight: "32px",
  fontWeight: 600,
  color: theme.palette.primary.main,
  textAlign: "center",
  marginBottom: theme.spacing(3),
}));

const Input = styled(TextField)(({ theme }) => ({
  borderRadius: "0px",
}));

const FileInput = styled(MuiFileInput)(({ theme }) => ({
  width: "100%",
}));

const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  cursor: "pointer",
  textAlign: "center",
  "&:hover": {
    textDecoration: "underline",
  },
}));

function RegisterComponent({ setOpen, setSnackbarStatus }) {
  const [users, setUsers] = useState(() => {
    const users_list = localStorage.getItem("users");
    return users_list ? JSON.parse(users_list) : [];
  });
  const [registerDetails, setRegisterDetails] = useState({
    _id: uuid(),
    name: "",
    email: "",
    password: "",
    gender: "",
    image_file: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterDetails({
      ...registerDetails,
      [name]: value,
    });
  };

  const submitBtnHandler = (event) => {
    event.preventDefault();
    const isUserExist = users.find(
      (user) => user.email === registerDetails.email
    );
    if (isUserExist) {
      setSnackbarStatus({
        status: "error",
        isOpen: true,
        message: "This email already exists",
      });
      setRegisterDetails({
        name: "",
        email: "",
        password: "",
        gender: "",
        image_file: {},
      });
    } else {
      const updatedUsersList = [...users, registerDetails];
      setUsers(updatedUsersList);
      localStorage.setItem("users", JSON.stringify(updatedUsersList));
      setRegisterDetails({
        name: "",
        email: "",
        password: "",
        gender: "",
        image_file: {},
      });
      setSnackbarStatus({
        status: "success",
        isOpen: true,
        message: "User registered successfully. Please log in to proceed.",
      });
      setOpen(false);
    }
  };

  return (
    <Container>
      <InnerContainer>
        <Heading>Register</Heading>
        <Grid2
          component="form"
          container
          spacing={2}
          onSubmit={submitBtnHandler}
        >
          <Grid2 item size={{ xs: 12, sm: 12, md: 12 }}>
            <Input
              fullWidth
              placeholder="Name"
              name="name"
              type="text"
              required
              variant="outlined"
              value={registerDetails.name}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 12, md: 12 }}>
            <Input
              fullWidth
              placeholder="Email"
              name="email"
              type="email"
              required
              variant="outlined"
              value={registerDetails.email}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 12, md: 12 }}>
            <Input
              fullWidth
              placeholder="Password"
              name="password"
              type="password"
              required
              variant="outlined"
              value={registerDetails.password}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 12, md: 12 }}>
            <FormControl>
              <FormLabel id="demo-row-radio-buttons-group-label">
                Gender
              </FormLabel>
              <RadioGroup
                row
                aria-labelledby="demo-row-radio-buttons-group-label"
                name="gender"
                value={registerDetails.gender}
                onChange={handleChange}
                required
              >
                <FormControlLabel
                  value="female"
                  control={<Radio />}
                  label="Female"
                />
                <FormControlLabel
                  value="male"
                  control={<Radio />}
                  label="Male"
                />
              </RadioGroup>
            </FormControl>
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 12, md: 12 }}>
            <Typography>User Image*</Typography>
            <TextField
              required
              fullWidth
              name="image_file"
              placeholder="Image"
              onChange={(event) => {
                const file = event.target.files[0];
                setRegisterDetails({
                  ...registerDetails,
                  image_file: file,
                });
              }}
              type="file"
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 12, md: 12 }}>
            <Button variant="contained" type="submit" fullWidth>
              Register
            </Button>
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 12, md: 12 }}>
            <FooterText
              onClick={() => {
                setOpen(false);
              }}
            >
              Already registered, <span>Login?</span>
            </FooterText>
          </Grid2>
        </Grid2>
      </InnerContainer>
    </Container>
  );
}

export default RegisterComponent;
