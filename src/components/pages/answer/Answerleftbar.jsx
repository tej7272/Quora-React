import { Box, Typography } from '@mui/material'
import React from 'react'
import { useContext } from 'react';
import { Link } from 'react-router-dom'
import { DarkMode } from '../../../quora/Quora';

const boxStyles = {
  display: 'flex',
  alignItems: 'center',
  mb:'5px',
  p: '5px 10px',
  borderRadius: '5px',
  ':hover': {
    cursor: 'pointer',
  }
}

const linkStyles = {
  color: 'black',
  textDecoration: 'none',
  opacity: '0.6',
};


const Answerleftbar = () => {

  const { darkMode } = useContext(DarkMode);

  return (
    <Box

      sx={{
        width: '150.5px',
        mt: '10px',
        px: 1,
        height: '100vh',
        display: {
          xs: 'none',
          sm: 'flex',
          md: 'flex',
          lg: 'flex',
          xl: 'flex',
        }
      }}
    >
      <Box sx={{width:'100%' }}>
        <Box sx={{
          px: '10px',
          width:'100%'

        }}>
          <Typography variant='h6' fontSize='15px' sx={{ fontWeight: '150', opacity: '0.9' }}>Questions</Typography>
        </Box>

        <hr style={{ border: `1px solid ${darkMode ? '#444' : '#dbcaca'}` }} />

        <Link to="/quora/answer" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            },
          }}>
            <Typography variant='h6' fontSize='small' >Questions for you</Typography>
          </Box>
        </Link>

        <Link to="/quora/answer/requests" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            }
          }}>
            <Typography variant="h6" fontSize='small'>Answer requests</Typography>
          </Box>
        </Link>

        <Link to="/quora/drafts" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            }
          }}>
            <Typography variant='h6' fontSize='small'>Drafts</Typography>
          </Box>
        </Link>

      </Box>
    </Box>
  )
}

export default Answerleftbar