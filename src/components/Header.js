import React, { useState } from 'react';
import { AppBar, Typography, Toolbar, Tabs, Tab } from '@mui/material';
import LibraryBooksIcon from '@mui/icons-material/LibraryBooks';
import { NavLink } from 'react-router-dom';
const Header = () => {
  const [value, setValue] = useState(0);
  return (
    <div>
      <AppBar position='sticky'>
        <Toolbar>
          <NavLink to='/' style={{ color: 'white' }}>
            <Typography>
              <LibraryBooksIcon />
            </Typography>
          </NavLink>
          <Tabs
            indicatorColor='secondary'
            value={value}
            textColor='inherit'
            onChange={(e, val) => setValue(val)}
            sx={{ marginLeft: 'auto' }}
          >
            <Tab LinkComponent={NavLink} to='/add' label='Add Product' />
            <Tab LinkComponent={NavLink} to='/books' label='Books' />
            <Tab LinkComponent={NavLink} to='/about' label='About Us' />
          </Tabs>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Header;
