import { Avatar, Box, Button, ButtonGroup, Card, CardActions, CardContent, CardHeader, CardMedia, Tooltip, Typography } from '@mui/material'
import { red } from '@mui/material/colors';
import ChatBubbleOutlineRoundedIcon from '@mui/icons-material/ChatBubbleOutlineRounded';
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';
import React, { useState } from 'react';
import HomeDataComments from './HomeDataComments';
import { useContext } from 'react';
import { DarkMode } from '../../../quora/Quora';
import { useDispatch } from 'react-redux';
import { addComments } from '../../../services/commentSlice';
import { toast } from 'react-toastify';
import { useCommentQuery } from '../../../services/productApi';
import { addLikeCount, deleteLikeCount } from '../../../services/likeSlice';

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
  const [showComments, setShowComments] = useState(false);
  const [colorUp, setColorUp] = useState("#4242ca");
  const [colorDown, setColorDown] = useState("gray");
  const [commentValue, setCommentValue] = useState("");

  const dispatch = useDispatch();
  const { darkMode } = useContext(DarkMode);

  const postId = _id;

  const { data: getCommentsData, refetch, isLoading } = useCommentQuery(postId);

  console.log("get comment", getCommentsData);

  const onClickUpvote = async () => {

    const likeResult = await dispatch(addLikeCount(postId));
    if (likeResult.payload) {
      setLike((prevState) => prevState + 1);
      setColorUp("#ff4500")
      setColorDown("gray")
    }
  }
  const onClickDownVote = async () => {

    const deleteResult = await dispatch(deleteLikeCount(postId));
    if(deleteResult.payload){
      setLike((prevState) => prevState - 1);
        setColorUp("#4242ca");
        setColorDown("#ff4500")
    }
  }


  const handleShowComments = () => {
    if (showComments === false) {
      setShowComments(true);
    }
    else {
      setShowComments(false);
    }
  }


  const handleAddComments = async (e) => {
    e.preventDefault();
    if (commentValue.trim() !== '') {

      const result = await dispatch(addComments({ postId, commentValue }));
      if (result.payload) {
        toast.success(result.payload.message);
        setCommentValue('');
        await refetch();
      }
    }
  }


  return (
    <Box sx={{ mt: "11px" }}>
      <Card
        sx={{
          maxWidth: '100%',
          boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.2)',
          background: `${darkMode ? '#292929' : ''}`,
          color: `${darkMode ? '#b8b4b4' : ''}`
        }}>
        <CardHeader
          avatar={
            <Avatar sx={{ bgcolor: red[500], }} alt="" src={author.profileImage}>
              R
            </Avatar>
          }
          title={<Typography sx={{ fontSize: '13px', fontWeight: '600' }}>{channel.name}</Typography>}
          subheader={<p style={{ fontSize: '13px', fontWeight: '400', margin: 0, color: `${darkMode ? '#b8b4b4' : ''}` }}>Posted by <span style={{ fontWeight: '800', color: `${darkMode ? '#b8b4b4' : ''}` }}>{author.name}</span></p>}
        />
        <CardContent>
          <Typography variant="h6" sx={{ fontSize: '18px', fontWeight: '600', mb: '20px' }}>{title}</Typography>
          <Typography variant="body2" sx={{ fontSize: '14px', color: `${darkMode ? '#b8b4b4' : '#4d4c4c'}` }}>{content}</Typography>
        </CardContent>
        <CardMedia
          component="img"
          height="350"
          image={channel.image}
          alt={channel.name}
        />
        <CardActions sx={{ height: '45px' }}>
          <ButtonGroup variant="text" color='secondary' >
            <Button variant="text" sx={{ ...buttonStyles, backgroundColor: `${darkMode ? '#3d3b3b' : '#ece9e9'}`, ':hover': { backgroundColor: `${darkMode ? '#555454' : '#ece9e9'}` } }} onClick={onClickUpvote}>
              <ThumbUpOutlinedIcon fontSize='small' sx={{ color: `${colorUp}`, mr: '3px' }} />{`Upvote .${like}`}
            </Button>
            <Tooltip title="Downvote">
              <Button variant="text" sx={{ ...buttonStyles, backgroundColor: `${darkMode ? '#3d3b3b' : '#ece9e9'}`, ':hover': { backgroundColor: `${darkMode ? '#555454' : '#ece9e9'}` } }} onClick={onClickDownVote} >
                <ThumbDownOutlinedIcon fontSize='small' sx={{ color: `${colorDown}` }} />
              </Button>
            </Tooltip>
          </ButtonGroup>
          <Button aria-label="Comments" sx={{ ml: '10px', color: 'gray' }} onClick={handleShowComments}>
            <ChatBubbleOutlineRoundedIcon sx={{ mr: '5px', }} fontSize='small' />{commentCount}
          </Button>

        </CardActions>
        {showComments && <Box sx={{ p: '20px 10px' }}>

          <form>
            <input placeholder="Add a reply..." type="text" value={commentValue} onChange={(e) => setCommentValue(e.target.value)} className="comment-input" />
            <button className="comment-btn" onClick={handleAddComments}>Add Comments</button>
          </form>

          {isLoading ? <div>loading...</div> :
            (getCommentsData?.data?.map((comments) => <HomeDataComments key={comments._id} {...comments} />))}

        </Box>}
      </Card>

    </Box>
  )
}

export default HomeData