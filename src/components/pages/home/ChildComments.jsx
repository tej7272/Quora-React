import { Box } from '@mui/material'
import React from 'react'
import { formatDistanceToNow } from 'date-fns';


const ChildComments = (props) => {

  const { author, content, createdAt } = props


  const timestamp = new Date(createdAt);
  const formattedDate = formatDistanceToNow(timestamp, { addSuffix: true });
  return (
    <Box sx={{ ml: '20px' }}>
      <p style={{ fontSize: '12px', }}>Comment by: <span style={{ fontWeight: '800', marginRight: '100px' }}>{author}</span>· <span>{formattedDate}</span></p>
      <p style={{ fontSize: '11px', }}>{content}</p>
    </Box>
  )
}

export default ChildComments