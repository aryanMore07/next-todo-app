"use client";
import withAuth from "@/utils/withAuth";
import { Box, Button, Grid2, Stack, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import LeftSideComponent from "./LeftSideComponent";
import { useSelector } from "react-redux";
import { fetchProducts } from "@/lib/features/productSlice";
import AddProductModel from "./AddProductModel";
import ProductCard from "./card_widgets/ProductCard";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 55px)",
}));

const InnerContainer = styled(Box)(({ theme }) => ({
  width: "90%",
  height: "100%",
  margin: "auto",
}));

const MiddleSideContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "calc(100vh - 55px)",
  padding: theme.spacing(2),
  paddingTop: theme.spacing(8),
}));

const RightSideContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  minHeight: "calc(100vh - 55px)",
}));

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  lineHeight: "32px",
  fontWeight: 600,
}));

function HomePage() {
  const [open, setOpen] = useState(false);
  const { status, products } = useSelector((state) => state.products);

  useEffect(() => {
    fetchProducts();
  }, []);

  console.log(products);

  return (
    <>
      <AddProductModel open={open} setOpen={setOpen} />
      <Container>
        <InnerContainer>
          <Grid2 container>
            <Grid2 item size={{ xs: 2, sm: 2, md: 2 }}>
              <LeftSideComponent />
            </Grid2>
            <Grid2 item size={{ xs: 8, sm: 8, md: 8 }}>
              <MiddleSideContainer>
                <Stack direction="row" justifyContent="space-between">
                  <Heading>
                    Products {products.length > 0 ? `(${products.length})` : ""}
                  </Heading>
                  <Button
                    variant="contained"
                    onClick={() => {
                      setOpen(true);
                    }}
                  >
                    Add Product
                  </Button>
                </Stack>
                <Grid2 container>
                  {products?.map((data) => {
                    <Grid2 key={data_id} size={{ xs: 12, sm: 6, md: 4 }} item>
                      <ProductCard data={data.id} />
                    </Grid2>;
                  })}
                </Grid2>
              </MiddleSideContainer>
            </Grid2>
            <Grid2 item size={{ xs: 0, sm: 0, md: 2 }}>
              <RightSideContainer></RightSideContainer>
            </Grid2>
          </Grid2>
        </InnerContainer>
      </Container>
    </>
  );
}

export default withAuth(HomePage);
