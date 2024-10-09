import { Box, Button, Grid2, TextField, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";

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

const FooterText = styled(Typography)(({ theme }) => ({
  fontSize: "14px",
  cursor: "pointer",
  textAlign: "center",
  "&:hover": {
    textDecoration: "underline",
  },
}));

function LoginComponent({ setOpen }) {
  const [users, setUsers] = useState(() => {
    const users_list = localStorage.getItem("users");
    return users_list ? JSON.parse(users_list) : [];
  });

  const [loginDetails, setLoginDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setLoginDetails({
      ...loginDetails,
      [name]: value,
    });
  };

  const submitBtnHandler = (event) => {
    event.preventDefault();
  };

  console.log(loginDetails);

  return (
    <Container>
      <InnerContainer>
        <Heading>Login</Heading>
        <Grid2
          component="form"
          container
          spacing={2}
          onSubmit={submitBtnHandler}
        >
          <Grid2 item size={{ xs: 12, sm: 12, md: 12 }}>
            <Input
              fullWidth
              placeholder="Email"
              name="email"
              type="email"
              required
              variant="outlined"
              value={loginDetails.email}
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
              value={loginDetails.password}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 12, md: 12 }}>
            <Button variant="contained" type="submit" fullWidth>
              Login
            </Button>
          </Grid2>
          <Grid2 item size={{ xs: 12, sm: 12, md: 12 }}>
            <FooterText
              onClick={() => {
                setOpen(true);
              }}
            >
              New here, <span>Register?</span>
            </FooterText>
          </Grid2>
        </Grid2>
      </InnerContainer>
    </Container>
  );
}

export default LoginComponent;
