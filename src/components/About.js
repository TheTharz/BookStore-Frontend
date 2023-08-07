import React from 'react';
import { Box, Typography } from '@mui/material';
const About = () => {
  return (
    <div>
      <Box display='flex' flexDirection='column' alignItems='center'>
        <Typography variant='h2' sx={{ fontFamily: 'fantasy' }}>
          This is a crud application
        </Typography>
        <Typography variant='h3' sx={{ fontFamily: 'fantasy' }}>
          by mern stack
        </Typography>
      </Box>
    </div>
  );
};

export default About;
