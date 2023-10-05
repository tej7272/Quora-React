import { Avatar, Box, Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, CardMedia, Tooltip, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react';
import { useContext } from 'react';
import { DarkMode } from '../../../quora/Quora';

const buttonStyles = {
  color: 'gray',
  border: 'none',
  outline: 'none',
  textTransform: 'none',
  borderRadius: '25px',
  fontSize: '13px',
  whiteSpace: 'nowrap',
  overflow: 'hidden',
  textOverflow: 'ellipsis',
  height: '33px',
  ':hover': {
    border: 0,
  }
}

const TopicData = (props) => {

  

  const { author,  title, description, source, image} = props;
  const {darkMode} = useContext(DarkMode);


  return (
    <Box sx={{ mt: "11px" }}>
      <Card
      sx={{ 
        maxWidth: '100%', 
        boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.2)', 
        background:`${darkMode?'#292929':''}`, 
        color:`${darkMode?'#b8b4b4':''}` 
        }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500], }} alt="" src={author}>
              {author}
            </Avatar>
          }
          title={<Typography sx={{fontSize:'13px', fontWeight:'600'}}>{author}</Typography>}
          subheader={<p style={{fontSize:'13px', fontWeight:'400', margin:0, color:`${darkMode?'#b8b4b4':''}` }}>Posted by <span style={{fontWeight:'800', color:`${darkMode?'#b8b4b4':''}` }}>{source}</span></p> }
        />
        <CardContent>
          <Typography variant="h6" sx={{fontSize:'18px', fontWeight:'600', mb:'20px'}}>{title}</Typography>
          <Typography variant="body2" sx={{fontSize:'14px', color:`${darkMode?'#b8b4b4':'#4d4c4c'}` }}>{description}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="350"
          image={image}
          alt={image}
        />
      </Card>
      
    </Box>
  )
}

export default TopicData