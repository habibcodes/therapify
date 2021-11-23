import { Box } from "@mui/system"
import { FormControl, InputLabel, Input, FormHelperText, Typography } from '@mui/material'
export default function Card() {


  return (
    <div>
        
    <Box className="clickbox" sx={{ bgcolor: 'background.paper' }}>
    <div>
    <FormControl>
    <Typography>
      Confidential
      </Typography>
      
  <InputLabel htmlFor="my-input">Name</InputLabel>
  <Input id="my-input" aria-describedby="my-helper-text" />
  
</FormControl> 
      </div>
     
      </Box>
      <div>
        
      </div>


    </div>
  )
}