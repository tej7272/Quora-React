import { Box, Typography } from '@mui/material'
import React from 'react'

const Spaces = () => {
  return (
    <Box >
      <Typography variant="h2" 
      sx={{
        '@media (min-width: 300px)': {
          m:'150px 40px',
        },
        '@media (min-width: 600px)': {
          m:'150px 150px',
        },
        '@media (min-width: 900px)': {
          m:'150px 330px',
        },
        }}
        >Comming Soon</Typography>
    </Box>
  )
}

export default Spaces