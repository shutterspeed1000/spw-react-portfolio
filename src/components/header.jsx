import "../App.css";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


function Header() {
  return (
    <div>
     <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Sean Worrell</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="/">Home</Nav.Link>
            <Nav.Link href="/portfolio">Portfolio</Nav.Link>
            <Nav.Link href="/About">About</Nav.Link>
            <Nav.Link href="/SPW - Resume.pdf">Resume</Nav.Link>
            <Nav.Link href="/contact">Contact Me</Nav.Link>
          </Nav>
        </Container>
      </Navbar>



    </div>
  );
}

export default Header;
