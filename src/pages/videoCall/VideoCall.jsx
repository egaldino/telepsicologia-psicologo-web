import React from 'react';

import {ContextProvider} from '../../context/VideoCallContext';

import VideoPlayer from './VideoPlayer';
import Sidebar from './Sidebar';
import Notifications from './Notifications';
import {Container, createTheme, CssBaseline, ThemeProvider} from "@mui/material";

const theme = createTheme ({
    palette: {
        background: {
            default: "#222222"
        },
        text: {
            primary: "#ffffff"
        }
    }
});

const VideoCall = () => {
    return (
        <ContextProvider>
            <ThemeProvider theme={theme}>
                <CssBaseline />
                <Container sx={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    width: '100%'
                }}>
                    <VideoPlayer />
                    <Sidebar>
                        <Notifications />
                    </Sidebar>
                </Container>
            </ThemeProvider >
        </ContextProvider>
    );
};

export default VideoCall;
