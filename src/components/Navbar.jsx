import React from 'react';
import { NavLink, Nav, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';

const Navbar = () => {
    return (
      <>
        <Nav>
          
          <NavMenu>
            <NavLink to='/' activeStyle>
              Home
            </NavLink>
            <NavLink to='/social' activeStyle>
              Social
            </NavLink>
            <NavLink to='/search' activeStyle>
              Search
            </NavLink>
            {/* Second Nav */}
            {/* <NavBtnLink to='/sign-in'>Sign In</NavBtnLink> */}
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };
    
  export default Navbar;