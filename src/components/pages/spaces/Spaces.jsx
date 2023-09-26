import { Box} from '@mui/material'
import React from 'react'
import CommingSoon from '../../../images/under-construction.jpg'


const Spaces = () => {
  return (
    <Box >
        <img src={CommingSoon} alt='Comming Soon' style={{height:'90vh', width:'72vw'}}/>
    </Box>
  )
}

export default Spaces