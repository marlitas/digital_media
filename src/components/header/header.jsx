import './header.css'
import { NavLink, Link } from 'react-router-dom';
import { Navbar, Container, Nav } from 'react-bootstrap';

function header({ title }) {
  return (
    <Navbar collapseOnSelect expand="lg" variant="dark">
      <Navbar.Brand href="/">
        <h1 className="site-title">{title}</h1>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <NavLink activeClassName='active' to='/portfolios'>Portfolios</NavLink>
          <NavLink activeClassName='active' to='/contact'>Contact</NavLink>
          <NavLink activeClassName='active' to='/resources'>Resources</NavLink>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}

export default header
