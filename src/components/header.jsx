import "../App.css";
import Nav from 'react-bootstrap/Nav';

function Header() {
  return (
    <div>

      <div className="headerImg"></div>

      <Nav>

      <Nav.Item>
        <Nav.Link>Sean Worrell</Nav.Link>
      </Nav.Item>        
      <Nav.Item>
        <Nav.Link href="/">Home</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/portfolio">Portfolio</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">About</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/about">Resume</Nav.Link>
      </Nav.Item>
    </Nav>


      </div>

  )
}

export default Header;
