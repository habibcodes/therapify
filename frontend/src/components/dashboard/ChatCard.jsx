import { Box } from '@mui/system';
import ChatBox from '../ChatBox/ChatBox';
// import JustChatBox from '../ChatBox/JustChatBox';

export default function Card() {
  return (
    // <div>
    <Box className='clickbox'>
      <ChatBox />
      {/* <JustChatBox /> */}
    </Box>
    // </div>
  );
}
