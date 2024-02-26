import React from 'react'
import styled from '@emotion/styled';
import { Slider } from '@mui/material';
import Box from '@mui/material/Box';
// import { useState } from 'react';

const Range = ({drawWidth, setDrawWidth}) => {

  // const [drawWidth, setDrawWidth] = useState(5);

    const PrettoSlider = styled(Slider)({
        color: '#7340E0',
        height: 8,
        '& .MuiSlider-track': {
          border: 'none',
        },
        '& .MuiSlider-thumb': {
          height: 24,
          width: 24,
          backgroundColor: '#fff',
          border: '2px solid currentColor',
          '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
          },
          '&::before': {
            display: 'none',
          },
        },
        '& .MuiSlider-valueLabel': {
          lineHeight: 1.2,
          fontSize: 12,
          background: 'unset',
          padding: 0,
          width: 32,
          height: 32,
          borderRadius: '50% 50% 50% 0',
          backgroundColor: '#7340E0',
          transformOrigin: 'bottom left',
          transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
          '&::before': { display: 'none' },
          '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
          },
          '& > *': {
            transform: 'rotate(45deg)',
          },
        },
      });

      function handleChange(e) {
        setDrawWidth(e.target.value);
        // console.log(e.target.value);
      }

  return (
    <div>
       <PrettoSlider
        valueLabelDisplay="auto"
        aria-label="slider"
        defaultValue={drawWidth}
        onChange={handleChange}
        step={9} marks min={1} max={100}
      />
       <Box sx={{ m: 15 }} />
    </div>
  )
}

export default Range
