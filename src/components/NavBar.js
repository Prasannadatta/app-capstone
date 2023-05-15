import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

function NavBar() {
  return (
    <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" sticky="top">
      <Container>
        <Navbar.Brand href="#home" className="nav-text grey-font">DocEditor</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse className="justify-content-end" id="responsive-navbar-nav">
          <Nav>
            <Nav.Link href="/home" className="nav-text">Home</Nav.Link>
            <Nav.Link href="/DocumentEditor" className="nav-text">Editor</Nav.Link>
            {/*<Nav.Link href="#about" className="nav-text">about</Nav.Link>
            <Nav.Link href="#contact" className="nav-text">contact</Nav.Link>*/}
            <Nav.Link href="/" className="nav-text">Logout</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavBar;
