import { Container, Grid, Paper, Skeleton } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';

ProductDetailSkeleton.propTypes = {
  length: PropTypes.number,
};

ProductDetailSkeleton.defaultProps = {
  length: 6,
};

function ProductDetailSkeleton(props) {
  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item sx={{ width: '400px', p: 1.2, borderRight: '1px solid #e0e0e0' }}>
              <Skeleton variant="rect" width="100%" height={400} />
            </Grid>
            <Grid item sx={{ flex: '1 1 0', p: 1.2 }}>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton width="60%" />
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </Box>
  );
}

export default ProductDetailSkeleton;
