import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Grid, Skeleton } from '@mui/material';

LeftMenuSkeleton.propTypes = {
  length: PropTypes.number,
};

LeftMenuSkeleton.defaultProps = {
  length: 2,
};

function LeftMenuSkeleton(props) {
  const { length } = props;

  return (
    <Box>
      <Grid container>
        {Array.from(new Array(length)).map((x, index) => (
          <Grid item key={index} xs={12} sm={12} md={12} lg={12}>
            <Box padding={1}>
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />
              <Skeleton />

              <Skeleton width="40%" />
            </Box>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
}

export default LeftMenuSkeleton;
