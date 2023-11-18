import Prjcard from "../components/prjcard";

import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

const projects = {
title: "Vacationator",
link: "microsoft.com",
}



export default function Portfolio() {
  return (
  <div>
      <h1>Portfolio</h1>
      <Container>
      <Row>
        <Col sm={6}><Prjcard /></Col>
        <Col sm={6}><Prjcard /></Col>
      </Row>
      <Row>
      <Col sm={6}><Prjcard /></Col>
      <Col sm={6}><Prjcard /></Col>
      </Row>
    </Container>
    </div>
  );
}
