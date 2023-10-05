import { InputBase } from '@mui/material'
import React from 'react'

export default function Input(props) {

  const { name, value, onChange, placeholder, type } = props;

  return (
    <InputBase
      variant='outlined'
      placeholder={placeholder}
      name={name}
      value={value}
      onChange={onChange}
      type={type}
      sx={{
        display: 'block',
        mb: '10px',
        border: '1px solid #e6dada',
        p: '6px 10px',
        mt: '5px',
        borderRadius: '4px'
      }}
    />
  )
}
