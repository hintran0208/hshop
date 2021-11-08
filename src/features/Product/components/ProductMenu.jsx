import { Link } from '@mui/material';
import { grey } from '@mui/material/colors';
import { Box } from '@mui/system';
import React from 'react';
import { NavLink, useRouteMatch } from 'react-router-dom';

ProductMenu.propTypes = {};

function ProductMenu(props) {
  const { url } = useRouteMatch();

  return (
    <Box
      component="ul"
      sx={{
        display: 'flex',
        flexFlow: 'row nowrap',
        justifyContent: 'center',
        alignItems: 'center',
        p: 0,
        listStyleType: 'none',

        '& > li': {
          py: 2,
          px: 4,
        },

        '& > li > a': {
          color: grey[700],
          textDecoration: 'none',
        },

        '& > li > a.active': {
          color: '#1976d2',
          textDecoration: 'underline',
        },
      }}
    >
      <li>
        <Link component={NavLink} to={url} exact>
          Description
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/additional`} exact>
          Additional Information
        </Link>
      </li>

      <li>
        <Link component={NavLink} to={`${url}/reviews`} exact>
          Reviews
        </Link>
      </li>
    </Box>
  );
}

export default ProductMenu;
