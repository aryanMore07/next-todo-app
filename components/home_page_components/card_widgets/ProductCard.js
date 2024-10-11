import { Box, Grid2, Typography } from "@mui/material";
import { styled } from "@mui/material/styles";
import Image from "next/image";
import React from "react";

const CardContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const ImageContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
}));

const Text = styled(Typography)(({ theme }) => ({
  fontSize: "16px",
  fontWeight: 400,
}));

function ProductCard({ data }) {
  return (
    <CardContainer>
      <ImageContainer>
        <Image
          width={250}
          height={250}
          sx
          alt={data.product_name}
          src={data.image_file}
        />
      </ImageContainer>
      <Grid2 container>
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
              {data.original_price}
            </span>
            <span
              style={{
                fontSize: "14px",
                fontWeight: 400,
                textDecoration: "line-through",
              }}
            >
              {data.discount_price}
            </span>
          </Text>
        </Grid2>
      </Grid2>
    </CardContainer>
  );
}

export default ProductCard;
