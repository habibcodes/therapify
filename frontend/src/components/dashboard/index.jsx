import Box from '@mui/material/Box';
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
import { Container, Grid, Divider } from '@mui/material';
import CalendarCard from './CalendarCard'
import CompletedCard from './CompletedCard'
import PracCard from './PracCard'
import VideoCard from './VideoCard'
import ChatCard from './ChatCard'
import useVisualMode from '../../hooks/useVisualMode';

const EMPTY = "EMPTY"
const CALENDAR = "CALENDAR"
const COMPLETED = "COMPLETED"
const PRAC = "PRAC"
const VIDEO = "VIDEO"
const CHAT = "CHAT"

export default function Dashboard(){
  const {mode, transition } = useVisualMode(EMPTY)
return (
  <div>
  
 <Container>
  <Grid container spacing={1}>
  <Grid item xs>
  <Box className="dashbox">
      <nav aria-label="main mailbox folders">
        <List>
          <ListItem>
            <ListItemButton onClick={() => transition(mode === CALENDAR? EMPTY : CALENDAR)} >
              <ListItemIcon>
                <CalendarTodayIcon style={{fill: "black"}}/>
              </ListItemIcon>
              <ListItemText className="itemtext" primary="Upcoming Sessions" />
            </ListItemButton>
          </ListItem>
          <Divider className="divider" />
          <ListItem>
            <ListItemButton onClick={()=> transition(mode === COMPLETED? EMPTY : COMPLETED)} >
              <ListItemIcon>
                <EventAvailableIcon style={{fill: "black"}}/>
              </ListItemIcon>
              <ListItemText className="itemtext" primary="Completed Sessions" />
            </ListItemButton>
          </ListItem>
          <Divider className="divider" />
          <ListItem>
            <ListItemButton onClick={()=> transition(mode === PRAC? EMPTY : PRAC)} >
              <ListItemIcon>
                <PersonSearchIcon style={{fill: "black"}}/>
              </ListItemIcon>
              <ListItemText className="itemtext" primary="Practitioners" />
            </ListItemButton>
          </ListItem>
          <Divider className="divider"/>
          <ListItem>
            <ListItemButton onClick={()=> transition(mode === VIDEO? EMPTY : VIDEO)} >
              <ListItemIcon>
                <VideocamIcon style={{fill: "darkred"}}/>
              </ListItemIcon>
              <ListItemText className="itemtext" primary="Video Session" />
            </ListItemButton>
          </ListItem>
          <Divider className="divider"/>
          <ListItem>
            <ListItemButton onClick={()=> transition(mode === CHAT? EMPTY : CHAT)}>
              <ListItemIcon>
                <ChatIcon style={{fill: "black"}}/>
              </ListItemIcon>
              <ListItemText className="itemtext" primary="Chat Session" />
            </ListItemButton>
          </ListItem>
          
        </List>
      </nav>
     
    </Box>
    </Grid>
    <Grid item lg>
    {mode === CALENDAR && (
    <CalendarCard/>
    )}
    {mode === COMPLETED && (
    <CompletedCard/>
    )}
    {mode === PRAC && (
    <PracCard/>
    )}
    {mode === VIDEO && (
    <VideoCard/>
    )}
     {mode === CHAT && (
    <ChatCard/>
    )}

  </Grid>
  
      </Grid>
      </Container>
  
  

  </div>
)
}