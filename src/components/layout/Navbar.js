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
import SvgIcon from '@material-ui/core/SvgIcon';
import {Link} from 'react-router-dom'
import './Navbar.css';

function HomeIcon(props) {
  return (
    <SvgIcon {...props}>
      <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
    </SvgIcon>
  );
}

const Navbar = () => {
  return (
    <AppBar position="static">
    <div className="d-flex">
      <div>
        <Toolbar>
          <Typography className="title-text" variant="h6" color="inherit" noWrap>
            Welcome page
          </Typography>
          
        </Toolbar>
      </div>
      <div className="ml-auto ">
      <Link to="/">
        <HomeIcon className="homebutton" color="green" />
      </Link>
      </div>
    </div>
      </AppBar>
    // <nav className="navbar navbar-dark bg-dark mb-5">
    // <span className="navbar-brand mb-0 h1 mx-auto"> Search for Lyrics</span>
    // </nav>
  )
}

export default Navbar;
