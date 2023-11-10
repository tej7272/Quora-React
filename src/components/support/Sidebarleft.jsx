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
      <Box >
        <Box
          sx={{
            ...boxStyles,
            backgroundColor: `${darkMode ? '#1c1c1c' : ' #ece9e9'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#222' : '#e3e1e1'}`,
              cursor: 'pointer'
            }
          }}
          onClick={() => setShowCreateSpace(true)}
        >
          <AddOutlinedIcon fontSize='10px' sx={{ mr: '5px', }} />
          <Typography variant="h6" fontSize='small'>Create Space</Typography>
        </Box>
        <Popup open={showCreateSpace} setOpen={setShowCreateSpace}>
          <CreateSpace setOpen={setShowCreateSpace}/>
        </Popup>
        <Link to="/quora/topic/sport" style={{ textDecoration: 'none',  color:`${darkMode?'#b8b4b4':'black'}` }}>
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
            <Typography variant='h6' fontSize='small'>Sports</Typography>
          </Box>
        </Link>


        <Link to="/quora/topic/technology" style={{ textDecoration: 'none', color:`${darkMode?'#b8b4b4':'black'}` }}>
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
            <Typography variant="h6" fontSize='small'>Technology</Typography>
          </Box>
        </Link>

        <Link to="/quora/topic/health" style={{ textDecoration: 'none', color:`${darkMode?'#b8b4b4':'black'}` }}>
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
            <Typography variant='h6' fontSize='small'>Health</Typography>
          </Box>
        </Link>

        <Link to="/quora/topic/business" style={{ textDecoration: 'none', color:`${darkMode?'#b8b4b4':'black'}` }}>
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
        </Link>

        <Link to="/quora/topic/entertainment" style={{ textDecoration: 'none', color:`${darkMode?'#b8b4b4':'black'}` }}>
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
            <Typography variant='h6' fontSize='small'>Entertainment</Typography>
          </Box>
        </Link>

        <Link to="/quora/topic/world" style={{ textDecoration: 'none', color:`${darkMode?'#b8b4b4':'black'}` }}>
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
            <Typography variant='h6' fontSize='small'>World</Typography>
          </Box>
        </Link>


        <Link to="/quora/topic/science" style={{ textDecoration: 'none', color:`${darkMode?'#b8b4b4':'black'}` }}>
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