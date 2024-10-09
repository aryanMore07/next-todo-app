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
import AttachFileIcon from "@mui/icons-material/AttachFile";

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

function RegisterComponent({ setOpen }) {
  const [registerDetails, setRegisterDetails] = useState({
    name: "",
    email: "",
    password: "",
    gender: "",
    image_file: {},
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setRegisterDetails({
      ...registerDetails,
      [name]: value,
    });
  };

  return (
    <Container>
      <InnerContainer>
        <Heading>Register</Heading>
        <Grid2 container spacing={2}>
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
            <FileInput
              required
              fullWidth
              name="image_file"
              value={registerDetails.image_file}
              onChange={(newFile) => {
                setRegisterDetails({
                  ...registerDetails,
                  image_file: newFile,
                });
              }}
              InputProps={{
                inputProps: {
                  accept: "image/*",
                },
                placeholder: "Image",
                startAdornment: <AttachFileIcon />,
              }}
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
