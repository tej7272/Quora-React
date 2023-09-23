import { Box, Button, Typography } from '@mui/material'
import React, { useContext } from 'react'
import { useNavigate } from 'react-router-dom'
import { DarkMode } from '../../../quora/Quora';

const Drafts = () => {
    const navigate = useNavigate();
    const handleClick =()=>{
        navigate('/quora/answer');
    }

    const{darkMode} = useContext(DarkMode);
  return (
    <Box
    sx={{
      px: 1,
      '@media (min-width: 500px)': {
        mx:'10px',
        width:'500px'
      },
      '@media (min-width: 600px)': {
        ml:'26px',
        width:'555px'
      },
      '@media (min-width: 900px)': {
        mx:'26px',
        width:'610px'
      },

    }}>
      
      <Box sx={{textAlign:'center', p:'180px 10px', backgroundColor:`${darkMode?'#292929':''}`, borderRadius:'5px'}}>
      <img src='https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.dormant_lightmode.png-26-c4532c98034818a0.png' style={{width:'100px'}} alt=" "/>
      <Typography variant='h6' fontSize='19px' sx={{fontWeight:'600', opacity:'0.7'}}>No answer drafts</Typography>
      <Typography variant='h6' fontSize='15px' sx={{fontWeight:'100' , opacity:'0.7',my:'5px'}}>Start writing answers by finding questions to answer in Questions for You.</Typography>
      <Button sx={{
              color: 'white',
              textTransform: 'inherit',
              borderRadius: '20px',
              fontSize: '14px',
              width:'85%',
              backgroundColor:'#2e69ff',
              ':hover': {
                backgroundColor:'#2e69ff',
              }
            }}
             onClick={handleClick}>See questions for you</Button>

      </Box>
  </Box>
  )
}

export default Drafts