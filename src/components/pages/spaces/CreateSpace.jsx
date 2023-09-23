import { Box, FormLabel, Typography } from '@mui/material'
import React, { useContext } from 'react'
import Controls from '../../controls/Controls'
import { useState } from 'react'
import { DarkMode } from '../../../quora/Quora'

const CreateSpace = () => {

    const [title, setTitle] = useState("");
    const [description, setDescription] =useState("");
    const {darkMode} = useContext(DarkMode)

    const handleCreateSpaceEvent =()=>{

    }

    return (
        <Box sx={{height:'420px', color:`${darkMode?'gray':''}`}}>
            <Typography variant='h6' sx={{fontWeight:'600'}}>Create a Space</Typography>
            <Typography variant='p' sx={{fontSize:'14px'}}>Share your interests, curate content, host discussions, and more.</Typography>
            <form style={{ marginTop: '10px' }} onSubmit={handleCreateSpaceEvent} >
                <Box sx={{mb:'35px'}}>
                <FormLabel style={{ fontSize: '14px', color:`${darkMode?'gray':''}`}}>Name</FormLabel>
                <p style={{margin:0, fontSize:'11px'}}>This can be changed in Space settings.</p>
                <Controls.Input
                    name='title'
                    type='text'
                    required
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                </Box>

                <Box sx={{mb:'35px'}}>
                <FormLabel style={{ fontSize: '14px', color:`${darkMode?'gray':''}` }}>Brief description</FormLabel>
                <p style={{margin:0, fontSize:'11px'}}>Include a few keywords to show people what to expect if they join.</p>
                <Controls.Input
                    name='description'
                    type='text'
                    required
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                </Box>
                
                <Controls.Button type='submit' text='Create' />
            </form>
        </Box>
    )
}

export default CreateSpace