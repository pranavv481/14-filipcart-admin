import { render } from '@testing-library/react';
import React from 'react'
import { Navbar, Nav, NavDropdown, Container } from 'react-bootstrap';
import { Link, NavLink } from 'react-router-dom'
import { useSelector, useDispatch } from 'react-redux';
import { signout } from '../../actions';

const Header = () => {
  const dispatch = useDispatch()
  const auth = useSelector(state => state.auth)
    console.log(auth.authenticate)

  const logout = ()=>{
     dispatch(signout())
  }  

  const renderLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <span style={{cursor:"pointer"}} className="nav-link"onClick={logout}>SignOut</span>
        </li>
      </Nav>
    )
  }
  const renderNonLoggedInLinks = () => {
    return (
      <Nav>
        <li className="nav-item">
          <NavLink to="/signin" className="nav-link">Signin</NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/signup" className="nav-link">SignUp</NavLink>
        </li>
      </Nav>
    )
  }

  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" style={{ zIndex: 1 }}>
      <Container fluid>
        <Link to="/" className="navbar-brand">Admin Dashboard</Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">

          </Nav>
          {auth.authenticate ? renderLoggedInLinks() : renderNonLoggedInLinks()}
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default Header
