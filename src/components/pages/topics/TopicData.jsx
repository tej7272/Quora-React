import { Avatar, Box, Card, CardContent, CardHeader, CardMedia, Typography } from '@mui/material'
import { red } from '@mui/material/colors'
import React from 'react';
import { useContext } from 'react';
import { DarkMode } from '../../../quora/Quora';

const TopicData = (props) => {

  const { source,  title, content, publishedAt, image} = props;
  const {darkMode} = useContext(DarkMode);
  let imageUrl = 'https://www.nasa.gov/wp-content/uploads/2023/10/psyche-for-advisody-oct-4.jpg';
 
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
            <Avatar sx={{ bgcolor: red[500], }} alt="" src={image?image:`${imageUrl}`}>
              {source.url}
            </Avatar>
          }
          title={<Typography sx={{fontSize:'13px', fontWeight:'600'}}>{source.name}</Typography>}
          subheader={<p style={{fontSize:'13px', fontWeight:'400', margin:0, color:`${darkMode?'#b8b4b4':''}` }}>posted on <span style={{fontWeight:'800', color:`${darkMode?'#b8b4b4':''}` }}>
            {new Date(publishedAt).toGMTString().slice(0,16)}
            </span></p> }
        />
        <CardContent>
          <Typography variant="h6" sx={{fontSize:'18px', fontWeight:'600', mb:'20px'}}>{title}</Typography>
          <Typography variant="body2" sx={{fontSize:'14px', color:`${darkMode?'#b8b4b4':'#4d4c4c'}` }}>{content}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="350"
          image={image?image:`${imageUrl}`}
          alt={image?image:`${imageUrl}`}
        />
      </Card>
      
    </Box>
  )
}

export default TopicData