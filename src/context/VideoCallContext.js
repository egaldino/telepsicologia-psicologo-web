import React, { createContext, useEffect, useRef, useState } from 'react';
import Peer from 'simple-peer';

const SocketContext = createContext();

const socket = new WebSocket('wss://a884-138-117-220-105.sa.ngrok.io/socket');

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});
  const [me, setMe] = useState('');

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        myVideo.current.srcObject = currentStream;
      });

    socket.onmessage = (evt) => {
      const serverMessage = JSON.parse(evt.data);
      if (serverMessage.type === 'USER_ID') {
        setMe(serverMessage.sessionId);
      }

      if (serverMessage.type === 'CALL_USER') {
        setCall({ isReceivingCall: true, from: serverMessage.from, name: serverMessage.name, signal: serverMessage.signal });
      }
    };
  }, [myVideo]);

  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.send(JSON.stringify({ type: 'ANSWER_CALL', signal: data, to: call.from }));
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  };

  const callUser = (id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.send(JSON.stringify({ type: 'CALL_USER', userToCall: id, signal: data, from: me, name }));
    });

    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });

    socket.onmessage = (evt) => {
      const serverMessage = JSON.parse(evt.data);
      setCallAccepted(true);

      peer.signal(serverMessage.signal);
    };

    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    window.location.reload();
  };

  return (
    <SocketContext.Provider value={{
      call,
      callAccepted,
      myVideo,
      userVideo,
      stream,
      name,
      setName,
      callEnded,
      me,
      callUser,
      leaveCall,
      answerCall,
    }}
    >
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };
