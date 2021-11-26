import { Box } from '@mui/system';
import { getPractitioners } from './helpers';
import { useState, useEffect } from 'react';
import { TextField } from '@material-ui/core';

export default function Card() {
  const [practitioners, setPractitioners] = useState([]);
  const [searchTerm, setSearchTerm] = useState('');
  useEffect(() => {
    getPractitioners().then((practitioners) => setPractitioners(practitioners));
  }, []);

  function updateSearchTerm(event) {
    console.log(event.target.value);
    setSearchTerm(event.target.value);
  }

  const filteredPractitioners = practitioners.filter((practitioner) => {
    if (searchTerm === '') return true;
    for (const key in practitioner) {
      if (
        practitioner[key]
          .toString()
          .toLowerCase()
          .includes(searchTerm.toLowerCase())
      ) {
        return true;
      }
    }
    return false;
  });

  return (
    <div>
      <Box className='clickbox' sx={{ bgcolor: 'background.paper' }}>
        <div>
          <>
            <TextField
              id='outlined-basic'
              label='Search Practitioners'
              onChange={updateSearchTerm}
              variant='outlined'
            />

            <h1 style={{ color: '#f0f0f0' }}>{searchTerm}</h1>
            {filteredPractitioners.map((practitioner) => (
              <p className='practitioner' style={{ color: '#f0f0f0' }}>
                {practitioner.first_name} {practitioner.last_name}{' '}
                <strong>
                  <em>specialty:</em>
                </strong>{' '}
                {practitioner.specialty}
              </p>
            ))}
          </>
        </div>
      </Box>
      <div></div>
    </div>
  );
}
