import { addProduct, editProduct } from "@/lib/features/productSlice";
import {
  Box,
  Button,
  Grid2,
  Modal,
  OutlinedInput,
  TextField,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { v4 as uuid } from "uuid";

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

const Heading = styled(Typography)(({ theme }) => ({
  fontSize: "24px",
  lineHeight: "32px",
  fontWeight: 600,
  textAlign: "center",
}));

function EditProductModel({ open, setOpen, data }) {
  const dispatch = useDispatch();
  const [productDetails, setProductDetails] = useState({
    _id: uuid(),
    product_name: "",
    category_name: "",
    product_sku: "",
    original_price: null,
    discount_price: null,
    final_price: "",
    image_file: "",
    created_at: "",
    updated_at: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProductDetails({
      ...productDetails,
      [name]: value,
    });
  };

  const handleClose = () => {
    setOpen(false);
  };
  
  const updateBtnHandler = (event) => {
    event.preventDefault();
    dispatch(editProduct({ updatedProduct: productDetails, _id: productDetails._id }));
    setOpen(false);
  };

  useEffect(() => {
    if (data) {
      setProductDetails({
        ...productDetails,
        _id: data._id,
        product_name: data.product_name,
        category_name: data.category_name,
        product_sku: data.product_sku,
        original_price: data.original_price,
        discount_price: data.discount_price,
        final_price: data.final_price,
        image_file: data.image_file,
        created_at: data.created_at,
        updated_at: data.updated_at,
      });
    }
  }, [data]);

  return (
    <Modal
      open={open}
      onClose={handleClose}
      aria-labelledby="modal-modal-title"
      aria-describedby="modal-modal-description"
      sx={{ "& :focus-visible": { outline: "none" } }}
    >
      <Container component="form" onSubmit={updateBtnHandler}>
        <Heading>Edit Product Details</Heading>
        <Grid2 container spacing={2}>
          <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
            <TextField
              required
              fullWidth
              label="Product Name"
              name="product_name"
              value={productDetails.product_name}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
            <TextField
              required
              fullWidth
              name="category_name"
              label="Category Name"
              value={productDetails.category_name}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
            <TextField
              required
              fullWidth
              label="Product SKU"
              name="product_sku"
              value={productDetails.product_sku}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
            <TextField
              required
              fullWidth
              name="original_price"
              label="Original price"
              type="number"
              value={productDetails.original_price}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
            <TextField
              required
              fullWidth
              name="discount_price"
              label="Discount Price"
              type="number"
              value={productDetails.discount_price}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 6 }} item>
            <TextField
              required
              fullWidth
              name="final_price"
              label="Final price"
              type="number"
              value={productDetails.final_price}
              onChange={handleChange}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 12 }} item>
            <Typography sx={{ fontSize: "16px", color: "grey" }}>
              Add Image
            </Typography>
            <OutlinedInput
              fullWidth
              type="file"
              name="image_file"
              inputProps={{ accept: "image/*" }}
              onChange={(event) => {
                const file = event.target.files[0];
                if (file) {
                  const fileReader = new FileReader();
                  fileReader.onloadend = () => {
                    setProductDetails({
                      ...productDetails,
                      image_file: fileReader.result,
                    });
                  };
                  fileReader.readAsDataURL(file);
                }
              }}
            />
          </Grid2>
          <Grid2 size={{ xs: 12, sm: 12, md: 12 }} item>
            <Button fullWidth variant="contained" type="submit">
              Update Product
            </Button>
          </Grid2>
        </Grid2>
      </Container>
    </Modal>
  );
}

export default EditProductModel;
