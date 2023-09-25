import React, { useState } from 'react';
import { Box, IconButton, Avatar, Button, ButtonGroup, Tooltip, CardMedia, InputBase, Modal, } from '@mui/material';
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import ListAltOutlinedIcon from '@mui/icons-material/ListAltOutlined';
import GroupsOutlinedIcon from '@mui/icons-material/GroupsOutlined';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import NotificationsOutlinedIcon from '@mui/icons-material/NotificationsOutlined';
import SearchIcon from '@mui/icons-material/Search';
import LanguageOutlinedIcon from '@mui/icons-material/LanguageOutlined';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Quoralogo from '../../images/Quora_Logo.png'
import { Link } from 'react-router-dom';
import Setting from './Setting';
import SubmitPost from './SubmitPost';
import Popup from '../controls/Popup'
import '../../App.css'
import { useContext } from 'react';
import { DarkMode, SearchContext } from '../../quora/Quora';



const buttonStyles = {
  color: 'white',
  border: 'none',
  textTransform: 'none',
  borderRadius: '25px',
  fontSize: '14px',
  height: '32px',
  outline: 'none'
}


function Navbar() {

  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);

  const { darkMode } = useContext(DarkMode);

  const handleSettingModal = () => {
    if (openSettingModal === true) {
      setOpenSettingModal(false);
    }
    else {
      setOpenSettingModal(true)
    }
  }

  return (

    <Box position="fixed" sx={{ boxShadow: '0', border: `1px solid ${darkMode ? '#292929' : '#d7d5d5'}`, width: '100%', zIndex: '3000' }}  >
      <Box sx={{ backgroundColor: `${darkMode ? '#292929' : 'white'}`, py: '0.18rem', }}>
        <Box
          sx={{
            display: 'flex',
            color: 'black',
            justifyContent: 'center',
            alignItems: 'center',
            width: '1110px',
            mx: 'auto'
          }}>
          <Link to="/quora/">
            <CardMedia
              component="img"
              image={Quoralogo}
              alt="QuoraLogo"
              height='25px'
              sx={{
                width: 'auto',
                objectFit: 'cover',
                mr: '20px',
                ':hover': {
                  opacity: '0.6',
                  transition: '0.4s'
                }
              }}
            />
          </Link>
          <Link to="/quora/">
            <Tooltip title="Home">
              <Button sx={{
                ':focus': {
                  backgroundColor: '#c94747'
                }
              }}>
                <HomeOutlinedIcon sx={{ color: `${darkMode ? '#bebcbc' : '#595959'}`, fontSize: "1.975rem", }} />
              </Button>
            </Tooltip>
          </Link>
          <Link to="/quora/following">
            <Tooltip title="Following">
              <Button sx={{
                ':focus': {
                  backgroundColor: '#c94747'
                }
              }}>
                <ListAltOutlinedIcon sx={{ color: `${darkMode ? '#bebcbc' : '#595959'}`, fontSize: "1.975rem", }} />
              </Button>
            </Tooltip>
          </Link>
          <Link to="/quora/answer">
            <Tooltip title="Answer" >
              <Button sx={{
                ':focus': {
                  backgroundColor: '#c94747'
                }
              }}>
                <DrawOutlinedIcon sx={{ color: `${darkMode ? '#bebcbc' : '#595959'}`, fontSize: "1.975rem", }} />
              </Button>
            </Tooltip>
          </Link>
          <Link to="/quora/spaces">
            <Tooltip title="Spaces">
              <Button sx={{
                ':focus': {
                  backgroundColor: '#c94747'
                }
              }}>
                <GroupsOutlinedIcon sx={{ color: `${darkMode ? '#bebcbc' : '#595959'}`, fontSize: "1.975rem", }} />
              </Button>
            </Tooltip>
          </Link>
          <Link to="/quora/notifications/:all">
            <Tooltip title="Notifications">
              <Button sx={{
                ':focus': {
                  backgroundColor: '#c94747'
                }
              }}>
                <NotificationsOutlinedIcon sx={{ color: `${darkMode ? '#bebcbc' : '#595959'}`, fontSize: "1.975rem", }} />
              </Button>
            </Tooltip>
          </Link>
          <Box
            sx={{
              display: 'flex',
              alignItems: 'center',
              border: `1px solid ${darkMode ? '#444' : '#dbcaca'}`,
              borderRadius: '4px',
              px: '5px',
              height: '35px',
            }}>

            <SearchIcon sx={{ color: 'grey', mr: '5px' }} fontSize="small" />
            <InputBase
              placeholder="Search…"
              sx={{ fontSize: '15px', width: '240px', color: `${darkMode ? 'rgba(253, 251, 251, 0.87)' : ''}`, flexGrow: 1 }}
              type='text'
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </Box>
          <Button
            sx={{
              color: 'grey',
              mx: '10px',
              textTransform: 'none',
              borderRadius: '20px',
              fontSize: '13px',
              whiteSpace: 'nowrap',
              overflow: 'hidden',
              textOverflow: 'ellipsis',
              height: '32px',
              border: `1px solid ${darkMode ? '#444' : '#dbcaca'}`,
              ':hover': {
                outline: 'none'
              },
              display: { xs: 'none', sm: 'none', md: 'inline-block' }
            }}
          >
            Try Quora+
          </Button>

          <Tooltip title="Open settings">
            <IconButton onClick={handleSettingModal} sx={{ p: 0, }}>
              <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" sx={{ width: '30px', height: '30px' }} />
            </IconButton>
          </Tooltip>
          {/* {openSettingModal && <Setting />} */}
          <Modal open={openSettingModal} onClose={() => setOpenSettingModal(false)} sx={{ top: '50px', left: '60%' }}>
            <Setting />
          </Modal>

          <Button>
            <LanguageOutlinedIcon sx={{ color: `${darkMode ? '#bebcbc' : '#595959'}`, fontSize: "1.975rem", }} />
          </Button>
          <ButtonGroup>
            <Button
              sx={{
                ...buttonStyles,
                backgroundColor: `${darkMode ? '#b71414' : '#b71414'}`,
                ':hover': { backgroundColor: `${darkMode ? 'brown' : 'brown'}` }
              }}
              onClick={() => setOpenAddModal(true)}
            >
              Add question
            </Button>
            <Tooltip title="Create Post">
              <Button sx={{
                ...buttonStyles,
                backgroundColor: `${darkMode ? '#b71414' : '#b71414'}`,
                ':hover': { backgroundColor: `${darkMode ? 'brown' : 'brown'}` }
              }} onClick={() => setOpenAddModal(true)}>
                <KeyboardArrowDownIcon />
              </Button>
            </Tooltip>
          </ButtonGroup>
          <Popup open={openAddModal} setOpen={setOpenAddModal} sx={{ backgroundColor: `${darkMode ? '#272727' : ''}` }}>
            <SubmitPost />
          </Popup>

        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;