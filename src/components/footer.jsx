import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

function Footer() {
  return (
    <footer className="footer">
      <div className="row">
        <div className="col-4 text-center">
          <a href="https://github.com/shutterspeed1000">Github</a>
        </div>
        <div className="col-4 text-center">
          <a href="mailto: spworrell@soothedbeast.com">Email</a>
        </div>
        <div className="col-4 text-center">
          <a href="https://www.linkedin.com/in/paul-worrell-1a6662261">
            LinkedIn
          </a>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
