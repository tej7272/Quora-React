import React, { createContext, useState } from 'react'
import { Box } from '@mui/material'
import { Route, Routes } from 'react-router-dom'
import Navbar from '../components/navbar/Navbar'
import Sidebarleft from '../components/support/Sidebarleft'
import Answerleftbar from '../components/pages/answer/Answerleftbar'
import Notificationleftbar from '../components/pages/notifications/Notificationleftbar'
import Advertisingsection from '../components/support/Advertisingsection'
import RightBar from '../components/support/RightBar';
import Homepage from '../components/pages/home/Homepage'
import Following from '../components/pages/following/Following'
import Answer from '../components/pages/answer/Answer'
import Notifications from '../components/pages/notifications/Notifications';
import Drafts from '../components/pages/answer/Drafts'
import Requests from '../components/pages/answer/Requests'
import Spaces from '../components/pages/spaces/Spaces'

export const DarkMode = createContext();

const Quora = () => {
  const [darkMode, setDarkMode] = useState();

  if (!darkMode) {
    document.body.style.backgroundColor = "#ddd";
    document.body.style.color = "black"
  }
  else {
    document.body.style.backgroundColor = "#171717";
    document.body.style.color = "#b8b4b4";
  }

  return (
    <DarkMode.Provider value={{ darkMode, setDarkMode }}>
      <Box sx={{ display: 'flex', height: '100%', width: '100%', }}>
        
          <Navbar />

          <Box
            sx={{
              display: 'flex',
              pt: '65px',
              '@media (min-width: 480px)': {
                mx:0,
                width:'100%',
                
              },

              '@media (min-width: 1110px)': {
                mx: 'auto',
                width: '1105px',
              },



            }}>

            <Routes>
              <Route
                path="/"
                element={
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Sidebarleft />
                    <Homepage />
                    <Advertisingsection />
                  </div>
                }
              />

              <Route
                path="/following"
                element={
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Sidebarleft />
                    <Following />
                    <Advertisingsection />
                  </div>
                }
              />

              <Route
                path="/answer/*"
                element={
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Answerleftbar />
                    <Answer />
                    <RightBar />
                  </div>
                }
              />

              <Route
                path="/notifications/:type"
                element={
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Notificationleftbar />
                    <Notifications />
                    <RightBar />
                  </div>
                }
              />

              <Route
                path="/drafts"
                element={
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Answerleftbar />
                    <Drafts />
                    <RightBar />
                  </div>
                }
              />

              <Route
                path="/answer/requests"
                element={
                  <div style={{ display: 'flex', justifyContent: 'center' }}>
                    <Answerleftbar />
                    <Requests />
                    <RightBar />
                  </div>
                }
              />

              <Route
                path="/spaces"
                element={
                  <div style={{ display: 'flex', justifyContent: 'center', }}>
                    <Spaces />
                  </div>
                }
              />

            </Routes>

        </Box>
      </Box>
    </DarkMode.Provider>
  )
}

export default Quora