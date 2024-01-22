import { Box, Button, } from '@mui/material'
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import React, { useState } from 'react'
import { useContext } from 'react';
import { DarkMode } from '../../quora/Quora';
import { useDispatch } from 'react-redux';
import { createPost } from '../../services/postSlice';
import { toast } from 'react-toastify';
import { useGetPostDataQuery } from '../../services/productApi';

const buttonStyles = {
  width: '50%',
  textTransform: 'inherit'
}

const submitButtonStyles = {
  color: 'white',
  textTransform: 'inherit',
  backgroundColor: '#2e69ff',
  borderRadius: '25px',
  px: '10px',
  ':hover': {
    backgroundColor: '#2e69ff'
  }

}
const containerStyles = {
  backgroundColor: 'white',
  height: '50vh',
  position: 'relative',
};

const textareaStyles = {
  fontSize: '17px',
  border: 'none',
  outline: 'none',
  resize: 'none',
  width: '100%',
  height: '100px',
}

const buttonContainerStyles = {
  bottom: '10px',
  display: 'flex',
  justifyContent: 'space-between',
  gap: '10px',
};

const SubmitPost = (props) => {

  const { setOpen} = props;

  const [addQuestion, setAddQuestion] = useState(true);
  const [title ,setTitle] = useState('');
  const [content ,setContent] = useState('');
  const [image ,setImage] = useState('');
  const [createPosts, setCreatePosts] = useState(false);
  const { darkMode } = useContext(DarkMode);

  const dispatch = useDispatch();

  const {refetch} = useGetPostDataQuery();



  const handleCreatePost = () => {

    let inputValue = {
      title,
      content,
      image
    }
    
    dispatch(createPost(inputValue))
    .then((result)=>{
      if(result.payload){
        toast.success(result.payload.message);
        refetch();
        setOpen(false);
       
      }
      else{
        toast.error(result.error.message);
      }
    })
  }

  
  const handleAddQuestion = async () => {

    

    let inputValue = {
      title,
      content,
      image
    }
    await dispatch(createPost(inputValue))
    .then((result)=>{
      if(result.payload){
        toast.success(result.payload.message);
       refetch(); 
        setOpen(false);
      }
      else{
        toast.error(result.error.message);
      }
    })
  }


  const handleAddButton = () => {
    setAddQuestion(true);
    setCreatePosts(false);
  }

  const handleCreatePostButton = () => {
    setAddQuestion(false);
    setCreatePosts(true);
  }

  return (
    <Box sx={{ ...containerStyles, backgroundColor: `${darkMode ? '#272727' : ''}`, height: '420px' }} >
      <Box sx={{ borderBottom: '1px solid gray' }}>
        <Button sx={{ ...buttonStyles, color: `${darkMode ? 'white' : 'black'}` }} onClick={handleAddButton}>Add Question</Button>
        <Button sx={{ ...buttonStyles, color: `${darkMode ? 'white' : 'black'}` }} onClick={handleCreatePostButton}>Create Post</Button>
      </Box>
      {addQuestion && <Box>
        <Box sx={{ color: '#3f6df7', backgroundColor: '#dde6f7', p: '10px', borderRadius: '5px', my: '15px' }}>
          <h4 style={{ margin: 0 }}>Tips on getting good answers quickly</h4>
          <ul style={{ margin: 0, padding: '0px 25px' }}>
            <li>Make sure your question has not been asked already</li>
            <li>Keep your question short and to the point</li>
            <li>Double-check grammar and spelling</li>
          </ul>
        </Box>
        <Box >
          <Box  >
            <textarea
              style={{
                ...textareaStyles,
                backgroundColor: `${darkMode ? '#272727' : ''}`,
                color: `${darkMode ? 'rgba(253, 251, 251, 0.87)' : ''}`
              }}
              value={title}
              onChange={(e) => setTitle(e.target.value)}

              placeholder={`Start your question with "What", "How", "Why" etc.`}
            />

          </Box>
          <Box sx={buttonContainerStyles}>
            <Button sx={submitButtonStyles} onClick={handleAddQuestion}>Add Question</Button>
          </Box>
        </Box>
      </Box>
      }

      {createPosts && <Box sx={{ py: '10px' }}>
        <Box sx={{height:'40vh'}}>

          <input type='text'
            placeholder='Enter title here'
            value={title}
            onChange={(e) => setTitle(e.target.value )}
            style={{ width: '100%', padding: '10px 0', border: 0, outline: 0, marginBottom: '10px', fontSize: '17px', backgroundColor: 'transparent', color: `${darkMode ? 'rgba(253, 251, 251, 0.87)' : ''}`, letterSpacing: '2px' }}
          />

          <textarea
            style={{
              ...textareaStyles,
              backgroundColor: `${darkMode ? '#272727' : ''}`,
              color: `${darkMode ? 'rgba(253, 251, 251, 0.87)' : ''}`
            }}
            placeholder="Start typing here"
            value={content}
            onChange={(e) => setContent(e.target.value)}
          />

        </Box>
        <Box sx={buttonContainerStyles}>
          <Button component="label" startIcon={<PhotoLibraryOutlinedIcon />} >
            <input type="file" onChange={(e) => setImage(e.target.files[0])} />
          </Button>
          <Button variant="contained" sx={submitButtonStyles} onClick={handleCreatePost}>Post</Button>

        </Box>
      </Box>
      }
    </Box>
  )
}

export default SubmitPost