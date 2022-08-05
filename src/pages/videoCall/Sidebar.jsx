import React, {useContext, useState} from 'react';

import {SocketContext} from '../../context/VideoCallContext';
import {Button, Container, Paper} from "@mui/material";
import {Logout, Mic, Videocam, VideocamOff} from "@mui/icons-material";
import MicOffIcon from '@mui/icons-material/MicOff';
import Box from "@mui/material/Box";


const Sidebar = ({ children }) => {
  const {  leaveCall } = useContext(SocketContext);
  const [micOn] = useState(true);
  const [cameraOn] = useState(true);

  return (
    <Container sx={{width: "600px"}}>
      <Paper elevation={10}>
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

        <Button onClick={leaveCall} sx={ { marginX: .2, backgroundColor: 'red', borderRadius: 28, color: 'white' } }>
          <Logout />
        </Button>
      </Box>

    </Container>
  );
};

export default Sidebar;
