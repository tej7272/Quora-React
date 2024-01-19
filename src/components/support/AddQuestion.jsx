import { Avatar, Box, Button, Card } from '@mui/material'
import CreateOutlinedIcon from '@mui/icons-material/CreateOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import LiveHelpOutlinedIcon from '@mui/icons-material/LiveHelpOutlined';
import React, { useContext, useState } from 'react'
import Popup from '../controls/Popup';
import SubmitPost from '../navbar/SubmitPost';
import { Link } from 'react-router-dom';
import { DarkMode } from '../../quora/Quora';

const buttonStyles = {
  textTransform: 'inherit',
  color: 'grey',
  borderRadius: '20px',

}

const verticalDividerStyles = {
  borderLeft: '1px solid #e6dada',
  display: 'inline',
  height: '30px',
  margin: '0 5px',
};


const AddQuestion = () => {

  const [openAddModal, setOpenAddModal] = useState(false);
  const { darkMode } = useContext(DarkMode);

  return (
    
      <Card
        sx={{
          p: 1,
          boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.2)',
          background: `${darkMode ? '#292929' : ''}`,
          color: `${darkMode ? '#b8b4b4' : ''}`
        }}>
        <Box sx={{ display: 'flex', alignItems: 'center', pl: 1, width:'100%' }}>
          <Avatar />
          <Box
            sx={{
              ml: '10px',
              display: 'block',
              p: 1,
              width: '100%',
              fontSize: '14px',
              borderRadius: '20px',
              border: `1px solid ${darkMode ? '#484848' : '#e6dada'}`,
              backgroundColor: `${darkMode ? '#1c1c1c' : 'whitesmoke'}`,
              color: '#908e8e',
              ':hover': {
                cursor: 'pointer',
                backgroundColor: `${darkMode ? '#161616' : '#f0eded'}`,
                transition: '0.7s'
              }
            }}
            onClick={() => setOpenAddModal(true)}
          >
            What do you want to ask or share?
          </Box>
        </Box>
        <Box sx={{ pt: 1, display: 'flex', justifyContent: 'space-evenly' }}>
          <Button sx={{ ...buttonStyles, backgroundColor: `${darkMode ? '' : '#ece9e9'}`, ':hover': { backgroundColor: `${darkMode ? '#3d3b3b' : '#ece9e9'}` } }} onClick={() => setOpenAddModal(true)}>
            <LiveHelpOutlinedIcon fontSize="small" />
            Ask
          </Button>
          <div style={verticalDividerStyles}></div>

          <Link to="/quora/answer">
            <Button sx={{ ...buttonStyles, backgroundColor: `${darkMode ? '' : '#ece9e9'}`, ':hover': { backgroundColor: `${darkMode ? '#3d3b3b' : '#ece9e9'}` } }} >
              <DrawOutlinedIcon fontSize="small" />
              Answer
            </Button>
          </Link>
          <div style={verticalDividerStyles}></div>
          <Button sx={{ ...buttonStyles, backgroundColor: `${darkMode ? '' : '#ece9e9'}`, ':hover': { backgroundColor: `${darkMode ? '#3d3b3b' : '#ece9e9'}` } }} onClick={() => setOpenAddModal(true)} >
            <CreateOutlinedIcon fontSize="small" />
            Post
          </Button>
        </Box>
        <Popup open={openAddModal} setOpen={setOpenAddModal}>
          <SubmitPost />
        </Popup>
      </Card>
  )
}

export default AddQuestion