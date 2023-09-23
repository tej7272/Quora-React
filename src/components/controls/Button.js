import React from 'react'
import {Button as MuiButton} from '@mui/material';

export default function Button(props) {

    const { text, size, variant, onClick,color, ...other } = props;
    return (
        <MuiButton
            variant={variant || 'contained'}
            size={size || 'medium'}
            color={color || 'primary'}
            onClick={onClick}
            sx={{borderRadius:"20px", textTransform:'inherit'}}
            {...other}>
            {text}
        </MuiButton>
    )
}
