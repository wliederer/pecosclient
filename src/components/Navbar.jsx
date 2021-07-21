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
            {/* <NavLink to='/social' activeStyle>
              Social
            </NavLink> */}
            <NavLink to='/search' activeStyle>
              Search
            </NavLink>
            <NavBtnLink to='/signup'>Sign Up</NavBtnLink>
          </NavMenu>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign Out</NavBtnLink>
          </NavBtn>
          <NavBtn>
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          </NavBtn>
        </Nav>
      </>
    );
  };
    
  export default Navbar;