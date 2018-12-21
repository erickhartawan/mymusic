import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import { withStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
// import './Navbar.css';

const Navbar = () => {
  return (
    <AppBar position="static">
        <Toolbar>
          <IconButton color="inherit" aria-label="Open drawer">
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" color="inherit" noWrap>
            Material-UI
          </Typography>
          <div />
          <div >
            <div>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
            />
          </div>
        </Toolbar>
      </AppBar>
    // <nav className="navbar navbar-dark bg-dark mb-5">
    // <span className="navbar-brand mb-0 h1 mx-auto"> Search for Lyrics</span>
    // </nav>
  )
}

export default Navbar;
