import { Typography } from '@mui/material';
import { Box } from '@mui/system';
import PropTypes from 'prop-types';
import React from 'react';
import { formatPrice } from 'utils';

ProductInfo.propTypes = {
  product: PropTypes.object,
};

function ProductInfo({ product = {} }) {
  const { name, shortDescription, salePrice, originalPrice, promotionPercent } = product;

  return (
    <Box sx={{ pb: 2, borderBottom: '1px solid #eeeeee' }}>
      <Typography component="h1" variant="h4" sx={{ ml: 1 }}>
        {name}
      </Typography>
      <Typography variant="body2" sx={{ m: 2 }}>
        {shortDescription}
      </Typography>

      <Box sx={{ p: 2, bgcolor: '#f5f5f5' }}>
        <Typography component="div">
          <Box component="span" sx={{ fontSize: 34, fontWeight: 'bold', mr: 3 }}>
            {formatPrice(salePrice)}
          </Box>

          {promotionPercent > 0 && (
            <>
              <Box component="span" sx={{ mr: 2, textDecoration: 'line-through' }}>
                {formatPrice(originalPrice)}
              </Box>
              <Box component="span">{`-${promotionPercent}%`}</Box>
            </>
          )}
        </Typography>
      </Box>
    </Box>
  );
}

export default ProductInfo;
