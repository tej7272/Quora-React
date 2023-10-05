import { Box, CardMedia, Typography, } from '@mui/material'
import React, { useContext } from 'react'
import { DarkMode } from '../../quora/Quora';
import Ads1 from '../adsImages/adver.png';
import Ads2 from '../adsImages/advertize.gif';


const Advertisingsection = () => {

  const { darkMode } = useContext(DarkMode);
  return (
    <Box sx={{
      width: '330px',
      borderRadius: '3px',
      height: '520px',
      border: `1px solid ${darkMode ? '#484848' : '#e6dada'}`,
      background: `${darkMode ? '#292929' : ''}`,
      display: {
        xs: 'none',
        sm: 'none',
        md: 'flex',
        lg: 'flex',
        xl: 'flex',
      },

    }}>
      <Box sx={{ display: 'flex', flexDirection: 'column' }}>
        <Box >
          <CardMedia
            component="img"
            image={Ads1}
            alt={Ads1}
            height="230px"
            sx={{ m: '10px 25px', width: '17rem' }}
          />
          <CardMedia
            component="img"
            image={Ads2}
            alt={Ads1}
            height="230px"
            sx={{ m: '10px 25px', width: '17rem' }}
          />
        </Box>
        <Box sx={{ display: 'flex', borderTop: `1px solid ${darkMode ? '#484848' : '#e6dada'}`, justifyContent: 'center', alignItems: 'center' }}>
          <Typography variant='subtitle2' color="gray" fontSize="small">Advertisement</Typography>
        </Box>
      </Box>
    </Box>
  )
}

export default Advertisingsection