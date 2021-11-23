/* All socket.io logic is here  */
import { createContext, useState, useRef, useEffect } from 'react';
import { io } from 'socket.io-client';
import Peer from 'simple-peer';
import { setMaxListeners } from '../../backend/app';

const SocketContext = createContext();

const socket = io('htt://localhost:5000');

const ContextProvider = ({ children }) => {
  // hold stream state
  const [stream, setStream] = useState(null);
  // set the local feed 'me' state
  const [me, setMe] = useState('');
  // sets call state
  const [call, setCall] = useState({});
  // sets state for callAccepted and callEnded
  const [callAccepted, setCallAccepted] = useState(false);
  const [callEnded, setCallEnded] = useState(false);
  // sets state for name of caller to local
  const [name, setName] = useState('');

  // reference for local video
  const myVideo = useRef();
  // reference for other user video
  const userVideo = useRef();
  // reference for connection to peer
  const connectionRef = useRef();

  useEffect(() => {
    // get media devices and set audio/video to on
    // then set the stream to the currentStream feed
    navigator.mediaDevices
      .getUserMedia({ video: true, audio: true })
      .then((currentStream) => {
        setStream(currentStream);
        // now set my video stream src to the currentStream feed
        myVideo.current.srcObject = currentStream;
      });
    // listens to the backend 'me' emitter
    socket.on('me', (id) => setMaxListeners(id));

    // listens for the 'calluser' emitter
    socket.on('calluser', ({ from, name: callerName, signal }) => {
      setCall({ isReceivedCall: true, from, name: callerName, signal });
    });
  }, []);

  // logic for when local computer accepts call from other user
  const answerCall = () => {
    setCallAccepted(true);

    const peer = new Peer({ initiator: false, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('answercall', { signal: data, to: call.from });
    });
    // other user's stream
    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
    // coming from our socket when we 'calluser'
    peer.signal(call.signal);

    // sets current peer equal to the current peer in our connection
    connectionRef.current = peer;
  };

  // logic for when local computer makes the call to other user
  const callUser = (id) => {
    //
    const peer = new Peer({ initiator: true, trickle: false, stream });

    peer.on('signal', (data) => {
      socket.emit('calluser', {
        userToCall: id,
        signalData: data,
        from: me,
        name,
      });
    });
    // other user's stream
    peer.on('stream', (currentStream) => {
      userVideo.current.srcObject = currentStream;
    });
    // can accept/not accept call, refers to 'callaccepted' emitter
    socket.on('callaccepted', (signal) => {
      setCallAccepted(true);
      // set peer to the signal coming in
      peer.signal(signal);
    });
    // the connection is now equal to peer
    connectionRef.current = peer;
  };

  const leaveCall = () => {
    setCallEnded(true);
    // terminates feed to media device
    connectionRef.current.destroy();
    // remove artifact of peer feed after call terminates
    // lets you call another peer right after ending previous call
    window.location.reload();
  };

  return (
    <SocketContext.Provider
      value={{
        me,
        call,
        stream,
        myVideo,
        userVideo,
        callAccepted,
        callEnded,
        setName,
        callUser,
        answerCall,
        leaveCall,
      }}>
      {children}
    </SocketContext.Provider>
  );
};

export { ContextProvider, SocketContext };