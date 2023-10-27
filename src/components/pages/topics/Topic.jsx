import { Box, Button, Card, CardMedia, Typography } from '@mui/material'
import React, { useContext, useEffect, useState } from 'react'
import Poison from '../../../images/Poison.jpg'
import Movie from '../../../images/movies.jpg'
import Sport from '../../../images/history.jpg';
import Technology from '../../../images/psychology.jpg';
import Health from '../../../images/books.jpg';
import Business from '../../../images/business.jpg';
import World from '../../../images/music.jpg';
import Science from '../../../images/history.jpg';
import TopicData from './TopicData';
import { DarkMode } from '../../../quora/Quora';
import { useParams } from 'react-router-dom';


const Topic = () => {

    const [content, setContent] = useState("Following ");
    const [textColor, setTextColor] = useState('gray');
    const [color, setColor] = useState("#e6dada");
    const [postList, setPostList] = useState();
    const [isLoading, setIsLoading] = useState(false);
    const { darkMode } = useContext(DarkMode);
    const { topics } = useParams();


    const handleClick = () => {
        if (content === "Following ") {
            setContent("Follow ");
            setColor("");
            setTextColor("");
        }
        else {
            setContent("Following ");
            setColor("#e6dada");
            setTextColor("gray");
        }
    }

    useEffect(() => {
        setIsLoading(true);

        const API_KEY = "ea3bb3a33db10a8b7cc968ab6773b57e"
        let url = `https://gnews.io/api/v4/top-headlines?category=${topics}&apikey=${API_KEY}&lang=en`;

        fetch(url)
            .then((res) => {
                if (!res.ok) {
                    throw new Error(`Network response was not ok: ${res.status}`);
                }
                return res.json();
            })
            .then((data) => {
                setPostList(data.articles);
                setIsLoading(false);
            })
            .catch((err) => {
                console.error('Error fetching data:', err);
                setIsLoading(false);
            });
        // eslint-disable-next-line
    }, [topics]);


    let textContent;
    let image;
    let following;
    switch (topics) {
        case 'sport':
            textContent = "Sports";
            image = Sport;
            following = "93.13M";
            break;
        case 'technology':
            textContent =  "Technology";
            image = Technology;
            following = "193M";
            break;
        case 'health':
            textContent = "Health";
            image = Health;
            following = "83.74M";
            break;
        case 'business':
            textContent = "Business";
            image = Business;
            following = "113M";
            break;
        case 'entertainment':
            textContent = "Entertainment" 
            image = (Movie)
            break;
        case 'world':
            textContent = "World"
            image = World;
            following = "323.56M";
            break;

        case 'science':
            textContent =  "Science";
            image = Science;
            following = "191M";
            break;

        default:
            textContent =  "Notifications";
             image = Poison;
             following = "13.3M";
            break;
    }


    return (
        <Box
            sx={{
                px: 1,
                height:'92vh',
                overflowY:'scroll',
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
                                src={image}
                                height='85px'
                                sx={{ width: '85px', borderRadius: '4px' }}
                            />

                        </Box>
                        <Box>
                            <Typography variant='h6' sx={{ fontWeight: '600', }} >{textContent}</Typography>
                            <Button sx={{ textTransform: 'inherit', borderRadius: '20px', color: `${textColor}`, border: `1px solid ${color}`, mt: '8px', fontSize: '13px', p: '0px 10px', }}
                                onClick={handleClick}
                            >{content}{following}</Button>
                        </Box>

                    </Box>
                </Card>
            </Box>
            {isLoading ? (
                <div style={{ marginTop: '20px' }}>loading...</div>
            ) : (

                postList?.map((post, index) => {
                    return <TopicData key={index} {...post} />;
                })
            )}
        </Box>
    )
}

export default Topic