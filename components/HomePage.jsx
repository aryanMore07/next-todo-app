import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 55px)",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  minWidth: "75%",
  width: "90%",
  height: "100%",
  margin: "auto",
}));

function HomePage() {
  return (
    <Container>
      <InnerContainer>
        <h1>Home Page</h1>
      </InnerContainer>
    </Container>
  );
}

export default HomePage;
