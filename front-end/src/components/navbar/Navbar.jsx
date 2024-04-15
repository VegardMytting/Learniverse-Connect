import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Logo from '../logo/Logo.jsx';
import CartIcon from '../cart/CartIcon.jsx';

import Hamburger from 'hamburger-react';
import { slide as Menu } from 'react-burger-menu';
import {

  MDBContainer,
  MDBCollapse,
  MDBNavbar,
  MDBNavbarToggler,
  MDBIcon,
  MDBBtn,
} from 'mdb-react-ui-kit';
import HamburgerMenu from './hamburger/Hamburger.jsx';
import 'bootstrap/dist/css/bootstrap.min.css';
import './navbar.css';
// import CreateMainPage from '../pages/mainPage/MainPage.jsx';

export default function NavigationBar() {


  return (
    <header>
      <Navbar collapseOnSelect expand='lg' bg='dark' variant='dark' className='NavBar'>
        <Navbar.Brand href='/'>
          <Logo/> Learniverse Connect
        </Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav'/>
        <HamburgerMenu/>
      </Navbar>
      {/* <CreateMainPage expanded={expanded}/> */}
    </header>
  );
};