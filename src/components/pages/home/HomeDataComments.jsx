import { Box } from '@mui/material'
import { formatDistanceToNow } from 'date-fns';
import React from 'react'
import ChildComments from './ChildComments';

const HomeDataComments = (props) => {
    const { content, children, author, createdAt } = props;


    const timestamp = new Date(createdAt);
    const formattedDate = formatDistanceToNow(timestamp, { addSuffix: true });

    return (
        <Box sx={{ pb: '10px' }}>
            <Box>
                <p style={{ fontSize: '14px', }}>Comment by: <span style={{ fontWeight: '800', marginRight: '80px' }}>{author}</span><span>{formattedDate}</span></p>
                <p style={{ fontSize: '13px', }}>{content}</p>

                {children.length > 0 && children.map((element) => (<ChildComments key={element._id} {...element} />))}
            </Box>
        </Box>
    )
}

export default HomeDataComments