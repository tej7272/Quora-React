import { Box } from '@mui/material'
import React from 'react'
import AddQuestion from '../../support/AddQuestion';
import FollowingData from './FollowingData';
import { useGetPostDataQuery } from '../../../services/productApi';


const Following = () => {

  const {data : postData, isLoading} = useGetPostDataQuery();

  const followingData = postData?.data?.slice(15);

  return (
    <Box sx={{
      px: 1,
      height:'92vh',
      overflowY:'scroll',
      '@media (min-width: 300px)': {
        width:'100%'
      },
      '@media (min-width: 600px)': {
        ml:'16px',
        width:'70%'
      },
      '@media (min-width: 900px)': {
        mx:'16px',
        width:'55%'
      },
      '@media (min-width: 1100px)': {
        mx:'16px',
        width:'610px'
      }
    }}>
      <AddQuestion />

      {isLoading ? <div>loading...</div> :
        (followingData?.map((post, index) => {
          return (
            <FollowingData key={index} {...post} />
          )
        }
        ))
      }
    </Box>
  )
}

export default Following