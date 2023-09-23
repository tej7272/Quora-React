import { FormLabel,Typography } from '@mui/material'
import React from 'react'
import Controls from '../controls/Controls'

const Forgotpassword = () => {
  return (
    <div>
      <Typography variant='h6'>Forgot Your Password</Typography>
       <form style={{ marginTop: '10px' }}>
                <FormLabel style={{ fontSize: '14px', fontWeight: '800' }}>Email</FormLabel>
                <Controls.Input 
                name='email'
                placeholder='Enter your  email'
                type='email'
                />
                <FormLabel style={{ fontSize: '14px', fontWeight: '800' }}>Enter New Password</FormLabel>
                <Controls.Input 
                name='password'
                placeholder='Enter New Password'
                type='password'
                />
                <FormLabel style={{ fontSize: '14px', fontWeight: '800' }}>Re-enter New Password</FormLabel>
                <Controls.Input 
                name='password'
                placeholder='Re-enter New Password'
                type='password'
                />
                <Controls.Button  type='submit' text='Forgot Password'/>
                </form>
    </div>
  )
}

export default Forgotpassword