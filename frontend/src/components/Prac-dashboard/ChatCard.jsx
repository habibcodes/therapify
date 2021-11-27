import { Box } from '@mui/system';
import ChatBox from '../ChatBox/ChatBox';
import { Grid } from '@material-ui/core';

export default function Card() {
  return (
    <div>
      {/* <Box className='clickbox' sx={{ bgcolor: 'background.paper' }}>
        <div>Chat Session goes here</div>
        <ChatBox />
      </Box> */}
      <Grid container>
        <Grid item>
          <div>Chat Session goes here</div>
          <ChatBox />
        </Grid>
      </Grid>
      <div></div>
    </div>
  );
}
