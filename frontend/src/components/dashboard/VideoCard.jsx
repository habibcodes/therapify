import { Box } from "@mui/system"
import { Typography, AppBar } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
// videoChat imports
import VideoPlayer from '../VideoChat/VideoPlayer'
import Sidebar from '../VideoChat/Sidebar';
import Notifications from '../VideoChat/Notifications';

const useStyles = makeStyles((theme) => ({

  
  image: {
    marginLeft: '15px',
  },
  wrapper: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
   
  },
  
}));
export default function Card() {
  const classes = useStyles();
  return (
    
        
    <Box className="clickbox" styles={{display:'flex',alignItems:'center'}} >
    
       
        {/* <AppBar className={classes.appBar} position='static'>
          <Typography variant='h2' align='center'>
            VideoChat
          </Typography>
        </AppBar> */}
        {/* vidPlayer */}
        <VideoPlayer />
        {/* Sidebar -->notifications */}
        {/* <Sidebar>
          <Notifications />
        </Sidebar> */}
        {/* webRTC */}
   
     
      </Box>
      


   
  )
}