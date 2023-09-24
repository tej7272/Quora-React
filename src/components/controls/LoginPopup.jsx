import { Box, Button, Dialog, DialogActions, DialogContent } from '@mui/material';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import React from 'react'

const LoginPopup = (props) => {
    const {open , setOpen, children} = props;

    const handleClose = ()=>{
        setOpen(false);
    }
  return (
    <Dialog open={open} onClose={handleClose} fullWidth >
          <Box  sx={{ height:'500px' }}>
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

export default LoginPopup