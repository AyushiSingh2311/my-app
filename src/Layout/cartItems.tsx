import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../Store/store";
import { Products } from "../types/types";
import Cards from "../Common/cards";
import { removeCart } from "../Store/Reducer/cart.slice";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
// import "../App.css";
import '../App.css'
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

export const CartItems = () => {
  const cartSelector = useSelector((state: RootState) => state.cart.cart);
  const dispatch = useDispatch();

  function removeFromCartHandler(item: Products) {
    dispatch(removeCart(item));
  }

  return (
    <>
      <div className="cards">
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={2}>
            {cartSelector.map((product) => (
              <>
               <Grid item xs={3}>
                <Cards product={product}>
                  <ColorButton
                    size="small"
                    onClick={() => removeFromCartHandler(product)}
                  >
                    Remove from cart
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
