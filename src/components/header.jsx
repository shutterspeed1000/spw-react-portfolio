import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header() {
  return (
    <div>
      <footer className="navbar">
        <div className="row col-12">
          <div className="col-2 text-center">
            <h3>Sean Worrell</h3>
          </div>
          <div className="col-2 text-center navitem">
            <a href="/">Home</a>
          </div>
          <div className="col-2 text-center navitem">
            <a href="/about">About</a>
          </div>
          <div className="col-2 text-center navitem">
            <a href="/portfolio">Portfolio</a>
          </div>
          <div className="col-2 text-center navitem">
            <a href="/contact">Contact</a>
          </div>
          <div className="col-2 text-center navitem">
            <a href="/SPW - Resume.pdf">Resume</a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default Header;
