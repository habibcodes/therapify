import { Box } from '@mui/system';
import ChatBox from '../ChatBox/ChatBox';
import JustChatBox from '../ChatBox/JustChatBox';

export default function Card() {
  return (
    <div>
      <Box className='clickbox' sx={{ bgcolor: 'background.paper' }}>
        <div>Chat Session goes here</div>
        <ChatBox />
        {/* <JustChatBox /> */}
      </Box>
      <div></div>
    </div>
  );
}
