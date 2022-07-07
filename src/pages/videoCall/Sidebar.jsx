import React, { useState, useContext } from 'react';
import { CopyToClipboard } from 'react-copy-to-clipboard';

import { SocketContext } from '../../context/VideoCallContext';
import {Button, Container, Grid, Paper, TextField, Typography} from "@mui/material";
import {Assignment, Logout, Mic, Phone, PhoneDisabled, Videocam, VideocamOff} from "@mui/icons-material";
import MicOffIcon from '@mui/icons-material/MicOff';
import Box from "@mui/material/Box";
import {Link as ReactRouterLink} from "react-router-dom";


const Sidebar = ({ children }) => {
  const { me, callAccepted, name, setName, callEnded, leaveCall, callUser } = useContext(SocketContext);
  const [idToCall, setIdToCall] = useState('');
  const [micOn] = useState(true);
  const [cameraOn] = useState(true);

  return (
    <Container sx={{width: "600px"}}>
      <Paper elevation={10}>
        <form noValidate autoComplete="off">
          <Grid container sx={{width: "100%"}}>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom variant="h6">Account Info</Typography>
              <TextField label="Name" value={name} onChange={(e) => setName(e.target.value)} fullWidth />
              <CopyToClipboard text={me}>
                <Button variant="contained" color="primary" fullWidth startIcon={<Assignment fontSize="large" />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            <Grid item xs={12} md={6}>
              <Typography gutterBottom variant="h6">Make a call</Typography>
              <TextField label="ID to call" value={idToCall} onChange={(e) => setIdToCall(e.target.value)} fullWidth />
              {callAccepted && !callEnded ? (
                <Button variant="contained" color="secondary" startIcon={<PhoneDisabled fontSize="large" />} fullWidth onClick={leaveCall}>
                  Hang Up
                </Button>
              ) : (
                <Button variant="contained" color="primary" startIcon={<Phone fontSize="large" />} fullWidth onClick={() => callUser(idToCall)}>
                  Call
                </Button>
              )}
            </Grid>
          </Grid>
        </form>
        {children}
      </Paper>
      <Box>
        {!micOn && <Button sx={ { marginX: .2, backgroundColor: 'darkgray', borderRadius: 28, color: 'white' } }>
          <MicOffIcon/>
        </Button>}

        {micOn && <Button sx={ { marginX: .2, backgroundColor: 'darkgray', borderRadius: 28, color: 'white' } }>
          <Mic />
        </Button>}

        {cameraOn && <Button sx={ { marginX: .2, backgroundColor: 'darkgray', borderRadius: 28, color: 'white' } }>
          <Videocam />
        </Button>}

        {!cameraOn && <Button sx={ { marginX: .2, backgroundColor: 'darkgray', borderRadius: 28, color: 'white' } }>
          <VideocamOff />
        </Button>}

        <Button component={ReactRouterLink} to={'/schedule'} sx={ { marginX: .2, backgroundColor: 'red', borderRadius: 28, color: 'white' } }>
          <Logout />
        </Button>
      </Box>

    </Container>
  );
};

export default Sidebar;
