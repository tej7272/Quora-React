import React from 'react'
import { Avatar, Box, Button, Modal, Switch, Typography } from '@mui/material'
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { DarkMode } from '../../quora/Quora';
import { useContext } from 'react';

const buttonStyles = {
  fontWeight: '100',
  width: '100%',
  p: '5px 20px',
  justifyContent: 'flex-start',
  textAlign: 'left',
  textTransform: 'inherit',

}


const Setting = (props) => {

  const {open, setOpen} = props;

  const user = JSON.parse(sessionStorage.getItem('user'));
  const { darkMode, setDarkMode } = useContext(DarkMode);

  const toggleDarkMode = (e) => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };

  const navigate = useNavigate();

  const handleProfile = ()=>{
    navigate("/quora/spaces")
  }

  const handleLogout = (e) => {
    e.preventDefault();
    sessionStorage.removeItem('user');
    toast.success("User logout successfully");
    navigate("/login");

  }

  return (
    <Modal sx={{ '@media (max-width:480px)':{left:'20%',top:'100px'},'@media (min-width:480px)':{left:'60%',  top: '50px',} }} open={open} onClose={() => setOpen(false)}>
    <Box
      sx={{
        border: `1px solid ${darkMode ? '#484848' : '#d5d1d1'}`,
        borderRadius: '4px',
        backgroundColor: `${darkMode ? '#1d1b1b' : 'white'}`,
        width: '260px',
      }}>

      <Box sx={{ p: '20px', borderBottom: `1px solid ${darkMode ? '#484848' : '#d5d1d1'}`, mt: '10px' }}>
        <Avatar src={user?.name}
          alt={user?.name?.toUpperCase()} sx={{ width: '35px', height: '35px', color:'black' }}/>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '10px' }}>
          <Typography variant='h6' sx={{ fontWeight: '650', color: `${darkMode ? '#d5d1d1' : 'black'}`, }}>{user.name}</Typography>
          <KeyboardArrowRightIcon sx={{ color: `${darkMode ? '#d5d1d1' : 'black'}`, }} />
        </Box>
      </Box>

      <Box>
        <Box sx={{ borderBottom: `1px solid ${darkMode ? '#484848' : '#d5d1d1'}`, py: '10px' }}>
          <Box>
            <Button sx={{ ...buttonStyles, color: `${darkMode ? '#d5d1d1' : 'black'}`, ':hover': { backgroundColor: `${darkMode ? '' : '#f4f3f3'}` } }} onClick={toggleDarkMode}>
              {darkMode ? 'Light Mode' : 'Dark Mode'}
              <Switch sx={{ ml: '85px' }} checked={darkMode} readOnly />
            </Button>
            <Button sx={{ ...buttonStyles, color: `${darkMode ? '#d5d1d1' : 'black'}`, ':hover': { backgroundColor: `${darkMode ? '' : '#f4f3f3'}` } }} onClick={handleProfile}>Settings</Button>
            <Button sx={{ ...buttonStyles, color: `${darkMode ? '#d5d1d1' : 'black'}`, ':hover': { backgroundColor: `${darkMode ? '' : '#f4f3f3'}` } }} onClick={handleLogout} >Logout</Button>
          </Box>
        </Box>
      </Box>
    </Box>
    </Modal>
  )
}

export default Setting