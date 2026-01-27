import React from 'react'
import {
  Box,
  TextField,
  MenuItem,
  Select,
  Checkbox,
  FormControlLabel,
} from '@mui/material'

export const FilterBar = ({
  minPrice,
  maxPrice,
  sort,
  isDiscounted,
  onPriceChange,
  onSortChange,
  onDiscountChange,
  showDiscount = true,
}) => {
  // Стили для инпутов (Inputs + Select)
  const inputStyles = {
    bgcolor: '#fff',
    '& .MuiOutlinedInput-root': {
      borderRadius: '8px',
    },
    // Текст ВНУТРИ полей (цифры и выбор)
    '& .MuiInputBase-input': {
      fontFamily: "'Montserrat', sans-serif",
      fontSize: '16px',
      fontWeight: 500,
      color: '#282828',
    },

    '& input[type=number]': {
      MozAppearance: 'textfield',
    },
    '& input[type=number]::-webkit-outer-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
    '& input[type=number]::-webkit-inner-spin-button': {
      WebkitAppearance: 'none',
      margin: 0,
    },
  }

  // Общий стиль для заголовков
  const labelStyle = {
    fontFamily: "'Montserrat', sans-serif",
    fontWeight: 600,
    fontSize: '20px',
    color: '#282828',
  }

  return (
    <Box
      sx={{
        display: 'flex',
        gap: '40px',
        alignItems: 'center',
        marginBottom: '40px',
        flexWrap: 'wrap',
      }}
    >
      {/* --- 1. PRICE --- */}
      <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Box component='span' sx={labelStyle}>
          Price
        </Box>

        <TextField
          placeholder='from'
          type='number'
          size='small'
          value={minPrice}
          onChange={e => onPriceChange('min', e.target.value)}
          sx={{ ...inputStyles, width: '95px' }}
        />

        <TextField
          placeholder='to'
          type='number'
          size='small'
          value={maxPrice}
          onChange={e => onPriceChange('max', e.target.value)}
          sx={{ ...inputStyles, width: '95px' }}
        />
      </Box>

      {/* --- 2. DISCOUNT CHECKBOX --- */}
      {showDiscount && (
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <FormControlLabel
            control={
              <Checkbox
                checked={isDiscounted}
                onChange={e => onDiscountChange(e.target.checked)}
                sx={{
                  color: '#282828',
                  '&.Mui-checked': {
                    color: '#0d50ff',
                  },
                  '& .MuiSvgIcon-root': {
                    fontSize: 28,
                    borderRadius: '6px',
                  },
                }}
              />
            }
            label={<span style={labelStyle}>Discounted items</span>}
            labelPlacement='start'
            sx={{ margin: 0, gap: '16px' }}
          />
        </Box>
      )}

      {/* --- 3. SORT --- */}
      <Box sx={{ display: 'flex', gap: '16px', alignItems: 'center' }}>
        <Box component='span' sx={labelStyle}>
          Sorted
        </Box>

        <Select
          value={sort}
          onChange={e => onSortChange(e.target.value)}
          displayEmpty
          size='small'
          sx={{ ...inputStyles, minWidth: '200px' }}
        >
          <MenuItem value='default'>by default</MenuItem>
          <MenuItem value='newest'>newest</MenuItem>
          <MenuItem value='price-high-low'>price: high-low</MenuItem>
          <MenuItem value='price-low-high'>price: low-high</MenuItem>
        </Select>
      </Box>
    </Box>
  )
}
