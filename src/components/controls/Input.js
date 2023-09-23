import { TextField } from '@mui/material'
import React from 'react'

export default function Input(props) {
    
    const {name, value, onChange, placeholder, type} = props;

  return (
    <TextField 
    variant='outlined'
    placeholder={placeholder}
    name={name}
    value={value}
    onChange={onChange}
    type={type}
    fullWidth
    sx={{width:'100%', display:'block',mb:'10px'}}
    />
  )
}
