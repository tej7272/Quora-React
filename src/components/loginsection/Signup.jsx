import React, { useState } from 'react'
import { FormLabel, Typography } from '@mui/material'
import Controls from '../controls/Controls'
import { useDispatch } from 'react-redux'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { signUpUser } from '../../services/authSlice'

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSignupEvent = (e) => {
    e.preventDefault();
    let userData = {
      name,
      email,
      password,
      appType: "quora"
    }

    if (!name || !email || !password) {
     toast.error("All fields are required");
    }

    else {
      if (!email.includes('@gmail.com')) {
        toast.error("Enter a valid email");

      }
      else {

        if (password.length >= 5) {

          dispatch(signUpUser(userData))
            .then((result) => {

              if (result.payload) {
                setName('');
                setEmail('');
                setPassword('');
                toast.success("User account created successfully");
                navigate('/quora')
              }
              else {
                toast.error(result.error.message);
              }
            })
        }
        else {
          toast.error("Password must be at least 5 characters long");
        }
      }
    }
  }



  return (
    <div>
      <Typography variant='h6'>Sign Up</Typography>
      <form style={{ marginTop: '10px' }} >
        <FormLabel style={{ fontSize: '14px', fontWeight: '800' }}>Name</FormLabel>
        <Controls.Input
          name='name'
          placeholder='What would you like to be called?'
          type='text'
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <FormLabel style={{ fontSize: '14px', fontWeight: '800' }}>Email</FormLabel>
        <Controls.Input
          name='email'
          placeholder='Enter your  email'
          type='email'
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <FormLabel style={{ fontSize: '14px', fontWeight: '800' }}>Enter Password</FormLabel>
        <Controls.Input
          name='password'
          placeholder='Enter Password'
          type='password'
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          />
        <Controls.Button type='submit' text='Sign Up' onClick={handleSignupEvent} />
      </form>
    </div>
  )
}

export default Signup