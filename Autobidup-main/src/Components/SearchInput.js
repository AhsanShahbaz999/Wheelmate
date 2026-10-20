import PropTypes from 'prop-types';
import searchIcon from '@iconify/icons-carbon/search';
import React, { useRef, useEffect, useState } from 'react';

// @mui
import { InputAdornment, FilledInput } from '@mui/material';
//
import Iconify from './Iconify';

// ----------------------------------------------------------------------

SearchInput.propTypes = {
  sx: PropTypes.object,
  filtersearch: PropTypes.array,
  onchangesearch: PropTypes.func,
  // setSearchValue: PropTypes.string,
  // onFilterClick: PropTypes.func,
};

export default function SearchInput({ sx, filtersearch, onchangesearch }) {
  const [data, setData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(`https://autobidup.pythonanywhere.com/cars/search/?search=${filtersearch}`);
        const jsonData = await response.json();
        console.log(jsonData)  
        setData(jsonData);
        console.log("created");
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);
  const handleInputChange = (event) => {
    const value = event.target.value;
    onchangesearch(value);
    // setSearchValue(value);
  };

  return (
    <div>
    {/* {data.map((item) => ( */}
    <FilledInput
      fullWidth
      startAdornment={
        <InputAdornment position="start">
        <Iconify icon={searchIcon} sx={{ width: 24, height: 24, color: 'text.disabled' }} />
        </InputAdornment>
      }
      placeholder="Search..."  
      value={filtersearch}
      onChange={handleInputChange}
      sx={{
        '& .MuiFilledInput-input': { py: '18px' },
        ...sx,
      }}  
      // {...filtersearch}    
    />
      {/* ))} */}
    </div>
  );
}
