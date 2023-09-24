import { Box } from '@mui/material'
import React, { useState, useEffect } from 'react'
import AddQuestion from '../../support/AddQuestion';
import FollowingData from './FollowingData';


const Following = () => {

  const [page, setPage] = useState(2);
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const handleInfiniteScroll = async () => {
    try {
      if (window.innerHeight + document.documentElement.scrollTop + 1 >=
        document.documentElement.scrollHeight) {
        if (page < 5) {
          setPage((prev) => prev + 1)
        }
      }
    } catch (err) {
      console.log(err);
    }
  }
  useEffect(() => {
    setIsLoading(true);
    fetch(`https://academics.newtonschool.co/api/v1/quora/post?limit=10&page=${page}`, {
      method: "GET",
      headers: {
        projectId: `bc73q6nn4srr`
      },
    })
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        setPostList((prev) => [...prev, ...data.data]);
        setIsLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setIsLoading(false);
      })
  }, [page]);

  useEffect(() => {
    window.addEventListener("scroll", handleInfiniteScroll)
    return () => window.removeEventListener("scroll", handleInfiniteScroll)
  })



  return (
    <Box sx={{
      px: 1,
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
        (postList.length && postList.map((post, index) => {
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