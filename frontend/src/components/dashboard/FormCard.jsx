import { Box } from '@mui/system';
import {
  FormControl,
  TextField,
  FormHelperText,
  Typography,
  Stack,
} from '@mui/material';
import { useState } from 'react';
import { styled } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { Button } from '@material-ui/core';

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
    OCD: false,
    socialAnxiety: false,
    eatingDisorder: false,
  });

  const handleChange = (event) => {
    setState({
      ...state,
      [event.target.name]: event.target.checked,
    });
    console.log(state);
  };

  const {
    anxiety,
    depression,
    PTSD,
    OCD,
    socialAnxiety,
    eatingDisorder,
  } = state;

  return (
    <div>
      <Box className='clickbox' sx={{ bgcolor: 'background.paper' }}>
        <form>
          <FormControl sx={{ m: 3 }}>
            <TextField
              id='standard-basic'
              label='Full Name'
              variant='standard'
            />
            <br />
            <TextField
              id='date'
              label='DoB'
              type='date'
              defaultValue='1975-01-01'
              sx={{ width: 220 }}
              InputLabelProps={{
                shrink: true,
              }}
            />
            <br />
            <Typography>Reason for visit</Typography>
            <FormHelperText>(Select all that apply)</FormHelperText>
            <FormGroup>
              <FormControlLabel
                control={
                  <Checkbox
                    checked={anxiety}
                    onChange={handleChange}
                    name='anxiety'
                  />
                }
                label='Anxiety'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={depression}
                    onChange={handleChange}
                    name='depression'
                  />
                }
                label='Depression'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={PTSD}
                    onChange={handleChange}
                    name='PTSD'
                  />
                }
                label='PTSD'
              />
              <FormControlLabel
                control={
                  <Checkbox checked={OCD} onChange={handleChange} name='OCD' />
                }
                label='Obsessive Compulsive Disorder'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={socialAnxiety}
                    onChange={handleChange}
                    name='socialAnxiety'
                  />
                }
                label='Social Anxiety'
              />
              <FormControlLabel
                control={
                  <Checkbox
                    checked={eatingDisorder}
                    onChange={handleChange}
                    name='eatingDisorder'
                  />
                }
                label='Eating Disorder'
              />
            </FormGroup>
            <br />
            <TextField
              id='outlined-multiline-static'
              label='Additional Information'
              multiline
              placeholder='Please provide any additional information here'
              rows={2}
            />
            <br />
            <ColorButton type='submit' variant='contained'>
              Submit
            </ColorButton>
          </FormControl>
        </form>
      </Box>
    </div>
  );
}
