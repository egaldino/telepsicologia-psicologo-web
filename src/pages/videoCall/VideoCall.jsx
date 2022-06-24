import React from 'react';

import { ContextProvider } from '../../context/VideoCallContext';

import VideoPlayer from './VideoPlayer';
import Sidebar from './Sidebar';
import Notifications from './Notifications';
import {AppBar, Container, Typography} from "@mui/material";

const VideoCall = () => {
    return (
        <ContextProvider>
            <Container sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                width: '100%',
            }}>
                <AppBar sx={{ width: '600px'}} position="static" color="inherit">
                    <Typography variant="h2" align="center">Video Chat</Typography>
                </AppBar>
                <VideoPlayer />
                <Sidebar>
                    <Notifications />
                </Sidebar>
            </Container>
        </ContextProvider>
    );
};

export default VideoCall;
