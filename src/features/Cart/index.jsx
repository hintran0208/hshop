import { Button, Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useSelector } from 'react-redux';
import { formatPrice } from 'utils';
import ProductCart from './components/ProductCart';
import { cartItemsCountSelector, cartTotalSelector } from './selectors';

CartFeature.propTypes = {};

function CartFeature(props) {
  const cartCount = useSelector(cartItemsCountSelector);
  const cartTotal = useSelector(cartTotalSelector);
  return (
    <Box sx={{ pt: 4 }}>
      <Container>
        <Typography component="h1" variant="h6" sx={{ mb: 1 }}>
          GIỎ HÀNG
        </Typography>
        <Grid container spacing={2}>
          <Grid item sx={{ flex: '1 1 0' }}>
            <Box
              sx={{
                mb: 1.5,

                '& div': {
                  padding: '4px',
                  display: 'flex',
                  flexFlow: 'row nowrap',
                  justifyContent: 'space-between',
                },
              }}
            >
              <Paper elevation={0}>
                <div>Tất cả {`(${cartCount} sản phẩm)`}</div>
                <div>Đơn giá</div>
                <div>Số lượng</div>
                <div>Thành tiền</div>
              </Paper>
            </Box>

            <Box>
              <Paper elevation={0}>
                <ProductCart />
              </Paper>
            </Box>
          </Grid>

          <Grid item sx={{ width: '300px' }}>
            <Paper elevation={0}>
              <Box sx={{ p: 2 }}>
                <Typography>Tổng cộng</Typography>
                <Typography
                  variant="h5"
                  sx={{ color: 'red', display: 'flex', justifyContent: 'flex-end' }}
                >
                  {formatPrice(cartTotal)}
                </Typography>
                <Typography variant="caption" sx={{ display: 'flex', justifyContent: 'flex-end' }}>
                  (Đã bao gồm VAT nếu có)
                </Typography>
              </Box>
            </Paper>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              style={{ width: '286px' }}
              sx={{ mt: 2 }}
              size="large"
            >
              Tiến hành thanh toán
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default CartFeature;
