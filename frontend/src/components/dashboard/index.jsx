
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import './dashboard.css'
import VideocamIcon from '@mui/icons-material/Videocam';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import ChatIcon from '@mui/icons-material/Chat';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import EventAvailableIcon from '@mui/icons-material/EventAvailable';
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import { Grid } from '@mui/material';
import Card from './card'
import useVisualMode from '../../hooks/useVisualMode';
const EMPTY = "EMPTY"
const CALENDAR = "CALENDAR"

export default function Dashboard(){
  const {mode, transition, back} = useVisualMode
return (
  <div>
  

  <Grid container spacing={1}>
  <Grid item xs>
  <Box className="dashbox" sx={{ maxWidth: 300, bgcolor: 'background.paper' }}>
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
                <PersonSearchIcon style={{fill: "black"}}/>
              </ListItemIcon>
              <ListItemText primary="Practitioners" />
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
    </Grid>
    <Grid item lg>
    <Card/>
  </Grid>
  
      </Grid>
  
  

  </div>
)
}