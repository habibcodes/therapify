import './App.css';
import { CssBaseline } from '@mui/material';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar';
import Landing from './components/landing';
import Dashboard from './components/dashboard';
import Background from './components/background';
import PracDash from './components/Prac-dashboard';
// videoChat styling Imports
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// videoChat imports
import VideoPlayer from './components/VideoChat/VideoPlayer';
import Sidebar from './components/VideoChat/Sidebar';
import Notifications from './components/VideoChat/Notifications';

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

function App() {
  const classes = useStyles();
  return (
    <BrowserRouter>
      <div className={classes.wrapper}>
        {/* <CssBaseline />
        <Navbar />
        <Background />

        <Routes>
          <Route path='/' element={<Landing />} />
          <Route path='/dashboard' element={<Dashboard />} />
          <Route path='/pracdash' element={<PracDash />} />
          <Route path='/video-chat' element={<VideoPlayer />} />
        </Routes> */}

        {/* webRTC */}
        <AppBar className={classes.appBar} position='static'>
          <Typography variant='h2' align='center'>
            VideoChat
          </Typography>
        </AppBar>
        {/* vidPlayer */}
        <VideoPlayer />
        {/* Sidebar -->notifications */}
        <Sidebar>
          <Notifications />
        </Sidebar>
        {/* webRTC */}
      </div>
    </BrowserRouter>
  );
}

export default App;
