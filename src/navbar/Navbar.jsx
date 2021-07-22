import React from 'react';
import { NavLink, Nav, NavMenu, NavBtn, NavBtnLink } from './NavbarElements';
import { Link } from 'react-router-dom';
import SignOut from '../components/SignOut';

const Navbar = (props) => {

  return (
    <>
      <Nav>
        <NavMenu>
          <NavBtnLink to='/' activeStyle>
            Home
          </NavBtnLink>
          <NavBtnLink to='/search' activeStyle>
            Search
          </NavBtnLink>
        </NavMenu>
        <NavBtn>
          {props.isLoggedIn ?
            <Link to="/">
              <SignOut logout={props.logout} />
            </Link>
            :
            <NavBtnLink to='/signin'>Sign In</NavBtnLink>
          }
        </NavBtn>

      </Nav>
    </>
  );
};

export default Navbar;