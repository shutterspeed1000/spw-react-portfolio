import "../App.css";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function Header({ page }) {
  return (
    <div>
      <header className="navbar">
        <div className="row col-sm-6 col-lg-12">
          <div className="col-2 text-center">
            <h3 className="col-2">Sean Worrell</h3>
          </div>
          <div
            className={`col-2 text-center navitem ${
              page === "/" && "underline"
            }`}
          >
            <a href="/">Home</a>
          </div>
          <div
            className={`col-2 text-center navitem ${
              page === "/about" && "underline"
            }`}
          >
            <a href="/about">About</a>
          </div>
          <div
            className={`col-2 text-center navitem ${
              page === "/portfolio" && "underline"
            }`}
          >
            <a href="/portfolio">Portfolio</a>
          </div>
          <div
            className={`col-2 text-center navitem ${
              page === "/contact" && "underline"
            }`}
          >
            <a href="/contact">Contact</a>
          </div>
          <div
            className={`col-2 text-center navitem ${
              page === "/resume" && "underline"
            }`}
          >
            <a href="/SPW - Resume.pdf">Resume</a>
          </div>
        </div>
      </header>
    </div>
  );
}

export default Header;
