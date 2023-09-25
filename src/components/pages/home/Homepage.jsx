import React, { useState, useEffect, useContext } from 'react'
import { Box } from '@mui/material'
import AddQuestion from '../../support/AddQuestion';
import HomeData from './HomeData';
import { SearchContext } from '../../../quora/Quora';


const Homepage = () => {

  const [page, setPage] = useState(1);
  const [postList, setPostList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [filteredPostList, setFilteredPostList] = useState([]);
  const {searchTerm} = useContext(SearchContext);


  const handleInfiniteScroll = async() =>{
      try {
        if(window.innerHeight + document.documentElement.scrollTop + 1 >= 
          document.documentElement.scrollHeight){
            if(page < 5){
            setPage((prev) => prev+1)
            }
          }
      }catch(err){
        console.log(err);
      }
  }

  useEffect(()=>{
    setIsLoading(true);
      fetch(`https://academics.newtonschool.co/api/v1/quora/post?limit=10&page=${page}` ,{
          method: "GET",
          headers:{
              projectId: `bc73q6nn4srr`
          },
      })
      .then((res)=>{
          return res.json();
      })
      .then((data)=>{
          setPostList((prev)=> [...prev, ...data.data]);
          setIsLoading(false);
      })
      .catch((err)=>{
          console.log(err);
          setIsLoading(false);
      })
  }, [page]);


  useEffect(() => {
    if (!searchTerm) {

      setFilteredPostList(postList);
    } 
    else
     {
      const filteredPosts = postList?.filter((post) =>

        post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        post.content.toLowerCase().includes(searchTerm.toLowerCase())
      );
      setFilteredPostList(filteredPosts);
    }

    // eslint-disable-next-line
  }, [searchTerm, postList]);

  useEffect(()=>{
    window.addEventListener("scroll", handleInfiniteScroll)
    return () => window.removeEventListener("scroll", handleInfiniteScroll)
  })

  return (
    <Box
      sx={{
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

      {isLoading ? (
        <div>loading...</div>
      ) : (
        filteredPostList.length &&
        filteredPostList.map((post, index) => {
          return <HomeData key={index} {...post} />;
        })
      )}

    </Box>
  )
}

export default Homepage