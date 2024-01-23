import React, { useState, useEffect, useContext } from 'react'
import { Box } from '@mui/material'
import AddQuestion from '../../support/AddQuestion';
import HomeData from './HomeData';
import { SearchContext } from '../../../quora/Quora';
import { useGetPostDataQuery } from '../../../services/productApi';


const Homepage = () => {

  const [filteredPostList, setFilteredPostList] = useState([]);
  const { searchTerm } = useContext(SearchContext);


  const { data: postData,isLoading } = useGetPostDataQuery();

  useEffect(() => {
    if (!searchTerm) {

      setFilteredPostList(postData?.data);
    }
    else {
      const filteredPosts = postData?.data?.filter((post) =>

        post?.title?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post?.content?.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPostList(filteredPosts);
    }


  }, [searchTerm, postData]);

  return (
    <Box
      sx={{
        px: 1,
        height: '92vh',
        overflowY: 'scroll',
        '@media (min-width: 300px)': {
          width: '100%'
        },
        '@media (min-width: 600px)': {
          ml: '16px',
          width: '70%'
        },
        '@media (min-width: 900px)': {
          mx: '16px',
          width: '55%'
        },
        '@media (min-width: 1100px)': {
          mx: '16px',
          width: '610px'
        }
      }}>
        <AddQuestion />
      {isLoading ? (
        <div>loading...</div>
      ) : (
        
          
          filteredPostList?.map((post, index) => {
            return <HomeData key={index} {...post} />;
          })

      )
      }

    </Box>
  )
}

export default Homepage