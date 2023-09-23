import { Box, Button, } from '@mui/material'
import PhotoLibraryOutlinedIcon from '@mui/icons-material/PhotoLibraryOutlined';
import React, { useState } from 'react'
import { useContext } from 'react';
import { DarkMode } from '../../quora/Quora';

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
  const [createPost, setCreatePost] = useState(false);
  const { darkMode } = useContext(DarkMode);

  const handleAddButton = () => {
    setAddQuestion(true);
    setCreatePost(false);
  }

  const handleCreatePostButton = () => {
    setAddQuestion(false);
    setCreatePost(true);
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

              placeholder={`Start your question with "What", "How", "Why" etc.`}
            />

          </Box>
          <Box sx={buttonContainerStyles}>
            <Button sx={submitButtonStyles}>Add Question</Button>
          </Box>
        </Box>
      </Box>
      }

      {createPost && <Box sx={{ py: '10px' }}>
        <Box>

          <textarea
            style={{
              ...textareaStyles,
              backgroundColor: `${darkMode ? '#272727' : ''}`,
              color: `${darkMode ? 'rgba(253, 251, 251, 0.87)' : ''}`
            }}
            placeholder="Start typing here"
          />


        </Box>
        <Box sx={buttonContainerStyles}>
          <Button component="label" startIcon={<PhotoLibraryOutlinedIcon />} >
            <input type="file" />
          </Button>
          <Button variant="contained" sx={submitButtonStyles}>Post</Button>

        </Box>
      </Box>
      }
    </Box>
  )
}

export default SubmitPost