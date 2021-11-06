import { Container, Grid, Paper } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';

DetailPage.propTypes = {};

function DetailPage(props) {
  return (
    <Box>
      <Container>
        <Paper elevation={0}>
          <Grid container>
            <Grid item sx={{ width: '400px', p: 1.2, borderRight: '1px solid #e0e0e0' }}>
              Thumbnail
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
