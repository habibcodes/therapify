import { Box } from '@mui/system';
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// videoChat imports
import VideoPlayer from '../VideoChat/VideoPlayer';
import Sidebar from '../VideoChat/Sidebar';
import Notifications from '../VideoChat/Notifications';

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
export default function Card() {
  const classes = useStyles();
  return (
    <div>
      <Box className='clickbox' sx={{ bgcolor: 'background.paper' }}>
        <div className={classes.wrapper}>
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
      </Box>
      <div></div>
    </div>
  );
}
