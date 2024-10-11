import { theme } from "@/utils/theme";
import {
  Box,
  Button,
  FormControl,
  FormControlLabel,
  FormLabel,
  InputLabel,
  MenuItem,
  OutlinedInput,
  Radio,
  RadioGroup,
  Select,
  Slider,
  Stack,
  Typography,
} from "@mui/material";
import { styled } from "@mui/material/styles";
import React, { useState } from "react";

const Container = styled(Box)(({ theme }) => ({
  width: "100%",
  minHeight: "calc(100vh - 55px)",
  paddingRight: theme.spacing(4),
  paddingLeft: "0px",
  paddingTop: theme.spacing(8),
  borderRight: "1px solid #eee",
}));

const Heading = styled(Box)(({ theme }) => ({
  fontSize: "18px",
  fontWeight: 400,
}));

const ResetButton = styled(Button)(({ theme }) => ({
  width: "fit-content",
  padding: "0px",
  borderBottom: "1px solid #000",
  borderRadius: "0px",
  "&:hover": {
    backgroundColor: "#fff",
  },
}));

const FiltersContainer = styled(Box)(({ theme }) => ({
  width: "100%",
  height: "100%",
  display: "flex",
  flexDirection: "column",
  rowGap: theme.spacing(2),
}));

const Input = styled(OutlinedInput)(({ theme }) => ({
  width: "100%",
  paddingTop: "0px",
  paddingBottom: "0px",
}));

function LeftSideComponent() {
  const [filterInputs, setFilterInputs] = useState({
    searchInput: "",
    priceSliderInput: 100,
    sortby: "",
    records_per_page: null,
  });

  return (
    <Container>
      <Stack
        direction="row"
        justifyContent="space-between"
        sx={{ marginBottom: theme.spacing(7) }}
      >
        <Heading>Filter</Heading>
        <ResetButton disableRipple>Reset</ResetButton>
      </Stack>
      <FiltersContainer>
        <Input
          onChange={(event) => {
            setFilterInputs({
              ...filterInputs,
              searchInput: event.target.value,
            });
          }}
          placeholder="Search products"
        />
        <Box>
          <Typography id="input-slider" gutterBottom>
            Price
          </Typography>
          <Slider
            aria-label="Price"
            value={filterInputs.priceSliderInput}
            onChange={(event) => {
              setFilterInputs({
                ...filterInputs,
                priceSliderInput: event.target.value,
              });
            }}
          />
        </Box>
        <FormControl>
          <FormLabel>Sort by</FormLabel>
          <RadioGroup
            name="radio-buttons-group"
            value={filterInputs.searchInput}
            onChange={(event) => {
              setFilterInputs({
                ...filterInputs,
                sortby: event.target.value,
              });
            }}
          >
            <FormControlLabel
              value="low_to_high"
              control={<Radio />}
              label="Price - Low to high"
            />
            <FormControlLabel
              value="high_to_Low"
              control={<Radio />}
              label="Price - High to Low"
            />
          </RadioGroup>
        </FormControl>
        <FormControl fullWidth>
          <InputLabel id="demo-simple-select-label">
            Records Per Page
          </InputLabel>
          <Select
            value={filterInputs.records_per_page}
            label="Records Per Page"
            onChange={(event) => {
              setFilterInputs({
                ...filterInputs,
                records_per_page: event.target.value,
              });
            }}
          >
            <MenuItem value={5}>5 Records</MenuItem>
            <MenuItem value={10}>10 Records</MenuItem>
            <MenuItem value={15}>15 Records</MenuItem>
          </Select>
        </FormControl>
      </FiltersContainer>
    </Container>
  );
}

export default LeftSideComponent;
