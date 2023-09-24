import { Avatar, Box, Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, CardMedia, IconButton, Tooltip, Typography } from '@mui/material'
import { red } from '@mui/material/colors';
import ClearOutlinedIcon from '@mui/icons-material/ClearOutlined';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import { useCommentQuery } from '../../../services/authApi';
import React, { useState, useEffect } from 'react';
import HomeDataComments from './HomeDataComments';
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

const HomeData = (props) => {

  const { author, channel, title, content, commentCount, likeCount, _id } = props;
  const [like, setLike] = useState(likeCount);
  const [commentsList, setCommentsList] = useState([]);
  const [showComments, setShowComments] = useState(false);
  const user = JSON.parse(localStorage.getItem("user"))
  const {darkMode} = useContext(DarkMode);


  const postId = _id;

  const getCommentsData = useCommentQuery(postId);

  const addLikeCount = async(postId) =>{
    try{
      const res = await fetch(`https://academics.newtonschool.co/api/v1/quora/like/${postId}`,
      {
        method: "POST",
        body: {
          postId: `${postId}`,
        },
        headers: {
          Authorization: `Bearer ${user?.token}`,
          projectId: `bc73q6nn4srr`,
        }
      })
      const data = await res.json();
      if(data.status === "success"){
        setLike((prevState)=> prevState + 1 );
        // setColorUp("#ff4500")
        // setColorDown("#ddd")
      }
    }catch(err){
      console.log(err);
    }
  };

  const deleteLikeCount = async(postId) =>{
    try{
      const res = await fetch(`https://academics.newtonschool.co/api/v1/quora/like/${postId}`,
      {
        method: "DELETE",
        body: {
          postId: `${postId}`,
        },
        headers: {
          Authorization: `Bearer ${user?.token}`,
          projectId: `bc73q6nn4srr`,
        }
      })
      const data = await res.json();
      if(data.status === "success"){
        setLike((prevState)=> prevState - 1 );
        // setColorUp("#ddd");
        // setColorDown("#ff4500")
      }
    }catch(err){
      console.log(err);
    }
  };


  const onClickUpvote = async () =>{
    addLikeCount(postId);
  }
  const onClickDownVote = ()=>{
    deleteLikeCount(postId);
  }


  useEffect(() => {
    if (!getCommentsData.isLoading) {

      if (getCommentsData?.data?.data) {
        setCommentsList(getCommentsData.data.data);
      }
    }
  }, [getCommentsData, commentsList]);


  const handleShowComments = () => {
    if (showComments === false) {
      setShowComments(true);
    }
    else {
      setShowComments(false);
    }
  }


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
            <Avatar sx={{ bgcolor: red[500], }} alt="" src={author.profileImage}>
              R
            </Avatar>
          }
          action={
            <IconButton aria-label="settings">
              <ClearOutlinedIcon />
            </IconButton>
          }
          title={<Typography sx={{fontSize:'13px', fontWeight:'600'}}>{channel.name}</Typography>}
          subheader={<p style={{fontSize:'13px', fontWeight:'400', margin:0, color:`${darkMode?'#b8b4b4':''}`}}>Posted by <span style={{fontWeight:'800',color:`${darkMode?'#b8b4b4':''}`}}>{author.name}</span></p> }
        />
        <CardContent>
          <Typography variant="h6" sx={{fontSize:'18px', fontWeight:'600', mb:'20px'}}>{title}</Typography>
          <Typography variant="body2" sx={{fontSize:'14px', color:`${darkMode?'#b8b4b4':'#4d4c4c'}`}}>{content}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="350"
          image={channel.image}
          alt={channel.name}
        />
        <CardActions sx={{ height: '45px' }}>
          <ButtonGroup variant="text" color='secondary' >
            <Button variant="text" sx={{...buttonStyles, backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`, ':hover':{backgroundColor:`${darkMode?'#555454':'#ece9e9'}`}}} onClick={onClickUpvote}>
              <ThumbUpOutlinedIcon fontSize='small' sx={{ color: '#4242ca', mr: '3px' }} />{`Upvote .${like}`}
            </Button>
            <Tooltip title="Downvote">
              <Button variant="text" sx={{...buttonStyles, backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`, ':hover':{backgroundColor:`${darkMode?'#555454':'#ece9e9'}`}}} onClick={onClickDownVote} >
                <ThumbDownOutlinedIcon fontSize='small' />
              </Button>
            </Tooltip>
          </ButtonGroup>
          <Button aria-label="Comments" sx={{ ml: '10px',color:'gray'}} onClick={handleShowComments}>
            <ChatBubbleOutlineRoundedIcon sx={{ mr: '5px',}} fontSize='small' />{commentCount}
          </Button>
         
        </CardActions>
        {showComments && <Box sx={{px:'10px'}}>
            {getCommentsData.isLoading ? <div>loading...</div> :
              (commentsList.length && commentsList.map((comments, index) => {
                return (
                  <HomeDataComments key={index} {...comments} />

                )
              }))}

          </Box>}
      </Card>
      
    </Box>
  )
}

export default HomeData