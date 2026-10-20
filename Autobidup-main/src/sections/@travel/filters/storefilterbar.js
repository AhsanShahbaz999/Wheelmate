import PropTypes from 'prop-types';
import { useState } from 'react';
// @mui
import filterIcon from '@iconify/icons-carbon/filter';
import { Iconify } from '../../../components';

import { Stack, Drawer, Box, Typography ,Button} from '@mui/material';
// config
import { DRAWER_WIDTH, HEADER_DESKTOP_HEIGHT } from '../../../config';
//
import { SearchInput } from '../../../components';
import Carfiltermake from './carfiltermake';
import Carfilterprice from './carfilterprice';


// ----------------------------------------------------------------------

const defaultValues = {
  filterprice: [],
};

Storefilterbar.propTypes = {
  mobileOpen: PropTypes.bool,
  onMobileClose: PropTypes.func,
  onFilterClick: PropTypes.func,
};

export default function Storefilterbar({ mobileOpen, onMobileClose,onFilterClick }) {
  const [filters, setFilters] = useState(defaultValues);

  const handlechangesearch = (keyword) => {
    setFilters({
      ...filters,
      filtersearch: keyword,
    });
  };

  const handlechangeprice = (keyword) => {
    setFilters({
      ...filters,
      filterprice: keyword,
    });
  };
  const handleFilterClick = () => {
    console.log("filtersearch", filters.filtersearch, filters.filterprice)
    onFilterClick(filters.filtersearch, filters.filterprice); // Pass the search value to the parent component
  };

  const renderFilters = (
    <Stack spacing={2.5} paddingTop="50px">
      <section>
        <Typography variant="overline" sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Item Name
        </Typography>
        {/* <Carfiltermake filtermake={filters.filtermake} onchangemake={handlechangemake} /> */}
        <SearchInput filtersearch={filters.filtersearch} onchangesearch={handlechangesearch}/>
      </section>
      <section>
        <Typography variant="overline" sx={{ mb: 1.5, color: 'text.secondary', display: 'block' }}>
          Price
        </Typography>
        <Carfilterprice filterprice={filters.filterprice} onchangeprice={handlechangeprice} />
      </section>
      <Button
        color="inherit"
        variant="contained"
        onClick={handleFilterClick}
      >
        Filters
      </Button>
    </Stack>
  );

  return (
    <>
      <Box
        sx={{
          width: DRAWER_WIDTH,
          flexShrink: 0,
          display: {
            xs: 'none',
            md: 'block',
          },
          top: { md: HEADER_DESKTOP_HEIGHT },
          position: { md: 'sticky' },
        }}
      >
        {renderFilters}
      </Box>
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            pt: 5,
            px: 3,
            width: DRAWER_WIDTH,
          },
        }}
      >
        {renderFilters}
      </Drawer>
    </>
  );
}
