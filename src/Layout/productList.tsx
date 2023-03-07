import React from "react";
import Cards from "../Common/cards";
import { Products } from "../Types/types";
// import Button from '@mui/material/Button';
import { useDispatch } from "react-redux";
import { setCart } from "../Store/Reducer/cart.slice";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import "../App.css";
import { listOfProducts } from "../Utils/constant";
import { styled } from "@mui/material/styles";
import Button, { ButtonProps } from "@mui/material/Button";
// import Stack from '@mui/material/Stack';
import { blue } from "@mui/material/colors";

const ColorButton = styled(Button)<ButtonProps>(({ theme }) => ({
  color: theme.palette.getContrastText(blue[500]),
  backgroundColor: blue[500],
  "&:hover": {
    backgroundColor: blue[700],
  },
}));
export const ProductList = () => {
  const dispatch = useDispatch();

  function addToCartHandler(item: Products) {
    dispatch(setCart(item));
  }

  return (
    <>
      <div className="cards">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {listOfProducts.map((product) => (
              <>
                <Grid item xs={3}>
                  <Cards product={product}>
                    <ColorButton
                      size="small"
                      className="button"
                      onClick={() => addToCartHandler(product)}
                    >
                      Add to cart
                    </ColorButton>
                  </Cards>
                </Grid>
              </>
            ))}
          </Grid>
        </Box>
      </div>
    </>
  );
};
