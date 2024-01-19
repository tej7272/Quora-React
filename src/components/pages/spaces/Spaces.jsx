import { Box} from '@mui/material'
import React from 'react'
import CommingSoon from '../../../images/under-construction.jpg'


const Spaces = () => {
  return (
    <Box >
        <img className='comming-soon' src={CommingSoon} alt='Comming Soon' style={{height:'90vh', opacity:'0.7'}}/>
    </Box>
  )
}

export default Spaces