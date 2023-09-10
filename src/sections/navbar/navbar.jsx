import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Logo } from '../../logo';
import './navbar.css';


function Header() {
  return (
    <Navbar expand="lg" className="bg-body-tertiary pe-5 ps-5" >
      <Container fluid>
        <Navbar.Brand href="#">
            <Logo />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className='justify-content-end ' >
          <Nav 
            className="my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link className='ms-5' href="#action1" >Solutions</Nav.Link>
            <Nav.Link className='ms-5' href="#action2">Industries</Nav.Link>
            
            <NavDropdown className='ms-5' title="Resources" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">Research and Dissemination
              <p className='navparagrafo'>News and articles about products and services</p>
              </NavDropdown.Item>
              <NavDropdown.Item href="#action4">
              Security
              <p className='navparagrafo'>Protection of your data</p>
              </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action5">
              Customer support
              </NavDropdown.Item>
            </NavDropdown>

          </Nav>
          <Button className='ms-5 rounded-5' variant="primary">Contact sales</Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;