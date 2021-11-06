import { Container, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import { useRouteMatch } from 'react-router';
import useProductDetail from '../components/hooks/useProductDetail';
import ProductDetailSkeleton from '../components/ProductDetailSkeleton';
import ProductThumbnail from '../components/ProductThumbnail';

DetailPage.propTypes = {};

function DetailPage(props) {
  const {
    params: { productId },
  } = useRouteMatch();

  const { product, loading } = useProductDetail(productId);

  if (loading) {
    return <ProductDetailSkeleton />;
  }

  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item sx={{ width: '400px', p: 1.2, borderRight: '1px solid #e0e0e0' }}>
              <ProductThumbnail product={product} />
            </Grid>
            <Grid item sx={{ flex: '1 1 0', p: 1.2 }}>
              Product Info
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default DetailPage;
