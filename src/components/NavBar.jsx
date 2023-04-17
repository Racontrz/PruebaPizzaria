import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { NavLink } from 'react-router-dom';


function NavBar() {
  return (
    <Navbar bg="warning" variant="warning" expand="lg">
      <Container fluid>
        <NavLink className='ms-5 nav-link text-light fs-3'  to='/'>
          Pizzería Mamma Mia! 
        </NavLink>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="justify-content-end me-5" >
          <Nav >
            <NavLink className='nav-link' to='/pizzas'>Pizzas</NavLink>
            <NavLink className='nav-link' to='/cart'>Carrito</NavLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;