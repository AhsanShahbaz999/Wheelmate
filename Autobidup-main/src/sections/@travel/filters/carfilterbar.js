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
import Carfilteryear from './carfilteryear';
import Carfiltermileage from './carfiltervariant';
import Carfiltervariant from './carfiltervariant';

// ----------------------------------------------------------------------

const defaultValues = {
  filteryear: [],
  filterprice: [],
};

Carfilterbar.propTypes = {
  mobileOpen: PropTypes.bool,
  onMobileClose: PropTypes.func,
  onFilterClick: PropTypes.func,
};

export default function Carfilterbar({ mobileOpen, onMobileClose, onFilterClick }) {
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
  const handlechangeyear = (keyword) => {
    setFilters({
      ...filters,
      filteryear: keyword,
    });
  };

  const handleFilterClick = () => {
    console.log("Filters:", {
      search: filters.filtersearch,
      price: filters.filterprice,
      year: filters.filteryear
    });
    
    // Pass all filter values to parent
    onFilterClick(
      filters.filtersearch || '',
      filters.filterprice || [],
      filters.filteryear || []
    );
  };

  const renderFilters = (
    <Stack spacing={2.5}>
      <SearchInput filtersearch={filters.filtersearch} onchangesearch={handlechangesearch}/>

      <section>
        <Typography variant="h6" sx={{ mb: 1.5, color: 'text.dark', display: 'block' }}>
          Price
        </Typography>
        <Carfilterprice filterprice={filters.filterprice} onchangeprice={handlechangeprice} />
      </section>
      <section>
        <Typography variant="h6" sx={{ mb: 1.5, color: 'text.dark', display: 'block' }}>
          Year
        </Typography>
        <Carfilteryear filteryear={filters.filteryear} onchangeyear={handlechangeyear} />
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
      {/* -- Desktop -- */}
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

      {/* -- Mobile -- */}
      <Drawer
        anchor="left"
        open={mobileOpen}
        onClose={onMobileClose}
        ModalProps={{ keepMounted: true }}
        PaperProps={{
          sx: {
            pt: 5,
            px: 3,
            pb:5,
            width: DRAWER_WIDTH,
          },
        }}
      >
        {renderFilters}
      </Drawer>
    </>
  );
}
