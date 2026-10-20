import PropTypes from 'prop-types';
import parse from 'autosuggest-highlight/parse';
import match from 'autosuggest-highlight/match';
// @mui
import { styled } from '@mui/material/styles';
import { Box, Autocomplete, Checkbox, TextField, Chip } from '@mui/material';
// _data
import _mock from '../../../../_data/mock';

// ----------------------------------------------------------------------

const RootStyle = styled('div')(() => ({
  '& .MuiAutocomplete-root': {
    '& .MuiFilledInput-root': {
      minHeight: 56,
      padding: '12px',
    },
  },
}));

// ----------------------------------------------------------------------
const year=[
    {
        label:"1940 to 1949"        
    },
    {
        label:"1950 to 1959"        
    },
    {
        label:"1960 to 1969"        
    },
    {
        label:"1970 to 1979"        
    },
    {
        label:"1980 to 1989"        
    },
    {
        label:"1990 to 1999"
    },
    {
        label:"2000 to 2009"
    },
    {
        label:"2010 to 2019"
    },
    {
        label:"2020 to 2023"
    },
]

Carfilteryear.propTypes = {
  filteryear: PropTypes.array,
  onchangeyear: PropTypes.func,
};

export default function Carfilteryear({ filteryear, onchangeyear}) {
  return (
    <RootStyle>
      <Autocomplete
        multiple
        limitTags={1}
        disableCloseOnSelect
        options={year}
        getOptionLabel={(option) => option.label}
        value={filteryear}
        onChange={(event, value) => onchangeyear(value)}
        renderInput={(params) => (
          <TextField
            {...params}
            variant="filled"
            placeholder="Choose Year"
            InputProps={{
              ...params.InputProps,
              autoComplete: 'search',
            }}
          />
        )}
        renderTags={(value, getTagProps) =>
          value.map((option, index) => (
            <Chip
              {...getTagProps({ index })}
              key={option.label}
              label={option.label}
              size="small"
              sx={{
                bgcolor: 'text.primary',
                color: (theme) => (theme.palette.mode === 'light' ? 'common.white' : 'grey.800'),
                '& .MuiChip-deleteIcon': {
                  opacity: 0.48,
                  color: 'currentColor',
                  '&:hover': {
                    opacity: 0.72,
                    color: 'currentColor',
                  },
                },
              }}
            />
          ))
        }
        renderOption={(props, option, { inputValue, selected }) => {
          const matches = match(option.label, inputValue);
          const parts = parse(option.label, matches);
          return (
            <Box component="li" sx={{ my: 1, p: '0 !important' }} {...props}>
              <Checkbox size="small" checked={selected} />

              {parts.map((part, index) => (
                <Box
                  key={index}
                  component="span"
                  sx={{
                    ...(part.highlight && {
                      fontWeight: 'fontWeightBold',
                    }),
                  }}
                >
                  {part.text}
                </Box>
              ))}
            </Box>
          );
        }}
      />
    </RootStyle>
  );
}
