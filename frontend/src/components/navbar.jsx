import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
<<<<<<< HEAD
import './navbar.css'
import { Link } from 'react-router-dom'
import { SiTomorrowland } from 'react-icons/si'

=======
import MenuIcon from '@mui/icons-material/Menu';
import './navbar.css';
import { Link } from 'react-router-dom';
import { SiTomorrowland } from 'react-icons/si';
>>>>>>> origin/master

export default function ButtonAppBar() {
  return (
    <Box>
      <AppBar className='nav1' position='static'>
        <Toolbar>
          <IconButton color='inherit'>
            <SiTomorrowland size={'1.4em'} />
          </IconButton>
          <Typography variant='h6' component='div' sx={{ flexGrow: 1 }}>
            Therapify
          </Typography >
          <Button component = {Link} to='/stack' color="inherit">About</Button>
          <Button component = {Link} to='/' color="inherit">Home</Button>
          
          <Button component = {Link} to='/login' color="inherit">Login</Button>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
