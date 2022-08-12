import React, {useContext} from 'react';
import {SocketContext} from '../../context/VideoCallContext';
import { Grid, Paper} from "@mui/material";

const VideoPlayer = () => {
    const {callAccepted, myVideo, userVideo, callEnded, stream} = useContext(SocketContext);

    return (
        <>
            <Grid container>
                {stream && (
                    <Paper>
                        <Grid item xs={12} md={6}>
                            <video playsInline muted ref={myVideo} autoPlay style={{width: '550px'}}/>
                        </Grid>
                    </Paper>
                )}
                {callAccepted && !callEnded && (
                    <Paper>
                        <Grid item xs={12} md={6}>
                            <video playsInline ref={userVideo} autoPlay style={{width: '550px'}}/>
                        </Grid>
                    </Paper>
                )}
            </Grid>
        </>
    );
};

export default VideoPlayer;
