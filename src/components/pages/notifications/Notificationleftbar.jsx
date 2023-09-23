import { Box, Typography } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'
import { DarkMode } from '../../../quora/Quora';
import { useContext } from 'react';


const linkStyles = {
  color: 'black',
  textDecoration: 'none',
  opacity: '0.6'
};

const boxStyles = {
  display: 'flex',
  alignItems: 'center',
  mb:'5px',
  p: '5px 10px',
  borderRadius: '5px',
  ':hover': {
    cursor: 'pointer',
  },
}
const Notificationleftbar = () => {
  const { darkMode } = useContext(DarkMode);
  return (
    <Box

      sx={{
        width: '123.5px',
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
      <Box>

        <Box>
          <Typography variant='h6' fontSize='15px' sx={{ fontWeight: '150', opacity: '0.9', ml: '10px' }}>Filters</Typography>
        </Box>

        <hr style={{ border: `1px solid ${darkMode ? '#444' : '#dbcaca'}` }} />

        <Link to="/quora/notifications/all" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            }
          }} >
            <Typography variant='h6' fontSize='small'>All Notifications</Typography>
          </Box>
        </Link>

        <Link to="/quora/notifications/stories" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            }
          }}>
            <Typography variant="h6" fontSize='small'>Stories</Typography>
          </Box>
        </Link>

        <Link to="/quora/notifications/write" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            }
          }}>
            <Typography variant='h6' fontSize='small'>Questions</Typography>
          </Box>
        </Link>

        <Link to="/quora/notifications/spaces" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            }
          }}>
            <Typography variant='h6' fontSize='small'>Spaces</Typography>
          </Box>
        </Link>

        <Link to="/quora/notifications/subscriptions" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            }
          }}>
            <Typography variant='h6' fontSize='small'>People updates</Typography>
          </Box>
        </Link>

        <Link to="/quora/notifications/direct" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            }
          }}>
            <Typography variant='h6' fontSize='small'>Comments and mentions</Typography>
          </Box>
        </Link>

        <Link to="/quora/notifications/upvotes" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            }
          }}>
            <Typography variant='h6' fontSize='small'>Upvotes</Typography>
          </Box>
        </Link>

        <Link to="/quora/notifications/your_content" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            }
          }}>
            <Typography variant='h6' fontSize='small'>Your content</Typography>
          </Box>
        </Link>

        <Link to="/quora/notifications/profile" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            }
          }}>
            <Typography variant='h6' fontSize='small'>Your profile</Typography>
          </Box>
        </Link>

        <Link to="/quora/notifications/announcements" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            }
          }}>
            <Typography variant='h6' fontSize='small'>Announcements</Typography>
          </Box>
        </Link>

        <Link to="/quora/notifications/earnings" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            }
          }}>
            <Typography variant='h6' fontSize='small'>Earnings</Typography>
          </Box>
        </Link>

        <Link to="/quora/notifications/memberships" style={linkStyles}>
          <Box sx={{
            ...boxStyles,
            color: `${darkMode ? '#fbf8f8' : ''}`,
            backgroundColor: `${darkMode ? '#222' : '#d2d0d0'}`,
            ':hover': {
              backgroundColor: `${darkMode ? '#323131' : '#ece9e9'}`,
            }
          }}>
            <Typography variant='h6' fontSize='small'>Subscriptions</Typography>
          </Box>
        </Link>

      </Box>
    </Box>
  )
}

export default Notificationleftbar