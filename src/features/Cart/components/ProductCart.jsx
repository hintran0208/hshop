import { Grid } from '@mui/material';
import { Box } from '@mui/system';
import { STATIC_HOST, THUMBNAIL_PLACEHOLDER } from 'constants/index';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils';

ProductCart.propTypes = {};

function ProductCart(props) {
  const cartItems = useSelector((state) => state.cart.cartItems);

  return (
    <Box>
      {cartItems.map((item) => (
        <Grid container key={item.product.id}>
          <Grid item sx={{ p: 1, width: '70px' }}>
            <img
              src={
                item.product.thumbnail
                  ? `${STATIC_HOST}${item.product.thumbnail?.url}`
                  : `${THUMBNAIL_PLACEHOLDER}`
              }
              alt={item.product.name}
              width="60px"
              heigh="60px"
            />
          </Grid>
          <Grid item sx={{ px: 1, py: 2.6, width: '160px' }}>
            {item.product.name}
          </Grid>
          <Grid item sx={{ px: 10, py: 3, width: '80px' }}>
            {formatPrice(item.product.salePrice)}
          </Grid>
          <Grid item sx={{ pl: 20, py: 3, width: '260px' }}>
            {item.quantity}
          </Grid>
          <Grid item sx={{ pl: 12, py: 3, width: '180px' }}>
            {formatPrice(item.product.salePrice * item.quantity)}
          </Grid>
        </Grid>
      ))}
    </Box>
  );
}

export default ProductCart;
