import React from 'react'
import { Box, Button, IconButton, Link, Tooltip, Typography } from '@mui/material'
import StarIcon from '@mui/icons-material/Star';
import { red } from '@mui/material/colors';
import DrawOutlinedIcon from '@mui/icons-material/DrawOutlined';
import ThumbDownOutlinedIcon from '@mui/icons-material/ThumbDownOutlined';

import { useContext } from 'react';
import { DarkMode } from '../../../quora/Quora';

const buttonStyles = {
  color: 'gray',
  borderRadius: '20px',
  p: '5px 15px',
  textTransform: 'inherit',
}

const Answer = () => {

  const {darkMode} = useContext(DarkMode);

  return (
    <Box
      sx={{
        border: `1px solid ${darkMode?'#484848':'#e6dada'}`,
        borderRadius: '4px',
        backgroundColor: `${darkMode?'#292929':'white'}`,
        mt: '10px',
        height:'92vh',
        overflowY:'scroll',
        '@media (min-width: 500px)': {
          mx:'10px',
          width:'500px'
        },
        '@media (min-width: 600px)': {
          ml:'26px',
          width:'555px'
        },
        '@media (min-width: 900px)': {
          mx:'26px',
          width:'610px'
        },
      }}>

      <Box sx={{ display: 'flex', p: '5px', borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, alignItems: 'center' }}>
        <StarIcon sx={{ color: red[800] }} />
        <Typography variant='h6' fontSize='13px' sx={{ fontWeight: '450', opacity: '0.7', ml: '5px' }}>Questions for you</Typography>
      </Box>

      <Box>
        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>

        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>

        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>

        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>

        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>


        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>


        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>


        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>
        </Box>

        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>

        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>

        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>

        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>

        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>

        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>

        <Box sx={{ borderBottom: `1px solid ${darkMode?'#484848':'#e6dada'}`, p: '14px', }}>

          <Box sx={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between' }}>
            <Box>
              <Typography variant='h6' sx={{ fontWeight: '700', mb: '10px', fontSize: '17px' }}>If 12% of X amounts to 108, what is the value of X?</Typography>
              <span style={{ opacity: '0.6', fontSize: '13px' }}><Link to="none" sx={{ color: `${darkMode?'#fafaf7':'black'}`, textDecoration: 'none', ':hover': { textDecoration: 'underline', cursor: 'pointer' } }}>3 Answers</Link>  · Last followed</span>
            </Box>
          </Box>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', mt: '5px' }}>
            <Box>
              <Button sx={{...buttonStyles, border:`1px solid ${darkMode?'#484848':'#e6dada'}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}><DrawOutlinedIcon />Answers</Button>
            </Box>
            <Box>
              <Tooltip title="DownVote">
                <IconButton sx={{color:`${darkMode?'gray':''}`, ':hover':{backgroundColor:`${darkMode?'#3d3b3b':'#ece9e9'}`}}}>
                  <ThumbDownOutlinedIcon />
                </IconButton>
              </Tooltip>
            </Box>
          </Box>

        </Box>
      </Box>
    </Box>
  )
}

export default Answer