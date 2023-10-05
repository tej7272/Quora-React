import React, { useContext } from 'react'
import { Box, CardMedia, Typography } from '@mui/material'
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import History from '../../images/history.jpg'
import Psychology from '../../images/psychology.jpg'
import Books from '../../images/books.jpg'
import Business from '../../images/business.jpg';
import Movies from '../../images/movies.jpg';
import Music from '../../images/music.jpg';
import Science from '../../images/science.jpg'
import { useState } from 'react';
import Popup from '../controls/Popup';
import CreateSpace from '../pages/spaces/CreateSpace';
import { DarkMode } from '../../quora/Quora';
import { Link } from 'react-router-dom';

const boxStyles = {
  display: 'flex',
  mb: 1,
  p: '10px',
  borderRadius: '5px',
}

const CardMediaStyles = {
  width: '20px',
  borderRadius: '5px',
  mr: '5px',
  height: '20px'
}

const Sidebarleft = () => {

  const [showCreateSpace, setShowCreateSpace] = useState(false)
  const { darkMode } = useContext(DarkMode);

  return (

    <Box

      sx={{
        width: '123.5px',
        display: {
          xs: 'none',
          sm: 'flex',
          md: 'flex',
          lg: 'flex',
          xl: 'flex',
        }
      }}
    >
      <Box
        sx={{
          position: 'fixed',
        }}
      >
        <Box
          sx={{
            ...boxStyles,
            backgroundColor: `${darkMode ? '#1c1c1c' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#222' : '#ece9e9'}`,
              cursor: 'pointer'
            }
          }}
          onClick={() => setShowCreateSpace(true)}
        >
          <AddOutlinedIcon fontSize='10px' sx={{ mr: '5px', }} />
          <Typography variant="h6" fontSize='small'>Create Space</Typography>
        </Box>
        <Popup open={showCreateSpace} setOpen={setShowCreateSpace}>
          <CreateSpace />
        </Popup>
        <Box sx={{
          ...boxStyles,
          ':hover': {
            backgroundColor: `${darkMode ? '#222' : '#ece9e9'}`,
            cursor: 'pointer'
          }
        }}>
          <CardMedia
            component="img"
            image={History}
            alt="history"
            sx={CardMediaStyles}
          />
          <Typography variant='h6' fontSize='small'>History</Typography>
        </Box>
        <Box sx={{
          ...boxStyles,
          ':hover': {
            backgroundColor: `${darkMode ? '#222' : '#ece9e9'}`,
            cursor: 'pointer'
          }
        }}>
          <CardMedia
            component="img"
            image={Psychology}
            alt="Psychology"
            sx={CardMediaStyles}
          />
          <Typography variant="h6" fontSize='12px'>Psychology</Typography>
        </Box>

        <Box sx={{
          ...boxStyles,
          ':hover': {
            backgroundColor: `${darkMode ? '#222' : '#ece9e9'}`,
            cursor: 'pointer'
          }
        }}>
          <CardMedia
            component="img"
            image={Books}
            alt="Books"
            sx={CardMediaStyles}
          />
          <Typography variant='h6' fontSize='small'>Books</Typography>
        </Box>

        <Box sx={{
          ...boxStyles,
          ':hover': {
            backgroundColor: `${darkMode ? '#222' : '#ece9e9'}`,
            cursor: 'pointer'
          }
        }}>
          <CardMedia
            component="img"
            image={Business}
            alt="Business"
            sx={CardMediaStyles}
          />
          <Typography variant='h6' fontSize='small'>Business</Typography>
        </Box>

        <Box sx={{
          ...boxStyles,
          ':hover': {
            backgroundColor: `${darkMode ? '#222' : '#ece9e9'}`,
            cursor: 'pointer'
          }
        }}>
          <CardMedia
            component="img"
            image={Movies}
            alt="Movies"
            sx={CardMediaStyles}
          />
          <Typography variant='h6' fontSize='small'>Movies</Typography>
        </Box>

        <Box sx={{
          ...boxStyles,
          ':hover': {
            backgroundColor: `${darkMode ? '#222' : '#ece9e9'}`,
            cursor: 'pointer'
          }
        }}>
          <CardMedia
            component="img"
            image={Music}
            alt="Music"
            sx={CardMediaStyles}
          />
          <Typography variant='h6' fontSize='small'>Music</Typography>
        </Box>

        <Link to="/quora/topic/science">
        <Box sx={{
          ...boxStyles,
          ':hover': {
            backgroundColor: `${darkMode ? '#222' : '#ece9e9'}`,
            cursor: 'pointer'
          }
        }}>
          <CardMedia
            component="img"
            image={Science}
            alt="history"
            sx={CardMediaStyles}
          />
          <Typography variant='h6' fontSize='small'>Science</Typography>
        </Box>
          </Link>

      </Box>
    </Box>

  )
}

export default Sidebarleft