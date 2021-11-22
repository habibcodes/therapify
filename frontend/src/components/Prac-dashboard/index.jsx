
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './prac-dashboard.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import AssignmentIndIcon from '@mui/icons-material/AssignmentInd';

export default function Dashboard(){
return (
  <div>
  
  <Container maxWidth="sm">
  <Box className="dashbox" sx={{ maxWidth: 360, bgcolor: 'background.paper' }}>
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <CalendarTodayIcon style={{fill: "black"}}/>
              </ListItemIcon>
              <ListItemText primary="Upcoming Sessions" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <EventAvailableIcon style={{fill: "black"}}/>
              </ListItemIcon>
              <ListItemText primary="Completed Sessions" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <AssignmentIndIcon style={{fill: "black"}}/>
              </ListItemIcon>
              <ListItemText primary="Patient List" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <VideocamIcon style={{fill: "darkred"}}/>
              </ListItemIcon>
              <ListItemText primary="Video Session" />
            </ListItemButton>
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <ChatIcon style={{fill: "black"}}/>
              </ListItemIcon>
              <ListItemText primary="Chat Session" />
            </ListItemButton>
          </ListItem>
          
        </List>
      </nav>
     
    </Box>
    <div>
      
    </div>
  
  
  </Container>
  </div>
)
}