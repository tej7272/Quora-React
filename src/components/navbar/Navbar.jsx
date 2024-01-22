import React, { useState } from 'react';
import { Box, IconButton, Avatar, Button, Tooltip, CardMedia, } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import Quoralogo from '../../images/Quora_Logo.png'
import { Link, useLocation, useNavigate } from 'react-router-dom';
import Setting from './Setting';
import SubmitPost from './SubmitPost';
import Popup from '../controls/Popup'
import '../../App.css'
import { useContext } from 'react';
import {GoHome} from 'react-icons/go';
import {SlNote } from 'react-icons/sl';
import {CiViewList} from 'react-icons/ci';
import {IoPeopleOutline} from 'react-icons/io5';
import {IoNotificationsOutline} from 'react-icons/io5'
import {IoMdArrowDropdown} from 'react-icons/io'
import { DarkMode, SearchContext } from '../../quora/Quora';



const buttonStyles = {
  color: 'white',
  border: 'none',
  textTransform: 'none',
  borderRadius: '25px',
  fontSize: '14px',
  height: '32px',
  outline: 'none',
  overflow:'hidden',
}


function Navbar() {

  const location = useLocation();
  // console.log('location', location.pathname);

  const [openSettingModal, setOpenSettingModal] = useState(false);
  const [openAddModal, setOpenAddModal] = useState(false);
  const { searchTerm, setSearchTerm } = useContext(SearchContext);
  const user = JSON.parse(sessionStorage.getItem('user'));

  const { darkMode } = useContext(DarkMode);
  const navigate = useNavigate();

  const handleSettingModal = () => {
    if (openSettingModal === true) {
      setOpenSettingModal(false);
    }
    else {
      setOpenSettingModal(true)
    }
  }

  const handleSearchSubmit = (e)=>{
    e.preventDefault();
    navigate('/quora/');
  }

  return (

    <Box position="fixed" sx={{ boxShadow: '0', border: `1px solid ${darkMode ? '#292929' : '#d7d5d5'}`, width: '100%', zIndex: '3000' }}  >
      <Box sx={{ backgroundColor: `${darkMode ? '#292929' : 'white'}`, py: '0.18rem', }}>

        {/* side nav start from here  */}
       <div className='sideNav'>

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
        
        <div className='sideNav-search'
           style={{ border: `1px solid ${darkMode ? '#444' : '#dbcaca'}` }}>

           <SearchIcon sx={{ color: 'grey', mr: '5px' }} fontSize="small" />
           <form id='side-search-bar' onSubmit={handleSearchSubmit}>
             <input
               placeholder="Search…"
               style={{ color: `${darkMode ? 'rgba(253, 251, 251, 0.87)' : ''}` }}
               type='text'
               value={searchTerm}
               onChange={(e) => setSearchTerm(e.target.value)}
               onClick={(e)=>setSearchTerm('')}
             />
           </form>
         </div>
         <button className='sideNav-try' style={{  border: `1px solid ${darkMode ? '#444' : '#dbcaca'}`,}} >
           <Link to="/quora/premium" style={{ textDecoration: 'none', color: 'gray' }}>
             Try Quora+
           </Link>
         </button>
       </div>

       {/* navbar start from here  */}
        <div className='nav-header' >
          <Link to="/quora/" className='nav-logo'>
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

          <Link className={` nav-link ${(location.pathname==='/quora/' || location.pathname==='/quora')?'location':''}`} to="/quora/">
              <button className='nav-icons' title='Home' >
                <GoHome style={{ color: `${darkMode ? '#bebcbc' : location.pathname==='/quora/'?'rgb(164, 2, 2)':'#595959'}` }} />
              </button>
          </Link>

          <Link className={`nav-link ${location.pathname==='/quora/following'?'location':''}`} to="/quora/following">
              <button className='nav-icons' title='Following'>
                <CiViewList style={{ color: `${darkMode ? '#bebcbc' : location.pathname==='/quora/following'?'rgb(164, 2, 2)':'#595959'}` }} />
              </button>
          </Link>

          <Link className={`nav-link ${location.pathname==='/quora/answer'?'location':''}`} to="/quora/answer">
              <button className='nav-icons' title='Answer'>
                <SlNote style={{ color: `${darkMode ? '#bebcbc' : location.pathname==='/quora/answer'?'rgb(164, 2, 2)':'#595959'}` }} />
              </button>
          </Link>

          <Link className={`nav-link ${location.pathname === '/quora/spaces' ? 'location' : ''}`} to="/quora/spaces">
              <button className='nav-icons' title='Spaces'>
                <IoPeopleOutline style={{ color: `${darkMode ? '#bebcbc' : location.pathname==='/quora/spaces'?'rgb(164, 2, 2)':'#595959'}` }} />
              </button>
          </Link>

          <Link className={`nav-link ${location.pathname.startsWith('/quora/notifications/') ? 'location' : ''}`} to="/quora/notifications/:all">
              <button className='nav-icons' title='Notifications'>
                <IoNotificationsOutline style={{ color: `${darkMode ? '#bebcbc' : location.pathname.startsWith('/quora/notifications/')?'rgb(164, 2, 2)':'#595959'}` }} />
              </button>
          </Link>


          <div className='nav-search'
            style={{ border: `1px solid ${darkMode ? '#444' : '#dbcaca'}` }}>

            <SearchIcon sx={{ color: 'grey', mr: '5px' }} fontSize="small" />
            <form onSubmit={handleSearchSubmit} id='search-bar'>
              <input
                placeholder="Search…"
                style={{ color: `${darkMode ? 'rgba(253, 251, 251, 0.87)' : ''}` }}
                type='text'
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                onClick={(e)=>setSearchTerm('')}
              />
            </form>
          </div>
          <button className='nav-try' style={{ border: `1px solid ${darkMode ? '#444' : '#dbcaca'}`,}}>
            <Link to="/quora/premium" style={{ textDecoration: 'none', color: 'gray' }}>
              Try Quora+
            </Link>
          </button>

          <Tooltip title="Open settings" >
            <IconButton onClick={handleSettingModal} sx={{ p: 0,':hover':{background:'transparent'} }}>
              <Avatar alt={user?.name?.toUpperCase()} src={user?.name} sx={{ width: '35px', height: '35px', color: 'black', mx:'10px' }} />
            </IconButton>
          </Tooltip>
            <Setting open={openSettingModal} setOpen={setOpenSettingModal}/>
         
            <Button
              sx={{
                ...buttonStyles,
                backgroundColor: `${darkMode ? '#b71414' : '#b71414'}`,
                ':hover': { backgroundColor: `${darkMode ? 'brown' : 'brown'}` }
              }}
              onClick={() => setOpenAddModal(true)}
            >
             <span style={{ whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis'}}>Add question</span>  <IoMdArrowDropdown style={{fontSize:'25px', marginLeft:'10px'}} />
            </Button>

          <Popup open={openAddModal} setOpen={setOpenAddModal} sx={{ backgroundColor: `${darkMode ? '#272727' : ''}` }}>
            <SubmitPost  setOpen={setOpenAddModal} />
          </Popup>

        </div>

        
      </Box>
    </Box>
  );
}

export default Navbar;