import { Container, Grid, LinearProgress, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { Route, Switch, useRouteMatch } from 'react-router';
import AddToCartForm from '../components/AddToCartForm';
import ProductAdditional from '../components/ProductAdditional';
import ProductDescription from '../components/ProductDescription';
import ProductDetailSkeleton from '../components/ProductDetailSkeleton';
import ProductInfo from '../components/ProductInfo';
import ProductMenu from '../components/ProductMenu';
import ProductReviews from '../components/ProductReviews';
import ProductThumbnail from '../components/ProductThumbnail';
import useProductDetail from '../hooks/useProductDetail';
import { useDispatch } from 'react-redux';
import { addToCart } from 'features/Cart/cartSlice';

DetailPage.propTypes = {};

function DetailPage(props) {
  const {
    params: { productId },
    url,
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);
  const dispatch = useDispatch();

  if (loading) {
    return (
      <Box>
        <LinearProgress sx={{ position: 'fixed', top: 0, left: 0, width: '100%' }} />
        <ProductDetailSkeleton />
      </Box>
    );
  }

  const handleAddToCartSubmit = ({ quantity }) => {
    const action = addToCart({
      id: product.id,
      product,
      quantity,
    });
    console.log(action);
    dispatch(action);
  };

  return (
    <Box sx={{ pb: 3 }}>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item sx={{ width: '400px', p: 1.2, borderRight: '1px solid #e0e0e0' }}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item sx={{ flex: '1 1 0', p: 1.2 }}>
              <ProductInfo product={product} />
              <AddToCartForm onSubmit={handleAddToCartSubmit} />
            </Grid>
          </Grid>
        </Paper>

        <ProductMenu />

        <Switch>
          <Route exact path={url}>
            <ProductDescription product={product} />
          </Route>

          <Route path={`${url}/additional`} component={ProductAdditional} />
          <Route path={`${url}/reviews`} component={ProductReviews} />
        </Switch>
      </Container>
    </Box>
  );
}

export default DetailPage;
