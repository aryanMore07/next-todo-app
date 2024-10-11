"use client";
import withAuth from "@/utils/withAuth";
import { Box } from "@mui/material";
import { styled } from "@mui/material/styles";
import React from "react";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 55px)",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "100%",
  margin: "auto",
}));

function ProductListingPage() {
  return (
    <Container>
      <InnerContainer>
        <h1>Product listing Page</h1>
      </InnerContainer>
    </Container>
  );
}

export default withAuth(ProductListingPage);
