import React, {useContext} from 'react';
import {SocketContext} from '../../context/VideoCallContext';
import { Grid, Paper, Typography} from "@mui/material";

const VideoPlayer = () => {
    const {name, callAccepted, myVideo, userVideo, callEnded, stream, call} = useContext(SocketContext);

    return (
        <>
            <Grid container>
                {stream && (
                    <Paper>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>{name || 'Name'}</Typography>
                            <video playsInline muted ref={myVideo} autoPlay style={{width: '550px'}}/>
                        </Grid>
                    </Paper>
                )}
                {callAccepted && !callEnded && (
                    <Paper>
                        <Grid item xs={12} md={6}>
                            <Typography variant="h5" gutterBottom>{call.name || 'Name'}</Typography>
                            <video playsInline ref={userVideo} autoPlay style={{width: '550px'}}/>
                        </Grid>
                    </Paper>
                )}
            </Grid>
        </>
    );
};

export default VideoPlayer;
