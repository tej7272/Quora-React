import { Box } from '@mui/material'
import React from 'react'

const RightBar = () => {
    return (
        <Box sx={{
            width: '356px', mt: '10px',
            display: {
                xs: 'none',
                sm: 'none',
                md: 'flex',
                lg: 'flex',
                xl: 'flex',
              },
        }}></Box>
    )
}

export default RightBar