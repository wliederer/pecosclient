import { NavLink as Link } from 'react-router-dom';
import styled from 'styled-components';


export const Nav = styled.nav`
  background: white;
  height: 85px;
  display: flex;
  justify-content: space-between;
  padding: 0.2rem calc((100vw - 1000px) / 2);
  z-index: 12;
`;
  
export const NavLink = styled(Link)`
  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;
  &.active {
    color: #000000;
  }
`;
  
  
export const NavMenu = styled.div`
  display: flex;
  align-items: center;
  margin-left: 24px; 
`;
  
export const NavBtn = styled.nav`
  display: flex;
  align-items: center;
  margin-right: 24px;
  /* Third Nav */
  /* justify-content: flex-end;
  width: 100vw; */
`;
  
export const NavBtnLink = styled(Link)`
  // border-radius: 4px;
  // background: #808080;
  // padding: 10px 22px;
  // color: white;
  // outline: none;
  // border: none;
  // cursor: pointer;
  // transition: all 0.2s ease-in-out;
  // text-decoration: none;
  // /* Second Nav */
  // margin-left: 24px;
  // &:hover {
  //   transition: all 0.2s ease-in-out;
  //   background: #fff;
  //   color: ;
  // }
`;