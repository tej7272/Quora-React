import { FormLabel, Typography } from '@mui/material'
import React, { useState } from 'react'
import Controls from '../controls/Controls';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { ForgotPassword } from '../../services/authSlice';
import { toast } from 'react-toastify';


const Forgotpassword = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [passwordCurrent, setPasswordCurrent] = useState();
  const [password, setPassword] = useState("");

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleForgotPassword = (e) => {
    e.preventDefault();
    let userCredentials={
      name,
      email,
      passwordCurrent,
      password,
      appType: "quora"
    }
    dispatch(ForgotPassword(userCredentials))
    .then((result)=>{
      if(result.payload){
        setName('');
        setEmail('');
        setPasswordCurrent('');
        setPassword('');
        toast.success("User password updated successfully");
        navigate('/quora');
      }
      else{
        toast.error(result.error.message);
      }
    })

  }

  return (
    <div>
      <Typography variant='h6'>Forgot Your Password</Typography>
      <form style={{ marginTop: '10px' }} onSubmit={handleForgotPassword}>
        <FormLabel style={{ fontSize: '14px', fontWeight: '800' }}>Name</FormLabel>
        <Controls.Input
          name='uname'
          placeholder='Enter your  Name'
          type='text'
          value={name}
          onChange= {(e)=> setName(e.target.value)}
        />
        <FormLabel style={{ fontSize: '14px', fontWeight: '800' }}>Email</FormLabel>
        <Controls.Input
          name='email'
          placeholder='Enter your  email'
          type='email'
          value={email}
          onChange={(e)=>setEmail(e.target.value)}
        />
        <FormLabel style={{ fontSize: '14px', fontWeight: '800' }}>Enter Current Password</FormLabel>
        <Controls.Input
          name='password'
          placeholder='Enter Current Password'
          type='password'
          value={passwordCurrent}
          onChange={(e)=>setPasswordCurrent(e.target.value)}
        />
        <FormLabel style={{ fontSize: '14px', fontWeight: '800' }}>Enter New Password</FormLabel>
        <Controls.Input
          name='password'
          placeholder='Enter New Password'
          type='password'
          value={password}
          onChange={(e)=>setPassword(e.target.value)}
        />
        <Controls.Button type='submit' text='Forgot Password' />
      </form>
    </div>
  )
}

export default Forgotpassword