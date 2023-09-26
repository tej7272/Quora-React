import React,{
  // useEffect,
   useState} from 'react'
import { FormLabel, Typography} from '@mui/material'
import Controls from '../controls/Controls'
import { useDispatch } from 'react-redux'
// import { useSignupUserMutation } from '../../services/authApi'
import { toast } from 'react-toastify'
import { useNavigate } from 'react-router-dom'
import { signUpUser } from '../../services/authSlice'

const Signup = () => {

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();


  const handleSignupEvent = (e)=>{
    e.preventDefault();
    let userData={
      name,
      email,
      password,
      appType: "quora"
    }
    dispatch(signUpUser(userData))
    .then((result)=>{
      if(password.length >= 5){
        if(result.payload){
          setName('');
          setEmail('');
          setPassword('');
          toast.success("User account created successfully");
          navigate('/quora')
        }
        else{
          toast.error(result.error.message);
        }
      }
      else{
        toast.error("Length of password must be greater than 4")
      }
    })
  }

  return (
    <div>
      <Typography variant='h6'>Sign Up</Typography>
       <form style={{ marginTop: '10px' }} onSubmit={handleSignupEvent} >
                <FormLabel style={{ fontSize: '14px', fontWeight: '800' }}>Name</FormLabel>
                <Controls.Input
                name='name'
                placeholder='What would you like to be called?'
                type='text'
                required
                value={name}
                onChange = {(e)=>setName(e.target.value)}
                />

                <FormLabel style={{ fontSize: '14px', fontWeight: '800' }}>Email</FormLabel>
                <Controls.Input 
                name='email'
                placeholder='Enter your  email'
                type='email'
                required
                value={email}
                onChange = {(e)=>setEmail(e.target.value)}
                />

                <FormLabel style={{ fontSize: '14px', fontWeight: '800' }}>Enter Password</FormLabel>
                <Controls.Input 
                name='password'
                placeholder='Enter Password'
                type='password'
                required
                value={password}
                onChange = {(e)=>setPassword(e.target.value)}
                />
                <Controls.Button  type='submit' text='Sign Up' />
                </form>
    </div>
  )
}

export default Signup