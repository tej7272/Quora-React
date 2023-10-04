import React, { useState } from 'react';
import { Box, CardMedia, FormLabel, Link, Typography } from '@mui/material';
import Quoralogo from '../../images/Quora_Logo.png';
import Signup from './Signup';
import Forgotpassword from './Forgotpassword';
import Controls from '../controls/Controls';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { toast } from 'react-toastify';
import { loginUser } from '../../services/authSlice';
import LoginPopup from '../controls/LoginPopup';

const Login = () => {

  const [openSignUp, setOpenSignUp] = useState(false);
  const [openForgot, setOpenForgot] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");


  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleLoginEvent = (e) => {
    e.preventDefault();
    let Credentials = {
      email,
      password,
      appType: "quora"
    }
    if (!email || !password) {
      toast.error("please provide email and password");
    }
    else {

      dispatch(loginUser(Credentials))
        .then((result) => {
          if (result.payload) {
            setEmail('');
            setPassword('');
            toast.success("User login successfully");
            navigate('/quora');
          }
          else {
            toast.error(result.error.message);
          }
        })
    }
  }

  const handleSignUp = () => {
    setOpenSignUp(true);
  };

  const handleForgot = () => {
    setOpenForgot(true);
  }

  return (
    <Box
      sx={{
        backgroundImage: `url('https://qsf.fs.quoracdn.net/-4-ans_frontend_assets.images.home_page_bg_desktop.png-26-4770753d59b970e1.png')`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        height: '100vh',
        boxSizing: 'border-box',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        m: 'auto'
      }}
    >
      <Box
        sx={{
          backgroundColor: 'white',
          pt: '2rem',
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          borderRadius: '4px',
          width: '700px',
          justifyContent: 'center',
          boxSizing: 'border-box'

        }}>
        <Box>

          <CardMedia
            component="img"
            image={Quoralogo}
            alt="QuoraLogo"
            height='48px'
            sx={{
              width: 'auto',
              objectFit: 'cover',
              my: '1rem',

            }}
          />
        </Box>
        <Typography variant='h6' fontSize='14px' fontWeight='600'>A place to share knowledge and better understand the world</Typography>
        <Box
          sx={{
            display: 'flex',
            mt: '40px',
            mb: '20px',
            justifyContent: 'center'
          }} >
          <Box sx={{ width: '330px', borderRight: '1px solid #e6dada' }}>
            <Box sx={{ mr: '24px', }}>
              <Typography variant='subtitle2' fontSize='13px' sx={{ color: 'gray' }} >
                By continuing you indicate that you agree to Quora’s
                <Link underline="hover" href='https://www.quora.com/about/tos' target='_blank' rel="noreferrer"> Terms of Service
                </Link> and <Link underline="hover" href='https://www.quora.com/about/privacy' target='_blank' rel="noreferrer">
                  Privacy Policy
                </Link>.
              </Typography>

              <Box sx={{
                display: 'flex',
                cursor: 'pointer',
                mt: '70px',
                py: '10px',
                border: '1px solid #e6dada',
                borderRadius: '4px',
                fontSize: '14px',
                justifyContent: 'center',
                ':hover': {
                  backgroundColor: 'whitesmoke'
                }


              }}
                onClick={handleSignUp}
              >
                Sign up with email
              </Box>
              <LoginPopup
                setOpen={setOpenSignUp}
                open={openSignUp}
              >
                <Signup />
              </LoginPopup>
            </Box>
          </Box>
          <Box sx={{ width: '330px', color: '#393535' }}>
            <Box sx={{ ml: '24px', }}>
              <Box sx={{ borderBottom: '1px solid #e6dada', pb: '8px', fontSize: '15px', }}>
                Login
              </Box>
              <form style={{ marginTop: '10px' }} onSubmit={handleLoginEvent}>
                <FormLabel style={{ fontSize: '12px', fontWeight: '800' }}>Email</FormLabel>
                <Controls.Input
                  name='email'
                  placeholder='Your email'
                  type='email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                <FormLabel style={{ fontSize: '12px', fontWeight: '800' }}>Password</FormLabel>
                <Controls.Input
                  name='password'
                  placeholder='Your password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <Box onClick={handleForgot}
                    sx={{
                      fontSize: 'small',
                      cursor: 'pointer',
                      color: 'gray',
                      ":hover": {
                        textDecoration: 'underline'
                      }
                    }}>Forgot password?</Box>
                  <LoginPopup
                    setOpen={setOpenForgot}
                    open={openForgot}
                  >
                    <Forgotpassword />
                  </LoginPopup>
                  <Controls.Button type='submit' text='Login'
                  />
                </Box>
              </form>
            </Box>
          </Box>
        </Box>
        <Box sx={{ display: 'flex', alignItems: 'center', borderTop: '1px solid #e6dada', borderBottom: '1px solid #e6dada', width: '100%', justifyContent: 'center' }}>
          <p style={{ fontSize: 'small', }}>हिन्दी</p>
        </Box>
        <Box fontSize='small' sx={{ textAlign: 'center', display: 'flex', justifyContent: 'center', alignItems: 'center', color: 'gray', backgroundColor: '#f1f0f0', width: '100%', }}>
          <Box>
            <Link href='https://www.quora.com/about' target='_blank' rel="noreferrer" underline='hover' sx={{ color: 'gray' }}>About</Link> · <Link
              href='https://www.quora.com/careers' target='_blank' rel="noreferrer" underline='hover' sx={{ color: 'gray' }}>Careers</Link> · <Link
                href='https://www.quora.com/about/privacy' target='_blank' rel="noreferrer" underline='hover' sx={{ color: 'gray' }}>Privacy</Link> · <Link
                  href='https://www.quora.com/about/tos' target='_blank' rel="noreferrer" underline='hover' sx={{ color: 'gray' }}>Terms</Link> · <Link
                    href='https://www.quora.com/contact' target='_blank' rel="noreferrer" underline='hover' sx={{ color: 'gray' }}>Contact</Link> · <Link
                      href='https://www.quora.com/about/languages' target='_blank' rel="noreferrer" underline='hover' sx={{ color: 'gray' }}>Language</Link> · <Link
                        href='https://www.quora.com/about/your_ad_choices' target='_blank' rel="noreferrer" underline='hover' sx={{ color: 'gray' }}>Your Ad Choices</Link> · <Link
                          href='https://www.quora.com/contact' target='_blank' rel="noreferrer" underline='hover' sx={{ color: 'gray' }}>Press</Link> ·
          </Box>
          <p>&copy; Quora, Inc. 2023</p>
        </Box>
      </Box>
    </Box>
  )
}

export default Login