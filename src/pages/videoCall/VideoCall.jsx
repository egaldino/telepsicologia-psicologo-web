import React from 'react';

import { ContextProvider } from '../../context/VideoCallContext';


import VideoPlayer from './VideoPlayer';
import Sidebar from './Sidebar';
import Notifications from './Notifications';
import {AppBar, makeStyles, Typography} from "@mui/material";

const useStyles = makeStyles((theme) => ({
    appBar: {
        borderRadius: 15,
        margin: '30px 100px',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        width: '600px',
        border: '2px solid black',

        [theme.breakpoints.down('xs')]: {
            width: '90%',
        },
    },
    image: {
        marginLeft: '15px',
    },
    wrapper: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        width: '100%',
    },
}));

const VideoCall = () => {
    const classes = useStyles();

    return (
        <ContextProvider>
            <div className={classes.wrapper}>
                <AppBar className={classes.appBar} position="static" color="inherit">
                    <Typography variant="h2" align="center">Video Chat</Typography>
                </AppBar>
                <VideoPlayer />
                <Sidebar>
                    <Notifications />
                </Sidebar>
            </div>
        </ContextProvider>
    );
};

export default VideoCall;
