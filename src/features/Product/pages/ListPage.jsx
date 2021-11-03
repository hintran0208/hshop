import React from 'react';
import PropTypes from 'prop-types';
import { Box } from '@mui/system';
import { Container, Grid, Paper } from '@mui/material';

ListPage.propTypes = {};

function ListPage(props) {
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
