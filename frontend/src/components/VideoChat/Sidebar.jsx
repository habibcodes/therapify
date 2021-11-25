import React, { useState, useContext } from 'react';
import {
  Button,
  TextField,
  Grid,
  Typography,
  Container,
  Paper,
} from '@material-ui/core';
import { CopyToClipboard } from 'react-copy-to-clipboard';
import { Assignment, Phone, PhoneDisabled } from '@material-ui/icons';
import { makeStyles } from '@material-ui/core/styles';
import VideocamIcon from '@mui/icons-material/Videocam';
import VideocamOffIcon from '@mui/icons-material/VideocamOff';
import Notifications from './Notifications';


import { SocketContext } from '../../Context';

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    
  },
  gridContainer: {
    
   
  },
  container: {
    position: 'fixed',
    bottom: 5
    
  },
 
  padding: {
    padding: 5,
  
  },
  paper: {
    padding: '10px 20px',
    
  },
}));

const Sidebar = ({ children }) => {
  console.log('sidebar props:', children);
  const {
    me,
    callAccepted,
    name,
    setName,
    videoState,
    setVideoState,
    callEnded,
    leaveCall,
    callUser,
  } = useContext(SocketContext);

  const [idToCall, setIdToCall] = useState('');

  const classes = useStyles();

  return (
    <Container className={classes.container}>
      <Notifications/>
     
      
        <form className={classes.root} noValidate autoComplete='off'>
          {/* xxxxxxxxxxxxx */}
          <Grid container className={classes.gridContainer}>
            <Grid item xs={12} md={6} className={classes.padding}>
              
              <TextField
                label='Name'
                value={name}
                onChange={(e) => setName(e.target.value)}
                fullWidth
              />
              {console.log(me)}
              <CopyToClipboard text={me} className={classes.margin}>
                <Button
                  variant='contained'
                  color='primary'
                  className={classes.padding}
                  
                  startIcon={<Assignment />}>
                  Copy Your ID
                </Button>
              </CopyToClipboard>
            </Grid>
            {/* xxxxxxxxxx */}
            <Grid item xs={12} md={6} className={classes.padding}>
            
              <TextField
                label='ID to Call'
                value={idToCall}
                onChange={(e) => setIdToCall(e.target.value)}
                fullWidth
              />
              {callAccepted && !callEnded ? (
                <Button
                  variant='contained'
                  color='secondary'
                  startIcon={<PhoneDisabled fontSize='large' />}
                
                  onClick={leaveCall}
                  className={classes.margin}>
                  Hang Up
                </Button>
              ) : (
                <Button
                  variant='contained'
                  color='primary'
                  startIcon={<Phone fontSize='large' />}
                  // fullWidth
                  onClick={() => callUser(idToCall)}
                  className={classes.margin}>
                  Call
                </Button>
                
              )}
            
            </Grid>
            <Grid item xs={12} md={6} className={classes.padding}>
            
              <Button
              variant='contained'
              color='primary'
              
                onClick={() => {
                  setVideoState(!videoState);
                }}>
                {videoState ? <VideocamOffIcon/> : <VideocamIcon/>}{''}
              </Button>
            </Grid>
          </Grid>
        </form>
        {children}
    
    </Container>
  );
};

export default Sidebar;
