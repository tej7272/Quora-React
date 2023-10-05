import { Box, Button, Card, CardMedia, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import Science from '../../../images/science.jpg'
import TopicData from './TopicData';

const Topic = () => {

    const [content, setContent] = useState("Following 139.1M");
    const [textColor, setTextColor] = useState('gray');
    const [color, setColor] = useState("#e6dada");
    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);


    const handleClick = () => {
        if (content === "Following 139.1M") {
            setContent("Follow 139.1M");
            setColor("");
            setTextColor("");
        }
        else {
            setContent("Following 139.1M");
            setColor("#e6dada");
            setTextColor("gray");
        }
    }

    useEffect(() => {
        setIsLoading(true);
        fetch(`https://google-news13.p.rapidapi.com/science?lr=en-US`,{

        method : 'GET',
        headers : {
            'X-RapidAPI-Key': '76c3a26dfamsh92a9b6bf38ab622p1b636bjsndd215eab7646',
            'X-RapidAPI-Host': 'google-news13.p.rapidapi.com'
        }
    })
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Network response was not ok: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setPostList((prev) => [...prev, ...data.items]);
                setIsLoading(false);
                console.log("new Data", data);
            })
            .catch((err) => {
                console.error("Error fetching data:", err);
                setIsLoading(false);
            });
    }, []);

    return (
        <Box
            sx={{
                px: 1,
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
            <Box>
                <Card
                    sx={{
                        p: 1,
                        boxShadow: '0px 0px 3px 0px rgba(0,0,0,0.2)',
                        // background: `${darkMode ? '#292929' : ''}`,
                        // color: `${darkMode ? '#b8b4b4' : ''}`
                    }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', }}>
                        <Box sx={{ p: 1, mr: 1 }}>
                            <CardMedia component='img'
                                alt="image"
                                src={Science}
                                height='85px'
                                sx={{ width: '85px', borderRadius: '4px' }}
                            />

                        </Box>
                        <Box>
                            <Typography variant='h6' sx={{ fontWeight: '600', }} > Science</Typography>
                            <Button sx={{ textTransform: 'inherit', borderRadius: '20px', color: `${textColor}`, border: `1px solid ${color}`, mt: '8px', fontSize: '13px', p: '0px 10px', }}
                                onClick={handleClick}
                            >{content}</Button>
                        </Box>

                    </Box>
                </Card>
            </Box>
            {isLoading ? (
                <div>loading...</div>
            ) : (
                postList.length &&
                postList.map((post, index) => {
                    return <TopicData key={index} {...post} />;
                })
            )}
        </Box>
    )
}

export default Topic