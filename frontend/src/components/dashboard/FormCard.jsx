import { Box } from "@mui/system"
import { FormControl, TextField, FormHelperText, Typography } from '@mui/material'
import { useState } from 'react'
import { styled } from '@mui/material/styles';
import { purple } from "@mui/material/colors";
import { Button } from "@material-ui/core";


import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';

import Checkbox from '@mui/material/Checkbox';

export default function Card() {
 
  const ColorButton = styled(Button)(({ theme }) => ({
    color: theme.palette.getContrastText(purple[500]),
    backgroundColor: purple[500],
    '&:hover': {
      backgroundColor: purple[700],
    },
  }));
  

  const [state, setState] = useState({
    anxiety: false,
    depression: false,
    PTSD: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    console.log(state)
  };

  const { anxiety, depression, PTSD } = state;
  


  return (
    <div>
        
    <Box className="clickbox" sx={{ bgcolor: 'background.paper' }}>
    
      <form>
      <FormControl sx={{ m: 3 }}>
      <TextField id="standard-basic" label="Name" variant="standard" />
      <br/>
      <Typography>Reason for visit</Typography>
        <FormHelperText>(Select all that apply)</FormHelperText>
        <FormGroup>
          <FormControlLabel
            control={
              <Checkbox checked={anxiety} onChange={handleChange} name="anxiety" />
            }
            label="Anxiety"
          />
          <FormControlLabel
            control={
              <Checkbox checked={depression} onChange={handleChange} name="depression" />
            }
            label="Depression"
          />
          <FormControlLabel
            control={
              <Checkbox checked={PTSD} onChange={handleChange} name="PTSD" />
            }
            label="PTSD"
          />
        </FormGroup>
        <TextField
          id="outlined-multiline-static"
          label="Extra Info"
          multiline
          rows={4}
          
        />
        <br/>
        <ColorButton type="submit" variant="contained">Submit</ColorButton>

      </FormControl>
      
      </form>
     
    </Box>
   </div>
     
    
    
        
    


  )
}