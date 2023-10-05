import React from 'react'
import { Box, Typography } from '@mui/material'
import { useParams } from 'react-router-dom';
import { useContext } from 'react';
import { DarkMode } from '../../../quora/Quora';


const Notifications = () => {

  const {darkMode} = useContext(DarkMode);
  const { type } = useParams();

  let content;
  switch (type) {
    case 'all':
      content = (
        <>
          Notifications
        </>
      );
      break;
    case 'stories':
      content = (
        <>
          Stories
        </>
      );
      break;
      case 'write':
      content = (
        <>
          Questions
        </>
      );
      break;
      case 'spaces':
      content = (
        <>
          Spaces
        </>
      );
      break;
      case 'subscriptions':
      content = (
        <>
          People updates
        </>
      );
      break;
      case 'direct':
      content = (
        <>
          Comments and mentions
        </>
      );
      break;
      case 'upvotes':
      content = (
        <>
          Upvotes
        </>
      );
      break;
      case 'your_content':
      content = (
        <>
          Your content
        </>
      );
      break;
      case 'profile':
      content = (
        <>
          Your profile
        </>
      );
      break;
      case 'announcements':
      content = (
        <>
          Announcements
        </>
      );
      break;
      case 'earnings':
      content = (
        <>
          Earnings
        </>
      );
      break;
      case 'memberships':
      content = (
        <>
          Subscriptions
        </>
      );
      break;
    // Add cases for other notification types
    default:
      content = (
        <>
          Notifications
        </>
      );
      break;
  }
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
      <Typography variant='h6' fontSize='15px' sx={{fontWeight:'150', opacity:'0.9'}}>{content}</Typography>
      <hr style={{border: `1px solid ${darkMode ? '#444' : '#dbcaca'}` }}/>
      <Box sx={{textAlign:'center', py:'40px'}}>
      <img src="https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.empty_states.no_notification_lightmode.png-26-9e0ef76620dd73d3.png" alt='notification' style={{width:'100px'}} />
      <Typography variant='h4' sx={{fontWeight:'600', opacity:'0.7'}}>Comming Soon</Typography>


      </Box>
  </Box>
  )
}

export default Notifications