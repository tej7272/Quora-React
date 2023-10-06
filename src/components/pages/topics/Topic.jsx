import { Box, Button, Card, CardMedia, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Poison from '../../../images/Poison.jpg'
import TopicData from './TopicData';
import { DarkMode } from '../../../quora/Quora';
import { useParams } from 'react-router-dom';


const Topic = () => {

    const [content, setContent] = useState("Following 139.1M");
    const [textColor, setTextColor] = useState('gray');
    const [color, setColor] = useState("#e6dada");
    const [postList, setPostList] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const { darkMode } = useContext(DarkMode);
    const { topics } = useParams();


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
    
        const requestOptions = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'X-RapidAPI-Key': 'ce9d1cc48amsh72b0f047a0f9e48p155164jsnab2bdb174cf0',
                'X-RapidAPI-Host': 'newsnow.p.rapidapi.com',
            },
            body: JSON.stringify({
                query: 'AI',
                page: 1,
                time_bounded: true,
                from_date: '01/02/2021',
                to_date: '05/06/2021',
                location: '',
                category: '',
                source: topics,
            }),
        };
    
        fetch('https://newsnow.p.rapidapi.com/newsv2', requestOptions)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Network response was not ok: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setPostList(data.news);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setIsLoading(false);
            });
        // eslint-disable-next-line
    }, [topics]);

    let textContent;
    switch (topics) {
        case 'sport':
            textContent = (
                <>
                    Sports
                </>
            );
            break;
        case 'technology':
            textContent = (
                <>
                    Technology
                </>
            );
            break;
        case 'health':
            textContent = (
                <>
                    Health
                </>
            );
            break;
        case 'business':
            textContent = (
                <>
                    Business
                </>
            );
            break;
        case 'entertainment':
            textContent = (
                <>
                    Entertainment
                </>
            );
            break;
        case 'world':
            textContent = (
                <>
                    World
                </>
            );
            break;

        case 'science':
            textContent = (
                <>
                    Science
                </>
            );
            break;

        default:
            textContent = (
                <>
                    Notifications
                </>
            );
            break;
    }


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
                        background: `${darkMode ? '#292929' : ''}`,
                        color: `${darkMode ? '#b8b4b4' : ''}`
                    }}>
                    <Box sx={{ display: 'flex', alignItems: 'center', }}>
                        <Box sx={{ p: 1, mr: 1 }}>
                            <CardMedia component='img'
                                alt="image"
                                src={Poison}
                                height='85px'
                                sx={{ width: '85px', borderRadius: '4px' }}
                            />

                        </Box>
                        <Box>
                            <Typography variant='h6' sx={{ fontWeight: '600', }} >{textContent}</Typography>
                            <Button sx={{ textTransform: 'inherit', borderRadius: '20px', color: `${textColor}`, border: `1px solid ${color}`, mt: '8px', fontSize: '13px', p: '0px 10px', }}
                                onClick={handleClick}
                            >{content}</Button>
                        </Box>

                    </Box>
                </Card>
            </Box>
            {isLoading ? (
                <div style={{marginTop:'20px'}}>loading...</div>
            ) : (

                postList?.map((post, index) => {
                    return <TopicData key={index} {...post} />;
                })
            )}
        </Box>
    )
}

export default Topic