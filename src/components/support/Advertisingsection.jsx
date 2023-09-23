import { Box, } from '@mui/material'
import React, { useContext } from 'react'
import Amazon from '../adsImages/Amazon.png';
import Aws from '../adsImages/Aws.png';
import Facebook from '../adsImages/Facebook.png';
import Google from '../adsImages/Google.png';
import { DarkMode } from '../../quora/Quora';

const boxStyles = {
  display: 'flex',
  alignItems: 'flex-start',
  justifyContent: 'space-between',
  height: '133px',
  overflow: 'hidden',
  mb: '10px',
  p: '15px 0px',
  borderRadius: '10px',
  ':hover': {
    transform: 'scale(1.03)',
  },
  '@media (min-width: 900px)': {
    width:'240px'
  },
  '@media (min-width: 1000px)': {
    width:'280px'
  },
  '@media (min-width: 1100px)': {
    width:'320px'
  },
}


const Advertisingsection = () => {

  const { darkMode } = useContext(DarkMode);
  return (
    <Box sx={{
      width: '30%',
      borderRadius: '4px',
      display: {
        xs: 'none',
        sm: 'none',
        md: 'flex',
        lg: 'flex',
        xl: 'flex',
      },
    }}>
      <Box>
        <Box>
          <h4>Space to follow</h4>
        </Box>

        <Box sx={{ m: '0px 5px', }}>
          <Box sx={{ ...boxStyles, backgroundColor: `${darkMode ? '#292929' : '#b9b8b8'}` }}>
            <img
              src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAMAAABEpIrGAAAASFBMVEVHcEwAZqAAZqAAZqAAZqAAZqAac44QbZcwhXVKn0NVqiY/lFxTpzBLpCRDoRSkzZfN48ZztVzo8uS316z///9erD9+ummWxocMdzpcAAAABnRSTlMAQLLw/7UcxRBoAAAAvUlEQVR4AbWTRQLEIAwA6wYJDv9/6dadktNOFZhLLJvIi7KKUBZ5tlBXn9TE+WLkVZI8K9JCkZVpocwqgovQNE37KbRdPyz0rGuqmY7dhGHgO7PVT/pD4C/eAgAgAp9ecQGEVFIbNFoqiAmo7czydh+CRGGtB20DxAUPzmpEY0VSgP8JUitwWiIIHSCaKJxeiPNPJA9kqifWSu3qo1h9165lbzrGF7urdiHCtXPIliOblm57cnDI0aOHlxj/EZJpGuuBM4/FAAAAAElFTkSuQmCC"
              alt=""
            />
            <Box sx={{ ml: '15px' }}>
              <h5 style={{ margin: 0 }}>Money Control</h5>
              <p style={{ fontSize: '14px' }}>
                Share market news, Finance News, Sensex, Nifty Live, Commodity
                Market, IPO news, economy news, and personal finance news today only
                at Moneycontrol.
              </p>
            </Box>
          </Box>
          <Box sx={{ ...boxStyles, backgroundColor: `${darkMode ? '#292929' : '#b9b8b8'}` }}>
            <img
              src={Google}
              alt="quora"
              style={{ height: '32px' }}
            />
            <Box sx={{ ml: '15px' }}>
              <h5 style={{ margin: 0 }}>Art & Artist</h5>
              <p style={{ fontSize: '14px' }}>
                an artist is someone who creates art, whether it is music, dancing,
                painting or sculpture. In a broader sense, it is possible to find an
                artist even in a non-artistic field, most importantly because of
                their artistic mastery and creativity in problem-solving skills.
              </p>
            </Box>
          </Box>
          <Box sx={{ ...boxStyles, backgroundColor: `${darkMode ? '#292929' : '#b9b8b8'}` }}>
            <img
              src={Aws}
              alt="aws"
              style={{ height: '32px' }}
            />
            <Box sx={{ ml: '15px' }}>
              <h5 style={{ margin: 0 }}>Mobile App Programmer</h5>
              <p style={{ fontSize: '14px' }}>
                Looking for dedicated developers in India? Hire from PROVAB on
                monthly or hourly contract. Hire Within A Week. Top Certified
                Developers. Clients in 48 Countries. 300+ Top Programmers.
              </p>
            </Box>
          </Box>
          <Box sx={{ ...boxStyles, backgroundColor: `${darkMode ? '#292929' : '#b9b8b8'}` }}>
            <img
              src={Amazon}
              alt="Amazon"
              style={{ height: '32px' }}
            />
            <Box sx={{ ml: '15px' }}>
              <h5 style={{ margin: 0 }}>Quota of Quotes</h5>
              <p style={{ fontSize: '14px' }}>
                If you’re looking for inspiration, you’ve come to the right place.
                Words are powerful, and there’s an incredible amount of quotes to
                discover on Pinterest for a bit of wisdom, a boost of confidence or
                simple entertainment. The wide variety of quotes available makes it
                possible to find a message to suit your needs, whether it’s kind
                words to share with a friend or a powerful statement from an
                influential leader to spark change. Browse the featured articles for
                a round-up of quotes that fit under a specific theme, tap into a
                page of quotes for daily inspiration, and check out the Top 10 quote
                ideas for ways to use the words in your everyday living. See the
                current trending searches with wise words about love, mindfulness,
                humor and more.
              </p>
            </Box>
          </Box>
          <Box sx={{ ...boxStyles, backgroundColor: `${darkMode ? '#292929' : '#b9b8b8'}` }}>
            <img
              src={Facebook}
              alt=""
              style={{ height: '32px' }}
            />
            <Box sx={{ ml: '15px' }}>
              <h5 style={{ margin: 0 }}>Friedrich Nietzche</h5>
              <p style={{ fontSize: '14px' }}>
                Nietzsche's writing spans philosophical polemics, poetry, cultural
                criticism, and fiction while displaying a fondness for aphorism and
                irony.
              </p>
            </Box>
          </Box>
        </Box>
      </Box>
    </Box>
  )
}

export default Advertisingsection