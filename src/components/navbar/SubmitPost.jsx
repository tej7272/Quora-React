import { Box, Button, } from '@mui/material'
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import React, { useState } from 'react'
import { useContext } from 'react';
import { DarkMode } from '../../quora/Quora';
import { useDispatch } from 'react-redux';
import { createPost } from '../../services/postSlice';

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
  height: '130px',
}

const buttonContainerStyles = {
  position: 'absolute',
  bottom: '10px',
  right: '10px',
  display: 'flex',
  gap: '10px',
};

const SubmitPost = () => {

  const [addQuestion, setAddQuestion] = useState(true);
  const [inputValue, setInputValue] = useState({title:'', postContent:'', postImage:null})
  const [createPosts, setCreatePosts] = useState(false);
  const { darkMode } = useContext(DarkMode);

  const dispatch = useDispatch();


  const handleAddQuestion = (e) => {
    e.preventDefault();

    dispatch(createPost(inputValue))

    
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
              value={inputValue.title}
              onChange={(e) => setInputValue({ ...inputValue, title: e.target.value })}

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
        <Box>

          <textarea
            style={{
              ...textareaStyles,
              backgroundColor: `${darkMode ? '#272727' : ''}`,
              color: `${darkMode ? 'rgba(253, 251, 251, 0.87)' : ''}`
            }}
            placeholder="Start typing here"
            value={inputValue.postContent}
            onChange={(e) => setInputValue({ ...inputValue, postContent: e.target.value })}
          />
          <input type='text' placeholder='title' value={inputValue.title} onChange={(e) => setInputValue({ ...inputValue, title: e.target.value })}/>


        </Box>
        <Box sx={buttonContainerStyles}>
          <Button component="label" startIcon={<PhotoLibraryOutlinedIcon />} >
            <input type="file" onChange={(e) => setInputValue({ ...inputValue, postImage: e.target.files[0] })}/>
          </Button>
          <Button variant="contained" sx={submitButtonStyles} onClick={handleAddQuestion}>Post</Button>

        </Box>
      </Box>
      }
    </Box>
  )
}

export default SubmitPost