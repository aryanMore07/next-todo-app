import { Box, Button, Card, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import React, { useState } from "react";
import EditProductModel from "../EditProductModel";
import { useDispatch } from "react-redux";
import { deleteProduct } from "@/lib/features/productSlice";

const CardContainer = styled(Card)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "auto",
  display: "flex",
  justifyContent: "center",
  marginBottom: theme.spacing(1)
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
  color: "#000",
}));

function ProductCard({ data }) {
  const [open, setOpen] = useState(false);
  const dispatch = useDispatch();

  const deleteBtnHander = (product_id) => {
    dispatch(deleteProduct(product_id));
  };

  return (
    <>
      <EditProductModel open={open} setOpen={setOpen} data={data} />
      <CardContainer>
        <ImageContainer>
          <Image
            width={250}
            height={250}
            sx={{ width: "100%", height: "100%" }}
            alt={data.product_name}
            src={data.image_file}
          />
        </ImageContainer>
        <Box sx={{ padding: 1 }}>
          <Grid2 container spacing={1}>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
              <Text>
                <span style={{ fontWeight: 600 }}>Product Name: </span>
                {data.product_name}
              </Text>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
              <Text>
                <span style={{ fontWeight: 600 }}>Category Name: </span>
                {data.category_name}
              </Text>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
              <Text>
                <span style={{ fontWeight: 600 }}>Product SKU: </span>
                {data.product_sku}
              </Text>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
              <Text>
                <span style={{ fontWeight: 600 }}>Price: </span>
                <span style={{ fontSize: "18px", fontWeight: 600 }}>
                  ${data.original_price}{" "}
                </span>
                <span
                  style={{
                    fontSize: "14px",
                    fontWeight: 400,
                    textDecoration: "line-through",
                    color: "red",
                  }}
                >
                  ${data.discount_price}
                </span>
              </Text>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
              <Button
                fullWidth
                variant="outlined"
                onClick={() => {
                  setOpen(true);
                }}
              >
                Edit
              </Button>
            </Grid2>
            <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
              <Button
                fullWidth
                variant="contained"
                onClick={() => {
                  deleteBtnHander(data._id);
                }}
              >
                Delete
              </Button>
            </Grid2>
          </Grid2>
        </Box>
      </CardContainer>
    </>
  );
}

export default ProductCard;
