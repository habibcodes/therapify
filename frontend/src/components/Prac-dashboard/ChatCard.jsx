import { Box } from '@mui/system';
import ChatBox from '../ChatBox/ChatBox';

export default function Card() {
  return (
    <div>
      <Box className='clickbox' sx={{ bgcolor: 'background.paper' }}>
        <div>Chat Session goes here</div>
        <ChatBox />
      </Box>
      <div></div>
    </div>
  );
}
