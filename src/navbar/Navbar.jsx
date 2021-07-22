import React from 'react';
import { Nav, NavMenu, NavBtn, PlayButton } from './NavbarElements';
import { Link } from 'react-router-dom';
import SignOut from '../components/SignOut';
import { ThemeProvider, Button } from "@playpickup/core";


const Navbar = (props) => {

  return (
    <>
    <ThemeProvider>
      <Nav>
        <NavMenu>
          <Link to='/' activeStyle>
            <Button style={{padding:"10px",margin:"10px",fontSize:"15px" }}>
            Home
            </Button>
          </Link>
          <Link to='/search' activeStyle>
          <Button style={{padding:"10px",margin:"10px",fontSize:"15px" }}>
            Search
          </Button>
          </Link>
        </NavMenu>
        <NavBtn>
          {props.isLoggedIn ?
            <Link to="/">
              <SignOut logout={props.logout} />
            </Link>
            :
            <Link to='/signin'>
            <Button style={{padding:"10px",margin:"10px",fontSize:"15px" }}>
            Sign In
            </Button>
            </Link>
          }
        </NavBtn>
      </Nav>
          </ThemeProvider>
    </>
  );
};

export default Navbar;