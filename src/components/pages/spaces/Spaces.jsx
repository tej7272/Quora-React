import { Box} from '@mui/material'
import React from 'react'
import CommingSoon from '../../../images/under-construction.jpg'


const Spaces = () => {
  return (
    <Box >
        <img src={CommingSoon} alt='Comming Soon' style={{height:'90vh', width:'72vw', opacity:'0.7'}}/>
    </Box>
  )
}

export default Spaces