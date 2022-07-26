import React, {createContext, useCallback, useEffect, useRef, useState} from 'react';
import Peer from 'simple-peer';
import {useNavigate, useParams} from "react-router-dom";
import {useSelector} from "react-redux";

const SocketContext = createContext();

const socket = new WebSocket('wss://6a8b-138-117-221-171.sa.ngrok.io/socket');

const ContextProvider = ({ children }) => {
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  const [stream, setStream] = useState();
  const [name, setName] = useState('');
  const [call, setCall] = useState({});

  const myVideo = useRef();
  const userVideo = useRef();
  const connectionRef = useRef();

  const {patientId} = useParams();

  const navigate = useNavigate();

  const userId = useSelector(state => state.value.user.id);

  useEffect(() => {
    navigator.mediaDevices.getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
      });
  }, []);

  useEffect(()=> {
    if(myVideo.current) myVideo.current.srcObject = stream;
  }, [stream])
  
  useEffect(()=> {
    socket.onmessage = (evt) => {
      const serverMessage = JSON.parse(evt.data);

      if (serverMessage.type === 'CALL_USER') {
        setCall({ isReceivingCall: true, from: serverMessage.from, name: serverMessage.name, signal: serverMessage.signal });
      }
    };
  }, [])

  const answerCall = useCallback(() => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.send(JSON.stringify({ type: 'ANSWER_CALL', signal: data, to: call.from }));
    });

    peer.on('stream', (currentStream) => {
      console.log({currentStream})
      userVideo.current.srcObject = currentStream;
    });

    peer.signal(call.signal);

    connectionRef.current = peer;
  }, [call, stream]);

  const callUser = useCallback((id) => {
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.send(JSON.stringify({ type: 'CALL_USER', userToCall: id, signal: data, from: userId, name }));
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
  }, [userId, name, stream]);

  useEffect(()=> {
    socket.send(JSON.stringify({ type: 'REGISTER', from: userId}));
  }, [userId])

  useEffect(() =>{
    if(patientId){
      callUser(patientId)
    }
  }, [callUser, patientId])

  useEffect(() => {
    if(call.signal){
      answerCall();
    }
  }, [answerCall, call])


  const leaveCall = () => {
    setCallEnded(true);

    connectionRef.current.destroy();

    navigate("/history")
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
      me: userId,
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
