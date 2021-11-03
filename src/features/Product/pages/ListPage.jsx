import React, { useEffect } from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';
import productApi from 'api/productApi';

ListPage.propTypes = {};

function ListPage(props) {
  useEffect(() => {
    (async () => {
      const response = await productApi.getAll({ _page: 1, _limit: 10 });
      console.log(response);
    })();
  }, []);

  return (
    <Box>
      <Container>
        <Grid container spacing={1}>
          <Grid item sx={{ width: '250px' }}>
            <Paper elevation={0}>Left</Paper>
          </Grid>

          <Grid item sx={{ flex: '1 1 auto' }}>
            <Paper elevation={0}>Right</Paper>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}

export default ListPage;
