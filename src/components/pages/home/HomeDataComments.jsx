import { Box, Button } from '@mui/material'
import { formatDistanceToNow } from 'date-fns';
import React from 'react'

const buttonStyles = {
    color: 'gray',
    textTransform: 'inherit',
    fontSize: '11px',
    backgroundColor: '#ece9e9',
    borderRadius: '20px',
    ':hover': {
        backgroundColor: '#cecccc'
    }
}

const HomeDataComments = (props) => {
    const { content,
        //  _id, 
        children, author, createdAt } = props;

    const timestamp = new Date(createdAt);
    const formattedDate = formatDistanceToNow(timestamp, { addSuffix: true });

    return (
        <Box sx={{ pb: '10px' }}>
            <Box>
                <p style={{ fontSize: '14px', }}>Comment by: <span style={{ fontWeight: '800', marginRight: '80px' }}>{author}</span><span>{formattedDate}</span></p>
                <p style={{ fontSize: '13px', }}>{content}</p>
                <Button sx={buttonStyles}>Reply</Button>
                {children.length > 0 && children.map((element) => (
                    <Box key={element._id} sx={{ ml: '20px' }}>
                        <p style={{ fontSize: '12px', }}>Comment by: <span style={{ fontWeight: '800', marginRight: '100px' }}>{element.author}</span>· <span>{formattedDate}</span></p>
                        <p style={{ fontSize: '11px', }}>{element.content}</p>
                        <Button sx={buttonStyles}>Reply</Button>
                    </Box>

                ))
                }
            </Box>
        </Box>
    )
}

export default HomeDataComments