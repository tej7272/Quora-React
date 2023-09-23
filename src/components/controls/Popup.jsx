import React, { useContext } from 'react'
import {Box, Button, Dialog,  DialogActions,  DialogContent } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import { DarkMode } from '../../quora/Quora';


const Popup = (props) => {
    const {open , setOpen, children} = props;
    const {darkMode} = useContext(DarkMode);
    
    const handleClose = ()=>{
        setOpen(false);
    }
  return (
        <Dialog open={open} onClose={handleClose} fullWidth sx={{ backgroundColor: `${darkMode ? '#272727' : ''}`}} >
          <Box  sx={{ backgroundColor: `${darkMode ? '#272727' : ''}`, height:'500px' }}>
          <DialogActions sx={{display:'inline'}}>
        <Button onClick={handleClose} type='close' sx={{color:'gray'}}><ClearOutlinedIcon /></Button>
        </DialogActions>
        <DialogContent>
                {children}
        </DialogContent>
          </Box>
      </Dialog>
  )
}

export default Popup